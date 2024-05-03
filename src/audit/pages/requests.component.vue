<script>
import HeaderComponent from "../components/header.component.vue";

export default {
  name: "requests",
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
  <HeaderComponent/>
  <h1>Requests</h1>
</template>

<style scoped>

</style>