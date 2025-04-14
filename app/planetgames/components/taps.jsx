import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
 <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden p-8 ">


      {/* Tabs navigation */}
      <div className="flex border-b text-gray-400">
        {/* Description Tab */}
        <button
          className={`mr-4 py-2 px-4 border-b-2 font-medium ${
            activeTab === "description"
              ? "border-primary text-primary font-bold"
              : "border-transparent hover:text-primary"
          }`}
          onClick={() => handleTabClick("description")}
        >
          Description
        </button>
  
        {/* Delivery Info Tab */}
        <button
          className={`py-2 px-4 border-b-2 text-gray-500 font-medium ${
            activeTab === "deliveryInfo"
              ? "border-primary text-primary font-bold"
              : "border-transparent hover:text-primary"
          }`}
          onClick={() => handleTabClick("deliveryInfo")}
        >
          Delivery Info
        </button>
      </div>
  
      {/* Tab Panels */}
      <div className="mt-6">
      {activeTab === "description" && (
  <div className="prose max-w-none space-y-10">
    {/* Section 1 */}
    <div>
      <h2 className="text-md font-semibold mb-3"><strong>About PlayStation Network Card (PSN)</strong></h2>
      <p className="text-sm text-gray-700">Add funds to your PlayStation® Network wallet without the need for a credit card...</p>
    </div>

    {/* Section 2 */}
    <div>
      <h2 className="text-md font-semibold mb-3"><strong>HOW TO REDEEM?</strong></h2>
      <ol className="list-decimal pl-6 text-sm text-gray-700 space-y-1">
        <li>Sign in to Playstation Network...</li>
        <li>Head to Playstation Store...</li>
        <li>Enter the PSN card code...</li>
      </ol>
    </div>

    {/* Section 3 */}
    <div>
      <h2 className="text-md font-semibold mb-3"><strong>HOW QUICKLY CAN I RECEIVE THE CARD?</strong></h2>
      <p className="text-sm text-gray-700">Your PSN card will be sent to you instantly...</p>
    </div>

    {/* Section 4 */}
    <div>
      <h2 className="text-md font-semibold mb-3"><strong>WHAT CAN I BUY WITH A PSN CARD?</strong></h2>
      <p className="text-sm text-gray-700">The PSN card will give you full access...</p>
    </div>

    {/* Section 5 */}
    <div>
      <h2 className="text-md font-semibold mb-3"><strong>WHY YOU SHOULD BUY FROM US?</strong></h2>
      <ol className="list-decimal pl-6 text-sm text-gray-700 space-y-1">
        <li>Online Payment via CIB or Edahabia ✅</li>
        <li>Instant Delivery ✅</li>
        <li>High Quality Support ✅</li>
        <li>Guarantee and Safety ✅</li>
      </ol>
    </div>
  </div>
)}

  
  {activeTab === "deliveryInfo" && (
  <div className="space-y-6">
    {/* Feature 1 */}
    <div className="flex items-start space-x-4">
      <div className="text-primary">
        {/* Zap Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap-icon w-6 h-6 text-primary">
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
      </div>
      <div>
        <h4 className="text-sm font-bold text-black">Instant Digital Delivery</h4>
        <p className="mt-1 text-sm text-gray-500">Get immediate access to your digital product...</p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="flex items-start space-x-4">
      <div className="text-primary">
        {/* Mail Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon w-6 h-6 text-primary">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </div>
      <div>
        <h4 className="text-sm font-bold text-black">Email Confirmation</h4>
        <p className="mt-1 text-sm text-gray-500">Receive detailed instructions...</p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="flex items-start space-x-4">
      <div className="text-primary">
        {/* Shield Check Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check-icon w-6 h-6 text-primary">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
      <div>
        <h4 className="text-sm font-bold text-black">Secure Payment</h4>
        <p className="mt-1 text-sm text-gray-500">Your payment is protected...</p>
      </div>
    </div>

    {/* Feature 4 */}
    <div className="flex items-start space-x-4">
      <div className="text-primary">
        {/* Headphones Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones-icon w-6 h-6 text-primary">
          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
        </svg>
      </div>
      <div>
        <h4 className="text-sm font-bold text-black">24/7 Support</h4>
        <p className="mt-1 text-sm text-gray-500">Our support team is always here...</p>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
  
};

export default Tabs;
