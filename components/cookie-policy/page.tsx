import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cookie, ArrowUp, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookiePolicyPage() {
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
    { id: "what-are-cookies", title: "What Are Cookies?" },
    { id: "how-we-use", title: "How We Use Cookies" },
    { id: "types-of-cookies", title: "Types of Cookies We Use" },
    { id: "third-party", title: "Third-Party Cookies" },
    { id: "manage-cookies", title: "How to Manage Cookies" },
    { id: "changes", title: "Changes to This Policy" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium mb-4 border border-emerald-500/20">
              Last Updated: January 1, 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn how Office Choice Solutions uses cookies and similar technologies to improve your experience on our platform.
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
                <Cookie size={16} className="text-emerald-500" />
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${activeSection === section.id
                      ? "bg-emerald-500/10 text-emerald-500 font-medium"
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

            {/* Section: What Are Cookies */}
            <section id="what-are-cookies" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you close your browser, while session cookies are deleted when you close your browser.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We use both types of cookies to enhance your experience on our platform, remember your preferences, and analyze how you use our services.
                </p>
              </div>
            </section>

            {/* Section: How We Use Cookies */}
            <section id="how-we-use" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Office Choice Solutions uses cookies for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Authentication:</strong> To verify your identity when you log in to your account</li>
                  <li><strong>Security:</strong> To protect your account from unauthorized access and detect fraudulent activity</li>
                  <li><strong>Preferences:</strong> To remember your settings, such as language and theme preferences</li>
                  <li><strong>Analytics:</strong> To understand how you use our services and improve our platform</li>
                  <li><strong>Performance:</strong> To monitor and improve the speed and functionality of our services</li>
                  <li><strong>Advertising:</strong> To show you relevant content and measure the effectiveness of our marketing campaigns</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  We only use cookies that are necessary for the operation of our services or that you have consented to.
                </p>
              </div>
            </section>

            {/* Section: Types of Cookies */}
            <section id="types-of-cookies" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">1. Strictly Necessary Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies are essential for our website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies as our services would not work without them.
                </p>
                <div className="bg-secondary/30 rounded-lg p-4 mb-4">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Examples:</strong></p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Session authentication cookies</li>
                    <li>Security tokens for CSRF protection</li>
                    <li>Load balancer cookies</li>
                  </ul>
                </div>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Functional Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies allow us to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features. They may be set by us or by third-party providers whose services we use.
                </p>
                <div className="bg-secondary/30 rounded-lg p-4 mb-4">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Examples:</strong></p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Dark mode / light mode preference</li>
                    <li>Language selection</li>
                    <li>Dashboard layout customization</li>
                  </ul>
                </div>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3. Analytics Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our services and user experience.
                </p>
                <div className="bg-secondary/30 rounded-lg p-4 mb-4">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Examples:</strong></p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Google Analytics cookies</li>
                    <li>Page view tracking</li>
                    <li>Feature usage statistics</li>
                  </ul>
                </div>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4. Advertising Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies are used to deliver advertisements that are relevant to you and your interests. They may also limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                </p>
              </div>
            </section>

            {/* Section: Third-Party Cookies */}
            <section id="third-party" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Cookies</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We work with third-party service providers who may also set cookies on your device when you visit our website. These third parties include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Payment Processors:</strong> For secure payment processing (M-PESA, credit cards)</li>
                  <li><strong>Customer Support Tools:</strong> For live chat and helpdesk functionality</li>
                  <li><strong>Content Delivery Networks (CDN):</strong> For faster content delivery</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These third parties have their own privacy policies and cookie policies. We recommend reviewing their policies to understand how they use cookies and your data.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We do not control third-party cookies and are not responsible for their privacy practices.
                </p>
              </div>
            </section>

            {/* Section: How to Manage Cookies */}
            <section id="manage-cookies" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Manage Cookies</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through your browser settings.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Browser Settings</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings. You can set your browser to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Block all cookies</li>
                  <li>Allow only first-party cookies</li>
                  <li>Delete cookies when you close your browser</li>
                  <li>Notify you when a website tries to set a cookie</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Browser-Specific Instructions</h3>
                <div className="bg-secondary/30 rounded-lg p-4 mb-4">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and site data</li>
                    <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                    <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions</li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Please note that blocking or deleting cookies may affect your ability to use certain features of our website. Some functionality may not work properly without cookies.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Opt-Out of Analytics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To opt out of Google Analytics tracking, you can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 underline">Google Analytics Opt-out Browser Add-on</a>.
                </p>
              </div>
            </section>

            {/* Section: Changes to This Policy */}
            <section id="changes" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Cookie Policy</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We will notify you of any material changes by posting the updated policy on this page and updating the "Last Updated" date at the top of this policy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
                </p>
              </div>
            </section>

            {/* Section: Contact Us */}
            <section id="contact" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-emerald-500 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:info@officechoicesolutions.co.ke" className="text-emerald-500 hover:text-emerald-400">
                        info@officechoicesolutions.co.ke
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-emerald-500 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+254721123536" className="text-emerald-500 hover:text-emerald-400">
                        +254 721 123 536
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    For more information about how we collect and use your personal data, please see our{" "}
                    <Link to="/privacy" className="text-emerald-500 hover:text-emerald-400 underline">
                      Privacy Policy
                    </Link>.
                  </p>
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
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
}