import { ContactCards } from '../components/ContactCards'
import { MapEmbed } from '../components/MapEmbed'
import { ProjectCarousel } from '../components/ProjectCarousel'
import { company } from '../content/company'
import { projects } from '../content/projects'

export function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            永興鐵器裝修工程
          </h1>
          <p className="mt-3 text-base text-zinc-700">
            提供鐵器裝修、製作及安裝服務。歡迎 WhatsApp 查詢，亦可電話聯絡安排上門度尺。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
              href="tel:26983761"
            >
              致電 2698 3761
            </a>
            <a
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              href="https://wa.me/85261083548"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp（李生）
            </a>
            <a
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              href="mailto:winghing3044@netvigator.com"
            >
              電郵查詢
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: '服務範圍', desc: '鐵器裝修、焊接工程、欄河、閘門、不鏽鋼工程、維修保養。' },
          { title: '工程流程', desc: '上門度尺 → 報價 → 設計/確認 → 製作 → 安裝 → 跟進保養。' },
          { title: '我們的優勢', desc: '多年經驗、準時交付、安全施工、可提供現場評估、售後跟進。' },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6"
          >
            <div className="text-sm font-semibold">{card.title}</div>
            <div className="mt-2 text-sm text-zinc-700">{card.desc}</div>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-sm font-semibold">精選工程相片</div>
            <div className="mt-1 text-sm text-zinc-700">
              點擊相片可查看詳情與描述。
            </div>
          </div>
          <a className="text-sm font-semibold underline" href="#/projects">
            查看全部
          </a>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <div className="text-sm font-semibold">常見問題</div>
          <div className="mt-1 text-sm text-zinc-700">
            以下為常見問題參考，如有特別情況歡迎 WhatsApp 查詢。
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: '是否可上門度尺？',
              a: '可以。我們可按需要安排上門度尺，並提供合適建議及報價。',
            },
            {
              q: '工程工期一般多久？',
              a: '視乎工程類型、尺寸及現場情況而定。確認方案後會提供預計工期。',
            },
            {
              q: '是否提供維修保養？',
              a: '可提供維修及保養建議，並按情況安排跟進。',
            },
            {
              q: '如何查詢或報價？',
              a: '可 WhatsApp 傳相片/尺寸作初步評估，或致電安排上門度尺。',
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <div className="text-sm font-semibold">{item.q}</div>
              <div className="mt-2 text-sm text-zinc-700">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <div className="text-sm font-semibold">聯絡與地址</div>
          <div className="mt-1 text-sm text-zinc-700">
            一鍵複製聯絡資料，亦可查看地圖位置。
          </div>
        </div>

        <ContactCards />

        <div className="grid gap-4 md:grid-cols-2">
          <MapEmbed title="公司地址" address={company.addresses.office} />
          <MapEmbed title="貨倉地址" address={company.addresses.warehouse} />
        </div>
      </section>
    </div>
  )
}

