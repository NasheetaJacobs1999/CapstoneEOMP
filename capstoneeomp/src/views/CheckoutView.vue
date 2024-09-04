<template>
    <div class="checkout-container">
      <h1>Checkout</h1>
  
      <div class="row">
        <!-- Billing Details -->
        <div class="col-50">
          <h2>Billing Details</h2>
          <label for="fname">Full Name</label>
          <input type="text" id="fname" v-model="billingDetails.fullName" placeholder="John Doe">
  
          <label for="email">Email</label>
          <input type="email" id="email" v-model="billingDetails.email" placeholder="john@example.com">
  
          <label for="phone">Phone</label>
          <input type="tel" id="phone" v-model="billingDetails.phone" placeholder="123-456-7890">
  
          <label for="address">Address</label>
          <input type="text" id="address" v-model="billingDetails.address" placeholder="123 Main St">
  
          <label for="city">City</label>
          <input type="text" id="city" v-model="billingDetails.city" placeholder="City">
  
          <div class="row">
            <div class="col-50">
              <label for="state">State</label>
              <input type="text" id="state" v-model="billingDetails.state" placeholder="State">
            </div>
            <div class="col-50">
              <label for="zip">Zip Code</label>
              <input type="number" id="zip" v-model="billingDetails.zip" placeholder="12345">
            </div>
          </div>
        </div>
  
        <!-- Payment Information -->
        <div class="col-50">
          <h2>Payment Information</h2>
          <label for="cardname">Name on Card</label>
          <input type="text" id="cardname" v-model="paymentDetails.cardName" placeholder="John Doe">
  
          <label for="cardnumber">Credit Card Number</label>
          <input type="number" id="cardnumber" v-model="paymentDetails.cardNumber" placeholder="1111-2222-3333-4444">
  
          <div class="row">
            <div class="col-50">
              <label for="expmonth">Expiration Month</label>
              <input type="number" id="expmonth" v-model="paymentDetails.expMonth" placeholder="MM">
            </div>
            <div class="col-50">
              <label for="expyear">Expiration Year</label>
              <input type="number" id="expyear" v-model="paymentDetails.expYear" placeholder="YYYY">
            </div>
          </div>
  
          <label for="cvv">CVV</label>
          <input type="number" id="cvv" v-model="paymentDetails.cvv" placeholder="123">
        </div>
      </div>
  
      <!-- Order Summary with Product Table -->
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
              <td><img :src="item.image" alt="Product Image" class="product-image">{{ item.name }}</td>
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
  export default {
    data() {
      return {
        billingDetails: {
          fullName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zip: ''
        },
        paymentDetails: {
          cardName: '',
          cardNumber: '',
          expMonth: '',
          expYear: '',
          cvv: ''
        },
        orderItems: [
          { id: 1, name: 'Fossil Watch', image: 'https://example.com/watch.jpg', price: 199, quantity: 1 },
          { id: 2, name: 'Leather Bag', image: 'https://example.com/bag.jpg', price: 150, quantity: 2 }
        ]
      };
    },
    computed: {
      total() {
        return this.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      }
    },
    methods: {
      submitOrder() {
        // Handle order submission
        alert('Order submitted!');
      }
    }
  };
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
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .col-50 {
    flex: 50%;
    padding: 0 15px;
  }
  label {
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
  }
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="number"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
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
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
  }
  .btn:hover {
    background-color: #6b8b89;
  }
  @media (max-width: 768px) {
    .col-50 {
      flex: 100%;
    }
    .order-table img {
      width: 40px;
      height: 40px;
    }
  }
  </style>
  