export function changeHeaderByScroll(headerSelector) {
    let scrollPos = window.scrollY;
    const header = document.querySelector(headerSelector);
    const headerHeight = header.offsetHeight

    const addClassOnScroll = () => header.classList.add('header-scroll');
    const removeClassOnScroll = () => header.classList.remove('header-scroll');

    window.addEventListener('scroll', function() {
        scrollPos = window.scrollY;

        if (scrollPos >= headerHeight) {
            addClassOnScroll();
        } else {
            removeClassOnScroll();
        }
    })
}
