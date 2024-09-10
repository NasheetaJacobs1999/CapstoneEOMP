<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0">
            <img
              src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Screenshot 2024-09-06 110339.png"
              alt="logo"
              class="logo"
            />
          </span>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/checkout">Checkout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
    width: 70px;
    height: 70px;
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
  
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0">
            <img
              src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Screenshot 2024-09-06 110339.png"
              alt="logo"
              class="logo"
            />
          </span>
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/checkout">Checkout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>