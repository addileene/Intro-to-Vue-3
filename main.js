const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true
        }
    },
    methods: {
        updateCArt(){
            this.cart+=1
        }
    }
})
