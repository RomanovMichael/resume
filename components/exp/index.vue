<template>
    <section id="exp" class="exp section pt-80">
        <div class="exp__label section__label">Опыт</div>
        <div class="exp__list">
            <div class="exp__item transition-all --just-space mt-16" v-for="item in expArr" :key="item.id">
                <div class="exp__item-terms" v-if="item.term" v-html="item.term"></div>
                <div class="exp__item-content">
                    <a target="_blank" v-if="item.name" :href="item.name.url" class="exp__item-name transition-all flex --align-end">
                        {{item.name.title}}
                        <span class="exp__item-name-thumb transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                        </span>    
                    </a>
                    <p class="exp__item-desc mt-8" v-if="item.desc" v-html="item.desc"></p>
                    <div class="exp__item-links mt-8" v-if="item.links">
                        <Links :linksArr="item.links"/>
                    </div>
                    <div class="exp__item-tags mt-16" v-if="item.tags">
                        <Tags :tagsArr="item.tags"/>
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
            expArr: [
                {
                    id: 1,
                    term: 'Сен 2022 — Окт 2023',
                    name: {
                        title: 'Web-разработчик · 3owls',
                        url: 'https://3owls.ru'
                    },
                    desc: 'Разработка лендингов и многостраничных сайтов.  <br>Поддержка существующих проектов.  Взаимодействие с другими командами. Реализация встраиваемых микроприложений и виджетов.',
                    links: [
                        {
                            text: 'chessclub.ae',
                            url: 'https://chessclub.ae'
                        },
                        {
                            text: 'paradiso-pure.com',
                            url: 'https://paradiso-pure.com/'
                        },
                        {
                            text: 'pt.premiumholding.com',
                            url: 'https://pt.premiumholding.com/'
                        }
                    ],
                    tags: ['JavaScript', 'Vue', 'SCSS', 'Nuxt', 'jQuery', 'PHP', 'Bitrix']
                },
                {
                    id: 2,
                    term: 'Сен 2023 — Наст.',
                    name: {
                        title: 'Наставник · Loftschool',
                        url: 'https://loftschool.com'
                    },
                    desc: 'Объясняя другим, лучше понимаешь сам. Счастье - помогать людям, закрепляя знания и прокачивая навыки.',
                    links: [
                        {
                            text: 'Истории выпускников LoftSchool | Михаил Романов',
                            url: 'https://loftschool.com/blog/posts/kak-vizhat-maksimum-iz-obucheniya'
                        }
                    ],
                    tags: ['JavaScript']
                }
            ]
        }
    }    
}
</script>

<style src="~/components/exp/__exp.css" lang="css"></style>