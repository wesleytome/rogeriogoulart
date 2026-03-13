export interface BusinessInfo {
  name: string
  doctorName: string
  address: {
    street: string
    number: string
    district: string
    city: string
    state: string
    zipCode: string
  }
  phones: {
    main: string
    whatsapp: string
  }
  email: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
  description: string
  specialties: string[]
}

export const businessInfo: BusinessInfo = {
  name: 'Clínica Rogério Goulart',
  doctorName: 'Dr. Rogério Goulart',
  address: {
    street: 'Rua Marangá',
    number: '960',
    district: 'Praça Seca',
    city: 'Rio de Janeiro',
    state: 'RJ',
    zipCode: '21321-060'
  },
  phones: {
    main: '(21) 98079-9575',
    whatsapp: '(21) 98079-9575'
  },
  email: 'contato@rogeriogoulart.com.br',
  hours: {
    weekdays: 'Segunda a Sexta: 8:00 - 18:00',
    saturday: 'Sábado: 9:00 - 13:00',
    sunday: 'Domingo: Fechado'
  },
  socialMedia: {
    facebook: 'https://facebook.com/rogeriogoulart',
    instagram: 'https://instagram.com/rogeriogoulart',
    linkedin: 'https://linkedin.com/in/rogeriogoulart'
  },
  description: 'Odontologia com excelência para cuidar da sua saúde bucal, recuperar função mastigatória e transformar seu sorriso com naturalidade.',
  specialties: [
    'Odontologia Estética',
    'Implantes Dentários',
    'Clareamento Dental',
    'Lentes de Contato Dental',
    'Prótese Dentária',
    'Endodontia'
  ]
}
