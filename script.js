// ====== 1. SIAPIN "KERTAS" KERANJANG ======
// ====== DATA MENU (EDIT DI SINI BUAT NAMBAH/UBAH MENU) ======
const daftarMinuman = [
  // --- KOPI & SANGER ---
  { nama: 'Kopi Pancung',           harga: 6000,  kategori: 'Kopi' },
  { nama: 'Kopi',                   harga: 8000,  kategori: 'Kopi' },
  { nama: 'Kopi Dingin',            harga: 15000, kategori: 'Kopi' },
  { nama: 'Sanger Pancung',         harga: 9000,  kategori: 'Kopi' },
  { nama: 'Sanger',                 harga: 10000, kategori: 'Kopi' },
  { nama: 'Sanger Dingin',          harga: 17000, kategori: 'Kopi' },
  { nama: 'Kopi Khop',              harga: 10000, kategori: 'Kopi' },
  { nama: 'Nen (Kopi Khop Susu)',   harga: 15000, kategori: 'Kopi' },
  { nama: 'Tower',                  harga: 23000, kategori: 'Kopi' },

  // --- CAPPUCINO ---
  { nama: 'Cappucino Panas',        harga: 10000, kategori: 'Cappucino' },
  { nama: 'Cappucino Hangat',       harga: 13000, kategori: 'Cappucino' },
  { nama: 'Cappucino Dingin',       harga: 17000, kategori: 'Cappucino' },
  { nama: 'Cappucino Susu Panas',   harga: 13000, kategori: 'Cappucino' },
  { nama: 'Cappucino Susu Hangat',  harga: 18000, kategori: 'Cappucino' },
  { nama: 'Cappucino Susu Dingin',  harga: 23000, kategori: 'Cappucino' },

  // --- PODING & BMW ---
  { nama: 'Poding 2 Telor',         harga: 15000, kategori: 'Poding & BMW' },
  { nama: 'Poding 3 Telor',         harga: 18000, kategori: 'Poding & BMW' },
  { nama: 'Bmw Kopi Panas',         harga: 17000, kategori: 'Poding & BMW' },
  { nama: 'Bmw Teh Panas',          harga: 17000, kategori: 'Poding & BMW' },
  { nama: 'Bmw Milo Panas',         harga: 18000, kategori: 'Poding & BMW' },
  { nama: 'Bmw Teh Hijau Panas',    harga: 18000, kategori: 'Poding & BMW' },
  { nama: 'Bmw Double Telur',       harga: 22000, kategori: 'Poding & BMW' },

  // --- SUSU ---
  { nama: 'Susu Panas',             harga: 10000, kategori: 'Susu' },
  { nama: 'Susu Hangat',            harga: 15000, kategori: 'Susu' },
  { nama: 'Susu Dingin',            harga: 18000, kategori: 'Susu' },

  // --- MILO ---
  { nama: 'Milo Panas',             harga: 8000,  kategori: 'Milo' },
  { nama: 'Milo Hangat',            harga: 12000, kategori: 'Milo' },
  { nama: 'Milo Dingin',            harga: 15000, kategori: 'Milo' },
  { nama: 'Milo Susu Panas',        harga: 13000, kategori: 'Milo' },
  { nama: 'Milo Susu Hangat',       harga: 15000, kategori: 'Milo' },
  { nama: 'Milo Susu Dingin',       harga: 20000, kategori: 'Milo' },

  // --- TEH ---
  { nama: 'Teh Panas',              harga: 5000,  kategori: 'Teh' },
  { nama: 'Teh Hangat',             harga: 7000,  kategori: 'Teh' },
  { nama: 'Teh Dingin',             harga: 8000,  kategori: 'Teh' },
  { nama: 'Teh Susu Panas',         harga: 10000, kategori: 'Teh' },
  { nama: 'Teh Susu Hangat',        harga: 13000, kategori: 'Teh' },
  { nama: 'Teh Susu Dingin',        harga: 18000, kategori: 'Teh' },
  { nama: 'Teh Hijau Panas',        harga: 7000,  kategori: 'Teh' },
  { nama: 'Teh Hijau Hangat',       harga: 10000, kategori: 'Teh' },
  { nama: 'Teh Hijau Dingin',       harga: 12000, kategori: 'Teh' },
  { nama: 'Teh Hijau Susu Panas',   harga: 15000, kategori: 'Teh' },
  { nama: 'Teh Hijau Susu Hangat',  harga: 18000, kategori: 'Teh' },
  { nama: 'Teh Hijau Susu Dingin',  harga: 20000, kategori: 'Teh' },
  { nama: 'Teh Tarek Hangat',       harga: 15000, kategori: 'Teh' },
  { nama: 'Teh Tarek Dingin',       harga: 20000, kategori: 'Teh' },
  { nama: 'Teh Tarek Hijau Hangat', harga: 17000, kategori: 'Teh' },
  { nama: 'Teh Tarek Hijau Dingin', harga: 23000, kategori: 'Teh' },

  // --- SERAI & LEMON ---
  { nama: 'Serai Jahe Madu Ori',    harga: 20000, kategori: 'Serai & Lemon' },
  { nama: 'Serai Jahe Susu',        harga: 17000, kategori: 'Serai & Lemon' },
  { nama: 'Lemon Tea Panas',        harga: 15000, kategori: 'Serai & Lemon' },
  { nama: 'Lemon Tea Hangat',       harga: 17000, kategori: 'Serai & Lemon' },
  { nama: 'Lemon Tea Dingin',       harga: 18000, kategori: 'Serai & Lemon' },
  { nama: 'Lemon Madu Hangat',      harga: 20000, kategori: 'Serai & Lemon' },
  { nama: 'Lemon Madu Dingin',      harga: 23000, kategori: 'Serai & Lemon' },

  // --- MINUMAN LAIN ---
  { nama: 'Nutrisari Dingin',       harga: 10000, kategori: 'Lainnya' },
  { nama: 'Kukubima Dingin',        harga: 10000, kategori: 'Lainnya' },
  { nama: 'Kukubima Susu Dingin',   harga: 15000, kategori: 'Lainnya' },
  { nama: 'Extra Joss Dingin',      harga: 10000, kategori: 'Lainnya' },
  { nama: 'Extra Joss Susu Dingin', harga: 15000, kategori: 'Lainnya' },
  { nama: 'Bir Pala',               harga: 20000, kategori: 'Lainnya' },
];

// ====== STATE (yang lagi aktif) ======
let keranjang = [];
let kategoriAktif = 'Semua';
let kataCari = '';

const isiKeranjang = document.getElementById('isi-keranjang');
const totalHarga = document.getElementById('total-harga');

// ====== BIKIN TOMBOL KATEGORI ======
function tampilkanTombolKategori() {
  // Ambil daftar kategori unik dari data, + 'Semua' di depan
  const kategoriUnik = ['Semua', ...new Set(daftarMinuman.map(m => m.kategori))];
  const wadah = document.getElementById('tombol-kategori');

  let html = '';
  kategoriUnik.forEach(function (kat) {
    const aktif = kat === kategoriAktif ? 'aktif' : '';
    html += `<button class="tombol-kategori ${aktif}" data-kategori="${kat}">${kat}</button>`;
  });

  wadah.innerHTML = html;
}

// ====== TAMPILIN MENU (dengan filter kategori + pencarian) ======
function tampilkanMenu() {
  const wadah = document.getElementById('daftar-menu');
  let html = '';
  let jumlah = 0;

  daftarMinuman.forEach(function (minuman) {
    const cocokCari = kataCari === '' || minuman.nama.toLowerCase().includes(kataCari.toLowerCase());
    const cocokKategori = kataCari !== '' || kategoriAktif === 'Semua' || minuman.kategori === kategoriAktif;

    if (cocokCari && cocokKategori) {
      jumlah++;
      html += `
        <div class="kartu-minuman" data-nama="${minuman.nama}" data-harga="${minuman.harga}">
          <h3>${minuman.nama}</h3>
          <p>Rp ${minuman.harga.toLocaleString('id-ID')}</p>
          <button class="tombol-tambah">Tambah</button>
        </div>
      `;
    }
  });

  if (jumlah === 0) {
    html = '<p class="tidak-ditemukan">Minuman tidak ditemukan 😅</p>';
  }

  wadah.innerHTML = html;
}

// ====== EVENT: KLIK TOMBOL KATEGORI ======
document.getElementById('tombol-kategori').addEventListener('click', function (e) {
  if (e.target.classList.contains('tombol-kategori')) {
    kategoriAktif = e.target.dataset.kategori;
    tampilkanTombolKategori();   // update tombol mana yang aktif
    tampilkanMenu();             // render ulang menu
  }
});

// ====== EVENT: KETIK DI KOLOM PENCARIAN ======
document.getElementById('input-cari').addEventListener('input', function (e) {
  kataCari = e.target.value;
  tampilkanMenu();
});

// ====== EVENT: KLIK TOMBOL "TAMBAH" ======
document.getElementById('daftar-menu').addEventListener('click', function (e) {
  if (e.target.classList.contains('tombol-tambah')) {
    const kartu = e.target.parentElement;
    const nama = kartu.dataset.nama;
    const harga = parseInt(kartu.dataset.harga);
    tambahKeKeranjang(nama, harga);
  }
});

// ====== JALANIN PAS HALAMAN DIBUKA ======
tampilkanTombolKategori();
tampilkanMenu();

// ====== PAS TOMBOL "TAMBAH" DIKLIK ======
// Pakai teknik "event delegation": 1 listener buat semua tombol
document.getElementById('daftar-menu').addEventListener('click', function (e) {
  if (e.target.classList.contains('tombol-tambah')) {
    const kartu = e.target.parentElement;
    const nama = kartu.dataset.nama;
    const harga = parseInt(kartu.dataset.harga);

    tambahKeKeranjang(nama, harga);
  }
});

// ====== JALANIN PAS HALAMAN DIBUKA ======
tampilkanMenu();

// ====== 4. FUNGSI NAMBAH KE KERANJANG ======
function tambahKeKeranjang(nama, harga) {
  // Cek: udah ada di keranjang belum?
  const itemAda = keranjang.find(item => item.nama === nama);

  if (itemAda) {
    itemAda.jumlah += 1;         // kalau udah ada, tambah jumlahnya
  } else {
    keranjang.push({ nama: nama, harga: harga, jumlah: 1 });  // kalau belum, masukin baru
  }

  tampilkanKeranjang();          // gambar ulang tampilannya
}

// ====== 5. FUNGSI NAMPILIN KERANJANG ======
function tampilkanKeranjang() {
  // Kalau keranjang kosong
  if (keranjang.length === 0) {
    isiKeranjang.innerHTML = '<p class="kosong">Belum ada pesanan</p>';
    totalHarga.textContent = 'Rp 0';
    return;
  }

  // Kalau ada isinya, gambar tiap item
  let html = '';
  let total = 0;

  keranjang.forEach(function (item, index) {
    const subtotal = item.harga * item.jumlah;
    total += subtotal;

    html += `
      <div class="item-keranjang">
        <div class="info">
          <div class="nama">${item.nama}</div>
          <div class="harga">Rp ${item.harga.toLocaleString('id-ID')}</div>
        </div>
        <div class="atur">
          <button onclick="kurangJumlah(${index})">−</button>
          <span>${item.jumlah}</span>
          <button onclick="tambahJumlah(${index})">+</button>
        </div>
      </div>
    `;
  });

  isiKeranjang.innerHTML = html;
  totalHarga.textContent = 'Rp ' + total.toLocaleString('id-ID');
}

// ====== 6. FUNGSI TAMBAH / KURANG JUMLAH ======
function tambahJumlah(index) {
  keranjang[index].jumlah += 1;
  tampilkanKeranjang();
}

function kurangJumlah(index) {
  keranjang[index].jumlah -= 1;
  if (keranjang[index].jumlah <= 0) {
    keranjang.splice(index, 1);   // kalau 0, hapus dari keranjang
  }
  tampilkanKeranjang();
}

// ====== 7. TOMBOL CHECKOUT → BUKA MODAL ======
const tombolCheckout = document.getElementById('tombol-checkout');
const modalPemesan = document.getElementById('modal-pemesan');
const tombolBatal = document.getElementById('tombol-batal');
const tombolKirim = document.getElementById('tombol-kirim');
const pesanError = document.getElementById('pesan-error');

tombolCheckout.addEventListener('click', function () {
  // Cek dulu: keranjang kosong gak?
  if (keranjang.length === 0) {
    alert('Keranjang masih kosong bro, pilih minuman dulu 😄');
    return;
  }
  modalPemesan.classList.remove('modal-sembunyi');
  modalPemesan.classList.add('modal-muncul');
});

// ====== 8. TOMBOL BATAL → TUTUP MODAL ======
tombolBatal.addEventListener('click', function () {
  tutupModal();
});

function tutupModal() {
  modalPemesan.classList.remove('modal-muncul');
  modalPemesan.classList.add('modal-sembunyi');
  pesanError.textContent = '';
}

// ====== 9. TOMBOL KIRIM → VALIDASI DULU ======
tombolKirim.addEventListener('click', function () {
  const nama = document.getElementById('input-nama').value.trim();
  const alamat = document.getElementById('input-alamat').value.trim();
  const catatan = document.getElementById('input-catatan').value.trim();

  // Validasi simpel
  if (nama === '') {
    pesanError.textContent = 'Nama wajib diisi bro!';
    return;
  }
  if (alamat === '') {
    pesanError.textContent = 'No meja / alamat wajib diisi bro!';
    return;
  }

  // Kalau semua oke, susun data pesanan
  const dataPesanan = {
    pemesan: { nama: nama, alamat: alamat, catatan: catatan },
    pesanan: keranjang,
    total: keranjang.reduce((sum, item) => sum + item.harga * item.jumlah, 0)
  };

  // Sementara: tampilin di console aja dulu
  console.log('DATA PESANAN:', dataPesanan);
  alert('Pesanan siap dikirim! (cek Console buat lihat datanya)');

  tutupModal();
});

// ====== 9. TOMBOL KIRIM → VALIDASI → KIRIM KE WA ======
tombolKirim.addEventListener('click', function () {
  const nama = document.getElementById('input-nama').value.trim();
  const alamat = document.getElementById('input-alamat').value.trim();
  const catatan = document.getElementById('input-catatan').value.trim();

  // Validasi simpel
  if (nama === '') {
    pesanError.textContent = 'Nama wajib diisi bro!';
    return;
  }
  if (alamat === '') {
    pesanError.textContent = 'No meja / alamat wajib diisi bro!';
    return;
  }

  // ====== BIKIN PESAN WHATSAPP ======
  const nomorWA = '6282184053433';

  let pesan = '🍹 *PESANAN BARU*\n\n';
  pesan += `👤 Nama: ${nama}\n`;
  pesan += `📍 No Meja/Alamat: ${alamat}\n`;
  if (catatan !== '') {
    pesan += `📝 Catatan: ${catatan}\n`;
  }
  pesan += '\n━━━━━━━━━━━━━━\n';
  pesan += '*Detail Pesanan:*\n\n';

  let total = 0;
  keranjang.forEach(function (item) {
    const subtotal = item.harga * item.jumlah;
    total += subtotal;
    pesan += `• ${item.nama} x${item.jumlah} = Rp ${subtotal.toLocaleString('id-ID')}\n`;
  });

  pesan += '\n━━━━━━━━━━━━━━\n';
  pesan += `💰 *TOTAL: Rp ${total.toLocaleString('id-ID')}*\n`;

  // ====== BUKA WHATSAPP ======
  const url = `https://api.whatsapp.com/send?phone=${nomorWA}&text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');

  // Reset & tutup
  tutupModal();
  keranjang = [];
  tampilkanKeranjang();
});
