import { Clock, Leaf, Palette, Heart, Gift } from "lucide-react"

export default function BenefitsSection() {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#7a9a7e]/20">
          <Leaf className="h-6 w-6 text-[#7a9a7e]" />
        </div>
        <h3 className="font-serif text-xl font-bold text-[#3c3c3c]">Ervas Naturais</h3>
        <p className="mt-2 text-[#666]">
          Utilizamos apenas ervas naturais selecionadas, cada uma com propriedades específicas para proteção,
          purificação, amor, prosperidade e bem-estar espiritual.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8a6f9d]/20">
          <Palette className="h-6 w-6 text-[#8a6f9d]" />
        </div>
        <h3 className="font-serif text-xl font-bold text-[#3c3c3c]">Cromoterapia</h3>
        <p className="mt-2 text-[#666]">
          Cada cor é cuidadosamente escolhida por seus benefícios terapêuticos, como o lilás para transmutação de
          energias, o verde para equilíbrio, e o azul para tranquilidade.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#c19a7f]/20">
          <Clock className="h-6 w-6 text-[#c19a7f]" />
        </div>
        <h3 className="font-serif text-xl font-bold text-[#3c3c3c]">24 Horas de Queima</h3>
        <p className="mt-2 text-[#666]">
          Nossas velas são formuladas para proporcionar até 24 horas de queima constante, com opções de 12 horas também
          disponíveis para necessidades específicas.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#c17f9a]/20">
          <Heart className="h-6 w-6 text-[#c17f9a]" />
        </div>
        <h3 className="font-serif text-xl font-bold text-[#3c3c3c]">Benefícios Espirituais</h3>
        <p className="mt-2 text-[#666]">
          Cada vela é criada para um propósito específico: banimento de energias negativas, conexão espiritual, paixão,
          restauração emocional, purificação ou esperança.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37]/20">
          <Gift className="h-6 w-6 text-[#d4af37]" />
        </div>
        <h3 className="font-serif text-xl font-bold text-[#3c3c3c]">Presente Especial</h3>
        <p className="mt-2 text-[#666]">
          Nossas velas são o presente perfeito para qualquer ocasião, trazendo beleza, aroma e benefícios energéticos
          para quem você ama.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#6d8a9a]/20">
          <div className="h-6 w-6 rounded-full border-2 border-[#6d8a9a]"></div>
        </div>
        <h3 className="font-serif text-xl font-bold text-[#3c3c3c]">Personalização</h3>
        <p className="mt-2 text-[#666]">
          Oferecemos opções personalizadas onde você pode escolher duas ervas e uma cor de sua preferência, criando uma
          vela única para suas necessidades específicas.
        </p>
      </div>
    </div>
  )
}
