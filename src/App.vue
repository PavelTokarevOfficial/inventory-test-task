<template>
  <div class="inventory container">
    <Controls class="inventory__controls"/>
    <Card class="inventory__cart"/>
    <Dashboard/>
    <VerticalBlock class="inventory__vertical-block"/>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue'
import Dashboard from '@/components/Dashboard.vue'
import VerticalBlock from '@/components/VerticalBlock.vue'
import Controls from "@/components/Controls.vue";
</script>

<style scoped lang="scss">
.inventory {
  display: grid;
  grid-template-columns: 236px 1fr;
  gap: 24px;
  padding: 32px;

  &__controls{
    display: flex;
    justify-content: flex-end;
    gap: 24px;
    grid-column: 1 / -1;
  }

  &__cart {
    align-self: flex-start;
  }

  &__vertical-block {
    grid-column: 1 / -1;
  }
}
</style>
