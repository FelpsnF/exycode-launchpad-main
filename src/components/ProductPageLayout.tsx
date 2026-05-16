import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LucideIcon } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

interface ProductPageProps {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  useCases: string[];
  pricing: PricingPlan[];
  stats: { value: string; label: string }[];
}

const ProductPageLayout = ({
  name,
  tagline,
  description,
  icon: Icon,
  color,
  features,
  useCases,
  pricing,
  stats,
}: ProductPageProps) => {
  const hsl = `hsl(${color} 85% 60%)`;
  const hslGlow = `hsl(${color} 85% 60% / 0.3)`;
  const hslLight = `hsl(${color} 85% 60% / 0.1)`;
  const hslMid = `hsl(${color} 85% 60% / 0.15)`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden gradient-bg pt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-glow"
              style={{ backgroundColor: hslLight }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-float"
              style={{ backgroundColor: `hsl(${color} 85% 60% / 0.05)` }}
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(hsl(220_15%_15%_/_0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(220_15%_15%_/_0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

          <div className="container relative z-10 px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/"
                className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para ExyCode
              </Link>

              <div className="animate-fade-up flex justify-center mb-8">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: hslLight }}
                >
                  <Icon className="w-10 h-10" style={{ color: hsl }} />
                </div>
              </div>

              <h1 className="animate-fade-up text-5xl md:text-7xl font-bold tracking-tight mb-4">
                {name}
              </h1>
              <p
                className="animate-fade-up text-lg font-medium mb-6"
                style={{ color: hsl }}
              >
                {tagline}
              </p>
              <p className="animate-fade-up-delay text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                {description}
              </p>

              <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="group px-8 py-6 text-lg"
                  style={{
                    backgroundColor: hsl,
                    boxShadow: `0 0 60px ${hslGlow}`,
                  }}
                >
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg border-border bg-card/50 backdrop-blur-sm hover:bg-card"
                >
                  Agendar Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="text-3xl md:text-4xl font-bold mb-1 bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${hsl}, hsl(${
                          parseInt(color) + 20
                        } 80% 55%))`,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Features */}
        <section className="py-24 relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ backgroundColor: `hsl(${color} 85% 60% / 0.05)` }}
          />
          <div className="container relative z-10 px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Recursos
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${hsl}, hsl(${
                      parseInt(color) + 20
                    } 80% 55%))`,
                  }}
                >
                  Poderosos
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300"
                  style={{
                    ["--hover-shadow" as string]: `0 0 40px ${hslMid}`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${hslMid}`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${hsl}50`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors"
                    style={{ backgroundColor: hslLight }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: hsl }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 relative overflow-hidden">
          <div className="container relative z-10 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Ideal para
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {useCases.map((useCase, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card/50"
                  >
                    <Check className="w-5 h-5 shrink-0" style={{ color: hsl }} />
                    <span className="text-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 relative overflow-hidden">
          <div className="container relative z-10 px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Planos &{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${hsl}, hsl(${
                      parseInt(color) + 20
                    } 80% 55%))`,
                  }}
                >
                  Preços
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, i) => (
                <div
                  key={i}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
                    plan.popular
                      ? "border-border scale-105 lg:scale-110 bg-card"
                      : "border-border bg-card/50 hover:border-border/80"
                  }`}
                  style={
                    plan.popular
                      ? { boxShadow: `0 0 60px ${hslMid}`, borderColor: `${hsl}50` }
                      : {}
                  }
                >
                  {plan.popular && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: hsl,
                        color: "white",
                      }}
                    >
                      Mais Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <Check
                          className="w-5 h-5 shrink-0 mt-0.5"
                          style={{ color: hsl }}
                        />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full py-6"
                    variant={plan.popular ? "default" : "secondary"}
                    style={
                      plan.popular
                        ? {
                            backgroundColor: hsl,
                            boxShadow: `0 0 40px ${hslGlow}`,
                          }
                        : {}
                    }
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="container relative z-10 px-6">
            <div className="relative rounded-3xl overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, hsl(${color} 85% 60% / 0.2), transparent)`,
                }}
              />
              <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
              <div
                className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl"
                style={{ backgroundColor: `hsl(${color} 85% 60% / 0.2)` }}
              />

              <div className="relative z-10 py-20 px-8 md:px-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Comece a usar o{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${hsl}, hsl(${
                        parseInt(color) + 20
                      } 80% 55%))`,
                    }}
                  >
                    {name}
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                  Experimente gratuitamente e descubra como podemos transformar sua operação.
                </p>
                <Button
                  size="lg"
                  className="group px-8 py-6 text-lg"
                  style={{
                    backgroundColor: hsl,
                    boxShadow: `0 0 60px ${hslGlow}`,
                  }}
                >
                  Começar Grátis
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPageLayout;
