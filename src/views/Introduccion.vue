<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/intro/img1.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        .row.justify-content-center.mb-3
          .col-lg-auto
            figure
              img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Este componente formativo presenta la administración como eje central de la actividad organizacional, haciendo énfasis en la planeación estratégica como pilar fundamental para la proyección y el éxito de las organizaciones. A partir de ese fundamento, se adentra en el origen y la evolución de la economía solidaria, un modelo que surgió en el siglo XIX como estrategia de supervivencia, apoyo mutuo y trabajo mancomunado, y que hoy se constituye en una alternativa que ofrece múltiples oportunidades para el desarrollo económico, la asociatividad y la promoción de alianzas colectivas capaces de alcanzar objetivos de bien común.
        .tarjeta-bg01.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/temas/intro/img2.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 El propósito de este componente es fortalecer las competencias en economía solidaria, brindando un panorama desde su origen hasta los órganos que ejercen su vigilancia. El desarrollo de estas temáticas se aborda mediante un enfoque teórico-práctico que permite al aprendiz comprender los fundamentos, aplicar metodologías de análisis e implementar estrategias para el diseño, validación y uso de los indicadores de acuerdo con el tipo de actividad y de organización empresarial.
    p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1401" height="788" src="https://www.youtube.com/embed/iX-l9KidKpg" title="Generalidades de las organizaciones de economía solidaria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
