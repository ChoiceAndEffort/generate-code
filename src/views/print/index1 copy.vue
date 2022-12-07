<template>
  <div>
    <button v-print="printOption">NB打印</button>
    <!-- <div id="nbprint">
      <div style="page-break-after: always">这是第1页</div>
      <div style="page-break-after: always">这是第二页</div>
    </div> -->
    <div id="nbprint">
      <div>
        <hb-table
          :col-config="colConfig"
          :table-data="initData.data.outputAndValueOfUintList"
        >
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
        },
        clickMounted: () => {
          // var style = document.createElement('style');
          // style.innerHTML =
          //   '@page{size: 85mm 56mm;margin: 5mm;}' +
          //   ' html{background-color: red; margin: 0;}' +
          //   ' body{border: solid 0px blue;}';
          // window.document.head.appendChild(style);
          console.log('触发点击打印回调');
        }
      },
      list: [
        {
          name: '阿哒',
          age: 26,
          sex: '男',
          phone: '12345678901',
          mail: 'mmm@mmm.com',
          address: '蓝星星国马尔哈哈海岛',
          workAge: 2,
          jobs: '研发',
          salary: '1.8k'
        },
        {
          name: '阿荣',
          age: 24,
          sex: '男',
          phone: '12345678901',
          mail: 'mmm@mmm.com',
          address: '蓝星星国马尔哈哈海岛',
          workAge: 1,
          jobs: '研发',
          salary: '1.8k'
        },
        {
          name: '阿豪',
          age: 26,
          sex: '男',
          phone: '12345678901',
          mail: 'mmm@mmm.com',
          address: '蓝星星国马尔哈哈海岛',
          workAge: 5,
          jobs: '产品',
          salary: '1.8k'
        },
        {
          name: '阿晨',
          age: 29,
          sex: '男',
          phone: '12345678901',
          mail: 'mmm@mmm.com',
          address: '蓝星星国马尔哈哈海岛',
          workAge: 9,
          jobs: '设计',
          salary: '1.8k'
        },
        {
          name: '阿震',
          age: 30,
          sex: '男',
          phone: '12345678901',
          mail: 'mmm@mmm.com',
          address: '蓝星星国马尔哈哈海岛',
          workAge: 7,
          jobs: '销售',
          salary: '1.8k'
        },
        {
          name: '阿锋',
          age: 21,
          sex: '男',
          phone: '12345678901',
          mail: 'mmm@mmm.com',
          address: '蓝星星国马尔哈哈海岛',
          workAge: 0.1,
          jobs: '售后',
          salary: '1.8k'
        }
      ]
    };
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
