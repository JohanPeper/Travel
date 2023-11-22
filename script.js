const loginBtn = document.querySelector('.loginBtn');
const bgHide = document.querySelector('.bgHide');
const registerLink = document.querySelector('.loginRegisterLink');
const loginLink = document.querySelector('.registerLoginLink');

loginBtn.onclick = () => {
    loginLink.onclick();
    document.querySelector('.bgHide').style.display = 'flex';
    document.querySelector('.loginFormWrapper').style.display = 'flex';
    document.body.style.cssText = `overflow: hidden;`;
}

bgHide.onclick = () => {
    document.querySelector('.bgHide').style.display = 'none';
    document.querySelector('.loginFormWrapper').style.display = 'none';
    document.body.style.cssText = `overflow: visible;`;

}

registerLink.onclick = () => {
    document.querySelector('.loginForm').style.display = 'none';
    document.querySelector('.registerForm').style.display = 'block';
}

loginLink.onclick = () => {
    document.querySelector('.registerForm').style.display = 'none';
    document.querySelector('.loginForm').style.display = 'block';
}

const burgerMenuBtn = document.querySelector('.burgerMenuBtn');
const closeBurgerMenu = document.querySelector('.closeBurgerMenu');

burgerMenuBtn.onclick = () => {
    document.querySelector('.burgerMenuPopUp').style.display = 'flex';
}

closeBurgerMenu.onclick = () => {
    document.querySelector('.burgerMenuPopUp').style.display = 'none';
}

const firstSlide = document.querySelector('.firstSlide');
const secondSlide = document.querySelector('.secondSlide');
const thirdSlide = document.querySelector('.thirdSlide');
const outImg = document.querySelector('.sliderImg');
const prevImgBtn = document.querySelector('.prevImgBtn');
const nextImgBtn = document.querySelector('.nextImgBtn');

const art1 = './images/art1.jpg';
const art2 = './images/art2.jpg';
const art3 = './images/art3.jpg';
const art1mini = './images/art1mini.jpg';
const art2mini = './images/art2mini.jpg';
const art3mini = './images/art3mini.jpg';

let images = [art1, art2, art3];

window.addEventListener('resize', function () {
    if (window.innerWidth <= 476) {
        images = [art1mini, art2mini, art3mini];
        outImg.innerHTML = `<img src=${images[0]} class='prev'> <img src=${images[1]} class="middleSlide"> <img src=${images[2]} class='next'>`;

    } else {
        images = [art1, art2, art3];
        outImg.innerHTML = `<img src=${images[0]} class='prev'> <img src=${images[1]} class="middleSlide"> <img src=${images[2]} class='next'>`;

    }
})

if (window.innerWidth <= 476) {
    images = [art1mini, art2mini, art3mini];
    outImg.innerHTML = `<img src=${images[0]} class='prev'> <img src=${images[1]} class="middleSlide"> <img src=${images[2]} class='next'>`;

} else {
    images = [art1, art2, art3];
    outImg.innerHTML = `<img src=${images[0]} class='prev'> <img src=${images[1]} class="middleSlide"> <img src=${images[2]} class='next'>`;

}



firstSlide.onclick = () => {
    outImg.innerHTML = `<img src=${images[2]} class='prev'> <img src=${images[0]} class="middleSlide"> <img src=${images[1]} class='next'>`;
    if (!firstSlide.classList.contains('activeSlide')) firstSlide.classList.toggle('activeSlide');
    secondSlide.classList.remove('activeSlide');
    thirdSlide.classList.remove('activeSlide');
}

secondSlide.onclick = () => {
    outImg.innerHTML = `<img src=${images[0]} class='prev'> <img src=${images[1]} class="middleSlide"> <img src=${images[2]} class='next'>`;
    firstSlide.classList.remove('activeSlide');
    if (!secondSlide.classList.contains('activeSlide')) secondSlide.classList.toggle('activeSlide');
    thirdSlide.classList.remove('activeSlide');
}

thirdSlide.onclick = () => {
    outImg.innerHTML = `<img src=${images[1]} class='prev'> <img src=${images[2]} class="middleSlide"> <img src=${images[0]} class='next'>`;
    firstSlide.classList.remove('activeSlide');
    secondSlide.classList.remove('activeSlide');
    if (!thirdSlide.classList.contains('activeSlide')) thirdSlide.classList.toggle('activeSlide');
}

prevImgBtn.onclick = () => {
    if (secondSlide.classList.contains('activeSlide') || firstSlide.classList.contains('activeSlide')) {
        prevImgBtn.style.opacity = '0.5';
        prevImgBtn.style.cursor = 'auto';
    } else {
        prevImgBtn.style.opacity = '1';
        prevImgBtn.style.cursor = 'pointer';
    }
    if (thirdSlide.classList.contains('activeSlide')) {
        secondSlide.onclick();
        nextImgBtn.style.opacity = '1';
        nextImgBtn.style.cursor = 'pointer';
    } else if (secondSlide.classList.contains('activeSlide')) {
        firstSlide.onclick();
    }
}

nextImgBtn.onclick = () => {
    if (secondSlide.classList.contains('activeSlide') || thirdSlide.classList.contains('activeSlide')) {
        nextImgBtn.style.opacity = '0.5';
        nextImgBtn.style.cursor = 'auto';
    } else {
        nextImgBtn.style.opacity = '1';
        nextImgBtn.style.cursor = 'pointer';
    }
    if (firstSlide.classList.contains('activeSlide')) {
        secondSlide.onclick();
        prevImgBtn.style.opacity = '1';
        prevImgBtn.style.cursor = 'pointer';
    } else if (secondSlide.classList.contains('activeSlide')) {
        thirdSlide.onclick();
    }
}