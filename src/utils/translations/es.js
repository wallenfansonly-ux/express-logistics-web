export const es = {
  nav: {
    home: 'Inicio', track: 'Rastrear Envio', services: 'Servicios', about: 'Nosotros', contact: 'Contacto',
    faq: 'FAQ', login: 'Acceso Admin', logout: 'Cerrar Sesion', dashboard: 'Panel'
  },
  home: {
    heroTitle: 'Soluciones Logisticas Globales', heroSubtitle: 'Envio rapido, confiable y seguro en todo el mundo',
    heroDescription: 'Confia tus envios a Express Logistics. Entregamos en mas de 200 paises con seguimiento en tiempo real.',
    trackPackage: 'Rastrear Paquete', learnMore: 'Mas Informacion', ourServices: 'Nuestros Servicios',
    whyChooseUs: 'Por Que Elegirnos', getStarted: 'Comenzar', enterTrackingPlaceholder: 'Ingresa el numero de rastreo'
  },
  tracking: {
    title: 'Rastrea Tu Envio', subtitle: 'Ingresa tu numero de rastreo para actualizaciones en tiempo real',
    enterTracking: 'Ingresa Numero de Rastreo', trackButton: 'Rastrear', trackingNumber: 'Numero de Rastreo',
    origin: 'Origen', destination: 'Destino', currentLocation: 'Ubicacion Actual', status: 'Estado',
    estimatedDelivery: 'Entrega Estimada', deliveredDate: 'Fecha de Entrega', shipmentDetails: 'Detalles del Envio',
    timeline: 'Linea de Tiempo', noResults: 'No se encontro envio con este numero', trackingHelp: 'Tu numero esta en tu correo de confirmacion'
  },
  status: {
    pending: 'Pendiente', picked_up: 'Recogido', in_transit: 'En Transito', out_for_delivery: 'En Reparto',
    delivered: 'Entregado', cancelled: 'Cancelado', on_hold: 'En Espera', customs: 'En Aduana', at_facility: 'En Instalacion'
  },
  services: {
    title: 'Nuestros Servicios', subtitle: 'Soluciones logisticas completas',
    express: { title: 'Envio Express', description: 'Entrega rapida en 24-48 horas' },
    standard: { title: 'Envio Estandar', description: 'Entrega confiable en 3-5 dias habiles' },
    international: { title: 'Envio Internacional', description: 'Entrega global a mas de 200 paises' },
    freight: { title: 'Servicios de Carga', description: 'Soluciones para carga pesada' },
    warehousing: { title: 'Almacenamiento', description: 'Almacenaje seguro y gestion de inventario' },
    ecommerce: { title: 'Soluciones E-commerce', description: 'Soluciones integradas para tiendas online' }
  },
  about: {
    title: 'Sobre Express Logistics', subtitle: 'Tu socio de confianza en envios globales',
    mission: 'Nuestra Mision', missionText: 'Proveer servicios logisticos excepcionales conectando empresas globalmente.',
    vision: 'Nuestra Vision', visionText: 'Ser el socio logistico mas confiable del mundo.',
    values: 'Nuestros Valores', valuesList: ['Cliente Primero', 'Confiabilidad', 'Innovacion', 'Sostenibilidad', 'Integridad'],
    stats: { countries: 'Paises', shipments: 'Envios/Ano', customers: 'Clientes Felices', employees: 'Empleados' }
  },
  contact: {
    title: 'Contactanos', subtitle: 'Estamos aqui para ayudarte', getInTouch: 'Ponte en Contacto', sendMessage: 'Enviar Mensaje',
    form: { name: 'Nombre Completo', email: 'Correo Electronico', phone: 'Telefono', subject: 'Asunto', message: 'Mensaje', submit: 'Enviar' },
    info: { phone: 'Telefono', email: 'Email', address: 'Direccion', hours: 'Horario' }
  },
  faq: { title: 'Preguntas Frecuentes', subtitle: 'Encuentra respuestas a preguntas comunes', categories: { tracking: 'Rastreo', shipping: 'Envios', payment: 'Pagos', returns: 'Devoluciones' } },
  admin: {
    dashboard: 'Panel', shipments: 'Envios', customers: 'Clientes', reports: 'Reportes', settings: 'Configuracion',
    createShipment: 'Crear Envio', editShipment: 'Editar Envio', manageShipments: 'Gestionar Envios', statistics: 'Estadisticas',
    totalShipments: 'Total Envios', pendingShipments: 'Pendientes', inTransit: 'En Transito', delivered: 'Entregados',
    recentShipments: 'Envios Recientes', quickActions: 'Acciones Rapidas', addTimelineEvent: 'Agregar Evento', uploadPOD: 'Subir Prueba'
  },
  shipment: {
    customerName: 'Nombre Cliente', sender: 'Nombre Remitente', receiver: 'Nombre Destinatario', email: 'Email', phone: 'Telefono',
    origin: 'Origen', destination: 'Destino', shipmentType: 'Tipo de Envio', courier: 'Mensajero',
    weight: 'Peso (kg)', dimensions: 'Dimensiones (L x A x H cm)', dispatchDate: 'Fecha de Envio',
    estimatedDelivery: 'Entrega Estimada', notes: 'Notas', create: 'Crear Envio', update: 'Actualizar', delete: 'Eliminar', confirmDelete: 'Estas seguro de eliminar este envio?'
  },
  common: {
    loading: 'Cargando...', error: 'Ocurrio un error', success: 'Exito', save: 'Guardar', cancel: 'Cancelar',
    delete: 'Eliminar', edit: 'Editar', view: 'Ver', search: 'Buscar', filter: 'Filtrar', export: 'Exportar', import: 'Importar',
    actions: 'Acciones', back: 'Atras', next: 'Siguiente', submit: 'Enviar', required: 'Requerido', optional: 'Opcional',
    language: 'Idioma', theme: 'Tema', light: 'Claro', dark: 'Oscuro'
  },
  footer: {
    description: 'Tu socio de confianza para envios y logistica global.', quickLinks: 'Enlaces Rapidos',
    contactInfo: 'Contacto', followUs: 'Siguenos', copyright: 'Todos los derechos reservados.', terms: 'Terminos', privacy: 'Privacidad'
  },
  notFound: { title: 'Pagina No Encontrada', message: 'La pagina que buscas no existe.', backHome: 'Volver al Inicio' },
  auth: {
    login: 'Acceder', logout: 'Cerrar Sesion', email: 'Email', password: 'Contrasena', rememberMe: 'Recordarme',
    forgotPassword: 'Olvidaste tu contrasena?', loginButton: 'Iniciar Sesion', loginSuccess: 'Acceso exitoso',
    loginError: 'Credenciales invalidas', logoutSuccess: 'Sesion cerrada'
  }
};
