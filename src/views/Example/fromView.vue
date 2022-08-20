<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="160px">
    <el-row>
      <el-col :span="8">
        <el-form-item label="表单名" prop="tableName">
          <el-input v-model="form.tableName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="7">
        <div class="selection-view">
          <el-form-item label="斑马纹">
            <el-switch v-model="form.stripe"></el-switch>
          </el-form-item>
          <el-form-item label="分页">
            <el-switch v-model="form.pagination"></el-switch>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="8">
        <el-form-item label="侧边栏标题" prop="drawerTitle">
          <el-input v-model="form.drawerTitle"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label="表格配置存储名字" prop="saveComponentKey">
          <el-input v-model="form.saveComponentKey"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="7">
        <el-form-item label="边框">
          <el-switch v-model="form.border"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="填充" prop="autoIndex">
          <el-input v-model="form.autoIndex"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="8">
        <div class="selection-view">
          <el-form-item label="多选">
            <el-switch v-model="form.selection"></el-switch>
          </el-form-item>
          <el-form-item label="多选提示">
            <el-switch v-model="form.hintShow"></el-switch>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="14">
        <el-form-item label="展示操作栏">
          <div class="selection-view">
            <el-switch v-model="form.hbSetting"></el-switch>
            <el-dropdown
              class="hb-dropdown-view"
              v-show="form.hbSetting == true && operateList.length > 0"
            >
              <span class="el-dropdown-link">
                事件<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item, index) in operateList"
                  :key="index"
                  >{{ item.btnName }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>

            <el-button
              v-show="form.hbSetting == true"
              class="hb-dropdown-view"
              size="small"
              icon="el-icon-plus"
              @click="addEvent"
              >添加</el-button
            >
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="onRecovery">恢复默认</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" v-show="false" justify="end">
      <el-col :span="10">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-col>
    </el-row>
    <el-dialog
      :title="'操作栏事件新增'"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="1080px"
      :before-close="
        () => {
          dialogVisible = false;
        }
      "
    >
      <SelectData
        ref="selectData"
        :selectData="operateList"
        :columnData="columnData"
      ></SelectData>
      <span slot="footer" class="dialog-footer">
        <el-button
          @click="
            () => {
              dialogVisible = false;
            }
          "
          >取 消</el-button
        >
        <el-button type="primary" @click="determine">确 定</el-button>
      </span>
    </el-dialog>
  </el-form>
</template>
<script>
import SelectData from "./selectData";
export default {
  components: { SelectData },
  data() {
    return {
      form: {
        tableName: "hb_table",
        stripe: false,
        border: true,
        autoIndex: 1,
        drawerTitle: "表格显示设置",
        saveComponentKey: window.location.href
          .split("?")[0]
          .split("/")
          .slice(-1)[0],
        selection: false,
        hintShow: true,
        hbSetting: true,
        pagination: true,
      },
      rules: {
        tableName: [
          { required: true, message: "请输入表单名", trigger: "blur" },
        ],
        autoIndex: [
          { required: true, message: "请输入填充列", trigger: "blur" },
        ],
        drawerTitle: [
          { required: true, message: "请输入表格显示设置", trigger: "blur" },
        ],
        saveComponentKey: [
          {
            required: true,
            message: "请输入表格配置存储名字",
            trigger: "blur",
          },
        ],
      },
      operateList: [],
      dialogVisible: false,
      columnData: [
        {
          label: "事件名",
          prop: "btnName",
          must: true,
          fromType: "input",
        },
        {
          label: "事件函数名",
          prop: "eventsName",
          must: true,
          fromType: "input",
        },
        {
          label: "按钮类型",
          prop: "butType",
          must: true,
          fromType: "radio",
          options: [
            {
              label: "默认",
              value: "",
            },
            {
              label: "主要",
              value: "primary",
            },
            {
              label: "警告",
              value: "warning",
            },
            {
              label: "危险",
              value: "danger",
            },
          ],
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log(this.form);
    },
    onRecovery() {
      this.form = {
        tableName: "hb_table",
        stripe: false,
        border: true,
        autoIndex: 1,
        drawerTitle: "表格显示设置",
        saveComponentKey: window.location.href
          .split("?")[0]
          .split("/")
          .slice(-1)[0],
        selection: false,
        hintShow: true,
        hbSetting: true,
        pagination: true,
      };
    },
    addEvent() {
      this.dialogVisible = true;
    },
    determine() {
      console.log(this.operateList);
      this.dialogVisible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.selection-view {
  display: flex;
  align-items: center;
  .hb-dropdown-view {
    margin: 0 15px;
  }
}
</style>
