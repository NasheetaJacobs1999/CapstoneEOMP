<template>
  <section class="about-us">
    <div class="container py-5 header">
      <h1>About Us</h1>
      <div class="row justify-content-center">
        <div class="col-md-6 text-center"> 
          <p class="bordered-paragraph">
            At Fossil Vault, we are dedicated to bringing you the best in timeless fashion and design through our exclusive selection of Fossil products. From iconic watches to stylish bags and accessories, we carefully curate our offerings to meet the highest standards of quality and craftsmanship. Whether you're looking for a sleek timepiece to complete your outfit or a functional accessory that combines form and function, Fossil Vault has something to suit your unique style.
          </p>
          <p class="bordered-paragraph">
            Founded with a passion for classic elegance and modern innovation, Fossil Vault strives to be more than just a store – we aim to be a destination for those who appreciate the finer things in life. Our commitment to excellence is reflected in every product we offer, and we take pride in providing our customers with items that are both stylish and enduring. At Fossil Vault, we believe in the power of great design to enhance your everyday experiences.
          </p>
        </div>
      </div>
      <div class="team">
        <h2>Meet the Founder</h2>
        <div class="row justify-content-center">
          <div class="col-md-6 text-center"> 
            <div class="team-member">
              <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/20240422_100352.jpg" alt="Nasheeta Jacobs" class="img-fluid rounded-circle">
              <h3>Nasheeta Jacobs</h3>
              <p>Founder & CEO</p>
              <p>Nasheeta brings a wealth of experience in retail and a keen eye for quality. Her vision for Fossil Vault is driven by a commitment to excellence and a passion for connecting with customers.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="images-gallery mt-5">
        <div class="row">
          <div class="col-md-3">
            <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/AboutPage3.jpg" alt="Gallery Image 1" class="img-fluid">
          </div>
          <div class="col-md-3">
            <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/AboutPage1.jpg" alt="Gallery Image 2" class="img-fluid">
          </div>
          <div class="col-md-3">
            <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/AboutPage4.jpg" alt="Gallery Image 3" class="img-fluid">
          </div>
          <div class="col-md-3">
            <img src="https://nasheetajacobs1999.github.io/CapstoneImages/images/AboutPage2.jpg" alt="Gallery Image 4" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  background-color: #f9f9f9;
  /* padding: 2rem 0; */
}

.about-us h1 {
  text-align: center;
  margin-bottom: 2rem;
  /* margin-top: 2rem; */
}

.about-us .container {
  margin: auto;
  text-align: center;
}

.about-us .row {
  justify-content: center;
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
  width: 200px;
  height: 200px;
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
  height: 200px;
  border: 2px solid #ddd; 
  border-radius: 5px; 
}

.text-center {
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .about-us {
    padding: 1rem 0;
  }
  
  .about-us h1 {
    font-size: 24px;
  }
  
  .about-us .container {
    padding: 0 1rem;
  }
  
  .about-us .row {
    flex-direction: column;
  }
  
  .col-md-6 {
    width: 100%;
  }
  
  .bordered-paragraph {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .team-member {
    margin-bottom: 2rem;
  }
  
  .team-member img {
    width: 150px;
    height: 150px;
  }
  
  .images-gallery {
    flex-direction: column;
  }
  
  .images-gallery img {
    width: 100%;
    height: 150px;
    margin-bottom: 1rem;
  }
}

@media only screen and (max-width: 480px) {
  .about-us h1 {
    font-size: 20px;
  }
  
  .team-member img {
    width: 100px;
    height: 100px;
  }
}

@media only screen and (max-width: 768px) {
  .about-us {
    padding: 1rem 0;
  }
  
  .about-us h1 {
    font-size: 24px;
  }
  
  .about-us .container {
    padding: 0 1rem;
  }
  
  .about-us .row {
    flex-direction: column;
  }
  
  .col-md-6 {
    width: 100%;
  }
  
  .bordered-paragraph {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .team-member {
    margin-bottom: 2rem;
  }
  
  .team-member img {
    width: 150px;
    height: 150px;
  }
  
  .images-gallery {
    flex-direction: column;
  }
  
  .images-gallery img {
    width: 100%;
    height: 150px;
    margin-bottom: 1rem;
  }
}

</style>
