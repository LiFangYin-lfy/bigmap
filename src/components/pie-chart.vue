<template>
  <div class="pie__">
    <div class="pie_top">
      <div id="main" ref="main" style="height:100%;"></div>
    </div>
    <div class="pie_down">
      <!-- 4个主要的数据 -->
      <div class="item-box" v-for="(item,index) in numberData" :key="index">
        <div class="d_flex align_item">
          <!-- <span class="coin">￥</span> -->
          <dv-digital-flop :config="item.number" class="flop_item" />
        </div>
        <p class="text" style="text-align: center;">
          {{item.text}}
          <span class="colorYellow">(件)</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pie-chart",
  components: {},
  data() {
    return {
      xData: ["rose1", "rose2", "rose3", "rose4", "rose5", "rose6"],
      seriesData: [
        { value: 10, name: "rose1" },
        { value: 5, name: "rose2" },
        { value: 15, name: "rose3" },
        { value: 25, name: "rose4" },
        { value: 20, name: "rose5" },
        { value: 35, name: "rose6" }
      ],
      numberData: [{
        number: {
          number: [15],
          toFixed: 1,
          content: "{nt}"
        },
        text: "今日构建总量"
      },
      {
        number: {
          number: [1144],
          toFixed: 1,
          content: "{nt}"
        },
        text: "总共完成数量"
      },
      {
        number: {
          number: [361],
          toFixed: 1,
          content: "{nt}"
        },
        text: "正在编译数量"
      },
      {
        number: {
          number: [157],
          toFixed: 1,
          content: "{nt}"
        },
        text: "未通过数量"
      }]
    }
  },
  watch: {
  },
  mounted() {
    this.$nextTick(function () {
      this.initchart();
    });
  },
  methods: {
    initchart() {
      // var chartDom = document.getElementById('main');
      var chartDom = this.$refs.main;
      console.log(chartDom);
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        color: [
          "#37a2da",
          "#32c5e9",
          "#9fe6b8",
          "#ffdb5c",
          "#ff9f7f",
          "#fb7293",
          "#e7bcf3",
          "#8378ea"
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          show: true
        },
        calculable: true,
        legend: {
          orient: "horizontal",
          icon: "circle",
          bottom: 0,
          x: "center",
          data: this.xData,
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "通过率统计",
            type: "pie",
            radius: [10, 60],
            roseType: "area",
            center: ["50%", "40%"],
            data: this.seriesData
          }
        ]
      };

      option && myChart.setOption(option);

    },
  }
}
</script>
<style lang="less" scoped>
.pie__ {
  width: 100%;
  height: 100%;
  .pie_top {
    width: 100%;
    height: 60%;
  }
  .pie_down {
    width: 100%;
    height: 40%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    .item-box {
      width: 50%;
      color: #d3d6dd;
      // float: right;
      .coin {
        color: #ffc107;
      }
      .flop_item {
        height: 50px;
        text-align: left;
        position: relative;
        &::after {
          content: "￥";
          position: absolute;
          bottom: 28%;
          left: 5%;
          font-size: 20px;
          color: #ffc107;
        }
      }
      .colorYellow {
        color: yellowgreen;
      }
    }
  }
}
</style>