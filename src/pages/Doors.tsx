import { useEffect, useMemo, useState } from 'react'
import { company } from '../content/company'

type Manifest = string[]

const priceTiers = [
  { label: '201料', price: '$4,680' },
  { label: '304料', price: '$5,780' },
  { label: '304厚料', price: '$6,980' },
] as const

export function Doors() {
  const [images, setImages] = useState<Manifest | null>(null)
  const [error, setError] = useState<string | null>(null)

  const manifestUrl = '/images/door_images/manifest.json'
  const whatsappHref = company.whatsapp.waMeLink

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setError(null)
        const res = await fetch(manifestUrl, { cache: 'no-cache' })
        if (!res.ok) {
          throw new Error(`Failed to load manifest (${res.status})`)
        }
        const data = (await res.json()) as unknown
        if (!Array.isArray(data) || !data.every((x) => typeof x === 'string')) {
          throw new Error('Invalid manifest format')
        }
        if (!cancelled) setImages(data)
      } catch (e) {
        if (!cancelled) {
          setImages([])
          setError(e instanceof Error ? e.message : 'Failed to load manifest')
        }
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  const content = useMemo(() => {
    if (images === null) {
      return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
          正在載入相片…
        </div>
      )
    }

    if (error) {
      return (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <div className="font-semibold">未能載入門款相片</div>
          <div className="mt-1 text-amber-900/80">
            請確認已建立 <span className="font-mono">{manifestUrl}</span>。
          </div>
          <div className="mt-2 text-xs text-amber-900/70">{error}</div>
        </div>
      )
    }

    if (images.length === 0) {
      return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
          暫時未有相片。稍後再試，或 WhatsApp 我們查詢門款。
        </div>
      )
    }

    return (
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((src) => (
          <div key={src} className="mb-4 break-inside-avoid">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <div className="bg-zinc-100">
                <img
                  src={src}
                  alt="不鏽鋼門"
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }, [error, images])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">不鏽鋼門</h1>
          <p className="mt-2 text-sm text-zinc-700">
            以下為部分門款相片及價格參考。如需度尺／報價，歡迎 WhatsApp 查詢。
          </p>
        </div>

        <a
          className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:bg-green-700"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp 查詢（{company.whatsapp.label}）
        </a>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">{content}</div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="text-sm font-semibold text-zinc-900">價格參考</div>
            <div className="mt-3 space-y-2 text-sm">
              {priceTiers.map((tier) => (
                <div
                  key={tier.label}
                  className="flex items-center justify-between gap-3 rounded-xl bg-zinc-50 px-3 py-2"
                >
                  <div className="font-semibold text-zinc-900">{tier.label}</div>
                  <div className="font-semibold text-zinc-900">{tier.price}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-xs text-zinc-600">
              實際價錢以度尺／現場情況為準。
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="text-sm font-semibold text-zinc-900">想了解更多？</div>
            <div className="mt-2 text-sm text-zinc-700">
              傳相片或提供尺寸，我們可為你建議合適門款及報價。
            </div>
            <a
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#0b1220] px-4 py-2 text-sm font-semibold text-white hover:bg-black"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              立即 WhatsApp 查詢
            </a>
          </div>
        </aside>
      </section>
    </div>
  )
}

