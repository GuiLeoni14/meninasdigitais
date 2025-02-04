'use client'
import { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu'
import { cn } from '@/lib/utils'
import { usePosts } from '@/hooks/fetch/usePosts'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { MenuIcon, X } from 'lucide-react'

export function Header() {
  const [active, setActive] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: blogData } = usePosts({
    identifier: 'header',
    params: {
      page: 1,
      pageSize: 4,
    },
  })

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={cn(
        'relative inset-x-0 bg-white max-full mx-auto z-50 rounded-none w-full shadow-md h-[60px]',
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <Link href="/">
          <Image
            className="h-[40px] w-auto"
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4">
          <Menu setActive={setActive}>
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/blog">Blog</HoveredLink>
            <HoveredLink href="/eventos">Eventos</HoveredLink>
            <MenuItem setActive={setActive} active={active} item="Posts">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                {blogData?.posts.map((post) => (
                  <ProductItem
                    key={post.id}
                    title={post.title}
                    href={`/blog/${post.id}`}
                    src={post.thumbnail}
                    description={post.description}
                  />
                ))}
              </div>
            </MenuItem>
          </Menu>
          <Link href="/blog">
            <Button>Nosso Blog</Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-[60px] left-0 right-0 bg-white shadow-md md:hidden">
            <nav className="flex flex-col p-4 space-y-2">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900">
                Blog
              </Link>
              <Link
                href="/eventos"
                className="text-gray-700 hover:text-gray-900"
              >
                Eventos
              </Link>
              <Link href="/blog">
                <Button className="w-full">Nosso Blog</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
