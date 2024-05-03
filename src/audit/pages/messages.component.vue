<script>
import HeaderComponent from "../components/header.component.vue";
import MenuComponent from "../components/menu.component.vue";
export default {
  name: "messages",
  components:{
    HeaderComponent,
    MenuComponent
  },
  data() {
    return {
      search: '',
    }
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
      <h2>Messages</h2>
      <pv-icon-field iconPosition="left">
        <pv-input-icon class="pi pi-search"> </pv-input-icon>
        <pv-input-text v-model="search" placeholder="Search" />
      </pv-icon-field>
      
    </div>
  </div>
</template>

<style scoped>

</style>