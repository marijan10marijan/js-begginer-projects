const reviews = [
    {
        'image': 'images/person1.webp',
        'name': 'Jane Miscullin',
        'jobPosition': 'Developer',
        'about': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse cumque quaera consequatur error   aliquam est dolore recusandae sit non?'
    },

    {
        'image': 'images/person2.webp',
        'name': 'Mike Hertberg',
        'jobPosition': 'Account Menager',
        'about': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse cumque quaera consequatur error   aliquam est dolore recusandae sit non?'
    },

    {
        'image': 'images/person3.webp',
        'name': 'Dora Jackson',
        'jobPosition': 'H&R Apartment',
        'about': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse cumque quaera consequatur error   aliquam est dolore recusandae sit non?'
    },

    {
        'image': 'images/person4.webp',
        'name': 'Luke Breat',
        'jobPosition': 'Software Enginnere',
        'about': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse cumque quaera consequatur error   aliquam est dolore recusandae sit non?'
    }
]

const image = document.querySelector('.person-image');
const personName = document.querySelector('.name');
const jobPosition = document.querySelector('.job-position');
const about = document.querySelector('.about');

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const randomButton = document.querySelector('.random-btn');

let index = 0;

window.addEventListener('DOMContentLoaded', function () {
    changePerson();
})

function changePerson() {
    const person = reviews[index];
    image.src = person.image;
    personName.textContent = person.name;
    jobPosition.textContent = person.jobPosition;
    about.textContent = person.about;
}

prevButton.addEventListener('click', function () {
    index--;
    if (index < 0) {
        index = reviews.length - 1;
    }
    changePerson(index);
})

nextButton.addEventListener('click', function () {
    index++;
    if (index > reviews.length - 1) {
        index = 0;
    }
    changePerson(index);
})

randomButton.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    index = randomIndex;
    changePerson(index);
})

