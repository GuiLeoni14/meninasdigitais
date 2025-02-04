import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center mb-4">
              <Image
                className="h-[60px] w-auto"
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
            <p className="text-sm text-gray-400">
              We are a company dedicated to providing excellent services and
              products to our customers.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
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
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, link: 'https://facebook.com' },
                { icon: Twitter, link: 'https://twitter.com' },
                { icon: Instagram, link: 'https://instagram.com' },
                { icon: Linkedin, link: 'https://linkedin.com' },
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
            <Button className="bg-pink-600 hover:bg-pink-700 text-white">
              Participar Agora
            </Button>
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
