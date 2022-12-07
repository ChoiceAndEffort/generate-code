<template>
  <div>
    <button v-print="'#nbprint'">NB打印</button>
    <div id="nbprint">
      <!-- // 方法一 // 使用div包裹需要分页的块 使用 css属性
      page-break-after:always进行分页 -->
      <div style="page-break-after: always">这是第1页</div>
      <div style="page-break-after: always">这是第2页</div>
    </div>
  </div>
</template>

<style>
@media print {
  @page {
    size: auto;
  }
  body,
  html {
    height: auto !important;
  }
}
</style>
