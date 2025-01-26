'use client'
import { useQuery } from '@tanstack/react-query'
import { BuildQueryURLArgs } from '@prismicio/client'
import { getPosts, GetPostsResponse } from '@/api/getPosts'

interface UsePostsProps {
  identifier?: string | string[]
  params?: Partial<BuildQueryURLArgs>
  options?: any
}

export function usePosts({ params, options, identifier }: UsePostsProps) {
  return useQuery<GetPostsResponse>({
    queryKey: ['posts', identifier],
    queryFn: () => getPosts(params),
    staleTime: 1000 * 60 * 10, // 1 second
    ...options,
  })
}
