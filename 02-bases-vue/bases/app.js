const app = Vue.createApp({
    // // options api
    // // template: `
    // //     <h1>Hola mundo</h1>
    // //     <p>{{2+2}}</p>`
    // methods: {},
    // watch: {},

    // // composition apt
    // setup(){}

    data() {
        return {
            quote: 'Im Batman',
            author: 'Bruce Wayne',
        }
    },
    methods: {
        changeQuote() {
            this.author = 'Alejandro Rios'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#root')