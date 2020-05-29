var num2;
var arr = [];
arr.length = 6;

function distinctDigits(num2){
    console.log(num2);
    var count = count3 = 0;

    //while loop to store the digits of the input year in an array
    while(num2){
        var remainder = num2 % 10;
        //console.log(remainder);
        arr[count++] = remainder;
        //console.log(arr);
        num2 = Math.floor(num2/10);
        //console.log(num2);
    }
    console.log(arr);

    //checking if the year is a distinct otherwise call the distictDigits function with an 
    //incremented year
    for(var i=0; i<arr.length-1; i++){
        var count2 = 0;
        for(var j=0; j<arr.length-1; j++){
            if(arr[i]==arr[j]){
                count2++;
                console.log(count2);
            }
        }
        //to increase the the year by 1 if the count of the digit is >= 2
        if(count2 >= 2){
            distinctDigits(num2+1);
        }else{
            count3++;
        }
    }
    if(count3==arr.length)
    document.getElementById("result").innerHtML = num2;
}

function processForm(){
    //fetching the value of the first year given by the user
    var yy = document.getElementById("year").value;
    console.log(yy);
    //converting the input string to integer format
    var num = parseInt(yy);
    //validating if the input year is between 0 and 10000
    if(num>=0 && num<=10000){
        distinctDigits(num + 1);
    } 
    //displaying the error message 
    else{
        document.getElementById("error").innerHtML = "Please enter the year between 0 and 10000";
    }
}

