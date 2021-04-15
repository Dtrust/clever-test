export function modal(modalSelector) {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById(modalSelector);
    const buyBtn = document.getElementById('btn-buy');
    const closeBtn = document.getElementById('submit-close');

    buyBtn.addEventListener('click', (e) => {
        e.preventDefault();

        document.body.classList.add('noscroll');
        overlay.classList.add('show');
        modal.classList.add('show');
        modal.classList.add('modal-animation');
        setTimeout(() => {
            modal.classList.remove('modal-animation');
        }, 600);

    });

    function deleteClass() {
        if (overlay.classList.contains('show') && modal.classList.contains('show')) {
            overlay.classList.remove('show');
            modal.classList.remove('show');
            document.body.classList.remove('noscroll');
        }
    }

    closeBtn.addEventListener('click', () => {
        deleteClass();
    });

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            deleteClass();
        }
    };

    document.addEventListener('click', function(e) {
        const target = e.target;
        const itsMenu = target == modal || modal.contains(target);
        const itsBtnMenu = target == buyBtn;
        const menuIsActive = modal.classList.contains('show');

        if (!itsMenu && !itsBtnMenu && menuIsActive) {
            deleteClass();
        }
    });

}
