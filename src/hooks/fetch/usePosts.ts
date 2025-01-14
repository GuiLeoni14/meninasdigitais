'use client'
import { useQuery } from '@tanstack/react-query'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../../lib/prismicClient'
import { BuildQueryURLArgs } from '@prismicio/client'

export type Post = {
  id: string
  title: string
  description: string
  thumbnail: string
  date: string
}

export const getPosts = async (
  params?: Partial<BuildQueryURLArgs>,
): Promise<Post[]> => {
  const prismicClient = getPrismicClient()
  const response = await prismicClient.getAllByType('post', {
    orderings: 'my.post.date desc',
    page: 1,
    pageSize: 5,
    ...params,
  })

  const posts = response.map(({ uid, data: post }: any) => {
    return {
      id: uid,
      title: RichText.asText(post.title),
      description: RichText.asText(post.description),
      date: new Date(post.date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      thumbnail: post.thumbnail.url,
    }
  })

  return posts as Post[]
}

interface UsePostsProps {
  identifier?: string | string[]
  params?: Partial<BuildQueryURLArgs>
  options?: any
}

export function usePosts({ params, options, identifier }: UsePostsProps) {
  return useQuery<Post[]>({
    queryKey: ['posts', identifier],
    queryFn: () => getPosts(params),
    staleTime: 1000 * 1, // 1 second
    ...options,
  })
}
