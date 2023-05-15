import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Terms from "./modalterms";

const StepOneForm = ({ data, activeStep, setActiveStep }) => {
  if (activeStep !== 1) {
    return null;
  }
  const [open, setOpen] = useState(false);
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const submitBtn = useRef(null);

  const handleInputName = (e) => {
    nameInput.current.value = e.target.value;
  };

  const handleInputEmail = (e) => {
    emailInput.current.value = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
    submitBtn.current.innerText = "enviando ...";

    setTimeout(() => {
      setActiveStep(2);
      submitBtn.current.innerText = "enviar";
    }, 3000);
  };

  return (
    <div className="relative mx-auto flex h-full min-h-screen w-full text-left">
      <Terms open={open} setOpen={setOpen} />
      <a href="/pricing">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-0 m-3 h-6 w-6 cursor-pointer text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </a>
      <div className="relative mx-auto inline-flex items-center align-middle">
        <div className="px-4 pb-12 text-center">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
              },
            }}
            className="text-4xl font-bold leading-none tracking-tighter text-white sm:max-w-5xl md:text-5xl lg:max-w-7xl lg:text-6xl"
          >
            Venha fazer parte <br className="hidden lg:block" />
            do RochaGPT!
          </motion.h1>
          <form
            id=""
            name=""
            onSubmit={handleSubmit}
            className="border2 mt-8 transform rounded-xl bg-gray-50 p-2 transition duration-500 ease-in-out sm:max-w-3xl md:mx-auto lg:flex"
          >
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  delay: 0.2,
                },
              }}
              className="space-y 4 divide-y lg:flex lg:divide-x lg:divide-y-0"
            >
              <div className="revue-form-group min-w-0 flex-1">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  ref={nameInput}
                  onChange={handleInputName}
                  className="block w-full transform rounded-md border border-transparent bg-transparent px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Digite seu nome "
                  required
                />
              </div>
              <div className="revue-form-group min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  ref={emailInput}
                  onChange={handleInputEmail}
                  className="block w-full transform rounded-md border border-transparent bg-transparent px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Digite seu email"
                  required
                />
              </div>
            </motion.div>
            <div className="revue-form-actions mt-4 sm:mt-0 lg:ml-3">
              <motion.button
                initial={{ x: 200, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    delay: 0.2,
                  },
                }}
                type="submit"
                ref={submitBtn}
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
                className="block w-full rounded-lg border border-transparent bg-primary px-5 py-3 text-base font-medium text-white shadow transition-colors ease-in-out hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
              >
                Prosseguir
              </motion.button>
            </div>
          </form>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                type: "tween",
                delay: 0.2,
              },
            }}
            className="sm:flex sm:max-w-lg md:mx-auto"
          >
            <p className="mt-3 text-xs text-gray-500">
              Ao se inscrever, você concorda com nossos
              <span
                onClick={() => setOpen(!open)}
                className="cursor-pointer hover:text-white hover:underline"
              >
                {" "}
                Termos de Serviço{" "}
              </span>
              e
              <span
                onClick={() => setOpen(!open)}
                className="cursor-pointer hover:text-white hover:underline"
              >
                {" "}
                Política de Privacidade
              </span>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StepOneForm;
