const image = document.querySelector('.skyBG');
const mountinsBG = document.querySelector('.mountinsBG');
const allForeground = document.querySelectorAll('.allForeground');
const roadBG = document.querySelector('.roadBG');
const wrapper = document.querySelector('.wrapper');
const title = document.querySelector('.title');

let prevScrollPos = wrapper.scrollTop;

wrapper.addEventListener('scroll', function() {
  let currentScrollPos = wrapper.scrollTop;
  
  if (currentScrollPos > prevScrollPos) {
    // Scrolling down
    title.style.transform = `translateZ(-12px)`
    mountinsBG.style.transform = `translateY(300px)`;
    roadBG.style.transform = `translateZ(-9px)scale(2.5)`;
   allForeground.forEach(tree => {
    tree.style.transform = `translateY(300px)`;
   });
    

    // // Check if user has scrolled past first section
    // const secondSection = document.querySelector('.section2');
    // const firstSectionBottom = wrapper.offsetTop + wrapper.offsetHeight;
    // const secondSectionTop = secondSection.offsetTop;
    // if (firstSectionBottom >= secondSectionTop) {
    //   // Smoothly scroll to second section
    //   roadBG.style.transform = `translateZ(-9px)scale(${currentScrollPos / 100 + 2.5})`;

    //   secondSection.scrollIntoView({ behavior: 'smooth' });
    // }


  } else {
    // Scrolling up or at the top of the page
    title.style.transform = `translateZ(0px)`
    roadBG.style.transform = `translateZ(-9px)scale(2)`;
    mountinsBG.style.transform = ``;
    allForeground.forEach(tree => {
        tree.style.transform = ``;
       });

  }
  
  prevScrollPos = currentScrollPos;
});

