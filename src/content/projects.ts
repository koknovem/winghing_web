export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  coverImage: string
  images?: string[]
  tags?: string[]
}

function img(path: string) {
  // `import.meta.env.BASE_URL` can be relative (e.g. `./` on GitHub Pages),
  // which is not a valid base for `new URL(...)` in the browser.
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${normalizedBase}${normalizedPath}`
}

const curatedProjects: Project[] = [
  {
    slug: 'img-1',
    title: '鐵閘／門口工程',
    summary: '牢固耐用，兼顧美觀與實用。',
    description:
      '可按現場尺寸度身訂造，材料與款式可配合需要。適合住宅或商舖出入口使用。',
    coverImage: img('/images/IMG_1.jpg'),
    images: [img('/images/IMG_1.jpg'), img('/images/IMG_2.jpg'), img('/images/IMG_3.jpg')],
    tags: ['閘門', '出入口'],
  },
  {
    slug: 'img-4',
    title: '欄河／扶手',
    summary: '安全防護與線條感兼備。',
    description:
      '可配合現場環境設計欄河高度與間距，確保安全之餘，亦保持整體一致性。',
    coverImage: img('/images/IMG_4.jpg'),
    images: [img('/images/IMG_4.jpg'), img('/images/IMG_5.jpg')],
    tags: ['欄河', '扶手'],
  },
  {
    slug: 'img-6',
    title: '焊接修補',
    summary: '針對鬆脫、破損位置作加固處理。',
    description:
      '針對結構鬆脫或破損位置作焊接修補及加固，提升耐用度與安全性。',
    coverImage: img('/images/IMG_6.jpg'),
    images: [img('/images/IMG_6.jpg'), img('/images/IMG_7.jpg')],
    tags: ['焊接', '維修'],
  },
  {
    slug: 'img-8',
    title: '不鏽鋼工程',
    summary: '耐用易打理，適合室內外。',
    description:
      '不鏽鋼物料耐用及易於清潔，常用於扶手、圍欄及各類配件，適合多種環境。',
    coverImage: img('/images/IMG_8.jpg'),
    images: [img('/images/IMG_8.jpg'), img('/images/IMG_9.jpg'), img('/images/IMG_10.jpg')],
    tags: ['不鏽鋼'],
  },
  {
    slug: 'img-11',
    title: '鐵器裝修',
    summary: '由現場評估到安裝，一站式處理。',
    description:
      '可先安排現場評估及提供建議，再按需要製作及安排安裝，交付前會檢查穩固度。',
    coverImage: img('/images/IMG_11.jpg'),
    images: [img('/images/IMG_11.jpg'), img('/images/IMG_12.jpg'), img('/images/IMG_13.jpg')],
    tags: ['裝修', '安裝'],
  },
  {
    slug: 'img-14',
    title: '商舖工程',
    summary: '配合營運需要，注重工期及安全。',
    description:
      '商舖工程著重工期與現場協調，可按營運時間安排施工，減少對生意影響。',
    coverImage: img('/images/IMG_14.jpg'),
    images: [img('/images/IMG_14.jpg'), img('/images/IMG_15.jpg')],
    tags: ['商舖'],
  },
  {
    slug: 'img-16',
    title: '鐵架／支架',
    summary: '結構穩固，按用途設計承重。',
    description:
      '按用途設計尺寸與承重，常用於支撐、固定或放置物件，並兼顧安全與耐用。',
    coverImage: img('/images/IMG_16.jpg'),
    images: [img('/images/IMG_16.jpg'), img('/images/IMG_17.jpg')],
    tags: ['支架', '結構'],
  },
  {
    slug: 'img-18',
    title: '維修保養',
    summary: '定期檢查及保養，延長使用年期。',
    description:
      '提供維修及保養建議，針對磨損、鬆脫、鏽蝕位置作處理，延長使用年期。',
    coverImage: img('/images/IMG_18.jpg'),
    images: [img('/images/IMG_18.jpg'), img('/images/IMG_19.jpg'), img('/images/IMG_20.jpg')],
    tags: ['維修', '保養'],
  },
]

function padImageNumber(n: number) {
  return String(n)
}

function makeAutoProject(n: number): Project {
  const file = `/images/IMG_${padImageNumber(n)}.jpg`
  return {
    slug: `img-${n}`,
    title: `工程相片 ${n}`,
    summary: '點擊查看詳情。',
    description: '工程相片展示（可按需要後續補充工程描述、分類及更多相片）。',
    coverImage: img(file),
    images: [img(file)],
  }
}

// We currently have IMG_1.jpg ... IMG_23.jpg in public/images.
const autoProjects: Project[] = Array.from({ length: 23 }, (_, i) => makeAutoProject(i + 1))

// Merge: curated items override auto-generated ones.
const bySlug = new Map<string, Project>()
for (const p of autoProjects) bySlug.set(p.slug, p)
for (const p of curatedProjects) bySlug.set(p.slug, p)

export const projects: Project[] = Array.from(bySlug.values()).sort((a, b) => {
  const na = Number(a.slug.replace('img-', ''))
  const nb = Number(b.slug.replace('img-', ''))
  return na - nb
})

// Keep homepage carousel focused.
export const featuredProjects: Project[] = curatedProjects

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

