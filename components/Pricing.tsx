export default function Pricing() {
  const plans = [
    {
      name: "Gratis",
      price: "Rp 0",
      period: "/selamanya",
      features: [
        "5 invoice/bulan",
        "1 template",
        "Support email",
      ],
      cta: "Mulai Gratis",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "Rp 49.000",
      period: "/bulan",
      features: [
        "Unlimited invoice",
        "Custom branding",
        "Priority support",
        "Export PDF",
      ],
      cta: "Mulai Pro",
      highlighted: true,
    },
  ];

  return (
    <section id="harga" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Harga yang Ramah di Kantong
          </h2>
          <p className="text-lg text-neutral-600">
            Mulai gratis, upgrade kalau udah butuh lebih
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border-2 transition-all hover:-translate-y-1 hover:shadow-xl ${
                plan.highlighted
                  ? "border-primary-500 bg-primary-50 shadow-lg"
                  : "border-neutral-200 bg-white shadow-md"
              }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-neutral-900">
                    {plan.price}
                  </span>
                  <span className="text-neutral-600 ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-500 mr-3 text-xl">✓</span>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                  plan.highlighted
                    ? "bg-primary-500 hover:bg-primary-600 text-white shadow-md"
                    : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <p className="text-center text-neutral-600 mt-8">
          Semua paket termasuk akses ke fitur dasar invoice
        </p>
      </div>
    </section>
  );
}
