<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8
        figure
          img.mb-4(src='@/assets/curso/portada/img-intro.png', alt='')

      .col-lg-8
        p El componente formativo, Asesoría turística basada en necesidades y expectativas del cliente, es esencial para proporcionar a los aprendices una comprensión integral de las características y rasgos de los usuarios del sector turístico. Este conocimiento permite identificar de manera precisa sus necesidades y expectativas, lo que facilita la adaptación de los servicios y productos turísticos ofrecidos en el mercado para garantizar una experiencia satisfactoria. Al conocer profundamente estos aspectos, los aprendices podrán alinear la oferta disponible con las demandas reales de los turistas, asegurando que sus experiencias sean enriquecedoras y satisfactorias.
        p Además, el estudio del manejo técnico de la asesoría turística es crucial para que los aprendices puedan ofrecer un servicio efectivo y personalizado. Este enfoque incluye la identificación de los atractivos turísticos y los servicios complementarios disponibles en la región. Al contar con esta información detallada, los profesionales del turismo podrán proporcionar una orientación adecuada, fundamentada en un diagnóstico previo de las necesidades y expectativas del cliente. Así, se garantiza que la asesoría brindada no solo sea precisa, sino también relevante, contribuyendo al éxito de la experiencia turística en cualquier destino. Bienvenido a este componente formativo:


    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Fuente: Sena 2024.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
