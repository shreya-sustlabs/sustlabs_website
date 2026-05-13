import { memo } from 'react'

type TermsSection = {
  body: readonly string[]
  title: string
}

const INTRO_PARAGRAPHS = [
  'The terms "We" / "Us" / "Our" / "Company" individually and collectively refer to SustLabs.com and the terms "Visitor" and "User" refer to the users.',
  'Terms for purchase of OHM',
  '  1. The prices shown are inclusive of Taxes (18% GST included).',
  '  2. Payment Terms: Online payment via Net-banking, Debit/ Credit Card/ UPI.',
  '  3. Delivery Period: 4-6 working days after completion of order, depending on the courier partner and the delivery location',
  '  4. App subscription fee of Rs. 30 per month is chargeable and might be reduced or waived off on a case to case basis',
  '  5. Product Warranty - 1 year',
  'This page states the Terms and Conditions under which you (Visitor) may visit this website (“Website”). Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this site. The business, any of its business divisions and/or its subsidiaries, associate companies or subsidiaries to subsidiaries or such other investment companies (in India or abroad) reserve their respective rights to revise these Terms and Conditions at any time by updating this posting. You should visit this page periodically to re-appraise yourself to the Terms and Conditions because they are binding on all users of this Website.'
] as const

const TERMS_SECTIONS: readonly TermsSection[] = [
  {
    title: 'USE OF CONTENT',
    body: [
      'All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing on this site, except as otherwise noted, are properties either owned or used under license, by the business and/or it\'s associate entities who feature on this Website. The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited.',
      'You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective organization\'s or entity\'s written permission.',
      '(A) Security Rules\nVisitors are prohibited from violating or attempting to violate the security of the Web site, including, without limitation, (1) accessing data not intended for such user or logging into a server or account which the user is not authorized to access, (2) attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization, (3) attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus or "Trojan horse" to the Website, overloading, "flooding", "mail bombing" or "crashing", or (4) sending unsolicited electronic mail, including promotions and/or advertising of products or services. Violations of system or network security may result in civil or criminal liability. The business and/or its associate entities will have the right to investigate occurrences that they suspect as involving such violations and will have the right to involve and cooperate with law enforcement authorities in prosecuting users who are involved in such violations.',
      ' (B) General Rules Visitors may not use the Web Site to transmit, distribute, store or destroy material (a) that could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law or regulation, (b) in a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others or violate the privacy or publicity of other personal rights of others, or (c) that is libelous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful.',
    ],
  },
  {
    title: 'INDEMNITY',
    body: [

      'The User unilateral agrees to indemnify and hold harmless, without objection, the Company, its officers, directors, employees and agents from and against any claims, actions and/or demands and/or liabilities and/or losses and/or damages whatsoever arising from or resulting from their use of https://www.sustlabs.com/ or their breach of the terms .'],
  },
  {
    title: 'LIABILITY',
    body: [
      'User agrees that neither Company nor its group companies, directors, officers or employee shall be liable for any direct or/and indirect or/and incidental or/and special or/and consequential or/and exemplary damages, resulting from the use or/and the inability to use the service or/and for the cost of procurement of substitute goods or/and services or resulting from any goods or/and data or/and information or/and services purchased or/and obtained or/and messages received or/and transactions entered into through or/and from the service or/and resulting from unauthorized access to or/and alteration of user\'s transmissions or/and data or/and arising from any other matter relating to the service, including but not limited to, damages for loss of profits or/and use or/and data or other intangible, even if Company has been advised of the possibility of such damages.',
      'Ohm is connected to dangerous voltages. Improper use or installation can be dangerous or even fatal. Please make sure that the installation is done by a qualified professional, and that you follow these guidelines for installation and use: (i) Have the installation done by a qualified electrician, according to local electrical codes. (ii) Do not try to open the Ohm monitor, touch any internal parts, or try to repair it without first contacting Ohm support. (iii) If you believe the monitor or cables may have been damaged, do not try to use them. Please contact Ohm support. 4) Use the Ohm monitor only in India, and only with a 50Hz 240V supply system. 5) Install the Ohm monitor where it will not be exposed to direct sunlight or extremely low or high temperatures. No exposure to water.',
      'User further agrees that Company shall not be liable for any damages arising from interruption, suspension or termination of service, including but not limited to direct or/and indirect or/and incidental or/and special consequential or/and exemplary damages, whether such interruption or/and suspension or/and termination was justified or not, negligent or intentional, inadvertent or advertent.',
      'User agrees that Company shall not be responsible or liable to user, or anyone, for the statements or conduct of any third party of the service. In sum, in no event shall the Company\'s total liability to the User for all damages or/and losses or/and causes of action exceed the amount paid by the User to Company, if any, that is related to the cause of action.',
    ],
  },
  {
    title: 'ACCOUNT CREATION, SUBSCRIPTIONS, RENEWALS AND TERMINATIONS',
    body: [
      'In order to use the Services, you must register and create an account. Certain users are or may be designated as administrative users (“Admin Users”). Admin Users can create additional authorized user accounts and assign certain permissions to such additional accounts. Depending on the level of permissions assigned to your user account, you may not have access to or be able to view or use all of the functions or features of the Services.',
      'You may need to provide certain registration details or other information on behalf of yourself or other users to create an account and to otherwise access and use the Services. It is a condition of your access and use of the Services that all the information you provide is correct, current, and complete.',
      'The Services are available under a basic (free) account or a premium (fee-based) monthly or annual subscription plan as offered on the plan options page. Users may upgrade or downgrade between a basic account and a premium subscription plan. Your agreement for purchasing a paid subscription plan becomes binding upon clicking “I Accept” for a premium plan. Each premium subscription term will automatically renew for the agreed upon term (e.g. 1 month or 12 months), unless you cancel the subscription before the current term expires. The full amount for each renewal term will be charged on the first day of the renewal.',
      'If You terminate a free account or a premium subscription plan, your account will become unusable and your access to the Services will be terminated. Users are not entitled to any refund of subscription fees. We are under no further obligations to you upon your termination of the subscription. SustLabs reserves the right to cancel free accounts or paid subscriptions at any time for any reason.',],
  },
  {
    title: 'User Consent for Communication',
    body: [
      'By using our services, you acknowledge and agree that SustLabs may contact you via WhatsApp, Email, SMS, or Phone Call for purposes including but not limited to:',
      '1. Service updates and support',
      '2. Important account or transactional information',
      '3. Product and feature announcements',
      '4. Marketing and promotional communications (only if explicitly opted in)',
      'You may manage your communication preferences or withdraw your consent at any time by contacting us at support@sustlabs.com or using the unsubscribe/opt-out options provided in our communications.',
    ],
  },
  {
    title: 'BILLING CYCLE',
    body: [
      'The Subscription fee for the service and any other charges you may incur in connection with your use of the service, such as taxes and possible transaction fees, will be charged to your Payment Method on the specific payment date indicated on the "Subscription" page. The length of your billing cycle will depend on the type of subscription that you choose when you signed up for the service. In some cases, your payment date may change, for example, if your Payment Method has not successfully settled, when you change your subscription plan or if your paid Subscription began on a day not contained in a given month. Visit the “Subscription” page on the app to see your next payment date. We may authorize your Payment Method in anticipation of subscription or service-related charges through various methods, including authorizing it for up to approximately one month of service as soon as you register.'
    ],
  },
  {
    title: 'PAYMENT PROCESSING',
    body: [
      'In order to purchase a subscription, you will be required to provide credit or payment card information, your billing address and related information. You represent and warrant that you have the right to use any credit or payment card or other payment mechanism that you submit in connection with the purchase of a subscription and that you have all authority necessary to purchase a subscription using the credit card or payment mechanism that you submit. By submitting such information, you grant us the right to provide such information to third parties for the purposes of facilitating your purchase. You acknowledge and agree that we are not responsible for how any third party credit card or other payment method processor transmits, stores, uses or shares your information.',
    ],
  },
  {
    title: 'DISCLAIMER',
    body: [
      '1. Consequential damages.',
      '2. Hardware and firmware.',
      '3. Appliance detection.',
      'ohm assistant services maybe down in case of scheduled/ unscheduled maintenance for 12hrs, users may be informed prior incase maintenance exceeds 12hrs.Modifying network settings like using vpn, battery optimizers or firewalls etc. may result in service interruption'
    ],
  },
  {
    title: 'Terms of Use for Ohm Energy Analyser',
    body: [
      '1.1 Welcome to the terms of use (“Terms of Use”) for the “Ohm Energy Analyser” product promoted and marketed by us along with its associated software applications (hereinafter referred to as the “Ohm Energy Analyser”). The Ohm Energy Analyser is a device designed to assist in the detection of electrical faults or anomalies which may or may not indicate or result in fires, through sensors and sensor-based software technology, and is intended to be used as an additional tool or layer of protection alongside existing electrical fault and fire detection and protection mechanisms. By purchasing, installing, or using the Ohm Energy Analyser, you (hereinafter referred to as the “Consumer”) agree to the following Terms of Use. Please read them carefully.',
      '2.1 The Ohm Energy Analyser is intended to supplement, not replace, existing electrical fault and fire detection and protection mechanisms. It is not a standalone solution for electrical faults or fire detection or prevention.',
      '2.2 The Ohm Energy Analyser relies on sensors and connected third party systems, and may not detect all electrical faults or anomalies which may or may not result in fires and may, in case of damage, physical interference, or other events beyond the control of the Ohm Energy Analyser, fail to operate as intended. The Ohm Energy Analyser may also raise false alarms or fail to raise alarms due to lack of delivery of data to the sensors, failure of third party systems, etc.',
      '2.3 The Ohm Energy Analyser is not a replacement for safety systems used for detecting and protecting against electrical faults or fires, and must be used in addition to primary electrical fault detection and fire safety / protection systems.',
      '3.1 The Company provides the Ohm Energy Analyser on an "as-is" basis. Except as stated herein, there are no warranties, guarantees, or representations, whether express or implied, regarding the Ohm Energy Analyser\'s performance, reliability, merchantability, or accuracy. Furthermore, the Company does not represent that the Ohm Energy Analyser will be free from errors or interruptions, which may be caused by factors beyond the control of the Ohm Energy Analyser (including, for example, malfunction of other connected systems).',
      '4.1 The Consumer acknowledges that the Ohm Energy Analyser is only one component of the Consumer\'s comprehensive electrical fault detection and fire safety plan and agrees to maintain all other necessary, by law or otherwise, electrical fault detection and fire protection mechanisms.',
      '4.2 The Consumer is solely responsible for taking all necessary precautions and measures to detect electrical faults or anomalies, and prevent fires, including but not limited to:',
      '4.2.1 Regularly testing and maintaining the Ohm Energy Analyser as required under applicable laws and regulations.',
      '4.2.2 Ensuring proper installation of the Ohm Energy Analyser and connected third-party systems.',
      '4.2.3 Ensuring the Ohm Energy Analyser has access to relevant data and third-party systems required for electrical faults and fire detection.',
      '4.2.4 Maintaining other primary electrical fault detention and fire safety equipment, including but not limited to, smoke detectors, fire extinguishers, and fully-functioning MCBs.',
      '4.2.5 Regularly inspecting the Ohm Energy Analyser and connected systems to ensure it is functioning correctly.',
      '4.2.6  Providing data and/or report the specifications and other recorded metrics of the Ohm Energy Analyser to the relevant government authorities, and/or installing necessary ancillary or connected systems, including as required under applicable laws and regulations.',
      '5.1 The Company shall not be liable for any damages, losses, injuries, or claims arising from any failure, delay or defect caused wholly or in part by any errors or interference to the functioning of the Ohm Energy Analyser as a result of any external damage, failure or incompatibility of third party systems, or any such results of use of the Ohm Energy Analyser other than as intended.',
      '5.2  To the maximum extent permitted by applicable law, neither Party, its affiliates, directors, officers, employees, agents, and licensors shall not be liable for any indirect, incidental, special, exemplary, consequential, or punitive damages, including but not limited to loss of profits, revenue, business, savings, goodwill, data, or property, arising from or related to the use, inability to use, failure, or inadequacy of the Ohm Energy Analyser as a standalone electrical faults and/or fire detection system (or otherwise as set out above), whether based on warranty, contract, tort (including negligence), product liability, or any other legal theory, even if the Company has been advised of the possibility of such damages.',
      '6.1 The Ohm Energy Analyser must be installed by a qualified professional in accordance with the Company\'s instructions and any applicable laws or regulations.',
      '6.2 The Company is not responsible for any issues arising from improper installation, maintenance, or use of the Ohm Energy Analyser.',
      '6.3  The Consumer is responsible for ensuring the Ohm Energy Analyser is installed correctly and has access to the internet and other connected systems, as may be necessary for its correct functioning and operation.',
      '7.1 The Consumer acknowledges that the Ohm Energy Analyser is not infallible and may fail to detect electrical faults, anomalies, fires, or raise false alarms.',
      '7.2  The Consumer agrees that the Ohm Energy Analyser is not a substitute for other electrical fault detection and fire protection mechanisms and must be used in conjunction with such mechanisms.',
      '8.1 By purchasing, installing, or using the Ohm Energy Analyser, the Consumer acknowledges that they have read, understood, and agreed to these Terms of Use.',
      'If you have any questions or to access personal information we may have of yours, please contact us at support@sustlabs.com',
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
