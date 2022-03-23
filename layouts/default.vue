<template>
  <div id="app">
    <app-header />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
export default {
  name: 'DefaultLayout',
  components: { AppHeader },
}
</script>
