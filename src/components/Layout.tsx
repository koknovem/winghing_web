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
                className="inline-flex items-center gap-1.5 font-semibold text-white hover:underline"
                href={company.whatsapp.waMeLink}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M12.04 2.003c-5.52 0-10.02 4.48-10.02 9.994 0 1.76.46 3.48 1.34 5.01L2 22l5.14-1.35a10.02 10.02 0 0 0 4.9 1.26h.01c5.52 0 10.02-4.48 10.02-9.994 0-2.67-1.04-5.18-2.93-7.06a9.97 9.97 0 0 0-7.1-2.93Zm5.81 14.52c-.25.7-1.23 1.3-1.93 1.43-.48.09-1.1.13-1.78-.11-.41-.14-.93-.3-1.61-.6-2.83-1.23-4.67-4.09-4.81-4.28-.14-.2-1.15-1.53-1.15-2.92s.73-2.07.99-2.35c.26-.28.56-.35.75-.35h.54c.17 0 .41-.07.64.49.25.61.85 2.1.93 2.26.07.17.12.37.02.57-.1.2-.15.32-.3.5-.14.17-.3.39-.43.52-.14.14-.29.29-.12.57.17.28.77 1.26 1.66 2.04 1.14 1.02 2.1 1.34 2.39 1.49.29.14.46.12.63-.07.17-.2.73-.85.92-1.14.2-.29.39-.24.65-.14.26.1 1.65.78 1.93.92.28.14.46.22.53.35.07.13.07.74-.18 1.44Z" />
                </svg>
                WhatsApp（{company.whatsapp.label}）
              </a>
              <span className="text-white/30">|</span>
              <a
                className="inline-flex items-center gap-1.5 font-semibold text-white hover:underline"
                href={telHref}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 4c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
                </svg>
                {company.tel}
              </a>
              <span className="text-white/30">|</span>
              <a
                className="inline-flex items-center gap-1.5 font-semibold text-white hover:underline"
                href={`mailto:${company.email}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-.4 4.25-7.1 4.44a1 1 0 0 1-1.06 0L4.4 8.25A1 1 0 1 1 5.46 6.6L12 10.69l6.54-4.09A1 1 0 0 1 19.6 8.25Z" />
                </svg>
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

