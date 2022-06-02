<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);

    //От кого
    $mail->setFrom('yborkin@yandex.ru', 'Заказ');
    //Кому письмо
    $mail->addAddress('zkszti@gmail.com');
    //Тема письма
    $mail->Subject = 'Заказ';

    $modalName = $_POST['modalName'];
    $modalTel = $_POST['modalTel'];
    $checkboxes = $_POST['checkboxes'];
    $modalPlace = $_POST['modalPlace'];
    $modalV = $_POST['modalV'];
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $position = $_POST['position'];
    $masterName = $_POST['masterName'];
    $masterTel = $_POST['masterTel'];
    $masterEmail = $_POST['masterEmail'];
    $masterPosition = $_POST['masterPosition'];
    $designName = $_POST['designName'];
    $designTel = $_POST['designTel'];
    $designEmail = $_POST['designEmail'];
    $designPosition = $_POST['designPosition'];
    $nameConsultate = $_POST['nameConsultate'];
    $telConsultate = $_POST['telConsultate'];
    $emailConsultate = $_POST['emailConsultate'];
    $positionConsultate = $_POST['positionConsultate'];

    // Тело письма
    
    $title = "Заказ!";
    $body = "
    <h1>Заказ сметы!</h1>
    <p><bold>Имя:</bold> $modalName</p><br>
    <p><bold>Номер телефона:</bold> $modalTel</p><br>
    <p><bold>Местонахождение объекта:</bold> $modalPlace</p><br>
    <p><bold>Объём работ, м2:</bold> $modalV</p>
    <p><bold>Пожелания:</bold> $checkboxes</p><br>
    <h1>Dызов специалиста!</h1>
    <p><bold>Имя:</bold> $name $masterName</p><br>
    <p><bold>Номер телефона:</bold> $tel $masterTel</p><br>
    <p><bold>E-mail:</bold> $email $masterEmail</p><br>
    <p><bold>Местонахождение объекта:</bold> $position $masterPosition</p>
    <h1>Заказ дизайнa!</h1>
    <p><bold>Имя:</bold> $designName</p><br>
    <p><bold>Номер телефона:</bold> $designTel</p><br>
    <p><bold>E-mail:</bold> $designEmail</p><br>
    <p><bold>Местонахождение объекта:</bold> $designPosition</p>
    <h1>Dызов специалиста!</h1>
    <p><bold>Имя:</bold> $nameConsultate</p><br>
    <p><bold>Номер телефона:</bold> $telConsultate</p>
    <p><bold>E-mail:</bold> $emailConsultate</p><br>
    <p><bold>Местонахождение объекта:</bold> $positionConsultate</p>
    ";

    $mail->Body = $body;

    //Отправляем
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправленны!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>