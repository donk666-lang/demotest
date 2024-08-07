<template>
  <div class="box">
    <div class="search">
      <el-select
        v-model="selectedTitles"
        size="large"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入查询内容"
        style="width: 40%"
        @input="handleInput"
      >
        <el-option
          v-for="item in dataArray"
          :key="item.id"
          :label="item.title"
          :value="item.title"
        />
      </el-select>
      <el-button type="primary" size="large" :icon="Search" @click="handleSearch" />
    </div>
    <div class="list">
      <div v-for="item in paginatedData" :key="item.id">
        <el-card style="margin: 20px 0">
          <template #header>{{ item.title }}</template>
          <div class="listMain">
            <div class="listText">
              <div>{{ item.content }}</div>
              <div>{{ item.time }}</div>
            </div>
            <div class="image-container">
              <img
                v-lazy="item.img"
                class="lazy-image"
              />
            </div>
          </div>
        </el-card>
      </div>
      <div v-if="loading" class="loading">加载中...</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, nextTick,onUnmounted } from 'vue';
import { Search } from '@element-plus/icons-vue';
import dataArray from '../../components/data';

const pageSize = 5; // 每页显示的条目数
const currentPage = ref(1); // 当前页
const totalPages = ref(Math.ceil(dataArray.length / pageSize));
const selectedTitles = ref<string[]>([]);
const filterKeyword = ref<string>('');
const loading = ref(false);

const handleInput = () => {
  filterKeyword.value = selectedTitles.value.join(',');
};

const handleSearch = () => {
  filterKeyword.value = selectedTitles.value.join(',');
};

const filteredData = computed(() => {
  if (!filterKeyword.value) {
    return dataArray;
  }
  return dataArray.filter((item) =>
    selectedTitles.value.includes(item.title)
  );
});

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredData.value.slice(0, end);
});

// Handle scroll event to load more data
const handleScroll = async () => {
  const scrollTop = window.scrollY; // Current vertical scroll position
  const scrollHeight = document.documentElement.scrollHeight; // Total height of the document
  const clientHeight = window.innerHeight; // Height of the viewport

  // Load more data when scrolling near the bottom
  if (scrollTop + clientHeight >= scrollHeight - 10 && !loading.value && currentPage.value < totalPages.value) {
    loading.value = true;
    await nextTick(); // Wait for DOM updates
    currentPage.value += 1;
    loading.value = false;
  }
};

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Simulate a slow loading image
const simulateSlowLoading = (url: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(url);
    }, 5000); // 5 seconds delay for better visualization
  });
};

// Preload images with delay
const preloadImages = async () => {
  for (let item of dataArray) {
    item.img = await simulateSlowLoading(item.img);
  }
};

onMounted(() => {
  preloadImages();
});

// Clean up scroll event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.box {
  background-color: #f8f8f8;
}
</style>

<style lang="scss" scoped>
@import '../../assets/css/index.scss';

.listMain {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%; /* Make sure the container takes 40% width */
}

.loading {
  text-align: center;
  padding: 10px;
}
</style>
