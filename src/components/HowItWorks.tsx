import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { HiOutlineSignal } from "react-icons/hi2";
import { MdOutlineVisibility } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <HiOutlineSignal />,
    title: "Alcance",
    description:
      "Alcance um público muito maior do que seria possível apenas localmente.",
  },
  {
    icon: <MdOutlineVisibility />,
    title: "Visibilidade 24/7",
    description:
      "Isso permite que seus clientes ou seguidores acessem informações, façam compras ou interajam com você a qualquer momento",
  },
  {
    icon:<FaMedal />,
    title: "Credibilidade",
    description:
      "Aumente a percepção de credibilidade e profissionalismo em relação à sua marca ou negócio.",
  },
  {
    icon: <VscGraphLine />,
    title: "Análise",
    description:
      "Uma presença online oferece a oportunidade de coletar dados valiosos sobre seu público-alvo.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Por que{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          criar{" "}
        </span>
       uma solução com a gente ?
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Aqui estão os benefícios
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
