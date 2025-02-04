'use client'

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
    </div>
  )
}
