<template>
  <input
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      class="input"
      :min="type === 'number' ? 1 : undefined"
      :inputmode="type === 'number' ? 'numeric' : undefined"
      :pattern="type === 'number' ? '\\d*' : undefined"
      @input="validateInput"
  />
</template>

<script setup lang="ts">
import {computed, defineEmits, defineProps} from "vue";

const props = defineProps({
  modelValue: [String, Number],
  placeholder: {
    type: String,
    default: "Введите текст...",
  },
  type: {
    type: String,
    default: "text",
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const validateInput = (event: Event) => {
  if (props.type === "number") {
    const target = event.target as HTMLInputElement;
    const numValue = Number(target.value);
    if (numValue < 1) {
      target.value = "1";
      emit("update:modelValue", 1);
    }
  }
};
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  font-family: 'Inter';
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