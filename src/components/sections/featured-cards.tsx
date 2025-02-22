'use client'
import Image from 'next/image'
import React from 'react'
import { Carousel, Card } from '@/components/ui/apple-cards-carousel'

export function FeaturedCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ))

  return (
    <div className="w-full h-full pt-20 bg-gray-50">
      <h2 className="container mx-auto text-xl text-center md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Muito mais que um projeto.
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{' '}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        )
      })}
    </>
  )
}

const data = [
  {
    category: 'Meninas Digitais',
    title: 'LIXO ELETRÔNICO!',
    src: '/images/eletronico.png',
    content: '',
  },
  {
    category: 'Meninas Digitais',
    title: 'Maratona de programação da SBC',
    src: '/images/maratona.png',
    content: '',
  },
  {
    category: 'Meninas Digitais',
    title: '@isabelle_pratesi91 Foi convidada a palestrante na #cpbr15',
    src: '/images/isa.png',
    content: '',
  },
  {
    category: 'Meninas Digitais',
    title: 'Jornada Científica e Tecnológica',
    src: '/images/jornada.png',
    content: '',
  },
  {
    category: 'Meninas Digitais',
    title: 'Maratona de programação da SBC',
    src: '/images/maratona.png',
    content: '',
  },
  {
    category: 'Meninas Digitais',
    title: '@isabelle_pratesi91 Foi convidada a palestrante na #cpbr15',
    src: '/images/isa.png',
    content: '',
  },
]
