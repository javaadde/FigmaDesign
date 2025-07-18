

let bar =  document.getElementById("navBar")
let closeBtn = document.getElementById("close")
let openBtn = document.getElementById("logo")

 
 openBtn.onclick = function(){
    bar.style.display="block"
 }

 closeBtn.onclick = function(){
   bar.style.display="none"
   console.log("working")
 }




 var deskSlider = new Swiper('.desk-slider', {
  // Optional parameters
   initialSlide: 0,
   grabCursor:false,
   centeredSlides:true,
   speed:2200,
   spaceBetween:0,
   slidesPerView:"auto",
   effect:"coverflow",
   loop:true,

   coverflowEffect:{
    rotate:0,
    stretch:0,
    depth:60,
    modifier:1,
    slideShadows:false,
   },



  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


//    pagination: {
//     el: '.swiper-pagination',
//   },


});




 var mobileSlider = new Swiper('.mobile-slider', {
  // Optional parameters
   initialSlide: 3,
   grabCursor:false,
   centeredSlides:true,
   speed:1200,
   spaceBetween:10,
   slidesPerView:"auto",
   effect:"coverflow",
   loop:true,

   coverflowEffect:{
    rotate:0,
    stretch:10,
    depth:80,
    modifier:1,
    slideShadows:false,
   },


   
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});
