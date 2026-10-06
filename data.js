// ==========================================
// ECO-EXPLORERS: GRADE 2 LITERATURE DAY 2026
// Complete Bilingual Data (English & Bahasa Indonesia)
// Normalized language keys: "en" and "id" across all sections
// ==========================================

const APP_DATA = {
  general: {
    en: {
      siteTitle: "EcoExplorers: Life on Land",
      siteSubtitle: "Grade 2 Literature Day • Bulan Bahasa 2026",
      sdgBadge: "SDG 15: Life on Land",
      classesBadge: "Classes 2A • 2B • 2C",
      switchLang: "Bahasa Indonesia",
      heroHeadline: "Protecting Our Animals & Plants From Mining and Deforestation",
      heroSubhead: "Welcome, Grade 2 Explorers! Discover amazing wildlife in Haiti, Suriname, and Bolivia, learn how human activities affect their homes, and find answers for your Buku Halus notebook!",
      audioIntro: "Welcome to EcoExplorers! Click any sound button to listen to stories in English or Indonesian.",
      navCountries: "Countries",
      navAnimals: "Animals & Plants",
      navThreats: "Threats & Mining",
      navNotebook: "Buku Halus Helper",
      navQuiz: "Fun Quiz",
      navSolutions: "How to Help",
      navBadges: "Explorer Badges",
      bottomNavExplore: "Explore",
      bottomNavNotebook: "Notebook",
      bottomNavQuiz: "Quiz",
      bottomNavBadges: "Badges",
      countryCardsHeading: "Choose Your Mission",
      countryCardsSubhead: "Tap a country to start exploring its wildlife!",
      switchCountryChip: "Change Country",
      filterAll: "🌟 All (6)",
      filterAnimals: "🐾 Animals (3)",
      filterPlants: "🌿 Plants (3)",
      readAloud: "Listen",
      stopAudio: "Stop",
      speechSpeedSlow: "🐢 Slow",
      speechSpeedNormal: "🐰 Normal",
      quickReadTitle: "Quick Read",
      fullStoryBtn: "📖 Full Story",
      hideStoryBtn: "🔼 Short Story",
      vocabTitle: "Vocabulary Words (Tap to hear):",
      zoomPhoto: "View Photo",
      closeModal: "Close",
      threatsTitle: "What is Threatening Nature Here?",
      countryProfileTitle: "Country Classroom Dossier",
      watchVideoBtn: "Watch Class Video",
      videoPlayBadge: "Play Video",
      notebookHelperTitle: "Buku Halus Writing Helper",
      notebookHelperDesc: "Practice answering your teacher's questions and combine them into complete paragraphs for your fine writing book!",
      selectCountryLabel: "1. Select Your Class & Country:",
      selectOrganismLabel: "2. Select an Animal or Plant to Describe:",
      tabCountryQuestions: "Country Questions (01 - 05)",
      tabOrganismQuestions: "Animal / Plant Questions (01 - 05)",
      tryFirstTab: "✍️ Try First (Sentence Builder)",
      modelAnswerTab: "📖 Show Model Answers",
      wordBankTitle: "Word Bank (Tap words to build your answer):",
      yourSentenceLabel: "Your Built Sentence:",
      checkAnswerBtn: "Check with Model Answer",
      modelAnswerLabel: "Teacher's Model Answer:",
      clearSentenceBtn: "Reset Sentence",
      copyParagraphBtn: "📋 Copy Paragraph",
      copiedAlert: "Copied to clipboard! Now write it nicely in your Buku Halus!",
      listenNotebookBtn: "🔊 Listen to Paragraph",
      printWorksheetBtn: "🖨️ Print Worksheet",
      quizTitle: "Junior Explorer Quiz",
      quizSubhead: "Test what you learned about animals, plants, and mining!",
      quizProgress: "Question {current} of {total}",
      quizScore: "Score:",
      quizTryAgain: "Almost! Try one more time! 💪",
      quizRetryBtn: "Try Again 🔄",
      quizNextBtn: "Next Question ➡️",
      quizFinishTitle: "🌟 Explorer Superstar!",
      quizFinishMsg: "You completed the Junior Explorer Quiz! Fantastic job helping protect Life on Land!",
      restartQuiz: "Play Again 🔄",
      solutionsTitle: "4 Ways We Can Protect Animals & Plants",
      solutionsSubhead: "Action steps from our Science & English lessons to support SDG 15 (Life on Land)",
      passportTitle: "Explorer Passport",
      passportSubhead: "Collect stamps for every creature you meet, story you hear, and quiz you pass!",
      passportProgress: "Passport Progress",
      creaturesMet: "Creatures Met",
      storiesHeard: "Stories Heard",
      quizDone: "Quiz Passed",
      stampUnlocked: "Stamp Unlocked!",
      guardianBadgeTitle: "🛡️ Guardian of Nature Award",
      guardianBadgeCongrats: "Congratulations, Super Explorer! You discovered every creature and completed all missions for SDG 15!",
      namePrompt: "Explorer Name:",
      namePlaceholder: "Type your name here...",
      printBadgeBtn: "🖨️ Print Certificate",
      audioUnsupported: "Speech audio is not available on this device.",
      footerCredit: "Prepared for Grade 2 Literature Day • Bulan Bahasa 2026 • SDG 15: Life on Land",
      welcomeTitle: "EcoExplorers!",
      welcomeSub: "Explore Amazing Wildlife!",
      welcomeSpeech: "Welcome to EcoExplorers! Tap the big green button to start your wildlife adventure!",
      startBtn: "Start Adventure 🚀",
      pickCountryHeading: "Pick Your Country",
      pickCountrySub: "Tap a country to start!",
      pickCountrySpeech: "Pick your country! Tap Haiti, Suriname, or Bolivia to explore.",
      trailHeading: "Wildlife Trail",
      trailSub: "Meet all 6 animals and plants!",
      trailSpeech: "Follow the trail! Tap any creature bubble to meet them and collect a gold star!",
      starsCollected: "{count} of 6 Stars",
      meetCreature: "Meet {name}!",
      backToCountries: "Countries",
      backToTrail: "Trail",
      bottomNavHome: "Home",
      bottomNavTrail: "Trail",
      bottomNavQuiz: "Quiz",
      bottomNavBadges: "My Badges",
      comingSoonTitle: "Almost There!",
      comingSoonQuizDesc: "Explore the trail first! The quiz opens on your next mission.",
      comingSoonBadgeDesc: "Collect all 6 stars on the trail to earn your Guardian Badge!",
      stampCollected: "⭐ Star Collected!",
      continueTrailBtn: "Keep Exploring 🌟",
      tileLives: "Where It Lives",
      tileSpecial: "What Is Special",
      tileThreats: "Human Mining Threats",
      tellMeMoreBtn: "📖 Tell Me More",
      hideDetailsBtn: "🔼 Hide Details",
      howSurvivesTitle: "How it Survives & Eats:",
      humanThreatsTitle: "How Mining & Humans Threaten It:",
      viewFullPhoto: "🔍 View Full Photo",
      takeQuizBtn: "Take the Quiz 🚀",
      claimBadgeBtn: "Claim Guardian Badge 🛡️",
      trailCompleteNotice: "🎉 All 6 Stars Collected! Take the Quiz to earn your Guardian Badge!",
      trailIncompleteNotice: "⭐ Meet all 6 friends on the trail to unlock your Quiz!",
      closePhoto: "Close Photo ✕"
    },
    id_lang: {
      siteTitle: "Petualang Bumi: Kehidupan di Darat",
      siteSubtitle: "Bulan Bahasa Oktober 2026 • Literature Day Kelas 2",
      sdgBadge: "SDG 15: Ekosistem Darat",
      classesBadge: "Kelas 2A • 2B • 2C",
      switchLang: "English",
      heroHeadline: "Melindungi Hewan & Tumbuhan dari Penambangan dan Deforestasi",
      heroSubhead: "Selamat datang, Penjelajah Cilik Kelas 2! Ayo kenali hewan dan tumbuhan langka di Haiti, Suriname, dan Bolivia, pelajari dampak kegiatan manusia, serta temukan jawaban untuk Buku Halusmu!",
      audioIntro: "Selamat datang di Petualang Bumi! Klik tombol suara di setiap kartu untuk mendengarkan bacaan.",
      navCountries: "Negara",
      navAnimals: "Hewan & Tumbuhan",
      navThreats: "Deforestasi & Tambang",
      navNotebook: "Bantuan Buku Halus",
      navQuiz: "Kuis Seru",
      navSolutions: "Solusi Kami",
      navBadges: "Lencana Petualang",
      bottomNavExplore: "Jelajah",
      bottomNavNotebook: "Buku Halus",
      bottomNavQuiz: "Kuis",
      bottomNavBadges: "Lencana",
      countryCardsHeading: "Pilih Misimu",
      countryCardsSubhead: "Ketuk negara untuk mulai menjelajahi satwa dan tumbuhannya!",
      switchCountryChip: "Ganti Negara",
      filterAll: "🌟 Semua (6)",
      filterAnimals: "🐾 Hewan (3)",
      filterPlants: "🌿 Tumbuhan (3)",
      readAloud: "Dengarkan",
      stopAudio: "Berhenti",
      speechSpeedSlow: "🐢 Pelan",
      speechSpeedNormal: "🐰 Normal",
      quickReadTitle: "Baca Cepat",
      fullStoryBtn: "📖 Cerita Lengkap",
      hideStoryBtn: "🔼 Cerita Singkat",
      vocabTitle: "Kata Kosakata (Ketuk untuk mendengar):",
      zoomPhoto: "Lihat Foto",
      closeModal: "Tutup",
      threatsTitle: "Apa Ancaman Alam di Negara Ini?",
      countryProfileTitle: "Profil Negara untuk Kelas",
      watchVideoBtn: "Tonton Video Kelas",
      videoPlayBadge: "Putar Video",
      notebookHelperTitle: "Panduan Menulis Buku Halus",
      notebookHelperDesc: "Latihan menjawab pertanyaan guru dan gabungkan menjadi satu paragraf rapi untuk ditulis di buku halusmu!",
      selectCountryLabel: "1. Pilih Kelas & Negaramu:",
      selectOrganismLabel: "2. Pilih Hewan atau Tumbuhan yang Ingin Diceritakan:",
      tabCountryQuestions: "Pertanyaan Negara (01 - 05)",
      tabOrganismQuestions: "Pertanyaan Hewan & Tumbuhan (01 - 05)",
      tryFirstTab: "✍️ Coba Sendiri (Susun Kalimat)",
      modelAnswerTab: "📖 Lihat Contoh Jawaban",
      wordBankTitle: "Pilihan Kata (Ketuk kata untuk menyusun jawaban):",
      yourSentenceLabel: "Kalimat yang Kamu Susun:",
      checkAnswerBtn: "Bandingkan dengan Kunci Jawaban",
      modelAnswerLabel: "Kunci Jawaban Guru:",
      clearSentenceBtn: "Ulangi Kalimat",
      copyParagraphBtn: "📋 Salin Paragraf",
      copiedAlert: "Berhasil disalin! Sekarang tulis dengan tulisan tegak bersambung di Buku Halusmu ya!",
      listenNotebookBtn: "🔊 Dengarkan Paragraf",
      printWorksheetBtn: "🖨️ Cetak Lembar Latihan",
      quizTitle: "Kuis Petualang Cilik",
      quizSubhead: "Uji pengetahuanmu tentang hewan, tumbuhan, dan dampak penambangan!",
      quizProgress: "Pertanyaan {current} dari {total}",
      quizScore: "Nilai:",
      quizTryAgain: "Hampir tepat! Coba sekali lagi ya! 💪",
      quizRetryBtn: "Coba Lagi 🔄",
      quizNextBtn: "Pertanyaan Berikutnya ➡️",
      quizFinishTitle: "🌟 Penjelajah Hebat!",
      quizFinishMsg: "Kamu berhasil menyelesaikan Kuis Petualang Cilik! Kerja hebat menjaga kehidupan di darat!",
      restartQuiz: "Main Lagi 🔄",
      solutionsTitle: "4 Cara Kita Melindungi Hewan & Tumbuhan",
      solutionsSubhead: "Langkah nyata dari pelajaran Science & English untuk mendukung SDG 15 (Kehidupan di Darat)",
      passportTitle: "Paspor Petualang",
      passportSubhead: "Kumpulkan cap stempel untuk setiap satwa yang kamu temui, cerita yang didengar, dan kuis yang diselesaikan!",
      passportProgress: "Progres Paspor",
      creaturesMet: "Satwa Ditemui",
      storiesHeard: "Cerita Didengar",
      quizDone: "Kuis Selesai",
      stampUnlocked: "Cap Terbuka!",
      guardianBadgeTitle: "🛡️ Piagam Penjaga Alam Semesta",
      guardianBadgeCongrats: "Selamat, Penjelajah Super! Kamu telah menemukan semua satwa dan menuntaskan misi SDG 15!",
      namePrompt: "Nama Lengkapmu:",
      namePlaceholder: "Ketik namamu di sini...",
      printBadgeBtn: "🖨️ Cetak Piagam",
      audioUnsupported: "Fitur audio suara tidak tersedia di perangkat ini.",
      footerCredit: "Disiapkan khusus untuk Literature Day Kelas 2 • Bulan Bahasa 2026 • SDG 15: Ekosistem Darat",
      welcomeTitle: "EcoExplorers!",
      welcomeSub: "Jelajahi Satwa Liar!",
      welcomeSpeech: "Selamat datang di EcoExplorers! Sentuh tombol hijau besar untuk memulai petualangan satwa!",
      startBtn: "Mulai Petualangan 🚀",
      pickCountryHeading: "Pilih Negaramu",
      pickCountrySub: "Sentuh negara untuk mulai!",
      pickCountrySpeech: "Pilih negaramu! Sentuh Haiti, Suriname, atau Bolivia untuk menjelajah.",
      trailHeading: "Jalur Satwa Liar",
      trailSub: "Kenali 6 hewan dan tumbuhan!",
      trailSpeech: "Ikuti jalurnya! Sentuh lingkaran satwa untuk berkenalan dan mengumpulkan bintang emas!",
      starsCollected: "{count} dari 6 Bintang",
      meetCreature: "Kenalan dengan {name}!",
      backToCountries: "Negara",
      backToTrail: "Jalur",
      bottomNavHome: "Beranda",
      bottomNavTrail: "Jalur",
      bottomNavQuiz: "Kuis",
      bottomNavBadges: "Lencana",
      comingSoonTitle: "Hampir Siap!",
      comingSoonQuizDesc: "Jelajahi jalurnya dulu! Kuis terbuka di misi berikutnya.",
      comingSoonBadgeDesc: "Kumpulkan 6 bintang di jalur untuk mendapatkan Lencana Pelindung!",
      stampCollected: "⭐ Bintang Terkumpul!",
      continueTrailBtn: "Lanjut Jelajah 🌟",
      tileLives: "Tempat Tinggal",
      tileSpecial: "Keunikan Satwa",
      tileThreats: "Ancaman Tambang & Manusia",
      tellMeMoreBtn: "📖 Cerita Lengkap",
      hideDetailsBtn: "🔼 Tutup Rincian",
      howSurvivesTitle: "Cara Bertahan Hidup & Makan:",
      humanThreatsTitle: "Dampak Tambang & Kegiatan Manusia:",
      viewFullPhoto: "🔍 Lihat Foto Penuh",
      takeQuizBtn: "Mulai Kuis 🚀",
      claimBadgeBtn: "Ambil Lencana Pelindung 🛡️",
      trailCompleteNotice: "🎉 Semua 6 Bintang Terkumpul! Mulai kuis untuk meraih Lencana Pelindung!",
      trailIncompleteNotice: "⭐ Kenali 6 sahabat di jalur untuk membuka Kuis!",
      closePhoto: "Tutup Foto ✕"
    }
  },

  sdgConcepts: {
    en: {
      title: "What is Deforestation & Mining?",
      subtitle: "Important lessons from English, Science, and Bahasa Indonesia",
      whatIsDeforestation: {
        title: "What is Deforestation?",
        desc: "Deforestation is the loss or clearing of forest areas because the land is turned into non-forest areas, like cities, farms, roads, or big mining pits."
      },
      causes: {
        title: "Main Causes of Deforestation",
        items: [
          { icon: "🚜", title: "Land Clearing", text: "Removing forests to build houses, factories, or cattle ranches." },
          { icon: "🪓", title: "Illegal Logging", text: "Cutting down big trees without permission to sell timber." },
          { icon: "🔥", title: "Forest Fires", text: "Wildfires that burn down thousands of animal homes." },
          { icon: "⛏️", title: "Mining & Roads", text: "Digging giant pits for gold, bauxite, and stone, and carving dirt roads through forests." }
        ]
      },
      impacts: {
        title: "The 4 Major Impacts on Land",
        items: [
          { icon: "🌡️", title: "Climate Change", text: "Without trees to cool the Earth, our planet gets hotter and weather becomes extreme." },
          { icon: "🐾", title: "Extinction of Plants & Animals", text: "When forests are destroyed, wild animals lose their food and nesting places forever." },
          { icon: "🌊", title: "Natural Disasters", text: "Tree roots hold the soil. When trees are cut, heavy rain causes deadly landslides and floods." },
          { icon: "💧", title: "Water Crisis", text: "Rivers dry out or get poisoned by mining chemicals, leaving no clean drinking water." }
        ]
      }
    },
    id_lang: {
      title: "Apa itu Deforestasi & Penambangan?",
      subtitle: "Materi penting dari pelajaran Bahasa Indonesia, Science, dan English",
      whatIsDeforestation: {
        title: "Apa itu Deforestasi?",
        desc: "Deforestasi adalah hilangnya atau berkurangnya area hutan karena alih fungsi lahan menjadi non-hutan, seperti permukiman, perkebunan, atau pertambangan."
      },
      causes: {
        title: "Penyebab Utama Deforestasi",
        items: [
          { icon: "🚜", title: "Pembukaan Lahan", text: "Membersihkan hutan untuk mendirikan bangunan, pabrik, atau peternakan." },
          { icon: "🪓", title: "Penebangan Liar", text: "Menebang pohon-pohon besar tanpa izin resmi untuk dijual kayunya." },
          { icon: "🔥", title: "Kebakaran Hutan", text: "Kebakaran yang membakar habis ribuan sarang dan tempat tinggal satwa." },
          { icon: "⛏️", title: "Pertambangan & Jalan", text: "Menggali lubang raksasa untuk emas, bauksit, dan batu serta membuka jalan raya di tengah hutan." }
        ]
      },
      impacts: {
        title: "4 Dampak Utama bagi Kehidupan di Darat",
        items: [
          { icon: "🌡️", title: "Perubahan Iklim", text: "Bumi menjadi semakin panas karena tidak ada pohon yang menyerap panas dan menghasilkan oksigen." },
          { icon: "🐾", title: "Kepunahan Flora & Fauna", text: "Tumbuhan dan hewan kehilangan rumah serta sumber makanan hingga terancam punah." },
          { icon: "🌊", title: "Bencana Alam", text: "Akar pohon tidak lagi mengikat tanah, memicu tanah longsor dan banjir bandang saat hujan." },
          { icon: "💧", title: "Krisis Air Bersih", text: "Sungai mengering atau tercemar limbah kimia tambang, membuat air sulit diminum." }
        ]
      }
    }
  },

  countries: [
    // ----------------------------------------------------
    // 1. HAITI (Class 2A)
    // ----------------------------------------------------
    {
      id: "haiti",
      classCode: "2A",
      flagEmoji: "🇭🇹",
      color: "#0284c7",
      accentColor: "#0369a1",
      bgColor: "#f0f9ff",
      heroAnimalImage: "assets/images/haiti/hispaniolan_trogon.webp",
      heroAnimalFallback: "assets/images/haiti/hispaniolan_trogon.jpg",
      videoUrl: "https://www.youtube.com/watch?v=EGhtv4UnxkA",
      videoThumb: "assets/images/video_thumbnails/haiti_video.webp",
      videoThumbFallback: "assets/images/video_thumbnails/haiti_video.png",
      videoTitle: {
        en: "Class 2A Video: Unique & Fascinating Facts about Haiti",
        id: "Video Kelas 2A: Fakta Unik dan Menarik Haiti (Dunia Kita)"
      },
      en: {
        name: "Haiti",
        location: "Caribbean Sea, on the western third of the tropical island of Hispaniola (next to Dominican Republic).",
        capital: "Port-au-Prince",
        languages: "French and Haitian Creole (Kreyòl Ayisyen)",
        interestingFacts: [
          "Haiti was the world's very first independent Black-led republic, gaining independence in 1804!",
          "The island of Hispaniola is home to ancient animals like the solenodon that survived the dinosaur age!"
        ],
        uniqueness: "Haiti's original indigenous name 'Ayiti' means 'Land of High Mountains'. Its mountains once had lush cloud forests with birds found nowhere else on planet Earth.",
        miningThreatsSummary: "Limestone quarries dig stone for cement, and metal open-pit strip mines scrape off the soil. Heavy bulldozers crush underground animal tunnels, while loggers cut down old mountain trees, leaving birds with no place to raise chicks.",
        combinedParagraph: "Haiti is located on the island of Hispaniola in the Caribbean Sea, and its capital city is Port-au-Prince. The people of Haiti speak French and Haitian Creole. Two interesting facts about Haiti are that it was the first independent Black republic in 1804 and it has ancient creatures that lived with dinosaurs. What makes Haiti unique is its name 'Ayiti' meaning 'Land of High Mountains', where rare mountain trogons and ancient solenodons live."
      },
      id_lang: {
        name: "Haiti",
        location: "Laut Karibia, di bagian barat pulau tropis Hispaniola (berbatasan dengan Republik Dominika).",
        capital: "Port-au-Prince",
        languages: "Bahasa Prancis dan Kreol Haiti (Kreyòl Ayisyen)",
        interestingFacts: [
          "Haiti adalah republik merdeka pertama di dunia yang dipimpin oleh orang berkulit hitam sejak tahun 1804!",
          "Pulau Hispaniola memiliki mamalia purba (solenodon) yang nenek moyangnya sudah hidup sejak zaman dinosaurus!"
        ],
        uniqueness: "Nama asli Haiti adalah 'Ayiti' dari suku Taíno yang berarti 'Tanah Pegunungan Tinggi'. Pegunungannya menyimpan hutan awan dengan burung-burung indah yang tidak ada di belahan bumi lain.",
        miningThreatsSummary: "Tambang batu kapur mengeruk batu untuk semen, dan tambang terbuka mengupas lapisan tanah subur. Buldoser berat menghancurkan liang tanah tempat hewan tidur, dan pohon tua ditebang sehingga burung kehilangan sarangnya.",
        combinedParagraph: "Negara Haiti terletak di Pulau Hispaniola di kawasan Laut Karibia, dan ibukotanya adalah Port-au-Prince. Bahasa yang digunakan oleh masyarakatnya adalah Bahasa Prancis dan Kreol Haiti. Dua fakta menarik tentang Haiti adalah negara ini merupakan republik merdeka pertama yang dipimpin warga kulit hitam pada tahun 1804 dan memiliki hewan purba solenodon yang selamat dari era dinosaurus. Yang membuat Haiti unik adalah bentang alam pegunungannya yang megah dan satwa langka yang tidak ditemukan di tempat lain di dunia."
      },
      organisms: [
        {
          id: "hispaniolan_trogon",
          type: "animal",
          image: "assets/images/haiti/hispaniolan_trogon.webp",
          imageFallback: "assets/images/haiti/hispaniolan_trogon.jpg",
          scientificName: "Priotelus roseigaster",
          en: {
            name: "Hispaniolan Trogon",
            typeLabel: "🐾 Bird (Animal)",
            habitat: "Mountain pine forests and misty cloud forests in Haiti.",
            uniqueFeature: "It has a shimmering metallic green back and a bright crimson-red belly! It is the national bird of Haiti.",
            howItSurvives: "It eats wild fruits, berries, and large insects like cicadas. Because its beak is gentle, it cannot carve hard new wood — it must find soft, dead tree trunks ('snags') to build nest holes.",
            whyThreatened: "When mines and logging roads clear the mountain forest, dead trees are knocked down first. Trogons are also afraid to fly across big, wide, barren mining pits, so they get trapped and cannot find enough fruit for their babies.",
            fullStory: "The Hispaniolan Trogon is Haiti's shimmering national bird. It lives high up in foggy mountain pine forests. Its beak is gentle, so it must find soft, dead tree trunks to make safe hollow nests. When stone quarries and timber loggers bulldoze old trees, trogons lose their hollow nesting homes and cannot find enough berry food for their chicks.",
            quickRead: [
              "The Hispaniolan Trogon is a colorful national bird of Haiti.",
              "It needs soft dead trees to make safe nest holes.",
              "Mining and tree cutting destroy its quiet forest home today."
            ],
            vocab: [
              { word: "Trogon", meaning: "A colorful tropical forest bird that eats juicy fruits." },
              { word: "Snag", meaning: "A dead standing tree that provides nesting holes for birds." },
              { word: "Cloud Forest", meaning: "A misty, cool forest high up on tropical mountains." }
            ]
          },
          id_lang: {
            name: "Burung Trogon Hispaniola",
            typeLabel: "🐾 Burung (Hewan)",
            habitat: "Hutan pinus pegunungan dan hutan awan berkabut di Haiti.",
            uniqueFeature: "Punggungnya berwarna hijau berkilau seperti zamrud dan perutnya berwarna merah menyala! Burung ini adalah burung nasional negara Haiti.",
            howItSurvives: "Memakan buah-buahan hutan, buah beri, dan serangga. Burung ini tidak bisa melubangi kayu keras, jadi ia harus mencari batang pohon mati yang sudah lunak untuk membuat lubang sarang bertelur.",
            whyThreatened: "Saat tambang dan jalan membuka hutan, pohon-pohon mati ditebang dan dibuang. Burung trogon juga takut terbang melewati lubang tambang terbuka yang gundul dan lebar, sehingga tidak bisa mencari makan untuk anak-anaknya.",
            fullStory: "Burung Trogon Hispaniola adalah burung nasional Haiti berbulu hijau zamrud dan berparuh lembut. Mereka tinggal di hutan berkabut pegunungan tinggi. Karena paruhnya tidak bisa melubangi pohon keras, trogon mencari batang pohon tua lapuk untuk bertelur. Tambang terbuka dan penebangan liar merobohkan pohon lapuk sehingga anak-anak burung kehilangan tempat berteduh.",
            quickRead: [
              "Burung Trogon adalah burung nasional Haiti berbulu hijau zamrud indah.",
              "Burung ini membuat sarang di dalam batang pohon tua lunak.",
              "Penebangan pohon dan tambang merusak sarang burung trogon ini."
            ],
            vocab: [
              { word: "Trogon", meaning: "Burung hutan tropis berwarna indah pemakan buah." },
              { word: "Pohon Lapuk", meaning: "Batang pohon tua yang berlubang untuk sarang bertelur." },
              { word: "Hutan Awan", meaning: "Hutan sejuk berkabut di lereng gunung tinggi." }
            ]
          }
        },
        {
          id: "least_pauraque",
          type: "animal",
          image: "assets/images/haiti/least_pauraque.webp",
          imageFallback: "assets/images/haiti/least_pauraque.jpg",
          scientificName: "Siphonorhis brewsteri",
          en: {
            name: "Least Pauraque",
            typeLabel: "🐾 Bird (Animal)",
            habitat: "Dry scrublands and rocky limestone forests on the ground.",
            uniqueFeature: "Master of camouflage! Its brown mottled feathers look exactly like dry leaves and limestone rocks, making it nearly invisible when sleeping on the forest floor.",
            howItSurvives: "It rests quietly on the ground all day and flies out at dusk to catch flying beetles and moths with its wide mouth.",
            whyThreatened: "Limestone quarries dig up rocks and crush the ground to make cement. Big excavators scrape away all leaves and rocks down to flat stone, leaving this ground-nesting bird with zero hiding spots to protect its eggs.",
            fullStory: "The Least Pauraque is a tiny ground bird with brown speckled feathers that match dry limestone rocks perfectly. It sleeps hidden on the forest floor during hot sunny days. At night, it opens its wide mouth to catch flying night moths. Stone quarries scrape away the rocks and leaves, leaving this bird with nowhere to hide its delicate eggs.",
            quickRead: [
              "The Least Pauraque is a clever little night bird.",
              "Its brown mottled feathers hide it among dry leaves safely.",
              "Limestone quarries scrape away the forest floor and rocks."
            ],
            vocab: [
              { word: "Camouflage", meaning: "Special coloring that helps an animal blend into nature." },
              { word: "Scrubland", meaning: "Dry land with bushes and small thorny plants." },
              { word: "Quarry", meaning: "A deep open pit where builders dig out heavy rock." }
            ]
          },
          id_lang: {
            name: "Burung Pauraque Kerdil",
            typeLabel: "🐾 Burung (Hewan)",
            habitat: "Semak belukar kering dan lantai hutan berbatu kapur.",
            uniqueFeature: "Ahli menyamar (kamuflase)! Bulu cokelatnya bermotif persis daun kering dan bebatuan, sehingga musuh tidak bisa melihatnya saat ia tidur di atas tanah.",
            howItSurvives: "Beristirahat diam di permukaan tanah sepanjang siang, lalu terbang di malam hari untuk menangkap ngengat dan kumbang dengan paruhnya yang terbuka lebar.",
            whyThreatened: "Pekerja tambang batu kapur mengeruk batu untuk pabrik semen. Buldoser mengupas permukaan tanah hingga menjadi batu telanjang, sehingga burung ini tidak memiliki tempat lagi untuk menyembunyikan telur dan serangga makanannya lenyap.",
            fullStory: "Burung Pauraque Kerdil bersembunyi di tanah semak kering. Bulu cokelat belangnya menyamar persis seperti daun kering dan pecahan batu kapur sehingga tidak terlihat oleh musuh. Di malam hari, ia terbang menangkap kumbang. Pengerukan tambang kapur mengupas tanah dan merusak sarang telur burung ini di lantai hutan.",
            quickRead: [
              "Burung Pauraque adalah burung kecil yang aktif di malam hari.",
              "Bulu cokelatnya menyamar persis seperti daun kering di tanah.",
              "Pengerukan tambang batu kapur merusak sarangnya di atas tanah."
            ],
            vocab: [
              { word: "Kamuflase", meaning: "Warna tubuh yang menyamar persis seperti lingkungan sekitar." },
              { word: "Semak Belukar", meaning: "Lahan kering yang ditumbuhi tanaman perdu rendah." },
              { word: "Tambang Kapur", meaning: "Tempat menggali batu kapur untuk membuat semen." }
            ]
          }
        },
        {
          id: "hispaniolan_solenodon",
          type: "animal",
          image: "assets/images/haiti/hispaniolan_solenodon.webp",
          imageFallback: "assets/images/haiti/hispaniolan_solenodon.jpg",
          scientificName: "Solenodon paradoxus",
          en: {
            name: "Hispaniolan Solenodon",
            typeLabel: "🐾 Mammal (Animal)",
            habitat: "Dense forests with moist soil, deep caves, and rock piles.",
            uniqueFeature: "It looks like a giant shrew with a long, flexible, wiggly nose, and it is one of the only venomous mammals on Earth! Its teeth deliver venom to slow down insects.",
            howItSurvives: "It sleeps in long underground tunnels during the day. At night, it wiggles its flexible snout through moist dirt to sniff out crickets, grubs, and centipedes.",
            whyThreatened: "Heavy mining bulldozers roll over the ground and crush underground tunnel systems, trapping solenodons inside. Mining strips away moist leaf litter, while new mine roads bring stray dogs that hunt this slow-moving creature.",
            fullStory: "The Solenodon is an ancient creature that survived since the time of the dinosaurs. It has a wiggly snout and venomous bottom teeth to slow down tasty centipedes. It sleeps safely inside deep cool burrows under moist leaves. Big bulldozers crush its underground home, making it very rare today.",
            quickRead: [
              "The Hispaniolan Solenodon is an ancient shrew with venomous teeth.",
              "It digs underground burrows and sniffs for tiny insects.",
              "Heavy mining bulldozers crush its dark tunnels and moist soil."
            ],
            vocab: [
              { word: "Venomous", meaning: "Having a natural mild poison used to catch insects." },
              { word: "Burrow", meaning: "A cozy tunnel dug into the ground by small animals." },
              { word: "Ancient", meaning: "Extremely old, living since the era of dinosaurs." }
            ]
          },
          id_lang: {
            name: "Solenodon Hispaniola",
            typeLabel: "🐾 Mamalia (Hewan)",
            habitat: "Hutan lebat dengan tanah lembap, gua kapur, dan celah bebatuan.",
            uniqueFeature: "Mirip tikus raksasa bermoncong panjang lentur dan merupakan salah satu mamalia berbisa langka di dunia! Giginya menyalurkan bisa untuk melumpuhkan serangga.",
            howItSurvives: "Tidur di terowongan bawah tanah di siang hari. Pada malam hari, mengendus tanah lembap untuk mencari jangkrik, ulat, dan kelabang.",
            whyThreatened: "Buldoser tambang yang berat meratakan tanah dan menghancurkan terowongan bawah tanah, menjebak solenodon di dalamnya. Jalan tambang baru juga membawa hewan pemangsa yang mengancam hewan lambat ini.",
            fullStory: "Solenodon adalah hewan purba langka yang sudah hidup sejak zaman dinosaurus. Moncongnya yang panjang dapat bergoyang mengendus ulat di dalam tanah lembap. Gigi bawahnya memiliki bisa khusus untuk menangkap serangga. Buldoser tambang yang berat merusak liang tempat tidurnya di bawah tanah.",
            quickRead: [
              "Solenodon adalah mamalia purba dengan moncong panjang dan berbisa.",
              "Hewan ini tidur di dalam lubang tanah yang lembap.",
              "Buldoser tambang yang berat meratakan dan merusak liang sarangnya."
            ],
            vocab: [
              { word: "Berbisa", meaning: "Memiliki zat alami untuk melumpuhkan serangga mangsa." },
              { word: "Liang Tanah", meaning: "Terowongan tempat hewan tidur dan bersembunyi di tanah." },
              { word: "Purba", meaning: "Sangat tua, sudah ada sejak zaman dinosaurus." }
            ]
          }
        },
        {
          id: "cherry_palm",
          type: "plant",
          image: "assets/images/haiti/cherry_palm.webp",
          imageFallback: "assets/images/haiti/cherry_palm.jpg",
          scientificName: "Pseudophoenix ekmanii",
          en: {
            name: "Oviedo's Cherry Palm",
            typeLabel: "🌿 Palm Tree (Plant)",
            habitat: "Dry limestone terraces and rocky coastal hills of Hispaniola.",
            uniqueFeature: "A swollen trunk that looks like a pot-bellied bottle and clusters of bright red cherry-like fruits! It grows extremely slowly, sometimes taking 100 years to reach full height.",
            howItSurvives: "Its swollen trunk acts as an internal water jug, storing moisture through scorching dry seasons on dry rock.",
            whyThreatened: "Limestone quarries blast away the rocky cliffs where this palm roots itself. Because it grows at a snail's pace, when one tree is cut down or bulldozed, it cannot be replaced in a human lifetime.",
            fullStory: "Oviedo's Cherry Palm has a friendly pot-bellied trunk that stores sweet water during dry summers. It produces bright red berries that hungry birds feast on. Because it takes nearly one hundred years to grow tall, mining dynamite that crushes rocky hills destroys seedlings that cannot be replaced quickly.",
            quickRead: [
              "The Cherry Palm is a rare tree growing in Haiti.",
              "It produces tiny red fruits that wild animals love eating.",
              "Quarries dig out the limestone hills where it grows slowly."
            ],
            vocab: [
              { word: "Limestone", meaning: "A light rocky stone dug up to make construction cement." },
              { word: "Extinction", meaning: "When all living members of a plant disappear forever." },
              { word: "Seedling", meaning: "A very young plant that just sprouted from a seed." }
            ]
          },
          id_lang: {
            name: "Palem Ceri Oviedo",
            typeLabel: "🌿 Pohon Palem (Tumbuhan)",
            habitat: "Teras batuan kapur kering dan perbukitan karang di Hispaniola.",
            uniqueFeature: "Batangnya menggelembung seperti botol gemuk dan menghasilkan untaian buah ceri merah cerah! Tumbuhnya sangat lambat, butuh puluhan hingga seratus tahun untuk dewasa.",
            howItSurvives: "Batangnya yang gemuk berfungsi sebagai kendi penyimpan air alami selama musim kemarau terik di atas bebatuan tandus.",
            whyThreatened: "Penambang batu kapur meledakkan tebing karang tempat palem ini menancapkan akarnya. Karena pertumbuhannya sangat lambat, pohon yang ditebang atau digusur sulit digantikan dalam waktu singkat.",
            fullStory: "Palem Ceri Oviedo memiliki batang unik yang menggembung menyerupai botol kendi penyimpan air. Di pucuknya, tergantung untaian buah ceri merah santapan burung. Pertumbuhannya sangat lambat, memerlukan puluhan tahun. Ledakan tambang batu kapur menghancurkan bukit karang tempat tumbuhnya.",
            quickRead: [
              "Palem Ceri Oviedo adalah pohon palem langka di Haiti.",
              "Pohon ini menghasilkan buah ceri merah untuk makanan satwa.",
              "Pengerukan batu kapur merusak bukit tempat pohon ini bertumbuh."
            ],
            vocab: [
              { word: "Batu Kapur", meaning: "Batuan putih yang sering ditambang untuk bahan semen." },
              { word: "Kepunahan", meaning: "Keadaan saat tumbuhan habis dan tidak tersisa lagi." },
              { word: "Tunas", meaning: "Tumbuhan yang masih sangat muda dan baru tumbuh." }
            ]
          }
        },
        {
          id: "bayahibe_rose",
          type: "plant",
          image: "assets/images/haiti/bayahibe_rose.webp",
          imageFallback: "assets/images/haiti/bayahibe_rose.jpg",
          scientificName: "Leuenbergeria quisqueyana",
          en: {
            name: "Bayahibe Rose",
            typeLabel: "🌿 Flowering Cactus (Plant)",
            habitat: "Dry scrub forests and rocky coastal thickets.",
            uniqueFeature: "One of the only cacti in the entire world that has real green leaves! It blooms with delicate, bright pink flowers with yellow centers.",
            howItSurvives: "It has protective thorns along its bark to stop animals from eating its tender leaves, and it drops leaves in severe drought to keep its stems hydrated.",
            whyThreatened: "Critically Endangered! Fewer than a few hundred wild plants remain. Metal mining, road clearing, and urban spread have bulldozed almost all of its scrubland homes.",
            fullStory: "The Bayahibe Rose is a magical cactus with real green leaves and sweet pink blossoms. Sharp thorns guard its stem so desert goats do not chew it. Today it is one of the rarest plants on Earth because mining machinery bulldozed almost all of the coastal thickets where it lives.",
            quickRead: [
              "The Bayahibe Rose is a cactus with lovely pink flowers.",
              "Sharp thorns protect its thick green leaves from hungry animals.",
              "Clearing land for open-pit mining uproots these rare desert cacti."
            ],
            vocab: [
              { word: "Succulent", meaning: "A juicy plant that stores water inside its stems." },
              { word: "Cactus", meaning: "A prickly plant that thrives under bright warm sunshine." },
              { word: "Habitat", meaning: "The natural outdoor home where a plant or animal lives." }
            ]
          },
          id_lang: {
            name: "Mawar Bayahibe",
            typeLabel: "🌿 Kaktus Berbunga (Tumbuhan)",
            habitat: "Semak belukar kering dan hutan pantai berbatu.",
            uniqueFeature: "Salah satu jenis kaktus langka di dunia yang memiliki daun hijau sejati! Mahkota bunganya berwarna merah muda cerah dengan putik kuning.",
            howItSurvives: "Memiliki duri tajam di batangnya untuk mencegah hewan memakan daunnya yang segar, dan dapat merontokkan daun saat kemarau panjang agar tidak kekeringan.",
            whyThreatened: "Sangat Kritis Terancam Punah! Hanya tersisa sedikit di alam liar. Pembukaan tambang, pembuatan jalan, dan pembangunan kota telah menggusur habitat aslinya.",
            fullStory: "Mawar Bayahibe adalah kaktus unik yang memiliki daun hijau lebar serta bunga merah muda yang anggun. Duri tajam di sekeliling batangnya menjaga kaktus ini dari hewan pemakan daun. Jumlahnya kini sangat sedikit di dunia karena lahan semak aslinya diratakan oleh tambang dan pembangunan.",
            quickRead: [
              "Mawar Bayahibe adalah kaktus unik berbunga merah muda cerah.",
              "Duri tajamnya melindungi daun hijau dari hewan yang lapar.",
              "Pembukaan tambang terbuka mencabut kaktus langka ini dari akarnya."
            ],
            vocab: [
              { word: "Kaktus", meaning: "Tanaman berduri yang mampu menyimpan air di batangnya." },
              { word: "Duri", meaning: "Bagian tajam pada tanaman untuk melindungi diri dari hewan." },
              { word: "Habitat", meaning: "Tempat alami tempat tumbuhan dan hewan hidup tenteram." }
            ]
          }
        },
        {
          id: "hispaniolan_pine",
          type: "plant",
          image: "assets/images/haiti/hispaniolan_pine.webp",
          imageFallback: "assets/images/haiti/hispaniolan_pine.jpg",
          scientificName: "Pinus occidentalis",
          en: {
            name: "Hispaniolan Pine",
            typeLabel: "🌿 Mountain Pine Tree (Plant)",
            habitat: "High misty mountain ridges and steep slopes above 1,000 meters.",
            uniqueFeature: "The backbone of Haiti's mountain forests! It grows tall needle leaves that trap moisture from passing mountain clouds to make fresh rainwater for rivers.",
            howItSurvives: "Its tough, resinous pine wood resists cold mountain winds and its deep root web grips steep soil to prevent dangerous mudslides.",
            whyThreatened: "Mining companies cut down pine forests to build dirt access roads for heavy dump trucks. Without pine roots, mountain rain washes the topsoil away in dangerous mudslides.",
            fullStory: "The Hispaniolan Pine stands tall like a green mountain guardian. Its long needle leaves catch misty cloud drops that trickle down to fill mountain rivers. Deep pine roots lock wet dirt in place. When miners cut down these tall pines to build hauling roads, steep mudslides wash away fertile soil.",
            quickRead: [
              "The Hispaniolan Pine grows tall on high mountain peaks.",
              "Its strong roots hold steep soil so mudslides do not happen.",
              "Mining roads and illegal logging cut down these great guardian trees."
            ],
            vocab: [
              { word: "Canopy", meaning: "The high leafy roof formed by tall forest trees." },
              { word: "Landslide", meaning: "Heavy mud and rocks sliding down a steep mountain." },
              { word: "Erosion", meaning: "When rain washes away soil because no tree roots hold it." }
            ]
          },
          id_lang: {
            name: "Pinus Hispaniola",
            typeLabel: "🌿 Pohon Pinus Gunung (Tumbuhan)",
            habitat: "Punggung pegunungan berkabut dan lereng curam di atas 1.000 meter.",
            uniqueFeature: "Tulang punggung hutan pegunungan Haiti! Daun jarumnya menyaring butiran air dari kabut awan menjadi tetesan air bersih bagi sungai.",
            howItSurvives: "Kayunya kaya getah tahan terhadap angin dingin gunung, dan jalinan akarnya yang dalam mencengkeram tanah lereng agar tidak terjadi tanah longsor.",
            whyThreatened: "Perusahaan tambang membabat hutan pinus untuk membuat jalan truk pembawa tanah dan batu. Tanpa akar pinus, tanah lereng runtuh tersapu banjir longsor saat musim hujan.",
            fullStory: "Pinus Hispaniola tumbuh gagah di puncak pegunungan Haiti. Daun jarumnya menyerap kabut dingin menjadi tetesan mata air bersih. Jaringan akarnya yang kokoh mengikat tanah lereng gunung. Saat perusahaan tambang menebang pohon pinus ini untuk membuka jalan truk, tebing gunung rawan runtuh.",
            quickRead: [
              "Pohon Pinus Hispaniola tumbuh gagah di puncak gunung tinggi.",
              "Akar kuatnya mengikat tanah agar tidak terjadi tanah longsor.",
              "Jalan tambang dan penebangan liar merobohkan pohon pelindung ini."
            ],
            vocab: [
              { word: "Tajuk Hutan", meaning: "Bagian atas pepohonan rindang yang menyerupai payung raksasa." },
              { word: "Tanah Longsor", meaning: "Tanah yang runtuh ke bawah tebing saat hujan lebat." },
              { word: "Erosi", meaning: "Lapisan tanah subur yang terbawa air karena pohon ditebang." }
            ]
          }
        }
      ]
    },

    // ----------------------------------------------------
    // 2. SURINAME (Class 2B)
    // ----------------------------------------------------
    {
      id: "suriname",
      classCode: "2B",
      flagEmoji: "🇸🇷",
      color: "#059669",
      accentColor: "#047857",
      bgColor: "#ecfdf5",
      heroAnimalImage: "assets/images/suriname/harpy_eagle.webp",
      heroAnimalFallback: "assets/images/suriname/harpy_eagle.jpg",
      videoUrl: "https://www.youtube.com/watch?v=YckyTV4V2FE",
      videoThumb: "assets/images/video_thumbnails/suriname_video.webp",
      videoThumbFallback: "assets/images/video_thumbnails/suriname_video.jpg",
      videoTitle: {
        en: "Class 2B Video: Suriname - The Javanese Sister Country in South America!",
        id: "Video Kelas 2B: Keturunan Asli Suku Jawa di Benua Amerika! Fakta Suriname"
      },
      en: {
        name: "Suriname",
        location: "Northeastern coast of South America, bordered by French Guiana, Guyana, and Brazil.",
        capital: "Paramaribo",
        languages: "Dutch (official), Sranan Tongo, and Suriname Javanese (Basa Jawa Suriname)",
        interestingFacts: [
          "Suriname has a large Javanese community who traveled there over 130 years ago and still speak Javanese today!",
          "Suriname is the most forested country in the world — over 90% of its land is covered in lush green rainforest!"
        ],
        uniqueness: "Suriname has magnificent granite rock mountains ('inselbergs') rising high above the green rainforest canopy, where extraordinary orange birds and eagles make homes.",
        miningThreatsSummary: "Bauxite mining clears giant swaths of rainforest to extract aluminum ore, and river gold mining dredges release poisonous mercury into pristine rivers. Toxic sediment clouds river water, while roads carve wide barriers through the tree canopy.",
        combinedParagraph: "Suriname is located on the northeastern coast of South America, and its capital city is Paramaribo. The languages spoken there include Dutch, Sranan Tongo, and Javanese. Two interesting facts about Suriname are that it has a large Javanese community and over 90% of its land is covered in thick rainforest. What makes Suriname unique are its towering granite inselberg mountains and giant trees where harpy eagles and colorful margay cats roam freely."
      },
      id_lang: {
        name: "Suriname",
        location: "Pesisir timur laut Amerika Selatan, berbatasan dengan Guyana Prancis, Guyana, dan Brasil.",
        capital: "Paramaribo",
        languages: "Bahasa Belanda (resmi), Sranan Tongo, dan Bahasa Jawa Suriname",
        interestingFacts: [
          "Suriname memiliki komunitas besar keturunan suku Jawa yang pindah ke sana sejak 130 tahun lalu dan masih fasih berbahasa Jawa!",
          "Suriname adalah negara paling hijau di dunia — lebih dari 90% wilayahnya diselimuti hutan hujan tropis lebat!"
        ],
        uniqueness: "Suriname memiliki pegunungan batu granit raksasa ('inselberg') yang menjulang di tengah hutan belantara, tempat elang harpy raksasa dan burung oranye unik bersarang.",
        miningThreatsSummary: "Tambang bauksit membabat hamparan hutan hujan untuk mengambil bijih aluminium, dan tambang emas sungai membuang merkuri beracun ke aliran air bersih. Sungai menjadi keruh dan jalan tambang memutus jembatan tajuk pohon tempat margay melompat.",
        combinedParagraph: "Negara Suriname terletak di pesisir timur laut Benua Amerika Selatan, dan ibukotanya adalah Paramaribo. Bahasa yang digunakan masyarakatnya antara lain Bahasa Belanda, Sranan Tongo, dan Bahasa Jawa. Dua fakta menarik tentang Suriname adalah adanya warga keturunan Jawa yang masih berbahasa Jawa dan lebih dari 90% wilayahnya berupa hutan rimba alami. Yang membuat Suriname unik adalah bukit batu granit megah di tengah hutan hujan tempat elang harpy perkasa dan kucing margay hidup harmonis."
      },
      organisms: [
        {
          id: "harpy_eagle",
          type: "animal",
          image: "assets/images/suriname/harpy_eagle.webp",
          imageFallback: "assets/images/suriname/harpy_eagle.jpg",
          scientificName: "Harpia harpyja",
          en: {
            name: "Harpy Eagle",
            typeLabel: "🐾 Bird of Prey (Animal)",
            habitat: "Lowland tropical rainforests with towering emergent trees.",
            uniqueFeature: "The most powerful eagle on Earth! Its giant curved claws (talons) are as big as grizzly bear claws, and its wingspan stretches over 2 meters wide.",
            howItSurvives: "It flies silently through the rainforest canopy to hunt tree-dwelling animals like sloths and monkeys, building giant stick nests in the highest forks of huge trees.",
            whyThreatened: "Bauxite strip mines cut down the biggest, oldest trees in the forest. Because harpy eagles need giant trees that take centuries to grow, when these giants are chopped down, eagles have nowhere safe to build nests.",
            fullStory: "The Harpy Eagle is the strongest eagle in South America. Its dark talons are as big as a grizzly bear's claws, helping it fly silently under the jungle canopy. It builds massive nests high in the forks of ancient hardwood trees. When bauxite mining flattens old forest giants, mother eagles cannot find safe nests to raise their chicks.",
            quickRead: [
              "The Harpy Eagle is the strongest eagle in South America.",
              "It builds large nests in the crowns of giant trees.",
              "Bauxite strip mines cut down huge trees needed for nesting."
            ],
            vocab: [
              { word: "Talons", meaning: "Sharp curved claws used by hunting birds to catch prey." },
              { word: "Raptor", meaning: "A bird of prey that flies high and hunts smaller animals." },
              { word: "Apex Predator", meaning: "An animal at the top of the food chain with no natural hunters." }
            ]
          },
          id_lang: {
            name: "Elang Harpy",
            typeLabel: "🐾 Burung Pemangsa (Hewan)",
            habitat: "Hutan hujan dataran rendah dengan pohon-pohon raksasa yang menjulang tinggi.",
            uniqueFeature: "Elang terkuat di dunia! Cakarnya yang melengkung sebesar kuku beruang grizzly, dan bentang sayapnya mencapai lebih dari 2 meter.",
            howItSurvives: "Terbang lincah di sela-sela tajuk pohon untuk berburu kukang dan monyet, serta membuat sarang besar dari ranting di cabang pohon tertinggi.",
            whyThreatened: "Tambang bauksit menebang pohon-pohon tertua dan tertinggi di hutan. Karena elang harpy hanya bisa bersarang di pohon raksasa, hilangnya pohon purba membuat mereka tidak dapat membesarkan anak-anaknya.",
            fullStory: "Elang Harpy adalah penguasa langit hutan rimba Suriname. Cakarnya sebesar cakar beruang untuk mencengkeram dahan dan berburu di antara pepohonan rimbun. Sarangnya sangat besar, diletakkan di puncak pohon kayu yang paling tinggi. Tambang bauksit merobohkan pohon-pohon tertua sehingga elang harpy kehilangan rumah.",
            quickRead: [
              "Elang Harpy adalah burung pemangsa terkuat di Amerika Selatan.",
              "Elang ini membuat sarang besar di puncak pohon raksasa.",
              "Tambang bauksit menebang pohon raksasa tempat burung ini bersarang."
            ],
            vocab: [
              { word: "Cakar", meaning: "Kuku melengkung yang sangat tajam untuk mencengkeram mangsa." },
              { word: "Predator", meaning: "Hewan pemangsa yang berburu hewan lain untuk makanan." },
              { word: "Bauksit", meaning: "Mineral tanah merah yang ditambang untuk membuat aluminium." }
            ]
          }
        },
        {
          id: "cock_of_the_rock",
          type: "animal",
          image: "assets/images/suriname/cock_of_the_rock.webp",
          imageFallback: "assets/images/suriname/cock_of_the_rock.jpg",
          scientificName: "Rupicola rupicola",
          en: {
            name: "Guianan Cock-of-the-Rock",
            typeLabel: "🐾 Bird (Animal)",
            habitat: "Moist rainforests near giant granite rock boulders and cliffs.",
            uniqueFeature: "The male has stunning neon-orange feathers with a round, fan-shaped crest that completely covers its beak like a bright helmet!",
            howItSurvives: "It feeds on wild forest berries and fruits, then swallows them whole and drops seeds all over the forest floor, helping thousands of new trees sprout.",
            whyThreatened: "River gold mining pumps mud and toxic mercury into jungle streams. The loud roar of motorized suction dredges scares the birds away from their cliff mating grounds.",
            fullStory: "The Guianan Cock-of-the-Rock has brilliant orange feathers and a round crest that hides its face like a glowing helmet. It loves eating ripe jungle figs and drops seeds across the forest floor like a tiny flying gardener. Noisy river gold dredging machines scare these sensitive birds away from their nesting cliffs.",
            quickRead: [
              "The Cock-of-the-Rock has brilliant bright orange feathers and crest.",
              "It eats forest fruits and spreads seeds across the rainforest.",
              "Gold mining mud silts the streams where it finds food."
            ],
            vocab: [
              { word: "Crest", meaning: "A crown of soft, colorful feathers on top of a bird's head." },
              { word: "Dispersal", meaning: "Spreading seeds across the forest so new baby trees sprout." },
              { word: "Boulders", meaning: "Huge rounded rock stones found near rushing jungle streams." }
            ]
          },
          id_lang: {
            name: "Burung Cadas Guyana",
            typeLabel: "🐾 Burung (Hewan)",
            habitat: "Hutan hujan lembap di dekat tebing batu granit dan gua bebatuan.",
            uniqueFeature: "Burung jantan memiliki bulu oranye menyala seperti wortel dengan jambul bulat melengkung menyerupai helm bundar yang menutupi paruhnya!",
            howItSurvives: "Memakan buah-buahan hutan dan buah ara, lalu menyebarkan biji-bijian ke seluruh lantai hutan sehingga ribuan pohon baru dapat tumbuh subur.",
            whyThreatened: "Tambang emas sungai membuang lumpur keruh dan merkuri ke sungai jernih. Suara bising mesin kapal sedot tambang juga menakuti burung ini hingga lari dari tebing sarang mereka.",
            fullStory: "Burung Cadas Guyana memiliki bulu oranye cerah dan jambul melingkar indah. Burung ini berjasa menanam hutan karena memakan buah manis lalu menebarkan bijinya ke mana-mana. Suara bising mesin sedot tambang emas dan limbah lumpur mengusir burung ini dari tebing batu tempatnya bertelur.",
            quickRead: [
              "Burung ini memiliki bulu oranye terang dan jambul bundar.",
              "Burung ini memakan buah hutan dan menyebarkan bibit biji.",
              "Lumpur tambang emas mencemari sungai jernih tempat burung beristirahat."
            ],
            vocab: [
              { word: "Jambul", meaning: "Mahkota bulu halus di atas kepala burung indah." },
              { word: "Penyebaran Biji", meaning: "Membawa biji buah agar pohon baru dapat bertumbuh." },
              { word: "Batu Cadas", meaning: "Batu besar di dekat tebing tempat burung bertelur." }
            ]
          }
        },
        {
          id: "margay",
          type: "animal",
          image: "assets/images/suriname/margay.webp",
          imageFallback: "assets/images/suriname/margay.png",
          scientificName: "Leopardus wiedii",
          en: {
            name: "Margay",
            typeLabel: "🐾 Wild Cat (Animal)",
            habitat: "High canopy layers of dense primary tropical rainforest.",
            uniqueFeature: "Super acrobat of the trees! Its ankles can rotate 180 degrees backwards, allowing it to run headfirst straight down tree trunks like a squirrel and hang from branches by one paw!",
            howItSurvives: "It hunts quietly at night high up in the tree branches, catching tree frogs, lizards, and small rodents without ever having to touch the ground.",
            whyThreatened: "Mining companies bulldoze wide open roads through the rainforest. Because margays spend their entire lives in the trees and are terrified of walking on open dirt, roads cut their home into tiny isolated islands.",
            fullStory: "The Margay is a spotted wildcat that lives high up in the rainforest trees. Its hind paws can turn completely backwards so it can run down tree trunks face first. It hunts night lizards and jumps between vines. Wide dirt roads carved by mining trucks break the treetops, trapping margays in small forest patches.",
            quickRead: [
              "The Margay is a spotted wildcat that loves tall trees.",
              "Its flexible paws can twist backwards to climb down trunks.",
              "Wide mining roads divide the canopy so it cannot cross."
            ],
            vocab: [
              { word: "Arboreal", meaning: "Living comfortably high up among leafy tree branches." },
              { word: "Canopy", meaning: "The connected leafy roof where forest trees touch overhead." },
              { word: "Nocturnal", meaning: "Sleeping during the day and being wide awake at night." }
            ]
          },
          id_lang: {
            name: "Kucing Margay",
            typeLabel: "🐾 Kucing Hutan (Hewan)",
            habitat: "Lapisan kanopi atas hutan hujan tropis primer yang sangat rimbun.",
            uniqueFeature: "Pesulap pemanjat pohon! Pergelangan kaki belakangnya dapat berputar 180 derajat terbalik, sehingga ia bisa menuruni batang pohon dengan kepala menghadap ke bawah seperti tupai!",
            howItSurvives: "Berburu di dahan pohon pada malam hari, menangkap katak pohon, kadal, dan burung kecil tanpa perlu menyentuh tanah.",
            whyThreatened: "Perusahaan tambang membuka jalan raya tanah yang sangat lebar di tengah hutan rimba. Karena margay takut menyentuh tanah terbuka, jalan tambang memutus jalur berpindahnya antar pohon.",
            fullStory: "Kucing Margay adalah kucing hutan tutul yang hidup di atas tajuk pohon. Kaki belakangnya sangat ajaib karena bisa berputar terbalik untuk menuruni batang pohon secara vertikal. Hewan ini sangat jarang menginjak tanah. Jalan tambang yang lebar merusak sambungan dahan pohon sehingga margay terisolasi.",
            quickRead: [
              "Kucing Margay adalah kucing tutul yang lincah memanjat pohon.",
              "Kakinya bisa berputar terbalik untuk menuruni batang pohon tinggi.",
              "Jalan tambang memutus cabang pohon sehingga margay terperangkap di atas."
            ],
            vocab: [
              { word: "Pohon (Arboreal)", meaning: "Kebiasaan hewan yang menghabiskan hidup di dahan pohon." },
              { word: "Jembatan Tajuk", meaning: "Dahan-dahan pohon yang saling bersentuhan di atas hutan." },
              { word: "Nokturnal", meaning: "Hewan yang tidur di siang hari dan aktif malam." }
            ]
          }
        },
        {
          id: "clump_wallaba",
          type: "plant",
          image: "assets/images/suriname/clump_wallaba.webp",
          imageFallback: "assets/images/suriname/clump_wallaba.jpg",
          scientificName: "Eperua grandiflora",
          en: {
            name: "Clump Wallaba",
            typeLabel: "🌿 Hardwood Tree (Plant)",
            habitat: "White sand forests and riverbanks across Suriname.",
            uniqueFeature: "It produces stunning deep purple flowers that hang on long, drooping cords below the leaves, followed by giant flat wooden seed pods.",
            howItSurvives: "It has a super-strong resinous wood that naturally repels water, rot, and termites, allowing it to stand tall in wet, acidic sandy soil.",
            whyThreatened: "Strip mining for bauxite scrapes away the sandy topsoil where Wallaba trees anchor. Its valuable durable timber is also targeted for heavy construction and fence poles.",
            fullStory: "The Clump Wallaba is a magnificent hardwood tree with fragrant purple flowers hanging on cords like decorations. Its heavy wood is full of natural oil that keeps it safe from termites. Bauxite excavators scrape off the white sand soil where its roots drink, chopping down forests for aluminum ore pits.",
            quickRead: [
              "The Clump Wallaba is a grand hardwood tree in Suriname.",
              "Its drooping purple blossoms drop heavy seed pods into soil.",
              "Bauxite mines strip away topsoil and cut down this timber."
            ],
            vocab: [
              { word: "Hardwood", meaning: "Dense, strong timber that takes decades to grow thick." },
              { word: "Seed Pod", meaning: "A tough wooden case that protects seeds until they drop." },
              { word: "White Sand", meaning: "Pale sandy forest soil common in sunny tropical woods." }
            ]
          },
          id_lang: {
            name: "Pohon Wallaba Rumpun",
            typeLabel: "🌿 Pohon Kayu Keras (Tumbuhan)",
            habitat: "Hutan berpasir putih dan tepi sungai di Suriname.",
            uniqueFeature: "Menghasilkan bunga ungu pekat memesona yang menggantung pada tali panjang di bawah daun, disusul polong biji kayu yang besar dan keras.",
            howItSurvives: "Memiliki serat kayu keras bergetah yang secara alami tahan air, pembusukan, dan rayap, membuatnya kokoh berdiri di tanah berpasir asam.",
            whyThreatened: "Tambang terbuka bauksit mengeruk habis lapisan pasir putih tempat akar wallaba berpijak. Kayunya yang kuat juga sering ditebang untuk tiang bangunan.",
            fullStory: "Pohon Wallaba adalah raksasa kayu keras di hutan pasir putih Suriname. Bunganya yang berwarna ungu menggantung anggun seperti lentera. Kayunya sangat padat sehingga tahan dari gigitan rayap dan air hujan. Penambangan bauksit mengupas tanah pasir tempat pohon ini tumbuh.",
            quickRead: [
              "Pohon Wallaba adalah pohon kayu keras yang tumbuh di Suriname.",
              "Bunga ungunya yang indah menghasilkan polong biji yang berat.",
              "Tambang bauksit mengupas tanah subur dan menebang pohon berharga ini."
            ],
            vocab: [
              { word: "Kayu Keras", meaning: "Kayu pohon yang sangat padat, kokoh, dan berumur panjang." },
              { word: "Polong Biji", meaning: "Kulit pelindung keras tempat menyimpan benih tanaman baru." },
              { word: "Pasir Putih", meaning: "Lantai hutan berpasir tempat pohon wallaba tumbuh kokoh." }
            ]
          }
        },
        {
          id: "marsh_pitcher_plant",
          type: "plant",
          image: "assets/images/suriname/marsh_pitcher_plant.webp",
          imageFallback: "assets/images/suriname/marsh_pitcher_plant.jpg",
          scientificName: "Heliamphora nutans",
          en: {
            name: "Marsh Pitcher Plant",
            typeLabel: "🌿 Carnivorous Plant (Plant)",
            habitat: "High misty plateau bogs and wet mountain summits in South America.",
            uniqueFeature: "A meat-eating plant with rolled-up tubular leaves that look like green drinking pitchers filled with sweet rainwater to trap visiting insects!",
            howItSurvives: "Because mountain rocks have almost no plant nutrients, it catches falling beetles and ants in its water cup and absorbs their nutrients to grow.",
            whyThreatened: "Very sensitive to pollution! Dust, dirt, and heavy metals from nearby open-pit mines blow onto mountain plateaus, poisoning the pure rainwater ponds it relies on.",
            fullStory: "The Marsh Pitcher Plant lives on windy, misty mountain bogs where soil has very few nutrients. It forms green funnel-shaped pitchers that catch rain and tempt insects with sweet nectar. Dust from nearby mining roads drifts onto high plateau wetlands, contaminating the pristine water inside its cups.",
            quickRead: [
              "The Marsh Pitcher Plant grows on misty mountain peaks.",
              "Its green cups catch falling rainwater and trap tiny bugs.",
              "Mining pollution pollutes the pure mountain springs it needs."
            ],
            vocab: [
              { word: "Carnivorous", meaning: "A special plant that catches bugs to absorb extra food." },
              { word: "Pitcher", meaning: "A rolled tubular leaf shaped like a hollow drinking cup." },
              { word: "Nutrients", meaning: "Nourishing substances that living things need to grow strong." }
            ]
          },
          id_lang: {
            name: "Kantong Semar Rawa",
            typeLabel: "🌿 Tumbuhan Pemakan Serangga (Tumbuhan)",
            habitat: "Rawa dataran tinggi berkabut dan puncak gunung basah di Amerika Selatan.",
            uniqueFeature: "Tumbuhan karnivora unik dengan daun menggulung seperti corong cangkir piala yang menampung air hujan untuk menjebak serangga!",
            howItSurvives: "Karena tanah puncak gunung sangat miskin unsur hara, tanaman ini menjebak semut dan kumbang di dalam air cangkirnya untuk diserap nutrisinya.",
            whyThreatened: "Sangat peka terhadap polusi! Debu dan zat kimia dari area tambang terbawa angin ke puncak gunung, mencemari air hujan murni di dalam kantongnya.",
            fullStory: "Kantong Semar Rawa adalah tanaman pemakan serangga di puncak bukit berkabut. Daunnya melengkung membentuk cangkir penampung air hujan beraroma manis yang memikat semut. Tanaman ini menyerap nutrisi dari serangga. Asap dan debu tambang terbuka mencemari air bersih yang dibutuhkan tanaman mungil ini.",
            quickRead: [
              "Kantong Semar Rawa tumbuh di puncak gunung berkabut sejuk.",
              "Daunnya berbentuk cangkir berisi air untuk menjebak serangga kecil.",
              "Polusi debu tambang mencemari air bersih yang dibutuhkan tanaman ini."
            ],
            vocab: [
              { word: "Karnivora", meaning: "Tumbuhan unik yang mengambil nutrisi dari serangga kecil." },
              { word: "Kantong", meaning: "Daun melengkung berbentuk cangkir yang menampung air hujan." },
              { word: "Nutrisi", meaning: "Zat makanan penting yang membantu tanaman bertumbuh subur." }
            ]
          }
        },
        {
          id: "sand_baromalli",
          type: "plant",
          image: "assets/images/suriname/sand_baromalli.webp",
          imageFallback: "assets/images/suriname/sand_baromalli.jpg",
          scientificName: "Catostemma fragrans",
          en: {
            name: "Sand Baromalli",
            typeLabel: "🌿 Giant Canopy Tree (Plant)",
            habitat: "Sandy rainforest soils across the Guiana Shield in Suriname.",
            uniqueFeature: "A massive emergent tree that grows up to 40 meters tall, with fragrant white flowers and huge wooden buttress roots that look like giant fins!",
            howItSurvives: "Its huge wall-like roots spread wide across the sandy forest floor, locking the sandy earth together and supporting its immense height against storms.",
            whyThreatened: "Open-pit bauxite mines bulldoze whole stands of Baromalli. When these giant trees fall, the entire forest canopy is destroyed and soil quickly washes away into rivers.",
            fullStory: "The Sand Baromalli is a towering giant of the Suriname rainforest. It stretches over forty meters into the sky with great wooden buttress roots that look like rocket fins. Its sweet-smelling flowers feed honey bees. Mining excavators topple these huge trees, tearing a hole in the forest canopy that takes centuries to heal.",
            quickRead: [
              "The Sand Baromalli is a towering rainforest giant tree.",
              "Wide buttress roots hold it upright against heavy tropical winds.",
              "Bulldozers uproot these gentle giants to dig deep open pits."
            ],
            vocab: [
              { word: "Buttress Roots", meaning: "Wide wooden wall roots that brace very tall trees safely." },
              { word: "Rainforest", meaning: "A lush, dense forest that receives abundant warm rain." },
              { word: "Emergent", meaning: "Giant trees that reach higher than the main forest roof." }
            ]
          },
          id_lang: {
            name: "Pohon Baromalli Pasir",
            typeLabel: "🌿 Pohon Raksasa Hutan (Tumbuhan)",
            habitat: "Hutan tanah berpasir di wilayah Dataran Tinggi Guiana, Suriname.",
            uniqueFeature: "Pohon kanopi raksasa yang tingginya mencapai 40 meter, dengan bunga putih wangi dan akar papan besar seperti sirip kapal!",
            howItSurvives: "Akar papannya yang melebar mengikat lantai pasir hutan dengan sangat kuat, menjaga batangnya yang menjulang tetap kokoh dari badai angin.",
            whyThreatened: "Tambang terbuka bauksit meratakan rumpun pohon Baromalli. Tumbangnya pohon raksasa ini meruntuhkan seluruh lapisan kanopi hutan pelindung di sekitarnya.",
            fullStory: "Pohon Baromalli Pasir adalah salah satu pohon tertinggi di belantara Suriname. Batangnya menjulang setinggi gedung sepuluh lantai dan ditopang akar banir tebal. Bunganya yang harum memikat lebah madu hutan. Tambang bauksit menumbangkan raksasa hijau ini, merusak keteduhan hutan yang menaungi satwa rimba.",
            quickRead: [
              "Pohon Baromalli adalah pohon raksasa di hutan hujan tropis.",
              "Akar papan yang lebar menopang tubuhnya dari hembusan angin.",
              "Buldoser tambang menumbangkan pohon raksasa ini demi menggali lubang tambang."
            ],
            vocab: [
              { word: "Akar Papan", meaning: "Akar tebal menjulang seperti dinding penopang pohon tinggi." },
              { word: "Hutan Hujan", meaning: "Hutan lebat yang selalu mendapat limpahan air hujan." },
              { word: "Raksasa Hutan", meaning: "Pohon yang menjulang paling tinggi di atas hutan." }
            ]
          }
        }
      ]
    },

    // ----------------------------------------------------
    // 3. BOLIVIA (Class 2C)
    // ----------------------------------------------------
    {
      id: "bolivia",
      classCode: "2C",
      flagEmoji: "🇧🇴",
      color: "#d97706",
      accentColor: "#b45309",
      bgColor: "#fffbeb",
      heroAnimalImage: "assets/images/bolivia/bolivian_river_dolphin.webp",
      heroAnimalFallback: "assets/images/bolivia/bolivian_river_dolphin.jpg",
      videoUrl: "https://www.youtube.com/watch?v=9ZK2TWFTbps",
      videoThumb: "assets/images/video_thumbnails/bolivia_video.webp",
      videoThumbFallback: "assets/images/video_thumbnails/bolivia_video.png",
      videoTitle: {
        en: "Class 2C Video: Bolivia - Facts about Bolivia (Kids Friendly)",
        id: "Video Kelas 2C: Fakta Menarik Bolivia untuk Anak-anak (The Edutainers PR)"
      },
      en: {
        name: "Bolivia",
        location: "Heart of central South America, bordered by Brazil, Paraguay, Argentina, Chile, and Peru.",
        capital: "Sucre (constitutional) and La Paz (seat of government)",
        languages: "Spanish, Quechua, Aymara, and Guaraní (over 30 official languages!)",
        interestingFacts: [
          "Bolivia has the world's largest salt flat (Salar de Uyuni) which looks like a giant glowing mirror from space!",
          "Bolivia has both freezing snow-capped Andean mountains AND warm, lush tropical Amazon rainforests!"
        ],
        uniqueness: "Bolivia is a land of extreme contrasts — from high Andean mountain peaks over 4,000 meters where ancient trees grow, down to winding Amazon rivers where unique pink dolphins swim.",
        miningThreatsSummary: "River gold mining dredges use toxic mercury that washes into freshwater, poisoning dolphins and fish. In the highlands, metal mines scrape away mountainsides and build roads that crush rare dwarf alpine trees.",
        combinedParagraph: "Bolivia is located in central South America, and its capitals are Sucre and La Paz. People in Bolivia speak Spanish, Quechua, and Aymara. Two interesting facts about Bolivia are that it has the giant Salar de Uyuni salt flat and it spans from snowy mountains to tropical rainforests. What makes Bolivia unique is its dramatic landscape where rare pink river dolphins swim in the lowlands and ancient Queñua trees survive freezing Andean peaks."
      },
      id_lang: {
        name: "Bolivia",
        location: "Jantung Benua Amerika Selatan bagian tengah, berbatasan dengan Brasil, Paraguay, Argentina, Chili, dan Peru.",
        capital: "Sucre (ibukota konstitusional) dan La Paz (pusat pemerintahan)",
        languages: "Bahasa Spanyol, Quechua, Aymara, dan Guaraní (lebih dari 30 bahasa resmi!)",
        interestingFacts: [
          "Bolivia memiliki padang garam terbesar di dunia (Salar de Uyuni) yang tampak seperti cermin raksasa dari luar angkasa!",
          "Wilayah Bolivia sangat beragam, mulai dari pegunungan Andes bersalju hingga hutan hujan Amazon yang tropis dan hangat!"
        ],
        uniqueness: "Bolivia memiliki bentang alam yang luar biasa ekstrem — dari puncak Andes beku di ketinggian 4.000 meter tempat pohon queñua tumbuh, hingga sungai Amazon tempat lumba-lumba merah muda berenang.",
        miningThreatsSummary: "Tambang emas sungai menggunakan cairan merkuri beracun yang mencemari air tawar dan meracuni lumba-lumba serta ikan. Di pegunungan, tambang logam mengeruk lereng bukit dan menghancurkan pohon kerdil pelindung es.",
        combinedParagraph: "Negara Bolivia terletak di tengah Benua Amerika Selatan, dengan ibukota Sucre dan La Paz. Bahasa yang digunakan antara lain Bahasa Spanyol, Quechua, dan Aymara. Dua fakta menarik tentang Bolivia adalah memiliki padang garam cermin raksasa Salar de Uyuni dan memiliki wilayah salju hingga hutan Amazon. Yang membuat Bolivia unik adalah keanekaragaman alamnya yang dramatis, tempat lumba-lumba air tawar langka berenang dan pohon queñua purba bertahan di puncak beku Andes."
      },
      organisms: [
        {
          id: "bolivian_river_dolphin",
          type: "animal",
          image: "assets/images/bolivia/bolivian_river_dolphin.webp",
          imageFallback: "assets/images/bolivia/bolivian_river_dolphin.jpg",
          scientificName: "Inia geoffrensis boliviensis",
          en: {
            name: "Bolivian River Dolphin",
            typeLabel: "🐾 Aquatic Mammal (Animal)",
            habitat: "Mamoré and Madeira river basins in the Bolivian Amazon lowlands.",
            uniqueFeature: "A freshwater dolphin with a soft pink skin tone and an extraordinary flexible neck that can turn 90 degrees side-to-side to weave through flooded jungle tree trunks!",
            howItSurvives: "It uses clicking sound waves (echolocation) to find catfish and crabs swimming in murky, muddy river water where eyesight is useless.",
            whyThreatened: "Gold miners use toxic liquid mercury to separate gold flakes. The mercury washes into rivers, poisoning fish and building up in dolphins' bodies, making them sick.",
            fullStory: "The Bolivian River Dolphin is a gentle pink dolphin that swims in warm Amazon river channels. Its neck is so flexible that it can turn sideways to dodge submerged logs in flooded forests. It finds fish by clicking its echolocation sonar. Toxic mercury from illegal river gold dredging washes downstream, poisoning river fish and dolphin families.",
            quickRead: [
              "The Bolivian River Dolphin swims in warm freshwater rivers.",
              "Its flexible neck turns sideways to catch fish among trees.",
              "Toxic mercury from river gold mining poisons its clean water."
            ],
            vocab: [
              { word: "Freshwater", meaning: "Clean inland water in rivers and lakes that is not salty." },
              { word: "Mercury", meaning: "A poisonous heavy chemical used in river gold mining." },
              { word: "Echolocation", meaning: "Sending clicking sounds to find underwater objects by echo." }
            ]
          },
          id_lang: {
            name: "Lumba-lumba Sungai Bolivia",
            typeLabel: "🐾 Mamalia Air (Hewan)",
            habitat: "Aliran Sungai Mamoré dan Madeira di pedalaman hutan Amazon Bolivia.",
            uniqueFeature: "Lumba-lumba air tawar berwarna merah muda cerah dengan leher sangat lentur yang bisa menoleh 90 derajat ke samping untuk meliuk di antara akar pohon hutan banjir!",
            howItSurvives: "Menggunakan gelombang suara klik (ekolokasi) untuk mencari ikan dan kepiting di dalam air sungai keruh saat matanya tidak bisa melihat jelas.",
            whyThreatened: "Penambang emas sungai memakai cairan merkuri untuk mengikat butiran emas. Merkuri beracun ini hanyut ke air sungai, meracuni ikan dan menumpuk di tubuh lumba-lumba hingga sakit.",
            fullStory: "Lumba-lumba Sungai Bolivia adalah satwa air tawar berwarna merah muda yang berenang di sungai Amazon. Lehernya yang fleksibel dapat menoleh bebas untuk menangkap ikan di sela-sela akar pohon yang terendam banjir. Limbah merkuri dari tambang emas sungai mencemari air dan meracuni ikan yang dimakannya.",
            quickRead: [
              "Lumba-lumba Bolivia berenang di sungai air tawar yang hangat.",
              "Leher fleksibelnya bisa menoleh bebas mencari ikan di air.",
              "Limbah merkuri tambang emas mencemari air sungai dan ikannya."
            ],
            vocab: [
              { word: "Air Tawar", meaning: "Air sungai alami yang bersih dan tidak berasa asin." },
              { word: "Merkuri", meaning: "Zat kimia beracun yang digunakan penambang emas liar." },
              { word: "Ekolokasi", meaning: "Mendengarkan pantulan suara klik untuk mencari ikan tersembunyi." }
            ]
          }
        },
        {
          id: "blue_throated_macaw",
          type: "animal",
          image: "assets/images/bolivia/blue_throated_macaw.webp",
          imageFallback: "assets/images/bolivia/blue_throated_macaw.jpg",
          scientificName: "Ara glaucogularis",
          en: {
            name: "Blue-throated Macaw",
            typeLabel: "🐾 Parrot (Animal)",
            habitat: "Flooded savanna grasslands and isolated palm forest islands (Beni Savanna).",
            uniqueFeature: "A brilliant turquoise-blue and sunflower-yellow parrot with a striking blue throat patch! It is found in the wild ONLY in northern Bolivia.",
            howItSurvives: "It feeds on sweet oily palm nuts, cracking them with its immense beak, and nests in natural hollows of tall, dying motacú palm trees.",
            whyThreatened: "Critically Endangered! Cattle ranch fires and land clearing for mining camps burn down ancient motacú palms, leaving fewer than 400 wild birds with no hollows to lay eggs.",
            fullStory: "The Blue-throated Macaw is a gorgeous parrot with a turquoise crown and yellow chest. It lives only in the grassy savannas of Bolivia. It uses its powerful curved beak to crack rock-hard motacú palm nuts. When mining camps and forest fires burn down old palm trees, these macaws have no hollow trees to protect their baby chicks.",
            quickRead: [
              "The Blue-throated Macaw is a brilliant turquoise and yellow parrot.",
              "It nests inside hollow palm trees in grassy wetland savannas.",
              "Ranch clearing and gold mining burn down its nesting palms."
            ],
            vocab: [
              { word: "Savanna", meaning: "A warm flat grassland with scattered palm tree clusters." },
              { word: "Hollow", meaning: "An empty sheltered hole inside a tree trunk for birds." },
              { word: "Endangered", meaning: "At very high risk of disappearing unless humans protect it." }
            ]
          },
          id_lang: {
            name: "Makaw Leher Biru",
            typeLabel: "🐾 Burung Nuri (Hewan)",
            habitat: "Padang rumput sabana basah dan gugusan pulau palem di Beni, Bolivia.",
            uniqueFeature: "Burung makaw berbulu biru toska berkilau dengan dada kuning matahari dan bercak biru cerah di lehernya! Burung ini HANYA hidup di alam liar Bolivia.",
            howItSurvives: "Memakan buah dan kacang palem motacú yang berminyak dengan paruh besarnya yang sangat kuat, serta bertelur di lubang alami batang pohon palem tua.",
            whyThreatened: "Sangat Kritis Terancam Punah! Kebakaran lahan dan penebangan untuk permukiman tambang membakar habis pohon palem tua, menyisakan kurang dari 400 ekor di alam liar.",
            fullStory: "Makaw Leher Biru adalah burung nuri endemik Bolivia dengan warna bulu biru toska dan kuning menyala. Burung ini sangat pandai memecahkan kacang palem motacú yang keras. Sarangnya berada di dalam lubang batang pohon palem tua yang lapuk. Kebakaran hutan dan perambahan lahan tambang menghanguskan pohon sarangnya.",
            quickRead: [
              "Makaw Leher Biru adalah burung nuri berwarna kuning cerah.",
              "Burung ini bersarang di dalam lubang batang pohon palem.",
              "Pembakaran lahan dan tambang merusak pohon palem tempat bertelur."
            ],
            vocab: [
              { word: "Sabana", meaning: "Padang rumput luas dengan sedikit pohon palem tersebar." },
              { word: "Rongga Batang", meaning: "Lubang alami di pohon tempat burung membuat sarang." },
              { word: "Terancam Punah", meaning: "Jumlahnya tinggal sedikit sehingga harus kita jaga bersama." }
            ]
          }
        },
        {
          id: "red_fronted_macaw",
          type: "animal",
          image: "assets/images/bolivia/red_fronted_macaw.webp",
          imageFallback: "assets/images/bolivia/red_fronted_macaw.jpg",
          scientificName: "Ara rubrogenys",
          en: {
            name: "Red-fronted Macaw",
            typeLabel: "🐾 Parrot (Animal)",
            habitat: "Dry thorny valleys and rocky river canyons in the Bolivian Andes.",
            uniqueFeature: "An olive-green macaw with a bright scarlet-red forehead patch and orange-red ear patches! Unlike tree parrots, it nests high on sheer vertical cliff faces.",
            howItSurvives: "It climbs thorny cactus trees to eat wild cactus fruits and nuts, and roosts in steep cliff crevices where ground predators cannot reach.",
            whyThreatened: "Stone quarries blast dynamite into rocky canyons to crush gravel for highways and mining supply roads, cracking the cliff faces and destroying macaw nests.",
            fullStory: "The Red-fronted Macaw has olive-green feathers and a bright ruby forehead. It lives in dry Andean mountain canyons and builds nests on steep rocky cliffs rather than trees. It loves nibbling sweet cactus fruits. Dynamite blasting at stone quarries cracks cliff walls, destroying the caves where macaw babies sleep.",
            quickRead: [
              "The Red-fronted Macaw lives on rugged rocky mountain river cliffs.",
              "It eats wild cactus fruits and nuts with its beak.",
              "Dynamite quarry blasting cracks cliffs where its baby chicks sleep."
            ],
            vocab: [
              { word: "Cliff", meaning: "A very steep, high rock wall beside river valleys." },
              { word: "Blasting", meaning: "Using loud dynamite explosions to break mountain stone." },
              { word: "Foraging", meaning: "Searching through dry forests to find wild fruits and seeds." }
            ]
          },
          id_lang: {
            name: "Makaw Dahi Merah",
            typeLabel: "🐾 Burung Nuri (Hewan)",
            habitat: "Lembah berduri kering dan ngarai tebing berbatu di Pegunungan Andes Bolivia.",
            uniqueFeature: "Burung makaw berbulu hijau zaitun dengan dahi merah menyala dan bercak jingga di telinganya! Tidak bersarang di pohon, melainkan di celah tebing batu terjal.",
            howItSurvives: "Memanjat kaktus liar untuk memetik buah dan biji kaktus berduri, serta beristirahat di ceruk tebing tinggi yang tidak bisa dijangkau pemangsa darat.",
            whyThreatened: "Tambang batu memecah tebing dengan dinamit untuk dijadikan kerikil bahan jalan raya proyek tambang, meruntuhkan tebing sarang tempat anak makaw berteduh.",
            fullStory: "Makaw Dahi Merah adalah burung nuri unik yang hidup di ngarai kering Bolivia. Dahinya dihiasi bulu merah delima. Mereka tidak bertelur di pepohonan, melainkan di dinding tebing batu kapur yang curam. Ledakan dinamit dari tambang pemecah batu meruntuhkan tebing tempat anak-anak makaw bersarang.",
            quickRead: [
              "Makaw Dahi Merah hidup di tebing berbatu sungai Bolivia.",
              "Paruh kuatnya memecahkan kacang dan buah kaktus berduri lezat.",
              "Ledakan dinamit tambang batu meruntuhkan tebing sarang anak makaw."
            ],
            vocab: [
              { word: "Tebing Cadas", meaning: "Dinding batu tinggi dan terjal di dekat lembah sungai." },
              { word: "Dinamit", meaning: "Bahan peledak tambang yang memecah batu dan bersuara keras." },
              { word: "Mencari Makan", meaning: "Terbang menjelajahi semak untuk memetik buah dan biji." }
            ]
          }
        },
        {
          id: "golden_rat_tail_cactus",
          type: "plant",
          image: "assets/images/bolivia/golden_rat_tail_cactus.webp",
          imageFallback: "assets/images/bolivia/golden_rat_tail_cactus.jpg",
          scientificName: "Cleistocactus winteri",
          en: {
            name: "Golden Rat Tail Cactus",
            typeLabel: "🌿 Hanging Cactus (Plant)",
            habitat: "Steep rocky cliff faces in dry inter-Andean valleys.",
            uniqueFeature: "Long, trailing stems covered in dense golden-yellow spines that look like fuzzy animal tails hanging down from the rock, with bright salmon-orange flowers!",
            howItSurvives: "Its long fleshy stems store gallons of water and its shimmering golden spines reflect blazing desert sun while trapping morning mountain dew.",
            whyThreatened: "Gravel mining and highway blasting shake loose the rocky cliff faces where these cacti hang, causing whole colonies to plunge down the ravine.",
            fullStory: "The Golden Rat Tail Cactus hangs from sheer mountain cliffs like soft furry animal tails. Its stems are wrapped in golden bristles that reflect the bright sun and collect dew. Long fleshy stems hold rainwater during droughts. When mining machines blast dynamite to build mountain highways, these fragile cacti fall into the gorge.",
            quickRead: [
              "The Golden Rat Tail Cactus clings to steep dry cliffs.",
              "Its long spiny stems store water through hot sunny dry seasons.",
              "Stone mining and road machines topple these golden hanging plants."
            ],
            vocab: [
              { word: "Spines", meaning: "Sharp needle-like hairs that shade cacti and protect them." },
              { word: "Drought", meaning: "A long stretch of dry weather without any rainfall." },
              { word: "Pendant", meaning: "Hanging down gracefully from rocky cliff edges." }
            ]
          },
          id_lang: {
            name: "Kaktus Ekor Tikus Emas",
            typeLabel: "🌿 Kaktus Gantung (Tumbuhan)",
            habitat: "Dinding tebing batu terjal di lembah kering antarmountain Andes.",
            uniqueFeature: "Batangnya panjang terjuntai diselimuti duri kuning keemasan yang lebat seperti ekor hewan berbulu, dengan bunga jingga kemerahan yang mekar menawan!",
            howItSurvives: "Batangnya yang tebal menyimpan air dalam jumlah banyak, sementara bulu duri emasnya memantulkan terik sinar matahari dan menangkap embun pagi.",
            whyThreatened: "Tambang kerikil dan ledakan proyek jalan mengguncang tebing batu tempat kaktus ini bergelantungan, membuat rumpun kaktus langka ini jatuh dan hancur.",
            fullStory: "Kaktus Ekor Tikus Emas adalah tanaman tebing yang menjuntai indah seperti ekor berbulu emas. Duri halusnya yang berwarna kuning memantulkan panas sinar matahari dan menangkap tetesan embun. Batang berairnya menyimpan cadangan air saat kemarau. Pengerukan batu dan getaran alat berat meruntuhkan tanaman kaktus langka ini.",
            quickRead: [
              "Kaktus Ekor Tikus Emas tumbuh menggantung di tebing terjal.",
              "Batang berdurinya menyimpan cadangan air saat musim kemarau panjang.",
              "Pengerukan tebing dan alat berat meruntuhkan tanaman kaktus langka ini."
            ],
            vocab: [
              { word: "Duri Kaktus", meaning: "Jarum halus yang melindungi kaktus dari terik matahari." },
              { word: "Kemarau", meaning: "Musim panas berkepanjangan tanpa ada tetesan air hujan." },
              { word: "Menggantung", meaning: "Batang lentur yang terjuntai indah ke bawah tebing." }
            ]
          }
        },
        {
          id: "cardenasiodendron_tree",
          type: "plant",
          image: "assets/images/bolivia/cardenasiodendron_tree.webp",
          imageFallback: "assets/images/bolivia/cardenasiodendron_tree.jpg",
          scientificName: "Cardenasiodendron brachypterum",
          en: {
            name: "Cardenasiodendron Tree",
            typeLabel: "🌿 Dry Valley Tree (Plant)",
            habitat: "Arid inter-Andean dry valleys in central and southern Bolivia.",
            uniqueFeature: "A rare tree found only in Bolivia! It produces winged seeds designed to spin through mountain breezes and has tough leaves that never wither in the dry heat.",
            howItSurvives: "It drives exceptionally deep taproots deep between rock fractures to reach hidden subterranean water tables beneath bone-dry mountain soil.",
            whyThreatened: "Open-pit gravel and sand mining scrapes away valley soil, severing its deep taproots. Because it is endemic only to a small valley, any mine destroys its entire world range.",
            fullStory: "The Cardenasiodendron Tree is a rare guardian of Bolivia's dry mountain valleys. It produces winged seeds that spin on mountain winds like little helicopters. Deep roots reach underground water buried beneath rocks. Gravel strip mines scrape away valley dirt, tearing its roots and threatening this special tree.",
            quickRead: [
              "The Cardenasiodendron is a rare tree unique to dry valleys.",
              "Its deep roots tap into hidden groundwater beneath rocky soil.",
              "Open gravel strip mines scrape away the dry valley soil."
            ],
            vocab: [
              { word: "Endemic", meaning: "Living naturally in only one special place in the world." },
              { word: "Inter-Andean", meaning: "Valleys nestled between the high mountain ridges of the Andes." },
              { word: "Taproot", meaning: "A long primary root that digs deep down into dirt for water." }
            ]
          },
          id_lang: {
            name: "Pohon Cardenasiodendron",
            typeLabel: "🌿 Pohon Lembah Kering (Tumbuhan)",
            habitat: "Lembah kering gersang antarmountain Andes di Bolivia tengah dan selatan.",
            uniqueFeature: "Pohon langka yang hanya hidup di Bolivia! Memiliki biji bersayap yang berputar seperti helikopter saat tertiup angin gunung, serta daun tahan panas terik.",
            howItSurvives: "Memiliki akar tunggang yang menembus celah bebatuan sangat dalam untuk menjangkau sumber air tanah tersembunyi di bawah tanah gersang.",
            whyThreatened: "Pengerukan pasir dan tambang kerikil mengikis habis lapisan tanah lembah, memotong akar tunggangnya yang vital dan mengancam keberadaannya di bumi.",
            fullStory: "Pohon Cardenasiodendron adalah pohon langka yang hanya tumbuh di lembah kering pegunungan Bolivia. Benihnya memiliki sayap tipis yang berputar tertiup angin seperti helikopter kecil. Akar utamanya menembus lapisan batu untuk mencari air tanah. Pengerukan tambang pasir mengikis tanah lembah tempat akarnya berpijak.",
            quickRead: [
              "Pohon Cardenasiodendron adalah pohon langka di lembah kering Bolivia.",
              "Akar dalamnya mencari air tanah di sela bebatuan keras.",
              "Tambang kerikil terbuka mengikis habis tanah lembah tempat bertumbuh."
            ],
            vocab: [
              { word: "Endemik", meaning: "Tumbuhan khas yang hanya ditemukan di satu wilayah saja." },
              { word: "Lembah Gunung", meaning: "Dataran kering yang diapit oleh pegunungan tinggi Andes." },
              { word: "Akar Tunggang", meaning: "Akar utama yang menembus tanah dalam untuk menyerap air." }
            ]
          }
        },
        {
          id: "quenua_de_altura",
          type: "plant",
          image: "assets/images/bolivia/quenua_de_altura.webp",
          imageFallback: "assets/images/bolivia/quenua_de_altura.jpg",
          scientificName: "Polylepis tarapacana",
          en: {
            name: "Queñua de Altura",
            typeLabel: "🌿 Alpine Dwarf Tree (Plant)",
            habitat: "Extreme high elevations in the freezing Andes Mountains (over 4,000 meters!).",
            uniqueFeature: "The highest-growing tree in the world! It has shaggy, papery bark that peels in many thin layers like a winter coat to insulate it against sub-zero mountain cold.",
            howItSurvives: "It keeps its roots warm under a thick carpet of green moss and rocks on freezing slopes right below glaciers.",
            whyThreatened: "When metal mines scrape away the rocks and moss to build haul roads, the tree roots lose their warm blanket and freeze to death in the harsh mountain frost.",
            fullStory: "The Queñua is the highest-growing tree in the entire world, surviving close to freezing glacier ice. Its trunk is wrapped in dozens of thin papery bark layers like a warm down coat. A thick carpet of green moss keeps its roots cozy. Metal haul roads scrape away the rocks and moss, causing tree roots to freeze.",
            quickRead: [
              "The Queñua is the highest growing tree on the planet.",
              "Layered papery bark keeps it warm in freezing alpine frost.",
              "Road building and open-pit mines peel away its moss blanket."
            ],
            vocab: [
              { word: "Alpine", meaning: "High mountain areas above where normal trees can grow." },
              { word: "Insulation", meaning: "A cozy protective layer that keeps heat trapped in cold." },
              { word: "Glacier", meaning: "A massive, frozen mountain field of ancient snow and ice." }
            ]
          },
          id_lang: {
            name: "Pohon Queñua Pegunungan",
            typeLabel: "🌿 Pohon Kerdil Salju (Tumbuhan)",
            habitat: "Lereng Pegunungan Andes yang sangat tinggi dan membeku (di atas 4.000 meter!).",
            uniqueFeature: "Pohon yang hidup di tempat tertinggi di dunia! Kulit batangnya berlapis-lapis tipis seperti kertas jaket tebal untuk melindunginya dari suhu beku es.",
            howItSurvives: "Menjaga akarnya tetap hangat di bawah permadani lumut hijau tebal dan bebatuan di dekat gletser salju.",
            whyThreatened: "Ketika tambang logam mengeruk bebatuan dan lapisan lumut untuk membuat jalan truk, selimut pelindung akarnya hilang sehingga akar pohon membeku di udara dingin gunung.",
            fullStory: "Pohon Queñua Pegunungan adalah pohon yang sanggup hidup di tempat paling tinggi di dunia di dekat puncak salju. Batangnya memiliki kulit tipis berlapis-lapis seperti jaket musim dingin untuk menahan hawa beku. Lumut di sekelilingnya bertindak sebagai selimut akar. Proyek tambang mengeruk lumut pelindung ini hingga akarnya membeku.",
            quickRead: [
              "Pohon Queñua adalah pohon tertinggi di dunia dekat gletser.",
              "Kulit batangnya berlapis-lapis tipis seperti jaket musim dingin.",
              "Tambang mengikis lumut tebal yang melindungi akar dari es."
            ],
            vocab: [
              { word: "Alpen (Pegunungan Es)", meaning: "Wilayah puncak gunung tinggi dengan hawa yang membeku." },
              { word: "Isolasi", meaning: "Lapisan pelindung yang menahan panas agar tidak kedinginan." },
              { word: "Gletser", meaning: "Hamparan es dan salju abadi di puncak gunung." }
            ]
          }
        }
      ]
    }
  ],

  // ----------------------------------------------------
  // COUNTRY-SPECIFIC QUIZ QUESTIONS (Kids Friendly Grade 2)
  // Issue 2: Specific questions for Haiti, Suriname, and Bolivia
  // ----------------------------------------------------
  countryQuizzes: {
    haiti: [
      {
        id: 1,
        en: {
          question: "Where does the colorful Hispaniolan Trogon build its cozy nest?",
          options: [
            "Inside soft holes in dead trees (snags)",
            "Deep under the ocean water",
            "On top of busy car roofs",
            "In sandy beach holes"
          ],
          answer: 0,
          explanation: "Great job! The Hispaniolan Trogon has a gentle beak, so it makes its nest inside soft, old dead trees called snags!"
        },
        id_lang: {
          question: "Di manakah burung Trogon Hispaniola yang cantik suka membuat sarangnya?",
          options: [
            "Di dalam lubang pohon tua yang lapuk (snags)",
            "Jauh di dasar air laut yang dalam",
            "Di atas atap mobil yang ramai di jalan",
            "Di dalam lubang pasir pantai yang berangin"
          ],
          answer: 0,
          explanation: "Bagus sekali! Paruh burung Trogon lembut, sehingga ia memilih batang pohon tua yang lapuk untuk membuat sarang yang nyaman!"
        }
      },
      {
        id: 2,
        en: {
          question: "What special body feature helps the ancient Hispaniolan Solenodon find insects in the dark?",
          options: [
            "Feathery wings for high flying",
            "A long, flexible snout for sniffing soil",
            "Giant flippers for swimming",
            "Shining headlights on its ears"
          ],
          answer: 1,
          explanation: "Super! The solenodon has a long flexible snout that wiggles into the ground to sniff out tasty insects at night!"
        },
        id_lang: {
          question: "Ciri tubuh istimewa apa yang membantu Solenodon Hispaniola mencari serangga di malam hari?",
          options: [
            "Sayap berbulu untuk terbang tinggi di langit",
            "Moncong panjang yang lentur untuk mengendus tanah",
            "Kaki berselaput lebar untuk menyelam di sungai",
            "Lampu senter yang menyala terang di daun telinganya"
          ],
          answer: 1,
          explanation: "Hebat! Solenodon memiliki moncong panjang yang sangat lincah untuk mengendus serangga lezat di dalam tanah pada malam hari!"
        }
      },
      {
        id: 3,
        en: {
          question: "What friendly feature gave the Rhinoceros Iguana its special name?",
          options: [
            "Big floppy elephant ears",
            "Bright striped tiger fur",
            "Three small horn-like bumps on its snout",
            "A curly tail like a pig"
          ],
          answer: 2,
          explanation: "Spot on! It has three little bumpy scales on its nose that look just like tiny rhino horns!"
        },
        id_lang: {
          question: "Ciri apakah yang membuat Iguana Badak mendapatkan namanya yang unik?",
          options: [
            "Telinga lebar dan belalai panjang seperti gajah",
            "Bulu lebat belang-belang seperti harimau",
            "Tiga tonjolan sisik mirip cula badak di atas hidungnya",
            "Ekor melingkar seperti ekor anak babi"
          ],
          answer: 2,
          explanation: "Tepat sekali! Iguana ini memiliki tiga sisik menonjol di atas hidungnya yang tampak gagah mirip cula badak kecil!"
        }
      },
      {
        id: 4,
        en: {
          question: "How do Hispaniolan Pine trees help protect Haiti's steep mountains?",
          options: [
            "They turn mountain clouds into sweet juice",
            "They build wooden houses by themselves",
            "Their strong roots hold the soil so rain does not wash hillsides away",
            "They blow cold wind like giant electric fans"
          ],
          answer: 2,
          explanation: "Awesome! Deep pine roots hold the mountain dirt tightly like a strong net, preventing soil from washing away during heavy rains!"
        },
        id_lang: {
          question: "Bagaimana pohon Pinus Hispaniola membantu melindungi pegunungan curam di Haiti?",
          options: [
            "Mengubah kabut gunung menjadi sirup manis",
            "Membangun rumah kayu dengan sendirinya",
            "Akar kuatnya mencengkeram tanah agar tidak longsor saat hujan lebat",
            "Meniupkan angin dingin seperti kipas angin raksasa"
          ],
          answer: 2,
          explanation: "Keren! Akar pohon pinus yang dalam mencengkeram tanah gunung dengan kuat seperti jaring penyelamat saat hujan lebat!"
        }
      },
      {
        id: 5,
        en: {
          question: "How can we help Haiti's cloud forests and support SDG 15 (Life on Land)?",
          options: [
            "Cut down all mountain trees for mining trucks",
            "Leave plastic garbage along bird nests",
            "Scrape away all fertile soil from hills",
            "Plant new native trees and keep mining away from national parks"
          ],
          answer: 3,
          explanation: "Fantastic! SDG 15 teaches us to protect wild cloud forests, replant native trees, and keep animal homes safe from harmful digging!"
        },
        id_lang: {
          question: "Bagaimana cara kita membantu hutan awan Haiti dan mendukung SDG 15 (Ekosistem Daratan)?",
          options: [
            "Menebang semua pohon gunung untuk jalan truk tambang",
            "Meninggalkan sampah plastik di sarang burung",
            "Mengeruk habis seluruh lapisan tanah subur di perbukitan",
            "Menanam kembali bibit pohon asli dan menjauhkan tambang dari hutan lindung"
          ],
          answer: 3,
          explanation: "Luar biasa! SDG 15 mengajak kita menjaga hutan awan, menanam bibit pohon asli, dan melindungi rumah satwa dari kerusakan galian tambang!"
        }
      }
    ],
    suriname: [
      {
        id: 1,
        en: {
          question: "What helps the Giant Otter swim super fast in Suriname's clean rivers?",
          options: [
            "Webbed paws and a strong flat tail",
            "Heavy iron boots",
            "Golden wings on its back",
            "A floating plastic surfboard"
          ],
          answer: 0,
          explanation: "Correct! Giant otters have webbed toes like natural swim flippers and a powerful tail that guides them like a boat paddle!"
        },
        id_lang: {
          question: "Apa yang membantu Berang-berang Raksasa berenang sangat cepat di sungai bersih Suriname?",
          options: [
            "Kaki berselaput dan ekor pipih yang mendayung air",
            "Sepatu bot dari besi yang berat",
            "Sayap emas berbulu di punggungnya",
            "Papan selancar terapung dari plastik"
          ],
          answer: 0,
          explanation: "Benar sekali! Kaki berselaput dan ekor pipihnya bekerja seperti dayung perahu alami untuk meluncur lincah di dalam air!"
        }
      },
      {
        id: 2,
        en: {
          question: "What does the bright orange male Guianan Cock-of-the-rock show off to friends?",
          options: [
            "A shiny pair of sunglasses",
            "A wonderful half-moon crest of orange feathers",
            "A loud ringing bicycle bell",
            "A necklace of river seashells"
          ],
          answer: 1,
          explanation: "Super! The male has a glorious fan-shaped crest of bright orange feathers standing proudly on top of its head!"
        },
        id_lang: {
          question: "Apa hiasan indah di kepala burung Cadas Guyana jantan yang berwarna jingga menyala?",
          options: [
            "Kacamata hitam yang berkilau",
            "Jambul bulu jingga indah berbentuk kipas setengah lingkaran",
            "Bel sepeda yang berbunyi nyaring",
            "Kalung mutiara dari kerang sungai"
          ],
          answer: 1,
          explanation: "Hebat! Burung jantan memiliki jambul bulu jingga terang berbentuk kipas setengah lingkaran yang berdiri anggun di kepalanya!"
        }
      },
      {
        id: 3,
        en: {
          question: "Why do Jaguars need big, connected rainforests to roam in Suriname?",
          options: [
            "They enjoy going to outdoor movie theaters",
            "They only like walking on concrete roads",
            "They need wide territories to hunt prey, swim in rivers, and raise cubs",
            "They are scared of tall green trees"
          ],
          answer: 2,
          explanation: "You got it! Jaguars are magnificent big cats that need plenty of connected jungle to hunt, swim, and protect their baby cubs!"
        },
        id_lang: {
          question: "Mengapa Jaguar membutuhkan hutan hujan yang luas dan tersambung di Suriname?",
          options: [
            "Karena mereka suka bermain bola di lapangan rumput kota",
            "Karena mereka hanya mau berjalan di jalan beraspal",
            "Karena mereka butuh wilayah luas untuk berburu, berenang, dan membesarkan anak",
            "Karena mereka takut melihat dedaunan pohon yang hijau"
          ],
          answer: 2,
          explanation: "Pintar! Jaguar adalah kucing besar perkasa yang membutuhkan hutan lebat tak terputus untuk berburu mangsa, berenang bebas, dan menjaga anaknya!"
        }
      },
      {
        id: 4,
        en: {
          question: "What makes the Giant Water Lily in Suriname's calm waterways so amazing?",
          options: [
            "It shoots laser beams into the clouds",
            "Its giant round floating pads are so wide small birds can walk on them",
            "It produces cold chocolate milk",
            "It sinks down to sleep in river mud every noon"
          ],
          answer: 1,
          explanation: "Spot on! The Giant Water Lily has enormous floating round leaves that can grow two meters wide with strong upturned edges!"
        },
        id_lang: {
          question: "Apa keajaiban daun Teratai Raksasa yang terapung di perairan tenang Suriname?",
          options: [
            "Tenggelam ke dasar sungai seperti batu kali yang berat",
            "Daun bundar terapungnya sangat lebar sehingga burung kecil bisa berdiri di atasnya",
            "Menghasilkan susu cokelat yang dingin dan manis",
            "Tumbuh berduri tajam di pucuk pohon kelapa"
          ],
          answer: 1,
          explanation: "Tepat sekali! Teratai Raksasa memiliki daun bundar mengapung selebar dua meter dengan tepi terlipat kokoh di atas permukaan air!"
        }
      },
      {
        id: 5,
        en: {
          question: "Why does SDG 15 encourage us to stop using toxic mercury in river gold mining?",
          options: [
            "Because mercury makes fish turn into gold coins",
            "Because mercury helps river water freeze faster",
            "Because loud river mining machines make water warm",
            "Because mercury poisons river water and harms fish, otters, and people"
          ],
          answer: 3,
          explanation: "Brilliant! Banning toxic mercury protects our freshwater rivers, keeping fish, river otters, and human communities safe and healthy!"
        },
        id_lang: {
          question: "Mengapa SDG 15 mendorong penghentian penggunaan zat merkuri beracun pada tambang emas sungai?",
          options: [
            "Karena merkuri mengubah batu kali menjadi kue manis",
            "Karena merkuri membuat air sungai cepat berubah jadi es",
            "Karena suara mesin tambang membuat air menjadi hangat",
            "Karena merkuri meracuni air sungai dan membahayakan ikan, berang-berang, serta manusia"
          ],
          answer: 3,
          explanation: "Luar biasa! Melarang zat merkuri beracun menjaga kemurnian sungai agar ikan, berang-berang, dan masyarakat tetap aman dan sehat!"
        }
      }
    ],
    bolivia: [
      {
        id: 1,
        en: {
          question: "How does the Andean Condor soar high above Bolivia's snowy mountain peaks?",
          options: [
            "It flaps tiny wings a thousand times a minute",
            "It spreads its huge wings and glides gracefully on rising mountain air",
            "It rides on the backs of wild llamas",
            "It climbs ladder steps carved into rocks"
          ],
          answer: 1,
          explanation: "Awesome! With its massive three-meter wingspan, the condor glides gently across the sky on mountain breezes without tiring out!"
        },
        id_lang: {
          question: "Bagaimana burung Kondor Andes melayang di langit pegunungan tinggi Bolivia?",
          options: [
            "Mengepakkan sayap kecil seribu kali setiap menit",
            "Membentangkan sayap raksasanya dan melayang anggun mengikuti hembusan angin gunung",
            "Menunggangi punggung kawanan llama liar",
            "Menaiki tangga batu yang diukir di tebing"
          ],
          answer: 1,
          explanation: "Hebat! Dengan bentang sayap raksasa hingga tiga meter, burung Kondor melayang anggun mengikuti angin gunung tanpa cepat lelah!"
        }
      },
      {
        id: 2,
        en: {
          question: "What special winter coat keeps the Queñua de Altura tree warm near freezing glaciers?",
          options: [
            "Layers of thin, papery bark and cozy moss around its roots",
            "A knitted wool scarf around every branch",
            "A glass dome built over the tree",
            "A hot bath of boiling water"
          ],
          answer: 0,
          explanation: "Spot on! The Queñua has peeling layers of papery bark that trap warm air like a puffy winter jacket, surviving high up in freezing frost!"
        },
        id_lang: {
          question: "Jaket musim dingin alami apa yang melindungi pohon Queñua de Altura dari hawa dingin membeku di pegunungan Andes?",
          options: [
            "Kulit batang tipis berlapis-lapis mirip kertas dan selimut lumut tebal di akarnya",
            "Syal wol rajutan hangat di setiap rantingnya",
            "Kubah kaca pelindung di atas seluruh pohon",
            "Bak air hangat mendidih di sekeliling batangnya"
          ],
          answer: 0,
          explanation: "Bagus sekali! Kulit batangnya mengelupas berlapis-lapis seperti kertas untuk memerangkap udara hangat seperti jaket tebal di udara beku!"
        }
      },
      {
        id: 3,
        en: {
          question: "How does the little Short-tailed Chinchilla stay warm on freezing Andean mountaintops?",
          options: [
            "It drinks hot tea every morning",
            "It wears thick rubber rain boots",
            "It has super dense, ultra-soft fur that keeps out chilly winds",
            "It sleeps inside warm caves made of ice"
          ],
          answer: 2,
          explanation: "Great job! Chinchillas have the densest and softest fur of any land mammal, keeping them cozy and warm on icy mountain rocks!"
        },
        id_lang: {
          question: "Bagaimana Chinchilla Ekor Pendek menjaga tubuhnya tetap hangat di puncak berbatu Andes yang dingin?",
          options: [
            "Meminum teh madu hangat setiap pagi",
            "Memakai sepatu bot karet tebal warna-warni",
            "Memiliki bulu yang sangat lebat dan luar biasa lembut untuk menahan angin beku",
            "Tidur di dalam iglo yang terbuat dari balok es"
          ],
          answer: 2,
          explanation: "Pintar! Chinchilla memiliki bulu paling lebat dan lembut di dunia yang melindunginya seperti mantel hangat di tengah hawa dingin pegunungan!"
        }
      },
      {
        id: 4,
        en: {
          question: "Why is South America's only bear called the Spectacled Bear?",
          options: [
            "It builds pairs of wooden spectacles for birds",
            "It wears glass goggles to swim in deep pools",
            "It has creamy yellow circles around its eyes that look like eyeglasses",
            "It reads books in the mountain library"
          ],
          answer: 2,
          explanation: "That's right! Light yellowish circles of fur around its eyes look just like a cute pair of eyeglasses (spectacles)!"
        },
        id_lang: {
          question: "Mengapa satu-satunya jenis beruang asli Amerika Selatan ini dinamakan Beruang Kacamata (Spectacled Bear)?",
          options: [
            "Karena membuat kacamata kayu untuk burung di hutan",
            "Karena suka memakai kacamata renang di dalam danau",
            "Karena memiliki lingkaran bulu kuning cerah di sekitar matanya yang mirip kacamata",
            "Karena suka membaca buku cerita di gua batu"
          ],
          answer: 2,
          explanation: "Tepat sekali! Lingkaran bulu berwarna kuning muda di sekeliling matanya tampak lucu persis seperti kacamata bulat!"
        }
      },
      {
        id: 5,
        en: {
          question: "What does SDG 15 remind us to do when extracting metals and lithium in the high Andes?",
          options: [
            "Leave big empty digging pits with no cleanup",
            "Protect precious mountain water and keep high-altitude wetland habitats safe",
            "Take away all rocks where bears and chinchillas sleep",
            "Turn off the sun over snowy peaks"
          ],
          answer: 1,
          explanation: "Super! SDG 15 reminds us to protect mountain wetlands, conserve freshwater, and take good care of high mountain animals and plants!"
        },
        id_lang: {
          question: "Apa pesan penting SDG 15 saat manusia menambang logam dan litium di pegunungan tinggi Andes?",
          options: [
            "Meninggalkan lubang galian raksasa tanpa dibersihkan kembali",
            "Melindungi sumber air pegunungan yang berharga dan menjaga kelestarian habitat satwa liar",
            "Membongkar seluruh bebatuan tempat tidur beruang dan chinchilla",
            "Memadamkan cahaya matahari di atas puncak salju"
          ],
          answer: 1,
          explanation: "Luar biasa! SDG 15 mengingatkan kita untuk menjaga kelestarian sumber air gunung, merawat lahan basah, dan menyayangi habitat satwa serta tumbuhan!"
        }
      }
    ]
  },

  // Fallback single quiz
  get quiz() {
    return this.countryQuizzes.haiti;
  },

  // ----------------------------------------------------
  // CERTIFICATE STATEMENTS PER COUNTRY (Issue 3)
  // ----------------------------------------------------
  certificateStatements: {
    haiti: {
      en: "For outstanding dedication in exploring the cloud forests of Haiti, defending the Hispaniolan Trogon and Solenodon against mining destruction, and protecting wildlife for SDG 15: Life on Land.",
      id: "Atas dedikasi luar biasa dalam menjelajahi hutan awan Haiti, melindungi Burung Trogon dan Solenodon dari kerusakan tambang, serta menjaga kehidupan satwa di darat untuk SDG 15."
    },
    suriname: {
      en: "For outstanding dedication in exploring the lush rainforests of Suriname, defending the Giant Otter and Cock-of-the-rock from river gold mining pollution, and protecting wildlife for SDG 15: Life on Land.",
      id: "Atas dedikasi luar biasa dalam menjelajahi hutan hujan Suriname, melindungi Berang-berang Raksasa dan Burung Cadas dari pencemaran tambang emas sungai, serta menjaga kehidupan satwa di darat untuk SDG 15."
    },
    bolivia: {
      en: "For outstanding dedication in exploring the high Andes of Bolivia, defending the Andean Condor and Queñua trees against open-pit mining roads, and protecting wildlife for SDG 15: Life on Land.",
      id: "Atas dedikasi luar biasa dalam menjelajahi pegunungan Andes Bolivia, melindungi Elang Kondor Andes dan Pohon Queñua dari pembukaan jalan tambang, serta menjaga kehidupan satwa di darat untuk SDG 15."
    }
  },

  // ----------------------------------------------------
  // 4 SOLUTIONS FOR LIFE ON LAND (SDG 15)
  // Normalized to "en" and "id"
  // ----------------------------------------------------
  solutions: {
    en: [
      {
        num: "1",
        icon: "🏞️",
        title: "Stop Digging in National Parks",
        text: "Keep giant bulldozers, metal mines, and rock quarries completely away from protected nature parks where rare animals sleep and nest."
      },
      {
        num: "2",
        icon: "🌳",
        title: "Leave Plenty of Tall Connected Trees",
        text: "Keep large areas of the forest connected with tree canopies so eagles, wildcats (like the margay), and birds can travel safely without touching the ground."
      },
      {
        num: "3",
        icon: "🌊",
        title: "Keep Rivers Clean & Ban Mercury",
        text: "Stop dumping toxic mercury and turn off loud suction dredges in river gold mining, so freshwater stays clean and quiet for pink river dolphins and fish."
      },
      {
        num: "4",
        icon: "🧗",
        title: "Protect Nesting Cliffs from Dynamite",
        text: "Ban dynamite blasting near rocky river canyons and caves where rare macaws lay eggs and golden cacti cling to the cliff walls."
      }
    ],
    id: [
      {
        num: "1",
        icon: "🏞️",
        title: "Hentikan Tambang di Taman Nasional",
        text: "Jauhkan alat berat, tambang logam, dan pengerukan batu kapur dari cagar alam dan taman nasional tempat hewan langka beristirahat dan bersarang."
      },
      {
        num: "2",
        icon: "🌳",
        title: "Pertahankan Koridor Pohon Tinggi",
        text: "Jaga agar tajuk pohon hutan tetap terhubung sehingga elang, kucing hutan (margay), dan burung dapat menjelajah dengan aman tanpa harus turun ke tanah."
      },
      {
        num: "3",
        icon: "🌊",
        title: "Jaga Kebersihan Sungai & Larang Merkuri",
        text: "Hentikan pemakaian cairan merkuri beracun dan kapal penyedot bising dalam tambang emas sungai agar air tetap jernih dan aman bagi lumba-lumba merah muda."
      },
      {
        num: "4",
        icon: "🧗",
        title: "Lindungi Tebing Sarang dari Ledakan Dinamit",
        text: "Larang penggunaan dinamit di dekat ngarai terjal dan gua batu tempat burung makaw bertelur serta kaktus emas bertumbuh."
      }
    ]
  },

  // ----------------------------------------------------
  // BUKU HALUS HELPER: SENTENCE BUILDER WORD BANKS
  // Kids Grade 2 "Try First" Mode
  // ----------------------------------------------------
  notebookStarters: {
    country: {
      en: [
        {
          qNum: "01",
          starter: "is located on",
          words: ["Haiti", "Suriname", "Bolivia", "in South America", "in the Caribbean Sea", "on Hispaniola island", "near the mountains"]
        },
        {
          qNum: "02",
          starter: "The capital city is",
          words: ["Port-au-Prince", "Paramaribo", "Sucre and La Paz", "a beautiful city", "with many people"]
        },
        {
          qNum: "03",
          starter: "People there speak",
          words: ["French and Haitian Creole", "Dutch and Javanese", "Spanish and Quechua", "together with pride"]
        },
        {
          qNum: "04",
          starter: "Two interesting facts are",
          words: ["ancient animals live here", "it gained independence in 1804", "over 90% is lush rainforest", "it has the giant salt flat", "people still speak Javanese"]
        },
        {
          qNum: "05",
          starter: "What makes it unique is",
          words: ["its high cloud mountains", "its giant granite rock hills", "its snowy mountains and pink dolphins", "its rare wild animals"]
        }
      ],
      id: [
        {
          qNum: "01",
          starter: "terletak di",
          words: ["Negara Haiti", "Negara Suriname", "Negara Bolivia", "Laut Karibia", "Amerika Selatan", "Pulau Hispaniola", "pegunungan megah"]
        },
        {
          qNum: "02",
          starter: "Ibu kotanya adalah",
          words: ["Port-au-Prince", "Paramaribo", "Sucre dan La Paz", "kota yang indah", "pusat pemerintahan"]
        },
        {
          qNum: "03",
          starter: "Bahasa yang digunakan adalah",
          words: ["Bahasa Prancis dan Kreol", "Bahasa Belanda dan Jawa", "Bahasa Spanyol dan Quechua", "oleh masyarakatnya"]
        },
        {
          qNum: "04",
          starter: "Dua fakta menariknya adalah",
          words: ["memiliki hewan purba solenodon", "merdeka sejak tahun 1804", "negaranya paling hijau di dunia", "memiliki padang garam raksasa", "ada suku Jawa di sana"]
        },
        {
          qNum: "05",
          starter: "Yang membuat negara ini unik adalah",
          words: ["pegunungan awan yang tinggi", "bukit batu granit di tengah hutan", "salju beku hingga hutan Amazon", "satwa langka yang mempesona"]
        }
      ]
    },
    organism: {
      en: [
        {
          qNum: "01",
          starter: "lives in",
          words: ["in mountain forests", "high in the treetops", "in freshwater rivers", "on steep rocky cliffs", "in sunny savannas"]
        },
        {
          qNum: "02",
          starter: "Its special feature is",
          words: ["its bright colorful feathers", "its strong climbing paws", "its pink flexible neck", "its golden protective thorns", "its warm layered bark"]
        },
        {
          qNum: "03",
          starter: "To survive, it",
          words: ["eats forest fruits and nuts", "sleeps inside cozy nests", "uses echolocation for fish", "stores water inside thick stems", "keeps roots warm under moss"]
        },
        {
          qNum: "04",
          starter: "It is threatened because",
          words: ["mining machines scrape away trees", "open dirt roads cut through forests", "toxic mercury poisons river water", "dynamite cracks nesting cliffs"]
        },
        {
          qNum: "05",
          starter: "We can protect it by",
          words: ["stopping mining in parks", "leaving tall connected trees", "banning toxic mercury in rivers", "protecting rocky cliff homes"]
        }
      ],
      id: [
        {
          qNum: "01",
          starter: "hidup di",
          words: ["hutan pegunungan berkabut", "tajuk pohon yang tinggi", "aliran sungai air tawar", "dinding tebing batu terjal", "padang rumput sabana"]
        },
        {
          qNum: "02",
          starter: "Ciri khas utamanya adalah",
          words: ["bulu berwarna cerah indah", "kaki lincah memanjat", "leher lentur berwarna merah muda", "duri emas penyimpan air", "kulit batang berlapis jaket"]
        },
        {
          qNum: "03",
          starter: "Untuk bertahan hidup, mereka",
          words: ["memakan buah dan biji hutan", "bersarang di rongga kayu lapuk", "memakai pantulan suara untuk berburu", "menyimpan air di batang tebal", "menghangatkan akar di bawah lumut"]
        },
        {
          qNum: "04",
          starter: "Mereka terancam punah karena",
          words: ["tambang menebang pohon sarang", "jalan tambang memutus hutan", "limbah merkuri meracuni air", "ledakan dinamit meruntuhkan tebing"]
        },
        {
          qNum: "05",
          starter: "Kita dapat melindunginya dengan",
          words: ["menghentikan tambang di cagar alam", "menjaga pohon tinggi tetap terhubung", "melarang merkuri di aliran sungai", "menjaga tebing sarang satwa"]
        }
      ]
    }
  }
};

// Compatibility aliases for language lookups
APP_DATA.general.id = APP_DATA.general.id_lang;
APP_DATA.sdgConcepts.id = APP_DATA.sdgConcepts.id_lang;
if (APP_DATA.solutions && APP_DATA.solutions.id_lang) {
  APP_DATA.solutions.id = APP_DATA.solutions.id_lang;
} else if (APP_DATA.solutions && APP_DATA.solutions.id) {
  APP_DATA.solutions.id_lang = APP_DATA.solutions.id;
}
if (APP_DATA.notebookStarters) {
  if (APP_DATA.notebookStarters.country) {
    APP_DATA.notebookStarters.country.id = APP_DATA.notebookStarters.country.id_lang || APP_DATA.notebookStarters.country.id;
  }
  if (APP_DATA.notebookStarters.organism) {
    APP_DATA.notebookStarters.organism.id = APP_DATA.notebookStarters.organism.id_lang || APP_DATA.notebookStarters.organism.id;
  }
}

// Attach country quizzes directly to country objects
if (APP_DATA.countries && APP_DATA.countryQuizzes) {
  APP_DATA.countries.forEach(c => {
    if (APP_DATA.countryQuizzes[c.id]) {
      c.quiz = APP_DATA.countryQuizzes[c.id];
    }
  });
}

// Ensure global window exposure for browser scripts
if (typeof window !== 'undefined') {
  window.APP_DATA = APP_DATA;
}


