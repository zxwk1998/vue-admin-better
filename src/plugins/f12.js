import { shieldF12 } from "@/config/settings";

if (process.env.NODE_ENV !== "development") {
  if (shieldF12) {
    document.onkeydown = function () {
      if (window.event && window.event.keyCode === 123) {
        event.keyCode = 0;
        event.returnValue = false;
      }
      if (
        window.event.ctrlKey &&
        window.event.shiftKey &&
        window.event.keyCode === 73
      ) {
        event.keyCode = 0;
        event.returnValue = false;
      }
    };
    document.oncontextmenu = function (event) {
      if (window.event) {
        event = window.event;
      }
      try {
        const the = event.srcElement;
        if (
          !(
            (the.tagName === "INPUT" && the.type.toLowerCase() === "text") ||
            the.tagName === "TEXTAREA"
          )
        ) {
          return false;
        }
        return true;
      } catch (e) {
        return false;
      }
    };
  }
}
