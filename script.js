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


const firstSlide = document.querySelector('.firstSlide')
const secondSlide = document.querySelector('.secondSlide')
const thirdSlide = document.querySelector('.thirdSlide')
const outImg = document.querySelector('.sliderImg')

const art1 = './images/art1.jpg'
const art2 = './images/art2.jpg'
const art3 = './images/art3.jpg'

const images = [art1, art2, art3]


outImg.innerHTML = `<img src=${images[0]} class='prev'> <img src=${images[1]} class="middleSlide"> <img src=${images[2]} class='next'>`;

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