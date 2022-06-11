export default{
    data(){
        return{
            city:"",
            key:"111b364ad8e247d8bd8174551220906",
            weather_json: ""
        }
    },

    methods: {
        getCity() {
           let url = `http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${this.city}`
           this.getResponse(url);
           this.city = "";
        },
        async getResponse(url){
            try{
                let response = await fetch(url);
                this.weather_json = await response.json();
                console.log(this.weather_json);
            } catch(e){
                console.warn(e);
            }
            
        }
    }
}
