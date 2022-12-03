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