export default function Education() {
  const education = [
    {
      year: '2021',
      title: 'Advanced Cosmetology Diploma',
      institute: 'National Academy of Beauty & Wellness',
      details: 'Comprehensive training in makeup artistry, hair styling, and skincare',
      certification: '✓ Certified'
    },
    {
      year: '2019',
      title: 'Professional Makeup Artistry Certificate',
      institute: 'Elite Beauty Institute',
      details: 'Specialized training in bridal makeup and special occasion makeup',
      certification: '✓ Certified'
    },
    {
      year: '2018',
      title: 'Hair Styling & Treatment Course',
      institute: 'Premier Hair Academy',
      details: 'Expert training in hair care, treatments, and styling techniques',
      certification: '✓ Certified'
    },
    {
      year: '2017',
      title: 'Nail Art & Manicure Certificate',
      institute: 'Beauty Professionals Institute',
      details: 'Comprehensive nail care and design training',
      certification: '✓ Certified'
    },
  ]

  const certifications = [
    'International Makeup Artist Certification',
    'Professional Cosmetology License',
    'Skin Care Specialist Certification',
    'Hair Treatment Specialist Certification',
    'Health & Safety in Beauty Industry',
    'Advanced Color Theory Certificate',
  ]

  return (
    <main>
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Education & Certifications</h1>
          <p className="text-lg text-muted-foreground">Continuously learning and perfecting my craft</p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Education Timeline</h2>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="flex gap-6 pb-8 border-b border-border last:border-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full mt-2" />
                {idx !== education.length - 1 && <div className="w-0.5 h-20 bg-gradient-to-b from-primary to-transparent" />}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-semibold text-primary">{edu.year}</p>
                    <h3 className="text-2xl font-bold">{edu.title}</h3>
                    <p className="text-lg text-muted-foreground">{edu.institute}</p>
                  </div>
                  <span className="text-green-600 font-semibold text-sm">{edu.certification}</span>
                </div>
                <p className="text-muted-foreground">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-6 bg-card rounded-lg border border-border flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <p className="font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-muted-foreground mb-6 text-lg">
            I believe in staying updated with the latest beauty trends, techniques, and products. I regularly attend workshops, seminars, and training programs to ensure I provide the most current and effective services to my clients.
          </p>
          <ul className="space-y-3">
            {['Regular training in new makeup trends', 'Advanced skincare protocols', 'Latest hair treatment technologies', 'Client consultation best practices'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="text-primary font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
