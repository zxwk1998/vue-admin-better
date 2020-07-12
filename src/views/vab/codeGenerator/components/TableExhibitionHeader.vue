<template>
  <div class="table-header">
    <draggable
      v-model="tableHeaders"
      group="people"
      @change="set"
      @end="drag = false"
      @start="drag = true"
    >
      <div v-for="header in tableHeaders" :key="header.key">
        <el-popover placement="right" trigger="focus">
          <el-tooltip
            :content="`该字段${
              header.opt === '' ? '未' : ''
            }置于template标签内，置于template方便自定义`"
            class="item"
            effect="dark"
            placement="top-start"
          >
            <el-button v-if="header.opt === ''" @click="opt(header, 'template')"
              >{{ header.opt ? "点击关闭自定义" : "点击开启自定义" }}
            </el-button>
            <el-button v-else @click="opt(header, '')"
              >{{ header.opt ? "点击关闭自定义" : "点击开启自定义" }}
            </el-button>
          </el-tooltip>
          <el-tooltip
            :content="`该字段在表格中${header.show ? '显示' : '隐藏'}`"
            class="item"
            effect="dark"
            placement="top-start"
          >
            <el-button @click="hide(header)"
              >{{ header.show ? "点击隐藏字段" : "点击显示字段" }}
            </el-button>
          </el-tooltip>
          <div slot="reference" class="table-header-card">
            <el-tag>{{ header.key }}对应的标题名称</el-tag>
            <div>
              <el-input
                v-model="header.label"
                :placeholder="header.label + '对应的字段名称'"
              />
            </div>
          </div>
        </el-popover>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  props: {
    headers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tableHeaders: this.headers,
    };
  },
  watch: {
    headers(val) {
      this.tableHeaders = val;
    },
  },
  methods: {
    set() {
      this.$emit("update:headers", this.tableHeaders);
    },
    show(header) {
      header.show = true;
    },
    hide(header) {
      header.show = !header.show;
    },
    opt(header, opt) {
      header.opt = opt;
    },
    query(header, query) {
      header.query = query;
    },
  },
};
</script>
<style scoped>
.table-header-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 0;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}

.table-header >>> .el-input__inner {
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
}

.el-popover {
  min-width: 100px !important;
}
</style>
