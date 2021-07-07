// 封装一个插件  注册所有的全局组件
import Piechart from '@/components/pie-chart'
import Screnpre from '@/components/scren-pre'
import Linechart from '@/components/line-chart'
export default {
  install(Vue) {
    // 基于Vue做任何事情（注册全局组件，指令，过滤器，挂载原型函数）
    Vue.component(Piechart.name, Piechart)
    Vue.component(Screnpre.name, Screnpre)
    Vue.component(Linechart.name, Linechart)
  }
}
