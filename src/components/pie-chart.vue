<template>
  <div id="main" style="width: 100%;height:800px;"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl';
export default {
  name: "pie-chart",
  props: ['initd'],
  components: {},
  data() {
    return {
      optionData: [{
        name: '林地面积统计',
        value: 10000,
        itemStyle: {
          color: '#22c4ff',
        }
      }, {
        name: '草地面积统计',
        value: 12116,
        itemStyle: {
          color: '#aaff00'
        }
      }],
    }
  },
  watch: {
    initd(nwval) {
      console.log(nwval);
      this.init();
    }
  },
  mounted() {
    // this.$nextTick(function () {
    //   this.init();
    // }); 
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.water-eval-container {
  width: 100%;
  height: 100%;
}
.cityGreenLand-charts {
  height: 200px;
  width: 400px;
}
</style>