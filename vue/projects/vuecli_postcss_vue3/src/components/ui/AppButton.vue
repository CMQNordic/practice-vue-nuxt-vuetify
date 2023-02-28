<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
   disabled: {
      type: Boolean,
      required: false,
      default: false
   },
   aLink: {
      type: Boolean,
      required: false,
      default: false
   },
   routerLink: {
      type: Boolean,
      required: false,
      default: false
   },
   type: {
      type: String,
      required: false,
      default: null,
      validator: value => ['sm-outline'].includes(value)
   }
});

const buttonClass = computed(() => {
   switch (props.type) {
      case 'sm-outline':
         return `btn btn-sm btn-primary px-2 py-1 my-0 button:disabled ${props.disabled ? 'disabled' : ''}`;

      default:
         return `btn btn-primary ms-4 px-5 py-2 fs-6  button:disabled ${props.disabled ? 'disabled' : ''}`;
   }
});

console.log(`TEMP AppButton Created`, buttonClass.value);
</script>

<template>
   <button v-if="!routerLink && !aLink" :class="buttonClass">
      <slot />
   </button>
   <router-link v-else-if="routerLink" to="">
      <slot />
   </router-link>
   <a v-else-if="aLink" href="">
      <slot />
   </a>
   <slot v-else />
</template>
