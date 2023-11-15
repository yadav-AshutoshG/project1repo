burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
rightNav.classList.toggle('v-class-resp')     /*   ya ha ham kis kis ko chupana  chathe  hai  (visibility  hidden) */
navList.classList.toggle('v-class-resp')     /*  jase   hi  hit ho   ye class lga ya  hata  do  */
navbar.classList.toggle('h-nav-resp')     /*  jase   hi  hit ho   ye class lga ya  hata  do  */

})