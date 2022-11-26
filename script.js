const portfolio = {};

portfolio.projects = () => {
    // Event listener for hover
    const hoverInfo = document.querySelectorAll()
}

// Sticky Nav on scroll
// https://www.youtube.com/watch?v=1cYzyVJbfuM
portfolio.stickyHeader = () => {
    const nav = document.querySelector('.mainNav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > nav.offsetHeight + 150) {
            nav.classList.add('active')
        } else {
            nav.classList.remove('active')
        }
    })
}

// portfolio.stickyHeader = () => {
//     const nav = document.querySelector('nav')

//     window.addEventListener('scroll', () => {
//         nav.classList.toggle('stickyNav', window.scrollY > 0)
//     })
    

// }


// "Get In Touch" button in header that scrolls down to contact secion
// https://stackoverflow.com/questions/24739126/scroll-to-a-specific-element-using-html
portfolio.toContact = () => {
    const contactScroll = document.querySelector('.toContact')
    const contactSection = document.querySelector('#contact')

    contactScroll.addEventListener('click', () => {
        contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
    })
}

// Chevron pointing down button that scrolls down to next section (about)
portfolio.scrollToAbout = () => {
    const headerScroll = document.querySelector('.scrollToAbout')
    const aboutSection = document.querySelector('#about')

    headerScroll.addEventListener('click', () => {
        aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    })
};



portfolio.init = () => {
    portfolio.stickyHeader();
    portfolio.scrollToAbout();
    portfolio.toContact();
}

portfolio.init();