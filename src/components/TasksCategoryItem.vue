<template>
    <div class="edit-category__item">
        <router-link :to="{ name: 'Category', params: { id: categoryid}}">{{ categoryname }}</router-link>
        
    </div>
</template>

<script setup>


defineProps({
    categoryname: String,
    categoryid: Number
})

</script>

<style scoped>

    .edit-category__item {
        padding: 32px;
        border: 1px solid gray;
    }

</style>