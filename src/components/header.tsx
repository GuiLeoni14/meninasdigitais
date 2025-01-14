import Link from 'next/link'

export function Header() {
  return (
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
          {/* <div className="px-4">
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
                <h1 className="text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                  <Link href="/">Meninas Digiais</Link>
                </h1>
                <p className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
                  📚 Projeto de Extensão Universitária do Campus Machado -
                  IFSULDEMINAS Conheça nosso projeto ⤵️
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  )
}
