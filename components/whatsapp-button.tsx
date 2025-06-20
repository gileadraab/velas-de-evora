import { PhoneIcon as WhatsappIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  message: string
  className?: string
}

export default function WhatsAppButton({ message, className }: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-medium text-white shadow-md transition-all hover:bg-[#128C7E]",
        className,
      )}
    >
      <WhatsappIcon size={20} />
      <span>Comprar via WhatsApp</span>
    </a>
  )
}
