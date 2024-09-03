<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg mx-auto fixed-top">
        <div class="container-fluid">
          <span class="navbar-brand mb-0">
            <img
              src="https://nasheetajacobs1999.github.io/Node.js-Images/images/PH (1).png"
              alt="logo"
              class="logo"
            />
          </span>
          <button
            class="navbar-toggler mx-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link text-white">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link text-white">About Us</router-link>
              </li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link text-white dropdown-toggle" @click.prevent="toggleDropdown('productsDropdown')">Products</a>
                <ul v-if="dropdownOpen.productsDropdown" class="dropdown-menu">
                  <li><a href="#" class="dropdown-item">Womens Collection</a></li>
                  <li><a href="#" class="dropdown-item">Men Collection</a></li>
                  <li><a href="#" class="dropdown-item">Kids Collections</a></li>
                  <li><a href="#" class="dropdown-item">Couples Collection</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link text-white">Contact Us</router-link>
              </li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link text-white dropdown-toggle" @click.prevent="toggleDropdown('adminDropdown')">Admin</a>
                <ul v-if="dropdownOpen.adminDropdown" class="dropdown-menu">
                  <li><a href="#" class="dropdown-item">Dashboard</a></li>
                  <li><a href="#" class="dropdown-item">User Management</a></li>
                  <li><a href="#" class="dropdown-item">Reports</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/checkout" class="nav-link text-white">Checkout</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dropdownOpen: {
          productsDropdown: false,
          adminDropdown: false,
        },
      };
    },
    methods: {
      toggleDropdown(dropdown) {
        this.dropdownOpen[dropdown] = !this.dropdownOpen[dropdown];
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    position: relative;
    width: 100%;
  }

  .content-section {
    margin-top: 80px; 
    padding: 20px;
  }
  
  .logo {
    width: 100px;
    height: 100px;
  }
  
  .navbar {
    background-color: #040404;
    height: 80px;
  }
  
  li {
    padding: 1.5rem;
  }
  
  button {
    background-color: #84a7a1;
  }
  
  .dropdown-menu {
    background-color: #1f2226;
    padding: 0.5rem 0;
    border-radius: 10px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  }
  
  .dropdown-item {
    color: #c9d6df;
    padding: 0.5rem 1rem;
  }
  
  .dropdown-item:hover {
    color: #f2e7dc;
  }
  
  @media (max-width: 992px) {
    .container {
      position: relative;
      width: 100%;
    }
  
    .navbar {
      width: 100%;
      text-align: center;
      position: fixed;
      top: 0;
    }
  }
  </style>
  