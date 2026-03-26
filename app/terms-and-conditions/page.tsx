'use client'

import Link from 'next/link'
import { FileText, ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-primary">Matrilux</Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
          <FileText className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-foreground">Terms & Conditions</h1>
        <p className="text-foreground/60">Last updated: March 2026</p>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Please read these Terms & Conditions carefully before using Matrilux. By accessing or using our services, you agree to be bound by these terms.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-6">

        {[
          {
            title: '1. Acceptance of Terms',
            content: 'By accessing or using Matrilux, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree, please do not use our services.'
          },
          {
            title: '2. Eligibility',
            content: 'You must be at least 18 years of age to use Matrilux. By using our services, you represent and warrant that you meet this requirement. We reserve the right to terminate accounts of users found to be under 18.'
          },
          {
            title: '3. Description of Service',
            content: 'Matrilux is a maternal health and wellness companion app providing tools including but not limited to:',
            list: [
              'Due date calculator and pregnancy timeline',
              'Ovulation and period tracker',
              'Baby name generator',
              'Health tracking and insights',
              'Appointment and medication management'
            ]
          },
          {
            title: '4. Medical Disclaimer',
            content: 'The information and tools provided by Matrilux are for general informational and wellness purposes only. They do not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding any medical conditions, symptoms, or health concerns related to your pregnancy or maternal health. Never disregard professional medical advice or delay seeking it because of something you have read or accessed through Matrilux.'
          },
          {
            title: '5. User Accounts',
            content: null,
            list: [
              'You must provide accurate, current, and complete information when creating an account',
              'You are responsible for maintaining the confidentiality of your account credentials',
              'You are responsible for all activity that occurs under your account',
              'You must notify us immediately of any unauthorised use of your account',
              'We reserve the right to suspend or terminate accounts that violate these terms'
            ]
          },
          {
            title: '6. Acceptable Use',
            content: 'You agree not to:',
            list: [
              'Use the app for any unlawful purpose or in violation of any applicable Indian or international law',
              'Attempt to gain unauthorised access to any part of the service or its infrastructure',
              'Upload or transmit harmful, offensive, misleading, or defamatory content',
              'Interfere with or disrupt the proper functioning of the app',
              'Use the app to collect or harvest data about other users',
              'Impersonate any person or entity'
            ]
          },
          {
            title: '7. Intellectual Property',
            content: 'All content, trademarks, trade names, logos, and data on Matrilux, including but not limited to text, graphics, user interfaces, visual interfaces, photographs, and software, are the exclusive property of Matrilux and are protected under applicable Indian intellectual property laws including the Copyright Act, 1957 and the Trade Marks Act, 1999. You may not reproduce, distribute, or create derivative works without our prior written consent.'
          },
          {
            title: '8. User-Generated Content',
            content: 'Any content you submit or upload to Matrilux remains your property. However, by submitting content, you grant us a non-exclusive, royalty-free licence to use, process, and display that content solely for the purpose of providing our services to you.'
          },
          {
            title: '9. Privacy and Data Protection',
            content: 'Your use of Matrilux is also governed by our Privacy Policy, which is incorporated into these Terms by reference. We are committed to compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and other applicable Indian data protection laws.'
          },
          {
            title: '10. Limitation of Liability',
            content: 'To the maximum extent permitted by applicable law, Matrilux shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the app. We do not guarantee the accuracy, completeness, or suitability of any information provided through our services. Our total liability to you for any claim shall not exceed the amount paid by you, if any, for accessing our services.'
          },
          {
            title: '11. Indemnification',
            content: 'You agree to indemnify, defend, and hold harmless Matrilux and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising out of your use of the app, your violation of these Terms, or your violation of any rights of a third party.'
          },
          {
            title: '12. Governing Law and Jurisdiction',
            content: 'These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in India.'
          },
          {
            title: '13. Grievance Redressal',
            content: 'In accordance with the Information Technology Act, 2000, and rules made thereunder, if you have any grievances regarding our services, please contact our Grievance Officer:',
            extra: 'Name: Grievance Officer, Matrilux\nEmail: grievance@matrilux.com\nResponse Time: Within 30 days of receipt of complaint'
          },
          {
            title: '14. Changes to Terms',
            content: 'We reserve the right to update or modify these Terms & Conditions at any time. We will notify you of significant changes via email or a prominent notice on our app. Your continued use of Matrilux after changes are posted constitutes your acceptance of the updated terms.'
          },
          {
            title: '15. Contact Us',
            content: 'For any questions regarding these Terms & Conditions, please contact us at support@matrilux.com.'
          }
        ].map((section, i) => (
          <div key={i} className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3">
            <h2 className="text-lg font-medium text-foreground">{section.title}</h2>
            {section.content && <p className="text-foreground/70 text-sm leading-relaxed">{section.content}</p>}
            {section.list && (
              <ul className="space-y-2">
                {section.list.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.extra && (
              <div className="bg-secondary/30 rounded-xl p-4 text-sm text-foreground/70 whitespace-pre-line">
                {section.extra}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Footer */}
     <Footer />

    </div>
  )
}