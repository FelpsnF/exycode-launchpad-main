import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MessageSquareText, TrendingUp, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "crm",
    name: "ExyCode CRM",
    tagline: "Gestão de Relacionamentos Inteligente",
    description:
      "Plataforma completa para gerenciar clientes, automatizar processos e escalar seu negócio com inteligência artificial.",
    icon: Users,
    features: ["Gestão de Contatos", "Pipeline de Vendas", "Analytics Avançado", "Automação Inteligente"],
    color: "270",
    gradient: "from-[hsl(270,85%,60%)] to-[hsl(290,80%,55%)]",
    glowColor: "hsl(270 85% 60% / 0.15)",
    accentBg: "bg-[hsl(270,85%,60%)]",
    accentText: "text-[hsl(270,85%,60%)]",
    accentBgLight: "bg-[hsl(270,85%,60%,0.1)]",
    status: "Ativo",
  },
  {
    id: "chatai",
    name: "ExyChat AI",
    tagline: "Automação de Chat com IA Avançada",
    description:
      "Automatize conversas com inteligência artificial de última geração. Atendimento 24/7 com respostas naturais e contextuais.",
    icon: MessageSquareText,
    features: ["IA Conversacional", "Multi-canal", "Respostas Contextuais", "Integração WhatsApp"],
    color: "250",
    gradient: "from-[hsl(250,85%,60%)] to-[hsl(230,80%,55%)]",
    glowColor: "hsl(250 85% 60% / 0.15)",
    accentBg: "bg-[hsl(250,85%,60%)]",
    accentText: "text-[hsl(250,85%,60%)]",
    accentBgLight: "bg-[hsl(250,85%,60%,0.1)]",
    status: "Ativo",
  },
  {
    id: "margin",
    name: "Margin",
    tagline: "Gestão Financeira para iFood",
    description:
      "Controle total sobre margens, taxas e finanças da sua loja no iFood. Saiba exatamente quanto você ganha em cada produto.",
    icon: TrendingUp,
    features: ["Análise de Margens", "Controle de Taxas", "Gestão Financeira", "Relatórios Detalhados"],
    color: "290",
    gradient: "from-[hsl(290,85%,55%)] to-[hsl(320,70%,55%)]",
    glowColor: "hsl(290 85% 55% / 0.15)",
    accentBg: "bg-[hsl(290,85%,55%)]",
    accentText: "text-[hsl(290,85%,55%)]",
    accentBgLight: "bg-[hsl(290,85%,55%,0.1)]",
    status: "Ativo",
  },
  {
    id: "voiceai",
    name: "ExyVoice",
    tagline: "Transcrição Inteligente com IA",
    description:
      "Transcrição de voz avançada focada em formulários. Já utilizado por clientes na área médica para agilizar prontuários e fichas.",
    icon: Mic,
    features: ["Transcrição em Tempo Real", "Formulários Inteligentes", "Área Médica", "Alta Precisão"],
    color: "310",
    gradient: "from-[hsl(310,75%,55%)] to-[hsl(340,70%,55%)]",
    glowColor: "hsl(310 75% 55% / 0.15)",
    accentBg: "bg-[hsl(310,75%,55%)]",
    accentText: "text-[hsl(310,75%,55%)]",
    accentBgLight: "bg-[hsl(310,75%,55%,0.1)]",
    status: "Clientes Ativos",
  },
];

const Products = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos
            <br />
            <span className="gradient-text">Produtos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções tecnológicas que transformam negócios. Cada produto é
            desenvolvido com foco em performance, IA e resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-border/80 transition-all duration-500"
              style={{
                boxShadow: `0 0 0px transparent`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 60px ${product.glowColor}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0px transparent`;
              }}
            >
              {/* Status badge */}
              <div className="absolute top-6 right-6">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-border bg-card/80`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: `hsl(${product.color} 85% 60%)` }}
                  />
                  {product.status}
                </span>
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors"
                style={{ backgroundColor: `hsl(${product.color} 85% 60% / 0.1)` }}
              >
                <product.icon
                  className="w-7 h-7"
                  style={{ color: `hsl(${product.color} 85% 60%)` }}
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
              <p
                className="text-sm font-medium mb-4"
                style={{ color: `hsl(${product.color} 85% 60%)` }}
              >
                {product.tagline}
              </p>
              <p className="text-muted-foreground mb-6">{product.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-border bg-card/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="outline"
                className="group/btn border-border hover:bg-card"
                asChild
              >
                <Link to={`/${product.id === "chatai" ? "chat-ai" : product.id === "voiceai" ? "voice-ai" : product.id}`}>
                  Conhecer Produto
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
