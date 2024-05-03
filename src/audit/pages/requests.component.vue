<script>
import HeaderComponent from "../components/header.component.vue";
import MenuComponent from "../components/menu.component.vue";

export default {
  name: "requests",
  components:{
    HeaderComponent,
    MenuComponent
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
  <div class="page">

    <MenuComponent/>
    <h1>Requests</h1>
  </div>
</template>

<style scoped>

</style>