<template>
  <div id="app">
    <Banner msg="Teste front-end opus software"/>
    <main>
      <!-- FOOTER BANNERS -->
      <FooterBanner/>
      <!-- COMICS -->
      <section class="comicsContent">
        <div class="container">
          <div class="row v-center mb-5">
              <div class="column-12 column-lg-2">
                  <span class="titulo--comics">Comics</span>
              </div>
              <div class="column-12 column-lg-10">
                  <a href="https://gateway.marvel.com/v1/public/comics" target="_blank" class="box--links">
                  https://gateway.marvel.com/v1/public/comics
                  </a>
              </div>
          </div>
          <div class="row">
            <div class="column-12 column-lg-5 m-50" v-for="quadrinho in pageComicsColOne" :key="quadrinho.id">
                <Comics 
                :title="quadrinho.title"
                :description="quadrinho.description"
                :image="getImage(quadrinho,'detail')" />
                <a href="" class="btn--comics">see more</a>
            </div>
            <div class="column-12 column-lg-6">
                <div class="row bg-dark h-center">
                  <div v-for="(quadrinho,key) in pageComicsColTwo" 
                  :key="quadrinho.id" :class="{ 'column-12 column-lg-12' : (key == 2), 'mb-5 column-12 column-lg-5 font--small': (key < 2) }">
                        <Comics 
                        :title="quadrinho.title"
                        :description="quadrinho.description"
                        :image="getImage(quadrinho,'portrait_incredible')"
                        :mountBox="(key == 2) ? true : false"
                        />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <!-- SERIES  -->
      <Series :series="series" />
      <!--  -->
    </main>
    <Footer />
  </div>
</template>

<script>
import comicsApi from './services/comicsApi'
import Banner from './components/Banner.vue'
import FooterBanner from './components/FooterBanner'
import Comics from './components/Comics.vue'
import Series from './components/Series.vue'
import Footer from './components/Footer.vue'
// LEMBRAR NAO FAZER MUITAS REQUISIOES NA API
export default {
  name: 'app',
  components: {
    Banner,
    FooterBanner,
    Comics,
    Series,
    Footer,
  },
  data(){
    return{
      pageComicsColTwo: [],
      pageComicsColOne: [],
      series: [],
      idQuadrinhos: [15808,22582,1332,59560],
      idSeries: [13379,489,19244,19501,7520,20018,1251,1253],
    }
  },
  created(){
      // // comics column 1
      comicsApi.getApi(this.idQuadrinhos[0],res=>{
        const { data } = res
        this.pageComicsColOne.push(data.data.results[0])
      })
      // COMICS COLUMN 2
      comicsApi.getApi(this.idQuadrinhos[1],res=>{
        const {data} = res
        this.pageComicsColTwo.push(data.data.results[0])
      })
      comicsApi.getApi(this.idQuadrinhos[2],res=>{
        const {data} = res
        this.pageComicsColTwo.push(data.data.results[0])
      })
      comicsApi.getApi(this.idQuadrinhos[3],res=>{
        const {data} = res
        this.pageComicsColTwo.push(data.data.results[0])
      })
      this.idSeries.filter(id=>{
          comicsApi.getSeries(id,res=>{
            const { data } = res
            return this.series.push(data.data.results[0])
          })
      })
  },
  methods: {
    getImage: function(comic,size){
        if (comic.images.length) {
            return `${comic.images[0].path}/${size}.${comic.images[0].extension}`;
        }
    }
  }
}
</script>