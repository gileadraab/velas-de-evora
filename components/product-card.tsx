import Image from "next/image"
import { Check } from "lucide-react"
import WhatsAppButton from "./whatsapp-button"

interface ProductCardProps {
  name: string
  image: string
  color: string
  benefits: string[]
  herbs: string[]
  description: string
  price?: {
    full: string
    half?: string
  }
}

export default function ProductCard({ name, image, color, benefits, herbs, description, price }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-[#e2d9c9] bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 h-1 w-full" style={{ backgroundColor: color }}></div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-[#3c3c3c]">{name}</h3>

        <div className="mt-4 space-y-1">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check size={16} className="mt-0.5 text-[#7a9a7e]" />
              <span className="text-sm text-[#666]">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium text-[#3c3c3c]">Ervas principais:</h4>
          <div className="mt-1 flex flex-wrap gap-2">
            {herbs.map((herb, index) => (
              <span key={index} className="rounded-full bg-[#f0ebe0] px-3 py-1 text-xs text-[#666]">
                {herb}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm text-[#666]">{description}</p>

        {price && (
          <div className="mt-4 flex items-center gap-3">
            <div className="rounded-full bg-[#f0ebe0] px-3 py-1 text-xs font-medium text-[#3c3c3c]">
              24h: {price.full}
            </div>
            {price.half && (
              <div className="rounded-full bg-[#f0ebe0] px-3 py-1 text-xs font-medium text-[#3c3c3c]">
                12h: {price.half}
              </div>
            )}
          </div>
        )}

        <div className="mt-6">
          <WhatsAppButton
            message={`Olá! Gostaria de saber mais sobre a vela de ${name}.`}
            className="w-full justify-center text-sm"
          />
        </div>
      </div>
    </div>
  )
}
