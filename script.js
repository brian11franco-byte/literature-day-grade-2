// ==========================================================
// ECOEXPLORERS: MOBILE-FIRST STORYBOOK SCRIPT (SCREENS 1-7)
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
    VISITED: 'ecoexplorers_visited',
    STUDENT_NAME: 'ecoexplorers_student_name',
    QUIZ_SCORE: 'ecoexplorers_quiz_score'
  };

  const state = {
    lang: 'en',
    country: 'haiti',
    currentScreen: 'welcome',
    visited: {},
    currentCreature: null,
    currentTile: 'lives', // 'lives' | 'special' | 'threats'
    detailsExpanded: false,
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    quizRetried: false,
    studentName: ''
  };

  function loadPersistedState() {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEYS.LANG);
      if (savedLang === 'en' || savedLang === 'id') state.lang = savedLang;

      const savedCountry = localStorage.getItem(STORAGE_KEYS.COUNTRY);
      if (savedCountry === 'haiti' || savedCountry === 'suriname' || savedCountry === 'bolivia') {
        state.country = savedCountry;
      }

      const savedVisited = localStorage.getItem(STORAGE_KEYS.VISITED);
      if (savedVisited) state.visited = JSON.parse(savedVisited);

      const savedName = localStorage.getItem(STORAGE_KEYS.STUDENT_NAME);
      if (savedName) state.studentName = savedName;
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
  // 2. WEB AUDIO SYNTHESIZER
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

  function playStarChime() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

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
    } catch (e) {}
  }

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
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {}
  }

  function playQuizCheer() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.2, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.3);
      });
    } catch (e) {}
  }

  // --------------------------------------------------------
  // 3. SPEECH SYNTHESIS
  // --------------------------------------------------------
  function speakText(text) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      if (!text || !text.trim()) return;

      const utterance = new SpeechSynthesisUtterance(text.trim());
      utterance.lang = state.lang === 'id' ? 'id-ID' : 'en-US';
      utterance.rate = 0.85;
      utterance.pitch = 1.05;

      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const langPrefix = state.lang === 'id' ? 'id' : 'en';
        const matchingVoice = voices.find(v => v.lang.toLowerCase().startsWith(langPrefix));
        if (matchingVoice) utterance.voice = matchingVoice;
      }
      window.speechSynthesis.speak(utterance);
    } catch (e) {}
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
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
      screenCreature: document.getElementById('screenCreature'),
      screenQuiz: document.getElementById('screenQuiz'),
      screenBadge: document.getElementById('screenBadge'),
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
      trailEndCard: document.getElementById('trailEndCard'),
      trailEndText: document.getElementById('trailEndText'),
      btnTrailActionQuiz: document.getElementById('btnTrailActionQuiz'),
      // Creature Screen
      btnCreatureBack: document.getElementById('btnCreatureBack'),
      creatureHeaderTitle: document.getElementById('creatureHeaderTitle'),
      creatureScrollBody: document.getElementById('creatureScrollBody'),
      creaturePhotoHero: document.querySelector('.creature-photo-hero'),
      creatureHeroImg: document.getElementById('creatureHeroImg'),
      creatureStampOverlay: document.getElementById('creatureStampOverlay'),
      btnViewFullPhoto: document.getElementById('btnViewFullPhoto'),
      labelViewFullPhoto: document.getElementById('labelViewFullPhoto'),
      creatureBigName: document.getElementById('creatureBigName'),
      creatureTypeChip: document.getElementById('creatureTypeChip'),
      btnCreatureMainAudio: document.getElementById('btnCreatureMainAudio'),
      tileLives: document.getElementById('tileLives'),
      tileLivesLabel: document.getElementById('tileLivesLabel'),
      tileSpecial: document.getElementById('tileSpecial'),
      tileSpecialLabel: document.getElementById('tileSpecialLabel'),
      tileThreats: document.getElementById('tileThreats'),
      tileThreatsLabel: document.getElementById('tileThreatsLabel'),
      activeTileCard: document.getElementById('activeTileCard'),
      tileBadgeIcon: document.getElementById('tileBadgeIcon'),
      tileContentText: document.getElementById('tileContentText'),
      btnTileSpeak: document.getElementById('btnTileSpeak'),
      btnToggleDetails: document.getElementById('btnToggleDetails'),
      labelTellMeMore: document.getElementById('labelTellMeMore'),
      detailsDrawer: document.getElementById('detailsDrawer'),
      titleHowSurvives: document.getElementById('titleHowSurvives'),
      textHowSurvives: document.getElementById('textHowSurvives'),
      titleHumanThreats: document.getElementById('titleHumanThreats'),
      textHumanThreats: document.getElementById('textHumanThreats'),
      titleFullStory: document.getElementById('titleFullStory'),
      textFullStory: document.getElementById('textFullStory'),
      vocabChipsList: document.getElementById('vocabChipsList'),
      creatureStampPill: document.getElementById('creatureStampPill'),
      btnCreatureContinue: document.getElementById('btnCreatureContinue'),
      // Quiz Screen
      btnQuizBack: document.getElementById('btnQuizBack'),
      quizHeaderTitle: document.getElementById('quizHeaderTitle'),
      btnQuizAudio: document.getElementById('btnQuizAudio'),
      quizActiveView: document.getElementById('quizActiveView'),
      quizCompletedView: document.getElementById('quizCompletedView'),
      quizProgressText: document.getElementById('quizProgressText'),
      quizStarsEarned: document.getElementById('quizStarsEarned'),
      quizQuestionText: document.getElementById('quizQuestionText'),
      quizOptionsContainer: document.getElementById('quizOptionsContainer'),
      quizFeedbackBox: document.getElementById('quizFeedbackBox'),
      quizFeedbackMessage: document.getElementById('quizFeedbackMessage'),
      btnQuizNext: document.getElementById('btnQuizNext'),
      quizCompleteTitle: document.getElementById('quizCompleteTitle'),
      quizCompleteMsg: document.getElementById('quizCompleteMsg'),
      quizFinalScorePill: document.getElementById('quizFinalScorePill'),
      btnClaimBadge: document.getElementById('btnClaimBadge'),
      btnQuizRestart: document.getElementById('btnQuizRestart'),
      // Badge Screen & Certificate
      btnBadgeBack: document.getElementById('btnBadgeBack'),
      badgeHeaderTitle: document.getElementById('badgeHeaderTitle'),
      labelStudentName: document.getElementById('labelStudentName'),
      badgeStudentName: document.getElementById('badgeStudentName'),
      officialCertificateContainer: document.getElementById('officialCertificateContainer'),
      certMainTitle: document.getElementById('certMainTitle'),
      certAwardType: document.getElementById('certAwardType'),
      certPresentedTo: document.getElementById('certPresentedTo'),
      certStudentNameDisplay: document.getElementById('certStudentNameDisplay'),
      certAchievementStatement: document.getElementById('certAchievementStatement'),
      certCountryPill: document.getElementById('certCountryPill'),
      certStarsPill: document.getElementById('certStarsPill'),
      certDateValue: document.getElementById('certDateValue'),
      certDateLabel: document.getElementById('certDateLabel'),
      certSignatureLabel: document.getElementById('certSignatureLabel'),
      btnPrintBadge: document.getElementById('btnPrintBadge'),
      btnBadgeBackToTrail: document.getElementById('btnBadgeBackToTrail'),
      // Photo Lightbox
      photoLightboxModal: document.getElementById('photoLightboxModal'),
      btnCloseLightbox: document.getElementById('btnCloseLightbox'),
      lightboxFullImg: document.getElementById('lightboxFullImg'),
      lightboxCaption: document.getElementById('lightboxCaption'),
      // Bottom Bar
      bottomNav: document.getElementById('storyBottomNav'),
      navItemHome: document.getElementById('navItemHome'),
      navItemTrail: document.getElementById('navItemTrail'),
      navItemQuiz: document.getElementById('navItemQuiz'),
      navItemBadges: document.getElementById('navItemBadges'),
      bottomNavHomeLabel: document.getElementById('bottomNavHomeLabel'),
      bottomNavTrailLabel: document.getElementById('bottomNavTrailLabel'),
      bottomNavQuizLabel: document.getElementById('bottomNavQuizLabel'),
      bottomNavBadgesLabel: document.getElementById('bottomNavBadgesLabel')
    };
  }

  // --------------------------------------------------------
  // 6. SCREEN NAVIGATION
  // --------------------------------------------------------
  function goToScreen(screenName) {
    stopSpeech();
    state.currentScreen = screenName;

    const screens = [
      { id: 'welcome', el: dom.screenWelcome },
      { id: 'pickCountry', el: dom.screenPickCountry },
      { id: 'trail', el: dom.screenTrail },
      { id: 'creature', el: dom.screenCreature },
      { id: 'quiz', el: dom.screenQuiz },
      { id: 'badge', el: dom.screenBadge }
    ];

    screens.forEach(s => {
      if (s.el) {
        if (s.id === screenName) s.el.classList.add('active');
        else s.el.classList.remove('active');
      }
    });

    // Bottom nav active state
    if (dom.navItemHome) dom.navItemHome.classList.remove('active');
    if (dom.navItemTrail) dom.navItemTrail.classList.remove('active');
    if (dom.navItemQuiz) dom.navItemQuiz.classList.remove('active');
    if (dom.navItemBadges) dom.navItemBadges.classList.remove('active');

    if (screenName === 'welcome' || screenName === 'pickCountry') {
      if (dom.navItemHome) dom.navItemHome.classList.add('active');
    } else if (screenName === 'trail' || screenName === 'creature') {
      if (dom.navItemTrail) dom.navItemTrail.classList.add('active');
    } else if (screenName === 'quiz') {
      if (dom.navItemQuiz) dom.navItemQuiz.classList.add('active');
    } else if (screenName === 'badge') {
      if (dom.navItemBadges) dom.navItemBadges.classList.add('active');
    }

    if (screenName === 'quiz') initQuiz();
    if (screenName === 'badge') updateBadgeScreen();

    // Announce to screen reader
    if (dom.announcer) {
      let announcement = screenName;
      if (screenName === 'welcome') announcement = getGeneralString('welcomeTitle', 'Welcome');
      else if (screenName === 'pickCountry') announcement = getGeneralString('pickCountryHeading', 'Pick Your Country');
      else if (screenName === 'trail') announcement = getGeneralString('trailHeading', 'Wildlife Trail');
      else if (screenName === 'quiz') announcement = getGeneralString('quizTitle', 'Junior Explorer Quiz');
      else if (screenName === 'badge') announcement = getGeneralString('guardianBadgeTitle', 'Guardian Badge');
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

    document.querySelectorAll('.lang-segment').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
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

    if (state.currentScreen === 'creature' && state.currentCreature) {
      renderCreatureScreen(state.currentCreature);
    } else if (state.currentScreen === 'quiz') {
      renderCurrentQuizQuestion();
    } else if (state.currentScreen === 'badge') {
      updateBadgeScreen();
    }
  }

  function updateStaticText() {
    if (dom.welcomeTitle) dom.welcomeTitle.textContent = getGeneralString('welcomeTitle', 'EcoExplorers!');
    if (dom.welcomeSub) dom.welcomeSub.textContent = getGeneralString('welcomeSub', 'Explore Amazing Wildlife!');
    if (dom.startBtnLabel) dom.startBtnLabel.textContent = getGeneralString('startBtn', 'Start Adventure 🚀');
    if (dom.pickCountryHeading) dom.pickCountryHeading.textContent = getGeneralString('pickCountryHeading', 'Pick Your Country');
    if (dom.trailHeading) dom.trailHeading.textContent = getGeneralString('trailHeading', 'Wildlife Trail');

    // Bottom Navigation Labels
    if (dom.bottomNavHomeLabel) dom.bottomNavHomeLabel.textContent = getGeneralString('bottomNavHome', 'Home');
    if (dom.bottomNavTrailLabel) dom.bottomNavTrailLabel.textContent = getGeneralString('bottomNavTrail', 'Trail');
    if (dom.bottomNavQuizLabel) dom.bottomNavQuizLabel.textContent = getGeneralString('bottomNavQuiz', 'Quiz');
    if (dom.bottomNavBadgesLabel) dom.bottomNavBadgesLabel.textContent = getGeneralString('bottomNavBadges', 'My Badges');

    // Creature screen labels
    if (dom.tileLivesLabel) dom.tileLivesLabel.textContent = getGeneralString('tileLives', 'Where It Lives');
    if (dom.tileSpecialLabel) dom.tileSpecialLabel.textContent = getGeneralString('tileSpecial', 'What is Special');
    if (dom.tileThreatsLabel) dom.tileThreatsLabel.textContent = getGeneralString('tileThreats', 'Mining Threats');
    if (dom.labelViewFullPhoto) dom.labelViewFullPhoto.textContent = getGeneralString('viewFullPhoto', 'Full Photo');
    if (dom.titleHowSurvives) dom.titleHowSurvives.textContent = getGeneralString('howSurvivesTitle', 'How it Survives & Eats:');
    if (dom.titleHumanThreats) dom.titleHumanThreats.textContent = getGeneralString('humanThreatsTitle', 'How Mining & Humans Threaten It:');
    if (dom.creatureStampPill) dom.creatureStampPill.textContent = getGeneralString('stampCollected', '⭐ Star Stamp Collected!');

    // Quiz labels
    if (dom.quizHeaderTitle) dom.quizHeaderTitle.textContent = getGeneralString('quizTitle', 'Junior Explorer Quiz');
    if (dom.quizCompleteTitle) dom.quizCompleteTitle.textContent = getGeneralString('quizFinishTitle', '🌟 Explorer Superstar!');
    if (dom.quizCompleteMsg) dom.quizCompleteMsg.textContent = getGeneralString('quizFinishMsg', 'Great job protecting Life on Land!');
    if (dom.btnClaimBadge) dom.btnClaimBadge.textContent = getGeneralString('claimBadgeBtn', 'Claim Guardian Badge 🛡️');
    if (dom.btnQuizRestart) dom.btnQuizRestart.textContent = getGeneralString('restartQuiz', 'Play Again 🔄');

    // Badge & Certificate labels
    if (dom.badgeHeaderTitle) dom.badgeHeaderTitle.textContent = getGeneralString('guardianBadgeTitle', 'Guardian Badge');
    if (dom.labelStudentName) dom.labelStudentName.textContent = state.lang === 'id' ? 'Ketik nama untuk sertifikatmu:' : 'Type your name for your certificate:';
    if (dom.badgeStudentName) dom.badgeStudentName.placeholder = getGeneralString('namePlaceholder', 'Type your name here...');
    if (dom.btnPrintBadge) dom.btnPrintBadge.textContent = state.lang === 'id' ? '🖨️ Cetak Sertifikat (Simpan PDF)' : '🖨️ Print Certificate (Save as PDF)';
    if (dom.btnBadgeBackToTrail) dom.btnBadgeBackToTrail.textContent = state.lang === 'id' ? 'Kembali ke Jejak 🗺️' : 'Back to Trail 🗺️';
  }

  // --------------------------------------------------------
  // 9. SCREEN 2: RENDER THREE GIANT COUNTRY CARDS
  // --------------------------------------------------------
  function renderCountryCards() {
    const data = getAppData();
    if (!dom.countryCardsContainer || !data || !data.countries) return;

    dom.countryCardsContainer.innerHTML = '';

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
  // 10. SCREEN 3: RENDER THE TRAIL (All 6 connected)
  // --------------------------------------------------------
  function renderTrailScreen() {
    const country = getCurrentCountry();
    if (!country) return;

    // Header Pill
    if (dom.trailFlag) dom.trailFlag.textContent = country.flagEmoji || '🌍';
    if (dom.trailCountryName) dom.trailCountryName.textContent = getCountryName(country);

    const organisms = country.organisms || [];
    let collectedCount = 0;
    organisms.forEach(org => {
      if (state.visited[org.id]) collectedCount++;
    });

    // Star slots
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

    // Star Progress text
    if (dom.trailProgressLabel) {
      const template = getGeneralString('starsCollected', '{count} of 6 Stars');
      dom.trailProgressLabel.textContent = template.replace('{count}', collectedCount);
    }

    // Render 6 Trail Bubbles along S-Curve (Issue 5: All 6 displayed & connected)
    if (dom.trailBubblesGrid) {
      dom.trailBubblesGrid.innerHTML = '';
      const positionClasses = ['pos-left', 'pos-right', 'pos-left', 'pos-right', 'pos-left', 'pos-right'];

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
            <img src="${organism.image}" alt="${orgName}" width="82" height="82" loading="lazy" class="bubble-photo">
            <span class="bubble-stamp" aria-hidden="true">⭐</span>
          </div>
          <span class="bubble-label">${shortName}</span>
        `;

        bubbleBtn.addEventListener('click', () => {
          openCreatureScreen(organism);
        });

        row.appendChild(bubbleBtn);
        dom.trailBubblesGrid.appendChild(row);
      });
    }

    // End-of-Trail Mission Card (Issue 4 & 5)
    if (dom.trailEndCard) {
      if (collectedCount >= 6) {
        dom.trailEndText.textContent = getGeneralString('trailCompleteNotice', "🎉 All 6 Stars Collected! Take the Quiz to earn your Guardian Badge!");
        dom.btnTrailActionQuiz.textContent = getGeneralString('takeQuizBtn', "Take the Quiz 🚀");
        dom.btnTrailActionQuiz.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      } else {
        dom.trailEndText.textContent = getGeneralString('trailIncompleteNotice', "⭐ Meet all 6 friends on the trail to unlock your Quiz!");
        dom.btnTrailActionQuiz.textContent = getGeneralString('takeQuizBtn', "Take the Quiz 🚀");
        dom.btnTrailActionQuiz.style.background = 'linear-gradient(135deg, #3b82f6, #1d4ed8)';
      }
    }
  }

  // --------------------------------------------------------
  // 11. SCREEN 4: MEET THE CREATURE (Full Details & 3 Picture Tiles)
  // --------------------------------------------------------
  function openCreatureScreen(organism) {
    playTapBoop();
    state.currentCreature = organism;
    state.currentTile = 'lives';
    state.detailsExpanded = false;

    // Award star stamp
    state.visited[organism.id] = true;
    saveStateKey(STORAGE_KEYS.VISITED, state.visited);
    playStarChime();

    renderCreatureScreen(organism);
    goToScreen('creature');
    if (dom.creatureScrollBody) {
      dom.creatureScrollBody.scrollTop = 0;
    }
  }

  function renderCreatureScreen(organism) {
    if (!organism) return;
    const lk = getLang();
    const orgName = getOrganismName(organism);
    const orgData = organism[lk] || organism.en;

    // Header & Photo
    if (dom.creatureHeaderTitle) dom.creatureHeaderTitle.textContent = orgName;
    if (dom.creatureBigName) dom.creatureBigName.textContent = orgName;
    if (dom.creatureHeroImg) {
      dom.creatureHeroImg.src = organism.image;
      dom.creatureHeroImg.alt = orgName;
    }

    // Type Badge
    if (dom.creatureTypeChip) {
      dom.creatureTypeChip.textContent = (organism.type === 'plant') ?
        (state.lang === 'id' ? '🌿 Tumbuhan' : '🌿 Plant') :
        (state.lang === 'id' ? '🐾 Hewan' : '🐾 Animal');
    }

    // Tell Me More deep details
    if (dom.textHowSurvives) dom.textHowSurvives.textContent = orgData.howItSurvives || orgData.quickRead?.[1] || '';
    if (dom.textHumanThreats) dom.textHumanThreats.textContent = orgData.whyThreatened || orgData.quickRead?.[2] || '';
    if (dom.textFullStory) dom.textFullStory.textContent = orgData.fullStory || '';

    // Vocab Chips
    if (dom.vocabChipsList) {
      dom.vocabChipsList.innerHTML = '';
      const vocabs = orgData.vocab || [];
      vocabs.forEach(item => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'vocab-chip';
        chip.innerHTML = `<span>🔊</span> <strong>${item.word}</strong>`;
        chip.title = item.meaning;
        chip.addEventListener('click', () => {
          speakText(`${item.word}. ${item.meaning}`);
        });
        dom.vocabChipsList.appendChild(chip);
      });
    }

    // Reset details drawer
    if (dom.detailsDrawer) dom.detailsDrawer.style.display = state.detailsExpanded ? 'flex' : 'none';
    if (dom.labelTellMeMore) {
      dom.labelTellMeMore.textContent = state.detailsExpanded ?
        getGeneralString('hideDetailsBtn', '🔼 Hide Details') :
        getGeneralString('tellMeMoreBtn', '📖 Tell Me More');
    }

    // Render active tile
    renderCreatureTile(state.currentTile);
  }

  function renderCreatureTile(tileName) {
    state.currentTile = tileName;
    const organism = state.currentCreature;
    if (!organism) return;
    const lk = getLang();
    const orgData = organism[lk] || organism.en;

    // Toggle active classes on tile tabs
    [
      { id: 'lives', btn: dom.tileLives },
      { id: 'special', btn: dom.tileSpecial },
      { id: 'threats', btn: dom.tileThreats }
    ].forEach(t => {
      if (t.btn) {
        if (t.id === tileName) {
          t.btn.classList.add('active');
          t.btn.setAttribute('aria-selected', 'true');
        } else {
          t.btn.classList.remove('active');
          t.btn.setAttribute('aria-selected', 'false');
        }
      }
    });

    let icon = '🏠';
    let text = '';

    if (tileName === 'lives') {
      icon = '🏠';
      text = orgData.habitat || orgData.quickRead?.[0] || '';
      if (dom.activeTileCard) dom.activeTileCard.classList.remove('threat-mode');
    } else if (tileName === 'special') {
      icon = '⭐';
      text = orgData.uniqueFeature || orgData.quickRead?.[1] || '';
      if (dom.activeTileCard) dom.activeTileCard.classList.remove('threat-mode');
    } else if (tileName === 'threats') {
      icon = '⚠️';
      // Highlighting human mining activities & deforestation impact
      text = orgData.whyThreatened || orgData.quickRead?.[2] || '';
      if (dom.activeTileCard) dom.activeTileCard.classList.add('threat-mode');
    }

    if (dom.tileBadgeIcon) dom.tileBadgeIcon.textContent = icon;
    if (dom.tileContentText) dom.tileContentText.textContent = text;
  }

  // --------------------------------------------------------
  // 12. FULL PHOTO LIGHTBOX (Issue 1)
  // --------------------------------------------------------
  function openPhotoLightbox() {
    playTapBoop();
    const organism = state.currentCreature;
    if (!organism) return;
    const orgName = getOrganismName(organism);

    if (dom.lightboxFullImg) {
      dom.lightboxFullImg.src = organism.image;
      dom.lightboxFullImg.alt = orgName;
    }
    if (dom.lightboxCaption) {
      dom.lightboxCaption.textContent = orgName;
    }
    if (dom.photoLightboxModal) {
      dom.photoLightboxModal.classList.add('open');
      dom.photoLightboxModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closePhotoLightbox() {
    playTapBoop();
    if (dom.photoLightboxModal) {
      dom.photoLightboxModal.classList.remove('open');
      dom.photoLightboxModal.setAttribute('aria-hidden', 'true');
    }
  }

  // --------------------------------------------------------
  // 13. SCREEN 6: JUNIOR EXPLORER QUIZ (Issue 4)
  // --------------------------------------------------------
  function initQuiz() {
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;
    state.quizRetried = false;

    if (dom.quizActiveView) dom.quizActiveView.style.display = 'block';
    if (dom.quizCompletedView) dom.quizCompletedView.style.display = 'none';

    renderCurrentQuizQuestion();
  }

  function getCurrentQuizQuestions() {
    const data = getAppData();
    if (!data) return [];
    if (data.countryQuizzes && data.countryQuizzes[state.country]) {
      return data.countryQuizzes[state.country];
    }
    const country = getCurrentCountry();
    if (country && country.quiz) return country.quiz;
    return data.quiz || [];
  }

  function renderCurrentQuizQuestion() {
    const questions = getCurrentQuizQuestions();
    const total = questions.length;
    if (total === 0) return;

    if (state.quizIndex >= total) {
      showQuizCompletion(total);
      return;
    }

    const qItem = questions[state.quizIndex];
    const lk = getLang();
    const qData = qItem[lk] || qItem.en;

    state.quizAnswered = false;
    state.quizRetried = false;

    if (dom.quizProgressText) {
      const template = getGeneralString('quizProgress', 'Question {current} of {total}');
      dom.quizProgressText.textContent = template.replace('{current}', state.quizIndex + 1).replace('{total}', total);
    }

    if (dom.quizStarsEarned) {
      let stars = '';
      for (let i = 0; i < total; i++) {
        stars += (i < state.quizScore) ? '⭐' : '☆';
      }
      dom.quizStarsEarned.textContent = stars;
    }

    if (dom.quizQuestionText) {
      dom.quizQuestionText.textContent = qData.question;
    }

    if (dom.quizFeedbackBox) {
      dom.quizFeedbackBox.style.display = 'none';
    }

    // Render big options
    if (dom.quizOptionsContainer) {
      dom.quizOptionsContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      qData.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-opt-btn';
        btn.innerHTML = `<span style="font-weight:900; color:var(--country-theme);">${letters[idx]}.</span> <span>${optText}</span>`;

        btn.addEventListener('click', () => {
          handleQuizAnswer(idx, qData, btn);
        });

        dom.quizOptionsContainer.appendChild(btn);
      });
    }

    // Do NOT auto-speak question - students read by themselves. Speaker button is available on demand.
  }

  function handleQuizAnswer(selectedIndex, qData, clickedBtn) {
    if (state.quizAnswered) return;

    const isCorrect = selectedIndex === qData.answer;

    if (isCorrect) {
      state.quizAnswered = true;
      if (!state.quizRetried) state.quizScore++;
      clickedBtn.classList.add('correct');
      playQuizCheer();

      if (dom.quizFeedbackBox) {
        dom.quizFeedbackBox.style.display = 'flex';
        dom.quizFeedbackMessage.textContent = qData.explanation;
      }
    } else {
      clickedBtn.classList.add('wrong');
      playTapBoop();

      if (!state.quizRetried) {
        state.quizRetried = true;
        const tryAgainMsg = getGeneralString('quizTryAgain', 'Almost! Try one more time! 💪');
        if (dom.quizFeedbackBox) {
          dom.quizFeedbackBox.style.display = 'flex';
          dom.quizFeedbackMessage.textContent = tryAgainMsg;
        }
      } else {
        // Show correct answer after retry
        state.quizAnswered = true;
        if (dom.quizFeedbackBox) {
          dom.quizFeedbackBox.style.display = 'flex';
          dom.quizFeedbackMessage.textContent = qData.explanation;
        }
      }
    }
  }

  function showQuizCompletion(total) {
    playStarChime();
    if (dom.quizActiveView) dom.quizActiveView.style.display = 'none';
    if (dom.quizCompletedView) dom.quizCompletedView.style.display = 'flex';

    if (dom.quizFinalScorePill) {
      const scoreLabel = getGeneralString('quizScore', 'Score:');
      dom.quizFinalScorePill.textContent = `${scoreLabel} ${state.quizScore} of ${total} Stars ⭐`;
    }

    saveStateKey(STORAGE_KEYS.QUIZ_SCORE, state.quizScore);
  }

  // --------------------------------------------------------
  // 14. SCREEN 7: GUARDIAN BADGE & CERTIFICATE (Issue 3)
  // --------------------------------------------------------
  function updateBadgeScreen() {
    const country = getCurrentCountry();
    if (!country) return;

    const data = getAppData();
    const isId = state.lang === 'id';

    // Student Name
    const nameVal = state.studentName ? state.studentName.trim() : '';
    if (dom.badgeStudentName) dom.badgeStudentName.value = nameVal;
    if (dom.certStudentNameDisplay) {
      dom.certStudentNameDisplay.textContent = nameVal || (isId ? 'PENJELAJAH CILIK' : 'SUPER EXPLORER');
    }

    // Country Pill
    if (dom.certCountryPill) {
      dom.certCountryPill.textContent = `${country.flagEmoji || '🌍'} ${getCountryName(country)} • Class ${country.classCode}`;
    }

    // Stars count
    let collectedCount = 0;
    (country.organisms || []).forEach(org => {
      if (state.visited[org.id]) collectedCount++;
    });
    if (dom.certStarsPill) {
      dom.certStarsPill.textContent = isId ?
        `⭐ ${collectedCount} dari 6 Bintang Terkumpul` :
        `⭐ ${collectedCount} of 6 Stars Earned`;
    }

    // Certificate Titles & Subtitles
    if (dom.certMainTitle) {
      dom.certMainTitle.textContent = isId ? 'SERTIFIKAT PENGHARGAAN' : 'CERTIFICATE OF ACHIEVEMENT';
    }
    if (dom.certAwardType) {
      dom.certAwardType.textContent = isId ?
        'Penghargaan Penjaga Bumi Resmi • Bulan Bahasa & Literature Day' :
        'Official Earth Guardian Award • Grade 2 Literature Day 2026';
    }
    if (dom.certPresentedTo) {
      dom.certPresentedTo.textContent = isId ? 'Diberikan dengan bangga kepada:' : 'This is proudly presented to:';
    }

    // Country-specific Achievement Statement
    if (dom.certAchievementStatement) {
      let statement = '';
      if (data && data.certificateStatements && data.certificateStatements[state.country]) {
        const cStmt = data.certificateStatements[state.country];
        statement = (isId && cStmt.id) ? cStmt.id : cStmt.en;
      }
      if (!statement) {
        if (state.country === 'haiti') {
          statement = isId ?
            'Atas dedikasi luar biasa dalam menjelajahi hutan pegunungan Haiti, melindungi Burung Trogon dan Solenodon dari kerusakan tambang, serta menjaga kehidupan satwa di darat untuk SDG 15.' :
            'For outstanding dedication in exploring the cloud forests of Haiti, defending the Hispaniolan Trogon and Solenodon against mining destruction, and protecting wildlife for SDG 15: Life on Land.';
        } else if (state.country === 'suriname') {
          statement = isId ?
            'Atas dedikasi luar biasa dalam menjelajahi hutan hujan Suriname, melindungi Berang-berang Raksasa dan Burung Cadas dari pencemaran tambang emas sungai, serta menjaga kehidupan satwa di darat untuk SDG 15.' :
            'For outstanding dedication in exploring the lush rainforests of Suriname, defending the Giant Otter and Cock-of-the-rock from river gold mining pollution, and protecting wildlife for SDG 15: Life on Land.';
        } else {
          statement = isId ?
            'Atas dedikasi luar biasa dalam menjelajahi pegunungan Andes Bolivia, melindungi Elang Kondor Andes dan Pohon Queñua dari pembukaan jalan tambang, serta menjaga kehidupan satwa di darat untuk SDG 15.' :
            'For outstanding dedication in exploring the high Andes of Bolivia, defending the Andean Condor and Queñua trees against open-pit mining roads, and protecting wildlife for SDG 15: Life on Land.';
        }
      }
      dom.certAchievementStatement.textContent = statement;
    }

    // Date & Signature Labels
    if (dom.certDateValue) {
      dom.certDateValue.textContent = isId ? 'Oktober 2026' : 'October 2026';
    }
    if (dom.certDateLabel) {
      dom.certDateLabel.textContent = isId ? 'Tanggal Terbit' : 'Date Issued';
    }
    if (dom.certSignatureLabel) {
      dom.certSignatureLabel.textContent = isId ? 'Pelindung Satwa Liar' : 'Wildlife Conservation Lead';
    }
  }

  // --------------------------------------------------------
  // 15. AUDIO ATTACHMENTS
  // --------------------------------------------------------
  function attachAudioButtons() {
    if (dom.btnWelcomeAudio) {
      dom.btnWelcomeAudio.addEventListener('click', () => {
        speakText(getGeneralString('welcomeSpeech', 'Welcome to EcoExplorers! Tap the big green button to start!'));
      });
    }

    if (dom.btnPickCountryAudio) {
      dom.btnPickCountryAudio.addEventListener('click', () => {
        speakText(getGeneralString('pickCountrySpeech', 'Pick your country! Tap Haiti, Suriname, or Bolivia to explore.'));
      });
    }

    if (dom.btnTrailAudio) {
      dom.btnTrailAudio.addEventListener('click', () => {
        const country = getCurrentCountry();
        speakText(getGeneralString('trailSpeech', `Follow the trail! Tap any creature bubble to meet them and collect a gold star.`));
      });
    }

    if (dom.btnCreatureMainAudio) {
      dom.btnCreatureMainAudio.addEventListener('click', () => {
        if (!state.currentCreature) return;
        const lk = getLang();
        const orgName = getOrganismName(state.currentCreature);
        const orgData = state.currentCreature[lk] || state.currentCreature.en;
        speakText(`${orgName}. ${orgData.quickRead?.[0] || orgData.habitat || ''}`);
      });
    }

    if (dom.btnTileSpeak) {
      dom.btnTileSpeak.addEventListener('click', () => {
        if (!state.currentCreature) return;
        const text = dom.tileContentText ? dom.tileContentText.textContent : '';
        speakText(text);
      });
    }

    if (dom.btnQuizAudio) {
      dom.btnQuizAudio.addEventListener('click', () => {
        const qText = dom.quizQuestionText ? dom.quizQuestionText.textContent : '';
        speakText(qText);
      });
    }
  }

  // --------------------------------------------------------
  // 16. EVENT LISTENERS
  // --------------------------------------------------------
  function attachEventListeners() {
    // Segmented Language Toggles
    document.querySelectorAll('.lang-segment').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetLang = e.currentTarget.getAttribute('data-lang');
        if (targetLang && targetLang !== state.lang) setLanguage(targetLang);
      });
    });

    // Screen 1: Start Adventure -> Screen 2
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

    // Screen 3: Country Pill -> Screen 2
    if (dom.btnTrailCountryPill) {
      dom.btnTrailCountryPill.addEventListener('click', () => {
        playTapBoop();
        goToScreen('pickCountry');
      });
    }

    // Trail Action: Go to Quiz
    if (dom.btnTrailActionQuiz) {
      dom.btnTrailActionQuiz.addEventListener('click', () => {
        playTapBoop();
        goToScreen('quiz');
      });
    }

    // Screen 4: Meet Creature Navigation & Tile Tabs
    if (dom.btnCreatureBack) {
      dom.btnCreatureBack.addEventListener('click', () => {
        playTapBoop();
        renderTrailScreen();
        goToScreen('trail');
      });
    }

    if (dom.btnCreatureContinue) {
      dom.btnCreatureContinue.addEventListener('click', () => {
        playTapBoop();
        renderTrailScreen();
        goToScreen('trail');
      });
    }

    // 3 Picture Tiles Tabs (No auto-speech, promote independent reading)
    if (dom.tileLives) {
      dom.tileLives.addEventListener('click', () => {
        playTapBoop();
        renderCreatureTile('lives');
      });
    }

    if (dom.tileSpecial) {
      dom.tileSpecial.addEventListener('click', () => {
        playTapBoop();
        renderCreatureTile('special');
      });
    }

    if (dom.tileThreats) {
      dom.tileThreats.addEventListener('click', () => {
        playTapBoop();
        renderCreatureTile('threats');
      });
    }

    // "Tell Me More" Expander
    if (dom.btnToggleDetails) {
      dom.btnToggleDetails.addEventListener('click', () => {
        playTapBoop();
        state.detailsExpanded = !state.detailsExpanded;
        if (dom.detailsDrawer) dom.detailsDrawer.style.display = state.detailsExpanded ? 'flex' : 'none';
        if (dom.labelTellMeMore) {
          dom.labelTellMeMore.textContent = state.detailsExpanded ?
            getGeneralString('hideDetailsBtn', '🔼 Hide Details') :
            getGeneralString('tellMeMoreBtn', '📖 Tell Me More');
        }
      });
    }

    // Photo Lightbox (Issue 1: Full Photo View)
    if (dom.btnViewFullPhoto) {
      dom.btnViewFullPhoto.addEventListener('click', (e) => {
        e.stopPropagation();
        openPhotoLightbox();
      });
    }
    if (dom.creaturePhotoHero) {
      dom.creaturePhotoHero.addEventListener('click', () => {
        openPhotoLightbox();
      });
    }
    if (dom.btnCloseLightbox) {
      dom.btnCloseLightbox.addEventListener('click', (e) => {
        e.stopPropagation();
        closePhotoLightbox();
      });
    }
    if (dom.photoLightboxModal) {
      dom.photoLightboxModal.addEventListener('click', (e) => {
        if (e.target === dom.photoLightboxModal) closePhotoLightbox();
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dom.photoLightboxModal && dom.photoLightboxModal.classList.contains('open')) {
        closePhotoLightbox();
      }
    });

    // Quiz Navigation & Actions
    if (dom.btnQuizBack) {
      dom.btnQuizBack.addEventListener('click', () => {
        playTapBoop();
        goToScreen('trail');
      });
    }

    if (dom.btnQuizNext) {
      dom.btnQuizNext.addEventListener('click', () => {
        playTapBoop();
        state.quizIndex++;
        renderCurrentQuizQuestion();
      });
    }

    if (dom.btnClaimBadge) {
      dom.btnClaimBadge.addEventListener('click', () => {
        playTapBoop();
        goToScreen('badge');
      });
    }

    if (dom.btnQuizRestart) {
      dom.btnQuizRestart.addEventListener('click', () => {
        playTapBoop();
        initQuiz();
      });
    }

    // Badge Actions
    if (dom.btnBadgeBack) {
      dom.btnBadgeBack.addEventListener('click', () => {
        playTapBoop();
        goToScreen('trail');
      });
    }

    if (dom.btnBadgeBackToTrail) {
      dom.btnBadgeBackToTrail.addEventListener('click', () => {
        playTapBoop();
        goToScreen('trail');
      });
    }

    if (dom.badgeStudentName) {
      dom.badgeStudentName.addEventListener('input', (e) => {
        state.studentName = e.target.value;
        saveStateKey(STORAGE_KEYS.STUDENT_NAME, state.studentName);
        if (dom.certStudentNameDisplay) {
          const isId = state.lang === 'id';
          dom.certStudentNameDisplay.textContent = state.studentName.trim() || (isId ? 'PENJELAJAH CILIK' : 'SUPER EXPLORER');
        }
      });
    }

    if (dom.btnPrintBadge) {
      dom.btnPrintBadge.addEventListener('click', () => {
        playTapBoop();
        window.print();
      });
    }

    // Bottom Navigation Bar
    if (dom.navItemHome) {
      dom.navItemHome.addEventListener('click', () => {
        playTapBoop();
        goToScreen('welcome');
      });
    }

    if (dom.navItemTrail) {
      dom.navItemTrail.addEventListener('click', () => {
        playTapBoop();
        renderTrailScreen();
        goToScreen('trail');
      });
    }

    if (dom.navItemQuiz) {
      dom.navItemQuiz.addEventListener('click', () => {
        playTapBoop();
        goToScreen('quiz');
      });
    }

    if (dom.navItemBadges) {
      dom.navItemBadges.addEventListener('click', () => {
        playTapBoop();
        goToScreen('badge');
      });
    }

    // Keyboard ESC closes lightbox
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closePhotoLightbox();
    });
  }

  // --------------------------------------------------------
  // 17. INITIALIZATION
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

    document.querySelectorAll('.lang-segment').forEach(btn => {
      if (btn.getAttribute('data-lang') === state.lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    goToScreen('welcome');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
