<template>
  <el-menu
    class="top-menus"
    mode="horizontal"
    :default-active="active"
    @select="handleClickTopMenu"
  >
    <el-menu-item
      v-for="(submenus, index) in topMenus"
      :index="submenus.name"
      :key="index"
    >
      <template slot="title">{{ submenus.title }}</template>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  computed: {
    topMenus() {
      return this.$store.state.common.topMenus;
    },
  },
  data() {
    return {
      active: 'home',
    };
  },
  created() {
    this.updateLeftMenus(this.active);
  },
  methods: {
    handleClickTopMenu(key) {
      this.updateLeftMenus(key);
    },
    updateLeftMenus(key) {
      if (!key) return;
      let subMenus = [];
      const menus = this.$store.state.common.allMenus;
      for (let i = 0, len = menus.length; i < len; i++) {
        if (menus[i].name === key && menus[i].children) {
          subMenus = menus[i].children;
          break;
        }
      }
      this.$store.commit('common/setLeftMenus', subMenus);
    },
  },
};
</script>
<style>
.top-menus {
  display: flex;
  justify-content: center;
}
</style>