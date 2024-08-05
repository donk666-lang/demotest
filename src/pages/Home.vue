<template>
  <div class="box">
    <div class="header">
      <div>
        <img src="../assets/images/logo.png" class="logo">
        <span class="headerText">塾専用コミュニケーション&業務管理システム</span>
      </div>
      <div class="nav">
        <div class="navList">
          <el-menu default-active="2" mode="horizontal">
            <el-sub-menu index="1">
              <template #title>
                <span>サービス</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">サービス一覧</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <span>基本機能</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item one</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <span>ヘルプ</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item one</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </div>
        <div class="loginBtn">
          塾講師ログイン
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

onMounted(() => {

});
</script>
  
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.box {
  width: 100vw;
  height: 100vh;

  .header {
    height: 80px;
    background: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;

    .logo {
      width: 172px;
      height: 40px;
    }

    .headerText {
      width: 175px;
      display: inline-block;
      margin: 0 10px;
      font-weight: bold;
    }

    .nav {
      display: flex;

      .navList {
        width: 410px;
      }

      .loginBtn {
        height: 32px;
        padding: 0 10px;
        border-radius: 16px;
        background-color: #fddc3e;
        text-align: center;
        line-height: 32px;
        font-weight: bold;
      }
    }
  }
}

.el-menu--horizontal.el-menu {
  border-bottom: none;
}</style>
  