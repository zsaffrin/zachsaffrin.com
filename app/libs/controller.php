<?php

class Controller {

    function __construct() {
        Session::start();
        $this->view = new View();
    }

}

?>