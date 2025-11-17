export default function Experience() {
  const experiences = [
    {
      year: '2020-2025',
      role: 'Professional Makeup Artist & Cosmetologist',
      company: 'Self-Employed / Freelance',
      achievements: [
        'Served 500+ satisfied clients',
        'Specialized in bridal and event makeup',
        'Built strong reputation through word-of-mouth',
        'Expanded service offerings to comprehensive beauty solutions'
      ]
    },
    {
      year: '2019-2020',
      role: 'Senior Makeup Artist',
      company: 'Premium Beauty Salon',
      achievements: [
        'Managed makeup services for 50+ clients monthly',
        'Trained junior makeup artists',
        'Developed custom makeup solutions',
        'Maintained 98% client satisfaction rate'
      ]
    },
    {
      year: '2018-2019',
      role: 'Makeup Artist & Hair Stylist',
      company: 'Bridal Beauty Studio',
      achievements: [
        'Created makeup looks for 100+ wedding ceremonies',
        'Specialized in traditional and modern bridal styles',
        'Collaborated with wedding planners and photographers',
        'Developed signature bridal makeup techniques'
      ]
    },
    {
      year: '2017-2018',
      role: 'Junior Cosmetologist',
      company: 'Beauty & Wellness Center',
      achievements: [
        'Assisted senior professionals in various services',
        'Learned industry best practices and protocols',
        'Built foundational skills in makeup and skincare',
        'Earned promotion to senior positions'
      ]
    },
  ]

  const serviceAreas = [
    'Bridal Makeup',
    'Wedding Events',
    'Engagement Ceremonies',
    'Reception Makeup',
    'Party & Club Makeup',
    'Professional Photoshoots',
    'Television & Media',
    'Fashion Shows',
    'Personal Styling',
    'Skincare Treatments',
    'Hair Treatments',
    'Nail Art & Design'
  ]

  return (
    <main>
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Professional Experience</h1>
          <p className="text-lg text-muted-foreground">Building excellence through diverse beauty industry experience</p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Career Timeline</h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-primary">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-2" />
              <div className="bg-card p-8 rounded-xl border border-border">
                <p className="text-sm font-semibold text-primary mb-1">{exp.year}</p>
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <p className="text-lg text-muted-foreground mb-6">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Areas of Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors text-center">
                <p className="font-semibold">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              milestone: 'Industry Recognition',
              description: 'Recognized as a top makeup artist in the region with strong client testimonials'
            },
            {
              milestone: 'Client Growth',
              description: 'Consistent growth from 50+ to 500+ satisfied clients over the years'
            },
            {
              milestone: 'Service Expansion',
              description: 'Evolved from specialized makeup services to comprehensive beauty solutions'
            },
          ].map((achievement, idx) => (
            <div key={idx} className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold mb-3 text-primary">{achievement.milestone}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
