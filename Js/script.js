const menuCloseBtn = document.querySelector('#menu-close');

menuCloseBtn.addEventListener('click', () => {
  const toggleMenuBtn = document.querySelector('#toggleMenuBtn');
  toggleMenuBtn.ariaExpanded = false;
});
