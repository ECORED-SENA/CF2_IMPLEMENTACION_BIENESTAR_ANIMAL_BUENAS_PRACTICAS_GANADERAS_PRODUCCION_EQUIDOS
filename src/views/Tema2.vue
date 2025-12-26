<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Manejo del hato equino

    .row.align-items-center.m-0
      .col-xl
        p.mb-4 El <strong>manejo del hato equino</strong> comprende todas las decisiones, prácticas, registros y estrategias necesarias para garantizar el <strong>bienestar</strong>, la <strong>sanidad</strong>, la <strong>eficiencia productiva</strong> y la <strong>seguridad</strong> de los équidos bajo cuidado humano. Este manejo es especialmente relevante en predios con fines de trabajo, deporte, turismo o reproducción. En Colombia, está reglamentado por:
        .row.align-items-center.m-0.style___box_6(data-aos="zoom-in")
          .col-xl-auto.style___box_7.d-none.d-xl-block(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img26.svg', alt="" ).m-auto
          .col-xl
            .style___box_7_1(data-aos="fade-left")
              <ul class="fa-ul estilo___ul_1 mb-0">
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Resolución ICA 7953 de 2017</strong> (BPG en équidos).</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Resolución 136 de 2020</strong> (bienestar animal en producción).</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Ley 1774 de 2016</strong> (reconocimiento de los animales como seres sintientes).</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Lineamientos de la WOAH</strong> sobre bienestar y manejo.</li>
              </ul>
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img27.png', alt="" ).m-auto
    
    <!-- BLOQUE 1 -->
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Concepto de manejo del hato
    
    .fondo___img_3
      .px-5

        p.mb-5 El manejo del hato equino implica una planificación sistemática y constante de acciones orientadas a preservar la salud física y emocional de los animales, al tiempo que se organiza el trabajo, el descanso y las rutinas productivas en condiciones seguras.

        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Aspectos esenciales del manejo del hato equino
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Aspecto del manejo
                    th Acciones clave
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left <strong>Salud y bienestar</strong>
                    td.texto-left 
                      <ul class="fa-ul estilo___ul mb-0">
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Prevenir enfermedades.</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Supervisión veterinaria.</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Reducción de estrés.</li>
                      </ul>
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left <strong>Organización del hato</strong>
                    td.texto-left 
                      <ul class="fa-ul estilo___ul mb-0">
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Clasificación por edad, sexo y función.</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Evitar peleas y lesiones.</li>
                      </ul>
                  tr
                    td.ajuste-border-tabla.texto-left <strong>Rutinas de manejo</strong>
                    td.texto-left Alimentación, trabajo, descanso y entrenamiento según cronograma.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left <strong>Bioseguridad</strong>
                    td.texto-left Prevención de brotes mediante protocolos y limpieza.
                  tr
                    td.ajuste-border-tabla.texto-left <strong>Registros obligatorios</strong>
                    td.texto-left Ingresos, salidas, tratamientos, reproducción y mortalidades.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left <strong>Infraestructura</strong>
                    td.texto-left Condiciones seguras, limpias y adecuadas para el tipo de actividad.

        p.mb-5 El ICA exige que todo predio que aspire a certificarse en BPG mantenga:
        
        .row.justify-content-center.mb-0
          .col-xl-10
            .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
              .col-xl-auto.style___box_4.ajuste___box_4.d-none.d-xl-block(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img29.svg', alt="" ).m-auto
              .col-xl
                .style___box_4_1(data-aos="fade-left")
                  <ul class="fa-ul estilo___ul_1 mb-0">
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Identificación individual de cada animal.</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Registros completos de sanidad y alimentación.</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Protocolos escritos de manejo y bienestar.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Organización interna del hato para evitar estrés y lesiones.</li>
                  </ul>
    
    .fondo___img_4
      .px-5
        <!-- BLOQUE 2 -->
        Separador
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Condiciones de alojamiento

        p.mb-5 El <strong>alojamiento equino</strong> es una dimensión fundamental del bienestar animal. Las condiciones físicas en que viven los équidos influyen directamente en su salud, comportamiento y desempeño. Estas condiciones están reguladas por la <strong>Resolución 136 de 2020 y la metodología de evaluación del ICA</strong>.

        <!-- TITULOS TERCER NIVEL -->
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
          .col
            h3 Espacio

        .row.align-items-center.mb-5.m-0.style___box_8(data-aos="zoom-in")
          .col-xl
            p.mb-3 Los équidos requieren áreas que permitan libertad de movimiento, descanso adecuado y expresión de comportamientos naturales.
            <ul class="fa-ul estilo___ul_1 mb-3">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Pesebreras para adultos: 3 x 3 m.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Yeguas con cría: 4 x 4 m.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Potreros: 1,5-2 unidades animales (UA) por hectárea en promedio.</li>
            </ul>
            p.mb-0 La falta de espacio puede causar estrés, agresividad, heridas y estereotipias.
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img31.jpg', alt="" ).m-auto
        
        <!-- TITULOS TERCER NIVEL -->
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
          .col
            h3 Ventilación

        p.mb-5 La calidad del aire en los establos es clave para evitar enfermedades respiratorias y garantizar confort térmico.

        .row.align-items-center.mb-5
          .col-xl
            .row.justify-content-center.align-items-center
              .col-xl-6.col-md-9
                .row.align-items-center.m-0.mb-3.style___box_5(data-aos="zoom-in")
                  .col-xl-auto(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/img32.svg', alt="" style="max-width: 70px").m-auto
                  .col-xl.espacio___movil_3
                    h5.mb-0 Circulación de aire
                    p.mb-0 Ventilación cruzada natural.
              .col-xl-6.col-md-9
                .row.align-items-center.m-0.mb-3.style___box_5(data-aos="zoom-in")
                  .col-xl-auto(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/img33.svg', alt="" style="max-width: 70px").m-auto
                  .col-xl.espacio___movil_3
                    h5.mb-0 Temperatura
                    p.mb-0 Estabilidad térmica, sin extremos.
            .row.justify-content-center.align-items-center
              .col-xl-6.col-md-9
                .row.align-items-center.m-0.mb-3.style___box_5(data-aos="zoom-in")
                  .col-xl-auto(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/img34.svg', alt="" style="max-width: 70px").m-auto
                  .col-xl.espacio___movil_3
                    h5.mb-0 Calidad del aire
                    p.mb-0 Evitar acumulación de amoniaco por orina.
              .col-xl-6.col-md-9
                .row.align-items-center.m-0.mb-3.style___box_5(data-aos="zoom-in")
                  .col-xl-auto(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/img35.svg', alt="" style="max-width: 70px").m-auto
                  .col-xl.espacio___movil_3
                    h5.mb-0 Iluminación
                    p.mb-0 Natural, suficiente para evitar estrés visual.
            .row.justify-content-center.align-items-center
              .col-xl-6.col-md-9
                .row.align-items-center.m-0.mb-3.style___box_5(data-aos="zoom-in")
                  .col-xl-auto(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/img36.svg', alt="" style="max-width: 70px").m-auto
                  .col-xl.espacio___movil_3
                    h5.mb-0 Consideración climática
                    p.mb-0 En zonas cálidas, evitar techos metálicos sin aislamiento.

          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img37.png', alt="").m-auto
        
        <!-- TITULOS TERCER NIVEL -->
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
          .col
            h3 Cama

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center
              .col-xl-6(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img38.png', alt="").m-auto
              .col-xl-6
                p.mb-3 La cama debe ofrecer confort, absorber humedad y evitar lesiones. Una cama deficiente incrementa el riesgo de dermatitis, caídas, problemas podales y respiratorios.
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 2.
                  span Requisitos y materiales para la cama del équido
                .tabla-a.ajuste___tabla_1(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla Requisitos de cama
                        th Materiales recomendados
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left <strong>Absorbente <br>No tóxica <br>Libre de fragmentos </strong>
                        td.texto-left 
                          <ul class="fa-ul estilo___ul mb-0">
                            <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Viruta.</li>
                            <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Cascarilla de arroz.</li>
                            <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Paja.</li>
                            <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Arena (en climas secos).</li>
                          </ul>
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left <strong>Mantenimiento</strong>
                        td.texto-left Cambio regular y revisión diaria.
        
        <!-- TITULOS TERCER NIVEL -->
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
          .col
            h3 Limpieza

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center
              .col-xl-6
                p.mb-3 Una higiene adecuada previene enfermedades, elimina malos olores y reduce la población de vectores como moscas.
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 3.
                  span Rutinas básicas de limpieza en instalaciones equinas
                .tabla-a.ajuste___tabla_1(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla Acciones clave
                        th Frecuencia recomendada
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left <strong>Retiro de estiércol</strong>
                        td.texto-left Diario.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left <strong>Limpieza de bebederos y comederos</strong>
                        td.texto-left Diario.
                      tr
                        td.ajuste-border-tabla.texto-left <strong>Barrido de pasillos y retiro de humedad</strong>
                        td.texto-left Diario.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left <strong>Lavado profundo con desinfectante aprobado por ICA</strong>
                        td.texto-left Semanal.
              .col-xl-6(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img39.png', alt="").m-auto
        
        <!-- TITULOS TERCER NIVEL -->
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
          .col
            h3 Distribución por Sexo, Edad y Función
        
        p.mb-5 Una distribución correcta del hato reduce el estrés, las peleas y las lesiones, y permite un manejo más eficiente.
    
    TabsB.color-acento-botones.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Por sexo" :icono="require('@/assets/curso/temas/img40.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Por sexo 
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Machos enteros</strong>: separados o con manejo controlado.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Yeguas con cría</strong>: espacios amplios y tranquilos.</li>
            </ul>
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img41.png', alt="" style="max-width: 450px").m-auto

      .py-4.py-md-5(titulo="Por edad" :icono="require('@/assets/curso/temas/img40.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Por edad
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Potros</strong>: socialización con animales jóvenes.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Adultos</strong>: agrupar por temperamento y función.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Animales mayores</strong>: manejo especial y dietas blandas.</li>
            </ul>
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img42.png', alt="" style="max-width: 450px").m-auto
      
      .py-4.py-md-5(titulo="Por función" :icono="require('@/assets/curso/temas/img40.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Por función
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Trabajo</strong>: áreas de descanso y recuperación.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Deporte</strong>: pistas y picaderos adecuados.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Turismo y equinoterapia</strong>: zonas tranquilas y trato suave.</li>
            </ul>
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img43.png', alt="" style="max-width: 450px").m-auto

    <!-- TITULOS TERCER NIVEL -->
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
      .col
        h3 Rutinas de trabajo y alimentación
    
    p.mb-5 Una <strong>rutina diaria bien estructurada</strong> es fundamental para mantener el bienestar físico y mental de los équidos. Reduce el estrés, previene lesiones y mejora su rendimiento en actividades de trabajo, deporte, turismo o escuela. Las rutinas deben combinar ejercicios adecuados, momentos de descanso, prácticas de higiene y una alimentación balanceada.
    
    <!-- TITULOS CUERTO NIVEL -->
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Rutina diaria de cuidado y ejercicio 

    p.mb-5 La rutina debe adaptarse al tipo de actividad del equino, su edad, estado de salud y condiciones climáticas. A continuación, se describen las prácticas recomendadas bajo el enfoque de Buenas Prácticas Equinas (BPE):

    .bg--img_03.mb-3
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img44.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Revisión matutina").ajuste-cajaAcordion
              <ul class="fa-ul mb-3">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Verificar estado corporal y comportamiento.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Revisar hidratación, condición de cascos y signos de dolor o enfermedad.</li>
              </ul>
            .row(titulo="Ejercicio diario (mínimo 1 hora)").ajuste-cajaAcordion
              <ul class="fa-ul mb-3">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Caminatas controladas.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Trabajo en cuerda.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Uso del picadero.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Tiempo libre en praderas.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Monta suave en equinos de turismo o escuelas.</li>
              </ul>
            .row(titulo="Descanso").ajuste-cajaAcordion
              <ul class="fa-ul mb-3">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Alternar actividad con reposo.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Evitar trabajo prolongado bajo el sol.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Garantizar sombra y acceso a agua fresca.</li>
              </ul>
    
    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
            .row(titulo="Higiene diaria").ajuste-cajaAcordion
              <ul class="fa-ul mb-3">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Cepillado completo.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Revisión y limpieza de cascos.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Duchas tras el trabajo, especialmente en climas cálidos.</li>
              </ul>
            .row(titulo="Revisión nocturna").ajuste-cajaAcordion
              <ul class="fa-ul mb-3">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Observar estado emocional del animal.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Verificar limpieza de la cama y disponibilidad de agua antes de encerrarlo.</li>
              </ul>
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/temas/img45.png", alt="" ).m-auto
    
    <!-- TITULOS CUERTO NIVEL -->
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Prácticas de alimentación balanceada y suministro de agua

    p.mb-5 Una alimentación adecuada es esencial para mantener el estado corporal, prevenir enfermedades digestivas y asegurar un rendimiento óptimo. Estas prácticas están alineadas con las recomendaciones del ICA y el Ministerio de Agricultura y Desarrollo Rural.

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Composición de la dieta
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>70 - 80% de forraje (pasto, heno).</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Concentrado</strong> ajustado a la condición corporal y nivel de actividad.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span><strong>Sales mineralizadas</strong> siempre disponibles.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Evitar dietas altas en carbohidratos en caballos que pastorean.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Evitar cambios bruscos en la alimentación (prevención de cólicos).</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img46.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Frecuencia y distribución
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>2 - 3 raciones diarias de concentrado.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Forraje disponible de forma constante.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Distribuir la comida equitativamente para evitar peleas entre animales.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img47.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agua
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Acceso <strong>permanente</strong> a agua potable en bebederos limpios.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Cambiar el agua varias veces al día en zonas cálidas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>En transporte o eventos, ofrecer agua <strong>cada 2 - 3 horas</strong>.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img48.png', alt='' style="max-width: 500px").m-auto
    
    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0.style___box_9(data-aos="zoom-in")
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img49.svg', alt="").m-auto
          .col-xl
            p.mb-0 Estos aspectos son evaluados por el ICA durante auditorías para certificación en Buenas Prácticas Ganaderas (BPG).

</template>

<script>
export default {
  name: 'Tema2',
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
