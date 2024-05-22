/* import { Statistics } from "./Statistics"; */
import puzzle from "../assets/puzzle.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={puzzle}
            alt=""
            className="w-[200px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Sobre a{" "}
                </span>
                empresa
              </h2>
              <p className="text-xl text-muted-foreground mt-10">
              A Infinitude-Software foi fundada com a visão de transformar a indústria de tecnologia, através de soluções de software inovadoras e eficazes. Nossa equipe é composta por especialistas em tecnologia apaixonados e dedicados a fornecer produtos e serviços de alta qualidade.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
