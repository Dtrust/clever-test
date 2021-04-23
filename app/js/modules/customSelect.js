import SlimSelect from 'slim-select';

export default function customSelect(selector) {
    new SlimSelect({
        select: document.querySelector(selector),
        allowDeselectOption: true,
        showSearch: false,
    });
}
