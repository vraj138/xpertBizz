import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicySmsTerms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
            Privacy Policy & SMS Terms and Conditions
          </h1>

          <div className="mt-8 space-y-1 text-sm text-gray-600">
            <p><strong>Effective Date:</strong> January 1, 2025</p>
            <p><strong>Company:</strong> XpertBizz</p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://www.xpertbizz.com" className="text-blue-600 hover:underline">
                www.xpertbizz.com
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@xpertbizz.com" className="text-blue-600 hover:underline">
                info@xpertbizz.com
              </a>
            </p>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">
            This document combines the general Privacy Policy and SMS Terms & Conditions for
            XpertBizz. By using our website and services, including opting into SMS messaging, you
            agree to the policies described below.
          </p>

          {/* SECTION I */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 border-b pb-2">
            SECTION I – GENERAL PRIVACY POLICY
          </h2>

          <Section title="1. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Personal Information (name, email address, phone number, business details)</li>
              <li>Account Information</li>
              <li>Communication Preferences</li>
            </ul>
            <p className="mt-3">We only collect information necessary to provide our services.</p>
          </Section>

          <Section title="2. How We Use Information">
            <p>We use collected information to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Provide and manage services</li>
              <li>Respond to inquiries</li>
              <li>Send service updates and notifications</li>
              <li>Improve website functionality</li>
              <li>Send marketing communications (if consented)</li>
            </ul>
          </Section>

          <Section title="3. Sharing of Information">
            <p>
              We do not sell or rent personal information. We may share information with:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Service providers assisting in business operations</li>
              <li>Legal authorities when required by law</li>
              <li>Technology vendors supporting communication systems</li>
            </ul>
            <p className="mt-3">All third parties are required to maintain confidentiality.</p>
          </Section>

          <Section title="4. Data Security">
            <p>
              We implement reasonable technical and organizational safeguards to protect personal
              information from unauthorized access, misuse, or disclosure.
            </p>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain personal information only as long as necessary to fulfill the purposes
              outlined in this policy or as required by law.
            </p>
          </Section>

          <Section title="6. Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Access your personal information</li>
              <li>Request correction</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mt-3">
              Requests may be submitted through our website contact information.
            </p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>
              Our services are not directed to individuals under 13 years of age. We do not
              knowingly collect information from children.
            </p>
          </Section>

          {/* SECTION II */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 border-b pb-2">
            SECTION II – SMS TERMS & CONDITIONS
          </h2>

          <Section title="1. Program Description">
            <p>By opting into our SMS program, you may receive:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Appointment reminders</li>
              <li>Account notifications</li>
              <li>Service updates</li>
              <li>Customer support responses</li>
              <li>Promotional messages (if consented)</li>
            </ul>
            <p className="mt-3">Message frequency may vary.</p>
          </Section>

          <Section title="2. Consent to Receive Messages">
            <p>By providing your mobile number and opting in, you:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Confirm you are the authorized user of the number</li>
              <li>Consent to receive automated informational and marketing text messages</li>
              <li>Understand consent is not a condition of purchase</li>
            </ul>
          </Section>

          <Section title="3. Message & Data Rates">
            <p>
              Message and data rates may apply based on your mobile carrier plan. XpertBizz is not
              responsible for carrier charges.
            </p>
          </Section>

          <Section title="4. Opt-Out Instructions">
            <p>
              You may opt out at any time by replying <strong>STOP</strong> to any SMS message. You
              will receive a confirmation and no further messages will be sent unless you opt in
              again.
            </p>
          </Section>

          <Section title="5. Help Instructions">
            <p>
              For help, reply <strong>HELP</strong> to any SMS message or contact us via our website
              or email us at{" "}
              <a href="mailto:info@xpertbizz.com" className="text-blue-600 hover:underline">
                info@xpertbizz.com
              </a>
            </p>
          </Section>

          <Section title="6. Carrier Disclaimer">
            <p>
              Mobile carriers are not liable for delayed or undelivered messages. Delivery is subject
              to effective transmission by your carrier.
            </p>
          </Section>

          <Section title="7. Record of Consent">
            <p>
              We maintain records of opt-in consent in compliance with applicable laws and carrier
              requirements.
            </p>
          </Section>

          {/* SECTION III */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 border-b pb-2">
            SECTION III – GENERAL TERMS
          </h2>

          <Section title="1. Modifications">
            <p>
              We reserve the right to update this document at any time. Updates will be posted on our
              website with a revised effective date.
            </p>
          </Section>

          <Section title="2. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, XpertBizz shall not be liable for indirect,
              incidental, or consequential damages arising from use of our services.
            </p>
          </Section>

          <Section title="3. Governing Law">
            <p>
              These policies shall be governed by and construed in accordance with the laws of the
              applicable jurisdiction in which XpertBizz operates.
            </p>
          </Section>

          <Section title="4. Contact Information">
            <p>
              If you have questions regarding this Privacy Policy or SMS Terms, please contact:
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://www.xpertbizz.com" className="text-blue-600 hover:underline">
                  www.xpertbizz.com
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@xpertbizz.com" className="text-blue-600 hover:underline">
                  info@xpertbizz.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+15086900917" className="text-blue-600 hover:underline">
                  +1 (508) 690-0917
                </a>
              </li>
            </ul>
          </Section>

          <Section title="5. Privacy">
            <p>
              Your privacy is important to us. Information collected as part of our SMS program is
              subject to our Privacy Policy and SMS Privacy Policy available at:{" "}
              <a
                href="https://www.xpertbizz.com/privacy-policy-sms-terms"
                className="text-blue-600 hover:underline"
              >
                www.xpertbizz.com/privacy-policy-sms-terms
              </a>
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </div>
);

export default PrivacyPolicySmsTerms;