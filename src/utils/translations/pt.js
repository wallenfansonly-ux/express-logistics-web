export const pt = {
  nav: {
    home: 'Inicio', track: 'Rastrear Encomenda', services: 'Servicos', about: 'Sobre Nos', contact: 'Contato',
    faq: 'FAQ', login: 'Acesso Admin', logout: 'Sair', dashboard: 'Painel'
  },
  home: {
    heroTitle: 'Solucoes Logisticas Globais', heroSubtitle: 'Envio rapido, confiavel e seguro em todo o mundo',
    heroDescription: 'Confie suas encomendas a Express Logistics. Entregamos em mais de 200 paises com rastreamento em tempo real.',
    trackPackage: 'Rastrear Pacote', learnMore: 'Saiba Mais', ourServices: 'Nossos Servicos',
    whyChooseUs: 'Por Que Nos Escolher', getStarted: 'Comecar', enterTrackingPlaceholder: 'Digite o numero de rastreamento'
  },
  tracking: {
    title: 'Rastreie Sua Encomenda', subtitle: 'Digite seu numero de rastreamento para atualizacoes em tempo real',
    enterTracking: 'Digite Numero', trackButton: 'Rastrear', trackingNumber: 'Numero de Rastreamento',
    origin: 'Origem', destination: 'Destino', currentLocation: 'Localizacao Atual', status: 'Status',
    estimatedDelivery: 'Entrega Estimada', deliveredDate: 'Data de Entrega', shipmentDetails: 'Detalhes da Encomenda',
    timeline: 'Linha do Tempo', noResults: 'Nenhuma encomenda encontrada com este numero', trackingHelp: 'Seu numero esta no email de confirmacao'
  },
  status: {
    pending: 'Pendente', picked_up: 'Coletado', in_transit: 'Em Transito', out_for_delivery: 'Saiu para Entrega',
    delivered: 'Entregue', cancelled: 'Cancelado', on_hold: 'Em Espera', customs: 'Na Alfandega', at_facility: 'No Centro'
  },
  services: {
    title: 'Nossos Servicos', subtitle: 'Solucoes logisticas completas',
    express: { title: 'Entrega Expressa', description: 'Entrega rapida em 24-48 horas' },
    standard: { title: 'Envio Padrao', description: 'Entrega confiavel em 3-5 dias uteis' },
    international: { title: 'Envio Internacional', description: 'Entrega global em mais de 200 paises' },
    freight: { title: 'Servicos de Carga', description: 'Solucoes para cargas pesadas' },
    warehousing: { title: 'Armazenamento', description: 'Armazenamento seguro e gestao de estoque' },
    ecommerce: { title: 'Solucoes E-commerce', description: 'Solucoes integradas para lojas online' }
  },
  about: {
    title: 'Sobre Express Logistics', subtitle: 'Seu parceiro confiavel para envios globais',
    mission: 'Nossa Missao', missionText: 'Fornecer servicos logisticos excepcionais conectando empresas globalmente.',
    vision: 'Nossa Visao', visionText: 'Ser o parceiro logistico global mais confiavel.',
    values: 'Nossos Valores', valuesList: ['Cliente em Primeiro', 'Confiabilidade', 'Inovacao', 'Sustentabilidade', 'Integridade'],
    stats: { countries: 'Paises', shipments: 'Encomendas/Ano', customers: 'Clientes Satisfeitos', employees: 'Funcionarios' }
  },
  contact: {
    title: 'Entre em Contato', subtitle: 'Estamos aqui para ajudar', getInTouch: 'Fale Conosco', sendMessage: 'Enviar Mensagem',
    form: { name: 'Nome Completo', email: 'Endereco de Email', phone: 'Telefone', subject: 'Assunto', message: 'Mensagem', submit: 'Enviar' },
    info: { phone: 'Telefone', email: 'Email', address: 'Endereco', hours: 'Horario' }
  },
  faq: { title: 'Perguntas Frequentes', subtitle: 'Encontre respostas para perguntas comuns', categories: { tracking: 'Rastreamento', shipping: 'Envio', payment: 'Pagamento', returns: 'Devolucoes' } },
  admin: {
    dashboard: 'Painel', shipments: 'Encomendas', customers: 'Clientes', reports: 'Relatorios', settings: 'Configuracoes',
    createShipment: 'Criar Encomenda', editShipment: 'Editar Encomenda', manageShipments: 'Gerenciar Encomendas', statistics: 'Estatisticas',
    totalShipments: 'Total Encomendas', pendingShipments: 'Pendentes', inTransit: 'Em Transito', delivered: 'Entregues',
    recentShipments: 'Encomendas Recentes', quickActions: 'Acoes Rapidas', addTimelineEvent: 'Adicionar Evento', uploadPOD: 'Carregar Comprovante'
  },
  shipment: {
    customerName: 'Nome Cliente', sender: 'Nome Remetente', receiver: 'Nome Destinatario', email: 'Email', phone: 'Telefone',
    origin: 'Origem', destination: 'Destino', shipmentType: 'Tipo de Envio', courier: 'Courier',
    weight: 'Peso (kg)', dimensions: 'Dimensoes (C x L x A cm)', dispatchDate: 'Data de Envio',
    estimatedDelivery: 'Entrega Estimada', notes: 'Observacoes', create: 'Criar Encomenda', update: 'Atualizar', delete: 'Excluir', confirmDelete: 'Tem certeza que deseja excluir esta encomenda?'
  },
  common: {
    loading: 'Carregando...', error: 'Ocorreu um erro', success: 'Sucesso', save: 'Salvar', cancel: 'Cancelar',
    delete: 'Excluir', edit: 'Editar', view: 'Visualizar', search: 'Buscar', filter: 'Filtrar', export: 'Exportar', import: 'Importar',
    actions: 'Acoes', back: 'Voltar', next: 'Proximo', submit: 'Enviar', required: 'Obrigatorio', optional: 'Opcional',
    language: 'Idioma', theme: 'Tema', light: 'Claro', dark: 'Escuro'
  },
  footer: {
    description: 'Seu parceiro confiavel para solucoes de envio e logistica global.', quickLinks: 'Links Rapidos',
    contactInfo: 'Contato', followUs: 'Siga-nos', copyright: 'Todos os direitos reservados.', terms: 'Termos', privacy: 'Privacidade'
  },
  notFound: { title: 'Pagina Nao Encontrada', message: 'A pagina que voce procura nao existe.', backHome: 'Voltar ao Inicio' },
  auth: {
    login: 'Entrar', logout: 'Sair', email: 'Email', password: 'Senha', rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueceu a senha?', loginButton: 'Entrar', loginSuccess: 'Login bem-sucedido',
    loginError: 'Credenciais invalidas', logoutSuccess: 'Saida bem-sucedida'
  }
};
