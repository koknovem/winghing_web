import { NavLink, Outlet } from 'react-router-dom'
import { company } from '../content/company'

const navItems = [
  { to: '/', label: '首頁' },
  { to: '/projects', label: '工程相片' },
  { to: '/about', label: '關於我們' },
  { to: '/contact', label: '聯絡我們' },
]

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          'rounded-full px-3 py-2 text-sm font-medium transition',
          isActive
            ? 'bg-zinc-950 text-white'
            : 'text-zinc-700 hover:bg-white/60 hover:text-zinc-950',
        ].join(' ')
      }
      end={to === '/'}
    >
      {label}
    </NavLink>
  )
}

export function Layout() {
  const telHref = `tel:${company.tel.replace(/\s+/g, '')}`
  return (
    <div className="min-h-screen text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-950/10 bg-[#111827]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div className="min-w-0">
            <div className="truncate text-base font-semibold text-white">
              {company.chineseName}
            </div>
            <div className="truncate text-xs text-white/70">
              {company.englishName}
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Desktop: compact info card on the right */}
            <div className="hidden items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-xs text-white/85 md:flex">
              <a
                className="font-semibold text-white hover:underline"
                href={company.whatsapp.waMeLink}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp（{company.whatsapp.label}）
              </a>
              <span className="text-white/30">|</span>
              <a className="font-semibold text-white hover:underline" href={telHref}>
                {company.tel}
              </a>
              <span className="text-white/30">|</span>
              <a
                className="font-semibold text-white hover:underline"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
            </div>

            {/* Mobile: keep it clean with 2 quick buttons */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                className="rounded-full bg-green-600 px-3 py-2 text-xs font-semibold text-white hover:bg-green-700"
                href={company.whatsapp.waMeLink}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
                href={telHref}
              >
                致電
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-3 md:hidden">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} />
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-950/10 bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">{company.chineseName}</div>
            <div className="mt-1 text-xs text-zinc-500">
              {company.englishName}
            </div>
            <div className="mt-3 text-sm text-zinc-700">
              專注鐵器裝修及安裝，提供可靠、安全、準時的工程服務。
            </div>
          </div>

          <div className="text-sm text-zinc-700">
            <div className="font-semibold text-zinc-900">聯絡</div>
            <div className="mt-2 space-y-1">
              <div>
                電話：
                <a className="hover:underline" href={`tel:${company.tel.replace(/\s+/g, '')}`}>
                  {company.tel}
                </a>
              </div>
              <div>傳真：{company.fax}</div>
              <div>
                電郵：
                <a className="hover:underline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          <div className="text-sm text-zinc-700">
            <div className="font-semibold text-zinc-900">地址</div>
            <div className="mt-2 space-y-2">
              <div>
                公司：{company.addresses.office}
              </div>
              <div>
                貨倉：{company.addresses.warehouse}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200/80 py-4 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} {company.chineseName}
        </div>
      </footer>

      <a
        className="fixed bottom-5 right-5 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 hover:bg-green-700"
        href={company.whatsapp.waMeLink}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp 查詢（浮動按鈕）"
      >
        WhatsApp
      </a>
    </div>
  )
}

