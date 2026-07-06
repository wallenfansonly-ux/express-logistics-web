export const it = {
  nav: {
    home: 'Home', track: 'Traccia Spedizione', services: 'Servizi', about: 'Chi Siamo', contact: 'Contatti',
    faq: 'FAQ', login: 'Accesso Admin', logout: 'Esci', dashboard: 'Dashboard'
  },
  home: {
    heroTitle: 'Soluzioni Logistiche Globali', heroSubtitle: 'Spedizione veloce, affidabile e sicura in tutto il mondo',
    heroDescription: 'Affida le tue spedizioni a Express Logistics. Consegniamo in oltre 200 paesi con tracciamento in tempo reale.',
    trackPackage: 'Traccia Pacco', learnMore: 'Scopri di Piu', ourServices: 'I Nostri Servizi',
    whyChooseUs: 'Perche Sceglierci', getStarted: 'Inizia', enterTrackingPlaceholder: 'Inserisci il numero di tracciamento'
  },
  tracking: {
    title: 'Traccia la Tua Spedizione', subtitle: 'Inserisci il numero di tracciamento per aggiornamenti in tempo reale',
    enterTracking: 'Inserisci Numero', trackButton: 'Traccia', trackingNumber: 'Numero di Tracciamento',
    origin: 'Origine', destination: 'Destinazione', currentLocation: 'Posizione Attuale', status: 'Stato',
    estimatedDelivery: 'Consegna Stimata', deliveredDate: 'Data Consegna', shipmentDetails: 'Dettagli Spedizione',
    timeline: 'Cronologia', noResults: 'Nessuna spedizione trovata con questo numero', trackingHelp: 'Il tuo numero e nella email di conferma'
  },
  status: {
    pending: 'In Attesa', picked_up: 'Ritirato', in_transit: 'In Transito', out_for_delivery: 'In Consegna',
    delivered: 'Consegnato', cancelled: 'Annullato', on_hold: 'In Pausa', customs: 'In Dogana', at_facility: 'Presso Centro'
  },
  services: {
    title: 'I Nostri Servizi', subtitle: 'Soluzioni logistiche complete',
    express: { title: 'Consegna Express', description: 'Consegna rapida in 24-48 ore' },
    standard: { title: 'Spedizione Standard', description: 'Consegna affidabile in 3-5 giorni lavorativi' },
    international: { title: 'Spedizione Internazionale', description: 'Consegna globale in oltre 200 paesi' },
    freight: { title: 'Servizi Cargo', description: 'Soluzioni per carichi pesanti' },
    warehousing: { title: 'Magazzinaggio', description: 'Stoccaggio sicuro e gestione inventario' },
    ecommerce: { title: 'Soluzioni E-commerce', description: 'Soluzioni integrate per rivenditori online' }
  },
  about: {
    title: 'Chi Siamo - Express Logistics', subtitle: 'Il tuo partner fidato per le spedizioni globali',
    mission: 'La Nostra Missione', missionText: 'Fornire servizi logistici eccezionali collegando imprese globalmente.',
    vision: 'La Nostra Visione', visionText: 'Essere il partner logistico globale piu fidato.',
    values: 'I Nostri Valori', valuesList: ['Cliente Prima', 'Affidabilita', 'Innovazione', 'Sostenibilita', 'Integrita'],
    stats: { countries: 'Paesi', shipments: 'Spedizioni/Anno', customers: 'Clienti Soddisfatti', employees: 'Dipendenti' }
  },
  contact: {
    title: 'Contattaci', subtitle: 'Siamo qui per aiutarti', getInTouch: 'Mettiti in Contatto', sendMessage: 'Invia Messaggio',
    form: { name: 'Nome Completo', email: 'Indirizzo Email', phone: 'Telefono', subject: 'Oggetto', message: 'Messaggio', submit: 'Invia' },
    info: { phone: 'Telefono', email: 'Email', address: 'Indirizzo', hours: 'Orari' }
  },
  faq: { title: 'Domande Frequenti', subtitle: 'Trova risposte alle domande comuni', categories: { tracking: 'Tracciamento', shipping: 'Spedizione', payment: 'Pagamento', returns: 'Resi' } },
  admin: {
    dashboard: 'Dashboard', shipments: 'Spedizioni', customers: 'Clienti', reports: 'Report', settings: 'Impostazioni',
    createShipment: 'Crea Spedizione', editShipment: 'Modifica Spedizione', manageShipments: 'Gestisci Spedizioni', statistics: 'Statistiche',
    totalShipments: 'Spedizioni Totali', pendingShipments: 'In Attesa', inTransit: 'In Transito', delivered: 'Consegnate',
    recentShipments: 'Spedizioni Recenti', quickActions: 'Azioni Rapide', addTimelineEvent: 'Aggiungi Evento', uploadPOD: 'Carica Prova'
  },
  shipment: {
    customerName: 'Nome Cliente', sender: 'Nome Mittente', receiver: 'Nome Destinatario', email: 'Email', phone: 'Telefono',
    origin: 'Origine', destination: 'Destinazione', shipmentType: 'Tipo Spedizione', courier: 'Corriere',
    weight: 'Peso (kg)', dimensions: 'Dimensioni (L x L x A cm)', dispatchDate: 'Data Spedizione',
    estimatedDelivery: 'Consegna Stimata', notes: 'Note', create: 'Crea Spedizione', update: 'Aggiorna', delete: 'Elimina', confirmDelete: 'Sei sicuro di voler eliminare questa spedizione?'
  },
  common: {
    loading: 'Caricamento...', error: 'Si e verificato un errore', success: 'Successo', save: 'Salva', cancel: 'Annulla',
    delete: 'Elimina', edit: 'Modifica', view: 'Visualizza', search: 'Cerca', filter: 'Filtra', export: 'Esporta', import: 'Importa',
    actions: 'Azioni', back: 'Indietro', next: 'Avanti', submit: 'Invia', required: 'Obbligatorio', optional: 'Opzionale',
    language: 'Lingua', theme: 'Tema', light: 'Chiaro', dark: 'Scuro'
  },
  footer: {
    description: 'Il tuo partner fidato per soluzioni di spedizione e logistica globale.', quickLinks: 'Link Rapidi',
    contactInfo: 'Contatti', followUs: 'Seguici', copyright: 'Tutti i diritti riservati.', terms: 'Termini', privacy: 'Privacy'
  },
  notFound: { title: 'Pagina Non Trovata', message: 'La pagina che cerchi non esiste.', backHome: 'Torna alla Home' },
  auth: {
    login: 'Accedi', logout: 'Esci', email: 'Email', password: 'Password', rememberMe: 'Ricordami',
    forgotPassword: 'Password dimenticata?', loginButton: 'Accedi', loginSuccess: 'Accesso riuscito',
    loginError: 'Credenziali non valide', logoutSuccess: 'Disconnessione riuscita'
  }
};
