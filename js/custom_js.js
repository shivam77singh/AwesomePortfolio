


function change() {
    $('.circle').addClass('open');
    let elem = document.querySelector('.make-white');
    if (!elem) {
        setTimeout(() => {
            $('.white').addClass('make-white');
        }, 600);
    }
}


$('.hamburger').click(function () {

    setTimeout(() => {
        $('.navbar-nav').toggleClass('change-nav-display');
    }, 300);
    $('.hamburger').toggleClass('change');
    change();
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









window.addEventListener('scroll', () => {
    let dist = window.scrollY;
    let elem = document.querySelector('.make-white');
    if (dist >= 40 && !elem && window.innerWidth > 725) {
       change();
    }
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




//  toggle effect
let f=0;
$('.slider').click(function () {
    change();
    let bg = document.querySelector('.change-bg');
    if(!bg){
        $('body').addClass('change-bg');
        $('.head').css('color', 'white');
    }
    else{
        $('body').removeClass('change-bg');
        $('.head').css('color', 'black');
    }
});