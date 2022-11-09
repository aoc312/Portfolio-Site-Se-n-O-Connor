<?php
  if (isset($_POST['submit'])) {
    $name = $_POST['yourName'];
    $visitor_email = $_POST['yourEmail'];
    $message = $_POST['yourMessage'];

    $email_from = 'oconnorsean312@yahoo.ie';
    $email_subject = "Website Correspondence";
    $email_body = "You have received a new message from the user ".$name.":\n\n".$message;

    $to = "seanux@seanaoconnor.com";
    $headers = "From: ".$email_from;
    $headers .= "Reply-To: ".$visitor_email;

    mail($to, $email_subject, $email_body, $headers);
    header("Location: contact_me.php?mailsend");
  }
