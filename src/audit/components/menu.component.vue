<script>
import {ref} from "vue";

export default {
  name: "menu"
}

</script>

<template>
  <div class="layout-menu">
    <div class="card flex flex-column">
    <router-link to="/">Home</router-link>
    <router-link to="/messages">Messages</router-link>
    <router-link to="/requests">Requests</router-link>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/premium">Premium</router-link>
    </div>
  </div>
</template>

<style>
.layout-menu {
  display: flex;
  justify-content: center;
  height: 600px;
  width: 230px;
  border-radius: 10px;
  background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2));
}
.layout-menu a{
  color: white;
  padding: 20px;
}
</style>