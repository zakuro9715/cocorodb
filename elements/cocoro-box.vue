<template>
  <div :class="boxClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CocoroBox',
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    default: {
      type: Boolean,
      default: true,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    raised: {
      type: Boolean,
      default: false,
    },
    digged: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    boxClass() {
      const color =
        (this.primary ? 'primary' : this.secondary ? 'secondary' : 'default') +
        (this.outline ? '-outline' : '')
      const raise = this.raised ? 'raised-1' : 'raised-0'
      return {
        box: true,
        [`box--${color}`]: true,
        [`box--${raise}`]: true,
      }
    },
  },
}
</script>

<style scope>
.box {
  border-radius: 5px;
  padding: 5px;
}

.box--default {
  background-color: #888;
  color: #eee;
}

.box--primary {
  background-color: #eaa;
  color: #855;
}

.box--default-outline {
  background-color: #eee;
  color: #888;
  border: solid 1px #888;
}

.box--raised-1 {
  box-shadow: 0 3px 1px -1px rgba(0, 0, 0, 0.3);
}

.box--raised-0 {
  box-shadow: 0 0;
}
</style>
