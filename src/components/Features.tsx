import { 
  Brain, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  HeadphonesIcon 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "IA de ponta integrada em todos os nossos produtos para máxima eficiência.",
  },
  {
    icon: BarChart3,
    title: "Analytics em Tempo Real",
    description: "Dashboards poderosos com métricas que importam para cada segmento.",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Sistemas otimizados para velocidade e escalabilidade desde o dia 1.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Dados protegidos com criptografia de ponta e backups automáticos.",
  },
  {
    icon: Globe,
    title: "Integrações Nativas",
    description: "Conecte com WhatsApp, iFood, sistemas médicos e muito mais.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado",
    description: "Time de especialistas disponível para ajudar quando você precisar.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por que escolher a
            <br />
            <span className="gradient-text">ExyCode?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta aplicada a problemas reais. 
            Nossos diferenciais estão em cada detalhe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(270_85%_60%_/_0.1)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
