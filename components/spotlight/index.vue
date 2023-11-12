<template>
  <div id="spotlight" ref="spotlight" class="spotlight"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    move(e) {
      this.$refs.spotlight.style.left = `${e.pageX}px`;
      this.$refs.spotlight.style.top = `${e.pageY}px`;
    }
  },
  mounted() {
    document.addEventListener(`mousemove`, this.move);
  },
};
</script>

<style src="~/components/spotlight/__spotlight.css" lang="css"></style>