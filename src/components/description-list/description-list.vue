<template>
	<ul class="description-list flat-list">
		<li
			class="description-list__item"
			v-for="(kenmerk, index) in this.$props.kenmerken"
			:key="index"
		>
			<span v-html="kenmerk.Naam" /> - <span v-html="kenmerk.Waarde"/>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'descriptionList',
	props: {
		kenmerken: Array
	}
}
</script>

