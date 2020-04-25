<template>
  <div class="webUploader-container">
    <div id="wrapper">
      <div id="container">
        <!--头部，相册选择和格式选择-->
        <div id="uploader">
          <div class="queueList">
            <div id="dndArea" class="placeholder">
              <div id="filePicker"></div>
              <p>或将照片拖到这里，单次最多可选500张</p>
            </div>
          </div>
          <div class="statusBar" style="display: none;">
            <div class="progress">
              <span class="text">0%</span>
              <span class="percentage"></span>
            </div>
            <div class="info"></div>
            <div class="btns">
              <div id="filePicker2"></div>
              <div class="uploadBtn">开始上传</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebUploader from "webuploader";
import { tokenName } from "@/config/settings";

export default {
  name: "WebUploader",
  components: {},
  data() {
    return {
      action: "",
      api: "",
      headers: {},
    };
  },
  created() {
    if ("development" === process.env.NODE_ENV) {
      this.api = process.env.VUE_APP_BASE_API;
    } else {
      this.api = `${window.location.protocol}//${window.location.host}`;
    }

    this.action = this.api + "/upload";
    this.headers[tokenName] = this.$baseAccessToken();
  },
  mounted() {
    let that = this;
    let $wrap = $("#uploader"),
      // 图片容器
      $queue = $('<ul class="filelist"></ul>').appendTo(
        $wrap.find(".queueList")
      ),
      // 状态栏，包括进度和控制按钮
      $statusBar = $wrap.find(".statusBar"),
      // 文件总体选择信息。
      $info = $statusBar.find(".info"),
      // 上传按钮
      $upload = $wrap.find(".uploadBtn"),
      // 没选择文件之前的内容。
      $placeHolder = $wrap.find(".placeholder"),
      $progress = $statusBar.find(".progress").hide(),
      // 添加的文件数量
      fileCount = 0,
      // 添加的文件总大小
      fileSize = 0,
      // 优化retina, 在retina下这个值是2
      ratio = window.devicePixelRatio || 1,
      // 缩略图大小
      thumbnailWidth = 110 * ratio,
      thumbnailHeight = 110 * ratio,
      // 可能有pedding, ready, uploading, confirm, done.
      state = "pedding",
      // 所有文件的进度信息，key为file id
      percentages = {},
      // 判断浏览器是否支持图片的base64
      isSupportBase64 = (() => {
        let data = new Image();
        let support = true;
        data.onload = data.onerror = () => {
          if (this.width != 1 || this.height != 1) {
            support = false;
          }
        };
        data.src =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        return support;
      })(),
      supportTransition = (() => {
        let s = document.createElement("p").style,
          r =
            "transition" in s ||
            "WebkitTransition" in s ||
            "MozTransition" in s ||
            "msTransition" in s ||
            "OTransition" in s;
        s = null;
        return r;
      })(),
      // WebUploader实例
      uploader;

    // 实例化
    uploader = WebUploader.create({
      pick: {
        id: "#filePicker",
        label: "点击选择图片",
      },
      formData: {
        uid: 123,
      },
      dnd: "#dndArea",
      paste: "#uploader",
      chunked: false,
      chunkSize: 512 * 1024,
      server: this.action,
      disableGlobalDnd: true,
      fileNumLimit: 500,
      fileSizeLimit: 500 * 1024 * 1024,
      fileSingleSizeLimit: 1 * 1024 * 1024,
      thread: 100,
    });

    // 拖拽时不接受 js, txt 文件。
    uploader.on("dndAccept", (items) => {
      let denied = false,
        len = items.length,
        i = 0,
        // 修改js类型
        unAllowed = "text/plain;application/javascript ";

      for (; i < len; i++) {
        // 如果在列表里面
        if (~unAllowed.indexOf(items[i].type)) {
          denied = true;
          break;
        }
      }

      return !denied;
    });
    uploader.on("uploadBeforeSend", (obj, data, headers) => {
      Object.assign(headers, this.headers);
    });
    // 添加“添加文件”的按钮，
    uploader.addButton({
      id: "#filePicker2",
      label: "继续添加",
    });

    uploader.on("ready", () => {
      window.uploader = uploader;
    });

    // 当有文件添加进来时执行，负责view的创建
    function addFile(file) {
      let $li = $(
          '<li id="' +
            file.id +
            '">' +
            '<p class="title">' +
            file.name +
            "</p>" +
            '<p class="imgWrap"></p>' +
            '<p class="progress"><span></span></p>' +
            "</li>"
        ),
        $btns = $(
          '<div class="file-panel">' +
            '<span class="cancel">删除</span>' +
            '<span class="rotateRight">向右旋转</span>' +
            '<span class="rotateLeft">向左旋转</span></div>'
        ).appendTo($li),
        $prgress = $li.find("p.progress span"),
        $wrap = $li.find("p.imgWrap"),
        $info = $('<p class="error"></p>'),
        showError = (code) => {
          let text = "";
          switch (code) {
            case "exceed_size":
              text = "文件大小超出";
              break;

            case "interrupt":
              text = "上传暂停";
              break;

            default:
              text = "上传失败，请重试";
              break;
          }

          $info.text(text).appendTo($li);
        };

      if (file.getStatus() === "invalid") {
        showError(file.statusText);
      } else {
        // @todo lazyload
        $wrap.text("预览中");
        uploader.makeThumb(
          file,
          (error, src) => {
            let img;

            if (error) {
              $wrap.text("不能预览");
              return;
            }

            if (isSupportBase64) {
              img = $('<img src="' + src + '">');
              $wrap.empty().append(img);
            } else {
              $.ajax("../../server/preview.php", {
                method: "POST",
                data: src,
                dataType: "json",
              }).done((response) => {
                if (response.result) {
                  img = $('<img src="' + response.result + '">');
                  $wrap.empty().append(img);
                } else {
                  $wrap.text("预览出错");
                }
              });
            }
          },
          thumbnailWidth,
          thumbnailHeight
        );

        percentages[file.id] = [file.size, 0];
        file.rotation = 0;
      }

      file.on("statuschange", (cur, prev) => {
        if (prev === "progress") {
          $prgress.hide().width(0);
        } else if (prev === "queued") {
          $li.off("mouseenter mouseleave");
          $btns.remove();
        }

        // 成功
        if (cur === "error" || cur === "invalid") {
          console.log(file.statusText);
          showError(file.statusText);
          percentages[file.id][1] = 1;
        } else if (cur === "interrupt") {
          showError("interrupt");
        } else if (cur === "queued") {
          percentages[file.id][1] = 0;
        } else if (cur === "progress") {
          $info.remove();
          $prgress.css("display", "block");
        } else if (cur === "complete") {
          $li.append('<span class="success"></span>');
        }

        $li.removeClass("state-" + prev).addClass("state-" + cur);
      });

      $li.on("mouseenter", () => {
        $btns.stop().animate({ height: 30 });
      });

      $li.on("mouseleave", () => {
        $btns.stop().animate({ height: 0 });
      });

      $btns.on("click", "span", () => {
        let index = $(this).index(),
          deg;

        switch (index) {
          case 0:
            uploader.removeFile(file);
            return;

          case 1:
            file.rotation += 90;
            break;

          case 2:
            file.rotation -= 90;
            break;
        }

        if (supportTransition) {
          deg = "rotate(" + file.rotation + "deg)";
          $wrap.css({
            "-webkit-transform": deg,
            "-mos-transform": deg,
            "-o-transform": deg,
            transform: deg,
          });
        } else {
          $wrap.css(
            "filter",
            "progid:DXImageTransform.Microsoft.BasicImage(rotation=" +
              (~~(((file.rotation / 90) % 4) + 4) % 4) +
              ")"
          );
        }
      });

      $li.appendTo($queue);
    }

    // 负责view的销毁
    function removeFile(file) {
      let $li = $("#" + file.id);

      delete percentages[file.id];
      updateTotalProgress();
      $li.off().find(".file-panel").off().end().remove();
    }

    function updateTotalProgress() {
      let loaded = 0,
        total = 0,
        spans = $progress.children(),
        percent;

      $.each(percentages, (k, v) => {
        total += v[0];
        loaded += v[0] * v[1];
      });

      percent = total ? loaded / total : 0;

      spans.eq(0).text(Math.round(percent * 100) + "%");
      spans.eq(1).css("width", Math.round(percent * 100) + "%");
      updateStatus();
    }

    function updateStatus() {
      let text = "",
        stats;

      if (state === "ready") {
        text =
          "选中" +
          fileCount +
          "张图片，共" +
          WebUploader.formatSize(fileSize) +
          "。";
      } else if (state === "confirm") {
        stats = uploader.getStats();
        if (stats.uploadFailNum) {
          text =
            "已成功上传" +
            stats.successNum +
            "张照片至XX相册，" +
            stats.uploadFailNum +
            '张照片上传失败，<a class="retry" href="#">重新上传</a>失败图片或<a class="ignore" href="#">忽略</a>';
        }
      } else {
        stats = uploader.getStats();
        text =
          "共" +
          fileCount +
          "张（" +
          WebUploader.formatSize(fileSize) +
          "），已上传" +
          stats.successNum +
          "张";

        if (stats.uploadFailNum) {
          text += "，失败" + stats.uploadFailNum + "张";
        }
      }

      $info.html(text);
    }

    function setState(val) {
      let file, stats;

      if (val === state) {
        return;
      }

      $upload.removeClass("state-" + state);
      $upload.addClass("state-" + val);
      state = val;

      switch (state) {
        case "pedding":
          $placeHolder.removeClass("element-invisible");
          $queue.hide();
          $statusBar.addClass("element-invisible");
          uploader.refresh();
          break;

        case "ready":
          $placeHolder.addClass("element-invisible");
          $("#filePicker2").removeClass("element-invisible");
          $queue.show();
          $statusBar.removeClass("element-invisible");
          uploader.refresh();
          break;

        case "uploading":
          $("#filePicker2").addClass("element-invisible");
          $progress.show();
          $upload.text("暂停上传");
          break;

        case "paused":
          $progress.show();
          $upload.text("继续上传");
          break;

        case "confirm":
          $progress.hide();
          $("#filePicker2").removeClass("element-invisible");
          $upload.text("开始上传");

          stats = uploader.getStats();
          if (stats.successNum && !stats.uploadFailNum) {
            setState("finish");
            return;
          }
          break;
        case "finish":
          stats = uploader.getStats();
          if (stats.successNum) {
            that.$baseMessage("上传成功", "success");
          } else {
            // 没有成功的图片，重设
            state = "done";
            location.reload();
          }
          break;
      }

      updateStatus();
    }

    uploader.onUploadProgress = (file, percentage) => {
      let $li = $("#" + file.id),
        $percent = $li.find(".progress span");

      $percent.css("width", percentage * 100 + "%");
      percentages[file.id][1] = percentage;
      updateTotalProgress();
    };

    uploader.onFileQueued = (file) => {
      fileCount++;
      fileSize += file.size;

      if (fileCount === 1) {
        $placeHolder.addClass("element-invisible");
        $statusBar.show();
      }

      addFile(file);
      setState("ready");
      updateTotalProgress();
    };

    uploader.onFileDequeued = (file) => {
      fileCount--;
      fileSize -= file.size;

      if (!fileCount) {
        setState("pedding");
      }

      removeFile(file);
      updateTotalProgress();
    };

    uploader.on("all", (type) => {
      let stats;
      switch (type) {
        case "uploadFinished":
          setState("confirm");
          break;

        case "startUpload":
          setState("uploading");
          break;

        case "stopUpload":
          setState("paused");
          break;
      }
    });

    uploader.onError = (code) => {
      console.log(code);
      let message = "";
      if ("F_EXCEED_SIZE" === code) {
        message = "文件数量大小超出预设值";
      }
      if ("F_DUPLICATE" === code) {
        message = "过滤重复文件";
      }
      if ("Q_EXCEED_NUM_LIMIT" === code) {
        message = "文件数量超出预设值";
      }
      if ("Q_EXCEED_SIZE_LIMIT" === code) {
        message = "文件总大小超出预设值";
      }
      if ("Q_EXCEED_SIZE_LIMIT" === code) {
        message = "当文件类型不满足时触发";
      }

      setTimeout(() => {
        that.$baseMessage(message, "error");
      });
    };

    $upload.on("click", () => {
      if ($(this).hasClass("disabled")) {
        return false;
      }

      if (state === "ready") {
        uploader.upload();
      } else if (state === "paused") {
        uploader.upload();
      } else if (state === "uploading") {
        uploader.stop();
      }
    });

    $info.on("click", ".retry", () => {
      uploader.retry();
    });

    $info.on("click", ".ignore", () => {
      that.$baseMessage("todo", "error");
    });

    $upload.addClass("state-" + state);
    updateTotalProgress();
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~webuploader/css/webuploader.css";
@import "~@/views/byui/webUploader/static/style.css";

.webUploader-container {
}
</style>
