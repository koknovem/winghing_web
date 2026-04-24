export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  coverImage: string
  images?: string[]
  tags?: string[]
}

export const projects: Project[] = [
  {
    slug: 'img-1',
    title: '鐵閘／門口工程',
    summary: '牢固耐用，兼顧美觀與實用。',
    description:
      '可按現場尺寸度身訂造，材料與款式可配合需要。適合住宅或商舖出入口使用。',
    coverImage: '/images/IMG_1.jpg',
    images: ['/images/IMG_1.jpg', '/images/IMG_2.jpg', '/images/IMG_3.jpg'],
    tags: ['閘門', '出入口'],
  },
  {
    slug: 'img-4',
    title: '欄河／扶手',
    summary: '安全防護與線條感兼備。',
    description:
      '可配合現場環境設計欄河高度與間距，確保安全之餘，亦保持整體一致性。',
    coverImage: '/images/IMG_4.jpg',
    images: ['/images/IMG_4.jpg', '/images/IMG_5.jpg'],
    tags: ['欄河', '扶手'],
  },
  {
    slug: 'img-6',
    title: '焊接修補',
    summary: '針對鬆脫、破損位置作加固處理。',
    description:
      '針對結構鬆脫或破損位置作焊接修補及加固，提升耐用度與安全性。',
    coverImage: '/images/IMG_6.jpg',
    images: ['/images/IMG_6.jpg', '/images/IMG_7.jpg'],
    tags: ['焊接', '維修'],
  },
  {
    slug: 'img-8',
    title: '不鏽鋼工程',
    summary: '耐用易打理，適合室內外。',
    description:
      '不鏽鋼物料耐用及易於清潔，常用於扶手、圍欄及各類配件，適合多種環境。',
    coverImage: '/images/IMG_8.jpg',
    images: ['/images/IMG_8.jpg', '/images/IMG_9.jpg', '/images/IMG_10.jpg'],
    tags: ['不鏽鋼'],
  },
  {
    slug: 'img-11',
    title: '鐵器裝修',
    summary: '由現場評估到安裝，一站式處理。',
    description:
      '可先安排現場評估及提供建議，再按需要製作及安排安裝，交付前會檢查穩固度。',
    coverImage: '/images/IMG_11.jpg',
    images: ['/images/IMG_11.jpg', '/images/IMG_12.jpg', '/images/IMG_13.jpg'],
    tags: ['裝修', '安裝'],
  },
  {
    slug: 'img-14',
    title: '商舖工程',
    summary: '配合營運需要，注重工期及安全。',
    description:
      '商舖工程著重工期與現場協調，可按營運時間安排施工，減少對生意影響。',
    coverImage: '/images/IMG_14.jpg',
    images: ['/images/IMG_14.jpg', '/images/IMG_15.jpg'],
    tags: ['商舖'],
  },
  {
    slug: 'img-16',
    title: '鐵架／支架',
    summary: '結構穩固，按用途設計承重。',
    description:
      '按用途設計尺寸與承重，常用於支撐、固定或放置物件，並兼顧安全與耐用。',
    coverImage: '/images/IMG_16.jpg',
    images: ['/images/IMG_16.jpg', '/images/IMG_17.jpg'],
    tags: ['支架', '結構'],
  },
  {
    slug: 'img-18',
    title: '維修保養',
    summary: '定期檢查及保養，延長使用年期。',
    description:
      '提供維修及保養建議，針對磨損、鬆脫、鏽蝕位置作處理，延長使用年期。',
    coverImage: '/images/IMG_18.jpg',
    images: ['/images/IMG_18.jpg', '/images/IMG_19.jpg', '/images/IMG_20.jpg'],
    tags: ['維修', '保養'],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

