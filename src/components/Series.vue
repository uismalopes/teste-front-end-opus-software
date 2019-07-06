<template>
    <section v-lazyload class="series--content">
        <div class="container">
            <div class="row v-center mb-5">
                <div class="column-12 column-lg-2">
                    <span class="titulo--series">series</span>
                </div>
                <div class="column-12 column-lg-10">
                    <a href="https://gateway.marvel.com/v1/public/series" target="_blank" class="box--links bg-white">
                    https://gateway.marvel.com/v1/public/series
                    </a>
                </div>
            </div>
            <!--  -->
            <div class="box--carrosel">
                <div class="box--series" v-for="(item,key) in series" :key="key">
                    <img :src="`${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`" class="img-responsive" alt="" />
                </div>
            </div>
            <!--  -->
        </div>
    </section>
</template>

<script>
export default {
    name:"Series",
    props: {
        series: Array,
    }
}
</script>
