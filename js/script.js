"use strict"


function slider() {
   const btnLeft = document.querySelector('.skills__left');
   const btnRight = document.querySelector('.skills__right');
   const line = document.querySelector('.skills__column');
   const widthSlide = document.querySelectorAll('.skills__item');
   const slidesArray = Array.from(widthSlide);
   const points = Array.from(document.querySelectorAll('.skills__point'));

   let width;
   let count = 0;

   btnRight.addEventListener('click', function () {
      init();
      count++;
      
      if (count > slidesArray.length - 3) {
         count = slidesArray.length - 3;
      } else {
         line.style.transform = 'translate(-' + width * count + 'px)';
      }
      for (let index in points) {
         if (index == count) {
            points[index].classList.add('skills__point-active');
         } else {
            points[index].classList.remove('skills__point-active');
         }
      }
   })

   btnLeft.addEventListener('click', function () {
      init();
      count--;
      if (count < 0) {
         count = 0;
      } else {
         line.style.transform = 'translate(-' + width * count + 'px)';
      }
      for (let index in points) {
         if (index == count) {
            points[index].classList.add('skills__point-active');
         } else {
            points[index].classList.remove('skills__point-active');
         }
      }
   })

   window.addEventListener('resize', init );
   function init() {
      width = parseFloat(getComputedStyle(widthSlide[0]).width);
      if (window.innerWidth > 999) {
         count = 0;
         line.style.transform = 'translate(' + width * 0 + 'px)';
      }
   }
   init();
   
}

slider();


function blinking() {
   const exmpls = Array.from(document.querySelectorAll('.projects__exmpl'));
   for (let index in exmpls) {
      imageAnimation(exmpls[index]);
   }
}
blinking();

function imageAnimation(exempl) {
   const imagePc = exempl.querySelector('.projects__image-animation-pc');
   const imageArrayPc = Array.from(imagePc.querySelectorAll('.projects__image-item'));

   let count = 0;

   function timer() {
      classAdder(imageArrayPc);
   }

   function classAdder(elem) {
      count++;
      if (count > elem.length - 1) {
         count = 0;
      }
      for (let index in elem) {
         if (index == count) {
            elem[index].classList.add('projects__image-item-active');
         } else {
            elem[index].classList.remove('projects__image-item-active');
         }
         
      }
   }
   setInterval(timer, 7000);
}


function showHide() {
   let showHideButton = document.querySelector('.projects__show-hide');
   let box = document.querySelector('.projects__box-container');
   const exmpls = Array.from(document.querySelectorAll('.projects__exmpl'));
   console.log(exmpls);
   showHideButton.addEventListener('click', () => {
      showHideButton.textContent == 'Show more' ? showHideButton.textContent = 'Show less' : showHideButton.textContent = 'Show more';;
      for (let i = 0; i < exmpls.length; i++){
         if (
            exmpls[i].classList.contains('projects__exmpl-7') || 
            exmpls[i].classList.contains('projects__exmpl-8') ||
            exmpls[i].classList.contains('projects__exmpl-9') ||
            exmpls[i].classList.contains('projects__exmpl-10')
         ) {
            exmpls[i].classList.toggle('projects__exmpl-none');
         }
      }
      box.classList.toggle('projects__box-container-hide')
   })
}

showHide();