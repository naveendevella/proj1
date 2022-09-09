<?php
$servername="localhost";
$username="root";
$password="";
$database_name="db123";

$conn=mysqli_connect($servername,$username,$password,$database_name);
if(!$conn)
{
    die("connection failed:".mysqli_connect_error());
}
if(isset($_POST['save']))
{
    $username1 = $_POST['us1'];
    $password1 = $_POST['rps'];
    $email = $_POST['em1'];

    $sql_query = "INSERT INTO entry_details (username,password1,email) VALUES ('$username1','$password1','$email')";

    if (mysqli_query($conn,$sql_query))
    {
        echo '<h1 style="color:red;">signup successfully</h1>';
 
    }
    else
    {
        echo "Error: " .$sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}