const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("enter your name and pasword", function(input){
    var userInput = input.split(' ')
    let name =  userInput[0];
    var password = userInput[1]
function passwordValidator(name, password) {

    console.log(`welcome ${name}`)
    if( password && password.length > 10){
         console.log('you are authenticated')
    }
    else{
        console.log('your password is incorrect')
    }
    


}
 reader.close()
})


 
