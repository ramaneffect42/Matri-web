'use client'

import Link from 'next/link'
import { Mail, ArrowLeft, MessageSquare, Shield, FileText } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function Contact() {
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
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-foreground">Contact Us</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          We are here to help. Whether you have a question about our platform, need support, or want to get in touch with our team, please reach out to us using the details below.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-6">

        {[
          {
            icon: MessageSquare,
            title: 'General Enquiries',
            content: 'For general questions about MatriLux, our features, or our mission:',
            extra: 'Email: support@matrilux.com\nResponse Time: Within 2 business days'
          },
          {
            icon: Shield,
            title: 'Privacy & Data Protection',
            content: 'For questions or concerns regarding your personal data, data deletion requests, or privacy-related matters under the Digital Personal Data Protection Act, 2023:',
            extra: 'Email: privacy@matrilux.com\nResponse Time: Within 7 business days'
          },
          {
            icon: FileText,
            title: 'Grievance Officer',
            content: 'In accordance with the Information Technology Act, 2000 and the DPDP Act, 2023, users may contact our designated Grievance Officer for complaints related to the processing of personal data or violations of applicable laws:',
            extra: 'Name: Grievance Officer, MatriLux\nEmail: grievance@matrilux.com\nResponse Time: Within 30 days of receipt of complaint'
          },
          {
            icon: Mail,
            title: 'Medical Board & Clinical Enquiries',
            content: 'For enquiries related to the clinical accuracy of our content or to connect with our medical advisory team:',
            extra: 'Email: medical@matrilux.com\nResponse Time: Within 5 business days'
          }
        ].map((card, i) => (
          <div key={i} className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg font-medium text-foreground">{card.title}</h2>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">{card.content}</p>
            <div className="bg-secondary/30 rounded-xl p-4 text-sm text-foreground/70 whitespace-pre-line">
              {card.extra}
            </div>
          </div>
        ))}

        {/* Additional Note */}
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-6 shadow-sm space-y-2">
          <h2 className="text-lg font-medium text-foreground">Important Note</h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            MatriLux does not provide medical advice, diagnosis, or treatment through any of its contact channels. For medical emergencies, please contact your nearest hospital or dial <span className="font-semibold text-primary">112</span> (National Emergency Number, India). For maternal health emergencies, please contact your healthcare provider immediately.
          </p>
        </div>

        {/* Legal Links */}
        <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3">
          <h2 className="text-lg font-medium text-foreground">Legal & Compliance</h2>
          <p className="text-foreground/70 text-sm leading-relaxed">
            For legal matters, please refer to our dedicated pages:
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/privacy-policy" className="flex-1 bg-secondary/30 rounded-xl p-3 text-sm text-center text-primary hover:bg-primary/10 transition">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="flex-1 bg-secondary/30 rounded-xl p-3 text-sm text-center text-primary hover:bg-primary/10 transition">
              Terms & Conditions
            </Link>
            <Link href="/legal-compliance" className="flex-1 bg-secondary/30 rounded-xl p-3 text-sm text-center text-primary hover:bg-primary/10 transition">
              Legal Compliance
            </Link>
          </div>
        </div>

      </section>

      {/* Footer */}
       <Footer />

    </div>
  )
}