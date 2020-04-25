<template>
  <div class="player-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card shadow="hover">
          <div slot="header">播放传统MP4</div>
          <byui-player-mp4 :config="config1" @player="Player1 = $event" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card shadow="hover">
          <div slot="header">播放m3u8,且不暴露视频地址</div>
          加群获取
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card shadow="hover">
          <div slot="header">播放flv,且不暴露视频地址</div>
          加群获取
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ByuiPlayerMp4 } from "@/plugins/byuiPlayer.js";

export default {
  name: "Player",
  components: {
    ByuiPlayerMp4,
  },
  data() {
    return {
      config1: {
        id: "mse1",
        url:
          "//s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-720p.mp4",
      },
      Player1: null,
      config2: {
        id: "mse2",
        url: "",
      },
      Player2: null,
      config3: {
        id: "mse3",
        url: "",
      },
      Player3: null,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
