<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Seguridad y Salud en el Trabajo (SST) en instalaciones equinas

    .row.align-items-center.m-0.mb-5.style___box_10.ajuste___box_10(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img118.png', alt="").m-auto
      .col-xl
        p.mb-0 La seguridad y salud en el trabajo es un componente obligatorio en toda operación equina profesional, y su aplicación es esencial para prevenir accidentes, proteger al personal y garantizar ambientes laborales seguros. Dado el manejo de animales grandes y la interacción constante con herramientas y maquinaria, los centros ecuestres deben implementar medidas específicas de prevención, capacitación y control. En Colombia, la SST se rige por las normas del Ministerio de Trabajo y del Ministerio de Salud, y es exigida por el ICA en el marco de la certificación en Buenas Prácticas Ganaderas para équidos.

    <!-- BLOQUE 1 -->
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Concepto e importancia de la Seguridad y Salud en el Trabajo (SST)

    p.mb-5 La Seguridad y Salud en el Trabajo (SST) se define como el conjunto de medidas organizativas, técnicas, médicas y legales dirigidas a proteger la vida y la salud de los trabajadores. En el contexto equino, esto implica abordar riesgos asociados al manejo de animales, entornos físicos, herramientas y factores psicológicos.

    .row.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img119.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img120.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Riesgos biomecánicos
            p.mb-0 Posturas forzadas, levantamiento de peso (heno, sacos).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img121.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Riesgos locativos
            p.mb-0 Pisos resbalosos, espacios reducidos, iluminación deficiente.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img122.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Riesgos biológicos
            p.mb-0 Contacto con estiércol, hongos, insectos vectores.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img123.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Riesgos por manejo animal
            p.mb-0 Patadas, mordeduras, aplastamientos, escapes.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img124.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Riesgos psicosociales
            p.mb-0 Sobrecarga laboral, jornadas extensas, estrés.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img125.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Riesgos públicos
            p.mb-0 Presencia de animales sueltos, acceso de extraños.
    
    p.mb-0 La implementación de un SG-SST (Sistema de Gestión de SST) no solo es obligatoria por ley, sino que protege al personal y mejora el desempeño productivo y sanitario del predio.

    <!-- BLOQUE 2 -->
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Principios de prevención de riesgos laborales
    
    .fondo___img_3
      .px-5

        p.mb-5 A continuación, se presenta un pódcast  que expone los principios fundamentales de la prevención de riesgos laborales en instalaciones equinas, con énfasis en el manejo seguro de animales y equipos, la ergonomía y el uso adecuado de elementos de protección personal.

        <!-- PODCAST -->
        .row.align-items-center.m-0
          .col-xl
            .row.align-items-center.style___box_17(data-aos="zoom-in")
              .col-auto
                figure.d-none.d-xl-block(data-aos="fade-right")
                  img(src="@/assets/curso/temas/img126.svg" style="max-width: 220px").m-auto
              .col
                h4.mb-4 Lo invitamos a escuchar el siguiente pódcast:
                TarjetaAudio.color-acento-contenido.mb-3(
                  texto="Principios de prevención de riesgos laborales"
                  :audio="require('@/assets/componentes/audios/Podcast_CF2_Implementacion_bienestar_animal_buenas_practicas_ganaderas_produccion_equidos.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
          .col-xl-auto
            figure(data-aos="fade-left").d-none.d-xl-block
              img(src="@/assets/curso/temas/img127.png" style="max-width: 400px").m-auto
        
        <!-- BLOQUE 3 -->
        Separador
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 Reglamentación del personal y normatividad vigente
        
        p.mb-5 Todo empleador, sin importar el tamaño de su operación, debe cumplir con la legislación en SST. Los predios con trabajadores permanentes o eventuales deben documentar e implementar un sistema de gestión completo.

        <!-- TITULOS TERCER NIVEL -->
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
          .col
            h3 Ley 1562 de 2012
        
        p.mb-5 Crea el Sistema de Gestión de SST como reemplazo del antiguo sistema de riesgos profesionales. Establece como obligatorio:

        .row.justify-content-center.mb-5
          .col-xl-10.col-md-9
            .row.align-items-center
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img128.png', alt='').m-auto
              .col-xl
                .style___box_18.mb-2(data-aos="fade-left")
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Análisis de peligros y evaluación de riesgos.</li>
                  </ul>
                .style___box_18.mb-2(data-aos="fade-left")
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Capacitaciones periódicas.</li>
                  </ul>
                .style___box_18.mb-2(data-aos="fade-left")
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Investigación de accidentes e incidentes.</li>
                  </ul>
                .style___box_18.mb-2(data-aos="fade-left")
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Supervisión del cumplimiento del uso de EPP.</li>
                  </ul>
                .style___box_18.mb-2(data-aos="fade-left")
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Aplicación en todos los entornos equinos formales.</li>
                  </ul>
        
        <!-- TITULOS TERCER NIVEL -->
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
          .col
            h3 Resolución 0312 de 2019
        
        p.mb-5 Establece los estándares mínimos del SG-SST, diferenciados por tamaño de empresa. Para predios equinos incluye:

    .row.align-items-center.mb-0
      .col-xl
        TabsA.color-acento-botones.mb-0(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde_2.p-4(titulo="Políticas de SST")
            .row.align-items-center
              .col-lg
                h4 Políticas de SST
                p.mb-3 Documento firmado por la gerencia.
          .tarjeta.color-acento-botones--borde_2.p-4(titulo="Matriz de riesgos")
            .row.align-items-center
              .col-lg
                h4 Matriz de riesgos
                p.mb-3 Evaluación de peligros específicos del entorno equino.
          .tarjeta.color-acento-botones--borde_2.p-4(titulo="Plan anual de capacitación")
            .row.align-items-center
              .col-lg
                h4 Plan anual de capacitación
                p.mb-3 Temas de manejo animal, ergonomía, primeros auxilios.
          .tarjeta.color-acento-botones--borde_2.p-4(titulo="Manual de EPP")
            .row.align-items-center
              .col-lg
                h4 Manual de EPP
                p.mb-3 Definición por rol (montador, herrero, veterinario, etc.).
          .tarjeta.color-acento-botones--borde_2.p-4(titulo="Comité COPASST")
            .row.align-items-center
              .col-lg
                h4 Comité COPASST
                p.mb-3 Comité paritario de seguridad en empresas con más de 10 trabajadores.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img129.png", alt="" ).m-auto

    <!-- BLOQUE 4 -->
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Prácticas de bienestar laboral y ambiente seguro

    p.mb-5 El bienestar laboral y las condiciones del entorno de trabajo son clave para reducir riesgos y aumentar la eficiencia. Las buenas prácticas recomendadas son:

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Espacios organizados y limpios
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Pasillos sin obstáculos, áreas secas y señalización clara.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Estiércol retirado diariamente para reducir resbalones y vectores.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img130.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Condiciones psicológicas saludables
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Tiempos de descanso adecuados.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Evitar presiones innecesarias o maltrato laboral.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Promover la comunicación y el respeto.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img131.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Protocolos de emergencia y primeros auxilios
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Botiquines en cada área operativa.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Capacitaciones básicas en primeros auxilios.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Rutas de evacuación señalizadas y conocidas.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img132.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 5 -->
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Gestión de personal y capacitación en manejo animal
    
    p.mb-5 La capacitación es una medida preventiva prioritaria en centros equinos, no solo para la seguridad humana, sino también para garantizar el bienestar de los animales. Los temas clave en la formación del personal:

    .fondo___carrusel
      .px-5
        .row.justify-content-center
          .col-xl-10
            .row.justify-content-center.mb-3
              .col-xl-6.col-md-9
                .row.align-items-center.m-0.style___box_11.ajuste___box_11_1(data-aos="zoom-in")
                  .col-xl-auto.style___box_12.ajuste___box_12_5(data-aos="fade-right")
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img133.svg', alt='').m-auto
                  .col-xl
                    h5.mb-0 Etología equina
                    p.mb-0 Identificar señales de estrés, miedo o agresión.
              .col-xl-6.col-md-9.espacio___movil_3
                .row.align-items-center.m-0.style___box_11.ajuste___box_11_1(data-aos="zoom-in")
                  .col-xl-auto.style___box_12_1.ajuste___box_12_5_1(data-aos="fade-right")
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img134.svg', alt='').m-auto
                  .col-xl
                    h5.mb-0 Técnicas de manejo seguro
                    p.mb-0 Correcto uso de cabestro, nudos, traslado de animales.
            
            .row.justify-content-center.mb-5
              .col-xl-6.col-md-9
                .row.align-items-center.m-0.style___box_11.ajuste___box_11_1(data-aos="zoom-in")
                  .col-xl-auto.style___box_12.ajuste___box_12_5_2(data-aos="fade-right")
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img135.svg', alt='').m-auto
                  .col-xl
                    h5.mb-0 Actuación en emergencias
                    p.mb-0 Qué hacer en caso de caída, pánico o escape.
              .col-xl-6.col-md-9.espacio___movil_3
                .row.align-items-center.m-0.style___box_11.ajuste___box_11_1(data-aos="zoom-in")
                  .col-xl-auto.style___box_12_1.ajuste___box_12_5_3(data-aos="fade-right")
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img136.svg', alt='').m-auto
                  .col-xl
                    h5.mb-0 Manejo de equipos
                    p.mb-0 Uso correcto de monturas, frenos, herramientas de herrería.
            
            p.mb-5 Los requisitos de documentación son:

            .row.align-items-center.justify-content-center
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img137.png', alt='').m-auto
              .col-xl.col-md-9
                .style___box_18.mb-2(data-aos="fade-left")
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Certificados de asistencia a capacitaciones.</li>
                  </ul>
                .style___box_18.mb-2(data-aos="fade-left")
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Registros de entrega de EPP.</li>
                  </ul>
                .style___box_18.mb-2(data-aos="fade-left")
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Manuales de funciones según perfil laboral.</li>
                  </ul>
                .style___box_18.mb-2(data-aos="fade-left")
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Registro e investigación de incidentes y accidentes.</li>
                  </ul>

</template>

<script>
export default {
  name: 'Tema6',
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
