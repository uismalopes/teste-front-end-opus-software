<template>
    <header class="bannerHome">
      <div class="container">
        <span class="titulo">&copy; 2018 Marvel</span>
      </div>
      <div class="tituloBanner">
        <div class="container">
          <h1 class="msgBanner">{{ msg }}</h1>
        </div>
      </div>
      <!-- SCROLL -->
        <div class="scroll">
          <div class="container">
            <span>
              scroll
            </span>
          </div>
        </div>
      <!--  -->
    </header>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    msg: String
  }
}
</script>
