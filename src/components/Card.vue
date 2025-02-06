<template>
  <div class="card">
    <img
        :src="img"
        class="card__img"
        alt="cart-img"
    >
    <div class="card__content">
      <Skeleton
          v-for="item in cardSkeletons"
          :key="item.id"
          :width="item.width"
          :height="item.height"
          :marginBottom="item.marginBottom"
          :borderRadius="item.borderRadius"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import img from '@/assets/images/card-img.jpg'
import Skeleton from "@/components/ui/Skeleton.vue";

import {cardSkeletons} from '@/constants/cardSkeletons.ts'
</script>

<style scoped lang="scss">
.card {
  border: 1px solid var(--light-gray);
  border-radius: 12px;
  padding: 18px 14px 24px;
  background-color: var(--gray);

  &__img {
    border-radius: 8px;
    margin-bottom: 15px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>