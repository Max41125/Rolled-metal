<?php
$fio = $_POST['fname'];
$pnumber = $_POST['pnumber'];

if (!empty($_POST['pnumber'])) {
  $data['form']['pnumber'] = preg_replace('/\D/', '', $_POST['pnumber']);
  if (!preg_match('/^(8|7)(\d{10})$/', $pnumber)) {
    $data['result'] = 'error';
    $data['errors']['pnumber'] = 'Поле содержит не корректный номер.';
    itc_log('Phone не корректный.');
  }
}

$files = $_POST['files[]'];

$fio = htmlspecialchars($fio);
$pnumber = htmlspecialchars($pnumber);
$files = htmlspecialchars($files);


$fio = urldecode($fio);
$pnumber = urldecode($pnumber);
$files = urldecode($files);

$fio = trim($fio);
$pnumber = trim($pnumber);
$files = urldecode($files);


echo $fio;
echo "<br>";
echo $pnumber;
echo $files;

if (mail("max", "Заявка с сайта", "ФИО:".$fio.". Номер: ".$pnumber."Фото:".$files ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>










<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Бухгалтерское сопровождение бизнеса</title>
    <link rel="icon" href="image/бухгалтерское-сопровождение-бизнеса-favicon.ico" type="image/x-icon">
    <link rel="icon" href="image/бухгалтерское-сопровождение-бизнеса-favicon.ico" type="image/x-icon">
    <!-- подключение стилей -->
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/popup.css">
    <link rel="stylesheet" href="style/thaks.css">
    <link rel="stylesheet" href="style/moblileServices.css">
    <!-- подключение шрифта -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;1,900&display=swap" rel="stylesheet">
</head>
<body id="body">
    <?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $name = htmlspecialchars($name);
    $phone = htmlspecialchars($phone);
    $name = urldecode($name);
    $phone = urldecode($phone);
    $name = trim($name);
    $phone = trim($phone);
    // mail("на какой адрес отправить", "тема письма", "Сообщение (тело письма)","From: с какого email отправляется письмо \r\n");
    if (mail("Info@bookkeeping-msk.ru", "Заявка с сайта", "Имя:".$name.". Номер телефона: ".$phone ,"From: yukinsento@gmail.com \r\n"))
     {     echo "";
    } else {
        echo "при отправке сообщения возникли ошибки";
    }?>
    <div class="wrapper">
        <header class="header">
            <div class="header__container _container">
                <div class="header__link-adaptive">
                    <a href="index.html">Назад</a>
                </div>
            </div>
        </header>
        <section class="thank">
            <div class="thank__container _container">
                <div class="thank__title">Спасибо за заявку</div>
                <div class="thank__sub-title">Вы будете перенаправленны на <a href="index.php">главную страницу</a> через несколько секунд</div>
            </div>
        </section>
        <footer class="footer">
            <div class="footer__container _container">
                <div class="footer__text">© bookkeeping 2021</div>
            </div>
        </footer>
    </div>
    <script language="JavaScript" type="text/javascript">
       function changeurl(){eval(self.location="index.php");}
        window.setTimeout("changeurl();",3000);
    </script>
    <script src="script/script.js"></script>
</body>
</html>