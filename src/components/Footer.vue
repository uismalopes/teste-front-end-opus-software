<template>
    <footer id="footer--page">
        <section class="container">
            <p class="text--description">
                Este é um teste prático de Front-end onde o intuito é apenas avaliar seu código. 
                Não iremos utilizá-los para outros fins.
            </p>
            <div class="row">
                <div class="column-12 column-lg-4 mb-5">
                    <div class="row">
                        <div class="column-12 column-lg-5">
                            <span class="title">tecnologias</span>
                        </div>
                        <div class="column-12 column-lg-7">
                            <ul>
                                <li>HTML5 *</li>
                                <li>CSS3 *</li>
                                <li>Media queries *</li>
                                <li>HTML5 *</li>
                                <li>Javascript *</li>
                                <li>SASS ou LESS *</li>
                                <li>Angular ou Vue *</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="column-12 column-lg-4 mb-5">
                    <div class="row">
                        <div class="column-12 column-lg-5">
                            <span class="title">diferenciais</span>
                        </div>
                        <div class="column-12 column-lg-7">
                            <ul>
                                <li>Uso da API da Marvel</li>
                                <li>Código limpo e organizado</li>
                                <li>Otimização das imagens</li>
                                <li>Minificação HTML, CSS e JS</li>
                                <li>Performance</li>
                                <li>Uso do Git</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="column-12 column-lg-4 mb-5">
                    <div class="row">
                        <div class="column-12 column-lg-5">
                            <span class="title">observações</span>
                        </div>
                        <div class="column-12 column-lg-7">
                            <ul>
                                <li>Descritivo do teste estará no github assim como
                                    as imagens e os links das fonts
                                </li>
                                <li class="alert">
                                    * itens obrigatórios
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--  -->
        <section class="footer--direitos">
            <div class="container">
                <div class="row v-center">
                    <div class="column-12 column-lg-10 title--direitos">
                        uso da api e de conteúdo da marvel pelos direitos: &copy; 2018 Marvel
                    </div>
                    <div class="column-12 column-lg-2">
                        <div class="row v-center">
                            <div class="column-9">
                                <a href="https://www.opus-software.com.br/" target="_blank">
                                    opus-software.com.br
                                </a>
                            </div>
                            <div class="column-3">
                                <a href="#upPage" id="upPage" @click="scrollTop">
                                    &UpArrow;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--  -->
    </footer>
</template>

<script>
export default {
    name:"Footer",
    methods:{
        scrollTop: (e)=>{
            e.preventDefault();
            // FALA PARA O NAVEGAR QUE CONTEM UMA ANIMACAO
            const requestAnimationFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame;
            // REFERENCIA DE ONDE IRA PARTIR A ANIMACAO
            const start = window.scrollY || window.pageYOffset;
            const time = Date.now();
            // ALVO PARA ONDE A ANIMACAO IRA CORRER
            const to = document.body.scrollTop;
            // DURACAO DA ANIMACAO
            const duration = Math.abs(start - to) / 3;
            const easeOutQuart = (t)=> { return 1-(--t)*t*t*t };
            // FAZ A ANIMACAO POR PARTES
            (function step(){
                const dx = Math.min(1, (Date.now() - time) / duration);
                const pos = start + (to - start) * easeOutQuart(dx);
                window.scrollTo(0,pos);
                if(dx < 1){
                    requestAnimationFrame(step);
                }
            })();
        }
    }
}
</script>
