<template>
  <div class="up">
    <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
      <p class="ml-3 colorBlue fw-b">{{item.title}}</p>
      <div class="dv_style">
        <dv-digital-flop :config="item.number" style="fontSize:30; fill:'#ff0000'" class="flop_is" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-center',
  data() {
    return {
      titleItem: [
        {
          title: "今年累计任务建次数",
          number: {
            number: [120],
            toFixed: 1,
            content: "{nt}"
          },
        },
        {
          title: "本月累计任务次数",
          number: {
            number: [18],
            toFixed: 1,
            content: "{nt}"
          },
        },
        {
          title: "今日累计任务次数",
          number: {
            number: [2],
            toFixed: 1,
            content: "{nt}"
          },
        },
        {
          title: "今年失败任务次数",
          number: {
            number: [14],
            toFixed: 1,
            content: "{nt}"
          },
        },
        {
          title: "今年成功任务次数",
          number: {
            number: [106],
            toFixed: 1,
            content: "{nt}"
          },
        },
        {
          title: "今年达标任务个数",
          number: {
            number: [100],
            toFixed: 1,
            content: "{nt}"
          },
        }
      ],
    }
  },
  components: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  },
  beforeDestroy() {

  }
}

</script>

<style scoped lang='less'>
.up {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.0625rem;
    padding-top: 0.2rem;
    margin-top: 0.1rem;
    width: 32%;
    height: 48%;
    background-color: rgba(19, 25, 47, 0.6);

    .colorBlue {
      width: 100%;
      font-size: 14px;
      color: #1370fb;
      height: 1rem;
      text-align: center;
    }
    .flop_is {
      margin-top: 0.625rem;
      height: 30px;
    }
    .dv_style {
      .dv-digital-flop canvas {
        height: 30px;
      }
    }
  }
}
</style>