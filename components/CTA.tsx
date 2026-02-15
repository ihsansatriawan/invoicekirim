export default function CTA() {
  return (
    <section id="cta" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Mulai Bikin Invoice Sekarang
        </h2>
        <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
          Nggak perlu tunggu lama. Daftar gratis dan kirim invoice pertama kamu dalam 30 detik.
        </p>
        <button className="bg-white hover:bg-neutral-100 text-primary-600 px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl">
          Daftar Gratis
        </button>
        <p className="text-primary-100 text-sm mt-4">
          Gratis untuk 5 invoice pertama • Nggak perlu kartu kredit
        </p>
      </div>
    </section>
  );
}
