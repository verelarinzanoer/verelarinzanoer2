// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classlist.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// remove menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll section active link
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageY0ffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })

}

//scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

//animasi home
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {
    delay: 200
})
sr.reveal('.home__img', {
    origin: 'right',
    delay: 1000
})

//animasi about
sr.reveal('.about__img', {
    delay: 500
})
sr.reveal('.about__subtitle', {
    delay: 300
})
sr.reveal('.about__profession', {
    delay: 400
})
sr.reveal('.about__text', {
    delay: 500
})
sr.reveal('.about__social-icon', {
    delay: 600,
    interval: 200
})

//animasi skills
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {
    distance: '20px',
    delay: 50,
    interval: 100
})
sr.reveal('.skills__img', {
    delay: 400
})

//animasi portfolio
sr.reveal('.portfolio__img', {
    interval: 200
})

//animasi contact
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {
    interval: 200
})
sr.reveal('.contact__input', {
    delay: 400
})
sr.reveal('.contact__button', {
    delay: 600
})