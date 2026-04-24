import { useCallback, useMemo, useState } from 'react'
import { company } from '../content/company'

async function copyText(text: string) {
  await navigator.clipboard.writeText(text)
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = useCallback(async () => {
    try {
      await copyText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      // Ignore (clipboard may be unavailable in some contexts).
    }
  }, [value])

  return (
    <button
      type="button"
      onClick={onCopy}
      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
      aria-label={`複製：${value}`}
    >
      {copied ? '已複製' : '複製'}
    </button>
  )
}

export function ContactCards() {
  const telDigits = useMemo(() => company.tel.replace(/\s+/g, ''), [])
  const faxDigits = useMemo(() => company.fax.replace(/\s+/g, ''), [])
  const waDigits = useMemo(() => company.whatsapp.number.replace(/\s+/g, ''), [])

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
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
            <CopyButton value={company.tel} />
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">傳真：{company.fax}</div>
            <CopyButton value={faxDigits} />
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
            <CopyButton value={waDigits} />
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
            <CopyButton value={company.email} />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
        <div className="text-sm font-semibold">地址</div>
        <div className="mt-4 space-y-4 text-sm text-zinc-700">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="font-semibold text-zinc-900">公司</div>
              <div className="mt-1">{company.addresses.office}</div>
            </div>
            <CopyButton value={company.addresses.office} />
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="font-semibold text-zinc-900">貨倉</div>
              <div className="mt-1">{company.addresses.warehouse}</div>
            </div>
            <CopyButton value={company.addresses.warehouse} />
          </div>
        </div>
      </div>
    </div>
  )
}

