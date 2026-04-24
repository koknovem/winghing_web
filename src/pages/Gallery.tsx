import { Link } from 'react-router-dom'
import { projects } from '../content/projects'

export function Gallery() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">工程相片</h1>
        <p className="mt-2 text-sm text-zinc-700">
          點擊任何相片可進入詳情頁，查看工程描述及更多相片。
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/project/${p.slug}`}
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100">
              <img
                src={p.coverImage}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-4">
              <div className="text-sm font-semibold">{p.title}</div>
              <div className="mt-1 text-sm text-zinc-700">{p.summary}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

