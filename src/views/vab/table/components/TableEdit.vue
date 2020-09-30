<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogFormVisible"
    width="500px"
    @close="close"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="标题" prop="title">
        <el-input v-model.trim="form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input v-model.trim="form.author" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { doEdit } from "@/api/table";

  export default {
    name: "TableEdit",
    data() {
      return {
        form: {
          title: "",
          author: "",
        },
        rules: {
          title: [{ required: true, trigger: "blur", message: "请输入标题" }],
          author: [{ required: true, trigger: "blur", message: "请输入作者" }],
        },
        title: "",
        dialogFormVisible: false,
      };
    },
    created() {},
    methods: {
      showEdit(row) {
        if (!row) {
          this.title = "添加";
        } else {
          this.title = "编辑";
          this.form = Object.assign({}, row);
        }
        this.dialogFormVisible = true;
      },
      close() {
        this.$refs["form"].resetFields();
        this.form = this.$options.data().form;
        this.dialogFormVisible = false;
        this.$emit("fetch-data");
      },
      save() {
        this.$refs["form"].validate(async (valid) => {
          if (valid) {
            const { msg } = await doEdit(this.form);
            this.$baseMessage(msg, "success");
            this.$refs["form"].resetFields();
            this.dialogFormVisible = false;
            this.$emit("fetch-data");
            this.form = this.$options.data().form;
          } else {
            return false;
          }
        });
      },
    },
  };
</script>
