export default function SocialProof() {
  const testimonials = [
    {
      quote: "Dulu bikin invoice pakai Excel bisa 15 menit. Sekarang cuma 1 menit!",
      name: "Budi",
      role: "Freelance Designer",
      initials: "B",
      color: "bg-primary-400",
    },
    {
      quote: "Simpel banget! Client langsung bisa bayar lewat link.",
      name: "Sari",
      role: "Social Media Manager",
      initials: "S",
      color: "bg-secondary-400",
    },
    {
      quote: "Gratis tapi fiturnya lengkap untuk freelancer pemula.",
      name: "Andi",
      role: "Web Developer",
      initials: "A",
      color: "bg-primary-600",
    },
  ];

  const stats = [
    { number: "500+", label: "Invoice Dibuat" },
    { number: "Rp 2M+", label: "Tertagih" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Dipercaya Freelancer Indonesia
          </h2>
          <p className="text-lg text-neutral-600">
            Apa kata mereka yang sudah pakai InvoiceKirim
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-neutral-700 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-12 pt-8 border-t-2 border-neutral-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </p>
              <p className="text-neutral-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
