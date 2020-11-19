const data = [
  {
    title:
      'vue-admin-beautiful-pro 2.0版本已发布，增加多项贴心功能，点我提前体验',
    url: 'https://chu1204505056.gitee.io/vue-admin-beautiful-pro/#/index',
  },
  {
    title: 'vue-admin-beautiful（antdv） vue3.0版本已发布，点我提前体验',
    url: 'https://chu1204505056.gitee.io/vue-admin-beautiful-antdv/#/index',
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
