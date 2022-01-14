<template>
  <el-container :direction="vertical">
    <el-header height="">
      <home-header />
      <!-- Header content -->
    </el-header>
    <el-container :direction="horizontal">
      <el-aside width="150px" style="background-color: grey">
        <!-- Aside content -->
        <home-aside />
      </el-aside>
      <el-container :direction="vertical">
        <el-main height="">
          <!-- Main content -->
          <router-view />
        </el-main>
        <el-footer height="">
          <!-- Footer content -->
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import homeHeader from './components/header.vue';
import homeAside from './components/aside.vue';
export default {
  components: { homeHeader, homeAside },
  created() {
    this.$store.dispatch('common/initMenus');
  },
};
</script>