<script setup>

import TheNavigation from './components/TheNavigation.vue'

</script>

<template>

  <TheNavigation />
  
    <router-view v-slot="{ Component, route }">
      <Transition name="slide" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view>
  

</template>

<style scoped>

.slide-enter-active {
  transition: opacity 0.4s;
}

.slide-enter-from, .slide-leave-to {
  opacity: 0;
}

@media (min-width: 1024px) {

}
</style>
