<template>

    <div class="block-wrapper category-list">
        <TasksListCategory 
            v-for="category in catalog" 
            :key="category.id" 
            :category="category"
            :tasks="getTasksByCategoryId(category.id)"
            >{{ category }}
        </TasksListCategory>
    </div>
    
</template>

<script setup>

// import { ref } from 'vue'
import TasksListCategory from '@/components/TasksListCategory.vue'

const props = defineProps({
    tasks: {
        type: Array,
        required: true
    },

    catalog: {
        type: Array,
        required: true
    }
})

function getTasksByCategoryId(id) {
    return props.tasks.filter(task => task.catalog_id === id)
}


// console.log(getTasksByCategoryId(1))

</script>

<style>
    .category-list {
        margin: 32px 0;
    }
</style>