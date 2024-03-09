var mobileIcon = document.getElementsByClassName('mobile-menu');
var navBar = document.getElementsByClassName('menu');

mobileIcon[0].addEventListener('click', toggleMobile);    

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
