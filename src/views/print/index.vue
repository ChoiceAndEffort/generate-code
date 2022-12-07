<template>
  <div style="over">
    <!-- <el-dialog title="打印票单" :visible.sync="dialogVisible"> -->
    <!--      width="60%"-->
    <!--      :before-close="handleClose">-->
    <!-- 这里在调试的时候可以使用el-dialog包裹，使对话框一直可见；待调试完成后，将el-dialog去掉，改用下面的隐藏css样式标签包裹 -->
    <!-- 这里是隐藏的html，用于打印票单时的界面效果 -->
    <!--      style="width: 0; height: 0; overflow: hidden" 这里跟对话框二选一，上面的对话框是调试用的-->
    <!-- style="width: 0; height: 0; overflow: hidden" -->
    <div>
      <button id="printButtonRef" v-print="printObj">
        打印票单999999999999
      </button>
      <div id="printMe">
        <!-- 换页CSS，逻辑分页 -->
        <!-- <div style="page-break-after: always">这是第1页</div>
        <div style="page-break-after: always">这是第二页</div> -->
        <div
          style="page-break-after: always"
          v-for="(items, pageIndex) in printData.orderDetails"
          :key="'page' + pageIndex"
        >
          <table
            style="
              border: 1px solid black;
              width: 100%;
              margin: 0 auto;
              border-spacing: 0;
              border-collapse: collapse;
              font-size: 14px;
            "
          >
            <tr>
              <th style="border: 1px solid black">序号</th>
              <th style="border: 1px solid black">商品编码</th>
            </tr>
            <tr v-for="(itemss, dataIndex) in items" :key="itemss.skuCode">
              <td
                style="border: 1px solid black; text-align: center; width: 50px"
              >
                {{ pageIndex * 48 + dataIndex + 1 }}-序号
              </td>
              <td
                style="
                  border: 1px solid black;
                  text-align: center;
                  width: 160px;
                "
              >
                {{ itemss.skuCode }}商品编码
              </td>
            </tr>
            <template
              v-if="
                pageIndex === printData.orderDetails &&
                printData.orderDetails.length - 1
              "
            >
              <tr
                v-for="(item, blankIndex) in blankRowNum"
                :key="'index' + blankIndex"
              >
                <td
                  style="
                    border: 1px solid black;
                    text-align: center;
                    width: 50px;
                  "
                >
                  &nbsp;
                </td>
                <td
                  style="
                    border: 1px solid black;
                    text-align: center;
                    width: 160px;
                  "
                >
                  &nbsp;
                </td>
                <td style="border: 1px solid black">&nbsp;</td>
                <td
                  style="
                    border: 1px solid black;
                    text-align: center;
                    width: 80px;
                  "
                >
                  &nbsp;
                </td>
                <td
                  style="
                    border: 1px solid black;
                    text-align: center;
                    width: 80px;
                  "
                >
                  &nbsp;
                </td>
              </tr>
            </template>
          </table>
        </div>
      </div>
    </div>
    <!-- </el-dialog> -->
  </div>
</template>

<script>
export default {
  name: 'PrintOrderInfo',
  data() {
    return {
      pageSize: 55,
      // 控制对话框显示与隐藏
      dialogVisible: true,
      printObj: {
        // 打印配置对象
        id: 'printMe',
        popTitle: '&nbsp;',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      },
      // 打印表单数据对象
      printData: {
        orderDetails: [
          [
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {}
          ],
          [
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {},
            // {}
          ],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}]
        ] // skuCode-商品编码 \ skuName-商品名称 \ weight-重量(斤) \ binQty-箱数
      }
    };
  },

  computed: {
    // 打印票单的空白行数（48是每页48行满页的意思）
    blankRowNum() {
      if (
        this.printData &&
        this.printData.orderDetails &&
        this.printData.orderDetails.length
      ) {
        const pageTotal = this.printData.orderDetails.length;
        const lastPage = this.printData.orderDetails[pageTotal - 1];
        return this.pageSize - lastPage.length;
      }
      return this.pageSize;
    }
  },
  methods: {
    // 初始化数据
    initData() {
      // 一维数组拆分成二维数组（代码逻辑数据分页）
      // 二维数组中的每个小数组代表一页数据
      const pageArray = [];
      const total = this.printData.orderDetails.length;
      const pageNum = Math.ceil(total / this.pageSize);
      for (let i = 0; i < pageNum; i++) {
        const pageArr = [];
        if (i === pageNum - 1) {
          pageArray.push(this.printData.orderDetails);
        } else {
          for (let j = 0; j < this.pageSize; j++) {
            pageArr.push(this.printData.orderDetails.shift());
          }
          pageArray.push(pageArr);
        }
      }
      this.printData.orderDetails = pageArray;
    }
  }
};
</script>

<style scoped lang="scss"></style>
