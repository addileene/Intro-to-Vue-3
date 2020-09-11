const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
              { id: 2234, color: 'green' },
              { id: 2235, color: 'blue' },
            ]
        }
    },
    methods:{
        addToCart(){
            this.cart +=1
        },
        deleteToCart(){
            this.cart -=1
        },
        updateImage(variantImage){
            
        }
    }
})


