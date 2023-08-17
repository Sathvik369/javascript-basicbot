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

function getcurrentdate(){

    const date = new Date();
    return date;
}

var input = document.getElementById("userInput");
input.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
    document.getElementById("btn").click();
}});

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
    else if(message.includes('date')){
        var date = getcurrentdate();
        response = "Today is " + date;
    }
    else if (message.includes('tell me a joke')){
        response =  "Why don't scientists trust atoms? Because they make up everything!";
    }
    else if (message.includes('convert kilograms to pounds') || message.includes('convert kgs to pounds')){
        response =  "Sure, 1 kilogram is approximately 2.20462 pounds.";
    }
    else if (message.includes('recommend me a good movie')){
        response =  "Certainly, 'Inception' is a popular science fiction movie.";
    }
    else {response = "My apologies. Its either the question having some kind of mistake or I do not have sufficient information."}

    setTimeout(function(){
        appendMessage("Chatbot",response)
    },3000)
}

