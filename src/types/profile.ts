export interface Education {
  degree: string
  school: string
  year: number
  highlights?: string[]
}

export interface Career {
  title: string
  org: string
  from: string
  to: string
  bullets?: string[]
}

export interface Parent {
  name?: string
  occupation?: string
}

export interface Sibling {
  relation: string
  name?: string
  details?: string
}

export interface Family {
  parents: {
    father: Parent
    mother: Parent
  }
  siblings?: Sibling[]
}

export interface Lifestyle {
  diet?: string
  alcohol?: string
  smoke?: string
  work_life?: string
}

export interface Preferences {
  relocation?: boolean
  abroad?: boolean
  family_values?: string
}

export interface Contacts {
  email?: string
  phone?: string
  whatsapp?: string
}

export interface Gallery {
  portraits?: string[]
  casual?: string[]
  traditional?: string[]
  professional?: string[]
}

export interface Privacy {
  mask_sensitive?: boolean
}

export interface Profile {
  name: string
  tagline: string
  location: string
  dob: string
  age: number
  height_cm: number
  religion?: string
  community?: string
  languages: string[]
  profession: string
  company?: string
  education_highest: string
  education: Education[]
  career: Career[]
  interests: string[]
  lifestyle: Lifestyle
  preferences: Preferences
  family: Family
  contacts: Contacts
  gallery: Gallery
  privacy: Privacy
}