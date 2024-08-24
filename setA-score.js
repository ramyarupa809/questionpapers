// <script type="text/javascript">
var sec = 1800;
var min = Math.floor(sec / 60);
var time1 = setInterval(myTimer1, 1000);
var time2 = setInterval(myTimer2, 1000);
var count = 0
function myTimer1() {
    
    document.querySelector('#time').innerHTML = min;
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
        test2()
        window.location.href="setA-secB.html"
        //redirect to section-B
    }
}
function myTimer2() {
    
    document.querySelector('#time1').innerHTML = min;
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
        test3()
        // score();
        window.location.href="finalscore.html"
    }
}



var c=0;
function test2()
{

if(document.getElementById('va1').checked)
{
c+=1;
}
 if(document.getElementById('va2').checked)
{
c+=1;
}
 if(document.getElementById('va3').checked)
{
c+=1;
}
 if(document.getElementById('va4').checked)
{
c+=1;
}
 if(document.getElementById('va5').checked)
{
c+=1;
}
if(document.getElementById('va6').checked)
{
c+=1;
}
if(document.getElementById('va7').checked)
{
c+=1;
}
if(document.getElementById('va8').checked)
{
c+=1;
}
if(document.getElementById('va9').checked)
{
c+=1;
}
if(document.getElementById('va10').checked)
{
c+=1;
}
if(document.getElementById('va11').checked)
{
c+=1;
}
if(document.getElementById('va12').checked)
{
c+=1;
}
if(document.getElementById('va13').checked)
{
c+=1;
}
if(document.getElementById('va14').checked)
{
c+=1;
}
if(document.getElementById('va15').checked)
{
c+=1;
}
if(document.getElementById('va16').checked)
{
c+=1;
}
if(document.getElementById('va17').checked)
{
c+=1;
}
if(document.getElementById('va18').checked)
{
c+=1;
}
if(document.getElementById('va19').checked)
{
c+=1;
}
if(document.getElementById('va20').checked)
{
c+=1;
}

console.log(c)
localStorage.setItem("c",c)
}
var d=0
function test3(){
if(document.getElementById('va21').checked)
{
d+=1;
}
if(document.getElementById('va22').checked)
{
d+=1;
}
if(document.getElementById('va23').checked)
{
d+=1;
}
if(document.getElementById('va24').checked)
{
d+=1;
}
if(document.getElementById('va25').checked)
{
d+=1;
}
if(document.getElementById('va26').checked)
{
d+=1;
}
if(document.getElementById('va27').checked)
{
d+=1;
}
if(document.getElementById('va28').checked)
{
d+=1;
}
if(document.getElementById('va29').checked)
{
d+=1;
}
if(document.getElementById('va30').checked)
{
d+=1;
}
if(document.getElementById('va31').checked)
{
d+=1;
}
if(document.getElementById('va32').checked)
{
d+=1;
}
if(document.getElementById('va33').checked)
{
d+=1;
}
if(document.getElementById('va34').checked)
{
d+=1;
}
if(document.getElementById('va35').checked)
{
d+=1;
}
if(document.getElementById('va36').checked)
{
d+=1;
}
if(document.getElementById('va37').checked)
{
d+=1;
}
if(document.getElementById('va38').checked)
{
d+=1;
}
if(document.getElementById('va39').checked)
{
d+=1;
}
if(document.getElementById('va40').checked)
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