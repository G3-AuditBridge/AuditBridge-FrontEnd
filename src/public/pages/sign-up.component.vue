<script>
import PublicHeader from "../components/public-header.component.vue";

export default {
  name: "sign-up",
  components:{
    PublicHeader
  }
}
</script>

<template>
  <PublicHeader/>
  <pv-button>
    <router-link to="/sign-up-auditor">Auditor</router-link>
  </pv-button>
  <pv-button>
    <router-link to="/sign-up-owner">Owner</router-link>
  </pv-button>
</template>

<style scoped>

</style>