<template>
  <div class="json-editor">
    <label>
      <textarea ref="textarea" />
    </label>
  </div>
</template>

<script>
import CodeMirror from "codemirror";
import "codemirror/addon/lint/lint.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/rubyblue.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/json-lint";

require("script-loader!jsonlint");

export default {
  name: "JsonEditor",
  props: {
    value: {
      type: [Array, Object],
      default: () => {
        return null;
      },
    },
  },
  data() {
    return {
      jsonEditor: false,
    };
  },
  watch: {
    value(value) {
      const editorValue = this.jsonEditor.getValue();

      if (editorValue) {
        this.$emit("change", editorValue);
      } else {
        this.$baseMessage("JSON不能为空,否则无法生成表格", "error");
      }
      if (value !== editorValue) {
        this.jsonEditor.setValue(JSON.stringify(this.value, null, 2));
      }
    },
  },
  mounted() {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: "application/json",
      gutters: ["CodeMirror-lint-markers"],
      theme: "rubyblue",
      lint: true,
    });

    this.jsonEditor.setValue(JSON.stringify(this.value, null, 2));
    this.jsonEditor.on("change", (cm) => {
      if (this.isJsonString(cm.getValue())) {
        this.$emit("change", cm.getValue());
      }
    });
  },
  methods: {
    getValue() {
      return this.jsonEditor.getValue();
    },
    isJsonString(str) {
      try {
        if (typeof JSON.parse(str) == "object") {
          return true;
        }
      } catch (e) {}
      return false;
    },
  },
};
</script>

<style scoped>
.json-editor {
  position: relative;
  height: 100%;
}

.json-editor >>> .CodeMirror {
  height: auto;
  min-height: calc(100vh - 220px);
}

.json-editor >>> .CodeMirror-scroll {
  min-height: calc(100vh - 220px);
}

.json-editor >>> .cm-s-rubyblue span.cm-string {
  color: #f08047;
}

.json-editor >>> .cm-s-rubyblue .CodeMirror-gutters {
  padding-right: 10px;

  /* background: transparent; */
  border-right: 1px solid #fff;
}

.json-editor >>> .cm-s-rubyblue.CodeMirror {
  /* background: #08233e; */
  color: white;
}
</style>
