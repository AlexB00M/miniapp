<script setup>
useHead({
  script: [
    { src: 'https://telegram.org/js/telegram-web-app.js', defer: true }
  ]
});

import { onMounted, onUnmounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

let tg = null;

onMounted(() => {
  tg = window.Telegram?.WebApp;

  if (!tg || !tg.BackButton) {
    console.warn('Telegram WebApp API или BackButton недоступен!');
    return;
  }

  updateBackButton(route.name);

  watch(
    () => route.name,
    (newRouteName) => {
      updateBackButton(newRouteName);
    }
  );
});

function updateBackButton(routeName) {
  if (routeName !== 'lists'){
    tg.BackButton.show(); 
    tg.BackButton.offClick(); 
    tg.BackButton.onClick(() => {
      router.push('/lists'); 
    });
  } else {
    tg.BackButton.hide(); 
  }
}

</script>

<template>
    <div>
        <main>
            <ClientOnly>
                <slot></slot>
            </ClientOnly>
        </main>
    </div>
</template>

<style lang="css">

</style>