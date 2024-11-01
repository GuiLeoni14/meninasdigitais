'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { usePosts } from '@/hooks/fetch/usePosts'

export default function Home() {
  const { data: posts } = usePosts({})
  console.log(posts)
  return (
    <div className="text-slate-700">
      <header className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="grid grid-cols-1 justify-items-center gap-20">
            <nav>
              <ul className="flex flex-wrap justify-center gap-10">
                <li className="font-semibold tracking-tight text-slate-800">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-semibold tracking-tight text-slate-800">
                  <Link href="/about">Sobre o projeto</Link>
                </li>
                <li className="font-semibold tracking-tight text-slate-800">
                  <Link href="/contact">Noticias</Link>
                </li>
              </ul>
            </nav>
            <div className="px-4">
              <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
                <Link href="/" tabIndex={-1}>
                  <div className="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300">
                    <img
                      src="/logo.png"
                      alt="A photo of Margaret Smith (fictional)."
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="grid grid-cols-1 gap-2 text-center">
                  <h1 className="font-sans text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                    <Link href="/">Meninas Digiais</Link>
                  </h1>
                  <p className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
                    📚 Projeto de Extensão Universitária do Campus Machado -
                    IFSULDEMINAS Conheça nosso projeto ⤵️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
          <div className="mx-auto w-full max-w-6xl">
            <ul className="grid grid-cols-1 gap-16">
              {posts?.map((post) => (
                <li key={post.id} className="flex gap-5">
                  <Link className="w-full max-w-[400px]" href="#" tabIndex={-1}>
                    <div className="w-full overflow-hidden">
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
                    <h2 className="font-sans text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                      <Link href={`/articles/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="font-serif italic tracking-tighter text-slate-500">
                      {post.date}
                    </p>
                    <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <footer className="p-5">
        <div className="mx-auto w-full max-w-3xl">
          <div className="grid grid-cols-1 justify-items-center gap-5">
            <Separator className="h-px w-1/2 md:max-w-sm" />
            <div className="px-4">
              <form
                action="/api/sign-up"
                method="post"
                className="grid w-full max-w-xl grid-cols-1 gap-6"
              >
                <div className="text-center font-serif tracking-tight text-slate-500">
                  <h2 className="mb-4 font-sans text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                    Faça parte do nosso projeto
                  </h2>
                  <p className="mb-4 italic">
                    Avaliaremos as informações e entraremos em contato
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="relative">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <Input
                      id="email"
                      placeholder="jane.doe@example.com"
                      type="email"
                      name="email"
                      required
                      className="pr-10"
                    />
                    <Button
                      type="submit"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0"
                    >
                      <ArrowRight className="h-4 w-4" />
                      <span className="sr-only">Submit</span>
                    </Button>
                  </div>
                  <p className="text-center text-xs tracking-tight text-slate-500">
                    Seus dados não serão compartilhados
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
