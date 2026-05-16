import {
  TrendingUp,
  Calculator,
  PieChart,
  Receipt,
  AlertTriangle,
  FileSpreadsheet,
} from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";

const ProductMargin = () => (
  <ProductPageLayout
    name="Margin"
    tagline="Gestão Financeira para iFood"
    description="Tenha controle total sobre margens, taxas e finanças da sua loja no iFood. Saiba exatamente quanto você ganha — e onde está perdendo."
    icon={TrendingUp}
    color="290"
    stats={[
      { value: "2K+", label: "Lojas" },
      { value: "R$15M+", label: "Analisados/mês" },
      { value: "23%", label: "Aumento Margem" },
      { value: "100%", label: "Precisão" },
    ]}
    features={[
      {
        icon: Calculator,
        title: "Cálculo de Margens",
        description: "Calcule a margem real de cada produto considerando todas as taxas e custos do iFood.",
      },
      {
        icon: Receipt,
        title: "Controle de Taxas",
        description: "Acompanhe todas as taxas cobradas pelo iFood: comissão, entrega, promoções e mais.",
      },
      {
        icon: PieChart,
        title: "Dashboard Financeiro",
        description: "Visualize receitas, custos e lucros em dashboards intuitivos e em tempo real.",
      },
      {
        icon: AlertTriangle,
        title: "Alertas Inteligentes",
        description: "Receba alertas quando produtos estão com margem negativa ou abaixo do ideal.",
      },
      {
        icon: FileSpreadsheet,
        title: "Relatórios Detalhados",
        description: "Exporte relatórios completos para contabilidade e tomada de decisão estratégica.",
      },
      {
        icon: TrendingUp,
        title: "Simulador de Preços",
        description: "Simule alterações de preço e veja o impacto na margem antes de aplicar.",
      },
    ]}
    useCases={[
      "Donos de restaurantes no iFood",
      "Dark kitchens e cloud kitchens",
      "Redes com múltiplas lojas",
      "Gestores financeiros de food service",
      "Consultores de delivery",
      "Franquias de alimentação",
    ]}
    pricing={[
      {
        name: "Básico",
        price: "R$29",
        period: "/mês",
        features: [
          "1 loja",
          "Até 50 produtos",
          "Dashboard básico",
          "Relatórios mensais",
          "Suporte por email",
        ],
        cta: "Começar Grátis",
      },
      {
        name: "Profissional",
        price: "R$79",
        period: "/mês",
        popular: true,
        features: [
          "Até 5 lojas",
          "Produtos ilimitados",
          "Dashboard completo",
          "Alertas inteligentes",
          "Simulador de preços",
          "Relatórios avançados",
          "Suporte prioritário",
        ],
        cta: "Assinar Pro",
      },
      {
        name: "Rede",
        price: "Sob consulta",
        period: "",
        features: [
          "Lojas ilimitadas",
          "Multi-plataforma",
          "API de integração",
          "Gerente dedicado",
          "Treinamento da equipe",
          "Dashboard consolidado",
        ],
        cta: "Falar com Vendas",
      },
    ]}
  />
);

export default ProductMargin;
