const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        remove-to-cart(id) {
            this.cart.start
        }
    }
})
