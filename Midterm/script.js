var mobileIcon = document.getElementsByClassName('mobile-menu');
var navBar = document.getElementsByClassName('menu');
var contactIcons = document.getElementsByClassName('contact-icon');

mobileIcon[0].addEventListener('click', toggleMobile);    

// for (i=0; i<contactIcons.length; i++) {
//     contactIcons[i].addEventListener('mouseover', hoverContactIcons(i));
// }

function toggleMobile() {
    console.log('Toggling');
    if (navBar[0].style.display == 'none') {
        // console.log('TURN ON')
        navBar[0].style.display = 'block';
    }
    else {
        navBar[0].style.display = 'none';
    }
}

// function hoverContactIcons(i) {
//     console.log("hovering");
//     contactIcons[i].src="./img/"+contactIcons[i].id+"_hover"+".png";
// }