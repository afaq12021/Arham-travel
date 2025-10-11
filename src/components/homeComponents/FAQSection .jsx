import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "Who Are Arham Travels In Dubai?",
            answer: "Arham Travels is a premier tour and travel company based in Dubai, specializing in desert safaris, city tours, and adventure activities. We provide authentic Arabian experiences with professional guides and top-quality service to make your Dubai visit unforgettable."
        },
        {
            id: 2,
            question: "Why Should You Book With Arham Travels?",
            answer: "We offer competitive prices, experienced tour guides, modern vehicles, and exceptional customer service. Our tours are carefully curated to provide you with the best Dubai experience, from thrilling desert adventures to luxurious city tours. We prioritize safety, comfort, and customer satisfaction."
        },
        {
            id: 3,
            question: "Do We Offer Food During The Tour?",
            answer: "Yes, most of our tours include complimentary meals and refreshments. Desert safari packages typically include a traditional BBQ dinner with vegetarian and non-vegetarian options. Beverages and light snacks are also provided during the tours. Please inform us of any dietary restrictions in advance."
        },
        {
            id: 4,
            question: "Is Transportation Free With Arham Travels?",
            answer: "Yes, we provide complimentary pick-up and drop-off services from your hotel or designated location in Dubai for all our tour packages. Our comfortable, air-conditioned vehicles ensure a pleasant journey to and from your destination."
        },
        {
            id: 5,
            question: "Are Our Tours Absolutely Safe?",
            answer: "Absolutely! Safety is our top priority. All our vehicles are regularly maintained and inspected. Our drivers and guides are professionally trained and experienced. We follow strict safety protocols and provide safety equipment for adventure activities. We also have comprehensive insurance coverage for all our tours."
        },
        {
            id: 6,
            question: "Can I Come With My Family (Including Kids)?",
            answer: "Yes, our tours are family-friendly and suitable for all ages. We offer special arrangements for families with children, including child safety seats, kid-friendly meals, and age-appropriate activities. Children under a certain age may receive discounted rates or travel free."
        },
        {
            id: 7,
            question: "Are There Age Restrictions For The Tours?",
            answer: "Most of our tours are suitable for all ages. However, some adventure activities like dune bashing, quad biking, and buggy rides may have age or height restrictions for safety reasons. Children must be accompanied by adults. Please check specific tour requirements when booking."
        },
        {
            id: 8,
            question: "How Do I Book A Tour With Arham Travels?",
            answer: "Booking is easy! You can book directly through our website, call our customer service hotline, or send us a WhatsApp message. Simply choose your desired tour, select the date and number of guests, and complete the payment. You'll receive instant confirmation and all tour details via email."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="md:mt-20 mt-10  px-4 md:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-[40px] font-bold text-[#1CA8CB]">
                        Frequently Asked Questions (FAQs)
                    </h1>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={faq.id}
                            className="border-b-2 border-gray-200 last:border-b-0"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between py-[5px] md:py-3 text-left hover:text-[#1CA8CB] transition-colors duration-300 group"
                            >
                                <span className="text-base md:text-lg font-medium text-gray-900 group-hover:text-[#1CA8CB] pr-8">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <Minus 
                                            size={24} 
                                            className="text-gray-600 transition-transform duration-300"
                                        />
                                    ) : (
                                        <Plus 
                                            size={24} 
                                            className="text-gray-600 group-hover:text-[#1CA8CB] transition-colors duration-300"
                                        />
                                    )}
                                </div>
                            </button>

                            {/* Answer */}
                            <div 
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openIndex === index 
                                        ? 'max-h-96 opacity-100 mb-6' 
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed pr-12">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;