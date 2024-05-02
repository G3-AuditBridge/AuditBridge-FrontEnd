<script>
import HeaderComponent from "../components/header.component.vue";
export default {

  name: "home",
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
  <h1>Hello User</h1>
</template>

<style scoped>

</style>