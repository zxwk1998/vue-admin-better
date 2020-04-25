<template>
  <div class="tree-container">
    <p>
      树形菜单分为两种渲染方式：一种数据量不多直接返回整棵树，另一种在数据量很多的情况下采用懒加载
    </p>
    <br />
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="grid-content bg-pruple tree-box">
          <p>
            接口直接返回整棵树：目前支持功能——关键字过滤、自定义操作（添加、编辑、删除...）、初始树显示三层结构（openTree的n传入数值决定）、树的多选操作监听、点击树监听
          </p>
          <br />
          <el-input v-model="filterText" placeholder="输入关键字过滤" />
          <el-tree
            ref="demoTree"
            :data="data2"
            :default-checked-keys="defaultCheckedKeys"
            :default-expanded-keys="defaultExpendedKeys"
            :expand-on-click-node="false"
            :filter-node-method="filterNode"
            :highlight-current="true"
            :props="defaultProps"
            class="byui-filter-tree"
            node-key="id"
            show-checkbox
            @check="checkNode"
            @node-click="nodeClick"
            @node-collapse="nodeCollapse"
            @node-expand="nodeExpand"
          >
            <span slot-scope="{ node, data }" class="byui-custom-tree-node">
              <span class="byui-tree-item">
                <i v-if="node.data.rank == 4" class="el-icon-s-custom"></i>
                {{ node.label }}
              </span>
              <span class="byui-tree-options">
                <a
                  v-if="node.data.rank !== 4"
                  class="byui-tree-btn"
                  title="添加"
                  @click="() => append(node, data, 0)"
                  ><i class="el-icon-plus"></i
                ></a>
                <a
                  class="byui-tree-btn"
                  title="编辑"
                  @click="() => edit(node, data, 1)"
                  ><i class="el-icon-edit"></i
                ></a>
                <a
                  v-if="node.data.rank !== 1"
                  class="byui-tree-btn"
                  title="刪除"
                  @click="() => remove(node, data)"
                  ><i class="el-icon-delete"></i
                ></a>
              </span>
            </span>
          </el-tree>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="grid-content bg-pruple tree-box">
          <br />
          <p>
            数据量很多的情况下采用懒加载：目前支持功能——关键字过滤功能
          </p>
          <br />
          <el-input
            v-model.lazy="keyW"
            :value="keyW"
            class="input-with-select"
            placeholder="请输入内容"
            @keyup.enter.native="showTreeList"
          ></el-input>
          <div v-show="isShow" class="blur-tree">
            <el-tree
              ref="treeFilter"
              :data="filterDevLlist"
              :expand-on-click-node="false"
              :props="defaultProps"
              class="byui-filter-tree"
              default-expand-all
              highlight-current
              node-key="indexCode"
              @node-click="nodeClick"
            >
              <span slot-scope="{ node }" class="byui-custom-tree-node">
                <span class="byui-tree-item">
                  <i v-if="node.data.rank == 4" class="el-icon-s-custom"></i>
                  {{ node.label }}
                </span>
                <span class="byui-tree-options">
                  <a
                    v-if="node.data.rank !== 4"
                    class="byui-tree-btn"
                    title="添加"
                  >
                    <i class="el-icon-plus"></i>
                  </a>
                  <a class="byui-tree-btn" title="编辑"
                    ><i class="el-icon-edit"></i
                  ></a>
                  <a
                    v-if="node.data.rank !== 1"
                    class="byui-tree-btn"
                    title="刪除"
                  >
                    <i class="el-icon-delete"></i>
                  </a>
                </span>
              </span>
            </el-tree>
          </div>
          <div v-show="!isShow" class="el-tree-wrap">
            <el-tree
              ref="tree"
              v-loading="loading"
              :expand-on-click-node="false"
              :load="loadNode"
              :props="defaultProps"
              class="byui-filter-tree"
              highlight-current
              lazy
              node-key="indexCode"
              @node-click="nodeClick"
            >
              <span slot-scope="{ node }" class="byui-custom-tree-node">
                <span class="byui-tree-item">
                  <i v-if="node.data.rank == 4" class="el-icon-s-custom"></i>
                  {{ node.label }}
                </span>
                <span class="byui-tree-options">
                  <!-- <a v-if="node.data.rank !== 4" class="byui-tree-btn" title="添加""><i class="el-icon-plus"></i></a> -->
                  <a class="byui-tree-btn" title="编辑"
                    ><i class="el-icon-edit"></i
                  ></a>
                  <a
                    v-if="node.data.rank !== 1"
                    class="byui-tree-btn"
                    title="刪除"
                    ><i class="el-icon-delete"></i
                  ></a>
                </span>
              </span>
            </el-tree>
          </div>
        </div>
      </el-col>
    </el-row>
    <!--添加/编辑节点弹框-------------------start-->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="treeDialogVisible"
      class="tree-operate-dialog"
      width="400px"
      @close="treeDialogVisible = false"
    >
      <el-form ref="treeForm" :model="treeForm">
        <el-form-item label="节点名称" required>
          <el-input v-model="treeForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveTree">确 定</el-button>
      </div>
    </el-dialog>
    <!--添加/编辑节点弹框-------------------end-->
    <br />
    <p>下拉树select-tree：单选/多选</p>
    <br />
    <div>
      <el-row :gutter="15">
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div class="grid-content bg-pruple tree-box">
            <br />
            <p>单选树</p>
            <br />
            <el-select
              ref="singleTree"
              v-model="singleSelectTreeVal"
              class="byui-tree-select"
              clearable
              popper-class="select-tree-popper"
              value-key="id"
              @clear="selectTreeClearHandle('single')"
            >
              <el-option :value="singleSelectTreeKey">
                <el-tree
                  id="singleSelectTree"
                  ref="singleSelectTree"
                  :current-node-key="singleSelectTreeKey"
                  :data="selectTreeData"
                  :default-expanded-keys="selectTreeDefaultSelectedKeys"
                  :highlight-current="true"
                  :props="selectTreeDefaultProps"
                  node-key="id"
                  @node-click="selectTreeNodeClick"
                >
                  <span slot-scope="{ node }" class="byui-custom-tree-node">
                    <span class="byui-tree-item">{{ node.label }}</span>
                  </span>
                </el-tree>
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div class="grid-content bg-pruple tree-box">
            <br />
            <p>
              多选树：目前还未解决下拉框内tag点击删除树的联动删除效果
            </p>
            <br />
            <el-select
              v-model="multipleSelectTreeVal"
              class="byui-tree-select"
              clearable
              collapse-tags
              multiple
              popper-class="select-tree-popper"
              @change="changeMultipleSelectTreeHandle"
              @clear="selectTreeClearHandle('multiple')"
              @remove-tag="removeSelectTreeTag"
            >
              <el-option :value="multipleSelectTreeKey">
                <el-tree
                  id="multipleSelectTree"
                  ref="multipleSelectTree"
                  :current-node-key="multipleSelectTreeKey"
                  :data="selectTreeData"
                  :default-checked-keys="selectTreeDefaultSelectedKeys"
                  :default-expanded-keys="selectTreeDefaultSelectedKeys"
                  :highlight-current="true"
                  :props="selectTreeDefaultProps"
                  node-key="id"
                  show-checkbox
                  @check="multipleSelectTreeCheckNode"
                ></el-tree>
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getTreeList } from "@/api/tree";

export default {
  name: "Tree",
  data() {
    return {
      dialogTitle: "添加节点",
      treeFlag: 0,
      treeDialogVisible: false,
      treeForm: {
        id: "",
        name: "",
      },
      checkNodeKeys: [],
      filterText: "",
      data2: [],
      defaultProps: {
        children: "children",
        label: "name",
      },
      defaultExpendedKeys: [],
      defaultCheckedKeys: [],
      loading: true,
      keyW: "",
      filterDevLlist: [],
      isShow: false,
      updateTree: true,
      /* 单选树-多选树---------开始 */
      selectLevel: 4, // 树可选叶子level等级
      singleSelectTreeVal: "", //单选树默认label值
      singleSelectTreeKey: "", //单选树默认key值
      selectTreeData: [], //单选树的值
      selectTreeDefaultSelectedKeys: [], //单选树默认展开的key值数组
      selectTreeDefaultProps: {
        children: "children",
        label: "name",
      },
      multipleSelectTreeVal: [], //多选树默认label值
      multipleSelectTreeKey: "", //多选树默认key值
      /* 单选树-多选树---------结束 */
    };
  },
  watch: {
    filterText(val) {
      this.$refs.demoTree.filter(val);
    },
  },
  mounted() {
    const that = this;
    that.$nextTick(() => {
      that.getTreeListFuc(1);
      that.setCheckedKeys();
      // 初始化单选树
      that.initSingleTree("single");
      // 初始化多选树
      that.initSingleTree("multiple");
    });
  },
  methods: {
    // 树level小于n级展开方法
    openTree(treeData, n) {
      const that = this;

      function each(data) {
        data.forEach((e) => {
          if (e.rank <= n) {
            that.defaultExpendedKeys.push(e.id);
          }
          if (e.children.length > 0) {
            each(e.children);
          }
        });
      }

      each(treeData);
    },
    // 获取tree数据
    getTreeListFuc(flag) {
      const that = this;
      getTreeList().then((res) => {
        this.data2 = res.data;
        if (flag) {
          that.openTree(that.data2, 2);
        }
      });
    },
    // 节点过滤操作
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
    // 添加节点操作
    append(node, data, flag) {
      this.treeFlag = flag;
      this.dialogTitle = "添加节点";
      this.treeForm = {
        id: "",
        name: "",
      };
      this.treeDialogVisible = true;
    },
    // 编辑节点操作
    edit(node, data, flag) {
      this.treeFlag = flag;
      this.dialogTitle = "编辑节点";
      this.treeForm = {
        id: data.id,
        name: data.name,
      };
      this.treeDialogVisible = true;
    },
    // 删除节点操作
    remove(node, data) {
      const that = this;
      that.$baseConfirm("你确定要删除该节点?", null, () => {
        getTreeList().then((res) => {
          that.$baseMessage(res.msg, "success");
          that.getTreeListFuc(0);
        });
      });
    },
    // 保存添加和编辑
    saveTree() {
      const that = this;
      this.$refs.treeForm.validate((valid) => {
        if (valid) {
          getTreeList().then((res) => {
            that.$baseMessage(res.msg, "success");
            that.treeDialogVisible = false;
            that.getTreeListFuc(0);
          });
        }
      });
    },
    // 设置节点选中
    setCheckedKeys() {
      this.$refs.demoTree.setCheckedKeys([1]);
    },
    // 点击叶子节点
    nodeClick(data, node, el) {},
    // 节点选中操作
    checkNode(data, node, el) {
      this.checkNodeKeys = node.checkedKeys;
    },
    // 节点展开操作
    nodeExpand(data, node, el) {
      this.defaultExpendedKeys.push(data.id);
    },
    // 节点关闭操作
    nodeCollapse(data, node, el) {
      this.defaultExpendedKeys.splice(
        this.defaultExpendedKeys.findIndex((item) => item.id === data.id),
        1
      );
    },
    loadNode(node, resolve) {
      const that = this;
      if (node.level === 0) {
        getTreeList().then((res) => {
          that.loading = false;
          return resolve(res.data);
        });
      } else {
        getTreeList().then((res) => {
          return resolve(res.data);
        });
      }
    },
    //懒加载树输入框筛选方法
    showTreeList(value) {
      const that = this;
      if (typeof value === "string") {
        that.keyW = value.trim();
      }
      if (that.keyW.length !== 0) {
        // 请求后台返回查询结果
        let treeOption = {};
        treeOption = {
          keyWord: that.keyW,
        };
        getTreeList().then((res) => {
          that.filterDevLlist = res.data;
          that.isShow = true;
        });
      } else {
        that.isShow = false;
      }
    },
    /* 单选/多选树方法-------------------开始 */
    // 初始化单选树的值
    initSingleTree(treeType) {
      const that = this;
      getTreeList().then((res) => {
        that.selectTreeData = res.data;
        this.$nextTick(() => {
          that.selectTreeDefaultSelectedKeys = that.singleSelectTreeKey.split(
            ","
          ); // 设置默认展开
          if (treeType == "single") {
            //单选树
            that.$refs.singleSelectTree.setCurrentKey(that.singleSelectTreeKey); // 设置默认选中
          } else {
            // 多选树
            that.$refs.multipleSelectTree.setCheckedKeys(
              that.selectTreeDefaultSelectedKeys
            );
          }
          /* const scrollWrap = document.querySelectorAll(
              ".select-tree-popper .el-scrollbar .el-select-dropdown__wrap"
            )[0];
            const scrollBar = document.querySelectorAll(
              "select-tree-popper .el-scrollbar .el-scrollbar__bar"
            );
            scrollWrap.style.cssText =
              "margin: 0; max-height: none; overflow: hidden;";
            scrollBar.forEach((ele) => (ele.style.width = 0));*/
        });
      });
    },
    // 清除单选树选中
    selectTreeClearHandle(type) {
      const that = this;
      this.selectTreeDefaultSelectedKeys = [];
      this.clearSelected();
      if (type == "single") {
        that.singleSelectTreeVal = "";
        that.singleSelectTreeKey = "";
        that.$refs.singleSelectTree.setCurrentKey(""); // 设置默认选中
      } else {
        that.multipleSelectTreeVal = [];
        that.multipleSelectTreeKey = "";
        that.$refs.multipleSelectTree.setCheckedKeys([]);
      }
    },
    /* 清空选中样式 */
    clearSelected() {
      const allNode = document.querySelectorAll(
        "#singleSelectTree .el-tree-node"
      );
      allNode.forEach((element) => element.classList.remove("is-current"));
    },
    // select多选时移除某项操作
    removeSelectTreeTag(val) {},
    changeMultipleSelectTreeHandle(val) {},
    // 点击叶子节点
    selectTreeNodeClick(data, node, el) {
      if (data.rank >= this.selectLevel) {
        this.singleSelectTreeVal = data.name;
        this.singleSelectTreeKey = data.id;
        this.$refs.singleTree.blur();
      }
    },
    // 节点选中操作
    multipleSelectTreeCheckNode(data, node, el) {
      const checkedNodes = this.$refs.multipleSelectTree.getCheckedNodes();
      const keyArr = [];
      const valueArr = [];
      checkedNodes.forEach((item) => {
        if (item.rank >= this.selectLevel) {
          keyArr.push(item.id);
          valueArr.push(item.name);
        }
      });
      this.multipleSelectTreeVal = valueArr;
      this.multipleSelectTreeKey = keyArr.join(",");
    },
    /* 单选/多选树方法-------------------结束 */
  },
};
</script>

<style lang="scss" scoped>
.tree-container {
  .tree-box {
    width: 300px;
    margin: auto;
  }
}
</style>
