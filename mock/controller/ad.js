const data = [
  {
    title:
      'vue-admin-beautiful-pro 2.0版本已发布，增加多项贴心功能，点我提前体验',
    url:
      'http://beautiful.panm.cn/vue-admin-beautiful-pro?hmsr=homeAd&hmpl=&hmcu=&hmkw=&hmci=',
  },
  {
    title: 'vue-admin-beautiful（antdv） vue3.0版本已发布，点我提前体验',
    url:
      'http://beautiful.panm.cn/vue-admin-beautiful-antdv?hmsr=homeAd&hmpl=&hmcu=&hmkw=&hmci=',
  },
  {
    title: 'vue-admin-beautiful（element-plus） vue3.0版本已发布，点我提前体验',
    url:
      'http://http://beautiful.panm.cn/vue-admin-beautiful-element-plus?hmsr=homeAd&hmpl=&hmcu=&hmkw=&hmci=',
  },
]
module.exports = [
  {
    url: '/ad/getList',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data,
      }
    },
  },
]
