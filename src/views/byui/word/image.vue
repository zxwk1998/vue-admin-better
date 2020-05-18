<template>
  <div class="image-container">
    <el-button v-show="ifPrint" style="margin: 20px;" @click="printClick"
      >打印</el-button
    >
    <div
      v-for="(item, index) in imageJson"
      :key="index + item"
      class="image_out_item"
    >
      <p>{{ item.title }}</p>
      <el-image
        v-for="(itemImg, indexImg) in item.images1.split(',')"
        :key="itemImg + indexImg"
        style="margin: 10px 0 0 30px;"
        :src="itemImg"
        fit="scale-down"
      ></el-image>
    </div>
  </div>
</template>
<script>
import { getList } from "@/api/word";
export default {
  name: "Image",
  data() {
    return {
      imageJson: [],
      ifPrint: true,
    };
  },
  created() {
    getList().then((res) => {
      this.imageJson = res.data.problem;
    });
  },
  methods: {
    printClick() {
      this.ifPrint = false;
      setTimeout(() => {
        window.print();
        this.ifPrint = true;
      }, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.image_out_item {
  width: 90%;
  // height: 400px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid;
  border-top: none;

  p {
    margin: 30px;
  }
}

.image_out_item:nth-of-type(1) {
  border-top: 1px solid;
}
</style>
