import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  post: {
    id: string
    title: string
    description: string
    date: string
    thumbnail: string
  }
  layout?: 'row' | 'column'
}

export function PostCard({ post, layout = 'row' }: PostCardProps) {
  return (
    <div className={cn('flex gap-5', layout === 'column' && 'flex-col')}>
      <Link
        className={cn(
          'w-full',
          layout === 'column' ? 'max-w-full' : 'max-w-[400px]',
        )}
        href={`/articles/${post.id}`}
        tabIndex={-1}
      >
        <div className="w-full overflow-hidden rounded-sm">
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={400}
            height={400}
            className="object-cover w-full h-auto"
          />
        </div>
      </Link>
      <div className="flex flex-col flex-1 gap-2">
        <h2
          className={cn(
            'font-semibold tracking-tighter text-slate-800',
            layout === 'row' && 'text-3xl md:text-4xl',
            layout === 'column' && 'text-2xl',
          )}
        >
          <Link href={`/articles/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="font-serif text-base italic tracking-tighter text-slate-500">
          {post.date}
        </p>
        <p
          className={cn(
            'leading-relaxed md:leading-relaxed',
            layout === 'row' && 'md:text-lg',
            layout === 'column' && 'text-sm',
          )}
        >
          {post.description}
        </p>
      </div>
    </div>
  )
}
