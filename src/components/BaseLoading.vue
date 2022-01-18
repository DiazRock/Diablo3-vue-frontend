<template>
  <!--CSS classes from Bootstrap -->
  <div class="loading-wrapper text-center py-5">
    <div class="spinner-wrapper w-100">
      <!--Bootstrap Spinner Component 🔄-->
      <b-spinner class="spinner" label="Loading..." :type="type" :variant="variant"/>
    </div>
    <h1 class="my-5">Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  // Component Properties
  props: {
    variant: {
      required: false,
      type: String,
      // Default value
      default: 'info',
      validator: (value) => {
        // Validator function:
        // value must be in set
        return [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark'
        ].indexOf(value) !== -1
      }
    },
    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => {
        return ['border', 'grow'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="stylus">
  .spinner-wrapper
    .spinner
      width 4rem
      height 4rem
</style>
