export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Bikin Invoice Profesional dalam{" "}
              <span className="text-primary-500">30 Detik</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
              Nggak perlu Excel, nggak perlu template ribet.
              <br />
              Isi form, klik kirim, selesai.
            </p>

            <div className="pt-4">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg">
                Mulai Gratis — Tanpa Kartu Kredit
              </button>
              <p className="text-sm text-neutral-600 mt-3">
                ✨ Gratis untuk 5 invoice pertama. Nggak perlu kartu kredit.
              </p>
            </div>
          </div>

          {/* Right: Mockup Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 via-secondary-100 to-primary-200 rounded-2xl shadow-2xl border-4 border-white flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-4xl">📄</span>
                </div>
                <p className="text-neutral-600 font-medium">
                  Invoice Mockup
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                  Screenshot coming soon
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-400 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
