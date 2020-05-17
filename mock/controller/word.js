import { mock } from "mockjs";

export default [
  {
    url: "/word/getList",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        data: {
          info: {
            id: 1,
            name: "深圳市第一设计公司",
            address: "深圳市南山区前海",
            chanquan_single: 1,
            chanquan_multi: "[1,3,4]",
            chanquan_list_1: [
              {
                name: "单一产权",
                sort: 1,
              },
              {
                name: "多方产权",
                sort: 2,
              },
            ],
            chanquan_list_2: [
              {
                name: "国有企业",
                sort: 1,
              },
              {
                name: "民营企业",
                sort: 2,
              },
              {
                name: "社区股份公司",
                sort: 3,
              },
              {
                name: "街道办",
                sort: 4,
              },
              {
                name: "区政府",
                sort: 5,
              },
              {
                name: "个人",
                sort: 6,
              },
              {
                name: "不清晰",
                sort: 7,
              },
            ],
          },
          checklist: [
            {
              id: 1,
              type: "周边安全环境",
              remark: "备注1",
              sub: [
                {
                  id: 1,
                  type: "周边安全环境",
                  index: 1,
                  text: "不是处在地势低洼、易发生内涝地带。★",
                  res: 1,
                  remark: "",
                },
                {
                  id: 2,
                  type: "周边安全环境",
                  index: 2,
                  text: "周边不存在陡坡易发生滑坡风险。",
                  res: 0,
                  remark: "",
                },
                {
                  id: 3,
                  type: "周边安全环境",
                  index: 3,
                  text: "周边无或毗邻危险品仓库在安全距离以上。",
                  res: 1,
                  remark: "",
                },
              ],
            },
            {
              id: 2,
              type: "内部安全情况",
              remark: "备注2",
              sub: [
                {
                  id: 4,
                  type: "内部安全情况",
                  index: 4,
                  text: "园区内部无年久失修暗河暗渠。★",
                  res: 1,
                  remark: "",
                },
                {
                  id: 5,
                  type: "内部安全情况",
                  index: 5,
                  text: "建筑物无安全质量问题。★",
                  res: 1,
                  remark: "",
                },
                {
                  id: 6,
                  type: "内部安全情况",
                  index: 6,
                  text: "无超厂房楼板荷载安装机械设备现象。",
                  res: 0,
                  remark: "",
                },
                {
                  id: 7,
                  type: "内部安全情况",
                  index: 7,
                  text: "园区内消防通道符合标准要求且畅通。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 8,
                  type: "内部安全情况",
                  index: 8,
                  text: "电气线路部局合理规范且无老化漏电现象。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 9,
                  type: "内部安全情况",
                  index: 9,
                  text: "消防系统及器材设备完好并保持应急状态。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 10,
                  type: "内部安全情况",
                  index: 10,
                  text: "建筑物附属物安全设施完好。",
                  res: 1,
                  remark: "",
                },
              ],
            },
            {
              id: 3,
              type: "安全基础管理",
              remark: "备注3",
              sub: [
                {
                  id: 11,
                  type: "安全基础管理",
                  index: 11,
                  text:
                    "有安全生产管理机构和按要求配备安全管理人员，并有会议和履职情况记录。★",
                  res: 0,
                  remark: "",
                },
                {
                  id: 12,
                  type: "安全基础管理",
                  index: 12,
                  text: "工业园区安全管理制度健全，并有落实记录。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 13,
                  type: "安全基础管理",
                  index: 13,
                  text:
                    "安全管理组织机构、制度、风险辨识图、应急管理队伍框架等上墙公示。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 14,
                  type: "安全基础管理",
                  index: 14,
                  text:
                    "对新进企业进行审批备案，严控涉爆粉尘、锂电池生产、电镀等高风险企业入园。",
                  res: 1,
                  remark: "",
                },
              ],
            },
            {
              id: 4,
              type: "应急队伍建设",
              remark: "备注4",
              sub: [
                {
                  id: 15,
                  type: "应急队伍建设",
                  index: 15,
                  text: "园区建立义务消防队伍，人员数量达到园区应急需求。★",
                  res: 0,
                  remark: "",
                },
                {
                  id: 16,
                  type: "应急队伍建设",
                  index: 16,
                  text:
                    "编制或及时修订应急预案（须包括自然灾害、危险边坡等应急救援现场处置方案）。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 17,
                  type: "应急队伍建设",
                  index: 17,
                  text: "定期组织消防器材使用训练和应急演练，并有相应记录。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 18,
                  type: "应急队伍建设",
                  index: 18,
                  text: "应急处置快速高效，突击拉动演练时，能迅速响应。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 19,
                  type: "应急队伍建设",
                  index: 19,
                  text: "应急队伍装备器材配备达到标准要求。",
                  res: 1,
                  remark: "",
                },
              ],
            },
            {
              id: 5,
              type: "现场安全管理",
              remark: "备注5",
              sub: [
                {
                  id: 20,
                  type: "现场安全管理",
                  index: 20,
                  text:
                    "环境整洁有序、仓库物品摆放符合五距要求，通道和安全出口畅通。",
                  res: 0,
                  remark: "",
                },
                {
                  id: 21,
                  type: "现场安全管理",
                  index: 21,
                  text:
                    "公共通道、车间、仓库等区域有划线且清晰规范，在有较大危险因素的设备、场所等设置安全警示标志。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 22,
                  type: "现场安全管理",
                  index: 22,
                  text:
                    "园区内车辆、电动自行车等停放有序，充电桩设置合理，消防器材配备齐全。",
                  res: 0,
                  remark: "",
                },
                {
                  id: 23,
                  type: "现场安全管理",
                  index: 23,
                  text: "安全宣传氛围浓厚，内容齐全，针对性强。",
                  res: 1,
                  remark: "",
                },
              ],
            },
            {
              id: 6,
              type: "应急设施的配置及消防管理",
              remark: "备注6",
              sub: [
                {
                  id: 24,
                  type: "应急设施的配置及消防管理",
                  index: 24,
                  text: "园区建筑设置火灾监控报警系统和喷淋灭火系统。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 25,
                  type: "应急设施的配置及消防管理",
                  index: 25,
                  text: "园区配置微型消防站及配备足够消防器材。",
                  res: 1,
                  remark: "",
                },
              ],
            },
            {
              id: 7,
              type: "风险评估管理",
              remark: "备注7",
              sub: [
                {
                  id: 26,
                  type: "风险评估管理",
                  index: 26,
                  text:
                    "有定期、全面开展、及时更新风险评估和危害辨识并有对应管控措施的。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 27,
                  type: "风险评估管理",
                  index: 27,
                  text:
                    "有进行风险分级的，建立风险管控制度、四色分布图、重点部位或场所安全风险告知卡等。",
                  res: 0,
                  remark: "",
                },
              ],
            },
            {
              id: 8,
              type: "安全监督管理",
              remark: "备注8",
              sub: [
                {
                  id: 28,
                  type: "安全监督管理",
                  index: 28,
                  text:
                    "建立企业台账和“一企一档”管理档案，有入园企业准入审查记录，对园内高风险企业有落实督促整改、并整改完毕。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 29,
                  type: "安全监督管理",
                  index: 29,
                  text:
                    "园区未入驻重大危险源企业、落后生产工艺设备企业和高危生产经营单位。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 30,
                  type: "安全监督管理",
                  index: 30,
                  text: "对园区内企业实施分类分级管理。",
                  res: 1,
                  remark: "",
                },
                {
                  id: 31,
                  type: "安全监督管理",
                  index: 31,
                  text:
                    "园区管理处应对园区内企业每月至少进行一次安全生产检查和复查。",
                  res: 1,
                  remark: "",
                },
              ],
            },
            {
              id: 9,
              type: "危险作业管理",
              remark: "备注9",
              sub: [
                {
                  id: 32,
                  type: "危险作业管理",
                  index: 32,
                  text:
                    "在园内开展危险作业和其他小散工程、零星作业，有按照相关标准和要求落实执行。",
                  res: 0,
                  remark: "",
                },
                {
                  id: 33,
                  type: "危险作业管理",
                  index: 33,
                  text:
                    "持证上岗：从事特种作业（高处作业、电工作业等）；园区主要负责人、安全生产管理人员。",
                  res: 1,
                  remark: "",
                },
              ],
            },
          ],
          problem: [
            {
              title: "标题1",
              images1:
                "http://nwimg.im810.com/fg_cmp_check/2020-3-13/25bb1584030426000bb61.jpeg,http://nwimg.im810.com/fg_cmp_check/2020-3-13/4eea1584030429000cc16.jpeg,http://nwimg.im810.com/fg_cmp_check/2020-3-13/62ae15840304340008079.jpeg",
            },
            {
              title: "标题2",
              images1:
                "http://nwimg.im810.com/fg_cmp_check/2020-3-7/e8591583572138000dd48.jpg",
            },
            {
              title: "666",
              images1:
                "http://nwimg.im810.com/fg_cmp_check/2020-3-20/234915847024940009f5b.png,http://nwimg.im810.com/fg_cmp_check/2020-3-20/1d74158470251700033de.png",
            },
          ],
        },
      };
    },
  },
];
