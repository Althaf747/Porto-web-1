
const hamburger = document.querySelector('#hamburger')
const nav = document.querySelector('#nav-menu')
window.onscroll = function () {
    const head = document.querySelector('nav')
    const fixedNav = head.offsetTop;

    if (window.scrollY > fixedNav) {
        head.classList.add('navbar-fixed')
    } else {
        head.classList.remove('navbar-fixed')
    }

}


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburg-active');
    nav.classList.toggle('hidden')
});

