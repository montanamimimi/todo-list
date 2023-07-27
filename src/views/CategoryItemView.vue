<template>
    <div v-if="category" class="edit-category__item">
        ID is {{ category }}
    </div>
    <PageNotFound v-else />
</template>

<script setup>

import { ref, computed } from 'vue'
import data from '@/structure.json'
import PageNotFound from '@/components/PageNotFound.vue'

const props = defineProps(['id'])
const categories = ref(data.catalog)


const category = computed(() => {
    return categories.value.find( item => item.id == props.id )
})

</script>

<style scoped>

    .edit-category__item {
        padding: 32px;
        border: 1px solid gray;
    }

</style>