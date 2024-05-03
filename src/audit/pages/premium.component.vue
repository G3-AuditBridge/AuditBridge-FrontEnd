<script>
import HeaderComponent from "../components/header.component.vue";
import MenuComponent from "../components/menu.component.vue";

export default {
  name: "premium",
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
  <pv-toolbar>
    <template #start>
      <router-link to="/">■</router-link>
    </template>
    <template #end>
      English
    </template>
  </pv-toolbar>
  <h1>Premium</h1>
  <div class="flex flex-row align-items-auto">
    <div class="flex-column">
      <pv-card>
        <template #content>
        </template>
      </pv-card>
      <pv-card>
        <template #content class="flex justify-content-between">
          <p class="m-0">
            Capacity to contact a preferred auditor
          </p>
          <p>A</p>
        </template>
      </pv-card>
      <pv-card>
        <template #content>
          <p class="m-0">
            Cancel requests unlimited times without penalties
          </p>
        </template>
      </pv-card>
      <pv-card>
        <template #content>
          <p class="m-0">
            Removal of the service fee
          </p>
        </template>
      </pv-card>
      <pv-card>
        <template #content>
          <p class="m-0">
            Get a unique badge
          </p>
        </template>
      </pv-card>
    </div>
    <div class="flex-column">
      <pv-card>
        <template #title>Free</template>
      </pv-card>
      <pv-card>
        <template #content>■</template>
      </pv-card>
      <pv-card></pv-card>
      <pv-card></pv-card>
      <pv-card></pv-card>
    </div>
    <div class="flex-column">
      <pv-card>
        <template #title>Pro</template>
      </pv-card>
      <pv-card>
        <template #content>■</template>
      </pv-card>
      <pv-card>
        <template #content>■</template>
      </pv-card>
      <pv-card>
        <template #content>■</template>
      </pv-card>
      <pv-card>
        <template #content>■</template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>

</style>