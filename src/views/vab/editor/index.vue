<template>
  <div class="editor-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" maxlength="20"></el-input>
      </el-form-item>
      <el-form-item label="所属模块" prop="module">
        <el-select v-model="form.module">
          <el-option label="新闻动态" value="1"></el-option>
          <el-option label="实时热点" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <quill-editor
          v-model="form.content"
          :style="{
            height: '400px',
            border: '1px solid ' + borderColor,
          }"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @change="onEditorChange($event)"
        ></quill-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSee">预览效果 </el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
      </el-form-item>
    </el-form>
    <el-dialog title="预览效果" :visible.sync="dialogTableVisible">
      <div style="min-height: 60vh;">
        <h1 class="news-title">{{ form.title }}</h1>
        <div class="news-content" v-html="form.content"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  name: "Editor",
  components: { quillEditor },
  data() {
    return {
      borderColor: "#dcdfe6",
      dialogTableVisible: false,
      form: {
        title: "",
        module: "",
        content: "",
      },
      editorOption: {
        placeholder: "",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"],
          ],
        },
      },
      rules: {
        title: [
          {
            required: true,
            message: "请输入标题",
            trigger: "blur",
          },
        ],
        module: [
          {
            required: true,
            message: "请选择模块",
            trigger: "change",
          },
        ],
        content: [
          {
            required: true,
            message: "请输入内容",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onEditorBlur(quill) {
      // 失去焦点事件

      this.$refs.form.validateField("content", (errorMsg) => {
        this.borderColor = "#dcdfe6";
        if (errorMsg) {
          this.borderColor = "#F56C6C";
        }
      });
    },
    onEditorChange({ quill, html, text }) {
      // 内容改变事件
      this.form.content = html;
    },
    handleSee() {
      this.$refs["form"].validate((valid) => {
        this.$refs.form.validateField("content", (errorMsg) => {
          this.borderColor = "#dcdfe6";
          if (errorMsg) {
            this.borderColor = "#F56C6C";
          }
        });
        if (valid) {
          this.dialogTableVisible = true;
        } else {
          return false;
        }
      });
    },
    handleSave() {
      this.$refs["form"].validate((valid) => {
        this.$refs.form.validateField("content", (errorMsg) => {
          this.borderColor = "#dcdfe6";
          if (errorMsg) {
            this.borderColor = "#F56C6C";
          }
        });
        if (valid) {
          this.$baseMessage("submit!", "success");
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.news {
  &-title {
    text-align: center;
  }

  &-content {
    ::v-deep {
      p {
        line-height: 30px;

        img {
          display: block;
          margin-right: auto;
          margin-left: auto;
        }
      }
    }
  }
}
</style>
