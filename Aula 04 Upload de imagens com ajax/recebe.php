<?php
    if ($_FILES) {
        # code...
        $arquivo = $_FILES['fotografia'];
        if (move_uploaded_file($arquivo['tmp_name'], $arquivo['name'])) {
            # code...
            echo 'imagem enviada com sucesso';
        }
    else {
        # code...
        echo 'imagem nao foi enviada com sucesso';

    }
} 
    
?>