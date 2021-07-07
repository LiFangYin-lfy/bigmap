<template>
  <div class="line_chart" id="linechart" style="width:100%;min-height:320px"></div>
</template>

<script>
export default {
  name: 'line-chart',
  props: {
    setterline: {
      type: String,
      default: null
    }
  },
  components: {

  },
  data() {
    return {
      way: '',
    }
  },
  created() {

  },
  mounted() {
    let that = this
    let newPromise = new Promise((resolve) => {
      resolve()
    })
    //然后异步执行echarts的初始化函数
    newPromise.then(() => {
      that.lineinit();
    })
    // this.$nextTick(() => {
    //   that.lineinit()
    // })

  },
  watch: {
    setterline(newData) {
      this.way = newData
      console.log(newData);
    },
  },
  methods: {
    lineinit() {
      var chartDom = document.getElementById('linechart');
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: '堆叠区域图',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          itemStyle: {
            color: '#fff'
          },
          textStyle: {
            color: '#fff',
            padding: [10, 20]
          },
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 190, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 890, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };

      option && myChart.setOption(option);

    },
  },
  beforeDestroy() {

  }
}

</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
}
</style>