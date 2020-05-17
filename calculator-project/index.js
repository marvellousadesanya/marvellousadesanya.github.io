strings = {
    num1: document.querySelector('#num1'),
    num2: document.querySelector('#num2'),
    num3: document.querySelector('#num3'),
    num4: document.querySelector('#num4'),
    num5: document.querySelector('#num5'),
    num6: document.querySelector('#num6'),
    num7: document.querySelector('#num7'),
    num8: document.querySelector('#num8'),
    num9: document.querySelector('#num9'),
    num0: document.querySelector('#num0'),
    screen: document.querySelector('.screen'),
    clear: document.querySelector('#clear')
};

const numberButtons = document.querySelectorAll(['.number']);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {   
        strings.screen.value += button.value;
    });
});

function clearButton() {
    strings.screen.value = '';
}

strings.clear.addEventListener('click', clearButton);

const operators = document.querySelectorAll(['.operator']);

operators.forEach(button => {
    button.addEventListener('click', () => {
        strings.screen.value += button.value;
    });
});

const calc = document.querySelector('#calc');

calc.addEventListener('click', () => {
    const w = eval(strings.screen.value);
    clearButton();
    strings.screen.value = w;
})