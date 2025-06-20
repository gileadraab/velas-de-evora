import Image from "next/image"
import Link from "next/link"
import { Instagram, ArrowUp, ChevronDown } from "lucide-react"
import ProductCard from "@/components/product-card"
import BenefitsSection from "@/components/benefits-section"
import GiftSection from "@/components/gift-section"
import HerbSection from "@/components/herb-section"
import InstagramGallery from "@/components/instagram-gallery"
import MobileMenu from "@/components/mobile-menu"
import WhatsAppButton from "@/components/whatsapp-button"
import PersonalizedSection from "@/components/personalized-section"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#faf7f2]">
      {/* Fixed WhatsApp Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <WhatsAppButton message="Olá! Gostaria de saber mais sobre as velas de Evora." />
      </div>

      {/* Back to top button */}
      <a
        href="#top"
        className="fixed bottom-6 left-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#8a6f9d]/80 text-white shadow-md transition-all hover:bg-[#8a6f9d]"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </a>

      {/* Header */}
      <header id="top" className="sticky top-0 z-40 w-full border-b border-[#e2d9c9] bg-[#faf7f2]/90 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Velas de Evora" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-serif font-medium text-[#3c3c3c]">Velas de Evora</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-6">
            <a href="#produtos" className="text-sm font-medium text-[#3c3c3c] transition-colors hover:text-[#8a6f9d]">
              Produtos
            </a>
            <a
              href="#personalizadas"
              className="text-sm font-medium text-[#3c3c3c] transition-colors hover:text-[#8a6f9d]"
            >
              Personalizadas
            </a>
            <a href="#beneficios" className="text-sm font-medium text-[#3c3c3c] transition-colors hover:text-[#8a6f9d]">
              Benefícios
            </a>
            <a href="#presentes" className="text-sm font-medium text-[#3c3c3c] transition-colors hover:text-[#8a6f9d]">
              Presentes
            </a>
            <a href="#ervas" className="text-sm font-medium text-[#3c3c3c] transition-colors hover:text-[#8a6f9d]">
              Ervas & Cores
            </a>
            <a href="#instagram" className="text-sm font-medium text-[#3c3c3c] transition-colors hover:text-[#8a6f9d]">
              Instagram
            </a>
          </nav>

          {/* WhatsApp Button (Desktop) */}
          <div className="hidden md:block">
            <WhatsAppButton message="Olá! Gostaria de saber mais sobre as velas de Evora." />
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center py-16 text-center text-white md:py-24">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Velas Artesanais com
              <br />
              Ervas Naturais
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 md:text-xl">
              Transforme seu ambiente com nossas velas artesanais de ervas. Cada vela é feita à mão com ingredientes
              naturais selecionados para 24 horas de magia e bem-estar.
            </p>
            <div className="mt-8">
              <WhatsAppButton
                message="Olá! Gostaria de saber mais sobre as velas de Evora."
                className="bg-white px-6 py-3 text-[#3c3c3c] hover:bg-white/90"
              />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-white/80" />
          </div>
        </section>

        {/* Product Showcase */}
        <section id="produtos" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#3c3c3c] md:text-4xl">
              Nossa Coleção de Velas
            </h2>
            <p className="mt-4 max-w-3xl text-[#666]">
              Cada vela é cuidadosamente elaborada com ervas naturais selecionadas, proporcionando benefícios
              específicos para seu bem-estar e ambiente.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProductCard
                name="Vela Banimento"
                image="/product-1.jpg"
                color="#3c3c3c"
                benefits={["Proteção contra encantamentos", "Eliminação de energias densas", "Purificação do ambiente"]}
                herbs={["Endro", "Arruda"]}
                description="Poderosa vela para banir energias negativas, eliminar larvas astrais e proteger contra encantamentos e feitiços. Disponível nas cores branca, preta e marrom."
                price={{
                  full: "R$16,00",
                  half: "R$12,00",
                }}
              />

              <ProductCard
                name="Vela Conectar"
                image="/product-2.jpg"
                color="#8a6f9d"
                benefits={["Melhora da disposição mental", "Clareza mental", "Facilidade para diálogos"]}
                herbs={["Pitanga", "Tomilho"]}
                description="Ideal para melhorar a disposição física e mental, eliminar o comodismo e trazer clareza para diálogos importantes. Disponível nas cores branca, lilás, amarela e azul."
                price={{
                  full: "R$16,00",
                  half: "R$12,00",
                }}
              />

              <ProductCard
                name="Vela Paixão"
                image="/product-3.jpg"
                color="#c17f9a"
                benefits={["Atrai o amor", "Harmonia", "Conexão com o sagrado feminino"]}
                herbs={["Lavanda", "Artemísia"]}
                description="Cria uma atmosfera romântica e equilibrada, perfeita para momentos especiais. Potencializa rituais diversos devido à sua poderosa energia vibratória. Disponível nas cores branca e rosa."
                price={{
                  full: "R$16,00",
                  half: "R$12,00",
                }}
              />

              <ProductCard
                name="Vela Restaurar"
                image="/product-4.jpg"
                color="#6d8a9a"
                benefits={["Combate a tristeza", "Reequilíbrio mental", "Alívio do stress"]}
                herbs={["Cipreste", "Pinheiro"]}
                description="Ajuda no processo de luto, combate a tristeza e mágoas. Usada em meditação e no reequilíbrio mental. Promove a felicidade e proteção para o lar. Disponível nas cores branca e azul."
                price={{
                  full: "R$16,00",
                  half: "R$12,00",
                }}
              />

              <ProductCard
                name="Vela Purifica"
                image="/product-5.jpg"
                color="#8a6f9d"
                benefits={["Purificação do coração e mente", "Eliminação de energias densas", "Clareza de ideias"]}
                herbs={["Hibisco", "Sal Vulcânico"]}
                description="Purifica o coração, a mente e a alma. Ajuda a ter clareza de ideias e elimina energias densas. Combate pensamentos negativos e sentimentos ruins. Disponível nas cores branca, lilás e preta."
                price={{
                  full: "R$16,00",
                  half: "R$12,00",
                }}
              />

              <ProductCard
                name="Vela Esperança"
                image="/product-6.jpg"
                color="#7a9a7e"
                benefits={["Proteção", "Sorte financeira", "Renovação e abertura de caminhos"]}
                herbs={["Calêndula", "Dente de Leão"]}
                description="Traz proteção, sorte financeira, prosperidade e paz. Representa a esperança e a liberdade, sendo utilizada em rituais de renovação e abertura de caminhos. Disponível nas cores branca, amarela e verde."
                price={{
                  full: "R$16,00",
                  half: "R$12,00",
                }}
              />
            </div>
          </div>
        </section>

        {/* Personalized Candles Section */}
        <section id="personalizadas" className="bg-[#f0ebe0] py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-[#3c3c3c] md:text-4xl">
              Velas Personalizadas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#666]">
              Crie sua própria vela personalizada escolhendo as ervas, a cor e o tempo de queima que melhor atendem às
              suas necessidades específicas.
            </p>

            <PersonalizedSection />
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-[#3c3c3c] md:text-4xl">
              Por que nossas velas são mágicas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#666]">
              Descubra o que torna as Velas de Evora tão especiais e como elas podem transformar seu ambiente e
              bem-estar.
            </p>

            <BenefitsSection />
          </div>
        </section>

        {/* Gift Recommendations */}
        <section id="presentes" className="bg-[#f0ebe0] py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-[#3c3c3c] md:text-4xl">
              Presentes que encantam
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#666]">
              Nossas velas são o presente perfeito para qualquer ocasião. Surpreenda alguém especial com um presente que
              traz bem-estar e beleza.
            </p>

            <GiftSection />
          </div>
        </section>

        {/* Color & Herb Benefits */}
        <section id="ervas" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-[#3c3c3c] md:text-4xl">
              O poder das ervas e cores
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#666]">
              Cada erva e cor em nossas velas foi cuidadosamente selecionada por seus benefícios específicos para criar
              uma experiência completa.
            </p>

            <HerbSection />
          </div>
        </section>

        {/* Instagram Gallery */}
        <section id="instagram" className="bg-[#f0ebe0] py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-[#3c3c3c] md:text-4xl">
              Siga-nos no Instagram
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#666]">
              Acompanhe @velasdeevora para inspirações, novidades e dicas sobre como aproveitar ao máximo suas velas
              artesanais.
            </p>

            <InstagramGallery />

            <div className="mt-10 text-center">
              <a
                href="https://instagram.com/velasdeevora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8a6f9d] to-[#c17f9a] px-6 py-3 font-medium text-white transition-transform hover:scale-105"
              >
                <Instagram size={20} />
                Siga @velasdeevora
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e2d9c9] bg-[#faf7f2] py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-serif text-lg font-medium text-[#3c3c3c]">Sobre nós</h3>
              <p className="mt-4 text-sm text-[#666]">
                Velas de Evora é uma boutique de velas artesanais que combina tradição, natureza e bem-estar. Cada vela
                é feita à mão com ingredientes naturais selecionados para criar experiências únicas.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-medium text-[#3c3c3c]">Contato</h3>
              <p className="mt-4 text-sm text-[#666]">Para encomendas e informações, entre em contato via WhatsApp.</p>
              <div className="mt-4">
                <WhatsAppButton message="Olá! Gostaria de saber mais sobre as velas de Evora." className="text-sm" />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg font-medium text-[#3c3c3c]">Redes Sociais</h3>
              <div className="mt-4">
                <a
                  href="https://instagram.com/velasdeevora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#666] transition-colors hover:text-[#8a6f9d]"
                >
                  <Instagram size={18} />
                  @velasdeevora
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg font-medium text-[#3c3c3c]">Comprar</h3>
              <p className="mt-4 text-sm text-[#666]">
                Todas as nossas velas estão disponíveis para compra via WhatsApp.
              </p>
              <div className="mt-4">
                <WhatsAppButton message="Olá! Gostaria de fazer uma compra das velas de Evora." className="text-sm" />
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-[#e2d9c9] pt-6 text-center text-sm text-[#666]">
            <p>&copy; {new Date().getFullYear()} Velas de Evora. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
