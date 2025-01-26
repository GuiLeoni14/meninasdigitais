'use client'
import { useState, useEffect, useRef } from 'react'
import { PostCard } from '@/components/PostCard'
import { usePosts } from '@/hooks/fetch/usePosts'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Blog() {
  const [pageSize, setPageSize] = useState(4)
  const { data, isLoading, isFetching } = usePosts({
    params: {
      page: 1,
      pageSize,
    },
    identifier: ['blog-page', String(pageSize)],
    options: {
      placeholderData: (prev: any) => prev,
    },
  })

  const loaderRef = useRef<null | HTMLDivElement>(null)
  const isDisabledLoader = useRef(false)

  const loadMorePosts = () => {
    isDisabledLoader.current = false
    if (data && data.total_results_size >= pageSize) {
      setPageSize((prevPage) => prevPage + 3)
    }
  }

  const handleLoadMore = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]

    if (data && entry.isIntersecting && !isDisabledLoader.current) {
      isDisabledLoader.current = true
      loadMorePosts()
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleLoadMore, {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    })

    if (loaderRef.current) observer.observe(loaderRef.current)

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current)
    }
  }, [data])

  const [newPost, ...rest] = data?.posts || []
  const isLoadingMore = isFetching || isLoading

  return (
    <main className="bg-gray-100 min-h-screen">
      <section>
        <div className="container mx-auto grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <h1 className="text-5xl font-semibold">Blog: Meninas digitias</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              porro nemo soluta at eaque placeat animi praesentium fugiat quidem
              ratione dolore vitae suscipit odio molestias, a laboriosam tenetur
              voluptates ipsum!
            </p>
          </div>
          <img src="/meninasdigitais.png" />
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        {newPost && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{newPost.title}</h2>
            <p className="text-lg text-gray-700 mb-6">{newPost.description}</p>
            <img
              src={newPost.thumbnail}
              alt={newPost.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <div className="text-gray-800">{newPost.content}</div>
            <p className="text-gray-500 mt-4">
              Publicado em: {new Date(newPost.date).toLocaleDateString()}
            </p>
          </section>
        )}

        {/* Lista dos demais posts */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <PostCard layout="column" key={post.id} post={post} />
          ))}
          {isLoadingMore && (
            <>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-300 h-64 w-full rounded-md mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>
              ))}
            </>
          )}
        </section>

        {/* Loader para o IntersectionObserver */}
        <div
          ref={loaderRef}
          className={cn('h-2 w-full', {
            'hidden h-0 w-0': isLoadingMore,
          })}
        ></div>
      </div>
    </main>
  )
}
