import { buildWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message: string;
  label?: string;
  variant?: "primary" | "secondary" | "light";
};

const variants = {
  primary: "border-transparent bg-crimson text-[#fff7f2] hover:bg-crimson-deep",
  secondary:
    "border-[color-mix(in_srgb,#f8f1e4_45%,transparent)] bg-[color-mix(in_srgb,#13261c_45%,transparent)] text-[#f8f1e4]",
  light: "border-line bg-white text-ink",
};

export function WhatsAppButton({
  message,
  label = "Falar no WhatsApp",
  variant = "primary",
}: WhatsAppButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-[0.35rem] border px-5 py-2.5 font-semibold transition-transform hover:-translate-y-px ${variants[variant]}`}
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
