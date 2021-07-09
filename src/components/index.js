// 封装一个插件  注册所有的全局组件
import Piechart from '@/components/pie-chart'
import Screnpre from '@/components/scren-pre'
import Linechart from '@/components/line-chart'
import Binchart from '@/components/bin-chart'
import Barchart from '@/components/bar-chart'
import Bottomone from '@/components/bottomone'
import Topcenter from '@/components/top-center/top-center'
import Rankist from '@/components/rank-list/rank-list'
import Radarimg from '@/components/radar/radar-box'
export default {
  install(Vue) {
    // 基于Vue做任何事情（注册全局组件，指令，过滤器，挂载原型函数）
    Vue.component(Piechart.name, Piechart)
    Vue.component(Screnpre.name, Screnpre)
    Vue.component(Linechart.name, Linechart)
    Vue.component(Barchart.name, Barchart)
    Vue.component(Binchart.name, Binchart)
    Vue.component(Bottomone.name, Bottomone)
    Vue.component(Topcenter.name, Topcenter)
    Vue.component(Rankist.name, Rankist)
    Vue.component(Radarimg.name, Radarimg)
  }
}
