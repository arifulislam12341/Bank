document.getElementById('loginsubmit').addEventListener('click',function(){
const emailField=document.getElementById('email');
const usermail=emailField.value;
const pass=document.getElementById('password');
const userPass=pass.value;

if(usermail=="abc@gmail.com" && userPass=="111"){

   window.location.href='banking.html';
}
else{
    console.log('invalid');
}



});