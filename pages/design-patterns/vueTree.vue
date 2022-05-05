<template>
  <div class="TreeBox">
    <items v-for='(model,index) in list' :model='model' :key='index'></items>
  </div>
</template>

<script>
import items from '~/components/vueTree/tree.vue'

export default {
  components: {
     items
  },
  data() {
    return {
      list: [{
        "id": "1",
        "data": {
          "menuName": "项目管理",
          "menuCode": "",
        },
        "childTreeNode": [{
          "data": {
            "menuName": "项目",
            "menuCode": "BusProject",
          },
          "childTreeNode": [
            {
              "data": {
                "menuName": "项目列表",
                "menuCode": "BusProjectLists",
              }
            },
            {
              "data": {
                "menuName": "项目规模",
                "menuCode": "BusProjectLists",
              },
            }
          ]
        }, {
            "data": {
                "menuName": "我的任务",
                "menuCode": "BusProject",
            },
            "childTreeNode": []
        }, {
            "data": {
                "menuName": "人员周报",
                "menuCode": "BusProject",
            },
            "childTreeNode": []
        }]
      }, {
          "id": "2",
          "data": {
              "menuName": "数据统计",
              "menuCode": "BusClock",
          },
          "childTreeNode": []
      }, {
          "id": "3",
          "data": {
              "menuName": "人事管理",
              "menuCode": "",
          },
          "childTreeNode": []
      }, {
          "id": "4",
          "data": {
              "menuName": "基础管理",
              "menuCode": "",
          },
          "childTreeNode": []
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.TreeBox {
  width: 1365px;
  padding: 100px 50px;
  margin: 0 auto;
  @media (max-width: 991px) {
    width: 100%;
    padding: 2vh 2vw;
  }
}
</style>
