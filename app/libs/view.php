<?php

class View {

    function __construct() {
        $this->active_section = null;
    }

    public function render($view_to_show) {
        require VIEWS_PATH.'_templates/header.php';
        require VIEWS_PATH.'_templates/banner.php';
        require VIEWS_PATH.$view_to_show.'.php';
        require VIEWS_PATH.'_templates/footer.php';
    }

}

?>