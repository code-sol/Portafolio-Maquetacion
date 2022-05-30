((d)=>
{
    const menuIcon = d.querySelector('.header-menu-icon');
    const iconOpen = d.querySelector('.icon-open');
    const iconClose = d.querySelector('.icon-close');
    const menu = d.querySelector('.header-menu');
    
    menuIcon.addEventListener('click',()=>
    {
        iconClose.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden');
        menu.classList.toggle('menu-active');
    });


})(document)

