<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El componente formativo de la <b>Asesoría turística basada en necesidades y expectativas del cliente </b>se centra en proporcionar a los aprendices un entendimiento profundo de las características y necesidades de los usuarios del sector. Este conocimiento permite adaptar los servicios turísticos a las expectativas de los clientes, asegurando experiencias satisfactorias. Además, el manejo técnico de la asesoría, que incluye el conocimiento de atractivos y servicios complementarios en la región, es fundamental para ofrecer un servicio personalizado y efectivo, basado en un diagnóstico previo de las necesidades del cliente. Esto garantiza una orientación precisa y relevante, contribuyendo al éxito de la experiencia turística.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
