<template>
  <div class="controls">
    <Button @clickOnButton="changeTheme">change theme</Button>
    <Button @clickOnButton="clearStorage">clear storage</Button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Button from "@/components/ui/Button.vue";

const currentTheme = ref(localStorage.getItem('theme') || 'dark');

const changeTheme = () => {
  const newTheme = currentTheme.value === 'dark' ? 'white' : 'dark';
  document.body.classList.remove(currentTheme.value);
  document.body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
  currentTheme.value = newTheme;
}

const clearStorage = () => {
  localStorage.removeItem('draggedIndex');
  localStorage.removeItem('theme');
  location.reload();
}

onMounted(() => {
  document.body.classList.add(currentTheme.value);
});
</script>

<style scoped lang="scss">
.controls {
  display: flex;
  justify-content: flex-end;

  .btn {
    width: fit-content;
    padding-inline: 20px;
  }
}
</style>