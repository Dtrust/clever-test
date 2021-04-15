function mobileMenu(menuBtn, menuSelector) {
    const body = document.body;
    const overlay = document.querySelector('.overlay');
    const navBtn = document.querySelector(menuBtn);
    const navList = document.querySelector(menuSelector);

    navBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
        navBtn.classList.toggle('active');
        body.classList.toggle('noscroll');
        overlay.classList.toggle('show');
    })

    document.addEventListener('click', (e) => {
        if (!navList.contains(e.target) && !navBtn.contains(e.target) && navList.classList.contains('active')) {
            navList.classList.remove('active');
            navBtn.classList.toggle('active');
            body.classList.toggle('noscroll');
            overlay.classList.toggle('show');
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && navList.classList.contains('active')) {
            navlist.classList.toggle('active');
            navBtn.classList.toggle('active');
            body.classList.toggle('noscroll');
            overlay.classList.toggle('show');
        }
    })
}

export default mobileMenu;
