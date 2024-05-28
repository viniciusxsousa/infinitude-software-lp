import { Button } from "./ui/button";
// import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
              Infinitude
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#002404] via-[#097909] to-[#00ff48] text-transparent bg-clip-text">
              Software
            </span>{" "}
          </h2>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Criatividade Sem Limites, Tecnologia Sem Fronteiras: Infinitude Software.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">
            <a className="block w-full h-full flex items-center justify-center"  href="https://api.whatsapp.com/send?phone=+5511%2094390-7690&text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento" target="_black">Vamos começar</a>
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
