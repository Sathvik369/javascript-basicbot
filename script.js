function getcurrentTime(){

var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var ampm = hours>=12 ? "PM" : "AM";

hours = hours%12;
hours = hours? hours:12;

minutes = minutes <10? '0'+minutes : minutes;

var formattedTime = hours + ":" + minutes + " " + ampm;
 return formattedTime;

}


function sendMessage(){
    var userInput = document.getElementById("userInput");
    var message = userInput.value;

    if(message.trim() !== ""){
        appendMessage("You", message);
        userInput.value = "";
        processMessage(message);
    }
}

function appendMessage(sender,message){
    var chatContainer = document.getElementById("chatContainer");
    var messageElement = document.createElement('p');
    messageElement.innerHTML= "<strong>"+sender+ ":</strong>"+ message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight
}

function processMessage(message){
    if(message.includes("hello") || message.includes("Hello") || message.includes("hi")){
        response = "Hi, what dou want to know?";
    }
    else if (message.includes('who are you?') || message.includes("who are you")){
        response = "I am a bot who will answer your questions";
    }
    else if (message.includes('time')){
       var formattedTime = getcurrentTime();
       response = "The current time is" + formattedTime;
    }
    else {response = "I did not understand the question. Please check and try again."}

    setTimeout(function(){
        appendMessage("Chatbot",response)
    },3000)
}

