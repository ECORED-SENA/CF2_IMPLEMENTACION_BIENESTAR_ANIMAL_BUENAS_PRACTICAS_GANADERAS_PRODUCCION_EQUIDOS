<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo___img_1
      .px-5

        .row.align-items-center.mb-4
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/intro/img2.png", alt="").m-auto
          .col-xl
            p.mb-3 La formación en bienestar animal y manejo integral de équidos busca que el aprendiz comprenda las bases técnicas, normativas y operativas que rigen la producción equina en Colombia. Este enfoque reconoce a los animales como seres sintientes y exige que toda unidad productiva adopte prácticas responsables que protejan su salud física y emocional.
            .row.align-items-center.style___box_1.m-0(data-aos="zoom-in")
              .col-xl
                p.mb-0 El componente integra los lineamientos establecidos por el ICA y otras entidades competentes, abordando aspectos clave como alojamiento, alimentación, sanidad, bioseguridad, manejo del hato, inocuidad y gestión ambiental. De esta forma, se articula la normativa vigente con acciones concretas que fortalecen la calidad de los sistemas productivos y la trazabilidad sanitaria.
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/intro/img3.jpg", alt="").m-auto

        .row.align-items-center.m-0.style___box_2(data-aos="zoom-in")
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/intro/img4.svg", alt="").m-auto
          .col-xl
            p.mb-0 Además, la formación promueve la capacidad del aprendiz para aplicar criterios técnicos en diversos contextos: fincas, criaderos, escuelas ecuestres o unidades turísticas. Con ello, se busca consolidar competencias que permitan implementar prácticas responsables, prevenir riesgos, mantener ambientes seguros y garantizar el cumplimiento de las Buenas Prácticas Ganaderas en producción equina.

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
