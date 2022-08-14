const reviews = [{
    id: 1,
    name: "Susan Smith",
    job: "web developer",
    img: "images/01.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quo totam eius sequi? Sequi possimus nisi deserunt libero explicabo ea, eveniet itaque rem deleniti! Qui voluptatum ducimus ea ex sunt."
}, {
    id: 2,
    name: "Jackson Paris",
    job: "web designer",
    img: "images/02.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quo totam eius sequi? Sequi possimus nisi deserunt libero explicabo ea, eveniet itaque rem deleniti! Qui voluptatum ducimus ea ex sunt."
}, {
    id: 1,
    name: "Sierra Herrera",
    job: "web developer",
    img: "images/03.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quo totam eius sequi? Sequi possimus nisi deserunt libero explicabo ea, eveniet itaque rem deleniti! Qui voluptatum ducimus ea ex sunt."
}, {
    id: 1,
    name: "Caleb Giovanni",
    job: "Data Specialist",
    img: "images/04.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quo totam eius sequi? Sequi possimus nisi deserunt libero explicabo ea, eveniet itaque rem deleniti! Qui voluptatum ducimus ea ex sunt."
}];

const container = document.querySelector('#js-reviews-container');
const img = document.querySelector('#js-image');
const author = document.querySelector('#js-author');
const job = document.querySelector('#js-job');
const text = document.querySelector('#js-text');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        currentItem++;
        if (currentItem > reviews.length - 1) {
            currentItem = 0;
        }
        showPerson(currentItem);
    }, 30000);
});

showPerson = () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job.toUpperCase();
    text.textContent = item.text;
}

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("right")) {
        currentItem++;
        if (currentItem > reviews.length - 1) {
            currentItem = 0;
        }
        showPerson(currentItem);
    } else if (e.target.classList.contains("left")) {
        currentItem--;
        if (currentItem < 0) {
            currentItem = reviews.length - 1;
        }
        showPerson(currentItem);
    }
});