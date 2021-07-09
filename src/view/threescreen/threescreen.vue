<template>
  <div class="container">
    <dv-full-screen-container class="small_containet">
      <div class="top_charts">
        <div class="top__left_">
          <div class="tleft_left">
            <dv-border-box-12>
              <pie-chart />
            </dv-border-box-12>
          </div>
          <div class="tleft_right">
            <dv-border-box-12>
              <!-- <pie-chart /> -->
            </dv-border-box-12>
          </div>
        </div>
        <div class="top__center_">
          <div class="ter_top">
            <top-center />
          </div>
          <div class="ter_down"></div>
        </div>
        <div class="top__right_">
          <dv-border-box-13>
            <rank-list />
          </dv-border-box-13>
        </div>
      </div>
      <div class="health">
        <div class="down_left_">
          <bottom-one />
        </div>
        <div class="down_right_">
          <dv-border-box-12>
            <radar-box />
            <!-- <bar-chart /> -->
            <div class="pos_boxs">
              <!-- <radar-box /> -->
            </div>
          </dv-border-box-12>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  name: 'threescreen',
  components: {},
  data() {
    return {

    }
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
.container {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;

  .top_charts {
    width: 100%;
    height: 40%;
    display: flex;

    .top__left_ {
      flex: 1;
      display: flex;
      height: 100%;
      flex-shrink: 0;
      // border: 1px solid red;

      .tleft_left {
        width: 40%;
        flex-shrink: 0;
        height: 100%;
      }
      .tleft_right {
        flex: 1;
        height: 100%;
      }
    }
    .top__center_ {
      flex: 1;
      height: 100%;
      flex-shrink: 0;
      border: 1px solid #171c33;
      .ter_top {
        width: 100%;
        height: 40%;
      }
      .ter_down {
        width: 100%;
        height: 40%;
      }
    }
    .top__right_ {
      flex: 1;
      height: 100%;
      flex-shrink: 0;
      // border: 1px solid red;
    }
  }
  .health {
    width: 100%;
    height: 59%;
    display: flex;
    .down_left_ {
      height: 100%;
      flex: 1;
      flex-shrink: 0;
      margin: auto;
      padding: 16px;
      box-sizing: border-box;
    }
    .down_right_ {
      height: 100%;
      flex: 1;
      flex-shrink: 0;
      margin: auto;
      position: relative;
      .pos_boxs {
        position: absolute;
        bottom: 15%;
        right: 10%;
        z-index: 200;
      }
    }
  }
}
</style>