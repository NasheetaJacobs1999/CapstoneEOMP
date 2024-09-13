<template>
  <section class="NewHomePage">
    <div class="hero-section">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Capstone-BG-Home.jpg" class="hero-image" alt="Hero Image">
      <button class="shop-now-btn" @click="$router.push('/products')">Shop Now</button>
    </div>

<div class="image-section">
  <h2>Mens Collection</h2>
  <div class="image-grid">
    <div class="image">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch1.webp" alt="Image">
    </div>
    <div class="image">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch2.webp" alt="Image">
    </div>
    <div class="image">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch3.webp" alt="Image">
    </div>
  </div>
  <button class="see-more-btn" @click="$router.push({ path: '/products', query: { category: 'males' } })">See More</button>
</div>

<div class="image-section">
  <h2>Couples Collection</h2>
  <div class="image-grid">
    <div class="image">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Couples1.webp" alt="Image">
    </div>
    <div class="image">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Couples2.webp" alt="Image">
    </div>
    <div class="image">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Couples3.webp" alt="Image">
    </div>
  </div>
  <button class="see-more-btn" @click="$router.push({ path: '/products', query: { category: 'couples' } })">See More</button>
</div>

<div class="image-section">
  <h2>Womens Collection</h2>
  <div class="image-grid">
    <div class="image">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch7.webp" alt="Image">
    </div>
    <div class="image">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch8.webp" alt="Image">
    </div>
    <div class="image">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Watch9.webp" alt="Image">
    </div>
  </div>
  <button class="see-more-btn" @click="$router.push({ path: '/products', query: { category: 'females' } })">See More</button>
</div>

<div class="image-section">
  <h2>Kids Collection</h2>
  <div class="image-grid">
    <div class="image">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Kids1.webp" alt="Image">
    </div>
    <div class="image">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Kids2.webp" alt="Image">
    </div>
    <div class="image">
      <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/Kids3.webp" alt="Image">
    </div>
  </div>
  <button class="see-more-btn" @click="$router.push({ path: '/products', query: { category: 'kids' } })">See More</button>
</div>
  </section>
</template>

<script>
export default {
  setup() {
  }
}
</script>

<style scoped>
.header-section {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.hero-section {
  /* padding: 40px; */
  background-color: #f7f7f7;
  position: relative;
}

.hero-section .shop-now-btn {
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%); 
  background-color: #444;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 100px;
}

.hero-section .shop-now-btn:hover {
  background-color: #555;
}

.hero-section .container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}


.features-section {
  padding: 40px;
  background-color: #fff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature {
  background-color: #f7f7f7;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.feature i {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.call-to-action {
  padding: 40px;
  text-align: center;
  background-color: #333;
  color: #fff;
}

.call-to-action button {
  font-size: 24px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
  cursor: pointer;
}

.call-to-action button:hover {
  background-color: #555;
}

.image-section {
  padding: 40px;
  background-color: #fff;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 20px;
}

.image {
  background-color: #f7f7f7;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.image img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}

.see-more-btn {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #337ab7;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.2s ease-in-out;
}

.see-more-btn:hover {
  background-color: #23527c;
}

</style>