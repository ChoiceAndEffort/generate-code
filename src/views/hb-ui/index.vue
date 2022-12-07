<!--
 * @Author: suchiva@126.com
 * @Date: 2022-09-23 08:57:39
 * @LastEditors: gonglei
 * @LastEditTime: 2022-11-30 09:46:11
 * @Description: this is hb-ui example
-->
<template>
  <div>
    <h2>hb-ui example</h2>
    <el-button @click="openDialog">打开对话框</el-button>

    <hb-dialog
      :on-confirm="onConfirm"
      :toggle-visible="toggleVisible"
      :can-onfirm="canConfirm"
      :show-footer="true"
      :confirm-btnname="`确定`"
      :cancel-btnName="`取消`"
      :is-loading="true"
      :visible="visible"
    >
      hello
    </hb-dialog>
    <hb-table
      v-loading="loading"
      :col-config="colConfig"
      row-key="id"
      :table-data="initData"
      height="calc(100vh - 265px)"
      :auto-index="0"
      :save-component-key="'colConfig'"
      :summary-method="getSummaries"
      show-summary
      @to-search="handleToSearch"
      @reset-search="handleResetSearch"
      @selectionEvent="handleSelectionEvent"
    >
      <!--自定义表头列插槽--表头查询项----- 循环遍历input和select搜索框  -->
      <div
        v-for="(item, index) in searchColConfig"
        :slot="item.slotHeaderName"
        slot-scope="scope"
        :key="index"
      >
        <hb-search :item="item" :search-form="searchForm" :row="scope.row" />
      </div>
      <!--自定义表头列插槽----下的列内容插槽--------如:插槽'hbSetting'下展示操作项 -->
      <template slot="operation" slot-scope="scope">
        <hb-operate
          :operate-list="operateList"
          :row="scope.row"
          :disabled="scope.row.delFlag | handDisabled"
          @setEventsName="setEventsName"
        ></hb-operate>
      </template>
      <!-- 自定义列插槽-在这里你可以展示你想要的每列不同的类容 -->
      <template #serial="scope">{{ doubleDigit(scope.index) }}</template>
      <template #responsibleUnitName="scope">
        <span class="highlightSpan" @click="handleCheckDerail(scope.row)">{{
          scope.row.responsibleUnitName
        }}</span>
      </template>
    </hb-table>
  </div>
</template>

<script>
import { colConfig, initData, searchColConfig } from './constant';
export default {
  data() {
    return {
      visible: false,
      loading: false,
      colConfig,
      initData: initData.data.outputAndValueOfUintList,
      searchColConfig
    };
  },
  methods: {
    onConfirm() {},
    canConfirm() {},
    openDialog() {
      this.visible = true;
      // console.log(9999999999);
    },
    toggleVisible() {
      this.visible = !this.visible;
    },
    handleToSearch() {},
    handleResetSearch() {},
    getSummaries() {},
    handleSelectionEvent() {}
  }
};
</script>
