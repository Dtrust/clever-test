
// Getting initial field values ​​from HTML
const getBaseValues = () => {
    const values = [];
    const valuesFields = document.querySelectorAll('.value-input');

    valuesFields.forEach(field => {
        values.push(field.value);
    })
    return values;
}

export const services = {
    // Set total field value
    total: 0.00,

    // Set default rate
    rate: 1,

    // Check changes and update total value. At the entrance takes inputSelector of total field and total selector in HTML
    setTotalValue(totalFieldSelector, totalValueSelector) {
        const totalField = document.getElementById(totalFieldSelector);
        const totalSelector = document.querySelector(totalValueSelector);

        totalField.value = +this.total;
        totalSelector.textContent = `${(totalField.value * this.rate).toFixed(2)}`;

        totalField.addEventListener('change', () => {
            totalSelector.textContent = `${(totalField.value * this.rate).toFixed(2)}`;
        })

        return Number(totalField.value);
    },

    // Set rate when currency changes
    setRate(rate) {
        this.rate = +rate
        return this.rate
    },

    // Up the total value after choosing a service
    upTotal(value) {
        this.total = (this.total + +value);
    },

    // Down the total value after choosing a service
    downTotal(value) {
        this.total = (this.total - +value);
    },

    // Set values after currency changes
    setInputValues() {
        const valueCount = document.querySelectorAll('.value-count');

        for (let i = 0, v = 0; i < getBaseValues().length, v < valueCount.length; i++, v++ ) {
            valueCount[v].textContent = `${Math.floor(getBaseValues()[i] * this.rate * 100) / 100}`;
        }
        this.setTotalValue('total','.form-total__pay');
    },

    // Set current currency mark
    setCurrencyMark(symbol) {
        const currentMarks = document.querySelectorAll('.value-mark');
        const totalMark = document.querySelector('.form-total__mark');
        const modalTotalMark = document.querySelector('.modal-desc__currency');

        currentMarks.forEach(item => {
            item.textContent = symbol;
        });

        totalMark.textContent = symbol;
        modalTotalMark.textContent = symbol;
    },

    // Adds an activity class and activates the input value to the selected value
    toggleValue(elem, activeSelector, inputSelector) {
        const input = elem.querySelector(inputSelector);

        if (elem.classList.contains(activeSelector)) {
            elem.classList.remove(activeSelector);
            input.checked = false;
        } else {
            elem.classList.add(activeSelector);
            input.checked = true;
        }
        // This function expression removes unselected values from the row
        const siblings = (elem) => {
            const nodes = [...elem.parentNode.children];
            return nodes.filter(node => node !== elem);
        }

        siblings(elem).forEach(node => {
            node.classList.remove(activeSelector);
            const input = node.querySelector(inputSelector);

            if (input) {
                input.checked = false;
            }
        })
    },

    // Selection of the active value from the row
    checkValue(row) {
        const rowValues = row.querySelectorAll('.value');

        // Get the input value of the previous click
        function getPrevValue() {
            let prev = 0;
            const inputField = row.querySelectorAll('.value-input');

            inputField.forEach(field => {
                if (field.checked) {
                    prev = +field.value
                }
            })
            return prev
        }

        // Get the input value of the current click
        function handler(rowValue) {
            const prevValue = getPrevValue();
            const input = rowValue.querySelector('.value-input');

            services.toggleValue(rowValue, 'value--active', '.value-input');

            if(rowValue.classList.contains('value--active')) {
                services.upTotal(input.value);
                services.downTotal(prevValue);
            } else {
                services.downTotal(input.value);
            }

            services.setTotalValue('total', '.form-total__pay');
        }

        rowValues.forEach(rowValue => {
            rowValue.addEventListener('click', (e) => {
                e.preventDefault()
                handler(rowValue)
            });
        })
    },

    // Initializing a click handler for a table
    initCheckValues(rowSelector) {
        const rows = document.querySelectorAll(rowSelector);
        rows.forEach(row => this.checkValue(row));
    },

    // Change currency function
    changeCurrency(changeCurrencyButtonsSelector) {
        const currencyButtons = document.querySelectorAll(changeCurrencyButtonsSelector);

        for (let i = 0; i < currencyButtons.length; i++) {

            currencyButtons[i].addEventListener("click", (e) => {
                e.preventDefault();
                const current = document.querySelectorAll('.currency--active');

                current[0].className = current[0].className.replace('currency--active', '');
                current[0].querySelector('input').checked = false;

                currencyButtons[i].className += ' currency--active';
                currencyButtons[i].querySelector('input').checked = true;

                const currentCurrency = currencyButtons[i].getAttribute('data-currency');

                switch (currentCurrency) {
                    case 'usd':
                        services.setCurrencyMark('$');
                        services.setRate(1)
                        services.setInputValues();
                        break;

                    case 'eur':
                        services.setCurrencyMark('€');
                        services.setRate(.83)
                        services.setInputValues();
                        break;

                    case 'cad':
                        services.setCurrencyMark('C$');
                        services.setRate(1.25);
                        services.setInputValues();
                        break;

                    case 'gbr':
                        services.setCurrencyMark('£');
                        services.setRate(.73)
                        services.setInputValues();
                        break;

                    case 'aud':
                        services.setCurrencyMark('A$');
                        services.setRate(1.29)
                        services.setInputValues();
                        break;

                    default:
                        services.setCurrencyMark('$');
                        services.setRate(1);
                }
            })
        }
    }
}

export function initTableHandler(rows) {
    services.initCheckValues(rows)
}

export function initChangeCurrency(changeCurrencyButtonsSelector) {
    services.changeCurrency(changeCurrencyButtonsSelector)
}
