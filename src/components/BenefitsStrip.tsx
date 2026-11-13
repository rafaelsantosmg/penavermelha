const benefits = [
  {
    title: "Pedido fácil",
    text: "Escolha no catálogo e finalize pelo WhatsApp.",
  },
  {
    title: "Todo o Brasil",
    text: "Orientamos envio e retirada conforme sua região.",
  },
  {
    title: "Desde 1998",
    text: "Artigos de Umbanda e Candomblé com respeito à tradição.",
  },
];

export function BenefitsStrip() {
  return (
    <section className="border-b border-line bg-white" aria-label="Benefícios">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] grid-cols-1 gap-4 py-5 md:grid-cols-3">
        {benefits.map((item) => (
          <article key={item.title}>
            <h3 className="mb-1 text-[0.95rem] text-crimson-deep">{item.title}</h3>
            <p className="m-0 text-[0.9rem] leading-snug text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
