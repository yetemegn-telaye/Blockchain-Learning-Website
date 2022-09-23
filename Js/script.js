const menuCloseBtn = document.querySelector("#menu-close");


menuCloseBtn.addEventListener('click', function(){
    let toggleMenuBtn = document.querySelector("#toggleMenuBtn");
    toggleMenuBtn.ariaExpanded=false;
    console.log(toggleMenuBtn.ariaExpanded);
});

