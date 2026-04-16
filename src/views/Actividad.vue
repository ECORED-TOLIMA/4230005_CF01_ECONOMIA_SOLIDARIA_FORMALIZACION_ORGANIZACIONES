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
      tema: 'Confirmación de la premisa: la unidad hace la fuerza.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos, principios y componentes asociados a la economía solidaria.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la administración?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un sistema financiero.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Un proceso de planear, organizar, dirigir y controlar.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Una técnica de ventas.', esCorrecta: false },
            { id: 'd', texto: 'Un modelo económico.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La administración implica coordinar recursos para alcanzar objetivos organizacionales de manera eficiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Cuál es la primera etapa del proceso administrativo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Control.', esCorrecta: false },
            { id: 'b', texto: 'Dirección.', esCorrecta: false },
            { id: 'c', texto: 'Planeación.', esCorrecta: true },
            { id: 'd', texto: 'Organización.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La planeación define qué se quiere lograr y cómo hacerlo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué función administrativa asigna responsabilidades y estructura la empresa?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Organización.', esCorrecta: true },
            { id: 'b', texto: 'Control.', esCorrecta: false },
            { id: 'c', texto: 'Dirección.', esCorrecta: false },
            { id: 'd', texto: 'Planeación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La organización establece la estructura y funciones dentro de la empresa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es el objetivo principal del control?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Motivar empleados.', esCorrecta: false },
            { id: 'b', texto: 'Crear productos.', esCorrecta: false },
            { id: 'c', texto: 'Diseñar estrategias.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Evaluar resultados frente a lo planeado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El control permite medir y corregir el desempeño organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué caracteriza a una microempresa?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Más de 200 empleados.', esCorrecta: false },
            { id: 'b', texto: 'Entre 50 y 100 empleados.', esCorrecta: false },
            { id: 'c', texto: 'Menos de 10 trabajadores.', esCorrecta: true },
            { id: 'd', texto: 'Más de 500 empleados.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Las microempresas tienen una estructura y pocos trabajadores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué sector económico corresponde a la transformación de materias primas?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Primario.', esCorrecta: false },
            { id: 'b', texto: 'Secundario.', esCorrecta: true },
            { id: 'c', texto: 'Terciario.', esCorrecta: false },
            { id: 'd', texto: 'Cuaternario.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El sector secundario transforma recursos en productos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué elemento de la planeación estratégica define la razón de ser de la organización?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La visión.', esCorrecta: false },
            { id: 'b', texto: 'Los valores corporativos.', esCorrecta: false },
            { id: 'c', texto: 'La misión.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Los objetivos estratégicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La misión responde a ¿quiénes somos? y ¿cuál es nuestro propósito?, siendo el pilar de la planeación estratégica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'En el análisis FODA, ¿qué factores internos se evalúan?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Oportunidades y amenazas del entorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tendencias del mercado y competidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Políticas gubernamentales y regulaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fortalezas y debilidades propias de la organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis interno del FODA identifica las fortalezas que potencian el desempeño y las debilidades que lo limitan.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué es la planeación estratégica?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Control financiero.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Proyección de la organización hacia el futuro.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Supervisión del personal.', esCorrecta: false },
            { id: 'd', texto: 'Evaluación de desempeño.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Permite definir objetivos y acciones para alcanzar metas futuras.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué elemento responde a “¿por qué existe la organización?”',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Visión.', esCorrecta: false },
            { id: 'b', texto: 'Valores.', esCorrecta: false },
            { id: 'c', texto: 'Misión.', esCorrecta: true },
            { id: 'd', texto: 'Objetivos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La misión define la razón de ser de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué es la visión?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Normas internas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Proyección futura de la organización.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Valores éticos.', esCorrecta: false },
            { id: 'd', texto: 'Objetivos diarios.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Correcto! La visión establece el futuro deseado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué es un proyecto?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un plan general.', esCorrecta: false },
            { id: 'b', texto: 'Un conjunto de programas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Un esfuerzo temporal con un objetivo específico.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Una política empresarial', esCorrecta: false },
          ],
          mensaje_correcto: '¡Correcto! Tiene inicio y fin definidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Cuál es el origen de la economía solidaria?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cooperativismo obrero.', esCorrecta: true },
            { id: 'b', texto: 'Revolución digital.', esCorrecta: false },
            { id: 'c', texto: 'Siglo XXI.', esCorrecta: false },
            { id: 'd', texto: 'Globalización.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El cooperativismo obrero surgió en el siglo XIX como respuesta colectiva ante las condiciones de desigualdad generadas por la Revolución Industrial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál es un valor de la economía solidaria?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Competencia.', esCorrecta: false },
            { id: 'b', texto: 'Individualismo.', esCorrecta: false },
            { id: 'c', texto: 'Solidaridad.', esCorrecta: true },
            { id: 'd', texto: 'Acumulación de capital.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La solidaridad es uno de sus principios fundamentales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué caracteriza a las cooperativas?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son sin ánimo de lucro y de gestión democrática.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Son del Estado.', esCorrecta: false },
            { id: 'c', texto: 'Buscan lucro individual.', esCorrecta: false },
            { id: 'd', texto: 'Son multinacionales.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Funcionan con participación equitativa de sus miembros.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué ley regula la economía solidaria en Colombia?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 100 de 1993.', esCorrecta: false },
            { id: 'b', texto: 'Ley 454 de 1998.', esCorrecta: true },
            { id: 'c', texto: 'Ley 80 de 1993.', esCorrecta: false },
            { id: 'd', texto: 'Ley 50 de 1990.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Establece el marco conceptual del sector.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué entidad ejerce vigilancia sobre la economía solidaria?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DIAN.', esCorrecta: false },
            { id: 'b', texto: 'Ministerio de trabajo.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Superintendencia de la economía solidaria.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Banco de la república.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Supervisa y controla estas organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué es una cadena productiva?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Etapas de producción, distribución y comercialización.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Un proceso de control.', esCorrecta: false },
            { id: 'c', texto: 'Un sistema financiero.', esCorrecta: false },
            { id: 'd', texto: 'Un tipo de empresa.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Una cadena productiva comprende todas las etapas desde la producción hasta el consumo final: elaboración, transformación, distribución y comercialización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué son las fortalezas en el FODA?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores externos negativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Factores internos positivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Factores externos positivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Factores internos negativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Son capacidades internas que benefician a la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué herramienta analiza factores internos y externos de una organización?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'PESTEL.', esCorrecta: false },
            { id: 'b', texto: 'Balanced Scorecard.', esCorrecta: false },
            { id: 'c', texto: 'RACI.', esCorrecta: false },
            { id: 'd', texto: 'FODA.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! El FODA identifica las fortalezas y debilidades internas, y las oportunidades y amenazas del entorno externo de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
