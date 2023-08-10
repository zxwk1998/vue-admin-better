<template>
  <div class="tree-container">
    <el-row :gutter="20">
      <el-col :lg="6" :md="24" :sm="24" :xl="6" :xs="24">
        <el-divider content-position="left">常规树</el-divider>
        <el-input v-model="filterText" placeholder="输入关键字过滤" />
        <el-tree
          ref="demoTree"
          class="vab-filter-tree"
          :data="data2"
          :default-checked-keys="defaultCheckedKeys"
          :default-expanded-keys="defaultExpendedKeys"
          :expand-on-click-node="false"
          :filter-node-method="filterNode"
          :highlight-current="true"
          node-key="id"
          :props="defaultProps"
          show-checkbox
          @check="checkNode"
          @node-click="nodeClick"
          @node-collapse="nodeCollapse"
          @node-expand="nodeExpand"
        >
          <template #defalut="{ node, data }" class="vab-custom-tree-node">
            <span class="vab-tree-item">
              <i v-if="node.data.rank == 4" class="el-icon-s-custom"></i>
              {{ node.label }}
            </span>
            <span class="vab-tree-options">
              <a v-if="node.data.rank !== 4" class="vab-tree-btn" title="添加" @click="() => append(node, data, 0)">
                <i class="el-icon-plus"></i>
              </a>
              <a class="vab-tree-btn" title="编辑" @click="() => edit(node, data, 1)">
                <i class="el-icon-edit"></i>
              </a>
              <a v-if="node.data.rank !== 1" class="vab-tree-btn" title="刪除" @click="() => remove(node, data)">
                <i class="el-icon-delete"></i>
              </a>
            </span>
          </template>
        </el-tree>
      </el-col>
      <el-col :lg="6" :md="24" :sm="24" :xl="6" :xs="24">
        <el-divider content-position="left">懒加载树</el-divider>
        <el-input
          v-model.lazy="keyW"
          class="input-with-select"
          placeholder="请输入内容"
          :value="keyW"
          @keyup.enter.native="showTreeList"
        />
        <div v-show="isShow" class="blur-tree">
          <el-tree
            ref="treeFilter"
            class="vab-filter-tree"
            :data="filterDevLlist"
            default-expand-all
            :expand-on-click-node="false"
            highlight-current
            node-key="indexCode"
            :props="defaultProps"
            @node-click="nodeClick"
          >
            <template #defalut="{ node }" class="vab-custom-tree-node">
              <span class="vab-tree-item">
                <i v-if="node.data.rank == 4" class="el-icon-s-custom"></i>
                {{ node.label }}
              </span>
              <span class="vab-tree-options">
                <a v-if="node.data.rank !== 4" class="vab-tree-btn" title="添加">
                  <i class="el-icon-plus"></i>
                </a>
                <a class="vab-tree-btn" title="编辑">
                  <i class="el-icon-edit"></i>
                </a>
                <a v-if="node.data.rank !== 1" class="vab-tree-btn" title="刪除">
                  <i class="el-icon-delete"></i>
                </a>
              </span>
            </template>
          </el-tree>
        </div>
        <div v-show="!isShow" class="el-tree-wrap">
          <el-tree
            ref="tree"
            v-loading="loading"
            class="vab-filter-tree"
            :expand-on-click-node="false"
            highlight-current
            lazy
            :load="loadNode"
            node-key="indexCode"
            :props="defaultProps"
            @node-click="nodeClick"
          >
            <template #defalut="{ node }" class="vab-custom-tree-node">
              <span class="vab-tree-item">
                <i v-if="node.data.rank == 4" class="el-icon-s-custom"></i>
                {{ node.label }}
              </span>
              <span class="vab-tree-options">
                <!-- <a v-if="node.data.rank !== 4" class="vab-tree-btn" title="添加""><i class="el-icon-plus"></i></a> -->
                <a class="vab-tree-btn" title="编辑">
                  <i class="el-icon-edit"></i>
                </a>
                <a v-if="node.data.rank !== 1" class="vab-tree-btn" title="刪除">
                  <i class="el-icon-delete"></i>
                </a>
              </span>
            </template>
          </el-tree>
        </div>
      </el-col>
      <el-col :lg="6" :md="24" :sm="24" :xl="6" :xs="24">
        <el-divider content-position="left">单选树</el-divider>
        <el-select
          ref="singleTree"
          v-model="singleSelectTreeVal"
          class="vab-tree-select"
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
              node-key="id"
              :props="selectTreeDefaultProps"
              @node-click="selectTreeNodeClick"
            >
              <template #defalut="{ node }" class="vab-custom-tree-node">
                <span class="vab-tree-item">{{ node.label }}</span>
              </template>
            </el-tree>
          </el-option>
        </el-select>
      </el-col>
      <el-col :lg="6" :md="24" :sm="24" :xl="6" :xs="24">
        <el-divider content-position="left">多选树</el-divider>
        <el-select
          v-model="multipleSelectTreeVal"
          class="vab-tree-select"
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
              node-key="id"
              :props="selectTreeDefaultProps"
              show-checkbox
              @check="multipleSelectTreeCheckNode"
            />
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <!--添加/编辑节点弹框-------------------start-->
    <el-dialog
      class="tree-operate-dialog"
      :title="dialogTitle"
      :visible.sync="treeDialogVisible"
      width="400px"
      @close="treeDialogVisible = false"
    >
      <el-form ref="treeForm" :model="treeForm">
        <el-form-item label="节点名称" required>
          <el-input v-model="treeForm.name" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="treeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveTree">确 定</el-button>
      </div>
    </el-dialog>
    <!--添加/编辑节点弹框-------------------end-->
  </div>
</template>

<script>
  import { getTreeList } from '@/api/tree'

  export default {
    name: 'Tree',
    data() {
      return {
        dialogTitle: '添加节点',
        treeFlag: 0,
        treeDialogVisible: false,
        treeForm: {
          id: '',
          name: '',
        },
        checkNodeKeys: [],
        filterText: '',
        data2: [],
        defaultProps: {
          children: 'children',
          label: 'name',
        },
        defaultExpendedKeys: [],
        defaultCheckedKeys: [],
        loading: true,
        keyW: '',
        filterDevLlist: [],
        isShow: false,
        updateTree: true,
        /* 单选树-多选树---------开始 */
        selectLevel: 4, // 树可选叶子level等级
        singleSelectTreeVal: '', //单选树默认label值
        singleSelectTreeKey: '', //单选树默认key值
        selectTreeData: [], //单选树的值
        selectTreeDefaultSelectedKeys: [], //单选树默认展开的key值数组
        selectTreeDefaultProps: {
          children: 'children',
          label: 'name',
        },
        multipleSelectTreeVal: [], //多选树默认label值
        multipleSelectTreeKey: '', //多选树默认key值
        /* 单选树-多选树---------结束 */
      }
    },
    watch: {
      filterText(val) {
        this.$refs.demoTree.filter(val)
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.getTreeListFuc(1)
        this.setCheckedKeys()
        // 初始化单选树
        this.initSingleTree('single')
        // 初始化多选树
        this.initSingleTree('multiple')
      })
    },
    methods: {
      // 树level小于n级展开方法
      openTree(treeData, n) {
        const each = (data) => {
          data.forEach((e) => {
            if (e.rank <= n) {
              this.defaultExpendedKeys.push(e.id)
            }
            if (e.children.length > 0) {
              each(e.children)
            }
          })
        }

        each(treeData)
      },
      // 获取tree数据
      async getTreeListFuc(flag) {
        const { data } = await getTreeList()
        this.data2 = data
        if (flag) {
          this.openTree(this.data2, 2)
        }
      },
      // 节点过滤操作
      filterNode(value, data) {
        if (!value) return true
        return data.name.indexOf(value) !== -1
      },
      // 添加节点操作
      append(node, data, flag) {
        this.treeFlag = flag
        this.dialogTitle = '添加节点'
        this.treeForm = {
          id: '',
          name: '',
        }
        this.treeDialogVisible = true
      },
      // 编辑节点操作
      edit(node, data, flag) {
        this.treeFlag = flag
        this.dialogTitle = '编辑节点'
        this.treeForm = {
          id: data.id,
          name: data.name,
        }
        this.treeDialogVisible = true
      },
      // 删除节点操作
      remove(node, data) {
        this.$baseConfirm('你确定要删除该节点?', null, async () => {
          const { msg } = getTreeList()
          this.$baseMessage(msg, 'success')
          this.getTreeListFuc(0)
        })
      },
      // 保存添加和编辑
      saveTree() {
        this.$refs.treeForm.validate(async (valid) => {
          if (valid) {
            const { msg } = await getTreeList()
            this.$baseMessage(msg, 'success')
            this.treeDialogVisible = false
            this.getTreeListFuc(0)
          }
        })
      },
      // 设置节点选中
      setCheckedKeys() {
        this.$refs.demoTree.setCheckedKeys([1])
      },
      // 点击叶子节点
      nodeClick(data, node, el) {},
      // 节点选中操作
      checkNode(data, node, el) {
        this.checkNodeKeys = node.checkedKeys
      },
      // 节点展开操作
      nodeExpand(data, node, el) {
        this.defaultExpendedKeys.push(data.id)
      },
      // 节点关闭操作
      nodeCollapse(data, node, el) {
        this.defaultExpendedKeys.splice(
          this.defaultExpendedKeys.findIndex((item) => item.id === data.id),
          1
        )
      },
      async loadNode(node, resolve) {
        if (node.level === 0) {
          const { data } = await getTreeList()
          this.loading = false
          return resolve(data)
        } else {
          const { data } = await getTreeList()
          return resolve(res.data)
        }
      },
      //懒加载树输入框筛选方法
      async showTreeList(value) {
        if (typeof value === 'string') {
          this.keyW = value.trim()
        }
        if (this.keyW.length !== 0) {
          // 请求后台返回查询结果
          let treeOption = {}
          treeOption = {
            keyWord: this.keyW,
          }
          const { data } = await getTreeList()
          this.filterDevLlist = data
          this.isShow = true
        } else {
          this.isShow = false
        }
      },
      /* 单选/多选树方法-------------------开始 */
      // 初始化单选树的值
      async initSingleTree(treeType) {
        const { data } = await getTreeList()
        this.selectTreeData = data
        this.$nextTick(() => {
          this.selectTreeDefaultSelectedKeys = this.singleSelectTreeKey.split(',') // 设置默认展开
          if (treeType == 'single') {
            //单选树
            this.$refs.singleSelectTree.setCurrentKey(this.singleSelectTreeKey) // 设置默认选中
          } else {
            // 多选树
            this.$refs.multipleSelectTree.setCheckedKeys(this.selectTreeDefaultSelectedKeys)
          }
        })
      },
      // 清除单选树选中
      selectTreeClearHandle(type) {
        this.selectTreeDefaultSelectedKeys = []
        this.clearSelected()
        if (type == 'single') {
          this.singleSelectTreeVal = ''
          this.singleSelectTreeKey = ''
          this.$refs.singleSelectTree.setCurrentKey('') // 设置默认选中
        } else {
          this.multipleSelectTreeVal = []
          this.multipleSelectTreeKey = ''
          this.$refs.multipleSelectTree.setCheckedKeys([])
        }
      },
      /* 清空选中样式 */
      clearSelected() {
        const allNode = document.querySelectorAll('#singleSelectTree .el-tree-node')
        allNode.forEach((element) => element.classList.remove('is-current'))
      },
      // select多选时移除某项操作
      removeSelectTreeTag(val) {
        const stack = JSON.parse(JSON.stringify(this.selectTreeData))
        while (stack.length) {
          const curr = stack.shift()
          if (curr.name == val) {
            return this.$refs.multipleSelectTree.setChecked(curr.id, false)
          }
          if (curr.children && curr.children.length) {
            stack.unshift(...curr.children)
          }
        }
      },
      changeMultipleSelectTreeHandle(val) {},
      // 点击叶子节点
      selectTreeNodeClick(data, node, el) {
        if (data.rank >= this.selectLevel) {
          this.singleSelectTreeVal = data.name
          this.singleSelectTreeKey = data.id
          this.$refs.singleTree.blur()
        }
      },
      // 节点选中操作
      multipleSelectTreeCheckNode(data, node, el) {
        const checkedNodes = this.$refs.multipleSelectTree.getCheckedNodes()
        const keyArr = []
        const valueArr = []
        checkedNodes.forEach((item) => {
          if (item.rank >= this.selectLevel) {
            keyArr.push(item.id)
            valueArr.push(item.name)
          }
        })
        this.multipleSelectTreeVal = valueArr
        this.multipleSelectTreeKey = keyArr.join(',')
      },
      /* 单选/多选树方法-------------------结束 */
    },
  }
</script>
