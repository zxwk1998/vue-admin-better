<template>
  <div class="colorful-icon-container">
    <el-divider content-position="left"
      >由于多彩图标数量太多影响演示页面加载速度,故去掉演示功能,如果需要加群自取</el-divider
    >
    <byui-fault-text
      ref="faultText"
      text="you are beautiful,暂不展示"
    ></byui-fault-text>
    <!--<el-divider content-position="left">点击图标即可复制源码</el-divider>
    <el-row :gutter="15">
      <el-col :span="24">
        <el-form
          ref="form"
          :inline="true"
          label-width="80px"
          @submit.native.prevent
        >
          <el-form-item label="图标名称">
            <el-input v-model="name"></el-input>
          </el-form-item>
          &lt;!&ndash;<el-form-item label-width="0">
            <el-button native-type="submit" type="primary" @click="submit"
              >搜索
            </el-button>
          </el-form-item>&ndash;&gt;

          <el-form-item label-width="0">
            {{ tips }}
          </el-form-item>
          &lt;!&ndash; <el-form-item label-width="0">
            <el-input :value="copyText" type="text"></el-input>
          </el-form-item>&ndash;&gt;
        </el-form>
      </el-col>

      <el-col
        v-for="(item, index) in queryIcon"
        :key="index"
        :xs="6"
        :sm="8"
        :md="3"
        :lg="2"
        :xl="2"
      >
        <el-card
          shadow="hover"
          style="cursor: pointer;"
          @click.native="handleCopyIcon(index, $event)"
        >
          <svg-icon :icon-class="item" @click.stop></svg-icon>
          <div class="icon-text">{{ item }}</div>
        </el-card>
      </el-col>
    </el-row>-->
  </div>
</template>

<script>
import { getIconList } from "@/api/colorfulIcon";
import clip from "@/utils/clipboard";
import ByuiFaultText from "@/components/ByuiFaultText";

export default {
  name: "ColorfulIcon",
  components: { ByuiFaultText },
  data() {
    return {
      queryIcon: [],
      allIcon: [],
      name: "",
      copyText: "",
      tips: "",
    };
  },
  watch: {
    name() {
      this.submit();
    },
  },
  created() {
    this.fetchData();
  },
  mounted() {},
  methods: {
    RandomColor() {
      const arr = [
        "#1890FF",
        "#36CBCB",
        "#4ECB73",
        "#FBD437",
        "#F2637B",
        "#975FE5",
      ];
      let index = Math.floor(Math.random() * arr.length);
      return arr[index];
    },
    submit() {
      let newItems = [];
      this.queryIcon = this.allIcon;
      this.queryIcon.map((item) => {
        if (item.includes(this.name)) {
          newItems.push(item);
        }
      });
      this.queryIcon = newItems;
      this.tips = `共检索到${newItems.length}个图标`;
    },
    fetchData() {
      getIconList().then((res) => {
        this.queryIcon = res.data;
        this.allIcon = res.data;
        this.tips = `共检索到${this.allIcon.length}个图标`;
        this.$baseMessage(
          "累计更新" + this.allIcon.length + "个图标",
          "success"
        );
      });
    },
    handleCopyIcon(index, event) {
      const copyText = `<svg-icon icon-class="${this.queryIcon[index]}" />`;
      this.copyText = copyText;
      clip(copyText, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.colorful-icon-container {
  ::v-deep {
    .el-card__body {
      display: flex;
      justify-content: center; /* 水平居中 */
      align-items: center; /* 垂直居中 */
      position: relative;
      flex-direction: column;

      svg:not(:root) {
        cursor: pointer;
        color: $base-color-blue;
        vertical-align: middle;
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        pointer-events: none;
      }

      .icon-text {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>
