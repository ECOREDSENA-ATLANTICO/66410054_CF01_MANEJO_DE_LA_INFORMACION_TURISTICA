<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Comportamiento del consumidor

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-xl-3.col-md-5
        figure.mb-4
          img(src='@/assets/curso/temas/tema3/img-1.png', alt='Imagen decorativa')
      .col-xl-9       
        p El comportamiento del consumidor se refiere al conjunto de actividades que lleva a cabo una persona o una organización desde que tiene una necesidad hasta el momento que efectúa la compra y usa posteriormente el producto. 
        p Son varios los factores que pueden contribuir a explicar el comportamiento de los turistas como económicos, sociales y personales, los cuales buscan estudiar el comportamiento humano frente a los productos que la empresa pone a disposición del posible comprador o consumidor en el mercado, y poder detectar las necesidades que existen, y analizar el proceso de decisión que conduce al suceso de adquisición del producto. 
        p Las actividades emocionales, mentales y físicas en que se involucra un individuo cuando selecciona, compra, usa y desecha productos y servicios que le satisfacen sus necesidades y deseos.
        .row.justify-content-center.align-items-center
          .col-auto.d-none.d-md-block
            figure.mb-md-4.mb-lg-0
              img(src='@/assets/curso/temas/tema3/img-2.svg', alt='Imagen decorativa')
          .col
            .cajon.color-secundario.p-4
              h5 Características del comportamiento
              p.mb-0 Complejo: hay muchas variables internas y externas que influyen en el comportamiento. 
              p.mb-0 Cambia con el ciclo de vida del producto. 
              p.mb-0 Varía según el tipo de productos. 

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-6.fnd-9-1.p-4.fnd-9   
        h3 Factores explicativos del comportamiento del consumidor al momento de la compra 
        .row.pe-lg-3(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 <b>Cultural:</b> cultura, subcultura, clase social.
        .row.pe-lg-3(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 <b>Sociales:</b> grupos de referencia, familia, roles y estatus.
        .row.pe-lg-3(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 <b>Personales:</b> edad, etapa, ciclo de vida, ocupación, circunstancias económicas, estilos de vida. 
        .row.pe-lg-3(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 <b>Psicológicas:</b> motivación, percepción, aprendizaje, creencias y actitudes.

      .col-lg-6.fnd-9-2.p-4.fnd-9   
        h3 Factores para la comprensión del comportamiento del consumidor

        .row.pe-lg-3(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check2.svg")
          .col.px-0
            p.mb-0 <b>Factores de mercado:</b> extensión y amplitud que provocan que el acto de compra no sea extraordinario o relevante para el consumidor.
        .row.pe-lg-3(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check2.svg")
          .col.px-0
            p.mb-0 <b>Factores de empresa:</b> se refieren a la mayor utilización del <i>marketing</i> orientado a los consumidores. 
        .row.pe-lg-3(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check2.svg")
          .col.px-0
            p.mb-0 <b>Factores de producto:</b> inciden en que el comportamiento es un proceso complejo con muchas variables como: 
        p.mb-0.ps-4 • Marcas.
        p.mb-0.ps-4 • Ciclo de vida.
        p.mb-0.ps-4 • Implicación y compra repetitiva.
       
    .row.pe-lg-3.justify-content-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-2
        img(src="@/assets/curso/temas/tema1/img-6.png")
      .col.px-0
        h3.mb-0 Fases del proceso de decisión de compra  


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-xl-10
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-3.svg', alt='Texto que describa la imagen')
              

          .tarjeta.fnd-8-7.p-3(x="15.8%" y="41.9%" numero="1")
            p <b>Reconocimiento del problema:</b> aparece la necesidad unida al deseo de satisfacerla. La acción de <em>marketing</em> consiste en orientar y canalizar las necesidades hacia la demanda de los productos ya ofertados. 
          .tarjeta.fnd-8-7.p-3(x="40.7%" y="84.8%" numero="2")
            p <b>Investigación de información:</b> interna (memoria), o externa (amigos, expertos, catálogos).
            p Evaluación de las alternativas posibles para satisfacer la necesidad: marcas y productos. Perciben los atributos de los productos que pueden satisfacer la necesidad y se procede a jerarquizarlos. 

          .tarjeta.fnd-8-7.p-3(x="60.1%" y="26.4%" numero="3")
            p <b>Adquirir o no adquirir:</b> influyen las diferentes informaciones: beneficios que aportará el producto, el entorno, la decisión de compra previamente establecida. 
            p <b>Si se ha efectuado la compra, fase de satisfacción o insatisfacción.</b> Si el producto es satisfactorio, seguramente se volverá a comprar: lealtad a la marca. Si no es así, cambio de marca. 
            p El hábito adquirido con el uso o consumo de productos será una información que se guardará y se podrá utilizar en un nuevo proceso de decisión de compra.  

                    

    .row.pe-lg-3.justify-content-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-2.mt-1.fnd-t
        h5 Determinantes personales del comportamiento del consumidor  

    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-xl-8
        p Son varios los factores que influyen en la evolución del comportamiento de un consumidor, y como se ubican estos factores en su mente, los cuales ayudan a encontrar el servicio ideal para su satisfacción, de los cuales podemos encontrar: 

        .row.align-items-center.justify-content-center
          .col-lg-4.col-md-6.tg-d
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img.img-72(src='@/assets/curso/temas/tema3/img-4.svg', alt='Imagen decorativa')
              .tarjeta.tarjeta--azul
                .p-2        
                  p.mb-0 El destino.
      
          .col-lg-4.col-md-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img.img-72(src='@/assets/curso/temas/tema3/img-5.svg', alt='Imagen decorativa')
              .tarjeta.tarjeta--azul
                .p-2
                  p.mb-0 La disponibilidad de servicios.      
        
          .col-lg-4.col-md-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img.img-72(src='@/assets/curso/temas/tema3/img-6.svg', alt='Imagen decorativa')
              .tarjeta.tarjeta--azul
                .p-2
                  p.mb-0 La diferencia de precios. 

        .row.justify-content-center.align-items-center.mb-5.fnd-8.py-4
          .col-xl-3.col-lg-3.col-md-5.col-6
            figure.mb-4
              img(src='@/assets/curso/temas/tema3/img-8.svg', alt='Imagen decorativa')
          .col-lg-8       
            h5 La actitud y la percepción de los destinos y organizaciones turísticas son otros de los determinantes del comportamiento del consumidor como son: 
            .row.pe-lg-3(data-aos="zoom-in")
              .col-auto.pe-2.mt-1
                img(src="@/assets/curso/temas/tema2/check.svg")
              .col.px-0 Las preferencias por países o culturas.
            .row.pe-lg-3(data-aos="zoom-in")
              .col-auto.pe-2.mt-1
                img(src="@/assets/curso/temas/tema2/check.svg")
              .col.px-0 La situación política.
            .row.pe-lg-3(data-aos="zoom-in")
              .col-auto.pe-2.mt-1
                img(src="@/assets/curso/temas/tema2/check.svg")
              .col.px-0 Miedo a ciertas formas de viaje como el avión, crucero, tren, automóvil.
            .row.pe-lg-3(data-aos="zoom-in")
              .col-auto.pe-2.mt-1
                img(src="@/assets/curso/temas/tema2/check.svg")
              .col.px-0 Con cuanta anticipación planifican.
            .row.pe-lg-3.mb-2(data-aos="zoom-in")
              .col-auto.pe-2.mt-1
                img(src="@/assets/curso/temas/tema2/check.svg")
              .col.px-0 Las ideas que tienen acerca del valor-dinero.
            <b>Otro determinante es la experiencia en:</b> 
            .row.pe-lg-3(data-aos="zoom-in")
              .col-auto.pe-2.mt-1
                img(src="@/assets/curso/temas/tema2/check.svg")
              .col.px-0 Tipos de vacaciones.
            .row.pe-lg-3(data-aos="zoom-in")
              .col-auto.pe-2.mt-1
                img(src="@/assets/curso/temas/tema2/check.svg")
              .col.px-0 Diferentes destinos. 
            .row.pe-lg-3(data-aos="zoom-in")
              .col-auto.pe-2.mt-1
                img(src="@/assets/curso/temas/tema2/check.svg")
              .col.px-0 Diferentes ofertas.

      .col-lg-4.col-md-8.d-none.d-xl-block
        figure.mb-md-4.mb-lg-0
          img(src='@/assets/curso/temas/tema3/img-7.png', alt='Imagen decorativa')
    .row.pe-lg-3.justify-content-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-2
        img(src="@/assets/curso/temas/tema1/img-6.png")
      .col.px-0
        h3.mb-0 Atractivos turísticos
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-xl-4.col-md-5.order-2.order-lg-1
        figure.mb-md-4.mb-lg-5
          img(src='@/assets/curso/temas/tema3/img-9.png', alt='Imagen decorativa')
      .col-xl-8.order-1.order-lg-2
        SlyderF.mb-5(columnas="col-md-6")
          .tarjeta.fnd-8-10.p-4
            h5.text-center Atractivos focales:
            p.mb-0.text-center Son las áreas o regiones determinadas como elementos distintivos del patrimonio natural o cultural; se identifican con rasgos intrínsecos de singularidad, caracterizando y particularizando a dicho sitio o región, motivo por el cual son visitados. 

          .tarjeta.fnd-8-10.p-4
            h5.text-center Atractivos complementarios: 
            p.mb-0.text-center Referidos a elementos del patrimonio natural o cultural que se encuentran en un área determinada, pero que no poseen el grado de importancia o de singularidad que tienen los atractivos focales, pero se constituyen en motivo de interés adicional y valor agregado para el turista, induciéndolo a que permanezca mayor tiempo en el área.
            p.mb-0.text-center Los atractivos complementarios evitan concentraciones excesivas de turistas en un solo lugar, al tiempo que propician el desplazamiento por otros sitios del área.
          .tarjeta.fnd-8-10.p-4
            h5.text-center Atractivos de apoyo: 
            p.mb-0.text-center Aquellos elementos artificiales (instalaciones, facilidades, actividades turísticas, miradores, bicicletas) que proporcionan al visitante diferentes satisfacciones. Da sustento y servicio al turista, pero que no sustituye el motivo principal por el cual el turista visita un área. También son utilizados para dar apoyo a los atractivos focales y complementarios que ya existen en un destino turístico. (Universidad Técnica Estatal de Quevedo, 2013).
            p.mb-0.text-center FAVA - Formación en Ambientes Virtuales de Aprendizaje SENA - Servicio Nacional de Aprendizaje.

    .row.pe-lg-3.justify-content-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-2
        img(src="@/assets/curso/temas/tema1/img-6.png")
      .col.px-0
        h3 Clasificación de los atractivos turísticos

    p.mb-0 Son todos aquellos puntos de interés que por sus características llaman la atención de los turistas. Los atractivos turísticos se constituyen en parte del Producto Turístico; pueden estar conformados por acción propia de la naturaleza, o por elementos derivados de la acción humana.
    p Cada región debe evaluar objetivamente los recursos y sus atractivos aptos para uso turístico, y estos a su vez se clasifican en dos grupos:

   

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-10.f1
        .background.b1
        .cont2
          .row.justify-content-center.d-flex
            .col-sm-6.col-xl-5.mb-4.mb-xl-0
              .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img.fl1(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-10.png')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5.fnd-7
                    p.mb-0 Se define como el conjunto de bienes y manifestaciones culturales materiales e inmateriales, que se encuentra en permanente construcción sobre el territorio transformado por las comunidades. 
                    p Estos bienes y manifestaciones se constituyen en valores que conforman sentidos y lazos de permanencia, identidad y memoria para un grupo o colectivo humano” (Ministerio de Comercio, Industria y Turismo, 2010).

            .col-sm-6.col-xl-5.mb-4.mb-xl-0
              .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img.fl1(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-11.png')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5.fnd-7
                    h5.text-center.mt-lg-5 Sitios naturales:
                    p Compuesto por las áreas geográficas (conjunto de atractivos con sus componentes) y los recursos naturales de importancia e interés para el turismo.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-xl-10.fnd-6.fnd-6-2
        .row.justify-content-center.align-items-center.fnd-5
          .col-xl-9.col-lg-8
            p.mb-0 Los atractivos turísticos de Colombia son fundamentales para su identidad cultural y desarrollo económico. Se destacan por su biodiversidad, patrimonio histórico y riqueza cultural. Desde paisajes naturales como el Parque Tayrona hasta la arquitectura colonial de Cartagena, cada destino brinda experiencias únicas e inolvidables.  
          .col-xl-3.col-lg-4
            figure.fl-box-img.img-4
              img(src='@/assets/curso/temas/tema3/img-13.svg' alt='Background Image')




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
