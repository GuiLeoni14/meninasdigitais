import { CTA } from '@/components/sections/cta'
import { ParallaxScroll } from '@/components/ui/parallax-scroll'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

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
  return (
    <main>
      <h1 className="text-5xl text-center font-medium">Eventos</h1>
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
    </main>
  )
}
