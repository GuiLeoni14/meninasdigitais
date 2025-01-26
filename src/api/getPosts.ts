import { RichText } from 'prismic-dom'
import { BuildQueryURLArgs } from '@prismicio/client'
import { getPrismicClient } from '@/lib/prismicClient'

export type Post = {
  id: string
  title: string
  description: string
  thumbnail: string
  content: string
  date: string
}
export interface GetPostsResponse {
  posts: Post[]
  next_page: string | null
  page: number
  prev_page: string | null
  results_per_page: number
  results_size: number
  total_pages: number
  total_results_size: number
}

export const getPosts = async (
  params?: Partial<BuildQueryURLArgs>,
): Promise<GetPostsResponse> => {
  const prismicClient = getPrismicClient()
  const response = await prismicClient.getByType('post', {
    orderings: 'my.post.date desc',
    ...params,
  })

  const posts = response.results.map(({ uid, data: post }: any) => {
    return {
      id: uid,
      title: RichText.asText(post.title),
      description: RichText.asText(post.description),
      content: RichText.asHtml(post.content),
      date: new Date(post.date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      thumbnail: post.thumbnail.url,
    }
  })

  const {
    next_page,
    page,
    prev_page,
    results_per_page,
    results_size,
    total_pages,
    total_results_size,
  } = response

  return {
    posts,
    next_page,
    page,
    prev_page,
    results_per_page,
    results_size,
    total_pages,
    total_results_size,
  }
}
