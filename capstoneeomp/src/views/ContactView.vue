<template>
    <section>
            <div class="container text-center pt-5">
              <h3 class="sectHeader">Contact Me</h3>
          
              <div class="form-card1">
                <div class="form-card2">
                  <form class="form"
                  action="https://formspree.io/f/mqkrjaka"
                  method="POST">
                    <p class="form-heading">Let's Get In Touch</p>
          
                    <label>
                      <div class="form-field">
                        <input required="" placeholder="Name" class="input-field" type="text" />
                      </div>
          
                    </label>
          
                    <label>
                      <div class="form-field">
                        <input
                          required=""
                          placeholder="Email"
                          class="input-field"
                          type="email" name="email"
                        />
                      </div>
          
                    </label>
                    <label>
                      <div class="form-field">
                        <input
                          required=""
                          placeholder="Subject"
                          class="input-field"
                          type="text"
                        />
                      </div>
          
                    </label>
                    <label>
          
                      <div class="form-field">
                        <textarea
                          required=""
                          name="message"
                          cols="30"
                          rows="3"
                          class="input-field"
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
              <a href="mailto:nasheetahjacobs@gmail.com" class="mail-link">
                <i class="fa-solid fa-envelope"></i>
                  nasheetahjacobs@gmail.com
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
    font-family: inherit;
    gap: 10px;
    padding-inline: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    background-color: #4b644a;
    border-radius: 20px;
  }
  .form-heading {
    text-align: center;
    margin: 2em;
    color: #D4E7C5;
    font-size: 1.2em;
    background-color: transparent;
    align-self: center;
  }
  .form-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 10px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: black;
    background-color: whitesmoke;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }
  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: black;
    padding-inline: 1em;
  }
  .message-btn {
    cursor: pointer;
    margin-bottom: 3em;
    padding: 1em;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #D4E7C5;
    font-weight: bold;
    outline: 1px solid #D4E7C5;
    transition: all ease-in-out 0.3s;
  }
  .message-btn:hover {
    transition: all ease-in-out 0.3s;
    background-color: #D4E7C5;
    color: #000;
    cursor: pointer;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }
  .form-card1 {
    background-image: linear-gradient(163deg, #D4E7C5 0%, #D4E7C5 100%);
    border-radius: 22px;
    transition: all 0.3s;
  }
  .form-card1:hover {
    box-shadow: 0px 0px 30px 1px rgba(100, 255, 218, 0.3);
  }
  .form-card2 {
    border-radius: 0;
    transition: all 0.2s;
  }
  .form-card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
  .contDetails {
    padding: 20px;
    color: #3B683A;
  }
  .mail{
    text-decoration: none;
    color: black;
  }
  .phone-link {
    color: black;
    text-decoration: none;
  }
  
  .phone-link:hover {
    text-decoration: underline;
    color: blue;
  }
  
  .mail-link {
    color: black;
    text-decoration: none;
  }
  
  .mail-link:hover {
    text-decoration: underline;
    color: blue;
  }
  
  @media (max-width: 1000px) {
    .contactMe {
      flex-direction: column;
    }
  
    form {
      width: 100%;
    }
    .cardContact {
      width: 100%;
    }
  }
  
  @media (max-width: 440px) {
    .inf1 {
    width: 100%;
  }
  }
  
  @media (max-width: 370px) {
    .btn1 {
      margin-right: 0.3rem;
    }
  }
  </style>