<template>
  <div class="container">
    <header class="header">
      <button class="back-button" @click="open_list">
      
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z" />
        Назад
      </button>
      <h1>Информация о твоем списке</h1>
    </header>

  </div>
</template>
  
<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const open_list = () => {
  router.push('/') 
}
</script>
  
<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: black;
  color: white;
}

.back-button {
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.back-button svg {
  margin-right: 5px;
  fill: white;
}

</style>
  