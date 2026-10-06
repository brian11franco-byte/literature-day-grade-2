// ========================================================
// ECO-EXPLORERS: GRADE 2 LITERATURE DAY 2026
// Interactive Application Logic (script.js)
// Mobile-First, Accessible, Bilingual (English & Indonesian)
// ========================================================

(function () {
  'use strict';

  // ========================================================
  // SAFE STORAGE HELPER (Resilient to iframe / private browsing)
  // ========================================================
  const memoryStore = {};

  function safeStorageGet(key, defaultVal) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? val : defaultVal;
    } catch (e) {
      return memoryStore[key] !== undefined ? memoryStore[key] : defaultVal;
    }
  }

  function safeStorageSet(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {
      memoryStore[key] = val;
    }
  }

  // ========================================================
  // PASSPORT & PROGRESS STATE
  // ========================================================
  let passportState = {
    creaturesMet: [],
    storiesHeard: [],
    quizDone: false,
    guardianName: ''
  };

  try {
    const raw = safeStorageGet('eco_passport_v2');
    if (raw) {
      passportState = Object.assign(passportState, JSON.parse(raw));
    }
  } catch (e) {
    // Fallback gracefully
  }

  function savePassport() {
    safeStorageSet('eco_passport_v2', JSON.stringify(passportState));
    updatePassportUI();
  }

  function markCreatureMet(orgId) {
    if (!passportState.creaturesMet.includes(orgId)) {
      passportState.creaturesMet.push(orgId);
      savePassport();
    }
  }

  function markStoryHeard(orgId) {
    markCreatureMet(orgId);
    if (!passportState.storiesHeard.includes(orgId)) {
      passportState.storiesHeard.push(orgId);
      savePassport();
    }
  }

  // ========================================================
  // APPLICATION STATE
  // ========================================================
  const urlParams = new URLSearchParams(window.location.search);
  const initialLang = urlParams.get('lang') || safeStorageGet('eco_lang', 'en');
  const validLang = (initialLang === 'id' || initialLang === 'en') ? initialLang : 'en';

  const initialCountryParam = urlParams.get('country') || 'haiti';
  const validCountries = ['haiti', 'suriname', 'bolivia'];
  const initialCountry = validCountries.includes(initialCountryParam.toLowerCase())
    ? initialCountryParam.toLowerCase()
    : 'haiti';

  const state = {
    lang: validLang, // 'en' or 'id'
    activeCountryId: initialCountry, // 'haiti', 'suriname', 'bolivia'
    activeFilter: 'all', // 'all', 'animal', 'plant'
    selectedNotebookCountry: initialCountry,
    selectedNotebookOrganism: 'hispaniolan_trogon',
    activeNotebookTab: 'country', // 'country' or 'organism'
    notebookMode: 'try_first', // 'try_first' or 'model'
    studentBuiltSentences: {}, // { "country-01": "built text", ... }
    revealedModelAnswers: {}, // { "country-01": true }
    speechRate: 0.92, // 0.75 for slow, 0.92 for normal
    quizIndex: 0,
    quizScore: 0,
    quizRetryCount: 0, // 0 = first attempt, 1 = on retry
    quizAnswered: false,
    currentlySpeakingBtn: null,
    speakingSentenceIndex: -1,
    modalLastFocusedEl: null
  };

  // Safe Language Accessor Helper (en or id)
  function getLang(obj) {
    if (!obj) return {};
    return obj[state.lang] || obj.en || {};
  }

  // Web Speech API
  const synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;
  let activeSpeechQueue = [];
  let isSpeaking = false;

  // Sound effects (Audio off by default per requirement)
  let soundEnabled = false;

  // DOM Elements Cache
  const elements = {
    // Header & Navigation
    btnLangEn: document.getElementById('btnLangEn'),
    btnLangId: document.getElementById('btnLangId'),
    headerCountryChip: document.getElementById('headerCountryChip'),
    chipCountryFlag: document.getElementById('chipCountryFlag'),
    chipCountryName: document.getElementById('chipCountryName'),
    passportRingCircle: document.getElementById('passportRingCircle'),
    passportPercent: document.getElementById('passportPercent'),
    desktopCountryTabs: document.querySelectorAll('.country-tab-btn'),
    heroCountryCards: document.querySelectorAll('.country-hero-card'),
    mobileNavItems: document.querySelectorAll('.bottom-nav-item'),
    // Reading Speed
    btnSpeedSlow: document.getElementById('btnSpeedSlow'),
    btnSpeedNormal: document.getElementById('btnSpeedNormal'),
    // Main Content Containers
    dossierContainer: document.getElementById('countryDossierContainer'),
    threatsContainer: document.getElementById('threatsAlertContainer'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    organismsGrid: document.getElementById('organismsGrid'),
    sdgSection: document.getElementById('sdgOverviewSection'),
    solutionsGrid: document.getElementById('solutionsGrid'),
    // Buku Halus
    selectCountryNb: document.getElementById('selectCountryNb'),
    selectOrganismNb: document.getElementById('selectOrganismNb'),
    btnModeTryFirst: document.getElementById('btnModeTryFirst'),
    btnModeModel: document.getElementById('btnModeModel'),
    btnTabNbCountry: document.getElementById('btnTabNbCountry'),
    btnTabNbOrganism: document.getElementById('btnTabNbOrganism'),
    nbQuestionsFlow: document.getElementById('nbQuestionsFlow'),
    nbParagraphTitle: document.getElementById('nbParagraphTitle'),
    nbParagraphContent: document.getElementById('nbParagraphContent'),
    btnListenParagraph: document.getElementById('btnListenParagraph'),
    btnPrintWorksheet: document.getElementById('btnPrintWorksheet'),
    // Quiz
    quizContainer: document.getElementById('quizContainer'),
    quizFeedbackLive: document.getElementById('quizFeedbackLive'),
    // Passport & Badges
    passportDashboard: document.getElementById('passportDashboard'),
    guardianCertificateCard: document.getElementById('guardianCertificateCard'),
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
    updateBodyTheme();
    renderStaticText();
    renderCountryHeaderChip();
    renderCountryTabs();
    renderDossier();
    renderOrganisms();
    renderSDGOverview();
    renderSolutions();
    initNotebookHelper();
    renderQuiz();
    updatePassportUI();
    setupEventListeners();
    setupIntersectionObserver();
  }

  // Update Country Theme on <body>
  function updateBodyTheme() {
    document.body.setAttribute('data-active-country', state.activeCountryId);
  }

  // ========================================================
  // TEXT TRANSLATION & GENERAL UI RENDERING
  // ========================================================
  function renderStaticText() {
    const t = APP_DATA.general[state.lang];
    if (!t) return;

    // Segmented language toggle buttons
    if (elements.btnLangEn && elements.btnLangId) {
      elements.btnLangEn.classList.toggle('active', state.lang === 'en');
      elements.btnLangEn.setAttribute('aria-pressed', state.lang === 'en');
      elements.btnLangId.classList.toggle('active', state.lang === 'id');
      elements.btnLangId.setAttribute('aria-pressed', state.lang === 'id');
    }

    // HTML elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    renderCountryHeaderChip();
  }

  function setLanguage(newLang) {
    if (state.lang === newLang) return;
    stopSpeaking();
    state.lang = newLang;
    safeStorageSet('eco_lang', state.lang);

    renderStaticText();
    renderCountryTabs();
    renderDossier();
    renderOrganisms();
    renderSDGOverview();
    renderSolutions();
    populateCountrySelector();
    populateOrganismSelector();
    updateNotebookHelper();
    renderQuiz();
    updatePassportUI();
  }

  // ========================================================
  // COUNTRY SWITCHING
  // ========================================================
  function switchCountry(countryId) {
    if (state.activeCountryId === countryId) return;
    stopSpeaking();
    state.activeCountryId = countryId;
    state.selectedNotebookCountry = countryId;
    updateBodyTheme();

    renderCountryHeaderChip();
    renderCountryTabs();
    renderDossier();
    renderOrganisms();
    populateOrganismSelector();
    updateNotebookHelper();
    updatePassportUI();
  }

  function renderCountryHeaderChip() {
    const c = getCurrentCountryData();
    if (!c) return;
    const cLang = getLang(c);

    if (elements.chipCountryFlag) elements.chipCountryFlag.textContent = c.flagEmoji;
    if (elements.chipCountryName) elements.chipCountryName.textContent = cLang.name;
    if (elements.headerCountryChip) {
      elements.headerCountryChip.setAttribute('aria-label', `Active Country: ${cLang.name}. Tap to change.`);
    }
  }

  function renderCountryTabs() {
    // Desktop tabs
    elements.desktopCountryTabs.forEach(btn => {
      const cId = btn.getAttribute('data-country');
      btn.classList.toggle('active', cId === state.activeCountryId);
    });

    // Hero cards (First action on page)
    elements.heroCountryCards.forEach(card => {
      const cId = card.getAttribute('data-country');
      card.classList.toggle('active', cId === state.activeCountryId);
    });
  }

  function getCurrentCountryData() {
    return APP_DATA.countries.find(c => c.id === state.activeCountryId) || APP_DATA.countries[0];
  }

  // ========================================================
  // COUNTRY DOSSIER CARD
  // ========================================================
  function renderDossier() {
    const c = getCurrentCountryData();
    const cLang = getLang(c);
    const t = APP_DATA.general[state.lang];

    // Dossier Card
    elements.dossierContainer.innerHTML = `
      <article class="dossier-card">
        <div class="dossier-header">
          <div class="dossier-title-area">
            <span class="dossier-flag" aria-hidden="true">${c.flagEmoji}</span>
            <div>
              <h2 class="dossier-country-name">${cLang.name}</h2>
              <span class="dossier-class-badge">${state.lang === 'en' ? 'Class' : 'Kelas'} ${c.classCode}</span>
            </div>
          </div>
          <button class="btn-speak ${!synth ? 'sr-only' : ''}" id="btnSpeakDossier" title="${t.readAloud}" aria-label="${t.readAloud} ${cLang.name}">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
            <span>${t.readAloud}</span>
          </button>
        </div>

        <!-- Video Preview Link (Real link with visible play badge) -->
        <div class="video-preview-box">
          <a href="${c.videoUrl}" target="_blank" rel="noopener noreferrer" class="video-thumb-link" id="btnOpenVideo" aria-label="${t.watchVideoBtn}: ${getLang(c.videoTitle)}">
            <picture>
              <source srcset="${c.videoThumb}" type="image/webp">
              <img src="${c.videoThumbFallback || c.videoThumb}" alt="${cLang.name} Video Preview" class="video-thumb-img" width="480" height="270" loading="lazy">
            </picture>
            <div class="video-play-overlay" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </a>
          <div class="video-text-content">
            <h4 class="video-title-label">${getLang(c.videoTitle)}</h4>
            <p class="video-subtitle-label">${state.lang === 'en' ? 'Classroom video lesson for Grade 2 students' : 'Materi video kelas untuk pembelajaran Siswa Kelas 2'}</p>
            <a href="${c.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn-watch-video">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>${t.watchVideoBtn}</span>
            </a>
          </div>
        </div>

        <!-- Dossier Questions Grid (Matching PPT Slides 7, 8, 9) -->
        <div class="dossier-grid">
          <div class="fact-item">
            <div class="fact-question-num">01.</div>
            <div class="fact-question-title">${state.lang === 'en' ? 'Where is it located?' : 'Di mana letaknya?'}</div>
            <div class="fact-answer-text">${cLang.location}</div>
          </div>

          <div class="fact-item">
            <div class="fact-question-num">02.</div>
            <div class="fact-question-title">${state.lang === 'en' ? 'What is its capital city?' : 'Apa nama ibu kotanya?'}</div>
            <div class="fact-answer-text">${cLang.capital}</div>
          </div>

          <div class="fact-item">
            <div class="fact-question-num">03.</div>
            <div class="fact-question-title">${state.lang === 'en' ? 'What language do people speak?' : 'Bahasa apa yang digunakan?'}</div>
            <div class="fact-answer-text">${cLang.languages}</div>
          </div>

          <div class="fact-item">
            <div class="fact-question-num">04.</div>
            <div class="fact-question-title">${state.lang === 'en' ? 'Two interesting facts:' : 'Dua fakta menarik:'}</div>
            <div class="fact-answer-text">
              1. ${cLang.interestingFacts[0]}<br>
              2. ${cLang.interestingFacts[1]}
            </div>
          </div>

          <div class="fact-item full-width">
            <div class="fact-question-num">05.</div>
            <div class="fact-question-title">${state.lang === 'en' ? 'What makes this country unique?' : 'Apa yang membuat negara ini unik?'}</div>
            <div class="fact-answer-text">${cLang.uniqueness}</div>
          </div>
        </div>
      </article>
    `;

    // Speak button for dossier
    const btnSpeak = document.getElementById('btnSpeakDossier');
    if (btnSpeak && synth) {
      btnSpeak.addEventListener('click', () => {
        const sentences = [
          cLang.name + '.',
          cLang.location,
          (state.lang === 'en' ? 'The capital city is ' : 'Ibu kotanya adalah ') + cLang.capital + '.',
          cLang.uniqueness
        ];
        handleSpeakSentences(btnSpeak, sentences, null);
      });
    }

    // Threats Alert Box
    elements.threatsContainer.innerHTML = `
      <div class="threats-alert-card">
        <div class="threats-alert-header">
          <span class="threats-alert-icon" aria-hidden="true">⚠️</span>
          <h3 class="threats-alert-title">${t.threatsTitle}</h3>
        </div>
        <p class="threats-alert-body">${cLang.miningThreatsSummary}</p>
      </div>
    `;
  }

  // ========================================================
  // ORGANISMS SHOWCASE GRID
  // Photo-first, Quick Read (3 sentences), Vocab chips
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
      const quickReadSentences = orgData.quickRead || [];
      const vocabList = orgData.vocab || [];

      return `
        <article class="organism-card" data-org-id="${org.id}">
          <!-- Photo First: Full bleed 4:3 with name on gradient -->
          <button type="button" class="card-media" onclick="window.ecoOpenModal('${org.id}')" aria-label="${t.zoomPhoto}: ${orgData.name}">
            <picture>
              <source srcset="${org.image}" type="image/webp">
              <img src="${org.imageFallback || org.image}" alt="${orgData.name}" class="card-img" width="400" height="300" loading="lazy">
            </picture>
            <span class="card-badge ${badgeClass}">${orgData.typeLabel}</span>
            <div class="card-media-overlay">
              <div class="card-overlay-text">
                <h3 class="card-title-overlay">${orgData.name}</h3>
                <div class="card-scientific-name">${org.scientificName}</div>
              </div>
              <div class="card-zoom-badge" aria-hidden="true">🔍</div>
            </div>
          </button>

          <div class="card-body">
            <!-- Audio & Speed Action Row -->
            <div class="card-action-row">
              <button class="btn-speak ${!synth ? 'sr-only' : ''}" data-org-id="${org.id}" title="${t.readAloud}" aria-label="${t.readAloud}: ${orgData.name}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
                <span>${t.readAloud}</span>
              </button>
            </div>

            <!-- Quick Read (3 Short Sentences with Highlight Support) -->
            <div class="quick-read-box" id="qrBox_${org.id}">
              <div class="quick-read-header">📖 ${t.quickReadTitle}</div>
              ${quickReadSentences.map((s, idx) => `
                <span class="quick-read-sentence" data-sentence-index="${idx}">${s}</span>
              `).join('')}
            </div>

            <!-- Tap-to-hear Vocabulary Chips -->
            ${vocabList.length > 0 ? `
              <div class="vocab-section">
                <div class="vocab-label">${t.vocabTitle}</div>
                <div class="vocab-chips-row">
                  ${vocabList.map(v => `
                    <button type="button" class="vocab-chip" data-word="${v.word}" data-meaning="${v.meaning}" title="${v.meaning}" aria-label="${v.word}: ${v.meaning}">
                      <span>🌱</span> <span>${v.word}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Expandable Full Story -->
            <div class="full-story-wrap" id="fullStory_${org.id}">
              <div class="info-block">
                <div class="info-label">🏡 ${state.lang === 'en' ? 'Where It Lives (Habitat)' : 'Tempat Tinggal (Habitat)'}</div>
                <div class="info-text">${orgData.habitat}</div>
              </div>

              <div class="info-block">
                <div class="info-label">⭐ ${state.lang === 'en' ? 'Cool Feature' : 'Ciri Khas / Unik'}</div>
                <div class="info-text">${orgData.uniqueFeature}</div>
              </div>

              <div class="info-block">
                <div class="info-label">⚠️ ${state.lang === 'en' ? 'Why It Needs Help' : 'Dampak Penambangan & Bahaya'}</div>
                <div class="info-text">${orgData.whyThreatened}</div>
              </div>
            </div>

            <!-- Card Footer Buttons -->
            <div class="card-footer-buttons">
              <button type="button" class="btn-toggle-story" data-target="fullStory_${org.id}">
                ${t.fullStoryBtn}
              </button>
              <button type="button" class="btn-card-detail" onclick="window.ecoOpenModal('${org.id}')">
                <span>🔎</span> <span>${t.zoomPhoto}</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach listeners to speak buttons
    elements.organismsGrid.querySelectorAll('.btn-speak').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const orgId = btn.getAttribute('data-org-id');
        const targetOrg = c.organisms.find(o => o.id === orgId);
        if (targetOrg) {
          const info = getLang(targetOrg);
          const sentences = (info.quickRead && info.quickRead.length > 0)
            ? info.quickRead
            : [info.name + '.', info.uniqueFeature, info.whyThreatened];

          const container = document.getElementById(`qrBox_${orgId}`);
          handleSpeakSentences(btn, sentences, container);
          markStoryHeard(orgId);
        }
      });
    });

    // Attach listeners to Full Story expander buttons
    elements.organismsGrid.querySelectorAll('.btn-toggle-story').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const isExp = targetEl.classList.toggle('expanded');
          btn.textContent = isExp ? t.hideStoryBtn : t.fullStoryBtn;
        }
      });
    });

    // Attach listeners to Vocabulary Chips
    elements.organismsGrid.querySelectorAll('.vocab-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = chip.getAttribute('data-word');
        const meaning = chip.getAttribute('data-meaning');
        speakSingleWord(`${word}. ${meaning}`);
        showVocabToast(word, meaning);
      });
    });
  }

  // Vocabulary Toast Notification
  function showVocabToast(word, meaning) {
    let toast = document.getElementById('ecoVocabToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'ecoVocabToast';
      toast.style.position = 'fixed';
      toast.style.bottom = '84px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.background = '#0f172a';
      toast.style.color = '#ffffff';
      toast.style.padding = '12px 20px';
      toast.style.borderRadius = '24px';
      toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
      toast.style.zIndex = '999';
      toast.style.maxWidth = '90%';
      toast.style.textAlign = 'center';
      toast.style.fontSize = '1rem';
      toast.style.lineHeight = '1.4';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<strong>🌱 ${word}:</strong> ${meaning}`;
    toast.style.display = 'block';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.display = 'none';
    }, 4500);
  }

  // ========================================================
  // AUDIO READ-ALOUD WITH SENTENCE HIGHLIGHTING
  // Sentence-by-sentence queue with rate 0.75 or 0.92
  // ========================================================
  function stopSpeaking() {
    if (synth) {
      synth.cancel();
    }
    isSpeaking = false;
    activeSpeechQueue = [];
    if (state.currentlySpeakingBtn) {
      state.currentlySpeakingBtn.classList.remove('speaking');
      const label = state.currentlySpeakingBtn.querySelector('span');
      if (label) {
        label.textContent = APP_DATA.general[state.lang].readAloud;
      }
      state.currentlySpeakingBtn = null;
    }
    clearSentenceHighlights();
  }

  function clearSentenceHighlights() {
    document.querySelectorAll('.quick-read-sentence.highlight-sentence').forEach(el => {
      el.classList.remove('highlight-sentence');
    });
  }

  function handleSpeakSentences(btn, sentences, containerEl) {
    if (!synth) return;

    if (state.currentlySpeakingBtn === btn && isSpeaking) {
      stopSpeaking();
      return;
    }

    stopSpeaking();
    state.currentlySpeakingBtn = btn;
    btn.classList.add('speaking');
    const label = btn.querySelector('span');
    if (label) {
      label.textContent = APP_DATA.general[state.lang].stopAudio;
    }

    isSpeaking = true;
    speakSentenceQueue(sentences, containerEl, 0);
  }

  function speakSentenceQueue(sentences, containerEl, index) {
    if (!isSpeaking || index >= sentences.length) {
      stopSpeaking();
      return;
    }

    clearSentenceHighlights();

    // Highlight sentence in DOM if container exists
    if (containerEl) {
      const sentenceSpan = containerEl.querySelector(`[data-sentence-index="${index}"]`);
      if (sentenceSpan) {
        sentenceSpan.classList.add('highlight-sentence');
      }
    }

    const text = sentences[index];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = state.lang === 'id' ? 'id-ID' : 'en-US';
    utterance.rate = state.speechRate; // 0.75 or 0.92

    utterance.onend = () => {
      speakSentenceQueue(sentences, containerEl, index + 1);
    };

    utterance.onerror = () => {
      stopSpeaking();
    };

    synth.speak(utterance);
  }

  function speakSingleWord(text) {
    if (!synth) return;
    synth.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = state.lang === 'id' ? 'id-ID' : 'en-US';
    utter.rate = state.speechRate;
    synth.speak(utter);
  }

  // ========================================================
  // SDG OVERVIEW SECTION
  // ========================================================
  function renderSDGOverview() {
    const sdg = APP_DATA.sdgConcepts[state.lang];
    if (!sdg) return;

    elements.sdgSection.innerHTML = `
      <div class="container">
        <div class="section-heading-center">
          <span class="badge-pill badge-sdg" style="margin-bottom: 8px;">SDG 15</span>
          <h2 class="section-title">${sdg.title}</h2>
          <p class="section-desc">${sdg.subtitle}</p>
        </div>

        <div class="sdg-definition-box">
          <h3 class="sdg-definition-title">${sdg.whatIsDeforestation.title}</h3>
          <p class="reading-text">${sdg.whatIsDeforestation.desc}</p>
        </div>

        <div class="section-heading-center" style="margin-top: 28px;">
          <h3 class="section-title" style="font-size: 1.5rem;">${sdg.causes.title}</h3>
        </div>
        <div class="sdg-cards-grid">
          ${sdg.causes.items.map(item => `
            <div class="sdg-info-item">
              <div class="sdg-item-icon" aria-hidden="true">${item.icon}</div>
              <h4 class="sdg-item-title">${item.title}</h4>
              <p class="sdg-item-desc">${item.text}</p>
            </div>
          `).join('')}
        </div>

        <div class="section-heading-center" style="margin-top: 28px;">
          <h3 class="section-title" style="font-size: 1.5rem;">${sdg.impacts.title}</h3>
        </div>
        <div class="sdg-cards-grid">
          ${sdg.impacts.items.map(item => `
            <div class="sdg-info-item">
              <div class="sdg-item-icon" aria-hidden="true">${item.icon}</div>
              <h4 class="sdg-item-title">${item.title}</h4>
              <p class="sdg-item-desc">${item.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ========================================================
  // BUKU HALUS HELPER
  // Includes "Try First" mode with Sentence Builder word banks
  // Bug fix: Removed .toLowerCase() on sentences
  // ========================================================
  function initNotebookHelper() {
    populateCountrySelector();
    populateOrganismSelector();
    updateNotebookHelper();
  }

  function populateCountrySelector() {
    elements.selectCountryNb.innerHTML = APP_DATA.countries.map(c => {
      const cLang = getLang(c);
      return `<option value="${c.id}" ${c.id === state.selectedNotebookCountry ? 'selected' : ''}>
        ${c.flagEmoji} Class ${c.classCode} • ${cLang.name}
      </option>`;
    }).join('');
  }

  function populateOrganismSelector() {
    const c = APP_DATA.countries.find(item => item.id === state.selectedNotebookCountry) || APP_DATA.countries[0];
    elements.selectOrganismNb.innerHTML = c.organisms.map(o => {
      const oLang = getLang(o);
      return `<option value="${o.id}" ${o.id === state.selectedNotebookOrganism ? 'selected' : ''}>
        ${o.type === 'animal' ? '🐾' : '🌿'} ${oLang.name} (${o.scientificName})
      </option>`;
    }).join('');
  }

  function updateNotebookHelper() {
    const t = APP_DATA.general[state.lang];
    const c = APP_DATA.countries.find(item => item.id === state.selectedNotebookCountry) || APP_DATA.countries[0];
    const cLang = getLang(c);
    const org = c.organisms.find(item => item.id === state.selectedNotebookOrganism) || c.organisms[0];
    const orgData = getLang(org);

    // Update active mode buttons
    if (elements.btnModeTryFirst && elements.btnModeModel) {
      elements.btnModeTryFirst.classList.toggle('active', state.notebookMode === 'try_first');
      elements.btnModeModel.classList.toggle('active', state.notebookMode === 'model');
    }

    if (state.activeNotebookTab === 'country') {
      elements.btnTabNbCountry.classList.add('active');
      elements.btnTabNbOrganism.classList.remove('active');

      const starters = (APP_DATA.notebookStarters && APP_DATA.notebookStarters.country)
        ? APP_DATA.notebookStarters.country[state.lang]
        : [];

      const questions = [
        { num: '01', title: state.lang === 'en' ? 'Where is it located?' : 'Di mana letaknya?', ans: cLang.location },
        { num: '02', title: state.lang === 'en' ? 'What is its capital city?' : 'Apa nama ibu kotanya?', ans: cLang.capital },
        { num: '03', title: state.lang === 'en' ? 'What language do people speak?' : 'Bahasa apa yang digunakan?', ans: cLang.languages },
        { num: '04', title: state.lang === 'en' ? 'Two interesting facts:' : 'Dua fakta menarik:', ans: `1. ${cLang.interestingFacts[0]} 2. ${cLang.interestingFacts[1]}` },
        { num: '05', title: state.lang === 'en' ? 'What makes this country unique?' : 'Apa yang membuat negara ini unik?', ans: cLang.uniqueness }
      ];

      elements.nbQuestionsFlow.innerHTML = questions.map((q, idx) => {
        const key = `country-${q.num}`;
        const starterObj = starters[idx] || { starter: '', words: [] };
        const built = state.studentBuiltSentences[key] || '';
        const isRevealed = state.revealedModelAnswers[key] || false;

        if (state.notebookMode === 'try_first') {
          return `
            <div class="nb-q-row">
              <span class="nb-q-badge">${q.num}. ${q.title}</span>
              <div class="sentence-builder-box">
                <div class="word-bank-label">🧩 ${t.wordBankTitle}</div>
                <div class="word-bank-chips">
                  ${starterObj.words.map(w => `
                    <button type="button" class="word-chip" onclick="window.ecoAddWord('${key}', '${w.replace(/'/g, "\\'")}')">+ ${w}</button>
                  `).join('')}
                </div>
                <div class="word-bank-label">${t.yourSentenceLabel}</div>
                <div class="student-sentence-display" id="disp_${key}">${built || `<em>${starterObj.starter} ...</em>`}</div>
                <div class="sentence-builder-actions">
                  <button type="button" class="btn-check-model" onclick="window.ecoToggleModelAns('${key}')">
                    ${t.checkAnswerBtn}
                  </button>
                  <button type="button" class="btn-reset-sentence" onclick="window.ecoResetSentence('${key}')">
                    ${t.clearSentenceBtn}
                  </button>
                </div>
                <div class="model-answer-reveal" id="model_${key}" style="display: ${isRevealed ? 'block' : 'none'};">
                  <strong>${t.modelAnswerLabel}</strong> ${q.ans}
                </div>
              </div>
            </div>
          `;
        } else {
          return `
            <div class="nb-q-row">
              <span class="nb-q-badge">${q.num}.</span>
              <span class="nb-q-text">${q.title}</span>
              <div class="fact-answer-text" style="padding: 10px 0;">${q.ans}</div>
            </div>
          `;
        }
      }).join('');

      elements.nbParagraphTitle.textContent = state.lang === 'en' ? '📝 Combined Country Paragraph:' : '📝 Contoh Paragraf Gabungan Profil Negara:';
      elements.nbParagraphContent.textContent = cLang.combinedParagraph;

    } else {
      // Organism questions
      elements.btnTabNbCountry.classList.remove('active');
      elements.btnTabNbOrganism.classList.add('active');

      const starters = (APP_DATA.notebookStarters && APP_DATA.notebookStarters.organism)
        ? APP_DATA.notebookStarters.organism[state.lang]
        : [];

      const questions = [
        { num: '01', title: state.lang === 'en' ? 'Name & Where It Lives (Habitat)' : 'Nama & Tempat Tinggal (Habitat)', ans: `${orgData.name} lives in ${orgData.habitat}` },
        { num: '02', title: state.lang === 'en' ? 'Cool Feature / Unique Trait' : 'Ciri Khas / Keunikan', ans: orgData.uniqueFeature },
        { num: '03', title: state.lang === 'en' ? 'How does it survive in nature?' : 'Bagaimana cara bertahan hidupnya?', ans: orgData.howItSurvives },
        { num: '04', title: state.lang === 'en' ? 'Why is it threatened by mining or deforestation?' : 'Mengapa terancam oleh tambang & deforestasi?', ans: orgData.whyThreatened },
        { num: '05', title: state.lang === 'en' ? 'Our Solution to Protect It' : 'Solusi Perlindungan Kita', ans: state.lang === 'en' ? 'By stopping mining in protected parks and preserving tall forest trees.' : 'Dengan menghentikan tambang di cagar alam dan menjaga pepohonan tetap lestari.' }
      ];

      elements.nbQuestionsFlow.innerHTML = questions.map((q, idx) => {
        const key = `org-${q.num}`;
        const starterObj = starters[idx] || { starter: '', words: [] };
        const built = state.studentBuiltSentences[key] || '';
        const isRevealed = state.revealedModelAnswers[key] || false;

        if (state.notebookMode === 'try_first') {
          return `
            <div class="nb-q-row">
              <span class="nb-q-badge">${q.num}. ${q.title}</span>
              <div class="sentence-builder-box">
                <div class="word-bank-label">🧩 ${t.wordBankTitle}</div>
                <div class="word-bank-chips">
                  ${starterObj.words.map(w => `
                    <button type="button" class="word-chip" onclick="window.ecoAddWord('${key}', '${w.replace(/'/g, "\\'")}')">+ ${w}</button>
                  `).join('')}
                </div>
                <div class="word-bank-label">${t.yourSentenceLabel}</div>
                <div class="student-sentence-display" id="disp_${key}">${built || `<em>${orgData.name} ${starterObj.starter} ...</em>`}</div>
                <div class="sentence-builder-actions">
                  <button type="button" class="btn-check-model" onclick="window.ecoToggleModelAns('${key}')">
                    ${t.checkAnswerBtn}
                  </button>
                  <button type="button" class="btn-reset-sentence" onclick="window.ecoResetSentence('${key}')">
                    ${t.clearSentenceBtn}
                  </button>
                </div>
                <div class="model-answer-reveal" id="model_${key}" style="display: ${isRevealed ? 'block' : 'none'};">
                  <strong>${t.modelAnswerLabel}</strong> ${q.ans}
                </div>
              </div>
            </div>
          `;
        } else {
          return `
            <div class="nb-q-row">
              <span class="nb-q-badge">${q.num}.</span>
              <span class="nb-q-text">${q.title}</span>
              <div class="fact-answer-text" style="padding: 10px 0;">${q.ans}</div>
            </div>
          `;
        }
      }).join('');

      elements.nbParagraphTitle.textContent = state.lang === 'en' ? '📝 Combined Organism Paragraph:' : '📝 Contoh Paragraf Deskripsi Satwa/Tumbuhan:';

      // Rebuilt sentence frames (BUG FIX: NO .toLowerCase() calls!)
      const sampleOrgParagraph = state.lang === 'en'
        ? `${orgData.name} is a special ${org.type} that lives in ${orgData.habitat}. Its unique feature is that ${orgData.uniqueFeature} To survive, ${orgData.howItSurvives} However, it is now threatened because ${orgData.whyThreatened} We must protect it by preserving forests and stopping harmful mining activities.`
        : `${orgData.name} adalah ${org.type === 'animal' ? 'hewan' : 'tumbuhan'} unik yang hidup di ${orgData.habitat}. Ciri khas utamanya adalah ${orgData.uniqueFeature} Untuk bertahan hidup, ${orgData.howItSurvives} Sayangnya, kelestariannya terancam karena ${orgData.whyThreatened} Kita harus melindunginya dengan menjaga kelestarian hutan darat sesuai SDG 15.`;

      elements.nbParagraphContent.textContent = sampleOrgParagraph;
    }
  }

  // Global window functions for inline button onclicks in sentence builder
  window.ecoAddWord = function (key, word) {
    if (!state.studentBuiltSentences[key]) {
      state.studentBuiltSentences[key] = word;
    } else {
      state.studentBuiltSentences[key] += ' ' + word;
    }
    const disp = document.getElementById(`disp_${key}`);
    if (disp) {
      disp.textContent = state.studentBuiltSentences[key];
    }
  };

  window.ecoResetSentence = function (key) {
    state.studentBuiltSentences[key] = '';
    const disp = document.getElementById(`disp_${key}`);
    if (disp) {
      disp.innerHTML = '<em>...</em>';
    }
  };

  window.ecoToggleModelAns = function (key) {
    state.revealedModelAnswers[key] = !state.revealedModelAnswers[key];
    const el = document.getElementById(`model_${key}`);
    if (el) {
      el.style.display = state.revealedModelAnswers[key] ? 'block' : 'none';
    }
  };

  // ========================================================
  // INTERACTIVE MINI QUIZ
  // Star progress, positive feedback, 1 retry, no strikethrough
  // ========================================================
  function renderQuiz() {
    const q = APP_DATA.quiz[state.quizIndex];
    if (!q) {
      renderQuizFinished();
      return;
    }

    const qData = getLang(q);
    const t = APP_DATA.general[state.lang];
    state.quizAnswered = false;

    // Build star row HTML
    const totalQ = APP_DATA.quiz.length;
    let starRowHtml = '';
    for (let i = 0; i < totalQ; i++) {
      const isPastOrCurrent = i < state.quizIndex;
      const isActiveStar = i < state.quizScore;
      starRowHtml += `<span class="quiz-star ${isActiveStar ? 'active' : ''}" aria-hidden="true">★</span>`;
    }

    const progressFormatted = t.quizProgress
      .replace('{current}', state.quizIndex + 1)
      .replace('{total}', totalQ);

    elements.quizContainer.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-star-row" id="quizStarRow">${starRowHtml}</div>
        <div class="quiz-progress-text">${progressFormatted} • ${t.quizScore} ${state.quizScore} / ${totalQ}</div>

        <h3 class="quiz-question-title">${qData.question}</h3>

        <div class="quiz-options-list" role="radiogroup" aria-label="Question options">
          ${qData.options.map((opt, idx) => `
            <button class="quiz-option-btn" data-index="${idx}" role="radio" aria-checked="false">
              <span class="quiz-option-letter">${String.fromCharCode(65 + idx)}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>

        <div id="quizFeedbackArea"></div>
      </div>
    `;

    // Attach click listeners to option buttons
    elements.quizContainer.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (state.quizAnswered) return;
        const selectedIdx = parseInt(btn.getAttribute('data-index'), 10);
        handleQuizChoice(selectedIdx, btn, qData);
      });
    });
  }

  function handleQuizChoice(choiceIdx, btn, qData) {
    const isCorrect = choiceIdx === qData.answer;
    const t = APP_DATA.general[state.lang];
    const feedbackArea = document.getElementById('quizFeedbackArea');

    if (isCorrect) {
      // Correct!
      state.quizAnswered = true;
      state.quizScore++;
      btn.classList.add('correct');
      btn.setAttribute('aria-checked', 'true');

      // Pop active star
      const stars = elements.quizContainer.querySelectorAll('.quiz-star');
      if (stars[state.quizIndex]) {
        stars[state.quizIndex].classList.add('active', 'pop');
      }

      // Live announcement
      if (elements.quizFeedbackLive) {
        elements.quizFeedbackLive.textContent = `Correct! ${qData.explanation}`;
      }

      feedbackArea.innerHTML = `
        <div class="quiz-feedback-box correct">
          <strong>🎉 ${state.lang === 'en' ? 'Super job!' : 'Hebat sekali!'}</strong> ${qData.explanation}
        </div>
        <button class="btn-quiz-next" id="btnNextQuiz">${t.quizNextBtn}</button>
      `;

      disableQuizOptions(true);
      scrollToNextButton();

    } else {
      // Wrong choice
      if (state.quizRetryCount === 0) {
        // ONE RETRY GENTLE PROMPT (No strikethrough!)
        state.quizRetryCount = 1;
        btn.classList.add('wrong-retry');

        if (elements.quizFeedbackLive) {
          elements.quizFeedbackLive.textContent = t.quizTryAgain;
        }

        feedbackArea.innerHTML = `
          <div class="quiz-feedback-box try-again">
            ${t.quizTryAgain}
          </div>
        `;
      } else {
        // Revealed after 1 retry
        state.quizAnswered = true;
        btn.classList.add('wrong-retry');

        // Highlight correct option
        elements.quizContainer.querySelectorAll('.quiz-option-btn').forEach(b => {
          if (parseInt(b.getAttribute('data-index'), 10) === qData.answer) {
            b.classList.add('correct');
          }
        });

        if (elements.quizFeedbackLive) {
          elements.quizFeedbackLive.textContent = qData.explanation;
        }

        feedbackArea.innerHTML = `
          <div class="quiz-feedback-box correct">
            <strong>${state.lang === 'en' ? 'The answer is:' : 'Kunci jawabannya adalah:'}</strong> ${qData.explanation}
          </div>
          <button class="btn-quiz-next" id="btnNextQuiz">${t.quizNextBtn}</button>
        `;

        disableQuizOptions(true);
        scrollToNextButton();
      }
    }

    const nextBtn = document.getElementById('btnNextQuiz');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        state.quizIndex++;
        state.quizRetryCount = 0;
        renderQuiz();
      });
    }
  }

  function disableQuizOptions(disable) {
    elements.quizContainer.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.disabled = disable;
    });
  }

  function scrollToNextButton() {
    setTimeout(() => {
      const nextBtn = document.getElementById('btnNextQuiz');
      if (nextBtn) {
        nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  }

  function renderQuizFinished() {
    const t = APP_DATA.general[state.lang];
    passportState.quizDone = true;
    savePassport();

    elements.quizContainer.innerHTML = `
      <div class="quiz-card" style="text-align: center;">
        <div style="font-size: 3.5rem; margin-bottom: 10px;">🌟🏆🌟</div>
        <h3 class="section-title" style="margin-bottom: 10px;">${t.quizFinishTitle}</h3>
        <p class="reading-text" style="margin-bottom: 20px;">
          ${t.quizFinishMsg}
        </p>
        <div style="font-size: 1.5rem; font-weight: 700; color: #047857; margin-bottom: 24px;">
          ${t.quizScore} ${state.quizScore} / ${APP_DATA.quiz.length} ⭐
        </div>
        <button class="btn-quiz-next" id="btnRestartQuiz" style="max-width: 300px; margin: 0 auto;">
          ${t.restartQuiz}
        </button>
      </div>
    `;

    const btnRestart = document.getElementById('btnRestartQuiz');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        state.quizIndex = 0;
        state.quizScore = 0;
        state.quizRetryCount = 0;
        renderQuiz();
      });
    }
  }

  // ========================================================
  // EXPLORER PASSPORT & NATURE GUARDIAN BADGES
  // ========================================================
  function updatePassportUI() {
    const t = APP_DATA.general[state.lang];
    const totalCreatures = 18;
    const metCount = passportState.creaturesMet.length;
    const storiesCount = passportState.storiesHeard.length;

    // Calculate percentage (50% creatures met, 30% stories heard, 20% quiz)
    const pct = Math.min(100, Math.round(
      ((metCount / totalCreatures) * 50) +
      ((storiesCount / totalCreatures) * 30) +
      (passportState.quizDone ? 20 : 0)
    ));

    // Update Header Progress Ring
    if (elements.passportPercent) elements.passportPercent.textContent = `${pct}%`;
    if (elements.passportRingCircle) {
      elements.passportRingCircle.setAttribute('stroke-dasharray', `${pct}, 100`);
    }

    // Render Dashboard in #badgesSection
    if (!elements.passportDashboard) return;

    elements.passportDashboard.innerHTML = `
      <div class="passport-stats-row">
        <div class="passport-stat-item">
          <div class="stat-num">${metCount} / ${totalCreatures}</div>
          <div class="stat-label">🐾 ${t.creaturesMet}</div>
        </div>
        <div class="passport-stat-item">
          <div class="stat-num">${storiesCount} / ${totalCreatures}</div>
          <div class="stat-label">📖 ${t.storiesHeard}</div>
        </div>
        <div class="passport-stat-item">
          <div class="stat-num">${passportState.quizDone ? '✅' : '⏳'}</div>
          <div class="stat-label">🎮 ${t.quizDone}</div>
        </div>
      </div>

      <!-- Stamps by Country -->
      ${APP_DATA.countries.map(c => {
        const cLang = getLang(c);
        return `
          <div class="stamps-country-block">
            <h3 class="stamps-country-title">${c.flagEmoji} ${cLang.name} (Class ${c.classCode})</h3>
            <div class="stamps-grid">
              ${c.organisms.map(org => {
                const orgData = getLang(org);
                const isUnlocked = passportState.creaturesMet.includes(org.id);
                return `
                  <div class="stamp-slot ${isUnlocked ? 'unlocked' : 'locked'}" title="${orgData.name}">
                    <span class="stamp-icon">${isUnlocked ? (org.type === 'animal' ? '🐾' : '🌿') : '🔒'}</span>
                    <span class="stamp-name">${orgData.name}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    `;

    // Show Guardian of Nature Certificate when completed
    if (pct >= 80 || (metCount >= 12 && passportState.quizDone)) {
      if (elements.guardianCertificateCard) {
        elements.guardianCertificateCard.style.display = 'block';
        elements.guardianCertificateCard.innerHTML = `
          <div class="certificate-seal" aria-hidden="true">🛡️🌟🛡️</div>
          <h3 class="certificate-title">${t.guardianBadgeTitle}</h3>
          <p class="certificate-subtitle">${t.guardianBadgeCongrats}</p>
          <div class="certificate-input-wrap">
            <label for="guardianNameInput">${t.namePrompt}</label>
            <input type="text" id="guardianNameInput" class="certificate-name-input" placeholder="${t.namePlaceholder}" value="${passportState.guardianName}">
          </div>
          <button type="button" class="btn-print" id="btnPrintBadge" style="margin: 0 auto;">
            ${t.printBadgeBtn}
          </button>
        `;

        const nameInput = document.getElementById('guardianNameInput');
        if (nameInput) {
          nameInput.addEventListener('input', (e) => {
            passportState.guardianName = e.target.value;
            savePassport();
          });
        }

        const btnPrintBadge = document.getElementById('btnPrintBadge');
        if (btnPrintBadge) {
          btnPrintBadge.addEventListener('click', () => {
            window.print();
          });
        }
      }
    }
  }

  // ========================================================
  // SOLUTIONS SECTION
  // ========================================================
  function renderSolutions() {
    const list = APP_DATA.solutions[state.lang] || APP_DATA.solutions.en;
    elements.solutionsGrid.innerHTML = list.map(sol => `
      <div class="solution-card">
        <div class="solution-number">${sol.num}</div>
        <div class="solution-content">
          <h3>${sol.icon} ${sol.title}</h3>
          <p class="reading-text">${sol.text}</p>
        </div>
      </div>
    `).join('');
  }

  // ========================================================
  // HIGH-RESOLUTION PHOTO MODAL / BOTTOM SHEET
  // Focus trap and accessibility
  // ========================================================
  window.ecoOpenModal = function (orgId) {
    let targetOrg = null;
    APP_DATA.countries.forEach(c => {
      const found = c.organisms.find(o => o.id === orgId);
      if (found) targetOrg = found;
    });

    if (!targetOrg) return;

    markCreatureMet(orgId);

    const orgData = getLang(targetOrg);
    state.modalLastFocusedEl = document.activeElement;

    elements.modalTitle.textContent = `${orgData.name} (${targetOrg.scientificName})`;
    elements.modalImage.src = targetOrg.image;
    elements.modalImage.alt = orgData.name;

    elements.modalDetails.innerHTML = `
      <div style="margin-bottom: 14px;">
        <span class="card-badge ${targetOrg.type === 'animal' ? 'badge-animal' : 'badge-plant'}">${orgData.typeLabel}</span>
      </div>
      <div class="info-block" style="margin-bottom: 12px;">
        <div class="info-label">🏡 ${state.lang === 'en' ? 'Where It Lives (Habitat)' : 'Tempat Tinggal (Habitat)'}</div>
        <div class="reading-text">${orgData.habitat}</div>
      </div>
      <div class="info-block" style="margin-bottom: 12px;">
        <div class="info-label">⭐ ${state.lang === 'en' ? 'Cool Feature' : 'Ciri Khas / Unik'}</div>
        <div class="reading-text">${orgData.uniqueFeature}</div>
      </div>
      <div class="info-block" style="margin-bottom: 12px;">
        <div class="info-label">🐾 ${state.lang === 'en' ? 'How It Survives' : 'Cara Bertahan Hidup'}</div>
        <div class="reading-text">${orgData.howItSurvives}</div>
      </div>
      <div class="info-block">
        <div class="info-label">⚠️ ${state.lang === 'en' ? 'Why It Is Threatened' : 'Dampak Penambangan & Bahaya'}</div>
        <div class="reading-text">${orgData.whyThreatened}</div>
      </div>
    `;

    elements.photoModal.classList.add('open');
    elements.btnCloseModal.focus();
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    elements.photoModal.classList.remove('open');
    document.body.style.overflow = '';
    if (state.modalLastFocusedEl && typeof state.modalLastFocusedEl.focus === 'function') {
      state.modalLastFocusedEl.focus();
    }
  }

  // ========================================================
  // INTERSECTION OBSERVER FOR MOBILE BOTTOM NAV
  // Highlights active nav item based on scroll position
  // ========================================================
  function setupIntersectionObserver() {
    const sectionIds = ['countrySection', 'notebookSection', 'quizSection', 'badgesSection'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          elements.mobileNavItems.forEach(item => {
            const navTarget = item.getAttribute('data-target');
            item.classList.toggle('active', navTarget === targetId);
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(sec => observer.observe(sec));
  }

  // ========================================================
  // EVENT LISTENERS SETUP
  // ========================================================
  function setupEventListeners() {
    // Segmented Language Toggle Buttons
    if (elements.btnLangEn) {
      elements.btnLangEn.addEventListener('click', () => setLanguage('en'));
    }
    if (elements.btnLangId) {
      elements.btnLangId.addEventListener('click', () => setLanguage('id'));
    }

    // Header Country Switcher Chip (Cycle through countries)
    if (elements.headerCountryChip) {
      elements.headerCountryChip.addEventListener('click', () => {
        const order = ['haiti', 'suriname', 'bolivia'];
        const currentIdx = order.indexOf(state.activeCountryId);
        const nextCountry = order[(currentIdx + 1) % order.length];
        switchCountry(nextCountry);
      });
    }

    // Reading Voice Speed Controls (🐢 Slow: 0.75, 🐰 Normal: 0.92)
    if (elements.btnSpeedSlow && elements.btnSpeedNormal) {
      elements.btnSpeedSlow.addEventListener('click', () => {
        state.speechRate = 0.75;
        elements.btnSpeedSlow.classList.add('active');
        elements.btnSpeedNormal.classList.remove('active');
      });

      elements.btnSpeedNormal.addEventListener('click', () => {
        state.speechRate = 0.92;
        elements.btnSpeedNormal.classList.add('active');
        elements.btnSpeedSlow.classList.remove('active');
      });
    }

    // Hero Country Cards (One clear first action on mobile)
    elements.heroCountryCards.forEach(card => {
      card.addEventListener('click', () => {
        const cId = card.getAttribute('data-country');
        switchCountry(cId);
        const target = document.getElementById('countrySection');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Desktop Country Tabs
    elements.desktopCountryTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const cId = btn.getAttribute('data-country');
        switchCountry(cId);
      });
    });

    // Mobile Bottom Nav Items (4 items)
    elements.mobileNavItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Organism Filter Buttons
    elements.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeFilter = btn.getAttribute('data-filter');
        renderOrganisms();
      });
    });

    // Buku Halus Selectors
    elements.selectCountryNb.addEventListener('change', (e) => {
      state.selectedNotebookCountry = e.target.value;
      populateOrganismSelector();
      updateNotebookHelper();
    });

    elements.selectOrganismNb.addEventListener('change', (e) => {
      state.selectedNotebookOrganism = e.target.value;
      updateNotebookHelper();
    });

    // Buku Halus Mode Switcher (Try First vs Show Model)
    if (elements.btnModeTryFirst && elements.btnModeModel) {
      elements.btnModeTryFirst.addEventListener('click', () => {
        state.notebookMode = 'try_first';
        updateNotebookHelper();
      });

      elements.btnModeModel.addEventListener('click', () => {
        state.notebookMode = 'model';
        updateNotebookHelper();
      });
    }

    // Buku Halus Tabs (Country Questions vs Organism Questions)
    elements.btnTabNbCountry.addEventListener('click', () => {
      state.activeNotebookTab = 'country';
      updateNotebookHelper();
    });

    elements.btnTabNbOrganism.addEventListener('click', () => {
      state.activeNotebookTab = 'organism';
      updateNotebookHelper();
    });

    // Listen to combined paragraph button
    if (elements.btnListenParagraph) {
      elements.btnListenParagraph.addEventListener('click', () => {
        const text = elements.nbParagraphContent.textContent;
        if (text) {
          const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
          handleSpeakSentences(elements.btnListenParagraph, sentences, null);
        }
      });
    }

    // Print Worksheet Button
    if (elements.btnPrintWorksheet) {
      elements.btnPrintWorksheet.addEventListener('click', () => {
        window.print();
      });
    }

    // Modal Close
    elements.btnCloseModal.addEventListener('click', closeModal);
    elements.photoModal.addEventListener('click', (e) => {
      if (e.target === elements.photoModal) {
        closeModal();
      }
    });

    // Keyboard Accessibility (Escape key to close modal)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elements.photoModal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  // Run initial setup when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
