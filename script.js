// ========================================================
// ECO-EXPLORERS: GRADE 2 LITERATURE DAY 2026
// Interactive Application Logic (script.js)
// ========================================================

(function () {
  'use strict';

  // State Management
  const urlParams = new URLSearchParams(window.location.search);
  const initialLang = urlParams.get('lang') || localStorage.getItem('eco_lang') || 'en';
  const initialCountry = urlParams.get('country') || 'haiti';

  const state = {
    lang: initialLang, // 'en' or 'id'
    activeCountryId: initialCountry, // 'haiti', 'suriname', 'bolivia'
    activeFilter: 'all', // 'all', 'animal', 'plant'
    selectedNotebookCountry: initialCountry,
    selectedNotebookOrganism: 'hispaniolan_trogon',
    activeNotebookTab: 'country', // 'country' or 'organism'
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    currentlySpeakingBtn: null
  };

  // Helper to safely access language block for countries, organisms, or titles
  function getLang(obj) {
    if (!obj) return {};
    return state.lang === 'en' ? obj.en : (obj.id_lang || obj.id || obj.en);
  }

  // Web Speech API Synthesis instance
  const synth = window.speechSynthesis;
  let currentUtterance = null;

  // DOM Elements
  const elements = {
    btnToggleLang: document.getElementById('btnToggleLang'),
    countryTabs: document.querySelectorAll('.country-tab-btn'),
    bottomNavItems: document.querySelectorAll('.bottom-nav-item'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    dossierContainer: document.getElementById('countryDossierContainer'),
    threatsContainer: document.getElementById('threatsAlertContainer'),
    organismsGrid: document.getElementById('organismsGrid'),
    sdgSection: document.getElementById('sdgOverviewSection'),
    solutionsGrid: document.getElementById('solutionsGrid'),
    // Buku Halus
    selectCountryNb: document.getElementById('selectCountryNb'),
    selectOrganismNb: document.getElementById('selectOrganismNb'),
    btnTabNbCountry: document.getElementById('btnTabNbCountry'),
    btnTabNbOrganism: document.getElementById('btnTabNbOrganism'),
    nbQuestionsFlow: document.getElementById('nbQuestionsFlow'),
    nbParagraphTitle: document.getElementById('nbParagraphTitle'),
    nbParagraphContent: document.getElementById('nbParagraphContent'),
    btnCopyParagraph: document.getElementById('btnCopyParagraph'),
    btnPrintWorksheet: document.getElementById('btnPrintWorksheet'),
    // Quiz
    quizContainer: document.getElementById('quizContainer'),
    // Modal
    photoModal: document.getElementById('photoModal'),
    modalTitle: document.getElementById('modalTitle'),
    modalImage: document.getElementById('modalImage'),
    modalDetails: document.getElementById('modalDetails'),
    btnCloseModal: document.getElementById('btnCloseModal')
  };

  // ========================================================
  // INITIALIZATION
  // ========================================================
  function init() {
    renderStaticText();
    renderCountryTabs();
    renderDossier();
    renderOrganisms();
    renderSDGOverview();
    renderSolutions();
    initNotebookHelper();
    renderQuiz();
    setupEventListeners();
  }

  // ========================================================
  // TEXT TRANSLATION & GENERAL UI RENDERING
  // ========================================================
  function renderStaticText() {
    const t = APP_DATA.general[state.lang];

    // Language Toggle Button
    elements.btnToggleLang.innerHTML = state.lang === 'en' 
      ? `<span class="lang-flag">🇮🇩</span> <span>${t.switchLang}</span>`
      : `<span class="lang-flag">🇬🇧</span> <span>${t.switchLang}</span>`;

    // Titles & Headers
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update filter buttons
    const filterLabels = {
      all: t.filterAll,
      animal: t.filterAnimals,
      plant: t.filterPlants
    };
    elements.filterBtns.forEach(btn => {
      const filterType = btn.getAttribute('data-filter');
      if (filterLabels[filterType]) {
        btn.textContent = filterLabels[filterType];
      }
    });
  }

  function toggleLanguage() {
    stopSpeaking();
    state.lang = state.lang === 'en' ? 'id' : 'en';
    localStorage.setItem('eco_lang', state.lang);
    
    renderStaticText();
    renderCountryTabs();
    renderDossier();
    renderOrganisms();
    renderSDGOverview();
    renderSolutions();
    populateNotebookSelectors();
    updateNotebookHelper();
    renderQuiz();
  }

  // ========================================================
  // COUNTRY TABS & DOSSIER RENDERING
  // ========================================================
  function renderCountryTabs() {
    elements.countryTabs.forEach(tab => {
      const countryId = tab.getAttribute('data-country');
      tab.classList.toggle('active', countryId === state.activeCountryId);
    });

    elements.bottomNavItems.forEach(item => {
      const countryId = item.getAttribute('data-country');
      if (countryId) {
        item.classList.toggle('active', countryId === state.activeCountryId);
      }
    });
  }

  function setActiveCountry(countryId) {
    if (state.activeCountryId === countryId) return;
    stopSpeaking();
    state.activeCountryId = countryId;
    state.selectedNotebookCountry = countryId;
    
    renderCountryTabs();
    renderDossier();
    renderOrganisms();
    populateOrganismSelector();
    updateNotebookHelper();
  }

  function getCurrentCountryData() {
    return APP_DATA.countries.find(c => c.id === state.activeCountryId) || APP_DATA.countries[0];
  }

  function renderDossier() {
    const c = getCurrentCountryData();
    const cLang = getLang(c);
    const t = APP_DATA.general[state.lang];

    // Country Dossier Card
    elements.dossierContainer.innerHTML = `
      <div class="dossier-card">
        <div class="dossier-header">
          <div class="dossier-title-area">
            <span class="dossier-flag">${c.flagEmoji}</span>
            <div>
              <h2 class="dossier-country-name">${cLang.name}</h2>
              <span class="dossier-class-badge">${state.lang === 'en' ? 'Class' : 'Kelas'} ${c.classCode}</span>
            </div>
          </div>
          <button class="btn-speak" id="btnSpeakDossier" title="${t.readAloud}" aria-label="${t.readAloud}">
            🔊
          </button>
        </div>

        <!-- Video Preview Section -->
        <div class="video-preview-box">
          <img src="${c.videoThumb}" alt="${cLang.name} Video" class="video-thumb-img" id="btnOpenVideo">
          <div class="video-text-content">
            <h4 class="video-title-label">${getLang(c.videoTitle)}</h4>
            <p class="video-subtitle-label">${state.lang === 'en' ? 'Classroom Video resource for Grade 2 learning' : 'Materi video kelas untuk pembelajaran Siswa Kelas 2'}</p>
            <a href="${c.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn-watch-video">
              ▶️ ${t.watchVideoBtn}
            </a>
          </div>
        </div>

        <!-- Dossier Questions Grid (Matching PPT Slides 7, 8, 9) -->
        <div class="dossier-grid">
          <div class="fact-item">
            <div class="fact-question-num">01</div>
            <div class="fact-question-title">${state.lang === 'en' ? 'Where is it located?' : 'Di mana letaknya?'}</div>
            <div class="fact-answer-text">${cLang.location}</div>
          </div>

          <div class="fact-item">
            <div class="fact-question-num">02</div>
            <div class="fact-question-title">${state.lang === 'en' ? 'What is its capital city?' : 'Apa nama ibu kotanya?'}</div>
            <div class="fact-answer-text">${cLang.capital}</div>
          </div>

          <div class="fact-item">
            <div class="fact-question-num">03</div>
            <div class="fact-question-title">${state.lang === 'en' ? 'What language do people speak?' : 'Bahasa apa yang digunakan?'}</div>
            <div class="fact-answer-text">${cLang.languages}</div>
          </div>

          <div class="fact-item">
            <div class="fact-question-num">04</div>
            <div class="fact-question-title">${state.lang === 'en' ? 'Two interesting facts:' : 'Dua fakta menarik:'}</div>
            <div class="fact-answer-text">
              1. ${cLang.interestingFacts[0]}<br>
              2. ${cLang.interestingFacts[1]}
            </div>
          </div>

          <div class="fact-item full-width">
            <div class="fact-question-num">05</div>
            <div class="fact-question-title">${state.lang === 'en' ? 'What makes this country unique?' : 'Apa yang membuat negara ini unik atau berbeda?'}</div>
            <div class="fact-answer-text">${cLang.uniqueness}</div>
          </div>
        </div>
      </div>
    `;

    // Speech button for dossier
    const btnSpeak = document.getElementById('btnSpeakDossier');
    if (btnSpeak) {
      btnSpeak.addEventListener('click', () => {
        const textToRead = `${cLang.name}. ${cLang.location} ${state.lang === 'en' ? 'Capital:' : 'Ibu kota:'} ${cLang.capital}. ${cLang.uniqueness}`;
        handleSpeakToggle(btnSpeak, textToRead);
      });
    }

    // Threats Alert Box
    elements.threatsContainer.innerHTML = `
      <div class="threats-alert-card">
        <div class="threats-alert-header">
          <span class="threats-alert-icon">⚠️</span>
          <h3 class="threats-alert-title">${t.threatsTitle}</h3>
        </div>
        <p class="threats-alert-body">${cLang.miningThreatsSummary}</p>
      </div>
    `;
  }

  // ========================================================
  // ORGANISMS SHOWCASE GRID
  // ========================================================
  function renderOrganisms() {
    const c = getCurrentCountryData();
    const t = APP_DATA.general[state.lang];

    let filtered = c.organisms;
    if (state.activeFilter === 'animal') {
      filtered = c.organisms.filter(o => o.type === 'animal');
    } else if (state.activeFilter === 'plant') {
      filtered = c.organisms.filter(o => o.type === 'plant');
    }

    elements.organismsGrid.innerHTML = filtered.map(org => {
      const orgData = getLang(org);
      const isAnimal = org.type === 'animal';
      const badgeClass = isAnimal ? 'badge-animal' : 'badge-plant';

      return `
        <article class="organism-card" data-org-id="${org.id}">
          <div class="card-media" onclick="window.ecoOpenModal('${org.id}')">
            <img src="${org.image}" alt="${orgData.name}" class="card-img" loading="lazy">
            <span class="card-badge ${badgeClass}">${orgData.typeLabel}</span>
            <div class="card-zoom-indicator">
              <span>🔍</span> <span>${t.zoomPhoto}</span>
            </div>
          </div>

          <div class="card-body">
            <div class="card-header-row">
              <div>
                <h3 class="card-title">${orgData.name}</h3>
                <div class="card-scientific-name">${org.scientificName}</div>
              </div>
              <button class="btn-speak" data-org-id="${org.id}" title="${t.readAloud}" aria-label="${t.readAloud}">
                🔊
              </button>
            </div>

            <!-- Habitat -->
            <div class="info-block">
              <div class="info-label">🏡 ${state.lang === 'en' ? 'Where It Lives (Habitat)' : 'Tempat Tinggal (Habitat)'}</div>
              <div class="info-text">${orgData.habitat}</div>
            </div>

            <!-- Cool Trait / Super Feature -->
            <div class="info-block">
              <div class="info-label">⭐ ${state.lang === 'en' ? 'Cool Feature' : 'Ciri Khas / Unik'}</div>
              <div class="info-text">${orgData.uniqueFeature}</div>
            </div>

            <!-- Threat & Mining Impact -->
            <div class="info-block threat-block">
              <div class="info-label">⚠️ ${state.lang === 'en' ? 'Why It Needs Help' : 'Dampak Penambangan & Bahaya'}</div>
              <div class="info-text">${orgData.whyThreatened}</div>
            </div>

            <div class="card-footer">
              <button class="btn-detail" onclick="window.ecoOpenModal('${org.id}')">
                <span>🔎</span> <span>${state.lang === 'en' ? 'Learn More Details' : 'Lihat Selengkapnya'}</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach speak listeners to card audio buttons
    elements.organismsGrid.querySelectorAll('.btn-speak').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const orgId = btn.getAttribute('data-org-id');
        const targetOrg = c.organisms.find(o => o.id === orgId);
        if (targetOrg) {
          const info = getLang(targetOrg);
          const textToSpeak = `${info.name}. ${info.uniqueFeature} ${info.whyThreatened}`;
          handleSpeakToggle(btn, textToSpeak);
        }
      });
    });
  }

  // ========================================================
  // SDG OVERVIEW SECTION (DEFORESTATION & CAUSES)
  // ========================================================
  function renderSDGOverview() {
    const sdg = APP_DATA.sdgConcepts[state.lang];

    elements.sdgSection.innerHTML = `
      <div class="container">
        <div class="section-heading-center">
          <span class="badge-pill badge-sdg" style="margin-bottom: 8px;">SDG 15</span>
          <h2 class="section-title">${sdg.title}</h2>
          <p class="section-desc">${sdg.subtitle}</p>
        </div>

        <div class="deforestation-def-box">
          <h3 class="def-box-title">📖 ${sdg.whatIsDeforestation.title}</h3>
          <p class="def-box-desc">${sdg.whatIsDeforestation.desc}</p>
        </div>

        <div class="concept-columns">
          <!-- Causes Column -->
          <div class="concept-card">
            <h3 class="concept-card-title">🚜 ${sdg.causes.title}</h3>
            <div class="concept-items-list">
              ${sdg.causes.items.map(item => `
                <div class="concept-item">
                  <div class="concept-item-icon">${item.icon}</div>
                  <div>
                    <div class="concept-item-title">${item.title}</div>
                    <div class="concept-item-desc">${item.text}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Impacts Column -->
          <div class="concept-card">
            <h3 class="concept-card-title">⚠️ ${sdg.impacts.title}</h3>
            <div class="concept-items-list">
              ${sdg.impacts.items.map(item => `
                <div class="concept-item">
                  <div class="concept-item-icon">${item.icon}</div>
                  <div>
                    <div class="concept-item-title">${item.title}</div>
                    <div class="concept-item-desc">${item.text}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ========================================================
  // SOLUTIONS (4 WAYS WE PROTECT NATURE)
  // ========================================================
  function renderSolutions() {
    const list = APP_DATA.solutions[state.lang];

    elements.solutionsGrid.innerHTML = list.map(item => `
      <div class="solution-card">
        <div class="solution-icon-row">
          <span class="solution-icon">${item.icon}</span>
          <span class="solution-num">#${item.num}</span>
        </div>
        <h3 class="solution-title">${item.title}</h3>
        <p class="solution-desc">${item.text}</p>
      </div>
    `).join('');
  }

  // ========================================================
  // BUKU HALUS WRITING HELPER
  // ========================================================
  function initNotebookHelper() {
    populateNotebookSelectors();
    updateNotebookHelper();

    elements.selectCountryNb.addEventListener('change', (e) => {
      state.selectedNotebookCountry = e.target.value;
      populateOrganismSelector();
      updateNotebookHelper();
    });

    elements.selectOrganismNb.addEventListener('change', (e) => {
      state.selectedNotebookOrganism = e.target.value;
      updateNotebookHelper();
    });

    elements.btnTabNbCountry.addEventListener('click', () => {
      state.activeNotebookTab = 'country';
      elements.btnTabNbCountry.classList.add('active');
      elements.btnTabNbOrganism.classList.remove('active');
      updateNotebookHelper();
    });

    elements.btnTabNbOrganism.addEventListener('click', () => {
      state.activeNotebookTab = 'organism';
      elements.btnTabNbOrganism.classList.add('active');
      elements.btnTabNbCountry.classList.remove('active');
      updateNotebookHelper();
    });

    elements.btnCopyParagraph.addEventListener('click', () => {
      const textToCopy = elements.nbParagraphContent.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const origText = elements.btnCopyParagraph.innerHTML;
        elements.btnCopyParagraph.innerHTML = `✅ ${state.lang === 'en' ? 'Copied!' : 'Tersalin!'}`;
        setTimeout(() => {
          elements.btnCopyParagraph.innerHTML = origText;
        }, 2000);
      });
    });

    elements.btnPrintWorksheet.addEventListener('click', () => {
      window.print();
    });
  }

  function populateNotebookSelectors() {
    elements.selectCountryNb.innerHTML = APP_DATA.countries.map(c => {
      const cName = getLang(c).name;
      const isSel = c.id === state.selectedNotebookCountry ? 'selected' : '';
      return `<option value="${c.id}" ${isSel}>${c.flagEmoji} ${cName} (${state.lang === 'en' ? 'Class' : 'Kelas'} ${c.classCode})</option>`;
    }).join('');

    populateOrganismSelector();
  }

  function populateOrganismSelector() {
    const c = APP_DATA.countries.find(item => item.id === state.selectedNotebookCountry) || APP_DATA.countries[0];
    elements.selectOrganismNb.innerHTML = c.organisms.map(org => {
      const orgName = getLang(org).name;
      const icon = org.type === 'animal' ? '🐾' : '🌿';
      const isSel = org.id === state.selectedNotebookOrganism ? 'selected' : '';
      return `<option value="${org.id}" ${isSel}>${icon} ${orgName}</option>`;
    }).join('');

    if (!c.organisms.find(o => o.id === state.selectedNotebookOrganism)) {
      state.selectedNotebookOrganism = c.organisms[0].id;
    }
  }

  function updateNotebookHelper() {
    const t = APP_DATA.general[state.lang];
    elements.btnTabNbCountry.textContent = t.tabCountryQuestions;
    elements.btnTabNbOrganism.textContent = t.tabOrganismQuestions;

    const c = APP_DATA.countries.find(item => item.id === state.selectedNotebookCountry) || APP_DATA.countries[0];
    const cData = getLang(c);
    const org = c.organisms.find(item => item.id === state.selectedNotebookOrganism) || c.organisms[0];
    const orgData = getLang(org);

    if (state.activeNotebookTab === 'country') {
      // Questions 01 - 05 for Country
      elements.nbQuestionsFlow.innerHTML = `
        <div class="nb-q-row">
          <span class="nb-q-badge">01. ${state.lang === 'en' ? 'Country & Location' : 'Negara & Letak'}</span>
          <span class="nb-q-text">${state.lang === 'en' ? 'What is the name of the country and where is it located?' : 'Apa nama negara tersebut dan di mana letaknya?'}</span>
          <div class="nb-a-input">${cData.name} — ${cData.location}</div>
        </div>

        <div class="nb-q-row">
          <span class="nb-q-badge">02. ${state.lang === 'en' ? 'Capital City' : 'Ibu Kota'}</span>
          <span class="nb-q-text">${state.lang === 'en' ? 'What is the capital city?' : 'Apa nama ibu kota negara tersebut?'}</span>
          <div class="nb-a-input">${cData.capital}</div>
        </div>

        <div class="nb-q-row">
          <span class="nb-q-badge">03. ${state.lang === 'en' ? 'Languages' : 'Bahasa'}</span>
          <span class="nb-q-text">${state.lang === 'en' ? 'What language is spoken by the people?' : 'Bahasa apa yang digunakan oleh masyarakat di negara tersebut?'}</span>
          <div class="nb-a-input">${cData.languages}</div>
        </div>

        <div class="nb-q-row">
          <span class="nb-q-badge">04. ${state.lang === 'en' ? 'Two Interesting Facts' : 'Dua Fakta Menarik'}</span>
          <span class="nb-q-text">${state.lang === 'en' ? 'What are two interesting facts about the country?' : 'Apa dua fakta menarik tentang negara tersebut?'}</span>
          <div class="nb-a-input">
            1. ${cData.interestingFacts[0]}<br>
            2. ${cData.interestingFacts[1]}
          </div>
        </div>

        <div class="nb-q-row">
          <span class="nb-q-badge">05. ${state.lang === 'en' ? 'Uniqueness' : 'Keunikan'}</span>
          <span class="nb-q-text">${state.lang === 'en' ? 'What makes the country unique or different?' : 'Apa yang membuat negara tersebut unik atau berbeda dari negara lain?'}</span>
          <div class="nb-a-input">${cData.uniqueness}</div>
        </div>
      `;

      elements.nbParagraphTitle.textContent = state.lang === 'en' ? '📝 Combined Country Paragraph:' : '📝 Contoh Paragraf Gabungan Negara:';
      elements.nbParagraphContent.textContent = cData.combinedParagraph;

    } else {
      // Questions 01 - 05 for Animal / Plant (Slides 16-18)
      elements.nbQuestionsFlow.innerHTML = `
        <div class="nb-q-row">
          <span class="nb-q-badge">01. ${state.lang === 'en' ? 'Name & Habitat' : 'Nama & Tempat Tinggal'}</span>
          <span class="nb-q-text">${state.lang === 'en' ? 'What is its name and where does it live?' : 'Apa nama hewan/tumbuhan tersebut dan di mana mereka tinggal?'}</span>
          <div class="nb-a-input">${orgData.name} (${org.scientificName}) — ${orgData.habitat}</div>
        </div>

        <div class="nb-q-row">
          <span class="nb-q-badge">02. ${state.lang === 'en' ? 'Special Features' : 'Ciri Khas / Unik'}</span>
          <span class="nb-q-text">${state.lang === 'en' ? 'What is unique or special about it?' : 'Apa ciri khas/unik dari hewan/tumbuhan tersebut?'}</span>
          <div class="nb-a-input">${orgData.uniqueFeature}</div>
        </div>

        <div class="nb-q-row">
          <span class="nb-q-badge">03. ${state.lang === 'en' ? 'Survival Method' : 'Cara Bertahan Hidup'}</span>
          <span class="nb-q-text">${state.lang === 'en' ? 'How does it survive in nature?' : 'Bagaimana mereka bertahan hidup?'}</span>
          <div class="nb-a-input">${orgData.howItSurvives}</div>
        </div>

        <div class="nb-q-row">
          <span class="nb-q-badge">04. ${state.lang === 'en' ? 'Threats & Extinction' : 'Penyebab Terancam Punah'}</span>
          <span class="nb-q-text">${state.lang === 'en' ? 'Why is it threatened by mining or deforestation?' : 'Mengapa mereka terancam punah karena penambangan dan deforestasi?'}</span>
          <div class="nb-a-input">${orgData.whyThreatened}</div>
        </div>

        <div class="nb-q-row">
          <span class="nb-q-badge">05. ${state.lang === 'en' ? 'Our Solution' : 'Solusi Perlindungan'}</span>
          <span class="nb-q-text">${state.lang === 'en' ? 'How can we help protect its home?' : 'Bagaimana kita bisa membantu melindungi rumahnya?'}</span>
          <div class="nb-a-input">
            ${state.lang === 'en' 
              ? 'By stopping mining in protected parks, leaving connected canopy trees, and keeping rivers free of toxic chemicals.' 
              : 'Dengan menghentikan tambang di cagar alam, menjaga pohon tinggi tetap terhubung, dan tidak membuang limbah berbahaya ke sungai.'}
          </div>
        </div>
      `;

      elements.nbParagraphTitle.textContent = state.lang === 'en' ? '📝 Combined Organism Paragraph:' : '📝 Contoh Paragraf Deskripsi Satwa/Tumbuhan:';
      
      const sampleOrgParagraph = state.lang === 'en'
        ? `${orgData.name} is a special ${org.type} that lives in ${orgData.habitat}. It is unique because ${orgData.uniqueFeature.toLowerCase()} To survive, ${orgData.howItSurvives.toLowerCase()} However, it is now threatened because ${orgData.whyThreatened.toLowerCase()} We must protect it by preserving forests and stopping harmful mining activities.`
        : `${orgData.name} adalah ${org.type === 'animal' ? 'hewan' : 'tumbuhan'} unik yang hidup di ${orgData.habitat}. Ciri khas utamanya adalah ${orgData.uniqueFeature} Untuk bertahan hidup, ${orgData.howItSurvives} Sayangnya, kelestariannya terancam karena ${orgData.whyThreatened} Kita harus melindunginya dengan menjaga kelestarian hutan darat sesuai SDG 15.`;

      elements.nbParagraphContent.textContent = sampleOrgParagraph;
    }
  }

  // ========================================================
  // INTERACTIVE MINI QUIZ
  // ========================================================
  function renderQuiz() {
    const q = APP_DATA.quiz[state.quizIndex];
    if (!q) {
      renderQuizFinished();
      return;
    }

    const qData = state.lang === 'en' ? q.en : q.id_lang;
    const t = APP_DATA.general[state.lang];

    elements.quizContainer.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-progress-bar">
          <span>Question ${state.quizIndex + 1} of ${APP_DATA.quiz.length}</span>
          <span>${t.scoreLabel} ${state.quizScore} / ${APP_DATA.quiz.length} ⭐</span>
        </div>

        <h3 class="quiz-question-title">${qData.question}</h3>

        <div class="quiz-options">
          ${qData.options.map((opt, idx) => `
            <button class="btn-quiz-option" data-idx="${idx}">
              ${opt}
            </button>
          `).join('')}
        </div>

        <div class="quiz-feedback" id="quizFeedback"></div>

        <div class="quiz-controls">
          <button class="btn-quiz-next" id="btnNextQuiz" style="display: none;">
            ${state.quizIndex + 1 === APP_DATA.quiz.length 
              ? (state.lang === 'en' ? 'See Results 🏆' : 'Lihat Hasil 🏆') 
              : (state.lang === 'en' ? 'Next Question ➡️' : 'Pertanyaan Berikutnya ➡️')}
          </button>
        </div>
      </div>
    `;

    state.quizAnswered = false;

    // Attach option click handlers
    elements.quizContainer.querySelectorAll('.btn-quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (state.quizAnswered) return;
        state.quizAnswered = true;

        const selectedIdx = parseInt(btn.getAttribute('data-idx'), 10);
        const correctIdx = q.en.answer; // answer index is same for both
        const feedback = document.getElementById('quizFeedback');
        const nextBtn = document.getElementById('btnNextQuiz');

        elements.quizContainer.querySelectorAll('.btn-quiz-option').forEach((optBtn, idx) => {
          if (idx === correctIdx) {
            optBtn.classList.add('correct');
          } else if (idx === selectedIdx) {
            optBtn.classList.add('wrong');
          }
        });

        if (selectedIdx === correctIdx) {
          state.quizScore++;
          feedback.className = 'quiz-feedback show correct-text';
          feedback.innerHTML = `🎉 ${state.lang === 'en' ? 'Awesome Job!' : 'Hebat Sekali!'} ${qData.explanation}`;
        } else {
          feedback.className = 'quiz-feedback show wrong-text';
          feedback.innerHTML = `💡 ${state.lang === 'en' ? 'Good try!' : 'Hampir benar!'} ${qData.explanation}`;
        }

        nextBtn.style.display = 'inline-flex';
      });
    });

    const nextBtn = document.getElementById('btnNextQuiz');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        state.quizIndex++;
        renderQuiz();
      });
    }
  }

  function renderQuizFinished() {
    const t = APP_DATA.general[state.lang];
    const total = APP_DATA.quiz.length;
    const isPerfect = state.quizScore === total;

    elements.quizContainer.innerHTML = `
      <div class="quiz-card" style="text-align: center; padding: 36px 20px;">
        <div style="font-size: 3.5rem; margin-bottom: 10px;">
          ${isPerfect ? '🌟🥇🌟' : '🎉🏅🎉'}
        </div>
        <h3 class="quiz-question-title" style="margin-bottom: 8px;">
          ${state.lang === 'en' ? 'Quiz Completed!' : 'Kuis Selesai!'}
        </h3>
        <p style="font-size: 1.1rem; color: #047857; font-weight: 800; margin-bottom: 20px;">
          ${t.scoreLabel} ${state.quizScore} / ${total}
        </p>
        <p style="color: #475569; margin-bottom: 24px;">
          ${state.lang === 'en' 
            ? 'You are now an official Junior Earth Guardian for SDG 15!' 
            : 'Kamu sekarang resmi menjadi Penjaga Bumi Cilik untuk SDG 15!'}
        </p>
        <button class="btn-quiz-next" id="btnRestartQuiz" style="margin: 0 auto;">
          ${t.restartQuiz}
        </button>
      </div>
    `;

    document.getElementById('btnRestartQuiz').addEventListener('click', () => {
      state.quizIndex = 0;
      state.quizScore = 0;
      renderQuiz();
    });
  }

  // ========================================================
  // SPEECH SYNTHESIS (AUDIO READ-ALOUD)
  // ========================================================
  function handleSpeakToggle(buttonElement, text) {
    if (!('speechSynthesis' in window)) {
      alert(state.lang === 'en' ? 'Sorry, audio read-aloud is not supported on this browser.' : 'Maaf, fitur suara belum didukung di peramban ini.');
      return;
    }

    if (synth.speaking) {
      synth.cancel();
      if (state.currentlySpeakingBtn) {
        state.currentlySpeakingBtn.classList.remove('speaking');
        state.currentlySpeakingBtn.textContent = '🔊';
      }
      if (state.currentlySpeakingBtn === buttonElement) {
        state.currentlySpeakingBtn = null;
        return;
      }
    }

    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = state.lang === 'en' ? 'en-US' : 'id-ID';
    currentUtterance.rate = 0.92; // Slightly gentle for Grade 2
    currentUtterance.pitch = 1.05;

    buttonElement.classList.add('speaking');
    buttonElement.textContent = '⏹️';
    state.currentlySpeakingBtn = buttonElement;

    currentUtterance.onend = () => {
      buttonElement.classList.remove('speaking');
      buttonElement.textContent = '🔊';
      state.currentlySpeakingBtn = null;
    };

    currentUtterance.onerror = () => {
      buttonElement.classList.remove('speaking');
      buttonElement.textContent = '🔊';
      state.currentlySpeakingBtn = null;
    };

    synth.speak(currentUtterance);
  }

  function stopSpeaking() {
    if (synth && synth.speaking) {
      synth.cancel();
    }
    if (state.currentlySpeakingBtn) {
      state.currentlySpeakingBtn.classList.remove('speaking');
      state.currentlySpeakingBtn.textContent = '🔊';
      state.currentlySpeakingBtn = null;
    }
  }

  // ========================================================
  // HIGH-RES PHOTO MODAL
  // ========================================================
  window.ecoOpenModal = function(orgId) {
    const c = getCurrentCountryData();
    const org = c.organisms.find(o => o.id === orgId);
    if (!org) return;

    const orgData = getLang(org);
    elements.modalTitle.textContent = `${orgData.name} (${org.scientificName})`;
    elements.modalImage.src = org.image;
    elements.modalImage.alt = orgData.name;

    elements.modalDetails.innerHTML = `
      <div class="info-block">
        <div class="info-label">🏡 ${state.lang === 'en' ? 'Where It Lives (Habitat)' : 'Tempat Tinggal (Habitat)'}</div>
        <div class="info-text">${orgData.habitat}</div>
      </div>
      <div class="info-block">
        <div class="info-label">⭐ ${state.lang === 'en' ? 'Super Cool Feature' : 'Ciri Khas / Unik'}</div>
        <div class="info-text">${orgData.uniqueFeature}</div>
      </div>
      <div class="info-block">
        <div class="info-label">🌱 ${state.lang === 'en' ? 'How It Survives' : 'Cara Bertahan Hidup'}</div>
        <div class="info-text">${orgData.howItSurvives}</div>
      </div>
      <div class="info-block threat-block">
        <div class="info-label">⚠️ ${state.lang === 'en' ? 'Danger Alert (Mining & Deforestation)' : 'Dampak Penambangan & Bahaya'}</div>
        <div class="info-text">${orgData.whyThreatened}</div>
      </div>
    `;

    elements.photoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    elements.photoModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ========================================================
  // EVENT LISTENERS
  // ========================================================
  function setupEventListeners() {
    // Language Switcher
    elements.btnToggleLang.addEventListener('click', toggleLanguage);

    // Country Tabs
    elements.countryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const countryId = tab.getAttribute('data-country');
        setActiveCountry(countryId);
      });
    });

    // Mobile Bottom Navigation Bar
    elements.bottomNavItems.forEach(item => {
      item.addEventListener('click', () => {
        const countryId = item.getAttribute('data-country');
        const targetSection = item.getAttribute('data-scroll');

        if (countryId) {
          setActiveCountry(countryId);
          document.getElementById('countrySection').scrollIntoView({ behavior: 'smooth' });
        } else if (targetSection) {
          const el = document.getElementById(targetSection);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Filter Pills (All / Animal / Plant)
    elements.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeFilter = btn.getAttribute('data-filter');
        renderOrganisms();
      });
    });

    // Modal Close
    elements.btnCloseModal.addEventListener('click', closeModal);
    elements.photoModal.addEventListener('click', (e) => {
      if (e.target === elements.photoModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elements.photoModal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  // Launch app when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
