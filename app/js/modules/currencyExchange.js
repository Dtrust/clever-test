import {clearSelectedFields} from './setServices';

function exchangeCurrency() {
    const currencyItems = document.querySelectorAll('.form-currency__item');

    const baseValues = [];
    const valuesFields = document.querySelectorAll('input[name="value"]');

    valuesFields.forEach(field => {
        baseValues.push(field.value)
    })

    function setValues(rate) {
        const currencyCounts = document.querySelectorAll('.value-count');

        for (let i = 0, j = 0; baseValues.length, j < valuesFields.length; i++, j++) {
            valuesFields[j].value = `${Math.floor(baseValues[i] * rate * 100) / 100}`;
        }

        currencyCounts.forEach(count => {
            const countSelector = count.parentElement.querySelector('.value-count');
            const countValue = count.parentElement.querySelector('input[name="value"]').value;

            countSelector.textContent = `${countValue}`
        })
    }

    function setCurrencyMark(symbol) {
        const currentMarks = document.querySelectorAll('.value-mark');
        const totalMark = document.querySelector('.form-total__mark');
        const modalTotalMark = document.querySelector('.modal-desc__currency');

        currentMarks.forEach(mark => {
            mark.textContent = symbol;
        });

        totalMark.textContent = symbol;

        modalTotalMark.textContent = symbol;

    }

    function clearTotal() {
        const totalPayContainer = document.querySelector('.form-total__pay');
        const totalField = document.querySelector('.form-total__field');

        totalPayContainer.textContent = '0';
        totalField.value = 0;
    }

    for (let i = 0; i < currencyItems.length; i++) {
        currencyItems[i].addEventListener("click", function() {
            let current = document.getElementsByClassName('currency--active');
            current[0].className = current[0].className.replace('currency--active', '');
            this.className += ' currency--active';

            const currentCurrency = this.getAttribute('data-currency');

            switch (currentCurrency) {
                case 'usd':
                    setCurrencyMark('$');
                    setValues(1);
                    break;

                case 'eur':
                    setCurrencyMark('€');
                    setValues(.83);
                    clearSelectedFields();
                    clearTotal();
                    break;

                case 'cad':
                    setCurrencyMark('C$');
                    setValues(1.25);
                    clearSelectedFields();
                    clearTotal();
                    break;

                case 'gbr':
                    setCurrencyMark('£');
                    setValues(0.73);
                    clearSelectedFields();
                    clearTotal();
                    break;

                case 'aud':
                    setCurrencyMark('A$');
                    setValues(1.29)
                    clearSelectedFields();
                    clearTotal();
                    break;

            }
        });
    }
}


export default exchangeCurrency
