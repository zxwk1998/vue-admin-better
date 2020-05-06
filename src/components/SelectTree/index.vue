<template>
  <div class="select-tree-template">
    <el-select
      v-model="selectValue"
      :clearable="clearable"
      :collapse-tags="selectType == 'multiple'"
      :multiple="selectType == 'multiple'"
      class="byui-tree-select"
      value-key="id"
      @clear="clearHandle"
      @remove-tag="removeTag"
    >
      <el-option :value="selectKey">
        <el-tree
          id="treeOption"
          ref="treeOption"
          :current-node-key="currentNodeKey"
          :data="treeOptions"
          :default-checked-keys="defaultSelectedKeys"
          :default-expanded-keys="defaultSelectedKeys"
          :highlight-current="true"
          :props="defaultProps"
          :show-checkbox="selectType == 'multiple'"
          node-key="id"
          @check="checkNode"
          @node-click="nodeClick"
        ></el-tree>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "SelectTreeTemplate",
  props: {
    /* 树形结构数据 */
    treeOptions: {
      type: Array,
      default: () => {
        return [];
      },
    },
    /* 单选/多选 */
    selectType: {
      type: String,
      default: () => {
        return "single";
      },
    },
    /* 初始选中值key */
    selectedKey: {
      type: String,
      default: () => {
        return "";
      },
    },
    /* 初始选中值name */
    selectedValue: {
      type: String,
      default: () => {
        return "";
      },
    },
    /* 可做选择的层级 */
    selectLevel: {
      type: [String, Number],
      default: () => {
        return "";
      },
    },
    /* 可清空选项 */
    clearable: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
  },
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "name",
      },
      defaultSelectedKeys: [], //初始选中值数组
      currentNodeKey: this.selectedKey,
      selectValue:
        this.selectType == "multiple"
          ? this.selectedValue.split(",")
          : this.selectedValue, //下拉框选中值label
      selectKey:
        this.selectType == "multiple"
          ? this.selectedKey.split(",")
          : this.selectedKey, //下拉框选中值value
    };
  },
  mounted() {
    const that = this;
    this.initTree();
  },
  methods: {
    // 初始化树的值
    initTree() {
      const that = this;
      if (that.selectedKey) {
        that.defaultSelectedKeys = that.selectedKey.split(","); // 设置默认展开
        if (that.selectType == "single") {
          that.$refs.treeOption.setCurrentKey(that.selectedKey); // 设置默认选中
        } else {
          that.$refs.treeOption.setCheckedKeys(that.defaultSelectedKeys);
        }
      }
    },
    // 清除选中
    clearHandle() {
      const that = this;
      this.selectValue = "";
      this.selectKey = "";
      this.defaultSelectedKeys = [];
      this.currentNodeKey = "";
      this.clearSelected();
      if (that.selectType == "single") {
        that.$refs.treeOption.setCurrentKey(""); // 设置默认选中
      } else {
        that.$refs.treeOption.setCheckedKeys([]);
      }
    },
    /* 清空选中样式 */
    clearSelected() {
      const allNode = document.querySelectorAll("#treeOption .el-tree-node");
      allNode.forEach((element) => element.classList.remove("is-current"));
    },
    // select多选时移除某项操作
    removeTag(val) {
      this.$refs.treeOption.setCheckedKeys([]);
    },
    // 点击叶子节点
    nodeClick(data, node, el) {
      if (data.rank >= this.selectLevel) {
        this.selectValue = data.name;
        this.selectKey = data.id;
      }
    },
    // 节点选中操作
    checkNode(data, node, el) {
      const checkedNodes = this.$refs.treeOption.getCheckedNodes();
      const keyArr = [];
      const valueArr = [];
      checkedNodes.forEach((item) => {
        if (item.rank >= this.selectLevel) {
          keyArr.push(item.id);
          valueArr.push(item.name);
        }
      });
      this.selectValue = valueArr;
      this.selectKey = keyArr;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
  height: auto;
  max-height: 274px;
  padding: 0;
  overflow-y: auto;
}

.el-select-dropdown__item.selected {
  font-weight: normal;
}

ul li > .el-tree .el-tree-node__content {
  height: auto;
  padding: 0 20px;
}

.el-tree-node__label {
  font-weight: normal;
}

.el-tree > .is-current .el-tree-node__label {
  font-weight: 700;
  color: #409eff;
}

.el-tree > .is-current .el-tree-node__children .el-tree-node__label {
  font-weight: normal;
  color: #606266;
}
</style>
<style lang="scss">
/* .byui-tree-select{
      .el-tag__close.el-icon-close{
        width:0;
        overflow:hidden;
      }
    } */
</style>
