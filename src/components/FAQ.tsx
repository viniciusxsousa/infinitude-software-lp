import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Vale a pena investir em um aplicativo móvel para meu negócio?",
    answer: "Investir em um aplicativo móvel pode ser muito vantajoso se você deseja melhorar o engajamento com seus clientes, aumentar a acessibilidade dos seus serviços e fortalecer sua marca. É especialmente útil se seus clientes utilizam frequentemente dispositivos móveis.",
    value: "item-1",
  },
  {
    question: "Desenvolver um site é essencial para todos os tipos de negócios?",
    answer:
      "Embora a maioria dos negócios possa se beneficiar de ter um site, o grau de necessidade pode variar. Para empresas que dependem de visibilidade online e interação com clientes, como e-commerce ou serviços digitais, é praticamente essencial.",
    value: "item-2",
  },
  {
    question:
      "Quais são os principais benefícios de ter uma aplicação personalizada em vez de soluções prontas?",
    answer:
      "Aplicações personalizadas são desenvolvidas para atender às necessidades específicas do seu negócio, oferecendo maior flexibilidade, escalabilidade e integração com outros sistemas. Elas podem proporcionar uma vantagem competitiva ao resolver problemas únicos de forma eficaz.",
    value: "item-3",
  },
  {
    question: "Quanto custa desenvolver um aplicativo?",
    answer: "O custo de desenvolvimento de um aplicativo varia amplamente, dependendo da complexidade, plataforma e recursos envolvidos.",
    value: "item-4",
  },
  {
    question:
      "Como posso medir o sucesso de uma aplicação desenvolvida para meu negócio?",
    answer:
      "O sucesso de uma aplicação pode ser medido por métricas como o número de usuários ativos, a satisfação do cliente, o aumento de receita direta atribuída ao app, e a eficiência operacional melhorada.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Perguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frequentes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Ainda tem dúvidas?{" "}
        <a
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contate-nos
        </a>
      </h3>
    </section>
  );
};
