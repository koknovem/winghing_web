import { ContactCards } from '../components/ContactCards'
import { MapEmbed } from '../components/MapEmbed'
import { ProjectCarousel } from '../components/ProjectCarousel'
import { company } from '../content/company'
import { featuredProjects } from '../content/projects'

export function Home() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-zinc-950/10 bg-white/70 p-8 shadow-sm shadow-black/5">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            永興鐵器裝修工程
          </h1>
          <p className="mt-3 text-base leading-relaxed text-zinc-700 md:text-lg">
            香港地要<strong className="text-zinc-950">穩陣</strong>，就交俾我哋。
            <span className="text-zinc-800">鐵閘、欄河、焊接、</span>
            <span className="text-zinc-800">不鏽鋼工程同維修</span>一take過搞掂。
            <span className="text-zinc-800">想快啲有個準？</span>
            WhatsApp 我哋，安排上門度尺報價。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-900"
              href="tel:26983761"
            >
              致電 2698 3761
            </a>
            <a
              className="rounded-full border border-zinc-950/15 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-white"
              href="https://wa.me/85261083548"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp（李生）
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-sm font-semibold">精選工程相片</div>
            <div className="mt-1 text-sm text-zinc-700">點擊相片可查看詳情。</div>
          </div>
          <a className="text-sm font-semibold underline" href="#/projects">
            查看全部
          </a>
        </div>
        <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-4 shadow-sm shadow-black/5">
          <ProjectCarousel projects={featuredProjects} />
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
            className="rounded-2xl border border-zinc-950/10 bg-white/70 p-6 shadow-sm shadow-black/5"
          >
            <div className="text-sm font-semibold">{card.title}</div>
            <div className="mt-2 text-sm text-zinc-700">{card.desc}</div>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div>
          <div className="text-sm font-semibold">聯絡與地址</div>
          <div className="mt-1 text-sm text-zinc-700">
            一鍵複製聯絡資料，亦可查看地圖位置。
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-4 shadow-sm shadow-black/5">
          <ContactCards />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <MapEmbed
            title="公司地址"
            address={company.addresses.office}
            embedUrl={company.maps.officeEmbedUrl}
          />
          <MapEmbed title="貨倉地址" address={company.addresses.warehouse} />
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-950/10 bg-white/70 p-6 shadow-sm shadow-black/5">
        <details className="group">
          <summary className="cursor-pointer list-none text-sm font-semibold">
            常見問題（點擊展開）
          </summary>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
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
                className="rounded-2xl border border-zinc-950/10 bg-white/60 p-5"
              >
                <div className="text-sm font-semibold">{item.q}</div>
                <div className="mt-2 text-sm leading-relaxed text-zinc-700">{item.a}</div>
              </div>
            ))}
          </div>
        </details>
      </section>
    </div>
  )
}

