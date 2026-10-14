const servicePages = {
  kernel: {
    title:"Separation Kernel Hypervisor", category:"Mission-critical computing", accent:"85,216,255", color:"#55d8ff",
    headline:"Secure, isolated and predictable computing.",
    intro:"Bilva Tech enables multiple applications, operating systems and workloads to operate on a shared computing platform while maintaining clearly defined boundaries between them.",
    note:"Multiple workloads. One platform. Controlled by design.",
    values:[["fa-border-all","Strong isolation","Independent execution environments"],["fa-shield","Fault containment","Limit interference between workloads"],["fa-clock","Deterministic execution","Predictable resource allocation"],["fa-layer-group","Platform consolidation","More functions on common hardware"]],
    overviewTitle:"Defined boundaries for complex computing environments.",
    overview:"Controlled access to CPU, memory, I/O, peripherals and communication resources creates a structured foundation for greater security, predictability, fault containment and resource efficiency.",
    highlight:"Different workloads can share the platform without sharing unrestricted access.",
    enables:["Independent workload partitioning","Controlled cross-domain communication","Predictable execution behaviour","Efficient hardware resource use","Reduced risk of fault propagation"],
    capabilities:[["fa-border-all","Strong System Isolation","Create independent execution environments that help contain software faults and prevent unauthorized interference."],["fa-microchip","Resource Management","Control processor cores, memory, peripherals, interrupts and I/O resources for each workload."],["fa-code-branch","Mixed-Criticality Workloads","Support applications with different safety, security, timing and performance requirements on shared hardware."],["fa-clock","Deterministic Execution","Enable predictable allocation for real-time and time-sensitive applications."],["fa-right-left","Controlled Communication","Establish defined data paths between selected environments while preserving separation."],["fa-layer-group","Platform Consolidation","Bring multiple computing functions onto common hardware while retaining boundaries and control."]],
    architecture:{top:["Real-Time Application","Monitoring & Control","Guest OS / Workload"],core:"Separation Kernel Hypervisor",bottom:["CPU","Memory","I/O","Peripherals"],tags:["Strict isolation","Controlled access","Fault containment","Secure communication"]},
    industries:[["Aerospace","Avionics and flight-control partitioning"],["Defense","Separated mission and communication workloads"],["Automotive","Mixed-criticality platform consolidation"],["Industrial Automation","Control and monitoring isolation"],["Robotics","Safety-sensitive and analytical workloads"],["Transportation","Control and passenger-information systems"],["Embedded Systems","Advanced multi-environment platforms"]],
    process:[["Discovery & Scoping","Identify partitions, trust requirements and platform constraints."],["System Architecture","Define partitions, workloads and trust boundaries."],["Hardware Mapping","Allocate CPU, memory, I/O and peripherals."],["Software Integration","Integrate operating systems, applications and data flows."],["Configuration & Verification","Apply separation rules and validate predictable behaviour."],["Deployment Support","Support production embedded and mission-critical environments."]],
    why:[["fa-microchip","Embedded security expertise","A low-level understanding of hardware, software and system boundaries."],["fa-shield-halved","Mission-critical understanding","Engineering decisions shaped around controlled, dependable operation."],["fa-diagram-project","End-to-end support","Support spanning architecture, integration, verification and deployment."]],
    cta:"Build secure systems on a controlled foundation.", ctaText:"Talk to Bilva Tech about Separation Kernel Hypervisor solutions for embedded, real-time and mission-critical platforms."
  },
  iot: {
    title:"IoT Solutions", category:"Connected operations", accent:"89,232,188", color:"#59e8bc",
    headline:"Connect devices, data and intelligent operations.",
    intro:"Bilva Tech brings together devices, sensors, machines, edge platforms, gateways and cloud environments to create a reliable flow of operational information.",
    note:"From physical systems to actionable intelligence.",
    values:[["fa-link","Connected systems","Unify diverse devices and machines"],["fa-bolt","Edge response","Process information closer to source"],["fa-eye","Operational visibility","Monitor equipment in real time"],["fa-expand","Scalable management","Manage growing device environments"]],
    overviewTitle:"A complete connected technology chain.",
    overview:"We design IoT environments that connect embedded devices to local processing, secure networks, data platforms and the applications that turn raw signals into useful operational insight.",
    highlight:"Connected architecture works best when devices, data and security are designed as one system.",
    enables:["Unified device and sensor integration","Near real-time edge processing","Gateway-based protocol translation","Cloud and enterprise data connectivity","Consistent device lifecycle management"],
    capabilities:[["fa-plug","Connected Device Integration","Connect sensors, machines, controllers and embedded devices into a unified environment."],["fa-microchip","Edge Computing","Process information closer to the source to improve response and reduce unnecessary transfer."],["fa-tower-broadcast","IoT Gateway Solutions","Bridge field devices, local networks, cloud platforms and enterprise applications."],["fa-chart-line","Real-Time Monitoring","Create visibility into devices, equipment and operational conditions."],["fa-cloud-arrow-up","Data & Cloud Connectivity","Move collected information into analytics, dashboards and digital services."],["fa-gears","Scalable Device Management","Support consistent configuration, monitoring, updates and security as deployments grow."]],
    architecture:{top:["Applications & Analytics","Data Platform","Cloud Services"],core:"Secure Connectivity & IoT Gateway",bottom:["Sensors","Devices","Machines","Edge Platform"],tags:["Authentication","Protected communication","Controlled access","Secure updates"]},
    industries:[["Industrial Automation","Connected production equipment"],["Smart Infrastructure","Distributed sensing and monitoring"],["Transportation","Vehicle and network telemetry"],["Energy Systems","Remote operational visibility"],["Robotics","Connected control and diagnostics"],["Automotive","Embedded data and services"],["Remote Monitoring","Distributed asset intelligence"]],
    process:[["Environment Discovery","Map devices, data sources and operational needs."],["Edge Architecture","Choose local compute, gateways and protocols."],["Secure Connectivity","Define trusted communication and access."],["Platform Integration","Connect data, cloud and enterprise applications."],["Deployment & Scale","Roll out, monitor and manage the device estate."]],
    why:[["fa-network-wired","End-to-end architecture","One view from field devices through edge, gateway and cloud."],["fa-shield-halved","Security by design","Protection considered within the connected architecture."],["fa-gears","Operational focus","Solutions shaped around real environments and evolving requirements."]],
    cta:"Turn connected-device data into controlled intelligence.", ctaText:"Talk to Bilva Tech about scalable IoT architecture for devices, edge platforms, gateways and connected operations."
  },
  cyber: {
    title:"Secure QR Printing Software", category:"Secure printing technology", accent:"120,147,255", color:"#7893ff",
    headline:"Print a Unique, Secure QR Code on Every Unit",
    intro:"Windows software that connects to your digital printing machine and prints dynamic QR codes and dynamic secure patterns on your own artwork, unit by unit.",
    note:"WINDOWS-COMPATIBLE SOFTWARE // DIRECT DIGITAL PRINTER CONNECTIVITY",
    values:[["fa-print","Printer Connectivity","Direct digital printing integration"],["fa-qrcode","Dynamic QR Codes","Unique code on every single print"],["fa-shield-halved","Dynamic Secure Pattern","Security changes with every unit"],["fa-database","Three Data Sources","AUTO, API endpoint or CSV import"]],
    overviewTitle:"Precision Printing. Unique Codes. Configurable Security.",
    overview:"A dedicated printing workflow that combines variable QR codes, dynamic security patterns, and configurable print settings. Follow a straightforward workflow to prepare your artwork, configure variable print elements, and begin production.",
    highlight:"Print unique dynamic QR codes and secure patterns on every unit with Bilva Tech's Windows-based software.",
    enables:["Direct digital printer connectivity","Unit-by-unit variable QR codes","Dynamic security pattern generation","AUTO, API, and CSV data sources","Job configuration save and reuse","Comprehensive MIS production reporting"],
    capabilities:[["fa-print","Printer Connectivity","Connects directly to your digital printing machine."],["fa-qrcode","Dynamic QR Codes","A unique, variable QR code on every print."],["fa-shield-halved","Dynamic Secure Pattern","Security printing that changes with every unit."],["fa-database","Three Data Sources","Generate codes through AUTO, retrieve them from an API endpoint, or import them from a CSV file."],["fa-sliders","Saved Configurations","Save size, orientation, HR text, and message settings for each job and reuse them for subsequent print runs."],["fa-chart-column","MIS Reports","Track production output, including the total number of codes printed."]],
    architecture:{top:["Artwork Parsing","Data Source Engine","Saved Configuration"],core:"Dynamic QR & Secure Pattern Generator",bottom:["Digital Printer","Variable Print Unit","MIS Production Log","Output Tracking"],tags:["Windows software","Unique QR","Dynamic pattern","MIS reports"]},
    industries:[["AUTO Generation","Codes generated dynamically and sequentially by the software on the fly."],["API Endpoint","Codes fetched in real time from your enterprise host or production system."],["CSV Import","Codes imported seamlessly from external batch files for scheduled runs."],["MIS Production Reports","Visibility into every print run with total codes printed audit logs."]],
    process:[["Upload Design","Upload the artwork; the software parses the design."],["Select Region","Mark where the QR code and security print will appear."],["Set Details","Choose size and orientation, then add HR text and any required message."],["Save Configuration","Save the setup once and reuse it for every print run."],["Start Printing","Pick the data source, then start printing on the connected machine."]],
    why:[["fa-print","Direct Printer Connection","Seamless link from Windows software directly to printing hardware."],["fa-fingerprint","Unit-Level Security","Dynamic security patterns that evolve with every single unit."],["fa-chart-column","Complete Production Audit","Track production output, including the total number of codes printed."]],
    cta:"Ready to Streamline Secure QR Printing?", ctaText:"Discover how configurable printing, dynamic QR codes, and secure patterns can fit into your production workflow."
  },
  consulting: {
    title:"Information Security Consulting", category:"Risk & resilience", accent:"192,130,255", color:"#c082ff",
    headline:"Strengthen security. Manage risk. Build resilience.",
    intro:"Bilva Tech helps organizations understand security exposure, protect critical information and create practical strategies aligned with their technology and business requirements.",
    note:"Understand your risks. Strengthen your security. Protect what matters.",
    values:[["fa-magnifying-glass","Clear risk picture","Identify and prioritize exposure"],["fa-compass","Practical roadmap","Turn findings into achievable action"],["fa-scale-balanced","Governance readiness","Align policies and responsibilities"],["fa-life-ring","Incident preparedness","Plan for effective response and recovery"]],
    overviewTitle:"A security strategy built around your organization.",
    overview:"Every organization has a different technology landscape and risk profile. Our tailored, risk-based approach connects governance, data protection, access control, compliance and incident preparedness.",
    highlight:"Recommendations are practical, scalable and aligned with operational requirements.",
    enables:["Prioritized security improvement","Business-aligned security architecture","Clear policies and accountability","Compliance and maturity roadmaps","Structured incident response planning"],
    capabilities:[["fa-magnifying-glass","Security Risk Assessment","Evaluate technology, processes and controls to identify and prioritize potential exposure."],["fa-sitemap","Security Architecture & Strategy","Align security controls with business and technology objectives."],["fa-database","Data Protection","Strengthen access, storage, transmission and handling of critical information."],["fa-id-card","Identity & Access Management","Define appropriate roles and permissions for users, devices and applications."],["fa-scale-balanced","Policies, Governance & Readiness","Improve responsibilities, procedures and preparation for applicable requirements."],["fa-life-ring","Incident & Vulnerability Improvement","Prepare response processes and establish continuous security improvement."]],
    architecture:{top:["People & Identity","Applications & Data","Devices & Infrastructure"],core:"Governance, Risk & Security Strategy",bottom:["Assess","Prioritize","Implement","Improve"],tags:["Risk management","Data protection","Access control","Incident preparedness"]},
    industries:[["Growing Enterprises","Establish scalable security foundations"],["Regulated Operations","Understand readiness and gaps"],["Technology Teams","Align architecture and controls"],["Leadership Teams","Translate risk into priorities"],["Connected Businesses","Protect complex environments"],["Critical Operations","Prepare for disruption and response"]],
    process:[["Discover","Understand technology, business and risk context."],["Assess","Evaluate controls, weaknesses and priorities."],["Strategize","Define objectives and an actionable roadmap."],["Guide Implementation","Support practical control and process improvement."],["Improve","Reassess as threats and requirements evolve."]],
    why:[["fa-compass","Risk-based guidance","Priorities shaped by business impact and real exposure."],["fa-people-group","Stakeholder alignment","Security objectives connected across leadership and technical teams."],["fa-road","Actionable roadmaps","Clear, scalable recommendations built for implementation."]],
    cta:"Create a clearer path to stronger information security.", ctaText:"Talk to Bilva Tech about risk assessment, security strategy, governance, data protection and incident readiness."
  }
};

const key=document.body.dataset.service;const data=servicePages[key];
const nav=[['kernel','Separation Kernel','separation-kernel-hypervisor.html'],['iot','IoT Solutions','iot-solutions.html'],['cyber','Secure QR Printing','cybersecurity-solutions.html'],['consulting','Security Consulting','information-security-consulting.html']];
if(data){
  document.documentElement.style.setProperty('--accent',data.color);document.documentElement.style.setProperty('--accent-rgb',data.accent);

  // Build hamburger menu
  const subnavEl = document.querySelector('.solution-subnav');
  if (subnavEl) {
    const menuItems = nav.map(([k,n,u], i) =>
      `<a href="${u}" class="${k===key?'active':''}" ${k===key?'aria-current="page"':''}><span class="sol-num">0${i+1}</span>${n}</a>`
    ).join('');
    subnavEl.innerHTML = `
      <button class="sol-hamburger" type="button" aria-label="Open solutions menu" aria-expanded="false">
        <span class="sol-menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>
        <span class="sol-hamburger-text">Solutions <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></span>
      </button>
      <div class="sol-dropdown" role="menu">${menuItems}</div>
    `;

    // Interaction logic
    const hamburger = subnavEl.querySelector('.sol-hamburger');
    const dropdown = subnavEl.querySelector('.sol-dropdown');
    const links = dropdown.querySelectorAll('a');

    function openMenu() {
      subnavEl.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
      subnavEl.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    // Click/tap toggle
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      subnavEl.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!subnavEl.contains(e.target)) closeMenu();
    });

    // Keyboard: Escape closes, Enter on hamburger toggles
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Make dropdown links tabbable and handle Enter
    links.forEach(link => {
      link.setAttribute('role', 'menuitem');
      link.setAttribute('tabindex', '0');
    });

    // Open on focus within (keyboard nav)
    subnavEl.addEventListener('focusin', () => openMenu());
    subnavEl.addEventListener('focusout', (e) => {
      if (!subnavEl.contains(e.relatedTarget)) closeMenu();
    });
  }

  const serviceShell = document.querySelector('#service-content');
  if (serviceShell) {
    const cards=(items,klass,fn)=>items.map((x,i)=>fn(x,i)).join('');
    serviceShell.innerHTML=`
    <section class="service-hero"><div><p class="service-breadcrumb">Services / ${data.title}</p><h1>${data.title}</h1><h2>${data.headline}</h2><p class="service-hero-copy">${data.intro}</p><div class="service-actions"><a class="service-button primary" href="contact.html">Talk to an Expert <i class="fa-solid fa-arrow-right"></i></a><a class="service-button" href="#capabilities">Explore Capabilities</a></div><p class="service-note">${data.note}</p></div>${
     key === 'kernel' 
       ? `<div class="system-visual globe-container" style="padding:0; border:none; background:transparent; overflow:hidden;"><iframe src="globe.html" style="width: 100%; height: 100%; border: none; min-height: 600px;" title="Separation Kernel Architecture Visualization"></iframe></div>`
       : key === 'cyber'
       ? `<div class="system-visual globe-container" style="padding:0; border:none; background:transparent; overflow:hidden;"><iframe src="cybersecurity-visual.html" style="width: 100%; height: 100%; border: none; min-height: 600px;" title="Secure QR Printing Architecture Visualization"></iframe></div>`
       : key === 'iot'
       ? `<div class="system-visual globe-container" style="padding:0; border:none; background:transparent; overflow:hidden;"><iframe src="iot-visual.html" style="width: 100%; height: 100%; border: none; min-height: 600px;" title="IoT Solutions Architecture Visualization"></iframe></div>`
       : key === 'consulting'
       ? `<div class="system-visual globe-container" style="padding:0; border:none; background:transparent; overflow:hidden;"><iframe src="consulting-visual.html" style="width: 100%; height: 100%; border: none; min-height: 600px;" title="Security Strategy Architecture Visualization"></iframe></div>`
       : `<div class="system-visual" aria-label="Conceptual ${data.title} architecture"><div class="visual-top">${data.architecture.top.slice(0,4).map((n,i)=>`<div class="visual-node"><small>Domain 0${i+1}</small><strong>${n}</strong></div>`).join('')}</div><div class="visual-link"></div><div class="visual-core">${data.architecture.core}</div><div class="visual-hardware">${data.architecture.bottom.map(n=>`<span>${n}</span>`).join('')}</div><span class="pulse"></span></div>`
   }</section>
   <section class="value-strip" aria-label="Key benefits">${cards(data.values,'',x=>`<div class="value-item"><i class="fa-solid ${x[0]}"></i><strong>${x[1]}</strong><span>${x[2]}</span></div>`)}</section>
   <section class="service-section overview-grid"><div class="overview-copy"><p class="section-label">Overview</p><h2 class="section-heading">${data.overviewTitle}</h2><p>${data.overview}</p><p class="highlight">${data.highlight}</p></div><aside class="enable-card"><h3>What it enables</h3><ul>${data.enables.map(x=>`<li>${x}</li>`).join('')}</ul></aside></section>
   <section class="service-section" id="capabilities"><p class="section-label">Core capabilities</p><h2 class="section-heading">Control built into every layer.</h2><div class="capability-grid">${cards(data.capabilities,'',x=>`<article class="capability-card flip-card"><div class="flip-card-inner"><div class="flip-card-front"><span class="capability-icon"><i class="fa-solid ${x[0]}"></i></span><h3>${x[1]}</h3></div><div class="flip-card-back"><p>${x[2]}</p></div></div></article>`)}</div></section>
   <section class="service-section" id="use-cases"><p class="section-label">Use cases</p><h2 class="section-heading">Built for demanding environments.</h2><div class="usecase-grid" role="list">${cards(data.industries,'',(x,i)=>`<article class="usecase-card" role="listitem" tabindex="0"><div class="card-indicator" aria-hidden="true"></div><span class="card-num">0${i+1} //</span><h3 class="card-title">${x[0]}</h3><p class="card-desc">${x[1]}</p></article>`)}</div></section>
   <section class="service-section delivery-section" id="delivery"><p class="section-label">Delivery</p><h2 class="section-heading">From discovery to deployment.</h2><div class="process-steps-wrapper" style="--total-steps: ${data.process.length};"><ol class="process-steps-list" role="list">${data.process.map((step, idx) => `<li class="process-step-item" role="listitem"><div class="step-indicator-wrapper"><span class="step-number" aria-label="Step 0${idx + 1}">0${idx + 1}</span>${idx < data.process.length - 1 ? '<span class="step-connector-line" aria-hidden="true"></span>' : ''}</div><div class="step-text-wrapper"><span class="step-stage-label">Stage 0${idx + 1}</span><h3 class="step-heading">${step[0]}</h3><p class="step-description">${step[1]}</p></div></li>`).join('')}</ol></div></section>
   <section class="service-section"><p class="section-label">Why Bilva Tech</p><h2 class="section-heading">Technical thinking. Practical delivery.</h2><div class="why-grid">${cards(data.why,'',x=>`<article class="why-card"><i class="fa-solid ${x[0]}"></i><h3>${x[1]}</h3><p>${x[2]}</p></article>`)}</div></section>
   <section class="service-cta"><h2>${data.cta}</h2><p>${data.ctaText}</p><a class="service-button primary" href="contact.html">Discuss Your Requirement <i class="fa-solid fa-arrow-right"></i></a></section>`;

    // Setup interactive flip cards with keyboard & touch support
    document.querySelectorAll('.capability-card.flip-card').forEach(card => {
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      const title = card.querySelector('h3')?.textContent || 'Capability';
      card.setAttribute('aria-label', `${title} - Tap or click to view details`);
      
      const toggle = () => {
        card.classList.toggle('is-flipped');
      };

      card.addEventListener('click', toggle);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });

    if ("IntersectionObserver" in window) {
      const whyObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-why');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      document.querySelectorAll('.why-card').forEach(card => {
        whyObserver.observe(card);
      });
    } else {
      document.querySelectorAll('.why-card').forEach(card => {
        card.classList.add('animate-why');
      });
    }
  }
}
