const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-link')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
})

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
forEach(link => {
if(link.href.include('${activePage}')){
link.classList.add ('active');
}
})
