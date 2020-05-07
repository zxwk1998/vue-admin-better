<template>
  <div class="permission-container">
    <el-divider content-position="left">
      intelligence模式,前端根据roles拦截路由(演示环境,默认使用此方案)
    </el-divider>

    <el-form ref="form" :model="form" :inline="true">
      <el-form-item label="切换账号">
        <el-radio-group v-model="form.permission">
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
        {{ JSON.stringify(roles) }}
      </el-form-item>
    </el-form>
    <el-divider content-position="left">
      按钮级权限演示
    </el-divider>
    <el-button v-if="checkPermission(['admin'])" type="primary"
      >我是拥有["admin"]权限的按钮
    </el-button>
    <el-button v-if="checkPermission(['editor'])" type="primary"
      >我是拥有["editor"]权限的按钮
    </el-button>
    <el-button v-if="checkPermission(['test'])" type="primary"
      >我是拥有["test"]权限的按钮
    </el-button>
    <el-divider content-position="left">
      all模式,路由以及view文件引入全部交给后端(权限复杂,且随时变更,建议使用此方案)
    </el-divider>
    <p>
      settings.js配置authentication为all即可完全交由后端控制,mock中有后端接口示例,权限繁琐,有几十种权限的项目直接用这种,
      由于演示环境是mock数据模拟,可能无法展现此功能的配置,只做如下展示,便于您的理解
    </p>
    <br />
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-table
          :data="tableData"
          row-key="path"
          border
          default-expand-all
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <el-table-column prop="name" label="name"></el-table-column>
          <el-table-column prop="path" label="path"></el-table-column>
          <el-table-column prop="component" label="component"></el-table-column>
          <el-table-column prop="redirect" label="redirect"></el-table-column>
          <el-table-column prop="meta.title" label="标题"></el-table-column>
          <el-table-column label="图标">
            <template slot-scope="scope">
              <span v-if="scope.row.meta">
                <byui-icon
                  v-if="scope.row.meta.icon"
                  :icon="['fas', scope.row.meta.icon]"
                ></byui-icon>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="是否固定">
            <template slot-scope="scope">
              <span v-if="scope.row.meta">
                {{ scope.row.meta.affix }}
              </span>
            </template>
          </el-table-column>
          <el-table-column label="是否无缓存">
            <template slot-scope="scope">
              <span v-if="scope.row.meta">
                {{ scope.row.meta.noCache }}
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
import checkPermission from "@/utils/permission";
import { mapGetters } from "vuex";
import { tokenTableName } from "@/config/settings";
import { getRouterList } from "@/api/router";
import JsonEditor from "@/components/JsonEditor";

export default {
  name: "Permission",
  components: {
    JsonEditor,
  },
  data() {
    return {
      form: {
        permission: "",
      },
      tableData: [],
      res: [],
    };
  },
  computed: {
    ...mapGetters(["userName", "roles"]),
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.form.permission = this.userName;
  },
  methods: {
    handleChangePermission() {
      localStorage.setItem(
        tokenTableName,
        `${this.form.permission}-accessToken`
      );
      location.reload();
    },
    fetchData() {
      getRouterList().then((res) => {
        this.tableData = res.data;
        this.res = res;
      });
    },
    checkPermission,
  },
};
</script>
