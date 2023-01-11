const minus = document.querySelector('.minus'),
    plus = document.querySelector('.plus'),
    counter = document.querySelector('.counter'),
    counterWidth = getComputedStyle(counter).getPropertyValue("width");

preventDefaultKeys();
changeCounterWidth(counter.value.length);

plus.addEventListener('click', plusOne);
minus.addEventListener('click', minusOne);
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') plusOne();
    if (e.key === 'ArrowLeft') minusOne();
});

function plusOne() {
    counter.value++;
    if (counter.value === String(Number.MAX_SAFE_INTEGER)) counter.value = '0';
    changeCounterWidth(counter.value.length);
}

function minusOne() {
    counter.value--;
    if (counter.value === String(-1)) counter.value = '0';
    changeCounterWidth(counter.value.length);
}

function preventDefaultKeys() {
    const keys = ['+', '-', 'e', ',', '.', 'Enter', 'ArrowUp', 'ArrowDown'];

    counter.addEventListener('keydown', (e) => {
        if (keys.includes(e.key)) {
            e.preventDefault();
        }
    });
}

function changeCounterWidth(size) {
    counter.addEventListener('input', (e) => {
        if (e.target.value.length === 1) {
            counter.style.width = '150px';
        } else counter.style.width = parseInt(counterWidth) + ((e.target.value.length - 2) * 50) + 'px';
    });

    if (size < 3) {
        counter.style.width = '150px';
    } else counter.style.width = parseInt(counterWidth) + ((size - 2) * 50) + 'px';
}