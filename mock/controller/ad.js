const data = [
  {
    title: '建党百年惊喜福利，付费版本买一得二全年最低价，点我购买',
    url: 'https://vue-admin-beautiful.com/authorization',
  },
  /*   {
    title: 'Admin Pro 3.0付费版本已发布，增加多项贴心功能，点我提前体验',
    url: 'https://chu1204505056.gitee.io/admin-pro?hmsr=homeAd&hmpl=&hmcu=&hmkw=&hmci=',
  },
  {
    title: 'Admin Plus 3.0内测版本已发布，增加多项贴心功能，点我提前体验',
    url: 'https://chu1204505056.gitee.io/admin-plus?hmsr=homeAd&hmpl=&hmcu=&hmkw=&hmci=',
  },
  {
    title: 'vue-admin-beautiful（antdv） vue3.0版本已发布，点我提前体验',
    url: 'https://vue-admin-beautiful.com/vue-admin-beautiful-antdv?hmsr=homeAd&hmpl=&hmcu=&hmkw=&hmci=',
  },
  {
    title: 'vue-admin-beautiful（element-plus） vue3.0版本已发布，点我提前体验',
    url: 'https://chu1204505056.gitee.io/admin-plus?hmsr=homeAd&hmpl=&hmcu=&hmkw=&hmci=',
  },
  {
    title:
      '程序无国界，但程序员有国界，中国国家尊严不容挑衅，如果您在特殊时期继续购买HM、耐克、阿迪达斯等品牌那么您将无权继续使用Vab',
    url: 'https://chu1204505056.gitee.io/admin-pro?hmsr=homeAd&hmpl=&hmcu=&hmkw=&hmci=',
  }, */
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
