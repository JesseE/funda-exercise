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
      <router-view :dataObject="this.data" />
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
    this.getProject('3cc5fa5b-9cd6-4361-bc42-a6ef7d2defd0')
	},
	methods: {
		getProject(projectId) {
			return getProjectData(projectId).then(res => this.data = res.data)
		}
	}
}
</script>
