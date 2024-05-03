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
  <div class="sign-up">
  <h1>Create your account</h1>
    <div class="sign-up-buttons">
      <pv-button class="sign-up-button">
        <router-link to="/sign-up-auditor">Auditor</router-link>
      </pv-button>
      <pv-button class="sign-up-button">
        <router-link to="/sign-up-owner">Owner</router-link>
      </pv-button>
    </div>
  </div>
</template>

<style scoped>
.sign-up{
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 4rem;
}

.sign-up-buttons{
  padding: 4rem;
}
.sign-up-button{
  justify-content: center;
  height: 8rem;
  width: 8rem;
  border: 400px;
  margin: 3rem;
}
</style>