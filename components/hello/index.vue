<template>
    <section class="hello">
        <div class="hello__container center-wrap flex --just-center --align-center"> 

            <div class="main-tile px-48 pt-48 pb-48">
                <div class="main-tile__content flex --direction-column">
                    <div class="hello__title-wrap">
                        <h1 class="hello__title "><span>Только натуральный</span> <br>перманентный макияж</h1>
                        <div class="hello__subtitle p --xl mt-8 mb-32"><span>Красивые</span> брови, губы и веки <span>в Крыму</span></div>
                    </div>

                    <a href="#" target="_blank" class="main-tile__btn btn">Записаться</a>
                    <!-- <div class="main-tile__form">
                        <Form method="post">
                            <input type="hidden" name="type" value="callback">
                            <div class="grid --temp-col-2 --gap-24">
                                <div class="input__wrap main-tile__input-wrap">
                                    <div class="input__error">error</div>
                                    <input name="name" class="main-tile__input input --fill" type="text" placeholder="Ваше имя:">
                                </div>
                                <div class="input__wrap main-tile__input-wrap">
                                    <div class="input__error">error</div>
                                    <FormPhoneInput class="main-tile__input input --fill" name="tel"/>
                                </div>
                            </div>
                            <div class="grid --temp-col-2 --gap-24 mt-24">
                                <div class="flex --align-center">
                                    <label class="checkbox main-tile__checkbox"> 
                                        <input type="checkbox" checked="checked" required name="confirm">
                                        <div class="flex --align-center">
                                            <div class="checkbox__trigger"></div>
                                            <div class="checkbox__label p --xs ml-16">
                                                Даю согласие на обработку <br> <a class="" @click.prevent="$store.dispatch('popup', 'policy')"> персональных данных</a>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <button type="submit" class="main-tile__btn btn">
                                    <span>Отправить</span>
                                </button>
                            </div>
                        </Form>
    	            </div> -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>

    export default { 
        methods: {
        }
 
    }

</script>
<style src="~/components/hello/__hello.css" lang="css"></style>