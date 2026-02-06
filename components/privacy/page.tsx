"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, ArrowUp, Mail, Phone } from "lucide-react";
// Using plain React - no Next.js Link needed

export default function PrivacyPolicyPage() {
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
    { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "data-security", title: "Data Security" },
    { id: "your-rights", title: "Your Rights" },
    { id: "cookies", title: "Cookies" },
    { id: "third-party", title: "Third-Party Services" },
    { id: "children", title: "Children's Privacy" },
    { id: "changes", title: "Changes to This Policy" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-4 border border-blue-500/20">
              Last Updated: January 1, 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is important to us. This policy explains how Office Choice Solutions collects, uses, and protects your personal information.
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
                <Shield size={16} className="text-blue-500" />
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${activeSection === section.id
                      ? "bg-blue-500/10 text-blue-500 font-medium"
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

            {/* Section: Introduction */}
            <section id="introduction" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Office Choice Solutions ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our ERP software and services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This policy complies with the Kenya Data Protection Act, 2019, and applies to all users of our services in Kenya and internationally. By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>
            </section>

            {/* Section: Information We Collect */}
            <section id="information-we-collect" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Name, email address, and phone number</li>
                  <li>Company name and business details</li>
                  <li>Billing and payment information</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Usage Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We automatically collect certain information about your device and how you interact with our services:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Log data (IP address, browser type, pages visited)</li>
                  <li>Device information (operating system, device identifiers)</li>
                  <li>Usage patterns and preferences</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            {/* Section: How We Use Your Information */}
            <section id="how-we-use" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Send marketing communications (with your consent)</li>
                </ul>
              </div>
            </section>

            {/* Section: Data Security */}
            <section id="data-security" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>AES-256 encryption for data at rest and in transit</li>
                  <li>SOC2 Type II compliance and regular security audits</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Regular security training for our staff</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                </p>
              </div>
            </section>

            {/* Section: Your Rights */}
            <section id="your-rights" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under the Kenya Data Protection Act, 2019, you have the following rights:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Right to Access:</strong> Request access to your personal data</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
                  <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Right to Object:</strong> Object to processing of your data</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  To exercise any of these rights, please contact us using the details in the Contact Us section. You also have the right to lodge a complaint with the Office of the Data Protection Commissioner in Kenya.
                </p>
              </div>
            </section>

            {/* Section: Cookies */}
            <section id="cookies" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For more detailed information about the cookies we use, please see our <a href="#cookie-policy" className="text-blue-500 hover:text-blue-400 underline">Cookie Policy</a>.
                </p>
              </div>
            </section>

            {/* Section: Third-Party Services */}
            <section id="third-party" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may employ third-party companies and individuals to facilitate our service, provide service-related functions, or assist us in analyzing how our service is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our service may contain links to other websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
                </p>
              </div>
            </section>

            {/* Section: Children's Privacy */}
            <section id="children" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
                </p>
              </div>
            </section>

            {/* Section: Changes to This Policy */}
            <section id="changes" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>
            </section>

            {/* Section: Contact Us */}
            <section id="contact" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-blue-500 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:info@officechoicesolutions.co.ke" className="text-blue-500 hover:text-blue-400">
                        info@officechoicesolutions.co.ke
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-blue-500 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+254721123536" className="text-blue-500 hover:text-blue-400">
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
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
}