// ==========================================
// ECO-EXPLORERS: GRADE 2 LITERATURE DAY 2026
// Complete Bilingual Data (English & Bahasa Indonesia)
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
      filterAll: "🌟 All (6)",
      filterAnimals: "🐾 Animals (3)",
      filterPlants: "🌿 Plants (3)",
      readAloud: "Listen",
      stopAudio: "Stop",
      zoomPhoto: "View Photo",
      closeModal: "Close",
      threatsTitle: "What is Threatening Nature Here?",
      countryProfileTitle: "Country Classroom Dossier",
      watchVideoBtn: "Watch Class Video",
      notebookHelperTitle: "📝 Buku Halus Writing Helper",
      notebookHelperDesc: "Practice answering your teacher's questions and combine them into complete paragraphs for your fine writing book!",
      selectCountryLabel: "1. Select Your Class & Country:",
      selectOrganismLabel: "2. Select an Animal or Plant to Describe:",
      tabCountryQuestions: "Country Questions (01 - 05)",
      tabOrganismQuestions: "Animal / Plant Questions (01 - 05)",
      copyParagraphBtn: "📋 Copy Paragraph",
      copiedAlert: "Copied to clipboard! Now write it nicely in your Buku Halus!",
      printWorksheetBtn: "🖨️ Print Worksheet",
      quizTitle: "🎮 Junior Explorer Quiz",
      quizSubhead: "Test what you learned about animals, plants, and mining!",
      scoreLabel: "Score:",
      restartQuiz: "Play Again 🔄",
      solutionsTitle: "🛡️ 4 Ways We Can Protect Animals & Plants",
      solutionsSubhead: "Action steps from our Science & English lessons to support SDG 15 (Life on Land)",
      footerCredit: "Prepared for Grade 2 Literature Day • Bulan Bahasa 2026 • SDG 15: Life on Land"
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
      filterAll: "🌟 Semua (6)",
      filterAnimals: "🐾 Hewan (3)",
      filterPlants: "🌿 Tumbuhan (3)",
      readAloud: "Dengarkan",
      stopAudio: "Berhenti",
      zoomPhoto: "Lihat Foto",
      closeModal: "Tutup",
      threatsTitle: "Apa Ancaman Alam di Negara Ini?",
      countryProfileTitle: "Profil Negara untuk Kelas",
      watchVideoBtn: "Tonton Video Kelas",
      notebookHelperTitle: "📝 Panduan Menulis Buku Halus",
      notebookHelperDesc: "Latihan menjawab pertanyaan guru dan gabungkan menjadi satu paragraf rapi untuk ditulis di buku halusmu!",
      selectCountryLabel: "1. Pilih Kelas & Negaramu:",
      selectOrganismLabel: "2. Pilih Hewan atau Tumbuhan yang Ingin Diceritakan:",
      tabCountryQuestions: "Pertanyaan Negara (01 - 05)",
      tabOrganismQuestions: "Pertanyaan Hewan & Tumbuhan (01 - 05)",
      copyParagraphBtn: "📋 Salin Paragraf",
      copiedAlert: "Berhasil disalin! Sekarang tulis dengan tulisan tegak bersambung di Buku Halusmu ya!",
      printWorksheetBtn: "🖨️ Cetak Lembar Latihan",
      quizTitle: "🎮 Kuis Petualang Cilik",
      quizSubhead: "Uji pengetahuanmu tentang hewan, tumbuhan, dan dampak penambangan!",
      scoreLabel: "Nilai:",
      restartQuiz: "Main Lagi 🔄",
      solutionsTitle: "🛡️ 4 Cara Kita Melindungi Hewan & Tumbuhan",
      solutionsSubhead: "Langkah nyata dari pelajaran Science & English untuk mendukung SDG 15 (Kehidupan di Darat)",
      footerCredit: "Disiapkan khusus untuk Literature Day Kelas 2 • Bulan Bahasa 2026 • SDG 15: Ekosistem Darat"
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
      videoUrl: "https://www.youtube.com/watch?v=EGhtv4UnxkA",
      videoThumb: "assets/images/video_thumbnails/haiti_video.png",
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
          image: "assets/images/haiti/hispaniolan_trogon.jpg",
          scientificName: "Priotelus roseigaster",
          en: {
            name: "Hispaniolan Trogon",
            typeLabel: "🐾 Bird (Animal)",
            habitat: "Mountain pine forests and misty cloud forests in Haiti.",
            uniqueFeature: "It has a shimmering metallic green back and a bright crimson-red belly! It is the national bird of Haiti.",
            howItSurvives: "It eats wild fruits, berries, and large insects like cicadas. Because its beak is gentle, it cannot carve hard new wood — it must find soft, dead tree trunks ('snags') to build nest holes.",
            whyThreatened: "When mines and logging roads clear the mountain forest, dead trees are knocked down first. Trogons are also afraid to fly across big, wide, barren mining pits, so they get trapped and cannot find enough fruit for their babies."
          },
          id_lang: {
            name: "Burung Trogon Hispaniola",
            typeLabel: "🐾 Burung (Hewan)",
            habitat: "Hutan pinus pegunungan dan hutan awan berkabut di Haiti.",
            uniqueFeature: "Punggungnya berwarna hijau berkilau seperti zamrud dan perutnya berwarna merah menyala! Burung ini adalah burung nasional negara Haiti.",
            howItSurvives: "Memakan buah-buahan hutan, buah beri, dan serangga. Burung ini tidak bisa melubangi kayu keras, jadi ia harus mencari batang pohon mati yang sudah lunak untuk membuat lubang sarang bertelur.",
            whyThreatened: "Saat tambang dan jalan membuka hutan, pohon-pohon mati ditebang dan dibuang. Burung trogon juga takut terbang melewati lubang tambang terbuka yang gundul dan lebar, sehingga tidak bisa mencari makan untuk anak-anaknya."
          }
        },
        {
          id: "least_pauraque",
          type: "animal",
          image: "assets/images/haiti/least_pauraque.jpg",
          scientificName: "Siphonorhis brewsteri",
          en: {
            name: "Least Pauraque",
            typeLabel: "🐾 Bird (Animal)",
            habitat: "Dry scrublands and rocky limestone forests on the ground.",
            uniqueFeature: "Master of camouflage! Its brown mottled feathers look exactly like dry leaves and limestone rocks, making it nearly invisible when sleeping on the forest floor.",
            howItSurvives: "It rests quietly on the ground all day and flies out at dusk to catch flying beetles and moths with its wide mouth.",
            whyThreatened: "Limestone quarries dig up rocks and crush the ground to make cement. Big excavators scrape away all leaves and rocks down to flat stone, leaving this ground-nesting bird with zero hiding spots to protect its eggs."
          },
          id_lang: {
            name: "Burung Pauraque Kerdil",
            typeLabel: "🐾 Burung (Hewan)",
            habitat: "Semak belukar kering dan lantai hutan berbatu kapur.",
            uniqueFeature: "Ahli menyamar (kamuflase)! Bulu cokelatnya bermotif persis daun kering dan bebatuan, sehingga musuh tidak bisa melihatnya saat ia tidur di atas tanah.",
            howItSurvives: "Beristirahat diam di permukaan tanah sepanjang siang, lalu terbang di malam hari untuk menangkap ngengat dan kumbang dengan paruhnya yang terbuka lebar.",
            whyThreatened: "Pekerja tambang batu kapur mengeruk batu untuk pabrik semen. Buldoser mengupas permukaan tanah hingga menjadi batu telanjang, sehingga burung ini tidak memiliki tempat lagi untuk menyembunyikan telur dan serangga makanannya lenyap."
          }
        },
        {
          id: "hispaniolan_solenodon",
          type: "animal",
          image: "assets/images/haiti/hispaniolan_solenodon.jpg",
          scientificName: "Solenodon paradoxus",
          en: {
            name: "Hispaniolan Solenodon",
            typeLabel: "🐾 Mammal (Animal)",
            habitat: "Dense forests with moist soil, deep caves, and rock piles.",
            uniqueFeature: "It looks like a giant shrew with a long, flexible, wiggly nose, and it is one of the only venomous mammals on Earth! Its teeth deliver venom to slow down insects.",
            howItSurvives: "It sleeps in long underground tunnels during the day. At night, it wiggles its flexible snout through moist dirt to sniff out crickets, grubs, and centipedes.",
            whyThreatened: "Heavy mining bulldozers roll over the ground and crush underground tunnel systems, trapping solenodons inside. Mining strips away moist leaf litter, while new mine roads bring stray dogs that hunt this slow-moving creature."
          },
          id_lang: {
            name: "Solenodon Hispaniola",
            typeLabel: "🐾 Mamalia (Hewan)",
            habitat: "Hutan lebat dengan tanah lembap, gua kapur, dan celah bebatuan.",
            uniqueFeature: "Bentuknya mirip celurut besar dengan hidung panjang yang bisa bergoyang fleksibel! Hewan ini adalah salah satu dari sedikit mamalia berbisa di dunia.",
            howItSurvives: "Tidur di dalam lorong terowongan bawah tanah di siang hari. Pada malam hari, hidungnya yang lentur mengendus tanah gembur untuk berburu jangkrik dan cacing.",
            whyThreatened: "Buldoser tambang yang berat meratakan tanah dan menghancurkan terowongan bawah tanah, mengurung solenodon di dalamnya. Tambang juga membuat tanah mengering, dan jalan tambang membawa anjing liar yang memangsa solenodon."
          }
        },
        {
          id: "cherry_palm",
          type: "plant",
          image: "assets/images/haiti/cherry_palm.jpg",
          scientificName: "Pseudophoenix ekmanii",
          en: {
            name: "Oviedo's Cherry Palm",
            typeLabel: "🌿 Palm Tree (Plant)",
            habitat: "Harsh, rocky limestone plateaus near the coast.",
            uniqueFeature: "It has a swollen, pot-bellied trunk that stores water during dry seasons! It grows extremely slowly on solid limestone rock.",
            howItSurvives: "It wedges its roots tightly into small cracks and crevices in limestone rocks to capture moisture and nutrients.",
            whyThreatened: "Limestone quarries smash mature palms with heavy excavators and blast away the rocky pockets where baby palm seeds sprout, leaving no new saplings to replace old trees."
          },
          id_lang: {
            name: "Palem Ceri Oviedo",
            typeLabel: "🌿 Pohon Palem (Tumbuhan)",
            habitat: "Tebing dan dataran tinggi berbatu kapur keras di dekat pantai.",
            uniqueFeature: "Batangnya unik menggembung bulat seperti kendi atau perut buncit untuk menyimpan cadangan air! Pohon ini tumbuh sangat lambat di atas batu karang.",
            howItSurvives: "Menyusupkan akar-akarnya ke celah-celah kecil bebatuan kapur untuk menyerap sedikit air dan mineral.",
            whyThreatened: "Alat pengeruk tambang batu menghancurkan pohon palem dewasa dan merusak celah-celah batu tempat benih kecil tumbuh, sehingga pohon baru tidak bisa bertunas lagi."
          }
        },
        {
          id: "bayahibe_rose",
          type: "plant",
          image: "assets/images/haiti/bayahibe_rose.jpg",
          scientificName: "Leuenbergeria quisqueyana",
          en: {
            name: "Bayahibe Rose",
            typeLabel: "🌿 Cactus (Plant)",
            habitat: "Dry coastal rocky limestone areas.",
            uniqueFeature: "Even though it is technically a cactus, it has real, glossy green leaves and blooms with stunning bright pink flowers with delicate petals!",
            howItSurvives: "It has spiny branches and thick leaves that allow it to survive fierce Caribbean heat and droughts.",
            whyThreatened: "It only survives in a few small rocky spots. Road building machines, rock digging, and dynamite blasting scrape away the stony cliffs where it clings."
          },
          id_lang: {
            name: "Mawar Bayahibe",
            typeLabel: "🌿 Kaktus Berbunga (Tumbuhan)",
            habitat: "Daerah bebatuan kapur kering di dekat pantai.",
            uniqueFeature: "Walaupun sebenarnya termasuk keluarga kaktus, ia memiliki daun hijau asli yang lebar dan bunga berwarna merah muda (pink) yang sangat cantik!",
            howItSurvives: "Batangnya berduri dan daunnya tebal sehingga mampu menahan panas terik matahari pesisir Karibia tanpa cepat layu.",
            whyThreatened: "Populasinya sangat sedikit. Mesin pengeruk jalan dan peledakan batu kapur mengikis habis tanah berbatu tempat tanaman langka ini menempel."
          }
        },
        {
          id: "hispaniolan_pine",
          type: "plant",
          image: "assets/images/haiti/hispaniolan_pine.jpg",
          scientificName: "Pinus occidentalis",
          en: {
            name: "Hispaniolan Pine",
            typeLabel: "🌿 Pine Tree (Plant)",
            habitat: "High, chilly mountain slopes and ridges.",
            uniqueFeature: "A majestic mountain conifer that can grow in chilly temperatures and thin mountain air, forming the backbone of the island's mountain forests.",
            howItSurvives: "Its roots partner with special subterranean mushrooms (mycorrhizae) that help the tree gather nutrients from poor rocky soil.",
            whyThreatened: "Open-pit strip mines scrape off the entire layer of topsoil down to bedrock. Without soil and the helpful mushrooms, young pine seeds cannot grow back."
          },
          id_lang: {
            name: "Pinus Hispaniola",
            typeLabel: "🌿 Pohon Pinus (Tumbuhan)",
            habitat: "Lereng pegunungan tinggi yang berhawa dingin dan berkabut.",
            uniqueFeature: "Pohon pinus pegunungan yang sangat tinggi dan kokoh, mampu bertahan di udara dingin pegunungan Karibia.",
            howItSurvives: "Akarnya bersahabat dengan jamur hutan mikoriza di dalam tanah yang membantunya menyerap makanan dan air dari tanah berbatu.",
            whyThreatened: "Tambang terbuka mengikis habis seluruh lapisan tanah subur. Tanpa tanah dan jamur pelindung, tunas pinus yang baru tidak bisa tumbuh kembali."
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
      videoUrl: "https://www.youtube.com/watch?v=YckyTV4V2FE",
      videoThumb: "assets/images/video_thumbnails/suriname_video.jpg",
      videoTitle: {
        en: "Class 2B Video: Suriname - The Javanese Sister Country in South America!",
        id: "Video Kelas 2B: Keturunan Asli Suku Jawa di Benua Amerika! Fakta Suriname"
      },
      en: {
        name: "Suriname",
        location: "Northeast coast of South America, bordered by French Guiana, Guyana, and Brazil.",
        capital: "Paramaribo",
        languages: "Dutch (official), Sranan Tongo, Javanese, Sarnami Hindustani, English",
        interestingFacts: [
          "Suriname is the greenest country on Earth — over 90% of its land is covered by dense rainforest!",
          "Suriname has a huge population of Javanese people who moved from Indonesia over 100 years ago and still speak Javanese today!"
        ],
        uniqueness: "Suriname connects South America with Indonesian culture! You can hear Javanese spoken on the streets of Paramaribo and eat delicious Saoto soup right beside the Amazon rainforest.",
        miningThreatsSummary: "Gold mining boats (dredges) use high-pressure water cannons that wash away riverbanks. Miners cut wide roads through the trees and use mercury, while rock blasting destroys steep mountain caves and nests.",
        combinedParagraph: "Suriname is located on the northeastern coast of South America, and its capital city is Paramaribo. The official language is Dutch, but many people also speak Sranan Tongo and Javanese. Two interesting facts about Suriname are that more than 90% of its land is covered by rainforest and it is home to many Javanese people from Indonesia. What makes Suriname unique is its amazing mix of Amazonian wildlife and Indonesian cultural heritage."
      },
      id_lang: {
        name: "Suriname",
        location: "Pesisir timur laut Benua Amerika Selatan, di antara Guyana, Guyana Prancis, dan Brasil.",
        capital: "Paramaribo",
        languages: "Bahasa Belanda (resmi), Sranan Tongo, Bahasa Jawa, Hindustani, Inggris",
        interestingFacts: [
          "Suriname adalah negara terhijau di dunia karena lebih dari 90% wilayahnya masih tertutup hutan hujan lebat!",
          "Banyak penduduk Suriname adalah keturunan suku Jawa dari Indonesia yang merantau seabad lalu dan masih fasih berbahasa Jawa!"
        ],
        uniqueness: "Suriname adalah 'saudara jauh' Indonesia di Benua Amerika! Di sana kita bisa mendengar bahasa Jawa, melihat wayang, dan makan soto saoto di tepi hutan hujan Amazon.",
        miningThreatsSummary: "Kapal tambang emas menyemprotkan air bertekanan tinggi yang meruntuhkan tebing sungai. Tambang membuka jalan tanah lebar yang membelah kanopi hutan, serta dinamit menghancurkan tebing sarang burung.",
        combinedParagraph: "Negara Suriname terletak di bagian timur laut Benua Amerika Selatan, dan ibukotanya adalah Paramaribo. Bahasa resmi yang digunakan adalah Bahasa Belanda, serta banyak masyarakatnya menggunakan Bahasa Sranan Tongo dan Bahasa Jawa. Dua fakta menarik tentang Suriname adalah lebih dari 90% wilayahnya berupa hutan hujan lebat dan memiliki banyak warga keturunan suku Jawa dari Indonesia. Yang membuat Suriname unik adalah hubungan budayanya yang sangat dekat dengan Indonesia di tengah kekayaan alam Amazon."
      },
      organisms: [
        {
          id: "harpy_eagle",
          type: "animal",
          image: "assets/images/suriname/harpy_eagle.jpg",
          scientificName: "Harpia harpyja",
          en: {
            name: "Harpy Eagle",
            typeLabel: "🐾 Bird of Prey (Animal)",
            habitat: "Canopy of giant emergent trees in dense Amazonian rainforests.",
            uniqueFeature: "One of the biggest and most powerful eagles on the planet! Its talons (claws) are as large as the claws of a grizzly bear, and it has an expressive double feather crest.",
            howItSurvives: "It flies silently through the high treetops to hunt tree-dwelling sloths and monkeys, bringing food back to its massive tree nest.",
            whyThreatened: "When loggers and miners cut down more than half the tall trees, sloths and monkeys vanish. Mother and father eagles cannot find enough food, and their fluffy baby chick starves in the nest."
          },
          id_lang: {
            name: "Elang Harpy",
            typeLabel: "🐾 Burung Pemangsa (Hewan)",
            habitat: "Tajuk pohon raksasa tertinggi di hutan hujan Amazon Suriname.",
            uniqueFeature: "Salah satu elang terbesar dan terkuat di muka bumi! Cakarnya sebesar cakar beruang grizzly dan memiliki jambul bulu ganda yang gagah di kepalanya.",
            howItSurvives: "Terbang lincah di antara rimbunnya dedaunan tinggi untuk berburu kukang (sloth) dan monyet, lalu membawanya pulang ke sarang ranting raksasa.",
            whyThreatened: "Ketika penebang dan penambang menebang lebih dari separuh pohon tinggi, monyet dan kukang menghilang. Induk elang kesulitan mencari mangsa, sehingga anak elang bisa mati kelaparan di sarangnya."
          }
        },
        {
          id: "cock_of_the_rock",
          type: "animal",
          image: "assets/images/suriname/cock_of_the_rock.jpg",
          scientificName: "Rupicola rupicola",
          en: {
            name: "Guianan Cock-of-the-Rock",
            typeLabel: "🐾 Bird (Animal)",
            habitat: "Rocky forested hills, granite boulders, and mountain caves.",
            uniqueFeature: "The male bird is blazing bright neon orange with a magnificent fan-shaped crest that completely covers its beak! Groups of males clear dancing arenas on the forest floor.",
            howItSurvives: "It feeds on wild forest fruits and builds sturdy mud nests on steep rock cliffs and cave walls sheltered from rain.",
            whyThreatened: "Quarry companies blast rocks with dynamite to get stone for roads, shattering nesting cliffs into pieces. The deafening explosions also scare birds away from their traditional dancing grounds."
          },
          id_lang: {
            name: "Burung Cock-of-the-Rock Guiana",
            typeLabel: "🐾 Burung (Hewan)",
            habitat: "Perbukitan hutan berbatu dan dinding gua pegunungan.",
            uniqueFeature: "Burung jantan memiliki bulu oranye terang menyala dengan jambul setengah lingkaran seperti kipas yang menutupi paruhnya! Para pejantan berkumpul untuk menari memikat betina.",
            howItSurvives: "Memakan buah-buahan hutan dan membangun sarang dari lumpur di dinding tebing curam dan gua yang terlindung dari hujan.",
            whyThreatened: "Perusahaan batu meledakkan tebing menggunakan dinamit untuk mengambil batu jalan. Ledakan keras menghancurkan dinding sarang lumpur dan suara bising menakuti burung dari arena menarinya."
          }
        },
        {
          id: "margay",
          type: "animal",
          image: "assets/images/suriname/margay.png",
          scientificName: "Leopardus wiedii",
          en: {
            name: "Margay (Tree Ocelot)",
            typeLabel: "🐾 Wildcat (Animal)",
            habitat: "Thick canopy of humid tropical rainforests.",
            uniqueFeature: "A tree acrobat! It has super flexible ankles that can rotate 180 degrees backwards, allowing it to run straight down vertical tree trunks headfirst like a squirrel!",
            howItSurvives: "It spends almost its entire life in high tree branches, leaping between vines to hunt small rodents, tree frogs, and birds.",
            whyThreatened: "When mines bulldoze wide dirt roads through the forest, the margay is too afraid to step onto open ground to cross. Families of cats become trapped in tiny tree patches where food quickly runs out."
          },
          id_lang: {
            name: "Kucing Margay",
            typeLabel: "🐾 Kucing Hutan (Hewan)",
            habitat: "Cabang dan ranting tinggi di kanopi hutan hujan lebat.",
            uniqueFeature: "Pesulap pohon sejati! Sendi pergelangan kakinya dapat berputar 180 derajat ke belakang, memungkinkannya berlari menuruni batang pohon dengan kepala menghadap ke bawah seperti tupai!",
            howItSurvives: "Menghabiskan hampir seluruh hidupnya di atas pohon, melompat dari dahan ke dahan untuk berburu burung dan katak pohon di malam hari.",
            whyThreatened: "Ketika tambang membuat jalan tanah yang sangat lebar, margay takut menyentuh tanah terbuka untuk menyeberang. Keluarga kucing terkurung di petak pohon kecil dan kelaparan."
          }
        },
        {
          id: "clump_wallaba",
          type: "plant",
          image: "assets/images/suriname/clump_wallaba.jpg",
          scientificName: "Dicymbe corymbosa",
          en: {
            name: "Clump Wallaba",
            typeLabel: "🌿 Hardwood Tree (Plant)",
            habitat: "White sand forests in the Guiana Shield.",
            uniqueFeature: "A massive hardwood tree that grows tightly clustered together in dense groves on white sand soils where few other trees can survive.",
            howItSurvives: "It sprouts multiple trunks and relies on special underground fungi that recycle leaf nutrients directly back into its roots.",
            whyThreatened: "When strip mines and loggers clear-cut these groves, the fierce tropical sun bakes the bare white sand, drying out and killing the delicate soil fungi that young saplings need to live."
          },
          id_lang: {
            name: "Pohon Clump Wallaba",
            typeLabel: "🌿 Pohon Kayu Keras (Tumbuhan)",
            habitat: "Hutan berpasir putih di kawasan Perisai Guiana.",
            uniqueFeature: "Pohon kayu keras raksasa yang tumbuh bergerombol rapat di tanah pasir putih yang miskin hara, tempat di mana pohon lain sulit tumbuh.",
            howItSurvives: "Tumbuh dengan banyak cabang batang kokoh dan dibantu oleh jamur tanah khusus yang mendaur ulang daun gugur menjadi pupuk alami.",
            whyThreatened: "Saat tambang menebang hutan ini, terik matahari membakar pasir putih yang gundul. Ini membunuh jamur tanah yang sangat dibutuhkan oleh bibit pohon muda untuk bertahan hidup."
          }
        },
        {
          id: "marsh_pitcher_plant",
          type: "plant",
          image: "assets/images/suriname/marsh_pitcher_plant.jpg",
          scientificName: "Heliamphora nutans",
          en: {
            name: "Marsh Pitcher Plant",
            typeLabel: "🌿 Carnivorous Plant",
            habitat: "Wet, spongy moss on high, foggy mountain plateaus (tepuis).",
            uniqueFeature: "A bug-eating pitcher! Its leaves form a tall green and red cup that fills with rainwater to trap insects and digest them for extra food.",
            howItSurvives: "Because mountain rocks have very little soil food, it gets its vitamins by catching falling bugs in its water cups.",
            whyThreatened: "When miners dig for diamonds and gold in highland mountain plateaus, they scrape away the spongy wet moss and dig ditches that divert streams, causing these delicate pitcher cups to dry out and die."
          },
          id_lang: {
            name: "Kantong Semar Rawa Pegunungan",
            typeLabel: "🌿 Tanaman Pemakan Serangga",
            habitat: "Lumut basah di puncak dataran tinggi pegunungan berkabut (tepui).",
            uniqueFeature: "Tanaman karnivora! Daunnya membentuk corong atau cangkir merah-kehijauan yang menampung air hujan untuk menjebak dan mencerna serangga.",
            howItSurvives: "Karena tanah puncak gunung sangat miskin nutrisi, tanaman ini mendapatkan makanan tambahan dengan menangkap serangga yang terpeleset ke dalam cangkirnya.",
            whyThreatened: "Ketika penambang menggali intan dan emas di puncak gunung, mereka mengikis lapisan lumut basah dan mengubah aliran air, membuat tanaman ini mengering dan mati."
          }
        },
        {
          id: "sand_baromalli",
          type: "plant",
          image: "assets/images/suriname/sand_baromalli.jpg",
          scientificName: "Catostemma fragrans",
          en: {
            name: "Sand Baromalli",
            typeLabel: "🌿 Riverbank Tree (Plant)",
            habitat: "Moist sandy riverbanks and floodplains.",
            uniqueFeature: "A tall river guardian tree with an expansive underground root network that anchors riverbanks firmly in place, stopping soil erosion.",
            howItSurvives: "It absorbs water through deep roots and provides shade for river fish and freshwater creatures.",
            whyThreatened: "Gold mining boats use powerful hydraulic water pumps and suction dredges to suck up riverbed dirt. The strong water jets wash away the soil under the roots, causing the riverbank to collapse into the river."
          },
          id_lang: {
            name: "Pohon Baromalli Pasir",
            typeLabel: "🌿 Pohon Tepi Sungai (Tumbuhan)",
            habitat: "Tepian sungai berpasir dan dataran banjir hutan hujan.",
            uniqueFeature: "Pohon penjaga tepi sungai yang sangat tinggi! Akarnya mencengkeram tanah tepian sungai dengan kuat agar tidak mudah longsor terkikis arus.",
            howItSurvives: "Menyerap kelembapan tepi sungai dan kanopinya memberikan naungan sejuk bagi ikan dan makhluk air tawar di bawahnya.",
            whyThreatened: "Mesin kapal tambang emas menyemprotkan air bertekanan dahsyat untuk menyedot lumpur dasar sungai. Ini mengikis tanah di bawah akar pohon, menyebabkan tebing sungai runtuh ke dalam air."
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
      videoUrl: "https://www.youtube.com/watch?v=9ZK2TWFTbps",
      videoThumb: "assets/images/video_thumbnails/bolivia_video.png",
      videoTitle: {
        en: "Class 2C Video: Bolivia - Facts about Bolivia (Kids Friendly)",
        id: "Video Kelas 2C: Fakta Menarik Bolivia untuk Anak-anak (The Edutainers PR)"
      },
      en: {
        name: "Bolivia",
        location: "Heart of South America, surrounded by Brazil, Peru, Chile, Argentina, and Paraguay (landlocked).",
        capital: "Sucre (constitutional capital) and La Paz (seat of government)",
        languages: "Spanish, Quechua, Aymara, Guaraní, and over 30 indigenous languages!",
        interestingFacts: [
          "Bolivia is home to Salar de Uyuni, the world's largest salt flat, which looks like a giant mirror of the sky!",
          "La Paz is the highest capital city in the world, over 3,600 meters above sea level in the Andes Mountains!"
        ],
        uniqueness: "Bolivia has incredible landscapes from freezing, snow-capped Andean volcanoes to warm, winding Amazonian rivers and dramatic dry canyons.",
        miningThreatsSummary: "Gold dredging boats make rivers loud, muddy, and release poisonous mercury that sickens dolphins. Canyon road blasting shatters macaw cliff nests, and mountain mines freeze the roots of ancient dwarf trees.",
        combinedParagraph: "Bolivia is located in central South America, and its capitals are Sucre and La Paz. The people speak Spanish along with indigenous languages like Quechua and Aymara. Two interesting facts about Bolivia are that it has the world's biggest salt flat at Salar de Uyuni and the highest administrative capital in the world. What makes Bolivia unique is its dramatic geography ranging from freezing Andean peaks to winding tropical rivers with rare pink dolphins."
      },
      id_lang: {
        name: "Bolivia",
        location: "Bagian tengah Benua Amerika Selatan, dikelilingi Brasil, Peru, Chili, Argentina, dan Paraguay.",
        capital: "Sucre (ibukota konstitusional) dan La Paz (pusat pemerintahan)",
        languages: "Bahasa Spanyol, Quechua, Aymara, Guaraní, dan lebih dari 30 bahasa daerah!",
        interestingFacts: [
          "Bolivia memiliki Salar de Uyuni, padang garam terbesar di dunia yang terlihat seperti cermin raksasa raksasa pemantul langit!",
          "Kota La Paz adalah ibukota pemerintahan tertinggi di dunia, berada di ketinggian lebih dari 3.600 meter di atas permukaan laut!"
        ],
        uniqueness: "Bolivia memiliki bentang alam yang luar biasa lengkap, mulai dari puncak bersalju Pegunungan Andes yang membeku hingga sungai tropis Amazon yang hangat dan ngarai ngarai batu kering.",
        miningThreatsSummary: "Kapal keruk emas membuat air sungai berlumpur dan mencemari air dengan merkuri beracun yang meracuni lumba-lumba. Peledakan dinamit tebing meruntuhkan sarang burung makaw, dan tambang di gunung membekukan akar pohon kerdil.",
        combinedParagraph: "Negara Bolivia terletak di tengah Benua Amerika Selatan, dan memiliki dua ibukota yaitu Sucre dan La Paz. Bahasa yang digunakan adalah Bahasa Spanyol dan bahasa asli daerah seperti Quechua dan Aymara. Dua fakta menarik tentang Bolivia adalah memiliki padang garam terbesar di dunia Salar de Uyuni dan memiliki ibukota tertinggi di dunia. Yang membuat Bolivia unik adalah keanekaragaman alamnya dari puncak es Pegunungan Andes hingga sungai Amazon tempat hidup lumba-lumba merah muda."
      },
      organisms: [
        {
          id: "bolivian_river_dolphin",
          type: "animal",
          image: "assets/images/bolivia/bolivian_river_dolphin.jpg",
          scientificName: "Inia boliviensis",
          en: {
            name: "Bolivian River Dolphin (Bufeo)",
            typeLabel: "🐾 Aquatic Mammal (Animal)",
            habitat: "Freshwater rivers and flooded forests in the Bolivian Amazon.",
            uniqueFeature: "A friendly freshwater dolphin with a beautiful pinkish blush on its body and a long, flexible neck that allows it to weave between flooded tree trunks!",
            howItSurvives: "It makes clicking sounds underwater and listens for the echoes ('echolocation') to 'see' where it is swimming and find fish in cloudy river water.",
            whyThreatened: "Gold mining boats use loud engines and suction tubes to scoop gravel from riverbeds, creating deafening noise and muddy water so dolphins cannot hear their clicks. Miners also use toxic mercury, which washes into the river, poisons fish, and makes the dolphins sick."
          },
          id_lang: {
            name: "Lumba-lumba Sungai Bolivia (Bufeo)",
            typeLabel: "🐾 Mamalia Air (Hewan)",
            habitat: "Sungai air tawar dan hutan yang terendam banjir di Amazon Bolivia.",
            uniqueFeature: "Lumba-lumba air tawar yang menggemaskan dengan semburat warna merah muda (pink)! Lehernya lentur sehingga bisa berbelok lincah di sela-sela pohon yang terendam air.",
            howItSurvives: "Mengeluarkan suara detukan klik di bawah air dan mendengarkan pantulannya (ekolokasi) untuk 'melihat' jalan dan mendeteksi ikan mangsanya.",
            whyThreatened: "Kapal tambang emas menggunakan mesin bising dan pipa penyedot kerikil, membuat air sungai sangat keruh dan bising hingga lumba-lumba tidak bisa mendengar pantulan suaranya. Penambang juga memakai cairan merkuri berbahaya yang meracuni ikan dan membuat lumba-lumba sakit."
          }
        },
        {
          id: "blue_throated_macaw",
          type: "animal",
          image: "assets/images/bolivia/blue_throated_macaw.jpg",
          scientificName: "Ara glaucogularis",
          en: {
            name: "Blue-throated Macaw",
            typeLabel: "🐾 Parrot (Animal)",
            habitat: "Grassy savanna plains with small clumps of palm trees called 'forest islands'.",
            uniqueFeature: "A critically rare parrot adorned with brilliant turquoise-blue wings, bright yellow belly, and a distinctive blue patch on its throat!",
            howItSurvives: "It eats the rich fruit of the Motacú palm tree and nests inside hollow trunks of old palm trees.",
            whyThreatened: "When people dig up gravel for roads and excavate big drainage ditches to drain wetland water, the soil dries out. Old palm trees die and new ones cannot sprout, leaving macaws with no hollow trunks to raise their babies."
          },
          id_lang: {
            name: "Burung Makaw Leher Biru",
            typeLabel: "🐾 Burung Beo (Hewan)",
            habitat: "Padang rumput basah dengan gugusan pohon palem yang disebut 'pulau hutan'.",
            uniqueFeature: "Burung makaw yang sangat langka dengan bulu biru toska, dada kuning cerah, dan bercak biru khas di bagian tenggorokannya!",
            howItSurvives: "Memakan buah pohon palem Motacú dan bersarang di dalam lubang batang pohon palem tua yang berongga.",
            whyThreatened: "Ketika orang menggali kerikil untuk jalan atau membuat parit besar untuk mengeringkan air rawa, tanah menjadi kering. Pohon palem tua mati dan tunas baru tidak bisa tumbuh, sehingga makaw kehilangan tempat untuk membesarkan anak-anaknya."
          }
        },
        {
          id: "red_fronted_macaw",
          type: "animal",
          image: "assets/images/bolivia/red_fronted_macaw.jpg",
          scientificName: "Ara rubrogenys",
          en: {
            name: "Red-fronted Macaw",
            typeLabel: "🐾 Parrot (Animal)",
            habitat: "Dry, warm, rocky canyons and river valleys.",
            uniqueFeature: "A bright green parrot with fiery red forehead, red ear patches, and bright orange-red underwings!",
            howItSurvives: "Instead of nesting in trees, it nests inside natural cracks and crevices on steep sandstone cliffs, and eats cactus fruits and wild canyon seeds.",
            whyThreatened: "Workers blast canyon cliffs with dynamite to widen roads or dig sand from the river below. The explosions shatter the cliff walls, collapsing the birds' nest holes and destroying the cactus bushes they rely on for food."
          },
          id_lang: {
            name: "Burung Makaw Dahi Merah",
            typeLabel: "🐾 Burung Beo (Hewan)",
            habitat: "Ngarai berbatu dan lembah sungai yang kering dan hangat.",
            uniqueFeature: "Burung makaw berbulu hijau dengan dahi merah menyala, bercak merah di dekat telinga, dan sayap bawah berwarna jingga keemasan!",
            howItSurvives: "Tidak bersarang di pohon, melainkan di celah-celah tebing batu pasir yang terjal, serta memakan buah kaktus dan biji-bijian semak berduri.",
            whyThreatened: "Pekerja meledakkan tebing menggunakan dinamit untuk membuka jalan atau mengeruk pasir sungai. Ledakan meruntuhkan tebing, menghancurkan lubang sarang telur, serta merusak semak kaktus tempat makan makaw."
          }
        },
        {
          id: "golden_rat_tail_cactus",
          type: "plant",
          image: "assets/images/bolivia/golden_rat_tail_cactus.jpg",
          scientificName: "Cleistocactus winteri",
          en: {
            name: "Golden Rat Tail Cactus",
            typeLabel: "🌿 Cliff Cactus (Plant)",
            habitat: "Vertical sandstone cliffs in dry mountain canyons.",
            uniqueFeature: "A trailing cliff cactus covered in soft golden bristles that hangs down rock faces like a monkey or rat tail, blooming with bright salmon-orange flowers!",
            howItSurvives: "It anchors directly into tiny crevices on sheer rock walls, storing water inside its succulent stems to survive long dry spells.",
            whyThreatened: "Rock cutting, quarry excavations, and dynamite blasting along canyon roads shatter the cliff faces, crushing these golden cacti and sending them falling into the abyss."
          },
          id_lang: {
            name: "Kaktus Ekor Tikus Emas",
            typeLabel: "🌿 Kaktus Tebing (Tumbuhan)",
            habitat: "Dinding tebing batu pasir terjal di lembah pegunungan kering.",
            uniqueFeature: "Batangnya menjuntai ke bawah dari tebing seperti ekor keemasan yang berbulu lembut, dan mekar dengan bunga berwarna jingga salem yang menawan!",
            howItSurvives: "Mencengkeram erat retakan batu karang dan menyimpan air di dalam batangnya yang berdaging tebal saat musim kemarau panjang.",
            whyThreatened: "Pekerjaan pemecah batu dan peledakan dinamit untuk membuat jalan ngarai membuat tebing batu pecah berantakan dan menghancurkan koloni kaktus emas ini."
          }
        },
        {
          id: "cardenasiodendron_tree",
          type: "plant",
          image: "assets/images/bolivia/cardenasiodendron_tree.jpg",
          scientificName: "Cardenasiodendron brachypterum",
          en: {
            name: "Cardenasiodendron Tree",
            typeLabel: "🌿 Dry-Valley Tree (Plant)",
            habitat: "Dry inter-Andean river valleys.",
            uniqueFeature: "A tough, resilient endemic tree found only in Bolivia's dry valleys that produces clusters of winged seeds and holds together dry mountain soil.",
            howItSurvives: "It sends deep taproots deep down through rocky soil into the river valley bed to find hidden underground water reserves.",
            whyThreatened: "When workers dig out river gravel and boulders for construction, heavy excavators scrape away the soil and tear apart the tree's deep water-seeking root systems."
          },
          id_lang: {
            name: "Pohon Cardenasiodendron",
            typeLabel: "🌿 Pohon Lembah Kering (Tumbuhan)",
            habitat: "Lembah sungai kering di antara Pegunungan Andes.",
            uniqueFeature: "Pohon tangguh endemik yang hanya ada di Bolivia! Pohon ini menghasilkan untaian biji bersayap dan akarnya menjaga tanah lembah agar tidak mudah runtuh.",
            howItSurvives: "Menghujamkan akar tunggang yang sangat dalam menembus tanah berbatu untuk menyerap cadangan air tanah di bawah dasar lembah sungai.",
            whyThreatened: "Ketika orang mengeruk kerikil dan pasir dasar sungai untuk bahan bangunan, alat berat mengupas tanah dan merusak akar-akar penopang pohon yang dalam."
          }
        },
        {
          id: "quenua_de_altura",
          type: "plant",
          image: "assets/images/bolivia/quenua_de_altura.jpg",
          scientificName: "Polylepis tarapacana",
          en: {
            name: "Queñua de Altura",
            typeLabel: "🌿 Alpine Dwarf Tree (Plant)",
            habitat: "Extreme high elevations in the freezing Andes Mountains (over 4,000 meters!).",
            uniqueFeature: "The highest-growing tree in the world! It has shaggy, papery bark that peels in many thin layers like a winter coat to insulate it against sub-zero mountain cold.",
            howItSurvives: "It keeps its roots warm under a thick carpet of green moss and rocks on freezing slopes right below glaciers.",
            whyThreatened: "When metal mines scrape away the rocks and moss to build haul roads, the tree roots lose their warm blanket and freeze to death in the harsh mountain frost."
          },
          id_lang: {
            name: "Pohon Queñua Pegunungan",
            typeLabel: "🌿 Pohon Kerdil Salju (Tumbuhan)",
            habitat: "Lereng Pegunungan Andes yang sangat tinggi dan membeku (di atas 4.000 meter!).",
            uniqueFeature: "Pohon yang hidup di tempat tertinggi di dunia! Kulit batangnya berlapis-lapis tipis seperti kertas jaket tebal untuk melindunginya dari suhu beku es.",
            howItSurvives: "Menjaga akarnya tetap hangat di bawah permadani lumut hijau tebal dan bebatuan di dekat gletser salju.",
            whyThreatened: "Ketika tambang logam mengeruk bebatuan dan lapisan lumut untuk membuat jalan truk, selimut pelindung akarnya hilang sehingga akar pohon membeku di udara dingin gunung."
          }
        }
      ]
    }
  ],

  // ----------------------------------------------------
  // QUIZ QUESTIONS (Kids Friendly Grade 2)
  // ----------------------------------------------------
  quiz: [
    {
      id: 1,
      en: {
        question: "Which bird from Haiti needs soft, dead trees ('snags') to build its nest holes?",
        options: ["Hispaniolan Trogon", "Harpy Eagle", "Least Pauraque", "Blue-throated Macaw"],
        answer: 0,
        explanation: "Correct! The colorful Hispaniolan Trogon needs soft, old dead trees because it cannot drill hard wood."
      },
      id_lang: {
        question: "Burung berwarna indah dari Haiti manakah yang membutuhkan batang pohon mati untuk bersarang?",
        options: ["Burung Trogon Hispaniola", "Elang Harpy", "Burung Pauraque", "Makaw Leher Biru"],
        answer: 0,
        explanation: "Benar! Burung Trogon Hispaniola butuh pohon mati yang kayunya lunak karena paruhnya tidak bisa melubangi kayu keras."
      }
    },
    {
      id: 2,
      en: {
        question: "Why does the Margay cat in Suriname get trapped by mining roads?",
        options: ["It forgets the way home", "It is afraid to walk on wide open dirt roads", "It likes playing in the sand", "It cannot jump"],
        answer: 1,
        explanation: "Spot on! The Margay spends its life in tree branches and is too afraid to cross wide, empty mining roads on the ground."
      },
      id_lang: {
        question: "Mengapa kucing Margay di Suriname bisa terperangkap saat ada jalan tambang baru?",
        options: ["Karena lupa jalan pulang", "Karena takut berjalan menyeberangi jalan tanah terbuka", "Karena suka bermain pasir", "Karena tidak bisa melompat"],
        answer: 1,
        explanation: "Tepat sekali! Margay adalah pemanjat pohon ulung dan merasa takut menyentuh tanah jalan tambang yang gundul dan terbuka."
      }
    },
    {
      id: 3,
      en: {
        question: "What dangerous chemical used in river gold mining harms the Bolivian River Dolphin?",
        options: ["Table salt", "Pure water", "Mercury", "Cooking oil"],
        answer: 2,
        explanation: "That's right! Gold miners use toxic mercury, which washes into rivers and poisons fish and dolphins."
      },
      id_lang: {
        question: "Zat kimia berbahaya apa yang digunakan tambang emas sungai sehingga membuat lumba-lumba Bolivia sakit?",
        options: ["Garam dapur", "Air kelapa", "Merkuri (Air raksa)", "Minyak goreng"],
        answer: 2,
        explanation: "Hebat! Merkuri adalah zat kimia beracun yang digunakan penambang emas dan mencemari sungai serta ikan."
      }
    },
    {
      id: 4,
      en: {
        question: "What special adaptation protects the Queñua de Altura tree from freezing in Bolivia's high Andes?",
        options: ["An electric heater", "Multi-layered papery bark and moss carpets", "Giant tropical fruit", "Plastic wrap"],
        answer: 1,
        explanation: "Awesome! Its shaggy, paper-like layered bark and thick moss carpet act like a warm winter jacket."
      },
      id_lang: {
        question: "Apa yang melindungi pohon Queñua de Altura dari hawa dingin membeku di pegunungan Bolivia?",
        options: ["Pemanas listrik", "Kulit batang berlapis seperti kertas dan selimut lumut", "Buah tropis yang besar", "Kain terpal"],
        answer: 1,
        explanation: "Bagus sekali! Kulit batangnya berlapis-lapis seperti jaket tebal dan lumut menjaga akarnya tetap hangat."
      }
    },
    {
      id: 5,
      en: {
        question: "Which plant looks like a green cup that catches insects in foggy mountain moss?",
        options: ["Oviedo's Cherry Palm", "Marsh Pitcher Plant", "Hispaniolan Pine", "Golden Rat Tail Cactus"],
        answer: 1,
        explanation: "You got it! The Marsh Pitcher Plant forms water-filled cups that trap bugs for nutrients."
      },
      id_lang: {
        question: "Tumbuhan apakah yang bentuknya seperti cangkir piala berisi air untuk menjebak serangga?",
        options: ["Palem Ceri Oviedo", "Kantong Semar Rawa (Marsh Pitcher Plant)", "Pinus Hispaniola", "Kaktus Ekor Tikus Emas"],
        answer: 1,
        explanation: "Pintar! Kantong Semar Rawa memiliki daun berbentuk cangkir berisi air untuk menangkap serangga di puncak gunung."
      }
    }
  ],

  // ----------------------------------------------------
  // 4 SOLUTIONS FOR LIFE ON LAND (SDG 15)
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
  }
};
