# 🌍 EcoExplorers: Life on Land (SDG 15)
### Grade 2 Literature Day • Bulan Bahasa Oktober 2026

An interactive, bilingual, mobile-first learning web application created for Grade 2 elementary school students studying the environmental impacts of **mining**, **deforestation**, and other human activities in:
1. **Haiti** (Class 2A) 🇭🇹
2. **Suriname** (Class 2B) 🇸🇷
3. **Bolivia** (Class 2C) 🇧🇴

---

## 🌟 Key Features

1. **Dual Language Toggle (English & Bahasa Indonesia)**:
   - English is the default language.
   - One-click toggle switch to natural, child-friendly Bahasa Indonesia to help Grade 2 students understand complex scientific concepts.
   - Text state persists across page navigation via `localStorage` and query parameters (`?lang=id` or `?lang=en`).

2. **18 Extracted High-Resolution Photos**:
   - Extracted directly from the classroom PDF dossier:
     - **Haiti (3 Animals & 3 Plants)**: Hispaniolan Trogon, Least Pauraque, Hispaniolan Solenodon, Oviedo's Cherry Palm, Bayahibe Rose, Hispaniolan Pine.
     - **Suriname (3 Animals & 3 Plants)**: Harpy Eagle, Guianan Cock-of-the-Rock, Margay, Clump Wallaba, Marsh Pitcher Plant, Sand Baromalli.
     - **Bolivia (3 Animals & 3 Plants)**: Bolivian River Dolphin, Blue-throated Macaw, Red-fronted Macaw, Golden Rat Tail Cactus, Cardenasiodendron Tree, Queñua de Altura.
   - Interactive photo inspection with image zoom modal.

3. **🔊 Audio Read-Aloud (Text-to-Speech)**:
   - Built with the native Web Speech API (`window.speechSynthesis`).
   - Grade 2 students can tap the speaker icon on any card to listen to descriptions read aloud at a child-friendly speed in English or Indonesian.

4. **📝 Interactive "Buku Halus" Writing Assistant**:
   - Designed specifically to assist students in completing their cursive notebook exercises based on the teacher's slides:
     - **Country Questions (01–05)**: Name & location, capital city, languages, 2 interesting facts, uniqueness + pre-composed combined paragraph with a one-click copy button.
     - **Animal & Plant Questions (01–05)**: Name & habitat, unique features, survival methods, threats & extinction causes, and conservation solutions.
     - **Printable Worksheet**: Includes `@media print` styling for physical classroom handouts.

5. **🎮 Junior Explorer Quiz**:
   - 5 interactive, age-appropriate questions with instant visual feedback, celebratory animations, scoring, and replayability.

6. **📱 Mobile-First UI/UX**:
   - Ergonomic sticky bottom navigation bar for mobile thumb navigation (`🇭🇹 Haiti`, `🇸🇷 Suriname`, `🇧🇴 Bolivia`, `📝 Buku Halus`, `🎮 Quiz`).
   - High contrast, dyslexia-friendly typography, large touch targets (minimum 48px), and responsive layout.

---

## 🚀 How to Run

### Method 1: Direct File Opening
Double-click [`index.html`](file:///home/brianestidola/Antigravity/Literature%20Day%20-%20Grade%202/index.html) to open directly in any modern web browser (Chrome, Edge, Safari, Firefox).

### Method 2: Local Web Server (Recommended)
Run Python's built-in HTTP server from this directory:
```bash
python3 -m http.server 8000
```
Then visit:
- **Default (English, Haiti)**: [http://localhost:8000](http://localhost:8000)
- **Bahasa Indonesia**: [http://localhost:8000?lang=id](http://localhost:8000?lang=id)
- **Direct to Suriname**: [http://localhost:8000?country=suriname](http://localhost:8000?country=suriname)
- **Direct to Bolivia**: [http://localhost:8000?country=bolivia](http://localhost:8000?country=bolivia)
