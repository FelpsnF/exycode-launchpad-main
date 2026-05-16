import {
  Mic,
  FileText,
  Stethoscope,
  Brain,
  Clock,
  ShieldCheck,
} from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";

const ProductVoiceAI = () => (
  <ProductPageLayout
    name="ExyVoice"
    tagline="Transcrição Inteligente com IA"
    description="Transcrição de voz avançada focada em formulários e prontuários. Já utilizado por profissionais da saúde para agilizar registros com precisão."
    icon={Mic}
    color="310"
    stats={[
      { value: "500K+", label: "Transcrições" },
      { value: "99.2%", label: "Precisão" },
      { value: "50%", label: "Menos Tempo" },
      { value: "LGPD", label: "Compliant" },
    ]}
    features={[
      {
        icon: Mic,
        title: "Transcrição em Tempo Real",
        description: "Converta fala em texto instantaneamente com alta precisão e baixa latência.",
      },
      {
        icon: FileText,
        title: "Formulários Inteligentes",
        description: "Preencha formulários automaticamente a partir de ditados com campos mapeados por IA.",
      },
      {
        icon: Stethoscope,
        title: "Terminologia Médica",
        description: "Modelo treinado com vocabulário médico para máxima precisão em prontuários e laudos.",
      },
      {
        icon: Brain,
        title: "IA Contextual",
        description: "Entende contexto e corrige automaticamente termos técnicos e abreviações.",
      },
      {
        icon: Clock,
        title: "Economia de Tempo",
        description: "Reduza em até 50% o tempo gasto com preenchimento de documentos.",
      },
      {
        icon: ShieldCheck,
        title: "LGPD Compliant",
        description: "Dados criptografados e processados conforme a Lei Geral de Proteção de Dados.",
      },
    ]}
    useCases={[
      "Consultórios médicos e clínicas",
      "Hospitais e prontuários eletrônicos",
      "Laudos e relatórios médicos",
      "Formulários de atendimento",
      "Profissionais de saúde autônomos",
      "Instituições de pesquisa clínica",
    ]}
    pricing={[
      {
        name: "Individual",
        price: "R$59",
        period: "/mês",
        features: [
          "1 usuário",
          "5 horas de transcrição/mês",
          "Formulários básicos",
          "Terminologia médica",
          "Suporte por email",
        ],
        cta: "Começar Grátis",
      },
      {
        name: "Clínica",
        price: "R$199",
        period: "/mês",
        popular: true,
        features: [
          "Até 10 usuários",
          "30 horas de transcrição/mês",
          "Formulários personalizados",
          "IA contextual avançada",
          "Integração com sistemas",
          "Suporte prioritário",
          "Dashboard de uso",
        ],
        cta: "Assinar Clínica",
      },
      {
        name: "Hospital",
        price: "Sob consulta",
        period: "",
        features: [
          "Usuários ilimitados",
          "Transcrição ilimitada",
          "Modelo IA personalizado",
          "Integração PEP/HIS",
          "SLA garantido",
          "Implantação dedicada",
        ],
        cta: "Falar com Vendas",
      },
    ]}
  />
);

export default ProductVoiceAI;
