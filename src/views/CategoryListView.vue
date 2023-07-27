<template>
    <div class="block-wrapper">
        <TasksCategoryItem 
            v-for="category in categories" 
            :key="category.id" 
            :categoryname="category.name"
            :categoryid="category.id"
            ></TasksCategoryItem>
    </div>
</template>


<script setup>
    import { ref } from 'vue'
    import data from '@/structure.json'
    import TasksCategoryItem from '@/components/TasksCategoryItem.vue'

    const categories = ref(data.catalog)
    
</script>