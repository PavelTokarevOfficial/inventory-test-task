<template>
  <div :class="['sidebar', item ? 'active' : '']">
    <button class="sidebar__btn-close" @click="closeSidebar"/>

    <img :src="item?.img" :alt="item?.img" class="sidebar__img">

    <div class="sidebar__skeleton">
      <Skeleton
          v-for="item in sidebarSkeletons"
          :key="item.id"
          :width="item.width"
          :height="item.height"
          :marginBottom="item.marginBottom"
          :borderRadius="item.borderRadius"
      />
    </div>

    <Button @click="formDeleteIsShow = true">Удалить предмет</Button>

    <div class="sidebar__form-delete" v-if="formDeleteIsShow">
      <Input
          v-model="numberValue"
          placeholder="Введите количество"
          type='number'
          class="sidebar__form-delete__input"
      />

      <div class="sidebar__form-delete__buttons">
        <Button minHeight="33px" type="white" @clickOnButton="closeFormDelete">Отмена</Button>
        <Button minHeight="33px" @click="deleteValue">Подтвердить</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from "@/components/ui/Skeleton.vue";
import type {TDashboardList} from "@/constants/dashboardList.ts";
import {sidebarSkeletons} from '@/constants/sidebarSkeletons.ts'
import Button from "@/components/ui/Button.vue";
import Input from "@/components/ui/Input.vue";
import {ref} from "vue";

const {item} = defineProps<{
  item?: TDashboardList | null
}>()

const emit = defineEmits<{
  (e: 'deleteValue', value: number): void
  (e: 'close'): void
}>()

const formDeleteIsShow = ref(false)
const numberValue = ref(1);

const closeFormDelete = () => {
  formDeleteIsShow.value = false
  numberValue.value = 1
}

const deleteValue = () => {
  emit("deleteValue", numberValue.value);
  closeFormDelete()
};

const closeSidebar = () => {
  emit("close");
  closeFormDelete()
}
</script>

<style lang="scss">
.sidebar {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  min-width: 250px;
  backdrop-filter: blur(16px);
  padding: 55px 15px 18px;
  border-left: 1px solid var(--light-gray);
  transition: 0.4s;
  transform: translateX(100%);

  &.active {
    transform: none;
  }

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

  &__img {
    display: block;
    width: 130px;
    margin: 0 auto 30px;
  }

  &__skeleton {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    padding: 16px 4px 24px;
    border-top: 1px solid var(--light-gray);
    border-bottom: 1px solid var(--light-gray);
    margin-bottom: 18px;
  }

  &__form-delete {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 19px 20px;
    background-color: rgba(38, 38, 38, 0.87);
    border-top: 1px solid var(--light-gray);
    backdrop-filter: blur(16px);

    &__buttons {
      display: flex;
      gap: 10px;
    }

    &__input{
      margin-bottom: 20px;
    }
  }
}
</style>