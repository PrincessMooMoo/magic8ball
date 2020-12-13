// const imagesArray = ['back1.svg', 'back2.svg', 'back3.svg',
//     'back4.svg', 'back5.svg', 'back6.svg',
//     'back7.svg', 'back8.svg', 'back9.svg',
//     'back10.svg', 'back11.svg', 'back12.svg',
//     'back13.svg', 'back14.svg', 'back15.svg',
//     'back16.svg', 'back17.svg', 'back18.svg',
//     'back19.svg', 'back20.svg'];

const imagesArray = ['1', '2', '3', '4', '5', '6', '7', 
                    '8', '9', '10', '11', '12', '13', '14',
                    '15', '16', '17', '18', '19', '20'];

const title = document.querySelector('.header');
const imagePlaceholder = document.querySelector('#firstImage');
const form = document.querySelector('.form-layout');
const image = document.querySelector('.image');

function onSubmit(event) {
    event.preventDefault();
    const userInput = event.target.userInput.value;
    title.style.display = 'none';
    image.style.display = 'none';
    form.style.display = 'none'; 

}

function displayRandomImage(imagePlaceholder){
    if(imagePlaceholder) {
        const newArray = imagesArray[Math.floor(Math.random() * 20)];
        const newImage = document.createElement('img');
        const answerImage = document.querySelector('#answers');
        newImage.src = 'images/back' + newArray + '.svg';
        answerImage.appendChild(newImage);
    }
}