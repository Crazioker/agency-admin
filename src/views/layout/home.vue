<template>
    <el-container :direction="vertical">
        <el-header height="">
            <!-- Header content -->
        </el-header>
        <el-container :direction="horizontal">
            <el-aside width="200px" style="background-color: grey;">
                <!-- Aside content -->
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