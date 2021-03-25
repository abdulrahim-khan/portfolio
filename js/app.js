$(document).ready(function(){
    $('.slider').slick({
      arrows:false,
      dots:true,
      appendDots:'.slider-dots',
      dotsClass:'dots'
    
    });

let hamberger=document.querySelector('.hamberger');
let times=document.querySelector('.times');
let mobileNav=document.querySelector('.mobile-nav');
 
hamberger.addEventListener('click',function(){
mobileNav.classList.add('open')
});
times.addEventListener('click',function(){
  mobileNav.classList.remove('open')
}); 
// typing animation script
var typed=new Typed('.element',{
 strings:["Student.","Back-End Developer.","Freelancer","Blogger."],
typeSpeed:100,
backSpeed:60,
loop:true

});

//scroll up button
$(window).scroll(function(){

if(this.scrollY >500){
  $(".scroll-up-btn").addClass("show")
}
else{
  $(".scroll-up-btn").removeClass("show")
}
});
// slide up script
$(".scroll-up-btn").click(function(){
$('html').animate({scrollTop:0});
});
  });
  