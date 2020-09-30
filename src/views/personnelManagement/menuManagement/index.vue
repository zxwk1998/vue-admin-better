<template>
  <div class="menuManagement-container">
    <el-divider content-position="left">
      演示环境仅做基础功能展示，若想实现不同角色的真实菜单配置，需将settings.js路由加载模式改为all模式，由后端全面接管路由渲染与权限控制
    </el-divider>
    <el-row>
      <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4">
        <el-tree
          :data="data"
          :props="defaultProps"
          node-key="id"
          :default-expanded-keys="['root']"
          @node-click="handleNodeClick"
        ></el-tree>
      </el-col>
      <el-col :xs="24" :sm="24" :md="16" :lg="20" :xl="20">
        <vab-query-form>
          <vab-query-form-top-panel :span="12">
            <el-button icon="el-icon-plus" type="primary" @click="handleEdit">
              添加
            </el-button>
          </vab-query-form-top-panel>
        </vab-query-form>
        <el-table
          v-loading="listLoading"
          :data="list"
          :element-loading-text="elementLoadingText"
          row-key="path"
          border
          default-expand-all
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <el-table-column
            show-overflow-tooltip
            prop="name"
            label="name"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="path"
            label="路径"
          ></el-table-column>
          <el-table-column show-overflow-tooltip label="是否隐藏">
            <template slot-scope="scope">
              <span>
                {{ scope.row.hidden ? "是" : "否" }}
              </span>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip label="是否一直显示当前节点">
            <template slot-scope="scope">
              <span>
                {{ scope.row.alwaysShow ? "是" : "否" }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="component"
            label="vue文件路径"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="redirect"
            label="重定向"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="meta.title"
            label="标题"
          ></el-table-column>
          <el-table-column show-overflow-tooltip label="图标">
            <template slot-scope="scope">
              <span v-if="scope.row.meta">
                <vab-icon
                  v-if="scope.row.meta.icon"
                  :icon="['fas', scope.row.meta.icon]"
                ></vab-icon>
              </span>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip label="是否固定">
            <template slot-scope="scope">
              <span v-if="scope.row.meta">
                {{ scope.row.meta.affix ? "是" : "否" }}
              </span>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip label="是否无缓存">
            <template slot-scope="scope">
              <span v-if="scope.row.meta">
                {{ scope.row.meta.noKeepAlive ? "是" : "否" }}
              </span>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip label="badge">
            <template slot-scope="scope">
              <span v-if="scope.row.meta">
                {{ scope.row.meta.badge }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            fixed="right"
            label="操作"
            width="200"
          >
            <template #default="scope">
              <el-button type="text" @click="handleEdit(scope.row)">
                编辑
              </el-button>
              <el-button type="text" @click="handleDelete(scope.row)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <edit ref="edit" @fetch-data="fetchData"></edit>
  </div>
</template>

<script>
  import { getRouterList as getList } from "@/api/router";
  import { getTree, doDelete } from "@/api/menuManagement";
  import Edit from "./components/MenuManagementEdit";

  export default {
    name: "MenuManagement",
    components: { Edit },
    data() {
      return {
        data: [],
        defaultProps: {
          children: "children",
          label: "label",
        },
        list: [],
        listLoading: true,
        elementLoadingText: "正在加载...",
      };
    },
    async created() {
      const roleData = await getTree();
      this.data = roleData.data;
      this.fetchData();
    },
    methods: {
      handleEdit(row) {
        if (row.path) {
          this.$refs["edit"].showEdit(row);
        } else {
          this.$refs["edit"].showEdit();
        }
      },
      handleDelete(row) {
        if (row.id) {
          this.$baseConfirm("你确定要删除当前项吗", null, async () => {
            const { msg } = await doDelete({ ids: row.id });
            this.$baseMessage(msg, "success");
            this.fetchData();
          });
        }
      },
      async fetchData() {
        this.listLoading = true;

        const { data } = await getList();
        this.list = data;
        setTimeout(() => {
          this.listLoading = false;
        }, 300);
      },
      handleNodeClick(data) {
        this.fetchData();
      },
    },
  };
</script>
