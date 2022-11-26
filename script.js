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
            }

            // pause before next word for sleepTime x 5
            await sleep(sleepTime * 5);

            // start at last letter of the word and loop backwards to nothing
            for (let i = currentWord.length; i > 0; i--) {
                typewriter.innerText = currentWord.substring(0, i - 1)
                await sleep(sleepTime);
            }

            // a little more sleepy time
            await sleep(sleepTime);

            // switching words
            if (currentWordIndex === titles.length - 1) {
                currentWordIndex = 0;
            } else {
                currentWordIndex++;
            }
        }
    }

    // Calling my async function
    writingLoop();
}


// "Get In Touch" button in header that scrolls down to contact secion
// https://stackoverflow.com/questions/24739126/scroll-to-a-specific-element-using-html
portfolio.toContact = () => {
    const contactScroll = document.querySelector('.toContact')
    const contactSection = document.querySelector('#contact')
    const nav = document.querySelector('.mainNav');

    contactScroll.addEventListener('click', () => {
        contactSection.scrollIntoView - nav.offsetHeight({
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


// Lightbox/Carousel
// https://www.youtube.com/watch?v=uKVVSwXdLr0
// https://www.youtube.com/watch?v=YVUSgLaWVsk
portfolio.lightbox = () => {
    // create div and variable and give it an id
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    // append it to the bodyyyyy
    document.body.appendChild(lightbox);

    // select projects
    const projectImg = document.querySelectorAll('.projectImgContainer img')
    const projectOverlay = document.querySelectorAll('.projectTextOverlay')
    const projectText = document.querySelectorAll('.lightboxText')

    // put an event listener on each project
    projectOverlay.forEach(project => {
        project.addEventListener('click', e => {
            // when clicked, add active class which shows lightbox
            lightbox.classList.add('active');
            const container = document.createElement('div')
            const img = document.createElement('img');
            const text = document.createElement('div')
            projectText.forEach(blurb => {
                text.innerHTML = blurb.innerHTML
            })
            projectImg.forEach(image => {
                img.src = image.src
                img.alt = image.alt
            });
            
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            container.appendChild(img);
            container.appendChild(text);
            lightbox.appendChild(container)
        });
    });
    lightbox.addEventListener('click', e => {
    // if click on image, do nothing, if click on lightbox, close
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active');
});

}



portfolio.init = () => {
    portfolio.stickyHeader();
    portfolio.typewriter();
    portfolio.scrollToAbout();
    portfolio.toContact();
    portfolio.lightbox();
}

portfolio.init();