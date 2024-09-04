<template>
  <section class="HomePage">
    <!-- Top Image Section -->
    <div class="top-image-container position-relative text-center">
      <img
        src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Capstone-BG-Home.jpg"
        alt="Top Banner Image"
        class="img-fluid top-banner"
      />
      <button class="btn top-image-btn position-absolute" @click="$router.push('/products')">
        Shop Now 
      </button>
    </div>

    <!-- Second Div: Carousel 1 -->
    <div class="col py-5 carouselOne">
      <h2>Mens Collection</h2>
      <div id="carouselExample1" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-md-4">
                <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch1.webp" class="d-block w-50" alt="Product 1">
                <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
              </div>
              <div class="col-md-4">
                <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch2.webp" class="d-block w-50" alt="Product 2">
                <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
              </div>
              <div class="col-md-4">
                <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch3.webp" class="d-block w-50" alt="Product 3">
                <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-4">
                <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch4.webp" class="d-block w-50" alt="Product 4">
                <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
              </div>
              <div class="col-md-4">
                <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch5.webp" class="d-block w-50" alt="Product 5">
                <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
              </div>
              <div class="col-md-4">
                <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch6.jpg" class="d-block w-50" alt="Product 6">
                <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExample1" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExample1" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>

        <!-- First Div: Header Section -->
<div class="header-section">
  <div class="header-image-container">
    <img
      src="https://nasheetajacobs1999.github.io/CapstoneImages/images/HomeImage2.webp"
      alt="Header Image"
      class="header-image"
    />
    <img
      src="https://nasheetajacobs1999.github.io/CapstoneImages/images/CouplesWatches.webp"
      alt="Overlay Image"
      class="overlay-image"
    />
    <button class="btn position-absolute header-button" @click="$router.push('/products')">
      His & Hers
    </button>
  </div>
</div>

    <!-- Third Div: Static Content Section -->
    <!-- Fourth Div: Carousel 2 -->
<div class="col py-5 carouselTwo">
  <div class="carousel-wrapper position-relative">
    <h2>Womens Collection</h2>
    <div id="carouselExample2" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col-md-4">
              <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch7.webp" class="d-block w-50" alt="Fossil Product 1">
              <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
            </div>
            <div class="col-md-4">
              <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch8.webp" class="d-block w-50" alt="Fossil Product 2">
              <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
            </div>
            <div class="col-md-4">
              <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch9.webp" class="d-block w-50" alt="Fossil Product 3">
              <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-md-4">
              <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch10.webp" class="d-block w-50" alt="Fossil Product 4">
              <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
            </div>
            <div class="col-md-4">
              <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch11.webp" class="d-block w-50" alt="Fossil Product 5">
              <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
            </div>
            <div class="col-md-4">
              <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch12.webp" class="d-block w-50" alt="Fossil Product 6">
              <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExample2" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExample2" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</div>


    <!-- Fifth Div: Kids Collection Section -->
<div class="col py-5 text-center">
  <h2>Kids Collection</h2>
  <div class="row kids-collection">
    <div class="col-md-4">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Kids1.webp" class="img-fluid" alt="Kids Product 1">
      <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
    </div>
    <div class="col-md-4">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Kids2.webp" class="img-fluid" alt="Kids Product 2">
      <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
    </div>
    <div class="col-md-4">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Kids3.webp" class="img-fluid" alt="Kids Product 3">
      <div class="product-info">
        <h5>Product 1 Name</h5>
        <p>Product 1 Description</p>
        <p>Price: $X.XX</p>
      </div>
    </div>
  </div>
  <div class="mt-4">
    <button class="btn" @click="$router.push('/products')">
        Shop Now 
      </button>
  </div>
</div>

  </section>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.container-fluid.home {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.top-image-container {
  padding-top: 2rem;
  /* margin-bottom: 2em; */
  position: relative;
}

.top-banner {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.top-image-btn {
  top: 75%; 
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #84a7a1;
  color: #282c34;
  font-weight: bold;
  padding: 0.8em 2em;
  border-radius: 5px;
  border: none;
  z-index: 1;
}

.header-section {
  width: 100%;
}

.header-image-container {
  position: relative;
  width: 100%;
  height: 55vh;
  overflow: hidden; 
}

.header-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
  z-index: 0;
}

.overlay-image {
  position: absolute;
  top: 0%; 
  left: 0;
  width: 30%;
  height: 100%; 
  object-fit: cover; 
  z-index: 1;
}

.header-button {
  position: absolute; 
  top: 20%; 
  left: 15%; 
  transform: translate(-50%, -50%);
  background-color: #84a7a1;
  color: #282c34;
  font-weight: bold;
  padding: 0.8em 2em;
  border-radius: 5px;
  border: none;
  z-index: 2; 
}

.second-image {
  margin-top: -100px;
  z-index: 0;
}

.homeHeader {
  font-size: 3em;
  color: #c9d6df;
}

.slogan {
  font-size: 1.5em;
  color: #f2e7dc;
}

.btn {
  background-color: #84a7a1;
  color: #282c34;
  font-weight: bold;
  padding: 0.8em 2em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
}

.btn:hover {
  background-color: #66a394; /* change the background color on hover */
  color: #fff; /* change the text color on hover */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* add a box shadow on hover */
}

.arrow-icon {
  margin-left: 10px;
  width: 20px;
  height: 20px;
}

.kids-collection img {
  width: 50%; 
  height: auto; 
  max-width: 300px; 
  margin: 0 auto; 
}

.img-fluid {
  width: 100%;
  height: auto;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #84a7a1;
  border-radius: 50%;
}

.carousel-inner img {
  margin: auto;
}

.carousel-wrapper {
  position: relative;
}

.carousel-btn {
  position: absolute; 
  top: 10%; 
  left: 50%;
  transform: translateX(-50%); 
  background-color: #84a7a1;
  color: #282c34;
  font-weight: bold;
  padding: 0.8em 2em; 
  border-radius: 5px;
  border: none;
  z-index: 10; 
}

.carousel-inner .col-md-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-inner .col-md-4 img {
  width: 50%;
  height: auto;
  max-width: 300px;
  margin: 0 auto;
}

.carousel-inner .product-info {
  margin-top: 20px;
  text-align: center;
}

.carouselTwo {
  height: 80vh;
}

.carouselOne {
  height: 80vh;
}

.product-info {
  margin-top: 10px;
  text-align: center;
}

.product-info h5 {
  font-weight: bold;
  margin-bottom: 5px;
}

.product-info p {
  margin-bottom: 10px;
}

</style>
