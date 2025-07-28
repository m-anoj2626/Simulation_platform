import React from "react";
import PageActions from "../ui/PageActions";

// Define the partner logos array directly
const partners = [
  { name: "TCS", logo: "/tcs.png" },
  { name: "Infosys", logo: "/infosys.png" },
  { name: "Wipro", logo: "/wiprologo.png" },
  { name: "HCL", logo: "/HCL.png" },
  { name: "Tech Mahindra", logo: "/techmah.png" },
  { name: "Accenture", logo: "/Accenture-logo.jpg" },
  { name: "Deloitte", logo: "/deloitte-logo.png" },
  { name: "KPMG", logo: "/KPMG.png" },
  { name: "EY", logo: "/eylogo.png" },
  { name: "PwC", logo: "/pwc-logo.png" },
  { name: "Flipkart", logo: "/flipkart.webp" },
  { name: "Zomato", logo: "/zomato.png" }, 

];

const OurPartners = () => {
  return (
    
    <section className="py-16 bg-gray-100">
        <PageActions/>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
        <p className="text-lg text-gray-600 mb-10">
          Collaborating with industry leaders
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white p-4 shadow-sm rounded-lg flex flex-col items-center justify-center hover:shadow-md transition duration-300 hover:scale-108 ease-in-out"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className=" object-contain mb-2 w-full h-full rounded-3xl"
              />
              <span className="text-gray-800 font-medium text-sm text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
