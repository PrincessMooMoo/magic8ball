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
    // title.style.visibility = 'hidden';
    // image.style.display = 'none';
    // form.style.display = 'none';
    setTimeout(function () {
        title.classList.add('fade-out');
        title.style.visibility = 'hidden';
        image.classList.add('fade-out');
        image.style.visibility = 'hidden';
        form.classList.add('fade-out');
        form.style.visibility = 'hidden';
        imagePlaceholder.classList.add('fade-out');
    }, 1000);
    
    return userInput;
}

function displayRandomImage(imagePlaceholder) {
    if (imagePlaceholder) {
        setTimeout(function () {
            const newArray = imagesArray[Math.floor(Math.random() * 20)];
            const newImage = document.createElement('img');
            const answerImage = document.querySelector('#answers');
            newImage.src = 'images/back' + newArray + '.svg';
            answerImage.appendChild(newImage);
        }, 2000);
    }
};

function displayInput(userInput) {
    setTimeout(function () {
        displayQuestion.innerHTML = userInput.value;
    }, 2000)
};


// function displayInput(userInput){
//     displayQuestion.innerHTML = userInput.value;
// };

