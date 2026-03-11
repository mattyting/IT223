<?php
$servername = "localhost";
$db_username = "root"; 
$db_password = "";     
$dbname = "accounts"; // Ensure this matches phpMyAdmin exactly

$conn = new mysqli($servername, $db_username, $db_password, $dbname);

if ($conn->connect_error) {
    // This will tell you if the name is wrong or the server is off
    die("Connection failed: " . $conn->connect_error);
} 
// If you see nothing, it means it connected successfully!
?>