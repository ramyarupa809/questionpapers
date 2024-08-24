<html>
<head>
<title>Registration</title>
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
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $phonenumber = $_POST['phonenumber'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];
    $country = $_POST['country'];
    

    $conn = new mysqli('localhost','root','','connect');
    if($conn->connect_error){
        die('Connection Failed  :  ' .$conn->connect_error);
    } else{
        $stmt = $conn->prepare("insert into registration(firstname, lastname, email, password, phonenumber, gender, address, country)
                values(?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssisss", $firstname, $lastname, $email, $password, $phonenumber, $gender, $address, $country);
        $stmt->execute();
        echo "<span> registration successful... </span>" ;
        echo '<a href="index.html">
        <button>Login</button>
      </a>';

        $stmt->close();
        $conn->close();       

    }
    
    ?>
</div>
</body>
    </html>