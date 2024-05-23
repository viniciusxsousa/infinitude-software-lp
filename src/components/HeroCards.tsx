/* import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"; */
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin, Instagram  } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { FcBullish } from "react-icons/fc";
import logo from "../assets/logo.png"

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[500px] h-[500px]">
      {/* Testimonial */}
      {/* <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">John Doe React</CardTitle>
            <CardDescription>@john_doe</CardDescription>
          </div>
        </CardHeader>

        <CardContent>This landig page is awesome!</CardContent>
      </Card> */}

      {/* Team */}
      <Card className="absolute right-[20px] top-10 w-60 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src={logo}
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover bg-#fff"
          />
          <CardTitle className="text-center">Infinitude Software</CardTitle>
          <CardDescription className="font-normal text-primary">
            Nas redes sociais
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Mantenha-se informado sobre as atualizações mais recentes ao nos acompanhar de perto.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              href="https://www.instagram.com/infinitudesoftware.com.br?igsh=dms2OGViaW95cnMz"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <Instagram size="20" />
            </a>

            <a
              href="https://www.linkedin.com/company/infinitude-software/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[60px] left-[-70px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <FcBullish className="h-12 w-12 m-auto l-auto mb-3 col" />
          <CardDescription>
            Impulsione seu negócio, alcançando mais clientes com estratégias eficazes para expandir sua presença e elevar sua marca.
          </CardDescription>
        </CardHeader>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Sistema personalizado", "Suporte do nosso time", "Mais conversões"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] right-[20px] bottom-[-75px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Faça diferente !</CardTitle>
            <CardDescription className="text-md mt-2">
              Explore e personalize sua jornada digital para uma experiência única.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
