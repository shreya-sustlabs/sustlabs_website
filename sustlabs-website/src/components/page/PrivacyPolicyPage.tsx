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
      'To improve the responsiveness of the sites for our users, we may use "cookies", or similar electronic tools to collect information to assign each visitor a unique, random number as a User Identification (User ID) to understand the user\'s individual interests using the Identified Computer. Unless you voluntarily identify yourself (through registration, for example), we will have no way of knowing who you are, even if we assign a cookie to your computer. The only personal information a cookie can contain is information you supply (an example of this is when you ask for our Personalised Horoscope). A cookie cannot read data off your hard drive. Our advertisers may also assign their own cookies to your browser (if you click on their ads), a process that we do not control.',
      'Our web servers automatically collect limited information about your computer\'s connection to the Internet, including your IP address, when you visit our site. Your IP address does not identify you personally. We use this information to deliver our web pages, tailor our site to user interests, measure traffic and let advertisers know the geographic locations from where visitors come.',
    ],
  },
  {
    title: 'LINKS TO THE OTHER SITES',
    body: [
      'Our policy discloses the privacy practices for our own web site only. Our site provides links to other websites also that are beyond our control. We shall in no way be responsible in way for your use of such sites. We shares the sensitive personal information to any third party without obtaining the prior consent of the user in the following limited circumstances:',
      '(a) When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offences. These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing these Terms; for complying with the applicable laws and regulations.',
      '(b) We propose to share such information within group companies and officers and employees of such group companies for processing personal information on our behalf. We ensure that these recipients process such information based on our instructions and in compliance with this Privacy Policy and appropriate confidentiality and security measures.',
    ],
  },
  {
    title: 'INFORMATION SECURITY',
    body: [
      'We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store personal data.',
      'All information gathered on our Website is securely stored within our controlled database. The database is stored on servers secured behind a firewall; access to the servers is password-protected and is strictly limited. However, as effective as our security measures are, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. And, of course, any information you include in a posting to the discussion areas is available to anyone with Internet access.',
      'However the internet is an ever evolving medium. We may change our Privacy Policy from time to time to incorporate necessary future changes. Of course, our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be.',
    ],
  },
  {
    title: 'Thought leadership in privacy: Simplified for users',
    body: [
      'SustLabs understands the importance of data protection and privacy and we as a company are trying to establish industry standards necessary to develop long-term sustainable relationships with Ohm users and partners.',
      'We would like to start our engagement with users on a note where they shall not be subscribed to any services while on-boarding and the default state shall be UNSUBSCRIBED from all features available (including Vyas). You shall always have the option to opt-in (or opt-out) for various services, value-added features and much more. We wish to have informed users who understand SustLabs\' stand on \'right-to-forget\'.',
      'SustLabs, by design, does not share data with any partner companies (through other products). With user consent and only upon activation of services, information curated out of the data shall be provided to the 3rd parties (such as utilities, appliance manufacturing & insurance companies, etc.) but at a later stage and only through SustLabs’ portal. You shall be notified about the new products as-and-when they are launched but users shall always remain un-subscribed unless you opt-in.',
    ],
  },
  {
    title: 'What kind information is collected and why?',
    body: [
      'To provide the SustLabs Products, we must analyse overall electricity consumption & process electrical-appliances\' level information. The type of information that is collected depends on the electricity usage at the household level. SustLabs collects information when members of the household or related users initiate or access SustLabs’ services like your contact information, such as full name, mobile number and email address; your username and password to provide you with platform access; your appliances’ information and other information related to your home. This can include information in or about the appliances that you provide (e.g. metadata), such as the type of appliance, date of purchase or warranty card; electricity-utility billing information; and information that you provide when you contact or engage platform support regarding the Service.',
      'We use the information that we have to conduct and support research and innovation on topics of energy efficiency, appliance maintenance and longevity, etc. to promote energy lean lifestyle.',
      'We also use user-information to respond to users when they contact us.'
    ],
  },
  {
    title: 'How do we ensure minimum data is stored?',
    body: [
      'SustLabs does not seek any personal information beyond contact and electrical appliances details which is relevant for analysis and training the bot (Ohm).',
      'We do not assume every input information provided by the user is accurate or authentic, hence strict system generated screening processes are being developed.',
      'We highly recommend users to change their system generated password (and keep their password confidential). There are no limits to the number of user access to the same house-data.',
      'To mitigate risk that inevitably comes as the amount of user data increases, strategic deletion is done. User information has a lifespan & we consistently purge stale data from servers to ensure the information accessed is limited to valuable data and does not pose a security threat.',
    ],
  },
  {
    title: 'How processes are created?',
    body: [
      'Proactively introducing features such as \'Right to Forget\', and adopting many other industry best practices instead of reacting to the change in data regulatory standards.',
      'Privacy as a default is mentioned earlier in the document where the default user state is un-subscribed of all the features and additional services.'],
  },
  {
    title: 'Privacy by design',
    body: [
      'The technology development block (isolated from the user data warehouse), which is core to our product, works on training data-sets as a part of an assisted learning model where users can label the appliances which otherwise the bot is able to detect but not identify. Algorithms would process the real-time consumption data which is seen in the appliance (and over-all) data warehousing.',
      'The operations block (contains information against encrypted user details), shall contain real-time information flowing through them but through best in-class infrastructure (offered by Oracle). Access to this information would be available only to the process owners such as Chief of Data (or Chief Executive Officer).',
      'The user data block (isolated block with unidirectional information flow for user mapping) contains information collected from members of the household or related users when they initiate or access SustLabs’ services like contact information, such as full name, mobile number and email address; your username and password to provide you with platform access; appliances’ information and other information related to user home. This can include information about the appliances provided by the user (e.g. metadata), such as the type of appliance, date of purchase or warranty card; electricity-utility; and other information that users provide when they contact or engage platform support regarding the services. This block can only be accessed by the Chief of Data (or Executive) Officer.'
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
      'We have created a responsibility matrix. As described in the block diagram above, access defines the security layers and responsibilities which allows focused assessments of processes.',
      'Documenting processes and procedures allows us to create process flow maps. This helps us understand current deficiencies and defects.',
      'Assembling tools that are working for SustLabs. We have been able to equip processes owners with the required set of tools and are in the processes of strengthening it further.',
      'Incident response plan\* is being created as a proactive exercise instead of reacting to actual system failures.'
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
      '“Application” or “App” means the software program provided by the Company downloaded by You on any electronic device, named Ohm Assistant',
      '“Application Store” or “ App Store” means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.',
      '“Affiliate” means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.      ',
      '“Account” means a unique account created for You to access our Service or parts of our Service.',
      '“Company” (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Sustainable Reference Analytics Pvt Ltd',
      '“Country” refers to India.',
      '“Content” refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content.',
      '“Device” means any device that can access the Service such as a computer, a cell phone or a digital tablet.',
      '“Feedback” means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service.',
      '“Service” refers to the Website.',
      '“Terms and Conditions” (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. ',
      '“Third-party Social Media Service” means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.',
      '“Website” refers to Ohm Assistant/ SustLabs, accessible from https://ohmassistant.com/ /https://sustlabs.com/',
      '“You” means the individual accessing or using the Service, or the company, or other legal entity onbehalf of which such individual is accessing or using the Service, as applicable.',
      'We are Sustainable Reference Analytics Pvt. Ltd, doing business as Ohm Assistant (Company, we, us, or our), a company registered in India at CM-10, SINE, CSRE Building, IIT Bombay, Powai, Mumbai-400076, MH, India.',
      'We operate the mobile application Ohm Assistant (the App), as well as any other related products and services that refer or link to these legal terms (the Legal Terms) (collectively, the Services). Ohm Assistant app helps users track and monitor their energy consumption to improve energy efficiency You can contact us by email at support@sustlabs.com or by mail to CM-10, SINE, CSRE Building, IIT Bombay, Powai, Mumbai-400076, MH, India',
      'These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (you), and Sustainable Reference Analytics Pvt. Ltd, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY. ',
      'We will provide you with prior notice of any scheduled changes to the Services you are using. Changes to Legal Terms will become effective days after the notice is given, except if the changes apply to new functionality, security updates, bug fixes, and a court order, in which case the changes will be effective immediately. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms. If you disagree with such changes, you may terminate Services as per the section TERM AND TERMINATION. ',
      'The Services are intended for users who are at least 18 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services. ',
    ],
  },
  {
    title: '2. Acknowledgment',
    body: [
      'These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.',
      'Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.',
      'By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.'
    ],
  },
  {
    title: '3. Our Services',
    body: [
      'The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. '
    ],
  },
  {
    title: '4. Data Protection and GDPR Compliance',
    body: [
      'We comply with the General Data Protection Regulation (GDPR) (EU) 2016/679 and are committed to protecting your privacy.',
      'We may collect personal data such as your name, contact information and usage data to provide and improve our services, communicate with you and comply with legal obligations.',
      'We process personal data based on consent, contract performance, legal obligations or legitimate interests that are not overridden by your rights.',
      'Under GDPR, you have the right to access, rectify, delete, or restrict the processing of your data, object to its use, and request data portability. You may also withdraw consent at any time.',
      'We take appropriate measures to protect your data and retain it only as long as necessary for the purposes described.',
      'We may share your data with third parties to help us provide our services. If we transfer your data outside the EEA, we will ensure adequate safeguards are in place.',
      'Our website uses cookies to improve your experience.',
      'If you have questions or wish to exercise your rights, please contact us at support@sustlabs.com',
      'By using our app, you agree to this GDPR clause.',
      'We partner with Microsoft Clarity and Microsoft Advertising to capture how you use and interact with our website through behavioral metrics, heatmaps, and session replay to improve and market our products/services. Website usage data is captured using first and third-party cookies and other tracking technologies to determine the popularity of products/services and online activity. Additionally, we use this information for site optimization, fraud/security purposes, and advertising. For more information about how Microsoft collects and uses your data, visit the Microsoft Privacy Statement.'
    ],
  },
  {
    title: '5. Intellectual Property Rights',
    body: [
      "We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the Content), as well as the trademarks, service marks, and logos contained therein (the Marks). ', 'The Content and Marks are provided in or through the Services as is for your personal, non-commercial use or internal business purpose only. Subject to compliance with these Legal Terms, we grant a non-exclusive, non-transferable, revocable licence to access the Services and download or print properly accessed Content.",
      "Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world. ",
      "The Content and Marks are provided in or through the Services 'AS IS' for your personal, non-commercial use or internal business purpose only. ",
      "Your use of our services subject to your compliance with these Legal Terms, including the 'PROHIBITED ACTIVITIES' section below, we grant you a non-exclusive, non-transferable, revocable licence to: ",
      "access the Services; and ",
      "download or print a copy of any portion of the Content to which you have properly gained access. ",
      "solely for your personal, non-commercial use or internal business purpose. "
    ],
  },
  {
    title: '6. User Accounts',
    body: [
      'When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.',
      'You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service.',
      'You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account.',
      'You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than You without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.'
    ],
  },
  {
    title: '7. Content',
    body: [
      'Our Service allows You to post Content. You are responsible for the Content that You post to the Service, including its legality, reliability, and appropriateness.',
      'By posting Content to the Service, You grant Us the right and licence to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of Your rights to any Content You submit, post or display on or through the Service and You are responsible for protecting those rights. You agree that this licence includes the right for Us to make Your Content available to other users of the Service, who may also use Your Content subject to these Terms.',
      'You represent and warrant that: (i) the Content is Yours (You own it) or You have the right to use it and grant Us the rights and license as provided in these Terms, and (ii) the posting of Your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.',
      'The Company is not responsible for the content of the Service\'s users. You expressly understand and agree that You are solely responsible for the Content and for all activity that occurs under your account, whether done so by You or any third person using Your account.',
      'You may not transmit any Content that is unlawful, offensive, upsetting, intended to disgust, threatening, libellous, defamatory, obscene or otherwise objectionable. Examples of such objectionable Content include, but are not limited to, the following:',
      'Unlawful or promoting unlawful activity.',
      'Defamatory, discriminatory, or mean-spirited content, including references or commentary about religion, race, sexual orientation, gender, national/ethnic origin, or other targeted groups.',
      'Spam, machine or randomly generated, constituting unauthorised or unsolicited advertising, chain letters, any other form of unauthorised solicitation, or any form of lottery or gambling.',
      'Containing or installing any viruses, worms, malware, trojan horses, or other content that is  designed or intended to disrupt, damage, or limit the functioning of any software, hardware or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of a third person.',
      'Infringing on any proprietary rights of any party, including patent, trademark, trade secret, copyright, right of publicity or other rights.',
      'Impersonating any person or entity including the Company and its employees or representatives.',
      'Violating the privacy of any third person.',
      'False information and features.',
      'The Company reserves the right, but not the obligation, to, in its sole discretion, determine whether or not any Content is appropriate and complies with this Terms, refuse or remove this Content. The Company further reserves the right to make formatting and edits and change the manner of any Content. The Company can also limit or revoke the use of the Service if You post such objectionable Content. As the Company cannot control all content posted by users and/or third parties on the Service, you agree to use the Service at your own risk. You understand that by using the Service You may be exposed to content that You may find offensive, indecent, incorrect or objectionable, and You agree that under no circumstances will the Company be liable in any way for any content, including any errors or omissions in any content, or any loss or damage of any kind incurred as a result of your use of any content.',
      'Although regular backups of Content are performed, the Company does not guarantee there will be no loss or corruption of data.',
      'Corrupt or invalid backup points may be caused by, without limitation, Content that is corrupted prior to being backed up or that changes during the time a backup is performed.',
      'The Company will provide support and attempt to troubleshoot any known or discovered issues that may affect the backups of Content. But You acknowledge that the Company has no liability related to the integrity of Content or the failure to successfully restore Content to a usable state.',
      'You agree to maintain a complete and accurate copy of any Content in a location independent of the Service.',
    ],
  },
  {
    title: '8. Copyright Policy',
    body: [
      'We respect the intellectual property rights of others. It is Our policy to respond to any claim that Content posted on the Service infringes a copyright or other intellectual property infringement of any person.',
      'If You are a copyright owner, or authorized on behalf of one, and You believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, You must submit Your notice in writing to the attention of our copyright agent via email support@sustlabs.com and include in Your notice a detailed description of the alleged infringement.',
      'You may be held accountable for damages (including costs and attorneys\' fees) for misrepresenting that any Content is infringing Your copyright.',


    ],
  },
  {
    title: '9. Your Feedback to Us',
    body: [
      'You assign all rights, title and interest in any Feedback You provide the Company. If for any reason such assignment is ineffective, You agree to grant the Company a non-exclusive, perpetual, irrevocable, royalty free, worldwide right and license to use, reproduce, disclose, sub-license, distribute, modify and exploit such Feedback without restriction.'
    ],
  },
  {
    title: '10. Links to Other Websites',
    body: [
      'Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.',
      'The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.',
      'We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.'
    ],
  },
  {
    title: '11. Mobile Application License',
    body: [
      'If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application licence contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavour, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.',
      'The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an App Distributor) to access the Services: (1) the licence granted to you for our App is limited to a non-transferable licence to use the application on a device that utilises the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor\'s terms of service; (2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application licence contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a terrorist supporting country and (ii) you are not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the App, e.g. if you have a VolP application, then you must not be in violation of their wireless data service agreement when using the App; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application licence contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application licence contained in these Legal Terms against you as a third-party beneficiary thereof.  '
    ],
  },
  {
    title: '12. Termination',
    body: [
      'We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.',
      'Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may simply discontinue using the Service.',
    ],
  },
  {
    title: '13. Limitation of Liability',
    body: [
      'Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven\'t purchased anything through the Service.',
      'To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.',
      'Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party\'s liability will be limited to the greatest extent permitted by law.',
    ],
  },
  {
    title: '14. "AS IS" and "AS AVAILABLE" Disclaimer',
    body: [
      'The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.',
      'Without limiting the foregoing, neither the Company nor any of the company\'s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.',
      'Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.'
    ],
  },
  {
    title: '15. Modification and Interruptions',
    body: [
      'We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.',
      'We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith. '
    ],
  },
  {
    title: '16. Corrections',
    body: [
      'There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice. '],
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
      'If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.',
      "Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.",
    ],
  },
  {
    title: '20. Changes to These Terms and Conditions',
    body: [
      'We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.',
      'By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service'
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