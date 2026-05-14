export interface BlogPost {
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  image: string
  metaDescription: string
  body: { type: string; content?: string; items?: string[] }[]
}

export interface Industry {
  slug: string
  label: string
  sub: string
  image: string
  headline: string
  intro: string
  sections: {
    tag: string
    heading: string
    body: string
    bullets: string[]
    image: string
    imageLeft: boolean
  }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cybersecurity-nigeria',
    category: 'Cybersecurity',
    date: 'Mar 12, 2025',
    title: 'Why Nigerian Enterprises Are Increasingly Targeted by Cyber Attacks',
    excerpt: "Ransomware groups are actively targeting West African financial institutions. Here's what the threat landscape looks like and how to prepare your organisation.",
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80',
    metaDescription: 'Nigerian enterprises are becoming prime targets for ransomware attacks. Learn why cybercriminals focus on West African businesses and how to prevent incidents.',
    body: [
      { type: 'p', content: 'Ransomware groups are increasingly focusing on Nigerian enterprises due to rapid digital adoption and uneven cybersecurity maturity. Financial institutions, fintech companies, and large corporations are especially exposed.' },
      { type: 'p', content: 'As businesses expand their digital infrastructure, attackers are exploiting gaps in identity management, cloud security, and employee awareness.' },
      { type: 'h2', content: 'Key reasons for increased attacks' },
      { type: 'ul', items: ['Rapid adoption of cloud services without mature security frameworks', 'High-value financial transactions through digital systems', 'Weak endpoint protection in many organisations', 'Third-party vendor vulnerabilities', 'Human error and phishing susceptibility'] },
      { type: 'h2', content: 'Common attack methods' },
      { type: 'p', content: 'Cybercriminals typically use:' },
      { type: 'ul', items: ['Phishing emails targeting finance departments', 'Compromised VPN credentials', 'Ransomware deployment after lateral movement', 'Data theft before encryption (double extortion)'] },
      { type: 'h2', content: 'How to protect your organisation' },
      { type: 'ul', items: ['Enforce multi-factor authentication everywhere', 'Maintain offline, immutable backups', 'Deploy endpoint detection and response (EDR) tools', 'Train staff on phishing awareness', 'Develop and test incident response plans'] },
      { type: 'h2', content: 'Final takeaway' },
      { type: 'p', content: 'Cybersecurity is no longer optional. The organisations that prepare in advance recover faster, lose less data, and avoid regulatory damage.' },
    ],
  },
  {
    slug: 'digital-transformation',
    category: 'Transformation',
    date: 'Feb 28, 2025',
    title: 'Why Digital Transformation Projects Fail in Enterprises',
    excerpt: 'Most DX projects stall because of people and process problems, not technical ones. Understanding why is the first step to not repeating the same expensive mistakes.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80',
    metaDescription: 'Most digital transformation initiatives fail due to people and process issues — not technology. Discover the real reasons DX projects fail.',
    body: [
      { type: 'p', content: 'Digital transformation failures are rarely caused by technology. Instead, they stem from organisational resistance, unclear processes, and poor alignment between teams.' },
      { type: 'h2', content: 'Common failure causes' },
      { type: 'ul', items: ['Lack of executive ownership', 'Resistance to change in middle management', 'Poorly defined business processes', 'Siloed departments', 'Weak adoption after implementation'] },
      { type: 'h2', content: 'Technology is not the problem' },
      { type: 'p', content: 'Buying new systems does not fix broken workflows. If a process is inefficient manually, it will remain inefficient digitally. The tools are only as effective as the processes and people behind them.' },
      { type: 'h2', content: 'How to make transformation successful' },
      { type: 'ul', items: ['Treat DX as a business initiative, not an IT project', 'Redesign processes before deploying tools', 'Build cross-functional teams', 'Invest in change management', 'Define measurable outcomes'] },
      { type: 'h2', content: 'Conclusion' },
      { type: 'p', content: 'Digital transformation succeeds when organisations change how they work — not just what tools they use.' },
    ],
  },
  {
    slug: 'azure-migration',
    category: 'Cloud',
    date: 'Feb 10, 2025',
    title: 'How to Migrate 200 Users to Microsoft Azure Without Downtime',
    excerpt: 'A step-by-step breakdown of how we planned and executed a zero-disruption Azure migration for a financial services firm — and what made the difference.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80',
    metaDescription: 'Learn how enterprises migrate users to Microsoft Azure without downtime using phased migration, replication, and hybrid cloud architecture.',
    body: [
      { type: 'p', content: 'Enterprise cloud migration requires careful planning to avoid business disruption. A zero-downtime Azure migration is achievable — but it depends entirely on preparation, not speed.' },
      { type: 'h2', content: 'Step 1: Assessment' },
      { type: 'ul', items: ['Identify all applications and dependencies', 'Classify workloads by criticality', 'Map peak usage patterns'] },
      { type: 'h2', content: 'Step 2: Build parallel infrastructure' },
      { type: 'p', content: 'A full Azure environment is created alongside the existing system. Nothing is decommissioned until the new environment is fully validated.' },
      { type: 'h2', content: 'Step 3: Data replication' },
      { type: 'p', content: 'Continuous syncing ensures both environments remain identical. Any changes made in the live environment are reflected in Azure in near real-time.' },
      { type: 'h2', content: 'Step 4: Pilot migration' },
      { type: 'p', content: 'A small user group is migrated first to validate performance, latency, and application compatibility before the full rollout.' },
      { type: 'h2', content: 'Step 5: Phased rollout' },
      { type: 'p', content: 'Users are migrated in batches — typically by department — to limit blast radius in the event of any issues.' },
      { type: 'h2', content: 'Conclusion' },
      { type: 'p', content: 'Zero downtime migration depends on preparation, not speed. The organisations that rush this process are the ones that call us after something has gone wrong.' },
    ],
  },
  {
    slug: 'ndpr-compliance',
    category: 'IT Strategy',
    date: 'Jan 22, 2025',
    title: 'What NDPR Means for IT Teams in Nigeria (2025 Compliance Guide)',
    excerpt: "Nigeria's Data Protection Regulation has real teeth. Here's what IT Directors need to know about compliance obligations, timelines, and how to close the gaps.",
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=700&q=80',
    metaDescription: 'Understand NDPR compliance requirements for Nigerian IT teams, including data protection, access control, and regulatory obligations in 2025.',
    body: [
      { type: 'p', content: 'The Nigerian Data Protection Regulation now directly affects IT operations and compliance structures. For IT Directors, understanding these obligations is no longer optional.' },
      { type: 'h2', content: 'Key responsibilities for IT teams' },
      { type: 'ul', items: ['Data classification and mapping', 'Strong access control policies', 'Secure system design principles', 'Incident reporting readiness', 'Vendor compliance management'] },
      { type: 'h2', content: 'Common compliance gaps' },
      { type: 'ul', items: ['No centralised data inventory', 'Weak identity controls', 'Shadow IT systems outside IT governance', 'Lack of encryption at rest and in transit'] },
      { type: 'h2', content: 'What to focus on in 2025' },
      { type: 'ul', items: ['Automating compliance monitoring', 'Strengthening identity and access management systems', 'Regular compliance audits', 'Comprehensive employee training on data handling'] },
      { type: 'h2', content: 'Conclusion' },
      { type: 'p', content: "NDPR is now an operational requirement, not just a legal framework. IT teams that treat it as such will be better positioned to avoid regulatory penalties and protect their organisation's reputation." },
    ],
  },
  {
    slug: 'managed-it',
    category: 'Managed IT',
    date: 'Jan 8, 2025',
    title: 'Managed IT Services vs In-House IT: What Enterprises Get Wrong',
    excerpt: "Most companies either over-outsource or under-outsource their IT. Here's a practical framework for deciding what to keep in-house and what to hand over.",
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80',
    metaDescription: 'Should you outsource IT services or keep them in-house? Learn the right hybrid model for enterprise IT management.',
    body: [
      { type: 'p', content: 'Many enterprises struggle with deciding what IT functions to outsource. Most make the decision based on cost — which is the wrong starting point.' },
      { type: 'h2', content: 'Common mistakes' },
      { type: 'ul', items: ['Outsourcing without clear SLAs', 'Keeping everything in-house out of habit', 'Choosing vendors based only on cost', 'Lack of clear escalation and accountability paths'] },
      { type: 'h2', content: 'What to consider outsourcing' },
      { type: 'ul', items: ['Helpdesk and end-user support', 'Infrastructure monitoring', 'Backup and disaster recovery management', 'Network operations'] },
      { type: 'h2', content: 'What to keep in-house' },
      { type: 'ul', items: ['IT strategy and roadmap ownership', 'Security governance and policy', 'Architecture decisions'] },
      { type: 'h2', content: 'Best model: hybrid IT' },
      { type: 'p', content: 'Combine internal strategic control with external operational efficiency. Your internal team owns the direction. Your managed services provider owns the execution and uptime.' },
      { type: 'h2', content: 'Conclusion' },
      { type: 'p', content: "The right outsourcing decision is not about cost — it's about capability, accountability, and focus." },
    ],
  },
  {
    slug: 'board-cybersecurity',
    category: 'Leadership',
    date: 'Dec 15, 2024',
    title: 'How to Present Cybersecurity Risk to Your Board Effectively',
    excerpt: 'IT Directors struggle to translate security risk into board-level language. Here are the frameworks and metrics that actually land with non-technical executives.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80',
    metaDescription: 'Learn how IT leaders can communicate cybersecurity risks to boards using business-focused language, metrics, and scenario-based reporting.',
    body: [
      { type: 'p', content: 'IT leaders often struggle to translate technical risks into business impact. The result is board presentations that generate confusion, not decisions.' },
      { type: 'h2', content: 'What boards care about' },
      { type: 'ul', items: ['Financial exposure from a breach', 'Business continuity and operational risk', 'Reputation and regulatory risk', 'Recovery time in the event of an incident'] },
      { type: 'h2', content: 'How to structure your briefing' },
      { type: 'ul', items: ['Start with risk, not technology', 'Translate technical issues into business impact', 'Use real-world scenarios relevant to your industry', 'Focus on trends over time, not point-in-time snapshots', 'End with clear decisions required from the board'] },
      { type: 'h2', content: 'Metrics that resonate' },
      { type: 'ul', items: ['MTTR — Mean Time to Respond to an incident', 'Estimated cost of downtime per hour', 'Patch compliance rate across critical systems', 'Phishing simulation success rate'] },
      { type: 'h2', content: 'Conclusion' },
      { type: 'p', content: "Boards don't need technical detail — they need clear risk visibility and a set of decisions to make." },
    ],
  },
]

export const industries: Industry[] = [
  {
    slug: 'financial-services', label: 'Financial Services', sub: 'Banks · Fintech · Insurance · Capital Markets',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80',
    headline: 'Technology that keeps transactions flowing and data protected.',
    intro: 'We serve banks, fintechs, insurance companies, and capital markets firms across Nigeria and Africa — delivering the infrastructure, security, and custom software that financial services organisations depend on.',
    sections: [
      { tag: 'Core Banking & Infrastructure', heading: 'Systems that never go down, data that never leaks.', body: 'Financial institutions operate under strict regulatory oversight and face the most sophisticated cyber threats of any sector in Nigeria. We design and manage the infrastructure that keeps your operations running — zero-downtime architectures, 24/7 monitoring, and failover systems tested before you need them.', bullets: ['Core banking system integration and uptime management', 'CBN, NDPR, and ISO 27001 compliance architecture', 'Disaster recovery with tested RTO and RPO commitments', 'Multi-branch network design and management'], image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80', imageLeft: true },
      { tag: 'Cybersecurity', heading: 'Real-time fraud monitoring and incident response.', body: "Financial data is the most targeted asset in Nigeria's cyber threat landscape. We operate a 24/7 SOC, run penetration tests, and maintain a practiced incident response playbook.", bullets: ['24/7 Security Operations Centre with SIEM monitoring', 'Penetration testing for web, mobile, and internal systems', 'Phishing simulation and staff security awareness training', 'Regulatory compliance reporting and audit support'], image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80', imageLeft: false },
    ],
  },
  {
    slug: 'oil-gas', label: 'Oil & Gas', sub: 'Upstream · Downstream · Pipeline · Refining',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80',
    headline: 'Enterprise IT for upstream, downstream, and pipeline operations.',
    intro: "Nigeria's oil and gas sector runs on complex, high-availability technology — where downtime has direct operational and financial consequences.",
    sections: [
      { tag: 'Field & Remote Operations', heading: "Connectivity for the environments others can't reach.", body: 'We design and manage communications infrastructure that links field operations to central systems reliably.', bullets: ['VSAT and hybrid connectivity for remote and offshore sites', 'SCADA and industrial control system integration', 'Real-time field data transmission and monitoring', 'Remote helpdesk and on-site support capability'], image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=900&q=80', imageLeft: true },
      { tag: 'OT/IT Security', heading: 'Protecting operational technology from cyber threats.', body: 'We secure both the IT environment and the operational technology layer — ensuring that cyber incidents do not become operational incidents.', bullets: ['OT/IT network segmentation and security architecture', 'Industrial cybersecurity assessments and hardening', 'DPR and international compliance framework support', 'Incident response for operational technology environments'], image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80', imageLeft: false },
    ],
  },
  {
    slug: 'manufacturing', label: 'Manufacturing', sub: 'FMCG · Heavy Industry · Assembly · Supply Chain',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    headline: 'Technology that connects the factory floor to the boardroom.',
    intro: 'Manufacturing organisations depend on IT that reduces downtime, improves visibility, and connects operations from the production line to the C-suite.',
    sections: [
      { tag: 'Production & Operations', heading: 'Real-time visibility from line to leadership.', body: 'We implement production monitoring systems and maintain the infrastructure that keeps everything running — proactively, not reactively.', bullets: ['Production line connectivity and monitoring systems', 'MES and ERP integration for real-time visibility', 'Predictive maintenance data infrastructure', 'Plant network design and management'], image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80', imageLeft: true },
      { tag: 'Supply Chain & ERP', heading: 'End-to-end supply chain visibility and control.', body: 'We implement and integrate ERP systems, vendor portals, and logistics platforms — eliminating the silos that hide costs and slow decisions.', bullets: ['ERP implementation and customisation for manufacturing', 'Vendor and supplier portal development', 'Inventory and warehouse management systems', 'Logistics and distribution platform integration'], image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80', imageLeft: false },
    ],
  },
  {
    slug: 'healthcare', label: 'Healthcare', sub: 'Hospitals · Pharma · Diagnostics · Insurance',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    headline: 'IT infrastructure where failure is not an option.',
    intro: 'Healthcare technology carries a higher burden than any other sector — patient data is regulated, systems are critical, and failure has real human consequences.',
    sections: [
      { tag: 'Hospital Information Systems', heading: 'Connected systems that support clinical and administrative operations.', body: 'We implement hospital information systems, electronic patient records, pharmacy and laboratory systems, and the administrative platforms that run alongside clinical operations.', bullets: ['Hospital Information System (HIS) implementation', 'Electronic Medical Record (EMR) integration', 'Laboratory and pharmacy system connectivity', 'Patient billing and administrative platform support'], image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80', imageLeft: true },
      { tag: 'Data Security & Compliance', heading: 'Patient data protected to the highest standard.', body: 'We implement the security architecture, access controls, and audit trails that NDPR compliance requires, and maintain continuous monitoring.', bullets: ['NDPR compliance architecture for patient data', 'Role-based access control and audit logging', 'Medical device and diagnostic equipment security', 'Encryption for data at rest and in transit'], image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80', imageLeft: false },
    ],
  },
  {
    slug: 'government', label: 'Government & Public Sector', sub: 'Federal Agencies · Parastatals · Regulators',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    headline: 'Modernising public sector technology without disrupting service delivery.',
    intro: 'Government agencies and parastatals face the dual challenge of modernising legacy infrastructure while navigating procurement rules, data sovereignty requirements, and public accountability.',
    sections: [
      { tag: 'e-Government Platforms', heading: "Digital citizen services built for Nigeria's operating environment.", body: 'We design and deliver e-government platforms — citizen portals, licensing systems, revenue collection platforms, and service delivery tools.', bullets: ['Citizen service portal design and development', 'Online licensing, permits, and revenue platforms', 'Case management and workflow automation systems', 'Government API integration with NIMC, CAC, and FIRS'], image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80', imageLeft: true },
      { tag: 'Infrastructure & Security', heading: 'Secure, sovereign infrastructure for sensitive government data.', body: 'We design infrastructure with data sovereignty at the centre — local hosting, encrypted networks, and access controls that meet NCC and federal regulatory requirements.', bullets: ['Data sovereignty architecture with local hosting', 'Government network design and secure connectivity', 'Cybersecurity aligned to NITDA and NCC requirements', 'Identity and access management for government systems'], image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80', imageLeft: false },
    ],
  },
  {
    slug: 'logistics-maritime', label: 'Logistics & Maritime', sub: 'Ports · Shipping · Freight · Warehousing',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    headline: "Technology for Nigeria's ports, shipping, and supply chain.",
    intro: "Nigeria's logistics and maritime sector is the backbone of the economy — and it runs on operational technology that demands real-time data and high uptime.",
    sections: [
      { tag: 'Port & Terminal Operations', heading: 'Systems that match the pace of port operations.', body: 'We implement and manage port management systems, vessel tracking integrations, and the secure networks that connect terminal operators.', bullets: ['Port Management System (PMS) integration and support', 'Vessel Tracking System (VTS) connectivity', 'Customs and NPA API integration', 'Port operations network design and 24/7 management'], image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80', imageLeft: true },
      { tag: 'Fleet & Freight Technology', heading: 'Real-time visibility across your fleet and supply chain.', body: 'We build and integrate fleet management platforms, cargo tracking systems, and the operational dashboards that turn data into decisions.', bullets: ['Fleet management system implementation and integration', 'GPS and telematics data platform development', 'Cargo tracking and customer visibility portals', 'Warehouse and inventory management systems'], image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80', imageLeft: false },
    ],
  },
  {
    slug: 'real-estate-construction', label: 'Real Estate & Construction', sub: 'Developers · Contractors · Facilities',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    headline: 'IT that keeps projects on track and properties connected.',
    intro: 'Property developers, construction companies, and facilities managers depend on technology to coordinate complex projects, manage assets, and deliver services to tenants.',
    sections: [
      { tag: 'Project & Development Technology', heading: 'Systems that support the full project lifecycle.', body: 'We implement project management platforms, document control systems, and site connectivity solutions that keep projects on schedule.', bullets: ['Project management and collaboration platform implementation', 'Document control and BIM data management systems', 'Site connectivity and remote worker support', 'ERP integration for construction financial management'], image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80', imageLeft: true },
      { tag: 'Facilities & Property Management', heading: 'Smart buildings and connected property portfolios.', body: 'We design and manage the technology layer that makes commercial and residential properties function at the standard occupants expect.', bullets: ['Building management system (BMS) IT integration', 'Tenant portal and service request platform development', 'Property portfolio management system implementation', 'CCTV, access control, and physical security IT'], image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80', imageLeft: false },
    ],
  },
]
