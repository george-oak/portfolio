<template>
	<section id="about" class="section">
		<div class="container-fliud">
			<img alt="Vue logo" class="rounded-circle img-custome" src="../assets/g.jpg">
      <h1>{{ $t('welcomeMsg') }}</h1>
      <br>
      <p>{{ $t('welcomeMsgP1') }}</p>
      <p>{{ $t('welcomeMsgP2') }}</p>
      <p>{{ $t('welcomeMsgP3') }}</p>
      <p>{{ $t('welcomeMsgP4') }}</p>
			<button type="button" class="btn contact" data-toggle="modal" data-target=".bd-contact-modal-lg">Contact</button>
		</div>
	</section>
</template>
<script lang="ts">

export default {
    name:'About',
}
</script>