//alert("hello");

function processForm(){
    //retrieving the user input from the form
    var msg = document.getElementById('userMsg').value;

    if(msg != "" && msg != null){

        //checking whether the input message contains between 1 and 255 characters
        if(msg.length >=1 && msg.length <=254){

            //console.log(msg);
            //var n = str.startsWith("Hello");
        var x = y = i =z= 0;
        //checking the length of the message
        for(i =0; i<msg.length; i++){
            //fetching the character at the ith position
            var e1 = msg.charAt(i);

            //matching whether the fetched character is equal to ":"
            if(e1 === ":"){
                //getting the next 2 characters
                var e11 = msg.substring(i,i+3);
                //running the counter loop based on the number of each emoticons
                e11.localeCompare(":-)") == 0 ? x++ : (e11.localeCompare(":-(") == 0 ? y++ : z++);
                //e11.localeCompare(":-(") == 0 ? y++ : x++ ;
            
                //console.log(e11);
                //console.log(x);
                //console.log(y);
            }
        }
        var a ="";
        //displaying message based on the comparison of the 2 emoticons
        if(x===0 && y===0){
            a="none";
            }else if(x===y){
                a="unsure";
            }else if(x>y){
            a="happy";
            }else a="sad";

            document.getElementById("result").innerHTML = a;
        } 
    }
    //displaying the error message when the input message contains between 1 and 255 characters
    else document.getElementById("error").innerHTML = "Please enter the appropriate message with emoticons..."; 
}

