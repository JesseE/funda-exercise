<template>
  <main class="main">
    <pageHeader />
  </main>
</template>

<script>
  export default {
      components: {
        pageHeader: () => import('../components/page-header/page-header')
      },
  };
</script>


<style>
.main {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
