<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg mx-auto fixed-top">
        <div class="container-fluid">
               <span class="navbar-brand mb-0"
              ><img
                src="https://nasheetajacobs1999.github.io/Node.js-Images/images/PH (1).png"
                alt="logo" class="logo"
            /></span>
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
              <li class="nav-item">
                  <router-link to="/products" class="nav-link text-white">Products</router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/contact" class="nav-link text-white">Contact Us</router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/admin" class="nav-link text-white">Admin</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .container {
      position: sticky;
      top: 0;
  
  }
  .logo{
    width: 100px;
    height: 100px;
  
  }
  .navbar {
      background-color: rgba(4, 4, 4, 0.7);
      height: 80px;
  }
  
  li {
      padding: 1.5rem;
  }
  
  button {
      background-color: #84a7a1;
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
    top:0;
  }
  }
  </style>