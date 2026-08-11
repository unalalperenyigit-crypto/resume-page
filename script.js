/* ============================================================
   YOUR CONTENT LIVES HERE.
   There are two versions of everything: DATA.en and DATA.tr.
   To add something: copy one of the { ... } blocks and paste it
   into BOTH DATA.en and DATA.tr (in the matching list), then
   change the text in each language.
   To remove something: delete its whole { ... } block from
   BOTH DATA.en and DATA.tr (and the comma before/after it).
   Nothing below the "DO NOT EDIT BELOW THIS LINE" marker
   needs to be touched.
   ============================================================ */

const DATA = {

  en: {
    ui: {
      nav: { about: "About", experience: "Experience", projects: "Projects", education: "Education", contact: "Contact" },
      hero: { eyebrow: "Hi, I'm", tagline: "I research materials — from superalloys to drug-delivery polymers.", btnProjects: "See my projects", btnContact: "Get in touch" },
      headings: { about: "About me", experience: "Experience", projects: "Projects", education: "Education", clubs: "Clubs & Outreach", skills: "Skills & Languages", contact: "Contact" },
      contactIntro: "Feel free to reach out — happy to talk research, robotics, or opportunities to collaborate.",
      footer: "© 2026 Alperen Yiğit Ünal"
    },
    about: {
      text: "Hi! I'm a senior at TÜBİTAK Science High School (TÜBİTAK Fen Lisesi) in Gebze, Kocaeli. I'm a hands-on researcher with 3+ years across TÜBİTAK facilities and university labs — spanning materials engineering, CNC manufacturing, and polymer chemistry, from single-crystal superalloy casting to drug-delivery copolymer synthesis. I've led multidisciplinary student teams in robotics and research competitions, and I try to pair technical research with STEM outreach and sustainability work.",
      interests: ["Superalloys", "Biopolymers", "Composites", "Ceramics"]
    },
    experience: [
      { role: "Intern Student", org: "TÜBİTAK MAM Materials Institute", date: "Sep 2023 – Jun 2024",
        bullets: [
          "Contributed to a single-crystal superalloy casting project for jet engine components, assisting with casting, heat treatment, and metallographic sample prep.",
          "Ran mechanical tests and microscopy analysis to evaluate microstructure–property relationships; summarized findings in technical lab reports.",
          "Proposed and tested a modified heat-treatment parameter set that reduced surface porosity in trial samples."
        ], tags: ["Superalloys", "Metallography", "Heat Treatment"] },
      { role: "Intern Student", org: "TÜBİTAK BİLGEM Central Mechanical Workshop", date: "Sep 2024 – Jun 2025",
        bullets: [
          "Operated and programmed 5-axis CNC and lathe machines for prototyping and component manufacturing; performed G-code edits and CAM setups in Siemens NX at ±0.001 mm precision.",
          "Coordinated between design and manufacturing teams to reduce prototype rework time.",
          "Reviewed mechanical engineering literature on rail, brake, and steering systems to inform design decisions."
        ], tags: ["CNC", "Siemens NX", "CAM"] },
      { role: "Volunteer Research Intern", org: "Ceramics Research Center (SAM), R&D", date: "Jul 2025 – Sep 2025",
        bullets: [
          "Researched synthesis and characterization methods for advanced and traditional ceramics, including microstructural and mechanical testing; studied silicon nitride in active metal brazing processes.",
          "Supported experimental design, sample preparation, and data analysis under Prof. Dr. Servet Turan."
        ], tags: ["Ceramics", "Silicon Nitride"] },
      { role: "Volunteer Research Intern", org: "Gebze Technical University, Dept. of Organic Chemistry", date: "Oct 2025 – Dec 2025",
        bullets: [
          "Synthesized and characterized block copolymers with active-targeting drug-delivery capability, from reaction design through characterization sample prep.",
          "Authored a research project for the international GENIUS Olympiad competition and was selected as a finalist."
        ], tags: ["Polymer Chemistry", "Drug Delivery"] },
      { role: "Volunteer Intern", org: "SUNUM Nanotechnology Research Center", date: "2025",
        bullets: [
          "Worked on an EMI shielding project involving graphene oxide modification for MXene synthesis.",
          "Performed electrospinning work toward membrane fabrication."
        ], tags: ["MXene", "Graphene Oxide", "Electrospinning"] }
    ],
    projects: [
      { role: "Amphiphilic Copolymers for Smart Drug Delivery", org: "Team Lead", date: "Mar 2025 – Present",
        bullets: [
          "Designing amphiphilic organosiloxane/organic copolymers for combined drug delivery, imaging, and sensing applications.",
          "Responsible for synthesis planning, reaction optimization, experimental design, product testing, and report writing.",
          "Finalist at the International GENIUS Olympiad; currently writing a manuscript as corresponding author for ACS Biomacromolecules."
        ], tags: ["Polymer Synthesis", "Drug Delivery"] },
      { role: "High-Performance Composite Insulation for Energy Efficiency & Fire Resistance", org: "Team Lead — TÜBİTAK 2204-A", date: "Sep 2024 – Feb 2025",
        bullets: [
          "Designed and synthesized polymer/foam composite formulations; ran mechanical, thermal conductivity, and flame-resistance testing.",
          "Optimized formulations for both thermal insulation and fire resistance; prepared test reports for the project application."
        ], tags: ["Composites", "Fire Resistance"] },
      { role: "Gökçel ROV / Sagan ROV — TEKNOFEST Underwater Vehicle", org: "Co-founder & Mechanical Lead", date: "Nov 2022 – Sep 2025",
        bullets: [
          "Co-founded and served as mechanical lead for two school ROV teams; designed waterproof enclosures and pressure-rated sealed tubing.",
          "Two-time finalist (2023 & 2024); trained new members and ran hands-on robotics workshops at local middle schools."
        ], tags: ["Robotics", "TEKNOFEST"] },
      { role: "TUBITECH #9694 — FIRST Robotics Competition", org: "Team Member — Regional Champion 2024", date: "Nov 2023 – Present",
        bullets: [
          "Led design, prototyping, and testing of mission-based competition robots; managed build schedules and quality standards.",
          "Secured a $10,000 sponsorship partnership funding local robotics labs and reading/robotics libraries.",
          "Continues mentoring the team to sustain institutional knowledge."
        ], tags: ["FIRST Robotics", "CNC", "Outreach"] }
    ],
    education: [
      { role: "TÜBİTAK Science High School (Fen Lisesi)", date: "Sep 2022 – Present", detail: "Currently a senior (12th grade), GPA 98.8/100." },
      { role: "Eskişehir İTÜ/ETA Foundation Doğa College Middle School", date: "Graduated Jun 2022", detail: "90% merit scholarship; graduated with a 99.9/100 GPA. Top 0.82% nationally on the High School Placement Exam (LGS)." }
    ],
    clubs: [
      { role: "Board Member, Sustainability Applications Division", org: "ToBeTAC (TÜBİTAK Science High School Sustainability Club)", date: "Sep 2025 – Present",
        bullets: [
          "Led workshops on bioplastics, soilless agriculture, and school waste composting.",
          "Organized the ToBeTAC Zero Waste Panel, the first collaboration between a Turkish high school and the UN Food and Agriculture Organization (FAO)."
        ] },
      { role: "Member", org: "TÜBİTAK Science High School AI Club", date: "Oct 2025 – Present",
        bullets: ["Organized two Generative AI symposiums combining educational seminars with competitive formats, each reaching ~200 attendees."] },
      { role: "Co-founder", org: "Youth AI Initiative", date: "Oct 2025 – Mar 2026",
        bullets: ["Coordinated training sessions and outreach for an AI education program for high schoolers across Türkiye."] },
      { role: "Volunteer", org: "Young Guru Academy (YGA)", date: "Oct 2025 – Present",
        bullets: [
          "Selected for the Global Impact High School program (top 25 out of 20,000+ applicants).",
          "Develops tech-based social innovation projects for underserved communities; runs STEM workshops for younger students."
        ] }
    ],
    skills: {
      "Technical": ["Materials characterization", "Metallography", "CNC (5-axis)", "Siemens NX / CAM", "Polymer synthesis", "Electrospinning"],
      "Leadership": ["2 research projects led", "1 robotics team", "3 school clubs (board member)", "Mentors multiple robotics teams"]
    },
    languages: [
      { name: "Turkish", level: "Native" }, { name: "English", level: "C1" },
      { name: "German", level: "Basic" }, { name: "Spanish", level: "Basic" }
    ]
  },

  tr: {
    ui: {
      nav: { about: "Hakkımda", experience: "Deneyim", projects: "Projeler", education: "Eğitim", contact: "İletişim" },
      hero: { eyebrow: "Merhaba, ben", tagline: "Süper alaşımlardan ilaç taşıyıcı polimerlere, malzeme araştırmaları yapıyorum.", btnProjects: "Projelerimi gör", btnContact: "İletişime geç" },
      headings: { about: "Hakkımda", experience: "Deneyim", projects: "Projeler", education: "Eğitim", clubs: "Kulüpler & Sosyal Etkinlikler", skills: "Yetenekler & Diller", contact: "İletişim" },
      contactIntro: "Bana ulaşmaktan çekinme — araştırma, robotik ya da iş birliği fırsatları hakkında konuşmaktan memnuniyet duyarım.",
      footer: "© 2026 Alperen Yiğit Ünal"
    },
    about: {
      text: "Merhaba! Gebze, Kocaeli'deki TÜBİTAK Fen Lisesi'nde 12. sınıf öğrencisiyim. TÜBİTAK tesisleri ve üniversite laboratuvarlarında 3+ yıllık uygulamalı araştırma deneyimine sahibim — malzeme mühendisliği, CNC üretimi ve polimer kimyası alanlarında, süper alaşım dökümünden ilaç taşıyıcı kopolimer sentezine kadar. Robotik ve araştırma yarışmalarında çok disiplinli öğrenci takımlarına liderlik ettim; bilimsel araştırmaları STEM sosyal sorumluluk ve sürdürülebilirlik çalışmalarıyla birleştirmeye çalışıyorum.",
      interests: ["Süper Alaşımlar", "Biyopolimerler", "Kompozitler", "Seramikler"]
    },
    experience: [
      { role: "Stajyer Öğrenci", org: "TÜBİTAK MAM Malzeme Enstitüsü", date: "Eylül 2023 – Haziran 2024",
        bullets: [
          "MMU jet motoru bileşenleri için tek kristalli süper alaşım projesine katkıda bulunarak; döküm, ısıl işlem ve metalografik numune hazırlama süreçlerine yardımcı oldu.",
          "Mikroyapı-özellik ilişkilerini değerlendirmek üzere mekanik testler ve mikroskopi analizleri gerçekleştirdi; bulguları teknik laboratuvar raporlarında özetledi.",
          "Deneme numunelerinde yüzey gözenekliliğini azaltan modifiye edilmiş bir ısıl işlem parametre seti önerdi ve test etti."
        ], tags: ["Süper Alaşımlar", "Metalografi", "Isıl İşlem"] },
      { role: "Stajyer Öğrenci", org: "TÜBİTAK BİLGEM Merkezi Mekanik Atölye", date: "Eylül 2024 – Haziran 2025",
        bullets: [
          "Prototipleme ve bileşen üretimi için 5 eksenli CNC ve torna makinelerini çalıştırdı ve programladı; Siemens NX'te ±0.001 mm hassasiyetle G-kodu düzenlemeleri ve CAM kurulumları gerçekleştirdi.",
          "Üretilebilirliği artırmak için tasarım ve üretim ekipleri arasında iletişim kurarak prototipler üzerindeki yeniden işleme süresini azalttı.",
          "Tasarım kararlarını şekillendirmek için ray, fren ve direksiyon sistemleri dahil makine mühendisliği literatürünü inceledi."
        ], tags: ["CNC", "Siemens NX", "CAM"] },
      { role: "Gönüllü Araştırmacı Stajyer", org: "Seramik Araştırma Merkezi (SAM), Ar-Ge", date: "Temmuz 2025 – Eylül 2025",
        bullets: [
          "İleri teknoloji ve geleneksel seramikler için sentez ve karakterizasyon yöntemlerini araştırdı; silikon nitrürün aktif metal lehimleme süreçlerinde kullanımını inceledi.",
          "Prof. Dr. Servet Turan gözetiminde deneysel tasarım, numune hazırlama ve veri analizi süreçlerine destek oldu."
        ], tags: ["Seramikler", "Silikon Nitrür"] },
      { role: "Gönüllü Araştırmacı Stajyer", org: "Gebze Teknik Üniversitesi, Organik Kimya Bölümü", date: "Ekim 2025 – Aralık 2025",
        bullets: [
          "Aktif hedeflemeli ilaç taşıma yeteneklerine sahip blok kopolimerler sentezledi ve karakterize etti.",
          "Uluslararası GENIUS Olimpiyatları için bir araştırma projesi yazdı ve finalist olarak seçildi."
        ], tags: ["Polimer Kimyası", "İlaç Taşıma"] },
      { role: "Gönüllü Stajyer", org: "SUNUM Nanoteknoloji Araştırma Merkezi", date: "2025",
        bullets: [
          "MXene sentezi için grafen oksit modifikasyonu içeren bir EMI (elektromanyetik girişim) kalkanlama projesinde çalıştı.",
          "Membran üretimine yönelik elektro-eğirme (electrospinning) çalışmaları gerçekleştirdi."
        ], tags: ["MXene", "Grafen Oksit", "Elektro-eğirme"] }
    ],
    projects: [
      { role: "Akıllı İlaç Taşıma için Amfifilik Kopolimerler", org: "Takım Lideri", date: "Mart 2025 – Günümüz",
        bullets: [
          "Kombine ilaç taşıma, görüntüleme ve algılama uygulamaları için amfifilik organosiloksan/organik kopolimerler tasarlıyor.",
          "Sentez planlaması, reaksiyon optimizasyonu, deneysel tasarım, ürün testi ve rapor yazımından sorumlu.",
          "Uluslararası GENIUS Olimpiyatları'nda finalist; şu anda sorumlu yazar olarak ACS Biomacromolecules için bir makale yazıyor."
        ], tags: ["Polimer Sentezi", "İlaç Taşıma"] },
      { role: "Enerji Verimliliği ve Yangın Dayanımı için Kompozit Yalıtım Malzemesi", org: "Takım Lideri — TÜBİTAK 2204-A", date: "Eylül 2024 – Şubat 2025",
        bullets: [
          "Polimer/köpük kompozit formülasyonları tasarladı ve sentezledi; mekanik, termal iletkenlik ve yanmazlık testleri gerçekleştirdi.",
          "Hem ısı yalıtımını hem de yangın dayanımını iyileştirmek için formülasyonları optimize etti; proje başvurusu için test raporları hazırladı."
        ], tags: ["Kompozitler", "Yangın Dayanımı"] },
      { role: "Gökçel ROV / Sagan ROV — TEKNOFEST Su Altı Aracı", org: "Kurucu Ortak & Mekanik Lider", date: "Kasım 2022 – Eylül 2025",
        bullets: [
          "İki okul ROV takımının kurucu ortağı ve mekanik lideri oldu; su geçirmez muhafazalar ve basınca dayanıklı sızdırmaz tüpler tasarladı.",
          "2023 ve 2024'te çifte finalist oldu; yeni üyeler eğitti ve yerel ortaokullarda robotik atölyeleri düzenledi."
        ], tags: ["Robotik", "TEKNOFEST"] },
      { role: "TUBITECH #9694 — FIRST Robotics Competition", org: "Takım Üyesi — Bölgesel Şampiyon 2024", date: "Kasım 2023 – Günümüz",
        bullets: [
          "Görev tabanlı yarışma robotlarının tasarımı, prototiplenmesi ve testine liderlik etti; yapım programlarını ve kalite standartlarını yönetti.",
          "Yerel robotik laboratuvarlarını ve kütüphaneleri finanse etmek için 10.000 USD sponsorluk ortaklığı sağladı.",
          "Kurumsal hafızayı sürdürmek için takıma mentorluk yapmaya devam ediyor."
        ], tags: ["FIRST Robotics", "CNC", "Sosyal Etki"] }
    ],
    education: [
      { role: "TÜBİTAK Fen Lisesi", date: "Eylül 2022 – Günümüz", detail: "Şu anda 12. sınıf öğrencisi, 98.8/100 not ortalaması." },
      { role: "Eskişehir İTÜ/ETA Vakfı Doğa Koleji Ortaokulu", date: "Mezuniyet: Haziran 2022", detail: "%90 başarı bursu; 99.9/100 not ortalaması ile mezun oldu. LGS'de ulusal çapta ilk %0.82'lik dilim." }
    ],
    clubs: [
      { role: "Yönetim Kurulu Üyesi, Sürdürülebilirlik Uygulamaları Bölümü", org: "ToBeTAC (TÜBİTAK Fen Lisesi Sürdürülebilirlik Kulübü)", date: "Eylül 2025 – Günümüz",
        bullets: [
          "Biyoplastikler, topraksız tarım ve okul atıklarının kompostlanması konularında atölyelere liderlik etti.",
          "Bir Türk lisesi ile BM Gıda ve Tarım Örgütü (FAO) arasındaki ilk işbirliği olan ToBeTAC Sıfır Atık Paneli'ni organize etti."
        ] },
      { role: "Üye", org: "TÜBİTAK Fen Lisesi Yapay Zeka Kulübü", date: "Ekim 2025 – Günümüz",
        bullets: ["Her biri yaklaşık 200 katılımcıya ulaşan iki Üretken Yapay Zeka sempozyumu düzenledi."] },
      { role: "Kurucu Ortak", org: "Youth AI Initiative", date: "Ekim 2025 – Mart 2026",
        bullets: ["Türkiye genelindeki lise öğrencilerini hedefleyen bir yapay zeka eğitim programı için eğitim oturumlarını koordine etti."] },
      { role: "Gönüllü", org: "Young Guru Academy (YGA)", date: "Ekim 2025 – Günümüz",
        bullets: [
          "20.000'den fazla başvuru arasından ilk 25'e giren Global Impact High School programına katıldı.",
          "Dezavantajlı topluluklar için teknoloji tabanlı sosyal inovasyon projeleri geliştiriyor; STEM atölyeleri düzenliyor."
        ] }
    ],
    skills: {
      "Teknik": ["Malzeme karakterizasyonu", "Metalografi", "CNC (5 eksen)", "Siemens NX / CAM", "Polimer sentezi", "Elektro-eğirme"],
      "Liderlik": ["2 araştırma projesi liderliği", "1 robotik takımı", "3 okul kulübü (yönetim kurulu üyesi)", "Birden fazla robotik takımına mentorluk"]
    },
    languages: [
      { name: "Türkçe", level: "Anadil" }, { name: "İngilizce", level: "C1" },
      { name: "Almanca", level: "Temel" }, { name: "İspanyolca", level: "Temel" }
    ]
  }
};

const CONTACT = {
  linkedin: "https://linkedin.com/in/alperen-yigit-unal",
  email: "alperen.unal@tubitak.gov.tr",
  phone: "+90 (553) 703 70 98",
  location: "Gebze, Kocaeli, Türkiye"
};

/* ============================================================
   DO NOT EDIT BELOW THIS LINE
   (this part reads the DATA above and builds the page)
   ============================================================ */

function el(tag, opts = {}) {
  const node = document.createElement(tag);
  if (opts.className) node.className = opts.className;
  if (opts.text) node.textContent = opts.text;
  return node;
}

function clear(id) { document.getElementById(id).innerHTML = ''; }

function renderEntry(entry) {
  const card = el('article', { className: 'entry' });
  const header = el('div');
  if (entry.role) header.appendChild(el('h3', { className: 'entry-role', text: entry.role }));
  if (entry.org) header.appendChild(el('p', { className: 'entry-org', text: entry.org }));
  if (entry.date) header.appendChild(el('p', { className: 'entry-date', text: entry.date }));
  card.appendChild(header);

  if (entry.bullets) {
    const ul = el('ul', { className: 'entry-bullets' });
    entry.bullets.forEach(b => ul.appendChild(el('li', { text: b })));
    card.appendChild(ul);
  }
  if (entry.detail) card.appendChild(el('p', { className: 'entry-detail', text: entry.detail }));
  return card;
}

function renderList(id, entries) {
  clear(id);
  const container = document.getElementById(id);
  entries.forEach(e => container.appendChild(renderEntry(e)));
}

function renderAll(lang) {
  const d = DATA[lang];

  document.getElementById('nav-about').textContent = d.ui.nav.about;
  document.getElementById('nav-experience').textContent = d.ui.nav.experience;
  document.getElementById('nav-projects').textContent = d.ui.nav.projects;
  document.getElementById('nav-education').textContent = d.ui.nav.education;
  document.getElementById('nav-contact').textContent = d.ui.nav.contact;

  document.getElementById('hero-eyebrow').textContent = d.ui.hero.eyebrow;
  document.getElementById('hero-tagline').textContent = d.ui.hero.tagline;
  document.getElementById('hero-btn-projects').textContent = d.ui.hero.btnProjects;
  document.getElementById('hero-btn-contact').textContent = d.ui.hero.btnContact;

  document.getElementById('heading-about').textContent = d.ui.headings.about;
  document.getElementById('heading-experience').textContent = d.ui.headings.experience;
  document.getElementById('heading-projects').textContent = d.ui.headings.projects;
  document.getElementById('heading-education').textContent = d.ui.headings.education;
  document.getElementById('heading-clubs').textContent = d.ui.headings.clubs;
  document.getElementById('heading-skills').textContent = d.ui.headings.skills;
  document.getElementById('heading-contact').textContent = d.ui.headings.contact;
  document.getElementById('contact-intro').textContent = d.ui.contactIntro;
  document.getElementById('footer-copy').textContent = d.ui.footer;

  document.documentElement.lang = lang;

  document.getElementById('about-text').textContent = d.about.text;
  clear('interest-list');
  const interestList = document.getElementById('interest-list');
  d.about.interests.forEach(i => interestList.appendChild(el('li', { text: i })));

  renderList('list-experience', d.experience);
  renderList('list-projects', d.projects);
  renderList('list-education', d.education);
  renderList('list-clubs', d.clubs);

  clear('skills-grid');
  const grid = document.getElementById('skills-grid');
  Object.entries(d.skills).forEach(([group, items]) => {
    const col = el('div', { className: 'skills-col' });
    col.appendChild(el('h3', { text: group }));
    const ul = el('ul');
    items.forEach(i => ul.appendChild(el('li', { text: i })));
    col.appendChild(ul);
    grid.appendChild(col);
  });
  const langCol = el('div', { className: 'skills-col' });
  langCol.appendChild(el('h3', { text: lang === 'tr' ? 'Diller' : 'Languages' }));
  const langUl = el('ul');
  d.languages.forEach(l => {
    const li = el('li');
    li.innerHTML = `${l.name} <span>— ${l.level}</span>`;
    langUl.appendChild(li);
  });
  langCol.appendChild(langUl);
  grid.appendChild(langCol);

  clear('contact-grid');
  const grid2 = document.getElementById('contact-grid');
  const isTr = lang === 'tr';

  if (CONTACT.email) {
    const a = el('a', { className: 'contact-card' });
    a.href = `mailto:${CONTACT.email}`;
    a.innerHTML = `<span class="contact-card-icon">✉️</span>
      <span class="contact-card-label">${isTr ? 'E-posta' : 'Email'}</span>
      <span class="contact-card-value">${CONTACT.email}</span>`;
    grid2.appendChild(a);
  }
  if (CONTACT.phone) {
    const a = el('a', { className: 'contact-card' });
    a.href = `tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`;
    a.innerHTML = `<span class="contact-card-icon">📞</span>
      <span class="contact-card-label">${isTr ? 'Telefon' : 'Phone'}</span>
      <span class="contact-card-value">${CONTACT.phone}</span>`;
    grid2.appendChild(a);
  }
  if (CONTACT.linkedin) {
    const a = el('a', { className: 'contact-card' });
    a.href = CONTACT.linkedin; a.target = '_blank'; a.rel = 'noopener';
    a.innerHTML = `<span class="contact-card-icon">💼</span>
      <span class="contact-card-label">LinkedIn</span>
      <span class="contact-card-value">alperen-yigit-unal</span>`;
    grid2.appendChild(a);
  }
  if (CONTACT.location) {
    const div = el('div', { className: 'contact-card' });
    div.innerHTML = `<span class="contact-card-icon">📍</span>
      <span class="contact-card-label">${isTr ? 'Konum' : 'Location'}</span>
      <span class="contact-card-value">${CONTACT.location}</span>`;
    grid2.appendChild(div);
  }
}

function setupLangToggle() {
  const btn = document.getElementById('lang-toggle');
  let lang = localStorage.getItem('lang') || 'en';
  btn.textContent = lang === 'en' ? 'TR' : 'EN';
  renderAll(lang);

  btn.addEventListener('click', () => {
    lang = lang === 'en' ? 'tr' : 'en';
    localStorage.setItem('lang', lang);
    btn.textContent = lang === 'en' ? 'TR' : 'EN';
    renderAll(lang);
  });
}

function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    btn.textContent = '☀';
  }
  btn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      btn.textContent = '☾';
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      btn.textContent = '☀';
      localStorage.setItem('theme', 'dark');
    }
  });
}

setupLangToggle();
setupThemeToggle();
