export default () => {
  const introTextElement = document.querySelector(`.intro__message`);
  const introTextParagraphElement = introTextElement.querySelector(`P`);

  setTimeout(() => {
    introTextParagraphElement.classList.add(`shown`);
  }, 500);
};

