//alert("hello");

function processForm(){
            //retrieving all the values from the input fields
            var small = document.getElementById('smallTreats').value;
            //console.log(small);
            var medium = document.getElementById("mediumTreats").value;
            var large = document.getElementById("largeTreats").value;

            //if the entered value for the 3 treats is a non-negative integer less than 10
            
            if(small!= "" && medium != "" && large!= ""){
                if(small >= 0 && small<=9 && medium >= 0 && medium<=9 && large >= 0 && large<=9){
                //calculating the total of 3 treats based on the formula given
                var total = ((1*small) + (2*medium) + (3*large));
                console.log(total);
                //checking if the total is less than 10
                //display "Barley is sad"
                //otherwise display "Barley is happy"
                if(total < 10){
                    document.getElementById("result").innerHTML = "sad";
                }else{
                    document.getElementById("result").innerHTML = "happy";
                }
                }
            }
            //if the entered value for the 3 treats is not a non-negative integer less than 10
            //then display an error message to enter an appropriate number
            else{
                 document.getElementById("errorMsg").innerHTML = "Please enter values between 0 and 9 integers";
            }
             
 }

