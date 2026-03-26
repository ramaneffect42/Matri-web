'use client'

import Link from 'next/link'
import { Users, ArrowLeft, Heart, Shield, Brain, Sparkles } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-primary">MatriLux</Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
          <Users className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-foreground">About Us</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
          MatriLux was founded with a single purpose — to make quality maternal healthcare guidance accessible to every mother in India, regardless of where she lives or what language she speaks.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-light text-foreground">Our Mission</h2>
          <p className="text-foreground/70 leading-relaxed">
            India faces one of the highest maternal mortality rates among developing nations, with a significant portion of deaths being preventable. Millions of mothers — particularly in Tier 2, Tier 3, and rural areas — lack consistent access to prenatal guidance, postpartum support, and reliable health information between doctor visits.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            MatriLux exists to bridge this gap. We are building a compassionate, technology-driven companion that supports mothers through every stage of their journey — from preconception planning to postpartum recovery — with clinically accurate, culturally sensitive, and emotionally supportive guidance.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-light text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Heart,
                title: 'Compassion First',
                description: 'Every feature we build starts with empathy. We understand that pregnancy and motherhood are deeply personal journeys that deserve care and sensitivity.'
              },
              {
                icon: Shield,
                title: 'Privacy & Trust',
                description: 'Your health data is sacred. We are committed to the highest standards of data protection under the DPDP Act, 2023 and never compromise on user privacy.'
              },
              {
                icon: Brain,
                title: 'Clinical Integrity',
                description: 'All content and recommendations on MatriLux are reviewed by qualified maternal health professionals. We never compromise on medical accuracy.'
              },
              {
                icon: Sparkles,
                title: 'Inclusive by Design',
                description: 'MatriLux is built for every mother in India — across languages, geographies, and socioeconomic backgrounds. Accessibility is not an afterthought; it is our foundation.'
              }
            ].map((value, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-light text-foreground">The Problem We Are Solving</h2>
          <p className="text-foreground/70 leading-relaxed">
            Despite significant advancements in Indian healthcare, maternal care remains fragmented and inaccessible for a large section of the population. Key challenges include:
          </p>
          <ul className="space-y-3">
            {[
              'Limited access to consistent prenatal and postnatal guidance outside urban centres',
              'Language and literacy barriers preventing access to reliable health information',
              'Overburdened healthcare systems leaving mothers without adequate follow-up care',
              'Lack of culturally sensitive mental health support for new and expecting mothers',
              'Fragmented health records making continuity of care difficult'
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                <span className="text-primary mt-1">•</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="text-foreground/70 leading-relaxed pt-2">
            MatriLux addresses these challenges by putting a knowledgeable, compassionate, and always-available maternal health companion in every mother's hands.
          </p>
        </div>
      </section>

      {/* Medical Advisory */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-light text-foreground">Medical Advisory</h2>
          <p className="text-foreground/70 leading-relaxed">
            MatriLux works closely with a panel of qualified obstetricians, gynaecologists, neonatologists, and mental health professionals to ensure that all content, tools, and recommendations on our platform are clinically accurate and up to date with current Indian and international medical guidelines.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Our medical advisory board reviews all health-related content before publication and regularly audits our platform for clinical accuracy. Details of our Medical Board are available on our website.
          </p>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-foreground/60 text-center leading-relaxed">
            MatriLux is registered and operates in compliance with applicable Indian laws including the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and the Consumer Protection Act, 2019. For legal enquiries, please refer to our{' '}
            <Link href="/legal-compliance" className="text-primary hover:underline">Legal Compliance</Link> page.
          </p>
        </div>
      </section>

      {/* Footer */}
       <Footer />
    </div>
  )
}