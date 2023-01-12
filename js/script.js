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
    if (Number(counter.value) === Number.MAX_SAFE_INTEGER) counter.value = '1';
    changeCounterWidth(counter.value.length);
}

function minusOne() {
    counter.value--;
    if (counter.value === String(0)) counter.value = '1';
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
        if (!counter.value || (parseInt(counter.style.width) > document.documentElement.clientWidth - 200) || Number(counter.value) > Number.MAX_SAFE_INTEGER) {
            counter.style.width = '150px';
            e.target.value = '1';
        } else if (e.target.value.length < 3) {
            counter.style.width = '150px';
        } else counter.style.width = parseInt(counterWidth) + ((e.target.value.length - 2) * 50) + 'px';
    });

    if (size < 3) {
        counter.style.width = '150px';
    } else counter.style.width = parseInt(counterWidth) + ((size - 2) * 50) + 'px';
}