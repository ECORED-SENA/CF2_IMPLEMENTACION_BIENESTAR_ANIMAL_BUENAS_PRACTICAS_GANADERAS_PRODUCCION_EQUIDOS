<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Gestión ambiental en la producción equina
    
    .row.align-items-center
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img98.png', alt="" ).m-auto
      .col-xl
        p.mb-3 La gestión ambiental en sistemas equinos es el conjunto de acciones orientadas a prevenir, mitigar y corregir los impactos negativos sobre los recursos naturales que pueden derivarse de la operación de predios equinos: criaderos, caballerizas, centros de entrenamiento, escuelas ecuestres, unidades montadas, empresas de turismo, entre otros.
        .row.align-items-center.mb-5.m-0.style___box_13.ajuste___box_13(data-aos="zoom-in")
          .col-xl
            p.mb-0 En Colombia, esta gestión ambiental debe cumplir con las disposiciones del <strong>Sistema Nacional Ambiental (SINA)</strong> y las <strong>exigencias de certificación BPG/BPE</strong>, promoviendo una producción sostenible que favorezca tanto el bienestar animal como la conservación de los ecosistemas.
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img99.jpg', alt='').m-auto

    <!-- BLOQUE 1 -->
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Estrategias de uso sostenible de recursos naturales

    p.mb-5 El uso sostenible de recursos implica utilizarlos de manera responsable, asegurando su conservación para las generaciones futuras. En los predios equinos, esto se traduce en prácticas de manejo eficiente de suelo, agua, energía y forraje.

    .fondo___carrusel
      .px-5
        .row.align-items-center
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img100.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img101.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Suelo
                p.mb-0 Rotación de potreros, evitar sobrepastoreo, recuperación de áreas degradadas con especies nativas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img102.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Forrajes y alimento
                p.mb-0 Producción local de pasturas, uso de especies adaptadas, implementación de sistemas silvopastoriles.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img103.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Energía
                p.mb-0 Energía solar para iluminación y bombeo; reducción del consumo eléctrico convencional.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img104.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Agroinsumos
                p.mb-0 Uso limitado de agroquímicos; preferencia por abonos orgánicos del compostaje de estiércol.

        <!-- BLOQUE 2 -->
        Separador
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Establecimiento de barreras vivas y árboles nativos

    .fondo___img_4
      .px-5

        p.mb-5 Las barreras vivas cumplen funciones de protección ambiental y bienestar animal. Reducen el viento, ofrecen sombra, estabilizan el suelo y enriquecen la biodiversidad local. Las funciones ecológicas y prácticas de las barreras vivas son:

        .row.justify-content-center
          .col-xl-10.col-md-9
            .row.justify-content-center.align-items-center
              .col-xl-7
                .row.align-items-center.m-0.mb-3.style___box_11.ajuste___box_11_1(data-aos="zoom-in")
                  .col-xl-auto.style___box_12.ajuste___box_12_3(data-aos="fade-right")
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img105.svg', alt='').m-auto
                  .col-xl
                    h5.mb-0 Regulación térmica y sombra
                    p.mb-0 Sembrar especies nativas como guayacán, nogal cafetero, guamo o acacia forrajera en perímetros y potreros.
                .row.align-items-center.m-0.mb-3.style___box_11.ajuste___box_11_1(data-aos="zoom-in")
                  .col-xl-auto.style___box_12.ajuste___box_12_3.ajuste___box_12_4(data-aos="fade-right")
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img106.svg', alt='').m-auto
                  .col-xl
                    h5.mb-0 Conservación de biodiversidad
                    p.mb-0 Restaurar zonas de ronda hídrica (15-30 m); usar plantas que favorezcan polinizadores y aves.
                .row.align-items-center.m-0.style___box_11.ajuste___box_11_1(data-aos="zoom-in")
                  .col-xl-auto.style___box_12.ajuste___box_12_3.ajuste___box_12_4(data-aos="fade-right")
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img107.svg', alt='').m-auto
                  .col-xl
                    h5.mb-0 Seguridad animal y del entorno
                    p.mb-0 Evitar especies tóxicas como manzanillo o lechero africano.
              .col-xl-5(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img108.png', alt='').m-auto

        <!-- BLOQUE 3 -->
        Separador
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Manejo de estiércol y residuos orgánicos

        p.mb-5 El estiércol puede representar un contaminante ambiental o un insumo valioso, dependiendo de su manejo. En las BPE, se exige un sistema de gestión orgánica eficiente. Las <strong>buenas prácticas de manejo son</strong>:

        .row.align-items-center.justify-content-center
          .col-xl-2.col-md-9(data-aos="fade-right")
            .row
              .col-xl(data-aos="zoom-in")
                .style___box_16.h-100
                  .row.justify-content-center.mb-3
                    .col-12
                      figure.mb-2(data-aos="fade-right")
                        img(src='@/assets/curso/temas/img109.svg', alt="" style="max-width: 90px").m-auto
                    h5.text-center Recolección diaria y almacenamiento seguro
                    p.mb-0 Reducir vectores y olores.
          .col-xl-2.col-md-9(data-aos="fade-right").espacio___movil_3
            .row
              .col-xl(data-aos="zoom-in")
                .style___box_16.h-100
                  .row.justify-content-center.mb-3
                    .col-12
                      figure.mb-2(data-aos="fade-right")
                        img(src='@/assets/curso/temas/img110.svg', alt="" style="max-width: 90px").m-auto
                    h5.text-center Compostaje en áreas adecuadas
                    p.mb-0 Generar abono, eliminar patógenos, cerrar el ciclo de nutrientes.
          .col-xl-4(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img111.png', alt='' ).m-auto
          .col-xl-2.col-md-9(data-aos="fade-left").espacio___movil_3
            .row
              .col-xl(data-aos="zoom-in")
                .style___box_16.h-100
                  .row.justify-content-center.mb-3
                    .col-12
                      figure.mb-2(data-aos="fade-left")
                        img(src='@/assets/curso/temas/img112.svg', alt="" style="max-width: 90px").m-auto
                    h5.text-center Separación de residuos de animales enfermos
                    p.mb-0 Prevenir diseminación de enfermedades.
          .col-xl-2.col-md-9(data-aos="fade-left").espacio___movil_3
            .row
              .col-xl(data-aos="zoom-in")
                .style___box_16.h-100
                  .row.justify-content-center.mb-3
                    .col-12
                      figure.mb-2(data-aos="fade-left")
                        img(src='@/assets/curso/temas/img113.svg', alt="" style="max-width: 90px").m-auto
                    h5.text-center Evitar acumulación en fuentes hídricas
                    p.mb-0 Proteger la calidad del agua.

        <!-- BLOQUE 4 -->
        Separador
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Gestión de residuos peligrosos (RESPEL)

        p.mb-5 Los residuos peligrosos generados en actividades veterinarias y de mantenimiento deben manejarse según las normas nacionales para evitar daños ambientales y a la salud. Las <strong>categorías de RESPEL comunes en producción equina son</strong>:

        .row.justify-content-center.mb-0
          .col-xl-4.col-md-9(data-aos="fade-right").espacio___movil_3
            .tarjeta--boton_1.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.d-none.d-xl-block
                    img(src='@/assets/curso/temas/img114.png', alt="" )
              h5.text-center Agujas, jeringas, frascos, medicamentos vencidos
              p.mb-0 Almacenamiento en contenedores rígidos, rotulados y separados.

          .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_3
            .tarjeta--boton_1.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.d-none.d-xl-block
                    img(src='@/assets/curso/temas/img115.png', alt="")
              h5.text-center Material quirúrgico, plásticos contaminados
              p.mb-0 Recolección selectiva y entrega a gestores autorizados.
          
          .col-xl-4.col-md-9(data-aos="fade-left").espacio___movil_3
            .tarjeta--boton_1.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.d-none.d-xl-block
                    img(src='@/assets/curso/temas/img116.png', alt="")
              h5.text-center Lubricantes, desinfectantes, productos químicos
              p.mb-0 Registro de inventario, almacenamiento seguro y disposición conforme a la Ley 1252 de 2008.

        <!-- BLOQUE 5 -->
        Separador
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Prácticas de conservación y protección de la biodiversidad
        
        p.mb-5 Una producción equina responsable puede ser compatible con la conservación de la biodiversidad si se aplican medidas adecuadas en el uso del suelo, las especies vegetales y el manejo de fauna. Las <strong>estrategias de conservación ambiental son</strong>:

        .row.align-items-center.mb-0
          .col-xl
            TabsA.color-acento-botones.mb-0(data-aos="zoom-in")
              .tarjeta.color-acento-botones--borde.p-4(titulo="Restauración ecológica de áreas degradadas")
                .row.align-items-center
                  .col-lg
                    h4 Restauración ecológica de áreas degradadas
                    p.mb-3 Recuperar corredores biológicos, proteger fuentes de agua.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Uso de cercas vivas y árboles nativos")
                .row.align-items-center
                  .col-lg
                    h4 Uso de cercas vivas y árboles nativos
                    p.mb-3 Favorecer aves, insectos benéficos y ofrecer sombra natural.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Control de fauna invasora")
                .row.align-items-center
                  .col-lg
                    h4 Control de fauna invasora
                    p.mb-3 Evitar impactos negativos sobre especies locales.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Protección de fauna silvestre")
                .row.align-items-center
                  .col-lg
                    h4 Protección de fauna silvestre
                    p.mb-3 No realizar caza; permitir coexistencia armónica.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Pastoreo rotacional")
                .row.align-items-center
                  .col-lg
                    h4 Pastoreo rotacional
                    p.mb-3 Proteger la cobertura vegetal, evitar compactación y erosión.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img117.png", alt="" ).m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
