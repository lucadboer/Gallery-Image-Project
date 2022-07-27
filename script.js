let images = document.querySelectorAll('.small-img')
let large_img = document.querySelector('#large-img')
let modal = document.querySelector('.modal')
let btnclose = document.querySelector('#btn-close')
let srcImg = ""

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {

        srcImg = images[i].getAttribute('src')
        large_img.setAttribute('src', srcImg)  
        modal.classList.toggle('modal_active')
        
    })
}

btnclose.addEventListener('click', function() {
    modal.classList.toggle('modal_active')
})