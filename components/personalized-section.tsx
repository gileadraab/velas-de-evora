import Image from "next/image"
import WhatsAppButton from "./whatsapp-button"

export default function PersonalizedSection() {
  return (
    <div className="mt-12 overflow-hidden rounded-xl border border-[#e2d9c9] bg-white shadow-md">
      <div className="relative p-8">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h3 className="font-serif text-2xl font-bold text-[#3c3c3c]">Velas Personalizadas</h3>
          <p className="mx-auto mt-4 max-w-xl text-[#666]">
            Crie sua própria vela personalizada escolhendo duas ervas, a cor da vela e o tempo de queima que melhor
            atendem às suas necessidades específicas.
          </p>

          <div className="mt-8 space-y-6">
            {/* Pricing Section */}
            <div className="mx-auto max-w-2xl rounded-lg bg-[#f0ebe0] p-6">
              <h4 className="font-serif text-xl font-medium text-[#3c3c3c]">Preços</h4>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h5 className="font-serif text-lg font-medium text-[#3c3c3c]">Opções prontas do catálogo</h5>
                  <div className="mt-3 grid grid-cols-2 gap-4">
                    <div className="rounded-md bg-[#f9f5f0] p-3 text-center">
                      <p className="text-sm font-medium text-[#3c3c3c]">Vela 12 horas</p>
                      <p className="text-lg font-bold text-[#8a6f9d]">R$12,00</p>
                    </div>
                    <div className="rounded-md bg-[#f9f5f0] p-3 text-center">
                      <p className="text-sm font-medium text-[#3c3c3c]">Vela 24 horas</p>
                      <p className="text-lg font-bold text-[#8a6f9d]">R$16,00</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h5 className="font-serif text-lg font-medium text-[#3c3c3c]">Opções personalizadas</h5>
                  <div className="mt-3 grid grid-cols-2 gap-4">
                    <div className="rounded-md bg-[#f9f5f0] p-3 text-center">
                      <p className="text-sm font-medium text-[#3c3c3c]">Vela 12 horas</p>
                      <p className="text-lg font-bold text-[#8a6f9d]">R$16,00</p>
                    </div>
                    <div className="rounded-md bg-[#f9f5f0] p-3 text-center">
                      <p className="text-sm font-medium text-[#3c3c3c]">Vela 24 horas</p>
                      <p className="text-lg font-bold text-[#8a6f9d]">R$20,00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customization Options */}
            <div className="mx-auto max-w-2xl rounded-lg bg-[#f0ebe0] p-6">
              <h4 className="font-serif text-xl font-medium text-[#3c3c3c]">Opções de Personalização</h4>

              <div className="mt-6 space-y-6">
                <div>
                  <h5 className="font-serif text-lg font-medium text-[#3c3c3c]">1. Escolha suas ervas (duas)</h5>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                    <div className="rounded-md bg-white p-2 text-center shadow-sm">
                      <p className="text-sm font-medium text-[#3c3c3c]">Lavanda</p>
                      <p className="text-xs text-[#666]">Amor, cura, harmonia</p>
                    </div>
                    <div className="rounded-md bg-white p-2 text-center shadow-sm">
                      <p className="text-sm font-medium text-[#3c3c3c]">Alecrim</p>
                      <p className="text-xs text-[#666]">Proteção, purificação</p>
                    </div>
                    <div className="rounded-md bg-white p-2 text-center shadow-sm">
                      <p className="text-sm font-medium text-[#3c3c3c]">Arruda</p>
                      <p className="text-xs text-[#666]">Proteção, purificação</p>
                    </div>
                    <div className="rounded-md bg-white p-2 text-center shadow-sm">
                      <p className="text-sm font-medium text-[#3c3c3c]">Camomila</p>
                      <p className="text-xs text-[#666]">Tranquilidade, paz</p>
                    </div>
                    <div className="rounded-md bg-white p-2 text-center shadow-sm">
                      <p className="text-sm font-medium text-[#3c3c3c]">Endro</p>
                      <p className="text-xs text-[#666]">Proteção, sorte</p>
                    </div>
                    <div className="rounded-md bg-white p-2 text-center shadow-sm">
                      <p className="text-sm font-medium text-[#3c3c3c]">Tomilho</p>
                      <p className="text-xs text-[#666]">Amor, saúde, clareza</p>
                    </div>
                  </div>
                  <p className="mt-2 text-center text-xs text-[#666]">E muitas outras opções disponíveis...</p>
                </div>

                <div>
                  <h5 className="font-serif text-lg font-medium text-[#3c3c3c]">2. Escolha a cor da vela</h5>
                  <div className="mt-3 flex flex-wrap justify-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white ring-2 ring-[#e2d9c9]">
                      <span className="sr-only">Branco</span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#8a6f9d]">
                      <span className="sr-only">Lilás</span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#7a9a7e]">
                      <span className="sr-only">Verde</span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#c17f9a]">
                      <span className="sr-only">Rosa</span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#6d8a9a]">
                      <span className="sr-only">Azul</span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#f0c141]">
                      <span className="sr-only">Amarelo</span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#c19a7f]">
                      <span className="sr-only">Marrom</span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-black">
                      <span className="sr-only">Preto</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-serif text-lg font-medium text-[#3c3c3c]">3. Escolha o tempo de queima</h5>
                  <div className="mt-3 flex justify-center gap-4">
                    <div className="rounded-md bg-white px-6 py-3 text-center shadow-sm">
                      <p className="font-medium text-[#3c3c3c]">12 horas</p>
                    </div>
                    <div className="rounded-md bg-white px-6 py-3 text-center shadow-sm">
                      <p className="font-medium text-[#3c3c3c]">24 horas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How it works */}
            <div className="mx-auto max-w-2xl rounded-lg bg-[#f0ebe0] p-6">
              <h4 className="font-serif text-xl font-medium text-[#3c3c3c]">Como funciona</h4>
              <p className="mt-3 text-[#666]">
                Entre em contato via WhatsApp e informe suas escolhas. Nossas velas personalizadas são feitas sob
                encomenda com todo o cuidado e atenção aos detalhes.
              </p>
              <p className="mt-2 text-[#666]">
                Você pode escolher duas ervas e uma cor para criar uma combinação única que atenda às suas necessidades
                específicas.
              </p>
            </div>

            {/* Buy Button */}
            <div className="mx-auto mt-8 max-w-md">
              <WhatsAppButton
                message="Olá! Gostaria de encomendar uma vela personalizada."
                className="w-full justify-center px-8 py-3 text-base"
              />
            </div>
          </div>
        </div>

        <div className="absolute -bottom-16 -right-16 h-64 w-64 opacity-10">
          <Image src="/herb-illustration.png" alt="Ilustração de ervas" fill className="object-contain" />
        </div>
      </div>
    </div>
  )
}
