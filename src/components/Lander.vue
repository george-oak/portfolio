<template>
    <div>
        
        <about></about>

        <experience></experience>
        
        <portfolio></portfolio>

        <!-- modal for contact -->
        <section class="">
              <div id="contact" class="modal fade bd-contact-modal-lg" tabindex="-1"
                  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <contact/>
                            </div>
                      </div>
                </div>
        </section>
    </div>
</template>


<script lang="ts">
import Contact from './Contact.vue'
import Portfolio from './Portfolio.vue'
import About from './About.vue'
import Experience from './Experience.vue'

export default {
    name:'Lander',
    components:{
        Contact,
        Portfolio,
        About,
        Experience
    }  
}
</script>