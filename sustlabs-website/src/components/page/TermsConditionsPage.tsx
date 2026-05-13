import { memo } from 'react'

type TermsSection = {
  body: readonly string[]
  title: string
}

const INTRO_PARAGRAPHS = [
  'The terms "We" / "Us" / "Our" / "Company" individually and collectively refer to SustLabs.com and the terms "Visitor" and "User" refer to the users.',
  'The prices shown are inclusive of taxes (18% GST included). Payment terms: online payment via net-banking, debit card, credit card or UPI.',
  'Delivery period: 4-6 working days after completion of order, depending on the courier partner and delivery location. App subscription fee of Rs. 30 per month is chargeable and might be reduced or waived off on a case to case basis. Product warranty: 1 year.',
  'This page states the Terms and Conditions under which you may visit this website. If you do not accept these Terms and Conditions, please exit the site. The business and its associate entities reserve the right to revise these Terms and Conditions at any time by updating this page.',
] as const

const TERMS_SECTIONS: readonly TermsSection[] = [
  {
    title: 'USE OF CONTENT',
    body: [
      'All logos, brands, marks, headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing on this site, except as otherwise noted, are properties either owned or used under license by the business and/or its associate entities who feature on this Website.',
      'The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited.',
      'You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without written permission.',
    ],
  },
  {
    title: 'Security Rules',
    body: [
      'Visitors are prohibited from violating or attempting to violate the security of the Website, including accessing unauthorized data or accounts, probing or testing vulnerability without proper authorization, interfering with service through viruses, Trojan horse, flooding, mail bombing or crashing, and sending unsolicited electronic mail including promotions or advertising.',
      'Violations of system or network security may result in civil or criminal liability. The business and its associate entities will have the right to investigate suspected violations and cooperate with law enforcement authorities.',
    ],
  },
  {
    title: 'General Rules',
    body: [
      'Visitors may not use the Website to transmit, distribute, store or destroy material that could constitute or encourage criminal conduct, violate applicable law, infringe copyright, trademark, trade secret or other intellectual property rights, violate privacy or publicity rights, or contain libelous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful material.',
    ],
  },
  {
    title: 'INDEMNITY',
    body: [
      'The User unilaterally agrees to indemnify and hold harmless, without objection, the Company, its officers, directors, employees and agents from and against any claims, actions, demands, liabilities, losses and damages arising from or resulting from their use of https://www.sustlabs.com/ or breach of the terms.',
    ],
  },
  {
    title: 'LIABILITY',
    body: [
      'User agrees that neither Company nor its group companies, directors, officers or employees shall be liable for any direct, indirect, incidental, special, consequential or exemplary damages resulting from use or inability to use the service, procurement of substitute goods or services, purchased data or information, messages received, transactions entered into, unauthorized access to user transmissions or data, or any other matter relating to the service.',
      'Ohm is connected to dangerous voltages. Improper use or installation can be dangerous or even fatal. Installation must be done by a qualified professional and according to local electrical codes. Do not open or repair the Ohm monitor without contacting support. If the monitor or cables may have been damaged, do not use them. Use the Ohm monitor only in India, and only with a 50Hz 240V supply system. Install it away from direct sunlight, extreme temperatures and water exposure.',
      'User further agrees that Company shall not be liable for damages arising from interruption, suspension or termination of service, whether justified or not, negligent or intentional, inadvertent or advertent.',
      'User agrees that Company shall not be responsible or liable for the statements or conduct of any third party of the service. In no event shall the Company total liability exceed the amount paid by the User to the Company, if any, related to the cause of action.',
    ],
  },
  {
    title: 'ACCOUNT CREATION, SUBSCRIPTIONS, RENEWALS AND TERMINATIONS',
    body: [
      'To use the Services, you must register and create an account. Certain users may be designated as administrative users who can create additional authorized user accounts and assign permissions.',
      'You may need to provide registration details or other information on behalf of yourself or other users to create an account and access the Services. All information provided must be correct, current and complete.',
      'The Services are available under a basic free account or a premium fee-based monthly or annual subscription plan. Paid subscription purchase becomes binding upon clicking "I Accept". Each premium subscription term automatically renews unless canceled before the current term expires, and the full amount for each renewal term is charged on the first day of the renewal.',
      'If you terminate a free account or premium subscription plan, your account becomes unusable and your access to the Services is terminated. Users are not entitled to refunds of subscription fees. SustLabs reserves the right to cancel free accounts or paid subscriptions at any time for any reason.',
    ],
  },
  {
    title: 'User Consent for Communication',
    body: [
      'By using our services, you acknowledge and agree that SustLabs may contact you via WhatsApp, Email, SMS, or Phone Call for service updates and support, important account or transactional information, product and feature announcements, and marketing or promotional communications only if explicitly opted in.',
      'You may manage your communication preferences or withdraw consent at any time by contacting support@sustlabs.com or using unsubscribe or opt-out options provided in communications.',
    ],
  },
  {
    title: 'BILLING CYCLE',
    body: [
      'The subscription fee and any other charges incurred in connection with use of the service, such as taxes and possible transaction fees, will be charged to your Payment Method on the specific payment date indicated on the Subscription page.',
      'The length of your billing cycle depends on the type of subscription chosen. In some cases, the payment date may change if your payment method does not settle successfully, if you change plan, or if your subscription began on a day not contained in a given month.',
    ],
  },
  {
    title: 'PAYMENT PROCESSING',
    body: [
      'To purchase a subscription, you may be required to provide credit card or payment information, billing address and related details. You represent and warrant that you have the right to use any submitted payment mechanism and authority necessary to purchase a subscription using it.',
      'By submitting such information, you grant us the right to provide it to third parties for facilitating your purchase. You acknowledge and agree that we are not responsible for how third party payment processors transmit, store, use or share your information.',
    ],
  },
  {
    title: 'DISCLAIMER',
    body: [
      'Consequential damages. Hardware and firmware. Appliance detection.',
      'Ohm Assistant services may be down in case of scheduled or unscheduled maintenance for 12 hours. Users may be informed prior if maintenance exceeds 12 hours. Modifying network settings like using VPN, battery optimizers or firewalls may result in service interruption.',
    ],
  },
  {
    title: 'Terms of Use for Ohm Energy Analyser',
    body: [
      '1.1 Welcome to the terms of use for the Ohm Energy Analyser product promoted and marketed by us along with its associated software applications. The device is intended to assist in the detection of electrical faults or anomalies which may or may not indicate or result in fires, and is intended to be used as an additional layer of protection alongside existing detection and protection mechanisms.',
      '2.1 The Ohm Energy Analyser is intended to supplement, not replace, existing electrical fault and fire detection and protection mechanisms. It is not a standalone solution for electrical faults or fire detection or prevention.',
      '2.2 The Ohm Energy Analyser relies on sensors and connected third party systems and may not detect all electrical faults or anomalies. It may raise false alarms or fail to raise alarms due to lack of data delivery, system failure or events beyond its control.',
      '2.3 The Ohm Energy Analyser must be used in addition to primary electrical fault detection and fire safety systems.',
      '3.1 The Company provides the Ohm Energy Analyser on an as-is basis. Except as stated herein, there are no warranties or representations regarding performance, reliability, merchantability or accuracy.',
      '4.1 The Consumer acknowledges that the Ohm Energy Analyser is only one component of a comprehensive electrical fault detection and fire safety plan and agrees to maintain all other necessary mechanisms.',
      '4.2 The Consumer is solely responsible for taking all necessary precautions, including regular testing and maintenance, proper installation, ensuring access to relevant data and connected systems, maintaining primary safety equipment, regularly inspecting the system, and providing required reports or specifications to government authorities where applicable.',
      '5.1 The Company shall not be liable for damages, losses, injuries or claims arising from failure, delay or defect caused wholly or in part by external damage, failure or incompatibility of third party systems, or use other than as intended.',
      '5.2 To the maximum extent permitted by law, neither party, its affiliates, directors, officers, employees, agents, and licensors shall be liable for indirect, incidental, special, exemplary, consequential or punitive damages related to use or inadequacy of the Ohm Energy Analyser as a standalone system.',
      '6.1 The Ohm Energy Analyser must be installed by a qualified professional in accordance with Company instructions and applicable law. 6.2 The Company is not responsible for issues arising from improper installation, maintenance or use. 6.3 The Consumer is responsible for ensuring the device has access to the internet and connected systems as necessary.',
      '7.1 The Consumer acknowledges that the Ohm Energy Analyser is not infallible and may fail to detect electrical faults, anomalies, fires, or may raise false alarms. 7.2 It is not a substitute for other fault detection and fire protection mechanisms and must be used in conjunction with them.',
      '8.1 By purchasing, installing, or using the Ohm Energy Analyser, the Consumer acknowledges that they have read, understood, and agreed to these Terms of Use.',
      'If you have any questions or want to access personal information we may have of yours, please contact us at support@sustlabs.com.',
    ],
  },
]

function renderSection(section: TermsSection) {
  return (
    <section className="policy-page__section" key={section.title}>
      <h2>{section.title}</h2>
      {section.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  )
}

function TermsConditionsPageComponent() {
  return (
    <main className="policy-page">
      <article className="policy-page__inner">
        <header className="policy-page__header">
          <h1>Terms & Conditions</h1>
          <p>{INTRO_PARAGRAPHS[0]}</p>
        </header>

        <div className="policy-page__content">
          {INTRO_PARAGRAPHS.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {TERMS_SECTIONS.map(renderSection)}
        </div>
      </article>
    </main>
  )
}

export const TermsConditionsPage = memo(TermsConditionsPageComponent)
