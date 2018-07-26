<template>
  <ul class="Tree">
    <li class="Tree__item">
      <div @click='toggle'>
        <i v-if='isFolder' :class="[open?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
        <!--isFolder判断是否存在子级改变图标-->
        <i v-if='!isFolder' class="Tree__item__menuName"></i> {{model.data.menuName}}
      </div>
      <ul v-show="open" v-if='isFolder' class="Tree__item__ul">
        <items v-for='(cel,index) in model.childTreeNode' :model='cel' :key='index'></items>
      </ul>
    </li>
  </ul>
</template>

<script>
import items from '~/components/vueTree/tree.vue'

export default {
  name: 'items',
  props: ['model'],
  components: {
    items
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function() {
      return this.model.childTreeNode && this.model.childTreeNode.length
    }
  },
  methods: {
    toggle: function() {
      if(this.isFolder) {
        this.open = !this.open
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.Tree {
  margin-top: 20px;
  &__item {
    cursor: pointer;
    &__menuName {
      margin-left: 20px;
    }
    &__ul {
      margin-left: 20px;
    }
  }
}
</style>
