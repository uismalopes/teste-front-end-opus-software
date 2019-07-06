<template>
    <div class="box--comics">
        <figure v-lazyload v-if="!mountBox">
            <img :src="image" alt="" class="img-responsive" />
            <figcaption>
                {{ title }}
            </figcaption>
        </figure>
        <div v-else class="row box--bottom">
            <div class="column-12 column-lg-5">
                <figure v-lazyload>
                    <img :src="image" alt="" class="img-reponsive" />
                </figure>
            </div>
            <div class="column-12 column-lg-6">
                <span>{{ title }}</span>
                <p v-html="description"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Comics",
    props:{
        title: String,
        image: String,
        description: String,
        mountBox: Boolean
    }
}
</script>
