'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
import { usePosts } from '@/hooks/fetch/usePosts'
import { PostCard } from './PostCard'

export default function FeaturedPostSlide() {
  const { data: featuredPosts } = usePosts({
    params: {
      filters: ['at(my.post.category, "featured")'],
    },
  })

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {featuredPosts?.map((post) => {
          return (
            <SwiperSlide key={post.id}>
              <PostCard post={post} layout="row" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
