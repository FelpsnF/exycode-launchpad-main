import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative z-10 px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
          <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
          
          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10 py-20 px-8 md:px-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para transformar
              <br />
              <span className="gradient-text">seu negócio?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Conheça nossas soluções e descubra como a ExyCode pode 
              acelerar o crescimento da sua empresa com tecnologia inteligente.
            </p>
            <Button size="lg" className="group px-8 py-6 text-lg glow">
              Fale com um Especialista
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="mt-6 text-sm text-muted-foreground">
              Sem compromisso • Consultoria gratuita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
