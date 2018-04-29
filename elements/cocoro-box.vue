<template>
  <div
    class="box"
    :style="styles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CocoroBox',
  props: {
    height: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    styles() {
      return {
        'box-shadow': `0px ${this.shadowLen} 2px 35px rgba(0, 0, 0, 0.5)`,
      }
    },
    shadewLen() {
      return (this.height || 0) * 3.0
    },
  },
}
</script>

<style scope>
.box {
  border-radius: 3px;
  padding: 5px;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
}
</style>
