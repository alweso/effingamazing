<?php

// configure
$from = 'yourname@yourdomain.com';
$sendTo = 'alweso@gmail.com';
$subject = 'New message from Particular';
$fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message', 'agreement' => 'Agreement'); // array variable name => Text to appear in email
$okMessage = 'Formularz został wysłany, skontaktuję się z Państwem w możliwie najszybszym terminie.';
$errorMessage = 'Wystąpił błąd podczas próby wysłania formularza. Proszę spróbować później.';
$headers = "From: Particular <{$from}> \r\n";

// let's do the sending

try
{
    $emailText = "You have new message from contact form\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }
    mail($sendTo, $subject, $emailText, $headers, "-f {$from}");

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}