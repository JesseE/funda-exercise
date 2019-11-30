<template>
	<header class="page-header">
		<h1>Jesse Eikema - Frontend Developer</h1>
		<h2>Contact - jesse.eikema1991@gmail.com</h2>
		<div>
			{{this.data}}
		</div>
	</header>


</template>

<script>
import { getData } from '../../lib/getData'

export default {
	name: 'pageHeader',
	data() {
		return {
			data: null
		}
	},
	mounted() {
		getData().then(result => {
			return this.data = result
		})
	}
}
</script>
