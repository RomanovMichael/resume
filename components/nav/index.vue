<template>
  <nav class="nav mt-64">
    <ul class="nav__list">
      <li>
        <div
          @click="scrollTo('about')"
          class="nav__item transition-all flex --align-center --gap-16 py-8"
        >
          <span class="nav__item-indicator transition-all"></span>
          <span class="nav__item-text transition-all">обо мне</span>
        </div>
      </li>
      <li>
        <div
          @click="scrollTo('exp')"
          class="nav__item transition-all flex --align-center --gap-16 py-8"
        >
          <span class="nav__item-indicator transition-all"></span>
          <span class="nav__item-text transition-all">опыт</span>
        </div>
      </li>
      <li>
        <div
          @click="scrollTo('projects')"
          class="nav__item transition-all flex --align-center --gap-16 py-8"
        >
          <span class="nav__item-indicator transition-all"></span>
          <span class="nav__item-text transition-all">проекты</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            scrollLight: 0,
        }
    },
    methods: {
    scrollTo(id) {
      setTimeout(() => {
        this.$gsap.to(window, { duration: 0.56,  top: 250, scrollTo: "#" + id });
      }, 50);
    },
  },
  computed: {
    navLight() {
        let scrollDistance = window.screenY;

        return scrollDistance;
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;

        document.querySelectorAll('.section').forEach((el, i) => {
            if(el.offsetTop - 230 <= scrollDistance) {
                document.querySelectorAll('.nav__item').forEach((el) => {
                    if(el.classList.contains('is-active')) {
                        el.classList.remove('is-active');
                    }
                    document.querySelectorAll('.nav__item')[i].classList.add('is-active');
                });
            }
        });
    });
  }
};
</script>

<style src="~/components/nav/__nav.css" lang="css"></style>