<template>
    <section class= "container ">
      <div class="line"></div>
      <div>456</div>
      <new-font></new-font>
    </section>
</template>

<script>
import NewFont from './NewFont.vue'
export default {
  name: 'home',
  components: {
    NewFont
  },
  props: {},
  data() {
   return{
   }
  },
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  filters: {
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
}
</script>
<style scoped lang="scss">
.container{
  text-align: center;
  overflow: hidden;
  background: url('../public/images/home/bg-logo.svg') center center / cover no-repeat;
  height: 100vh;
  .line{
   height: 3.6rem;
  }
}
</style>
