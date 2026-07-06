export const tr = {
  nav: {
    home: 'Ana Sayfa', track: 'Kargo Takip', services: 'Hizmetler', about: 'Hakkimizda', contact: 'Iletisim',
    faq: 'SSS', login: 'Admin Girisi', logout: 'Cikis', dashboard: 'Panel'
  },
  home: {
    heroTitle: 'Kuresel Lojistik Cozumleri', heroSubtitle: 'Dunya genelinde hizli, guvenilir ve guvenli gonderim',
    heroDescription: 'Express Logistics\'e guvenin. 200\'den fazla ulkeye gercek zamanli takip ve premium hizmetle teslimat.',
    trackPackage: 'Kargoyu Takip Et', learnMore: 'Daha Fazla Bilgi', ourServices: 'Hizmetlerimiz',
    whyChooseUs: 'Neden Bizi Secmelisiniz', getStarted: 'Baslayin', enterTrackingPlaceholder: 'Takip numarasini girin'
  },
  tracking: {
    title: 'Kargonuzu Takip Edin', subtitle: 'Gercek zamanli guncellemeler icin takip numaranizi girin',
    enterTracking: 'Takip Numarasi Girin', trackButton: 'Takip Et', trackingNumber: 'Takip Numarasi',
    origin: 'Gonderen', destination: 'Alici', currentLocation: 'Mevcut Konum', status: 'Durum',
    estimatedDelivery: 'Tahmini Teslimat', deliveredDate: 'Teslim Tarihi', shipmentDetails: 'Kargo Detaylari',
    timeline: 'Kargo Gecmisi', noResults: 'Bu takip numarasiyla kargo bulunamadi', trackingHelp: 'Takip numaraniz onay e-postanzda'
  },
  status: {
    pending: 'Beklemede', picked_up: 'Alindi', in_transit: 'Yolda', out_for_delivery: 'Teslimatta',
    delivered: 'Teslim Edildi', cancelled: 'Iptal', on_hold: 'Bekletiliyor', customs: 'Gumrukte', at_facility: 'Tesis'
  },
  services: {
    title: 'Hizmetlerimiz', subtitle: 'Kapsamli lojistik cozumleri',
    express: { title: 'Ekspres Teslimat', description: '24-48 saatte hizli teslimat' },
    standard: { title: 'Standart Gonderim', description: '3-5 is gununde guvenilir teslimat' },
    international: { title: 'Uluslararasi Gonderim', description: '200\'den fazla ulkeye全球 teslimat' },
    freight: { title: 'Yuk Hizmetleri', description: 'Agir yuk ve toplu gonderim cozumleri' },
    warehousing: { title: 'Depolama', description: 'Guvenli depolama ve envanter yonetimi' },
    ecommerce: { title: 'E-ticaret Cozumleri', description: 'Cevrimici perakendeciler icin entegre cozumler' }
  },
  about: {
    title: 'Express Logistics Hakkinda', subtitle: 'Kuresel gonderim icin guvendiginiz partner',
    mission: 'Misyonumuz', missionText: 'Isletmeleri ve bireyleri dunya capinda guvenilirlik, hiz ve ozenle baglayan muthis lojistik hizmetleri sunmak.',
    vision: 'Vizyonumuz', visionText: 'En guvenilir kuresel lojistik partneri olmak.',
    values: 'Degerlerimiz', valuesList: ['Musteri Oncelikli', 'Guvenilirlik', 'Inovasyon', 'Surdurebilirlik', 'Durestlul'],
    stats: { countries: 'Ulke', shipments: 'Gonderim/Yil', customers: 'Mutlu Musteri', employees: 'Calisan' }
  },
  contact: {
    title: 'Bize Ulasin', subtitle: 'Yardim icin buradayiz', getInTouch: 'Iletisim', sendMessage: 'Mesaj Gonder',
    form: { name: 'Ad Soyad', email: 'E-posta Adresi', phone: 'Telefon', subject: 'Konu', message: 'Mesaj', submit: 'Gonder' },
    info: { phone: 'Telefon', email: 'E-posta', address: 'Adres', hours: 'Calisma Saatleri' }
  },
  faq: { title: 'Sikca Sorulan Sorular', subtitle: 'Yaygin sorulara cevaplar bulundurun', categories: { tracking: 'Takip', shipping: 'Gonderim', payment: 'Odeme', returns: 'Iadeler' } },
  admin: {
    dashboard: 'Panel', shipments: 'Gonderimler', customers: 'Musteriler', reports: 'Raporlar', settings: 'Ayarlar',
    createShipment: 'Gonderim Olustur', editShipment: 'Gonderim Duzenle', manageShipments: 'Gonderim Yonetimi', statistics: 'Istatistikler',
    totalShipments: 'Toplam Gonderim', pendingShipments: 'Bekleyen', inTransit: 'Yolda', delivered: 'Teslim Edildi',
    recentShipments: 'Son Gonderimler', quickActions: ' hizli Isler', addTimelineEvent: 'Olay Ekle', uploadPOD: 'Teslimat Kaniti Yukle'
  },
  shipment: {
    customerName: 'Musteri Adi', sender: 'Gonderici Adi', receiver: 'Alici Adi', email: 'E-posta', phone: 'Telefon',
    origin: 'Gonderim Yeri', destination: 'Varis Yeri', shipmentType: 'Gonderim Turu', courier: 'Kurye',
    weight: 'Agirlik (kg)', dimensions: 'Boyutlar (E x B x Y cm)', dispatchDate: 'Gonderim Tarihi',
    estimatedDelivery: 'Tahmini Teslimat', notes: 'Notlar', create: 'Gonderim Olustur', update: 'Guncelle', delete: 'Sil', confirmDelete: 'Bu gonderimi silmek istediginizden emin misiniz?'
  },
  common: {
    loading: 'Yukleniyor...', error: 'Bir hata olustu', success: 'Basarili', save: 'Kaydet', cancel: 'Iptal',
    delete: 'Sil', edit: 'Duzenle', view: 'Goster', search: 'Ara', filter: 'Filtrele', export: 'Disa Aktar', import: 'Ice Aktar',
    actions: 'Islemler', back: 'Geri', next: 'Ileri', submit: 'Gonder', required: 'Zorunlu', optional: 'Istege Bagli',
    language: 'Dil', theme: 'Tema', light: 'Acik', dark: 'Koyu'
  },
  footer: {
    description: 'Kuresel gonderim ve lojistik cozumleri icin guvendiginiz partner.', quickLinks: ' hizli Linkler',
    contactInfo: 'Iletisim', followUs: 'Takip Edin', copyright: 'Tum haklar savdir.', terms: 'Kullanim Sartlari', privacy: 'Gizlilik'
  },
  notFound: { title: 'Sayfa Bulunamadi', message: 'Aradiginiz sayfa mevcut degil.', backHome: 'Ana Sayfaya Don' },
  auth: {
    login: 'Giris', logout: 'Cikis', email: 'E-posta', password: 'Sifre', rememberMe: 'Beni Hatirla',
    forgotPassword: 'Sifrenizi mi unuttunuz?', loginButton: 'Giris Yap', loginSuccess: 'Giris basarili',
    loginError: 'Gecersiz kimlik bilgileri', logoutSuccess: 'Cikis basarili'
  }
};
