<template>
    <header> 
        <nav id="nav">        
            <router-link :to="{ name: 'Tasks'}">Tasks</router-link>
            <router-link :to="{ name: 'Categories'}">Categories</router-link>
            <router-link :to="{ name: 'About'}">About</router-link>
            <div class="add-task">
                <span class="add-task__text">Add new task</span> <IconAddNew color="white" />
            </div>
        </nav>
    </header>

</template>

<script setup>

import IconAddNew from '@/components/icons/IconAddNew.vue'

</script>

<style scoped>

    .add-task {
        color: white;
        display: flex;
        padding: 12px;
        align-items: center;
        cursor: pointer;
    }

    .add-task__text {
        margin-right: 6px;
    }

</style>