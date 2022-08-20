<template>
  <div class="fms-view">
    <div class="fms-table-name"></div>
    <div class="fms-content">
      <div class="buts-view"></div>
      <hb-table
        :colConfig="colConfig"
        row-key="id"
        :tableData="initData.data"
        height="calc(100vh - 265px)"
        @to-search="handleToSearch"
        @reset-search="handleResetSearch"
        @selectionEvent="handleSelectionEvent"
      >
        <!--自定义表头列插槽--表头查询项----- 循环遍历input和select搜索框  -->
        <template
          v-for="(item, index) in searchColConfig"
          :slot="item.slotHeaderName"
          slot-scope="scope"
        >
          <hb-search
            :item="item"
            :key="index"
            :searchForm="searchForm"
            :row="scope.row"
          />
        </template>
        <!--自定义表头列插槽----下的列内容插槽--------如:插槽'hbSetting'下展示操作项 -->
        <template slot="operation" slot-scope="scope">
          <hb-operate
            :operateList="operateList"
            :row="scope.row"
            :disabled="scope.row.delFlag | handDisabled"
            @setEventsName="setEventsName"
          ></hb-operate>
        </template>
        <!-- 自定义列插槽-在这里你可以展示你想要的每列不同的类容 -->
        <template slot="jdcbd" slot-scope="scope">
          自定义列插槽 22 : 222
        </template>
        <template slot="vbjkjkkjsnkjs" slot-scope="scope">
          自定义列插槽 测试 : 订单
        </template>
      </hb-table>
    </div>
    <div class="fms-pagination" v-show="initData.data.length > 0">
      <pagination
        class="hb-pagination"
        :data="initData"
        @changePage="handleChangePage"
        @sizeChange="handleSizeChange"
        :isShowLayoutSizes="true"
      />
    </div>
  </div>
</template>
<script>
const INIT_SEARCH = {
  page: 0,
  size: 10,
};
import {
  colConfig,
  formItemList,
  rules,
  operateList,
  fromParameter,
} from "./constants.js";
import tableMixins from "@/mixins/table-mixins.js";
import { cloneDeep } from "lodash";
export default {
  mixins: [tableMixins],
  data() {
    return {
      colConfig,
      formItemList,
      rules,
      // 搜索条件
      searchForm: {
        ...cloneDeep(INIT_SEARCH),
        ...fromParameter,
      },
      //操作项list
      operateList,
      //初始化数据
      initData: {
        page: 0,
        size: 10,
        data: [],
        tableDataId: [],
      },
      formData: {
        id: "",
        ...fromParameter,
      },
    };
  },
  filters: {
    // 禁用置灰处理 ( delFlag )
    handDisabled(delFlag) {
      if (delFlag == "2") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    //多选框的数据
    handleSelectionEvent(value) {
      console.log("多选数据----------", value);
    },
    //去查询
    handleToSearch() {
      console.log("看查询条件-----", this.searchForm);
      this.searchForm.page = 0;
      this.getList();
    },

    //操作栏对应函数
    setEventsName(eventName, row) {
      console.log("操作栏方法------", eventName, row);
      this[eventName](row);
    },
    //翻页--查询
    handleChangePage(page) {
      this.searchForm.page = page;
      this.getList();
    },
    //每页条数改变---查询
    handleSizeChange(size) {
      this.searchForm.size = size;
      this.searchForm.page = 0;
      this.getList();
    },
    //重置查询
    handleResetSearch() {
      this.searchForm = {
        ...cloneDeep(INIT_SEARCH),
      };
      this.getList();
    },
    //查询列表
    async getList() {},
  },
  activated() {
    this.getList();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.searchForm = {
        ...cloneDeep(INIT_SEARCH),
      };
    });
  },
};
</script>
