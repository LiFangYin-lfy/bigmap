<template>
  <div
    id="linechart"
    ref="linechart"
    style="width:100%;height: 80%;padding:16px 0 ; box-sizing: border-box;"
  ></div>
</template>

<script>
export default {
  name: 'bar-chart',
  data() {
    return {

    }
  },
  components: {

  },
  created() {
    // let d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]
    // const numbers = d.toString().split(',').reverse()
    // console.log(numbers);
  },
  mounted() {
    this.lineinit()
  },
  methods: {
    lineinit() {

      var chartDom = this.$refs.linechart;
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        color: ['#3f70c8', '#f47f33', '#a4a4a4'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        title: {
          text: '评价结果值域分布',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 24,
          }
        },
        legend: {
          top: '7%',
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: '#a9a9a9',
            fontSize: 14,
          },
          data: ['独立院校', '高职院校', '普通本科']
        },

        grid: {
          left: '5%',
          right: '4%',
          top: '20%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          name: '人次',
          nameGap: 35,
          "splitLine": {     //网格线
            "show": true,
            lineStyle: {
              color: '#636363',
            }
          },

          position: 'top',
          axisLine: {
            show: false,
          },
          nameLocation: 'middle',
          nameTextStyle: {
            color: '#fff',
            fontSize: 16,
          },

          axisLabel: {
            color: '#eee',
            formatter: '{value}'
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          name: '成绩',
          nameGap: 30,
          nameLocation: 'middle',
          nameTextStyle: {
            color: '#fff',
            fontSize: 16,
          },
          data: ["20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"]
        },
        series: [

          {
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            barWidth: 8,
            data: [20, 22, 301, 334, 290, 200, 320, 200, 100, 38, 30, 90, 76, 33, 13]
          },
          {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: [132, 32, 371, 134, 90, 130, 110, 390, 330, 320, 200, 100, 38, 30, 25]
          },
          {
            name: 'Affiliate Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: [20, 182, 191, 234, 290, 330, 110, 30, 90, 76, 33, 10, 30, 40, 18]
          },
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