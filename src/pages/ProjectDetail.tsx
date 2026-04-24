import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../content/projects'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-sm text-zinc-500">工程詳情</div>
          <h1 className="text-2xl font-bold tracking-tight">
            {project?.title ?? '找不到工程'}
          </h1>
        </div>
        <a
          className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
          href="https://wa.me/85261083548"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp 查詢
        </a>
      </div>

      {project ? (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            {(project.images?.length ? project.images : [project.coverImage]).map(
              (src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100"
                >
                  <img
                    src={src}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ),
            )}
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-sm font-semibold">工程描述</div>
            <p className="mt-2 text-sm text-zinc-700">{project.description}</p>
            {project.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm text-zinc-700">
            這個工程不存在（slug：<span className="font-mono">{slug ?? '—'}</span>）。
            請返回工程相片列表。
          </p>
        </div>
      )}

      <div>
        <Link className="text-sm font-semibold underline" to="/projects">
          返回工程相片
        </Link>
      </div>
    </div>
  )
}

