<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema:
        'Asesoría turística basada en necesidades y expectativas del cliente.',
      titulo: 'Cuestionario',
      introduccion:
        'Preguntas de opción múltiple: lea los siguientes enunciados y seleccione la respuesta que considere correcta.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué elemento es clave en la asesoría turística basada en las necesidades del cliente?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ofrecer los paquetes turísticos más caros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conocer las expectativas y preferencias individuales del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sugerir destinos internacionales sin preguntar al cliente',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ignorar el presupuesto del cliente para centrarse solo en el destino.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cómo debe un asesor turístico abordar la solicitud de un cliente que busca un destino con actividades de aventura?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ofrecerle un paquete de turismo cultural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sugerirle un destino con playas relajantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ofrecer opciones basadas en su interés por actividades de aventura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Mandar una lista de todos los destinos posibles sin filtro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué factor es esencial al ofrecer asesoría turística a un cliente con restricciones de tiempo y presupuesto limitado?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recomendarle destinos lejanos y exclusivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proponer opciones de alto costo sin tener en cuenta el presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ofrecer alternativas dentro del presupuesto y ajustadas al tiempo disponible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Ignorar sus restricciones y ofrecer solo las opciones más populares.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cómo se puede personalizar una oferta turística para un cliente con intereses en ecoturismo?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ofreciendo paquetes con actividades masivas en ciudades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sugerir destinos naturales y sostenibles que promuevan el ecoturismo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ofrecer viajes a centros comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Proponer actividades urbanas sin relación con la naturaleza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el primer paso para ofrecer una asesoría turística efectiva?',
          imagen: require('@/assets/actividad/img-5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dar un paquete turístico al azar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conocer las expectativas, intereses y necesidades del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Ofrecer las opciones más económicas sin consultar al cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sugerir destinos populares sin preguntar al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Cuando un cliente expresa la necesidad de un viaje de <i>relax</i>, ¿qué tipo de destino debería recomendar el asesor turístico?',
          imagen: require('@/assets/actividad/img-6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un destino con actividades físicas intensas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un destino con playas tranquilas y spas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un destino con parques de diversiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un destino con montañas y deportes extremos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué rol juega la comunicación efectiva en la asesoría turística?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite ofrecer opciones sin consultar al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ayuda a identificar de manera clara las necesidades y expectativas del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo se necesita al momento de realizar la venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No es relevante si el cliente tiene un presupuesto limitado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de información es crucial para entender las expectativas de un cliente antes de ofrecerle un paquete turístico?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La duración del viaje y el tipo de actividades que prefiere.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo su edad y lugar de residencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Su disposición a gastar en actividades turísticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuánto tiempo lleva sin viajar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué tipo de clientes puede buscar un servicio de asesoría turística personalizada?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Todos los tipos de clientes, desde los que buscan lujo hasta los que prefieren turismo económico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo clientes que viajan en grupo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clientes que buscan un destino de playa únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Clientes con intereses generales, sin necesidad de personalización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Si un cliente desea realizar un viaje cultural, ¿qué aspecto debe priorizar el asesor turístico?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Destinos con actividades deportivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Destinos que ofrezcan una rica oferta cultural, como museos y sitios históricos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Destinos con alta exclusividad, pero sin valor cultural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Destinos sin información histórica o cultural',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la mejor forma de garantizar una experiencia satisfactoria al cliente en la asesoría turística?',
          imagen: require('@/assets/actividad/img-5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ofrecer paquetes con muchas actividades para que el cliente no se aburra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Personalizar la oferta según sus intereses y necesidades específicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Asegurarse de que el cliente gaste el máximo posible en cada actividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Proponer el destino más cercano sin preguntar al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de asesoría turística sería adecuada para un cliente que viaja por negocios?',
          imagen: require('@/assets/actividad/img-6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ofrecer destinos turísticos masivos sin planificación previa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ofrecer paquetes relajantes y sin agenda definida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sugerir destinos con infraestructura adecuada para negocios y eventos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Recomendar viajes de aventura y ecoturismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'En una asesoría turística, ¿por qué es importante conocer las expectativas emocionales de los clientes?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para darles el destino sea más económico sin tomar en cuenta sus deseos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para ofrecerles destinos que coincidan con su estado emocional o lo que buscan experimentar en el viaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para llenar su itinerario de actividades que no les interesen.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para asegurar que el cliente gaste lo máximo posible en actividades turísticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué es fundamental tener en cuenta cuando un cliente tiene necesidades de accesibilidad debido a una discapacidad?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sugerir destinos sin información sobre accesibilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ofrecer destinos y actividades que no consideren las necesidades especiales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Proponer opciones que cuenten con infraestructura accesible, como alojamientos y transportes adaptados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'No considerar estas necesidades y ofrecer solo las opciones estándar',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué estrategia puede utilizar un asesor turístico para abordar las expectativas cambiantes de los clientes durante un proceso de asesoría?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar los cambios y seguir con la oferta inicial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Escuchar activamente y ajustar las opciones según las nuevas expectativas del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Forzar al cliente a elegir entre las opciones ya propuestas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sugerirle las opciones más caras para que se sienta satisfecho.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Cuándo un cliente solicita un paquete turístico personalizado, ¿qué tipo de información adicional es relevante recabar?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sólo sus datos personales básicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Su presupuesto, intereses específicos, fechas de viaje y preferencias sobre el tipo de alojamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo su lugar de origen y destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solo sus preferencias sobre el tipo de comida durante el viaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué debe hacer un asesor turístico si un cliente no está satisfecho con las opciones iniciales presentadas?',
          imagen: require('@/assets/actividad/img-5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ignorar sus comentarios e insistir en las mismas opciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Escuchar atentamente sus comentarios y ofrecer nuevas opciones ajustadas a sus expectativas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sugerirle opciones más caras para que quede conforme.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No ofrecerle nuevas opciones y cerrarlo con una venta estándar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué aspecto es esencial al personalizar un paquete turístico para un cliente familiar?',
          imagen: require('@/assets/actividad/img-6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ofrecer solo actividades para adultos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tener en cuenta la diversidad de edades y las actividades adecuadas para todos los miembros de la familia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Proponer solo destinos para grupos grandes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ofrecer solo actividades deportivas extremas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Cuando un cliente tiene un interés en un destino específico, ¿cómo debe responder un asesor turístico?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ignorar su preferencia y ofrecer otros destinos sin justificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Indicarle las opciones disponibles en ese destino y ajustarlas a sus necesidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ofrecerle únicamente lo más caro en ese destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sugerirle un destino completamente diferente sin consultarle.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Por qué es importante conocer la cultura y costumbres del destino al ofrecer asesoría turística?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para evitar que el cliente se sienta incómodo durante su estancia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Para ajustar la oferta de actividades al comportamiento esperado de los turistas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para ofrecer únicamente destinos exóticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para sugerir destinos donde el cliente no esté familiarizado con las costumbres locales.',
              esCorrecta: false,
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
