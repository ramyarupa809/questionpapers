<html>
<head>
<title>Login-form</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
</head>
<style type="text/css">
body{
 	 /* background-image:url(" https://78.media.tumblr.com/c1df4bc70135a05bf8290c638c32c09c/tumblr_p0xq7rLfBu1vbdodoo1_500.gif"); */
    background-image:url(" https://img.freepik.com/free-photo/close-up-pen-report_1098-3628.jpg");
 	 background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
 }

 .container {
 	 width: 500px;
    margin: 30px auto;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    background-image: linear-gradient(#E0D7FF,#D7EEFF);
     background-size: cover;
    background-position: center;
      border-radius: 10px;
    border:none;
    box-shadow: 5px 5px 5px;
    color: #2b2839;
    border-bottom: 6px solid #d8cefe;
   box-shadow: 5px 5px 5px;
   font-family: 'Bangers', cursive;
   font-size: 20px;
    }

    button{
        padding:14px 21px;
    background-color: #BDB5D5;;
    border:#BDB5D5;
    border-radius: 20px;
    font-family: 'Bangers', cursive;
    font-size: 20px;
    }

    button:hover{
    box-shadow: 1px 5px 5px 1px black;
     }

</style>
</head>
<body>
<div class="container">

<?php
  $email = $_POST['email'];
  $password = $_POST['password'];

  $con = new mysqli("localhost","root","", "connect");
  if($con->connect_error) {
    die("Failed to connect : ".$con->connect_error);
  }else{
    $stmt = $con->prepare("select * from registration where email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    if($stmt_result->num_rows > 0) {
      $data = $stmt_result->fetch_assoc();
      if($data['password'] === $password) {
        echo "<h2>Login successfull</h2>";
        echo '<a href="home-page.html">
        <button>Next</button>
      </a>';
      } else{
        echo "<h2>Invalid Email or password</h2>";
        echo '<a href="index.html">
        <button>Try Again</button>
      </a>';
      }
    }else {
        echo "<h2>Invalid Email or password</h2>";
        echo '<a href="index.html">
        <button>Try Again</button>
      </a>';
    }
  }
  
?>

</div>
</body>
    </html>