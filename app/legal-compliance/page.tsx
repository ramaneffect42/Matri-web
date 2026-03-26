'use client'

import Link from 'next/link'
import { Scale, ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function LegalCompliance() {
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
          <Scale className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-foreground">Legal Compliance</h1>
        <p className="text-foreground/60">Last updated: March 2026</p>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          MatriLux is committed to operating in full compliance with applicable Indian and international laws and regulations. This page outlines our compliance framework and commitments.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-6">

        {[
          {
            title: '1. Digital Personal Data Protection Act, 2023 (DPDP Act)',
            content: 'MatriLux is committed to full compliance with the Digital Personal Data Protection Act, 2023. As a Data Fiduciary, we ensure that:',
            list: [
              'Personal data is collected only for lawful purposes with explicit user consent',
              'Data is processed fairly, transparently, and securely',
              'Users are informed of their rights as Data Principals',
              'A designated Grievance Officer is available to address data-related concerns',
              'Data is retained only for as long as necessary and deleted upon account closure',
              'Significant data breaches are reported to the Data Protection Board of India as required'
            ]
          },
          {
            title: '2. Information Technology Act, 2000 & IT (Amendment) Act, 2008',
            content: 'MatriLux complies with the Information Technology Act, 2000 and its amendments, including:',
            list: [
              'IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 — governing the collection and handling of sensitive personal data',
              'IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 — applicable to our platform operations',
              'Appointment of a Grievance Officer as mandated under Rule 5(9) of the SPDI Rules',
              'Implementation of reasonable security practices including encryption and access controls'
            ]
          },
          {
            title: '3. Medical Disclaimer & Non-Medical Device Compliance',
            content: 'MatriLux is a health information and wellness tracking platform and is not a licensed medical device. In accordance with the Medical Devices Rules, 2017 and guidelines issued by the Central Drugs Standard Control Organisation (CDSCO):',
            list: [
              'MatriLux does not diagnose, treat, cure, or prevent any medical condition',
              'Our tools and content are for informational and wellness purposes only',
              'We do not claim to be a Software as a Medical Device (SaMD) under CDSCO regulations',
              'Users are always advised to consult qualified healthcare professionals for medical decisions',
              'We continuously monitor regulatory developments regarding digital health tools in India'
            ]
          },
          {
            title: '4. Consumer Protection Act, 2019',
            content: 'MatriLux complies with the Consumer Protection Act, 2019 and the Consumer Protection (E-Commerce) Rules, 2020, including:',
            list: [
              'Clear disclosure of our services, terms, and pricing',
              'Transparent refund and cancellation policies',
              'Prohibition of unfair trade practices and misleading advertisements',
              'Maintenance of a grievance redressal mechanism with defined response timelines',
              'Display of accurate information about our platform and services'
            ]
          },
          {
            title: '5. Telecom and App Store Compliance',
            content: 'MatriLux complies with applicable app distribution platform policies:',
            list: [
              'Google Play Developer Programme Policies — including health app guidelines and data safety requirements',
              'Apple App Store Review Guidelines — including guidelines for health and medical applications',
              'We accurately represent our app\'s functionality and data collection practices in all store listings',
              'We comply with platform-specific requirements for apps handling sensitive health data'
            ]
          },
          {
            title: '6. Accessibility Compliance',
            content: 'MatriLux is committed to making our platform accessible to all users, including those with disabilities, in line with:',
            list: [
              'Web Content Accessibility Guidelines (WCAG) 2.1 — Level AA compliance as a target standard',
              'Rights of Persons with Disabilities Act, 2016 — ensuring our digital services are accessible',
              'We are continuously working to improve accessibility across our platform'
            ]
          },
          {
            title: '7. Intellectual Property Compliance',
            content: 'MatriLux respects intellectual property rights and complies with:',
            list: [
              'Copyright Act, 1957 — all original content on our platform is protected',
              'Trade Marks Act, 1999 — the MatriLux name and logo are registered or pending registration trademarks',
              'We respect third-party intellectual property and respond promptly to valid infringement notices',
              'Users may not reproduce, distribute, or create derivative works from our content without written permission'
            ]
          },
          {
            title: '8. Financial and Payments Compliance',
            content: 'Where applicable, MatriLux complies with financial regulations including:',
            list: [
              'Payment and Settlement Systems Act, 2007 — for any in-app payment processing',
              'Reserve Bank of India (RBI) guidelines on digital payments',
              'Foreign Exchange Management Act (FEMA), 1999 — for any international transactions',
              'Goods and Services Tax (GST) Act, 2017 — applicable tax obligations'
            ]
          },
          {
            title: '9. Data Localisation',
            content: 'MatriLux is mindful of data localisation requirements under Indian law. We ensure that sensitive personal data of Indian users is stored and processed in compliance with applicable data localisation obligations as they evolve under the DPDP Act, 2023 and related regulations.'
          },
          {
            title: '10. Children\'s Data Protection',
            content: 'MatriLux takes special care regarding the protection of minors\' data in compliance with the DPDP Act, 2023:',
            list: [
              'Our services are intended for users aged 18 and above',
              'We do not knowingly collect personal data from individuals under the age of 18',
              'Processing of children\'s data, where applicable, requires verifiable parental consent',
              'We do not engage in behavioural tracking or targeted advertising directed at children'
            ]
          },
          {
            title: '11. Anti-Spam and Electronic Communications',
            content: 'MatriLux complies with the Telecom Commercial Communications Customer Preference Regulations (TCCCPR) and:',
            list: [
              'We only send communications to users who have explicitly opted in',
              'All marketing communications include a clear and easy opt-out mechanism',
              'We do not sell or share user contact information with third-party marketers',
              'Transactional communications are sent only as necessary for service delivery'
            ]
          },
          {
            title: '12. Regulatory Monitoring and Updates',
            content: 'The regulatory landscape for digital health platforms in India is evolving rapidly. MatriLux is committed to:',
            list: [
              'Continuously monitoring changes in applicable laws and regulations',
              'Updating our compliance framework promptly as new requirements come into effect',
              'Engaging with legal counsel to ensure ongoing compliance',
              'Notifying users of any material changes to our compliance practices'
            ]
          },
          {
            title: '13. Grievance Officer',
            content: 'For any compliance-related concerns or queries, please contact our Grievance Officer:',
            extra: 'Name: Grievance Officer, MatriLux\nEmail: grievance@matrilux.com\nResponse Time: Within 30 days of receipt of complaint'
          },
          {
            title: '14. Contact Us',
            content: 'For any questions regarding our legal compliance framework, please contact us at support@matrilux.com.'
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