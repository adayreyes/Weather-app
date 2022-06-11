<template>
    <main v-if="location && current">
        <header>
            <h2>{{location ? location.name : ""}}</h2>
            <span class="bold">Last updated</span>
            <span>{{current ? current.last_updated : ""}}</span>
        </header>
        <section>
            <img :src="current ? current.condition.icon : ''" alt="sol">
            <span class="temperature">{{current ? current.temp_c : ""}}°C</span>
        </section>
    </main>
    <section class="else-section" v-else>
        <h3>Search for a city</h3>
    </section>
</template>


<script>

export default{
    props: ["current","location"]
    
    }
</script>

<style scoped>
    main{
        background-color: aliceblue;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    header{
        margin-bottom: 2rem;
        width: 400px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: .3rem;
    }

    h2{
        margin: 0;
    }
    section{
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .else-section{
        display: block;
        width: 100%;
        text-align: center;
    }

    .temperature{
        font-size: 1.5rem;
        font-weight: bold;

    }


</style>