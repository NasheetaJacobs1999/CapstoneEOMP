<template>
    <section>
      <div class="container text-center pt-5">
        <h3 class="sectHeader">Contact Fossil Vault</h3>
        <div class="form-card1">
          <div class="form-card2">
            <form class="form"
              action="https://formspree.io/f/mqkrjaka"
              method="POST">
              <p class="form-heading">Connect with Fossil Vault</p>
  
              <label>
                <div class="form-field">
                  <input required placeholder="Name" class="input-field" type="text" />
                </div>
              </label>
  
              <label>
                <div class="form-field">
                  <input
                    required
                    placeholder="Email"
                    class="input-field"
                    type="email"
                    name="email"
                  />
                </div>
              </label>
  
              <label>
                <div class="form-field">
                  <input
                    required
                    placeholder="Subject"
                    class="input-field"
                    type="text"
                  />
                </div>
              </label>
  
              <label>
                <div class="form-field">
                  <textarea
                    required
                    name="message"
                    cols="30"
                    rows="3"
                    class="input-field"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </label>
  
              <label>
                <button class="message-btn" type="submit">Submit</button>
              </label>
            </form>
          </div>
        </div>
      </div>
  
      <div class="contDetails justify-content-around text-center">
        <a href="mailto:contact@fossilvault.com" class="mail-link">
          <i class="fa-solid fa-envelope"></i>
          contact@fossilvault.com
        </a>
        <a href="tel:+27635856284" class="phone-link">
          <i class="fa-solid fa-phone"></i>
          +27 63 585 6284
        </a>
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .form {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-family: 'Roboto', sans-serif;
    gap: 10px;
    padding-inline: 2em;
    padding-bottom: 0.4em;
    background-color: #282c34;
    border-radius: 20px;
  }
  
  .form-heading {
    text-align: center;
    margin: 2em;
    color: #c9d6df;
    font-size: 1.2em;
    align-self: center;
  }
  
  .form-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 10px;
    padding: 0.6em;
    background-color: #1f2226;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.5);
  }
  
  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #c9d6df;
    padding-inline: 1em;
  }
  
  .message-btn {
    cursor: pointer;
    margin-bottom: 3em;
    padding: 1em;
    border-radius: 10px;
    border: none;
    background-color: #c9d6df;
    color: #282c34;
    font-weight: bold;
    transition: all ease-in-out 0.3s;
  }
  
  .message-btn:hover {
    background-color: #f2e7dc;
    color: #000;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.5);
  }
  
  .form-card1 {
    background-image: linear-gradient(163deg, #c9d6df 0%, #f2e7dc 100%);
    border-radius: 22px;
  }
  
  .form-card2 {
    border-radius: 0;
  }
  
  .contDetails {
    padding: 20px;
    color: #c9d6df;
  }
  
  .phone-link,
  .mail-link {
    color: #282c34;
    text-decoration: none;
  }
  
  .phone-link:hover,
  .mail-link:hover {
    text-decoration: underline;
    color: #f2e7dc;
  }
  
  @media (max-width: 1000px) {
    .contactMe {
      flex-direction: column;
    }
    form {
      width: 100%;
    }
  }
  
  @media (max-width: 440px) {
    .inf1 {
      width: 100%;
    }
  }
  </style>
  