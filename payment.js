const formID = document.getElementById("form1");
const uname  = document.getElementById("username");
const card   = document.getElementById("cardnumber");
const xdate  = document.getElementById("expiredate");
const cvv    = document.getElementById("cvv");   

formID.addEventListener('submit',(e)=>{
e.preventDefault();
checkInput();


});

function checkInput(){

const uname_value = uname.value.trim();
const card_value  = card.value.trim();
const xdate_value = xdate.value.trim();
const cvv_value   = cvv.value.trim();

if(uname_value===""){
setSuccessMessage(uname,"Username can't be blank");}
else{
if(!isNaN(uname_value)){
    setSuccessMessage(uname,"Username can't be number");
}else{
    setErrorMessage(uname);
    //declare next field
        if(card_value===""){
            // show_error
            // adn error class
            setSuccessMessage(card,"Card Number can't be blank");
            }else{
            // add success class
            setErrorMessage(card);
            //declare next field
              
                    if(xdate_value===""){
                        // show_error
                        // adn error class
                        setSuccessMessage(xdate,"Expire date can't be blank");
                        }else{
                            if(xdate_value.length==5){
                            
                                 if(xdate_value.slice(2,3)=="/"){
                                    setErrorMessage(xdate)
                                    //declare next field
                                            if(cvv_value===""){
                                                // show_error
                                                // adn error class
                                                setSuccessMessage(cvv,"cvv can't be blank");
                                                }else{
                                                // add success class
                                                if(cvv_value.length==3){
                                                    setErrorMessage(cvv);
                                                    location.replace("loader.html");
                                                    
                                                }else{
                                                    setSuccessMessage(cvv,"recheck CVV input"); 
                                                }
                                                
                                                }
                                            
                                            
                                    //
                                }else{
                                    setSuccessMessage(xdate," '/' missing"); 
                                }

                            }else{
                                setSuccessMessage(xdate,"recheck expire date value"); 
                            }
                        }      
            //
            }
        
}

   
    
}





}

function setSuccessMessage(input,message){
const form_control = input.parentElement;
const small = form_control.querySelector("small");
small.innerText = message;
form_control.className="form-control error";
}
function setErrorMessage(input){
const formControl = input.parentElement;
formControl.className= "form-control success"
}
function areThereNum(){
    for(var i = 0;uname_value.length;i++){
    
        if(!isNaN(uname_value[i])){
          alert("Name shouldn't hold Number");
          break;
        }
    }
}