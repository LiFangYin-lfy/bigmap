<template>
  <div class="container">
    <div class="sr_img" :style="{'height': windowHeight+'px'}">
      <div class="hx_bt">
        <div class="boxs_city">
          <line-chart :setterline="getterline" />
        </div>
        <div class="cp_boxs">
          <!-- <div id="mydemo" style="width:100%;height:320px"></div> -->
        </div>
        <div class="boxs_city">饼图</div>
      </div>
      <div class="screen_boxs">
        <div
          class="x_item"
          :style="{
              background: 'url(' + left_bg + ') no-repeat center center',
              'background-size': '100% 100%',}"
        >
          <div class="l_titles">饼图</div>
          <div class="map_n ca" :style="{'height': ((windowHeight* 0.4) - 84)+'px'}">
            <div id="barimage" style="width: 100%;height:320px"></div>
          </div>
        </div>
        <div
          class="x_item"
          :style="{
              background: 'url(' + left_bg + ') no-repeat center center',
              'background-size': '100% 100%',}"
        >
          <div class="l_titles">柱状折线图</div>
          <div class="map_n ca" :style="{'height': ((windowHeight* 0.4) - 84)+'px'}">
            <div id="colmun" style="width: 100%;height:320px"></div>
          </div>
        </div>
        <div
          class="x_item"
          :style="{
              background: 'url(' + left_bg + ') no-repeat center center',
              'background-size': '100% 100%',}"
        >
          <div class="l_titles">多折线图</div>
          <div class="map_n ca" :style="{'height': ((windowHeight* 0.4) - 84)+'px'}">
            <div id="main" style="width: 100%;height:320px"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import lineChart from '../../components/line-chart.vue';
export default {
  components: { lineChart },
  name: 'screen',
  data() {
    return {
      left_bg: require('../../assets/image/img_03.png'),
      windowHeight: '',
      getterline: '你好',
    }
  },
  created() { },
  mounted() {
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    this.windowHeight = windowHeight
    this.barimg()
    this.addinit()
    this.foldingcolumn()
    // this.getdemo()
    this.getterline = '你好棒'
  },
  methods: {
    /**
     * 饼图
     */
    barimg() {
      var chartDom = document.getElementById('barimage');
      var myChart = echarts.init(chartDom);
      var datas = [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' }
      ]
      var option;

      option = {
        // backgroundColor: "#E5EEF9",
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: false,
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              alignTo: "none",
              show: true,
              color: '#387fc9',
              position: 'outer',
              formatter: '{b}\n{c}',
              borderWidth: 20,
              borderRadius: 4,
              padding: [-6, -60],
              rich: {
                a: {
                  fontSize: 28,
                  lineHeight: 28
                },
                b: {
                  fontSize: 14,
                  lineHeight: 28,
                }
              }

            },
            labelLine: {
              show: true,
              length2: 60,
              length: 20,
              minTurnAngle: 90,
              lineStyle: {
                color: '#8fdae1',
                cap: 'square'
              },
            },

            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            data: datas
          }
        ]
      };

      option && myChart.setOption(option);

    },
    /**
     * 折柱型图
     */
    foldingcolumn() {
      var chartDom = document.getElementById('colmun');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: ['蒸发量', '降水量', '平均温度'],
          show: false,
        },
        xAxis: [
          {
            type: 'category',
            data: ['第一季度', '第二季度', '第三季度', '第四季度'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: {
          type: 'value',
          name: '水量',
          min: 0,
          max: 40,
          interval: 5,
          axisLabel: {
            formatter: '{value} ml'
          },
          "splitLine": {     //网格线
            "show": false
          },
          "axisTick": {       //y轴刻度线
            "show": false
          },
          "axisLine": {       //y轴
            "show": true
          },
        },
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            barWidth: 30, // 柱图的宽度
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: "#091734" // 0% 处的颜色
                }, {
                  offset: 1,
                  color: "#04b6f7" // 100% 处的颜色
                }], false)
              },
            },

            data: [12.0, 16.0, 14.4, 22.3],
          }
          ,
          {
            name: '平均温度',
            type: 'line',
            data: [20.3, 27.4, 23.0, 36.2],
            lineStyle: {
              color: '#fd933b'
            },
            symbolSize: 8,   //拐点圆的大小
            itemStyle: {
              normal: {
                borderWidth: 6,
                borderType: "solid",
                color: "rgba(242, 193, 121, 1)",
                borderColor: "rgba(242, 193, 121, 1)"
              }

            },
          }
        ]
      };
      option && myChart.setOption(option);
    },

    /**
     * 折线图
     */
    addinit() {
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      var colors = ['#579add', '#f2c27b'];

      option = {
        color: colors,

        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['2015 降水量', '2016 降水量'],
          show: false,
        },
        grid: {
          top: 70,
          bottom: 50
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[1]
            }
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return '降水量  ' + params.value
                  + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
              }
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018']

        },
        yAxis: {
          type: 'value',
          "show": false,
          "axisLine": {       //y轴
            "show": false
          },
          "axisTick": {       //y轴刻度线
            "show": false
          },
        },
        series: [
          {
            name: '2015 降水量',
            type: 'line',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            data: [8.6, 8.9, 25.0, 20.4, 28.7, 70.7, 75.6],
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(6, 42, 76, 0)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(6, 42, 76, 1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            lineStyle: {
              width: 4,
            },
            symbolSize: 6,   //拐点圆的大小
          },
          {
            name: '2016 降水量',
            type: 'line',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            data: [14.9, 5.9, 17.1, 38.7, 26.3, 69.2, 31.6],
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(6, 42, 76, 0)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(6, 42, 76, 1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            lineStyle: {
              width: 4,
            },
            symbolSize: 6,   //拐点圆的大小
          }
        ],

      };

      option && myChart.setOption(option);

    },
    /**
     * demo
     */
    getdemo() {
      var chartDom = document.getElementById('mydemo');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        // title: {
        //   text: '主标题',
        //   textStyle: {
        //     color: ' #fff',
        //     fontSize: 28,
        //     fontWeight: 'bold',
        //     width: 20,
        //     textBorderColor: '#ff0000',
        //     textBorderWidth: 4,
        //     textBorderType: 'solid',
        //   },
        //   subtext: '副标题',
        //   subtextStyle: {
        //     color: ' #fff',
        //     fontSize: 28,
        //     fontWeight: 'bold',
        //   },
        //   textAlign: 'left',
        //   padding: [10, 3, 13, 10]
        // },
        legend: {  // 图例
          orient: 'horizontal'  // 水平   'vertical' 垂直

        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      };

      option && myChart.setOption(option);

    },
  },
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  //   overflow: hidden;

  .sr_img {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 24px;
    box-sizing: border-box;
    .hx_bt {
      width: 100%;
      height: 55%;
      display: flex;

      .boxs_city {
        flex-grow: 1;
        border: 1px solid red;
        color: tomato;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .cp_boxs {
        flex-grow: 3;
        border: 1px solid red;
      }
    }

    .screen_boxs {
      width: 100%;
      height: 40%;
      display: flex;

      .x_item {
        width: 33.33%;
        padding: 24px 24px 0;
        box-sizing: border-box;

        .l_titles {
          font-size: 16px;
          font-family: Source Han Sans CN;
          color: #ffffff;
          line-height: 20px;
          position: relative;
          width: 100%;
          padding-left: 16px;
          box-sizing: border-box;

          &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 4px;
            height: 100%;
            background-color: #fb8d34;
          }
        }

        .ca {
          margin-top: 16px;
        }
      }
    }
  }
}
</style>