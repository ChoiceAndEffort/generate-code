<template>
  <div>
    <el-table :data="selectData" size="mini" style="width: 100%">
      <el-table-column
        v-for="(item, index) in columnData"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.fromType == 'radio' ? '500px' : ''"
      >
        <template slot="header">
          <div class="lab-herd">
            <span v-show="item.must" class="red">*</span
            ><span>{{ item.label }}</span>
          </div>
        </template>
        <template slot-scope="scope">
          <el-input
            v-if="item.fromType == 'input'"
            size="mini"
            v-model.trim="scope.row[item.prop]"
            :placeholder="`请输入${item.label}`"
          ></el-input>
          <el-radio-group
            class="radio-group"
            v-else-if="item.fromType == 'radio'"
            v-model.trim="scope.row[item.prop]"
          >
            <el-radio
              v-for="(itemI, indexI) in item.options"
              :key="indexI"
              :label="itemI.value"
            >
              <el-button size="mini" :type="itemI.value">{{
                itemI.label
              }}</el-button>
            </el-radio>
          </el-radio-group>
          <el-input
            v-else
            size="mini"
            v-model.trim="scope.row[item.prop]"
            :placeholder="`请输入${item.label}`"
          ></el-input>
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
  </div>
</template>
<script>
import AddDataBut from "@/components/addDataBut.vue";
export default {
  components: { AddDataBut },
  props: {
    selectData: {
      type: Array,
      required: false,
      default: () => {
        return [];
      },
    },
    columnData: {
      type: Array,
      require: false,
      default: () => {
        return [
          {
            label: "名称(key)",
            prop: "label",
            must: true,
            fromType: "input",
          },
          {
            label: "值(value)",
            prop: "value",
            must: true,
            fromType: "input",
          },
        ];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    addData() {
      let objsItem = {};
      this.columnData.forEach((element) => {
        objsItem[element.prop] = "";
      });
      this.selectData.push(objsItem);
    },
    deleteData(index, row) {
      this.selectData.splice(index, 1);
    },
    edit(index, boolean_value) {
      this.selectData[index].edit_state = boolean_value;
    },
  },
};
</script>
<style scoped lang="scss">
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
// .radio-group {
//   width: 300px;
// }
</style>
