import Image from "next/image"
import WhatsAppButton from "./whatsapp-button"

export default function GiftSection() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="overflow-hidden rounded-xl border border-[#e2d9c9] bg-white shadow-sm transition-all hover:shadow-md">
        <div className="relative h-48 overflow-hidden">
          <Image src="/gift-relax.jpg" alt="Para relaxar" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h3 className="absolute bottom-4 left-4 font-serif text-xl font-bold text-white">Para relaxar</h3>
        </div>

        <div className="p-4">
          <p className="text-sm text-[#666]">
            Combinação perfeita com a Vela Restaurar (azul e branca) com cipreste e pinheiro para momentos de
            tranquilidade e reequilíbrio mental.
          </p>

          <div className="mt-4">
            <WhatsAppButton
              message="Olá! Gostaria de saber mais sobre a coleção de velas para relaxar."
              className="w-full justify-center text-xs"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#e2d9c9] bg-white shadow-sm transition-all hover:shadow-md">
        <div className="relative h-48 overflow-hidden">
          <Image src="/gift-energy.jpg" alt="Para energizar" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h3 className="absolute bottom-4 left-4 font-serif text-xl font-bold text-white">Para energizar</h3>
        </div>

        <div className="p-4">
          <p className="text-sm text-[#666]">
            Seleção com a Vela Conectar (lilás, amarela, azul e branca) com pitanga e tomilho para trazer vitalidade e
            renovar as energias do ambiente.
          </p>

          <div className="mt-4">
            <WhatsAppButton
              message="Olá! Gostaria de saber mais sobre a coleção de velas para energizar."
              className="w-full justify-center text-xs"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#e2d9c9] bg-white shadow-sm transition-all hover:shadow-md">
        <div className="relative h-48 overflow-hidden">
          <Image src="/gift-purify.jpg" alt="Para purificar o ambiente" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h3 className="absolute bottom-4 left-4 font-serif text-xl font-bold text-white">Para purificar</h3>
        </div>

        <div className="p-4">
          <p className="text-sm text-[#666]">
            Conjunto com a Vela Purifica (lilás, preta e branca) com hibisco e sal vulcânico para limpar energias e
            purificar os ambientes da sua casa.
          </p>

          <div className="mt-4">
            <WhatsAppButton
              message="Olá! Gostaria de saber mais sobre a coleção de velas para purificar."
              className="w-full justify-center text-xs"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#e2d9c9] bg-white shadow-sm transition-all hover:shadow-md">
        <div className="relative h-48 overflow-hidden">
          <Image src="/gift-special.jpg" alt="Para ocasiões especiais" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h3 className="absolute bottom-4 left-4 font-serif text-xl font-bold text-white">Ocasiões especiais</h3>
        </div>

        <div className="p-4">
          <p className="text-sm text-[#666]">
            Velas premium como a Vela Paixão (rosa e branca) com lavanda e artemísia para momentos únicos e celebrações
            memoráveis.
          </p>

          <div className="mt-4">
            <WhatsAppButton
              message="Olá! Gostaria de saber mais sobre a coleção de velas para ocasiões especiais."
              className="w-full justify-center text-xs"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
