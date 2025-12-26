<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'MBienestar Animal y Buenas Prácticas Ganaderas en la producción de équidos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con el bienestar animal, manejo del hato equino, sanidad, inocuidad, gestión ambiental y seguridad laboral en la producción de équidos, conforme a la normativa colombiana.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la ley que reconoce a los animales como seres sintientes en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 1774 de 2016.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ley 1562 de 2012.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolución ICA 7953 de 2017.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resolución 136 de 2020.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es una de las Cinco Libertades del bienestar animal?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estímulo del apetito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar la reproducción no controlada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ausencia de dolor, lesión o enfermedad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mejorar la producción de leche.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué establece la Resolución ICA 7953 de 2017?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normas para exportación de carne equina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Requisitos de bienestar para la certificación BPG en équidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estandarización de razas equinas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Límites máximos de velocidad en cabalgatas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'Una práctica del manejo etológico en équidos es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar el uso de praderas abiertas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso de refuerzo positivo en el entrenamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Alimentarlos únicamente en establos cerrados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aislamiento de potros recién nacidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿¿Cuál de los siguientes elementos debe incluir una ficha sanitaria equina?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color de la silla de montar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Horario de alimentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nombre del medicamento y dosis aplicada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Frecuencia de visitas de turistas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué enfermedad equina requiere prueba de Coggins para su diagnóstico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Influenza equina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Rabia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tétanos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Anemia Infecciosa Equina (AIE).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es un componente del plan sanitario del hato equino?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calendario de vacunación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Programa de doma intensiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Actividades turísticas mensuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estándares de belleza equina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué norma establece estándares mínimos para el SG-SST?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 1774 de 2016.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resolución 0312 de 2019.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ley 1252 de 2008.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resolución ICA 09028 de 2024.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una práctica para la gestión de residuos peligrosos (RESPEL)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de residuos orgánicos como alimento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Separación y almacenamiento en contenedores rígidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almacenamiento en bolsas plásticas abiertas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de los siguientes principios hace parte de la bioseguridad en predios equinos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el contacto con animales silvestres.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Control de ingreso de personas y vehículos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminación del uso de guantes y tapabocas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Compartir bebederos entre especies animales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'ELas Buenas Prácticas Ganaderas (BPG) son opcionales para predios equinos en Colombia.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El bienestar animal incluye tanto el estado físico como mental del equino.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La gestión ambiental equina debe cumplir con los lineamientos del Sistema Nacional Ambiental (SINA).',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Es obligatorio contar con un médico veterinario para diseñar y supervisar el plan sanitario.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Los équidos en eventos públicos pueden participar sin chequeo previo si están vacunados.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
