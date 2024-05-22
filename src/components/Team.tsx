import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://github.com/danilobarretoooo.png",
    name: "Danilo Barreto",
    position: "Backend Developer",
    description: "Desenvolvedor Java, com foco em aplicações web. Expertise em Spring Boot e React",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/danilobarretoooo/" },
      { name: "Instagram", url: "https://www.instagram.com/daniloblimaa/",
      },
    ],
  },
  {
    imageUrl: "https://github.com/Cicilin1.png",
    name: "Guilherme Cicilini",
    position: "Frontend Developer",
    description: "Desenvolvedor especializado em aplicações web bacharelando dados na Univesp.",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/guilherme-cicilini/" },
      {name: "Instagram", url: "https://www.instagram.com/_cicilini/",
      },
    ],
  },
  {
    imageUrl: "https://github.com/MateusMiranda20.png",
    name: "Mateus Miranda",
    position: "Frontend Developer",
    description: "Desenvolvedor com competências em desenvolvimento de aplicações web, qualificado em React",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/mateus-miranda-inacio/" },
      { name: "Instagram", url: "https://www.instagram.com/maateus_miirandaa/",},
    ],
  },
  {
    imageUrl: "https://github.com/viniciusxsousa.png",
    name: "Vinicius Sousa",
    position: "Tech lead",
    description: "Com três anos de experiência na área, formado em Sistema de informações.",
    socialNetworks: [ { name: "Linkedin", url: "https://www.linkedin.com/in/viniciusxsousa/" },
                      { name: "Instagram", url: "https://www.instagram.com/vinicius_ssousa/",},
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl mb-14 md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Nosso time{" "}
        </span>
        Especializado
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks, description }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
