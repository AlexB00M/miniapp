<template class="index_tmpl">
    <div class="container">
      <header class="header">

        <h1 class="list_name">Список №1</h1>
        <div class="main-user-info">
            <img src="/images/icons/avatar.png" alt="User" class="user-icon" />
            <span class="user-name">Алексанр</span>
        </div>
        <!-- <div>
          <p>Товары: 6/23</p>
          <div class="progress-bar">
            <div class="fill" style="width: 30%;"></div>
          </div>
        </div> -->
      </header>
      <section class="tabs">
        <div class="tabs-container">
          <!-- <div class="tabs">
            <button v-for="(tab, index) in tabs" :key="index" class="tab" :class="{ active: activeTab === tab }" @click="selectTab(tab)">{{ tab }}</button>
          </div> -->
          <!-- <div class="tab-content">
            <div v-if="activeTab === 'Список'">
              <p>Контент для вкладки "Список"</p>
            </div>
            <div v-if="activeTab === 'Бонусные карты'">
              <p>Контент для вкладки "Бонусные карты"</p>
            </div>
            <div v-if="activeTab === 'Участники'">
              <p>Контент для вкладки "Участники"</p>
            </div>
            <div v-if="activeTab === 'История'">
              <p>Контент для вкладки "История"</p>
            </div>
          </div> -->
        </div>
      </section>
  
      <section v-for="category in productCategories" :key="category.id">
        <div class="section">
          <div class="circle" :style="{ backgroundColor: category.color }"></div>
          <div class="section-title">{{ category.title }}</div>
        </div>
          <ProductCard
            v-for="product in category.products"
            :key="product.id"
            :product-name="product.name"
            :added-by="product.addedBy"
            :quantity="product.quantity"
            :price="product.price"
            :color="category.color"
          />
      </section>

    </div>
</template>
  
<script setup>

definePageMeta({
  pageTransition: { name: 'page', mode: 'out-in' },
  // pageTransition: {
  //   name: 'slide-out',
  //   mode: 'out-in',
  // },
  // middleware (to, from) {
  //   if (to.meta.pageTransition && typeof to.meta.pageTransition !== 'boolean')
  //     to.meta.pageTransition.name = from.name === 'lists' ? 'slide-in' : 'slide-out'
  // }
})
import { ref } from "vue";

const tabs = ["Список", "Бонусные карты", "Участники", "История"];
const activeTab = ref(tabs[0]); // Активная вкладка

const selectTab = (tab) => {
  activeTab.value = tab;
};

const productCategories = [
  {
    id: 1,
    title: "Овощи",
    color: "#ff9800", // Цвет для продуктов в этой категории
    products: [
      { id: 1, name: "Картофель", addedBy: "Иван", quantity: "2 кг", price: 200 },
      { id: 2, name: "Морковь", addedBy: "Анна", quantity: "1 кг", price: 100 },
      { id: 2, name: "Морковь", addedBy: "Анна", quantity: "1 кг", price: 100 },
      { id: 2, name: "Морковь", addedBy: "Анна", quantity: "1 кг", price: 100 },
      { id: 2, name: "Морковь", addedBy: "Анна", quantity: "1 кг", price: 100 },
      { id: 2, name: "Морковь", addedBy: "Анна", quantity: "1 кг", price: 100 },
    ],
  },
  {
    id: 2,
    title: "Фрукты",
    color: "#2196f3", // Цвет для продуктов в этой категории
    products: [
      { id: 3, name: "Яблоки", addedBy: "Сергей", quantity: "3 кг", price: 300 },
      { id: 4, name: "Бананы", addedBy: "Мария", quantity: "2 кг", price: 150 },

    ],
  },
  {
    id: 3,
    title: "Мясо и рыба",
    color: "#f44336", // Цвет для продуктов в этой категории
    products: [
      { id: 5, name: "Курица", addedBy: "Дмитрий", quantity: "1 кг", price: 400 },
      { id: 6, name: "Лосось", addedBy: "Алексей", quantity: "0.5 кг", price: 500 },
    ],
  },
];
</script>
  
<style lang="css">
.main-user-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.user-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-left: auto;
}
.list_name{
  font-family: 'Arial', sans-serif;
}
.user-name {
    font-size: 14px;
    color: #ffffff;
}
header{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
}
.section-title{
  font-family: 'Arial', sans-serif;
  line-height: 15px;
  font-size: 13px;
  margin: 0;
}
.circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.page-enter-active,
.page-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.page-leave-to {
  transform: translateX(100%);
  opacity: 0.5;
}

.page-enter-from {
  transform: translateX(-100%);
  opacity: 1;
}
</style>