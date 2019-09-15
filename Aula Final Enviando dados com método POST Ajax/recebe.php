<?php
    if ($_POST) {
        # code...
        $nome = $_POST['nome'];
        $idade = $_POST['idade'];
        $fotografia= $_FILES['fotografia'];
        if (move_uploaded_file($fotografia['tmp_name'], $fotografia['name'])) {
            # code...
            echo  $nome.' '. $idade." foto enviada";
        }
    else {
        # code...
        echo 'imagem nao foi enviada com sucesso';

    }
} 
    
?>