<template>
  <div class="table-query">
    <div>
      <el-button type="primary" @click="openCodeDialog">查看代码</el-button>
      <el-button type="primary" @click="handleClipboard(srcTableCode, $event)">
        复制代码
      </el-button>
    </div>
    <el-dialog destroy-on-close title="查看代码" :visible.sync="dialogVisible">
      <textarea v-show="false" ref="code" v-model="srcTableCode"></textarea>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="closeCodeDialog(srcTableCode, $event)"
        >
          复制代码
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import clipboard from "@/utils/clipboard";
  import CodeMirror from "codemirror";

  export default {
    props: {
      headers: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        dialogVisible: false,
      };
    },
    computed: {
      ...mapGetters({ srcTableCode: "table/srcTableCode" }),
    },
    methods: {
      handleClipboard(text, event) {
        clipboard(text, event);
      },
      openCodeDialog() {
        this.dialogVisible = true;
        setTimeout(() => {
          CodeMirror.fromTextArea(this.$refs.code, {
            lineNumbers: true,
            gutters: ["CodeMirror-lint-markers"],
            theme: "rubyblue",
            autoRefresh: true,
            lint: true,
          });
        }, 0);
      },
      closeCodeDialog(text, event) {
        this.handleClipboard(text, event);
        this.dialogVisible = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .table-query {
    display: flex;
    justify-content: flex-end;
    height: 45px;

    ::v-deep {
      .CodeMirror {
        height: auto;
        min-height: calc(100vh - 420px);
      }
    }
  }
</style>
