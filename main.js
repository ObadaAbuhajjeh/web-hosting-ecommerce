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
var darkBtn = document.querySelector(".darkBtn");
var lightBtn = document.querySelector(".lightBtn");

function darkMode() {
    body.classList.add("dark");
    body.classList.remove("light");
}

function lightMode() {
    body.classList.add("light");
    body.classList.remove('dark');
}

darkBtn.onclick = darkMode;
lightBtn.onclick = lightMode;




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