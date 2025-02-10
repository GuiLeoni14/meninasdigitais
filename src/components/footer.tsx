import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Onde estamos</h3>
            <iframe
              className="w-full h-[180px] max-w-sm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900494.082533603!2d-47.202196995671045!3d-21.51153843893934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca6b310a64f323%3A0x9ecc3a078d5481f5!2sIFSULDEMINAS%20-%20Campus%20Machado!5e0!3m2!1spt-BR!2sbr!4v1739214139311!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              allowFullScreen={undefined}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegue</h3>
            <ul className="space-y-2">
              {['Home', 'Blog', 'Eventos'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="flex space-x-4">
              {[
                {
                  icon: Instagram,
                  link: 'https://www.instagram.com/meninasdigitais.ifmch/',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Join the Project */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Faça parte do projeto
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Junte-se a nós e faça a diferença. Seu apoio é fundamental para o
              sucesso do nosso projeto.
            </p>
            <a
              href="https://www.instagram.com/meninasdigitais.ifmch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                Participar Agora
              </Button>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
