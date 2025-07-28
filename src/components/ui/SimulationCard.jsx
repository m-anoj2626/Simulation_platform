import { CheckCircle } from "lucide-react";
import { CiPlay1 } from "react-icons/ci";

const SimulationCard = ({ type, index }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100">
      <div className="flex flex-col lg:flex-row">
        <div className={`bg-gradient-to-br ${type.color} p-8 lg:p-12 text-white flex flex-col justify-center`}>
          <div className="flex items-center mb-6">
            <div className={`w-16 h-16 bg-${type.clr}-600 bg-opacity-80 rounded-xl flex items-center justify-center mr-4`}>
               <type.icn className="w-6 h-6 text-white" />

            </div>
            <div>
              <h3 className="text-2xl font-bold">{type.title}</h3>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-sm opacity-90">{type.duration}</span>
                <span className="text-sm opacity-90">•</span>
                <span className="text-sm opacity-90">{type.price}</span>
              </div>
            </div>
          </div>
          <p className="text-lg opacity-90 mb-6">{type.description}</p>
          <p className="text-sm opacity-80 ">
            <strong>Ideal for:</strong> {type.ideal}
          </p>
        </div>
        <div className="p-8 lg:p-12">
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
            <ul className="space-y-3">
              {type.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
            
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Sample Simulations:</h4>
            <ul className="space-y-2">
              {type.examples.map((example, idx) => (
                <li key={idx} className="text-gray-600 flex items-center ">
                <CiPlay1 className="mr-3"/>
                  {example}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Explore {type.title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimulationCard;