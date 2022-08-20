export const templateFilter = function (
  hbTable,
  pagination,
  script,
  tableName
) {
  return `<template>
  <div class="fms-view">
    <div class="fms-table-name">${tableName}</div>
    <div class="fms-content">
      <div class="buts-view">
        <el-button type="primary" icon="el-icon-plus" 
          >操作按钮</el-button
        >
      </div>
      ${hbTable}
    </div>
    ${pagination}
  </div>
</template>
${script}
`;
};
export const paginationView = function (pagination) {
  if (pagination == false) {
    return "";
  }
  return `<div class="fms-pagination" v-show="initData.data.length > 0">
  <hb-pagination
    class="hb-pagination"
    :data="initData"
    :hintShow="true"
    @changePage="handleChangePage"
    @sizeChange="handleSizeChange"
    :isShowLayoutSizes="true"
  />
</div>`;
};
export const javascriptFilter = function (operateListFunArr, pagination) {
  return `<script>
  ${
    pagination == true
      ? `const INIT_SEARCH = {
    page: 0,
    size: 10,
  };`
      : ""
  } 
  import { colConfig, formItemList, rules,operateList,fromParameter } from "./constants.js";
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
          ${pagination == true ? "...cloneDeep(INIT_SEARCH)," : ""}
          ...fromParameter
        },
        //操作项list
        operateList,
        loading: false,
        //初始化数据
        initData: {
          ${
            pagination == true
              ? `page: 0,
          size: 10,`
              : ""
          }
          data: [],
          tableDataId: [],
        },
        formData: {
          id: "",
          ...fromParameter
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
      ${operateListFunArr}
      //操作栏对应函数
      setEventsName(eventName, row) {
        console.log("操作栏方法------", eventName, row);
        this[eventName](row);
      },
      ${
        pagination == true
          ? `//翻页--查询
      handleChangePage(page) {
        this.searchForm.page = page;
        this.getList();
      },
      //每页条数改变---查询
      handleSizeChange(size) {
        this.searchForm.size = size;
        this.searchForm.page = 0;
        this.getList();
      },`
          : ""
      }
      //重置查询
      handleResetSearch() {
        ${
          pagination == true
            ? `this.searchForm = {
          ...cloneDeep(INIT_SEARCH),
        };`
            : ""
        }
        this.getList();
      },
      //查询列表
      async getList() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
    },
    activated() {
      this.getList();
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        ${
          pagination == true
            ? `vm.searchForm = {
          ...cloneDeep(INIT_SEARCH),
        };`
            : ""
        }
      });
    },
  };
  </script>`;
};
export const operateListFun = function (operateList) {
  let funArr = "";
  operateList.forEach((item) => {
    if (item.btnName != "" && item.eventsName != "") {
      let funs = `//${item.btnName}方法
    ${item.eventsName}(row) {
      console.log("${item.btnName}", row);
    },`;
      funArr = funArr + " " + funs;
    }
  });
  return funArr;
};

export const hbTableTemplateFilter = function (
  parameter,
  hbSearch,
  hbOperate,
  slot
) {
  return `<hb-table
  v-loading="loading"
  :colConfig="colConfig"
  row-key="id"
  :tableData="initData.data"
  height="calc(100vh - 265px)"
  ${parameter}
  @to-search="handleToSearch"
  @reset-search="handleResetSearch"
  @selectionEvent="handleSelectionEvent"
>
${hbSearch}
${hbOperate}
${slot}
</hb-table>`;
};

let objs = {
  tableName: "hb_table",
  stripe: false,
  border: true,
  hintShow: true,
  autoIndex: 1,
  drawerTitle: "表格显示设置",
  saveComponentKey: window.location.href.split("?")[0].split("/").slice(-1)[0],
};
export const parameterTemplateFilter = function (from) {
  let parameterData = "";
  Object.keys(from).forEach((key) => {
    let vals = "";
    Object.keys(objs).forEach((obj) => {
      if (key == obj && from[key] !== objs[obj]) {
        if (key == "stripe" || key == "border" || key == "hintShow") {
          vals = `:${key}="${from[key]}"`;
        } else {
          vals = `:${key}="'${from[key]}'"`;
        }
      }
    });
    parameterData = parameterData + " " + vals;
  });
  return parameterData;
};

export const hbSearchTemplateFilter = function (form) {
  if (form.hbSetting == false) {
    return "";
  }
  return `<!--自定义表头列插槽--表头查询项----- 循环遍历input和select搜索框  -->
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
  </template>`;
};
export const hbOperateTemplateFilter = function () {
  return `<!--自定义表头列插槽----下的列内容插槽--------如:插槽'hbSetting'下展示操作项 -->
  <template slot="operation" slot-scope="scope">
    <hb-operate
      :operateList="operateList"
      :row="scope.row"
      :disabled="scope.row.delFlag | handDisabled"
      @setEventsName="setEventsName"
    ></hb-operate>
  </template>`;
};
export const slotTemplateFilter = function (slotArr) {
  let slotTil = "<!-- 自定义列插槽-在这里你可以展示你想要的每列不同的类容 -->";
  let slotView = "";
  slotArr.forEach((item) => {
    if (item.slot) {
      let slot = `<template slot="${item.slot}" slot-scope="scope">
    自定义列插槽 ${item.label} : ${item.prop}
    </template>`;
      slotView = slotView + " " + slot;
    }
  });
  return `${slotTil}${slotView}`;
};
