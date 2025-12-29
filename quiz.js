
const quizBank = {
  Pemula: [
    {
      q: "Financial Technology paling tepat berarti…",
      options: [
        "Teknologi untuk hiburan digital",
        "Financial Technology, teknologi yang memudahkan layanan keuangan",
        "Teknologi untuk mengganti uang tunai sepenuhnya",
        "Teknologi untuk mempercepat game online"
      ],
      answer: 1,
      hint: "Kata kuncinya: keuangan + teknologi.",
      explain: "Financial Technology (fintech) adalah inovasi teknologi yang memudahkan layanan keuangan (pembayaran, pinjaman, investasi, dsb.)."
    },
    {
      q: "Contoh layanan Financial Technology yang umum dipakai adalah…",
      options: ["Dompet digital (e-wallet)", "Mesin fotokopi", "Kalkulator", "Radio"],
      answer: 0,
      hint: "Dipakai untuk bayar QR/transfer cepat.",
      explain: "Dompet digital (e-wallet) adalah contoh Financial Technology paling populer untuk pembayaran."
    },
    {
      q: "Tujuan utama literasi keuangan digital adalah…",
      options: [
        "Menghindari semua layanan keuangan digital",
        "Memahami cara menggunakan layanan dengan aman dan bertanggung jawab",
        "Membuat semua orang jadi investor",
        "Menghapus risiko keuangan"
      ],
      answer: 1,
      hint: "Bukan sekadar ‘untung’, tapi paham risiko & cara pakai.",
      explain: "Literasi membantu kita paham manfaat, risiko, biaya, dan cara menggunakan layanan digital dengan aman."
    },
    {
      q: "Yang termasuk transaksi non-tunai adalah…",
      options: ["Bayar pakai QR/e-wallet", "Bayar pakai koin", "Tukar uang di warung", "Bayar pakai pecahan cash"],
      answer: 0,
      hint: "Ada kode/scan dan tercatat digital.",
      explain: "Pembayaran QR/e-wallet termasuk transaksi non-tunai karena diproses secara digital."
    },
    {
      q: "Financial Technology membantu masyarakat karena…",
      options: [
        "Memperlama transaksi",
        "Mempercepat akses dan inklusi layanan keuangan",
        "Menghilangkan keamanan",
        "Membuat uang tidak bisa dilacak"
      ],
      answer: 1,
      hint: "Akses jadi lebih mudah.",
      explain: "Financial Technology sering meningkatkan inklusi: lebih banyak orang bisa mengakses layanan keuangan dengan cepat dan praktis."
    },
    {
      q: "Jika diminta OTP oleh orang lain (mengaku CS), tindakan paling aman adalah…",
      options: ["Memberikan OTP agar dibantu", "Mengirim OTP sebagian saja", "Menolak dan menghubungi kanal resmi", "Mengirim OTP lalu ganti PIN"],
      answer: 2,
      hint: "OTP itu rahasia dan hanya untuk kamu.",
      explain: "OTP bersifat rahasia. Jangan dibagikan. Hubungi pihak resmi lewat aplikasi/website resmi."
    },
    {
      q: "PIN/password yang baik adalah…",
      options: ["123456", "Tanggal lahir", "Kombinasi unik & kuat yang tidak mudah ditebak", "Nama sendiri"],
      answer: 2,
      hint: "Unik, panjang, dan sulit ditebak.",
      explain: "Gunakan password kuat, unik, dan jangan dipakai ulang di banyak akun. Aktifkan 2FA bila tersedia."
    },
    {
      q: "Data pribadi yang perlu dijaga adalah…",
      options: ["OTP, PIN, password, dan data identitas", "Nama aplikasi", "Warna ponsel", "Wallpaper HP"],
      answer: 0,
      hint: "Yang bisa dipakai untuk ambil alih akun.",
      explain: "OTP, PIN, password, dan data identitas adalah data sensitif. Jangan dibagikan ke siapa pun."
    },
    {
      q: "Kelebihan utama e-wallet adalah…",
      options: [
        "Transaksi cepat & tercatat",
        "Tidak butuh internet sama sekali",
        "Selalu tanpa biaya apa pun",
        "Bisa menggantikan semua bank"
      ],
      answer: 0,
      hint: "Cepat + ada riwayat transaksi.",
      explain: "E-wallet memudahkan pembayaran dan menyediakan catatan transaksi. Tetap perhatikan biaya/limit bila ada."
    },
    {
      q: "Disclaimer edukasi artinya…",
      options: [
        "Konten ini pasti bikin untung",
        "Konten ini untuk edukasi, bukan nasihat keuangan/investasi",
        "Konten ini dijamin benar untuk semua orang",
        "Konten ini bebas risiko"
      ],
      answer: 1,
      hint: "Edukasi ≠ rekomendasi.",
      explain: "Konten edukatif memberi pemahaman, bukan rekomendasi personal. Keputusan tetap tanggung jawab pengguna."
    }
  ],

  Menengah: [
    {
      q: "Praktik keamanan digital yang benar adalah…",
      options: ["Menggunakan 1 password untuk semua akun", "Mengaktifkan 2FA dan notifikasi transaksi", "Menyimpan OTP di catatan chat", "Meminjamkan ponsel saat akun login"],
      answer: 1,
      hint: "Tambah lapisan keamanan.",
      explain: "2FA dan notifikasi transaksi menambah lapisan keamanan dan membantu deteksi cepat jika ada aktivitas mencurigakan."
    },
    {
      q: "Ciri link (tautan) mencurigakan biasanya…",
      options: ["Domain jelas & resmi", "Ada typo/mirip brand resmi", "Menggunakan HTTPS selalu aman", "Selalu dari akun terverifikasi"],
      answer: 1,
      hint: "Waspada domain ‘mirip’.",
      explain: "Scammer sering memakai domain mirip brand resmi (typo). Selalu cek sumber dan jangan klik saat ragu."
    },
    {
      q: "‘Biaya admin’ dan ‘bunga’ paling aman dicek di…",
      options: ["Komentar media sosial", "Chat dari orang tak dikenal", "Halaman resmi aplikasi/website & syarat ketentuan", "Grup random"],
      answer: 2,
      hint: "Cari sumber resmi.",
      explain: "Biaya dan bunga harus dicek di sumber resmi dan S&K, bukan dari chat/komentar."
    },
    {
      q: "Rumus sederhana untuk menyusun anggaran bulanan adalah…",
      options: ["50/30/20 (kebutuhan/keinginan/menabung-investasi)", "10/10/80", "100/0/0", "25/25/50 (utang/keinginan/hadiah)"],
      answer: 0,
      hint: "Kebutuhan paling besar, lalu keinginan, lalu tabungan.",
      explain: "Metode 50/30/20 membantu mengatur prioritas: kebutuhan, keinginan, dan tabungan/investasi."
    },
    {
      q: "Notifikasi transaksi penting karena…",
      options: ["Bikin HP cepat panas", "Bisa mendeteksi transaksi tidak dikenal lebih cepat", "Mengurangi saldo otomatis", "Menghapus bukti transaksi"],
      answer: 1,
      hint: "Deteksi cepat = peluang mitigasi lebih besar.",
      explain: "Notifikasi membantu deteksi dini jika ada transaksi tidak dikenal sehingga bisa cepat blokir/komplain."
    },
    {
      q: "Jika kamu terlanjur klik link scam, langkah awal yang tepat adalah…",
      options: ["Diamkan saja", "Bagikan ke teman biar tahu", "Ganti password & amankan akun (logout, 2FA)", "Transfer uang ke akun lain"],
      answer: 2,
      hint: "Amankan akun dulu.",
      explain: "Segera amankan akun: ganti password, logout semua perangkat, aktifkan 2FA, dan cek aktivitas."
    },
    {
      q: "Perbedaan utama pinjaman legal vs ilegal biasanya terlihat dari…",
      options: ["Tidak ada identitas perusahaan", "Terdaftar/berizin dan transparan biaya", "Selalu menawarkan bunga 0%", "Pasti cair 1 menit"],
      answer: 1,
      hint: "Transparan + berizin.",
      explain: "Layanan legal umumnya berizin/terdaftar dan transparan soal biaya, bunga, dan cara penagihan."
    },
    {
      q: "Riwayat transaksi digital sebaiknya digunakan untuk…",
      options: ["Menghapus semua catatan", "Menilai pola pengeluaran & kontrol budget", "Membagikan ke publik", "Mengabaikan tagihan"],
      answer: 1,
      hint: "Supaya tahu uang lari ke mana.",
      explain: "Riwayat transaksi membantu evaluasi pengeluaran dan menyusun perbaikan anggaran."
    },
    {
      q: "Saat ada penawaran investasi ‘pasti untung’, hal pertama yang perlu kamu lakukan adalah…",
      options: ["Langsung ikut sebelum terlambat", "Minta OTP agar dibantu daftar", "Cek legalitas, risiko, dan logika imbal hasil", "Pinjam uang untuk modal"],
      answer: 2,
      hint: "Cek legalitas + logika return.",
      explain: "Tidak ada investasi tanpa risiko. Cek legalitas, pahami produk, dan jangan tergiur janji berlebihan."
    },
    {
      q: "Batas transaksi harian (limit) berguna untuk…",
      options: ["Membuat transaksi gagal terus", "Mengurangi potensi kerugian saat akun dibobol", "Menambah biaya admin", "Mempercepat scam"],
      answer: 1,
      hint: "Kalau kejadian buruk, kerugian bisa dibatasi.",
      explain: "Limit membantu membatasi kerugian jika akun disalahgunakan."
    }
  ],

  Lanjutan: [
    {
      q: "Hal paling krusial untuk pemula dalam investasi/trading adalah…",
      options: ["Mengejar profit tercepat", "Manajemen risiko & profil risiko", "Mengikuti influencer tanpa riset", "All-in di satu aset"],
      answer: 1,
      hint: "Pertama: tahan risiko dulu.",
      explain: "Manajemen risiko (termasuk profil risiko) mengurangi potensi kerugian besar dan membuat keputusan lebih konsisten."
    },
    {
      q: "Yang termasuk risiko pinjaman online adalah…",
      options: ["Biaya total membengkak jika tidak paham S&K", "Selalu gratis", "Pasti memperkaya pengguna", "Tidak ada konsekuensi keterlambatan"],
      answer: 0,
      hint: "Baca biaya total, bukan cuma ‘cair’.",
      explain: "Risiko utama: biaya total (bunga+fee) membengkak. Pahami S&K, denda, dan konsekuensi keterlambatan."
    },
    {
      q: "Diversifikasi portofolio artinya…",
      options: ["Taruh semua dana di satu aset", "Menyebar dana ke beberapa aset untuk menurunkan risiko", "Hanya beli aset paling viral", "Selalu beli saat harga naik"],
      answer: 1,
      hint: "Jangan taruh semua telur di satu keranjang.",
      explain: "Diversifikasi membantu menurunkan risiko dengan menyebar investasi ke beberapa aset/kelas aset."
    },
    {
      q: "Investasi jangka panjang biasanya fokus pada…",
      options: ["Rumor harian", "Fundamental & tujuan keuangan", "FOMO", "Untung 1 jam"],
      answer: 1,
      hint: "Tujuan + fundamental.",
      explain: "Jangka panjang umumnya menekankan fundamental, tujuan, dan konsistensi, bukan rumor harian."
    },
    {
      q: "Biaya yang perlu diperhatikan saat trading adalah…",
      options: ["Fee broker, spread, pajak (jika ada)", "Hanya biaya listrik", "Tidak ada biaya", "Biaya chat grup"],
      answer: 0,
      hint: "Ada fee dan spread.",
      explain: "Fee/spread/pajak dapat menggerus hasil. Selalu hitung biaya total."
    },
    {
      q: "Prinsip utama sebelum investasi adalah…",
      options: ["Punya dana darurat & utang terkendali", "Semua dana untuk investasi", "Pinjam untuk investasi", "Tidak perlu tujuan"],
      answer: 0,
      hint: "Amankan fondasi dulu.",
      explain: "Dana darurat dan kontrol utang adalah fondasi agar investasi tidak mengganggu kebutuhan pokok."
    },
    {
      q: "Profil risiko dipengaruhi oleh…",
      options: ["Tujuan, horizon waktu, toleransi risiko", "Warna aplikasi", "Jumlah followers", "Nama brand"],
      answer: 0,
      hint: "Tujuan + waktu + toleransi.",
      explain: "Profil risiko terkait tujuan, jangka waktu, dan toleransi terhadap fluktuasi/kerugian."
    },
    {
      q: "Stop-loss digunakan untuk…",
      options: ["Membatasi kerugian", "Menghapus biaya", "Menjamin profit", "Menaikkan harga aset"],
      answer: 0,
      hint: "Batas rugi.",
      explain: "Stop-loss membantu membatasi kerugian ketika harga bergerak berlawanan dari rencana."
    },
    {
      q: "Inflasi terhadap uang tunai berarti…",
      options: ["Nilainya selalu naik", "Daya beli uang bisa turun dari waktu ke waktu", "Uang jadi kebal inflasi", "Harga selalu turun"],
      answer: 1,
      hint: "Harga naik, uang tetap.",
      explain: "Inflasi dapat menurunkan daya beli uang tunai jika tidak diimbangi dengan pendapatan/investasi."
    },
    {
      q: "Yang paling bijak saat melihat iming-iming 'pasti untung & tanpa risiko' adalah…",
      options: ["Langsung ikut", "Curiga dan lakukan due diligence", "Bagikan OTP untuk verifikasi", "Pinjam dana agar maksimal"],
      answer: 1,
      hint: "Tidak ada yang tanpa risiko.",
      explain: "Tidak ada investasi tanpa risiko. Sikap bijak: curiga, riset, cek legalitas, dan pahami risikonya."
    }
  ]
};

let quizLevel = null;
let timeLeft = 30;
let timer = null;

let quiz = [];
let qIndex = 0;
let score = 0;
let streak = 0;

let locked = false;
let used5050 = false;
let usedHint = false;
let hintUsedThisQ = false;
let fiftyUsedThisQ = false;

let answersLog = [];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function setText(id, v) {
  const el = document.getElementById(id);
  if (el) el.textContent = v;
}

function setProgress(pct) {
  const bar = document.querySelector(".quiz-progress > div");
  if (bar) bar.style.width = `${Math.max(0, Math.min(100, pct))}%`;
}

function pulse(el) {
  if (!el) return;

  if (el.animate) {
    try {
      el.getAnimations?.().forEach(a => a.cancel());
      el.animate(
        [{ transform: "scale(.98)" }, { transform: "scale(1)" }],
        { duration: 350, easing: "ease-out" }
      );
      return;
    } catch (e) {
    }
  }

  el.classList.remove("pulse");
  requestAnimationFrame(() => el.classList.add("pulse"));
}


function setTimerDanger(isDanger) {
  const wrap = document.getElementById("timerWrap");
  if (!wrap) return;
  wrap.classList.toggle("danger", !!isDanger);
}

function stopTimer() {
  if (timer) clearInterval(timer);
  timer = null;
}

let totalElapsed = 0; 

function startTimer(seconds = 30) {
  stopTimer();
  timeLeft = seconds;
  setText("time", String(timeLeft));
  setTimerDanger(false);

  timer = setInterval(() => {
    timeLeft -= 1;
    totalElapsed += 1;
    setText("time", String(Math.max(0, timeLeft)));
    setTimerDanger(timeLeft <= 7);

    if (timeLeft <= 0) {
      stopTimer();
      answer(-1, { timeout: true });
    }
  }, 1000);
}

function computeBadge() {
  const max = quiz.length * 10;
  const pct = max ? (score / max) : 0;

  if (pct >= 0.9) return "🏆 FinSmart Master";
  if (pct >= 0.75) return "🥇 Pro Literasi";
  if (pct >= 0.6) return "🥈 Naik Level";
  return "🥉 Pemanasan";
}

function normalizeQuestions(level) {
  const base = quizBank[level] || [];
  const picked = shuffle(base).slice(0, 10);

  return picked.map((it) => {
    const items = it.options.map((text, idx) => ({ text, idx }));
    const shuffled = shuffle(items);
    const newAnswer = shuffled.findIndex(x => x.idx === it.answer);

    return {
      q: it.q,
      options: shuffled.map(x => x.text),
      answer: newAnswer,
      hint: it.hint || "",
      explain: it.explain || ""
    };
  });
}

function setLifelineState() {
  const b5050 = document.getElementById("btn5050");
  const bHint = document.getElementById("btnHint");
  if (b5050) b5050.disabled = used5050 || !quizLevel || locked;
  if (bHint) bHint.disabled = usedHint || !quizLevel || locked;
}

function startQuiz(level) {
  quizLevel = level;
  quiz = normalizeQuestions(level);
  qIndex = 0;
  score = 0;
  streak = 0;
  locked = false;
  used5050 = false;
  usedHint = false;
  hintUsedThisQ = false;
  fiftyUsedThisQ = false;
  answersLog = [];
  totalElapsed = 0;

  setText("quizLevelTitle", `Level: ${level}`);
  setText("total", String(quiz.length));
  setText("badge", "Badge: -");

  renderQuestion(true);
}

function resetQuiz() {
  quizLevel = null;
  quiz = [];
  qIndex = 0;
  score = 0;
  streak = 0;
  locked = false;
  used5050 = false;
  usedHint = false;
  hintUsedThisQ = false;
  fiftyUsedThisQ = false;
  answersLog = [];
  totalElapsed = 0;

  stopTimer();

  setText("quizLevelTitle", "Pilih level untuk mulai");
  setText("score", "0");
  setText("streak", "0");
  setText("idx", "0");
  setText("total", "0");
  setText("badge", "Badge: -");
  setProgress(0);

  const box = document.getElementById("quizBox");
  if (!box) return;

  box.innerHTML = `
    <div class="quiz-empty">
      <div class="quiz-q">Mulai Quiz</div>
      <p class="muted">Pilih level di atas untuk memulai. Setiap soal punya timer, feedback, dan penjelasan singkat agar Anda bisa belajar sambil bermain.</p>
      <div class="quiz-tips">
        <div class="tip"><span>⚡</span><div><b>Skor</b><div class="muted">Benar +10, salah tidak menambah poin.</div></div></div>
        <div class="tip"><span>🔥</span><div><b>Streak</b><div class="muted">Jawaban benar berturut-turut menaikkan streak.</div></div></div>
        <div class="tip"><span>🛟</span><div><b>Lifeline</b><div class="muted">50/50 & Hint tersedia 1× per sesi.</div></div></div>
      </div>
    </div>
  `;

  setLifelineState();
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c == null) return;
    if (typeof c === "string") node.appendChild(document.createTextNode(c));
    else node.appendChild(c);
  });
  return node;
}

function renderResult() {
  const box = document.getElementById("quizBox");
  if (!box) return;

  const badge = computeBadge();
  setText("badge", `Badge: ${badge}`);
  setText("idx", String(quiz.length));
  setText("score", String(score));
  setText("streak", String(streak));
  setProgress(100);
  stopTimer();

  const max = quiz.length * 10;
  const correctCount = answersLog.filter(a => a.correct).length;
  const accuracy = quiz.length ? Math.round((correctCount / quiz.length) * 100) : 0;

  const bestKey = "finsmart_quiz_best";
  const prevBest = Number(localStorage.getItem(bestKey) || "0");
  const best = Math.max(prevBest, score);
  localStorage.setItem(bestKey, String(best));

  box.innerHTML = "";
  const header = el("div", { class: "result-head" }, [
    el("div", { class: "quiz-q" }, ["Selesai! 🎉"]),
    el("div", { class: "muted" }, ["Ringkasan hasil Anda"])
  ]);

  const grid = el("div", { class: "result-grid" }, [
    el("div", { class: "stat" }, [el("div", { class: "label" }, ["Skor"]), el("div", { class: "value gold" }, [`${score} / ${max}`])]),
    el("div", { class: "stat" }, [el("div", { class: "label" }, ["Akurasi"]), el("div", { class: "value" }, [`${accuracy}%`])]),
    el("div", { class: "stat" }, [el("div", { class: "label" }, ["Waktu"]), el("div", { class: "value" }, [`${totalElapsed}s`])]),
    el("div", { class: "stat" }, [el("div", { class: "label" }, ["Best Score"]), el("div", { class: "value" }, [String(best)])]),
  ]);

  const badgeEl = el("div", { class: "result-badge" }, [
    el("div", { class: "pill" }, [`${badge}`]),
    el("div", { class: "muted" }, ["Terus latihan untuk membuka badge yang lebih tinggi."])
  ]);

  const actions = el("div", { class: "cta-row" }, [
    el("button", { class: "btn primary", id: "tryAgainBtn" }, ["Main Lagi"]),
    el("a", { class: "btn", href: "modules.html" }, ["Belajar Modul"])
  ]);

  const reviewWrap = el("div", { class: "review-wrap" }, [
    el("div", { class: "hr soft" }),
    el("div", { class: "badge" }, ["Review Jawaban"]),
    el("div", { class: "review" }, answersLog.map((r, i) => {
      const status = r.correct ? "✅" : (r.timeout ? "⏱️" : "❌");
      return el("div", { class: "review-item" }, [
        el("div", { class: "review-q" }, [`${i + 1}. ${status} ${r.q}`]),
        el("div", { class: "muted" }, [`Jawaban benar: ${r.correctAnswer}`]),
        r.explain ? el("div", { class: "muted" }, [`Penjelasan: ${r.explain}`]) : null
      ]);
    }))
  ]);

  box.appendChild(header);
  box.appendChild(grid);
  box.appendChild(badgeEl);
  box.appendChild(actions);
  box.appendChild(reviewWrap);

  document.getElementById("tryAgainBtn")?.addEventListener("click", () => {
    if (quizLevel) startQuiz(quizLevel);
    else resetQuiz();
  });

  box.classList.add("celebrate");
  setTimeout(() => box.classList.remove("celebrate"), 1400);

  setLifelineState();
}

function renderQuestion(isFirst = false) {
  const box = document.getElementById("quizBox");
  if (!box) return;

  box.classList.remove("has-explain");

  if (!quizLevel || !quiz.length) return;

  if (qIndex >= quiz.length) {
    renderResult();
    return;
  }

  locked = false;
  hintUsedThisQ = false;
  fiftyUsedThisQ = false;

  const item = quiz[qIndex];
  setText("idx", String(qIndex + 1));
  setText("score", String(score));
  setText("streak", String(streak));
  setProgress(Math.round((qIndex / quiz.length) * 100));
  setText("badge", `Badge: ${computeBadge()}`);

  box.innerHTML = "";
  const qEl = el("div", { class: "quiz-q" }, [item.q]);

  const optionsWrap = el("div", { class: "options", role: "list" });
  const tags = ["A", "B", "C", "D"];

  item.options.forEach((opt, i) => {
    const btn = el("button", { class: "option", "data-i": String(i), role: "listitem" }, [
      el("span", { class: "optTag" }, [tags[i] || ""]),
      el("span", { class: "optText" }, [opt])
    ]);
    btn.addEventListener("click", () => answer(i));
    optionsWrap.appendChild(btn);
  });

  const feedback = el("div", { class: "toast", id: "feedback" }, ["Pilih jawaban untuk lanjut."]);
  const explainWrap = el("div", { class: "explain", id: "explainWrap", "aria-live": "polite" });

  const nextBtn = el("button", { class: "btn primary", id: "nextBtn", disabled: "true" }, ["Lanjut"]);
  nextBtn.addEventListener("click", () => {
    qIndex += 1;
    renderQuestion();
  });

  const cta = el("div", { class: "cta-row" }, [nextBtn]);

  box.appendChild(qEl);
  box.appendChild(optionsWrap);
  box.appendChild(feedback);
  box.appendChild(explainWrap);
  box.appendChild(cta);

  box.classList.remove("q-in");
  void box.offsetWidth;
  box.classList.add("q-in");

  document.onkeydown = (e) => {
    if (!quizLevel) return;
    if (e.key >= "1" && e.key <= "4") {
      const i = Number(e.key) - 1;
      const btn = box.querySelector(`.option[data-i="${i}"]`);
      if (btn && !btn.disabled) btn.click();
    }
    if (e.key === "Enter") {
      const next = box.querySelector("#nextBtn");
      if (next && !next.disabled) next.click();
    }
  };

  setLifelineState();
  startTimer(30);
  if (isFirst) pulse(document.getElementById("timerWrap"));
}

function apply5050() {
  if (used5050 || locked || !quizLevel) return;
  used5050 = true;
  fiftyUsedThisQ = true;

  const item = quiz[qIndex];
  const wrongIdx = item.options.map((_, i) => i).filter(i => i !== item.answer);
  const toDisable = shuffle(wrongIdx).slice(0, 2);

  const optionEls = [...document.querySelectorAll(".option")];
  optionEls.forEach((b) => {
    const i = Number(b.getAttribute("data-i"));
    if (toDisable.includes(i)) {
      b.disabled = true;
      b.classList.add("dim");
    }
  });

  const fb = document.getElementById("feedback");
  if (fb) fb.textContent = "🛟 50/50 aktif: dua opsi dieliminasi.";
  setLifelineState();
}

function applyHint() {
  if (usedHint || locked || !quizLevel) return;
  usedHint = true;
  hintUsedThisQ = true;

  const item = quiz[qIndex];
  const fb = document.getElementById("feedback");
  if (fb) fb.textContent = `💡 Hint: ${item.hint || "Baca opsi dengan teliti dan pilih yang paling masuk akal."}`;
  setLifelineState();
}

function answer(i, meta = {}) {
  if (locked) return;
  locked = true;

  stopTimer();

  const item = quiz[qIndex];
  const optionEls = [...document.querySelectorAll(".option")];
  optionEls.forEach(b => (b.disabled = true));

  const isTimeout = !!meta.timeout;
  const isCorrect = !isTimeout && i === item.answer;

  if (isCorrect) {
    score += 10;
    streak += 1;
  } else {
    streak = 0;
  }

  optionEls.forEach((b) => {
    const bi = Number(b.getAttribute("data-i"));
    if (bi === item.answer) b.classList.add("correct");
    if (!isTimeout && bi === i && bi !== item.answer) b.classList.add("wrong");
    if (isTimeout && bi !== item.answer) b.classList.add("dim");
  });

  const fb = document.getElementById("feedback");
  if (fb) {
    if (isTimeout) fb.textContent = "⏱️ Waktu habis. Lanjut ke soal berikutnya.";
    else fb.textContent = isCorrect ? "✅ Benar! Mantap." : "❌ Belum tepat. Yuk lihat penjelasannya.";
    pulse(fb);
  }

  const explainWrap = document.getElementById("explainWrap");
  if (explainWrap) {
    explainWrap.innerHTML = "";
    const title = el("div", { class: "explain-title" }, ["Penjelasan singkat"]);
    const body = el("div", { class: "explain-body" }, [item.explain || "—"]);
    explainWrap.appendChild(title);
    explainWrap.appendChild(body);
    explainWrap.classList.add("show");

    const qb = document.getElementById("quizBox");
    if (qb) qb.classList.add("has-explain");
  }

  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) nextBtn.disabled = false;

  answersLog.push({
    q: item.q,
    correct: isCorrect,
    timeout: isTimeout,
    selected: isTimeout ? "—" : (item.options[i] || "—"),
    correctAnswer: item.options[item.answer],
    explain: item.explain || ""
  });

  setText("score", String(score));
  setText("streak", String(streak));
  setText("badge", `Badge: ${computeBadge()}`);
  setLifelineState();
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("quizBox")) return;

  document.getElementById("btnPemula")?.addEventListener("click", () => startQuiz("Pemula"));
  document.getElementById("btnMenengah")?.addEventListener("click", () => startQuiz("Menengah"));
  document.getElementById("btnLanjutan")?.addEventListener("click", () => startQuiz("Lanjutan"));

  document.getElementById("btnReset")?.addEventListener("click", resetQuiz);
  document.getElementById("btn5050")?.addEventListener("click", apply5050);
  document.getElementById("btnHint")?.addEventListener("click", applyHint);

  resetQuiz();
});
