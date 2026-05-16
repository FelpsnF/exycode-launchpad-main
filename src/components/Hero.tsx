import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(220_15%_15%_/_0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(220_15%_15%_/_0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Tecnologia que transforma negócios
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Soluções digitais
            <br />
            <span className="gradient-text">inteligentes</span>
            <br />
            para seu negócio
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Criamos software que resolve problemas reais. Da automação inteligente
            à gestão de dados, entregamos tecnologia que trabalha por você — 24/7.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group px-8 py-6 text-lg glow" asChild>
              <a href="#produtos">
                Conheça Nossos Produtos
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-border bg-card/50 backdrop-blur-sm hover:bg-card">
              <Play className="mr-2 h-5 w-5" />
              Fale Conosco
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "4", label: "Produtos" },
              { value: "10K+", label: "Usuários" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.9★", label: "Avaliação" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
