<template class="index_tmpl">
    <div class="container">
      <header>
        <h1>Список №1</h1>
        <button class="">
          <!-- <img src="/icons/profile-icon.svg" alt="Profile" /> -->
        </button>
      </header>
  
      <div>
        <p>Товары: 6/23</p>
        <div class="progress-bar">
          <div class="fill" style="width: 30%;"></div>
        </div>
      </div>
  
      <section v-for="category in productCategories" :key="category.id">
        <div class="section">
          <div class="circle" :style="{ backgroundColor: category.color }"></div>
          <h2 class="section-title">{{ category.title }}</h2>
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
const productCategories = [
  {
    id: 1,
    title: "Овощи",
    color: "#ff9800", // Цвет для продуктов в этой категории
    products: [
      { id: 1, name: "Картофель", addedBy: "Иван", quantity: "2 кг", price: 200 },
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
.section {
  display: flex;
  gap: 5px;
}
.circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  vertical-align: middle;
  margin-top: 3px;
}
</style>