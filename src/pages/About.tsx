export function About() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">關於我們</h1>
        <p className="mt-2 text-sm text-zinc-700">
          永興鐵器裝修工程專注提供鐵器裝修、製作及安裝服務，重視安全、品質與交付時間。
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: '服務對象',
            desc: '住宅、商舖、工廈、管理處等。',
          },
          {
            title: '服務地區',
            desc: '新界、九龍、港島（按工程情況安排）。',
          },
          {
            title: '工作方式',
            desc: '可安排上門度尺、提供報價與建議，按需要設計及製作。',
          },
          {
            title: '售後跟進',
            desc: '完成後可提供維修保養建議及後續跟進。',
          },
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
    </div>
  )
}

