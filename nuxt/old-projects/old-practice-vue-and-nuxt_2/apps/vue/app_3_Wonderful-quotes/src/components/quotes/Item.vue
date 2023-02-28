<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.panel-body {
  text-align: center;
  font-family: "Arizonia", curiseve;
  cursor: pointer;
}
</style>
