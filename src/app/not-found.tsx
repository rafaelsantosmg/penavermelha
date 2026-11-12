import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section" style={{ textAlign: "center" }}>
      <p className="section__eyebrow">404</p>
      <h2>Página não encontrada</h2>
      <p>O conteúdo que você procura não está disponível.</p>
      <div className="cta-row" style={{ justifyContent: "center", marginTop: "1.25rem" }}>
        <Link href="/" className="btn btn--primary">
          Ir para o início
        </Link>
        <Link href="/catalogo" className="btn btn--light">
          Ver catálogo
        </Link>
      </div>
    </div>
  );
}
