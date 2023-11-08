const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const outImg = document.querySelector('.sliderImg')

const art1 = './images/art1.jpg'
const art2 = './images/art2.jpg'
const art3 = './images/art3.jpg'

const images = [art1, art2, art3]


outImg.innerHTML = `<img src=${images[0]}> <img src=${images[1]} class="middleSlide"> <img src=${images[2]}>`;

nextBtn.onclick = () => {
    images.unshift(images.pop());
    outImg.innerHTML = `<img src=${images[0]}> <img src=${images[1]} class="middleSlide"> <img src=${images[2]}>`;
}

prevBtn.onclick = () => {
    images.push(images.shift());
    outImg.innerHTML = `<img src=${images[0]}> <img src=${images[1]} class="middleSlide"> <img src=${images[2]}>`;
}