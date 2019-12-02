<template>
	<ul class="description-list flat-list" v-if="this.$props.kenmerken">
		<li
			class="description-list__item"
			v-for="(kenmerk, index) in this.$props.kenmerken.Kenmerken"
			:key="index"
		>
			<span class="description-list__item-text" v-html="kenmerk.Naam" /><span class="description-list__item-text" v-html="kenmerk.Waarde"/>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'descriptionList',
	props: {
    kenmerken: Object,
    default: () => {}
  },
}
</script>

