<?php
$time = date("F j, Y, g:i a");
if (isset($_REQUEST['form'])){
	$name = htmlspecialchars($_POST['name']);
	$phone = htmlspecialchars($_POST['phone']);
	$color = htmlspecialchars($_POST['color']);

	$message = " <p><h3>Форма заказа : через кнопку 'Оформить ЗАКАЗ' </h3></p> </br><p><b>Имя покупателя </b> $name </p> </br><p><b>Телефон</b>: $phone</p><br><p><b>Цвет </b>: $color </p><br> <p><b> Время заказа</b> : $time </p>";

	emailTo($message,"Форма заказа : через кнопку 'Оформить ЗАКАЗ'  ");
}else{
	$name = htmlspecialchars($_POST['name']);
	$phone = htmlspecialchars($_POST['tel']);
	$title = htmlspecialchars($_POST['title']);
	$price = htmlspecialchars($_POST['price']);

	$message = " <p><h3>Форма заказа : через кнопку 'ЗАКАЗ' </h3></p></br><p><b>Имя покупателя </b> $name </p> </br><p><b>Название товара </b> $title </p> </br>  <b> Цена </b>: $price </br><p><b>Телефон</b>: $phone</p><br><p><b> Время заказа</b> : $time </p>";

	emailTo($message,"Форма заказа : через кнопку 'ЗАКАЗ'  ");
}

function emailTo($message, $subject){
	$to  = "2018gohard@gmail.com";

	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	$headers .= "From: Отправитель from@example.com\r\n"; //Наименование и почта
	$headers .= "Reply-To: reply-to: form@example.com\r\n";

	mail($to, $subject, $message, $headers);
	header('Location: /#thanks');
	exit;
}
?>