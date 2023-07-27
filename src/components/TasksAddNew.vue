<template>

    <div class="block block-flex">
        <form @submit.prevent="addNewTask">
            <input type="text" v-model="taskText"> 
            <button class="button button--light button--sticky" >Add</button>
        </form>

    </div>

</template>

<script setup>

import { ref } from 'vue'

const emit = defineEmits(['addTask'])

const taskText = ref('')

function addNewTask() {
    emit('addTask', taskText.value)
    taskText.value = ''
}

</script>


<style>
    .task-card__new {
        margin: 32px;
        min-width: 400px;
        min-height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

</style>