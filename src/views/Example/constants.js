/* 表格表单配置数据  */
export const colConfig = [
  {
    switch: true,
    searchKey: "voucherWord",
    switchDisabled: true,
    dragLocked: false,
    attrs: {
      label: "凭证字",
      prop: "voucherWord",
      align: "left",
      width: "",
      "show-overflow-tooltip": false,
    },
    slotHeaderSearchType: "input",
    slotHeaderName: "input_voucherWord",
  },
  {
    switch: true,
    searchKey: "voucherTitle",
    switchDisabled: false,
    dragLocked: true,
    attrs: {
      label: "凭证字标题",
      prop: "voucherTitle",
      align: "left",
      width: "",
      "show-overflow-tooltip": false,
    },
    slotHeaderSearchType: "input",
    slotHeaderName: "input_voucherTitle",
  },
  {
    switch: true,
    searchKey: "delFlag",
    switchDisabled: false,
    dragLocked: false,
    attrs: {
      label: "状态",
      prop: "delFlag",
      align: "left",
      width: "",
      "show-overflow-tooltip": false,
    },
    slotHeaderSearchType: "select",
    slotHeaderName: "select_delFlag",
    slot: "delFlag",
    statusOptions: [
      { label: "全部", value: "" },
      { label: "启用", value: "1" },
      { label: "禁用", value: "2" },
    ],
  },
  {
    slotHeaderName: "hbSetting",
    switch: true,
    attrs: { label: "", width: "100px", fixed: "right" },
  },
];
/* 新增或者修改 等  操作 表单rules验证   */
export const rules = {
  voucherWord: [
    { required: true, message: "请输入凭证字", trigger: ["blur", "change"] },
  ],
  voucherTitle: [
    {
      required: true,
      message: "请输入凭证字标题",
      trigger: ["blur", "change"],
    },
  ],
  delFlag: [
    { required: true, message: "请选择状态", trigger: ["blur", "change"] },
  ],
};
/* 新增或者修改 等  操作 表单from 数据 */
export const formItemList = [
  {
    type: "input",
    prop: "voucherWord",
    label: "凭证字",
    formDataKey: "voucherWord",
  },
  {
    type: "input",
    prop: "voucherTitle",
    label: "凭证字标题",
    formDataKey: "voucherTitle",
  },
  { type: "select", prop: "delFlag", label: "状态", formDataKey: "delFlag" },
];
/* 头from 查询条件 数据 */
export const fromParameter = { voucherWord: "", voucherTitle: "", delFlag: "" };
