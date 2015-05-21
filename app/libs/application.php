<?php

class Application {

    private $url_controller = 'home';
    private $url_action;
    private $url_param_1;
    private $url_param_2;
    private $url_param_3;

    public function __construct() {
        $this->splitURL();

        require CONTROLLERS_PATH.$this->url_controller.'.php';
        $this->url_controller = new $this->url_controller();

        // Check if method exists
        if (method_exists($this->url_controller, $this->url_action)) {
            // If yes, call the Method and pass the given Parameters as arguments
            if (isset($this->url_param_3)) {
                $this->url_controller->{$this->url_action}($this->url_param_1, $this->url_param_2, $this->url_param_3);
            } elseif (isset($this->url_param_2)) {
                $this->url_controller->{$this->url_action}($this->url_param_1, $this->url_param_2);
            } elseif (isset($this->url_param_1)) {
                $this->url_controller->{$this->url_action}($this->url_param_1);
            } else {
                $this->url_controller->{$this->url_action}();
            }
        } else {
            // If method not found, call index() method
            $this->url_controller->index();
        }
    }

    public function splitURL() {
        if (isset($_GET['url'])) {

            // Split URL into arguments
            $url = rtrim($_GET['url'], '/');
            $url = filter_var($url, FILTER_SANITIZE_URL);
            $url = explode('/', $url);

            // Assign variables
            $this->url_action = (isset($url[0]) ? $url[0] : null);
            $this->url_param_1 = (isset($url[1]) ? $url[1] : null);
            $this->url_param_2 = (isset($url[2]) ? $url[2] : null);
            $this->url_param_3 = (isset($url[3]) ? $url[3] : null);
        }
    }

}

?>