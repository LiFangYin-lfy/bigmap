<template>
  <div class="container">
    <div class="big__map">
      <div
        class="bit_title"
        :style="{
          background: 'url(' + title_bg + ') no-repeat center center',
          'background-size': '100% 100%',
        }"
      >
        <div class="dtes">现有数据呈现展示平台</div>
      </div>
      <div class="maps_lst">
        <div class="left_bos">
          <div
            class="wai_is"
            :style="{
              background: 'url(' + left_bg + ') no-repeat center center',
              'background-size': '100% 100%',
            }"
          >
            <div class="top_left_one" :style="{'height':((windowHeight-100)* 0.5) +'px'}">
              <div class="one_title">
                <p class="sma_p">有效样本及无效样本数量</p>
                <img src="../../assets/image/img_07.png" class="down_affter" alt />
              </div>
              <div class="count_num">
                <div class="tesxd">
                  <div class="coun_boxs">{{prescription.total}}</div>
                  <img src="../../assets/image/img_17.png" class="arrow_top" alt />
                </div>
              </div>
              <div class="pie_chart">
                <div class="cityGreenLand-charts" id="charts" style="width:100%; min-height :180px"></div>
              </div>
              <div class="down_one_ens">
                <div class="item_ones">
                  <div class="ons_blue">
                    <div class="ons_left_big">{{prescription.effectNum}}</div>
                    <div class="small_boxs">{{prescription.effectRatio}}</div>
                  </div>
                  <div class="ons_text">有效样本数量</div>
                </div>

                <div class="item_ones items_twos">
                  <div class="ons_blue">
                    <div class="ons_left_big">{{prescription.invalidNum}}</div>
                    <div class="small_boxs">{{prescription.invalidRatio}}</div>
                  </div>
                  <div class="ons_text">无效样本数量</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="wai_is"
            :style="{
              background: 'url(' + left_bg + ') no-repeat center center',
              'background-size': '100% 100%',
            }"
          >
            <div
              class="top_left_one top_left_two"
              :style="{'height':((windowHeight-100)* 0.5)  +'px'}"
            >
              <div class="one_title">
                <p class="sma_p">已参加课程录制教师的数量</p>
                <img src="../../assets/image/img_07.png" class="down_affter" alt />
              </div>
              <div class="count_num">
                <div class="tesxd">
                  <div class="coun_boxs">{{courses.total}}</div>
                  <img src="../../assets/image/img_17.png" class="arrow_top" alt />
                </div>
              </div>
              <div class="gress_chart">
                <div class="gress_items" v-for="(item, index) in customColors" :key="index">
                  <div class="ress_namelisg">
                    <div class="yuan_s">
                      <div class="yuan_dian" :style="{ 'border-color': item.color }"></div>
                      <div class="ran_name">{{ item.names }}</div>
                    </div>
                    <div class="couned">{{ item.percentage }}</div>
                  </div>
                  <div class="ress_pre">
                    <el-progress
                      :text-inside="true"
                      :stroke-width="20"
                      :percentage="item.count"
                      :color="item.color"
                    ></el-progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="center_bos">
          <div class="top_center" :style="{'height':((windowHeight-100 )*0.6) +'px'}">
            <div id="maid" style="width:100%;height:100%;"></div>
          </div>
          <div
            class="s_sdhfash"
            :style="{
              background: 'url(' + left_bg + ') no-repeat center center',
              'background-size': '100% 100%',
              'height':((windowHeight-100 )*0.4) +'px'
            }"
          >
            <div class="c_cnter">
              <div class="one_title" style="margin-bottom: 20px">
                <p class="sma_p">课程主观评价</p>
                <img src="../../assets/image/img_07.png" class="down_affter" alt />
              </div>
              <div class="evaluation" :style="{ 'height':((windowHeight-100)*0.4 - 100)  +'px'}">
                <div class="list_items" v-for="(item, index) in resultList" :key="index">
                  <div class="left_head">
                    <img src="../../assets/image/img_18.png" alt />
                  </div>
                  <div class="right_s">
                    <div class="p_nanmes">{{item.truename}}</div>
                    <div class="items_texts two_text">{{item.result}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right_bos">
          <div
            class="top_right_one nt_bos"
            :style="{
              background: 'url(' + left_bg + ') no-repeat center center',
              'background-size': '100% 100%',
             'height':((windowHeight-100)* 0.5)  +'px'
            }"
          >
            <div class="one_title">
              <p class="sma_p">已完成评课任务教师数量</p>
              <img src="../../assets/image/img_07.png" class="down_affter" alt />
            </div>
            <div class="count_num">
              <div class="tesxd">
                <div class="coun_boxs">{{evaluteTeacherNum.total}}</div>
                <img src="../../assets/image/img_17.png" class="arrow_top" alt />
              </div>
            </div>
            <div class="pie_chart_a">
              <div class="dayFluxDetail" id="vertical" style="width: 100%; min-height:320px"></div>
            </div>
          </div>
          <div
            class="top_right_two top_right_one"
            :style="{
              background: 'url(' + left_bg + ') no-repeat center center',
              'background-size': '100% 100%',
               'height':((windowHeight-100)* 0.5)  +'px'
            }"
          >
            <div class="one_title">
              <p class="sma_p">评价报告分数分布</p>
              <img src="../../assets/image/img_07.png" class="down_affter" alt />
            </div>
            <div class="count_nd">
              <div class="personlist">
                <div class="left_arrow" @click="prve">
                  <img src="../../assets/image/img_10.png" alt />
                </div>
                <div class="info_list">
                  <div
                    class="iten_name"
                    v-for="(name, index) in small"
                    :key="index"
                    :class="name.is_true == 1 ? 'istrue_class' : ''"
                    @click="changeke(index)"
                  >{{ name.name }}</div>
                </div>
                <div class="right_arrow" @click="next">
                  <img src="../../assets/image/img_09.png" alt />
                </div>
              </div>
            </div>
            <div class="pie_chart_b">
              <div id="main" style="width: 100%; min-height: 320px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '@/utils/jquery.min.js'
export default {
  name: "home",
  data() {
    return {
      windowHeight: '',
      bg: require('../../assets/image/img_05.png'),
      title_bg: require('../../assets/image/img_08.png'),
      left_bg: require('../../assets/image/img_03.png'),
      smatinit: false,
      customColors: [
        { color: '#f56c6c', percentage: 20, names: '阿萨' },
        { color: '#e6a23c', percentage: 40, names: '阿萨s' },
        { color: '#5cb87a', percentage: 60, names: '阿的萨' },
        { color: '#1989fa', percentage: 80, names: '阿扽的' },
        { color: '#7F5BE6', percentage: 80, names: '阿扽的' }
      ],
      person: [],
      small: [],
      four: 4,
      optionData: [{
        name: '',
        value: 13000,
        itemStyle: {
          color: '#4a8fcc',
        }
      }, {
        name: '',
        value: 33222,
        itemStyle: {
          color: '#ef7d32'
        }
      }],
      prescription: {},
      courses: {},
      evaluteTeacherNum: {},
      resultList: [],
      currnetindex: 0,
      id: ''
    }
  },

  created() {
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    this.windowHeight = windowHeight
    console.log(this.windowHeight);
    this.gethave()
    this.getcourses()
    this.getevaluteTeacherNum()
    this.getevaluteType()
    this.getevaluteScore()
    this.getresultList()
  },
  mounted() {
    let newPromise = new Promise((resolve) => {
      resolve()
    })
    //然后异步执行echarts的初始化函数
    newPromise.then(() => {
      this.initmg()
    })
  },
  methods: {
    /**
     * 有效样本及无效样本数量
     */
    async gethave() {
      try {
        const { data: { data } } = await this.$http.post('/index/index/sampleNum')
        // console.log(data);
        this.prescription = data
        this.optionData[0].value = data.effectNum
        this.optionData[1].value = data.invalidNum
        this.initf()
      } catch (err) {
        console.log(err);
        this.$message.error(err.msg)
      }
    },
    /**
     * 已参加录课的教师数量
     */
    async getcourses() {
      try {
        const { data: { data } } = await this.$http.post('/index/index/joinTeacherNum')
        console.log(data);
        this.courses = data
        this.list = data.list
        // this.arr = data.arr
        let total = data.total
        data.arr.forEach(item => {
          let ab = (item.percentage / total).toFixed(2) * 100
          item.count = ab
        })
        this.customColors = data.arr
        console.log();
      } catch (err) {
        console.log(err);
        this.$message.error(err.msg)
      }
    },
    /**
     * 已完成评课教师数量
     */
    async getevaluteTeacherNum() {
      try {
        const { data: { data } } = await this.$http.post('/index/index/evaluteTeacherNum')
        console.log(data);
        this.evaluteTeacherNum = data
        this.getvertical(data.list)
      } catch (err) {
        console.log(err);
        this.$message.error(err.msg)
      }
    },
    /**
     * 评价报告分数，类型
     */
    async getevaluteType() {
      try {
        const { data: { data } } = await this.$http.post('/index/index/evaluteType')
        console.log(data, '评价报告分数，类型');
        data.forEach(item => {
          item.is_true = 0
        });
        this.person = data
        let index = this.currnetindex
        if (data.length > 2) {
          data[index + 1].is_true = 1
          this.currnetindex = index + 1
          this.small = [data[index], data[index + 1], data[index + 2]]
          console.log(this.small);
        } else {
          this.small = data
        }
        console.log(this.person);
      } catch (err) {
        console.log(err);
        this.$message.error(err.msg)
      }
    },
    /**
   * 评价报告分数
   */
    async getevaluteScore() {
      try {
        const { data: { data } } = await this.$http.post('/index/index/evaluteScore', { id: this.id })
        // console.log(data);
        this.getsmooth(data)
      } catch (err) {
        console.log(err);
        this.$message.error(err.msg)
      }
    },
    /**
     * 获取评论信息
     */
    async getresultList() {
      try {
        const { data: { data } } = await this.$http.post('/index/index/resultList')
        // console.log(data);
        this.resultList = data
      } catch (err) {
        console.log(err);
        this.$message.error(err.msg)
      }
    },
    smalinit() {
      this.smatinit = true
      console.log(this.smatinit);
    },
    prve() {
      let index = this.currnetindex, lsit = this.person.length - 1
      if (index > lsit) {
        this.currnetindex = lsit
        this.pubfuy(this.currnetindex)
      } else if (index == 0) {
        this.currnetindex = lsit
        this.pubfuy(this.currnetindex)
      } else {
        this.currnetindex -= 1
        this.pubfuy(this.currnetindex)
      }
    },
    next() {
      let index = this.currnetindex
      if (index < this.person.length - 1) {
        this.currnetindex++
        this.pubfuy(this.currnetindex)
      } else if (index == this.person.length - 1) {
        this.currnetindex = index
        this.pubfuy(this.currnetindex)
        this.currnetindex = 5
      } else {
        this.currnetindex = 0
        this.pubfuy(this.currnetindex)
      }
    },
    changeke(i) {
      let nme = this.small[i].name, send, data = this.person;
      this.person.forEach((item, index) => {
        item.is_true = 0
        if (item.name == nme) {
          send = index
        }
      })
      this.currnetindex = send
      if (send == 0) {
        data[send].is_true = 1
        this.small = [data[send], data[send + 1], data[send + 2]]
      } else if (send == 1) {
        data[send].is_true = 1
        this.small = [data[send - 1], data[send], data[send + 1]]
      } else if (send == 2) {
        data[send].is_true = 1
        this.small = [data[send - 1], data[send], data[send + 1]]
      } else if (send == 3) {
        data[send].is_true = 1
        this.small = [data[send - 1], data[send], data[send + 1]]
      } else if (send == 4) {
        data[send].is_true = 1
        this.small = [data[send - 1], data[send], data[0]]
      }
      this.id = data[send].id
      this.getevaluteScore()
    },
    pubfuy(df) {
      this.person.forEach((item) => {
        item.is_true = 0
      })
      let send = Number(df)
      let data = this.person;
      if (send == 0) {
        data[send].is_true = 1
        this.small = [data[send], data[send + 1], data[send + 2]]
      } else if (send == 1) {
        data[send].is_true = 1
        this.small = [data[send - 1], data[send], data[send + 1]]
      } else if (send == 2) {
        data[send].is_true = 1
        this.small = [data[send - 1], data[send], data[send + 1]]
      } else if (send == 3) {
        data[send].is_true = 1
        this.small = [data[send - 1], data[send], data[send + 1]]
      } else if (send == 4) {
        data[send].is_true = 1
        this.small = [data[send - 1], data[send], data[0]]
      }
      this.id = data[send].id
      this.getevaluteScore()
      console.log(this.small);
    },
    getsmooth(list) {
      var chartDom = document.getElementById('main');
      var myChart = this.$echarts.init(chartDom);
      var option;
      let optiondata = list.map((item) => item.score)
      let optionnum = list.map((item) => item.num)
      console.log(optiondata);
      option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: optiondata
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: optionnum,
          type: 'line',
          smooth: true,
          itemStyle: {
            color: "#00FFFF",
            fontSize: '18'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(11, 215, 240, 1)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(11, 215, 240, 0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
          lineStyle: {
            color: '#0BD7F0',
            width: 6,
          }

        }]
      };
      option && myChart.setOption(option);

    },
    getvertical(list) {
      console.log(list);
      let optiondata = list.map((item) => item.name)
      let optionnum = list.map((item) => item.num)
      var chartDom = document.getElementById('vertical');
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        "show": false,
        "splitLine": {
          "show": false
        },
        xAxis: {
          type: 'category',
          show: true,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            margin: 14,
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: 18,
            borderWidth: 2,
            borderType: "dashed",
            width: 120,
          },
          axisTick: {
            show: false,
          },
          data: optiondata
        },
        yAxis: {
          "show": false,
          "axisLine": {       //y轴
            "show": false
          },
          "axisTick": {       //y轴刻度线
            "show": false
          },
          "splitLine": {     //网格线
            "show": false
          }
        },
        series: [{
          type: 'bar',
          barWidth: 37,
          label: {
            show: true,
            position: "outside",
            distance: 10,
            fontSize: 16
          },
          itemStyle: {
            // color: new echarts.graphic.LinearGradient(
            //   0, 0, 1, 0,
            //   [
            //     { offset: 0, color: '#00ffff' },
            //     // { offset: 0, color: '#2dc3db' },
            //     { offset: 1, color: '#0f88c0' }
            //   ]
            // ),
            normal: {
              borderWidth: 1,
              borderColor: '#18CEE2',
              barBorderRadius: 28,
              color: new echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                  { offset: 0, color: '#2dc3db' },
                  { offset: 1, color: '#0f88c0' }
                ]
              )
            },
            // emphasis: {
            //   itemStyle: {
            //     // 高亮时点的颜色。
            //     color: 'blue'
            //   },
            //   barBorderRadius: 13,
            //   shadowBlur: 18,
            //   // shadowColor: 'rgba(218,170, 58, 0.7)',
            //   shadowColor: 'rgba(234, 3, 3, 1)',
            //   showBackground: {
            //     color: 'rgba(180, 180, 180, 0.2)'
            //   }
            // },

          },
          data: optionnum
        }, {
          name: 'a',
          tooltip: {
            show: false
          },
          type: 'pictorialBar',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                  { offset: 0, color: '#2bc6dd' },
                  { offset: 1, color: '#18cde1' }
                ]
              ),
              borderWidth: 1,
              borderColor: '#18CEE2'
            }
          },
          symbol: 'circle',
          symbolSize: ['38', '22'],
          symbolPosition: 'end',
          data: optionnum,
          z: 3
        }]
      };
      option && myChart.setOption(option);
    },
    getmainCahrts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('mainCahrts'));
      const data = [220, 182, 191, 234,]

      // 指定图表的配置项和数据 
      var option = {
        roam: true, // 禁止滚轮事件
        tooltip: {
          show: false,
        },
        grid: {
          x: '0%', //距离左边
          x2: '0%', //距离右边
          y: '15%', // 上距离
          y2: '15%', // 下距离
        },
        xAxis: {
          axisLabel: {
            interval: 0, //横轴信息全部显示
            rotate: 0, //0度角倾斜显示
            show: true,
            textStyle: {
              color: '#333333'
            },
          },
          axisLine: {
            lineStyle: {
              color: '#B6C1C4',
            },
          },
          axisTick: {
            show: false,
          },
          data: ['1日', '2日', '3日', '4日']
        },
        yAxis: {
          show: false,
          "axisLine": {       //y轴
            "show": false
          },
          "axisTick": {       //y轴刻度线
            "show": false
          },
          "splitLine": {     //网格线
            "show": false,
            "color": '#ff0000'
          }
        },

        series: [{
          name: 'a',
          tooltip: {
            show: false
          },
          data: data,

          type: 'bar',
          barWidth: 10,
          barGap: 200,
          barCategoryGap: 200,
          // // 基准线
          // markLine: {
          //   silent: true, // 不响应鼠标事件
          //   symbol: ['none', 'none'],
          //   position: 'top',
          //   label: {
          //     show: false,
          //   },
          //   lineStyle: {
          //     normal: {
          //       // color: '#D3D3D3' // 这儿设置安全基线颜色
          //       color: '' // 这儿设置安全基线颜色
          //     }
          //   },
          //   data: [{
          //     name: '平均线',
          //     // 支持 'average', 'min', 'max'
          //     type: 'average'
          //   },],
          // },
          label: {
            show: true, // 柱子顶部的数值
            position: 'top',
            top: 0,
            fontSize: 6,
            offset: [0, -10],
            formatter: function (params) {
              let num = params.value;
              if (num > 1024) {
                return (num / 1024).toFixed(2) + 'GB'
              } else if (num < 1024 && num > 0) {
                return num.toFixed(2) + 'MB'
              } else {
                return '';
              }
            }
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: "#4729FB" // 0% 处的颜色
              }, {
                offset: 0.5,
                color: "#3077F7" // 50% 处的颜色
              }, {
                offset: 1,
                color: "#1FB0F4" // 100% 处的颜色
              }], false)
            }
          },
          // barGap: 0
        }, {
          type: 'bar',
          barWidth: 4,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: "#235DFF" // 0% 处的颜色
              }, {
                offset: 0.5,
                color: "#59ACF7" // 50% 处的颜色
              }, {
                offset: 1,
                color: "#71CAFF" // 100% 处的颜色
              }], false)
            }
          },
          barGap: 0,
          data: data.map(item => item + 4.5)
        }, {
          name: 'b',
          tooltip: {
            show: false
          },
          type: 'pictorialBar',
          itemStyle: {
            borderWidth: 0,
            borderColor: '#47A6FF',
            color: '#1AC0F4',

          },
          symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
          symbolSize: ['13', '3'],
          symbolOffset: ['-1', '-2'], // 左右 ，上下
          symbolRotate: 0,
          symbolPosition: 'end',
          data: data,
          z: 3
        }],

        // 可左右滑动
        dataZoom: [{
          show: false,
          realtime: true,
          start: 30,
          end: 50
        }, {
          type: 'inside',
          realtime: false,
          start: 30,
          end: 50,
          zoomOnMouseWheel: false, // 禁用滚轮
        }],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    /**
     * 饼状图
     */
    initf() {
      var chartDom = document.getElementById('charts');
      var myChart = this.$echarts.init(chartDom);
      // 传入数据生成 option
      this.option = this.getPie3D(this.optionData, 0.8);
      myChart.setOption(this.option);
      //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
      this.option.series.push({
        name: 'pie2d',
        type: 'pie',
        label: {
          show: false
        },
        labelLine: {
          length: 10,
          length2: 10
        },
        startAngle: -20, //起始角度，支持范围[0, 360]。
        clockwise: false,//饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ['20%', '50%'],
        center: ['50%', '50%'],
        data: this.optionData,
        itemStyle: {
          opacity: 0
        }
      });
      myChart.setOption(this.option);
      this.bindListen(myChart);
    },
    getPie3D(pieData, internalDiameterRatio) {
      //internalDiameterRatio:透明的空心占比
      let that = this;
      let series = [];
      let sumValue = 0;
      let startValue = 0;
      let endValue = 0;
      let legendData = [];
      let legendBfb = [];
      let k = 1 - internalDiameterRatio;
      pieData.sort((a, b) => {
        return (b.value - a.value);
      });
      // 为每一个饼图数据，生成一个 series-surface 配置
      for (let i = 0; i < pieData.length; i++) {
        sumValue += pieData[i].value;
        let seriesItem = {
          name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
          type: 'surface',
          parametric: true,
          wireframe: {
            show: false
          },
          pieData: pieData[i],
          pieStatus: {
            selected: false,
            hovered: false,
            k: k
          },
          center: ['10%', '50%']
        };

        if (typeof pieData[i].itemStyle != 'undefined') {
          let itemStyle = {};
          typeof pieData[i].itemStyle.color != 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null;
          typeof pieData[i].itemStyle.opacity != 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null;
          seriesItem.itemStyle = itemStyle;
        }
        series.push(seriesItem);
      }

      // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
      // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
      legendData = [];
      legendBfb = [];
      for (let i = 0; i < series.length; i++) {
        endValue = startValue + series[i].pieData.value;
        series[i].pieData.startRatio = startValue / sumValue;
        series[i].pieData.endRatio = endValue / sumValue;
        series[i].parametricEquation = this.getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio,
          false, false, k, series[i].pieData.value);
        startValue = endValue;
        let bfb = that.fomatFloat(series[i].pieData.value / sumValue, 4);
        legendData.push({
          name: series[i].name,
          value: bfb
        });
        legendBfb.push({
          name: series[i].name,
          value: bfb
        });
      }
      let boxHeight = this.getHeight3D(series, 16);//通过传参设定3d饼/环的高度，26代表26px
      // 准备待返回的配置项，把准备好的 legendData、series 传入。
      let option = {
        legend: {
          data: legendData,
          orient: 'horizontal',
          left: 10,
          top: 10,
          itemGap: 10,
          textStyle: {
            color: '#A1E2FF',
          },
          label: {
            show: true,
            position: 'inside'
          },
          show: true,  //  显示数据与否
          icon: "circle",
          formatter: function (param) {
            let item = legendBfb.filter(item => item.name == param)[0];
            let bfs = that.fomatFloat(item.value * 100, 2) + "%";
            return `${item.name}  ${bfs}`;
          }
        },
        labelLine: {
          show: true,
          lineStyle: {
            color: '#7BC0CB'
          }
        },
        label: {
          show: true,
          position: 'inside',
          rich: {
            b: {
              color: '#7BC0CB',
              fontSize: 12,
              lineHeight: 20
            },
            c: {
              fontSize: 16,
            },
          },
          formatter: '{b|{b} \n}{c|{c}}{b|  亩}',

        },
        tooltip: {
          formatter: params => {
            if (params.seriesName !== 'mouseoutSeries' && params.seriesName !== 'pie2d') {
              let bfb = ((option.series[params.seriesIndex].pieData.endRatio - option.series[params.seriesIndex].pieData.startRatio) *
                100).toFixed(2);
              return `${params.seriesName}<br/>` +
                `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>` +
                `${bfb}%`;
            }
          }
        },
        xAxis3D: {
          min: -1,
          max: 1
        },
        yAxis3D: {
          min: -1,
          max: 1
        },
        zAxis3D: {
          min: -1,
          max: 1
        },
        grid3D: {
          show: false,
          boxHeight: boxHeight, //圆环的高度
          viewControl: { //3d效果可以放大、旋转等，请自己去查看官方配置
            alpha: 40, //角度
            distance: 200,//调整视角到主体的距离，类似调整zoom
            rotateSensitivity: 0, //设置为0无法旋转
            zoomSensitivity: 0, //设置为0无法缩放
            panSensitivity: 0, //设置为0无法平移
            autoRotate: false //自动旋转
          }
        },
        series: series
      };
      return option;
    },
    //获取3d丙图的最高扇区的高度
    getHeight3D(series, height) {
      series.sort((a, b) => {
        return (b.pieData.value - a.pieData.value);
      })
      return height * 25 / series[0].pieData.value;
    },
    // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
    getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {
      // 计算
      let midRatio = (startRatio + endRatio) / 2;
      let startRadian = startRatio * Math.PI * 2;
      let endRadian = endRatio * Math.PI * 2;
      let midRadian = midRatio * Math.PI * 2;
      // 如果只有一个扇形，则不实现选中效果。
      if (startRatio === 0 && endRatio === 1) {
        isSelected = false;
      }
      // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
      k = typeof k !== 'undefined' ? k : 1 / 3;
      // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
      let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
      let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;
      // 计算高亮效果的放大比例（未高亮，则比例为 1）
      let hoverRate = isHovered ? 1.05 : 1;
      // 返回曲面参数方程
      return {
        u: {
          min: -Math.PI,
          max: Math.PI * 3,
          step: Math.PI / 32
        },
        v: {
          min: 0,
          max: Math.PI * 2,
          step: Math.PI / 20
        },
        x: function (u, v) {
          if (u < startRadian) {
            return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
          }
          if (u > endRadian) {
            return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
          }
          return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        y: function (u, v) {
          if (u < startRadian) {
            return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
          }
          if (u > endRadian) {
            return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
          }
          return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        z: function (u, v) {
          if (u < -Math.PI * 0.5) {
            return Math.sin(u);
          }
          if (u > Math.PI * 2.5) {
            return Math.sin(u) * h * .1;
          }
          return Math.sin(v) > 0 ? 1 * h * .1 : -1;
        }
      };
    },

    fomatFloat(num, n) {
      var f = parseFloat(num);
      if (isNaN(f)) {
        return false;
      }
      f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂   
      var s = f.toString();
      var rs = s.indexOf('.');
      //判定如果是整数，增加小数点再补0
      if (rs < 0) {
        rs = s.length;
        s += '.';
      }
      while (s.length <= rs + n) {
        s += '0';
      }
      return s;
    },

    bindListen(myChart) {
      // 监听鼠标事件，实现饼图选中效果（单选），近似实现高亮（放大）效果。
      let that = this;
      let selectedIndex = '';
      let hoveredIndex = '';
      // 监听点击事件，实现选中效果（单选）
      myChart.on('click', function (params) {
        // 从 option.series 中读取重新渲染扇形所需的参数，将是否选中取反。
        let isSelected = !that.option.series[params.seriesIndex].pieStatus.selected;
        let isHovered = that.option.series[params.seriesIndex].pieStatus.hovered;
        let k = that.option.series[params.seriesIndex].pieStatus.k;
        let startRatio = that.option.series[params.seriesIndex].pieData.startRatio;
        let endRatio = that.option.series[params.seriesIndex].pieData.endRatio;
        // 如果之前选中过其他扇形，将其取消选中（对 option 更新）
        if (selectedIndex !== '' && selectedIndex !== params.seriesIndex) {
          that.option.series[selectedIndex].parametricEquation = that.getParametricEquation(that.option.series[
            selectedIndex].pieData
            .startRatio, that.option.series[selectedIndex].pieData.endRatio, false, false, k, that.option.series[
              selectedIndex].pieData
            .value);
          that.option.series[selectedIndex].pieStatus.selected = false;
        }
        // 对当前点击的扇形，执行选中/取消选中操作（对 option 更新）
        that.option.series[params.seriesIndex].parametricEquation = that.getParametricEquation(startRatio, endRatio,
          isSelected,
          isHovered, k, that.option.series[params.seriesIndex].pieData.value);
        that.option.series[params.seriesIndex].pieStatus.selected = isSelected;
        // 如果本次是选中操作，记录上次选中的扇形对应的系列号 seriesIndex
        isSelected ? selectedIndex = params.seriesIndex : null;
        // 使用更新后的 option，渲染图表
        myChart.setOption(that.option);
      });
      // 监听 mouseover，近似实现高亮（放大）效果
      myChart.on('mouseover', function (params) {
        // 准备重新渲染扇形所需的参数
        let isSelected;
        let isHovered;
        let startRatio;
        let endRatio;
        let k;
        // 如果触发 mouseover 的扇形当前已高亮，则不做操作
        if (hoveredIndex === params.seriesIndex) {
          return;
          // 否则进行高亮及必要的取消高亮操作
        } else {
          // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
          if (hoveredIndex !== '') {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
            isSelected = that.option.series[hoveredIndex].pieStatus.selected;
            isHovered = false;
            startRatio = that.option.series[hoveredIndex].pieData.startRatio;
            endRatio = that.option.series[hoveredIndex].pieData.endRatio;
            k = that.option.series[hoveredIndex].pieStatus.k;
            // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
            that.option.series[hoveredIndex].parametricEquation = that.getParametricEquation(startRatio, endRatio,
              isSelected,
              isHovered, k, that.option.series[hoveredIndex].pieData.value);
            that.option.series[hoveredIndex].pieStatus.hovered = isHovered;
            // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
            hoveredIndex = '';
          }
          // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
          if (params.seriesName !== 'mouseoutSeries' && params.seriesName !== 'pie2d') {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
            isSelected = that.option.series[params.seriesIndex].pieStatus.selected;
            isHovered = true;
            startRatio = that.option.series[params.seriesIndex].pieData.startRatio;
            endRatio = that.option.series[params.seriesIndex].pieData.endRatio;
            k = that.option.series[params.seriesIndex].pieStatus.k;
            // 对当前点击的扇形，执行高亮操作（对 option 更新）
            that.option.series[params.seriesIndex].parametricEquation = that.getParametricEquation(startRatio, endRatio,
              isSelected, isHovered, k, that.option.series[params.seriesIndex].pieData.value + 5);
            that.option.series[params.seriesIndex].pieStatus.hovered = isHovered;
            // 记录上次高亮的扇形对应的系列号 seriesIndex
            hoveredIndex = params.seriesIndex;
          }
          // 使用更新后的 option，渲染图表
          myChart.setOption(that.option);
        }
      });
      // 修正取消高亮失败的 bug
      myChart.on('globalout', function () {
        // 准备重新渲染扇形所需的参数
        let isSelected;
        let isHovered;
        let startRatio;
        let endRatio;
        let k;
        if (hoveredIndex !== '') {
          // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
          isSelected = that.option.series[hoveredIndex].pieStatus.selected;
          isHovered = false;
          k = that.option.series[hoveredIndex].pieStatus.k;
          startRatio = that.option.series[hoveredIndex].pieData.startRatio;
          endRatio = that.option.series[hoveredIndex].pieData.endRatio;
          // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
          that.option.series[hoveredIndex].parametricEquation = that.getParametricEquation(startRatio, endRatio,
            isSelected,
            isHovered, k, that.option.series[hoveredIndex].pieData.value);
          that.option.series[hoveredIndex].pieStatus.hovered = isHovered;
          // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
          hoveredIndex = '';
        }
        // 使用更新后的 option，渲染图表
        myChart.setOption(that.option);
      });
    },
    initmg() {
      var chart = this.$echarts.init(document.getElementById('maid'));
      $.getJSON('../../utils/tianjin.json', function (data) {
        chart.registerMap("天津", data);
        var d = [];
        for (var i = 0; i < data.features.length; i++) {
          d.push({
            name: data.features[i].properties.name
          })
        }
        renderMap("天津", d)
      });
      var option = {
        background: 'transparent',
        title: {
          text: '',
          subtext: '省份地图',
          link: 'http://www.bootstrapMB.com',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: "Microsoft YaHei"
          },
          subtextStyle: {
            color: '#ccc',
            fontSize: 13,
            fontWeight: 'normal',
            fontFamily: "Microsoft YaHei"
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        animationDuration: 1000,
        animationEasing: 'cubicOut',
        animationDurationUpdate: 1000
      };
      function renderMap(map, data) {
        option.title.subtext = map;
        option.series = [{
          // name: map,
          type: 'map',
          mapType: map,
          roam: false,
          nameMap: {
            'china': '中国'
          },
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#83fbfe',
                fontSize: 13
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 13
              }
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#A9A9A9',
              borderColor: 'dodgerblue'
            },
            emphasis: {
              areaColor: 'darkorange'
            }
          },
          data: data
        }];
        echarts.setOption(option)
      }
    },
  },
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;

  .big__map {
    width: 100%;

    .bit_title {
      width: 100%;
      position: relative;
      height: 95px;
      .title_imgs {
        width: 100%;
      }
      .dtes {
        font-size: 31px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #83fbfe;
        opacity: 1;
        line-height: 45px;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.65) 0%,
          rgba(255, 255, 255, 0) 100%
        );
        -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 20;
        transform: translate(-50%, -50%);
      }
    }

    .maps_lst {
      width: 100%;
      height: 100%;
      display: flex;

      .left_bos {
        flex: 2;

        .top_left_one {
          width: 100%;
          padding: 16px;
          box-sizing: border-box;
          .pie_chart {
            width: 100%;
          }

          .down_one_ens {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 16px;
            box-sizing: border-box;

            .item_ones {
              width: 218px;
              padding: 6px 25px 12px 24px;
              box-sizing: border-box;
              background-image: linear-gradient(to right, #1093fc, #94d4fb);
              border-radius: 8px;
              box-sizing: border-box;

              .ons_blue {
                width: 100%;
                display: flex;
                align-items: baseline;
                justify-content: space-between;

                .ons_left_big {
                  font-size: 38px;
                  font-family: Source Han Sans CN;
                  font-weight: bold;
                  color: #ffffff;
                  margin-right: 4px;
                }
                .small_boxs {
                  font-size: 18px;
                  font-family: Source Han Sans CN;
                  font-weight: bold;
                  color: #ffffff;
                }
              }

              .ons_text {
                height: 18px;
                font-size: 18px;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #ffffff;
              }
            }

            .items_twos {
              background-image: linear-gradient(to right, #f69f6a, #edb438);
              margin-left: 20px;
            }
          }
        }
        .top_left_two {
          // margin-top: 12px;

          .gress_chart {
            width: 100%;
            padding: 0 36px;
            box-sizing: border-box;

            .gress_items {
              width: 100%;

              .ress_namelisg {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .yuan_s {
                  display: flex;
                  align-items: center;
                  .yuan_dian {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    margin-right: 6px;
                  }
                  .ran_name {
                    font-size: 14px;
                    font-family: Source Han Sans CN;
                    color: #ffffff;
                    line-height: 38px;
                  }
                }

                .couned {
                  font-size: 17px;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #ffffff;
                  line-height: 38px;
                  margin-right: 4px;
                }
              }

              .ress_pre {
                width: 100%;
              }
            }
          }
        }
      }
      .center_bos {
        flex: 3;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        .top_center {
          width: 100%;
          img {
            width: 100%;
          }
        }
        .s_sdhfash {
          width: 100%;

          .c_cnter {
            width: 100%;
            padding: 25px 38px;
            box-sizing: border-box;
            .evaluation {
              width: 100%;

              overflow-y: scroll;
              .list_items {
                width: 100%;
                display: flex;
                padding: 10px 20px;
                box-sizing: border-box;
                background-color: #1e3b91;
                margin-bottom: 14px;

                .left_head {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  flex-shrink: 0;
                  border: 2px solid #00d8ff;
                  img {
                    width: 100%;
                    border-radius: 50%;
                  }
                }
                .right_s {
                  flex: 1;
                  padding-left: 11px;
                  box-sizing: border-box;

                  .p_nanmes {
                    font-size: 20px;
                    font-family: Source Han Sans CN;
                    font-weight: bold;
                    color: #ffffff;
                    line-height: 38px;
                  }
                  .items_texts {
                    font-size: 16px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #ffffff;
                  }
                }
              }
            }
          }
        }
      }
      .right_bos {
        flex: 2;

        .top_right_one {
          width: 100%;
          padding: 16px;
          box-sizing: border-box;

          .pie_chart {
            width: 100%;
            // height: 200px;
          }

          .pie_chart_a {
            .ress_prd {
              // transform: rotate(90deg);
            }
          }
        }
        .top_right_two {
          // margin-top: 12px;

          .count_nd {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .personlist {
              padding: 14px;
              box-sizing: border-box;
              display: flex;
              align-items: center;

              .left_arrow,
              .right_arrow {
                width: 15px;
                margin: 0 4px;
                box-sizing: border-box;
                img {
                  width: 15px;
                  height: 15px;
                }
              }
              .info_list {
                display: flex;
                align-items: center;

                .iten_name {
                  font-size: 24px;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #ffffff;
                  line-height: 36px;
                  margin: 0 4px;
                  box-sizing: border-box;
                }

                .istrue_class {
                  font-weight: bold;
                  color: #0bd7f0;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>