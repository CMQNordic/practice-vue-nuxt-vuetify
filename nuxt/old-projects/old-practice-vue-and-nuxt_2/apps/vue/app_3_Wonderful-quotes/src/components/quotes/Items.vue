<template>
  <div>
    <single-item v-for="quote in quotes" :key="quote" @click.native="handleClick(quote)">
      {{ quote.text }}
    </single-item>
  </div>
</template>

<script>
import Item from "./Item.vue";
import { quotesEventBus } from "../../main";

export default {
  props: {
    quotes: {
      type: Array,
      default() {
        return ["Text1"];
      }
    }
  },
  methods: {
    handleClick(quote) {
      quotesEventBus.$emit("eventDelteItem", {
        text: quote.text
      });
    }
  },
  components: {
    SingleItem: Item
  }
};
</script>

<style scoped></style>
