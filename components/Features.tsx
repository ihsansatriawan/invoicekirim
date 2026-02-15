export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Invoice Instan",
      description: "Isi form sederhana, invoice langsung jadi",
    },
    {
      icon: "🔗",
      title: "Share Link",
      description: "Kirim invoice lewat link, client buka di browser",
    },
    {
      icon: "✅",
      title: "Track Status",
      description: "Tau mana yang udah dibayar, mana yang belum",
    },
  ];

  return (
    <section id="fitur" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Fitur yang Bikin Hidup Lebih Mudah
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Semua yang kamu butuhkan untuk bikin dan kirim invoice profesional
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-50 p-8 rounded-2xl border-2 border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
