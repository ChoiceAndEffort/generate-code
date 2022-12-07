<template>
  <div>
    <button v-print="printOption" @click="handlePrint">NB打印</button>
    <hb-table :col-config="colConfig" :table-data="list" v-show="!isPrint">
      <template #serial="scope">{{ scope.index }}</template>
      <template #responsibleUnitName="scope">
        <span class="highlightSpan">{{ scope.row.responsibleUnitName }}</span>
      </template>
    </hb-table>
    <div id="nbprint" v-show="isPrint">
      <div
        :style="{ 'page-break-after': 'always' }"
        v-for="(items, pageIndex) in getSubGroupLengthArr"
        :key="pageIndex"
      >
        <hb-table :col-config="colConfig" :table-data="items">
          <template #serial="scope">{{ scope.index }}</template>
          <template #responsibleUnitName="scope">
            <span class="highlightSpan">{{
              scope.row.responsibleUnitName
            }}</span>
          </template>
        </hb-table>
      </div>
    </div>
  </div>
</template>
<script>
import { colConfig, initData } from './constant';
export default {
  name: 'nb-print',
  data() {
    return {
      isPrint: false,
      colConfig,
      initData,
      printOption: {
        id: 'nbprint', // 打印元素的id 不需要携带#号
        popTitle: '员工信息', // 页眉标题 默认浏览器标题 空字符串时显示undefined 使用html语言
        previewTitle: '打印预览', // 打印预览标题
        // 头部文字 默认空 在节点中添加 DOM 节点， 并用,(Print local range only)分隔多个节点
        extraHead: 'https://***/***.css, https://***/***.css',
        // 新的 CSS 样式表， 并使用,（仅打印本地范围）分隔多个节点
        extraCss: '<meta http-equiv="Content-Language"content="zh-cn"/>',
        previewBeforeOpenCallback: () => {
          console.log('触发打印预览打开前回调');
        },
        previewOpenCallback: () => {
          console.log('触发打开打印预览回调');
        },
        beforeOpenCallback: () => {
          console.log('触发打印工具打开前回调');
        },
        openCallback: () => {
          console.log('触发打开打印工具回调');
        },
        closeCallback: () => {
          console.log('触发关闭打印工具回调');
          this.isPrint = false;
        },
        clickMounted: () => {
          // var style = document.createElement('style');
          // style.innerHTML =
          //   '@page{size: 85mm 56mm;margin: 5mm;}' +
          //   ' html{background-color: red; margin: 0;}' +
          //   ' body{border: solid 0px blue;}';
          // window.document.head.appendChild(style);
          // let divNode = document.createElement('div');
          // divNode.innerHTML = '我的天';
          // document.getElementById('nbprint').appendChild(divNode);
          this.isPrint = true;
          console.log('触发点击打印回调');
        }
      },
      list: [], //原始数组
      getSubGroupLengthArr: [],
      pageNumSize: 20 //每页截取的长度
    };
  },
  computed: {},
  methods: {
    handlePrint() {
      console.log('打印来了');
      this.isPrint = true;
    },
    group(Arr, pageNumSize) {
      let index = 0;
      let newArr = [];
      while (index < Arr.length) {
        newArr.push(Arr.slice(index, (index += pageNumSize)));
      }
      return newArr;
    }
  },
  created() {
    this.list = this.initData.data.outputAndValueOfUintList;
    this.list_a = [];
    // this.getSubGroupLengthArr = this.group(this.list, this.pageNumSize);
    this.getSubGroupLengthArr = [
      ...this.list_a,
      this.group(this.list - 第一个list, this.pageNumSize)
    ];
    console.log(this.getSubGroupLengthArr, '截取后的新数组');
    //1.获取屏幕高度,
    // 2.获取表格单行高度,
    //计算当前屏幕页面可以放下多少行,给pageNumSize设置对应的值,
  }
};
</script>
<style scoped lang="scss">
@media print {
  @page {
    size: auto;
    margin: 3mm;
  }
  .hb-search {
    display: none;
  }

  .require-detail {
    height: auto !important;
  }
  .el-table,
  .el-table__body-wrapper {
    height: auto !important;
  }
  .el-table__fixed-right {
    display: none;
  }
}
</style>
