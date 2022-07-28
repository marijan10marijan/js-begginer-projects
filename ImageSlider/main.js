
const image = document.querySelector('img');
var i = 0;
const images = [];
const time = 1500;

images[0] = 'images/image1.webp';
images[1] = 'images/image2.webp';
images[2] = 'images/image3.webp';
images[3] = 'images/image4.webp';
images[4] = 'images/image5.webp';
images[5] = 'images/image6.webp';


function changeImage() {
    document.change.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImage()', time);
}

window.onload = changeImage;


