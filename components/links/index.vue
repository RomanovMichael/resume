<template>
    <div class="links flex --align-center --gap-16">
        <a target="_blank" :href="link.url" class="links__item transition-all flex --align-center --gap-4" v-for="(link, index) in linksArr" :key="index">
            <span class="links__item-icon transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
            </span>
            <span class="links__item-text transition-all">{{link.text}}</span>
        </a>
    </div>
</template>

<script>
export default {
    props:['linksArr']
}
</script>

<style src="~/components/links/__links.css" lang="css"></style>

