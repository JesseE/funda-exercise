<template>
  <div>
    <page-header
      :hoofdFoto="this.data.HoofdFoto"
      :adres="this.data.Adres"
      :postCode="this.data.Postcode"
      :plaats="this.data.Plaats"
      :prijs="this.data.KoopPrijs"
    />
    <main>
      <router-view :dataObject="this.data"></router-view>
    </main>
    <page-footer/>
  </div>
</template>

<script>
import { getProjectData } from './lib/getData'

export default {
  components: {
    pageHeader: () => import('./components/page-header/page-header.vue'),
    pageFooter: () => import('./components/page-footer/page-footer.vue')
  },
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
			return getProjectData(projectId).then(res => { console.log(res.data), this.data = res.data})
		}
	}
}
</script>
