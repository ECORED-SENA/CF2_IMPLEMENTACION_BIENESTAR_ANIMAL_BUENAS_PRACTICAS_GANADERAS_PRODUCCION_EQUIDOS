<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Bienestar animal en los équidos

    .fondo___img_2
      .px-5

        .row.align-items-center.m-0
          .col-xl
            p.mb-4 En Colombia, el <strong>bienestar animal</strong> es un principio con respaldo legal, técnico y ético, aplicable a todas las actividades que involucren a équidos (caballos, mulas, asnos y burdéganos). Los lineamientos vigentes exigen a criaderos, fincas, escuelas de equitación, unidades montadas y empresas turísticas cumplir condiciones mínimas que garanticen el bienestar físico y emocional de los animales. Las normas fundamentales que sustentan este principio son:
            .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
              .col-xl-auto.style___box_4.d-none.d-xl-block(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img2.svg', alt="" ).m-auto
              .col-xl
                .style___box_4_1(data-aos="fade-left")
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Ley 1774 de 2016</strong>: reconoce a los animales como seres sintientes, que deben ser protegidos del sufrimiento y el dolor.</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Resolución ICA 7953 de 2017</strong>: establece el bienestar como criterio obligatorio para obtener la certificación BPG en équidos.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Resolución 136 de 2020 (MinAgricultura)</strong>: adopta un Manual de Condiciones de Bienestar Animal armonizado con los estándares de la WOAH.</li>
                  </ul>
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img3.png', alt="" ).m-auto
    
        <!-- BLOQUE 1 -->
        Separador
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Concepto de bienestar animal
        
        p.mb-5 El concepto de bienestar animal va más allá de la ausencia de enfermedad. Incluye el <strong>estado físico y mental del animal</strong>, considerando factores como la nutrición, el entorno, el comportamiento y la relación con los humanos. En Colombia, este enfoque se complementa con lo establecido por la <strong>Ley 1774</strong>, que obliga a proteger a los animales de:

        .row.justify-content-center.mb-5
          .col-xl-9.col-md-9
            .row.align-items-center
              .col-xl
                .row.align-items-center.m-0.mb-3.style___box_5(data-aos="zoom-in")
                  .col-xl-auto(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/img4.svg', alt="" style="max-width: 70px").m-auto
                  .col-xl.espacio___movil_3
                    h5.mb-0 Sufrimiento físico (dolor, lesiones, enfermedades no tratadas).
                .row.align-items-center.m-0.mb-3.style___box_5(data-aos="zoom-in")
                  .col-xl-auto(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/img5.svg', alt="" style="max-width: 70px").m-auto
                  .col-xl.espacio___movil_3
                    h5.mb-0 Sufrimiento emocional (miedo, estrés, angustia).
                .row.align-items-center.m-0.style___box_5(data-aos="zoom-in")
                  .col-xl-auto(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/img6.svg', alt="" style="max-width: 70px").m-auto
                  .col-xl.espacio___movil_3
                    h5.mb-0 Malos tratos y negligencia en el manejo.
              .col-xl-auto(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img7.png', alt="").m-auto
        
        p.mb-5 Aplicado a los équidos, implica cumplir con los siguientes aspectos:

        .row.align-items-center
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img9.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Estado sanitario adecuado
                p.mb-0 Caballos libres de enfermedades prevenibles, con planes de vacunación, desparasitación y vigilancia clínica permanente.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Condiciones físicas apropiadas
                p.mb-0 Alojamiento seguro, ventilado, con cama seca, dimensiones adecuadas y acceso continuo a agua limpia y alimento de calidad.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Bienestar mental y conductual
                p.mb-0 Libertad para moverse, socializar, pastorear y entrenarse sin miedo ni maltrato, de acuerdo con sus necesidades etológicas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img12.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Relación humano-equino responsable
                p.mb-0 Personal capacitado, uso de equipos adecuados, buena comunicación, manejo sin castigos físicos ni métodos crueles.

        <!-- BLOQUE 2 -->
        Separador
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Las cinco libertades del bienestar animal

        p.mb-5 Las <strong>Cinco Libertades</strong> fueron formuladas por el <em>Farm Animal Welfare Council (FAWC)</em> y adoptadas por la <strong>WOAH</strong>, convirtiéndose en el marco técnico de referencia a nivel mundial. En Colombia, están incorporadas en la <strong>Resolución ICA 7953 de 2017</strong> y en la <strong>Resolución 136 de 2020</strong>, y son de obligatorio cumplimiento en todos los sistemas que utilicen équidos. A continuación, se presenta cada libertad, su definición y su aplicación práctica en el contexto colombiano:

        <!-- SLYDER IMAGENES -->
        .fondo___slider.mb-0
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Hambre, sed y desnutrición
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Agua potable disponible en pesebreras, potreros y durante el transporte.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Dieta basada en forraje de calidad (pasto, heno), complementada con concentrados.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Evaluaciones periódicas de condición corporal.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Ajustes dietarios según clima, edad, peso y nivel de actividad.</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img14.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Incomodidad física o térmica
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Pesebreras de al menos 3x3 m, con buena ventilación e iluminación.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Cama limpia (viruta, cascarilla, heno), renovada regularmente.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Sombras en potreros y techos para proteger de lluvia o sol extremo.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Prevención de golpes térmicos en zonas cálidas o frías.</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img15.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Dolor, lesión o enfermedad
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Plan sanitario aprobado por veterinario, con vacunación y registro de tratamientos.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Herrado o recorte regular de cascos.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Atención inmediata a cólicos, heridas o signos de dolor.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Áreas de aislamiento para animales enfermos o recién ingresados.</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img16.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Expresar su comportamiento natural
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Espacios para caminar, trotar, jugar y echarse.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Contacto social con otros équidos (evitar aislamiento crónico).</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Acceso regular a potreros.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Entrenamiento que respete su naturaleza social, sensible y gregaria.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Prevención de estereotipias (aerofagia, balanceo, caminar en círculos, morder barandas).</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img17.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Miedo y angustia
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Prohibición del maltrato físico e instrumentos que causen dolor.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Capacitación del personal en manejo etológico y refuerzo positivo.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Reducción de gritos, ruidos bruscos o manejo agresivo.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Diseño de instalaciones amigables (rampas seguras, pisos antideslizantes, buena iluminación).</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img18.png', alt='' style="max-width: 500px").m-auto

        <!-- BLOQUE 3 -->
        Separador
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Prácticas aplicadas al manejo de équidos

        p.mb-5 Las prácticas descritas a continuación son aquellas que el <strong>ICA</strong> y otras entidades reguladoras revisan al evaluar el cumplimiento de las <strong>Buenas Prácticas Equinas (BPE)</strong> en predios de producción, criaderos, escuelas de equitación, unidades montadas y empresas de turismo. Estas prácticas buscan asegurar el bienestar animal desde una perspectiva integral, incluyendo nutrición, confort, comportamiento, salud y transporte.

        <!-- TITULOS TERCER NIVEL -->
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
          .col
            h3 Alimentación, descanso y confort
        
        p.mb-5 Estas prácticas se centran en satisfacer las <strong>necesidades fisiológicas básicas</strong> de los équidos, como una alimentación adecuada, descanso suficiente y un entorno físico seguro.

        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Alimentación")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img20.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Alimentación
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Dieta basada en forraje (praderas o heno) según peso y carga de trabajo.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Uso responsable de concentrados en raciones pequeñas y sin cambios bruscos.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Suplementación mineral y vitamínica bajo recomendación veterinaria.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Agua potable disponible 24/7 en recipientes seguros y limpios.</li>
                </ul>

          .py-3.py-md-4(titulo="Descanso y confort")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img21.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Descanso y confort
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Rutinas que incluyan tiempo de descanso sin trabajo.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Cama suficiente que permita recostarse y levantarse con facilidad.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Control de ruidos y luces intensas durante la noche.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Revisión de instalaciones para eliminar elementos peligrosos (clavos, bordes filosos).</li>
                </ul>
        
        <!-- TITULOS TERCER NIVEL -->
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
          .col
            h3 Manejo etológico y entrenamiento sin maltrato
        
        p.mb-5 El <strong>manejo etológico</strong> se basa en comprender el comportamiento natural del caballo y utilizar métodos que respeten su psicología. Esta visión es clave para garantizar el bienestar mental y emocional.

        .row.mb-5
          .col-lg-4(data-aos="zoom-in")
            .tarjeta--boton.p-5.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img22.svg', alt="" style="max-width: 90px").m-auto
              h3.text-center Entrenamiento respetuoso
              <ul class="fa-ul estilo___ul mb-0">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Uso de refuerzo positivo (premios, caricias, liberación de presión).</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Sesiones cortas, progresivas y coherentes, evitando sobreentrenamiento.</li>
              </ul>
          .col-lg-4(data-aos="zoom-in").espacio___movil_3
            .tarjeta--boton.p-5.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img23.svg', alt="" style="max-width: 90px").m-auto
              h3.text-center Equipamiento adecuado
              <ul class="fa-ul estilo___ul mb-0">
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Frenos, sillas y cinchas ajustados correctamente, sin causar dolor o lesiones.</li>
              </ul>
          .col-lg-4(data-aos="zoom-in").espacio___movil_3
            .tarjeta--boton.p-5.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img24.svg', alt="" style="max-width: 90px").m-auto
              h3.text-center Prohibición de maltrato
              <ul class="fa-ul estilo___ul mb-0">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>No se permiten métodos que generen sufrimiento, según la Ley 1774 y la Resolución 136 de 2020.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Reglamentos de gremios como <strong>FEDEQUINOS</strong> sancionan conductas inadecuadas en pistas, e incluyen veedores de bienestar animal.</li>
              </ul>
        
        <!-- TITULOS TERCER NIVEL -->
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
          .col
            h3 Transporte y participación en eventos
        
        p.mb-5 El transporte y los eventos públicos (ferias, concursos, cabalgatas) representan momentos críticos para el bienestar de los équidos. Por ello, se deben cumplir condiciones mínimas para proteger su integridad física y emocional.

        <!-- SLYDER IMAGENES -->
        .fondo___slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Transporte
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Cumplir directrices de la <em>WOAH</em> y exigencias del ICA y MinAgricultura.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Vehículos con rampas antideslizantes, ventilación, espacio adecuado y techo.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Proveer agua y descansos en viajes largos.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Prohibido transportar animales enfermos o en gestación avanzada (excepto con aval veterinario).</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img138.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Eventos (ferias, concursos, cabalgatas)
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Revisar antes del evento: condición corporal, estado podal, vacunas y pruebas sanitarias exigidas.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Asegurar disponibilidad de agua, sombra y zonas de descanso.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Controlar tiempos en pista y espera en corrales.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Contar con médico veterinario y veedores de bienestar, como indica la Resolución 136 de 2020.</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img139.png', alt='' style="max-width: 500px").m-auto

        <!-- TITULOS TERCER NIVEL -->
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
          .col
            h3 Supervisión veterinaria y control del estrés
        
        p.mb-5 La participación activa de un <strong>médico veterinario</strong> es obligatoria en sistemas de producción equina certificados. Su labor incluye prevención, diagnóstico, capacitación del personal y trazabilidad sanitaria.

        TabsA.color-acento-botones.mb-0(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Plan sanitario")
            .row.align-items-center
              .col-lg
                h4 Plan sanitario
                p.mb-3 Diseñar y actualizar protocolos de vacunación, desparasitación, control de vectores y pruebas diagnósticas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="hequeos periódicos")
            .row.align-items-center
              .col-lg
                h4 Chequeos periódicos
                p.mb-3 Evaluar dientes, cascos, condición corporal, sistema respiratorio y cardiovascular.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Capacitación al personal")
            .row.align-items-center
              .col-lg
                h4 Capacitación al personal
                p.mb-3 Identificar signos de dolor y estrés: apatía, cambios de conducta, pérdida de apetito, sudoración excesiva, postura anormal, taquicardia.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Control del estrés")
            .row.align-items-center
              .col-lg
                h4 Control del estrés
                <ul class="fa-ul estilo___ul mb-3">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Ajustar cargas de trabajo.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Establecer densidad adecuada en pesebreras y potreros.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Minimizar ruidos, cambios bruscos de rutina y desplazamientos innecesarios.</li>
                </ul>
          .tarjeta.color-acento-botones--borde.p-4(titulo="Registros clínicos")
            .row.align-items-center
              .col-lg
                h4 Registros clínicos
                p.mb-3 Documentar todos los tratamientos: fecha, medicamento, dosis y responsable, cumpliendo con la trazabilidad exigida por el ICA.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
