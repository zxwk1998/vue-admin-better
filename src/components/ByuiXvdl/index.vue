<template>
  <canvas :id="id" height="450" width="800"></canvas>
</template>
<script>
const wkArr = [];
let ws;
export default {
  name: "ByuiXvdl",
  props: {
    url: {
      type: String,
      default: "",
    },
    sessionId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      id: this.getUuid(),
    };
  },
  beforeDestroy() {
    if (typeof wkArr != "undefined") {
      wkArr.forEach((index, item) => {
        item.postMessage({
          cmd: "close",
        });
      });
    }
    if (typeof ws != "undefined") {
      ws.close();
    }
  },
  mounted() {
    this.$nextTick(() => {
      const canvas = document.getElementById(this.id);
      this.init_rplay(this.url, canvas, this.sessionId);
    });
  },
  methods: {
    getUuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
        c
      ) {
        const r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },
    init_rplay(url, canvas, initmsg, readycb) {
      const cxt = canvas.getContext("2d");
      if (!cxt) return;
      cxt.imageSmoothingEnabled = true;
      let cw = canvas.width,
        ch = canvas.height;
      let cvs2, cxt2;
      let imgw, imgh, imgd;
      const wk = new Worker("xvid/worker.js");
      wkArr.push(wk);
      wk.addEventListener("message", function (msg) {
        switch (msg.data.cmd) {
          case "decode_image":
            imgd.data.set(new Uint8ClampedArray(msg.data.data));
            wk.postMessage(
              {
                cmd: "bufback",
                data: msg.data.data,
              },
              [msg.data.data]
            );
            if (cw == imgw && ch == imgh) {
              cxt.putImageData(imgd, 0, 0);
            } else {
              cxt2.putImageData(imgd, 0, 0);
              cxt.drawImage(cvs2, 0, 0, imgw, imgh, 0, 0, cw, ch);
            }
            break;
          case "wasmLoaded":
            {
              const ws = new WebSocket(url);
              ws.binaryType = "arraybuffer";
              ws.onopen = function () {
                if (initmsg) ws.send(initmsg);
              };
              ws.onmessage = function (e) {
                const rawbuf = e.data;
                switch (rawbuf.byteLength) {
                  case 8:
                    {
                      const cmdbuf = new Uint32Array(rawbuf);
                      imgw = cmdbuf[0];
                      imgh = cmdbuf[1];
                      imgd = cxt.createImageData(imgw, imgh);
                      cvs2 = document.createElement("canvas");
                      cvs2.width = imgw;
                      cvs2.height = imgh;
                      cxt2 = cvs2.getContext("2d");

                      wk.postMessage({
                        cmd: "init",
                        w: imgw,
                        h: imgh,
                      });
                    }
                    break;
                  default:
                    {
                      wk.postMessage(
                        {
                          cmd: "frame",
                          data: rawbuf,
                        },
                        [rawbuf]
                      );
                    }
                    break;
                }
              };
              ws.onclose = function () {
                wk.postMessage({
                  cmd: "close",
                });
              };

              ws.update_size = function () {
                cw = canvas.width;
                ch = canvas.height;
                if (cvs2) cxt.drawImage(cvs2, 0, 0, imgw, imgh, 0, 0, cw, ch);
              };
              window.addEventListener("beforeunload", () => {
                ws.close();
              });
              if (readycb) readycb(ws);
            }
            break;
          default:
            break;
        }
      });
    },
  },
};
</script>
<style lang="scss"></style>
