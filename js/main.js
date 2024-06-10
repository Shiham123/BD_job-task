const buttonEl = document.querySelector('.ask-section-content > button');

buttonEl.addEventListener('mouseenter', function () {
  buttonEl.classList.add('hover-btn');
});

buttonEl.addEventListener('mouseleave', function () {
  buttonEl.classList.remove('hover-btn');
});
