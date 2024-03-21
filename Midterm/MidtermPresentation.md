# Project:
My portfolio consists of a nav bar with 3 different pages: Projects, Personal, and About. All of them have different layouts for content, and when you resize the page, they all react differently. The images and text are in and I made sure to include a lot of hover effects for interactivity.


# Code Snippet: Using keyframes 
I made an animation by using keyframes and calling it in a container so that it only affects the contents of the paged and not the nav bar or footer.

@keyframes slideInLeft {

    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
    
}

.grid-container {

    animation: 2s ease-in-out slideInLeft;
    ...
  }

# Next steps:
- More playful graphics
- More freeform organization rather than just boxes
- More animations and interactions
