import customSelect from './modules/customSelect';
import mobileMenu from './modules/mobileMenu';
import { initChangeCurrency, initTableHandler } from './modules/setServices';
import { changeHeaderByScroll } from './modules/changeHeaderByScroll';
import {modal} from './modules/modal';
import outputConsoleName from './modules/outputConsoleName';


window.addEventListener('DOMContentLoaded', () => {

    changeHeaderByScroll('.header')

    customSelect('#level-select');

    initTableHandler('.row');

    initChangeCurrency('.form-currency__item')

    mobileMenu('.control-btn', '.widget');

    modal('modal')

    outputConsoleName('%c D %c E %c N %c N %c I %c S ');

});
