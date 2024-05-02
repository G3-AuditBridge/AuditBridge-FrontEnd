<script>
import axios from "axios";

export default {
  name: "sign-up-owner",
  data(){
    return{
      firstname:'',
      lastname:'',
      establishment:'',
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
  <div class="flex align-items-center flex-column">
  <pv-input-text v-model="firstname" placeholder="First Name"/>
  <pv-input-text v-model="lastname" placeholder="Last Name"/>
    <pv-input-text v-model="establishment" placeholder="Establishment Name"/>
  <pv-input-text v-model="email" placeholder="Email address"/>
  <pv-input-password v-model="password" placeholder="Password"/>
  <pv-input-password placeholder="Repeat password"/>
  <pv-file-upload/>
  <pv-checkbox/>I agree with the Terms of Service
  <pv-button v-on:click="signUp">Register</pv-button>
  </div>
</template>

<style scoped>

</style>