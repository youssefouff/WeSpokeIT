import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-10 border-b border-neutral-800 text-center" id="pricing">
        <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Pricing
        </span>
      <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center my-8 tracking-wide">
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">Pricing Plans</span>
      </h2>
      <div className="flex flex-wrap mr-5 ml-5 mb-9">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/2 p-3">
            <div className="p-5 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">{option.per}</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="text-sm text-white-900 ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-sm lg:text-xl sm:text-sm hover:bg-green-700 border border-green-700 rounded-lg transition duration-200"
              >
                Subscribe & Download
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;