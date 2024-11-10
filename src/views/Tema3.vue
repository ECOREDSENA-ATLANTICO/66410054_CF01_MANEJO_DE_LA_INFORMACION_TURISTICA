<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Comportamiento del consumidor

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8
        figure.mb-md-4.mb-lg-0
          img(src='@/assets/curso/temas/tema3/img-1.png', alt='')
      .col-lg-8       
        p El comportamiento del consumidor se refiere al conjunto de actividades que lleva a cabo una persona o una organización desde que tiene una necesidad hasta el momento que efectúa la compra y usa posteriormente el producto. 
        p Son varios los factores que pueden contribuir a explicar el comportamiento de los turistas como económicos, sociales y personales, los cuales buscan estudiar el comportamiento humano frente a los productos que la empresa pone a disposición del posible comprador o consumidor en el mercado, y poder detectar las necesidades que existen, y analizar el proceso de decisión que conduce al suceso de adquisición del producto. 
        p Las actividades emocionales, mentales y físicas en que se involucra un individuo cuando selecciona, compra, usa y desecha productos y servicios que le satisfacen sus necesidades y deseos.
 
        .cajon.color-primario.p-4.fnd-1
          p.mb-0 <b>Características del comportamiento</b>
          p.mb-0 Complejo: Hay muchas variables internas y externas que influyen en el comportamiento. 
          p.mb-0 Cambia con el ciclo de vida del producto. 
          p.mb-0 Varía según el tipo de productos. 
    .row.pe-lg-3.justify-content-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-2
        img(src="@/assets/curso/temas/tema1/img-6.png")
      .col.px-0
        h3.mb-0 Factores explicativos del comportamiento del consumidor al momento de la compra
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6  
        h3.mb-0 Factores explicativos del comportamiento del consumidor al momento de la compra        
        p.mb-0 Cultural: Cultura, subcultura, Clase social 
        p.mb-0 Sociales: Grupos de referencia, familia, roles y estatus 
        p.mb-0 Personales: Edad, etapa y etapa, ciclo de vida, ocupación, circunstancias económicas, estilos de vida. 
        p.mb-0 Psicológicas: Motivación, percepción, aprendizaje, creencias y actitudes.

      .col-lg-6 
        h3.mb-0 Factores para la comprensión del comportamiento del consumidor 

        p.mb-0 <b>Factores de mercado:</b> extensión
        p.mb-0 Factores para la comprensión del comportamiento del consumidor 
        p.mb-0  <b>Factores de mercado:</b> extensión y amplitud que provocan que el acto de compra no sea extraordinario o relevante para el consumidor. 
        p.mb-0  <b>Factores de empresa:</b> se refieren a la mayor utilización del marketing orientado a los consumidores. 
        p.mb-0 <b>Factores de producto:</b> inciden en que el comportamiento es un proceso complejo con muchas variables como: 
        p.mb-0 Marcas 
        p.mb-0 Ciclo de vida 
        p.mb-0 Implicación y compra repetitiva
       
    .row.pe-lg-3.justify-content-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-2
        img(src="@/assets/curso/temas/tema1/img-6.png")
      .col.px-0
        h3.mb-0 Fases del proceso de decisión de compra:    
        figure
          img(src='@/assets/curso/temas/tema3/img-3.svg', alt='')


     

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
