<template>
  <div class="tab-container">
    <vab-page-header description="选项卡组件示例" :icon="['fas', 'folder-open']" title="选项卡" />
    <el-card shadow="never">
      <div class="tab-content">
        <div class="tab-demo">
          <h3>基础选项卡</h3>
          <el-tabs v-model="activeTab1">
            <el-tab-pane label="用户管理" name="first">
              <div class="tab-pane-content">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="date" label="日期" width="180"></el-table-column>
                  <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                  <el-table-column prop="address" label="地址"></el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
              <div class="tab-pane-content">
                <el-form :model="form" label-width="100px">
                  <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="活动时间">
                    <el-col :span="11">
                      <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                      <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%"></el-time-picker>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="即时配送">
                    <el-switch v-model="form.delivery"></el-switch>
                  </el-form-item>
                  <el-form-item label="活动性质">
                    <el-checkbox-group v-model="form.type">
                      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                      <el-checkbox label="地推活动" name="type"></el-checkbox>
                      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="特殊资源">
                    <el-radio-group v-model="form.resource">
                      <el-radio label="线上品牌商赞助"></el-radio>
                      <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="活动形式">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">
              <div class="tab-pane-content">
                <el-alert title="角色管理信息" type="success" show-icon></el-alert>
                <p>当前系统角色数量: {{ roles.length }}</p>
                <el-table :data="roles" style="width: 100%">
                  <el-table-column prop="id" label="ID" width="180"></el-table-column>
                  <el-table-column prop="name" label="角色名称" width="180"></el-table-column>
                  <el-table-column prop="description" label="描述"></el-table-column>
                  <el-table-column label="操作">
                    <template>
                      <el-button size="mini">编辑</el-button>
                      <el-button size="mini" type="danger">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>

        <div class="tab-demo">
          <h3>卡片化选项卡</h3>
          <el-tabs v-model="activeTab2" type="border-card">
            <el-tab-pane label="首页">
              <div class="tab-pane-content">
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>用户数</span>
                      </div>
                      <div class="card-content">
                        <p class="card-number">1,234</p>
                        <p class="card-description">总用户数量</p>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="6">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>订单数</span>
                      </div>
                      <div class="card-content">
                        <p class="card-number">567</p>
                        <p class="card-description">总订单数量</p>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="6">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>销售额</span>
                      </div>
                      <div class="card-content">
                        <p class="card-number">¥89,000</p>
                        <p class="card-description">总销售额</p>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="6">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>访问量</span>
                      </div>
                      <div class="card-content">
                        <p class="card-number">45,678</p>
                        <p class="card-description">总访问量</p>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane label="消息中心">
              <div class="tab-pane-content">
                <el-timeline>
                  <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
                    {{ activity.content }}
                  </el-timeline-item>
                </el-timeline>
              </div>
            </el-tab-pane>
            <el-tab-pane label="设置">
              <div class="tab-pane-content">
                <el-form :model="settingForm" label-width="120px">
                  <el-form-item label="网站名称">
                    <el-input v-model="settingForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="网站描述">
                    <el-input type="textarea" v-model="settingForm.description"></el-input>
                  </el-form-item>
                  <el-form-item label="开启评论">
                    <el-switch v-model="settingForm.comment"></el-switch>
                  </el-form-item>
                  <el-form-item label="维护模式">
                    <el-switch v-model="settingForm.maintenance"></el-switch>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="saveSettings">保存设置</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import VabPageHeader from '@/components/VabPageHeader'

  export default {
    name: 'Tab',
    components: {
      VabPageHeader,
    },
    data() {
      return {
        activeTab1: 'first',
        activeTab2: 'first',
        tableData: [
          {
            date: '2023-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2023-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2023-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2023-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        roles: [
          { id: 1, name: '管理员', description: '拥有系统全部权限' },
          { id: 2, name: '编辑者', description: '可以编辑内容' },
          { id: 3, name: '查看者', description: '只能查看内容' },
        ],
        activities: [
          {
            content: '创建了新的项目',
            timestamp: '2023-05-01',
          },
          {
            content: '完成了用户管理模块',
            timestamp: '2023-05-02',
          },
          {
            content: '修复了若干bug',
            timestamp: '2023-05-03',
          },
          {
            content: '发布了新版本',
            timestamp: '2023-05-04',
          },
        ],
        settingForm: {
          name: 'Vue Admin Better',
          description: '一个优秀的后台管理系统',
          comment: true,
          maintenance: false,
        },
      }
    },
    methods: {
      onSubmit() {
        this.$message('提交成功！')
      },
      saveSettings() {
        this.$message('设置已保存！')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .tab-container {
    padding: 15px;
    background: $base-color-white;

    .tab-content {
      min-height: 400px;

      .tab-demo {
        margin-bottom: 30px;

        h3 {
          margin: 20px 0;
          color: #333;
        }

        .tab-pane-content {
          padding: 20px 0;
          color: #606266;

          .card-content {
            text-align: center;

            .card-number {
              font-size: 24px;
              font-weight: bold;
              color: #409eff;
              margin: 10px 0;
            }

            .card-description {
              color: #999;
            }
          }
        }
      }
    }
  }
</style>
