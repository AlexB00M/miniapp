<template>
    <transition name="slide-up">
      <div v-if="visible" class="modal">
        <button @click="close" class="close-button">Закрыть</button>
      </div>
    </transition>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// Получение пропсов от родителя
defineProps({
visible: Boolean, // Управление видимостью модального окна
});

// Уведомляем родительский компонент о закрытии
const emit = defineEmits(["close"]);

// Закрытие окна
const close = () => {
emit("close");
};

</script>
  
<style scoped>
.modal {
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 93%; 
background-color: rgb(60, 63, 73);
color: white;
display: flex;
justify-content: center;
align-items: center;
}

.modal-content {
width: 100%;
text-align: center;
background-color: #ffffff;
color: #000;
padding: 20px;
border-radius: 10px;
}

.close-button {
background-color: #ff5722;
color: white;
border: none;
padding: 10px 20px;
margin-top: 10px;
border-radius: 5px;
cursor: pointer;
}

.close-button:hover {
background-color: #e64a19;
}

/* Анимация выплывания */
.slide-up-enter-active,
.slide-up-leave-active {
transition: transform 0.23s ease-in-out;
}

.slide-up-enter-from {
transform: translateY(100%);
}

.slide-up-leave-to {
transform: translateY(100%);
}
</style>
  
