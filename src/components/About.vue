<template>
	<section id="about" class="section">
		<div class="container-fliud">
			<img alt="Vue logo" class="rounded-circle img-custome" src="../assets/g.jpg">
      <h1>Welcome to my laboratory!</h1>
      <br>
      <p>My name is Jorge, but you can call me George if you want. I'm a Software Developer.</p>
      <p>This is a fun project I built while learning vue.js and bootstrap.</p>
      <p>Here I put some of my personal work that I do in my (very little) spare time. Also you can checkout my professional background.</p>
      <p>You can reach me out using the contact button down below.</p>
			<button type="button" class="btn contact" data-toggle="modal" data-target=".bd-contact-modal-lg">Contact</button>
		</div>
	</section>
</template>
<script lang="ts">

export default {
    name:'About',
}
</script>