<?php

if (isset($_POST['formBtn'])) {
  $name = $_POST['yourName'];
  $visitor_email = $_POST['yourEmail'];
  $message = $_POST['yourMessage'];
  $email_subject = "Website Correspondence";

  $email_body = "You have received a new message from ".$name.":\n\n".$message;
  $to = "seanux@seanaoconnor.com";
  $headers = "From: ".$visitor_email;

  mail($to, $email_subject, $email_body, $headers);
  header("Location: contact_me?mailsend");
  $buttonStatus = "Sent!"
  else ($buttonStatus = "Send Message")
}
