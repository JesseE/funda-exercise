<template>
	<header class="page-header">
		<h1 class="page-header__title">Project Title</h1>
		<pre>{{this.data}}</pre>
		<img :src="this.data.HoofdFoto" />
	</header>
</template>

<script>
import { getProjectData } from '../../lib/getData'

export default {
	name: 'pageHeader',
	data() {
		return {
			data: {}
		}
	},
	created() {
		const projectId = '3cc5fa5b-9cd6-4361-bc42-a6ef7d2defd0'
		this.getProject(projectId)
	},
	methods: {
		getProject(projectId) {
			return getProjectData(projectId).then(res => this.data = res.data)
		}
	}
}

</script>
