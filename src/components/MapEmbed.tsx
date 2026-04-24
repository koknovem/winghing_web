import { company } from '../content/company'

const WAREHOUSE_EMBED_URL =
  'https://www.google.com/maps?q=22.396195,114.104258&output=embed'

function buildGoogleMapsEmbed(address: string) {
  const q = encodeURIComponent(address)
  return `https://www.google.com/maps?q=${q}&output=embed`
}

export function MapEmbed({
  title,
  address,
  embedUrl,
}: {
  title: string
  address: string
  embedUrl?: string
}) {
  const resolvedEmbedUrl =
    embedUrl ?? (title === '貨倉地址' ? WAREHOUSE_EMBED_URL : buildGoogleMapsEmbed(address))

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-950/10 bg-white/70 shadow-sm shadow-black/5">
      <div className="border-b border-zinc-950/10 px-4 py-3">
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-1 text-sm text-zinc-700">{address}</div>
      </div>
      <iframe
        title={`${company.chineseName}-${title}`}
        src={resolvedEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[320px] w-full"
      />
    </div>
  )
}

