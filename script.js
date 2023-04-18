const portfolio = {};

// Sticky Nav on scroll
// https://www.youtube.com/watch?v=1cYzyVJbfuM
portfolio.stickyHeader = () => {
    const nav = document.querySelector('.mainNav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > nav.offsetHeight + 150) {
            nav.classList.add('active')
        } else {
            nav.classList.remove('active')
        };
    });
};

portfolio.hamburgerMenu = () => {
    const navUl = document.querySelector('.navUl')
    const closeIcon = document.querySelector('.closeIcon');
    const hamburgerIcon = document.querySelector('.hamburgerIcon');
    const menuButton = document.querySelector('.hamburgerMenu');
    const hambugerLinks = document.querySelectorAll('.navUl a')

    // toggles the 'active' class UNLESS the window width is above 800px
    const toggleMenu = () => {
        if (window.innerWidth > 800 && navUl.classList.contains('active')) {
            navUl.classList.remove('active');
            hamburgerIcon.classList.remove('active');
            closeIcon.classList.remove('active');
        } else {
            navUl.classList.toggle('active');
            hamburgerIcon.classList.toggle('active');
            closeIcon.classList.toggle('active');
        }
    };
    
    menuButton.addEventListener('click', toggleMenu);
    
    if (window.innerWidth <= 800) {
        // closes hamburger menu when a link is clicked
        hambugerLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 800 && navUl.classList.contains('active')) {
            toggleMenu();
        }
    });

    // closes menu when user clicks outside of the menu
    const handleOutsideClick = (e) => {
        if (!menuButton.contains(e.target) && !navUl.contains(e.target) && navUl.classList.contains('active')) {
            toggleMenu();
        }
    }
    document.addEventListener('click', handleOutsideClick);

};



// Typewriter animation on header text
// https://www.youtube.com/watch?v=R846J8LJ6os
portfolio.typewriter = () => {
    // sleep function to be called in my async function to help my it pause between each letter (miliseconds)
    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    
    // List of titles to be typed out
    const titles = ['a Developer', 'an Educator', 'a Researcher'];
    const typewriter = document.getElementById('typewriter');

    // amount of time i want to sleep between each letter in miliseconds (ms)
    let sleepTime = 150;

    // Current index for the word I want to start at in my array of titles
    let currentWordIndex = 0;

    // Async function so it can await the sleep function created above
    const writingLoop = async () => {
        // a while loop to make this function run FOREVER
        while (true) {
            // get access to the words in my array
            let currentWord = titles[currentWordIndex];

            // loops over every letter in the word
            for (let i = 0; i < currentWord.length; i++) {
                // substring is a method that returns the part of the string between the two arguments you pass to it
                typewriter.innerText = currentWord.substring(0, i + 1)
                // pass in sleepTime which is defined above
                await sleep(sleepTime);
            };

            // pause before next word for sleepTime x 5
            await sleep(sleepTime * 5);

            // start at last letter of the word and loop backwards to nothing
            for (let i = currentWord.length; i > 0; i--) {
                typewriter.innerText = currentWord.substring(0, i - 1)
                await sleep(sleepTime);
            };

            // a little more sleepy time
            await sleep(sleepTime);

            // switching words
            if (currentWordIndex === titles.length - 1) {
                currentWordIndex = 0;
            } else {
                currentWordIndex++;
            };
        };
    };

    // Calling my async function
    writingLoop();
};


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
        });
    });
};

// Nav smooth scrolling
portfolio.smoothScroll = () => {
    const navLinks = document.querySelectorAll('nav a');


    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = document.querySelector(link.getAttribute('href'));
            section.scrollIntoView({behavior: 'smooth'});
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
    });
};

// https://help.formspree.io/hc/en-us/articles/1500009404742-How-to-clear-a-form-after-submission
portfolio.clearForm = () => {
    const contactForm = document.querySelector('#contactForm');
    window.onbeforeunload = () => {
        contactForm.reset();
    };
};

portfolio.scrollToTop = () => {
    const scrollButton = document.createElement('button');
    scrollButton.id = 'toTop'
    scrollButton.innerHTML = '<span class="material-symbols-outlined">keyboard_arrow_up</span>'
    document.body.appendChild(scrollButton);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollButton.classList.add('active');
        } else {
            scrollButton.classList.remove('active');
        };
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
};
  




portfolio.init = () => {
    portfolio.stickyHeader();
    portfolio.hamburgerMenu();
    portfolio.typewriter();
    portfolio.scrollToAbout();
    portfolio.toContact();
    portfolio.clearForm();
    portfolio.scrollToTop();
    portfolio.smoothScroll();
};

portfolio.init();