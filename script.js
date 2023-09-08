const headerEL = document.querySelector('.nav-bar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        headerEL.classList.add('nav-bar-scrolled');
    }else if (window.scrollY <= 50){
        headerEL.classList.remove('nav-bar-scrolled');
    }
});

var typingEffect = new Typed('.typo',{
    strings : ['Articles', 'Stories','Poetry',' Quotes'],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1000,
})


