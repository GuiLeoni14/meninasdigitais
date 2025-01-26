'use client'
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu'
import { cn } from '@/lib/utils'
import { usePosts } from '@/hooks/fetch/usePosts'

export function Header() {
  const [active, setActive] = useState<string | null>(null)
  const { data: blogData } = usePosts({
    identifier: 'header',
    params: {
      page: 1,
      pageSize: 4,
    },
  })
  return (
    <header className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50')}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Navegue">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/blog">Blog</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Posts">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            {blogData?.posts.map((post) => {
              return (
                <ProductItem
                  key={post.id}
                  title={post.title}
                  href={`/blog/${post.id}`}
                  src={post.thumbnail}
                  description={post.description}
                />
              )
            })}
          </div>
        </MenuItem>
      </Menu>
    </header>
  )
}
