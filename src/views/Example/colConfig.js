export const constantsFilter = function (form, tableData, operateList) {
  console.log(form, tableData);
  let colConfig = [];
  let rules = {};
  let formItemList = [];
  let fromParameter = {};
  tableData.forEach((item) => {
    let objs = {
      switch: true, // 是否展示该列
      searchKey: item.prop,
      switchDisabled: item.switchDisabled,
      dragLocked: item.dragLocked,
      attrs: {
        label: item.label,
        prop: item.prop,
        align: item.align,
        width: item.width,
        "show-overflow-tooltip": item["show-overflow-tooltip"],
      },
    };
    if (item.slotHeaderSearchType && item.slotHeaderSearchType != "-") {
      objs.slotHeaderSearchType = item.slotHeaderSearchType;
      objs.slotHeaderName = `${item.slotHeaderSearchType}_${item.prop}`;
      rules[item.prop] = [
        {
          required: true,
          message: `请${
            item.slotHeaderSearchType == "input" ? "输入" : "选择"
          }${item.label}`,
          trigger: ["blur", "change"],
        },
      ];
      let formItemObjs = {
        type: item.slotHeaderSearchType,
        prop: item.prop,
        label: item.label,
        formDataKey: item.prop,
      };
      fromParameter[item.prop] = "";
      formItemList.push(formItemObjs);
    }
    if (item.slot != "") {
      objs.slot = item.slot;
    }
    if (item.fixed != "不固定") {
      objs.attrs.fixed = item.fixed;
    }
    if (item.slotHeaderSearchType == "select") {
      objs.statusOptions = item.statusOptions;
    }
    colConfig.push(objs);
  });
  if (form.hbSetting == true) {
    colConfig.push({
      slotHeaderName: "hbSetting", // 是否展示表格配置项
      switch: true,
      attrs: {
        label: "",
        width: "100px",
        fixed: "right",
      },
    });
  }
  if (form.selection == true) {
    colConfig.unshift({
      switch: true,
      attrs: {
        align: "center",
        type: "selection",
        "reserve-selection": true,
      },
    });
  }
  return { colConfig, rules, formItemList, fromParameter, operateList };
};

export const exportTextFilter = function (constants) {
  return `
    /* 表格表单配置数据  */  
    export const colConfig = ${JSON.stringify(constants.colConfig)}
    /* 新增或者修改 等  操作 表单rules验证   */ 
    export const rules = ${JSON.stringify(constants.rules)}
    /* 新增或者修改 等  操作 表单from 数据 */  
    export const formItemList = ${JSON.stringify(constants.formItemList)}
    /* 头from 查询条件 数据 */
    export const fromParameter = ${JSON.stringify(constants.fromParameter)}
    /* 操作栏 事件list 数据 */
    export const operateList = ${JSON.stringify(constants.operateList)}
  `;
};

export const rulesFilter = function (colConfig) {
  let rules = [];
  return rules;
};
export const formItemListFilter = function (colConfig) {
  let formItemList = [];
  return formItemList;
};

export const align = [
  {
    value: "left",
    label: "左对齐",
  },
  {
    value: "center",
    label: "中间对齐",
  },
  {
    value: "right",
    label: "右对齐",
  },
];
export const slotHeaderSearchType = [
  {
    value: "-",
    label: "无",
  },
  {
    value: "input",
    label: "输入框",
  },
  {
    value: "select",
    label: "选择器",
  },
  {
    value: "picker",
    label: "日期",
  },
];
export const fixed = [
  {
    value: "不固定",
    label: "不固定",
  },
  {
    value: "left",
    label: "左固定",
  },
  {
    value: "right",
    label: "右固定",
  },
];
