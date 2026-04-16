<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Tema 2

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        p La planeación estratégica es un proceso sistemático mediante el cual la organización define el rumbo que desea alcanzar en el mediano y largo plazo, orientando sus acciones hacia el logro de objetivos superiores. Este proceso integra elementos como la visión, la misión, los valores y las políticas organizacionales, los cuales establecen la base para la toma de decisiones y el desarrollo de la organización.
        .tarjeta-bg01.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img2.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 En este proceso se determinan objetivos y metas, se establecen acciones concretas para alcanzarlos y se evalúan los resultados en función de lo planificado. La planeación estratégica permite organizar los esfuerzos en diferentes niveles, facilitando que los objetivos sean ejecutados, medidos y ajustados de manera continua.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p La administración es la ciencia que gestiona un conjunto de bienes materiales, recursos humanos, tecnológicos y financieros con el fin de generar un beneficio a sus inversionistas, a partir de allí se identifica con claridad que la administración nació como herramienta para garantizar la generación de resultados beneficiosos en una organización, mediante la puesta en marcha de una serie de recursos que al ser dispuestos para el logro de los objetivos, deben ser distribuidos en una estructura que facilite la ejecución de actividades mediante la sectorización de las funciones administrativas y el desempeño de cada rol vinculado a la organización.
        .bloque-texto-gg.color-primario
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img3.png')})`}"
          )
          .bloque-texto-gg__texto.p-4
            p.mb-0 De igual forma, este proceso promueve la articulación entre las diferentes áreas de la organización, garantizando coherencia entre lo que se planifica y lo que se ejecuta. Así, se favorece el trabajo colaborativo, el seguimiento permanente y la mejora continua de los procesos organizacionales.
      .col-lg-4.col-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img4.svg', width='180', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-bg05.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img5.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La planeación estratégica orienta el rumbo de la organización al integrar el análisis del entorno, la definición de objetivos y la asignación de recursos, permitiendo una gestión coherente, medible y enfocada en resultados.

    p.mb-4 A continuación, se presenta el proceso de planeación estratégica desagregado en pasos secuenciales que permiten orientar su implementación de manera estructurada:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img6.png', width='180', alt='Texto que describa la imagen')
      .col-lg-6
         LineaTiempoD.color-acento-botones
          p.mb-0(numero="1" titulo="Analizar el entorno empresarial") Consiste en evaluar factores internos y externos que influyen en la organización, como competencia, economía, tecnología y normatividad, utilizando herramientas como FODA o PESTEL para identificar oportunidades y riesgos. Ejemplo: una empresa analiza el mercado antes de lanzar un nuevo producto.
          p.mb-0(numero="2" titulo="Definir la dirección estratégica") Consiste en establecer el rumbo de la organización mediante la definición de la visión, la misión y los objetivos, orientando su posicionamiento en un periodo determinado. Ejemplo: una empresa orienta su estrategia hacia la innovación y expansión regional.
          p.mb-0(numero="3" titulo="Establecer objetivos y metas estratégicas") Consiste en definir objetivos claros, asignar responsables y establecer metas medibles que orienten el cumplimiento de la estrategia organizacional. Ejemplo: incrementar las ventas en un 15 % durante el próximo año.
          p.mb-0(numero="4" titulo="Desglosar los objetivos a nivel organizacional") Consiste en distribuir los objetivos estratégicos en áreas o procesos, definiendo actividades específicas que faciliten su ejecución y control. Ejemplo: el área comercial implementa campañas para cumplir metas de ventas.
          p.mb-0(numero="5" titulo="Gestionar y evaluar el desempeño") Consiste en ejecutar las acciones planificadas y medir los resultados mediante indicadores de gestión, con el fin de verificar el cumplimiento de los objetivos. Ejemplo: realizar seguimiento mensual a indicadores de productividad.
          p.mb-0(numero="6" titulo="Revisar y ajustar el plan estratégico") Consiste en evaluar periódicamente los resultados, identificar desviaciones y realizar ajustes que permitan mejorar el desempeño organizacional frente a cambios del entorno. Ejemplo: modificar estrategias ante una disminución en la demanda.

    .row.justify-content-center
      .col-lg-auto
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 En este contexto, la planeación estratégica se consolida como una herramienta fundamental para orientar la gestión organizacional y garantizar la coherencia entre la proyección institucional y las acciones desarrolladas. Para lograrlo, es necesario definir con claridad los elementos que dan identidad y sentido a la organización, como la misión, la visión y los valores, los cuales se abordan a continuación.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Misión, visión y valores
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la organización la misión, la visión y los valores son esenciales para construir la filosofía de la organización consolidada en una cultura organizacional que vincula políticas, regla, valores construyendo una identidad propia y definiendo las orientaciones para el desarrollo organizacional. Esta orientación se convierte en fundamento para la definición de reglas, normas y políticas que establecen el marco de acción y delimitan el comportamiento del equipo de trabajo y demás miembros; para esto es esencial definir la planeación estratégica, que no es otra cosa que diseñar desde cero la proyección que se anhela alcanzar en un período de tiempo determinado.
    p.mb-4 Los componentes clave de la planeación estratégica son la misión, la visión y los valores, los cuales se presentan a continuación:
    .row.justify-content-center.mb-4
      .col-lg-4
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema2/img8.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              p.text-center #[b Misión]: responde a las preguntas básicas que explican la razón de ser de la organización o empresa, tales como: ¿quiénes somos?, ¿qué hacemos?, ¿cuál es nuestro propósito? y ¿cuál es nuestro compromiso?
      .col-lg-4
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              p.text-center #[b Visión]: es la proyección que la organización desea alcanzar en el futuro, teniendo en cuenta el entorno en el que se desarrolla. Hace referencia al posicionamiento que la empresa espera lograr en un periodo determinado.
      .col-lg-4
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              p.text-center #[b Valores]: son los principios y criterios que orientan el comportamiento de la organización, definiendo su marco de actuación tanto a nivel interno como externo.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        p Al establecer la misión, la visión y los valores, la organización debe realizar una desagregación de objetivos que permita su asignación y desarrollo mediante la planeación táctica y operativa. En este sentido, se presentan los elementos de la planeación estratégica, los cuales integran el direccionamiento estratégico y definen con claridad cada uno de sus componentes, facilitando la comprensión del proceso y contribuyendo a la construcción de la identidad organizacional.
        .row.justify-content-center.align-items-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img11.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 A continuación, se presentan los principales elementos de la planeación estratégica, los cuales muestran los componentes que intervienen en este proceso y la forma en que se articulan para orientar la toma de decisiones, la definición de objetivos y la ejecución de acciones en la organización.
      .col-lg-4.col-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img12.png', width='180', alt='Texto que describa la imagen')

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Figura 2.
      span Elementos de la planeación estratégica
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema2/img13.svg', alt='Figura 2. Elementos de la planeación estratégica. Elementos de la planeación estratégica representados con íconos: misión, visión, análisis FODA, objetivos, estrategias, tácticas, recursos y capacitación, y plan de acción. La imagen organiza estos componentes de manera visual para mostrar su relación dentro del proceso estratégico y facilitar su comprensión como etapas interconectadas que orientan la gestión organizacional.')
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema2/img13_1.svg', alt='Figura 2. Elementos de la planeación estratégica. Elementos de la planeación estratégica representados con íconos: misión, visión, análisis FODA, objetivos, estrategias, tácticas, recursos y capacitación, y plan de acción. La imagen organiza estos componentes de manera visual para mostrar su relación dentro del proceso estratégico y facilitar su comprensión como etapas interconectadas que orientan la gestión organizacional.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img14.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p Para llevar a cabo el proceso de planeación estratégica, es necesario fortalecer las competencias del talento humano mediante procesos de capacitación. Esto implica la elaboración de un plan de acción que permita desarrollar el proceso estratégico con la participación de los colaboradores, quienes contribuyen a la definición de objetivos, estrategias, tácticas y recursos necesarios para su implementación.
        .row.justify-content-center.align-items-center
          .tarjeta-bg01.p-4
            .col-lg-10
              p.mb-0 Una vez identificados los elementos de la planeación estratégica, es importante comprender cómo se desarrollan dentro de un proceso organizado. A continuación, se presenta el proceso de la planeación estratégica, en el cual se evidencia la secuencia de etapas y la interacción entre sus componentes, desde el análisis del entorno hasta la formulación de estrategias, planes y presupuestos que orientan la gestión organizacional.
      
    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Figura 3.
      span Proceso de planeación estratégica
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema2/img15.svg', alt='Se presenta un diagrama de flujo que inicia con el análisis del entorno (premisas internas y externas, fortalezas, debilidades, oportunidades, amenazas y benchmarking), continúa con la definición de la visión, filosofía y misión, y avanza hacia objetivos, políticas, estrategias, programas y presupuestos, mostrando la relación secuencial entre sus componentes. ')
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema2/img15_1.svg', alt='Se presenta un diagrama de flujo que inicia con el análisis del entorno (premisas internas y externas, fortalezas, debilidades, oportunidades, amenazas y benchmarking), continúa con la definición de la visión, filosofía y misión, y avanza hacia objetivos, políticas, estrategias, programas y presupuestos, mostrando la relación secuencial entre sus componentes. ')

    .row.justify-content-center.align-items-center
      .col-lg-9.order-2.order-lg-1
        p El proceso de planeación estratégica integra de manera articulada diferentes elementos que permiten a la organización orientar su rumbo, tomar decisiones informadas y proyectar su desarrollo en el tiempo. La relación entre estos componentes evidencia que la gestión estratégica no se limita a la formulación de objetivos, sino que implica un análisis continuo del entorno, la definición de lineamientos y la implementación de acciones coherentes con la realidad organizacional.
        .row.justify-content-center.align-items-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img16.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 En este contexto, el análisis del entorno se convierte en un punto de partida fundamental para la planeación estratégica, ya que permite identificar factores internos y externos que inciden en el desempeño de la organización. A partir de este análisis, es posible reconocer oportunidades de mejora, anticipar riesgos y establecer estrategias pertinentes, dando paso al estudio del análisis FODA como herramienta clave para el diagnóstico organizacional.
      .col-lg-3.col-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img17.png', width='180', alt='Texto que describa la imagen')

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Análisis del entorno FODA
    p.mb-4 El análisis del entorno FODA es una herramienta estratégica que permite diagnosticar la situación real de una organización a partir del estudio de factores internos y externos. A través de este análisis, se identifican las debilidades y fortalezas al interior de la organización, así como las oportunidades y amenazas presentes en el entorno, lo que facilita la toma de decisiones informadas.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p 
        .bloque-texto-gg.color-primario
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img18.png')})`}"
          )
          .bloque-texto-gg__texto.p-4
            .row.mb-3
              .col-lg-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema2/img19.svg', width='180', alt='Texto que describa la imagen')
            p.mb-0 En primer lugar, el análisis interno permite reconocer las fortalezas, entendidas como las capacidades y recursos que favorecen el desempeño organizacional, así como las debilidades, que corresponden a aquellos aspectos que limitan su desarrollo. Por su parte, el análisis externo se enfoca en identificar las oportunidades, es decir, condiciones favorables del entorno que pueden ser aprovechadas, y las amenazas, que representan riesgos o situaciones adversas que pueden afectar el cumplimiento de los objetivos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img20.png', width='180', alt='Texto que describa la imagen')
          .col-lg-7
            p.mb-0 Este método de diagnóstico estratégico permite formular estrategias orientadas a potenciar las fortalezas, superar las debilidades, aprovechar las oportunidades y mitigar las amenazas. De esta manera, el análisis FODA se constituye en una base fundamental para la planeación estratégica, al contribuir a la definición de acciones coherentes con la realidad organizacional y el contexto en el que se desenvuelve.
        .row.justify-content-center
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La matriz FODA (o DOFA) es una herramienta que organiza la información del análisis en una tabla de cuatro cuadrantes, en la cual se relacionan los factores internos (fortalezas y debilidades) y los factores externos (oportunidades y amenazas). Esta estructura permite realizar un diagnóstico estratégico de manera ordenada y facilita la formulación de estrategias acordes con la situación de la organización, como se presenta a continuación:
      .col-lg-3.col-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img21.svg', width='180', alt='Texto que describa la imagen')
    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 3.
      span Matriz FODA aplicada a una organización de economía solidaria
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a
          table
            thead
              tr.tarjeta-bg06
                th Factores Internos
                th Fortalezas (F)
                th Debilidades (D)
            tbody
              tr
                td Organización
                td Experiencia en trabajo asociativo.
                td Baja capacidad administrativa.
              tr
                td Talento humano
                td Compromiso de los asociados.
                td Falta de capacitación técnica.
              tr
                td Recursos
                td Disponibilidad de materia prima local.
                td Limitaciones en infraestructura.
              tr
                td.text-bold Factores Externos
                td.text-bold Oportunidades (O)
                td.text-bold Amenazas (A)
              tr
                td Mercado
                td Crecimiento de la demanda local.
                td Alta competencia en el sector.
              tr
                td Entorno institucional
                td Programas de apoyo gubernamental.
                td Cambios en la normatividad.
              tr
                td Tecnología
                td Acceso a herramientas digitales.
                td Rezago tecnológico frente a competidores.
    .row.justify-content-center.mb-4
      .col-lg-auto
        figure
          img(src='@/assets/curso/temas/tema2/img22.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 A partir de la información organizada en la matriz FODA, la organización puede identificar de manera clara los factores que influyen en su desempeño y establecer estrategias orientadas a mejorar su gestión. Este análisis permite reconocer las capacidades internas, anticipar situaciones del entorno y definir acciones concretas que contribuyan al logro de los objetivos organizacionales.
    p.mb-4 En este contexto, el diagnóstico estratégico se constituye en una fase fundamental del proceso de planeación, ya que integra el análisis de los factores internos y externos para orientar la toma de decisiones. A continuación, se presentan sus principales componentes:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta--fondo1.p-1
          .row.justify-content-center.align-items-center
            .col-lg-9
              ol.lista-ol--cuadro
                li
                .lista-ol--cuadro__vineta
                  span A
                |  #[b Análisis interno]: evaluación de los recursos, capacidades y procesos propios de la organización.
                li
                .lista-ol--cuadro__vineta
                  span B
                | #[b Análisis externo]: identificación de factores del entorno que pueden influir en el desempeño organizacional.
                li
                .lista-ol--cuadro__vineta
                  span C
                | #[b Fortalezas]: aspectos internos que favorecen el logro de los objetivos.
                li
                .lista-ol--cuadro__vineta
                  span D
                | #[b Debilidades]: factores internos que limitan el desarrollo de la organización.
                li
                .lista-ol--cuadro__vineta
                  span E
                | #[b Oportunidades]: condiciones externas favorables que pueden ser aprovechadas.
                li
                .lista-ol--cuadro__vineta
                  span F
                | #[b Amenazas]: factores externos que representan riesgos para la organización.

            .col-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img23.svg', width='180', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-10
            .tarjeta-bg05.p-4(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/tema2/img24.svg', width='180', alt='Texto que describa la imagen')
                .col-lg-10
                  p.mb-0 El análisis FODA permite comprender la situación actual de la organización, integrando factores internos y externos. Este diagnóstico orienta la toma de decisiones estratégicas y la definición de acciones para el logro de los objetivos organizacionales.
    p.mb-4 Con el propósito de profundizar en la comprensión de la planeación estratégica y su aplicación en las organizaciones de economía solidaria, se presenta a continuación el recurso audiovisual que desarrolla de manera clara y estructurada el análisis de la misión, la visión, los valores organizacionales y la aplicación del análisis FODA, permitiendo identificar las fortalezas, debilidades, oportunidades y amenazas que orientan la toma de decisiones y la proyección estratégica.
    .row.justify-content-center.mb-4
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema2/img26.svg', alt='')
        .tarjeta.p-4(style="background-color:#FAF2DF; border-radius: 0 0 20px 20px;")
          .tarjeta.bg-white.p-4.custom-audio-card
            TarjetaAudio.color-acento-botones(
              texto="Pódcast"
              :audio="require('@/assets/curso/temas/audio/5.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    p A partir de este diagnóstico, la organización está en capacidad de formular estrategias coherentes que respondan a sus necesidades y desafíos, fortaleciendo su competitividad y sostenibilidad. En este sentido, el siguiente apartado aborda la formulación de estrategias, como etapa clave para transformar el análisis realizado en acciones concretas que contribuyan al logro de resultados.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Objetivos estratégicos, tácticos y operativos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p La planeación estratégica se concreta a través de la formulación de objetivos que orientan las acciones de la organización en distintos niveles. Estos objetivos permiten traducir la visión institucional en resultados alcanzables, facilitando la organización de los recursos, la toma de decisiones y el seguimiento del desempeño. En este sentido, es fundamental comprender la relación y complementariedad entre los objetivos estratégicos, tácticos y operativos.
        .cajon.color-primario.p-4.mb-4
          p En el contexto de la economía solidaria, los objetivos estratégicos orientan el desarrollo integral de la organización, priorizando el bienestar colectivo, la sostenibilidad y el cumplimiento de su propósito social. A partir de estos, se derivan los objetivos tácticos, que permiten organizar y ejecutar acciones en áreas como la gestión asociativa, la participación de los miembros y el fortalecimiento organizacional. Esta articulación asegura que las decisiones se implementen de manera coherente, promoviendo la autogestión, la cooperación y el desarrollo comunitario.
          p.mb-0 A continuación, se presentan los objetivos estratégicos, tácticos y operativos, con el propósito de comprender sus características, alcance y nivel de aplicación dentro de la organización, así como su contribución al logro de los resultados institucionales.
      .col-lg-3.col-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img26.png', width='180', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img27.png', width='180', alt='Texto que describa la imagen')
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Objetivos estratégicos")
            .col
              p.mb-0 corresponden a los logros que la organización proyecta alcanzar en el largo plazo, orientados al cumplimiento de su visión, misión y valores. Definen el rumbo general, establecen prioridades y guían la toma de decisiones directivas, permitiendo asignar recursos y evaluar resultados.
          .row(titulo="Objetivos tácticos")
            .col
              p.mb-0 son metas de mediano y corto plazo que permiten desarrollar los objetivos estratégicos mediante acciones específicas en áreas o procesos de la organización. Se enfocan en la implementación de actividades concretas, facilitando la coordinación del trabajo y el uso eficiente de los recursos disponibles.
          .row(titulo="Objetivos operativos")
            .col
              p.mb-0 son metas de corto plazo orientadas a la ejecución de tareas y actividades diarias. Se caracterizan por ser específicas y medibles, definidas en periodos cortos, lo que permite hacer seguimiento al desempeño, mejorar la productividad y asegurar el cumplimiento de los objetivos organizacionales.
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-0 En conjunto, los objetivos estratégicos, tácticos y operativos permiten estructurar la gestión organizacional de manera coherente y articulada, asegurando que las decisiones de alto nivel se traduzcan en acciones concretas. Esta jerarquización facilita la planificación, el seguimiento y la evaluación del desempeño, contribuyendo al logro de resultados y al fortalecimiento de la organización en su entorno.
      .col-lg-auto
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
    .bloque-texto-gg.bloque-texto-gg--inverso.color-primario
      .bloque-texto-gg__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img28.svg')})`}"
      )
      .bloque-texto-gg__texto.p-4
        p.mb-0 Una vez definidos los objetivos estratégicos, tácticos y operativos, es necesario establecer los instrumentos que permitan su implementación de manera organizada y efectiva. En este sentido, los planes, programas y proyectos se constituyen en herramientas fundamentales para materializar la estrategia, traduciendo los objetivos en acciones concretas que orientan la gestión y facilitan el logro de resultados.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Planes, programas y proyectos
    p.mb-4 La planeación estratégica requiere instrumentos que permitan llevar a la práctica los objetivos definidos, garantizando su ejecución de manera organizada y coherente. En este contexto, los planes, programas y proyectos constituyen herramientas fundamentales que estructuran las acciones, los recursos y los tiempos necesarios para alcanzar los resultados esperados en la organización.
    .bloque-texto-gg.color-primario
      .bloque-texto-gg__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img29.png')})`}"
      )
      .bloque-texto-gg__texto.p-4
        .row.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img30.svg', width='180', alt='Texto que describa la imagen')
        p.mb-0 Estos instrumentos se articulan de forma jerárquica, pasando de un nivel general a uno más específico, lo que facilita la implementación progresiva de la estrategia. Así, el plan orienta el direccionamiento general, el programa integra y coordina acciones relacionadas, y el proyecto concreta la ejecución mediante actividades definidas, permitiendo materializar los objetivos estratégicos en resultados verificables.
    p.mb-4 Para la implementación de la planeación estratégica, es necesario contar con instrumentos que permitan organizar y ejecutar las acciones definidas. En este sentido, el plan, el programa y el proyecto se estructuran de manera jerárquica, facilitando la transición desde el direccionamiento general hasta la ejecución concreta de actividades. A continuación, se presentan estos instrumentos, destacando sus características y nivel de aplicación dentro de la organización:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Plan")
            .col
              p El plan es el documento base que orienta el direccionamiento estratégico de la organización, en el cual se definen las acciones, recursos y tiempos necesarios para alcanzar los objetivos a largo plazo. Permite estructurar la gestión organizacional de manera integral, articulando la visión, la misión y las estrategias en un horizonte definido.
              p Entre sus principales características se encuentran:
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | #[b Hoja de ruta]: orienta el camino desde la situación actual hacia el logro de los objetivos propuestos. 
                li 
                  i.lista-ul__vineta
                  | #[b Acciones y tácticas]: establece actividades concretas, responsables y plazos para su ejecución. 
                li 
                  i.lista-ul__vineta
                  | #[b Asignación de recursos]: define los recursos humanos, financieros y técnicos requeridos. 
                li 
                  i.lista-ul__vineta
                  | #[b Medición]: incorpora indicadores para evaluar el avance y cumplimiento de las metas. 
                li 
                  i.lista-ul__vineta
                  | #[b Adaptabilidad]: permite ajustes según cambios en el entorno o en la organización.
              p.mb-0 En este sentido, el plan cumple la función de articular las intenciones estratégicas con su ejecución, facilitando la toma de decisiones y el seguimiento de los resultados.
          .row(titulo="Programa")
            .col
              p El programa es un conjunto de proyectos interrelacionados que se gestionan de manera coordinada para lograr objetivos comunes. Su propósito es optimizar recursos y generar resultados integrales que no se alcanzarían mediante acciones aisladas, permitiendo materializar el plan estratégico a través de iniciativas organizadas.
              p Entre sus características principales se destacan:
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | #[b Alcance]: abarca un conjunto de acciones más amplio que un proyecto individual. 
                li 
                  i.lista-ul__vineta
                  | #[b Componentes]: integra metas, actividades, cronogramas y responsables. 
                li 
                  i.lista-ul__vineta
                  | #[b Finalidad]: contribuye al logro de objetivos estratégicos mediante acciones articuladas. 
                li 
                  i.lista-ul__vineta
                  | #[b Enfoque]: traduce la estrategia en acciones concretas, operativas y medibles. 
              p.mb-0 De esta manera, el programa actúa como un nivel intermedio de planificación que coordina esfuerzos y asegura coherencia en la ejecución de la estrategia.

          .row(titulo="Proyecto")
            .col
              p El proyecto es un esfuerzo temporal con características definidas, orientado a la creación de un producto, servicio o resultado específico. Se desarrolla con recursos, tiempos y responsables claramente establecidos, y constituye la unidad básica de ejecución dentro de la planeación estratégica.
              p Sus principales características son:
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | #[b Temporalidad]: tiene un inicio y un fin definidos. 
                li 
                  i.lista-ul__vineta
                  | #[b Alineación estratégica]: responde a los objetivos del plan y del programa. 
                li 
                  i.lista-ul__vineta
                  | #[b Gestión de recursos]: optimiza el uso de recursos humanos, financieros y técnicos. 
                li 
                  i.lista-ul__vineta
                  | #[b Ejecución]: convierte las estrategias en acciones concretas y resultados verificables. 
                li 
                  i.lista-ul__vineta
                  | #[b Control]: permite hacer seguimiento al avance y gestionar riesgos. 
              p.mb-0 En consecuencia, el proyecto concreta la estrategia en resultados tangibles, asegurando la implementación efectiva de las acciones planificadas.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Los planes, programas y proyectos constituyen instrumentos fundamentales para la implementación de la planeación estratégica, ya que permiten organizar, coordinar y ejecutar las acciones necesarias para el logro de los objetivos organizacionales. Su articulación jerárquica facilita la transición desde el direccionamiento estratégico hasta la ejecución operativa, garantizando coherencia en la gestión y el uso eficiente de los recursos.
        .tarjeta-bg01.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img31.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 De esta manera, la adecuada formulación y gestión de estos instrumentos contribuye al cumplimiento de metas, al seguimiento del desempeño y a la generación de resultados sostenibles, fortaleciendo la capacidad de la organización para responder a las dinámicas y exigencias del entorno.
      .col-lg-3.col-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img32.svg', width='180', alt='Texto que describa la imagen')
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
