import { features } from "../constants";

const Services = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[400px]" id="services"> 
      <div className="text-center">
        <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Services & Tools
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-5 lg:mt-5 tracking-wide">
          Discover our{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            Tools
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index}>
            <a href={feature.href} className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 text-xl">{feature.text}</h5>
                <p className="text-md p-2 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;