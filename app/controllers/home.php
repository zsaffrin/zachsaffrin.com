<?php

class Home extends Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index() {
        $this->view->render('home/index');
    }

    public function about() {
        $this->view->active_section = 'about';
        $this->view->render('home/about');
    }

    public function contact() {
        $this->view->active_section = 'contact';
        $this->view->render('home/contact');
    }

    public function projects($project=null) {
        $this->view->active_section = 'projects';
        if (!is_null($project)) {
            $project_view_url = 'projects/'.$project;
            if (file_exists(VIEWS_PATH.$project_view_url.'.php')) {
                $this->view->render($project_view_url);    
            } else {
                header('Location: '.URL.'projects');
            }
        } else {
            $this->view->render('projects/index');
        }
    }

}

?>