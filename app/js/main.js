import customSelect from './modules/customSelect';
import mobileMenu from './modules/mobileMenu';
import setServices from './modules/setServices';
import exchangeCurrency from './modules/currencyExchange';
import {changeHeaderByScroll} from './modules/changeHeaderByScroll';
import {modal} from './modules/modal';
import outputConsoleName from './modules/outputConsoleName';


window.addEventListener('DOMContentLoaded', () => {

    changeHeaderByScroll('.header')

    customSelect('#level-select');

    mobileMenu('.control-btn', '.widget');

    exchangeCurrency();

    setServices();

    modal('modal')

    outputConsoleName('%c D %c E %c N %c N %c I %c S ');

});
