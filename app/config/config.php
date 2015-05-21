<?php

/**
 *     Error reporting
 *     Currently showing All Errors while in Development mode
 */
error_reporting(E_ALL);
ini_set("display_errors", 1);

/**
 *     Set time zone
 */
date_default_timezone_set('America/New_York');

/**
 *     Default root path
 *     Set to localhost path while in Development mode
 */
define('URL', 'http://localhost:8888/zachsaffrin/');

/**
 *     Folder locations
 **/
define('LIBS_PATH', 'app/libs/');
define('CONTROLLERS_PATH', 'app/controllers/');
define('MODELS_PATH', 'app/models/');
define('VIEWS_PATH', 'app/views/');  
define('IMG_PATH', 'public/img/'); 

?>