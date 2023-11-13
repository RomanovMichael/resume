<template>
    <div class="page home-page flex --just-space --align-stretch --nowrap">
        <Header/>
        <div class="page__content pb-80 --z-1">
            <About/>
            <Exp/>
            <Projects/>
        </div>
    </div>
</template>

<script>

export default {
   methods: {}
}
</script>

<style>
.page__content {
    max-width: 45rem;
}

.home-page  {
    padding-left: 13.5rem;
    padding-right: 13.5rem;
}

@media screen and (max-width:1680px) {
    .home-page  {
        padding-left: 8.5rem;
        padding-right: 8.5rem;
    }
}

@media screen and (max-width:1580px) {
    .home-page  {
        padding-left: 6.5rem;
        padding-right: 6.5rem;
    }
}

@media screen and (max-width:1440px) {
    .home-page  {
        padding-left: 3.5rem;
        padding-right: 3.5rem;
    }
}

@media screen and (max-width:1199px) {
    .page__content {
        max-width: 35rem;
    }

    .home-page  {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}


@media screen and (max-width:991px) {
    .home-page {
      flex-direction: column;
    }

    .page__content {
        max-width: 100%;
    }
}


@media screen and (max-width:640px) {
    .home-page {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
    }
}

</style>
