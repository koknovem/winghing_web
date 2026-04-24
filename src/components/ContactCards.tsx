import { company } from '../content/company'

export function ContactCards() {
  const telDigits = company.tel.replace(/\s+/g, '')

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-zinc-950/10 bg-white/60 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-semibold">聯絡資料</div>
            <div className="mt-1 text-sm text-zinc-700">
              快速聯絡我們安排度尺及報價。
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-3 text-sm text-zinc-700">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              電話：
              <a className="ml-1 font-semibold text-zinc-900 underline" href={`tel:${telDigits}`}>
                {company.tel}
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">傳真：{company.fax}</div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              WhatsApp（{company.whatsapp.label}）：
              <a
                className="ml-1 font-semibold text-zinc-900 underline"
                href={company.whatsapp.waMeLink}
                target="_blank"
                rel="noreferrer"
              >
                {company.whatsapp.number}
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              電郵：
              <a
                className="ml-1 font-semibold text-zinc-900 underline"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-950/10 bg-white/60 p-6">
        <div className="text-sm font-semibold">地址</div>
        <div className="mt-4 space-y-4 text-sm text-zinc-700">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="font-semibold text-zinc-900">公司</div>
              <div className="mt-1">{company.addresses.office}</div>
            </div>
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="font-semibold text-zinc-900">貨倉</div>
              <div className="mt-1">{company.addresses.warehouse}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

