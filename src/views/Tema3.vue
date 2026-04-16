<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-4
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Las organizaciones de economía solidaria

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Organización Internacional del Trabajo (OIT, 2010) reconoce la economía solidaria como un modelo con rasgos distintivos que lo diferencian del capitalismo convencional: la gobernanza democrática, la gestión autónoma y la primacía del interés colectivo sobre el capital. Estas características han posicionado a las organizaciones solidarias como una alternativa real para el desarrollo económico incluyente, con respaldo de gobiernos, actores sociales y sociedad civil en todo el mundo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img2.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 En Colombia, este modelo agrupa entidades que operan desde el ámbito privado con incidencia comunitaria, aplicando principios de autogestión, participación voluntaria e independencia. Comprender sus fundamentos es el punto de partida para identificar las formas asociativas, reconocer su marco legal y tomar decisiones informadas sobre la constitución y gestión de una organización de economía solidaria.
        p.mb-4 El modelo solidario no se sostiene únicamente en su estructura jurídica y su verdadero fundamento son los valores y principios que orientan cada decisión interna. A continuación, se presentan estos pilares que permiten reconocer, de manera clara y puntual, qué hace diferente a las organizaciones solidarias de cualquier otra forma empresarial:
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img3.png', width='180', alt='Texto que describa la imagen')

    .tarjeta--fondo2.p-2.px-5.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.d-none.d-lg-block
          figure
            img(src="@/assets/curso/temas/tema3/img4.png" alt="Persona con laptop")
        .col-lg-8.col-11
          SlyderF(columnas="col-md-6 col-lg-6 col-xl-6")
            .tarjeta.tarjeta-slyderf.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema3/img5.svg' alt='Icono')
              h4.text-center Ayuda mutua:
              p.text-center Apoyo y colaboración recíprocos entre los asociados para obtener beneficios comunes, sustentados en la responsabilidad individual que se potencia con el esfuerzo colectivo.
            .tarjeta.tarjeta-slyderf.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema3/img6.svg' alt='Icono')
              h4.text-center Democracia:
              p.text-center Participación igualitaria de todos los miembros en el ejercicio de sus derechos y deberes, orientada a reducir brechas económicas y promover el bienestar colectivo.
            .tarjeta.tarjeta-slyderf.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema3/img7.svg' alt='Icono')
              h4.text-center Equidad:
              p.text-center Creación de condiciones que favorecen la igualdad de oportunidades para grupos históricamente excluidos, reconociendo la equidad como sinónimo de justicia y equilibrio.
            .tarjeta.tarjeta-slyderf.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema3/img8.svg' alt='Icono')
              h4.text-center Solidaridad:
              p.text-center Conciencia colectiva que impulsa la colaboración y el apoyo mutuo entre los integrantes de una comunidad, como condición necesaria para el desarrollo integral de sus miembros.
            .tarjeta.tarjeta-slyderf.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema3/img9.svg' alt='Icono')
              h4.text-center Primacía de las personas sobre el capital:
              p.text-center Las decisiones organizacionales priorizan el bienestar colectivo y la calidad de vida de los asociados por encima de la maximización de utilidades.
            .tarjeta.tarjeta-slyderf.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema3/img10.svg' alt='Icono')
              h4.text-center Gestión democrática y participativa:
              p.text-center Los miembros participan en la toma de decisiones de manera igualitaria, aplicando el principio de un asociado, un voto.

    .row.justify-content-center.align-items-center
      .col-lg-auto
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 Los valores y principios presentados no son simples declaraciones de intención, son los pilares que orientan cada decisión dentro de una organización solidaria, desde la distribución de los excedentes hasta la elección de sus directivos. Comprenderlos en profundidad permite reconocer qué hace diferente a este modelo económico y por qué su aplicación coherente es condición indispensable para la sostenibilidad de cualquier entidad solidaria. En los numerales siguientes se explorará cómo estos valores se materializan en la historia, la estructura y el marco legal del sector.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Origen y evolución

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p.mb-4 La economía solidaria no surgió como una teoría académica sino como una respuesta práctica de los trabajadores ante las condiciones de explotación generadas por la Revolución Industrial en el siglo XIX. Ante el desempleo y la degradación salarial, grupos de obreros comenzaron a organizarse, a reunir sus recursos y a trabajar de manera conjunta para acceder a bienes básicos a precios justos. De este proceso emergieron las primeras cooperativas y sociedades mutualistas de la era moderna.
        .tarjeta-bg02.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img11.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Desde ese origen obrero en Europa, el modelo se expandió hacia América Latina y llegó a Colombia con una historia normativa que se extiende desde 1931 hasta la actualidad. Reconocer este recorrido histórico permite comprender por qué la economía solidaria es hoy una alternativa vigente, con estructura legal propia, organismos de control y miles de organizaciones activas en todo el territorio nacional.
        .p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img12.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-9
              p.mb-0 Para comprender cómo llegó a consolidarse el sector solidario en Colombia, es necesario recorrer los hitos que marcaron su desarrollo. La siguiente línea de tiempo presenta, paso a paso, los momentos clave que transformaron una iniciativa obrera del siglo XIX en el marco normativo e institucional que hoy regula miles de organizaciones en el país.
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img13.png', width='180', alt='Texto que describa la imagen')

    LineaTiempoE.color-primario.mb-5
      .row(titulo="1844" subtitulo="")
        .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img14.svg', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          h5 Pioneros de Rochdale (Reino Unido)
          p 28 artesanos fundan la primera cooperativa moderna y establecen los principios de trato honesto, participación democrática y distribución de beneficios según la contribución de cada miembro.

      .row(titulo="1931" subtitulo="")
        .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img15.svg', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          h5 Primera ley cooperativa en Colombia
          p La Ley 134 da inicio a la formalización del modelo solidario en Colombia, estableciendo el primer marco legal para las organizaciones cooperativas en el país.
      
      .row(titulo="1986" subtitulo="")
        .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img16.svg', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          h5 Adopción del concepto de economía solidaria
          p El Decreto 2536 crea el Consejo Nacional de Economía Solidaria (CONES) y reconoce el sector como componente estratégico del entorno económico nacional
      
      .row(titulo="1988" subtitulo="")
        .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img17.svg', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          h5 Ley 79: organización del sector cooperativo
          p Organiza las formas solidarias del cooperativismo, las asociaciones mutuales y los fondos de empleados, dotando al sector de un marco propicio para su desarroll
      
      .row(titulo="1998" subtitulo="")
        .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img18.svg', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          h5 Ley 454: marco conceptual definitivo
          p Determina el marco conceptual de la economía solidaria, crea la Superintendencia de la Economía Solidaria (Supersolidaria) y el FOGACOOP.
      
      .row(titulo="Siglo XXI" subtitulo="")
        .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img19.svg', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          h5 Consolidación y crecimiento
          p El cooperativismo se consolida como la figura más destacada del sector solidario en Colombia, con crecimiento constante y reconocimiento internacional por la OIT (2010).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img20.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p.mb-4 La historia de la economía solidaria demuestra que este modelo es el resultado de más de un siglo de aprendizajes colectivos, ajustes normativos y resistencia ante las inequidades del mercado. Cada hito de esta línea de tiempo representa una conquista que amplió las posibilidades del sector y fortaleció su legitimidad. Reconocer este recorrido permite valorar el alcance del modelo y entender por qué su definición, sus tipos de organización y su marco normativo son el producto de una construcción histórica y social que sigue evolucionando.
        .tarjeta.tarjeta-bg01.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img21.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 El modelo solidario se sostiene sobre cuatro valores que no funcionan de manera aislada: se refuerzan mutuamente y orientan cada decisión dentro de la organización. Seleccione cada valor para conocer en detalle qué significa y cómo se expresa en la práctica solidaria.

    .row.justify-content-center.mb-4
      .col-lg-10
        .d-none.d-lg-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img22.svg', alt='Infografía de matriz RACI')
                

            .tarjeta.tarjeta-bg01.p-3(x="33%" y="69%" numero="+")
              p Apoyo y colaboración recíprocos que permiten suplir necesidades comunes de manera colectiva.

            .tarjeta.tarjeta-bg01.p-3(x="43%" y="50%" numero="+")
              p Participación igualitaria de todos los asociados en el ejercicio de derechos y decisiones organizacionales.
            
            .tarjeta.tarjeta-bg01.p-3(x="58%" y="50%" numero="+")
              p Creación de condiciones justas que garantizan igualdad de oportunidades para los grupos históricamente excluidos.

            .tarjeta.tarjeta-bg01.p-3(x="66%" y="70%" numero="+")
              p Conciencia colectiva que impulsa la colaboración y el apoyo mutuo para el desarrollo comunitario integral.
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema3/img23.svg', alt='Matriz RACI para dispositivos móviles')

    p.mb-5 Estos cuatro valores no son una lista de buenas intenciones, son los criterios que distinguen a una organización verdaderamente solidaria de una que solo adopta la forma jurídica sin asumir su esencia. Una cooperativa que no practica la democracia interna, una mutual que no fomenta la equidad o un fondo de empleados que no cultiva la solidaridad entre sus miembros habrán perdido el sentido que justifica su existencia. Reconocer y aplicar estos valores es, por tanto, la base de cualquier proceso de formalización y gestión solidaria.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-bg05.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img24.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Además de los valores que fundamentan su identidad, la economía solidaria se rige por principios que operativizan esos valores y orientan el comportamiento concreto de las organizaciones en su gestión cotidiana. Mientras los valores responden a la pregunta¿en qué creemos?, los principios responden a¿cómo actuamos?

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-auto
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 A continuación, se presentan los cinco principios que traducen los valores solidarios en criterios de acción concretos para la toma de decisiones organizacionales; cada uno se desarrolla de forma independiente para facilitar su comprensión y apropiación:

    .row.justify-content-center.mb-5
      .col-7.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema3/img25.png", alt="Imagen decorativa") 
      .col-lg-6
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Primacía de las personas y el objetivo social sobre el capital") Las decisiones empresariales priorizan la equidad, el bienestar colectivo y la calidad de vida de los asociados por encima de la acumulación de capital.
          p(numero="2" titulo="Gestión democrática y participativa") Los miembros participan en la toma de decisiones de manera igualitaria. Cada asociado tiene voz y voto en los asuntos de la organización, sin importar el monto de su aporte.
          p(numero="3" titulo="Solidaridad y cohesión social") Se fomenta la inclusión de colectivos vulnerables y la igualdad de oportunidades, fortaleciendo el tejido social y la cohesión entre los miembros de la comunidad.
          p(numero="4" titulo="Compromiso con el territorio") Las entidades solidarias contribuyen al desarrollo local, favoreciendo la creación de empleo en comunidades desfavorecidas y reinvirtiendo sus esfuerzos en el territorio donde operan.
          p(numero="5" titulo="Reinversión de beneficios") Los excedentes generados se reinvierten en la entidad o en proyectos de beneficio social, en lugar de distribuirse como utilidades individuales entre sus miembros.
         
    .row.justify-content-center.align-items-center
      .col-lg-9
        .tarjeta.tarjeta-bg01.p-4
          .row.justify-content-center
              .col-lg-auto
                figure
                  img(src='@/assets/curso/temas/tema3/img26.svg', width='180', alt='Texto que describa la imagen')
              .col-lg-10
                p.mb-0 Los valores y principios presentados constituyen el ADN de la economía solidaria, definen su identidad, orientan su gestión y la distinguen de cualquier otra forma organizativa. Comprenderlos en profundidad es el punto de partida indispensable para avanzar al numeral siguiente, donde se abordará la definición formal de la economía solidaria según la Ley 454 de 1998 y se identificarán los tipos de entidades que el ordenamiento jurídico colombiano reconoce como parte del sector solidario.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img27.png', width='180', alt='Texto que describa la imagen')

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Concepto y definición

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img28.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Ley 454 de 1998 define la economía solidaria como un sistema socioeconómico, cultural y ambiental conformado por el conjunto de fuerzas sociales organizadas en formas asociativas identificadas por prácticas autogestionarias solidarias, democráticas y humanistas, sin ánimo de lucro, para el desarrollo integral del ser humano como sujeto, actor y fin de la economía. Esta definición establece que el propósito central no es la generación de utilidades sino el bienestar de las personas que conforman la organización y de su entorno comunitario.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-bg05.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img29.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La ausencia de ánimo de lucro es la característica que une a todas las organizaciones solidarias y las distingue de las sociedades mercantiles, pero no todas las entidades sin ánimo de lucro son iguales: su naturaleza, su objeto social y su régimen jurídico determinan diferencias esenciales que es necesario reconocer.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 En Colombia, las entidades sin ánimo de lucro se organizan en dos grandes grupos que, aunque comparten esta característica, presentan naturalezas, objetos sociales y regímenes jurídicos distintos. Identificar a cuál de estos grupos pertenece una organización es el primer paso para comprender sus obligaciones legales y sus posibilidades de acción.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.h-100
        .tarjeta--container.row
          .col-md.tarjeta.tarjeta-bg02.p-5.w-100
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema3/img30.svg', alt='Texto que describa la imagen')
              
            p #[b Organizaciones solidarias de desarrollo: ]son entidades sin ánimo de lucro orientadas al bienestar comunitario que:
            ul.lista-ul
              li #[b • ] Agrupan fundaciones, corporaciones y asociaciones de carácter comunitario.
              li #[b • ] Pueden o no actuar en los mercados, con fines más amplios que los socioeconómicos.
              li #[b • ] Se orientan principalmente al desarrollo social, cultural o ambiental de una comunidad.
              
          .col-md.tarjeta.tarjeta-bg08.p-5.w-100
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema3/img31.svg', alt='Texto que describa la imagen')
              
            p #[b Organizaciones de economía solidaria: ]son empresas asociativas sin ánimo de lucro de carácter mutualista que:
            ul.lista-ul
              li #[b • ] Comprenden cooperativas, precooperativas, asociaciones mutuales y fondos de empleados.
              li #[b • ] Actúan en los mercados con fines socioeconómicos.
              li #[b • ] Se rigen por un marco normativo específico que garantiza su funcionamiento democrático y solidario.

    .row.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img32.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        .tarjeta-bg01.p-4(data-aos="fade-up")
          .row.mb-3
              .col-lg-1.mb-5
                figure
                  img(src='@/assets/curso/temas/tema3/img33.svg', width='180', alt='Texto que describa la imagen')
              .col-lg-12
                p.mb-0 Conocer la definición legal de la economía solidaria y distinguir los dos grupos de entidades sin ánimo de lucro permite ubicar con precisión el tipo de organización que se desea constituir o gestionar, comprender sus obligaciones y reconocer el propósito que la anima. Sin embargo, entender una organización solidaria únicamente desde su definición jurídica resulta insuficiente, es necesario situarla en el contexto económico y social en el que opera. Por ello, el numeral siguiente presenta el panorama de la economía solidaria en el ámbito nacional e internacional, mostrando cómo este modelo ha tomado formas distintas según cada territorio y cuál es el lugar que ocupa Colombia dentro de ese movimiento global.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Contexto nacional e internacional 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        p.mb-4 La economía solidaria es un fenómeno global que adopta formas distintas según el contexto socioeconómico y cultural de cada región. En Europa se consolida como complemento del sector público en la prestación de servicios sociales; en Norteamérica predomina bajo la figura del tercer sector o sector no lucrativo; y en América Latina se expresa a través de movimientos cooperativistas y de autogestión con raíces históricas en las luchas obreras del siglo XX.
        .tarjeta.tarjeta-bg05.p-4(data-aos="fade-up")
          .row.justify-content-center.mb-3
              .col-lg-auto
                figure
                  img(src='@/assets/curso/temas/tema3/img34.svg', width='180', alt='Texto que describa la imagen')
              .col-lg-10
                p.mb-0 Las organizaciones solidarias colombianas no son experiencias aisladas, hacen parte de un movimiento global con décadas de trayectoria que demuestra que la cooperación y la solidaridad son respuestas válidas a los desafíos económicos en cualquier contexto y región del mundo.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img35.png', width='180', alt='Texto que describa la imagen')    
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img36.png', width='180', alt='Texto que describa la imagen')    
      .col-lg-9
        .row.justify-content-center.mb-3
          .col-lg-auto
            figure
              img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 En Colombia, el cooperativismo representa la figura más destacada del sector, con crecimiento sostenido desde la primera década del siglo XXI. Las organizaciones solidarias colombianas contribuyen a la disminución del desempleo, a la redistribución de la riqueza y al desarrollo local, convirtiéndose en espacios de participación que fortalecen la economía del país desde sus comunidades.
        .tarjeta.tarjeta-bg03.p-4(data-aos="fade-up")
          p.mb-4 Según Orellana (2007), a nivel mundial la economía solidaria adopta formas asociativas diversas, cuya influencia varía según el contexto económico y social de cada región. Esta diversidad no es una debilidad del modelo, es precisamente su capacidad de adaptarse a realidades distintas lo que explica su vigencia en cinco continentes y su reconocimiento por parte de organismos internacionales como la OIT. Conocer cómo se expresa el modelo en cada región permite comprender que Colombia no construye su sector solidario de manera aislada, sino en diálogo permanente con una tradición global de cooperación y autogestión. A continuación, se presentan las principales regiones donde la economía solidaria ha tenido mayor desarrollo, identificando en cada caso su rasgo más característico y su aporte al movimiento solidario mundial.

    .row.justify-content-center.mb-4
      
      .col-lg-6
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Europa. Complemento del sector público") En países como Italia y España, las organizaciones solidarias complementan las labores del Estado en la prestación de servicios sociales con alta demanda, actuando como operadores de bienestar social con gestión democrática y sin ánimo de lucro.
          p(numero="2" titulo="Norteamérica. El tercer sector") En Estados Unidos y Canadá predomina el tercer sector, que abastece necesidades no cubiertas por el sector público ni el privado, con presencia significativa en educación, salud y servicios comunitarios.
          p(numero="3" titulo="América Latina. Cooperativismo y autogestión") La región cuenta con una larga tradición de movimientos cooperativistas y de autogestión obrera. Hitos como la Revolución Mexicana (1930) impulsaron el sindicalismo como base para la creación de empresas administradas por sus propios trabajadores.
          p(numero="4" titulo="Colombia. Crecimiento sostenido") El cooperativismo ha experimentado crecimiento constante desde inicios del siglo XXI. Las cooperativas, precooperativas, fondos de empleados y asociaciones mutuales contribuyen activamente a la disminución del desempleo y al desarrollo socioeconómico local
      .col-7.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema3/img37.png", alt="Imagen decorativa")  
    p.mb-0 Esta perspectiva global amplía las posibilidades de aprendizaje y de articulación con redes internacionales de comercio justo, cooperación y desarrollo. Con este panorama como referencia, el paso siguiente es identificar con precisión qué tipos de organizaciones conforman el sector solidario en Colombia y cuáles son sus características esenciales para tomar decisiones informadas.     

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Clasificación

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p La importancia de la Economía Social y Solidaria (ESS) radica en que la filosofía y las características específicas de las entidades que la conforman implican una nueva visión y actitud frente a la actividad económica, la solidaridad y la cooperación se convierten en el mecanismo central para satisfacer necesidades comunes, en lugar de la competencia individual por el beneficio propio. Esta perspectiva exige un conocimiento profundo del sector, pues solo quien comprende su lógica interna puede reconocer las posibilidades reales que ofrece como alternativa de desarrollo económico y social.
        p En Colombia, el sector de la economía solidaria se organiza en dos grandes grupos reconocidos por la Ley 454 de 1998: 
        .row.justify-content-center
          .col-lg-6
            .tarjeta-avatar.h-100
              img(src='@/assets/curso/temas/tema3/img38.svg' alt='AvatarTop')
              .tarjeta.color-primario.w-100
                .p-4
                  h5.text-center Organizaciónes de economía solidaria.
                  
          .col-lg-6
            .tarjeta-avatar.h-100
              img(src='@/assets/curso/temas/tema3/img39.svg' alt='AvatarTop')
              .tarjeta.color-primario.w-100
                .p-4
                  h5.text-center Organizaciones solidarias de desarrollo.
                  
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img40.png', width='180', alt='Texto que describa la imagen')    

    .row.justify-content-center.align-items-center.mb-4
        .row.justify-content-center.mb-3
            .col-lg-auto
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-3 Cada uno de estos grupos está conformado por tipos de entidades con características, objetos sociales y regímenes jurídicos propios, que se presentan a continuación para facilitar su identificación y comprensión.
              p.mb-0 A continuación, se presentan los principales tipos de organizaciones que conforman el sector solidario en Colombia, con sus características esenciales para facilitar su comprensión y comparación.

    .row.justify-content-center.mb-4
      .col-lg-5
        .tarjeta.tarjeta-bg02.p-4.h-100(data-aos="fade-up")
          .row.w-100
            .col-lg-auto.d-none.d-lg-block.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img41.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              h5 #[b Cooperativa]
              p.mb-0 Empresa asociativa sin ánimo de lucro en la que los trabajadores o los usuarios son simultáneamente aportantes y gestores. Se crea para producir o distribuir bienes o servicios en beneficio de sus asociados y la comunidad.
      .col-lg-5
        .tarjeta.tarjeta-bg02.p-4.h-100(data-aos="fade-up")
          .row.w-100
            .col-lg-auto.d-none.d-lg-block.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img42.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              h5 #[b Precooperativa]
              p.mb-0 Grupo organizado que realiza actividades permitidas a las cooperativas pero que, por carecer de capacidad económica, educativa o técnica, aún no puede constituirse como cooperativa. Requiere el acompañamiento de una entidad promotora.
    .row.justify-content-center.mb-4
      .col-lg-5
        .tarjeta.tarjeta-bg02.p-4.h-100(data-aos="fade-up")
          .row.w-100
            .col-lg-auto.d-none.d-lg-block.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img43.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              h5 #[b Asociación mutual]
              p.mb-0 Persona jurídica de derecho privado sin ánimo de lucro, constituida democráticamente por personas naturales para brindarse ayuda recíproca frente a riesgos eventuales y satisfacer necesidades mediante servicios de seguridad social.
      .col-lg-5
        .tarjeta.tarjeta-bg02.p-4.h-100(data-aos="fade-up")
          .row.w-100
            .col-lg-auto.d-none.d-lg-block.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img44.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              h5 #[b Fondo de empleados]
              p.mb-0 Empresa asociativa sin ánimo de lucro constituida por trabajadores dependientes de una misma empresa. Presta servicios de ahorro y crédito exclusivamente a sus asociados, quienes se obligan a realizar un ahorro permanente

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        .row.justify-content-center.mb-4
            .col-lg-auto
              figure
                img(src='@/assets/curso/temas/tema3/img45.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La elección del tipo de organización solidaria no es una decisión menor, determina el número de personas necesarias para constituirla, las actividades que podrá desarrollar, las obligaciones de capacitación que deberá cumplir y la entidad ante la cual deberá responder. Por ello, antes de iniciar cualquier proceso de formalización, es indispensable analizar con detalle las características de cada figura y contrastarlas con el propósito, las capacidades y el contexto del grupo que desea asociarse. Esta decisión informada es el primer paso hacia una organización solidaria sólida y sostenible en el tiempo.
        .tarjeta.tarjeta-bg01.p-4(data-aos="fade-up")
          p.mb-0 Las cuatro formas asociativas del sector solidario en Colombia comparten la ausencia de ánimo de lucro como rasgo común, pero difieren en su objeto social, el número mínimo de asociados, las actividades que les están permitidas y el marco jurídico que las regula. La siguiente tabla integrada presenta estas características de manera comparativa para facilitar su identificación y distinción.
      .col-lg-3.col-8.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img46.png', width='180', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span Caracterización comparativa de las organizaciones de economía solidaria en Colombia
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a
          table
            thead
              tr.tarjeta-bg06
                th.h4 Característica
                th.h4 Cooperativa
                th.h4 Precooperativa
                th.h4 Asociación mutual
                th.h4 Fondo de empleados
            tbody
              tr
                th.bg-crema-claro Definición
                td Empresa asociativa donde trabajadores/usuarios son aportantes y gestores para producir o distribuir bienes/servicios.
                td Grupo organizado para actividades cooperativas que aún no puede constituirse como cooperativa por falta de capacidad técnica o económica.
                td Persona jurídica constituida para ayuda recíproca frente a riesgos mediante servicios de seguridad social.
                td Empresa constituida por trabajadores dependientes para prestar servicios de ahorro y crédito a sus asociados.
              tr
                th.bg-crema-claro Asociados
                td Mayores de edad, personas jurídicas sin ánimo de lucro y de derecho público.
                td Personas naturales mayores de 14 años.
                td Personas naturales mayores de 14 años.
                td Entidades solidarias y personas naturales de la misma empresa (vínculo común).
              tr
                th.bg-crema-claro Mínimo de asociados
                td.text-center 20
                td.text-center 5
                td.text-center 25
                td.text-center 10
              tr
                th.bg-crema-claro Dirección
                td Asamblea y consejo de administración.
                td Junta de asociados, comité de administración (Asamblea/Consejo si son +10).
                td Asamblea y junta directiva.
                td Asamblea y junta directiva.
              tr
                th.bg-crema-claro Control
                td Junta de vigilancia y revisor fiscal.
                td Junta de vigilancia y revisor fiscal.
                td Junta de control social y revisor fiscal.
                td Comité de control social y revisor fiscal.
              tr
                th.bg-crema-claro Representante legal
                td Gerente.
                td Director ejecutivo.
                td Gerente o presidente de junta.
                td Gerente.
              tr
                th.bg-crema-claro Actividades
                td Todas según su clase.
                td Todas las cooperativas, excepto ahorro y crédito.
                td Seguridad social y promoción del ser humano.
                td Ahorro y crédito, y convenios.
              tr
                th.bg-crema-claro Capacitación
                td.text-center 20 horas.
                td.text-center 20 horas.
                td.text-center 10 horas.
                td.text-center 20 horas.
              tr
                th.bg-crema-claro Marco jurídico
                td Ley 79 de 1988.
                td Ley 79 de 1988.
                td Decreto 1480 de 1989.
                td Decreto 1481 de 1989.
              tr
                th.bg-crema-claro Vigilancia
                td Supersolidaria y otras.
                td Supersolidaria y otras.
                td Supersolidaria.
                td Supersolidaria.
          figcaption Fuente: con base en Calderón (s.f.), Ley 79 de 1988, Decreto 1480 de 1989 y Decreto 1481 de 1989

    .row.justify-content-center.align-items-center
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img47.svg', width='180', alt='Texto que describa la imagen')  
      .col-lg-9
        .tarjeta-bg02.p-4(data-aos="fade-up")
          .row.mb-3
              .col-lg-1.mb-3
                figure
                  img(src='@/assets/curso/temas/tema3/img48.svg', width='180', alt='Texto que describa la imagen')
              .col-lg-12
                p.mb-0 La tabla anterior permite identificar con claridad las diferencias esenciales entre las cuatro formas asociativas del sector solidario en Colombia: cada una responde a un propósito específico, exige un número mínimo de integrantes y se rige por una normativa particular que determina sus actividades, su estructura de gobierno y los organismos ante los cuales debe responder. Esta comprensión comparativa es el punto de partida indispensable para tomar decisiones informadas sobre qué tipo de organización constituir según el contexto, los objetivos y las capacidades del grupo interesado en asociarse. El funcionamiento legal de cualquiera de estas formas asociativas está sustentado en un conjunto de disposiciones constitucionales, legales y reglamentarias que se abordan en el numeral siguiente.

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.5 Marco normativo del sector solidario en Colombia

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img49.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El marco normativo del sector solidario en Colombia está conformado por normas de tres niveles jerárquicos: la Constitución Política, las leyes del Congreso y los decretos del Gobierno Nacional. La Constitución de 1991 es el fundamento superior de este marco: en sus artículos 38, 58, 64, 95 y 333 garantiza el derecho de libre asociación, protege las formas solidarias de propiedad, promueve el acceso a la tierra de manera asociativa y reconoce la función social de la empresa como una obligación del Estado colombiano frente al sector solidario.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-bg05.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img50.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 El desconocimiento de las normas que rigen una organización solidaria puede derivar en sanciones, pérdida de beneficios tributarios o incluso en su disolución: conocer este marco no es solo un requisito académico sino una herramienta práctica de gestión.

    p.mb-5 A partir de este fundamento constitucional, el legislador ha desarrollado leyes y decretos específicos para cada tipo de organización solidaria, conformando un cuerpo normativo articulado que regula su actividad en todos los aspectos. Este marco se organiza en tres niveles jerárquicos como el constitucional, legal y reglamentario, cuyo conocimiento es indispensable para cualquier gestor del sector.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span Disposiciones constitucionales del sector solidario
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a
          table
            thead
              tr.tarjeta-bg06
                th.text-center.w-20 Artículo (C.P.)
                th.text-center Contenido y Relación con la Economía Solidaria
            tbody
              tr
                th.bg-crema-claro.text-center Art. 38
                td Garantiza el derecho de **libre asociación** para el desarrollo de las distintas actividades que las personas realizan en sociedad.
              tr
                th.bg-crema-claro.text-center Arts. 48 y 49
                td Establece los principios de **eficiencia, universalidad y solidaridad** que orientan la prestación de los servicios públicos por parte del Estado.
              tr
                th.bg-crema-claro.text-center Art. 58
                td El Estado protegerá y promoverá las **formas asociativas y solidarias de propiedad**.
              tr
                th.bg-crema-claro.text-center Art. 60
                td El Estado promoverá el **acceso a la propiedad** a las organizaciones solidarias, de conformidad con la ley.
              tr
                th.bg-crema-claro.text-center Art. 64
                td Es deber del Estado promover el acceso progresivo a la **propiedad de la tierra** de los trabajadores agrarios en forma individual o asociativa.
              tr
                th.bg-crema-claro.text-center Art. 95
                td Son deberes de la persona y del ciudadano obrar conforme al **principio de solidaridad social**.
              tr
                th.bg-crema-claro.text-center Art. 333
                td La empresa tiene una **función social** que implica obligaciones. El Estado fortalecerá las organizaciones solidarias y estimulará el desarrollo empresarial.
          figcaption Fuente: Constitución Política de Colombia (1991).
          .tarjeta-bg06.p-3
            p.mb-0 Nota.Los artículos citados constituyen el fundamento constitucional de rango superior que ninguna norma de inferior jerarquía puede desconocer (art. 4, Constitución Política de Colombia).

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span Leyes que estructuran el sector solidario en Colombia
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a
          table
            thead
              tr.tarjeta-bg06
                th.text-center.w-25 Norma
                th.text-center Contenido y alcance
            tbody
              tr
                th.bg-crema-claro.text-center Ley 79 de 1988
                td Dotó al sector cooperativo de un marco propicio para su desarrollo. Regula la constitución, el funcionamiento, la integración y la liquidación de las cooperativas en Colombia.
              tr
                th.bg-crema-claro.text-center Ley 454 de 1998
                td Determina el marco conceptual de la economía solidaria. Transformó **DANCOOP** en **DANSOCIAL**, creó la Superintendencia de la Economía Solidaria (**Supersolidaria**), el **FOGACOOP** y transformó el **CONES**.
          figcaption Fuente: Congreso de la República de Colombia.
          .tarjeta-bg06.p-3
            p.mb-0 Nota. La Ley 454 de 1998 es la norma rectora del sector solidario en Colombia. Para consultar su texto completo, véase: www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3433 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 7.
          span Decretos reglamentarios por tipo de organización solidaria
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a
          table
            thead
              tr.tarjeta-bg06
                th.text-center.w-25 Norma
                th.text-center Organización que regula y alcance
            tbody
              tr
                th.bg-crema-claro.text-center Decreto 1333 de 1989
                td **Precooperativas.** Regula su constitución, funcionamiento y el proceso de conversión a cooperativa en un plazo máximo de cinco años.
              tr
                th.bg-crema-claro.text-center Decreto 1480 de 1989
                td **Asociaciones mutuales.** Establece su naturaleza, constitución, régimen de asociados y las actividades autorizadas de seguridad social.
              tr
                th.bg-crema-claro.text-center Decreto 1481 de 1989
                td **Fondos de empleados.** Regula su constitución por trabajadores dependientes de una misma empresa y sus servicios de ahorro y crédito.
              tr
                th.bg-crema-claro.text-center Decreto 427 de 1989
                td **Instituciones auxiliares de la economía solidaria.** Regula las organizaciones de apoyo al sector solidario.
              tr
                th.bg-crema-claro.text-center Decreto 1482 de 1989
                td **Administraciones públicas cooperativas.** Dota a estas entidades de un marco jurídico para la prestación de servicios a la comunidad.
              tr
                th.bg-crema-claro.text-center Decreto 1100 de 1992
                td **Empresas Asociativas de Trabajo (EAT).** Reglamenta la Ley 10 de 1991; incluidas en el sector solidario por la Ley 454 de 1998.
              tr
                th.bg-crema-claro.text-center Decreto 4588 de 2006
                td **Cooperativas de Trabajo Asociado.** Regula su organización, funcionamiento y las garantías laborales de los asociados.
          figcaption Fuente: Gobierno Nacional de Colombia. Gestor Normativo. Función Pública.
          .tarjeta-bg06.p-3
            p.mb-0 Nota. El Normograma completo del sector solidario, con la totalidad de decretos y acuerdos vigentes, se encuentra disponible en: www.supersolidaria.gov.co/es/content/normograma

    .row.justify-content-center.align-items-center
      .col-lg-9
        p.mb-4 El conjunto normativo presentado en las tres tablas anteriores evidencia que la economía solidaria en Colombia cuenta con un respaldo jurídico sólido y articulado que va desde la Constitución Política hasta los decretos reglamentarios específicos para cada tipo de organización. Este marco no es estático, ha evolucionado durante casi un siglo respondiendo a las transformaciones del sector y a la necesidad de garantizar la seguridad jurídica de las entidades y sus asociados. Conocerlo con precisión es condición indispensable para constituir, gestionar y formalizar cualquier organización solidaria dentro del ordenamiento jurídico colombiano. Ahora bien, el cumplimiento de estas normas no opera de manera espontánea, el Estado colombiano ha dispuesto un conjunto de organismos especializados encargados de promover, vigilar y controlar el sector, los cuales se presentan en el numeral siguiente.
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img51.png', width='180', alt='Texto que describa la imagen')
      

    separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.6 Organismos de control y vigilancia

    .row.justify-content-center.align-items-center.mb-5.tarjeta-bg03
      .col-lg-3.col-8.mb-4.mb-lg-0.p-3
        figure
          img(src='@/assets/curso/temas/tema3/img52.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p.mb-0 El Estado colombiano ejerce sobre las organizaciones de economía solidaria un sistema de inspección, vigilancia y control a través de entidades especializadas cuyo propósito es garantizar el cumplimiento de la normativa, la transparencia en la gestión de los recursos y la protección de los asociados y depositantes. Este sistema fue estructurado principalmente por la Ley 454 de 1998, que en su Título III define las entidades estatales de promoción, fomento, desarrollo y supervisión del sector.

    p.mb-5 El cumplimiento del marco normativo del sector solidario no opera de manera espontánea: el Estado colombiano ha dispuesto un sistema institucional conformado por organismos con funciones específicas y complementarias que van desde la formulación de políticas hasta la supervisión directa de las entidades. Conocer cada uno de estos organismos, su naturaleza y su función concreta permite identificar ante cuál de ellos debe responder cada tipo de organización solidaria, según su actividad y su forma jurídica:

    .row.justify-content-center.mb-5
      .col-lg-6
        LineaTiempoD.color-secundario
          p(numero="1" titulo="CONES — Consejo Nacional de la Economía Solidaria") Formula y coordina, a nivel nacional, las políticas, estrategias, planes, programas y proyectos pertinentes al sistema de la economía solidaria en Colombia.
          p(numero="2" titulo="UAEOS — Unidad Administrativa Especial de Organizaciones Solidarias") Formula, orienta y desarrolla políticas para el fomento y fortalecimiento de organizaciones solidarias. Es la denominación actual de lo que fue DANSOCIAL, creado mediante la Ley 454 de 1998.
          p(numero="3" titulo="FONES — Fondo de Fomento de la Economía Solidaria") Otorga créditos para proyectos de desarrollo de las entidades solidarias. La afiliación es voluntaria y solo las entidades afiliadas tienen acceso a sus créditos y apoyos financieros.
          p(numero="4" titulo="FOGACOOP — Fondo de Garantías de Entidades Cooperativas") Protege la confianza de los ahorradores y depositantes de las cooperativas inscritas. Aplica medidas de apoyo únicamente a entidades cuya situación financiera sea viable, a juicio de su Junta Directiva.
          p(numero="5" titulo="Supersolidaria — Superintendencia de la Economía Solidaria") Ejerce la inspección, vigilancia y control de las organizaciones de economía solidaria no sujetas a supervisión especializada de otra entidad. Para cooperativas de ahorro y crédito cuenta con una delegatura especializada en supervisión financiera.
      .col-7.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema3/img53.png", alt="Imagen decorativa") 

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-9
        p.mb-4 Los organismos de control y vigilancia presentados constituyen el sistema institucional que garantiza que las organizaciones de economía solidaria operen dentro del marco legal, con transparencia, responsabilidad y coherencia con los principios que las fundamentan. Sin este sistema, la seguridad jurídica de los asociados, la confianza en el sector y la sostenibilidad de las entidades solidarias quedarían sin respaldo institucional. 
      
        .row.align-items-center.mb-4
          .col-lg-4.col-md-5.col-8.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema3/img54.svg', alt='Ilustración de equipo de trabajo')
          .col-lg-8.col-md-7
            .tarjeta-bg03
              p.mb-3 Conocer qué organismo supervisa cada tipo de entidad, cuáles son sus funciones y ante cuál se deben realizar los trámites de formalización es, por tanto, un conocimiento práctico indispensable para quien desee participar activamente en la gestión de una organización solidaria.
            
      
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img55.png', alt='Ejecutivos trabajando en laptop')      

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-10
        p.mb-0 La comprensión del sector solidario no se completa únicamente con el conocimiento de sus organismos de control, es igualmente importante entender cómo las organizaciones solidarias generan valor más allá de sus fronteras internas, articulándose con otras entidades y actores del territorio para producir, transformar y comercializar bienes y servicios bajo principios de cooperación y comercio justo. Esta dimensión productiva y territorial del modelo solidario, que convierte los principios en resultados económicos concretos para las comunidades, es precisamente lo que se aborda a continuación con las cadenas productivas en la economía solidaria.

    separador
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.7 Cadenas productivas en la economía solidaria

    .row.justify-content-center.align-items-center.mb-5.tarjeta-bg03
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img56.png', alt='Ejecutivos trabajando en laptop')      
      .col-lg-7
        .row.mb-3
          .col-lg-1.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/img57.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-12
            p.mb-0 La economía solidaria no se limita a la constitución y gestión interna de las organizaciones, también transforma la manera en que estas participan en la economía real, producen bienes, prestan servicios y llevan sus productos hasta el consumidor final. Una de las expresiones más concretas de esta transformación es la cadena productiva solidaria, un modelo en el que la cooperación y la distribución equitativa de los beneficios reemplazan la lógica de la competencia individual. Comprender cómo funciona esta cadena permite reconocer el alcance real del sector solidario más allá de su estructura jurídica y organizacional.
    p.mb-5 Una cadena productiva comprende todas las etapas que median entre la producción de un bien o servicio y su consumo final:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        .tarjeta-bg03.p-4
          .row
            .col-lg-auto.d-none.d-lg-block.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img58.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              h5 #[b Elaboración]
              
      .col-lg-3
        .tarjeta-bg03.p-4
          .row
            .col-lg-auto.d-none.d-lg-block.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img59.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              h5 #[b Transformación]
              
      .col-lg-3
        .tarjeta-bg03.p-4
          .row
            .col-lg-auto.d-none.d-lg-block.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img60.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              h5 #[b Distribución]
              
      .col-lg-3
        .tarjeta-bg03.p-4
          .row
            .col-lg-auto.d-none.d-lg-block.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img61.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              h5 #[b Comercialización]
    p.mb-5 En el contexto de la economía solidaria, las relaciones entre los actores de la cadena no se rigen únicamente por la lógica del mercado, sino también por principios de cooperación, comercio justo y distribución equitativa de los beneficios generados entre quienes participan del proceso productivo.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-bg05.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img62.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Las cadenas productivas solidarias demuestran que los principios de cooperación, equidad y autogestión no son valores abstractos, se traducen en decisiones económicas concretas que generan riqueza, dignifican el trabajo y fortalecen el tejido social de las comunidades desde sus propios territorios.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-5 En Colombia, las cadenas productivas solidarias integran a pequeños productores, transformadores y comercializadores bajo esquemas asociativos que reducen la intermediación y mejoran los márgenes de ganancia. Los circuitos cortos de comercialización son la expresión más concreta de este modelo, permiten el acercamiento directo entre productor y consumidor, potenciando las economías familiares y comunitarias.
        .tarjeta.tarjeta-bg03.p-4(data-aos="fade-up")
          p.mb-0 La economía solidaria transforma la cadena productiva convencional desde adentro, en lugar de que cada eslabón opere de manera independiente buscando su propio beneficio, los actores se articulan bajo principios de cooperación y distribución equitativa. A continuación, se presentan los cuatro eslabones que conforman una cadena productiva solidaria, desde la producción hasta el consumidor final:
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img63.png', width='180', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-7.col-lg-3
        figure
          img(src="@/assets/curso/temas/tema3/img64.png", alt="Imagen decorativa") 
      .col-lg-7
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Producción") Pequeños productores organizados en formas asociativas generan materias primas o productos primarios bajo principios de cooperación, distribuyendo equitativamente los costos y los beneficios del proceso productivo.
          p(numero="2" titulo="Transformación") Las organizaciones procesan y transforman los productos primarios de manera conjunta, compartiendo maquinaria, infraestructura y conocimiento técnico para mejorar la calidad y reducir los costos de producción.
          p(numero="3" titulo="Distribución solidaria") Se eliminan o reducen los intermediarios mediante circuitos cortos de comercialización, conectando directamente a los productores con los consumidores y mejorando los márgenes de ganancia para las comunidades productoras.
          p(numero="4" titulo="Comercialización y consumo justo") Protege la confianza de los ahorradores y depositantes de las cooperativas inscritas. Aplica medidas de apoyo únicamente a entidades cuya situación financiera sea viable, a juicio de su Junta Directiva.
          p(numero="5" titulo="Supersolidaria — Superintendencia de la Economía Solidaria") Los productos llegan al consumidor bajo estándares de comercio justo, con precios que reconocen el valor real del trabajo y garantizan condiciones dignas para los productores en cada eslabón de la cadena.
    p.mb-5 Los cuatro eslabones presentados demuestran que en la economía solidaria la cadena productiva no es solo un proceso económico, es un mecanismo de cohesión social que distribuye los beneficios entre quienes participan del trabajo colectivo en cada etapa. Comprender esta estructura permite reconocer cómo las organizaciones solidarias transforman su entorno productivo desde adentro. A continuación, se presentan experiencias concretas que ilustran cómo este modelo opera en distintos territorios de Colombia:
    .tarjeta--fondo2.px-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.d-none.d-lg-block
          figure
            img(src="@/assets/curso/temas/tema3/img65.png" alt="Persona con laptop")
        .col-lg-8.col-11
          SlyderF(columnas="col-md-6 col-lg-6 col-xl-6")
            .tarjeta.tarjeta-slyderf.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema3/img66.svg' alt='Icono')
              h4.text-center Cooperativas cafeteras:
              p.text-center Pequeños caficultores asociados gestionan desde la cosecha hasta la exportación, garantizando mejores precios bajo estándares de comercio justo con reconocimiento internacional.
            .tarjeta.tarjeta-slyderf.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema3/img67.svg' alt='Icono')
              h4.text-center Cadena agroindustrial de la yuca:
              p.text-center Asociaciones agrícolas articulan producción, transformación en almidón o productos derivados y comercialización conjunta, eliminando intermediarios y mejorando los ingresos de los productores.
            .tarjeta.tarjeta-slyderf.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema3/img68.svg' alt='Icono')
              h4.text-center Asociaciones de paneleros:
              p.text-center Productores que se asocian para transformar caña de azúcar en panela, comparten los trapiches para reducir costos y mejoran colectivamente la comercialización del producto final.
            .tarjeta.tarjeta-slyderf.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema3/img69.svg' alt='Icono')
              h4.text-center Cooperativas de reciclaje:
              p.text-center Recicladores organizados que formalizan su labor, gestionan la recolección, la clasificación y la venta de materiales, y generan ingresos estables a través de la autogestión solidaria.
            .tarjeta.tarjeta-slyderf.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema3/img70.svg' alt='Icono')
              h4.text-center Redes de artesanos:
              p.text-center Agrupaciones que compran materias primas de manera conjunta, producen bajo modelos de comercio justo y comercializan sin intermediarios, fortaleciendo la identidad cultural y la economía local.
    p.mb-5 Las cadenas productivas solidarias evidencian que los principios de cooperación, equidad y autogestión no son valores abstractos sino mecanismos reales de transformación económica y social que operan desde las comunidades. Con este numeral concluye el recorrido por las organizaciones de economía solidaria, un recorrido que entrega las bases conceptuales, históricas, normativas e institucionales necesarias para comprender el sector solidario colombiano en toda su dimensión y diversidad.


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
