<template>
   <div style="border: 1px dotted gray; margin: 20px">
      <p>Child details:</p>
      <div>cId = {{ $route.params.cId ?? 'undefined' }}</div>
      <div>lId = {{ $route.params.lId ?? 'undefined' }}</div>
   </div>
</template>
