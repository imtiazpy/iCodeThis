// arrow-range
const vertical_bar_size_arr = [24, 40, 38, 44, 46, 50, 45, 40, 38, 38]

const vertical_bar_container = document.querySelector('.vertical-bars');

for (let index = 0; index < 5; index++) {
    vertical_bar_size_arr.forEach((size) => {
        const element = document.createElement('div');
        element.classList.add('vertical-bar');
        element.style.height = size + 'px';

        vertical_bar_container.appendChild(element)
    })
}



addEventListener('input', e => {
    let _t = e.target;
    _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value);
  }, false);
