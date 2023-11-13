<template>
  <header
    class="header py-80 flex --direction-column --just-space --align-stretch --nowrap"
  >
    <div class="header__side --top">
      <a href="/" class="header__title">Миша Романов</a>
      <h2 class="header__subtitle">Frontend разработчик</h2>
      <!-- <p class="header__desc mt-16">
        I build accessible, inclusive products and digital experiences for the
        web.
      </p> -->
            <a
        href="#"
        target="_blank"
        class="header__download flex --align-center --gap-4 mt-16"
      >
        <span class="header__download-text transition-all">Cкачать резюме</span>
        <span class="header__download-thumb transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </a>
      <Nav class="header__nav" />
    </div>
    <div class="header__side --bott">
      <Socials class="mt-24" />
    </div>
  </header>
</template>

<script>
export default {
  //   methods: {
  //     showOnScrollUp() {
  //       const gsap = this.$gsap;
  //       const header = document.querySelector(".header");
  //       const showAnimation = gsap
  //         .from(header, {
  //           yPercent: -200,
  //           paused: true,
  //           duration: 0.2,
  //         })
  //         .progress(1);
  //       this.$ScrollTrigger.create({
  //         start: function () {
  //           return `1px top`;
  //         },
  //         end: "max",
  //         // markers: true,
  //         onEnter: () => {
  //           setTimeout(() => {
  //             this.$store.dispatch("menuCssClass", "is-scroll");
  //           }, 200);
  //         },
  //         onLeaveBack: () => {
  //           this.$store.dispatch("menuCssClass", "");
  //         },
  //         onUpdate: (self) => {
  //           if (self.isActive) {
  //             if (self.direction == -1) {
  //               showAnimation.play();
  //               header.classList.add("is-scroll");
  //             } else {
  //               showAnimation.reverse();
  //               header.classList.remove("is-scroll");
  //             }
  //           } else {
  //             showAnimation.play();
  //             header.classList.add("is-scroll-end");
  //           }
  //         },
  //       });
  //     },
  //     openMenu: function (e) {
  //       this.$store.dispatch("menuToggle", e);
  //     },
  //     beforeEnter(el) {
  //       this.$gsap.set(el, {
  //         yPercent: 100,
  //       });
  //     },
  //     enter(el, done) {
  //       document.querySelector("body").classList.add("js-no-scroll");
  //       this.$gsap.to(el, {
  //         yPercent: 0,
  //         duration: 0.56,
  //         ease: "power4.out",
  //         onComplete: done,
  //       });
  //     },
  //     leave(el, done) {
  //       document.querySelector("body").classList.remove("js-no-scroll");
  //       this.$gsap.to(el, {
  //         yPercent: 100,
  //         duration: 0.56,
  //         ease: "power3.out",
  //         onComplete: done,
  //       });
  //     },
  //   },
  //   watch: {
  //     $route(to, from) {
  //       setTimeout(() => {
  //         this.path = to.name;
  //         document.querySelector("body").classList.remove("js-no-scroll");
  //         this.$store.dispatch("menuToggle", false);
  //       }, 1);
  //     },
  //   },
  //   async mounted() {
  //     this.$gsap.delayedCall(0.01, this.showOnScrollUp);
  //     console.log(this.$ScrollTrigger);
  //   },
};
</script>
<style src="~/components/header/__header.css" lang="css"></style>