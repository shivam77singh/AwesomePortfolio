// <====menu open & close====>
document.querySelector('.menu').addEventListener('click', () => {
    if (document.querySelector('.nav-links').style.top === '-1000px') {
        document.querySelector('.nav-links').style.top = '5rem';
    }
    else {
        document.querySelector('.nav-links').style.top = '-1000px';
    }
});

// <===mouse cursor===>

if (window.innerWidth > 1000) {

    window.addEventListener('mousemove', cursor);
    let mouse_cursor = document.querySelector('.mouse-cursor')
    function cursor(e) {
        mouse_cursor.style.top = e.pageY + 'px';
        mouse_cursor.style.left = e.pageX + 'px';
    }
}


// <<=====about, skilss, projects =====>>

const about = document.querySelector('.about-container');
const about_img = document.querySelector('.about-image');
window.addEventListener('scroll', () => {
    $('.circle').css('top', `${window.scrollY}px`);
    let windX = window.innerWidth;
    let windY = window.innerHeight;
    let mouseX = ((windX / 2) - window.scrollY) / 40;
    let mouseY = ((windY / 2) - window.scrollY) / 70;
    if (window.innerWidth <= 900) {
        mouseY /= 12;
        mouseX /= 12;
    }
    console.log(scrollY);
    if (scrollY <= 730) { about.style.transform = `rotateX(${-mouseX}deg) rotateY(${mouseY}deg)`; }
    about.style.transition = 'all 0.2s ease';

    if (scrollY >= 1900) {
        $('.project1').css(
            {
                'transform': 'skewX(-15deg)'
            }
        )
        $('.project2').css(
            {
                'transform': 'skewX(-15deg)'
            }
        )
        $('.project3').css(
            {
                'transform': 'skewX(-15deg)'
            }
        )
    }
    else {
        $('.project1').css(
            {
                'transform': 'translateX(900px) skewX(-15deg)'
            }
        )
        $('.project2').css(
            {
                'transform': 'translateX(-900px) skewX(-15deg)'
            }
        )
        $('.project3').css(
            {
                'transform': 'translateX(900px) skewX(-15deg)'
            }
        )
    }

    if (window.innerWidth > 900) {

        let cards = document.getElementsByClassName('skills-card');
        let t = 0;
        for (let i = 0; i < 3; i++) {

            if (t + 1180 < scrollY) {
                if (i > 0) {
                    cards[i - 1].style.cssText = "transform: none;background-color: rgba(172, 173, 255, 0.4);"
                }
                cards[i].style.cssText = "transform: translate3d(-20px, -20px, -70px) scale(1.3);background-color: rgb(89, 167, 255);"
            }
            else {
                cards[i].style.cssText = "transform: none;background-color: rgba(172, 173, 255, 0.4);"
            }
            t += 270;

        }
    }
});




// <<======projects and carousal hover effect===>>

const projects = [".project1", ".project2", ".project3"];
const carousals = [".news", ".music", ".portfolio"];


function mouseenter(i) {
    let project = document.querySelector(`${projects[i]}`);
    let carousal = document.querySelector(`${carousals[i]}`);

    project.addEventListener('mouseenter', () => {
        window.addEventListener('mousemove', (e) => {
            carousal.style.opacity = '0.9';
            carousal.style.left = `${e.pageX - 100}px`;
            carousal.style.top = `${e.pageY - 270}px`;
            carousal.style.transition = 'all 0s ease';
        });

    });
    project.addEventListener('mouseleave', () => {
        window.addEventListener('mousemove', (e) => {
            carousal.style.opacity = '0';
            carousal.style.left = '-100px';
            carousal.style.transition = 'all 0.2s ease';
        });
    });

}

for (let i = 0; i < 3; i++) {
    mouseenter(i);
}



// <<===scroll into view===>>

let pages = [".home-container", ".about-container", ".skills-page", ".projects-page"];
let links = $('.nav-links li');

for (let i = 0; i < 4; i++) {
    let page = document.querySelector(`${pages[i]}`)
    links[i].addEventListener('click', () => {
        page.scrollIntoView();
    });
}
