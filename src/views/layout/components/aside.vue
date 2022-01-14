<template>
  <el-menu default-active="" @select="handleClickTopMenu" :key="33">
    <el-submenu
      v-for="(submenus, index) in leftMenus"
      :index="index + 1"
      :key="submenus.key || index"
    >
      <template slot="title">{{ submenus.title }}</template>
      <el-menu-item
        v-for="(item, subIndex) in submenus.menus"
        :index="index + 1 + '-' + (subIndex + 1)"
        :key="item.key"
      >
        {{ item.title }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  computed: {
    leftMenus() {
        console.log(this.$store.state.common.leftMenus)
      return this.$store.state.common.leftMenus;
    },
  },
  created() {},
  methods: {
    handleClickTopMenu() {},
  },
};
</script>