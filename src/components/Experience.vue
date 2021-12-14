<template>
	<section id="experience" class="obscure section">
        <div class="container">
            <h1>{{ $t('characterSheet') }}</h1>
            <!-- TODO: Sprite character -->
            <br>
            <h2>{{ $t('stats') }}</h2>
            <div class="row player-sheet">
                <div class="col-md-6">
                    <stat v-for="backendStat in backendStats" :key="backendStat.id" :stat="backendStat"></stat>
                </div>

                <div class="col-md-6">
                    <stat v-for="frontendStat in frontendStats" :key="frontendStat.id" :stat="frontendStat"></stat>
                </div>
            </div>
            <h2>{{ $t('background') }}</h2>
            <div class="row align-items-start player-background">
                <div class="nav col-md-3 nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link active" id="v-pills-job1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-job1" type="button" role="tab" aria-controls="v-pills-job1" aria-selected="true">
                      {{ $t('digitalVirgoTitle') }}
                    </button>
                    <button class="nav-link" id="v-pills-job2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-job2" type="button" role="tab" aria-controls="v-pills-job2" aria-selected="false">
                      {{ $t('areaSeysTitle') }}
                    </button>
                    <button class="nav-link" id="v-pills-job3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-job3" type="button" role="tab" aria-controls="v-pills-job3" aria-selected="false">
                      {{ $t('keynosTitle') }}
                    </button>
                    <button class="nav-link" id="v-pills-job4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-job4" type="button" role="tab" aria-controls="v-pills-job4" aria-selected="false">
                      {{ $t('vozeliaTitle') }}
                    </button>
                    <button class="nav-link" id="v-pills-job5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-job5" type="button" role="tab" aria-controls="v-pills-job5" aria-selected="false">
                      {{ $t('imagicTitle') }}
                    </button>
                    <button class="nav-link" id="v-pills-job6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-job6" type="button" role="tab" aria-controls="v-pills-job6" aria-selected="false">
                      {{ $t('otherBackgroundTitle') }}
                    </button>
                </div>
                <div class="tab-content col-md-9" id="v-pills-tabContent">
                    <div class="tab-pane fade show active job" id="v-pills-job1" role="tabpanel" aria-labelledby="v-pills-job1-tab">
                        <h5>
                          {{ $t('digitalVirgoHeader') }}
                        </h5>
                        <p>
                          Mantenimiento y optimización de los sistemas y la base de datos a traves de MySQL. Desarrollo de aplicaciones internas con HTML5, CSS3, PHP 5 además de a creación de informes de la eficiencia del servicio servicio técnico depurando los datos albergados en la base de datos interna.
                        </p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-job2" role="tabpanel" aria-labelledby="v-pills-job2-tab">
                        <p>Qhkiewñln Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar magna nec pharetra mattis. Praesent rhoncus quam vitae libero mollis condimentum. Praesent sed nibh feugiat, convallis magna vitae, cursus purus. Mauris ac varius augue, et congue sapien. In quis nisi ac metus aliquam tincidunt quis in massa. Integer nec dignissim risus, id interdum elit. Quisque bibendum eu nunc ut mollis. Vestibulum lacinia venenatis neque quis volutpat. Maecenas mattis, purus a sagittis scelerisque, tortor neque gravida justo, non euismod dui lorem at nunc. </p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-job3" role="tabpanel" aria-labelledby="v-pills-job3-tab">
                        <p>Pojabfmlpiqnkl .zmpxzn Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar magna nec pharetra mattis. Praesent rhoncus quam vitae libero mollis condimentum. Praesent sed nibh feugiat, convallis magna vitae, cursus purus. Mauris ac varius augue, et congue sapien. In quis nisi ac metus aliquam tincidunt quis in massa. Integer nec dignissim risus, id interdum elit. Quisque bibendum eu nunc ut mollis. Vestibulum lacinia venenatis neque quis volutpat. Maecenas mattis, purus a sagittis scelerisque, tortor neque gravida justo, non euismod dui lorem at nunc. </p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-job4" role="tabpanel" aria-labelledby="v-pills-job4-tab">
                        <p>Ojábsdĺnafs oljabhnsdklna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar magna nec pharetra mattis. Praesent rhoncus quam vitae libero mollis condimentum. Praesent sed nibh feugiat, convallis magna vitae, cursus purus. Mauris ac varius augue, et congue sapien. In quis nisi ac metus aliquam tincidunt quis in massa. Integer nec dignissim risus, id interdum elit. Quisque bibendum eu nunc ut mollis. Vestibulum lacinia venenatis neque quis volutpat. Maecenas mattis, purus a sagittis scelerisque, tortor neque gravida justo, non euismod dui lorem at nunc. </p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-job5" role="tabpanel" aria-labelledby="v-pills-job5-tab">
                        <h5>Programador Web (Prácticas)</h5>
                        <p>Mantenimiento y optimización de los sistemas y la base de datos a traves de MySQL. Desarrollo de aplicaciones internas con HTML5, CSS3, PHP 5 además de a creación de informes de la eficiencia del servicio servicio técnico depurando los datos albergados en la base de datos interna.</p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-job6" role="tabpanel" aria-labelledby="v-pills-job6-tab">
                        <p>Mklbughkb Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar magna nec pharetra mattis. Praesent rhoncus quam vitae libero mollis condimentum. Praesent sed nibh feugiat, convallis magna vitae, cursus purus. Mauris ac varius augue, et congue sapien. In quis nisi ac metus aliquam tincidunt quis in massa. Integer nec dignissim risus, id interdum elit. Quisque bibendum eu nunc ut mollis. Vestibulum lacinia venenatis neque quis volutpat. Maecenas mattis, purus a sagittis scelerisque, tortor neque gravida justo, non euismod dui lorem at nunc.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import Stat from './Stat.vue'

export default {

    name:'Experience',
    components:{
        Stat,
        
    },
    data() {
        return {
            backendStats: [
              {id:1,name:'PhP',bonus:4},
              {id:2,name:'Laravel',bonus:3},
              {id:3,name:'MySql',bonus:4},
              {id:4,name:'SQL',bonus:3},
              {id:5,name:'Python',bonus:2},
              {id:6,name:'Flask',bonus:1}
            ],
            frontendStats: [
              {id:1,name:'Javascript',bonus:3},
              {id:2,name:'Vue.Js',bonus:2},
              {id:3,name:'Angular',bonus:2},
              {id:4,name:'HTML5',bonus:3},
              {id:5,name:'Css3',bonus:3},
            ],
        }
    }
}
</script>