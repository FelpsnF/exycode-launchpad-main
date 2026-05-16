import {
  MessageSquareText,
  Bot,
  Workflow,
  BarChart3,
  Globe,
  Clock,
} from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";

const ProductChatAI = () => (
  <ProductPageLayout
    name="ExyChat AI"
    tagline="Automação de Chat com IA Avançada"
    description="Atendimento 24/7 com inteligência artificial que entende contexto, responde naturalmente e converte mais clientes automaticamente."
    icon={MessageSquareText}
    color="250"
    stats={[
      { value: "5M+", label: "Mensagens/mês" },
      { value: "98%", label: "Satisfação" },
      { value: "24/7", label: "Disponibilidade" },
      { value: "3s", label: "Tempo Resposta" },
    ]}
    features={[
      {
        icon: Bot,
        title: "IA Conversacional",
        description: "Modelos de linguagem avançados que entendem contexto e respondem com naturalidade.",
      },
      {
        icon: MessageSquareText,
        title: "Multi-canal",
        description: "WhatsApp, Instagram, Facebook Messenger, Telegram e webchat em um só lugar.",
      },
      {
        icon: Workflow,
        title: "Fluxos Inteligentes",
        description: "Crie fluxos de conversa complexos com lógica condicional e variáveis dinâmicas.",
      },
      {
        icon: BarChart3,
        title: "Analytics de Conversas",
        description: "Métricas detalhadas de engajamento, conversão e satisfação do cliente.",
      },
      {
        icon: Globe,
        title: "Multilíngue",
        description: "Atendimento automático em múltiplos idiomas com tradução em tempo real.",
      },
      {
        icon: Clock,
        title: "Handoff Inteligente",
        description: "Transição suave para atendentes humanos quando a IA identifica a necessidade.",
      },
    ]}
    useCases={[
      "E-commerces com alto volume",
      "Atendimento ao cliente automatizado",
      "Qualificação de leads via chat",
      "Suporte técnico nível 1",
      "Agendamento automatizado",
      "SAC de empresas de serviço",
    ]}
    pricing={[
      {
        name: "Starter",
        price: "R$99",
        period: "/mês",
        features: [
          "1.000 mensagens/mês",
          "1 canal",
          "Fluxos básicos",
          "Relatórios essenciais",
          "Suporte por email",
        ],
        cta: "Começar Grátis",
      },
      {
        name: "Growth",
        price: "R$349",
        period: "/mês",
        popular: true,
        features: [
          "20.000 mensagens/mês",
          "Todos os canais",
          "Fluxos ilimitados",
          "IA avançada",
          "Analytics completo",
          "Integrações premium",
          "Suporte prioritário",
        ],
        cta: "Assinar Growth",
      },
      {
        name: "Enterprise",
        price: "Sob consulta",
        period: "",
        features: [
          "Mensagens ilimitadas",
          "IA personalizada",
          "Treinamento do modelo",
          "SLA garantido",
          "Gerente dedicado",
          "API completa",
        ],
        cta: "Falar com Vendas",
      },
    ]}
  />
);

export default ProductChatAI;
