// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
            // console.log('welcome');
        })
    }
};
showMenu("nav-toggle", "nav-menu");

//Remove menu mobile
const navLink = document.querySelectorAll('.nav__link');
// console.log(navLink);
function linkAction (){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show'); //when we click on each nav__link, remove the show class selector
}
navLink.forEach((n)=> n.addEventListener('click', linkAction));

// slider
const imageCarousel = document.querySelector('.img-carousel');
const imagesDetail = document.querySelectorAll('.img-carousel .image__detail');

// button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = imagesDetail[0].clientWidth; //return original width of image
// console.log(size);
imageCarousel.style.transform = 'translateX(' + -size * counter + 'px)'; // it will move one picture forward

// addEventListener is a block of code that is trigger by user interface
nextBtn.addEventListener("click", () => {
    if(counter >= imagesDetail.length - 1)return; //it removes the empty slide when you click on the next button fast
    imageCarousel.style.transition = 'transform 0.4s ease-in-out'; //adding animation to the slider
    // ++ is increment -- is decrement
    counter++;
    // console.log(counter);
    imageCarousel.style.transform = 'translateX(' + -size * counter + 'px)';
});

prevBtn.addEventListener("click", () => {
    if(counter <= 0)return; //it removes the empty slide when you click on the next button fast
    imageCarousel.style.transition = 'transform 0.4s ease-in-out'; //adding animation to the slider
    // ++ is increment -- is decrement
    counter--;
    // console.log(counter);
    imageCarousel.style.transform = 'translateX(' + -size * counter + 'px)';
});

// infinite looping
// this block of code fire anytime the animation stopped
imageCarousel.addEventListener('transitionend', () => {
    if (imagesDetail[counter].id === 'lastClone') {
        imageCarousel.style.transition = 'none';
        counter = imagesDetail.length - 2; //update counter width the last index (5-2=3)
        imageCarousel.style.transform = 'translateX(' + -size * counter + 'px)';
    }

    if (imagesDetail[counter].id === 'firstClone') {
        imageCarousel.style.transition = 'none';
        counter = imagesDetail.length - counter; //update counter width the last index (5-2=3)
        imageCarousel.style.transform = 'translateX(' + -size * counter + 'px)';
    }
})