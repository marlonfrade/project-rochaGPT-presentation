import { motion } from "framer-motion";
import Icon from "./stepfouricon";

const StepFourForm = ({ data, activeStep, setActiveStep }) => {
  if (activeStep !== 4) {
    return null;
  }
  const handleSubmit = () => {
    setActiveStep(5);
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
              RochaGPT no WhatsApp{" "}
            </motion.span>
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.8 }}
              className="mb-8 text-4xl font-bold leading-none tracking-tighter text-white lg:text-6xl"
            >
              Queremos entender como você usará o RochaGPT !
            </motion.h1>
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.8 }}
              className="mb-8 text-left text-base leading-relaxed text-gray-500"
            >
              Escolha a opção que mais se enquadra na sua resposta!
            </motion.p>
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring" }}
              className="mt-0 max-w-7xl sm:flex sm:space-x-4 lg:mt-6"
            >
              <div className="w-96 text-primary lg:w-full">
                <label>
                  <input
                    type="checkbox"
                    name="form-project-manager[]"
                    value="1"
                    className="peer sr-only"
                  />
                  <div className="peer-focus:ring-color group mb-3 flex items-center rounded border p-3 ring-offset-2 ring-offset-green-300 peer-checked:border-green-700 peer-checked:bg-green-700 peer-focus:ring-2">
                    <div className="mr-3">
                      <div className="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-green-700 bg-white focus-within:border-green-300">
                        <svg
                          className="pointer-events-none hidden h-3 w-3 fill-current text-white group-peer-checked:block"
                          version="1.1"
                          viewBox="0 0 17 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <g
                              transform="translate(-9 -11)"
                              fill="#00efa0"
                              fill-rule="nonzero"
                            >
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.956 9.956 0 0 1-4.708-1.175L2 22l1.176-5.29A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2Zm0 5c-1.598 0-3 1.34-3 3v1H8v5h8v-5h-1v-1a3 3 0 0 0-3-3Zm2 6v1h-4v-1h4Zm-2-4c.476 0 1 .49 1 1v1h-2v-1c0-.51.487-1 1-1Z"
                        />
                      </svg>
                      <div className="ml-4">
                        <div className="font-semibold">Chat Privado</div>
                        <div className="text-white">
                          Uma conversa particular com o RochaGPT
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="form-project-manager[]"
                    value="1"
                    className="peer sr-only"
                  />
                  <div className="peer-focus:ring-color group mb-3 flex items-center rounded border p-3 ring-offset-2 ring-offset-green-300 peer-checked:border-green-700 peer-checked:bg-green-700 peer-focus:ring-2">
                    <div className="mr-3">
                      <div className="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-green-700 bg-white focus-within:border-green-300">
                        <svg
                          className="pointer-events-none hidden h-3 w-3 fill-current text-white group-peer-checked:block"
                          version="1.1"
                          viewBox="0 0 17 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <g
                              transform="translate(-9 -11)"
                              fill="#00efa0"
                              fill-rule="nonzero"
                            >
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="M.25 10.214c0-3.968 3.805-6.964 8.202-6.964c3.498 0 6.6 1.884 7.74 4.65a.198.198 0 0 1-.172.269c-.372.03-.742.084-1.106.158a.209.209 0 0 1-.229-.114c-.963-1.979-3.33-3.463-6.233-3.463c-3.835 0-6.702 2.568-6.702 5.464c0 1.565.814 3.01 2.183 4.031a.75.75 0 0 1 .3.602v.94l1.549-.43a.75.75 0 0 1 .411.003c.61.179 1.264.287 1.945.313a.208.208 0 0 1 .2.2c.018.427.075.84.167 1.238a.056.056 0 0 1-.053.068a9.566 9.566 0 0 1-2.47-.32l-2.297.638a.75.75 0 0 1-.951-.723v-1.563C1.224 13.965.25 12.201.25 10.214Z"
                        />
                        <path
                          fill="white"
                          d="M6.855 8.258a1.065 1.065 0 1 1-2.13 0a1.065 1.065 0 0 1 2.13 0Zm4.258 1.065a1.065 1.065 0 1 0 0-2.13a1.065 1.065 0 0 0 0 2.13Zm3.433 5.854a.931.931 0 1 0 0-1.862a.931.931 0 0 0 0 1.862Zm5.456-.931a.931.931 0 1 1-1.863 0a.931.931 0 0 1 1.863 0Z"
                        />
                        <path
                          fill="white"
                          fill-rule="evenodd"
                          d="M16.786 9.859c3.71 0 6.96 2.532 6.96 5.928c0 1.68-.81 2.945-2.066 4.001v1.244a.75.75 0 0 1-.95.723l-1.882-.523a8.101 8.101 0 0 1-2.058.262c-3.71 0-6.96-2.532-6.96-5.928s3.245-5.707 6.956-5.707Zm5.464 5.707c0-2.324-2.311-4.429-5.46-4.429c-3.148 0-5.46 2.105-5.46 4.429c0 2.324 2.312 4.428 5.46 4.428a6.59 6.59 0 0 0 1.847-.26a.75.75 0 0 1 .412-.003l1.131.314v-.62a.75.75 0 0 1 .302-.6c1.114-.832 1.768-2.001 1.768-3.26Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div className="ml-4">
                        <div className="font-semibold">Chat em Grupo</div>
                        <div className="text-white">
                          Uma conversa com você, seus amigos e o RochaGPT
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="form-project-manager[]"
                    value="1"
                    className="peer sr-only"
                  />
                  <div className="peer-focus:ring-color group mb-3 flex items-center rounded border p-3 ring-offset-2 ring-offset-green-300 peer-checked:border-green-700 peer-checked:bg-green-700 peer-focus:ring-2">
                    <div className="mr-3">
                      <div className="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-green-700 bg-white focus-within:border-green-300">
                        <svg
                          className="pointer-events-none hidden h-3 w-3 fill-current text-white group-peer-checked:block"
                          version="1.1"
                          viewBox="0 0 17 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <g
                              transform="translate(-9 -11)"
                              fill="#00efa0"
                              fill-rule="nonzero"
                            >
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="m7.5 19.5l4-2.5l-4-2.5v5ZM13 7.75h4v-1.5h-4v1.5ZM3 23q-.825 0-1.413-.588T1 21v-8q0-.825.588-1.413T3 11h12q.825 0 1.413.588T17 13v8q0 .825-.588 1.413T15 23H3Zm15.5-9v-1q0-.95-.463-1.75T16.8 10h.2q1.25 0 2.125-.875T20 7q0-1.25-.875-2.125T17 4h-1.25v1.5H17q.625 0 1.063.438T18.5 7q0 .625-.438 1.063T17 8.5h-1.25v1.075q-.2-.05-.375-.063T15 9.5h-.75v-1H13q-.625 0-1.063-.438T11.5 7q0-.625.438-1.063T13 5.5h1.25V4H13q-1.25 0-2.125.875T10 7q0 .8.375 1.438T11.35 9.5H7V3q0-.825.588-1.413T9 1h12q.825 0 1.413.588T23 3v9q0 .825-.588 1.413T21 14h-2.5Z"
                        />
                      </svg>
                      <div className="ml-4">
                        <div className="font-semibold">
                          Resumo de Vídeos e Links
                        </div>
                        <div className="text-white">
                          Uma conversa sobre resumos de seus vídeos no youtube e
                          links.
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </motion.div>
            <div className="mt-4 w-full">
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
                onClick={handleSubmit}
                className="block w-full rounded-lg border border-transparent bg-green-700 px-5 py-3 text-base font-medium text-white shadow transition-colors ease-in-out hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
              >
                Concluir
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepFourForm;
