const animate = (el) => {

    let revealAnimation;

    el.classList.forEach((cls) => {
        if (cls.includes('slide')) {
            revealAnimation = 'showSlide'
        } else if (cls.includes('fade')) {
            revealAnimation = 'showFade'
        }
    })

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(revealAnimation)
            } else {
                entry.target.classList.remove(revealAnimation)
            }
        })
    })

    observer.observe(el)
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.querySelector('#preloader').style.display = 'none';
        const hiddenElements = document.querySelectorAll('.animate')
        hiddenElements.forEach(el => animate(el))
    }
}
