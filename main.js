window.onscroll = function () {
    const nav = document.querySelector("nav");
    const carousel = document.querySelector(".carousel");
    if (window.scrollY > carousel.offsetTop) {
        nav.classList.add("scrollNav");
    } else {
        nav.classList.remove("scrollNav");
    }
}

var body = document.querySelector("body");
var changeModeBtn = document.querySelector(".changeModeBtn");

function changeMode() {
    body.classList.toggle("dark");
}

changeModeBtn.onclick = changeMode;





(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()