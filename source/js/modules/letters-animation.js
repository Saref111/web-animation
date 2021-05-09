export default (node, config = {word: ``, letterFrom: ``, letterTo: ``, delayModifier: 0}) => {
  const innerText = node.innerHTML;
  const key = Math.ceil(Math.random() * 999999999999);
  const letterFromClass = `animated-letter-${key}-from`;
  const letterToClass = `animated-letter-${key}-to`;


  const animatedText = innerText.split(` `).map((word) => {

    return `<span style="${config.word}">${word.split(``).map((letter, i) => {
      let modifier = i !== 0 ? i : 1;

      return `<span class="${letterFromClass}" style="transition-delay:${i % 2 === 0 ? ((modifier - 1) * 100) + config.delayModifier : ((modifier + 1) * 100) + config.delayModifier }ms;">${letter}</span>`;

    }).join(``)}</span>`;

  }).join(` `) + `<style>
  .${letterFromClass} {${config.letterFrom}}
  .body-loaded .active .${letterToClass} {${config.letterTo}}
  </style>`;


  node.innerHTML = animatedText;

  node.querySelectorAll(`SPAN SPAN`).forEach((el) => {
    el.classList.add(letterToClass);
  });
};
