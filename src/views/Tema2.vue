<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Consumidor turístico

    p El consumidor turístico es el comprador de productos que rige su comportamiento ante la compra de servicios turísticos, no siempre actúa de la misma manera, si no que cambia según la situación del consumo y el producto turístico determinado, cambia con facilidad su nivel de implicación en la compra:    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.fnd-1
        figure       
          img(src='@/assets/curso/temas/tema2/img-1.png', alt='')
     
        p <b>¿Qué determina el consumo en los turistas?</b>
        p Ingreso monetario de las familias. 
        p Los precios de los bienes y servicios. 
        p Los gustos y preferencias del consumidor. 
      .col-lg-4.col-md-8.fnd-1
        figure
          img(src='@/assets/curso/temas/tema2/img-2.png', alt='')
     
        p Cambios en el consumidor 
        p <b>Escepticismo:</b> 
        p El consumidor se ha vuelto escéptico 
        p Ahora es mucho más difícil convencerle de las ventajas de una oferta
      .col-lg-4.col-md-8.fnd-1 
        figure
          img(src='@/assets/curso/temas/tema2/img-3.png', alt='')
     
        p <b>Deslealtad</b>
        p Ya quedan muy pocos clientes leales a una marca o a un establecimiento, y pocas marcas capaces de conseguir un vínculo de fidelidad y repetición de compras. 
        p La única manera de conseguir la lealtad es hallar mejores fórmulas de negocio, lanzar productos genuinamente valorados por el cliente. 
    .row.pe-lg-3.justify-content-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-2.mt-1.fnd-t
        h5 Características del actual consumidor turístico 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8
        figure
          img.mb-4(src='@/assets/curso/temas/tema2/img-4.png', alt='')

      .col-lg-8
        p El <em>marketing</em> turístico debe estar capacitado para entender la demanda del futuro, y estar al tanto de qué tipos de turistas son los que tendremos, y cómo se dispondrá de su espacio libre, y que cantidad tiempo brindará a sus vacaciones, y la distribución que hará a lo prolongado del año, cómo realizará la escogencia de los lugares que visitará en sus vacaciones, y el transporte utilizará. 
        p El consumidor turístico actual presenta características visiblemente diferentes a las que tenía en los años 70 y 80, de las cuales se destacan: multiconsumidor turístico perfecto es el que a lo extenso de una etapa determinada opera bajo varias formas de consumo turístico y es el que ejecuta diferentes acciones. 

      .row
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema2/img-5.png', alt='')
            .tarjeta.tarjeta--azul
              .p-4         
                p El que cambia de valores y tiende a reflexionar como mejor medida los aspectos ecológicos del viaje.
     
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema2/img-5.png', alt='')
            .tarjeta.tarjeta--azul
              .p-4
                p Es el que divide más las estancias, a lo largo del año establece varios períodos de vacaciones, los cuales son más cortos.      
      
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema2/img-5.png', alt='')
            .tarjeta.tarjeta--azul
              .p-4
                p •	El que dispone de más información, lo cual le sirve para comparar las ofertas existentes y poder formalizar su elección de forma más racional.      
      
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema2/img-5.png', alt='')
            .tarjeta.tarjeta--azul
              .p-4
                p Las vacaciones son más flexibles y espontáneas las cuales se reservan a corto plazo.



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
