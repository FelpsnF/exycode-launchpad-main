import { Check, Grid3X3, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    description: "Perfeito para pequenas equipes começando",
    price: "R$49",
    period: "/mês",
    icon: Grid3X3,
    features: [
      "Até 100 contatos",
      "Até 5 campanhas por mês",
      "1GB de armazenamento",
      "Análises básicas",
      "Suporte por email",
      "Acesso ao app mobile",
    ],
    cta: "Começar Agora",
    popular: false,
  },
  {
    name: "Pro",
    description: "Para empresas em crescimento que precisam de mais poder",
    price: "R$199",
    period: "/mês",
    icon: Zap,
    features: [
      "Até 5.000 contatos",
      "Campanhas ilimitadas",
      "50GB de armazenamento",
      "Análises avançadas",
      "Suporte prioritário por email e chat",
      "Integrações personalizadas",
      "Acesso à API",
      "Ferramentas de colaboração em equipe",
    ],
    cta: "Assinar",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Para grandes organizações com necessidades avançadas",
    price: "Sob consulta",
    period: "",
    icon: Crown,
    features: [
      "Contatos ilimitados",
      "Tudo ilimitado",
      "Armazenamento ilimitado",
      "Opções white-label",
      "Gerente de conta dedicado",
      "Suporte por telefone",
      "Treinamento personalizado",
      "Garantia de SLA",
      "Recursos avançados de segurança",
      "Benefícios personalizados",
    ],
    cta: "Agendar Reunião",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Planos que
            <br />
            <span className="gradient-text">crescem com você</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu momento. 
            Upgrade ou downgrade a qualquer hora.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
                plan.popular
                  ? "border-primary bg-card shadow-[0_0_60px_hsl(270_85%_60%_/_0.15)] scale-105 lg:scale-110"
                  : "border-border bg-card/50 hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Mais Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  plan.popular ? "bg-primary/20" : "bg-muted"
                }`}>
                  <plan.icon className={`w-5 h-5 ${plan.popular ? "text-primary" : "text-foreground"}`} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 ${
                  plan.popular
                    ? "glow"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
                variant={plan.popular ? "default" : "secondary"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
