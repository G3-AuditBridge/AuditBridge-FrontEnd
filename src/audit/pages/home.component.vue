<script>
import HeaderComponent from "../components/header.component.vue";
import MenuComponent from "../components/menu.component.vue";
export default {

  name: "home",
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
    <div>
      <div class="flex flex-row align-items-center">
        <img src="../../assets/logo.png" shape="circle" height="300" width="300" />
        <h2>Hello Username</h2>
      </div>
      <div class="flex flex-row">
        <div class="card-pro">
          <p>Get exclusive perks</p>
          <p>Obtain access to premium tools</p>
          <p>And much more</p>
          <router-link to="/premium">Become Pro</router-link>
        </div>
        <div class="card-pro">
          <h3>What are we doing today ?</h3>
          <router-link to="/requests">I Want to be audited</router-link>
          <router-link to="/messages">Messages</router-link>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.card-pro{
  padding: 3rem;
  display:flex;
  flex-direction: column;
}
</style>