<template>
  <div class="bi-design">
    <div class="left">
      <ul>
        <li v-for="(item, index) in uiList" :key="index"></li>
      </ul>
    </div>
    <div class="center">
      <!-- :content-layout="{ left: 0, top: 0 }" -->
      <vue-ruler-tool
        style="width: 100%"
        :is-scale-revise="true"
        :preset-line="presetLine"
      >
        <draggable
          style="display: flex; flex-wrap: wrap"
          id="myArray"
          v-model="column"
          animation="150"
        >
          <!--固定排序的跟隐藏的不列出来-->
          <div class="tag" v-for="item in column" :key="item.value">
            {{ item.value }}
          </div>
        </draggable>
      </vue-ruler-tool>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import VueRulerTool from 'vue-ruler-tool';
import draggable from 'vuedraggable';
export default {
  name: 'BiDesign',
  components: {
    VueRulerTool,
    draggable
  },
  data() {
    return {
      uiList: [],
      presetLine: [
        { type: 'l', site: 100 },
        { type: 'v', site: 200 }
      ],
      column: [
        {
          value: 'label1'
        },
        {
          value: 'label2'
        }
      ]
    };
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.bi-design {
  display: flex;
  width: 100%;

  .left,
  .right {
    width: 40%;
    flex-grow: 1;
    // width: 400px;
    // flex: 0.5;
    // background: blue;
  }
  .center {
    // flex: 1;
    width: 375px;
  }
}
</style>
