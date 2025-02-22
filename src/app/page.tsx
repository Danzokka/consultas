import BuscaCategoria from "@/components/BuscaCategoria";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="max-w-screen h-full flex flex-col items-center justify-center gap-12">
      {/* Hero */}
      <Hero />
      {/* Busca doutores */}
      <BuscaCategoria />
    </div>
  );
}
