<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 6
      h1 Servicios complementarios
    .row.justify-content-center.align-items-center.px-lg-4.px-md-1(data-aos="zoom-in")
      .col-lg-6  
        p Se consideran como servicios de apoyo a la actividad turística; son creados para responder a las más variadas necesidades de los clientes, a su vez, se constituyen en clave esencial para la captación de turistas. 
        p.mb-5 Los servicios complementarios incluyen una variedad de productos, dentro de los cuales podemos encontrar el suministro de información, de asesoramiento, de planificación en materia de viajes, de transporte, de cambio de monedas, de guías turísticos, de restauración, de oferta artístico-cultural, de oferta deportiva, de congresos y convenciones, de recursos naturales, de centros comerciales (compras de ocio), de juegos de azar (casinos y bingos), de centros de ocio recreativos, de alquiler de vehículos (motos, todo terreno), de zonas de ocio nocturno (pubs, discotecas), de Tours temáticos y recorridos turísticos por la ciudad (excursiones en autobús para viajes organizados).

      .col-lg-6.col-md-8
        figure
          img(src='@/assets/curso/temas/tema6/img-1.png')      
  </template>

<script>
export default {
  name: 'Tema6',
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
