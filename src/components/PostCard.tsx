import { cn } from '@/lib/utils'
import Image from 'next/image'

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
      <div
        className={cn(
          'w-full',
          layout === 'column' ? 'max-w-full' : 'max-w-[400px]',
        )}
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
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <h2
          className={cn(
            'font-semibold tracking-tighter text-slate-800',
            layout === 'row' && 'text-xl md:text-4xl',
            layout === 'column' && 'text-xl lg:text-2xl',
          )}
        >
          <span>{post.title}</span>
        </h2>
        <p className="font-serif text-base italic tracking-tighter text-slate-500">
          {post.date}
        </p>
        <p
          className={cn(
            'leading-relaxed md:leading-relaxed',
            layout === 'row' && 'text-sm md:text-lg',
            layout === 'column' && 'text-sm',
          )}
        >
          {post.description}
        </p>
      </div>
    </div>
  )
}
