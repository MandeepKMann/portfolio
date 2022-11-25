const portfolio = {};

portfolio.projects = () => {
    // Event listener for hover
    const hoverInfo = document.querySelectorAll()
}

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
portfolio.scrollDown = () => {
    const headerScroll = document.querySelector('.scrollDown')
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
    portfolio.scrollDown();
    portfolio.toContact();
}

portfolio.init();