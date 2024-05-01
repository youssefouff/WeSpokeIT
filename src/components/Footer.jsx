import React from 'react';

const Footer = () => {
  return (
    <footer className="sm:text-sm lg:text-sm text-white-800 py-6 border-t border-neutral-700/80">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-9">
          <li>
            <a href="/terms" className="hover:text-gray-400">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
          </li>
          <li>
            <a href="/refund-cancellation" className="hover:text-gray-400">Refunds &amp; Cancellations Policy</a>
          </li>
        </ul>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm text-gray-400">Contact us: inquiry@wespokeit.com</p>
      </div>
      <div className="text-center mt-6">
        <p className="text-xs text-gray-500">© 2024 WeSpokeIT. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
