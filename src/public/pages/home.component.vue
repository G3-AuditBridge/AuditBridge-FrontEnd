<script>
export default {
  name: "home",
  mounted() {
    let user = localStorage.getItem('user-info');
    if(!user){
      this.$router.push({name:'SignUpAuditor'})
    }
  }
}
</script>

<template>
<h1>Hello User</h1>
</template>

<style scoped>

</style>