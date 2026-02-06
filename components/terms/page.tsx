"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowUp, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track scroll position for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const sections = [
    { id: "agreement", title: "Agreement to Terms" },
    { id: "services", title: "Our Services" },
    { id: "user-responsibilities", title: "User Responsibilities" },
    { id: "payment", title: "Payment Terms" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "limitation", title: "Limitation of Liability" },
    { id: "termination", title: "Termination" },
    { id: "governing-law", title: "Governing Law" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium mb-4 border border-purple-500/20">
              Last Updated: January 1, 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before using our services. By accessing or using Office Choice Solutions, you agree to be bound by these terms.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* LEFT COLUMN: Table of Contents (Sticky) */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block lg:col-span-1"
          >
            <div className="sticky top-24 bg-card border border-border rounded-2xl p-6 shadow-lg">
              <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileText size={16} className="text-purple-500" />
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                      activeSection === section.id
                        ? "bg-purple-500/10 text-purple-500 font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* RIGHT COLUMN: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >

            {/* Section: Agreement to Terms */}
            <section id="agreement" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms of Service constitute a legally binding agreement between you and Office Choice Solutions concerning your access to and use of our ERP software, websites, and related services.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you must not access or use our services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You represent that you are at least 18 years of age and have the legal capacity to enter into this agreement. If you are accessing our services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                </p>
              </div>
            </section>

            {/* Section: Our Services */}
            <section id="services" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Services</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Office Choice Solutions provides enterprise resource planning (ERP) software solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Accounting and financial management systems</li>
                  <li>Inventory and supply chain management</li>
                  <li>Retail point-of-sale solutions</li>
                  <li>Manufacturing and production planning tools</li>
                  <li>Cloud-based data storage and analytics</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of our services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Service availability may be subject to maintenance windows, and we will make reasonable efforts to notify you of scheduled downtime in advance.
                </p>
              </div>
            </section>

            {/* Section: User Responsibilities */}
            <section id="user-responsibilities" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access to your account</li>
                  <li>Use our services only for lawful purposes and in compliance with all applicable laws</li>
                  <li>Not attempt to gain unauthorized access to our systems or networks</li>
                  <li>Not interfere with or disrupt the integrity or performance of our services</li>
                  <li>Not use our services to transmit malware, viruses, or harmful code</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  You are solely responsible for all activity that occurs under your account. We reserve the right to suspend or terminate accounts that violate these responsibilities.
                </p>
              </div>
            </section>

            {/* Section: Payment Terms */}
            <section id="payment" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Subscription Fees</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our services are provided on a subscription basis. Fees are billed in advance on a monthly or annual basis, depending on your selected plan. All fees are stated in Kenyan Shillings (KES) unless otherwise specified.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Payment Methods</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We accept payment via credit card, debit card, bank transfer, and mobile money (M-PESA). By providing payment information, you authorize us to charge the applicable fees to your chosen payment method.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Refunds</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Subscription fees are non-refundable except as required by law or as explicitly stated in your service agreement. If you cancel your subscription, you will continue to have access until the end of your current billing period.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Price Changes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify our pricing with 30 days' notice. Continued use of our services after a price change constitutes acceptance of the new pricing.
                </p>
              </div>
            </section>

            {/* Section: Intellectual Property */}
            <section id="intellectual-property" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content, features, and functionality of our services, including but not limited to software, text, graphics, logos, and design, are owned by Office Choice Solutions or our licensors and are protected by Kenyan and international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You are granted a limited, non-exclusive, non-transferable license to access and use our services for your internal business purposes only. You may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Reproduce, modify, or create derivative works of our software</li>
                  <li>Reverse engineer, decompile, or disassemble our services</li>
                  <li>Remove or alter any proprietary notices or labels</li>
                  <li>Sell, rent, lease, or sublicense our services to third parties</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  You retain all rights to the data you input into our services. We do not claim ownership of your business data.
                </p>
              </div>
            </section>

            {/* Section: Limitation of Liability */}
            <section id="limitation" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To the maximum extent permitted by Kenyan law, Office Choice Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Your use or inability to use our services</li>
                  <li>Unauthorized access to or alteration of your data</li>
                  <li>Statements or conduct of any third party on our services</li>
                  <li>Any other matter relating to our services</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our total liability to you for all claims arising from your use of our services shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We provide our services "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
                </p>
              </div>
            </section>

            {/* Section: Termination */}
            <section id="termination" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may terminate your account at any time by contacting us or using the account cancellation feature in your dashboard. Upon termination, your right to access our services will immediately cease.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may suspend or terminate your access to our services immediately, without prior notice or liability, for any reason, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Breach of these Terms of Service</li>
                  <li>Non-payment of fees</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>At our sole discretion for any other reason</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Upon termination, we will provide you with a reasonable opportunity to export your data. After 30 days, we may permanently delete your data from our systems.
                </p>
              </div>
            </section>

            {/* Section: Governing Law */}
            <section id="governing-law" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law and Dispute Resolution</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya, without regard to its conflict of law provisions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Kenya.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Before initiating legal proceedings, we encourage you to contact us to seek an amicable resolution. Many disputes can be resolved through good-faith negotiation.
                </p>
              </div>
            </section>

            {/* Section: Changes to Terms */}
            <section id="changes" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to These Terms</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For significant changes, we will provide at least 30 days' notice via email or through a prominent notice on our platform before the changes take effect.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Your continued use of our services after any changes to these Terms constitutes acceptance of those changes. If you do not agree to the modified Terms, you must stop using our services.
                </p>
              </div>
            </section>

            {/* Section: Contact Us */}
            <section id="contact" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-purple-500 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:info@officechoicesolutions.co.ke" className="text-purple-500 hover:text-purple-400">
                        info@officechoicesolutions.co.ke
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-purple-500 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+254721123536" className="text-purple-500 hover:text-purple-400">
                        +254 721 123 536
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
}