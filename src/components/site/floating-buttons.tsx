import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={BUSINESS.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid size-12 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={BUSINESS.phoneHref}
        aria-label="Call Sun Savera Wellness"
        className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg ring-1 ring-primary-foreground/20 transition-transform hover:scale-105"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
