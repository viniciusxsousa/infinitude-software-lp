import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: String;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Landign Pages",
    popular: 0,
    price: ' consultar',
    description:
      "Desenvolvimento de landing pages personalizadas.",
    buttonText: "Solicitar orçamento",
    benefitList: [
      "Criação de landing pages",
      "Definição do layout",
      "Página adaptável para diferente tamanhos de tela",
      "Melhore a converção do seus clientes",
    ],
  },
  {
    title: "Sistema Web",
    popular: 0,
    price: " consultar",
    description:
      "Criação de um sistema personalizado para o seu negócio.",
    buttonText: "Solicitar orçamento",
    benefitList: [
      "Tenha um sistema personalizado",
      "layout próprio",
      "Suas regras de negócio em um sistema",
      "Suporte do nosso time especializado",
    ],
  },
  {
    title: "Aplicativo",
    popular: 0,
    price: ' consultar',
    description:
      "Crie um aplicativo para você ou para seu negócio.",
    buttonText: "Solicitar orçamento",
    benefitList: [
      "Aplicativo próprio",
      "Suporte do nosso time",
      "Alinhamento das suas necessidades",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Solicite
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          seu{" "}
        </span>
        orçamento
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Valores e prazo a negociar de acordo com cada projeto.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                {/* <span className="text-3xl font-bold">${pricing.price}</span> */}
                {/* <span className="text-muted-foreground"> /month</span> */}
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">
                <a className="block w-full h-full flex items-center justify-center " href="https://api.whatsapp.com/send?phone=+5511%2094390-7690&text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento" target="_black">
                  {pricing.buttonText}
                </a>
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
