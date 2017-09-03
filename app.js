let divs = document.querySelectorAll('.container > div');
let i = 0;
let length = divs.length;
let content = document.querySelector('.content');
setInterval(() => {
    if (i == length) {
        divs[i - 1].classList.remove('active');
        i = 0;
    }
    content.innerHTML = '<h1> heading Number ' + (i + 1) + '</h1>';
    content.innerHTML += '<p> content form section Number ' + (i + 1) + '</p>';
    let previous = divs[i].previousElementSibling;
    let next = divs[i].nextElementSibling;
    divs[i].classList.add('active');
    if (previous != null) {
        if (previous.classList.contains('active')) previous.classList.remove('active');
    }
    if (next != null) {
        if (next.classList.contains('active')) next.classList.remove('active');
    }
    i++;
}, 1000);