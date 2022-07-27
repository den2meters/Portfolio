"use strict"

// const btn = document.querySelector('.why__arrow');
// const text = document.querySelector('.why__text');


// btn.addEventListener('click', function () {
//    text.classList.toggle('why__text-active');
//    btn.classList.toggle('why__arrow-active');
// })

function slider() {
   const btnLeft = document.querySelector('.personal-info__left');
   const btnRight = document.querySelector('.personal-info__right');
   const line = document.querySelector('.personal-info__column');
   const widthSlide = document.querySelectorAll('.personal-info__item');
   const slidesArray = Array.from(widthSlide);
   const points = Array.from(document.querySelectorAll('.personal-info__point'));

   let width;
   let count = 0;

   btnRight.addEventListener('click', function () {
      init();
      count++;
      console.log(count);
      
      
      if (count > slidesArray.length - 3) {
         count = slidesArray.length - 3;
      } else {
         line.style.transform = 'translate(-' + width * count + 'px)';
      }
      for (let index in points) {
         if (index == count) {
            points[index].classList.add('personal-info__point-active');
         } else {
            points[index].classList.remove('personal-info__point-active');
         }
      }
   })

   btnLeft.addEventListener('click', function () {
      init();
      count--;
      console.log(count);
      if (count < 0) {
         count = 0;
      } else {
         line.style.transform = 'translate(-' + width * count + 'px)';
      }
      for (let index in points) {
         if (index == count) {
            points[index].classList.add('personal-info__point-active');
         } else {
            points[index].classList.remove('personal-info__point-active');
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
   const imagePhone = exempl.querySelector('.projects__image-animation-phone');
   const imageArrayPc = Array.from(imagePc.querySelectorAll('.projects__image-item'));
   const imageArrayPhone = Array.from(imagePhone.querySelectorAll('.projects__image-item'));

   let width;
   let count = 0;

   function timer() {
      init();
      if (width > 767) {
         classAdder(imageArrayPc);
      } else {
         classAdder(imageArrayPhone);
      }
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
   setInterval(timer, 8000);

   window.addEventListener('resize', init );
   function init() {
      width = window.innerWidth
   }
   init();
}
