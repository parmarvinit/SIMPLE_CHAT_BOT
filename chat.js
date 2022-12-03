// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {

    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

function getBotResponse(input) {

  input=input.toLowerCase()

  return reply[input];
 /*
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "good bye") {
        return "Talk to you later!";
    } else if (input == "hi"){
        return "Hi ,I am Bot. what's your name?";
    }else if(input=="how is the college teaching systems"){
        return "Best";
    }else if (input == "which courses are provided by university"){
      return "CSE,IT,CS,MECHANICAL";
    }
    else {
        return "Try asking something else!";
    }*/
}
const reply = {
     "vinit":"i am not vinit ",
     "good bye":"Talk to you later!",
     "hi":"Hi ,I am Bot. ",
     "hii":"hi , I'm bot",
     "hey":"hi, i am bot",
     "good morning":"hii",
     "good evening":"hii",
     "good afternoon":"hii",
     "Who made you":"Vinit Parmar",
     "you are machine":"Yes i am Bot"
     " ":" ",
     
     //university
     "what is your university name":"Itm sls Baroda University ",
     "your university address":"Dhanora Tank Road  Off Halol Highway,Near Jarod, Paldi Vadodar, Gujarat 391510",
     "total schools in universities":"there are 6 schools available in university",
     "how many department are there in university":"total 20 department are there in university",
     "how many students are placed":"total 2000+"
     
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How i can help you?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    setTimeout(() => {
        getHardResponse(sampleText);
     }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
