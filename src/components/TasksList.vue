<template>

    <div class="tasks">
        <TasksListCategory v-for="category in catalog" :key="category.id" :category="category">{{ category }}
        </TasksListCategory>
    </div>


    
</template>

<script setup>

import { ref } from 'vue'
import TasksListCategory from './TasksListCategory.vue'
import categories from '@/structure.json'

const catalog = ref(categories.catalog)


</script>

<style>
    .tasks {
        padding: 0 32px;
    }
</style>