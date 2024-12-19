export default {
  global: {
    componenteFormativo:
      'Asesoría turística basada en necesidades y expectativas del cliente',
    descripcionCurso:
      'En el sector turístico comprender las necesidades y expectativas del cliente es esencial para una asesoría turística efectiva. Las necesidades son los requisitos básicos como comodidad y seguridad, mientras que las expectativas abarcan deseos adicionales sobre servicios y experiencias. Identificar estos aspectos permite a los profesionales del turismo ofrecer recomendaciones y soluciones personalizadas, asegurando que los servicios no solo cumplan con los requerimientos básicos, sino que también superen las expectativas, mejorando la experiencia del cliente y fomentando la fidelización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Caracterización de clientes',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Consumidor turístico ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comportamiento del consumidor',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Inventario turístico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Valoración de los atractivos turísticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Servicios complementarios',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_66410054_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Valoración de los atractivos turísticos',
      referencia:
        'Metodología para la elaboración del inventario de atractivos turísticos',
      tipo: 'Documento PDF',
      descarga:
        '/downloads/METODOLOGIA-PARA-LA-ELABORACION-DEL-INVENTARIO-DE-ATRACTIVOS-TURISTICOS.pdf',
    },
    {
      tema: 'Valoración de los atractivos turísticos',
      referencia: 'Identificar e inventariar el patrimonio cultural inmaterial',
      tipo: 'Documento PDF',
      descarga: '/downloads/01856-ES.pdf ',
    },
  ],
  glosario: [
    {
      termino: '<em>Adprosumer</em>',
      significado:
        'el cliente satisfecho con un producto o servicio comparte su experiencia positiva con el resto de los clientes y se convierte en su mejor prescriptor. La fuerza que tiene un cliente satisfecho es incalculable.',
    },
    {
      termino: 'Agencia de viajes',
      significado:
        'empresa turística dedicada a la intermediación, organización y realización de proyectos, planes e itinerarios; a la elaboración y venta de productos turísticos entre sus clientes y determinados proveedores de viajes, como por ejemplo: transportistas (aerolíneas, cruceros) y servicio de alojamiento (hoteles); con el objetivo de poner los bienes y servicios turísticos a disposición de quienes deseen y puedan utilizarlos.',
    },
    {
      termino: 'Agroturismo',
      significado:
        'es una forma de turismo en la que la cultura rural es aprovechada económicamente para brindar diversas opciones de turismo.',
    },
    {
      termino: 'Área',
      significado:
        'zona o superficie marcada, que se distingue de lo que la rodea. Espacio de acción o ámbito en el que se desarrolla una actividad.',
    },
    {
      termino: 'Atractivo turístico',
      significado:
        'lugar, bien o característica específica; tangible o intangible, que tiene el poder de atraer al turista y motivar su desplazamiento. Puede ser de tipo natural (creados sin la intervención humana) o cultural (creados por el hombre).',
    },
    {
      termino: 'Calidad',
      significado:
        'conjunto de características que le confieren a un producto o servicio, los atributos necesarios para satisfacer necesidades implícitas y expresadas.',
    },
    {
      termino: 'Circuito turístico',
      significado:
        'ilustraciones preliminares que visualizan conceptos y diseños para proyectos, sirviendo como referencia para el desarrollo final.',
    },
    {
      termino: 'Destino turístico',
      significado:
        'lugar visitado durante un viaje. Puede definirse como el punto más alejado de la residencia habitual visitado (destino de distancia), el lugar donde se ha pasado mayor parte del tiempo (destino principal), o el lugar que el visitante concibe como el más importante que ha visitado (destino de motivación).',
    },
    {
      termino: 'El <em>consumer</em>',
      significado:
        'es el turista clásico, el cual se limita a consumir el producto turístico, el turista que entrega la preparación de sus vacaciones a profesionales y que se deja persuadir en un grado importante.',
    },
    {
      termino: 'El <em>prosumer</em>',
      significado:
        'le gusta crear su propio producto, desde que le nace la necesidad del viaje, es un consumidor activo el cual utiliza internet para para documentarse de aquellos servicios que le satisfacen a la hora de elegir alguno.',
    },
    {
      termino: 'El turismo ecológico o ecoturismo',
      significado:
        'es una nueva tendencia del turismo alternativo diferente al turismo tradicional. Es un enfoque para las actividades turísticas en el cual se privilegia la sustentabilidad,la preservación, la apreciación del medio que acoge y sensibiliza a los viajantes.',
    },
    {
      termino: 'Excursionista',
      significado:
        'persona que realiza un viaje fuera de su entorno habitual y que no pernocta en el lugar visitado. Dicho viaje se realiza por cualquier motivo diferente al de ejercer una actividad remunerada en el lugar visitado.',
    },
    {
      termino: 'Estructura',
      significado:
        'llamada Planta Turística, está conformada por las edificaciones, instalaciones, organizaciones públicas y privadas dirigidas a la satisfacción del consumidor o usuario del servicio turístico, durante la comercialización, venta, producción y realización de éste. Comprende los servicios de transporte, alojamiento u hospedaje; de alimentos y bebidas, de recreación o entretenimiento y servicios complementarios.',
    },
    {
      termino: 'Facilidades turísticas',
      significado:
        'comprende el conjunto de bienes y servicios que hacen posible la actividad turística. Se refiere a las instalaciones donde los visitantes pueden satisfacer sus necesidades y los servicios complementarios para la práctica del turismo. “Conjunto de requerimientos que hacen agradable la experiencia del visitante durante su visita al lugar que le ha motivado como objetivo de viaje.” (Castrillón Muñoz, 2010).',
    },
    {
      termino: 'Interdependientes',
      significado:
        'dependencia mutua entre personas, entidades o naciones. Relación por la que dos o más personas o cosas dependen unas de otras.',
    },
    {
      termino: 'Infraestructura',
      significado:
        'elemento visual que simula la superficie de un objeto, contribuyendo al realismo y la profundidad en la ilustración digital.',
    },
    {
      termino: 'Itinerario',
      significado:
        'ruta que se sigue para llegar a un lugar; es la dirección y descripción de un camino con expresión de los lugares, accidentes, paradas, distancias, etc., que existen a lo largo de él. En él se incluye la lista de datos referentes a un viaje.',
    },
    {
      termino: 'Mercado turístico',
      significado:
        'lugar donde confluyen la oferta de productos y servicios turísticos, junto con la demanda de los mismos productos y servicios turísticos.',
    },
    {
      termino: 'Paquete turístico',
      significado:
        'conjunto de bienes y servicios turísticos que se venden al viajero por medio de las agencias de viaje o de las líneas áreas. Comprende servicios de transporte, alojamiento, alimentación, recreación y excursiones; éstas se comercializan como un solo producto o marca, y se vende con un precio unitario (dentro del paquete) en un tiempo determinado.',
    },
    {
      termino: 'Región',
      significado:
        'porción de territorio en que se divide una nación, definida por rasgos geográficos, históricos, climáticos y sociales; puede subdividirse en departamentos, municipios u otras unidades administrativas.',
    },
    {
      termino: 'Ruta histórica',
      significado:
        'producto de turismo basado en temas del patrimonio cultural, referido a rutas históricas, personajes ilustres, artistas; incluso, a monumentos particulares de patrimonio construido por una cultura. En su mayoría, están señalizadas sobre el terreno o delante del monumento en cuestión.',
    },
    {
      termino: 'Ruta temática',
      significado:
        'dan a conocer aquellas labores relacionadas con la naturaleza y bajo impacto ambiental. En ellas, se muestran los oficios antiguos y, de alguna manera, se propicia que el patrimonio se mantenga con vida; puede disfrutarse mediante la combinación de actividades culturales, de compras, de gastronomía y senderismo; estas actividades resultan afines y compatibles con el conocimiento que se desea transmitir a través de la ruta a los turistas; también abarca rutas históricas y turísticas.',
    },
    {
      termino: 'Servicios turísticos',
      significado:
        'el cliente satisfecho con un producto o servicio comparte su experiencia positiva con el resto de los clientes y se convierte en su mejor prescriptor. La fuerza que tiene un cliente satisfecho es incalculable.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barrios Salas, L. A. (21 de agosto de 2009). Elaboración de circuitos turísticos. Recuperado el octubre de 2014, de Scribed. ',
      link:
        'http://es.scribd.com/doc/18972548/Elaboracion-de-un-Circuito-Turistico ',
    },
    {
      referencia:
        'Blogspot.com. (2009). tipos de clientes y su clasificación. recuperado el 5 de noviembre de 2014',
      link:
        'http://afvtgt09.blogspot.com/2009/10/tipos-de-cliente-y-su-clasificacion.html ',
    },
    {
      referencia:
        'Castrillón Muñoz, J. (4 de febrero de 2010). Facilidades turísticas (definición).Recuperado el 9 de octubre de 2013',
    },
    {
      referencia:
        'Dueñas, P. (22 de octubre de 2011). Producto turístico. recuperado el 26 de noviembre de 2014, de slideshare:',
    },
    {
      referencia:
        'Ejarque, J. (2009). El Turista Cliente. Recuperado el 5 de noviembre de 2014',
    },
    {
      referencia:
        'Germán Sierra Anaya, M. R. (2006). Introducción al mercado turístico. Cartagena: Universitaria. gonzález Ferrer, J. R. (s.f.). Conceptuación del Producto Turístico. Recuperado el 24 de noviembre de 2014',
    },
    {
      referencia:
        'Instituto Distrital de Turismo - ANATO. (22 de 11 de 2008). Manual para el diseño de paquetes turísticos. recuperado el 24 de noviembre de 2014',
    },
    {
      referencia:
        'Minep - Ministerio para la Economía Popular. (2005). Aspectos generales de turismo y alojamiento. recuperado el 19 de febrero de 2014',
      link: 'http://es.scribd.com/doc/6801115/Turismo-y-Alojamiento',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (10 de enero de 2010). Metodología para la elaboración del Inventario de atractivos turísticos. Recuperado el 31 de octubre de 2012',
    },
    {
      referencia:
        'Nicolau, J. L. (9 de Octubre de 2012). El Producto Turístico. Recuperado el 24 de noviembre de 2014, de slideshare.',
      link:
        'http://www.slideshare.net/urania31k/el-producto-turstico?from_search=2',
    },
    {
      referencia:
        'Muñiz González, R. (2014). Atributos de Producto. Recuperado el 24 de noviembre de 2014, de<i> Marketing</i>- XXI',
      link:
        'http://www.slideshare.net/urania31k/el-producto-turstico?from_search=2',
    },
    {
      referencia:
        'Sobejano, J. (febrero de 2009). Los Distintos Modelos del Nuevo Cliente Turístico. Recuperado el 5 de noviembre de 2014, de www.hosteltur.com',
      link:
        'http://www.hosteltur.com/58823_distintos-modelos-nuevo-cliente-turistico.html',
    },
    {
      referencia:
        'Universidad técnica estatal de quevedo. (junio de 2013). Senderos ecoturísticos en la finca experimental “ La Represa”. Recuperado el 13 de noviembre de 2014',
      link:
        'http://www.uea.edu.ec/jspui/bitstream/biblioteca/175/1/TESIS%20DE%20ABIGAIL%20PAOLA%20VEGA%20VARGAS.pdf',
    },
    {
      referencia:
        'Valencia, J. (octubre de 2014). Diccionario de Términos Turísticos. Recuperado el 12 de noviembre de 2014, de boletin-turistico.com',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Olga Beatriz Zuleta Arango',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Caldas',
        },
        {
          nombre: 'José Armando Díaz Londoño',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Caldas',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de Comercio y Servicios - Regional Caldas',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Asesor pedagógico',
          centro: 'Centro de Comercio y Servicios - Regional Caldas',
        },
        {
          nombre: 'José Armando Díaz Londoño',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Caldas',
        },
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñor <i>web</i>',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jorge Leonardo Camacho Pardo',
          cargo: 'Desarrollador <em> full stack</em>',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
