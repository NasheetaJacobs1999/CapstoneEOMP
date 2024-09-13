<template>
    <div class="singleProd">
        <header>
            <h1>Product Details</h1>
        </header>
        <Card v-for="product in productSingle" v-bind:key="product.prodID" class="singleProd2" >
        <template #cardHeader>
            <img :src="product.prodURL" loading="notLazy" class="img2" style="height: 200px;" :alt="product.prodName">
        </template>
        <template #cardBody>
            <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                    <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
                    <div class="button-wrapper d-md-flex d-block justify-content-between">
                        <button class="btn btn-dark" @click="addToCart(product)">Add to Cart</button>
                    </div>    
        </template>
    </Card>
    </div>
    
</template>

<script>
import Card from '@/components/CardComp.vue';
import { createStore } from 'vuex'
import axios from 'axios'
Card
export default createStore({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT_HERE')
        commit('SET_PRODUCTS', response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
  }
})
</script>
<style scoped>
#single-view {
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Jersey 10", sans-serif;
}

.sing-img {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}

#prod-png {
    width: 55%;
    height: 80%;
}

#prod-bg {
    position: absolute;
    width: 100% !important;
    height: 100%;
    filter: brightness(20%);
    object-fit: cover;
    z-index: 1;
}

.prod-bio{
    width: 100%;
    min-height: 500px;
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    color: #B7B5B3;
}
.prod-details{
    z-index: 2;
    line-height: 100px;
    position: relative;
    top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.desc{
    line-height:normal;
}

h2{
    text-decoration: underline;
    color: #c336b9;
    font-size: 4rem;
    font-family: "Jersey 10", sans-serif;
}
.cart{
    background: #010309;
    height: 30px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    border-radius: 5px;
    color: #42b983;
}
.singleProd{
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width:850px) {
    #prod-png{
        width: 80%;
        height: 50%;
    }
}
</style>