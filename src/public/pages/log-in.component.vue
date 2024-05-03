<script>
import axios from "axios";
import PublicHeader from "../components/public-header.component.vue";

export default {
  name: "log-in",
  components: {PublicHeader},
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods:{
    async login(){
      let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
      if(result.status==200 && result.data.length > 0){
        alert("Log In Successfully")
        localStorage.setItem("user-info",JSON.stringify(result.data[0]))
        this.$router.push({name:'Home'})
      }
      console.warn(result)
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if(user){
      this.$router.push({name:'Home'})
    }
  }
}
</script>

<template>
  <PublicHeader/>
  <h1>Login</h1>
  <span class="flex align-items-center flex-column">
    <div class="input flex align-items-center flex-column">
    <pv-input-text  v-model="email" placeholder="Email address"/>
    <pv-input-password class="input" v-model="password" placeholder="Password" :feedback="false" toggleMask/>
    </div>
    <pv-button v-on:click="login">Login</pv-button>
    <p>
      New to Audit Bridge ?
      <router-link to="/sign-up">Create an account</router-link>
    </p>
  </span>
</template>

<style scoped>
.input{
  padding: 2rem;
}
</style>