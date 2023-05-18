import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Terms from "./modalterms";

const submitedVariants = {
  firstDot: {
    initial: {
      y: -10,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
        repeat: "loop",
      },
    },
  },
  secondDot: {
    initial: {
      y: -10,
    },
    animate: {
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
        repeat: "loop",
      },
    },
  },
  thirdDot: {
    initial: {
      y: -10,
    },
    animate: {
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
        repeat: "loop",
      },
    },
  },
};

const StepOneForm = ({ formData, setFormData, activeStep, setActiveStep }) => {
  if (activeStep !== 1) {
    return null;
  }
  const [open, setOpen] = useState(false);
  const [isTerms, setIsTerms] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const nameInput = useRef(null);
  const emailInput = useRef(null);

  const handleInputName = (e) => {
    nameInput.current.value = e.target.value;
  };

  const handleInputEmail = (e) => {
    emailInput.current.value = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);

    if (!nameInput.current.value.length || !emailInput.current.value.length) {
      setIsSubmited(false);
      return;
    }

    setFormData({
      ...formData,
      name: nameInput.current.value,
      email: emailInput.current.value,
    });

    setTimeout(() => {
      setIsSubmited(false);
      setActiveStep(2);
    }, 2000);
  };

  return (
    <div className="relative mx-auto flex h-full min-h-screen w-full text-left">
      {/* Modal Terms */}
      <Terms open={open} setOpen={setOpen} isTerms={isTerms} />
      {/* Close Button */}
      <a
        href="/pricing"
        className="absolute right-0 top-0 z-10 m-3 h-6 w-6 cursor-pointer text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </a>
      {/* Main Content */}
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
              <div className=" min-w-0 flex-1">
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
              <div className="min-w-0 flex-1">
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
            <div className=" mt-4 flex items-center justify-center sm:mt-0 lg:ml-3">
              {isSubmited ? (
                <div className="ml-7 flex justify-center space-x-2 py-3 sm:px-10">
                  <motion.div
                    variants={submitedVariants.firstDot}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-3 w-3 rounded-full bg-gray-500"
                  ></motion.div>
                  <motion.div
                    variants={submitedVariants.secondDot}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-3 w-3 rounded-full bg-gray-500"
                  ></motion.div>
                  <motion.div
                    variants={submitedVariants.thirdDot}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-3 w-3 rounded-full bg-gray-500"
                  ></motion.div>
                </div>
              ) : (
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
                  className="block w-full rounded-lg border border-transparent bg-green-500 px-5 py-3 text-base font-medium text-white shadow transition-colors ease-in-out hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                >
                  Prosseguir
                </motion.button>
              )}
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
                onClick={() => {
                  setOpen(!open);
                  setIsTerms(true);
                }}
                className="cursor-pointer hover:text-white hover:underline"
              >
                {" "}
                Termos de Serviço{" "}
              </span>
              e
              <span
                onClick={() => {
                  setOpen(!open);
                  setIsTerms(false);
                }}
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
