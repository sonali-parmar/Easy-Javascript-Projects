const birthdate=document.getElementById('birthdate');
const button=document.querySelector('button');
const result=document.querySelector('#result');

let date=new Date();
console.log(date.toLocaleDateString());
button.addEventListener('click',function(){
    let myBirthdate=new Date(birthdate.value);
    let difOfYear=date.getFullYear()-myBirthdate.getFullYear(); 
    let difOfmonth=date.getMonth()-myBirthdate.getMonth();
    let difOfDate=date.getDate()-myBirthdate.getDate();
    result.innerHTML=`You are ${difOfYear} years, ${difOfmonth} month, ${difOfDate} days old`;
})