

// var current = document.querySelector(' .current');
// console.log(current);
// console.log(currentImg);
// console.log(imgs);





var currentImg = document.querySelector(' .current img')
var imgs = document.querySelectorAll(' .container img');
var copy;

imgs.forEach((img) => {
  img.addEventListener('click', (e)=> {
    copy = e.target.src;
    currentImg.src = copy;
  })
  img.addEventListener('click', style)
})

function style() {
  imgs.forEach((img)=> {
    img.classList.remove('active');
    this.classList.add('active');
  })
}

// imgs.forEach((img) => {
//   img.addEventListener('click', coco)
//   function coco(e) {
//     e.target.classList.remove('active');
//     copy = e.target.src;
//     currentImg.src = copy;
//     this.classList.add('active');
//   }
// })

  


// // solution - senior steps
// var currentImg = document.querySelector(' .current img')
// var imgs = document.querySelectorAll(' .container img');

// imgs.forEach((img) => {
//   img.addEventListener('click', (e)=> {
//     currentImg.src = e.target.src;
//   })
// })