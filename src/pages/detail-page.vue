<template>
  <div class="main-content">
    <div class="main-content__flex-column">
      <descriptionList :kenmerken="this.$props.dataObject.KenmerkenKort.Kenmerken"/>
      <imageGallery :images="this.$props.dataObject.Media"/>
    </div>

    <p class="main-content__description">{{this.$props.dataObject.VolledigeOmschrijving}}</p>
  </div>
</template>

<script>
export default {
  name: 'detailPage',
  components: {
    descriptionList: () => import('../components/description-list/description-list.vue'),
    imageGallery: () => import('../components/image-gallery/image-gallery.vue')
  },
  props: {
    dataObject : {
      type: Object
    }
  }
}
</script>
