import React from "react";
import data from './data';
import langData from "../../lang/lang-fa";
import ServiceCard from "../../components/servicesCard/ServicesCard";

function Services() {
  return (
    <section className="pt-8 bg-gradiant-top-bottom">
      <header className="text-center">
        <div className="relative inline-block px-8 text-center">
          <p className="absolute right-0 w-48 rounded-sm h-7 bg-semi-transparent-blue"></p>
          <span className="relative text-4xl text-gray-50 z-2">
            {langData.services.title}
          </span>
        </div>
        <p className="mt-4 text-gray-400">{langData.services.desc}</p>
      </header>
      <div className="flex flex-row flex-wrap justify-between w-full mt-16 sm:justify-center lg:justify-between md:justify-between">
        {data.map((item, index) => (
          <ServiceCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Services;