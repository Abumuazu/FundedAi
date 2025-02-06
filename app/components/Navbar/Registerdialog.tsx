import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

const Register = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
        <div className="hidden lg:block">
          <button
            className="text-[#ec5290] text-xl font-medium  py-6 px-12 transition duration-150 ease-in-out bg-white hover:text-white rounded-full hover:bg-[#D33B79] ttty w-full bg-blue hover:text-black group-hover:bg-cornflowerblue group-hover:border-cornflowerblue border-2 border-blue rounded-full"
            onClick={openModal}
          >
            Get Started
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center py-12 px-0 sm:px-6 lg:px-8">
                    <div className="w-full max-w-lg space-y-8">
                      <div>
                        <img
                          className="mx-auto h-12 w-auto"
                          src="/assets/logo/logo.svg"
                          alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                          Gain early access to 50% discounttt
                        </h2>
                      </div>
                      <div className="w-full max-w-md mx-auto">
                        <iframe
                          src="https://docs.google.com/forms/d/e/1FAIpQLSf15wa1fThAfM3LSonN6yOtWIk7pcs6u7KeHomgpnQjgaWB_A/viewform?embedded=true"
                          className="w-full aspect-[3/4]"
                          frameBorder="0"
                          loading="lazy"
                        >
                          Loading...
                        </iframe>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center text-[#ec5290] text-lg sm:text-xl font-medium  sm:py-3 px-6 sm:px-6 transition duration-150 ease-in-out bg-white hover:text-white rounded-[40px] hover:bg-[#D33B79] ttty bg-blue hover:text-black group-hover:bg-cornflowerblue group-hover:border-cornflowerblue border-2 border-blue m-4 w-1/3"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Register;
