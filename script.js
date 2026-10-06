// ==========================================================
// ECOEXPLORERS: MOBILE-FIRST STORYBOOK SCRIPT (SCREENS 1-3)
// Grade 2 (Ages 6-8) • Vanilla JS • Zero External Libraries
// ==========================================================

(function () {
  'use strict';

  // --------------------------------------------------------
  // 1. STATE & PERSISTENCE
  // --------------------------------------------------------
  const STORAGE_KEYS = {
    LANG: 'ecoexplorers_lang',
    COUNTRY: 'ecoexplorers_country',
    VISITED: 'ecoexplorers_visited'
  };

  const state = {
    lang: 'en',
    country: 'haiti',
    currentScreen: 'welcome',
    visited: {}
  };

  // Safe localStorage helper
  function loadPersistedState() {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEYS.LANG);
      if (savedLang === 'en' || savedLang === 'id') {
        state.lang = savedLang;
      }
      const savedCountry = localStorage.getItem(STORAGE_KEYS.COUNTRY);
      if (savedCountry === 'haiti' || savedCountry === 'suriname' || savedCountry === 'bolivia') {
        state.country = savedCountry;
      }
      const savedVisited = localStorage.getItem(STORAGE_KEYS.VISITED);
      if (savedVisited) {
        state.visited = JSON.parse(savedVisited);
      }
    } catch (e) {
      console.warn('localStorage read disabled or unavailable:', e);
    }
  }

  function saveStateKey(key, value) {
    try {
      if (typeof value === 'object') {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        localStorage.setItem(key, String(value));
      }
    } catch (e) {
      console.warn('localStorage write disabled or full:', e);
    }
  }

  // --------------------------------------------------------
  // 2. WEB AUDIO SYNTHESIZER (No external audio files needed)
  // --------------------------------------------------------
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Cheerful star chime sound
  function playStarChime() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Note 1: E5 (659Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(659.25, now);
      gain1.gain.setValueAtTime(0.2, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.35);

      // Note 2: B5 (987Hz)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(987.77, now + 0.12);
      gain2.gain.setValueAtTime(0.25, now + 0.12);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.12);
      osc2.stop(now + 0.6);
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  // Friendly button tap boop
  function playTapBoop() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {
      // Audio not supported
    }
  }

  // --------------------------------------------------------
  // 3. SPEECH SYNTHESIS HELPER
  // --------------------------------------------------------
  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis unsupported on this browser');
      return;
    }
    try {
      window.speechSynthesis.cancel(); // Stop any pending utterance
      if (!text || !text.trim()) return;

      const utterance = new SpeechSynthesisUtterance(text.trim());
      utterance.lang = state.lang === 'id' ? 'id-ID' : 'en-US';
      utterance.rate = 0.86; // Slower, clear speed for Grade 2
      utterance.pitch = 1.05; // Slightly cheerful pitch

      // Try selecting a natural voice matching language
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const langPrefix = state.lang === 'id' ? 'id' : 'en';
        const matchingVoice = voices.find(v => v.lang.toLowerCase().startsWith(langPrefix));
        if (matchingVoice) {
          utterance.voice = matchingVoice;
        }
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Error during speech synthesis:', e);
    }
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }

  // --------------------------------------------------------
  // 4. DATA ACCESSORS
  // --------------------------------------------------------
  function getAppData() {
    if (typeof APP_DATA !== 'undefined') return APP_DATA;
    if (typeof window !== 'undefined' && window.APP_DATA) return window.APP_DATA;
    return null;
  }

  function getLang() {
    return state.lang === 'id' ? 'id_lang' : 'en';
  }

  function getGeneralString(key, fallback = '') {
    const data = getAppData();
    if (!data || !data.general) return fallback;
    const langKey = state.lang;
    const langObj = data.general[langKey] || data.general.en;
    return (langObj && langObj[key]) ? langObj[key] : fallback;
  }

  function getCurrentCountry() {
    const data = getAppData();
    if (!data || !data.countries) return null;
    return data.countries.find(c => c.id === state.country) || data.countries[0];
  }

  function getCountryName(country) {
    if (!country) return '';
    const lk = getLang();
    return (country[lk] && country[lk].name) ? country[lk].name : (country.en && country.en.name) || country.id;
  }

  function getOrganismData(country, organismId) {
    if (!country || !country.organisms) return null;
    return country.organisms.find(o => o.id === organismId) || null;
  }

  function getOrganismName(organism) {
    if (!organism) return '';
    const lk = getLang();
    return (organism[lk] && organism[lk].name) ? organism[lk].name : (organism.en && organism.en.name) || organism.id;
  }

  // --------------------------------------------------------
  // 5. DOM CACHE
  // --------------------------------------------------------
  let dom = {};

  function cacheDom() {
    dom = {
      app: document.getElementById('storybookApp'),
      announcer: document.getElementById('srLiveAnnouncer'),
      // Screens
      screenWelcome: document.getElementById('screenWelcome'),
      screenPickCountry: document.getElementById('screenPickCountry'),
      screenTrail: document.getElementById('screenTrail'),
      // Welcome
      welcomeTitle: document.getElementById('welcomeTitle'),
      welcomeSub: document.getElementById('welcomeSub'),
      btnWelcomeAudio: document.getElementById('btnWelcomeAudio'),
      btnStartAdventure: document.getElementById('btnStartAdventure'),
      startBtnLabel: document.getElementById('startBtnLabel'),
      // Pick Country
      btnBackToWelcome: document.getElementById('btnBackToWelcome'),
      pickCountryHeading: document.getElementById('pickCountryHeading'),
      btnPickCountryAudio: document.getElementById('btnPickCountryAudio'),
      countryCardsContainer: document.getElementById('countryCardsContainer'),
      // Trail
      btnTrailCountryPill: document.getElementById('btnTrailCountryPill'),
      trailFlag: document.getElementById('trailFlag'),
      trailCountryName: document.getElementById('trailCountryName'),
      trailHeading: document.getElementById('trailHeading'),
      btnTrailAudio: document.getElementById('btnTrailAudio'),
      trailStarsRow: document.getElementById('trailStarsRow'),
      trailProgressLabel: document.getElementById('trailProgressLabel'),
      trailBubblesGrid: document.getElementById('trailBubblesGrid'),
      trailPathLine: document.getElementById('trailCurvedLine'),
      // Bottom Nav
      bottomNav: document.getElementById('storyBottomNav'),
      navItemHome: document.getElementById('navItemHome'),
      navItemTrail: document.getElementById('navItemTrail'),
      navItemQuiz: document.getElementById('navItemQuiz'),
      navItemBadges: document.getElementById('navItemBadges'),
      bottomNavHomeLabel: document.getElementById('bottomNavHomeLabel'),
      bottomNavTrailLabel: document.getElementById('bottomNavTrailLabel'),
      bottomNavQuizLabel: document.getElementById('bottomNavQuizLabel'),
      bottomNavBadgesLabel: document.getElementById('bottomNavBadgesLabel'),
      // Creature Sheet
      creatureSheet: document.getElementById('creatureSheet'),
      btnSheetClose: document.getElementById('btnSheetClose'),
      sheetCreatureImg: document.getElementById('sheetCreatureImg'),
      sheetCreatureName: document.getElementById('sheetCreatureName'),
      sheetTypePill: document.getElementById('sheetTypePill'),
      sheetQuickRead: document.getElementById('sheetQuickRead'),
      sheetStampPill: document.getElementById('sheetStampPill'),
      btnSheetAudio: document.getElementById('btnSheetAudio'),
      btnSheetContinue: document.getElementById('btnSheetContinue'),
      // Teaser Sheet
      teaserSheet: document.getElementById('teaserSheet'),
      btnTeaserClose: document.getElementById('btnTeaserClose'),
      teaserIcon: document.getElementById('teaserIcon'),
      teaserTitle: document.getElementById('teaserTitle'),
      teaserDesc: document.getElementById('teaserDesc'),
      btnTeaserAction: document.getElementById('btnTeaserAction')
    };
  }

  // --------------------------------------------------------
  // 6. SCREEN NAVIGATION
  // --------------------------------------------------------
  function goToScreen(screenName) {
    stopSpeech();
    state.currentScreen = screenName;

    // Toggle screen display
    const screens = [
      { id: 'welcome', el: dom.screenWelcome },
      { id: 'pickCountry', el: dom.screenPickCountry },
      { id: 'trail', el: dom.screenTrail }
    ];

    screens.forEach(s => {
      if (s.el) {
        if (s.id === screenName) {
          s.el.classList.add('active');
        } else {
          s.el.classList.remove('active');
        }
      }
    });

    // Update bottom nav highlights
    if (dom.navItemHome) dom.navItemHome.classList.remove('active');
    if (dom.navItemTrail) dom.navItemTrail.classList.remove('active');
    if (dom.navItemQuiz) dom.navItemQuiz.classList.remove('active');
    if (dom.navItemBadges) dom.navItemBadges.classList.remove('active');

    if (screenName === 'welcome' || screenName === 'pickCountry') {
      if (dom.navItemHome) dom.navItemHome.classList.add('active');
    } else if (screenName === 'trail') {
      if (dom.navItemTrail) dom.navItemTrail.classList.add('active');
    }

    // Announce to screen readers
    if (dom.announcer) {
      let announcement = '';
      if (screenName === 'welcome') announcement = getGeneralString('welcomeTitle', 'Welcome Screen');
      else if (screenName === 'pickCountry') announcement = getGeneralString('pickCountryHeading', 'Pick Your Country');
      else if (screenName === 'trail') announcement = getGeneralString('trailHeading', 'Wildlife Trail');
      dom.announcer.textContent = announcement;
    }
  }

  // --------------------------------------------------------
  // 7. COUNTRY SELECTION & THEME
  // --------------------------------------------------------
  function applyCountryTheme(countryId) {
    document.body.classList.remove('theme-haiti', 'theme-suriname', 'theme-bolivia');
    document.body.classList.add('theme-' + countryId);

    const data = getAppData();
    const country = data && data.countries ? data.countries.find(c => c.id === countryId) : null;
    if (country) {
      document.documentElement.style.setProperty('--country-theme', country.color || '#0284c7');
      document.documentElement.style.setProperty('--country-accent', country.accentColor || '#0369a1');
      document.documentElement.style.setProperty('--country-bg', country.bgColor || '#f0f9ff');
    }
  }

  function selectCountry(countryId) {
    playTapBoop();
    state.country = countryId;
    saveStateKey(STORAGE_KEYS.COUNTRY, countryId);
    applyCountryTheme(countryId);
    renderTrailScreen();
    goToScreen('trail');
  }

  // --------------------------------------------------------
  // 8. LANGUAGE SWITCHER
  // --------------------------------------------------------
  function setLanguage(lang) {
    playTapBoop();
    state.lang = lang;
    saveStateKey(STORAGE_KEYS.LANG, lang);
    document.documentElement.setAttribute('lang', lang);

    // Update all segmented toggle buttons across all screens
    const buttons = document.querySelectorAll('.lang-segment');
    buttons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    updateStaticText();
    renderCountryCards();
    renderTrailScreen();
  }

  function updateStaticText() {
    // Screen 1: Welcome
    if (dom.welcomeTitle) dom.welcomeTitle.textContent = getGeneralString('welcomeTitle', 'EcoExplorers!');
    if (dom.welcomeSub) dom.welcomeSub.textContent = getGeneralString('welcomeSub', 'Explore Amazing Wildlife!');
    if (dom.startBtnLabel) dom.startBtnLabel.textContent = getGeneralString('startBtn', 'Start Adventure 🚀');

    // Screen 2: Pick Country
    if (dom.pickCountryHeading) dom.pickCountryHeading.textContent = getGeneralString('pickCountryHeading', 'Pick Your Country');

    // Screen 3: Trail
    if (dom.trailHeading) dom.trailHeading.textContent = getGeneralString('trailHeading', 'Wildlife Trail');

    // Bottom Navigation Labels
    if (dom.bottomNavHomeLabel) dom.bottomNavHomeLabel.textContent = getGeneralString('bottomNavHome', 'Home');
    if (dom.bottomNavTrailLabel) dom.bottomNavTrailLabel.textContent = getGeneralString('bottomNavTrail', 'Trail');
    if (dom.bottomNavQuizLabel) dom.bottomNavQuizLabel.textContent = getGeneralString('bottomNavQuiz', 'Quiz');
    if (dom.bottomNavBadgesLabel) dom.bottomNavBadgesLabel.textContent = getGeneralString('bottomNavBadges', 'My Badges');

    // Sheet button labels
    if (dom.btnSheetContinue) dom.btnSheetContinue.textContent = getGeneralString('continueTrailBtn', 'Keep Exploring 🌟');
    if (dom.sheetStampPill) dom.sheetStampPill.textContent = getGeneralString('stampCollected', '⭐ Star Stamp Collected!');
  }

  // --------------------------------------------------------
  // 9. SCREEN 2: RENDER THREE GIANT COUNTRY CARDS
  // --------------------------------------------------------
  function renderCountryCards() {
    const data = getAppData();
    if (!dom.countryCardsContainer || !data || !data.countries) return;

    dom.countryCardsContainer.innerHTML = '';
    const lk = getLang();

    data.countries.forEach(country => {
      const cardBtn = document.createElement('button');
      cardBtn.type = 'button';
      cardBtn.className = 'country-big-card';
      cardBtn.style.setProperty('--card-theme', country.color || '#0284c7');
      cardBtn.setAttribute('data-country', country.id);
      cardBtn.setAttribute('aria-label', `Choose ${getCountryName(country)} (${country.classCode})`);

      const photoSrc = country.heroAnimalImage || (country.organisms && country.organisms[0] && country.organisms[0].image) || '';
      const heroName = (country.organisms && country.organisms[0]) ? getOrganismName(country.organisms[0]) : '';
      const classLabel = state.lang === 'id' ? `Kelas ${country.classCode}` : `Class ${country.classCode}`;

      cardBtn.innerHTML = `
        <div class="card-photo-wrapper">
          <img src="${photoSrc}" alt="${getCountryName(country)}" width="400" height="260" loading="eager" class="card-bg-photo">
          <div class="card-gradient-overlay"></div>
        </div>
        <div class="card-content">
          <div class="card-badge">
            <span class="card-flag">${country.flagEmoji || '🌍'}</span>
            <span class="card-class">${classLabel}</span>
          </div>
          <h2 class="card-country-name">${getCountryName(country)}</h2>
          <p class="card-creature-highlight">🐾 ${heroName}</p>
        </div>
        <div class="card-arrow-circle" aria-hidden="true">➜</div>
      `;

      cardBtn.addEventListener('click', () => {
        selectCountry(country.id);
      });

      dom.countryCardsContainer.appendChild(cardBtn);
    });
  }

  // --------------------------------------------------------
  // 10. SCREEN 3: RENDER THE TRAIL & STAR INDICATORS
  // --------------------------------------------------------
  function renderTrailScreen() {
    const country = getCurrentCountry();
    if (!country) return;

    // Update Header Pill
    if (dom.trailFlag) dom.trailFlag.textContent = country.flagEmoji || '🌍';
    if (dom.trailCountryName) dom.trailCountryName.textContent = getCountryName(country);

    // Count collected stars for this country
    const organisms = country.organisms || [];
    let collectedCount = 0;

    organisms.forEach(org => {
      if (state.visited[org.id]) {
        collectedCount++;
      }
    });

    // Render Star Slots
    if (dom.trailStarsRow) {
      dom.trailStarsRow.innerHTML = '';
      for (let i = 0; i < 6; i++) {
        const starSpan = document.createElement('span');
        starSpan.className = 'trail-star-slot' + (i < collectedCount ? ' filled' : '');
        starSpan.textContent = '★';
        starSpan.setAttribute('aria-hidden', 'true');
        dom.trailStarsRow.appendChild(starSpan);
      }
    }

    // Update Star Label
    if (dom.trailProgressLabel) {
      const template = getGeneralString('starsCollected', '{count} of 6 Stars');
      dom.trailProgressLabel.textContent = template.replace('{count}', collectedCount);
    }

    // Render 6 Trail Bubbles (Winding layout)
    if (dom.trailBubblesGrid) {
      dom.trailBubblesGrid.innerHTML = '';

      // Positions along the S-curve: Left, Right, Center-Left, Right, Left, Center
      const positionClasses = ['pos-left', 'pos-right', 'pos-left', 'pos-right', 'pos-left', 'pos-center'];

      organisms.forEach((organism, index) => {
        const row = document.createElement('div');
        row.className = `trail-bubble-row ${positionClasses[index % positionClasses.length]}`;

        const isVisited = !!state.visited[organism.id];
        const orgName = getOrganismName(organism);
        const shortName = orgName.split(' ')[0] || orgName;

        const bubbleBtn = document.createElement('button');
        bubbleBtn.type = 'button';
        bubbleBtn.className = 'trail-bubble' + (isVisited ? ' visited' : '');
        bubbleBtn.setAttribute('data-org-id', organism.id);
        bubbleBtn.setAttribute('aria-label', `${orgName}. ${isVisited ? 'Star collected' : 'Tap to meet'}`);

        bubbleBtn.innerHTML = `
          <div class="bubble-photo-ring">
            <img src="${organism.image}" alt="${orgName}" width="80" height="80" loading="lazy" class="bubble-photo">
            <span class="bubble-stamp" aria-hidden="true">⭐</span>
          </div>
          <span class="bubble-label">${shortName}</span>
        `;

        bubbleBtn.addEventListener('click', () => {
          openCreatureSheet(organism);
        });

        row.appendChild(bubbleBtn);
        dom.trailBubblesGrid.appendChild(row);
      });
    }
  }

  // --------------------------------------------------------
  // 11. CREATURE PREVIEW SHEET (On Bubble Tap)
  // --------------------------------------------------------
  let currentSheetOrganism = null;

  function openCreatureSheet(organism) {
    currentSheetOrganism = organism;
    const lk = getLang();

    // Mark as visited and save
    const isFirstTime = !state.visited[organism.id];
    state.visited[organism.id] = true;
    saveStateKey(STORAGE_KEYS.VISITED, state.visited);

    // Play star chime
    playStarChime();

    // Re-render trail star count and bubble stamp
    renderTrailScreen();

    // Populate sheet contents
    const orgName = getOrganismName(organism);
    const orgData = organism[lk] || organism.en;

    if (dom.sheetCreatureImg) {
      dom.sheetCreatureImg.src = organism.image;
      dom.sheetCreatureImg.alt = orgName;
    }
    if (dom.sheetCreatureName) {
      dom.sheetCreatureName.textContent = orgName;
    }
    if (dom.sheetTypePill) {
      dom.sheetTypePill.textContent = (organism.type === 'plant') ?
        (state.lang === 'id' ? '🌿 Tumbuhan' : '🌿 Plant') :
        (state.lang === 'id' ? '🐾 Hewan' : '🐾 Animal');
    }

    // Quick Read sentence
    let sentence = '';
    if (orgData.quickRead && Array.isArray(orgData.quickRead) && orgData.quickRead.length > 0) {
      sentence = orgData.quickRead[0];
    } else if (orgData.habitat) {
      sentence = orgData.habitat;
    }
    if (dom.sheetQuickRead) {
      dom.sheetQuickRead.textContent = sentence;
    }

    // Open sheet
    if (dom.creatureSheet) {
      dom.creatureSheet.classList.add('open');
      dom.creatureSheet.setAttribute('aria-hidden', 'false');
    }

    // Auto-narrate creature name and short sentence for young learners
    speakText(`${orgName}. ${sentence}`);
  }

  function closeCreatureSheet() {
    stopSpeech();
    playTapBoop();
    if (dom.creatureSheet) {
      dom.creatureSheet.classList.remove('open');
      dom.creatureSheet.setAttribute('aria-hidden', 'true');
    }
  }

  // --------------------------------------------------------
  // 12. TEASER SHEET (Quiz / Badges)
  // --------------------------------------------------------
  function openTeaserSheet(type) {
    playTapBoop();
    if (type === 'quiz') {
      if (dom.teaserIcon) dom.teaserIcon.textContent = '⭐';
      if (dom.teaserTitle) dom.teaserTitle.textContent = getGeneralString('comingSoonTitle', 'Almost There!');
      if (dom.teaserDesc) dom.teaserDesc.textContent = getGeneralString('comingSoonQuizDesc', 'Explore all 6 creatures on the trail first! The quiz opens on your next mission.');
    } else {
      if (dom.teaserIcon) dom.teaserIcon.textContent = '🛡️';
      if (dom.teaserTitle) dom.teaserTitle.textContent = getGeneralString('comingSoonTitle', 'Almost There!');
      if (dom.teaserDesc) dom.teaserDesc.textContent = getGeneralString('comingSoonBadgeDesc', 'Collect all 6 stars on the trail to earn your Guardian Badge!');
    }

    if (dom.teaserSheet) {
      dom.teaserSheet.classList.add('open');
      dom.teaserSheet.setAttribute('aria-hidden', 'false');
    }
  }

  function closeTeaserSheet() {
    playTapBoop();
    if (dom.teaserSheet) {
      dom.teaserSheet.classList.remove('open');
      dom.teaserSheet.setAttribute('aria-hidden', 'true');
    }
  }

  // --------------------------------------------------------
  // 13. AUDIO NARRATION TRIGGERS
  // --------------------------------------------------------
  function attachAudioButtons() {
    // Screen 1: Welcome speech
    if (dom.btnWelcomeAudio) {
      dom.btnWelcomeAudio.addEventListener('click', () => {
        const text = getGeneralString('welcomeSpeech', 'Welcome to EcoExplorers! Tap the big green button to start your adventure!');
        speakText(text);
      });
    }

    // Screen 2: Pick Country speech
    if (dom.btnPickCountryAudio) {
      dom.btnPickCountryAudio.addEventListener('click', () => {
        const text = getGeneralString('pickCountrySpeech', 'Pick your country! Tap Haiti, Suriname, or Bolivia to explore.');
        speakText(text);
      });
    }

    // Screen 3: Trail speech
    if (dom.btnTrailAudio) {
      dom.btnTrailAudio.addEventListener('click', () => {
        const country = getCurrentCountry();
        const countryName = getCountryName(country);
        const text = getGeneralString('trailSpeech', `Follow the trail in ${countryName}! Tap any creature bubble to meet them and collect a gold star.`);
        speakText(text);
      });
    }

    // Creature Preview Sheet speech
    if (dom.btnSheetAudio) {
      dom.btnSheetAudio.addEventListener('click', () => {
        if (!currentSheetOrganism) return;
        const lk = getLang();
        const orgName = getOrganismName(currentSheetOrganism);
        const orgData = currentSheetOrganism[lk] || currentSheetOrganism.en;
        let sentence = '';
        if (orgData.quickRead && Array.isArray(orgData.quickRead) && orgData.quickRead.length > 0) {
          sentence = orgData.quickRead[0];
        } else if (orgData.habitat) {
          sentence = orgData.habitat;
        }
        speakText(`${orgName}. ${sentence}`);
      });
    }
  }

  // --------------------------------------------------------
  // 14. EVENT LISTENERS
  // --------------------------------------------------------
  function attachEventListeners() {
    // Language Segmented Toggles
    const langButtons = document.querySelectorAll('.lang-segment');
    langButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetLang = e.currentTarget.getAttribute('data-lang');
        if (targetLang && targetLang !== state.lang) {
          setLanguage(targetLang);
        }
      });
    });

    // Screen 1: Start Adventure -> Screen 2: Pick Country
    if (dom.btnStartAdventure) {
      dom.btnStartAdventure.addEventListener('click', () => {
        playTapBoop();
        goToScreen('pickCountry');
      });
    }

    // Screen 2: Back to Welcome
    if (dom.btnBackToWelcome) {
      dom.btnBackToWelcome.addEventListener('click', () => {
        playTapBoop();
        goToScreen('welcome');
      });
    }

    // Screen 3: Country Pill -> Screen 2: Pick Country
    if (dom.btnTrailCountryPill) {
      dom.btnTrailCountryPill.addEventListener('click', () => {
        playTapBoop();
        goToScreen('pickCountry');
      });
    }

    // Bottom Navigation Items
    if (dom.navItemHome) {
      dom.navItemHome.addEventListener('click', () => {
        playTapBoop();
        if (state.currentScreen === 'trail') {
          goToScreen('welcome');
        } else if (state.currentScreen === 'pickCountry') {
          goToScreen('welcome');
        } else {
          goToScreen('welcome');
        }
      });
    }

    if (dom.navItemTrail) {
      dom.navItemTrail.addEventListener('click', () => {
        playTapBoop();
        goToScreen('trail');
      });
    }

    if (dom.navItemQuiz) {
      dom.navItemQuiz.addEventListener('click', () => {
        openTeaserSheet('quiz');
      });
    }

    if (dom.navItemBadges) {
      dom.navItemBadges.addEventListener('click', () => {
        openTeaserSheet('badges');
      });
    }

    // Creature Preview Sheet Close & Continue
    if (dom.btnSheetClose) dom.btnSheetClose.addEventListener('click', closeCreatureSheet);
    if (dom.btnSheetContinue) dom.btnSheetContinue.addEventListener('click', closeCreatureSheet);
    if (dom.creatureSheet) {
      dom.creatureSheet.addEventListener('click', (e) => {
        if (e.target === dom.creatureSheet) closeCreatureSheet();
      });
    }

    // Teaser Sheet Close & Action
    if (dom.btnTeaserClose) dom.btnTeaserClose.addEventListener('click', closeTeaserSheet);
    if (dom.btnTeaserAction) dom.btnTeaserAction.addEventListener('click', closeTeaserSheet);
    if (dom.teaserSheet) {
      dom.teaserSheet.addEventListener('click', (e) => {
        if (e.target === dom.teaserSheet) closeTeaserSheet();
      });
    }

    // ESC key closes modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCreatureSheet();
        closeTeaserSheet();
      }
    });
  }

  // --------------------------------------------------------
  // 15. INITIALIZATION
  // --------------------------------------------------------
  function init() {
    loadPersistedState();
    cacheDom();
    applyCountryTheme(state.country);
    updateStaticText();
    renderCountryCards();
    renderTrailScreen();
    attachAudioButtons();
    attachEventListeners();

    // Set initial segmented language button states
    const buttons = document.querySelectorAll('.lang-segment');
    buttons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === state.lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Start on Screen 1: Welcome
    goToScreen('welcome');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
