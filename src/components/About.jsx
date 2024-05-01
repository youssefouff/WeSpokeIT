import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-10 " id="about">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center my-8 tracking-wide">
        About
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          WeSpokeIT
        </span>
      </h2>
      <p className="mt-2 text-lg text-center text-neutral-400 max-w-6xl">
       At WeSpokeIT, we specialize in providing automated tools and services that streamline financial operations.
       Our goal is to revolutionize the finance industry by introducing innovative tools and technologies. 
       With our advanced reconciliation platform, we empower businesses to optimize their processes and stay ahead in today's dynamic financial landscape. We are committed to driving efficiency, accuracy, and reliability in financial operations, ensuring our clients have the tools they need to succeed. Join us as we pave the way for the future of finance, one innovative solution at a time.
      </p>
    </div>
  )
}

export default About
