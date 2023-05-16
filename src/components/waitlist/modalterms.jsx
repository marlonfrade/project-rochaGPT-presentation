import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Terms({ open, setOpen, isTerms }) {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          fill-rule="evenodd"
                          d="M5.312 10.761C8.23 5.587 9.689 3 12 3c2.31 0 3.77 2.587 6.688 7.761l.364.645c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022l.364-.645ZM12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75ZM12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Termos de Serviço e Política de Privacidade
                      </Dialog.Title>
                      {isTerms ? (
                        <div className="mt-2">
                          <span className="text-sm font-semibold leading-6 text-gray-500">
                            Termos de Serviço:
                          </span>
                          <p className="mt-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Aceitação dos termos.
                            </span>{" "}
                            Ao se inscrever em nossa waitlist, você concorda em
                            cumprir e estar vinculado aos seguintes termos de
                            serviço.
                          </p>
                          <p className="mt-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Consentimento para contato.
                            </span>{" "}
                            Ao se inscrever em nossa waitlist, você nos concede
                            permissão para entrar em contato com você por meio
                            do email e telefone fornecidos, a fim de fornecer
                            atualizações sobre nossos serviços e para fins de
                            marketing.
                          </p>
                          <p className="mt-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Uso dos dados.
                            </span>{" "}
                            Os dados coletados durante o processo de inscrição
                            em nossa waitlist, incluindo nome, email e telefone,
                            serão usados exclusivamente para os fins de
                            comunicação e marketing relacionados aos nossos
                            serviços. Não compartilharemos esses dados com
                            terceiros sem o seu consentimento.
                          </p>
                          <p className="mt-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Cancelamento da inscrição.
                            </span>{" "}
                            Você tem o direito de cancelar sua inscrição na
                            waitlist a qualquer momento. Para isso, entre em
                            contato conosco através dos canais de comunicação
                            fornecidos no site.
                          </p>
                        </div>
                      ) : (
                        <div className="mt-4">
                          <span className="text-sm font-semibold leading-6 text-gray-500">
                            Política de Privacidade:
                          </span>
                          <p className="mt-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Informações coletadas.
                            </span>{" "}
                            Coletamos as seguintes informações durante o
                            processo de inscrição na waitlist: nome, email e
                            telefone. Essas informações são fornecidas por você
                            voluntariamente.
                          </p>
                          <p className="mt-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Uso das informações.
                            </span>{" "}
                            As informações fornecidas serão usadas para entrar
                            em contato com você e fornecer atualizações sobre
                            nossos serviços. Além disso, podemos usar essas
                            informações para fins de análise interna e melhoria
                            de nossos serviços.
                          </p>
                          <p className="mt-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Compartilhamento de informações.
                            </span>{" "}
                            Não compartilharemos suas informações pessoais com
                            terceiros, exceto quando necessário para cumprir os
                            propósitos da waitlist ou quando exigido por lei.
                          </p>
                          <p className="mt-2 text-sm text-gray-500">
                            <span className="font-semibold">Segurança.</span>{" "}
                            Você Implementamos medidas de segurança adequadas
                            para proteger as informações fornecidas contra
                            acesso não autorizado ou uso indevido.
                          </p>
                          <p className="mt-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Retenção de informações .
                            </span>{" "}
                            Manteremos suas informações pessoais apenas pelo
                            tempo necessário para cumprir os propósitos para os
                            quais foram coletadas, a menos que uma retenção mais
                            longa seja exigida ou permitida por lei.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Fechar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
