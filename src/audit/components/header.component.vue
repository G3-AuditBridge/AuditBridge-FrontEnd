<script>
export default {
  name: "header",
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push({name:'Login'})
    }
  }
}
</script>

<template>
  <pv-toolbar class="p-3 surface-0" >
    <template #start>
      <img src="../../assets/logo-complete.png" width="120" height="34"/>
    </template>
    <template #end>
      <pv-button v-on:click="logout">Log Out</pv-button>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>