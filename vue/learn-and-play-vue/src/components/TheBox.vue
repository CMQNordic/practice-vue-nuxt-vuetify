<script setup>
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "black",
  },
  centered: {
    type: Boolean,
    default: false,
  },
  right: {
    type: Boolean,
    default: false,
  },
});

const alignment = computed(() => {
  if (props.centered) {
    return "center";
  } else if (props.right) {
    return "right";
  } else {
    return "left";
  }
});

const marginLeft = computed(() => {
  if (props.centered) {
    return "auto";
  } else if (props.right) {
    return "auto";
  } else {
    return "unset";
  }
});
const marginRight = computed(() => {
  if (props.centered) {
    return "auto";
  } else if (props.left) {
    return "auto";
  } else {
    return "unset";
  }
});
</script>

<template>
  <div class="the-box-wrapper" style="border: 6px dotted black">
    <div class="the-box colored-text" style="border: 4px dotted red">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.the-box-wrapper {
  width: 350px;

}
.the-box {
  width: content-fit;
}

.colored-text {
  color: v-bind(color);
}

.align-text {
  /* text-align: v-bind(alignment); */

  /*   display: block; */
  /*  table-layout: fixed; */

  /*   width: content-fit;
  margin-left: v-bind(marginLeft);
  margin-right: v-bind(marginRight); */

  /* align-self: flex-end; */
}
</style>
