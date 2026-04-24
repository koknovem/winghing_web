import { ContactCards } from '../components/ContactCards'
import { MapEmbed } from '../components/MapEmbed'
import { company } from '../content/company'

export function Contact() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">聯絡我們</h1>
        <p className="mt-2 text-sm text-zinc-700">
          歡迎致電或 WhatsApp 查詢，我們可按工程需要安排上門度尺及報價。
        </p>
      </div>

      <ContactCards />

      <section className="grid gap-4 md:grid-cols-2">
        <MapEmbed title="公司地址" address={company.addresses.office} />
        <MapEmbed title="貨倉地址" address={company.addresses.warehouse} />
      </section>
    </div>
  )
}

