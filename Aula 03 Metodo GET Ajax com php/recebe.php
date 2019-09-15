<?php
if($_GET):
    $nomeUsr = $_GET['name'];
    $idade = $_GET['idade'];
    if ($idade>18)  {
        # code...
        echo 'o usuario '.$nomeUsr.' é maior de idade';
    }else{
        echo 'o usuario '.$nomeUsr.' é menor de idade';
    }
endif;
?>