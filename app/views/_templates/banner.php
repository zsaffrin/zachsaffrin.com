
<div class="clear bg-skim col-12 flex flex-center px1 fixed top-0">
    <div class="p1 flex flex-center">
        <a href="<?php echo URL ?>" id="banner-icon" class="flex flex-center">
            <?php echo file_get_contents(IMG_PATH."zs-block.svg"); ?>
        </a>
    </div>
    <div class="p1 flex-auto caps">
        <a href="<?php echo URL.'projects'; ?>" class="nav-link border-hover-chive <?php if($this->active_section=='projects') { echo 'active'; } ?>">Projects</a>
    </div>
    <div class="p1 caps flex">
        <a href="<?php echo URL.'about'; ?>" class="nav-link border-hover-krispie <?php if($this->active_section=='about') { echo 'active'; } ?>">About</a>
        <a href="<?php echo URL.'contact'; ?>" class="nav-link border-hover-gouda <?php if($this->active_section=='contact') { echo 'active'; } ?>">Contact</a>
    </div>
</div>
<div class="my3 clear">&nbsp;</div>
