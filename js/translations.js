/**
 * NL / EN strings keyed by data-i18n attribute.
 * Use data-i18n-html for trusted HTML snippets (bold tags only).
 */
const I18N_STRINGS = {
  nav_home: { nl: 'Home', en: 'Home' },
  nav_about: { nl: 'Over mij', en: 'About me' },
  nav_work: { nl: 'Werk', en: 'Work' },
  nav_jinet: { nl: 'JiNet Solutions', en: 'JiNet Solutions' },
  nav_contact: { nl: 'Contact', en: 'Contact' },

  footer_copyright: {
    nl: '2026 Neïel Altmann. Alle rechten voorbehouden.',
    en: '2026 Neïel Altmann. All rights reserved.',
  },
  footer_jinet: {
    nl: '2026 JiNet Solutions. Alle rechten voorbehouden.',
    en: '2026 JiNet Solutions. All rights reserved.',
  },

  idx_role_title: { nl: 'Neïel Altmann', en: 'Neïel Altmann' },
  idx_role_sub: {
    nl: 'Senior System Engineer & Junior Software Developer',
    en: 'Senior System Engineer & Junior Software Developer',
  },
  idx_location: { nl: 'Paramaribo, Suriname', en: 'Paramaribo, Suriname' },
  idx_btn_work: { nl: 'Bekijk mijn werk', en: 'View my work' },
  idx_btn_about: { nl: 'Meer over mij', en: 'More about me' },
  idx_stat_years: { nl: 'Jaar ervaring', en: 'Years experience' },
  idx_stat_projects: { nl: 'Projecten', en: 'Projects' },
  idx_stat_cert: { nl: 'Gecertificeerd', en: 'Certified' },

  idx_about_title: { nl: 'Over mij', en: 'About me' },
  idx_about_p1: {
    nl: 'Ik ben een <strong>Senior System Engineer</strong> en <strong>Junior Software Developer</strong> gevestigd in Paramaribo, Suriname. Ik ben gespecialiseerd in opzetten, overnemen en onderhouden van netwerken, maar ik ben ook ervaren in het bouwen van websites, webapps, mobile apps en Windows-apps.',
    en: 'I am a <strong>Senior System Engineer</strong> and <strong>Junior Software Developer</strong> based in Paramaribo, Suriname. I specialize in deploying, taking over and maintaining networks, and I am also experienced in building websites, web apps, mobile apps and Windows apps.',
  },
  idx_about_p2: {
    nl: 'Bij <strong>ET-IT Consultancy</strong> werk ik als Senior System Engineer sinds oktober 2025. Daarnaast heb ik mijn eigen bedrijf <strong>JiNet Solutions</strong> als bijbaan naast mijn studie.',
    en: 'At <strong>ET-IT Consultancy</strong> I work as a Senior System Engineer since October 2025. I also run my own company <strong>JiNet Solutions</strong> alongside my studies.',
  },
  idx_about_p3: {
    nl: 'Ik heb ervaring met firewalls, Windows-servers, hypervisors, VPN-oplossingen, camera (NVR)-installaties, hardware-/software-reparaties en website-/applicatieontwikkeling.',
    en: 'I have experience with firewalls, Windows servers, hypervisors, VPN solutions, camera (NVR) installations, hardware/software repairs and website/application development.',
  },
  idx_edu_title: { nl: 'Opleiding & certificaten', en: 'Education & certifications' },

  idx_feat_title: { nl: 'Ervaring', en: 'Experience' },
  idx_feat_sub: {
    nl: 'Mijn professionele ervaring en expertise',
    en: 'My professional experience and expertise',
  },
  idx_card_net_title: { nl: 'Netwerk Engineering', en: 'Network engineering' },
  idx_card_net_desc: {
    nl: 'Opzetten en onderhouden van netwerken, firewalls, Windows-servers, hypervisors en VPN-oplossingen voor bedrijven.',
    en: 'Designing and maintaining networks, firewalls, Windows servers, hypervisors and VPN solutions for businesses.',
  },
  idx_card_soft_title: { nl: 'Software Development', en: 'Software development' },
  idx_card_soft_desc: {
    nl: 'Ontwikkeling van websites en applicaties. Stage bij Datasur als Junior Software Developer.',
    en: 'Building websites and applications. Internship at Datasur as Junior Software Developer.',
  },
  idx_card_jinet_title: { nl: 'JiNet Solutions', en: 'JiNet Solutions' },
  idx_card_jinet_desc: {
    nl: 'Mijn eigen bedrijf voor IT-diensten: hardware-/software-reparaties, camera-installaties en technische support.',
    en: 'My own IT services company: hardware/software repairs, camera installations and technical support.',
  },
  idx_feat_more: { nl: 'Meer over mijn ervaring', en: 'More about my experience' },

  idx_projects_title: { nl: 'Projecten', en: 'Projects' },
  idx_projects_sub: {
    nl: 'Belangrijke projecten en werk',
    en: 'Notable projects and work',
  },
  idx_proj_jipos_title: { nl: 'Ji Point of Sale', en: 'Ji Point of Sale' },
  idx_proj_jipos_desc: {
    nl: 'Gratis Point of Sale-app voor kleine en grote ondernemingen. Cross-platform oplossing voor voorraad, offertes en verkoop.',
    en: 'Free point-of-sale app for small and large businesses. Cross-platform inventory, quotes and sales.',
  },
  idx_proj_jipos_btn: { nl: 'jipos.vercel.app', en: 'jipos.vercel.app' },
  idx_proj_net_title: { nl: 'Networking-project', en: 'Networking project' },
  idx_proj_net_desc: {
    nl: 'Access Point-installatie voor een klant van ET-IT Consultancy. Professionele netwerkimplementatie op locatie.',
    en: 'Access point installation for an ET-IT Consultancy customer. Professional on-site network rollout.',
  },
  idx_proj_net_tag: { nl: 'ET-IT Consultancy', en: 'ET-IT Consultancy' },
  idx_proj_frost_title: { nl: 'FrostSense', en: 'FrostSense' },
  idx_proj_frost_desc: {
    nl: 'Arduino ESP32-temperatuurmeter voor koelcellen. Helpt bederf te voorkomen en ondersteunt certificering.',
    en: 'Arduino ESP32 temperature sensor for cold rooms. Helps prevent spoilage and supports compliance.',
  },
  idx_proj_frost_tag: { nl: 'IoT-project', en: 'IoT project' },

  idx_skills_title: { nl: 'Vaardigheden', en: 'Skills' },
  idx_skills_sub: {
    nl: 'Technologieën en tools waar ik mee werk',
    en: 'Technologies and tools I work with',
  },
  idx_skill_net_title: { nl: 'Netwerk Engineering', en: 'Network engineering' },
  idx_skill_net_body: {
    nl: 'CCNA, firewalls, VPN, TCP/IP, VoIP, netwerkbeveiliging, DNS',
    en: 'CCNA, firewalls, VPN, TCP/IP, VoIP, network security, DNS',
  },
  idx_skill_sys_title: { nl: 'System Admin', en: 'System administration' },
  idx_skill_sys_body: {
    nl: 'Windows Server, hypervisors, NVR',
    en: 'Windows Server, hypervisors, NVR',
  },
  idx_skill_web_title: { nl: 'Web Development', en: 'Web development' },
  idx_skill_web_body: {
    nl: 'HTML, CSS, JavaScript, PHP, Bootstrap, Laravel, Python',
    en: 'HTML, CSS, JavaScript, PHP, Bootstrap, Laravel, Python',
  },
  idx_skill_dev_title: { nl: 'Software Development', en: 'Software development' },
  idx_skill_dev_body: {
    nl: 'Flutter, Kotlin, C++, C#, Java, Windows-apps',
    en: 'Flutter, Kotlin, C++, C#, Java, Windows apps',
  },

  ct_title: { nl: 'Contact', en: 'Contact' },
  ct_sub: { nl: 'Laten we samenwerken', en: "Let's work together" },
  ct_social_heading: { nl: 'Social media', en: 'Social media' },
  ct_personal_heading: { nl: 'Persoonlijk', en: 'Personal' },
  ct_jinet_heading: { nl: 'JiNet Solutions', en: 'JiNet Solutions' },
  ct_platform_linkedin: { nl: 'LinkedIn', en: 'LinkedIn' },
  ct_platform_facebook: { nl: 'Facebook', en: 'Facebook' },
  ct_platform_whatsapp: { nl: 'WhatsApp', en: 'WhatsApp' },
  ct_platform_tiktok: { nl: 'TikTok', en: 'TikTok' },
  ct_platform_whatsapp_bus: { nl: 'WhatsApp Business', en: 'WhatsApp Business' },
  ct_email_heading: { nl: 'E-mail', en: 'Email' },
  ct_email_personal: { nl: 'Persoonlijk', en: 'Personal' },
  ct_email_jinet: { nl: 'JiNet Solutions', en: 'JiNet Solutions' },
  ct_email_etit: { nl: 'ET-IT Consultancy', en: 'ET-IT Consultancy' },
  ct_email_stage: { nl: 'Stage / Datasur', en: 'Internship / Datasur' },
  ct_location_heading: { nl: 'Locatie', en: 'Location' },
  ct_location_city: { nl: 'Paramaribo, Suriname', en: 'Paramaribo, Suriname' },
  ct_remote_note: {
    nl: 'Beschikbaar voor remote werk en projecten',
    en: 'Available for remote work and projects',
  },

  work_title: { nl: 'Mijn werk', en: 'My work' },
  work_desc: {
    nl: 'Netwerk- én softwareprojecten vind je hier onder elkaar. Gebruik de sprong-links om naar een blok te gaan.',
    en: 'Network and software projects are grouped on this page. Use the jump links to move to each block.',
  },
  work_hub_net: { nl: 'Netwerk & infra ↓', en: 'Networking & infra ↓' },
  work_hub_soft: { nl: 'Software ↓', en: 'Software ↓' },
  work_sec_net: { nl: 'Netwerk Engineering', en: 'Network engineering' },
  work_sec_soft: { nl: 'Software Development', en: 'Software development' },
  work_sec_jinet: { nl: 'JiNet Solutions — mijn bedrijf', en: 'JiNet Solutions — my company' },
  work_view: { nl: 'Bekijk project', en: 'View project' },

  work_firewall_title: { nl: 'Enterprise Firewall Setup', en: 'Enterprise firewall setup' },
  work_firewall_desc: {
    nl: 'Opzetten en configureren van enterprise firewalls voor beveiligde netwerktoegang.',
    en: 'Deploying and configuring enterprise firewalls for secure network access.',
  },
  work_vpn_title: { nl: 'VPN-infrastructuur', en: 'VPN infrastructure' },
  work_vpn_desc: {
    nl: 'Implementatie van VPN-oplossingen voor veilig werken op afstand.',
    en: 'Implementing VPN solutions for secure remote work.',
  },
  work_nvr_title: { nl: 'Camera (NVR)-installatie', en: 'Camera (NVR) installation' },
  work_nvr_desc: {
    nl: 'Installatie en configuratie van NVR-camerasystemen voor bedrijven.',
    en: 'Installing and configuring NVR camera systems for businesses.',
  },
  work_stage_title: { nl: 'Stageproject', en: 'Internship project' },
  work_stage_desc: {
    nl: 'Softwareontwikkeling tijdens stage bij Datasur (apr–jul 2025).',
    en: 'Software development during internship at Datasur (Apr–Jul 2025).',
  },
  work_web_title: { nl: 'Website-ontwikkeling', en: 'Website development' },
  work_web_desc: {
    nl: 'Ontwikkeling van websites en webapplicaties voor klanten.',
    en: 'Building websites and web applications for clients.',
  },
  work_portfolio_title: { nl: 'Portfolio-website', en: 'Portfolio website' },
  work_portfolio_desc: {
    nl: 'Deze portfolio gebouwd met HTML, CSS en JavaScript.',
    en: 'This portfolio built with HTML, CSS and JavaScript.',
  },
  work_hw_title: { nl: 'Hardware-reparatie', en: 'Hardware repair' },
  work_hw_desc: {
    nl: 'Reparatie en upgrades van computers en laptops voor particulieren en bedrijven.',
    en: 'Repairing and upgrading PCs and laptops for consumers and businesses.',
  },
  work_sw_title: { nl: 'Software-installatie', en: 'Software installation' },
  work_sw_desc: {
    nl: 'Installatie van Office, AutoCAD, Photoshop en andere software.',
    en: 'Installing Office, AutoCAD, Photoshop and other software.',
  },
  work_sup_title: { nl: 'Technische support', en: 'Technical support' },
  work_sup_desc: {
    nl: 'Onderhoud en support voor IT-infrastructuren van kleine bedrijven.',
    en: 'Maintenance and support for small-business IT infrastructures.',
  },

  ab_hero_title: { nl: 'Dit is mijn verhaal', en: 'This is my story' },
  ab_hero_lead: {
    nl: 'Van student tot Senior System Engineer & ondernemer in Suriname',
    en: 'From student to Senior System Engineer & entrepreneur in Suriname',
  },
  ab_stat_start: { nl: 'Start opleiding', en: 'Education starts' },
  ab_stat_jinet: { nl: 'Software Developer', en: 'Software Developer' },
  ab_stat_senior: { nl: 'Senior Engineer', en: 'Senior engineer' },
  ab_cap_grad: { nl: 'Diploma-uitreiking — Natin 2025', en: 'Graduation ceremony — Natin 2025' },
  ab_story_title: { nl: 'Mijn verhaal', en: 'My story' },
  ab_story_p1: {
    nl: 'Ik ben Neïel Altmann, een gepassioneerde IT-professional uit Paramaribo, Suriname. Mijn reis in technologie begon tijdens mijn Software Engineering-opleiding aan Natin, waar ik mijn interesse voor netwerken én softwareontwikkeling ontdekte.',
    en: 'I am Neïel Altmann, an IT professional from Paramaribo, Suriname. My journey started during Software Engineering studies at Natin, where I discovered my passion for both networking and software development.',
  },
  ab_story_p2: {
    nl: 'Ik werk als Senior System Engineer bij ET-IT Consultancy en ondersteun klanten met complexe netwerken: firewalls, VPN, Windows-servers en hypervisors — veilig en efficiënt.',
    en: 'I work as a Senior System Engineer at ET-IT Consultancy, supporting customers with complex networks: firewalls, VPN, Windows servers and hypervisors — safely and efficiently.',
  },
  ab_story_p3: {
    nl: 'Daarnaast run ik JiNet Solutions: IT-diensten voor kleine bedrijven en particulieren, van reparaties tot netwerkprojecten en websites.',
    en: 'I also run JiNet Solutions: IT services for small businesses and individuals, from repairs to network projects and websites.',
  },
  ab_exp_title: { nl: 'Ervaring', en: 'Experience' },
  ab_edu_title: { nl: 'Opleiding & certificaten', en: 'Education & certifications' },
  ab_cert_bsc: {
    nl: 'Bachelor in ICT in Software Engineering',
    en: 'Bachelor in ICT in Software Engineering',
  },
  ab_cert_se: { nl: 'Software Engineering', en: 'Software Engineering' },
  ab_cert_cisco: { nl: 'Cisco-certificeringen', en: 'Cisco certifications' },
  ab_cert_ccna: { nl: 'CCNA-certificering', en: 'CCNA certification' },
  ab_cert_itn: { nl: 'ITN-certificering — mei 2023', en: 'ITN certification — May 2023' },
  ab_detail_title: { nl: 'Vaardigheden in detail', en: 'Skills in detail' },

  net_hero_title: { nl: 'Netwerk Engineering', en: 'Network engineering' },
  net_hero_sub: {
    nl: 'Enterprise netwerkoplossingen en infrastructuur',
    en: 'Enterprise network solutions and infrastructure',
  },
  net_cert_title: { nl: 'Certificeringen', en: 'Certifications' },
  net_cert_ccna_body: { nl: 'Cisco Certified Network Associate', en: 'Cisco Certified Network Associate' },
  net_cert_ccna_when: { nl: 'Certificering: mei 2023', en: 'Certified: May 2023' },
  net_cert_sec_title: { nl: 'Netwerkbeveiliging', en: 'Network security' },
  net_cert_sec_body: {
    nl: 'Beveiliging en hardening van netwerken',
    en: 'Network security and hardening',
  },
  net_cert_sec_note: { nl: 'Specialisatie', en: 'Specialization' },
  net_cert_cloud_title: { nl: 'Cloud Networking', en: 'Cloud networking' },
  net_cert_cloud_body: {
    nl: 'Hybride en cloud-gebaseerde oplossingen',
    en: 'Hybrid and cloud-based solutions',
  },
  net_cert_cloud_note: { nl: 'In ontwikkeling', en: 'In progress' },
  net_proj_title: { nl: 'Netwerkprojecten', en: 'Network projects' },
  net_p1_title: { nl: 'Enterprise Firewall-implementatie', en: 'Enterprise firewall rollout' },
  net_p1_body: {
    nl: 'Implementatie van enterprise firewalls voor een middelgroot bedrijf, inclusief VPN, IDS en contentfiltering.',
    en: 'Enterprise firewall rollout for a mid-sized company, including VPN, IDS and content filtering.',
  },
  net_p2_title: { nl: 'WiFi-infrastructuur upgrade', en: 'WiFi infrastructure upgrade' },
  net_p2_body: {
    nl: 'Volledige WiFi-upgrade voor een school met 50+ access points, centraal beheer en gastportaal.',
    en: 'Full WiFi upgrade for a school with 50+ access points, central management and guest portal.',
  },
  net_p3_title: { nl: 'Servervirtualisatieproject', en: 'Server virtualization project' },
  net_p3_body: {
    nl: 'Migratie naar Hyper-V met back-up en disaster recovery.',
    en: 'Migration to Hyper-V with backup and disaster recovery.',
  },
  net_p4_title: { nl: 'CCTV & NVR-installatie', en: 'CCTV & NVR installation' },
  net_p4_body: {
    nl: '32 camera’s met NVR voor een warehouse, inclusief remote viewing via mobiele app.',
    en: '32 cameras with NVR for a warehouse, including remote viewing via mobile app.',
  },
  net_skills_title: { nl: 'Technische vaardigheden', en: 'Technical skills' },
  net_skill_route: { nl: 'Routing & switching', en: 'Routing & switching' },
  net_skill_route_body: { nl: 'OSPF, EIGRP, BGP, VLAN’s, trunking', en: 'OSPF, EIGRP, BGP, VLANs, trunking' },
  net_skill_sec: { nl: 'Security', en: 'Security' },
  net_skill_sec_body: { nl: 'Firewalls, ACL’s, VPN, IPSec, SSL', en: 'Firewalls, ACLs, VPN, IPSec, SSL' },
  net_skill_wifi: { nl: 'Wireless', en: 'Wireless' },
  net_skill_wifi_body: {
    nl: 'Wi-Fi 6, mesh, controller-based, RADIUS',
    en: 'Wi‑Fi 6, mesh, controller-based, RADIUS',
  },
  net_skill_virt: { nl: 'Virtualization', en: 'Virtualization' },
  net_skill_virt_body: {
    nl: 'Hyper-V, VMware, container networking',
    en: 'Hyper-V, VMware, container networking',
  },
  net_skill_mon: { nl: 'Monitoring', en: 'Monitoring' },
  net_skill_mon_body: { nl: 'Nagios, PRTG, SNMP, syslog', en: 'Nagios, PRTG, SNMP, syslog' },
  net_skill_cctv: { nl: 'CCTV', en: 'CCTV' },
  net_skill_cctv_body: {
    nl: 'NVR, IP-camera’s, PoE, remote access',
    en: 'NVR, IP cameras, PoE, remote access',
  },

  sw_hero_title: { nl: 'Software Development', en: 'Software development' },
  sw_hero_sub: {
    nl: 'Webapplicaties en software-oplossingen',
    en: 'Web applications and software solutions',
  },
  sw_stack_title: { nl: 'Tech stack', en: 'Tech stack' },
  sw_proj_title: { nl: 'Softwareprojecten', en: 'Software projects' },
  sw_p1_title: { nl: 'Persoonlijke portfolio', en: 'Personal portfolio' },
  sw_p1_body: {
    nl: 'Deze portfolio met HTML, CSS en JavaScript — responsive en meertalig.',
    en: 'This portfolio using HTML, CSS and JavaScript — responsive and multilingual.',
  },
  sw_btn_demo: { nl: 'Live demo', en: 'Live demo' },
  sw_btn_gh: { nl: 'GitHub', en: 'GitHub' },
  sw_p2_title: { nl: 'Datasur stageproject', en: 'Datasur internship project' },
  sw_p2_body: {
    nl: 'Interne applicatie voor data en rapportage tijdens stage.',
    en: 'Internal data and reporting application during internship.',
  },
  sw_private: { nl: 'Privé', en: 'Private' },
  sw_p3_title: { nl: 'JiNet Solutions-website', en: 'JiNet Solutions website' },
  sw_p3_body: {
    nl: 'Bedrijfswebsite met diensten en contact.',
    en: 'Business website with services and contact info.',
  },
  sw_btn_view: { nl: 'Bekijken', en: 'View' },
  sw_learn_title: { nl: 'Leerpad & groei', en: 'Learning path & growth' },
  sw_l1_title: { nl: 'HTML & CSS fundamentals', en: 'HTML & CSS fundamentals' },
  sw_l1_body: {
    nl: 'Basis webdevelopment tijdens opleiding',
    en: 'Web fundamentals during studies',
  },
  sw_l2_title: { nl: 'JavaScript & programmeren', en: 'JavaScript & programming' },
  sw_l2_body: {
    nl: 'Programmeerlogica en interactieve websites',
    en: 'Programming logic and interactive websites',
  },
  sw_l3_title: { nl: 'Moderne frameworks', en: 'Modern frameworks' },
  sw_l3_body: {
    nl: 'React en moderne tooling',
    en: 'React and modern tooling',
  },
  sw_l4_title: { nl: 'Full stack & stage', en: 'Full stack & internship' },
  sw_l4_body: {
    nl: 'Backend-ontwikkeling en professionele ervaring',
    en: 'Backend development and professional experience',
  },

  jn_hero_title: { nl: 'JiNet Solutions', en: 'JiNet Solutions' },
  jn_hero_sub: {
    nl: 'Services You Can Rely On',
    en: 'Services You Can Rely On',
  },
  jn_btn_services: { nl: 'Onze diensten', en: 'Our services' },
  jn_about_title: { nl: 'Over JiNet Solutions', en: 'About JiNet Solutions' },
  jn_about_p1: {
    nl: 'JiNet Solutions is mijn IT-bedrijf (sinds 2026) naast studie en fulltime werk. Ik lever IT-diensten aan kleine bedrijven, scholen en particulieren in Paramaribo en omgeving.',
    en: 'JiNet Solutions is my IT company (since 2026) alongside studies and full-time work. I deliver IT services to small businesses, schools and individuals in Paramaribo and surroundings.',
  },
  jn_about_p2: {
    nl: 'Van netwerk en camerabeveiliging tot laptopreparaties en software-installaties — kwaliteit en klanttevredenheid staan voorop.',
    en: 'From networks and CCTV to laptop repairs and software installs — quality and customer satisfaction come first.',
  },
  jn_srv_title: { nl: 'Onze diensten', en: 'Our services' },
  jn_why_title: { nl: 'Waarom JiNet Solutions?', en: 'Why JiNet Solutions?' },
  jn_why_1_t: { nl: 'Snelle service', en: 'Fast service' },
  jn_why_1_b: {
    nl: 'Snelle responstijd en efficiënte oplossingen',
    en: 'Quick response times and efficient fixes',
  },
  jn_why_2_t: { nl: 'Scherpe prijzen', en: 'Fair pricing' },
  jn_why_2_b: {
    nl: 'Concurrerende tarieven voor kwalitatief werk',
    en: 'Competitive rates for quality work',
  },
  jn_why_3_t: { nl: 'Expertise', en: 'Expertise' },
  jn_why_3_b: {
    nl: 'Gecertificeerde en ervaren IT-professional',
    en: 'Certified, experienced IT professional',
  },
  jn_why_4_t: { nl: 'Persoonlijk', en: 'Personal' },
  jn_why_4_b: {
    nl: 'Direct contact en maatwerk',
    en: 'Direct contact and tailored solutions',
  },
  jn_cta_title: { nl: 'Klaar om samen te werken?', en: 'Ready to work together?' },
  jn_cta_body: {
    nl: 'Neem contact op voor een vrijblijvende offerte of advies.',
    en: 'Get in touch for a no-obligation quote or consultation.',
  },
  jn_btn_wa: { nl: 'WhatsApp', en: 'WhatsApp' },
  jn_btn_mail: { nl: 'E-mail', en: 'Email' },

  ab_tl_d1: { nl: '2025 – heden', en: '2025 – present' },
  ab_tl_r1: { nl: 'Senior System Engineer', en: 'Senior System Engineer' },
  ab_tl_b1: {
    nl: 'Ontwerp en onderhoud van netwerken, firewalls, VPN en servers voor enterprise-klanten.',
    en: 'Design and maintenance of networks, firewalls, VPN and servers for enterprise clients.',
  },
  ab_tl_d2: { nl: '2025', en: '2025' },
  ab_tl_r2: { nl: 'Junior Software Developer (stage)', en: 'Junior Software Developer (internship)' },
  ab_tl_b2: {
    nl: 'Softwareprojecten en praktijkervaring in een professionele omgeving.',
    en: 'Software projects and hands-on experience in a professional environment.',
  },
  ab_tl_d3: { nl: '2026 – heden', en: '2026 – present' },
  ab_tl_r3: { nl: 'Eigenaar / system administrator', en: 'Owner / system administrator' },
  ab_tl_b3: {
    nl: 'IT-diensten voor kleine bedrijven: netwerken, reparaties, camera-installaties en webdevelopment.',
    en: 'IT services for SMBs: networks, repairs, camera installations and web development.',
  },
  ab_tl_d4: { nl: '2021 – 2025', en: '2021 – 2025' },
  ab_tl_r4: { nl: 'Software Engineering', en: 'Software Engineering' },
  ab_tl_b4: {
    nl: 'Hogere opleiding met focus op netwerken en programmeren.',
    en: 'Higher education focused on networking and programming.',
  },
  ab_tl_co3: { nl: 'JiNet Solutions', en: 'JiNet Solutions' },

  ab_cert_unasat_year: { nl: '2025 – heden', en: '2025 – present' },
  ab_cert_natin_line1: {
    nl: '2021 – 2023 Medewerker Beheer ICT',
    en: '2021 – 2023 ICT Operations Staff',
  },
  ab_cert_natin_line2: {
    nl: '2023 – 2025 Software Developer',
    en: '2023 – 2025 Software Developer',
  },

  sw_fe_title: { nl: 'Frontend', en: 'Frontend' },
  sw_be_title: { nl: 'Backend', en: 'Backend' },
  sw_tools_title: { nl: 'Tools', en: 'Tools' },
};

const PAGE_TITLES = {
  index: { nl: 'Neïel Altmann — Portfolio', en: 'Neïel Altmann — Portfolio' },
  about: { nl: 'Over mij — Neïel Altmann', en: 'About me — Neïel Altmann' },
  work: { nl: 'Werk — Neïel Altmann', en: 'Work — Neïel Altmann' },
  contact: { nl: 'Contact — Neïel Altmann', en: 'Contact — Neïel Altmann' },
  networking: {
    nl: 'Netwerkprojecten — Neïel Altmann',
    en: 'Network projects — Neïel Altmann',
  },
  software: {
    nl: 'Softwareprojecten — Neïel Altmann',
    en: 'Software projects — Neïel Altmann',
  },
  jinet: { nl: 'JiNet Solutions — IT-diensten', en: 'JiNet Solutions — IT services' },
};

let currentLang = localStorage.getItem('portfolio-language') || 'nl';

function translatePage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-language', lang);
  document.documentElement.lang = lang === 'en' ? 'en' : 'nl';

  const page = document.body && document.body.getAttribute('data-page');
  if (page && PAGE_TITLES[page]) {
    document.title = PAGE_TITLES[page][lang];
  }

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (!key || !I18N_STRINGS[key]) return;
    const entry = I18N_STRINGS[key][lang];
    if (entry === undefined) return;
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = entry;
    } else {
      el.textContent = entry;
    }
  });

  updateLanguageButtons();
}

function updateLanguageButtons() {
  const nlBtn = document.getElementById('lang-nl');
  const enBtn = document.getElementById('lang-en');
  if (nlBtn && enBtn) {
    nlBtn.classList.toggle('active', currentLang === 'nl');
    enBtn.classList.toggle('active', currentLang === 'en');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const nlBtn = document.getElementById('lang-nl');
  const enBtn = document.getElementById('lang-en');

  if (nlBtn) nlBtn.addEventListener('click', function () { translatePage('nl'); });
  if (enBtn) enBtn.addEventListener('click', function () { translatePage('en'); });

  translatePage(currentLang);
});
