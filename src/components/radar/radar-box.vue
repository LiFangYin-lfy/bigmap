<template>
  <div class="radio" ref="main" style="width:100%;height:100%"></div>
</template>

<script>
export default {
  name: 'radar-box',
  data() {
    return {

    }
  },
  components: {

  },
  created() {

  },
  mounted() {
    this.radarinit()
  },
  methods: {
    radarinit() {
      var chartDom = this.$refs.main;
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        color: ['#f17624', '#f8c201', '#4472c4', '#a1a1a1'],
        title: {
          text: '基础雷达图'
        },
        legend: {
          show: false,
          data: ['课堂管理', '效果呈现', '特色加分', '政治引领', '教学内容', '教学方式']
        },


        radar: {
          // shape: 'circle',
          indicator: [
            { name: '销售（Sales）', max: 6500 },
            { name: '管理（Administration）', max: 16000 },
            { name: '信息技术（Information Technology）', max: 30000 },
            { name: '客服（Customer Support）', max: 38000 },
            { name: '研发（Development）', max: 52000 },
            { name: '市场（Marketing）', max: 25000 }
          ],
          name: {
            color: '#b2b2b2',
          },
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: '课堂管理 Budget）'
            },
            {
              value: [5000, 1450, 22000, 23400, 4600, 21000],
              name: '效果呈现 Spending）'
            }, {
              value: [4200, 2400, 24600, 31320, 48000, 16000],
              name: '特色加分 Budget）'
            },
            {
              value: [5000, 1400, 23700, 26000, 42000, 23300],
              name: '政治引领 Spending）'
            }
          ]
        }]
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