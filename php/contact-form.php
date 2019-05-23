<?php
//Import the PHPMailer class into the global namespace
//use PHPMailer\PHPMailer\PHPMailer;
require '../lib/PHPMailer/PHPMailerAutoload.php';

$out = array('error'=>null);

function sendMail($post){

	$body = '';
	foreach($post as $k => $v){
		if(is_array($v)){
			$vOut = implode($v, ', ');
		} else {
			$vOut = $v;
		}

		$body .= '<p><strong>' . ucfirst($k) . ': </strong>' . $vOut . '</p>';

	}

	$mail = new PHPMailer;
	$mail->AddReplyTo($post['email'] , $post['name']);
	$mail->setFrom('noreply@calgaryscrapautoremoval.com');
	//$mail->addAddress('calgaryscrapcars@hotmail.com');
	$mail->addAddress('calgaryscrapcars@gmail.com');
	$mail->addAddress('me@james-allen.ca');
	//$mail->addAddress('sahararecords@hotmail.com');
	$mail->addAddress('yalda.aya1@gmail.com');
	$mail->isHTML(true);
	$mail->Subject = 'Website Submission';
	$mail->Body = $body;

	return $mail->Send();
}

if (isset($_POST)) {

	if(! sendMail($_POST)){
		echo json_encode(array(
			'status' => 'failed',
			'message' => 'Sorry! There was an error processing your submission. Please call us directly at (403) 991-7717'
		));
		return false;
	}

	echo json_encode(array(
		'status' => 'success',
		'message' => 'Thanks! Your submission has been received. We\'ll get back to you shortly!'
	));
}
?>
