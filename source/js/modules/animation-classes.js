export default () => {
  const bodyElement = document.querySelector(`BODY`);
  const ruleTextElement = document.querySelector(`.rules__item p`);
  const rulesButtonElement = document.querySelector(`.rules__link.btn`);

  setTimeout(() => {
    bodyElement.classList.add(`body-loaded`);
  }, 100);

  ruleTextElement.addEventListener(`animationend`, () => {
    rulesButtonElement.classList.add(`rules__link--shown`);
  });
  document.addEventListener(`change-screen`, () => {
    if (rulesButtonElement.classList.contains(`rules__link--shown`)) {
      rulesButtonElement.classList.remove(`rules__link--shown`);
    }
  });
};

