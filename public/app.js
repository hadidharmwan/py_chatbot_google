const  submitButton = document.getElementById('submitButton');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotOutput = document.getElementById('chatbotOutput');

submitButton.onclick = userSubmitEventHandler;
chatbotInput.onkeyup = userSubmitEventHandler;

function userSubmitEventHandler(event) {
    if(
        (event.keyCode && event.keyCode === 13) || 
        event.type === 'click'
    ){
        chatbotOutput.innerText = 'thinking...';
    }
}