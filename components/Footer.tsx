export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">InvoiceKirim</h3>
            <p className="text-neutral-400 leading-relaxed">
              Platform invoice profesional untuk freelancer dan UMKM Indonesia.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Link</h4>
            <ul className="space-y-2">
              <li>
                <button className="hover:text-primary-400 transition-colors">
                  Tentang
                </button>
              </li>
              <li>
                <button className="hover:text-primary-400 transition-colors">
                  Kontak
                </button>
              </li>
              <li>
                <button className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <p className="text-neutral-400">
              Email: hello@invoicekirim.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-500">
            © {currentYear} InvoiceKirim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
