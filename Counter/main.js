
const number = document.getElementById('countNumber');
const buttons = document.querySelectorAll('.btn');

let changeNumber = 0;

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let item = e.currentTarget.classList;
        if (item.contains('increase')) {
            changeNumber++;
        }
        else if (item.contains('decrease')) {
            changeNumber--;
        }
        else {
            changeNumber = 0;
        }

        if (changeNumber > 0) {
            number.style.color = 'green';
        }
        if (changeNumber < 0) {
            number.style.color = 'red';
        }
        if (changeNumber === 0) {
            number.style.color = 'black';
        }

        number.innerText = changeNumber;
    })
})

