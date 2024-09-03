<template>
    <footer class="Footer-website">
       <div class="container">
         <div class="row">
           <div class="col-sm-12 col-md-6">
             <h6>The Industry</h6>
             <p class="text-justify">Fossil Vault is a premium destination for enthusiasts of timeless style and cutting-edge technology. With a curated collection of Fossil watches, smartwatches, and accessories, Fossil Vault combines classic design with modern functionality. Each piece is crafted to blend tradition and innovation, ensuring that every item not only looks sophisticated but also meets the demands of contemporary life. Whether you're searching for a statement piece or a practical everyday companion, Fossil Vault offers a selection that caters to all tastes and needs.</p>
           </div>
           <div class="col-xs-6 col-md-3">
             <h6>Categories</h6>
             <ul class="footer-links">
               <li><a href="#">Womens Collection</a></li>
               <li><a href="#">Mens Collection</a></li>
               <li><a href="#">Kids Collection</a></li>
               <li><a href="#">Couples Collection</a></li>
             </ul>
           </div>
           <div class="col-xs-6 col-md-3">
     <h6>Quick Links</h6>
     <ul class="footer-links">
       <li><router-link to="/about">About Us</router-link></li>
       <li><router-link to="/contact">Contact Us</router-link></li>
     </ul>
   </div>
         </div>
         <hr>
       </div>
       <div class="container">
         <div class="row">
           <div class="col-md-8 col-sm-6 col-xs-12">
             <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by Fossil Vault
             </p>
           </div>
           <div class="col-md-4 col-sm-6 col-xs-12">
             <ul class="social-icons">
               <li><a class="facebook" href="#"><i class="bi bi-facebook"></i></a></li>
               <li><a class="twitter" href="#"><i class="bi bi-twitter-x"></i></a></li>
               <li><a class="github" href="#"><i class="bi bi-github"></i></a></li>
               <li><a class="linkedin" href="#"><i class="bi bi-linkedin"></i></a></li>
             </ul>
           </div>
         </div>
       </div>
 </footer>
     <!-- <div class="loading-line"></div> -->
 </template>
 
 <script>
 export default {
     name: 'FooterComp'
 }
 </script>
 <style scoped>
 .Footer-website {
   background-color: #26272b;
   padding: 20px 0;
   font-size: 14px;
   line-height: 20px;
   color: #737373;
 }
 
 .Footer-website hr {
   border-top-color: #bbb;
   opacity: 0.5;
 }
 
 .Footer-website h6 {
   color: #fff;
   font-size: 14px;
   text-transform: uppercase;
   margin-top: 5px;
   letter-spacing: 2px;
 }
 
 .Footer-website a {
   color: #737373;
 }
 
 .Footer-website a:hover {
   color: #3366cc;
   text-decoration: none;
 }
 
 .footer-links {
   padding-left: 0;
   list-style: none;
 }
 
 .footer-links li {
   display: block;
 }
 
 .footer-links a {
   color: #737373;
 }
 
 .footer-links a:active, .footer-links a:focus, .footer-links a:hover {
   color: #3366cc;
   text-decoration: none;
 }
 
 .social-icons {
   padding-left: 0;
   margin-bottom: 0;
   list-style: none;
 }
 
 .social-icons li {
   display: inline-block;
   margin-bottom: 4px;
 }
 
 .social-icons a {
   background-color: #eceeef;
   color: #818a91;
   font-size: 14px;
   display: inline-block;
   line-height: 30px;
   width: 30px;
   height: 30px;
   text-align: center;
   margin-right: 8px;
   border-radius: 100%;
   transition: all 0.2s linear;
 }
 
 .social-icons a:active, .social-icons a:focus, .social-icons a:hover {
   color: #fff;
   background-color: #29aafe;
 }
 
 .copyright-text {
   margin: 0;
 }
 
 @media (max-width: 991px) {
   .Footer-website [class^=col-] {
     margin-bottom: 20px;
   }
 }
 
 @media (max-width: 767px) {
   .Footer-website {
     padding-bottom: 0;
   }
   .Footer-website .copyright-text, .Footer-website .social-icons {
     text-align: center;
   }
 }
 </style>