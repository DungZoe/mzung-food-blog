// ANIMATION

document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
});


// X BUTTON FOR HAMBURGER MENU

const menuBtn = document.querySelector('.hamburger');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// ACTION FOR HAMBURGER MENU

function myFunction() {

    var x = document.getElementById("menuLink");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Scroll to top button ---------------------

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}