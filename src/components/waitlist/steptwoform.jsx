import { motion } from "framer-motion";
import Icon from "./steptwoicon";

const StepTwoForm = ({ data, activeStep, setActiveStep }) => {
  if (activeStep !== 2) {
    return null;
  }
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center">
          <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="animate-blob absolute -left-4 top-0 h-72 w-72 rounded-full bg-violet-300 opacity-70 mix-blend-multiply blur-xl filter"></div>

                <div className="animate-blob animation-delay-4000 absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-fuchsia-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
                <div className="relative">
                  <Icon />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow lg:pl-6 xl:mt-0 xl:pl-24">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  delay: 0.2,
                },
              }}
              className="mb-8 text-xs font-bold uppercase tracking-widest text-primary"
            >
              {" "}
              RochaGPT{" "}
            </motion.span>
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.8 }}
              className="mb-8 text-4xl font-bold leading-none tracking-tighter text-white lg:text-6xl"
            >
              Queremos te conhecer melhor !
            </motion.h1>
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.8 }}
              className="mb-8 text-left text-base leading-relaxed text-gray-500"
            >
              Respondendo apenas 3 perguntas, podemos melhorar ainda mais nossa
              entrega para nossos clientes. É bem rapidinho!
            </motion.p>
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{type: "spring"}}
              className="mt-0 max-w-7xl sm:flex lg:mt-6"
            >
              <div className="mt-3 rounded-lg sm:mt-0">
                <button
                  onClick={() => {
                    setActiveStep(3);
                  }}
                  className="block transform items-center rounded-xl bg-primary px-5 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                >
                  Desejo Responder
                </button>
              </div>
              <div className="mt-3 rounded-lg sm:ml-3 sm:mt-0">
                <button className="block transform items-center rounded-xl border-2 border-white px-5 py-3.5 text-center text-base font-medium text-red-500 shadow-md transition duration-500 ease-in-out hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  Não Desejo Informar
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepTwoForm;
