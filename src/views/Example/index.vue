<!--银行信息列表-->
<template>
  <div class="fms-view">
    <div class="fms-table-name">
      (页面/表格)名:
      <el-input
        size="small"
        :style="{ width: '300px', 'margin-left': '15px' }"
        v-model="tableName"
        placeholder="请输入(页面/表格)名"
      ></el-input>
    </div>
    <div class="fms-content">
      <FormView ref="fromView"></FormView>
      <el-alert v-show="isRepeat" title="表格 输入数据有重复" type="warning">
      </el-alert>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        :row-class-name="tableRowClassName"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="label">
          <template slot="header">
            <div class="lab-herd">
              <span class="red">*</span><span>表头label </span>
            </div>
          </template>
          <template slot-scope="scope">
            <el-input
              v-if="scope.row.edit_state"
              v-model.trim="scope.row.label"
              placeholder="请输入表(label)名称"
              clearable
              @blur="repeatInput(scope.row.label, 'label', scope.$index)"
              @clear="repeatInput(scope.row.label, 'label', scope.$index)"
            ></el-input>
            <span v-else>{{ scope.row.label }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="prop">
          <template slot="header">
            <div class="lab-herd">
              <span class="red">*</span><span>表头key </span>
            </div>
          </template>
          <template slot-scope="scope">
            <el-input
              v-if="scope.row.edit_state"
              v-model.trim="scope.row.prop"
              placeholder="请输入表头列key"
              clearable
              @blur="repeatInput(scope.row.prop, 'prop', scope.$index)"
              @clear="repeatInput(scope.row.prop, 'prop', scope.$index)"
            ></el-input>
            <span v-else>{{ scope.row.prop }}</span>
          </template>
        </el-table-column>
        <el-table-column label="宽度(px)" prop="width">
          <template slot-scope="scope">
            <el-input
              v-if="scope.row.edit_state"
              v-model="scope.row.width"
              type="number"
              placeholder="请输入宽度"
              clearable
            ></el-input>
            <span v-else>{{
              scope.row.width == "" ? "自适应" : scope.row.width
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="插槽slot" prop="slot">
          <template slot-scope="scope">
            <el-input
              v-if="scope.row.edit_state"
              v-model.trim="scope.row.slot"
              placeholder="请输入插槽slot名称"
              clearable
            ></el-input>
            <span v-else>{{
              scope.row.slot == "" ? "无" : scope.row.slot
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="对齐方式" prop="align">
          <template slot-scope="scope">
            <el-select
              v-if="scope.row.edit_state"
              v-model="scope.row.align"
              placeholder="请选择"
            >
              <el-option
                v-for="item in align"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <span v-else>{{ scope.row.align | alignFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="表单类型"
          width="260"
          prop="slotHeaderSearchType"
        >
          <template slot-scope="scope">
            <div class="slotHeaderSearchType-view" v-if="scope.row.edit_state">
              <el-select
                class="select-view"
                v-model="scope.row.slotHeaderSearchType"
                placeholder="请选择"
                @change="slotHeaderSearchTypeChange"
              >
                <el-option
                  v-for="item in slotHeaderSearchType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-button
                v-show="scope.row.slotHeaderSearchType == 'select'"
                size="small"
                class="add-but"
                icon="el-icon-plus"
                @click="showSelectData(scope.$index)"
                >select数据</el-button
              >
            </div>

            <div class="slotHeaderSearchType-view" v-else>
              <span>{{
                scope.row.slotHeaderSearchType | SearchTypeFilter
              }}</span>
              <el-select
                class="select-view"
                v-model="scope.row.statusOptions[0]['value']"
                v-if="scope.row.statusOptions.length > 0"
              >
                <el-option
                  v-for="item in scope.row.statusOptions"
                  :key="item.value"
                  :label="`${item.label}`"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="左右固定" prop="fixed">
          <template slot-scope="scope">
            <el-select
              v-if="scope.row.edit_state"
              v-model="scope.row.fixed"
              placeholder="请选择"
            >
              <el-option
                v-for="item in fixed"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <span v-else>{{ scope.row.fixed }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="溢出省略"
          :prop="'show-overflow-tooltip'"
          width="110"
        >
          <template slot-scope="scope">
            <el-switch
              v-if="scope.row.edit_state"
              v-model="scope.row['show-overflow-tooltip']"
            >
            </el-switch>
            <span v-else>{{
              scope.row["show-overflow-tooltip"] == true ? "是" : "否"
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="是否可拖动"
          :prop="'switchDisabled'"
          width="110"
        >
          <template slot-scope="scope">
            <el-switch
              v-if="scope.row.edit_state"
              v-model="scope.row['switchDisabled']"
            >
            </el-switch>
            <span v-else>{{
              scope.row.switchDisabled == true ? "是" : "否"
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否可隐藏" :prop="'dragLocked'" width="110">
          <template slot-scope="scope">
            <el-switch
              v-if="scope.row.edit_state"
              v-model="scope.row['dragLocked']"
            >
            </el-switch>
            <span v-else>{{ scope.row.dragLocked == true ? "是" : "否" }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          fixed="right"
          label="操作"
          width="100"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <el-row>
              <el-button
                v-if="!scope.row.edit_state"
                type="text"
                @click="edit(scope.$index, true)"
                size="small"
                >编辑</el-button
              >
              <el-button
                v-else
                type="text"
                size="small"
                @click="save(scope.$index, scope.row.id)"
                >保存</el-button
              >
              <el-button
                type="text"
                size="small"
                @click="deleteData(scope.$index, scope.row.id)"
                class="el-delete"
                >删除</el-button
              >
            </el-row>
          </template>
        </el-table-column>
      </el-table>
      <AddDataBut @addClick="addData"></AddDataBut>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="3"
                ><el-button type="text">index.vue 数据</el-button></el-col
              >
              <el-col :span="3"
                ><el-button
                  icon="el-icon-connection"
                  size="small"
                  v-show="templateViews !== null"
                  type="primary"
                  @click="doCopy(templateViews)"
                  >一键复制</el-button
                ></el-col
              >
            </el-row>
            <el-input
              type="textarea"
              autosize
              placeholder="数据未生成"
              v-model="templateViews"
              :readonly="true"
            >
            </el-input></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="3"
                ><el-button type="text">constants.js 数据</el-button></el-col
              >
              <el-col :span="3"
                ><el-button
                  icon="el-icon-connection"
                  v-show="exportConstants !== null"
                  size="small"
                  type="primary"
                  @click="doCopy(exportConstants)"
                >
                  一键复制</el-button
                ></el-col
              >
            </el-row>
            <el-input
              type="textarea"
              autosize
              placeholder="数据未生成"
              v-model="exportConstants"
              :readonly="true"
            >
            </el-input></div
        ></el-col>
      </el-row>
    </div>
    <div class="fms-pagination">
      <el-button
        type="primary"
        size="mini"
        :disabled="this.tableData.length == 0 ? true : false"
        @click="saveTemplate"
        >生成Template</el-button
      >
    </div>
    <el-dialog
      :title="selectTitle"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="600"
      :before-close="
        () => {
          dialogVisible = false;
        }
      "
    >
      <SelectData ref="selectData" :selectData="statusOptions"></SelectData>
      <span slot="footer" class="dialog-footer">
        <el-button
          @click="
            () => {
              statusOptions = [];
              dialogVisible = false;
            }
          "
          >取 消</el-button
        >
        <el-button type="primary" @click="determine">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);
import FormView from "./fromView.vue";
import AddDataBut from "@/components/addDataBut.vue";
import SelectData from "./selectData.vue";
import {
  templateFilter,
  hbTableTemplateFilter,
  hbSearchTemplateFilter,
  hbOperateTemplateFilter,
  slotTemplateFilter,
  parameterTemplateFilter,
  operateListFun,
  javascriptFilter,
  paginationView,
} from "./viewsFilter";
import {
  constantsFilter,
  align,
  slotHeaderSearchType,
  fixed,
  exportTextFilter,
} from "./colConfig";

import { cloneDeep } from "lodash";
export default {
  components: { FormView, AddDataBut, SelectData },
  data() {
    return {
      tableData: [],
      align,
      slotHeaderSearchType,
      fixed,
      constants: {},
      exportConstants: null,
      dialogVisible: false,
      selectTitle: "select选择器数据表",
      selectIndex: null,
      statusOptions: null,
      hbTableViews: null,
      templateViews: null,
      tableName: "新页面",
      focusData: [],
      isRepeat: false,
    };
  },
  filters: {
    alignFilter(align) {
      if (align == "left") {
        return "左对齐";
      } else if (align == "center") {
        return "中间对齐";
      } else {
        return "右对齐";
      }
    },
    SearchTypeFilter(slotHeaderSearchType) {
      if (slotHeaderSearchType == "input") {
        return "input输入框";
      } else if (slotHeaderSearchType == "select") {
        return "select选择器:";
      } else if (slotHeaderSearchType == "picker") {
        return "picker日期";
      } else {
        return "无";
      }
    },
  },

  methods: {
    handleSelectionChange() {},
    slotHeaderSearchTypeChange(val) {
      console.log(val);
    },
    tableRowClassName({ row, rowIndex }) {
      if (row.repeat === true) {
        return "warning--row";
      }
      return "";
    },
    repeatInput(val, key, ind) {
      if (val && val !== "") {
        let data = JSON.parse(JSON.stringify(this.tableData));
        let repeat = false;
        this.isRepeat = false;
        data.forEach((item, index) => {
          if (index != ind) {
            if (item[key + ""] === val) {
              this.tableData[index].repeat = true;
              repeat = true;
            } else {
              this.tableData[index].repeat = item.repeat;
            }
          } else {
            this.tableData[ind].repeat = repeat;
          }
        });
        this.isRepeat = repeat;
      }
    },
    doCopy(files) {
      this.$copyText(files).then((e) => {
        console.log(e);
        this.$message({
          message: "复制成功",
          type: "success",
        });
      });
    },
    showSelectData(index) {
      this.dialogVisible = true;
      this.selectIndex = index;
      this.statusOptions = this.tableData[index].statusOptions;
    },
    determine() {
      this.tableData[this.selectIndex].statusOptions = this.statusOptions;
      this.dialogVisible = false;
    },
    addData() {
      const OBJS_ITEM = {
        label: "",
        prop: "",
        align: "left",
        width: "",
        fixed: "不固定",
        "show-overflow-tooltip": false,
        slotHeaderSearchType: "-",
        statusOptions: [],
        switchDisabled: false,
        dragLocked: false,
        edit_state: true,
        slot: "",
        repeat: false,
      };
      this.tableData.push(OBJS_ITEM);
    },
    deleteData(index, row) {
      this.tableData.splice(index, 1);
    },
    edit(index, boolean_value) {
      this.tableData[index].edit_state = boolean_value;
    },
    save(index) {
      if (
        this.tableData[index].label == "" ||
        this.tableData[index].prop == ""
      ) {
        this.$message.error("带 * 号的为必填项");
      } else {
        this.tableData[index].edit_state = false;
      }
    },
    saveConstants() {
      let constants = {};
      let status = true;
      let fromStatus = true;
      let form = this.$refs.fromView.form;
      let operateList = this.$refs.fromView.operateList;
      this.tableData.forEach((item, index) => {
        if (item.edit_state == true) {
          status = false;
        }
      });
      Object.keys(form).forEach((key) => {
        if (form[key] === "") {
          fromStatus = false;
        }
      });
      if (fromStatus == false) {
        this.$message.error("带 * 号的为必填项");
      } else if (status == false) {
        this.$message.error("请保存表格数据");
      } else {
        constants = {
          ...constantsFilter(
            this.$refs.fromView.form,
            this.tableData,
            operateList
          ),
        };
      }
      return constants;
    },
    saveData() {
      this.constants = this.saveConstants();
    },
    saveHbTable() {
      this.hbTableViews = hbTableTemplateFilter(
        parameterTemplateFilter(this.$refs.fromView.form),
        hbSearchTemplateFilter(this.$refs.fromView.form),
        hbOperateTemplateFilter(this.$refs.fromView.form),
        slotTemplateFilter(this.tableData)
      );
    },
    saveTemplate() {
      this.constants = this.saveConstants();
      if (this.constants !== null && Object.keys(this.constants).length !== 0) {
        this.exportConstants = exportTextFilter(this.constants);
        this.saveHbTable();
        let operateList = operateListFun(this.$refs.fromView.operateList);
        let javascriptText = javascriptFilter(
          operateList,
          this.$refs.fromView.form.pagination
        );
        let pagination = paginationView(this.$refs.fromView.form.pagination);
        this.templateViews = templateFilter(
          this.hbTableViews,
          pagination,
          javascriptText,
          this.tableName
        );
      }
    },
  },
};
</script>

<style lang="scss">
.lab-herd {
  display: flex;
  align-items: center;
  color: #333;
  font-size: 12px;

  span {
    font-weight: 700;
    margin-right: 5px;
  }
  .red {
    font-size: 14px;
    color: #f56c6c;
    margin-bottom: -3px;
  }
}
.slotHeaderSearchType-view {
  display: flex;
  align-items: center;
  .select-view {
    width: 160px;
  }
  .add-but {
    margin-left: 3px;
  }
}
.row-bg {
  height: 36px;
  margin-top: 10px;
}
.el-table .warning--row {
  background: #fdf6ec !important;
}
</style>
