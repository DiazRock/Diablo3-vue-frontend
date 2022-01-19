<template>
  <div>
    <h1>Error View</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import setError from '@/mixins/setError'

export default {
  name: 'ErrorView',
  mixins: [setError],
  computed: {
    ...mapState('error', {
      err: 'error'
    })
  },
  beforeRouteLeave (to, from, next) {
    this.setApiErr(null)
    next()
  }
}
</script>
