<template>
  <div class="image-gallery">
	<carousel
		:per-page="1"
		:pagination-enabled="false"
		:navigationEnabled="true">
		<slide
			v-for="({ Url }, index) in flattendArray(this.$props.images)"
			:key="index">
			<fixedRatio :width="300" :height="200">
				<lazyLoad>
					<img :src="Url" />
				</lazyLoad>
			</fixedRatio>
	  	</slide>
	</carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
	components: {
		Carousel,
		Slide,
		lazyLoad: () => import('../lazy-load/lazy-load.vue'),
		fixedRatio: () => import('../fixed-ratio/fixed-ratio.vue')
	},
	name:'imageGallery',
	props: {
		images: Array
	},
	methods: {
		flattendArray(images=[]) {
			const newArray = []
			images.forEach(image => {
				if(image.MediaItems[2] !== undefined) {
					newArray.push(image.MediaItems[2])
				}
			})
			return newArray;
		},
	}
}
</script>
