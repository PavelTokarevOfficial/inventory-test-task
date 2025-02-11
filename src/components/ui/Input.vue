<template>
  <input
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      class="input"
      :min="type === 'number' ? 0 : undefined"
      :inputmode="type === 'number' ? 'numeric' : undefined"
      :pattern="type === 'number' ? '\\d*' : undefined"
  />
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: String,
  },
  placeholder: {
    type: String,
    default: "Введите текст...",
  },
  type: {
    type: String,
    default: "text",
  },
});

const emit = defineEmits<{
  (event: "update:modelValue", value: string | number): void;
}>();

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 500;
  padding: 10px 11px;
  background-color: var(--gray);
  border: 1px solid var(--light-gray);
  color: var(--white);
  border-radius: 4px;
  appearance: textfield;
}
.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>