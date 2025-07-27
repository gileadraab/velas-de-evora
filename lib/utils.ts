import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// WhatsApp integration
export function openWhatsApp(
  message = "Olá! Gostaria de saber mais sobre as velas de Evora.",
) {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/554185021635?text=${encodedMessage}`, "_blank");
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
