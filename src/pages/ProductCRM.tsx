import {
  Users,
  BarChart3,
  Zap,
  Shield,
  Globe,
  MessageSquare,
} from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";

const ProductCRM = () => (
  <ProductPageLayout
    name="ExyCode CRM"
    tagline="Gestão de Relacionamentos Inteligente"
    description="A plataforma completa para gerenciar clientes, automatizar processos e escalar vendas com inteligência artificial integrada."
    icon={Users}
    color="270"
    stats={[
      { value: "10K+", label: "Empresas" },
      { value: "2M+", label: "Contatos" },
      { value: "99.9%", label: "Uptime" },
      { value: "4.9★", label: "Avaliação" },
    ]}
    features={[
      {
        icon: Users,
        title: "Gestão de Contatos",
        description: "Organize todos os seus contatos com segmentação inteligente e tags automáticas.",
      },
      {
        icon: BarChart3,
        title: "Pipeline de Vendas",
        description: "Visualize e gerencie todo o funil de vendas com drag-and-drop intuitivo.",
      },
      {
        icon: Zap,
        title: "Automação Inteligente",
        description: "Automatize follow-ups, lembretes e tarefas repetitivas com IA.",
      },
      {
        icon: Shield,
        title: "Segurança Avançada",
        description: "Criptografia de ponta, backups automáticos e controle de acessos granular.",
      },
      {
        icon: Globe,
        title: "100+ Integrações",
        description: "Conecte com WhatsApp, email, redes sociais e suas ferramentas favoritas.",
      },
      {
        icon: MessageSquare,
        title: "Analytics em Tempo Real",
        description: "Dashboards completos com métricas de vendas, conversão e performance.",
      },
    ]}
    useCases={[
      "Equipes de vendas B2B e B2C",
      "Gestão de leads e oportunidades",
      "Empresas em crescimento acelerado",
      "Times de customer success",
      "Agências e consultorias",
      "Startups que precisam escalar",
    ]}
    pricing={[
      {
        name: "Starter",
        price: "R$49",
        period: "/mês",
        features: [
          "Até 500 contatos",
          "Pipeline básico",
          "5 automações",
          "Relatórios essenciais",
          "Suporte por email",
        ],
        cta: "Começar Grátis",
      },
      {
        name: "Pro",
        price: "R$199",
        period: "/mês",
        popular: true,
        features: [
          "Até 10.000 contatos",
          "Pipelines ilimitados",
          "Automações ilimitadas",
          "Analytics avançado",
          "Integrações premium",
          "Suporte prioritário",
          "API completa",
        ],
        cta: "Assinar Pro",
      },
      {
        name: "Enterprise",
        price: "Sob consulta",
        period: "",
        features: [
          "Contatos ilimitados",
          "White-label",
          "Gerente dedicado",
          "SLA garantido",
          "Treinamento personalizado",
          "Segurança avançada",
        ],
        cta: "Falar com Vendas",
      },
    ]}
  />
);

export default ProductCRM;
