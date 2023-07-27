import { ref } from 'vue'

import data from '@/structure.json'

export default function useTask() {

    const tasks = ref([])
    const categories = ref(data.catalog)

    function getTasks() {
        tasks.value = data.tasks
    }

    return {
        tasks
    }

}