export function modal(modalSelector) {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById(modalSelector);
    const buyBtn = document.getElementById('btn-buy');
    const closeBtn = document.getElementById('submit-close');

    const totalValue = document.querySelector('.form-total__pay')
    const modalTotalValue = document.querySelector('.modal-desc__count')

    const modalTitle = document.querySelector('.modal-title')

    buyBtn.addEventListener('click', (e) => {
        e.preventDefault();

        modalTotalValue.textContent = totalValue.textContent;

        if (modalTotalValue.textContent !== '0.00') {
            modalTitle.textContent = 'Thank You!'
        } else {
            modalTitle.textContent = 'Please select services before continue...'
        }

        document.body.classList.add('noscroll');
        overlay.classList.add('show');
        modal.classList.add('show');
        modal.classList.add('modal-animation');
        setTimeout(() => {
            modal.classList.remove('modal-animation');
        }, 600);

    });

    function deleteActiveClass() {
        if (overlay.classList.contains('show') && modal.classList.contains('show')) {
            overlay.classList.remove('show');
            modal.classList.remove('show');
            document.body.classList.remove('noscroll');
        }
    }

    closeBtn.addEventListener('click', () => {
        deleteActiveClass();
    });

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            deleteActiveClass();
        }
    };

    document.addEventListener('click', function(e) {
        const target = e.target;
        const itsMenu = target == modal || modal.contains(target);
        const itsBtnMenu = target == buyBtn;
        const menuIsActive = modal.classList.contains('show');

        if (!itsMenu && !itsBtnMenu && menuIsActive) {
            deleteActiveClass();
        }
    });

}
