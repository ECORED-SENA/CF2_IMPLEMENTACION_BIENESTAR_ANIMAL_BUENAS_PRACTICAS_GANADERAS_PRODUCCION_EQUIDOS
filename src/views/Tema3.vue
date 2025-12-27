<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sanidad y manejo sanitario en équidos

    .row.align-items-center.m-0.mb-5.style___box_10(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img50.png', alt="").m-auto
      .col-xl
        p.mb-0 El manejo sanitario en équidos comprende un conjunto de acciones preventivas, diagnósticas, terapéuticas y de bioseguridad destinadas a proteger la salud física y el bienestar de caballos, mulas, asnos y burdéganos. Este manejo busca evitar la aparición, propagación y persistencia de enfermedades dentro del hato. En Colombia, este sistema se enmarca dentro de la normativa del ICA, el Ministerio de Agricultura, la <em>WOAH</em> y otras entidades técnicas nacionales e internacionales.

    <!-- BLOQUE 1 -->
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Componentes del manejo sanitario

    p.mb-5 El sistema sanitario equino debe ser <strong>integral, planificado y documentado</strong>, e incluir los siguientes elementos clave:

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Prevención de enfermedades
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Vacunaciones, desparasitaciones periódicas.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Control de vectores.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Higiene de instalaciones.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Medidas de bioseguridad según la Resolución ICA 7953.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img51.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Vigilancia epidemiológica y diagnóstico
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Detección temprana de signos clínicos.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Pruebas diagnósticas (ej. prueba de <em>Coggins</em> para AIE).</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Exámenes clínicos periódicos y monitoreo de signos vitales.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img52.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tratamientos responsables
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Uso de medicamentos bajo prescripción veterinaria.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Respetar dosis, vía de aplicación y tiempo de retiro.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Evitar automedicación y uso indiscriminado (prevención de resistencias).</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img53.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Bioseguridad en predios
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Áreas de aislamiento para animales enfermos o recién ingresados.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Desinfección de instalaciones, corrales y equipos.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Control del ingreso de personas, vehículos y animales.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Manejo seguro de estiércol y residuos veterinarios.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img54.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Registros sanitarios y trazabilidad
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Vacunaciones, tratamientos, pruebas diagnósticas.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Desparasitaciones, ingresos/salidas, mortalidades.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Estos registros son obligatorios para predios que aspiren a certificarse en BPG/BPE.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img55.png', alt='' style="max-width: 500px").m-auto
    
    .fondo___img_4
      .px-5

        <!-- BLOQUE 2 -->
        Separador
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Importancia del manejo sanitario

        p.mb-5 Una adecuada gestión sanitaria no solo protege la salud de los animales, sino que <strong>mejora la productividad y reduce riesgos para la salud pública</strong>, en especial bajo el enfoque de Una Salud.

        .row.align-items-center
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img56.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img57.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Prevención de enfermedades oficiales
                p.mb-0 AIE, Encefalitis Equina Venezolana, Influenza Equina, Rabia.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img58.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Reducción de costos
                p.mb-0 Menor gasto en tratamientos, bajas por mortalidad y pérdidas productivas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img59.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Protección de la salud pública
                p.mb-0 Evita zoonosis y focos epidémicos compartidos con humanos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img60.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cumplimiento legal y ético
                p.mb-0 Alineado con la Ley 1774 de 2016 sobre el trato digno a los animales.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img61.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Mejora del desempeño productivo
                p.mb-0 Mayor longevidad, reproducción eficiente, mejor rendimiento deportivo o de trabajo.

        <!-- BLOQUE 3 -->
        Separador
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Normativa sanitaria vigente en Colombia
        
        p.mb-5 El marco normativo nacional está conformado por resoluciones específicas que definen protocolos y medidas obligatorias para el manejo sanitario de équidos en todo el territorio.

        .row.justify-content-center.mb-3
          .col-xl-6.col-md-9
            .row.align-items-center.m-0.style___box_11(data-aos="zoom-in")
              .col-xl-auto.style___box_12(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img62.svg', alt='').m-auto
              .col-xl
                h5.mb-0 Resolución ICA 676 de 2015
                p.mb-0 Establece medidas para prevención de <strong>Anemia Infecciosa Equina (AIE)</strong> e <strong>Influenza Equina</strong>.
          .col-xl-6.col-md-9.espacio___movil_3
            .row.align-items-center.m-0.style___box_11(data-aos="zoom-in")
              .col-xl-auto.style___box_12_1(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img63.svg', alt='').m-auto
              .col-xl
                h5.mb-0 Resolución ICA 105991 de 2021
                p.mb-0 Actualiza medidas frente a la <strong>Encefalitis Equina Venezolana (EEV)</strong>.
        
        .row.justify-content-center.mb-3
          .col-xl-6.col-md-9
            .row.align-items-center.m-0.style___box_11(data-aos="zoom-in")
              .col-xl-auto.style___box_12(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img62.svg', alt='').m-auto
              .col-xl
                h5.mb-0 Resolución ICA 09028 de 2024
                p.mb-0 Define acciones para prevenir la <strong>rabia de origen silvestre</strong>, bajo enfoque Una Salud.
          .col-xl-6.col-md-9.espacio___movil_3
            .row.align-items-center.m-0.style___box_11(data-aos="zoom-in")
              .col-xl-auto.style___box_12_1(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img63.svg', alt='').m-auto
              .col-xl
                h5.mb-0 Protocolos del INS
                p.mb-0 Incluyen la vigilancia de encefalitis equinas como problema de <strong>salud pública</strong>.
        
        .row.justify-content-center.mb-0
          .col-xl-6.col-md-9
            .row.align-items-center.m-0.style___box_11(data-aos="zoom-in")
              .col-xl-auto.style___box_12(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img62.svg', alt='').m-auto
              .col-xl
                h5.mb-0 Estándares de la <em>WOAH</em>
                p.mb-0 Clasifican a la AIE, influenza, encefalitis equinas y rabia como <strong>enfermedades de importancia internacional</strong>.
          .col-xl-6.col-md-9.espacio___movil_3
            .row.align-items-center.m-0.style___box_11(data-aos="zoom-in")
              .col-xl-auto.style___box_12_1(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img63.svg', alt='').m-auto
              .col-xl
                h5.mb-0 Resolución ICA 7953 de 2017
                p.mb-0 Requiere un <strong>plan sanitario formal y registros obligatorios</strong> para obtener certificación en BPG/BPE.
            
        <!-- BLOQUE 4 -->
        Separador
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Enfermedades de control oficial en équidos

        .row.align-items-center.mb-5.m-0.style___box_13(data-aos="zoom-in")
          .col-xl
            p.mb-0 En Colombia, varias <strong>enfermedades equinas</strong> son consideradas de <strong>interés sanitario oficial</strong> por su impacto en la salud animal, su potencial zoonótico o su relevancia económica. Estas enfermedades están bajo vigilancia del <strong>ICA</strong>, el <strong>Instituto Nacional de Salud (INS)</strong> y figuran en los listados de la <strong><em>WOAH</em></strong> (antes OIE). Su control es obligatorio en predios que desean obtener o mantener la certificación en Buenas Prácticas Ganaderas (BPG/BPE). A continuación se describen las principales enfermedades bajo control oficial:
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img64.jpg', alt='').m-auto
        
        .bg--img_03.mb-3
          .row.h-100.align-items-center
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img65.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Encefalitis/Encefalomielitis Equinas (EEE, EEV, EEO)").ajuste-cajaAcordion
                  <ul class="fa-ul mb-3">
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Enfermedades virales transmitidas por mosquitos (arbovirosis).</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Afectan el sistema nervioso central y pueden ser zoonóticas.</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Vigilancia prioritaria en Colombia:</li>
                      <ul class="fa-ul estilo___ul_2 mb-1">
                        <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Encefalitis Equina Venezolana (EEV).</li>
                        <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Encefalitis del Este (EEE).</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-horse"></i></span>Encefalitis del Oeste (EEO).</li>
                      </ul>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Medidas obligatorias (según INS 2024):</li>
                      <ul class="fa-ul estilo___ul_2 mb-1">
                        <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Vacunación en zonas de riesgo (bajo 1200 msnm).</li>
                        <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Control de vectores: manejo ambiental y uso de insecticidas.</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-horse"></i></span>Restricción de movilización desde focos activos.</li>
                      </ul>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Coordinación entre ICA e INS para control animal y humano.</li>
                  </ul>
                .row(titulo="Anemia Infecciosa Equina (AIE)").ajuste-cajaAcordion
                  <ul class="fa-ul mb-3">
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Enfermedad viral crónica por lentivirus (Retroviridae), listada por la <em>WOAH</em>.</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Puede presentarse sin síntomas, pero convierte al equino en portador permanente.</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Resolución ICA 676 de 2015 exige:</li>
                      <ul class="fa-ul estilo___ul_2 mb-1">
                        <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Prueba de Coggins o similar en équidos mayores de 12 meses.</li>
                        <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Resultado negativo por laboratorio autorizado.</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-horse"></i></span>Aislamiento y sacrificio sanitario de animales positivos.</li>
                      </ul>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Diagnóstico obligatorio para movilización.</li>
                  </ul>
                .row(titulo="Rabia").ajuste-cajaAcordion
                  <ul class="fa-ul mb-3">
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Zoonosis mortal causada por virus <em>Lyssavirus</em>.</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Se vigila especialmente la <strong>rabia de origen silvestre</strong> (murciélagos hematófagos).</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Resolución ICA 09028 de 2024 establece:</li>
                      <ul class="fa-ul estilo___ul_2 mb-1">
                        <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Vacunación periódica en zonas endémicas.</li>
                        <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Reporte inmediato de casos neurológicos sospechosos al ICA y a la Secretaría de Salud.</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-horse"></i></span>Coordinación con autoridades de salud pública.</li>
                      </ul>
                  </ul>
        
        .bg--img_03.mb-5
          .row.h-100.align-items-center
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
                .row(titulo="Tétanos").ajuste-cajaAcordion
                  <ul class="fa-ul mb-3">
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Causado por la toxina de <em>Clostridium tetani</em>, bacteria presente en el suelo.</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Los caballos son particularmente susceptibles.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Prevención mediante:</li>
                      <ul class="fa-ul estilo___ul_2 mb-1">
                        <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Vacunación cada 1 - 3 años (según biológico).</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-horse"></i></span>Revacunación ante heridas profundas o cirugías.</li>
                      </ul>
                  </ul>
                .row(titulo="Influenza equina").ajuste-cajaAcordion
                  <ul class="fa-ul mb-3">
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Enfermedad respiratoria aguda y altamente contagiosa.</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Causada por virus de tipo A (subtipos H7N7, H3N8).</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Incluida en la Resolución ICA 676 de 2015 como enfermedad de control sanitario.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Medidas clave:</li>
                      <ul class="fa-ul estilo___ul_2 mb-1">
                        <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Vacunación obligatoria en caballos de deporte, ferias, turismo y exposición.</li>
                        <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Cuarentena para animales nuevos o que regresan de eventos.</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-horse"></i></span>Vigilancia clínica y restricciones de movilidad en brotes.</li>
                      </ul>
                  </ul>
            .col-xl-auto
              figure(data-aos="fade-left").d-none.d-xl-block
                img(src="@/assets/curso/temas/img66.png", alt="" ).m-auto

    .row.align-items-center.m-0.style___box_9(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img67.svg', alt="").m-auto
      .col-xl
        p.mb-0 Todas estas enfermedades requieren acciones específicas de prevención, vigilancia, notificación obligatoria y tratamiento bajo supervisión veterinaria. El incumplimiento de estas medidas puede derivar en sanciones y pérdida de certificaciones sanitarias. 

    <!-- BLOQUE 5 -->
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Plan sanitario del hato equino

    .row.align-items-center.mb-5.m-0
      .col-xl
        .style___box_14.mb-3(data-aos="zoom-in")
          p.mb-0 El <strong>plan sanitario</strong> es el conjunto de acciones planificadas que tienen como finalidad <strong>prevenir, detectar y controlar enfermedades</strong> dentro del hato equino. En Colombia, este plan debe ser diseñado y supervisado por un <strong>médico veterinario</strong>, en concordancia con los <strong>lineamientos técnicos del ICA</strong> y, cuando aplique, con los protocolos regionales emitidos por autoridades de salud animal.
        p.mb-0 Un plan sanitario eficaz garantiza el bienestar, protege la productividad, mejora la trazabilidad y cumple con las <strong>exigencias legales para la certificación en Buenas Prácticas Ganaderas (BPG/BPE)</strong>, conforme a lo establecido en la <strong>Resolución ICA 7953 de 2017</strong>. A continuación, se presentan los componentes básicos que debe incluir un plan sanitario equino:
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img68.png", alt="" ).m-auto
    
    TabsB.color-acento-botones.mb-0(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Calendario de vacunación" :icono="require('@/assets/curso/temas/img69.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Calendario de vacunación 
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Elaborado con base en el riesgo epidemiológico de la región.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Debe incluir, al menos:</li>
                <ul class="fa-ul estilo___ul_3 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Encefalitis Equinas (EEE, EEV, EEO): obligatoria en zonas de riesgo.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Influenza Equina: para caballos de deporte, turismo o exposición.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Tétanos: vacuna individual o combinada (ej. influenza-tétanos).</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse"></i></span>Rabia: en zonas endémicas o con murciélagos hematófagos.</li>
                </ul>
            </ul>
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img70.png', alt="" style="max-width: 450px").m-auto

      .py-4.py-md-5(titulo="Desparasitación interna y externa" :icono="require('@/assets/curso/temas/img69.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Desparasitación interna y externa
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Se recomienda un enfoque integral más allá de la administración de pastas antiparasitarias.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Debe adaptarse según:</li>
                <ul class="fa-ul estilo___ul_3 mb-1">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Edad y condición corporal.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse"></i></span>Resultados de exámenes coprológicos.</li>
                </ul>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Complementar con:</li>
                <ul class="fa-ul estilo___ul_3 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Recolección frecuente de estiércol.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Rotación de potreros.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse"></i></span>Control de vectores (moscas, tábanos).</li>
                </ul>
            </ul>
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img71.png', alt="" style="max-width: 450px").m-auto
      
      .py-4.py-md-5(titulo="Vigilancia clínica y pruebas diagnósticas" :icono="require('@/assets/curso/temas/img69.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Vigilancia clínica y pruebas diagnósticas
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Monitoreo de signos vitales y comportamiento:</li>
                <ul class="fa-ul estilo___ul_3 mb-1">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Temperatura, mucosas, apetito, sistema respiratorio y locomotor.</li>
                </ul>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Aplicación de pruebas específicas:</li>
                <ul class="fa-ul estilo___ul_3 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Prueba de Coggins para AIE.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse"></i></span>Serologías o pruebas rápidas para encefalitis o influenza, según la zona.</li>
                </ul>
            </ul>
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img72.png', alt="" style="max-width: 450px").m-auto
      
      .py-4.py-md-5(titulo="Registros sanitarios" :icono="require('@/assets/curso/temas/img69.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Registros sanitarios
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Toda acción del plan debe documentarse en:</li>
                <ul class="fa-ul estilo___ul_3 mb-1">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Fichas individuales por animal.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Libro físico o archivo digital con información completa sobre:</li>
                    <ul class="fa-ul estilo___ul_4 mb-1">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Vacunaciones.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Desparasitaciones.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-horse"></i></span>Tratamientos y fechas.</li>
                    </ul>
                </ul>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Estos registros son obligatorios. </li>
            </ul>
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img73.png', alt="" style="max-width: 450px").m-auto

    <!-- BLOQUE 6 -->
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Uso responsable de medicamentos veterinarios

    .row.align-items-center.mb-5.m-0
      .col-xl.style___box_15(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img74.svg", alt="" ).m-auto
          .col-xl
            p.mb-0 El <strong>uso responsable de medicamentos veterinarios</strong> es una práctica esencial para proteger la salud animal, prevenir efectos adversos y <strong>reducir el riesgo de desarrollar resistencia a los antimicrobianos (RAM)</strong>. Colombia forma parte del enfoque global Una Salud y cuenta con un <strong>Plan Nacional de Respuesta a la RAM (PNRAM)</strong> que involucra al sector pecuario, veterinario y de salud pública. Este enfoque busca que los tratamientos farmacológicos se realicen bajo criterios técnicos, con control del almacenamiento, uso racional y monitoreo de su impacto sanitario.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img75.png", alt="" ).m-auto
    
    <!-- TITULOS TERCER NIVEL -->
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
      .col
        h3 Buenas prácticas en la administración de medicamentos

    p.mb-5 Estas prácticas garantizan que los medicamentos sean eficaces y seguros para los équidos, minimizando riesgos para los animales, el personal y la salud pública.

    .row.align-items-center.mb-5
      .col-xl
        TabsA.color-acento-botones.mb-0(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Prescripción profesional obligatoria")
            .row.align-items-center
              .col-lg
                h4 Prescripción profesional obligatoria
                <ul class="fa-ul estilo___ul_1 mb-3">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Todos los medicamentos deben ser indicados por un veterinario.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Prohibida la automedicación por parte de propietarios o personal sin formación.</li>
                </ul>
          .tarjeta.color-acento-botones--borde.p-4(titulo="Dosis y vía de administración correcta")
            .row.align-items-center
              .col-lg
                h4 Dosis y vía de administración correcta
                <ul class="fa-ul estilo___ul_1 mb-3">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Calcular la dosis según el <strong>peso vivo</strong> del equino.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Respetar la vía indicada: <strong>oral, intramuscular, intravenosa, tópica</strong>.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>No mezclar medicamentos en la misma jeringa, salvo indicación veterinaria.</li>
                </ul>
          .tarjeta.color-acento-botones--borde.p-4(titulo="Duración completa del tratamiento")
            .row.align-items-center
              .col-lg
                h4 Duración completa del tratamiento
                <ul class="fa-ul estilo___ul_1 mb-3">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>No suspender el uso de antibióticos antes del tiempo prescrito, aunque haya mejora clínica.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Cumplir la duración total evita recaídas y resistencias.</li>
                </ul>
          .tarjeta.color-acento-botones--borde.p-4(titulo="Períodos de retiro")
            .row.align-items-center
              .col-lg
                h4 Períodos de retiro
                <ul class="fa-ul estilo___ul_1 mb-3">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>En animales destinados a consumo humano o contacto con alimentos, se debe respetar el tiempo de retiro del medicamento para evitar residuos en la cadena alimentaria.</li>
                </ul>
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img76.png", alt="" ).m-auto

    <!-- TITULOS TERCER NIVEL -->
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
      .col
        h3 Buenas prácticas de almacenamiento
    
    p.mb-5 Un almacenamiento adecuado preserva la eficacia de los productos, evita riesgos de contaminación y protege al personal y los animales.

    .row.mb-5
      .col-lg-4(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/img77.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Condiciones de almacenamiento
          <ul class="fa-ul estilo___ul mb-0">
            <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Lugar fresco, seco y protegido de la luz solar directa.</li>
            <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Lejos de concentrados, alimentos, niños o animales.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Nunca almacenar medicamentos en áreas de alimentación.</li>
          </ul>
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/img78.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Manejo de envases
          <ul class="fa-ul estilo___ul mb-0">
            <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Mantener envases bien cerrados.</li>
            <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Respetar la cadena de frío si el producto lo requiere.</li>
            <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Separar físicamente:</li>
              <ul class="fa-ul estilo___ul_4 mb-0">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Antibióticos.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse"></i></span>Antiparasitarios.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse"></i></span>Biológicos (vacunas).</li>
              </ul>
          </ul>
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/img79.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Control de fechas
          <ul class="fa-ul estilo___ul mb-0">
            <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Registrar la <strong>fecha de apertura</strong> de frascos multi-dosis.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Revisar <strong>fecha de vencimiento</strong> y eliminar productos caducados.</li>
          </ul>
    
    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_9.ajuste___box_9(data-aos="zoom-in")
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img80.svg', alt="").m-auto
          .col-xl
            p.mb-0 El INVIMA y el ICA son responsables del control sanitario, regulación y vigilancia del uso y comercialización de medicamentos veterinarios en Colombia.
    
    <!-- TITULOS TERCER NIVEL -->
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
      .col
        h3 Prevención de resistencias antimicrobianas
    
    p.mb-5 El uso irresponsable o excesivo de antibióticos favorece la <strong>resistencia bacteriana</strong>, lo que puede inutilizar tratamientos y generar riesgos para animales y humanos.

    .bg--img_03.mb-3
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img81.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Diagnóstico previo").ajuste-cajaAcordion
              p.mb-3 Usar antibióticos solo cuando exista un diagnóstico clínico o laboratorial que lo justifique.
            .row(titulo="Medidas preventivas alternativas").ajuste-cajaAcordion
              p.mb-3 Fortalecer la <strong>bioseguridad, la vacunación y el manejo adecuado</strong> para reducir la necesidad de tratamientos.
            .row(titulo="Evitar prácticas de riesgo").ajuste-cajaAcordion
              <ul class="fa-ul mb-3">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>No usar antibióticos como “preventivos” rutinarios sin respaldo técnico.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-horse-head"></i></span>No repetir el mismo antibiótico en el hato sin evaluación.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>No combinar bactericidas y bacteriostáticos sin fundamento científico.</li>
              </ul>
    
    p.mb-0 El <strong>uso prudente de medicamentos</strong> no solo es una responsabilidad profesional, sino también una exigencia legal y ética. Su cumplimiento fortalece la sanidad animal, protege la salud pública y es condición para acceder a certificaciones en <strong>Buenas Prácticas Ganaderas</strong>.

    <!-- BLOQUE 7 -->
    Separador
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.7 Registro y control de tratamientos

    .fondo___img_3
      .px-5

        p.mb-5 El registro detallado de tratamientos veterinarios es una herramienta clave para garantizar la trazabilidad sanitaria del hato equino. Además de ser un requisito obligatorio para la certificación en Buenas Prácticas Ganaderas (BPG/BPE), permite tomar decisiones informadas y demostrar cumplimiento ante autoridades sanitarias. La Resolución ICA 7953 de 2017 establece que estos registros deben mantenerse actualizados, organizados y disponibles para revisión durante auditorías técnicas. A continuación, se listan los elementos que deben incluirse <strong>en la ficha sanitaria</strong>.

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 4.
                  span Ficha sanitaria  individual de cada equino
                .tabla-a.ajuste___tabla_1(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla Dato obligatorio
                        th Descripción
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left <strong>Identificación del animal</strong>
                        td.texto-left Nombre, código, raza, edad, sexo y número de microchip si aplica.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left <strong>Fecha del tratamiento</strong>
                        td.texto-left Día, mes y año en que se administró el medicamento.
                      tr
                        td.ajuste-border-tabla.texto-left <strong>Diagnóstico o motivo</strong>
                        td.texto-left Razón clínica por la cual se indica el tratamiento.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left <strong>Nombre del medicamento y principio activo</strong>
                        td.texto-left Incluye nombre comercial y sustancia activa principal.
                      tr
                        td.ajuste-border-tabla.texto-left <strong>Dosis y vía de administración</strong>
                        td.texto-left Dosis exacta aplicada y vía correspondiente (oral, IM, IV, etc.).
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left <strong>Duración del tratamiento</strong>
                        td.texto-left Número de días o aplicaciones según prescripción.
                      tr
                        td.ajuste-border-tabla.texto-left <strong>Nombre del responsable</strong>
                        td.texto-left Profesional o persona capacitada que aplicó el tratamiento.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left <strong>Tiempo de retiro (si aplica)</strong>
                        td.texto-left Días requeridos para eliminar residuos del medicamento antes de consumo o contacto con humanos.
              .col-xl-6(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img82.png", alt="" ).m-auto
        
        <!-- TITULOS TERCER NIVEL -->
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img19.svg" style="max-width: 60px").m-auto
          .col
            h3 ¿Para qué sirven estos registros?

        p.mb-5 El mantenimiento de un sistema de registro sanitario tiene <strong>múltiples finalidades técnicas, legales y administrativas</strong>, como se presenta a continuación:

    .row.align-items-center.mb-5
      .col-xl
        TabsA.color-acento-botones.mb-0(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Verificación del uso racional de medicamentos")
            .row.align-items-center
              .col-lg
                h4 Verificación del uso racional de medicamentos
                p.mb-3 Detectar y corregir el sobreuso de antibióticos o antiparasitarios.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Análisis epidemiológico")
            .row.align-items-center
              .col-lg
                h4 Análisis epidemiológico
                p.mb-3 Facilita la reconstrucción del historial clínico ante brotes o muertes.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cumplimiento normativo")
            .row.align-items-center
              .col-lg
                h4 Cumplimiento normativo
                p.mb-3 Demuestra ante el ICA, INVIMA o auditorías de calidad que se respetan las BPG.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Gestión del hato")
            .row.align-items-center
              .col-lg
                h4 Gestión del hato
                p.mb-1 Apoya la toma de decisiones sobre:
                <ul class="fa-ul estilo___ul_1 mb-3">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Ajustes al plan sanitario.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-horse-head"></i></span>Aislamiento o eliminación de animales con riesgos sanitarios recurrentes.</li>
                </ul>
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img83.png", alt="" ).m-auto
    
    .row.align-items-center.m-0.style___box_9(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img84.svg', alt="").m-auto
      .col-xl
        p.mb-0 Toda esta información debe ser archivada en formato físico o digital y estar siempre disponible para visitas técnicas del ICA. El registro sanitario es evidencia del compromiso del predio con la sanidad, el bienestar animal y la bioseguridad.

</template>

<script>
export default {
  name: 'Tema3',
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
