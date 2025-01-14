import ShimmerButton from '../ui/shimmer-button'

interface CTAProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export function CTA({ title, description, buttonText, buttonLink }: CTAProps) {
  return (
    <div className="relative py-40 bg-white">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 absolute inset-0 w-full h-full z-20 rounded-[100px] mx-auto max-w-[90vw]"></div>
      <div className="mx-auto container relative z-30">
        <div className="max-w-[980px] mx-auto flex flex-col items-center justify-center">
          <h1 className="text-6xl text-center font-semibold text-white">
            Conheça o programa, faça parte e conecte-se!
          </h1>
          <p className="text-xl text-center mt-2 text-white">
            Para que mais mulheres revolucionem a tecnologia!
          </p>

          <ShimmerButton className="shadow-2xl mt-4">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Entrar em contato
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  )
}
