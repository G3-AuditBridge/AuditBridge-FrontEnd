<script>
import HeaderComponent from "../../public/components/header.component.vue";

export default {
  name: "premium",
  components:{
    HeaderComponent
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if(!user){
      this.$router.push({name:'Login'})
    }
  }
}
</script>

<template>

  <h1>Premium</h1>
</template>

<style scoped>

</style>