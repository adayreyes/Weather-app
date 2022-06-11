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
<main :class="weather_json? weather_json.current.condition.text : ''">
  <header class="main-header">
    <h1>Weather</h1>
    <section>
      <input @keyup.enter="getCity()" type="text" id="city" v-model="city">
      <button @click="getCity()">Search</button>
    </section>
  </header>
  
  <section>
    <HomeComponent :current="weather_json.current" :condition="weather_json ? weather_json.current.condition.text : ''" :location="weather_json.location"/>
  </section>

</main>
</template>

<style>
  @import url(./assets/base.css);
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
    width: 100%;
    height: 150px;
    text-align: center;
  }
</style>