<template>
    <div class="tags flex --gap-8 --align-center">
        <div class="tag flex --align-center" v-for="(tag, index) in tagsArr" :key="index">{{tag}}</div>
    </div>
</template>

<script>
export default {
    props:[ 'tagsArr'],
}
</script>

<style src="~/components/tags/__tags.css" lang="css"></style>