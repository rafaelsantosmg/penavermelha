import { buildWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message: string;
  label?: string;
  variant?: "primary" | "secondary" | "light";
};

export function WhatsAppButton({
  message,
  label = "Falar no WhatsApp",
  variant = "primary",
}: WhatsAppButtonProps) {
  return (
    <a
      className={`btn btn--${variant}`}
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
