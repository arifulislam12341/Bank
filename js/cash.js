document.getElementById('deposit-button').addEventListener('click',function(){

const depositInput=document.getElementById('deposit');
const depositAmounttext=depositInput.value;
if(depositAmounttext>0){
const newDeposit=parseFloat(depositAmounttext);
console.log(newDeposit);

const depositTotal=document.getElementById('deposit-amount');
//console.log(depositTotal.innerText);
const currentDeposittext=depositTotal.innerText;
const currentDepositamount=parseFloat(currentDeposittext);
const newDepositamount=currentDepositamount+newDeposit;
depositTotal.innerText=newDepositamount;


const balancetotal=document.getElementById('balance');
const balancetotaltext=balancetotal.innerText;
const previousbalance=parseFloat(balancetotaltext);
const newbalancetotal=previousbalance+newDeposit;
balancetotal.innerText=newbalancetotal;

depositInput.value='';
}
else{
    console.log(alert("Input a positive amount"));
}

});
document.getElementById('withdraw-button').addEventListener('click',function(){
const withdrawInput=document.getElementById('Withdraw');
const withdrawValue=withdrawInput.value;
if(withdrawValue>0){
const newwithdraw=parseFloat(withdrawValue);


const withdrawtotal=document.getElementById('Withdraw-value');
const withdrawtext=withdrawtotal.innerText;
const previouswithdraw=parseFloat(withdrawtext);

const currentWithdraw=previouswithdraw+newwithdraw;

withdrawtotal.innerText=currentWithdraw;

const balancetotal=document.getElementById('balance');
const balancetotaltext=balancetotal.innerText;
const previousbalance=parseFloat(balancetotaltext);

const newbalance=previousbalance-currentWithdraw;

balancetotal.innerText=newbalance;


withdrawInput.value='';

} 
else{
    console.log(alert("Enter a postive amount"))
}
});

















