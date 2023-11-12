<template>
    <div class="page home-page flex --just-space --align-stretch px-56 --nowrap">
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


@media screen and (max-width:1199px) {
    .page__content {
        max-width: 35rem;
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
