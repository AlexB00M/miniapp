<template>
    <div class="card" :style="{ backgroundColor: color }">
        <div class="card-left">
            <div class="card-top">
                <span class="product-name">{{ productName }}</span>
            </div>
            <div class="card-bottom">
                <div class="user-info">
                    <img src="/images/icons/avatar.png" alt="User" class="user-icon" />
                    <span class="user-name">{{ addedBy }}</span>
                </div>
                <div class="product-details">
                    <span class="quantity">{{ quantity }}</span>
                    <span class="price">{{ price }} р</span>
                </div>
            </div>
        </div>
        <div class="card-right">
          <button class="settings-button" @click="openModal()">
            <div class="points"></div>
          </button>
        </div>
    </div>
    <Modal :visible="isModalVisible" @close="closeModal">
    </Modal>
</template>
  
<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

defineProps({
  productName: String,
  addedBy: String,
  quantity: String,
  price: String,
  color: String, // Получаем цвет через props
});

const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<style scoped>

.points {
    width: 100%; 
    height: 35px; 
    background-image: radial-gradient(circle, white 3px, transparent 1px);
    background-size: 100% 33.33%; 
}
.settings-button {
    width: 40px;
    height: 62px;
    background-color: black;
    border: none;
    cursor: pointer;
    border-radius: 0px 15px 15px 0px;
}

.card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #EF8B00;
    border-radius: 15px;
    margin-bottom: 12px;
    color: #ffffff;
    font-family: Arial, sans-serif;
}
.card-left{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin-right: 6px;
    margin-left: 15px;
}

.card-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.product-name {
    text-align: left;
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
    background-color: #00000060;
    border-radius: 15px;
    padding: 3px 8px;
}

.user-info {
    display: flex;
    align-items: center;
}

.user-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
}

.user-name {
    font-size: 14px;
    color: #ffffff;
    border-bottom: 1px solid #ffffff;
}

.product-details {
    display: flex;
    align-items: center;
    gap: 10px;
}

.quantity,
.price {
    font-size: 14px;
    font-weight: bold;
}

</style>
  