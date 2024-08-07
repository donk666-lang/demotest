<template>
  <div class="box">
    <div class="header" :style="!showMenu ? 'height:44px' : 'height:80px'">
      <div>
        <img src="../../assets/images/logo.png" class="logo" />
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
            <img src="../../assets/images/btn_base.png" class="btnBase" />
          </div>
        </div>
        <div
          class="oneListMain"
          :class="{ vertical: !showMenu }"
          style="border-right: none"
        >
          <p>メールアドレス（共通アカウント）でログインする場合はこちら</p>
          <div class="oneListBottom">
            <img src="../../assets/images/ja.png" class="ja" />
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
        <div class="form" :class="{ vertical: !showMenu }">
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
            :size="formSize"
            label-position="top"
            status-icon
          >
            <el-form-item>
              <el-radio-group
                v-model="ruleForm.resource"
              >
                <el-radio :value="1" class="custom-radio">保護者</el-radio>
                <el-radio :value="2" class="custom-radio">生徒</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="生徒番号" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="パスワード" prop="password">
              <el-input v-model="ruleForm.password" />
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="ruleForm.checked2">パスワードを表示</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(ruleFormRef)" round
                >ログインする</el-button>
            </el-form-item>
            <div class="bottomLink">
              <li><a href="#">パスワードを忘れた方はこちら</a></li>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <div class="mainApp"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted, computed, reactive } from "vue";
import menuTemplate from "../../components/nav.vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from 'vue-router';
const router = useRouter();
const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      trigger: "blur",
      message: "生徒番号 を入力してください",
    },
  ],
  password: [
    {
      required: true,
      message: "パスワード を入力してください",
      trigger: "blur",
    },
  ],
});
const windowWidthThreshold = 1524;
const showMenuList = ref(true);
const showMenu = ref(true);
const isClicked = ref(false);
const handleClick = () => {
  isClicked.value = !isClicked.value;
};
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  resource: 1,
  checked2:'',
  name: "",
  password: "",
});

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
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid:any, fields:any) => {
    if (valid) {
      router.push('/list');
    } else {
      console.log("error submit!", fields);
    }
  });
};
onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
   // 重新设置 showMenu 和 showMenuList 的值
   console.log(window.innerWidth,'window.innerWidth')
   if (window.innerWidth <= 1047) {
    showMenu.value = false;
  } else {
    showMenu.value = true;
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const mainClass = computed(() => {
  return showMenu.value ? "main" : "main vertical";
});
</script>

<style lang="scss" scoped>
@import "../../assets/css/home.scss";
</style>
