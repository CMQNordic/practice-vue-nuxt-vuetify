<template>
  <div>
    <div style="ba"></div>
    <h3>{{ title }}</h3>
    <!-- Bootrtrap progress bar -->
    <div class="progress">
      <div class="progress-bar bg-danger" role="progressbar" :style="{ width: (100 * curr) / tot + '%' }" aria-valuemin="0" aria-valuemax="100">
        {{ curr }} / {{ tot }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
    title: {
      type: String,
      default: "Number of items"
    },
    tot: {
      type: Number,
      default: 10
    },
    curr: {
      type: Number,
      default: 2
    }
  }
};
</script>
