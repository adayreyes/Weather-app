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

<template>
<header class="main-header">
  <h1>Weather</h1>
  <section>
    <input @keyup.enter="getCity()" type="text" id="city" v-model="city">
    <button @click="getCity()">Search</button>
  </section>
</header>

<main>
  <HomeComponent :current="weather_json.current" :location="weather_json.location"/>
</main>
</template>

<style>

  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .bold{
    font-weight: bold;
  }

  main{
    height: 100%;
    width: 100%;
  }

  .main-header{
    background-color: aliceblue;
    width: 100%;
    height: 150px;
    text-align: center;
  }
</style>