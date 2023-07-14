<template>

    <div class="task-category">
        <h2> {{ category.name }}</h2>
    </div>
    
</template>

<script setup>

import { ref } from 'vue'

const props = defineProps({
    category: Object,
})

const category = { ...props.category }
const tasks = ref([])

</script>

<style>

    .task-category {
        display: flex;
        justify-content: space-between;
        min-height: 200px;
        padding: 16px;
        border-bottom: 1px solid gray;
    }

    h2 {
        width: 100%;
        text-align: center;
    }

</style>