export const ko = {
  nav: {
    home: '홈', track: '배송 추적', services: '서비스', about: '회사소개', contact: '문의하기',
    faq: '자주묻는질문', login: '관리자 로그인', logout: '로그아웃', dashboard: '대시보드'
  },
  home: {
    heroTitle: '글로벌 물류 솔루션', heroSubtitle: '전 세계로 빠르고 신뢰할 수 있는 안전한 배송',
    heroDescription: 'Express Logistics에 맡기세요. 200개국 이상에 실시간 추적과 프리미엄 서비스로 배송합니다.',
    trackPackage: '패키지 추적', learnMore: '자세히 보기', ourServices: '서비스',
    whyChooseUs: '선택해야 할 이유', getStarted: '시작하기', enterTrackingPlaceholder: '추적 번호 입력'
  },
  tracking: {
    title: '배송 추적', subtitle: '추적 번호를 입력하여 실시간 업데이트를 받으세요',
    enterTracking: '추적 번호 입력', trackButton: '추적', trackingNumber: '추적 번호',
    origin: '발송지', destination: '도착지', currentLocation: '현재 위치', status: '상태',
    estimatedDelivery: '예상 배송일', deliveredDate: '배송 완료일', shipmentDetails: '배송 상세정보',
    timeline: '배송 경로', noResults: '이 추적 번호의 배송을 찾을 수 없습니다', trackingHelp: '추적 번호는 확인 이메일에 있습니다'
  },
  status: {
    pending: '대기중', picked_up: '수거완료', in_transit: '운송중', out_for_delivery: '배송중',
    delivered: '배송완료', cancelled: '취소됨', on_hold: '보류', customs: '통관중', at_facility: '시설'
  },
  services: {
    title: '서비스', subtitle: '종합 물류 솔루션',
    express: { title: '특급 배송', description: '24-48시간 내 빠른 배송' },
    standard: { title: '표준 배송', description: '3-5 영업일 내 신뢰할 수 있는 배송' },
    international: { title: '국제 배송', description: '200개국 이상 글로벌 배송' },
    freight: { title: '화물 서비스', description: '중화물 및 대량 운송 솔루션' },
    warehousing: { title: '창고 보관', description: '안전한 보관 및 재고 관리' },
    ecommerce: { title: '이커머스 솔루션', description: '온라인 소매업체를 위한 통합 솔루션' }
  },
  about: {
    title: 'Express Logistics 소개', subtitle: '글로벌 배송의 신뢰할 수 있는 파트너',
    mission: '미션', missionText: '신뢰성, 속도, 관심으로 기업과 개인을 전 세계적으로 연결하는 탁월한 물류 서비스 제공.',
    vision: '비전', visionText: '가장 신뢰할 수 있는 글로벌 물류 파트너가 되는 것.',
    values: '가치', valuesList: ['고객 우선', '신뢰성', '혁신', '지속가능성', '정직'],
    stats: { countries: '국가', shipments: '연간 배송', customers: '만족 고객', employees: '직원' }
  },
  contact: {
    title: '문의하기', subtitle: '도움을 드리겠습니다', getInTouch: '연락처', sendMessage: '메시지 보내기',
    form: { name: '이름', email: '이메일 주소', phone: '전화번호', subject: '제목', message: '메시지', submit: '보내기' },
    info: { phone: '전화', email: '이메일', address: '주소', hours: '영업시간' }
  },
  faq: { title: '자주묻는질문', subtitle: '일반적인 질문에 대한 답변', categories: { tracking: '추적 및 배송', shipping: '배송', payment: '결제', returns: '반품' } },
  admin: {
    dashboard: '대시보드', shipments: '배송', customers: '고객', reports: '보고서', settings: '설정',
    createShipment: '배송 생성', editShipment: '배송 수정', manageShipments: '배송 관리', statistics: '통계',
    totalShipments: '총 배송', pendingShipments: '대기중', inTransit: '운송중', delivered: '배송완료',
    recentShipments: '최근 배송', quickActions: '빠른 작업', addTimelineEvent: '이벤트 추가', uploadPOD: '배송 증명 업로드'
  },
  shipment: {
    customerName: '고객명', sender: '발송자명', receiver: '수령인명', email: '이메일', phone: '전화번호',
    origin: '발송지', destination: '도착지', shipmentType: '배송 유형', courier: '택배',
    weight: '무게(kg)', dimensions: '크기(가로x세로x높이 cm)', dispatchDate: '발송일',
    estimatedDelivery: '예상 배송', notes: '참고사항', create: '배송 생성', update: '업데이트', delete: '삭제', confirmDelete: '이 배송을 삭제하시겠습니까?'
  },
  common: {
    loading: '로딩중...', error: '오류가 발생했습니다', success: '성공', save: '저장', cancel: '취소',
    delete: '삭제', edit: '수정', view: '보기', search: '검색', filter: '필터', export: '내보내기', import: '가져오기',
    actions: '작업', back: '뒤로', next: '다음', submit: '제출', required: '필수', optional: '선택',
    language: '언어', theme: '테마', light: '라이트', dark: '다크'
  },
  footer: {
    description: '글로벌 배송 및 물류 솔루션의 신뢰할 수 있는 파트너.', quickLinks: '빠른 링크',
    contactInfo: '연락처', followUs: '팔로우', copyright: '모든 권리 보유.', terms: '이용약관', privacy: '개인정보처리방침'
  },
  notFound: { title: '페이지를 찾을 수 없습니다', message: '찾으시는 페이지가 존재하지 않습니다.', backHome: '홈으로 돌아가기' },
  auth: {
    login: '로그인', logout: '로그아웃', email: '이메일', password: '비밀번호', rememberMe: '로그인 상태 유지',
    forgotPassword: '비밀번호를 잊으셨나요?', loginButton: '로그인', loginSuccess: '로그인 성공',
    loginError: '잘못된 인증 정보', logoutSuccess: '로그아웃 성공'
  }
};
