<template>
    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
              <img src="/img/icon.png" alt="" class="webicon rounded-circle d-inline-block align-text-top">
              G-Lab
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" 
              data-target="#navbarTogglerDemo03" 
              aria-controls="navbarTogglerDemo03" 
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a id="button-one" class="nav-link about" href="#about">
                          About
                        </a>
                    </li>
                    <li class="nav-item">
                        <a id="button-two" class="nav-link experience" href="#experience">Experience</a>
                    </li>
                    <li class="nav-item">
                        <a id="button-three" class="nav-link work" href="#work">Work</a>
                    </li>
                    <li class="nav-item">
                        <a id="button-four" class="nav-link contact" data-toggle="modal" data-target=".bd-contact-modal-lg" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>