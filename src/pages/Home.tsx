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

      <section className="rounded-2xl border border-zinc-950/10 bg-white/70 p-6 shadow-sm shadow-black/5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-sm font-semibold">員工卡（真係做嘢嗰班）</div>
            <div className="mt-2 text-sm leading-relaxed text-zinc-700">
              三位代表人物：一個講效率、一個睇位準、一個守安全。講嘢有啲地盤味，但做嘢係穩陣派。
            </div>
          </div>
          <div className="text-xs text-zinc-500">（手機直排／電腦三欄）</div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {[
            {
              name: '李師傅',
              role: '焊接／修補',
              line:
                '「我做焊接同修補，最撚憎就係啲人講兩句就想我即刻變魔術。你話趕？得，OT 我都可以頂硬上，但你要畀撚清楚圖、尺寸同現場位，唔好一撚陣又改、又話『其實我想另一款』，搞到我拆完又焊返，浪鳩費時間又危險。啲位唔撚work我會直講，唔撚係我串，係真係行唔撚通。做得地盤，粗口係標點符號，但我做嘢係認真：焊位要實、角度要正、收口要靚，唔撚係裝飾品咁簡單。你俾我一個準，我俾你一個穩陣。」',
            },
            {
              name: '老師傅',
              role: '度尺／安裝',
              line:
                '「我負責度尺同安裝，講撚白啲：冇撚度清楚，你後面一撚定出事。好閪多客一開始話『差唔多啦』，我心諗：差唔撚多你就等於差好撚柒多。門口斜少少、牆身唔直、地台高低位，全部都會影響件鐵器合唔合、開唔開到、會唔會刮手。有人鍾意呃鳩自己：『應該得㗎喇』——我會即刻回一句：唔撚係呀！真係唔撚係。你話我煩鳩？係，我煩鳩係因為想一次做撚啱，唔想返工返到變補鑊。安裝嗰陣我都會催：行撚開啲啦，唔撚好阻住，安全第一。做得穩陣，先至係型。」',
            },
            {
              name: '母師傅',
              role: '安全／監督',
              line:
                '「我做安全同監督，唔係扮警察，我係幫大家返到屋企。地盤最驚就係『趕』：一趕就亂，一亂就出事。你哋想快？我都想快，但唔可以用命去換。有人企到焊火隔離、又伸手摸件嘢，我真係忍唔住會屌：唔好阻撚住！行鳩開啦！你以為好玩咩？我見過太多小意外變大鑊，唔想你哋中招。做工程唔係靠口水，係靠程序：拉線、固定、承重、驗收，一樣都唔可以偷雞。你俾我守好安全位，我俾你成單嘢順順利利交收，唔使返轉頭補救，大家都開心。」',
            },
          ].map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-zinc-950/10 bg-white/60 p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs font-semibold text-zinc-600">{p.role}</div>
              </div>
              <div className="mt-4 text-sm leading-relaxed text-zinc-700">{p.line}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

