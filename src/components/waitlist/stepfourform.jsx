import { motion } from "framer-motion";
import Icon from "./stepfouricon";

const StepFourForm = ({ data, activeStep, setActiveStep }) => {
  if (activeStep !== 4) {
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
              className="mt-0 max-w-7xl sm:flex lg:mt-6 sm:space-x-4"
            >

              <div class="w-96">
                <label>
                  <input type="checkbox" name="form-project-manager[]" value="1" class="peer sr-only" />
                  <div class="group mb-3 flex items-center rounded border p-3 ring-offset-2 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-focus:ring-2">
                    <div class="mr-3">
                      <div class="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-blue-300 bg-white focus-within:border-blue-500">
                        <svg class="group-peer-checked:block pointer-events-none hidden h-3 w-3 fill-current text-white" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="mr-3 h-10 w-10 rounded-full bg-[url('https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover"></div>
                      <div>
                        <div class="font-semibold">Katick Ramson</div>
                        <div class="text-gray-700">Full Stack Developer</div>
                      </div>
                    </div>
                  </div>
                </label>
                <label>
                  <input type="checkbox" name="form-project-manager[]" value="1" class="peer sr-only" />
                  <div class="group mb-3 flex items-center rounded border p-3 ring-offset-2 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-focus:ring-2">
                    <div class="mr-3">
                      <div class="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-blue-300 bg-white focus-within:border-blue-500">
                        <svg class="group-peer-checked:block pointer-events-none hidden h-3 w-3 fill-current text-white" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="mr-3 h-10 w-10 rounded-full bg-[url('https://images.pexels.com/photos/6146931/pexels-photo-6146931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover"></div>
                      <div>
                        <div class="font-semibold">Richard Balmon</div>
                        <div class="text-gray-700">Front End Developer</div>
                      </div>
                    </div>
                  </div>
                </label>
                <label>
                  <input type="checkbox" name="form-project-manager[]" value="1" class="peer sr-only" />
                  <div class="group mb-3 flex items-center rounded border p-3 ring-offset-2 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-focus:ring-2">
                    <div class="mr-3">
                      <div class="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-blue-300 bg-white focus-within:border-blue-500">
                        <svg class="group-peer-checked:block pointer-events-none hidden h-3 w-3 fill-current text-white" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="mr-3 h-10 w-10 rounded-full bg-[url('https://i.pravatar.cc/50?img=5')] bg-cover"></div>
                      <div>
                        <div class="font-semibold">Salomi Lu</div>
                        <div class="text-gray-700">Product Manager</div>
                      </div>
                    </div>
                  </div>
                </label>
                <label>
                  <input type="checkbox" name="form-project-manager[]" value="1" class="peer sr-only" />
                  <div class="group mb-3 flex items-center rounded border p-3 ring-offset-2 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-focus:ring-2">
                    <div class="mr-3">
                      <div class="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-blue-300 bg-white focus-within:border-blue-500">
                        <svg class="group-peer-checked:block pointer-events-none hidden h-3 w-3 fill-current text-white" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="mr-3 h-10 w-10 rounded-full bg-[url('https://i.pravatar.cc/50?img=7')] bg-cover"></div>
                      <div>
                        <div class="font-semibold">Patrick Dixon</div>
                        <div class="text-gray-700">Designer</div>
                      </div>
                    </div>
                  </div>
                </label>
                <label>
                  <input type="checkbox" name="form-project-manager[]" value="1" class="peer sr-only" />
                  <div class="group mb-3 flex items-center rounded border p-3 ring-offset-2 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-focus:ring-2">
                    <div class="mr-3">
                      <div class="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-blue-300 bg-white focus-within:border-blue-500">
                        <svg class="group-peer-checked:block pointer-events-none hidden h-3 w-3 fill-current text-white" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="mr-3 h-10 w-10 rounded-full bg-[url('https://i.pravatar.cc/50?img=8')] bg-cover"></div>
                      <div>
                        <div class="font-semibold">John Doe</div>
                        <div class="text-gray-700">Scrum Master</div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepFourForm;
