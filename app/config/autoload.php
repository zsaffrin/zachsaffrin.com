<?php

function autoload($class) {
    if (file_exists(LIBS_PATH.$class.".php")) {
        require LIBS_PATH.$class.".php";
    } elseif (file_exists(LIBS_PATH.strtolower($class).".php")) {
        require LIBS_PATH.strtolower($class).".php";
    } else {
        exit ('Class '.$class.' not found. Explicitly declare this class or place it in the Libs folder.');
    }
}

spl_autoload_register("autoload");

?>
