const DEFAULT_NUMBER = "5511999999999";

export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_NUMBER;
}

export function buildWhatsAppUrl(message: string): string {
  const number = getWhatsAppNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function productWhatsAppMessage(productName: string): string {
  return `Olá! Tenho interesse no produto "${productName}" da loja Caboclo Pena Vermelha.`;
}
