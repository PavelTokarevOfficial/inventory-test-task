<template>
  <div class="skeleton" :style="{ width, height, marginBottom, borderRadius }"></div>
</template>

<script setup lang="ts">
const {width, height, marginBottom, borderRadius} = defineProps({
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '1rem',
  },
  marginBottom: {
    type: String,
    default: '16px',
  },
  borderRadius: {
    type: String,
    default: '4px'
  }
});
</script>

<style scoped>
.skeleton {
  background: linear-gradient(90deg, #3C3C3C 0%, #2a2727 51.04%, #3C3C3C 100%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 3s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>