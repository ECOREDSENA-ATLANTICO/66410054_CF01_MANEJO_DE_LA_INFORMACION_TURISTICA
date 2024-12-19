<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Consumidor turístico

    p El consumidor turístico es el comprador de productos que rige su comportamiento ante la compra de servicios turísticos, no siempre actúa de la misma manera, si no que cambia según la situación del consumo y el producto turístico determinado, cambia con facilidad su nivel de implicación en la compra:    

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-8.fnd-8-5.px-0
        figure       
          img(src='@/assets/curso/temas/tema2/img-1.png', alt='Imagen decorativa')
        .p-4
          h4 ¿Qué determina el consumo en los turistas?
          .row.pe-lg-3(data-aos="zoom-in")
            .col-auto.pe-2.mt-1
              img(src="@/assets/curso/temas/tema2/check2.svg")
            .col.px-0
              p.mb-0 Ingreso monetario de las familias. 
          .row.pe-lg-3(data-aos="zoom-in")
            .col-auto.pe-2.mt-1
              img(src="@/assets/curso/temas/tema2/check2.svg")
            .col.px-0
              p.mb-0 Los precios de los bienes y servicios. 
          .row.pe-lg-3(data-aos="zoom-in")
            .col-auto.pe-2.mt-1
              img(src="@/assets/curso/temas/tema2/check2.svg")
            .col.px-0
              p.mb-0 Los gustos y preferencias del consumidor. 

        
      .col-lg-4.col-md-8.fnd-8-6.px-0
        figure
          img(src='@/assets/curso/temas/tema2/img-2.png', alt='Imagen decorativa')
        .p-4
          h4 Cambios en el consumidor 
          H4 Escepticismo
          .row.pe-lg-3(data-aos="zoom-in")
            .col-auto.pe-2.mt-1
              img(src="@/assets/curso/temas/tema2/check2.svg")
            .col.px-0
              p.mb-0 El consumidor se ha vuelto escéptico.
          .row.pe-lg-3(data-aos="zoom-in")
            .col-auto.pe-2.mt-1
              img(src="@/assets/curso/temas/tema2/check2.svg")
            .col.px-0
              p.mb-0 Ahora es mucho más difícil convencerle de las ventajas de una oferta.
      .col-lg-4.col-md-8.fnd-8-5.px-0
        figure
          img(src='@/assets/curso/temas/tema2/img-3.png', alt='Imagen decorativa')
        .p-4
          h4 Deslealtad
          .row.pe-lg-3(data-aos="zoom-in")
            .col-auto.pe-2.mt-1
              img(src="@/assets/curso/temas/tema2/check2.svg")
            .col.px-0
              p.mb-0 Ya quedan muy pocos clientes leales a una marca o a un establecimiento, y pocas marcas capaces de conseguir un vínculo de fidelidad y repetición de compras. 
              p La única manera de conseguir la lealtad es hallar mejores fórmulas de negocio, lanzar productos genuinamente valorados por el cliente. 
    .row.pe-lg-3.justify-content-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-2.mt-1.fnd-t.fnd-t-2
        h4.mb-0 Características del actual consumidor turístico 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-xl-4.col-md-6
        figure
          img.mb-4(src='@/assets/curso/temas/tema2/img-4.png', alt='Imagen decorativa')

      .col-xl-8
        p El <em>marketing</em> turístico debe estar capacitado para entender la demanda del futuro, y estar al tanto de qué tipos de turistas son los que tendremos, y cómo se dispondrá de su espacio libre, y que cantidad de tiempo brindará a sus vacaciones, y la distribución que hará a lo prolongado del año, cómo realizará la escogencia de los lugares que visitará en sus vacaciones, y el transporte que utilizará. 
        p El consumidor turístico actual presenta características visiblemente diferentes a las que tenía en los años 70 y 80, de las cuales se destacan: multiconsumidor turístico perfecto, es el que a lo extenso de una etapa determinada opera bajo varias formas de consumo turístico y es el que ejecuta diferentes acciones. 

    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-xl-3.col-md-6.tg-c
        .tarjeta-avatar-b.mb-5.ta-ge
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img-5.png', alt='Imagen decorativa')
          .tarjeta.tarjeta--azul.fnd-8-1
            .p-4         
              p El que cambia de valores y tiende a reflexionar como mejor medida los aspectos ecológicos del viaje.
    
      .col-xl-3.col-md-6.tg-c
        .tarjeta-avatar-b.mb-5.ta-ge
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img-5.png', alt='Imagen decorativa')
          .tarjeta.tarjeta--azul.fnd-8-1
            .p-4
              p El que divide más las estancias, a lo largo del año establece varios períodos de vacaciones, los cuales son más cortos.      
    
      .col-xl-3.col-md-6.tg-c
        .tarjeta-avatar-b.mb-5.ta-ge
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img-5.png', alt='Imagen decorativa')
          .tarjeta.tarjeta--azul.fnd-8-1
            .p-4
              p El que dispone de más información, lo cual le sirve para comparar las ofertas existentes y poder formalizar su elección de forma más racional.
      .col-xl-3.col-md-6.tg-c
        .tarjeta-avatar-b.mb-5.ta-ge
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img-5.png', alt='Imagen decorativa')
          .tarjeta.tarjeta--azul.fnd-8-1
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
