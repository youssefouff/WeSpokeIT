
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
          Streamline Your Accounting with
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          Automated Reconciliation
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
         Save time, reduce errors, and optimize your financial workflows. <br></br> Say goodbye to manual reconciliation headaches and hello to automated efficiency.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
