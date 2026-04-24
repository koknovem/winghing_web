import { company } from '../content/company'

function buildGoogleMapsEmbed(address: string) {
  const q = encodeURIComponent(address)
  return `https://www.google.com/maps?q=${q}&output=embed`
}

export function MapEmbed({
  title,
  address,
}: {
  title: string
  address: string
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 px-4 py-3">
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-1 text-sm text-zinc-700">{address}</div>
      </div>
      <iframe
        title={`${company.chineseName}-${title}`}
        src={buildGoogleMapsEmbed(address)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[320px] w-full"
      />
    </div>
  )
}

