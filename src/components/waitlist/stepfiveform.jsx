import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import Icon from "./stepfiveicon";

const StepFiveForm = ({ data, activeStep }) => {
  if (!data && activeStep !== 5) {
    return null;
  }
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const confettiGun = () => {
    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
    };

    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    let interval = setInterval(() => {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };

  return (
    <section>
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
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      transition: { type: "spring" },
                    }}
                    className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                  >
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#2B3B47"
                            d="M384.619 132.759a9.786 9.786 0 0 1-9.786 9.786c-53.909 0-100.22-33.129-119.662-80.093c-19.443 46.965-65.754 80.093-119.664 80.093c-5.405 0-9.786-4.381-9.786-9.786s4.381-9.786 9.786-9.786c60.586 0 109.877-49.291 109.877-109.877c0-5.405 4.381-9.786 9.786-9.786s9.787 4.381 9.787 9.786c0 60.586 49.29 109.877 109.876 109.877a9.786 9.786 0 0 1 9.786 9.786z"
                          />
                          <path
                            fill="#FFB636"
                            d="M1.265 227.373c0-66.976 54.295-121.271 121.271-121.271s121.271 54.295 121.271 121.271m266.928 0c0-66.976-54.295-121.271-121.271-121.271s-121.271 54.295-121.271 121.271"
                          />
                          <path
                            fill="#FFD469"
                            d="M37.587 227.373c0-66.976 72.099-121.271 84.949-121.271S84.12 160.397 84.12 227.373m266.928 0c0-66.976 51.266-121.271 38.416-121.271s-84.949 54.295-84.949 121.271"
                          />
                          <path
                            fill="#A06C33"
                            d="M122.536 250.252c-66.976 0-121.271-8.901-121.271-19.88c0-10.98 54.295-19.88 121.271-19.88s121.271 8.901 121.271 19.88s-54.295 19.88-121.271 19.88zm388.199-19.88c0-10.98-54.295-19.88-121.271-19.88s-121.271 8.901-121.271 19.88c0 10.98 54.295 19.88 121.271 19.88s121.271-8.901 121.271-19.88z"
                          />
                          <path
                            fill="#FFB636"
                            d="M277.001 332.669c0 7.738-6.273 14.011-14.011 14.011s-14.011-6.273-14.011-14.011s6.273-14.011 14.011-14.011s14.011 6.274 14.011 14.011zM341.94 468.19c-6.828 0-12.363 5.535-12.363 12.363c0 6.828 5.535 12.363 12.363 12.363c6.828 0 12.363-5.535 12.363-12.363c0-6.827-5.535-12.363-12.363-12.363zM70.596 404.686c-6.828 0-12.363 5.535-12.363 12.363c0 6.828 5.535 12.363 12.363 12.363c6.828 0 12.363-5.535 12.363-12.363c0-6.828-5.535-12.363-12.363-12.363z"
                          />
                          <path
                            fill="#BEA4FF"
                            d="M151.693 475.554c0 8.939-7.247 16.186-16.186 16.186s-16.186-7.247-16.186-16.186s7.247-16.186 16.186-16.186c8.94-.001 16.186 7.246 16.186 16.186zM404.11 238.718c-5.911-6.059-14.208-10.141-23.364-11.494c-5.341-.792-10.332 2.905-11.124 8.259c-.791 5.353 2.906 10.333 8.259 11.124c4.866.719 9.314 2.831 12.205 5.793c1.295 1.328 3.4 4.013 2.947 7.079c-.453 3.066-3.245 5.027-4.869 5.923c-3.625 2.001-8.492 2.733-13.359 2.015c-19.888-2.936-38.048 8.03-40.478 24.455c-2.428 16.424 11.779 32.179 31.67 35.12c.104.015.206.011.31.023c9.652 1.544 15.567 7.947 14.847 12.816c-.453 3.065-3.245 5.027-4.869 5.923c-3.625 2-8.492 2.736-13.359 2.015c-19.887-2.938-38.048 8.03-40.478 24.455c-2.428 16.424 11.779 32.179 31.67 35.12c.485.071.968.106 1.445.106c4.776 0 8.959-3.498 9.679-8.365c.791-5.352-2.906-10.332-8.259-11.124c-9.836-1.454-15.88-7.951-15.152-12.871c.728-4.922 8.39-9.399 18.229-7.938c2.191.324 4.382.484 6.548.484c6.878 0 13.506-1.616 19.143-4.727c8.164-4.505 13.553-11.872 14.786-20.213c2.428-16.424-11.779-32.179-31.67-35.12c-.131-.019-.26-.024-.391-.038c-9.603-1.567-15.484-7.946-14.767-12.8c.728-4.922 8.392-9.397 18.229-7.938c2.192.324 4.382.484 6.548.484c6.879 0 13.506-1.616 19.143-4.727c8.164-4.505 13.553-11.872 14.786-20.213c1.233-8.341-1.794-16.952-8.305-23.626z"
                          />
                          <path
                            fill="#FF6E83"
                            d="M288.333 433.236c0 8.939-7.247 16.186-16.186 16.186s-16.186-7.247-16.186-16.186s7.247-16.186 16.186-16.186c8.939-.001 16.186 7.246 16.186 16.186zM120.579 268.85c-6.291-6.119-14.986-10.123-24.484-11.273c-.133-.016-.264-.017-.396-.028c-8.554-1.181-14.349-6.623-13.841-10.816c.746-6.157-3.641-11.753-9.797-12.499c-6.151-.74-11.753 3.641-12.499 9.797c-2.127 17.559 12.731 33.317 33.827 35.874c.118.014.233.011.35.021c4.442.605 8.503 2.419 11.18 5.023c1.139 1.108 3.006 3.336 2.708 5.801c-.298 2.463-2.644 4.18-4.015 4.984c-3.306 1.938-7.826 2.733-12.405 2.177c-9.5-1.153-18.898.659-26.468 5.099c-8.432 4.944-13.881 12.838-14.95 21.655c-2.128 17.56 12.73 33.317 33.826 35.875c.459.056.915.083 1.366.083c5.598 0 10.443-4.182 11.133-9.879c.747-6.157-3.64-11.753-9.796-12.499c-8.772-1.063-14.75-6.62-14.234-10.877c.299-2.464 2.644-4.181 4.016-4.985c3.305-1.938 7.827-2.733 12.404-2.177c1.867.227 3.729.338 5.575.338c7.547 0 14.811-1.869 20.893-5.437c8.433-4.944 13.881-12.838 14.95-21.655c1.069-8.819-2.336-17.786-9.343-24.602zm333.116 229.3c5.186-3.4 6.633-10.361 3.231-15.548c-37.634-57.386-8.78-97.837 8.458-122.005c2.097-2.939 4.077-5.716 5.692-8.206c3.375-5.203 1.894-12.157-3.31-15.532s-12.157-1.893-15.532 3.31c-1.346 2.075-3.102 4.536-5.135 7.387c-17.856 25.035-55.014 77.129-8.954 147.363a11.221 11.221 0 0 0 9.401 5.072a11.17 11.17 0 0 0 6.149-1.841z"
                          />
                          <path
                            fill="#59CAFC"
                            d="M234.634 285.982c0 6.193-5.02 11.213-11.213 11.213s-11.213-5.02-11.213-11.213s5.02-11.213 11.213-11.213s11.213 5.02 11.213 11.213zm239.051-18.867c-6.012 0-10.885 4.874-10.885 10.885s4.873 10.885 10.885 10.885S484.57 284.011 484.57 278s-4.874-10.885-10.885-10.885zM161.53 431.654c1.691-1.831 3.719-3.888 5.867-6.066c10.897-11.054 25.822-26.191 32.28-46.893c7.758-24.87 1.097-51.3-19.8-78.557c-3.627-4.732-10.402-5.624-15.132-1.999c-4.73 3.627-5.625 10.401-1.999 15.132c16.61 21.665 21.95 40.963 16.325 58.995c-4.899 15.703-17.179 28.159-27.045 38.167c-2.274 2.307-4.422 4.485-6.352 6.574c-4.044 4.379-3.773 11.207.605 15.251a10.75 10.75 0 0 0 7.321 2.865a10.76 10.76 0 0 0 7.93-3.469z"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Agora você faz parte da lista de espera para usar os
                          recursos exclusivos do RochaGPT !
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Gostaríamos de expressar nossa sincera gratidão por
                            ter entrado em nossa lista de espera. Valorizamos
                            muito o seu interesse e confiança no RochaGPT. Sua
                            decisão de se juntar à nossa waitlist é extremamente
                            importante para nós, pois nos ajuda a entender o
                            nível de interesse e nos preparar adequadamente para
                            fornecer a melhor experiência possível.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                      onClick={() => {
                        setOpen(false);
                        confettiGun();
                      }}
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
      {!open && (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { type: "tween" } }}
            className="mx-auto transform justify-center rounded-lg bg-white text-left align-bottom transition-all sm:w-full sm:max-w-7xl sm:align-middle"
          >
            <div className="mx-auto grid grid-cols-1 flex-wrap items-center justify-center rounded-xl shadow-xl lg:grid-cols-2">
              <div className="w-full px-6 py-3">
                <div>
                  <div className="mt-3 text-left sm:mt-5">
                    <div className="inline-flex w-full items-center">
                      <motion.h3
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", delay: 0.8 }}
                        className="flex items-center justify-evenly text-lg font-bold leading-6 text-neutral-600 lg:text-5xl"
                      >
                        <svg
                          className="mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#2B3B47"
                            d="M384.619 132.759a9.786 9.786 0 0 1-9.786 9.786c-53.909 0-100.22-33.129-119.662-80.093c-19.443 46.965-65.754 80.093-119.664 80.093c-5.405 0-9.786-4.381-9.786-9.786s4.381-9.786 9.786-9.786c60.586 0 109.877-49.291 109.877-109.877c0-5.405 4.381-9.786 9.786-9.786s9.787 4.381 9.787 9.786c0 60.586 49.29 109.877 109.876 109.877a9.786 9.786 0 0 1 9.786 9.786z"
                          />
                          <path
                            fill="#FFB636"
                            d="M1.265 227.373c0-66.976 54.295-121.271 121.271-121.271s121.271 54.295 121.271 121.271m266.928 0c0-66.976-54.295-121.271-121.271-121.271s-121.271 54.295-121.271 121.271"
                          />
                          <path
                            fill="#FFD469"
                            d="M37.587 227.373c0-66.976 72.099-121.271 84.949-121.271S84.12 160.397 84.12 227.373m266.928 0c0-66.976 51.266-121.271 38.416-121.271s-84.949 54.295-84.949 121.271"
                          />
                          <path
                            fill="#A06C33"
                            d="M122.536 250.252c-66.976 0-121.271-8.901-121.271-19.88c0-10.98 54.295-19.88 121.271-19.88s121.271 8.901 121.271 19.88s-54.295 19.88-121.271 19.88zm388.199-19.88c0-10.98-54.295-19.88-121.271-19.88s-121.271 8.901-121.271 19.88c0 10.98 54.295 19.88 121.271 19.88s121.271-8.901 121.271-19.88z"
                          />
                          <path
                            fill="#FFB636"
                            d="M277.001 332.669c0 7.738-6.273 14.011-14.011 14.011s-14.011-6.273-14.011-14.011s6.273-14.011 14.011-14.011s14.011 6.274 14.011 14.011zM341.94 468.19c-6.828 0-12.363 5.535-12.363 12.363c0 6.828 5.535 12.363 12.363 12.363c6.828 0 12.363-5.535 12.363-12.363c0-6.827-5.535-12.363-12.363-12.363zM70.596 404.686c-6.828 0-12.363 5.535-12.363 12.363c0 6.828 5.535 12.363 12.363 12.363c6.828 0 12.363-5.535 12.363-12.363c0-6.828-5.535-12.363-12.363-12.363z"
                          />
                          <path
                            fill="#BEA4FF"
                            d="M151.693 475.554c0 8.939-7.247 16.186-16.186 16.186s-16.186-7.247-16.186-16.186s7.247-16.186 16.186-16.186c8.94-.001 16.186 7.246 16.186 16.186zM404.11 238.718c-5.911-6.059-14.208-10.141-23.364-11.494c-5.341-.792-10.332 2.905-11.124 8.259c-.791 5.353 2.906 10.333 8.259 11.124c4.866.719 9.314 2.831 12.205 5.793c1.295 1.328 3.4 4.013 2.947 7.079c-.453 3.066-3.245 5.027-4.869 5.923c-3.625 2.001-8.492 2.733-13.359 2.015c-19.888-2.936-38.048 8.03-40.478 24.455c-2.428 16.424 11.779 32.179 31.67 35.12c.104.015.206.011.31.023c9.652 1.544 15.567 7.947 14.847 12.816c-.453 3.065-3.245 5.027-4.869 5.923c-3.625 2-8.492 2.736-13.359 2.015c-19.887-2.938-38.048 8.03-40.478 24.455c-2.428 16.424 11.779 32.179 31.67 35.12c.485.071.968.106 1.445.106c4.776 0 8.959-3.498 9.679-8.365c.791-5.352-2.906-10.332-8.259-11.124c-9.836-1.454-15.88-7.951-15.152-12.871c.728-4.922 8.39-9.399 18.229-7.938c2.191.324 4.382.484 6.548.484c6.878 0 13.506-1.616 19.143-4.727c8.164-4.505 13.553-11.872 14.786-20.213c2.428-16.424-11.779-32.179-31.67-35.12c-.131-.019-.26-.024-.391-.038c-9.603-1.567-15.484-7.946-14.767-12.8c.728-4.922 8.392-9.397 18.229-7.938c2.192.324 4.382.484 6.548.484c6.879 0 13.506-1.616 19.143-4.727c8.164-4.505 13.553-11.872 14.786-20.213c1.233-8.341-1.794-16.952-8.305-23.626z"
                          />
                          <path
                            fill="#FF6E83"
                            d="M288.333 433.236c0 8.939-7.247 16.186-16.186 16.186s-16.186-7.247-16.186-16.186s7.247-16.186 16.186-16.186c8.939-.001 16.186 7.246 16.186 16.186zM120.579 268.85c-6.291-6.119-14.986-10.123-24.484-11.273c-.133-.016-.264-.017-.396-.028c-8.554-1.181-14.349-6.623-13.841-10.816c.746-6.157-3.641-11.753-9.797-12.499c-6.151-.74-11.753 3.641-12.499 9.797c-2.127 17.559 12.731 33.317 33.827 35.874c.118.014.233.011.35.021c4.442.605 8.503 2.419 11.18 5.023c1.139 1.108 3.006 3.336 2.708 5.801c-.298 2.463-2.644 4.18-4.015 4.984c-3.306 1.938-7.826 2.733-12.405 2.177c-9.5-1.153-18.898.659-26.468 5.099c-8.432 4.944-13.881 12.838-14.95 21.655c-2.128 17.56 12.73 33.317 33.826 35.875c.459.056.915.083 1.366.083c5.598 0 10.443-4.182 11.133-9.879c.747-6.157-3.64-11.753-9.796-12.499c-8.772-1.063-14.75-6.62-14.234-10.877c.299-2.464 2.644-4.181 4.016-4.985c3.305-1.938 7.827-2.733 12.404-2.177c1.867.227 3.729.338 5.575.338c7.547 0 14.811-1.869 20.893-5.437c8.433-4.944 13.881-12.838 14.95-21.655c1.069-8.819-2.336-17.786-9.343-24.602zm333.116 229.3c5.186-3.4 6.633-10.361 3.231-15.548c-37.634-57.386-8.78-97.837 8.458-122.005c2.097-2.939 4.077-5.716 5.692-8.206c3.375-5.203 1.894-12.157-3.31-15.532s-12.157-1.893-15.532 3.31c-1.346 2.075-3.102 4.536-5.135 7.387c-17.856 25.035-55.014 77.129-8.954 147.363a11.221 11.221 0 0 0 9.401 5.072a11.17 11.17 0 0 0 6.149-1.841z"
                          />
                          <path
                            fill="#59CAFC"
                            d="M234.634 285.982c0 6.193-5.02 11.213-11.213 11.213s-11.213-5.02-11.213-11.213s5.02-11.213 11.213-11.213s11.213 5.02 11.213 11.213zm239.051-18.867c-6.012 0-10.885 4.874-10.885 10.885s4.873 10.885 10.885 10.885S484.57 284.011 484.57 278s-4.874-10.885-10.885-10.885zM161.53 431.654c1.691-1.831 3.719-3.888 5.867-6.066c10.897-11.054 25.822-26.191 32.28-46.893c7.758-24.87 1.097-51.3-19.8-78.557c-3.627-4.732-10.402-5.624-15.132-1.999c-4.73 3.627-5.625 10.401-1.999 15.132c16.61 21.665 21.95 40.963 16.325 58.995c-4.899 15.703-17.179 28.159-27.045 38.167c-2.274 2.307-4.422 4.485-6.352 6.574c-4.044 4.379-3.773 11.207.605 15.251a10.75 10.75 0 0 0 7.321 2.865a10.76 10.76 0 0 0 7.93-3.469z"
                          />
                        </svg>
                        Obrigado !
                      </motion.h3>
                    </div>
                    <div className="mt-4 flex flex-col items-start text-base text-gray-500">
                      <motion.p
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", delay: 0.8 }}
                      >
                        Agradecemos por entrar em nossa waitlist. Valorizamos
                        sua confiança e interesse. Estamos ansiosos para
                        compartilhar novidades e oferecer uma ótima experiência.
                        Conte conosco para qualquer dúvida. Obrigado(a) por se
                        juntar a nós! Atenciosamente,
                      </motion.p>
                      <motion.p
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", delay: 0.8 }}
                        className="mt-4 text-sm font-bold leading-4 "
                      >
                        Equipe RochaGPT
                      </motion.p>
                    </div>
                  </div>
                  <motion.p
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 0.8 }}
                    className="mt-8 text-xl font-bold leading-4 text-gray-600 "
                  >
                    Compartilhe o RochaGPT nas redes sociais:
                  </motion.p>
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
                    className="flex"
                  >
                    {/* <button id="fire-button" onClick={confettiGun}>
                      <span className="bullet"></span>
                    </button> */}
                    <div className="flex w-full flex-wrap text-left">
                      <div className="mt-4 w-1/5 p-4 ">
                        <a
                          target="_blank"
                          href="https://www.facebook.com/sharer/sharer.php?u=https%3A//rochagpt.ai/waitlist"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="#1877F2"
                              d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                            />
                            <path
                              fill="#FFF"
                              d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="mt-4 w-1/5 p-4 ">
                        <a
                          target="_blank"
                          href="https://twitter.com/intent/tweet?text=%F0%9F%8E%89%F0%9F%8C%9F%20Estou%20muito%20feliz%20por%20ter%20entrado%20na%20waitlist%20do%20novo%20RochaGPT!%20%C3%89%20uma%20oportunidade%20incr%C3%ADvel%20de%20explorar%20todo%20o%20potencial%20da%20intelig%C3%AAncia%20artificial%20avan%C3%A7ada.%20%F0%9F%9A%80%E2%9C%A8%0Ahttps%3A//rochagpt.ai/waitlist%0A"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 256 256"
                          >
                            <g fill="none">
                              <rect
                                width="256"
                                height="256"
                                fill="#fff"
                                rx="60"
                              />
                              <rect
                                width="256"
                                height="256"
                                fill="#1D9BF0"
                                rx="60"
                              />
                              <path
                                fill="#fff"
                                d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677c2.918.351 5.85.526 8.79.533a74.154 74.154 0 0 0 45.864-15.839a36.976 36.976 0 0 1-34.5-25.645a36.811 36.811 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.705 36.705 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.814 104.814 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.105 74.105 0 0 0 23.451-8.965a37.061 37.061 0 0 1-16.234 20.424A73.446 73.446 0 0 0 218 72.282a75.023 75.023 0 0 1-18.428 19.13Z"
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                      <div className="mt-4 w-1/5 p-4 ">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//rochagpt.ai/waitlist"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 256 256"
                          >
                            <g fill="none">
                              <rect
                                width="256"
                                height="256"
                                fill="#fff"
                                rx="60"
                              />
                              <rect
                                width="256"
                                height="256"
                                fill="#0A66C2"
                                rx="60"
                              />
                              <path
                                fill="#fff"
                                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="order-first w-full lg:block">
                <Icon />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default StepFiveForm;
