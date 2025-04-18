// Produk data
const products = [
  {
    name: "Smart TV TCL 32 Inch",
    category: "elektronik",
    images: [
      "assets/images/tcl.jpg",
      "assets/images/tcl2.jpg",
      "assets/images/tcl3.jpg",
      "assets/images/tcl4.jpg",
      "assets/images/tcl5.jpg",
      "assets/images/tcl6.jpg"
    ],
    description: "Nikmati pengalaman menonton luar biasa dengan Smart TV TCL 32 inch. Didukung layar HD yang jernih dan audio Dolby berkualitas tinggi, membuat tontonan Anda jadi lebih hidup. Cocok untuk hiburan keluarga!",
    link: "https://s.shopee.co.id/9pQsx3xE2t?share_channel_code=1",
    video: "assets/videos/smartwatch-demo.mp4"
  },
  {
    name: "Keyboard Robot Workmate III",
    category: "gadget",
    images: [
      "assets/images/keyboard.jpg",
      "assets/images/keyboard3.jpg",
      "assets/images/keyboard4.jpg",
      "assets/images/keyboard5.jpg",
      "assets/images/keyboard6.jpg",
      "assets/images/keyboard7.jpg",
      "assets/images/keyboard8.jpg"
    ],
    description: "Tingkatkan produktivitas dan gaya dengan Keyboard Robot Workmate III. Hadir dengan efek lighting Rainbow yang memukau, kombinasi warna yang bisa diatur, serta desain compact yang nyaman digunakan lama-lama.",
    link: "https://s.shopee.co.id/3VWpP5yp4k?share_channel_code=1",
    video: "assets/videos/keyboard.mp4"
  },
  {
    name: "Mouse GOOJODOQ Dual Mode 2.4GHz",
    category: "gadget",
    images: [
      "assets/images/mouse.jpg",
      "assets/images/mouse2.jpg",
      "assets/images/mouse3.jpg",
      "assets/images/mouse4.jpg",
      "assets/images/mouse5.jpg",
      "assets/images/mouse6.jpg",
      "assets/images/mouse7.jpg",
      "assets/images/mouse8.jpg",
      "assets/images/mouse9.jpg",
      "assets/images/mouse10.jpg",
      "assets/images/mouse11.jpg",
      "assets/images/mouse12.jpg",
      "assets/images/mouse13.jpg",
      "assets/images/mouse14.jpg",
    ],
    description: "Mouse wireless Goojodoq menghadirkan kenyamanan luar biasa dan tampilan elegan. Dual-mode: Bluetooth & 2.4GHz, dilengkapi pencahayaan stylish, cocok untuk kerja maupun gaming. Desain ergonomis dan responsif.",
    link: "https://s.shopee.co.id/7V2yAYFkai?share_channel_code=1",
    video: "assets/videos/mouse.mp4"
  },
  {
    name: "GOOJODOQ J201 Earphone bluetooth TWS-A6",
    category: "gadget",
    images: [
      "assets/images/tws.jpg",
      "assets/images/tws2.jpg",
      "assets/images/tws3.jpg",
      "assets/images/tws4.jpg",
      "assets/images/tws5.jpg",
      "assets/images/tws6.jpg",
      "assets/images/tws7.jpg",
      "assets/images/tws8.jpg",
      "assets/images/tws9.jpg",
      "assets/images/tws10.jpg",
      "assets/images/tws11.jpg",
      "assets/images/tws12.jpg",
      "assets/images/tws13.jpg"
    ],
    description: "Temukan kualitas suara terbaik dengan Goojodoq J201 TWS-A6 Pro, earphone bluetooth nirkabel yang dilengkapi teknologi Bluetooth 5.3 untuk koneksi cepat dan stabil. Desain ergonomis, ringan, dan nyaman dipakai seharian. Cocok untuk mendengarkan musik, bermain game, hingga meeting online. Dilengkapi kontrol sentuh pintar dan baterai tahan lama. Pilihan ideal untuk kamu yang aktif dan mobile!.",
    link: "https://s.shopee.co.id/7pfoZGhgGq?share_channel_code=1",
    video: "assets/videos/tws.mp4"
  },
  {
    name: "WANKEI LENTIVEN Earphone",
    category: "gadget",
    images: [
      "assets/images/wankei.jpg",
      "assets/images/wankei2.jpg",
      "assets/images/wankei3.jpg",
      "assets/images/wankei4.jpg",
      "assets/images/wankei5.jpg",
      "assets/images/wankei6.jpg",
      "assets/images/wankei7.jpg"
    ],
    description: "Temukan kualitas suara terbaik dengan Headset Bluetooth Tahan Air Touch HiFi Stereo Wireless PRO6, earphone bluetooth nirkabel yang dilengkapi teknologi Bluetooth 5.3 untuk koneksi cepat dan stabil. Desain ergonomis, ringan, dan nyaman dipakai seharian. Cocok untuk mendengarkan musik, bermain game, hingga meeting online. Dilengkapi kontrol sentuh pintar dan baterai tahan lama. Pilihan ideal untuk kamu yang aktif dan mobile!.",
    link: "https://s.shopee.co.id/6Kr3tZ992U?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Paket 5 PC 100RB Kaos Mix Brand Matahari",
    category: "fashion_pria",
    images: [
      "assets/images/kaos.jpg",
      "assets/images/kaos2.jpg",
      "assets/images/kaos3.jpg",
      "assets/images/kaos4.jpg",
      "assets/images/kaos5.jpg",
      "assets/images/kaos6.jpg"
    ],
    description: "Kaos Pria 4 Pcs 100 Ribu | Kaos Pria Branded 100 Ribu 4 Pcs | Kaos Pria | Kaos Distro Pria | Kaos Cowok Premium.",
    link: "https://s.shopee.co.id/60EDV3GeUD?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Promo 4 pcs celana pendek pria wanita",
    category: ["fashion_pria", "fashion_wanita"],
    images: [
      "assets/images/celana.jpg",
      "assets/images/celana2.jpg",
      "assets/images/celana3.jpg",
      "assets/images/celana4.jpg",
      "assets/images/celana5.jpg",
      "assets/images/celana6.jpg",
      "assets/images/celana7.jpg",
      "assets/images/celana8.jpg"
    ],
    description: "dewasa santai baby terry saku resleting jumbo.",
    link: " https://s.shopee.co.id/AA3mSlQFdt?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Sepatu Running Pria Sneaker",
    category: "fashion_pria",
    images: [
      "assets/images/sepatu.jpg",
      "assets/images/sepatu2.jpg",
      "assets/images/sepatu3.jpg",
      "assets/images/sepatu4.jpg"
    ],
    description: "Working Sneakers For You Sepatu Running Import Pria Kode T-24 Size 39 - 43.",
    link: "https://s.shopee.co.id/9zkNrJRzls?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Adaptor kaleng kompor",
    category: "perlengkapan_kemah",
    images: [
      "assets/images/adaptor.jpg",
      "assets/images/adaptor2.jpg",
      "assets/images/adaptor3.jpg",
      "assets/images/adaptor4.jpg",
      "assets/images/adaptor5.jpg",
      "assets/images/adaptor6.jpg"
    ],
    description: "adapter kaleng kemah konverter kepala tungku paduan aluminium kepala tabung bahan bakar gas peralatan berkemah kartrid pembakar piknik.",
    link: "https://s.shopee.co.id/AUgeTVuG0p?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Tas Kompor Portable gas butane",
    category: "perlengkapan_kemah",
    images: [
      "assets/images/tasgas.jpg",
      "assets/images/tasgas2.jpg",
      "assets/images/tasgas3.jpg",
      "assets/images/tasgas4.jpg",
      "assets/images/tasgas5.jpg",
      "assets/images/tasgas6.jpg"
    ],
    description: "Tas peralatan camping kemah Tas multipungsi piknik.",
    link: "https://s.shopee.co.id/x1zOrHBQ?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Tas Peralatan Kemah Tas Camping",
    category: "perlengkapan_kemah",
    images: [
      "assets/images/tascamping.jpg",
      "assets/images/tascamping2.jpg"
    ],
    description: "Tas Serbaguna Tas Kantong Alat Camping.",
    link: "https://s.shopee.co.id/AKNEItVJtj?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "SPEEDS Alat Masak Set Camping Kemah",
    category: "perlengkapan_kemah",
    images: [
      "assets/images/cookingset.jpg",
      "assets/images/cookingset2.jpg",
      "assets/images/cookingset3.jpg",
      "assets/images/cookingset4.jpg",
      "assets/images/cookingset5.jpg"
    ],
    description: "Rekreasi Paket Cooking Set Kemping Portable Minimalis Outdoor 003-200.",
    link: "https://s.shopee.co.id/6Kr5XslYGG?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "celana pendek pria distro dewasa santai",
    category: "fashion_pria",
    images: [
      "assets/images/celanasantai.jpg",
      "assets/images/celanasantai2.jpg",
      "assets/images/celanasantai3.jpg",
      "assets/images/celanasantai4.jpg",
      "assets/images/celanasantai5.jpg"
    ],
    description: "celana pendek pria distro dewasa santai.",
    link: "https://s.shopee.co.id/10pZD8sBgv?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "KABEL DATA 6A ( 3IN1) USB TO MICRO / USB TO TYPE C",
    category: "gadget",
    images: [
      "assets/images/kabeldata.jpg",
      "assets/images/kabeldata2.jpg",
      "assets/images/kabeldata3.jpg",
      "assets/images/kabeldata4.jpg",
      "assets/images/kabeldata5.jpg",
      "assets/images/kabeldata6.jpg"
    ],
    description: "KABEL DATA 6A ( 3IN1) USB TO MICRO / USB TO TYPE C / USB TO LIGHTNING 120W / 120 WATT SUPER FAST CHARGING CABLE.",
    link: "https://s.shopee.co.id/8pYQY5xIvp?share_channel_code=1",
    video: "assets/videos/kabeldata.mp4"
  },
  {
    name: "SPEEDS Meja Kurs Lipat Set Free Meja Lipat",
    category: "perlengkapan_kemah",
    images: [
      "assets/images/kursilipat.jpeg"
    ],
    description: "Kursi Lipat Outdoor Indoor Tas Folding Table Chair Portable Meja Camping Piknik 031-36",
    link: "https://s.shopee.co.id/7AQKSW1VbN?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "SPEEDS Kursi Lipat Camping Portabel Outdoor",
    category: "perlengkapan_kemah",
    images: [
      "assets/images/kursilipatspeed.jpg"
    ],
    description: "+ Tas Pendingin Multifungsi LX 031-59",
    link: "https://s.shopee.co.id/x9vOsjaf?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Rompi Outdoor Pria Dan Wanita",
    category: ["perlengkapan_kemah" , "fashion_pria" , "fashion_wanita"],
    images: [
      "assets/images/rompi.jpg"
    ],
    description: "Terbaru/Rompi Vest Anti Air Dan Anti Angin Size M-Xx",
    link: "https://s.shopee.co.id/2qHLIeTGJK?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "SPEEDS Kompor Camping Gas Alat Masak Alam",
    category: "perlengkapan_kemah",
    images: [
      "assets/images/komporportable.jpg"
    ],
    description: "Mini Kompor Lipat Bunga Anti Angin WindProof Nesting Portable+TAS 003-6",
    link: "https://s.shopee.co.id/706uGNFq9B?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "PALU MULTIFUNGSI/Palu Tang Lipat Multifunctional Axe",
    category: "perlengkapan_kemah",
    images: [
      "assets/images/palu.jpg"
    ],
    description: "Hammer Survival Tools/alat multifungsi/palu multifungsi/palu tang lipat/tang lipat",
    link: "https://s.shopee.co.id/7V3ArJw9Gz?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Lampu Lentera LED / Canping Lamp 3 COB",
    category: "perlengkapan_kemah",
    images: [
      "assets/images/lampu.jpg"
    ],
    description: "Lampu Tenda Camping Tent LED Emergency ",
    link: "https://s.shopee.co.id/BGa7rjNyK?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Tongkat Daki Gunung/ Tongkat Hiking",
    category: "perlengkapan_kemah",
    images: [
      "assets/images/tongkat.jpg"
    ],
    description: "Trekking Pole/ Trekking Pole Tongkat Treking Gunung",
    link: "https://s.shopee.co.id/9zkVq0FXyi?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Senter LED USB Isi Ulang Lampu",
    category: "perlengkapan_kemah",
    images: [
      "assets/images/senter.jpg"
    ],
    description: "Lampu Portabel Mini Isi Ulang Lampu Saku Super Terang Rumah Tangga Kecil Pencahayaan Luar Ruangan Jarak Jauh",
    link: "https://s.shopee.co.id/1g5NuiSWNI?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "ZAIN Hijab Soft Jilbab OVALIA SIZE M-L-XL",
    category: "fashion_wanita",
    images: [
      "assets/images/kerudungzain.jpg"
    ],
    description: "Oval Jumbo  Kerudung Bergo Jersey Korea High Quality Lembut Nyaman",
    link: "https://s.shopee.co.id/qWGvEm52n?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Midi Dress Quenss Rayon Premium Jumbo",
    category: "fashion_wanita",
    images: [
      "assets/images/dressquin.jpg"
    ],
    description: "Ld 120 Busui by Tukuni",
    link: "https://s.shopee.co.id/8zryeHKAau?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "HIJAB Jilbab Kerudung Pashmina Instan Oval Jersey",
    category: "fashion_wanita",
    images: [
      "assets/images/pashmina.jpg"
    ],
    description: "HIJAB Jilbab Kerudung Pashmina Instan Oval Jersey",
    link: "https://s.shopee.co.id/4fizULIGAK?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "DelikaMode - Mukena Travel Mini Pouch 2in1 Katun Premium Motif",
    category: "fashion_wanita",
    images: [
      "assets/images/mukenatravel.jpg"
    ],
    description: "DelikaMode - Mukena Travel Mini Pouch 2in1 Katun Premium Motif",
    link: "https://s.shopee.co.id/1g5NusKUhU?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Pashmina Kaos Jersey Hijab Jilbab Pasmina Premium  - Warna Lengkap",
    category: "fashion_wanita",
    images: [
      "assets/images/pashminajersey.jpg"
    ],
    description: "Pashmina Kaos Jersey Hijab Jilbab Pasmina Premium  - Warna Lengkap",
    link: "https://s.shopee.co.id/1LSXWHpkEv?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Gr Oversized / Atasan Blouse Jumbo Ld 130 BabyTerry Premium Sr300",
    category: "fashion_wanita",
    images: [
      "assets/images/atasanblouse.jpg"
    ],
    description: "Gr Oversized / Atasan Blouse Jumbo Ld 130 BabyTerry Premium Sr300",
    link: "https://s.shopee.co.id/9pR5dws7TJ?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "PASHMINA INSTAN 2IN 1 PASHMINA OVAL",
    category: "fashion_wanita",
    images: [
      "assets/images/pashminavira.jpg"
    ],
    description: "NINJA PASMINA VIRAPashmina Instan Fahira Inner Menutup Leher Sapndek JerseyL TERLARIS BEST SELLER HIJAB INSTAN JERSEY OVAL INNER TUTUP LEHER|| HIJAB PASHMINA INSTAN JERSEY OVAL PLUS INNER",
    link: "https://s.shopee.co.id/7zzRSdWk0V?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Setelan Rok One Set Rok Tunik Syar’i Full Kancing",
    category: "fashion_wanita",
    images: [
      "assets/images/tuniksyari.jpg"
    ],
    description: "Setelan Rok One Set Rok Tunik Syar’i Full Kancing Set Rok Tunik Malaya Burgundy Set Pashmina Oval",
    link: "https://s.shopee.co.id/9UoFFQZMkS?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "Mukena Calista Series | Mukena Travel Mini Parasut Premium Polos",
    category: "fashion_wanita",
    images: [
      "assets/images/mukenacalista.jpg"
    ],
    description: "Mukena Travel Pouch Model 2in1 Resleting Dagu",
    link: "https://s.shopee.co.id/4fizUZ8Cky?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "TNW W16 /W17 2 In 1 Wireless Microphone Clip On Mic Portable",
    category: "gadget",
    images: [
      "assets/images/microphonewireles.jpg",
      "assets/images/microphonewireles2.jpg"
    ],
    description: "Microphone Mikrofon Lavalier HP Untuk TikTok YouTube Facebook Live Streaming",
    link: "https://s.shopee.co.id/7AQKTEf4LL?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "TNW L16 Tongsis Tripod Bluetooth Selfie Stick Remote",
    category: "gadget",
    images: [
      "assets/images/tripod.jpg",
      "assets/images/tripod2.jpg",
      "assets/images/tripod3.jpg",
      "assets/images/tripod4.jpg"
    ],
    description: "Tripod HP  Kamera DSLR Tongsis 1800MM dengan 1/4 Adaptor",
    link: "https://s.shopee.co.id/2qHLJMxgAA?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: "MIXIO A31 MACARON EDITION Tongsis Bluetooth Selfie Stick Tripod 160CM",
    category: "gadget",
    images: [
      "assets/images/tripodmixio.jpg",
      "assets/images/tripodmixio2.jpg",
      "assets/images/tripodmixio3.jpg",
      "assets/images/tripodmixio4.jpg",
      "assets/images/tripodmixio5.jpg",
      "assets/images/tripodmixio6.jpg",
      "assets/images/tripodmixio7.jpg",
      "assets/images/tripodmixio8.jpg"
    ],
    description: "MIXIO A31 MACARON EDITION Tongsis Bluetooth Selfie Stick Tripod 160CM",
    link: "https://s.shopee.co.id/5AfG5g1jFt?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
  {
    name: " GROTIC Tripod HP Kamera Tongsis Monopod Portable 153cm",
    category: "gadget",
    images: [
      "assets/images/tripodgrotic.jpg",
      "assets/images/tripodgrotic2.jpg",
      "assets/images/tripodgrotic3.jpg"
    ],
    description: "GROTIC Tripod HP Kamera Tongsis Monopod Portable 153cm With Remote Bluetooth And Screw Mount 1/4 Q16",
    link: "https://s.shopee.co.id/8pYYSRw6cK?share_channel_code=1",
    video: "assets/videos/camera-demo.mp4"
  },
];

function displayProducts(data) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';
  
  data.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const slides = product.images.map((img, i) => `
      <div class="slide ${i === 0 ? 'active' : ''}">
        <img src="${img}" alt="${product.name}">
      </div>
    `).join('');

    card.innerHTML = `
      <div class="carousel" data-index="${index}">
        ${slides}
      </div>
      <div class="info">
        <h2>${product.name}</h2>
        <p class="short-desc">${product.description.substring(0, 100)}...</p>
        <p class="full-desc" style="display: none;">${product.description}</p>
        <button class="toggle-desc">Lihat Selengkapnya</button>
       <div class="video-review" style="display: none;">
      <video width="100%" controls>
        <source src="${product.video}" type="video/mp4">
        Browser tidak mendukung video.
      </video>
      </div>
<button class="toggle-video">Lihat Video Review</button>

        <a href="${product.link}" target="_blank">Beli Sekarang</a>
      </div>
    `;
    container.appendChild(card);
  });

  startSlideShow();
}
document.addEventListener('click', function (e) {
  const toggleBtn = e.target.closest('.toggle-desc');
  if (toggleBtn) {
    const info = toggleBtn.closest('.info');
    const shortDesc = info.querySelector('.short-desc');
    const fullDesc = info.querySelector('.full-desc');

    if (fullDesc.style.display === 'none') {
      fullDesc.style.display = 'block';
      shortDesc.style.display = 'none';
      toggleBtn.textContent = 'Sembunyikan';
    } else {
      fullDesc.style.display = 'none';
      shortDesc.style.display = 'block';
      toggleBtn.textContent = 'Lihat Deskripsi';
    }
  }
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('toggle-video')) {
    const videoContainer = e.target.previousElementSibling;

    if (videoContainer.style.display === 'none') {
      videoContainer.style.display = 'block';
      e.target.textContent = 'Sembunyikan Video';
    } else {
      videoContainer.style.display = 'none';
      e.target.textContent = 'Lihat Video Review';
    }
  }
});



function startSlideShow() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.slide');
    let currentIndex = 0;

    setInterval(() => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }, 3000);
  });
}


// Search functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function (e) {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  displayProducts(filtered);
});

displayProducts(products);

// Category filter
document.querySelectorAll('#category-filter button').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    if (category === 'all') {
      displayProducts(products);
    } else {
      const filtered = products.filter(p => 
        Array.isArray(p.category)
     ? p.category.includes(category)
     : p.category === category
      );
      displayProducts(filtered);
    }
  });
});
// Dark mode toggle
const darkToggle = document.getElementById('dark-mode-toggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
