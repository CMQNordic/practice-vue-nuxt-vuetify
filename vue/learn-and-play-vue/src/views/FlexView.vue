<template>
  <div>
	<component is="ul" class="foo" style="color:red">
  anything inside component
</component>
    <br />
    default:
    <div class="flexbox">
      <div class="item" style="flex: 1">Item 1</div>
      <div class="item" style="flex: 1">Item 1</div>
    </div>

    <div class="flexbox">
      <div class="item">Item 1</div>
      <div class="item">Item 1</div>
      <div class="item">Item 1</div>
    </div>
    <br />
    <div class="flexbox" style="justify-content: center; align-items: center">
      <div class="item">Item 1</div>
      <div class="item">Item 1</div>
      <div class="item">Item 1</div>
    </div>
    <br />
    <div class="flexbox" style="justify-content: flex-end">
      <div class="item">Item 1</div>
      <div class="item" style="align-self: center">Item 1</div>
      <div class="item">Item 1</div>
    </div>
    <br />
    <div class="flexbox" style="justify-content: center; align-items: center">
      <div class="item" style="width: 100px">Item</div>
    </div>
    <br />
    <div class="flexbox" style="justify-content: center; align-items: center">
      <div class="item" style="width: 300px">
        <div class="content">
          <div style="text-align: center">title</div>
        </div>
        <input type="text" placeholder="e-mail" style="width: 100%" />
      </div>
    </div>
    <br />
    <div class="flexbox" style="justify-content: center; align-items: center">
      <div class="item">
        <span>Title</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flexbox {
  display: flex;
  width: 100%;
  height: 100px;
  border: 1px dotted black;
}
.item {
  margin: 5px;
  border: 1px dotted gray;
}
</style>
