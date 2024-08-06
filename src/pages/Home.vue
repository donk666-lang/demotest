<template>
  <div class="box">
    <div class="header" :style="!showMenu ? 'height:44px' : 'height:80px'">
      <div>
        <img src="../assets/images/logo.png" class="logo" />
        <span class="headerText" v-show="showMenuList">
          塾専用コミュニケーション&業務管理システム
        </span>
      </div>
      <div class="nav" v-if="showMenu">
        <div>
          <menuTemplate :showMenuList="showMenuList" />
        </div>
        <div class="loginBtn">塾講師ログイン</div>
      </div>
      <div
        v-else
        :class="{ change: true, clicked: isClicked }"
        @click="handleClick"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div :class="mainClass">
      <div class="mainTitle">
        <h1>その他の登録</h1>
      </div>
      <div class="oneList" :class="{ vertical: !showMenu }">
        <div class="oneListMain" :class="{ vertical: !showMenu }">
          <p>メールアドレス（共通アカウント）でログインする場合はこちら</p>
          <div class="oneListBottom">
            <el-button color="#fddc3e">共通アカウントログイン</el-button>
          </div>
        </div>
        <div class="oneListMain" :class="{ vertical: !showMenu }">
          <p>
            Comiruをすでに友達に追加済みの方
            以下のアイコンをクリックしてログイン
          </p>
          <div class="oneListBottom">
            <img src="../assets/images/btn_base.png" class="btnBase" />
          </div>
        </div>
        <div class="oneListMain" :class="{ vertical: !showMenu }" style="border-right: none;">
          <p>メールアドレス（共通アカウント）でログインする場合はこちら</p>
          <div class="oneListBottom">
            <img src="../assets/images/ja.png" class="ja" />
          </div>
        </div>
      </div>
      <div class="twoList">
        <div class="mainTitle">
        <h1>生徒・保護者ログイン（スクールポパー）</h1>
      </div>
      <p>
        生徒番号とパスワードを入力してログインしてください。生徒番号やパスワードパスワードがわからない場合は、教室にお問い合わせください。
      </p>
    <div>
      123
    </div>
      </div>
    </div>
    <div class="mainApp"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted, computed } from "vue";
import menuTemplate from "../components/nav.vue";

const windowWidthThreshold = 1524;
const showMenuList = ref(true);
const showMenu = ref(true);
const isClicked = ref(false);

const handleClick = () => {
  isClicked.value = !isClicked.value;
};

const handleResize = () => {
  if (window.innerWidth <= windowWidthThreshold) {
    showMenuList.value = false;
  } else {
    showMenuList.value = true;
  }
  if (window.innerWidth <= 1047) {
    showMenu.value = false;
  } else {
    showMenu.value = true;
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const mainClass = computed(() => {
  return showMenu.value ? "main" : "main vertical";
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
    background: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;

    .logo {
      width: 30%;
    }

    .headerText {
      width: 175px;
      display: inline-block;
      margin: 0 10px;
      font-weight: bold;
    }

    .nav {
      display: flex;
      .loginBtn {
        width: 115px;
        height: 32px;
        padding: 0 10px;
        border-radius: 16px;
        background-color: #fddc3e;
        text-align: center;
        line-height: 32px;
        font-weight: bold;
        position: relative;
        right: 20px;
        top: 10px;
      }
    }
  }

  .main {
    width: 65%;
    margin: 20px auto;

    &.vertical {
      width: 96%;
    }

    .mainTitle {
      border-bottom: 1px solid #eee;
      padding: 10px 0;
      width: 100%;
    }

    .oneList {
      display: flex;
      padding: 10px 0;

      &.vertical {
        display: flex;
        flex-direction: column;
      }

      .oneListMain {
        width: 30%;
        flex: 1;
        border-right: 2px solid #b4a094;
        padding: 0 8px;
        &.vertical {
          width: 100%;
          border-right: none;
          border-bottom: 2px solid #b4a094;
          padding: 16px 0;
        }
        &:last-child {
          border-right: none;
          border-bottom: none;
        }

        p {
          line-height: 30px;
          text-align: center;
        }
      }

      .oneListBottom {
        text-align: center;

        .btnBase {
          width: 36px;
          height: 36px;
        }

        .ja {
          width: 96px;
          height: 36px;
        }
      }
    }

    .twoList {
      p {
        margin: 10px 0;
      }
    }
  }
}

.change {
  width: 50px;
  height: 50px;
  transform: scale(0.5);
}

.change > div {
  width: 50px;
  height: 5px;
  background-color: black;
  position: absolute;
  transition: all 0.2s linear;
}

.change > div:nth-of-type(1) {
  top: 3px;
}

.change > div:nth-of-type(2) {
  top: 20px;
}

.change > div:nth-of-type(3) {
  top: 36px;
}

.change.clicked div:nth-of-type(1) {
  top: 20px;
  background-color: black;
  transform: rotate(45deg);
}

.change.clicked div:nth-of-type(2) {
  background-color: black;
  transform: scaleX(0);
}

.change.clicked div:nth-of-type(3) {
  top: 20px;
  background-color: black;
  transform: rotate(-45deg);
}

.el-menu--horizontal.el-menu {
  border-bottom: none;
}

/* Media queries for responsive text size */
@media (max-width: 1047px) {
  .headerText,
  .oneListMain p,
  .twoList p {
    font-size: 14px;
  }

  .loginBtn {
    font-size: 14px;
    padding: 0 8px;
  }
}

@media (max-width: 768px) {
  .headerText,
  .oneListMain p,
  .twoList p {
    font-size: 12px;
  }

  .loginBtn {
    font-size: 12px;
    padding: 0 6px;
  }
}

@media (max-width: 480px) {
  .headerText,
  .oneListMain p,
  .twoList p {
    font-size: 10px;
  }

  .loginBtn {
    font-size: 10px;
    padding: 0 4px;
  }
}
</style>
