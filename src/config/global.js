export default {
  global: {
    Name: 'Bienestar animal, sanidad y manejo integral del hato equino',
    Description:
      'Este componente introduce los principios fundamentales del bienestar animal y las Buenas Prácticas Ganaderas aplicadas a los équidos, abordando el manejo del hato, la sanidad, la inocuidad, la gestión ambiental y la seguridad laboral. Su propósito es que el aprendiz identifique y aplique los requisitos técnicos y normativos necesarios para garantizar el bienestar, la trazabilidad y el cumplimiento sanitario en unidades de producción equina.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Bienestar animal en los équidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de bienestar animal',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Las cinco libertades del bienestar animal',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Prácticas aplicadas al manejo de équidos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo del hato equino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de manejo del hato',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Condiciones de alojamiento',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sanidad y manejo sanitario en équidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Componentes del manejo sanitario',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Importancia del manejo sanitario',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Normativa sanitaria vigente en Colombia',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Enfermedades de control oficial en équidos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Plan sanitario del hato equino',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Uso responsable de medicamentos veterinarios',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Registro y control de tratamientos',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Inocuidad y salud pública en la producción de équidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de inocuidad en la producción animal',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Uso responsable de medicamentos y control de residuos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Gestión de subproductos y desechos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Relación entre sanidad equina y salud pública',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión ambiental en la producción equina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estrategias de uso sostenible de recursos naturales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Establecimiento de barreras vivas y árboles nativos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Manejo de estiércol y residuos orgánicos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Gestión de residuos peligrosos (RESPEL)',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Prácticas de conservación y protección de la biodiversidad',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Seguridad y Salud en el Trabajo (SST) en instalaciones equinas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Concepto e importancia de la Seguridad y Salud en el Trabajo (SST)',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Principios de prevención de riesgos laborales',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Reglamentación del personal y normatividad vigente',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Prácticas de bienestar laboral y ambiente seguro',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Gestión de personal y capacitación en manejo animal',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Inocuidad y salud pública en la producción de équidos',
      referencia:
        'Instituto Nacional de Salud - INS. (2024). Protocolo de Vigilancia en Salud Pública: Encefalitis Equinas. INS.',
      tipo: 'Protocolo sanitario',
      link:
        'https://www.ins.gov.co/buscador-eventos/Lineamientos/Pro_Encefalitis%20equina%202024.pdf ',
    },
    {
      tema: 'Inocuidad y salud pública en la producción de équidos',
      referencia:
        'ICA. (2015). Resolución 676 de 2015: Medidas sanitarias para la prevención de la Anemia Infecciosa e Influenza Equina. ICA.',
      tipo: 'Resolución oficial',
      link:
        'https://www.ica.gov.co/getattachment/d343f76b-d799-4b71-8dea-49894015126f/2015R676.aspx ',
    },
    {
      tema: 'Inocuidad y salud pública en la producción de équidos',
      referencia:
        'TvAgro. (2025). Rigurosas medidas ante nuevos casos de Encefalitis Equina - TvAgro por Juan Gonzalo Angel [Video]. YouTube.',
      tipo: 'Video técnico',
      link: 'https://www.youtube.com/watch?v=7iPgpI4hX3k',
    },
    {
      tema: 'Inocuidad y gestión ambiental',
      referencia:
        'Congreso de Colombia. (2012). Ley 1562 de 2012: Riesgos laborales.',
      tipo: 'Normatividad oficial',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48365 ',
    },
    {
      tema: 'Inocuidad y gestión ambiental',
      referencia:
        'Instituto Colombiano Agropecuario. (s. f.). Lista de chequeo para la verificación de requisitos sanitarios, de inocuidad y de bienestar animal para la certificación en Buenas Prácticas Ganaderas en la producción de équidos [Lista de chequeo].',
      tipo: 'Documento',
      link: '/downloads/Anexo_1_Forma-3-1099-V-2.xlsx',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'condición física y emocional del equino basada en nutrición adecuada, entorno seguro, salud estable, posibilidad de conducta natural y ausencia de miedo o dolor, conforme a la normativa colombiana.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'medidas destinadas a evitar la entrada, permanencia o dispersión de agentes patógenos dentro del predio, mediante protocolos de ingreso, limpieza, desinfección, cuarentena y manejo adecuado de residuos.',
    },
    {
      termino: 'BPG (Buenas Prácticas Ganaderas)',
      significado:
        'conjunto de requisitos técnicos y normativos establecidos por el ICA para garantizar bienestar, sanidad, bioseguridad, manejo ambiental y organización documental en predios equinos.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'aplicación de prácticas que previenen contaminaciones biológicas, químicas o físicas que puedan afectar la salud animal, humana o ambiental, bajo el enfoque Una Salud.',
    },
    {
      termino: 'Manejo del hato',
      significado:
        'organización y atención integral de los équidos según edad, sexo, función y condición corporal, con rutinas de alimentación, ejercicio, descanso, higiene y registro técnico.',
    },
    {
      termino: 'Plan sanitario',
      significado:
        'estructura técnica elaborada por un médico veterinario que define acciones preventivas, tratamientos, pruebas diagnósticas y registros obligatorios para mantener la salud del hato equino.',
    },
    {
      termino: 'Residuos peligrosos (RESPEL)',
      significado:
        'materiales que representan riesgo biológico, químico o físico, como agujas, frascos, medicamentos vencidos o productos contaminados, cuya disposición requiere procedimientos regulados.',
    },
    {
      termino: 'Sanidad equina',
      significado:
        'conjunto de acciones preventivas, diagnósticas y terapéuticas que permiten mantener la salud del hato, incluyendo vacunación, desparasitación, vigilancia clínica y control de enfermedades oficiales.',
    },
    {
      termino: 'SG-SST (Sistema de Gestión de Seguridad y Salud en el Trabajo)',
      significado:
        'marco organizativo que establece acciones para prevenir accidentes, controlar riesgos, capacitar al personal y proteger la salud ocupacional en instalaciones equinas.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'registro sistemático de eventos sanitarios, movimientos, tratamientos y controles aplicados a cada equino, con el fin de mantener información verificable durante auditorías y procesos de certificación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agrosavia. (2022). Prácticas de conservación de suelos y agua en fincas pecuarias. Corporación Colombiana de Investigación Agropecuaria.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1562 de 2012: Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST). Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2016). Ley 1774 de 2016: Por la cual se modifica el Código Civil y se establecen sanciones por maltrato animal. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'FAO. (2019). Manejo sostenible del estiércol en sistemas productivos. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: '',
    },
    {
      referencia:
        'FAO. (2020). Buenas prácticas para el bienestar animal en sistemas pecuarios. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: '',
    },
    {
      referencia:
        'Fedequinas. (2022). Reglamento Nacional para Exposiciones y Bienestar del Caballo Criollo Colombiano. Federación Colombiana de Asociaciones Equinas.',
      link: '',
    },
    {
      referencia:
        'ICA - Instituto Colombiano Agropecuario. (2015). Resolución 676 de 2015: Medidas sanitarias para la prevención y control de la Anemia Infecciosa e Influenza Equina. ICA.',
      link: '',
    },
    {
      referencia:
        'ICA - Instituto Colombiano Agropecuario. (2017). Resolución 7953 de 2017: Requisitos sanitarios y de bienestar animal para la certificación en Buenas Prácticas Ganaderas (BPG) en producción primaria de équidos. ICA.',
      link: '',
    },
    {
      referencia:
        'ICA - Instituto Colombiano Agropecuario. (2020). Guía de bioseguridad para predios pecuarios. Ministerio de Agricultura y Desarrollo Rural.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2023). Protocolo de vigilancia en salud pública: Encefalitis equinas. INS.',
      link: '',
    },
    {
      referencia:
        'MADR - Ministerio de Agricultura y Desarrollo Rural. (2020). Manual de condiciones de bienestar animal para especies de producción. MinAgricultura.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2017). Guía técnica para la gestión integral de residuos peligrosos (RESPEL) en actividades agropecuarias. MinAmbiente.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Trabajo. (2019). Resolución 0312 de 2019: Estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo. MinTrabajo.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal - WOAH (antes OIE). (2022). Código sanitario para los animales terrestres: Bienestar de los équidos. WOAH.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Geraldine Viviana Fernandez Jaramillo',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
