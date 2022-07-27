let count=1;
setInterval(() => {
  count++;
  const allclass=document.querySelectorAll(".slideshow-element");
  const currentclass=document.querySelector(".current");
   currentclass.classList.remove("current");
   

   if(count>allclass.length){
   
    allclass[0].classList.add("current");
    count=1;
   }

   else{
    currentclass.nextElementSibling.classList.add("current");
   }


}, 2000);