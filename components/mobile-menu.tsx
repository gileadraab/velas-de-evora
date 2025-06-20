"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#faf7f2]">
          <div className="flex h-16 items-center justify-end border-b border-[#e2d9c9] px-4">
            <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Fechar menu">
              <X size={24} />
            </Button>
          </div>

          <nav className="flex flex-col p-6">
            <a
              href="#produtos"
              className="border-b border-[#e2d9c9] py-4 text-lg font-medium text-[#3c3c3c]"
              onClick={closeMenu}
            >
              Produtos
            </a>
            <a
              href="#personalizadas"
              className="border-b border-[#e2d9c9] py-4 text-lg font-medium text-[#3c3c3c]"
              onClick={closeMenu}
            >
              Personalizadas
            </a>
            <a
              href="#beneficios"
              className="border-b border-[#e2d9c9] py-4 text-lg font-medium text-[#3c3c3c]"
              onClick={closeMenu}
            >
              Benefícios
            </a>
            <a
              href="#presentes"
              className="border-b border-[#e2d9c9] py-4 text-lg font-medium text-[#3c3c3c]"
              onClick={closeMenu}
            >
              Presentes
            </a>
            <a
              href="#ervas"
              className="border-b border-[#e2d9c9] py-4 text-lg font-medium text-[#3c3c3c]"
              onClick={closeMenu}
            >
              Ervas & Cores
            </a>
            <a
              href="#instagram"
              className="border-b border-[#e2d9c9] py-4 text-lg font-medium text-[#3c3c3c]"
              onClick={closeMenu}
            >
              Instagram
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
