async function getNews() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=20e49b6efdcc45b0a44fe9f77e1fe970`);
    try {
        const data = await response.json();
        const count = data.totalResults;
        const news = data.articles;
        const result = news.map(function (ele) {
            return `
        <div class="article">
        <h2><span>Author : </span>${ele.author}</h2>
        <h2><span>Title : </span>${ele.title}</h2>
        
        <div class="article-data">
        <h3><span>created at : </span>${ele.publishedAt}</h3>
        </div>
        </div>
        `;
        }).join(' ');
        document.querySelector(".news-data").innerHTML = result;
    } catch (error) {
        const result = `
        <div class="error">
        <h2>Error</h2>
        <p>An error occurred while fetching the news: ${error.message}</p>
        </div>
        `;
        document.querySelector(".news-data").innerHTML = result;
    } finally {
        document.querySelector(".overlay").classList.add("d-none");
    }

}
getNews();


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