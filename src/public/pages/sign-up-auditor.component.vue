<script>
import axios from "axios";
export default {
  name: "sign-up-auditor",
  data(){
    return{
      firstname:'',
      lastname:'',
      email:'',
      password:''
    }
  },
  methods:{
    async signUp(){
      let result = await axios.post("http://localhost:3000/users", {
        firstname:this.firstname,
        lastname:this.lastname,
        email:this.email,
        password:this.password
      });
      console.warn(result);
      if(result.status==201){
        alert("Sign Up Successfully")
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name:'Home'})
      }
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
  <img src="../../assets/logo-complete.png"/>
  <h1>Create your account</h1>
  <span class="flex align-items-center flex-column">
  <pv-input-text v-model="firstname" placeholder="First Name"/>
  <pv-input-text v-model="lastname" placeholder="Last Name"/>
  <pv-input-text v-model="email" placeholder="Email address"/>
  <pv-input-text v-model="password" placeholder="Password"/>
  <pv-input-text placeholder="Repeat password"/>
  <pv-file-upload/>
  <pv-checkbox/>I agree with the Terms of Service
  <pv-button v-on:click="signUp">Register</pv-button>
  </span>
</template>

<style scoped>

</style>