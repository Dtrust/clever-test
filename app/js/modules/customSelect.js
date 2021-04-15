import SlimSelect from 'slim-select';

export default function customSelect(selector) {
    new SlimSelect({
        select: document.querySelector(selector),
        data: [
            {text: 'Entry'},
            {text: 'Some option1'},
            {text: 'Some option2'}
        ],
        showSearch: false,
    });
}
