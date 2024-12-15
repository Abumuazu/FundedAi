import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

const Register2 = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="pt-8 mx-auto lg:mx-0">
        <button className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-[#D33B79] hover:text-white hover:bg-[#D33B79]"
        onClick={openModal}
        >
          Get started
        </button>
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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <img
                          className="mx-auto h-12 w-auto"
                          src="/assets/logo/logo.svg"
                          alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                          Gain early access to 50% discount
                        </h2>
                      </div>
                      <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSf15wa1fThAfM3LSonN6yOtWIk7pcs6u7KeHomgpnQjgaWB_A/viewform?embedded=true"
                        width="400"
                        height="1390"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                      >
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                          Loading...
                        </h2>
                      </iframe>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center text-[#ec5290] text-xl font-medium ml-9 py-6 px-12 transition duration-150 ease-in-out bg-white hover:text-white rounded-full hover:bg-[#D33B79] ttty  bg-blue hover:text-black group-hover:bg-cornflowerblue group-hover:border-cornflowerblue border-2 border-blue rounded-full"
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

export default Register2;
