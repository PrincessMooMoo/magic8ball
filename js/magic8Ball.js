const imagesArray = ['1', '2', '3', '4', '5', '6', '7', 
                    '8', '9', '10', '11', '12', '13', '14',
                    '15', '16', '17', '18', '19', '20'];

const title = document.querySelector('.header');
const imagePlaceholder = document.querySelector('#firstImage');
const form = document.querySelector('.form-layout');
const image = document.querySelector('.image');
const displayQuestion = document.querySelector(".display-question");

function onSubmit(event) {
    event.preventDefault();
    const userInput = event.target.userInput.value;
    console.log(userInput);
    title.style.display = 'none';
    image.style.display = 'none';
    form.style.display = 'none'; 
    return userInput;
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

function displayInput(userInput){
    displayQuestion.innerHTML = userInput.value;
};