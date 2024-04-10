<?php
// Check if the user is logged in 
if ($loggedIn) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $description = $_POST['text'];

    // Send confirmation email
    $to = $email;
    $subject = 'StudentBiz - Service Booking Confirmation';
    $message = "Dear $name,\r\n\r\nThank you for booking a service using StudentBiz. We have received your request with the following description:\r\n$description\r\n\r\nThe business will get back to you as soon as possible.\r\n\r\nBest regards,\r\nyour friends at StudentBiz.";
    $headers = 'From: studenBiz@example.com' . "\r\n" .
        'Reply-To: studenBiz@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo 'Confirmation email sent successfully.';
    } else {
        echo 'Error: Unable to send confirmation email.';
    }
} else {
    echo 'Error: User not logged in.';
}
?>
