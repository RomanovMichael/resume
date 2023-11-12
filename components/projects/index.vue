<template>
  <section id="projects" class="projects-section section pt-80">
  <div class="projects__label section__label">Проекты</div>
    <div class="exp__list">
      <div
        class="exp__item projects__item transition-all --just-space mt-16"
        v-for="item in projectsArr"
        :key="item.id"
      >
        <div class="exp__item-terms projects__item-gall flex --just-center" v-if="item">
        <div class="projects__item-gal-wrap transition-all" :class="item.image.size">
          <nuxt-picture
            quality="100"
            class="lazy projects__item-gall-image image-thumb"
            sizes="sm:641px, md:641px, lg:641px"
            format="webp"
            :src="`${item.image.src}`"
            :alt="item.name.title"
          />
        </div>
        </div>

        <div class="exp__item-content">
          <a
            target="_blank"
            v-if="item.name"
            :href="item.name.url"
            class="exp__item-name transition-all flex --align-end"
          >
            {{ item.name.title }}
            <span class="exp__item-name-thumb transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
          <p
            class="exp__item-desc mt-8"
            v-if="item.desc"
            v-html="item.desc"
          ></p>
          <div class="exp__item-links mt-8" v-if="item.links">
            <Links :linksArr="item.links" />
          </div>
          <div class="exp__item-tags mt-16" v-if="item.tags">
            <Tags :tagsArr="item.tags" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projectsArr: [
        {
          id: 1,
          name: {
            title: "Surfboard",
            // url: "https://3owls.ru",
          },
          image: {
            size: '--desk',
            src: '/projects/surfboard.jpg'
          },
          desc: "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
          links: [
            {
              text: "Code",
              url: "https://github.com/RomanovMichael/surfproject",
            },
            {
              text: "Web",
              url: "https://romanovmichael.github.io/surfproject/",
            },
          ],
          tags: [
            "JavaScript",
            "HTML5",
            "SCSS",
            "jQuery",
            "YMaps"
          ],
        },
        {
          id: 2,
          term: "Сен 2023 — Наст.",
          name: {
            title: "Geo Review",
          },
            image: {
            size: '--desk',
            src: '/projects/geo-review.jpg'
          },
          desc: "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
          links: [
            {
              text: "Code",
              url: "https://github.com/RomanovMichael/course-javascript/tree/geo-review/projects/geo-review",
            }
          ],
          tags: ["JavaScript", "YMaps"],
        },
        {
          id: 2,
          term: "Сен 2023 — Наст.",
          name: {
            title: "Loft-photo",
            url: "https://loftschool.com",
          },
            desc: "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
        image: {
            size: '--mob',
            src: '/projects/loft-photo.jpg'
          },
          links: [
            {
              text: "Code",
              url: "/",
            }
          ],
          tags: ["JavaScript"],
        },
        {
          id: 2,
          term: "Сен 2023 — Наст.",
          name: {
            title: "Mega Chat",
            url: "https://loftschool.com",
          },
            image: {
            size: '--desk',
            src: '/projects/mega-chat.jpg'
          },
          desc: "Многопользовательский чат (серверная часть + фронт часть). Пользователь может отправлять сообщения в общий чат и менять своё изображение несколькими способами. Отображается количество участников чата.",
          links: [
            {
              text: "Code",
              url: "https://github.com/RomanovMichael/course-javascript/tree/vp2-chat/projects/mega-chat-3",
            }
          ],
          tags: ["JavaScript", "Node.js", "WebSocket"],
        },
        {
          id: 2,
          term: "Сен 2023 — Наст.",
          name: {
            title: "ChatGPT Voice Telegram Bot",
            // url: "https://loftschool.com",
          },
            image: {
            size: '--desk',
            src: '/projects/gpt-bot.jpg'
          },
          desc: "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
          links: [
            {
              text: "Code",
              url: "https://github.com/RomanovMichael/chatGPT-tg-bot",
            }
          ],
          tags: ["Node.js"],
        },
        {
          id: 2,
          term: "Сен 2023 — Наст.",
          name: {
            title: "LoftMovie",
            url: "https://loftschool.com",
          },
            image: {
            size: '--desk',
            src: '/projects/loft-movie.jpg'
          },
          desc: "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
          links: [
            {
              text: "Code",
              url: "https://github.com/RomanovMichael/LoftMovie",
            }
          ],
          tags: ["React"],
        },
        {
          id: 2,
          term: "Сен 2023 — Наст.",
          name: {
            title: "Air Asia",
          },
            image: {
            size: '--desk',
            src: '/projects/asia.jpg'
          },
          desc: "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
          links: [
            {
              text: "Code",
              url: "https://github.com/RomanovMichael/asiaproject",
            },
            {
              text: "Web",
              url: "https://romanovmichael.github.io/asiaproject/",
            }
          ],
          tags: ["HTML", "CSS"],
        },
        {
          id: 2,
          name: {
            title: "Расчет стоимости",
            // url: "https://loftschool.com",
          },
            image: {
            size: '--desk',
            src: '/projects/calc.jpg'
          },
          desc: "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
          links: [
            {
              text: "Web",
              url: "https://remlabs.ru/services/stretch-roof/",
            }
          ],
          tags: ["Vue", "SCSS", "PHP"],
        },
      ],
    };
  },
};
</script>

<style src="~/components/projects/__projects.css" lang="css"></style>
<style src="~/components/exp/__exp.css" lang="css"></style>