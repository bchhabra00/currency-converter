




let convert=document.getElementById('convert');



convert.addEventListener('click',(e) =>{
let fromamount=document.getElementById('fromAmount').value;
let from =document.getElementById('from').value;
let to = document.getElementById('to').value;
let url="https://api.fixer.io/latest?symbols=" + from + ',' + to;
let output=document.getElementById('output');

let ourrequest= new XMLHttpRequest();
ourrequest.open("GET",url,true);
ourrequest.onreadystatechange= function(){
    if (this.readyState == 4 && this.status == 200 ){
    let data=JSON.parse(ourrequest.responseText);
    console.log(data.rates);
    let tonum = Number(data.rates[to]) 
    let fromnum = Number(data.rates[from])
    output.innerHTML=fromamount + from + '=' + ((tonum/fromnum)*fromamount).toFixed(2) + to;
}
}
ourrequest.send();
clear();
e.preventDefault();
})

function clear(){
    
    document.getElementById('fromAmount').value='';
    
}












