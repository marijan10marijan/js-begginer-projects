
const hexadecimalArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

const button = document.getElementById('button');
const colorText = document.querySelector('span');
const body = document.querySelector('body');



button.addEventListener('click', function () {
    let color = '#';

    for (let i = 0; i < 6; i++) {
        const random = getRandom();
        color += hexadecimalArray[random];
    }

    body.style.backgroundColor = color;
    colorText.innerText = color;
})

function getRandom() {
    return Math.floor(Math.random() * hexadecimalArray.length);
}