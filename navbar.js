const hamburger= document.getElementById('hamburger');
const menu= document.getElementById('mobileMenu');

hamburger.addEventListener('click', function(){
    console.log('clicked');
    console.log(menu);
    menu.classList.toggle('active');
});
