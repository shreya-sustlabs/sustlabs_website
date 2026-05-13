import { memo } from 'react'

type PolicySection = {
  body: readonly string[]
  title: string
}

const INTRO_PARAGRAPHS = [
  'The terms "We" / "Us" / "Our" / "Company" individually and collectively refer to SustLabs, Ohm Assistant and App-in-app and the terms "You" / "Your" / "Yourself" refer to the users.',
  'This Privacy Policy is an electronic record in the form of an electronic contract formed under the information Technology Act, 2000 and the rules made thereunder and the amended provisions pertaining to electronic documents / records in various statutes as amended by the information Technology Act, 2000. This Privacy Policy does not require any physical, electronic or digital signature.',
  'This Privacy Policy is a legally binding document between you and SustLabs (both terms defined below). The terms of this Privacy Policy will be effective upon your acceptance of the same (directly or indirectly in electronic form, by clicking on the I accept tab or by use of the website or by other means) and will govern the relationship between you and the Company for your use of the website "Website" (defined below).',
  'This document is published and shall be construed in accordance with the provisions of the Information Technology (reasonable security practices and procedures and sensitive personal data of information) rules, 2011 under Information Technology Act, 2000; that require publishing of the Privacy Policy for collection, use, storage and transfer of sensitive personal data or information.',
  'Please read this Privacy Policy carefully by using the Website, you indicate that you understand, agree and consent to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use this Website.',
  'By providing us your Information or by making use of the facilities provided by the Website, You hereby consent to the collection, storage, processing and transfer of any or all of Your Personal Information and Non-Personal Information by us as specified under this Privacy Policy. You further agree that such collection, use, storage and transfer of Your Information shall not cause any loss or wrongful gain to you or any other person.',
] as const

const PRIVACY_SECTIONS: readonly PolicySection[] = [
  {
    title: 'USER INFORMATION',
    body: [
      'To avail certain services on our Websites, users are required to provide certain information for the registration process namely: a) your name, b) email address, c) sex, d) age, e) PIN code, etc., and / or your occupation, interests, and the like. The Information as supplied by the users enables us to improve our sites and provide you the most user-friendly experience.',
      'All required information is service dependent and we may use the above said user information to maintain, protect, and improve its services (including advertising services) and for developing new services.',
      'Such information will not be considered as sensitive if it is freely available and accessible in the public domain or is furnished under the Right to Information Act, 2005 or any other law for the time being in force.',
    ],
  },
  {
    title: 'COOKIES',
    body: [
      'To improve the responsiveness of the sites for our users, we may use "cookies", or similar electronic tools to collect information to assign each visitor a unique, random number as a User Identification (User ID) to understand the user\'s individual interests using the Identified Computer. Unless you voluntarily identify yourself (through registration, for example), we will have no way of knowing who you are, even if we assign a cookie to your computer.',
      'Our web servers automatically collect limited information about your computer\'s connection to the Internet, including your IP address, when you visit our site. Your IP address does not identify you personally. We use this information to deliver our web pages, tailor our site to user interests, measure traffic and let advertisers know the geographic locations from where visitors come.',
    ],
  },
  {
    title: 'LINKS TO THE OTHER SITES',
    body: [
      'Our policy discloses the privacy practices for our own web site only. Our site provides links to other websites also that are beyond our control. We shall in no way be responsible in way for your use of such sites.',
      '(a) Sensitive personal information may be shared when requested or required by law or by any court or governmental agency or authority for verification of identity, prevention, detection, investigation including cyber incidents, prosecution and punishment of offences, or compliance with applicable laws and regulations.',
      '(b) We propose to share such information within group companies and officers and employees of such group companies for processing personal information on our behalf. We ensure that these recipients process such information based on our instructions and in compliance with this Privacy Policy and appropriate confidentiality and security measures.',
    ],
  },
  {
    title: 'INFORMATION SECURITY',
    body: [
      'We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of data collection, storage and processing practices and security measures, including encryption and physical security measures.',
      'All information gathered on our Website is securely stored within our controlled database. The database is stored on servers secured behind a firewall; access to the servers is password-protected and strictly limited. However, no security system is impenetrable and we cannot guarantee absolute security.',
      'The internet is an ever evolving medium. We may change our Privacy Policy from time to time to incorporate necessary future changes. Our use of information will remain consistent with the policy under which the information was collected.',
    ],
  },
  {
    title: 'Thought leadership in privacy: Simplified for users',
    body: [
      'SustLabs understands the importance of data protection and privacy and we as a company are trying to establish industry standards necessary to develop long-term sustainable relationships with Ohm users and partners.',
      'We would like to start our engagement with users on a note where they shall not be subscribed to any services while onboarding and the default state shall be UNSUBSCRIBED from all features available. You shall always have the option to opt-in or opt-out for various services, value-added features and much more.',
      'SustLabs, by design, does not share data with any partner companies through other products. With user consent and only upon activation of services, information curated out of the data shall be provided to third parties such as utilities, appliance manufacturing and insurance companies through SustLabs portal.',
    ],
  },
  {
    title: 'What kind information is collected and why?',
    body: [
      'To provide the SustLabs Products, we must analyse overall electricity consumption and process electrical-appliances level information. The type of information collected depends on electricity usage at the household level.',
      'SustLabs collects information when members of the household or related users initiate or access SustLabs services, including contact information, username and password, appliance information, home information, appliance metadata, electricity-utility billing information, and information provided during support interactions.',
      'We use the information to conduct and support research and innovation on energy efficiency, appliance maintenance and longevity, and to promote energy lean lifestyle. We also use user-information to respond when users contact us.',
    ],
  },
  {
    title: 'How do we ensure minimum data is stored?',
    body: [
      'SustLabs does not seek any personal information beyond contact and electrical appliances details which is relevant for analysis and training the bot (Ohm).',
      'We do not assume every input information provided by the user is accurate or authentic, hence strict system generated screening processes are being developed.',
      'We highly recommend users to change their system generated password and keep their password confidential. To mitigate risk as the amount of user data increases, strategic deletion is done and stale data is consistently purged from servers.',
      'To mitigate risk that inevitably comes as the amount of user data increases, strategic deletion is done. User information has a lifespan & we consistently purge stale data from servers to ensure the information accessed is limited to valuable data and does not pose a security threat.',
    ],
  },
  {
    title: 'How processes are created?',
    body: [
      'SustLabs proactively introduces features such as Right to Forget and adopts industry best practices instead of reacting to changes in data regulatory standards.',
      'Privacy as a default means the default user state is unsubscribed from all features and additional services.',
    ],
  },
  {
    title: 'Privacy by design',
    body: [
      'The technology development block, isolated from the user data warehouse, works on training data-sets as part of an assisted learning model where users can label appliances which the bot can detect but not identify.',
      'The operations block contains information against encrypted user details and real-time information flowing through best in-class infrastructure. Access is available only to process owners such as the Chief of Data or Chief Executive Officer.',
      'The user data block is an isolated block with unidirectional information flow for user mapping. It contains contact information, account information, appliance information, utility information and support information, and can only be accessed by the Chief of Data or Executive Officer.',
    ],
  },
  {
    title: 'Privacy & security together',
    body: [
      'We do not compromise one for another. While we understand nothing is unhackable, we have created a system that would be a challenge to breakdown. SustLabs relies on industry leaders for privacy and security feature layers.',
      'End-to-end security: Data is protected throughout its lifecycle. We have used state-of-the-art facilities of GCP and other cloud service providers.',
    ],
  },
  {
    title: 'How long do we store the data and in what manner is it stored?',
    body: [
      'Operations level data is purged in frequent intervals and only derived appliance level information is stored as part of learning. We shall also frequently check for stale or redundant data.',
      'User-information data block holds information for longer duration in the form of contact information, meta-data, etc. The information stored in this block is essential for user mapping.',
    ],
  },
  {
    title: 'How do we ensure that the data remains de-identified?',
    body: [
      'Operations block will process the encrypted user information. The real-time engine and the bot analyse anonymous data only and shall always be delinked with user-data server.',
    ],
  },
  {
    title: 'How do we test for vulnerabilities in our infrastructure (Security & safeguarding processes)?',
    body: [
      'Establishing proper workflows may be an outcome of multiple trials and errors but at SustLabs, we are taking this approach with dedicated process owners.',
      'We have created a responsibility matrix. Access defines the security layers and responsibilities which allows focused assessments of processes.',
      'Documenting processes and procedures allows us to create process flow maps. This helps us understand current deficiencies and defects.',
      'We have equipped process owners with the required set of tools and are in the process of strengthening it further. Incident response plan is being created as a proactive exercise instead of reacting to actual system failures.',
    ],
  },
  {
    title: 'Grievance Redressal',
    body: [
      'Redressal Mechanism: Any complaints, abuse or concerns with regards to content and or comment or breach of these terms shall be immediately informed to the designated Grievance Officer as mentioned below via in writing or through email signed with the electronic signature to Kaushik Bose ("Grievance Officer").',
    ],
  },
]

const TERMS_SECTIONS: readonly PolicySection[] = [
  {
    title: 'Terms of Service for usage of Ohm Assistant mobile applications',
    body: [
      'Last updated: 4th July 2024',
      'Please read these terms and conditions carefully before using Our Service.',
    ],
  },
  {
    title: '1. Interpretation and Definitions',
    body: [
      'The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.',
      'Application or App means the software program provided by the Company downloaded by You on any electronic device, named Ohm Assistant.',
      'Application Store or App Store means the digital distribution service operated and developed by Apple Inc. or Google Inc. in which the Application has been downloaded.',
      'Affiliate means an entity that controls, is controlled by or is under common control with a party. Account means a unique account created for You to access our Service or parts of our Service.',
      'Company refers to Sustainable Reference Analytics Pvt Ltd. Country refers to India. Content refers to content such as text, images, or other information posted, uploaded, linked to or otherwise made available by You.',
      'Device means any device that can access the Service. Feedback means feedback, innovations or suggestions sent by You. Service refers to the Website. Website refers to Ohm Assistant / SustLabs, accessible from https://ohmassistant.com/ and https://sustlabs.com/.',
      'You means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service.',
      'We are Sustainable Reference Analytics Pvt. Ltd, doing business as Ohm Assistant, a company registered in India at CM-10, SINE, CSRE Building, IIT Bombay, Powai, Mumbai-400076, MH, India.',
      'We operate the mobile application Ohm Assistant and related products and services. You can contact us by email at support@sustlabs.com or by mail to CM-10, SINE, CSRE Building, IIT Bombay, Powai, Mumbai-400076, MH, India.',
    ],
  },
  {
    title: '2. Acknowledgment',
    body: [
      'These Terms and Conditions govern the use of this Service and set out the rights and obligations of all users regarding use of the Service.',
      'Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.',
    ],
  },
  {
    title: '3. Our Services',
    body: [
      'The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction where such distribution or use would be contrary to law or regulation. Users accessing the Services from other locations are responsible for compliance with local laws.',
    ],
  },
  {
    title: '4. Data Protection and GDPR Compliance',
    body: [
      'We comply with the General Data Protection Regulation (GDPR) (EU) 2016/679 and are committed to protecting your privacy.',
      'We may collect personal data such as your name, contact information and usage data to provide and improve our services, communicate with you and comply with legal obligations.',
      'We process personal data based on consent, contract performance, legal obligations or legitimate interests that are not overridden by your rights.',
      'Under GDPR, you have the right to access, rectify, delete, restrict processing, object to use, request portability and withdraw consent at any time.',
      'We take appropriate measures to protect your data and retain it only as long as necessary. We may share data with third parties to help provide our services and will ensure safeguards where data is transferred outside the EEA.',
      'Our website uses cookies to improve your experience. If you have questions or wish to exercise your rights, contact support@sustlabs.com.',
      'We partner with Microsoft Clarity and Microsoft Advertising to capture behavioral metrics, heatmaps and session replay through cookies and tracking technologies for product improvement, site optimization, fraud/security purposes and advertising.',
    ],
  },
  {
    title: '5. Intellectual Property Rights',
    body: [
      'We are the owner or licensee of all intellectual property rights in our Services, including source code, databases, functionality, software, website designs, audio, video, text, photographs, graphics, trademarks, service marks and logos.',
      'The Content and Marks are provided in or through the Services as is for your personal, non-commercial use or internal business purpose only. Subject to compliance with these Legal Terms, we grant a non-exclusive, non-transferable, revocable licence to access the Services and download or print properly accessed Content.',
    ],
  },
  {
    title: '6. User Accounts',
    body: [
      'When You create an account, You must provide accurate, complete and current information. Failure to do so may result in immediate termination of Your account.',
      'You are responsible for safeguarding Your password and for any activities under Your password. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account.',
      'You may not use a username that is another person or entity name, unlawfully available, subject to rights of another person without authorization, or otherwise offensive, vulgar or obscene.',
    ],
  },
  {
    title: '7. Content',
    body: [
      'Our Service allows You to post Content. You are responsible for Content that You post, including its legality, reliability and appropriateness.',
      'By posting Content, You grant Us the right and licence to use, modify, publicly perform, publicly display, reproduce and distribute such Content on and through the Service.',
      'You may not transmit unlawful, offensive, upsetting, threatening, libellous, defamatory, obscene, spam, malware, infringing, impersonating, privacy-violating, false or otherwise objectionable Content.',
      'The Company may determine whether Content is appropriate, refuse or remove Content, make formatting edits and limit or revoke use of the Service. You use the Service at your own risk.',
      'Although regular backups of Content are performed, the Company does not guarantee there will be no loss or corruption of data. You agree to maintain a complete and accurate copy of Content in a location independent of the Service.',
    ],
  },
  {
    title: '8. Copyright Policy',
    body: [
      'We respect intellectual property rights. If You believe copyrighted work has been copied in a way that constitutes infringement through the Service, submit notice by email to support@sustlabs.com with a detailed description of the alleged infringement.',
    ],
  },
  {
    title: '9. Your Feedback to Us',
    body: [
      'You assign all rights, title and interest in any Feedback You provide to the Company. If that assignment is ineffective, You grant the Company a non-exclusive, perpetual, irrevocable, royalty free, worldwide right and licence to use, reproduce, disclose, sublicense, distribute, modify and exploit such Feedback without restriction.',
    ],
  },
  {
    title: '10. Links to Other Websites',
    body: [
      'Our Service may contain links to third-party websites or services not owned or controlled by the Company. The Company assumes no responsibility for their content, privacy policies or practices.',
    ],
  },
  {
    title: '11. Mobile Application License',
    body: [
      'If you access the Services via the App, we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you.',
      'You shall not decompile, reverse engineer, disassemble, derive source code, decrypt, modify, adapt, improve, translate, create derivative works, violate laws, remove proprietary notices, use the App for unintended commercial purposes, make it available over a network for multiple users, create competing products, send automated queries or unsolicited emails, or misuse proprietary information.',
      'For Apple Store or Google Play downloads, the licence is limited to use on applicable iOS or Android devices under the applicable App Distributor rules. App Distributors have no obligation to provide support and are third-party beneficiaries of these licence terms.',
    ],
  },
  {
    title: '12. Termination',
    body: [
      'We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason, including if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.',
    ],
  },
  {
    title: '13. Limitation of Liability',
    body: [
      'The entire liability of the Company and its suppliers under these Terms shall be limited to the amount actually paid by You through the Service or 100 USD if You have not purchased anything through the Service.',
      'To the maximum extent permitted by law, the Company or its suppliers shall not be liable for special, incidental, indirect or consequential damages, including loss of profits, data, business interruption, personal injury or privacy loss related to use or inability to use the Service.',
    ],
  },
  {
    title: '14. "AS IS" and "AS AVAILABLE" Disclaimer',
    body: [
      'The Service is provided to You as is and as available, with all faults and defects, without warranty of any kind. The Company disclaims warranties of merchantability, fitness for a particular purpose, title, non-infringement and warranties arising from course of dealing or usage.',
      'The Company does not warrant that the Service will meet requirements, achieve intended results, work with other systems, operate without interruption, meet performance standards, be error free, or that errors will be corrected.',
    ],
  },
  {
    title: '15. Modification and Interruptions',
    body: [
      'We reserve the right to change, modify or remove Service contents at any time or for any reason without notice. We do not guarantee the Services will be available at all times and are not liable for interruption, delay, error, suspension or discontinuance.',
    ],
  },
  {
    title: '16. Corrections',
    body: [
      'There may be information on the Services that contains typographical errors, inaccuracies or omissions. We reserve the right to correct errors, inaccuracies or omissions and update information at any time without prior notice.',
    ],
  },
  {
    title: '17. Governing Law',
    body: [
      'The laws of the Country, excluding conflict of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national or international laws.',
    ],
  },
  {
    title: '18. Disputes Resolution',
    body: [
      'If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.',
    ],
  },
  {
    title: '19. Severability and Waiver',
    body: [
      'If any provision of these Terms is held unenforceable or invalid, it will be changed and interpreted to accomplish its objectives to the greatest extent possible and the remaining provisions will continue in full force and effect.',
      'Failure to exercise a right or require performance of an obligation shall not affect a party ability to exercise such right or require such performance later, and waiver of a breach shall not constitute waiver of any subsequent breach.',
    ],
  },
  {
    title: '20. Changes to These Terms and Conditions',
    body: [
      'We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material, We will make reasonable efforts to provide at least 30 days notice before new terms take effect.',
      'By continuing to access or use Our Service after revisions become effective, You agree to be bound by the revised terms. If You do not agree, please stop using the website and Service.',
    ],
  },
  {
    title: '21. Contact Us',
    body: [
      'In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:',
      'Address: Sustainable Reference Analytics Pvt. Ltd (SustLabs), 6033, Rahul Bajaj Technology Information Centre, IIT Bombay, Powai, Mumbai, Maharashtra 400076 India.',
      'Email ID: support@sustlabs.com',
    ],
  },
]

function renderSection(section: PolicySection) {
  return (
    <section className="policy-page__section" key={section.title}>
      <h2>{section.title}</h2>
      {section.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  )
}

function PrivacyPolicyPageComponent() {
  return (
    <main className="policy-page">
      <article className="policy-page__inner">
        <header className="policy-page__header">
          <h1>Privacy policy</h1>
          <p>{INTRO_PARAGRAPHS[0]}</p>
        </header>

        <div className="policy-page__content">
          {INTRO_PARAGRAPHS.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {PRIVACY_SECTIONS.map(renderSection)}
          {TERMS_SECTIONS.map(renderSection)}
        </div>
      </article>
    </main>
  )
}

export const PrivacyPolicyPage = memo(PrivacyPolicyPageComponent)