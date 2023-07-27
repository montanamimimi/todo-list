<template>
    <div class="block-light single-task">
        {{ taskname }}
    </div>
</template>

<script setup>

const props = defineProps({
    taskname: String
})

</script>

<style scoped>

.single-task {
    width: 200px;
    height: 140px;
    margin-right: 24px;
}

</style>