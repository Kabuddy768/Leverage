import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEO from './SEO';

const faqs = [
    {
        question: "What is ERP and why do SMEs in Kenya need it?",
        answer: "Enterprise Resource Planning (ERP) is a comprehensive software system that integrates essential business functions like finance, inventory, sales, and HR into one centralized platform. For Small and Medium Enterprises (SMEs) in Kenya, ERP eliminates manual errors, provides real-time data insights, and streamlines operations, enabling faster growth and a decisive competitive edge in the African market."
    },
    {
        question: "How long does an ERP implementation process usually take?",
        answer: "The timeline for ERP implementation varies based on the size of your organization and the complexity of your business processes. On average, standard deployments for SMEs take between 3 to 6 months. More complex, multi-branch implementations can take 12 months or more. We prioritize a phased approach to ensure smooth adoption and minimal disruption to your daily operations."
    },
    {
        question: "What is the true cost of implementing an ERP system?",
        answer: "The cost of an ERP system goes beyond just the software license. Total Cost of Ownership (TCO) includes implementation consulting, data migration, user training, customization, and ongoing support. While this requires an upfront investment, the long-term ROI through cost reduction, efficiency gains, and minimized revenue leakage heavily outweighs the initial expenditure. We offer scalable options suited to various budgets."
    },
    {
        question: "Which ERP software (Sage 200, Palladium, or IQ Retail) is right for my business?",
        answer: "The right choice depends on your specific industry and operational needs. Palladium Accounting is excellent for robust transactional processing and SME growth. IQ Retail is specifically engineered for high-volume retail, point-of-sale, and multi-branch management. Sage 200 Evolution serves as a powerful enterprise-grade solution offering total financial control and advanced operational modules. Our expert consultants will conduct a thorough needs assessment to recommend the perfect fit."
    },
    {
        question: "What kind of post-implementation support and training do you provide?",
        answer: "At Office Choice Solutions, we believe adoption is key to success. We provide comprehensive, role-based training before go-live to ensure your team is confident. Post-implementation, we offer continuous localized support, including remote troubleshooting, on-site assistance, and regular software updates to keep your system performing optimally and compliant with local regulations."
    },
    {
        question: "Can your ERP solutions integrate with our existing third-party systems?",
        answer: "Yes, modern ERP systems like Sage 200 Evolution, Palladium, and IQ Retail feature robust API capabilities. We can facilitate secure integrations with your existing tools, such as e-commerce platforms, specialized CRM software, or third-party logistics systems, creating a unified flow of data across your entire enterprise."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-950 text-white">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <SEO
                title="Frequently Asked Questions (FAQ) | Office Choice Solutions"
                description="Find answers to common questions about ERP implementations, Sage 200, Palladium Accounting, IQ Retail, timelines, and costs for Kenyan SMEs."
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Frequently Asked <span className="text-red-500">Questions</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Everything you need to know about implementing the right ERP system for your business.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <article
                            key={index}
                            className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-zinc-900 border-red-500/50' : 'bg-zinc-950 hover:bg-zinc-900'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <h2 className="text-lg md:text-xl font-semibold pr-8">{faq.question}</h2>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-red-500/20 text-red-500' : 'bg-white/5 text-zinc-400'}`}>
                                    {openIndex === index ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                                </div>
                            </button>

                            <div
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="p-6 pt-0 text-zinc-400 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
                    <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
                    <p className="text-zinc-400 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition-colors">
                        Contact Support
                    </a>
                </div>
            </div>
        </main>
    );
}
