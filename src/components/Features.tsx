import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import phone from "../assets/phone.png";
import system from "../assets/system.png";
import site from "../assets/site.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Landign Pages",
    description:
      "Uma landing page é uma página da web projetada especificamente para converter visitantes em leads ou clientes. Nossa equipe especializada na criação de landing pages garante que sua página seja visualmente atraente, intuitiva e otimizada para conversão. ",
    image: site,
  },
  {
    title: "Sistemas Web",
    description:
      "O desenvolvimento de sistemas personalizados é a espinha dorsal de muitas empresas modernas. Nossa equipe de desenvolvimento de software trabalha em estreita colaboração com você para entender suas necessidades específicas e criar soluções sob medida para o seu negócio",
    image: system,
  },
  {
    title: "Aplicativos",
    description:
      "Os aplicativos móveis se tornaram essenciais para o sucesso de muitas empresas. Nossa equipe de desenvolvimento de aplicativos combina expertise técnica com criatividade para criar aplicativos móveis de alta qualidade.",
    image: phone,
  },
];

const featureList: string[] = [
  "Sites",
  "Landing Pages",
  "Aplicações Webs",
  "Apicativos"
  /* "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist", */
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Diferentes{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Soluções
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[100px] max-h-[200px] lg:w-[200px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
