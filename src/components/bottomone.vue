<template>
  <div id="container" ref="main" style="height: 100%"></div>
</template>

<script>
export default {
  name: 'bottom-one',
  data() {
    return {

    }
  },
  components: {

  },
  created() {

  },
  mounted() {
    this.$nextTick(function () {
      this.getinit()
    })
  },
  methods: {
    getinit() {
      var dom = this.$refs.main
      var myChart = this.$echarts.init(dom);
      var option = {};
      option = {
        title: {
          text: '高校别思政教师人数统计',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 24,

          }
        },
        legend: {
          top: '7%',
          textStyle: {
            color: '#a9a9a9',
            fontSize: 14,
            padding: [4, 0, 0, 0]

          }
        },
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],
            ['Chejese Coca', 24.1, 67.2, 75, 85.4],
            ['Cheejse Coca', 24.1, 67.2, 75, 86.4],
            ['Cheee Coca', 24.1, 65.2, 75, 86.4],
            ['Ceese Coca', 24.1, 67.2, 55, 86.4],
            ['Chee Coca', 25.1, 67.2, 75, 86.4],
            ['eese Coca', 24.1, 67.2, 75, 86.4],
            ['Cheesej Coca', 54.1, 67.2, 75, 56.4],
            ['Chese Coca', 24.1, 57.2, 75, 86.4],
            ['hese Coca1', 54.1, 67.2, 75, 56.4],
            ['aheee Coca', 24.1, 65.2, 75, 86.4],
            ['aeese Coca', 214.1, 67.2, 55, 86.4],
            ['ahee Coca', 215.1, 67.2, 75, 86.4],
            ['aese Coca', 214.1, 67.2, 75, 86.4],
            ['aheesej Coca', 154.1, 67.2, 75, 56.4],
            ['ahese Coca', 124.1, 57.2, 75, 86.4],
            ['aese Coca1', 154.1, 67.2, 75, 56.4],
          ]
        },
        xAxis: {
          type: 'category',
          nameTextStyle: {
            color: '#fff',
            fontSize: 14,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            margin: 16,
            rotate: -45,
            color: '#fff',
            fontSize: 14,
            interval: 0,//代表显示所有x轴标签显示
          }
        },
        yAxis: [
          {
            type: 'value',
            name: '专业别思政教师人员',
            min: 0,
            max: 500,
            interval: 50,
            "splitLine": {     //网格线
              "show": true,
              lineStyle: {
                color: '#636363'
              }
            },

            axisLabel: {
              formatter: '{value}'
            },
            axisLine: {
              show: true,
            },
            "splitLine": {     //网格线
              "show": false
            },
            nameLocation: 'middle',
            nameTextStyle: {
              color: '#eee',
            },
            nameGap: 50,
            axisLabel: {
              color: '#eee',
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '师生比',
            min: 0,
            max: 1400,
            interval: 200,
            "splitLine": {     //网格线
              "show": true,
              lineStyle: {
                color: '#636363'
              }
            },
            axisLine: {
              show: true
            },
            axisTick: {       //y轴刻度线
              "show": true
            },
            nameLocation: 'middle',
            nameTextStyle: {
              color: '#eee',
            },
            nameGap: 50,
            axisLabel: {
              color: '#eee',
              formatter: '{value}'
            }
          }
        ],
        grid: {
          top: '55%'
        },
        series: [
          {
            type: 'bar',
            barWidth: 10,
            stack: 'overlap',
            barGap: '-100%',
          },
          {
            type: 'bar',
            stack: 'overlap',
          },
          {
            type: 'bar',
            stack: 'overlap',
          },
          {
            type: 'bar',
            stack: 'overlap',
          },
          {
            type: 'line',
            itemStyle: {
              color: "rgba(22, 225, 232, 1)",
              borderWidth: 6,
            },
            lineStyle: {
              color: "rgba(22, 225, 232, 1)",
              width: 6,
            },
            data: [141.1, 86.5, 124.1, 140, 241.1, 26.5, 124.1, 142, 121.1, 26.5, 124.1, 140, 126.5, 121.1, 142, 111.1, 126.5, 124.1, 110]
          },
          {
            name: '本科院校',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['16.67%', '30%'],
            avoidLabelOverlap: false,

            label: {
              show: true,
              color: '#fff',
              fontSize: '34',
              fontWeight: 'bold',
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                color: '#fff',
                fontSize: '34',
                fontWeight: 'bold',
                formatter: '{b}: {d}',
              }
            },
            labelLine: {
              show: false
            },
            data: [{
              value: 135,
              name: '视频广告'
            }, {
              value: 1048,
              name: '百度'
            }, {
              value: 651,
              name: '谷歌'
            }, {
              value: 147,
              name: '必应'
            }, {
              value: 102,
              name: '其他'
            }]
          },
          {
            name: '高职院校',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['50%', '30%'],
            label: {
              show: true,
              color: '#fff',
              fontSize: '34',
              fontWeight: 'bold',
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                color: '#fff',
                fontSize: '34',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            avoidLabelOverlap: false,
            data: [{
              value: 135,
              name: '视频广告'
            }, {
              value: 148,
              name: '百度'
            }, {
              value: 251,
              name: '谷歌'
            }, {
              value: 147,
              name: '必应'
            }, {
              value: 102,
              name: '其他'
            }]
          },
          {
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['83.33%', '30%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              color: '#fff',
              fontSize: '34',
              fontWeight: 'bold',
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                color: '#fff',
                fontSize: '34',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [{
              value: 135,
              name: '视频广告'
            }, {
              value: 248,
              name: '百度'
            }, {
              value: 251,
              name: '谷歌'
            }, {
              value: 147,
              name: '必应'
            }, {
              value: 102,
              name: '其他'
            }]
          }
        ]
      };
      myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });
      myChart.setOption(option);
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