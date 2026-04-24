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
        <details className="group" open>
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

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-6 shadow-sm shadow-black/5">
          <div className="text-sm font-semibold">地盤吹水角（認真又唔認真）</div>
          <div className="mt-2 text-sm leading-relaxed text-zinc-700">
            呢張卡係用嚟輕鬆下，唔係真係鬧人。地盤味句式就係咁：前後加兩三個「X」，節奏一到就有 feel。
          </div>
          <div className="mt-4 rounded-2xl border border-zinc-950/10 bg-white/60 p-5">
            <div className="text-sm font-semibold">今日口頭禪</div>
            <div className="mt-2 text-sm leading-relaxed text-zinc-700">
              「唔好阻 X 住呀，行開啲啦！快 X 啲啦！」<br />
              「根本就行唔 X 通，痴 X 線！」<br />
              「唔 X 係呀～～」
            </div>
            <div className="mt-3 text-xs text-zinc-500">
              提示：呢度個「X」你自己心入面補字就得，網站唔會幫你打出嚟。
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-6 shadow-sm shadow-black/5">
          <div className="text-sm font-semibold">員工卡（真係做嘢嗰班）</div>
          <div className="mt-2 text-sm leading-relaxed text-zinc-700">
            三位代表人物：一個講效率、一個睇位準、一個守安全。講嘢有啲地盤味，但做嘢係穩陣派。
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              {
                name: '阿強師傅',
                role: '焊接／修補',
                line: '「你 call 我 OT？我或者可以 OT 做完……不過你最好畀清楚圖同尺寸，唔好搞到我 X 晒。」',
              },
              {
                name: '阿玲師傅',
                role: '度尺／安裝',
                line: '「我唔肯定咁樣得唔得……因為根本就行唔 X 通。改一改個位，先至穩陣。」',
              },
              {
                name: '大偉師傅',
                role: '安全／監督',
                line: '「唔該行開少少……地盤版就係：唔好阻 X 住呀！安全第一，唔係講笑。」',
              },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-zinc-950/10 bg-white/60 p-5"
              >
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="mt-1 text-xs font-semibold text-zinc-600">{p.role}</div>
                <div className="mt-3 text-sm leading-relaxed text-zinc-700">{p.line}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

