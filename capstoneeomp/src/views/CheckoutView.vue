<template>
    <div class="checkout-container">
      <h1>Checkout</h1>
      <div class="order-summary">
        <h3>Order Summary</h3>
        <table class="order-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orderItems" :key="item.id">
              <td>
                <img :src="item.image" alt="Product Image" class="product-image">
                {{ item.name }}
              </td>
              <td>{{ item.quantity }}</td>
              <td>${{ item.price }}</td>
              <td>${{ item.quantity * item.price }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3"><strong>Grand Total:</strong></td>
              <td><strong>${{ total }}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
  
      <button class="btn" @click="submitOrder">Place Order</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        orderItems: []
      }
    },
  
    mounted() {
      this.fetchOrderItems()
    },
  
    computed: {
      total() {
        return this.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
      }
    },
  
    methods: {
      fetchOrderItems() {
        axios.get('/api/cart-items')
          .then(response => {
            this.orderItems = response.data
          })
          .catch(error => {
            console.error(error)
          })
      },
  
      submitOrder() {
        alert('Order submitted!')
      }
    }
  }
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
  }
  .checkout-container {
    max-width: 900px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .order-summary {
    background-color: #f7f7f7;
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
  }
  .order-summary h3 {
    margin-top: 0;
  }
  .order-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  .order-table th, .order-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }
  .order-table .product-image {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    vertical-align: middle;  
  }
  .btn {
    width: 100%;
    padding: 15px;
    background-color: #84a7a1;
    color: #282c34;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
  }
  .btn:hover {
    background-color: #66a394;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  </style>
  