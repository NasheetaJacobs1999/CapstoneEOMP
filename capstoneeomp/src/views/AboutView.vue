<template>
  <section class="about-us">
    <div class="container py-5">
      <h1>About Us</h1>
      <div class="row">
        <div class="col-md-6">
          <h2>Our Story</h2>
          <p class="bordered-paragraph">
            At Fossil Vault, we are passionate about bringing you the best in PlayStation and Fossil products. Founded in 2024 by Nasheeta Jacobs and Kayden Hendricks, our mission is to provide high-quality, stylish, and functional products that enhance your gaming and everyday experiences.
          </p>
          <p class="bordered-paragraph">
            Our journey began with a shared love for both gaming and classic timepieces. We envisioned a place where enthusiasts could find unique and premium items that reflect their personal style and interests. Today, Fossil Vault stands as a testament to that vision, offering a curated selection of products that cater to both gamers and watch aficionados.
          </p>
        </div>
      </div>
      <div class="team">
        <h2>Meet the Founder</h2>
        <div class="row">
          <div class="col-md-6">
            <div class="team-member">
              <img src="https://example.com/nasheeta.jpg" alt="Nasheeta Jacobs" class="img-fluid rounded-circle">
              <h3>Nasheeta Jacobs</h3>
              <p>Founder & CEO</p>
              <p>Nasheeta brings a wealth of experience in retail and a keen eye for quality. Her vision for Fossil Vault is driven by a commitment to excellence and a passion for connecting with customers.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Images Section -->
      <div class="images-gallery mt-5">
        <div class="row">
          <div class="col-md-3">
            <img src="https://example.com/image1.jpg" alt="Gallery Image 1" class="img-fluid">
          </div>
          <div class="col-md-3">
            <img src="https://example.com/image2.jpg" alt="Gallery Image 2" class="img-fluid">
          </div>
          <div class="col-md-3">
            <img src="https://example.com/image3.jpg" alt="Gallery Image 3" class="img-fluid">
          </div>
          <div class="col-md-3">
            <img src="https://example.com/image4.jpg" alt="Gallery Image 4" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  background-color: #f9f9f9;
  padding: 2rem 0;
}

.about-us h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.about-us .container {
  margin: auto;
}

.bordered-paragraph {
  border: 2px solid #84a7a1;
  padding: 1rem;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 1rem;
}

.team-member {
  text-align: center;
}

.team-member img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 5px solid #84a7a1;
}

.team-member h3 {
  margin-top: 1rem;
}

.team-member p {
  color: #555;
}

.images-gallery img {
  width: 100%;
  height: auto;
  border: 2px solid #ddd; /* Optional: Add a border to the gallery images */
  border-radius: 5px; /* Optional: Round the corners of the gallery images */
}
</style>
