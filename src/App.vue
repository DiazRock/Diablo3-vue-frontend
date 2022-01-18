<template>
  <div id="app">
    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>
    <MainLayout v-else/>
  </div>
</template>

<style lang="stylus">
  #app
    padding 60px 0
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #ffffff
    background-color #15202b
</style>
<script>
import { mapState } from 'vuex'
import LoadLayout from './layout/LoadLayout'
import MainLayout from './layout/MainLayout'
import BaseLoading from '@/components/BaseLoading.vue'

export default {
  created () {
    console.log('In the created')
    this.$store.dispatch('oauth/getToken', null, { root: true })
  },
  name: 'App',
  components: {
    MainLayout,
    LoadLayout,
    BaseLoading
  },
  beforeMount () {
    console.log('isLoading ', this.isLoading)
  },
  computed: {
    // Uso: mapState(moduleName, { state })
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>
