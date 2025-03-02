<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $title = htmlspecialchars($_POST['title']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "eddysimba9@gmail.com";
    $subject = "Contact Form - $title";
    $headers = "From: noreply@sicklersforlife.com\r\n";
    
    $body = "Name: $name\n\nMessage:\n$message";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully! Expect a response within 72 working hours.";
    } else {
        echo "Failed to send the message.";
    }
} else {
    echo "Invalid request.";
}
?>
