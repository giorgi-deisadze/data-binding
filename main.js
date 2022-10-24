const app = Vue.createApp({
    data() {
        return{
            myName: 'My name is Giorgi',
            myAge: 'My age is 22',
            infiveYears:22+5,
            myImage: 'https://masteringjs.io/assets/images/vue/vue.jpg',
            inputValue: '',
        }
    },
    
    methods : {
        randomNumber : function(){
          return Math.round(Math.random() * 1) + 0;
        }
    }
});

app.mount('#assignment');