import Icon from "./stepthreeicon";
import { motion } from "framer-motion";

const StepThreeForm = ({ data, setFormData, activeStep, setActiveStep }) => {
  if (activeStep !== 3) {
    return null;
  }
  const handleClick = (option) => {
    setFormData({
      ...data,
      howUserReachRochaGPT: option,
    });
    setActiveStep(4);
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
              RochaGPT Social{" "}
            </motion.span>
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.8 }}
              className="mb-8 text-4xl font-bold leading-none tracking-tighter text-white lg:text-6xl"
            >
              {data.name}, como você chegou até o RochaGPT ?
            </motion.h1>
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.8 }}
              className="mb-8 text-left text-base leading-relaxed text-gray-500"
            >
              Queremos melhorar nosso alcance, e você pode nos ajudar escolhendo
              a mídia social que te trouxe até o RochaGPT. Escolha a mídia
              social que mais se aproxima da sua escolha.
            </motion.p>
            <div className="-mx-4 mt-2 flex w-full flex-wrap text-left">
              <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "tween" }}
                className="mt-4 w-1/5 p-4 "
              >
                <motion.svg
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    handleClick("Google");
                  }}
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49.13"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  />
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  />
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  />
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  />
                </motion.svg>
              </motion.div>
              <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", delay: 0.2 }}
                className="mt-4 w-1/5 p-4 "
              >
                <motion.svg
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    handleClick("WhatsApp");
                  }}
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48.38"
                  viewBox="0 0 256 258"
                >
                  <defs>
                    <linearGradient
                      id="logosWhatsappIcon0"
                      x1="50%"
                      x2="50%"
                      y1="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#1FAF38" />
                      <stop offset="100%" stopColor="#60D669" />
                    </linearGradient>
                    <linearGradient
                      id="logosWhatsappIcon1"
                      x1="50%"
                      x2="50%"
                      y1="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#F9F9F9" />
                      <stop offset="100%" stopColor="#FFF" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#logosWhatsappIcon0)"
                    d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                  />
                  <path
                    fill="url(#logosWhatsappIcon1)"
                    d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513l10.706-39.082Z"
                  />
                  <path
                    fill="#FFF"
                    d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                  />
                </motion.svg>
              </motion.div>
              <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", delay: 0.4 }}
                className="mt-4 w-1/5 p-4 "
              >
                <motion.svg
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    handleClick("Instagram");
                  }}
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect
                      width="256"
                      height="256"
                      fill="url(#skillIconsInstagram0)"
                      rx="60"
                    />
                    <rect
                      width="256"
                      height="256"
                      fill="url(#skillIconsInstagram1)"
                      rx="60"
                    />
                    <path
                      fill="#fff"
                      d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z"
                    />
                    <defs>
                      <radialGradient
                        id="skillIconsInstagram0"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FD5" />
                        <stop offset=".1" stopColor="#FD5" />
                        <stop offset=".5" stopColor="#FF543E" />
                        <stop offset="1" stopColor="#C837AB" />
                      </radialGradient>
                      <radialGradient
                        id="skillIconsInstagram1"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3771C8" />
                        <stop offset=".128" stopColor="#3771C8" />
                        <stop offset="1" stopColor="#60F" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </g>
                </motion.svg>
              </motion.div>
              <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", delay: 0.6 }}
                className="mt-4 w-1/5 p-4 "
              >
                <motion.svg
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    handleClick("Discord");
                  }}
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#5865F2" rx="60" />
                    <g clipPath="url(#skillIconsDiscord0)">
                      <path
                        fill="#fff"
                        d="M197.308 64.797a164.918 164.918 0 0 0-40.709-12.627a.618.618 0 0 0-.654.31c-1.758 3.126-3.706 7.206-5.069 10.412c-15.373-2.302-30.666-2.302-45.723 0c-1.364-3.278-3.382-7.286-5.148-10.412a.643.643 0 0 0-.655-.31a164.472 164.472 0 0 0-40.709 12.627a.583.583 0 0 0-.268.23c-25.928 38.736-33.03 76.52-29.546 113.836a.685.685 0 0 0 .26.468c17.106 12.563 33.677 20.19 49.94 25.245a.648.648 0 0 0 .702-.23c3.847-5.254 7.276-10.793 10.217-16.618a.633.633 0 0 0-.347-.881c-5.44-2.064-10.619-4.579-15.601-7.436a.642.642 0 0 1-.063-1.064a86.364 86.364 0 0 0 3.098-2.428a.618.618 0 0 1 .646-.088c32.732 14.944 68.167 14.944 100.512 0a.617.617 0 0 1 .655.08a79.613 79.613 0 0 0 3.106 2.436a.642.642 0 0 1-.055 1.064a102.622 102.622 0 0 1-15.609 7.428a.638.638 0 0 0-.339.889a133.075 133.075 0 0 0 10.208 16.61a.636.636 0 0 0 .702.238c16.342-5.055 32.913-12.682 50.02-25.245a.646.646 0 0 0 .26-.46c4.17-43.141-6.985-80.616-29.571-113.836a.506.506 0 0 0-.26-.238ZM94.834 156.142c-9.855 0-17.975-9.047-17.975-20.158s7.963-20.158 17.975-20.158c10.09 0 18.131 9.127 17.973 20.158c0 11.111-7.962 20.158-17.974 20.158Zm66.456 0c-9.855 0-17.974-9.047-17.974-20.158s7.962-20.158 17.974-20.158c10.09 0 18.131 9.127 17.974 20.158c0 11.111-7.884 20.158-17.974 20.158Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="skillIconsDiscord0">
                        <path fill="#fff" d="M28 51h200v154.93H28z" />
                      </clipPath>
                    </defs>
                  </g>
                </motion.svg>
              </motion.div>
              <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", delay: 0.8 }}
                className="mt-4 w-1/5 p-4 "
              >
                <motion.svg
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    handleClick("Twitter");
                  }}
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#fff" rx="60" />
                    <rect width="256" height="256" fill="#1D9BF0" rx="60" />
                    <path
                      fill="#fff"
                      d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677c2.918.351 5.85.526 8.79.533a74.154 74.154 0 0 0 45.864-15.839a36.976 36.976 0 0 1-34.5-25.645a36.811 36.811 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.705 36.705 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.814 104.814 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.105 74.105 0 0 0 23.451-8.965a37.061 37.061 0 0 1-16.234 20.424A73.446 73.446 0 0 0 218 72.282a75.023 75.023 0 0 1-18.428 19.13Z"
                    />
                  </g>
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepThreeForm;
