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
      <FullScreenImageWithText
        imageSrc="/images/projeto.png"
        imageAlt="Grupo Meninas Digitais em ação"
        title="Quem somos"
        paragraph="Somos o GAPE, um grupo dedicado à inclusão de mulheres na tecnologia. Nosso objetivo é incentivar meninas e mulheres a ingressarem na área de Tecnologia da Informação e Computação, promovendo eventos, oficinas e ações educacionais."
        invertLayout={false}
      />

      <FullScreenImageWithText
        imageSrc="/images/mesa_redonda.png"
        imageAlt="Oficina de programação do GAPE"
        title="O que fazemos?"
        paragraph="Realizamos encontros semanais, participamos de eventos de TI, oferecemos minicursos e promovemos debates com profissionais da área. Além disso, publicamos pesquisas e relatos de experiência para fortalecer a presença feminina na tecnologia."
        invertLayout={true}
      />

      <FullScreenImageWithText
        imageSrc="/meninasdigitais.png"
        imageAlt="Campus do IFSULDEMINAS"
        title="Onde estamos?"
        paragraph="Estamos localizados no IFSULDEMINAS e atuamos tanto presencialmente quanto remotamente. Organizamos eventos e atividades para discentes, professoras e profissionais de diferentes níveis de ensino."
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
