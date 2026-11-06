// Loading screen functionality
let progress = 0;
let isPageLoaded = false;
let maxRandomProgress = Math.random() * 20 + 70; // Random max between 70-90%
const loadingPercentage = document.getElementById("loading-percentage");
const loadingScreen = document.getElementById("loading-screen");

// Start loading animation immediately
const loadingInterval = setInterval(function () {
  if (!isPageLoaded && progress < maxRandomProgress) {
    // Before page is loaded, progress randomly but stop at maxRandomProgress
    progress += Math.random() * 8 + 2; // Random increment between 2-10
    if (progress > maxRandomProgress) {
      progress = maxRandomProgress;
    }
  } else if (isPageLoaded) {
    // After page is loaded, continue to 100%
    progress += Math.random() * 15 + 5; // Random increment between 5-20

    if (progress >= 100) {
      progress = 100;
      loadingPercentage.textContent = progress;

      setTimeout(function () {
        loadingScreen.style.opacity = "0";
        loadingScreen.style.transition = "opacity 0.5s ease-out";

        setTimeout(function () {
          loadingScreen.style.display = "none";
        }, 500);
      }, 500);

      clearInterval(loadingInterval);
      return;
    }
  }

  loadingPercentage.textContent = Math.floor(progress);
}, 100);

// Set flag when page is fully loaded
window.addEventListener("load", function () {
  isPageLoaded = true;
});

$(document).ready(function () {
  $(".about").hide();
  $(".projects").hide();

  // Function to update active nav
  function updateActiveNav(activeButton) {
    $(".btn-home, .btn1, .btn2").removeClass("nav-active");
    $(activeButton).addClass("nav-active");
  }

  // Home button click
  $(".btn-home").click(function () {
    $(".about, .projects").fadeOut(500, function () {
      $("html, body").scrollTop(0);
      $(".home").fadeIn(500);
    });
    updateActiveNav(this);
    // Push state untuk home
    history.pushState({ page: "home" }, "", location.pathname);
  });

  $(".btn1").click(function () {
    // Sembunyikan semua section terlebih dahulu
    $(".home, .projects").fadeOut(500, function () {
      $("html, body").scrollTop(0);
      $(".about").fadeIn(500);
    });
    updateActiveNav(this);
    // Push state untuk about
    history.pushState({ page: "about" }, "", location.pathname);
  });

  $(".btn2").click(function () {
    // Sembunyikan semua section terlebih dahulu
    $(".home, .about").fadeOut(500, function () {
      $("html, body").scrollTop(0);
      $(".projects").fadeIn(500);
    });
    updateActiveNav(this);
    // Push state untuk projects
    history.pushState({ page: "projects" }, "", location.pathname);
  });

  // CTA buttons on home → trigger nav
  $(".cta-about").click(function () {
    $(".btn1").click();
  });
  $(".cta-projects").click(function () {
    $(".btn2").click();
  });

  window.addEventListener("popstate", function () {
    $(".about, .projects").fadeOut(500, function () {
      $("html, body").scrollTop(0);
      $(".home").fadeIn(500);
    });
    // Update navbar ke home saat back browser
    updateActiveNav(".btn-home");
  });

  // state awal saat halaman pertama kali dibuka
  history.replaceState({ page: "home" }, "", location.pathname);

  $("#language-menu").click(function () {
    $("#language-dropdown").toggle(); // Menampilkan atau menyembunyikan dropdown
  });

  // Menutup dropdown jika klik di luar
  $(document).click(function (e) {
    if (!$(e.target).closest("#language-menu, #language-dropdown").length) {
      $("#language-dropdown").hide();
    }
  });

  // Language data objects
  const languages = {
    id: {
      bahasa: "Bahasa",
      indonesia: "Indonesia",
      inggris: "Inggris",
      jepang: "Jepang",
      cina: "Cina",
      homeText: "Beranda",
      subjudul: "Pelajar & Pengembang Perangkat Lunak",
      deskripsi: "Hai, saya Jauhariel. Saya suka nonton film dan coding!",
      ctaAbout: "Tentang Saya",
      ctaProjects: "Proyek Saya",
      aboutText: "Tentang Saya",
      projectsText: "Proyek Saya",
      kembali: "Kembali",
      about1: `Hai 👋, saya adalah seorang mahasiswa jurusan <span class="font-bold">Rekayasa Perangkat Lunak</span> di <span class="font-bold">Universitas Bina Sarana Informatika</span>. 
               Saya sangat antusias dengan dunia teknologi, terutama dalam pengembangan website.`,
      about2: `Saya telah menguasai berbagai teknologi yang mendukung pengembangan website, di antaranya:`,
      sertifikat: "Sertifikat",
      linkSertifikat: "Lihat Sertifikat",
      hubungiText: "Hubungi Saya",
      hubungiDeskripsi: `Saya selalu bersemangat untuk menjalin koneksi baru dan berbagi wawasan dengan orang-orang yang memiliki minat serupa. 
                        Jangan ragu untuk menghubungi saya melalui salah satu platform di bawah ini. Mari kita berdiskusi, berkolaborasi, atau sekadar bertukar ide!`,
      projectsDeskripsi:
        "Berikut adalah beberapa proyek yang telah saya kerjakan. Klik pada proyek untuk melihat lebih detail.",
      projectsDetail1: `Chat AI dengan ekspresi yang berubah-ubah sesuai mood obrolan.`,
      projectsDetail2: `Sebuah game sederhana yang terinspirasi dari Herta Kuru. Klik tombol "Kuru" untuk meningkatkan jumlah kuru dan melihat karakter Vtuber melakukan aksi kuru-kuru.`,
      projectsDetail3: `Sebuah bot sederhana yang dirancang untuk secara otomatis melihat dan menyukai story atau status WhatsApp teman-teman Anda. Bot ini juga dilengkapi dengan berbagai fitur tambahan yang menarik.`,
      projectsDetail4: `Sebuah bot sederhana yang dirancang untuk mengendalikan lemari secara otomatis menggunakan bot Telegram.`,
      projectsDetail5: `Sebuah bot WhatsApp & Telegram sederhana yang dirancang untuk mempermudah kebutuhan sehari-hari, seperti membuat stiker, mengedit foto, mengunduh video, dan fitur menarik lainnya.`,
      projectsDetail6: `Web untuk mengakses 10+ model AI terbaik — GPT, Claude, DeepSeek, Kimi, GLM, dan lainnya — lewat satu API key.`,
      projectsDetail7: `Pelacak game gratis dan diskon dari Epic Games, Steam, GOG, Prime Gaming, dan lainnya. Dapat notifikasi instan begitu ada giveaway baru — tanpa login, 100% gratis.`,
      projectsDetail8: `Platform tip berbasis web untuk mendukung kreator favoritmu melalui donasi yang mudah dan aman.`,
      linkProjects: "Lihat Detail",
      favSong: "Lagu Favorit",
      descFavSong: "Ini adalah lagu favorit saya. Silakan dengarkan!",
    },
    en: {
      bahasa: "Language",
      indonesia: "Indonesian",
      inggris: "English",
      jepang: "Japanese",
      cina: "Chinese",
      homeText: "Home",
      subjudul: "Student & Software Developer",
      deskripsi: "Hi, I'm Jauhariel. I love watching movies and coding!",
      ctaAbout: "About Me",
      ctaProjects: "My Projects",
      aboutText: "About Me",
      projectsText: "My Projects",
      kembali: "Back",
      about1: `Hi 👋, I am a student majoring in <span class="font-bold">Software Engineering</span> at <span class="font-bold">Bina Sarana Informatika University</span>. 
               I am very passionate about technology, especially in web development.`,
      about2: `I have mastered various technologies that support web development, including:`,
      sertifikat: "Certificates",
      linkSertifikat: "View Certificate",
      hubungiText: "Contact Me",
      hubungiDeskripsi: `I am always excited to connect with new people and share insights with those who have similar interests. 
                        Feel free to reach out to me through one of the platforms below. Let's discuss, collaborate, or simply exchange ideas!`,
      projectsDeskripsi:
        "Here are some projects I have worked on. Click on a project to see more details.",
      projectsDetail1: `An AI chat with expressions that change based on the mood of the conversation.`,
      projectsDetail2: `A simple game inspired by Herta Kuru. Click the "Kuru" button to increase the kuru count and watch the Vtuber character perform kuru-kuru actions.`,
      projectsDetail3: `A simple bot designed to automatically view and like your friends' WhatsApp stories or statuses. This bot also comes with various additional features.`,
      projectsDetail4: `A simple bot designed to control a cabinet automatically using a Telegram bot.`,
      projectsDetail5: `A simple WhatsApp & Telegram bot designed to simplify daily needs, such as creating stickers, editing photos, downloading videos, and other exciting features.`,
      projectsDetail6: `A website to access 10+ top AI models — GPT, Claude, DeepSeek, Kimi, GLM, and more — through a single API key.`,
      projectsDetail7: `A tracker for free games and discounts from Epic Games, Steam, GOG, Prime Gaming, and more. Get instant notifications when a new giveaway drops — no login, 100% free.`,
      projectsDetail8: `A web-based tipping platform that lets fans support their favorite creators through easy and secure donations.`,
      linkProjects: "View Details",
      favSong: "Favorite Song",
      descFavSong: "This is my favorite song. Feel free to listen!",
    },
    jp: {
      bahasa: "言語",
      indonesia: "インドネシア語",
      inggris: "英語",
      jepang: "日本語",
      cina: "中国語",
      homeText: "ホーム",
      subjudul: "学生 & ソフトウェア開発者",
      deskripsi:
        "こんにちは、ジャウハリエルです。映画鑑賞 とコーディング が大好きです！",
      ctaAbout: "私について",
      ctaProjects: "プロジェクト",
      aboutText: "私について",
      projectsText: "私のプロジェクト",
      kembali: "戻る",
      about1: `こんにちは 👋、私は <span class="font-bold">Bina Sarana Informatika University</span> の <span class="font-bold">ソフトウェア工学</span> 専攻の学生です。 
               私は技術の世界、特にウェブ開発に非常に情熱を持っています。`,
      about2: `私は、ウェブ開発をサポートするさまざまな技術を習得しました。その中には、`,
      sertifikat: "証明書",
      linkSertifikat: "証明書を見る",
      hubungiText: "私に連絡する",
      hubungiDeskripsi: `私は新しい人々とつながり、同じ興味を持つ人々と洞察を共有することに常に興奮しています。 
                        以下のプラットフォームのいずれかを通じてお気軽にご連絡ください。一緒に議論したり、協力したり、単にアイデアを交換したりしましょう！`,
      projectsDeskripsi:
        "以下は私が取り組んだプロジェクトのいくつかです。プロジェクトをクリックして詳細を確認してください。",
      projectsDetail1: `会話のムードに合わせて表情が変わるAIチャットです。`,
      projectsDetail2: `ヘルタ・クルに触発されたシンプルなゲームです。「クル」ボタンをクリックしてクルの数を増やし、Vtuberキャラクターがクルクルアクションを行うのを見てください。`,
      projectsDetail3: `友達のWhatsAppストーリーやステータスを自動的に表示して「いいね」するように設計されたシンプルなボットです。このボットにはさまざまな追加機能も備わっています。`,
      projectsDetail4: `Telegramボットを使用してキャビネットを自動的に制御するように設計されたシンプルなボットです。`,
      projectsDetail5: `日常のニーズを簡素化するために設計されたシンプルなWhatsApp & Telegramボットです。たとえば、ステッカーの作成、写真の編集、ビデオのダウンロード、その他のエキサイティングな機能があります。`,
      projectsDetail6: `GPT、Claude、DeepSeek、Kimi、GLMなど、10以上のトップAIモデルに1つのAPIキーでアクセスできるウェブサイトです。`,
      projectsDetail7: `Epic Games、Steam、GOG、Prime Gamingなどの無料ゲームや割引を追跡するトラッカーです。新しい配布が始まった瞬間に通知を受け取れます — ログイン不要、100%無料。`,
      projectsDetail8: `ファンがお気に入りのクリエイターを簡単かつ安全な投げ銭で支援できるWebサービスです。`,
      linkProjects: "詳細を見る",
      favSong: "お気に入りの曲",
      descFavSong: "これは私のお気に入りの曲です。ぜひ聴いてみてください！",
    },
    zh: {
      bahasa: "语言",
      indonesia: "印尼语",
      inggris: "英语",
      jepang: "日语",
      cina: "中文",
      homeText: "主页",
      subjudul: "学生 & 软件开发者",
      deskripsi: "你好，我是Jauhariel。我喜欢看电影 和编程！",
      ctaAbout: "关于我",
      ctaProjects: "我的项目",
      aboutText: "关于我",
      projectsText: "我的项目",
      kembali: "返回",
      about1: `你好 👋，我是<span class="font-bold">Bina Sarana Informatika University</span>的<span class="font-bold">软件工程</span>专业学生。
               我对技术世界充满热情，特别是在网站开发方面。`,
      about2: `我已经掌握了支持网站开发的各种技术，包括：`,
      sertifikat: "证书",
      linkSertifikat: "查看证书",
      hubungiText: "联系我",
      hubungiDeskripsi: `我总是很兴奋能与新朋友建立联系，并与有相似兴趣的人分享见解。
                        请随时通过以下平台之一联系我。让我们一起讨论、合作或简单地交流想法！`,
      projectsDeskripsi: "以下是我参与的一些项目。点击项目查看更多详情。",
      projectsDetail1: `一款 AI 聊天应用，表情会根据对话的情绪而变化。`,
      projectsDetail2: `一个受Herta Kuru启发的简单游戏。点击"Kuru"按钮增加kuru数量，观看Vtuber角色执行kuru-kuru动作。`,
      projectsDetail3: `一个简单的机器人，设计用于自动查看和点赞您朋友的WhatsApp故事或状态。这个机器人还配备了各种额外功能。`,
      projectsDetail4: `一个简单的机器人，设计用于使用Telegram机器人自动控制柜子。`,
      projectsDetail5: `一个简单的WhatsApp & Telegram机器人，设计用于简化日常需求，如创建贴纸、编辑照片、下载视频和其他令人兴奋的功能。`,
      projectsDetail6: `通过一个 API 密钥访问 10+ 顶级 AI 模型的网站 — 包括 GPT、Claude、DeepSeek、Kimi、GLM 等。`,
      projectsDetail7: `追踪 Epic Games、Steam、GOG、Prime Gaming 等平台的免费游戏和折扣。新赠品发布时立即收到通知 — 无需登录，完全免费。`,
      projectsDetail8: `一个网页打赏平台，让粉丝通过简单安全的方式支持自己喜爱的创作者。`,
      linkProjects: "查看详情",
      favSong: "最喜欢的歌曲",
      descFavSong: "这是我最喜欢的歌曲。请随意聆听！",
    },
  };

  // Function to switch language
  function switchLanguage(lang) {
    const text = languages[lang];

    $(".bahasa").text(text.bahasa);
    $(".indonesia").text(text.indonesia);
    $(".inggris").text(text.inggris);
    $(".jepang").text(text.jepang);
    $(".chinese").text(text.cina);
    $(".home-text").text(text.homeText);
    $(".subjudul").text(text.subjudul);
    $(".deskripsi").text(text.deskripsi);
    $(".cta-about-text").text(text.ctaAbout);
    $(".cta-projects-text").text(text.ctaProjects);
    $(".about-text").text(text.aboutText);
    $(".projects-text").text(text.projectsText);
    $(".kembali").text(text.kembali);
    $(".about1").html(text.about1);
    $(".about2").text(text.about2);
    $(".sertifikat").text(text.sertifikat);
    $(".link-sertifikat").text(text.linkSertifikat);
    $(".hubungi-text").text(text.hubungiText);
    $(".hubungi-deskripsi").text(text.hubungiDeskripsi);
    $(".projects-deskripsi").text(text.projectsDeskripsi);
    $(".projects-detail1").text(text.projectsDetail1);
    $(".projects-detail2").text(text.projectsDetail2);
    $(".projects-detail3").text(text.projectsDetail3);
    $(".projects-detail4").text(text.projectsDetail4);
    $(".projects-detail5").text(text.projectsDetail5);
    $(".projects-detail6").text(text.projectsDetail6);
    $(".projects-detail7").text(text.projectsDetail7);
    $(".projects-detail8").text(text.projectsDetail8);
    $(".link-projects").text(text.linkProjects);
    $(".fav-song").text(text.favSong);
    $(".desc-fav-song").text(text.descFavSong);
  }

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Fungsi deteksi bahasa browser ke id/en/jp/zh
  function detectLang() {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.startsWith("id")) return "id";
    if (lang.startsWith("ja")) return "jp";
    if (lang.startsWith("zh")) return "zh";
    return "en";
  }

  // Saat halaman load, cek cookie/localStorage, kalau tidak ada pakai browser
  let selectedLang = getCookie("lang");
  if (!selectedLang) {
    selectedLang = detectLang();
    setCookie("lang", selectedLang, 30);
  }
  switchLanguage(selectedLang);

  // Saat klik ganti bahasa, simpan ke cookie
  $(".indonesia").click(function () {
    setCookie("lang", "id", 30);
    switchLanguage("id");
  });
  $(".inggris").click(function () {
    setCookie("lang", "en", 30);
    switchLanguage("en");
  });
  $(".jepang").click(function () {
    setCookie("lang", "jp", 30);
    switchLanguage("jp");
  });
  $(".chinese").click(function () {
    setCookie("lang", "zh", 30);
    switchLanguage("zh");
  });

  const audioPlayer = $("#audioPlayer")[0];
  const playPauseBtn = $("#playPauseBtn");
  const progressBar = $("#progressBar");
  const currentTime = $("#currentTime");
  const duration = $("#duration");

  // Update duration when metadata is loaded
  audioPlayer.addEventListener("loadedmetadata", () => {
    duration.text(formatTime(audioPlayer.duration));
  });

  // Play/Pause functionality with mobile-friendly approach
  playPauseBtn.click(() => {
    if (audioPlayer.paused) {
      // For mobile devices, ensure user interaction has occurred
      audioPlayer
        .play()
        .then(() => {
          playPauseBtn.html('<i class="fas fa-pause"></i>');
        })
        .catch((error) => {
          console.log("Playback prevented:", error);
        });
    } else {
      audioPlayer.pause();
      playPauseBtn.html('<i class="fas fa-play"></i>');
    }
  });

  // Update progress bar and current time
  audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.val(progress);
    // Update progress bar background
    progressBar.css(
      "background",
      `linear-gradient(to right, #00f0ff 0%, #00f0ff ${progress}%, #1d2941 ${progress}%, #1d2941 100%)`
    );
    currentTime.text(formatTime(audioPlayer.currentTime));
  });

  audioPlayer.addEventListener("ended", () => {
    playPauseBtn.html('<i class="fas fa-play"></i>'); // Ubah ikon menjadi play
  });

  // Seek functionality with better mobile support
  progressBar.on("input change", function () {
    audioPlayer.currentTime = (this.value / 100) * audioPlayer.duration;
    const progress = this.value;
    $(this).css(
      "background",
      `linear-gradient(to right, #00f0ff 0%, #00f0ff ${progress}%, #1d2941 ${progress}%, #1d2941 100%)`
    );
  });

  // ====================================================================
  //  LIRIK KARAOKE (subtitle ke-sync)
  // --------------------------------------------------------------------
  //  CARA EDIT: ganti isi array `lyrics` di bawah.
  //    t    = waktu MULAI baris, dalam detik (boleh desimal, mis. 12.5)
  //    text = teks liriknya. Pakai "" atau "♪" untuk jeda instrumental.
  //  Urutkan dari t terkecil ke terbesar.
  //
  //  CARA CARI TIMING GAMPANG:
  //    1. Buka halaman ini, lalu buka Console browser (F12).
  //    2. Ketik   startLyricTimer()   lalu Enter, terus play lagunya.
  //    3. Tekan SPASI tiap kali pindah baris -> baris "{ t: .., text: '' },"
  //       tercetak di console. Salin angkanya ke array `lyrics`.
  // ====================================================================
  const lyrics = [
    { t: 0, text: "When the seasons change" },
    { t: 4, text: "you won't feel the same at all" },
    { t: 10, text: "Because summer will turn into fall" },
    { t: 17, text: "Then you'll leave me," },
    { t: 20, text: "you're gone" },
    { t: 23, text: "You don't need me at all" },
    { t: 30, text: "Like the trees in the autumn breeze" },
    { t: 36, text: "It's ironic the way that you leave" },
    { t: 43, text: "Oooooo" },
    { t: 56, text: "Like the trees in the autumn breeze" },
    { t: 62, text: "It's ironic the way that you leave" },
    { t: 69, text: "Thank you for listening" },
  ];

  const lyricsBox = $("#lyricsBox");
  const lyricLine = $("#lyricLine");
  let activeLyric = -1;

  if (lyrics.length) lyricsBox.removeClass("hidden");

  // Teks awal sebelum lagu diputar — keganti lirik begitu diplay
  lyricLine.text("play music?").addClass("show");

  function syncLyrics(time) {
    if (!lyrics.length) return;
    // baris aktif = baris terakhir yang t-nya <= waktu sekarang
    let idx = -1;
    for (let i = 0; i < lyrics.length; i++) {
      if (lyrics[i].t <= time) idx = i;
      else break;
    }
    if (idx === activeLyric) return;
    activeLyric = idx;

    // fade out, ganti teks, lalu fade in
    lyricLine.removeClass("show");
    setTimeout(() => {
      lyricLine.text(idx >= 0 ? lyrics[idx].text : "");
      if (idx >= 0) lyricLine.addClass("show");
    }, 220);
  }

  audioPlayer.addEventListener("timeupdate", () => syncLyrics(audioPlayer.currentTime));

  // Timing helper (dev only) — lihat instruksi di komentar array `lyrics`.
  window.startLyricTimer = function () {
    console.log(
      "%cLyric timer aktif. Play lagu, tekan SPASI tiap ganti baris.",
      "color:#0ff;font-weight:bold"
    );
    document.addEventListener("keydown", function (e) {
      if (e.code === "Space") {
        e.preventDefault();
        console.log(`{ t: ${audioPlayer.currentTime.toFixed(1)}, text: "" },`);
      }
    });
  };

  // Format time in mm:ss
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }
});
