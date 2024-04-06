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

// after midterm JS : Week 10 JS function
// hover over contact icon images and change color of image (swtich to different image)
var contactIcons = document.getElementsByClassName('contact-icon');

changeContactIcons()

function changeContactIcons() {
    for (i=0; i<contactIcons.length; i++) {  
        switch(i) {
            case 0: 
                email.addEventListener('mouseover', function() {
                    email.src = './img/email_hover.png';
                });
            
                email.addEventListener('mouseout', function() {
                    email.src = './img/email.png';
                });    
            case 1:
                linkedin.addEventListener('mouseover', function() {
                    linkedin.src = './img/linkedin_hover.png';
                });
            
                linkedin.addEventListener('mouseout', function() {
                    linkedin.src = './img/linkedin.png';
                });                                     
            case 2:
                instagram.addEventListener('mouseover', function() {
                    instagram.src = './img/instagram_hover.png';
                });
            
                instagram.addEventListener('mouseout', function() {
                    instagram.src = './img/instagram.png';
                });    
            default:
                break
        }
    }
}

