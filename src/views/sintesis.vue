<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo presenta la administración como fundamento de toda organización, con énfasis en la planeación estratégica y el diagnóstico FODA como herramientas esenciales para la proyección y el logro de objetivos organizacionales. A partir de ese punto de partida, se adentra en el modelo de la economía solidaria: sus fundamentos históricos, sus valores y principios, su definición legal y su expresión en los distintos tipos de organizaciones que conforman el sector en Colombia.
    p El recorrido concluye con el marco normativo e institucional que regula y protege el sector, identificando las leyes, los decretos reglamentarios y los organismos de control y vigilancia que garantizan la legalidad y la sostenibilidad de las organizaciones solidarias. De este modo, el componente construye una comprensión integral del modelo solidario como alternativa económica capaz de articular esfuerzos colectivos, distribuir beneficios de manera equitativa y promover el bienestar de los asociados y sus comunidades. A continuación, el siguiente mapa conceptual organiza de manera visual los ejes temáticos del componente formativo y las relaciones que los articulan:

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
