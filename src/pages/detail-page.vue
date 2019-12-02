<template>
  <div class="main-content">
    <div class="main-content__flex-column">
      <descriptionList :kenmerken="this.$props.dataObject.KenmerkenKort.Kenmerken"/>
      <imageGallery :images="this.$props.dataObject.Media"/>
    </div>
    <textBlock
      title="Omschrijving"
      :summary="this.$props.dataObject.VolledigeOmschrijving"
    />
  </div>
</template>

<script>
export default {
  name: 'detailPage',
  components: {
    descriptionList: () => import('../components/description-list/description-list.vue'),
    imageGallery: () => import('../components/image-gallery/image-gallery.vue'),
    textBlock: () => import('../components/text-block/text-block.vue')
  },
  props: {
    dataObject : {
      type: Object
    }
  }
}
</script>
