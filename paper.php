<!DOCTYPE html>
    <html>
    <head>
        <title>Table with database</title>
        <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <style type="text/css">
            table {
                border-collapse: collapse;
                width: 100%;
                color: #d96459;
                font-family: monospace;
                font-size: 25px;
                text-align: left;
            }
            th{
                background-color: #588c7e;
                color: white;
            }
            .spacing {
  padding-left: 50px;
}

.spacing-right {
  padding-right: 40px;
}

.spacing-bottom {
  padding-bottom: 20px;
}

.margin-at-top {
 margin-top: 100px;
 padding-top: 50px;
}
.card-img-top{
  width:100%;
  height:auto;
}
</style>
</head>
<body>
  
<nav class="navbar spacing-bottom navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand spacing"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">






      <ul class="navbar-nav ms-auto spacing-right">

        <!--home-->

        <li class="nav-item">
         <a class="nav-link" href="home-page.html">Home</a>
        </li>
       
         <li class="nav-item">
          <a class="nav-link" href="generate-paper.html">Generate paper</a>
        </li> 
    <li class="nav-item">
          <a class="nav-link" href="paper.php">Generated paper</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="mock-page.html">Mock tests</a>
          </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.google.com">Log out</a>
         </li>
         
          
        
      </ul>
    </div>
  </div>
</nav>
    </head>
    <body>
        <!-- <table>
            <tr>
                <th>OrderId</th>
                <th>OrderStatus</th>
                <th>OrderPrice</th>
                <th>OrderDetail</th>
                <th>OrderComment</th>
                <th>OrderComment1</th>
                <th>UserPhone</th>
            </tr> -->
            <?php 
            $conn = mysqli_connect("localhost", "root", "", "connect");
            if ($conn->connect_error) {
                die("Connection failed:". $conn->connect_error );
            }
            // $query = "SELECT * FROM usersdata WHERE type='1'";
            $sql = "SELECT * FROM generator WHERE paper_name='English'";
            echo "<div class='container'><center><h1>English</h1></center>";
            echo "<div><span style=float:right>max-marks : 20 marks</span>
            <span style='right-align;'>time : 30 min</span></div><hr>";
            // $sql = "SELECT * FROM generator";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<div class='container container border'><p><span>". $row["question_no"]. ".</span>". $row["multi_question"] ."</p><p><div class='container'>A.". 
                    $row["op1"] ."</p><p>B.". $row["op2"] . "</p><p>C.". $row["op3"] ."</p><p>D.". $row["op4"] . "</p><br></div></div><br>";
                }
                // echo "</table>";
            }
            else{
                echo "0 result";
            }

            $sql1 = "SELECT * FROM generator WHERE paper_name='Maths'";
            echo "<center><h1>Maths</h1></center><div><span style=float:right>max-marks : 20 marks</span>
            <span style='right-align;'>time : 30 min</span></div><hr>";
            $result = $conn->query($sql1);

            if ($result->num_rows > 0) {
                while ($row1 = $result->fetch_assoc()) {
                    echo "<div class='container container border'><p><span>". $row1["question_no"]. ".</span>". $row1["multi_question"] ."</p><p><div class='container'>A.". $row1["op1"] .
                    "</p><p>B.". $row1["op2"] . "</p><p>C.". $row1["op3"] ."</p><p>D.". $row1["op4"] . "</p><br></div></div><br>";
                }
                // echo "</table>";
            }
            else{
                echo "0 result";
            }

            $sql2 = "SELECT * FROM generator WHERE paper_name='Physics'";
            echo "<center><h1>Physics</h1></center><div><span style=float:right>max-marks : 20 marks</span>
            <span style='right-align;'>time : 30 min</span></div><hr>";
            $result = $conn->query($sql2);

            if ($result->num_rows > 0) {
                while ($row2 = $result->fetch_assoc()) {
                    echo "<div class='container container border'><p><span>". $row2["question_no"]. ".</span>". $row2["multi_question"] ."</p><p><div class='container'>A.". $row2["op1"] .
                    "</p><p>B.". $row2["op2"] . "</p><p>C.". $row2["op3"] ."</p><p>D.". $row2["op4"] . "</p><br></div></div><br>";
                }
                // echo "</table>";
            }
            else{
                echo "0 result";
            }

            $sql3 = "SELECT * FROM generator WHERE paper_name='Chemistry'";
            echo "<center><h1>Chemistry</h1></center><div><span style=float:right>max-marks : 20 marks</span>
            <span style='right-align;'>time : 30 min</span></div><hr>";
            $result = $conn->query($sql3);

            if ($result->num_rows > 0) {
                while ($row3 = $result->fetch_assoc()) {
                    echo "<div class='container container border'><p><span>". $row3["question_no"]. ".</span>". $row3["multi_question"] ."</p><p><div class='container'>A.". $row3["op1"] .
                    "</p><p>B.". $row3["op2"] . "</p><p>C.". $row3["op3"] ."</p><p>D.". $row3["op4"] . "</p><br></div></div><br>";
                }
                // echo "</table>";
            }
            else{
                echo "0 result";
            }

            $sql4 = "SELECT * FROM generator WHERE paper_name='Statistics'";
            echo "<center><h1>Statistics</h1></center><div><span style=float:right>max-marks : 20 marks</span>
            <span style='right-align;'>time : 30 min</span></div><hr>";
            $result = $conn->query($sql4);

            if ($result->num_rows > 0) {
                while ($row4 = $result->fetch_assoc()) {
                    echo "<div class='container container border'><p><span>". $row4["question_no"]. ".</span>". $row4["multi_question"] ."</p><p><div class='container'>A.". $row4["op1"] .
                    "</p><p>B.". $row4["op2"] . "</p><p>C.". $row4["op3"] ."</p><p>D.". $row4["op4"] . "</p><br></div></div><br></div>";
                }
                // echo "</table>";
            }
            else{
                echo "0 result";
            }

            
            $conn-> close();
            ?>
        <!-- </table> -->

    </body>
    </html>