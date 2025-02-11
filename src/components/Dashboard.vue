<template>
  <div class="dashboard">
    <div
        v-for="(item, index) in grid"
        :key="index"
        :class="['dashboard__item', sidebarActiveIndex === index ? 'active' : '']"
        @dragover.prevent
        @drop="onDrop(index)"
    >
      <div
          v-if="item"
          class="dashboard__item-inner"
          draggable="true"
          @dragstart="onDragStart(index)"
          @click="openSidebar(item, index)"
      >
        {{draggedIndex}}
        <img :src="item.img">
        <div class="dashboard__counter">{{ item.counter }}</div>
      </div>
    </div>

    <Sidebar :item="sidebarValue" @close="closeSidebar" @deleteValue="deleteValue"/>
  </div>
</template>

<script setup lang="ts">
import {onMounted, type Ref, ref} from "vue";
import {dashboardList, type TDashboardList} from '@/constants/dashboardList.js'
import Sidebar from "@/components/Sidebar.vue";

const grid: Ref<(TDashboardList | null)[]> = ref(Array(25).fill(null));
let draggedIndex: number | null = null;

const sidebarValue: Ref<null | TDashboardList> = ref(null)
const sidebarActiveIndex:Ref<number | null> = ref(null)

const deleteValue = (value: number) => {
  if (!sidebarValue.value || sidebarActiveIndex.value === null) return;

  const item = grid.value[sidebarActiveIndex.value];

  if (!item) return;
  if (value < 0) alert('Введите число больше 0!');

  if (item.counter > value) {
    item.counter -= value;
    saveChanges();
  } else {
    grid.value[sidebarActiveIndex.value] = null;
    sidebarValue.value = null;
    saveChanges();
  }
};

const openSidebar = (item: TDashboardList, index: number) => {
  sidebarValue.value = item
  sidebarActiveIndex.value = index
}

const closeSidebar = () => {
  sidebarValue.value = null
}

const onDragStart = (index: number) => {
  draggedIndex = index;
};

const onDrop = (dropIndex: number) => {
  if (draggedIndex === null || draggedIndex === dropIndex) return;
  [grid.value[draggedIndex], grid.value[dropIndex]] = [grid.value[dropIndex], grid.value[draggedIndex]];
  draggedIndex = null;

  saveChanges()
};

const saveChanges = () => {
  localStorage.setItem('draggedIndex', JSON.stringify(grid.value));
}

onMounted(() => {
  const storageValue = localStorage.getItem('draggedIndex')

  if (!storageValue) {
    dashboardList.map((item) => {
      grid.value[item.place] = item;
    })
    return
  }

  grid.value = JSON.parse(storageValue);
})
</script>

<style scoped lang="scss">
.dashboard {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 100px);
  border-radius: 12px;
  border: 1px solid var(--light-gray);
  overflow: hidden;
  max-width: 100%;

  &__item {
    border-bottom: 1px solid var(--light-gray);
    border-right: 1px solid var(--light-gray);
    background-color: var(--gray);
    cursor: grab;
    transition: 0.3s;

    &:nth-child(5n) {
      border-right: none;
    }

    &:nth-child(n+21) {
      border-bottom: none;
    }

    &:hover{
      background-color: var(--gray-active);
    }

    &.active{
      background-color: var(--gray-active);
    }
  }

  &__item-inner {
    position: relative;
    display: grid;
    place-content: center;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border: 1px solid var(--light-gray);
    margin: -1px;

    img{
      pointer-events: none;
    }
  }

  &__counter {
    display: grid;
    place-content: center;
    position: absolute;
    bottom: -1px;
    right: 0;
    width: 18px;
    height: 18px;
    border: 1px solid var(--light-gray);
    opacity: 0.4;

    font-family: "Inter";
    font-size: 10px;
    font-weight: 500;
    border-radius: 6px 0 0 0;
  }
}
</style>