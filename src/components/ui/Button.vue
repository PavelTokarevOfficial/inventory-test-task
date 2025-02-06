<template>
  <button :class="['btn', type]" :style="{minHeight}" @click="$emit('clickOnButton', $event)">
    <slot/>
  </button>
</template>

<script setup lang="ts">
const {type, minHeight} = defineProps({
  type: {
    type: String as () => 'red' | 'white',
    default: 'red',
  },
  minHeight: {
    type: String,
    default: '39px',
  }
})
</script>

<style scoped lang="scss">
.btn {
  border: none;
  border-radius: 8px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;

  &.white {
    color: var(--light-gray);
    background-color: var(--white);
  }

  &.red {
    color: var(--white);
    background-color: #FA7272;
  }
}
</style>