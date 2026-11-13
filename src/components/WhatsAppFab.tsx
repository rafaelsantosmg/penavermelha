import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <a
      className="fixed right-4 bottom-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 font-bold text-white shadow-[0_10px_28px_rgba(18,140,126,0.35)] transition-transform hover:-translate-y-0.5"
      href={buildWhatsAppUrl(
        "Olá! Vim pelo site da Caboclo Pena Vermelha e quero atendimento.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <span
        aria-hidden
        className="inline-grid size-6 place-items-center rounded-full bg-white/18 text-[0.7rem]"
      >
        WA
      </span>
      WhatsApp
    </a>
  );
}
