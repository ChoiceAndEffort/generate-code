<template>
  <div class="config">
    <el-form ref="form" :model="formData" label-width="80px">
      <div>列表页</div>
      {{ formData }}
      <el-row v-for="(item, index) in formData.list" :key="index">
        <el-col :span="6">
          <el-form-item label="接口类型">
            <el-select v-model="formData.list[index].type" placeholder="请选择">
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="接口方法">
            <el-select
              v-model="formData.list[index].method"
              placeholder="请选择"
            >
              <el-option
                v-for="item in methodsOptions"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="接口链接">
            <el-input v-model.trim="formData.list[index].url"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button
            icon="el-icon-plus"
            circle
            @click="handleAddCol"
          ></el-button>
          <el-button
            icon="el-icon-minus"
            circle
            v-if="formData.list.length > 1"
            @click="handleDeleteCol(index)"
          ></el-button>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="handleSave">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Config',
  components: {},
  data() {
    return {
      typeOptions: [
        {
          name: '列表',
          value: 'getListApi'
        },
        {
          name: '新增',
          value: 'addDataApi'
        },
        {
          name: '修改',
          value: 'editDataApi'
        },
        {
          name: '删除',
          value: 'deleteDataApi'
        }
      ],
      methodsOptions: [
        {
          name: 'get',
          value: 'get'
        },
        {
          name: 'post',
          value: 'post'
        },
        {
          name: 'put',
          value: 'put'
        }
      ],
      formData: {
        list: [
          {
            type: 'getListApi',
            method: 'get',
            url: '/auth/v1/role/getRolePage'
          }
        ]
      }
    };
  },
  methods: {
    handleAddCol() {
      this.formData.list.push({ type: '', method: '', url: '' });
    },
    handleDeleteCol(index) {
      this.formData.list.splice(index, 1);
    },
    handleSave() {
      console.log('保存', this.formData);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.config {
}
</style>
