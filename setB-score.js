// <script type="text/javascript">
var sec = 1800;
var min = Math.floor(sec / 60);
var time1 = setInterval(myTimer3, 1000);
var time2 = setInterval(myTimer4, 1000);
var count = 0
function myTimer3() {
    
    document.querySelector('#time2').innerHTML = min;
    sec--;
    count+=1;
    console.log(count)
    if(count == 60){
        min--;
        console.log(min)
        count = 0
    }
    if (sec == -1) {
        clearInterval(time1);
        test()
        window.location.href="setB-secB.html"
        //redirect to section-B
    }
}
function myTimer4() {
    
    document.querySelector('#time3').innerHTML = min;
    sec--;
    count+=1;
    console.log(count)
    if(count == 60){
        min--;
        console.log(min)
        count = 0
    }
    if (sec == -1) {
        clearInterval(time2);
        alert("Time out!! :(");
        test1()
        // score();
        window.location.href="finalscore1.html"
    }
}



var c=0;
function test()
{

if(document.getElementById('ra1').checked)
{
c+=1;
}
 if(document.getElementById('ra2').checked)
{
c+=1;
}
 if(document.getElementById('ra3').checked)
{
c+=1;
}
 if(document.getElementById('ra4').checked)
{
c+=1;
}
 if(document.getElementById('ra5').checked)
{
c+=1;
}
if(document.getElementById('ra6').checked)
{
c+=1;
}
if(document.getElementById('ra7').checked)
{
c+=1;
}
if(document.getElementById('ra8').checked)
{
c+=1;
}
if(document.getElementById('ra9').checked)
{
c+=1;
}
if(document.getElementById('ra10').checked)
{
c+=1;
}
if(document.getElementById('ra11').checked)
{
c+=1;
}
if(document.getElementById('ra12').checked)
{
c+=1;
}
if(document.getElementById('ra13').checked)
{
c+=1;
}
if(document.getElementById('ra14').checked)
{
c+=1;
}
if(document.getElementById('ra15').checked)
{
c+=1;
}
if(document.getElementById('ra16').checked)
{
c+=1;
}
if(document.getElementById('ra17').checked)
{
c+=1;
}
if(document.getElementById('ra18').checked)
{
c+=1;
}
if(document.getElementById('ra19').checked)
{
c+=1;
}
if(document.getElementById('ra20').checked)
{
c+=1;
}

console.log(c)
localStorage.setItem("c",c)
}
var d=0
function test1(){
if(document.getElementById('ra21').checked)
{
d+=1;
}
if(document.getElementById('ra22').checked)
{
d+=1;
}
if(document.getElementById('ra23').checked)
{
d+=1;
}
if(document.getElementById('ra24').checked)
{
d+=1;
}
if(document.getElementById('ra25').checked)
{
d+=1;
}
if(document.getElementById('ra26').checked)
{
d+=1;
}
if(document.getElementById('ra27').checked)
{
d+=1;
}
if(document.getElementById('ra28').checked)
{
d+=1;
}
if(document.getElementById('ra29').checked)
{
d+=1;
}
if(document.getElementById('ra30').checked)
{
d+=1;
}
if(document.getElementById('ra31').checked)
{
d+=1;
}
if(document.getElementById('ra32').checked)
{
d+=1;
}
if(document.getElementById('ra33').checked)
{
d+=1;
}
if(document.getElementById('ra34').checked)
{
d+=1;
}
if(document.getElementById('ra35').checked)
{
d+=1;
}
if(document.getElementById('ra36').checked)
{
d+=1;
}
if(document.getElementById('ra37').checked)
{
d+=1;
}
if(document.getElementById('ra38').checked)
{
d+=1;
}
if(document.getElementById('ra39').checked)
{
d+=1;
}
if(document.getElementById('ra40').checked)
{
d+=1;
}
console.log(d)
// var a=c+d;
// console.log(a)
localStorage.setItem("d",d)

score();
// a=parseInt(localStorage.getItem("c"))
// b=parseInt(localStorage.getItem("d"))
// 	sum=a+b
// // console.log(Number(localStorage.getItem("c"))+d)
// if(sum<20)
// document.write("your score is:"+sum +" "+"The minimum score to pass is 20 .Better luck next time");
// else
// document.write("your score is:"+sum +" "+"Congratulations! You have cleared section A and B.You are now eligible for section C");
}
function score(){
    a=parseInt(localStorage.getItem("c"))
    b=parseInt(localStorage.getItem("d"))
    console.log(a,b)
      sum=a+b
    // console.log(Number(localStorage.getItem("c"))+d)
    // if(sum<20)
    // document.write("your score is:"+sum +" "+"The minimum score to pass is 20 .Better luck next time");
    // else
    // document.write("your score is:"+sum +" "+"Congratulations! You have cleared section A and B.You are now eligible for section C");
}



// </script>