import { Link } from 'react-router-dom'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import type { Project } from '../content/projects'

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={projects.length > 1}
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {projects.map((p) => (
        <SwiperSlide key={p.slug}>
          <Link
            to={`/project/${p.slug}`}
            className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white"
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
              <div className="mt-3 text-xs font-semibold text-zinc-900 underline underline-offset-4">
                查看詳情
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

