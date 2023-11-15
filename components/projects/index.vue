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

        <div class="exp__item-content projects__item-content">
          <a
            target="_blank"
            v-if="item.name"
            :href="item.name.url"
            class="exp__item-name projects__item-name transition-all flex --align-end"
          >
            {{ item.name.title }}
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
            title: "Верстка для Chess Club Dubai",
          },
            image: {
            size: '--desk',
            src: '/projects/chss.jpg'
          },
          desc: "12-и колоночная верстка по дизайн-макетам Figma. Формирование структур данных о курсах и их вывод в компонентах.",
          links: [
            {
              text: "Web",
              url: "https://chessclub.ae",
            }
          ],
          tags: ["Nuxt", "SCSS", "Grid"],
        },
        {
          id: 1,
          name: {
            title: "Калькуляция для Remlabs",
          },
            image: {
            size: '--desk',
            src: '/projects/calc.jpg'
          },
          desc: "Автономный калькулятор стоимости натяжных потолков с реактивным расчетом для компании Remlabs. Включены параметры площади, материалов, типов конструкций, основного и доп. освещений.",
          links: [
            {
              text: "Web",
              url: "https://remlabs.ru/services/stretch-roof/",
            }
          ],
          tags: ["Vue", "SCSS", "PHP"],
        },
        {
          id: 2,
          term: "Сен 2023 — Наст.",
          name: {
            title: "ChatGPT Voice Telegram Bot",
          },
            image: {
            size: '--desk',
            src: '/projects/gpt-bot.jpg'
          },
          desc: "Интеграция СhatGPT API и Telegram API. Телеграм бот обрабатывает сообщения в текстовом и аудио формате. Голосовые сообщения из формата .ogg конвертируются в .mp3, а затем транскрибируются в текст. Аудио сохраняются в файловую систему.",
          links: [
            {
              text: "Code",
              url: "https://github.com/RomanovMichael/chatGPT-tg-bot",
            }
          ],
          tags: ["Node.js"],
        },
        {
          id: 3,
          term: "Сен 2023 — Наст.",
          name: {
            title: "Гео-отзыв",
          },
            image: {
            size: '--desk',
            src: '/projects/geo-review.jpg'
          },
          desc: "Интерактивное приложение, в котором можно оставить отзыв о любом месте. По клику в любой точке карты открывается балун с формой. После публикации отзыва на карте создается метка со списком всех отзывов по координатам. При изменении масштаба карты метки объединяются в кластеры. Данные хранятся в LocalStorage.",
          links: [
            {
              text: "Code",
              url: "https://github.com/RomanovMichael/course-javascript/tree/geo-review/projects/geo-review",
            }
          ],
          tags: ["JavaScript", "YMaps"],
        },
        {
          id: 1,
          name: {
            title: "Surfboard",
          },
          image: {
            size: '--desk',
            src: '/projects/surfboard.jpg'
          },
          desc: "Адаптивный одностраничный сайт компании по продаже досок для серфинга с OPS, кастомным аудиоплеером, слайдерами и аккордеонами.",
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
            title: "Loft-photo",
            url: "https://loftschool.com",
          },
            desc: "Мобильное приложение на базе VK. Cвайпай и взаимодействуй с фотографиями друзей. Лайки, комменты и личный кабинет с лентой. Данные хранятся в объекте DB на стороне сервера.",
        image: {
            size: '--mob',
            src: '/projects/loft-photo.jpg'
          },
          links: [
            {
              text: "Code",
              url: "https://github.com/RomanovMichael/loft-photo/tree/master/projects/loft-photo",
            }
          ],
          tags: ["JavaScript", "VK API"],
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
            title: "Air Asia",
          },
            image: {
            size: '--desk',
            src: '/projects/asia.jpg'
          },
          desc: "Ламповый сайт из нескольких страниц со статичным лейаутом в рамках обучения.",
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
          term: "Сен 2023 — Наст.",
          name: {
            title: "LoftMovie",
            url: "https://loftschool.com",
          },
            image: {
            size: '--desk',
            src: '/projects/loft-movie.jpg'
          },
          desc: "Cервис поиска информации о любимых фильмах и актерах в двух цветовых темах. По запросу возвращает списки релевантных актеров и фильмов. Просмотр полной информации на детальной странице. Добавление в избранное.",
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
          name: {
            title: "Квиз для k-lestnica",
          },
            image: {
            size: '--desk',
            src: '/projects/kitch.jpg'
          },
          desc: "Пошаговый квиз для расчета стоимости изготовления кухонь на заказ с учетом материала и стиля комплектующих.",
          links: [
            {
              text: "Web",
              url: "https://k-lestnica.ru/izgotovlenie-kukhon.html",
            }
          ],
          tags: ["CSS", "PHP"],
        },
      ],
    };
  },
};
</script>

<style src="~/components/projects/__projects.css" lang="css"></style>
<style src="~/components/exp/__exp.css" lang="css"></style>