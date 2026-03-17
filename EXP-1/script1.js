function calculateResult(){

let n=document.getElementById("subjects").value;

let i;
let total=0;
for(i=1; i<=n; i++)
{
    let x=parseFloat(prompt("Enter the subject No. " + i));
    total+=x;
}
let average=total/n;
let grade;

if(average>=90)
{
    grade="A";
}
else if(average>=80)
{
    grade="B";
}
else
{
    grade="C";
}
let result="pass";

if(grade=="C")
{
    result="fail";
}

let r=document.getElementById("result").innerHTML="Total Marks:"+total+"<br/>"+"Average Marks:"+average+"<br/>"
+"Grade:"+grade+"<br/>"+"Result:"+result;

}