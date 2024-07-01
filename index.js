let now=new Date();
let btn=document.getElementById("btn")

let m1=1+now.getMonth();
let d1=now.getDate();
let y1=now.getFullYear();

let d2=document.getElementById("date");
let m2=document.getElementById("month");
let y2=document.getElementById("year");

 
 
function age(){
    d2=d2.value;
    m2=m2.value;
    y2=y2.value;
    month=[31,28,31,30,31,30,31,31,30,31,30,31];

    if(d2>d1){
        d1=Number(d1)+month[m2-1];
        m1=m1-1;
        
    }

    if(m2>m1){
        m1=m1+12;
        y1=y1-1;
    }

    let d=d1-d2;
    let m=m1-m2;
    let y=y1-y2;

    btn.textContent=`You are ${y} years ${m} months ${d} days old`;
    btn.classList.add("textgreen")

}

