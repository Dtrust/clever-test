export function toggleClass(elem, activeSelector) {
    elem.classList.toggle(activeSelector);
    siblings(elem).forEach(node => {
        node.classList.remove(activeSelector);
    })
}

export function siblings(elem) {
    const nodes = [...elem.parentNode.children];
    return nodes.filter(node => node !== elem);
}

export function clearSelectedFields() {
    const rowsValues = document.querySelectorAll('.value');

    rowsValues.forEach(row => {
        if (row.classList.contains('value--active')) {
            row.classList.remove('value--active');
        }
    })
}

function setServices() {

    let totalPay = 0;

    const rowsValues = document.querySelectorAll('.value');

    function setTotalPay(totalPay) {
        const totalContainer = document.querySelector('.form-total__pay');
        const totalField = document.querySelector('.form-total__field');
        const modalTotalCount = document.querySelector('.modal-desc__count');
        const modalTitle = document.querySelector('.modal-title');

        if (totalPay >= 0 || totalPay !== undefined) {
            totalContainer.textContent = totalPay;
            totalField.value = totalPay;
            modalTotalCount.textContent = totalPay;
            modalTitle.innerHTML = 'Thank You!'
        } else {
            totalContainer.textContent = '0';
            totalField.value = '0';
            modalTotalCount.textContent = '0';
            modalTitle.innerHTML = 'Please select services before continue...'
        }
    }

    rowsValues.forEach(rowValue => {
        rowValue.addEventListener('click', function() {

            toggleClass(this, 'value--active');

            const input = this.querySelector('input[name="value"]');
            let value = +input.value;
            let roundValue = (Math.floor(value * 100) /100);

            if (this.classList.contains('value--active')) {
                input.checked = true;
                totalPay += roundValue;
                setTotalPay(totalPay);
            } else {
                input.checked = false;
                totalPay -= roundValue;
                setTotalPay(totalPay);
            }

        })

    })
}

export default setServices
