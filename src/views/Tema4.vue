<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Inventario turístico
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8            
        p Registro de elementos que, por sus características y particulares cualidades naturales o culturales, tienen significación de atractivo para el turismo, lo cual implica un capital a manera de reserva, que puede brindar grandes posibilidades de desarrollo turístico para una región o país.
        p.mb-4 Es importante recalcar que los inventarios de atractivos turísticos, junto con otros insumos de información producidos en los procesos de planificación turística, constituyen elementos de trascendencia para la toma de decisiones en materia de turismo, tanto para el sector público como para el privado, en los niveles regionales y nacionales. El resultado de un inventario turístico debe facilitar el trabajo a los actores regionales y municipales del turismo, propiciando el diálogo armónico con miras a la diversificación y consolidación de nuevos productos turísticos competitivos:
        
      .col-lg-4.col-md-6.mb-0.mb-md-4
        figure
          img(src='@/assets/curso/temas/tema4/img-1.svg')

    .row.pe-lg-3.justify-content-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-2.mt-1.fnd-t.fnd-t-3
        h5 Inventario
      p Es el proceso por el cual se registran ordenadamente los factores físicos y culturales como un conjunto de atractivos, que sirven para elaborar productos turísticos de una región. Es necesario diferenciar entre recurso y atractivo: 

    .row
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-72(src='@/assets/curso/temas/tema4/img-2.svg', alt='')
          .tarjeta.tarjeta--azul.fnd-8
            .p-4         
              p.mb-0 <b>Recurso:</b> Factores físicos y culturales potencialmente explotables por el turismo.
    
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-72(src='@/assets/curso/temas/tema4/img-3.svg', alt='')
          .tarjeta.tarjeta--azul.fnd-8
            .p-4
              p.mb-0 <b>Atractivo:</b> Factores físicos y culturales que reúnen las condiciones para ser integrados de inmediato a los productos turísticos. 
    p.mb-4 El objetivo de un inventario de atractivos turísticos es realizar una evaluación objetiva (cualitativa y cuantitativa) de los atractivos y recursos con los cuales se dispone, seleccionando aquellos susceptibles de aprovechamiento turístico inmediato, o para establecer acciones de mejoramiento sobre ellos, haciéndolos visibles para su inclusión en el diseño de productos turísticos.
    .row.pe-lg-3.justify-content-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-2
        img(src="@/assets/curso/temas/tema1/img-6.png")
      .col.px-0
        h3.mb-0 Clasificación de los bienes y atractivos
    p La región donde se realiza el levantamiento del inventario debe evaluar objetivamente los recursos y atractivos susceptibles de uso turístico, los cuales se clasifican en dos grupos: patrimonio cultural y sitios naturales.


    TabsA.color-acento-botones.mb-5.fnd-10
      .tarjeta.fnd-8-8.p-4(titulo="Patrimonio Cultural")
        .row.justify-content-center.align-items-center.px-lg-4.px-md-1
          .col-lg-5            
            p Se define como el conjunto de bienes y manifestaciones culturales, materiales e inmateriales, que se encuentra en permanente construcción sobre el territorio transformado por las comunidades. Dichos bienes y manifestaciones se constituyen en valores que conforman sentido y lazo de permanencia, identidad y memoria para un grupo o colectivo humano.
              
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/temas/tema4/img-4.png')

      .tarjeta.fnd-8-8.p-4(titulo="Patrimonio material")
        .row.justify-content-center.align-items-center.px-lg-4.px-md-1
          .col-lg-7         
            p Caracterizado por tener un cuerpo físico que puede ser dimensionado y percibido sensorialmente. Está constituido por el territorio geográfico, por los recursos ambientales y naturales como hábitat humano, por los hechos allí construidos, por las manifestaciones físicas de su estructura de producción, por los procesos de poblamiento, por los sistemas de transporte y las obras de infraestructura; y, todo el universo de herramientas, utensilios, máquinas y demás objetos que apoyan la vida productiva y cotidiana de los seres humanos. El patrimonio material agrupa dos grandes áreas: la inmueble y la mueble.
            
          .col-lg-5.col-md-8
            figure
              img(src='@/assets/curso/temas/tema4/img-5.png')

      .tarjeta.fnd-8-8.p-4(titulo="Patrimonio inmaterial")
        .row.justify-content-center.align-items-center.px-lg-4.px-md-1
          .col-lg-7     
            p Comprende las tradiciones y expresiones orales, las prácticas sociales, los rituales y actos festivos, el conocimiento y prácticas sobre la naturaleza y el universo, y expresiones artísticas, entre otras.  Continuamente se están recreando en la sociedad y reproduciendo generacionalmente. Estas manifestaciones pueden agruparse bajo la denominación de folklore (entendido como la sabiduría del pueblo), y deben ajustarse a ciertas características, como lo son: la colectividad, tradición, anonimato, espontaneidad y popularidad.
            
          .col-lg-5.col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-7.png')

      .tarjeta.fnd-8-8.p-4(titulo="Festividades y eventos")
        .row.justify-content-center.align-items-center.px-lg-4.px-md-1
          .col-lg-7          
            p son atractivos que se generan en la realización de eventos con contenido actual o tradicional, en los cuales, la población es actora o espectadora. 
            p Grupos de especial interés: Constituidos por comunidades indígenas, comunidades negras y comunidades raizales, en las cuales se valora el respeto por sus costumbres como una forma de conservación auténtica de su legado cultural.
            
          .col-lg-5.col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-6.png')

      .tarjeta.fnd-8-8.p-4(titulo="Sitios naturales")
        .row.justify-content-center.align-items-center.px-lg-4.px-md-1
          .col-lg-7           
            p Contemplan las áreas geográficas (conjunto de atractivos con sus componentes), y los recursos naturales (que por sus características no permiten estar agrupados); resultan de gran importancia e interés para el turismo
            
          .col-lg-5.col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-8.png')

</template>

<script>
export default {
  name: 'Tema4',
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
