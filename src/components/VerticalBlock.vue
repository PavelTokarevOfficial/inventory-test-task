<template>
  <div class="vertical-block" v-if="showBlock">
    <button class="vertical-block__btn-close" @click="closeBlock"></button>
    <Skeleton marginBottom="0" height="36px" borderRadius="12px"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Skeleton from "@/components/ui/Skeleton.vue";

const showBlock = ref(true)

const closeBlock = () => {
  showBlock.value = false
}
</script>

<style scoped lang="scss">
.vertical-block{
  position: relative;
  background-color: var(--gray);
  border: 1px solid var(--light-gray);
  border-radius: 12px;
  padding: 17px 67px 17px 17px;

  &__btn-close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    border: none;
    cursor: pointer;
    background: url("@/assets/icons/close-icon.svg");
  }
}
</style>