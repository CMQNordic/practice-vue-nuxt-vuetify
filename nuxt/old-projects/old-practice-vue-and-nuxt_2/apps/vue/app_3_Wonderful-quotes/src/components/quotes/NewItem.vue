<template>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">{{ title }}</label>
    <textarea class="form-control rounded-0" id="QuoteText" rows="10" v-model="quoteText"></textarea>
    <button type="button" class="btn btn-primary" @click="handleClick()">
      Add Quote
    </button>
  </div>
</template>

<script>
import { quotesEventBus } from "../../main";

export default {
  props: {
    title: {
      type: String,
      default: "Number of items"
    }
  },
  data() {
    return {
      quoteText: null
    };
  },
  methods: {
    handleClick() {
      quotesEventBus.$emit("eventAddItem", {
        text: this.quoteText
      });
    }
  }
};
</script>
