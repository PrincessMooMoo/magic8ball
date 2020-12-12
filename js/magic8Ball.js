const imagesArray = ['back1.svg', 'back2.svg', 'back3.svg',
    'back4.svg', 'back5.svg', 'back6.svg',
    'back7.svg', 'back8.svg', 'back9.svg',
    'back10.svg', 'back11.svg', 'back12.svg',
    'back13.svg', 'back14.svg', 'back15.svg',
    'back16.svg', 'back17.svg', 'back18.svg',
    'back19.svg', 'back20.svg'];

const title = document.querySelector('.header');
const imagePlaceholder = document.querySelector('.image');
const form = document.querySelector('.form-layout');

function onSubmit(event) {
    event.preventDefault();
    const userInput = event.target.userInput.value;
    title.style.display = 'none';
    imagePlaceholder.style.display = 'none';
    form.style.display = 'none';
    
}