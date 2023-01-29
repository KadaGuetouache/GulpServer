let nav = document.querySelector('#main-navbar')
let burger = document.querySelector('#burger')
let searchBtn = document.querySelector('#search-btn')
let searchPanel = document.querySelector('#search-panel')
let bgpanel = document.querySelector('#search-panel-bg')
let input = document.querySelector('#search-panel form input')

document.body.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'b') {
        searchPanel.classList.remove('hidden')
        bgpanel.classList.remove('hidden')
        input.focus()
        document.body.style.overflow = 'hidden';
    }

    if (event.keyCode == 27) {
        searchPanel.classList.add('hidden')
        bgpanel.classList.add('hidden')
        document.body.style.overflow = 'unset';
    }
})

burger.addEventListener('click', () => {
    nav.classList.toggle('hidden')
});

searchBtn.addEventListener('click', () => {
    searchPanel.classList.toggle('hidden')
    if (!searchPanel.classList.contains('hidden')) {
        input.focus()
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
});

searchBtn.addEventListener('click', () => {
    bgpanel.classList.toggle('hidden')
});