'use client'

import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/footer'


export default function PrivacyPolicy() {
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
          <Shield className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-foreground">Privacy Policy</h1>
        <p className="text-foreground/60">Last updated: March 2026</p>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          At Matrilux, your privacy is our priority. This policy explains how we collect, use, and protect your personal data in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act).
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-6">

        {[
          {
            title: '1. Data Fiduciary',
            content: 'Matrilux ("we", "our", or "us") is the Data Fiduciary as defined under the Digital Personal Data Protection Act, 2023. We determine the purpose and means of processing your personal data and are responsible for its protection.'
          },
          {
            title: '2. Information We Collect',
            content: null,
            list: [
              'Name and date of birth',
              'Email address (via Google Sign-In)',
              'Sensitive health data including period dates, ovulation cycles, pregnancy details, and due dates',
              'Device and usage data such as IP address, browser type, and app interactions',
              'Any additional information you voluntarily provide'
            ]
          },
          {
            title: '3. Purpose of Data Processing',
            content: 'We collect and process your data solely for the following purposes:',
            list: [
              'To provide personalised maternal health tools and features',
              'To improve app performance and user experience',
              'To send important service-related communications',
              'To ensure account security and prevent fraud',
              'To comply with applicable laws and regulations'
            ]
          },
          {
            title: '4. Sensitive Personal Data',
            content: 'We handle your reproductive and pregnancy-related health data with the highest level of care. This data is classified as Sensitive Personal Data under applicable Indian law. It is stored securely, never sold to third parties, and accessed only to the extent necessary to deliver our services. Your explicit consent is obtained before collecting this data.'
          },
          {
            title: '5. Legal Basis for Processing',
            content: 'We process your personal data based on your free, informed, specific, and unambiguous consent as required under the DPDP Act, 2023. You may withdraw your consent at any time by contacting us, though this may affect your ability to use certain features of the app.'
          },
          {
            title: '6. Google Sign-In',
            content: 'We use Google Sign-In for authentication. By signing in with Google, you also agree to Google\'s Privacy Policy. We receive only your name and email address from Google and do not have access to your Google account password or other Google data.'
          },
          {
            title: '7. Data Storage and Localisation',
            content: 'Your data is stored on secure servers. Where data is transferred outside India, we ensure that the recipient country or organisation provides a level of data protection comparable to the DPDP Act, 2023. We take all reasonable steps to protect your data during such transfers.'
          },
          {
            title: '8. Data Retention',
            content: 'We retain your personal data for as long as your account is active or as necessary to provide our services. Upon account deletion, we will erase your personal data within 30 days, except where retention is required by law.'
          },
          {
            title: '9. Your Rights as a Data Principal',
            content: 'Under the DPDP Act, 2023, you have the following rights:',
            list: [
              'Right to access a summary of your personal data processed by us',
              'Right to correction of inaccurate or outdated personal data',
              'Right to erasure of your personal data',
              'Right to grievance redressal',
              'Right to nominate another individual to exercise your rights in case of death or incapacity',
              'Right to withdraw consent at any time'
            ]
          },
          {
            title: '10. Children\'s Data',
            content: 'Matrilux is intended for users who are 18 years of age or older. We do not knowingly collect personal data from individuals under 18. If we become aware that a minor has provided us with personal data, we will delete it promptly.'
          },
          {
            title: '11. Cookies and Tracking',
            content: 'We may use essential cookies to ensure the proper functioning of our app. We do not use cookies for advertising or third-party tracking purposes. You may disable cookies through your browser settings, though this may affect app functionality.'
          },
          {
            title: '12. Changes to this Policy',
            content: 'We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice on our app. Continued use of Matrilux after changes are posted constitutes your acceptance of the updated policy.'
          },
          {
            title: '13. Grievance Officer',
            content: 'In accordance with the Information Technology Act, 2000, and the DPDP Act, 2023, we have appointed a Grievance Officer to address any concerns regarding the processing of your personal data.',
            extra: 'Name: Grievance Officer, Matrilux\nEmail: grievance@matrilux.com\nResponse Time: Within 30 days of receipt of complaint'
          },
          {
            title: '14. Contact Us',
            content: 'For any questions or concerns about this Privacy Policy, please contact us at support@matrilux.com.'
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