'use client'
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu'
import { cn } from '@/lib/utils'
import { usePosts } from '@/hooks/fetch/usePosts'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

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
    <header
      className={cn(
        'relative inset-x-0 bg-white max-full mx-auto z-50 rounded-none w-full shadow-md h-[60px]',
      )}
    >
      <div className="container mx-auto flex items-center">
        <Link href="/">
          <Image
            className="h-[60px] w-auto"
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
        <Menu setActive={setActive}>
          <HoveredLink href="/">Home</HoveredLink>
          <HoveredLink href="/blog">Blog</HoveredLink>
          <HoveredLink href="/eventos">Eventos</HoveredLink>
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
        <Link href="/blog">
          <Button>Nosso Blog</Button>
        </Link>
      </div>
    </header>
  )
}
