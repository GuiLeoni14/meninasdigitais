import Image from 'next/image'
import { getPosts } from '@/api/getPosts'
import * as prismic from '@prismicio/client'
import { notFound } from 'next/navigation'

export const getPostBySlug = async (slug: string) => {
  const { posts } = await getPosts({
    filters: [prismic.filter.at('my.post.uid', slug)],
  })

  if (!posts) {
    notFound()
  }

  return posts[0]
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <Image
        src={post.thumbnail || '/placeholder.svg'}
        alt="Capa do post"
        width={800}
        height={400}
        className="w-full h-auto mb-8 rounded-lg"
      />

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
