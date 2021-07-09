<template>
  <div id="progress" class="class_ame" :style="{ height: height, width: width }" />
</template>

<script>
export default {
  name: 'progress-pie',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '2.5rem'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      chart: null,

    }
  },
  watch: {
    options: {
      handler(options) {
        // 设置true清空echart缓存
        this.chart.setOption(options, true)
      },
      deep: true
    }
  },
  mounted() {
    this.$echarts.registerTheme('tdTheme', tdTheme); // 覆盖默认主题
    this.initChart();
  },
  methods: {
    initChart() {
      // 初始化echart
      this.chart = this.$echarts.init(this.$el, 'tdTheme')
      this.chart.setOption(this.options, true)
    }
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