import { useRef } from "react";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

import Icon from "./steptwoicon";

const StepTwoForm = ({ data, setFormData, activeStep, setActiveStep }) => {
  if (activeStep !== 2) {
    return null;
  }
  const date = new Date();
  const usersCollectionRef = collection(db, "users");
  const phoneRef = useRef(null);
  const helperText = useRef(null);

  const handlePhoneInput = (e) => {
    const input = phoneRef.current.value;
    const formattedNumber = input
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    // set brazilian format phone number
    phoneRef.current.value = formattedNumber;
  };

  const handleSubmit = async (opt) => {
    const isUserAgreed = opt;
    if (phoneRef.current.value.length !== 15) {
      helperText.current.innerText = "verifique o telefone digitado.";
      phoneRef.current.style.borderColor = "red";
      return;
    }
    // handle data
    setFormData({
      ...data,
      createDate: date,
      phone: phoneRef.current.value,
      isUserAgreed: isUserAgreed,
    });
    helperText.current.innerText = "";

    // redirect based on user option
    if (opt) {
      setActiveStep(3);
    } else {
      const newData = {
        ...data,
        createDate: date,
        phone: phoneRef.current.value,
        isUserAgreed: isUserAgreed,
      };
      await addDoc(usersCollectionRef, newData).then((result) => {
        console.log(result);
        setActiveStep(5);
      });
      setActiveStep(5);
    }
  };

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
              👋 {data.name}, Queremos te conhecer melhor!
            </motion.h1>
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.8 }}
              className="mb-4 text-left text-base leading-relaxed text-gray-500"
            >
              Respondendo apenas 3 perguntas, podemos melhorar ainda mais nossa
              entrega para nossos clientes. É bem rapidinho!
            </motion.p>
            <motion.form
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { delay: 0.1, type: "tween" },
              }}
              id=""
              name=""
              className="border2 mt-4 w-full transform rounded-xl bg-gray-50 p-2 transition duration-500 ease-in-out md:mx-auto"
            >
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "tween",
                    delay: 0.8,
                  },
                }}
                className=""
              >
                <div className="min-w-0 flex-1">
                  <label htmlFor="name" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="block w-full transform rounded-md border border-transparent bg-transparent px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Preencha seu telefone com DDD"
                    required
                    ref={phoneRef}
                    onChange={handlePhoneInput}
                  />
                </div>
              </motion.div>
            </motion.form>
            <p
              ref={helperText}
              className="m-0 text-left text-sm leading-relaxed text-red-500"
            ></p>

            <motion.div
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "tween" }}
              className="mt-4 flex w-full justify-start space-x-6 lg:mt-6"
            >
              <div className="mt-4 rounded-lg sm:mt-0">
                <button
                  onClick={() => {
                    handleSubmit(true);
                  }}
                  className="block transform items-center rounded-xl bg-green-500 px-5 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                >
                  Desejo Responder
                </button>
              </div>
              <div className="mt-3 rounded-lg sm:ml-3 sm:mt-0">
                <button
                  onClick={() => {
                    handleSubmit(false);
                  }}
                  className="block transform items-center rounded-xl border-2 border-white px-5 py-3.5 text-center text-base font-medium text-red-500 shadow-md transition duration-500 ease-in-out hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Não Desejo Responder
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
