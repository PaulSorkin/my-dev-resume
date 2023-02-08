<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master\src\Exception.php';
require 'PHPMailer-master\src\PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->IsHTML(true);

//who from
$mail->setFrom('myresumesite@mysite.com');
//who to
$mail->addAddress('sorkinpavel@mail.ru');
//subject
$mail->Subject = 'Message from my resume contacts';

//Mail body
$body = '<h1>Meet a new message</h1>';

if(trim(!empty($_POST['fullname']))){
    $body.='<p><strong>Name:</strong> '.$_POST['fullname'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
}

//Send
if (!$mail->send()) {
    $message = 'Error';
} else {
    $message = 'Data has been sent';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>