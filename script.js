const portfolio = {};

portfolio.projects = () => {
    // Event listener for hover
    const hoverInfo = document.querySelectorAll()
}

// https://stackoverflow.com/questions/24739126/scroll-to-a-specific-element-using-html
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

    // headerScroll.addEventListener('click', () => {
    //     window.scrollTo({
    //         top: 926,
    //         left: 0,
    //         behavior: "smooth"
    //     });
    // });
};

portfolio.init = () => {
    portfolio.scrollDown();
}

portfolio.init();