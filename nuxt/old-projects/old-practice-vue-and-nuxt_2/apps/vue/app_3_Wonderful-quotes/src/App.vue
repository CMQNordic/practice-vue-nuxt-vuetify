<template>
  <div class="container">
    <div class="row">
      <items-progress :title="'Quotes Added'" :curr="currentItems" :tot="maxItems"></items-progress>
    </div>
    <div class="row">
      <new-quote :title="'New Quote'"></new-quote>
    </div>
    <div class="row">
      <all-quotes :quotes="quotes"></all-quotes>
    </div>
    <div class="row">
      <app-fotter></app-fotter>
    </div>
  </div>
</template>

<script>
import Progress from './'
import NewQuote from './components/quotes/NewItem.vue'
import Quotes from './components/quotes/Items.vue'
import Fotter from './components/shared/Footer.vue'
import { quotesEventBus } from './main'

export default {
  data() {
    return {
      quotes: [],
      maxItems: 10,
      currentItems: 0
    }
  },
  methods: {
    addQuote(quote) {
      if (this.currentItems < this.maxItems) {
        this.quotes.push(quote)
        this.currentItems += 1
      } else {
        alert('To many items. Please delete an item first!')
      }
    },
    deleteQuote(quote) {
      this.quotes.pop(quote)
      this.currentItems -= 1
    }
  },
  components: {
    ItemsProgress: Progress,
    NewQuote: NewQuote,
    AllQuotes: Quotes,
    AppFotter: Fotter
  },
  created() {
    // set listener to events when created
    quotesEventBus.$on('eventAddItem', quote => {
      this.addQuote(quote)
    })
    quotesEventBus.$on('eventDelteItem', quote => {
      this.deleteQuote(quote)
    })
  }
}
</script>

<style></style>
