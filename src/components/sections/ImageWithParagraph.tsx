import Image from 'next/image'

interface FullScreenImageWithTextProps {
  imageSrc: string
  imageAlt: string
  title: string
  paragraph: string
  invertLayout?: boolean
}

export default function FullScreenImageWithText({
  imageSrc,
  imageAlt,
  title,
  paragraph,
  invertLayout = false,
}: FullScreenImageWithTextProps) {
  return (
    <div className="flex flex-col md:flex-row container mx-auto ">
      <div
        className={`w-full md:w-1/2 relative ${invertLayout ? 'md:order-last' : ''}`}
      >
        <div className="h-64 md:h-full relative">
          <Image
            src={imageSrc || '/placeholder.svg'}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
      <div
        className={`w-full md:w-1/2 flex items-center ${invertLayout ? 'md:order-first' : ''}`}
      >
        <div className="px-4 py-8 md:py-12 lg:py-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-600">{paragraph}</p>
        </div>
      </div>
    </div>
  )
}
