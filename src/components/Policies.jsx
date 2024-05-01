import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-green-500 font-bold mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Last Updated: 1/5/2024</h2>
        {/* <p>[Your Company Name] ("us", "we", or "our") operates the [Your Website URL] website (the "Service").</p> */}
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Information Collection and Use</h2>
        <p className="text-sm mb-4">We may collect personal information such as your name, email address, contact details, and any other information you provide to us when using our website or services. We use this information to provide, maintain, and improve our services, as well as to communicate with you about updates, news, and offers related to our services.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Data Security</h2>
        <p>We take appropriate measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
      </section>


      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Changes to This Privacy Policy</h2>
        <p className="text-sm mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p className="text-sm mb-4">If you have any questions or concerns about our Privacy Policy, please contact us at inquiry@wespokeit.com.</p>
      </section>

      <section>
        <h3 className="text-center text-green-600 text-base font-semibold mt-9"> By using our website, you consent to the terms of this Privacy Policy.</h3>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
