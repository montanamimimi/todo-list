<template>

    <div class="task-category">
        <h2> {{ props.category.name }}</h2>
    </div>
    
</template>

<script setup>

import { ref } from 'vue'

const props = defineProps(['category'])

console.log(props.category)

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