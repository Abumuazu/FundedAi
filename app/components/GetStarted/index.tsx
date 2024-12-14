import Image from "next/image";
import Register from "../Navbar/Registerdialog";

const GetStarted = () => {
  return (
    <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
        <div className="col-span-6 flex justify-center mt-10 lg:mt-0 rounded-md">
          <Image
            src="/assets/banner/click.png"
            alt="business"
            width={500}
            height={500}
          />
        </div>

        <div className="col-span-5 flex flex-col justify-center mb-32">
          <h2 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143">
            Your Gateway to Global Opportunities
          </h2>
          <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3">
            Your next big opportunity is a click away. Sign up and let FundedAI
            take you further.
          </h3>
          <div className="pt-8 mx-auto lg:mx-0">
          {/* <Register /> */}
          </div>
        </div>
      </div>
    </div>

  );
};

export default GetStarted;
