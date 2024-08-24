document.addEventListener('DOMContentLoaded',function(){
    var seta = parseInt(localStorage.getItem("c"))
    var setb = parseInt(localStorage.getItem("d"))
    var sum = seta + setb
    console.log(seta,setb,sum)
    if(sum<20){
    document.querySelector("#sco").innerHTML= "Your score is : "+sum+" "+". The minimum score to pass is 20 . Better luck next time";
      var button = document.createElement("button");
button.innerHTML = "Go to home-page";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
   window.location.href="home-page.html"
   // window.close();
});
      }
    else{
    document.getElementById("fai").innerHTML="your score is : "+ sum +" "+". Congratulations! You have cleared section A and B . You are now eligible for section C";
     var button = document.createElement("button");
button.innerHTML = "Go to home-page";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
   window.location.href="home-page.html"
});
    }
		getdata();
       
		});




// 		function score(){
// if(document.querySelector("#sco").innerHTML<20)
//     document.getElementById('sco').innerHTML=document.querySelector("#sco").innerHTML+"fail";
//     else
//     document.getElementById("sco").innerHTML="your score is:"+sum +" "+"Congratulations! You have cleared section A and B.You are now eligible for section C";
// }
