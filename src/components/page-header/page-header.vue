<template>
	<header class="page-header">
		<img class="page-header__image" :src="this.$props.hoofdFoto" />
		<div class="page-header__description">
			<h1 class="page-header__title">{{this.$props.adres}}</h1>
			<h2 class="page-header__subtitle">{{this.$props.postCode}} {{this.$props.plaats}}</h2>
			<h3 class="page-header__subtitle">Koopprijs: € {{this.$props.prijs}}</h3>
		</div>
	</header>
</template>

<script>
export default {
	name: 'pageHeader',
	props: {
		hoofdFoto: String,
		adres: String,
		postCode: String,
		plaats: String,
		prijs: Number,
	},
}
</script>
