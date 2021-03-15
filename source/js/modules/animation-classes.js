export default () => {
  const bodyElement = document.querySelector(`BODY`);

  setTimeout(() => {
    bodyElement.classList.add(`body-loaded`)
  }, 100);
};

