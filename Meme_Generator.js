const myImgLink = document.querySelector('#imgLink');
const myTopText = document.querySelector('#topText');
const myBottomText = document.querySelector('#bottomText');
const mySubmitButton = document.querySelector('#Submit');
let errorMessage;

mySubmitButton.addEventListener('click', function(event){
    event.preventDefault();
    let imgURL = myImgLink.value;
    let topText = myTopText.value;
    let bottomText = myBottomText.value;

    if(!imgURL || !topText || !bottomText){

        if(!errorMessage){
        errorMessage = document.createElement('div');
        errorMessage.textContent = "'Fill in remaining field texts!'";
        document.getElementsByTagName('body')[0].appendChild(errorMessage);
        }
        return;
    }
    if (errorMessage) {
        errorMessage.remove();
        errorMessage = null;
    }
    
    let img = document.createElement('img');
    img.setAttribute('src', imgURL);

    let topTextElement = document.createElement('div');
    topTextElement.textContent = topText;

    let bottomTextElement = document.createElement('div');
    bottomTextElement.textContent = bottomText;

    let removeButton = document.createElement('button');
    removeButton.textContent = "X";
    removeButton.addEventListener('click', function() {
        topTextElement.remove();
        img.remove();
        bottomTextElement.remove();
        removeButton.remove();
    });

    let container = document.createElement('div');
    container.classList.add('my-container');
    container.appendChild(topTextElement);
    container.appendChild(img);
    container.appendChild(bottomTextElement);
    container.appendChild(removeButton);
    document.getElementsByTagName('body')[0].appendChild(container);

    myImgLink.value = '';
    myTopText.value = '';
    myBottomText.value = '';
});

