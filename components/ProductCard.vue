<template>
    <button class="card" :style="{ backgroundColor: color }">
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
            <div class="settings-button">
                <div class="points"></div>
                <div class="points"></div>
                <div class="points"></div> 
            </div>
          </button>
        </div>
    </button>
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
  width: 6px; 
  height: 6px; 
  margin: 1px 0; 
  border-radius: 50%; 
  background-color: white; 
}

.settings-button {
  width: 41px; 
  height: 55px; 
  background-color: black;
  border: none; 
  border-radius: 0px 14px 14px 0px; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  gap: 4px; 
  cursor: pointer; 
}


.card {
    all: unset;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    background-color: #EF8B00;
    border-radius: 15px;
    margin-bottom: 12px;
    color: #ffffff;
    font-family: Arial, sans-serif;
    height: auto;
}

.card-left {
    flex-grow: 1;
    height: 100%; 
    background-color: transparent; 
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-right: 6px;
    padding-left: 15px;
    align-items: left;
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
  