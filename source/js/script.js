// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import animationClasses from './modules/animation-classes.js';
import lettersAnimation from './modules/letters-animation.js';
import FullPageScroll from './modules/full-page-scroll.js';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
animationClasses();

const animatedTitle = document.querySelector(`.intro__title`);
const animatedDate = document.querySelector(`.intro__date`);
lettersAnimation(animatedTitle, {
  word: `overflow:hidden;display:flex;padding-top:40px;`,
  letterFrom: `transform:translate3d(0,200px,0);
              transition-property:transform;
              transition-duration:500ms;
              will-change:transform;`,
  letterTo: `transform:translate3d(0,0,0);`
});
lettersAnimation(animatedDate, {
  delayModifier: 500,
  word: `overflow:hidden;display:inline-flex;padding:10px;padding-top:40px;`,
  letterFrom: `transform:translate3d(0,200px,0);
              transition-property:transform;
              transition-duration:500ms;
              will-change:transform;`,
  letterTo: `transform:translate3d(0,0,0);`
});

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
