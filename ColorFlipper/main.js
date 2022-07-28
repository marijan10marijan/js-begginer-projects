
const colors = ['#33da4a', '#99b011', '#ae04a8', '#434334', '#000']



const button = document.getElementById('button');
const colorText = document.querySelector('span');
const body = document.querySelector('body');
const h1 = document.querySelector('.text');

function getRanadom() {
    return Math.floor(Math.random() * colors.length);
}


button.addEventListener('click', function () {
    let random = getRanadom();

    body.style.backgroundColor = colors[random];
    colorText.innerText = colors[random];

    if (body.style.backgroundColor === '#000') {
        h1.style.backgroundColor = '#fff';
        h1.style.color = '#000';
    }
})


