// <script type="text/javascript">
var sec = 1800;
var min = Math.floor(sec / 60);
var time1 = setInterval(myTimer5, 1000);
var time2 = setInterval(myTimer6, 1000);
var count = 0
function myTimer5() {
    
    document.querySelector('#time4').innerHTML = min;
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
        test4()
        window.location.href="setC-secB.html"
        //redirect to section-B
    }
}
function myTimer6() {
    
    document.querySelector('#time5').innerHTML = min;
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
        test5()
        // score();
        window.location.href="finalscore2.html"
    }
}



var c=0;
function test4()
{

if(document.getElementById('na1').checked)
{
c+=1;
}
 if(document.getElementById('na2').checked)
{
c+=1;
}
 if(document.getElementById('na3').checked)
{
c+=1;
}
 if(document.getElementById('na4').checked)
{
c+=1;
}
 if(document.getElementById('na5').checked)
{
c+=1;
}
if(document.getElementById('na6').checked)
{
c+=1;
}
if(document.getElementById('na7').checked)
{
c+=1;
}
if(document.getElementById('na8').checked)
{
c+=1;
}
if(document.getElementById('na9').checked)
{
c+=1;
}
if(document.getElementById('na10').checked)
{
c+=1;
}
if(document.getElementById('na11').checked)
{
c+=1;
}
if(document.getElementById('na12').checked)
{
c+=1;
}
if(document.getElementById('na13').checked)
{
c+=1;
}
if(document.getElementById('na14').checked)
{
c+=1;
}
if(document.getElementById('na15').checked)
{
c+=1;
}
if(document.getElementById('na16').checked)
{
c+=1;
}
if(document.getElementById('na17').checked)
{
c+=1;
}
if(document.getElementById('na18').checked)
{
c+=1;
}
if(document.getElementById('na19').checked)
{
c+=1;
}
if(document.getElementById('na20').checked)
{
c+=1;
}

console.log(c)
localStorage.setItem("c",c)
}
var d=0
function test5(){
if(document.getElementById('na21').checked)
{
d+=1;
}
if(document.getElementById('na22').checked)
{
d+=1;
}
if(document.getElementById('na23').checked)
{
d+=1;
}
if(document.getElementById('na24').checked)
{
d+=1;
}
if(document.getElementById('na25').checked)
{
d+=1;
}
if(document.getElementById('na26').checked)
{
d+=1;
}
if(document.getElementById('na27').checked)
{
d+=1;
}
if(document.getElementById('na28').checked)
{
d+=1;
}
if(document.getElementById('na29').checked)
{
d+=1;
}
if(document.getElementById('na30').checked)
{
d+=1;
}
if(document.getElementById('na31').checked)
{
d+=1;
}
if(document.getElementById('na32').checked)
{
d+=1;
}
if(document.getElementById('na33').checked)
{
d+=1;
}
if(document.getElementById('na34').checked)
{
d+=1;
}
if(document.getElementById('na35').checked)
{
d+=1;
}
if(document.getElementById('na36').checked)
{
d+=1;
}
if(document.getElementById('na37').checked)
{
d+=1;
}
if(document.getElementById('na38').checked)
{
d+=1;
}
if(document.getElementById('na39').checked)
{
d+=1;
}
if(document.getElementById('na40').checked)
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