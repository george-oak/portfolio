<template>
    <section id="work" class="section">    
        <h1>Portfolio</h1>
        <p>These are suppose to be sample projects</p>
        <div class="container">
            <div class="row">
                <project v-bind:project="{
                image:'https://i.pinimg.com/originals/4a/70/56/4a70563234301578c158dc142384a1c3.png',
                description:'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
                }"></project>
                <project v-bind:project="{
                image:'https://i.pinimg.com/originals/4a/70/56/4a70563234301578c158dc142384a1c3.png',
                description:'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
                }"></project>
                <project v-bind:project="{
                image:'https://cdn.mos.cms.futurecdn.net/wH5y2PkWhCxqKBje8rBp5e.jpg',
                description:'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
                }"></project>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Project from './Project.vue'

export default {
    name:'Portfolio',
    components:{
        Project
    }  
}
</script>