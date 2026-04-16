export default {
  global: {
    Name: 'Generalidades de las organizaciones de economía solidaria',
    Description:
      'El componente aborda el modelo de economía solidaria desde su definición, origen y evolución donde se evidencia su razón de ser y la pertinencia de su aparición desde el siglo XIX para consolidarse hoy por hoy en una alternativa propia que además de buscar la productividad y dinamizar la economía se enfoca especialmente en el bien común.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Fundamentos de administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y evolución de administración',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de la administración en las organizaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Funciones administrativas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos de organizaciones',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Relación entre administración y gestión por resultados',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planeación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Misión, visión y valores',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis del entorno FODA',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Objetivos estratégicos, tácticos y operativos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Planes, programas y proyectos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Las organizaciones de economía solidaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Origen y evolución',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Concepto y definición',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Contexto nacional e internacional',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Clasificación',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Marco normativo del sector solidario en Colombia',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Organismos de control y vigilancia',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Cadenas productivas en la economía solidaria',
            hash: 't_3_7',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Asociatividad',
      significado:
        'proceso mediante el cual un grupo de personas se une voluntariamente para alcanzar objetivos comunes, compartiendo recursos, riesgos y beneficios bajo principios solidarios.',
    },
    {
      termino: 'Autogobernanza',
      significado:
        'capacidad de una organización para administrarse, regularse y sostenerse por sí misma, sin depender de autoridades externas.',
    },
    {
      termino: 'Cadena productiva',
      significado:
        'conjunto de etapas articuladas que van desde la producción de un bien o servicio hasta su consumo final, integrando elaboración, transformación, distribución y comercialización.',
    },
    {
      termino: 'Gestión democrática',
      significado:
        'forma de administración en la que todos los asociados participan en la toma de decisiones de manera igualitaria, bajo el principio de un asociado, un voto.',
    },
    {
      termino: 'Justeza',
      significado:
        'dimensión práctica de la justicia en la economía solidaria que garantiza intercambios equitativos y dignos, ajustados a las necesidades reales de las personas por encima de la acumulación de capital.',
    },
    {
      termino: 'Mutualidad',
      significado:
        'principio de ayuda recíproca entre los miembros de una organización solidaria, orientado a satisfacer necesidades comunes mediante la colaboración y el esfuerzo colectivo.',
    },
    {
      termino: 'PESTEL',
      significado:
        'herramienta de análisis estratégico que evalúa los factores externos que afectan a una organización: políticos, económicos, socioculturales, tecnológicos, ecológicos y legales.',
    },
    {
      termino: 'Precooperativa',
      significado:
        'forma asociativa transitoria constituida por un grupo que, por carecer de capacidad económica, educativa o técnica, aún no puede formalizarse como cooperativa y requiere el acompañamiento de una entidad promotora.',
    },
  ],
  referencias: [
    {
      referencia:
        'Calderón, D. (s. f.). Aspectos generales del sector solidario. Universidad del Quindío, Aulas Virtuales.',
      link: '',
    },
    {
      referencia:
        'Cardona, L. (2020). La noción de cadena de producción solidaria desde las experiencias de circuitos cortos de comercialización. Journal of Business and Entrepreneurial Studies, 4(1). Corporación Universitaria Minuto de Dios.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1998). Ley 454 de 1998. Por la cual se determina el marco conceptual que regula la economía solidaria. Diario Oficial n.° 43.357.',
      link: '',
    },
    {
      referencia:
        'Díaz Jiménez, M. A., Quintanilla Ortiz, D. A. y Sandoval Alarcón, J. D. (2020). La economía solidaria en Colombia: una revisión conceptual, económica y normativa. Revista Facultad de Ciencias Contables, Económicas y Administrativas — FACCEA, 10(1), 62-82.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2019). Decreto 957 de 2019. Por el cual se adiciona el Capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto número 1074 de 2015 y se reglamenta la clasificación de las micro, pequeñas, medianas y grandes empresas. Diario Oficial n.° 50.975.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (2010). Economía social y solidaria: construyendo un entendimiento común [Documento de trabajo]. Centro Internacional de Formación de la OIT.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de la Economía Solidaria. (2022). Reseña histórica del sector solidario en Colombia. Supersolidaria.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
