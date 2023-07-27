<template>
    <div>
        <TasksAddNew @addTask="addNewTask" />
        <TasksList :tasks="tasks" :catalog="catalog" />
    </div>

</template>

<script setup>

import { ref } from 'vue'
import data from '@/structure.json'
import TasksAddNew from '@/components/TasksAddNew.vue'
import TasksList from '@/components/TasksList.vue'

const tasks = ref(data.tasks)
const catalog = ref(data.catalog)

function addNewTask(text) {
    
    const newTaskObject = {
            "id" : 5,
            "catalog_id": 0,
            "title" : text            
        }

    tasks.value.push(newTaskObject)

}

</script>