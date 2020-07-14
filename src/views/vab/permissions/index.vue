<template>
  <div class="permissions-container">
    <el-divider content-position="left">
      intelligence模式,前端根据permissions拦截路由(演示环境,默认使用此方案)
    </el-divider>

    <el-form ref="form" :model="form" :inline="true">
      <el-form-item label="切换账号">
        <el-radio-group v-model="form.account">
          <el-radio label="admin">admin</el-radio>
          <el-radio label="editor">editor</el-radio>
          <el-radio label="test">test</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleChangePermission"
          >切换权限
        </el-button>
      </el-form-item>
      <el-form-item label="当前账号拥有的权限">
        {{ JSON.stringify(permissions) }}
      </el-form-item>
    </el-form>
    <el-divider content-position="left">
      按钮级权限演示
    </el-divider>
    <el-button v-permissions="['admin']" type="primary">
      我是拥有["admin"]权限的按钮
    </el-button>
    <el-button v-permissions="['editor']" type="primary">
      我是拥有["editor"]权限的按钮
    </el-button>
    <el-button v-permissions="['test']" type="primary">
      我是拥有["test"]权限的按钮
    </el-button>
    <br />
    <br />
    <el-divider content-position="left">
      all模式,路由以及view文件引入全部交给后端(权限复杂,且随时变更,建议使用此方案)
    </el-divider>
    <p>
      settings.js配置authentication为all即可完全交由后端控制,mock中有后端接口示例,权限繁琐,有几十种权限的项目直接用这种,
      由于演示环境是mock数据模拟,可能无法展现此功能的配置,只做如下展示,便于您的理解
    </p>
    <br />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-table
          :data="tableData"
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
            label="path"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="component"
            label="component"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="redirect"
            label="redirect"
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
                {{ scope.row.meta.affix }}
              </span>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip label="是否无缓存">
            <template slot-scope="scope">
              <span v-if="scope.row.meta">
                {{ scope.row.meta.noKeepAlive }}
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
        </el-table>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <json-editor :value="res"></json-editor>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { tokenTableName } from "@/config/settings";
import { getRouterList } from "@/api/router";
import JsonEditor from "@/components/JsonEditor";

export default {
  name: "Permissions",
  components: {
    JsonEditor,
  },
  data() {
    return {
      form: {
        account: "",
      },
      tableData: [],
      res: [],
    };
  },
  computed: {
    ...mapGetters({
      username: "user/username",
      permissions: "user/permissions",
    }),
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.form.account = this.username;
  },
  methods: {
    handleChangePermission() {
      localStorage.setItem(tokenTableName, `${this.form.account}-accessToken`);
      location.reload();
    },
    async fetchData() {
      const res = await getRouterList();
      this.tableData = res.data;
      this.res = res;
    },
  },
};
</script>
