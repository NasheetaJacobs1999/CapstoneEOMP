<template>
    <div class="singleProd">
        <!-- <header>
            <h1>Product Details</h1>
        </header> -->
        <Card v-for="product in productSingle" v-bind:key="product.prodID" class="singleProd2" >
        <template #cardHeader>
            <img :src="product.prodUrl" loading="notLazy" class="img2" style="height: 200px;" :alt="product.prodName">
        </template>
        <template #cardBody>
            <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                    <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.price }}</p>
                    <div class="button-wrapper d-md-flex d-block justify-content-between">
                        <button class="btn btn-dark" @click="addToCart(product)">Add to Cart</button>
                    </div>    
        </template>
    </Card>
    </div>
    
</template>

<script>
import Card from '@/components/CardComp.vue';

Card
export default {
    components: {
        Card
    },
    computed: {
        productSingle() {
            return this.$store.state.product;
        }
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params.id)
    }
}
</script>
<style scoped>

</style>