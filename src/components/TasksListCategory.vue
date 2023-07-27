<template>

    <div class="block category">
        <h2> {{ category.name }}</h2>

        <div class="block-flex item-list">
            <TasksListCategoryItem v-for="task in tasks" :key="task.id" :taskname="task.title" />
        </div>
    </div>
    
</template>

<script setup>

import TasksListCategoryItem from '@/components/TasksListCategoryItem.vue'

const props = defineProps({
    category: Object,
    tasks: Array,
})

</script>

<style>

    .category {
        width: 49%;
    }

    .item-list {
        margin-top: 24px;
    }

</style>