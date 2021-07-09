<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d_flex list_rank">
        <span style="color:#5cd9e8">
          <!-- <icon name="chart-line"></icon> -->
        </span>
        <span class="span_text">任务完成排行榜</span>
      </div>
      <div class="d_flex jc-center body-box">
        <dv-scroll-board :config="config" style="width:100%;height:100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rank-list',
  data() {
    return {
      config: {
        header: ["组件", "分支", "覆盖率"],
        data: [
          ["组件1", "dev-1", "<span  class='colorGrass'>↑75%</span>"],
          ["组件2", "dev-2", "<span  class='colorRed'>↓33%</span>"],
          ["组件3", "dev-3", "<span  class='colorGrass'>↑100%</span>"],
          ["组件4", "rea-1", "<span  class='colorGrass'>↑94%</span>"],
          ["组件5", "rea-2", "<span  class='colorGrass'>↑95%</span>"],
          ["组件6", "fix-2", "<span  class='colorGrass'>↑63%</span>"],
          ["组件7", "fix-4", "<span  class='colorGrass'>↑84%</span>"],
          ["组件8", "fix-7", "<span  class='colorRed'>↓46%</span>"],
          ["组件9", "dev-2", "<span  class='colorRed'>↓13%</span>"],
          ["组件10", "dev-9", "<span  class='colorGrass'>↑76%</span>"]
        ],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: true,
        columnWidth: [50],
        align: ["center"]
      }
    };
  },
  components: {},
  mounted() { },
  methods: {}
};
</script>

<style lang="less">
#centerRight1 {
  border-radius: 16px;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  .bg-color-black {
    width: 100%;
    height: 100%;
    border-radius: 0.125rem;

    .list_rank {
      width: 100%;
      height: 12%;
      display: flex;
      align-items: center;

      .span_text {
        font-size: 14px;
        color: #c3cbde;
        margin-left: 2px;
      }
    }
  }
  .body-box {
    border-radius: 0.125rem;
    overflow: hidden;
    // height: cale(100% - 40px);
    height: 90%;
  }
}
</style>