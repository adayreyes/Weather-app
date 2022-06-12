<script>
import { RouterView } from 'vue-router';
import getData from './mixins/getData';
import HomeComponent from './components/HomeComponent.vue';
export default{
    name: "App",
    mixins: [getData],
    components: { HomeComponent }
}

</script>
<template >
<div class="bg-image" :class="weather_json.current? weather_json.current.condition.text : ''"></div>
<main class="main-container" >
  <header class="main-header">
    <h1>Weather</h1>
    <section>
      <input @keyup.enter="getCity()" type="text" id="city" v-model="city">
      <button @click="getCity()">Search</button>
    </section>
  </header>
  
  <section>
    <HomeComponent v-if="weather_json" :current="weather_json.current" :location="weather_json.location"/>
  </section>

</main>
</template>

<style scoped>
  @import url(./assets/base.css);
  
</style>