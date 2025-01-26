'use client'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { usePosts } from '@/hooks/fetch/usePosts'
import { PostCard } from '@/components/PostCard'
import { HeroParallaxDemo } from '@/components/sections/hero'
import { CTA } from '@/components/sections/cta'
import { FeaturedCards } from '@/components/sections/featured-cards'
import FullScreenImageWithText from '@/components/sections/ImageWithParagraph'
import { History } from '@/components/sections/history'
import Link from 'next/link'

export default function Home() {
  const { data } = usePosts({})

  return (
    <div className="text-slate-700">
      <HeroParallaxDemo />
      <FeaturedCards />
      <History />
      <FullScreenImageWithText
        imageSrc="/meninasdigitais.png"
        imageAlt="Imagem de exemplo?"
        title="Quem somos"
        paragraph="Este componente agora é totalmente responsivo. Em dispositivos móveis, a imagem aparece acima do texto, ocupando parte da tela. Em desktops, a imagem fica ao lado do texto, criando um layout lado a lado. O texto sempre respeita o container do Tailwind CSS, garantindo uma leitura confortável em qualquer dispositivo."
        invertLayout={false}
      />
      <FullScreenImageWithText
        imageSrc="/meninasdigitais.png"
        imageAlt="Imagem de exemplo"
        title="Oque fazemos?"
        paragraph="Este componente agora é totalmente responsivo. Em dispositivos móveis, a imagem aparece acima do texto, ocupando parte da tela. Em desktops, a imagem fica ao lado do texto, criando um layout lado a lado. O texto sempre respeita o container do Tailwind CSS, garantindo uma leitura confortável em qualquer dispositivo."
        invertLayout={true}
      />
      <FullScreenImageWithText
        imageSrc="/meninasdigitais.png"
        imageAlt="Onde estamos?"
        title="Onde estamos?"
        paragraph="Este componente agora é totalmente responsivo. Em dispositivos móveis, a imagem aparece acima do texto, ocupando parte da tela. Em desktops, a imagem fica ao lado do texto, criando um layout lado a lado. O texto sempre respeita o container do Tailwind CSS, garantindo uma leitura confortável em qualquer dispositivo."
        invertLayout={false}
      />
      <div className="py-20">
        <CTA
          title="Conheça o programa, faça parte e conecte-se!"
          description="Para que mais mulheres revolucionem a tecnologia!"
          buttonText="Entrar em contato"
          buttonLink=""
        />
      </div>
      <div className="container mx-auto py-20">
        <h2 className="text-4xl font-semibold text-center">
          Conheça o nosso blog
        </h2>
        <ul className="grid grid-cols-3 gap-5 mt-10">
          {data?.posts?.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <PostCard post={post} layout="column" key={post.id} />
            </Link>
          ))}
        </ul>
      </div>

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
                  <h2 className="mb-4 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
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
