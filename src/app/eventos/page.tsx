'use client'
import { PostCard } from '@/components/PostCard'
import { CTA } from '@/components/sections/cta'
import { ParallaxScroll } from '@/components/ui/parallax-scroll'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { usePosts } from '@/hooks/fetch/usePosts'
import Link from 'next/link'

const images = [
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
  '/meninasdigitais.png',
]

export default function PageEventos() {
  const { data } = usePosts({
    params: {
      pageSize: 3,
    },
  })
  return (
    <main>
      <div className="bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            Eventos
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Explorando ideias, compartilhando conhecimento e inspirando mentes
            curiosas.
          </p>
        </div>
      </div>
      <div>
        <ParallaxScroll images={images} />
        <TextGenerateEffect
          className="container mx-auto text-center"
          words={`"A tecnologia é um espaço para criar, inovar e transformar o mundo.
          Não há limites para o que as mulheres podem alcançar quando decidem construir o futuro.
          Seja ousada, confie no seu potencial e deixe sua marca."`}
        />
      </div>
      <div className="py-20">
        <CTA
          title="Conheça o programa, faça parte e conecte-se!"
          description="Para que mais mulheres revolucionem a tecnologia!"
          buttonText="Entrar em contato"
          buttonLink=""
        />
      </div>
      <div className="container mx-auto pb-20">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">
          Conheça o nosso blog
        </h2>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          {data?.posts?.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <PostCard post={post} layout="column" key={post.id} />
            </Link>
          ))}
        </ul>
      </div>
    </main>
  )
}
