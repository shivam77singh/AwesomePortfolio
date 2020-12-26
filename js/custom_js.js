console.log(window.innerWidth)

function color() {
    let open = document.querySelector('.open');
    let bg = document.querySelector('.change-bg');

    if (open || bg) {
        $('.developer').css('opacity', '0');
    }
    else {
        $('.developer').css('opacity', '1');
    }
    if (window.innerWidth < 725 && !bg) {
        $('.developer').css('opacity', '1');
    }
}


function open() {
    $('.circle').addClass('open');
}

function make_white() {
    let elem = document.querySelector('.make-white');
    if (!elem) {
        setTimeout(() => {
            $('.white').addClass('make-white');
        }, 400);
    }
}

function remove_white() {
    $('.white').removeClass('make-white');
}

function white_developer() {
    $('.developer').css(
        {
            'color': 'rgba(255, 255, 255, 0.7)',
            'text- shadow': '20px 20px 20px rgba(175, 175, 175, 0.5)'
        }
    )
}


function remove() {
    $('.circle').removeClass('open');
}




// hamburger click events

$('.hamburger').click(function () {
    setTimeout(() => {
        $('.navbar-nav').toggleClass('change-nav-display');
    }, 300);
    $('.hamburger').toggleClass('change');
    let change = document.querySelector('.change');

    if (change) {
        open();
        make_white();
        // blue_developer();
    }
    else {
        remove();
        let bg = document.querySelector('.change-bg');
        if (!bg) {
            remove_white();
        }
        white_developer();
    }
    color();
});





// scroll events

window.addEventListener('scroll', () => {
    let dist = window.scrollY;
    let bg = document.querySelector('.change-bg');
    if (!bg) {
        open();
        if (window.innerWidth > 725) {
            make_white();
        }
        // blue_developer();
    }
    color();
    

});



//  toggle effect

$('.slider').click(function () {
    // change();
    let bg = document.querySelector('.change-bg');
    let open = document.querySelector('.open');
    if (!bg) {
        $('body').addClass('change-bg');
        $('.head').css('color', 'white');
        make_white();
        white_developer();
    }
    else {
        $('body').removeClass('change-bg');
        $('.head').css('color', 'black');
        if (!open) {
            remove_white();
            white_developer();
        }
        else {
            // blue_developer();
        }
        if (window.innerWidth < 725) {
            remove_white();
            $('.developer').css('opacity', '1');
        }
    }
    color();

});








window.addEventListener('mousemove', cursor);
let mouse_cursor = document.querySelector('.mouse-cursor')
function cursor(e) {
    mouse_cursor.style.top = e.pageY + 'px';
    mouse_cursor.style.left = e.pageX + 'px';
}

let nav_link = document.querySelectorAll('.nav-link');
nav_link.forEach(link => {
    link.addEventListener('mouseleave', () => {
        link.classList.remove('link-grow');
    });
});
nav_link.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('link-grow');
    });
});

$('.hamburger').mouseenter(() => {
    $('.hamburger').addClass('link-grow');
});
$('.hamburger').mouseleave(() => {
    $('.hamburger').removeClass('link-grow');
});












// writing effect


const texts = ["Designer", "Developer", "Nooob"];
let id = 0;
let str_id = 0;
let str = "";
function check() {
    if (str.length < texts[id].length) {
        setTimeout(type, 120);
    }
    else {
        if (str_id === texts[id].length) {
            setTimeout(erase, 500);
        }
        else {
            setTimeout(erase, 60);
        }

    }
}


function type() {
    str += texts[id][str_id];
    document.querySelector('.type-effect').innerHTML = str;
    // console.log(str);
    str_id++;
    check();
}

function erase() {
    {
        document.querySelector('.type-effect').innerHTML = str.substr(0, str_id - 1);
        str_id--;
        if (str_id === 0) {
            str = '';
            id++;
            id %= 3;
        }
        check();
    }
}


check();





