<template>
  <div class="container">
    <dv-full-screen-container class="small_containet">
      <div class="health">
        <bottom-one />
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  name: 'threescreen',
  components: {

  },
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
  margin: auto;
  .health {
    background-color: #585858;
    width: 100%;
    height: 75%;
    margin: auto;
    padding: 16px;
    box-sizing: border-box;
  }
}
</style>