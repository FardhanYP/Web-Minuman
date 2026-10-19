// ====== DATA MENU ======
const daftarMinuman = [
  { nama: 'Kopi Pancung', harga: 6000, kategori: 'Kopi' },
  { nama: 'Kopi', harga: 8000, kategori: 'Kopi' },
  { nama: 'Kopi Dingin', harga: 15000, kategori: 'Kopi' },
  { nama: 'Sanger Pancung', harga: 9000, kategori: 'Kopi' },
  { nama: 'Sanger', harga: 10000, kategori: 'Kopi' },
  { nama: 'Sanger Dingin', harga: 17000, kategori: 'Kopi' },
  { nama: 'Kopi Khop', harga: 10000, kategori: 'Kopi' },
  { nama: 'Nen (Kopi Khop Susu)', harga: 15000, kategori: 'Kopi' },
  { nama: 'Tower', harga: 23000, kategori: 'Kopi' },
  { nama: 'Cappucino Panas', harga: 10000, kategori: 'Cappucino' },
  { nama: 'Cappucino Hangat', harga: 13000, kategori: 'Cappucino' },
  { nama: 'Cappucino Dingin', harga: 17000, kategori: 'Cappucino' },
  { nama: 'Cappucino Susu Panas', harga: 13000, kategori: 'Cappucino' },
  { nama: 'Cappucino Susu Hangat', harga: 18000, kategori: 'Cappucino' },
  { nama: 'Cappucino Susu Dingin', harga: 23000, kategori: 'Cappucino' },
  { nama: 'Poding 2 Telor', harga: 15000, kategori: 'Poding & BMW' },
  { nama: 'Poding 3 Telor', harga: 18000, kategori: 'Poding & BMW' },
  { nama: 'Bmw Kopi Panas', harga: 17000, kategori: 'Poding & BMW' },
  { nama: 'Bmw Teh Panas', harga: 17000, kategori: 'Poding & BMW' },
  { nama: 'Bmw Milo Panas', harga: 18000, kategori: 'Poding & BMW' },
  { nama: 'Bmw Teh Hijau Panas', harga: 18000, kategori: 'Poding & BMW' },
  { nama: 'Bmw Double Telur', harga: 22000, kategori: 'Poding & BMW' },
  { nama: 'Susu Panas', harga: 10000, kategori: 'Susu' },
  { nama: 'Susu Hangat', harga: 15000, kategori: 'Susu' },
  { nama: 'Susu Dingin', harga: 18000, kategori: 'Susu' },
  { nama: 'Milo Panas', harga: 8000, kategori: 'Milo' },
  { nama: 'Milo Hangat', harga: 12000, kategori: 'Milo' },
  { nama: 'Milo Dingin', harga: 15000, kategori: 'Milo' },
  { nama: 'Milo Susu Panas', harga: 13000, kategori: 'Milo' },
  { nama: 'Milo Susu Hangat', harga: 15000, kategori: 'Milo' },
  { nama: 'Milo Susu Dingin', harga: 20000, kategori: 'Milo' },
  { nama: 'Teh Panas', harga: 5000, kategori: 'Teh' },
  { nama: 'Teh Hangat', harga: 7000, kategori: 'Teh' },
  { nama: 'Teh Dingin', harga: 8000, kategori: 'Teh' },
  { nama: 'Teh Susu Panas', harga: 10000, kategori: 'Teh' },
  { nama: 'Teh Susu Hangat', harga: 13000, kategori: 'Teh' },
  { nama: 'Teh Susu Dingin', harga: 18000, kategori: 'Teh' },
  { nama: 'Teh Hijau Panas', harga: 7000, kategori: 'Teh' },
  { nama: 'Teh Hijau Hangat', harga: 10000, kategori: 'Teh' },
  { nama: 'Teh Hijau Dingin', harga: 12000, kategori: 'Teh' },
  { nama: 'Teh Hijau Susu Panas', harga: 15000, kategori: 'Teh' },
  { nama: 'Teh Hijau Susu Hangat', harga: 18000, kategori: 'Teh' },
  { nama: 'Teh Hijau Susu Dingin', harga: 20000, kategori: 'Teh' },
  { nama: 'Teh Tarek Hangat', harga: 15000, kategori: 'Teh' },
  { nama: 'Teh Tarek Dingin', harga: 20000, kategori: 'Teh' },
  { nama: 'Teh Tarek Hijau Hangat', harga: 17000, kategori: 'Teh' },
  { nama: 'Teh Tarek Hijau Dingin', harga: 23000, kategori: 'Teh' },
  { nama: 'Serai Jahe Madu Ori', harga: 20000, kategori: 'Serai & Lemon' },
  { nama: 'Serai Jahe Susu', harga: 17000, kategori: 'Serai & Lemon' },
  { nama: 'Lemon Tea Panas', harga: 15000, kategori: 'Serai & Lemon' },
  { nama: 'Lemon Tea Hangat', harga: 17000, kategori: 'Serai & Lemon' },
  { nama: 'Lemon Tea Dingin', harga: 18000, kategori: 'Serai & Lemon' },
  { nama: 'Lemon Madu Hangat', harga: 20000, kategori: 'Serai & Lemon' },
  { nama: 'Lemon Madu Dingin', harga: 23000, kategori: 'Serai & Lemon' },
  { nama: 'Nutrisari Dingin', harga: 10000, kategori: 'Lainnya' },
  { nama: 'Kukubima Dingin', harga: 10000, kategori: 'Lainnya' },
  { nama: 'Kukubima Susu Dingin', harga: 15000, kategori: 'Lainnya' },
  { nama: 'Extra Joss Dingin', harga: 10000, kategori: 'Lainnya' },
  { nama: 'Extra Joss Susu Dingin', harga: 15000, kategori: 'Lainnya' },
  { nama: 'Bir Pala', harga: 20000, kategori: 'Lainnya' },
];

// ====== STATE ======
let keranjang = [];
let kategoriAktif = 'Semua';
let kataCari = '';

// ====== FUNGSI BIKIN TOMBOL KATEGORI ======
function tampilkanTombolKategori() {
  const kategoriUnik = ['Semua', ...new Set(daftarMinuman.map(m => m.kategori))];
  const wadah = document.getElementById('tombol-kategori');
  let html = '';
  kategoriUnik.forEach(function (kat) {
    const aktif = kat === kategoriAktif ? 'aktif' : '';
    html += `<button class="tombol-kategori ${aktif}" data-kategori="${kat}">${kat}</button>`;
  });
  wadah.innerHTML = html;
}

// ====== FUNGSI TAMPILIN MENU ======
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

// ====== FUNGSI TAMPILIN KERANJANG ======
function tampilkanKeranjang() {
  const isiKeranjang = document.getElementById('isi-keranjang');
  const totalHarga = document.getElementById('total-harga');
  const notif = document.getElementById('notif-keranjang');
  
  let totalItem = 0;
  keranjang.forEach(item => totalItem += item.jumlah);

  if (totalItem > 0) {
    notif.textContent = totalItem;
    notif.style.display = 'inline-block';
  } else {
    notif.style.display = 'none';
  }

  if (keranjang.length === 0) {
    isiKeranjang.innerHTML = '<p class="kosong">Belum ada pesanan</p>';
    totalHarga.textContent = 'Rp 0';
    return;
  }

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

// ====== FUNGSI TAMBAH KURANG ======
function tambahKeKeranjang(nama, harga) {
  const itemAda = keranjang.find(item => item.nama === nama);
  if (itemAda) {
    itemAda.jumlah += 1;
  } else {
    keranjang.push({ nama: nama, harga: harga, jumlah: 1 });
  }
  tampilkanKeranjang();
}

function tambahJumlah(index) {
  keranjang[index].jumlah += 1;
  tampilkanKeranjang();
}

function kurangJumlah(index) {
  keranjang[index].jumlah -= 1;
  if (keranjang[index].jumlah <= 0) {
    keranjang.splice(index, 1);
  }
  tampilkanKeranjang();
}

// ====== EVENT LISTENERS ======
document.getElementById('tombol-kategori').addEventListener('click', function (e) {
  if (e.target.classList.contains('tombol-kategori')) {
    kategoriAktif = e.target.dataset.kategori;
    tampilkanTombolKategori();
    tampilkanMenu();
  }
});

document.getElementById('input-cari').addEventListener('input', function (e) {
  kataCari = e.target.value;
  tampilkanMenu();
});

document.getElementById('daftar-menu').addEventListener('click', function (e) {
  if (e.target.classList.contains('tombol-tambah')) {
    const kartu = e.target.parentElement;
    tambahKeKeranjang(kartu.dataset.nama, parseInt(kartu.dataset.harga));
  }
});

const tombolCheckout = document.getElementById('tombol-checkout');
const modalPemesan = document.getElementById('modal-pemesan');
const tombolBatal = document.getElementById('tombol-batal');
const tombolKirim = document.getElementById('tombol-kirim');
const pesanError = document.getElementById('pesan-error');

tombolCheckout.addEventListener('click', function () {
  if (keranjang.length === 0) {
    alert('Keranjang masih kosong bro, pilih minuman dulu 😄');
    return;
  }
  modalPemesan.classList.remove('modal-sembunyi');
  modalPemesan.classList.add('modal-muncul');
});

tombolBatal.addEventListener('click', function () {
  modalPemesan.classList.remove('modal-muncul');
  modalPemesan.classList.add('modal-sembunyi');
  pesanError.textContent = '';
});

tombolKirim.addEventListener('click', function () {
  const nama = document.getElementById('input-nama').value.trim();
  const alamat = document.getElementById('input-alamat').value.trim();
  const catatan = document.getElementById('input-catatan').value.trim();

  if (nama === '') { pesanError.textContent = 'Nama wajib diisi bro!'; return; }
  if (alamat === '') { pesanError.textContent = 'No meja wajib diisi bro!'; return; }

  const dataPesanan = {
    pemesan: { nama: nama, alamat: alamat, catatan: catatan },
    pesanan: keranjang,
    total: keranjang.reduce((sum, item) => sum + item.harga * item.jumlah, 0)
  };

  const urlSheets = 'https://script.google.com/macros/s/AKfycbwrNZTHcB23Ten7sCLhynbOQERA3LOLGI2j9qVHPuYNgqbxXtLPXpjtt5iNL9gsWlvS/exec';
  fetch(urlSheets, { method: 'POST', body: JSON.stringify(dataPesanan) }).catch(err => console.log(err));

  const nomorWA = '6282184053433';
  let pesan = 'Halo, saya mau pesan:%0A%0A';
  pesan += 'Nama: ' + nama + '%0A';
  pesan += 'No. Meja: ' + alamat + '%0A';
  if (catatan !== '') { pesan += 'Catatan: ' + catatan + '%0A'; }
  pesan += '%0A--- Pesanan ---%0A';
  keranjang.forEach(function (item) {
    pesan += item.nama + ' x' + item.jumlah + ' = Rp ' + (item.harga * item.jumlah).toLocaleString('id-ID') + '%0A';
  });
  pesan += '%0A*Total: Rp ' + dataPesanan.total.toLocaleString('id-ID') + '*';

  window.open('https://wa.me/' + nomorWA + '?text=' + pesan, '_blank');

  tampilkanStruk(dataPesanan);
  keranjang = [];
  tampilkanKeranjang();
  modalPemesan.classList.remove('modal-muncul');
  modalPemesan.classList.add('modal-sembunyi');
  document.getElementById('input-nama').value = '';
  document.getElementById('input-alamat').value = '';
  document.getElementById('input-catatan').value = '';
});

function tampilkanStruk(data) {
  const isiStruk = document.getElementById('isi-struk');
  const sekarang = new Date();
  const tanggal = sekarang.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const jam = sekarang.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

  let html = `
    <div class="header-struk"><h2>WARKOP PREMIUM</h2><p>Struk Pesanan</p></div>
    <div class="garis"></div>
    <div class="info-pemesan">
      <p>Tgl : ${tanggal} ${jam}</p>
      <p>Nama: ${data.pemesan.nama}</p>
      <p>Meja: ${data.pemesan.alamat}</p>
      ${data.pemesan.catatan ? `<p>Ket : ${data.pemesan.catatan}</p>` : ''}
    </div>
    <div class="garis"></div>
  `;
  data.pesanan.forEach(function (item) {
    html += `<div class="item-struk"><span>${item.nama} x${item.jumlah}</span><span>Rp ${(item.harga*item.jumlah).toLocaleString('id-ID')}</span></div>`;
  });
  html += `
    <div class="garis"></div>
    <div class="total-baris"><span>TOTAL</span><span>Rp ${data.total.toLocaleString('id-ID')}</span></div>
    <div class="garis"></div>
    <div class="footer-struk"><p>Terima kasih!</p></div>
  `;
  isiStruk.innerHTML = html;
  document.getElementById('modal-struk').classList.remove('modal-sembunyi');
  document.getElementById('modal-struk').classList.add('modal-muncul');
}

document.getElementById('tombol-tutup-struk').addEventListener('click', function () {
  document.getElementById('modal-struk').classList.remove('modal-muncul');
  document.getElementById('modal-struk').classList.add('modal-sembunyi');
});
document.getElementById('tombol-print').addEventListener('click', function () { window.print(); });

// ==========================================
// ====== LOGIKA MENU MAKANAN (BARU) ========
// ==========================================

// 1. Data Makanan (Dari Foto yang kamu kirim)
const daftarMakanan = [
  // Nasi Uduk & Ayam
  { nama: 'Nasi Uduk Ayam Goreng', harga: 25000, kategori: 'Nasi Uduk' },
  { nama: 'Nasi Uduk Ayam Bakar', harga: 25000, kategori: 'Nasi Uduk' },
  { nama: 'Nasi Uduk Lele Goreng', harga: 25000, kategori: 'Nasi Uduk' },
  { nama: 'Nasi Uduk Nila Goreng', harga: 30000, kategori: 'Nasi Uduk' },
  
  // Lauk & Gorengan
  { nama: 'Ayam Goreng', harga: 17000, kategori: 'Lauk & Gorengan' },
  { nama: 'Ayam Bakar', harga: 17000, kategori: 'Lauk & Gorengan' },
  { nama: 'Lele Goreng', harga: 17000, kategori: 'Lauk & Gorengan' },
  { nama: 'Nila Goreng', harga: 22000, kategori: 'Lauk & Gorengan' },
  { nama: 'Gorengan (Tempe + Terong)', harga: 10000, kategori: 'Lauk & Gorengan' },
  { nama: 'Nasi Tambah', harga: 8000, kategori: 'Lauk & Gorengan' },

  // Seafood & Nasi Goreng
  { nama: 'Nasi Ayam Penyet', harga: 23000, kategori: 'Seafood & Nasi Goreng' },
  { nama: 'Nasi Ayam Bakar', harga: 25000, kategori: 'Seafood & Nasi Goreng' },
  { nama: 'Nasi Goreng Telur', harga: 15000, kategori: 'Seafood & Nasi Goreng' },
  { nama: 'Nasi Goreng Ayam', harga: 25000, kategori: 'Seafood & Nasi Goreng' },
  { nama: 'Nasi Goreng Seafood', harga: 25000, kategori: 'Seafood & Nasi Goreng' },
  { nama: 'Nasi Goreng Seafood + Telur', harga: 30000, kategori: 'Seafood & Nasi Goreng' },
  { nama: 'Nasi Goreng Special Premium', harga: 37000, kategori: 'Seafood & Nasi Goreng' },

  // Dimsum & Snack
  { nama: 'Dimsum Ayam (4 Pcs)', harga: 23000, kategori: 'Dimsum & Snack' },
  { nama: 'Dimsum Udang (3 Pcs)', harga: 23000, kategori: 'Dimsum & Snack' },
  { nama: 'Dimsum Kepiting (3 Pcs)', harga: 23000, kategori: 'Dimsum & Snack' },
  { nama: 'Lumpia Kulit Tahu (3 Pcs)', harga: 23000, kategori: 'Dimsum & Snack' },
  { nama: 'Kentang Goreng', harga: 18000, kategori: 'Dimsum & Snack' },
  { nama: 'Nugget', harga: 16000, kategori: 'Dimsum & Snack' },
  { nama: 'Sosis', harga: 16000, kategori: 'Dimsum & Snack' },
  { nama: 'Mix (Nugget + Sosis)', harga: 18000, kategori: 'Dimsum & Snack' },
];

let kategoriMakananAktif = 'Semua';
let kataCariMakanan = '';

// 2. Bikin Tombol Kategori Makanan
function tampilkanKategoriMakanan() {
  const kategoriUnik = ['Semua', ...new Set(daftarMakanan.map(m => m.kategori))];
  const wadah = document.getElementById('tombol-kategori-makanan');
  let html = '';
  kategoriUnik.forEach(function (kat) {
    const aktif = kat === kategoriMakananAktif ? 'aktif' : '';
    html += `<button class="tombol-kategori ${aktif}" data-kategori="${kat}">${kat}</button>`;
  });
  wadah.innerHTML = html;
}

// 3. Tampilkan Menu Makanan
function tampilkanMenuMakanan() {
  const wadah = document.getElementById('daftar-makanan');
  let html = '';
  let jumlah = 0;

  daftarMakanan.forEach(function (makanan) {
    const cocokCari = kataCariMakanan === '' || makanan.nama.toLowerCase().includes(kataCariMakanan.toLowerCase());
    const cocokKategori = kataCariMakanan !== '' || kategoriMakananAktif === 'Semua' || makanan.kategori === kategoriMakananAktif;

    if (cocokCari && cocokKategori) {
      jumlah++;
      html += `
        <div class="kartu-minuman" data-nama="${makanan.nama}" data-harga="${makanan.harga}">
          <h3>${makanan.nama}</h3>
          <p>Rp ${makanan.harga.toLocaleString('id-ID')}</p>
          <button class="tombol-tambah-makanan">Tambah</button>
        </div>
      `;
    }
  });

  if (jumlah === 0) {
    html = '<p class="tidak-ditemukan">Makanan tidak ditemukan 😅</p>';
  }
  wadah.innerHTML = html;
}

// 4. Event Listeners Khusus Makanan
document.getElementById('tombol-kategori-makanan').addEventListener('click', function (e) {
  if (e.target.classList.contains('tombol-kategori')) {
    kategoriMakananAktif = e.target.dataset.kategori;
    tampilkanKategoriMakanan();
    tampilkanMenuMakanan();
  }
});

document.getElementById('input-cari-makanan').addEventListener('input', function (e) {
  kataCariMakanan = e.target.value;
  tampilkanMenuMakanan();
});

document.getElementById('daftar-makanan').addEventListener('click', function (e) {
  if (e.target.classList.contains('tombol-tambah-makanan')) {
    const kartu = e.target.parentElement;
    // Fungsi tambahKeKeranjang yang lama kita pakai ulang di sini!
    tambahKeKeranjang(kartu.dataset.nama, parseInt(kartu.dataset.harga));
  }
});

// ====== LOGIKA NAVIGASI ANTAR HALAMAN ======
const semuaNavLink = document.querySelectorAll('.nav-link');
const semuaHalaman = document.querySelectorAll('.halaman');

semuaNavLink.forEach(function (tombol) {
  tombol.addEventListener('click', function () {

        if (tombol.dataset.target === 'makanan') {
      tampilkanMenuMakanan();
    }

    // 1. Update gaya tombol
    semuaNavLink.forEach(btn => btn.classList.remove('aktif'));
    tombol.classList.add('aktif');

    // 2. Sembunyiin semua halaman
    semuaHalaman.forEach(hal => hal.classList.remove('aktif'));

    // 3. Tampilkan halaman yang dituju (pakai pengaman)
    const targetId = 'halaman-' + tombol.dataset.target;
    const halamanTujuan = document.getElementById(targetId);

    if (halamanTujuan) {
      halamanTujuan.classList.add('aktif');
    } else {
      console.warn('Waduh bro, halaman dengan ID "' + targetId + '" gak ketemu di HTML!');
    }

    // 4. Refresh tampilan
    if (tombol.dataset.target === 'keranjang' || tombol.dataset.target === 'halaman-keranjang') {
      tampilkanKeranjang();
    }
    if (tombol.dataset.target === 'minuman') {
      tampilkanMenu();
    }
  });
});

tampilkanTombolKategori();
tampilkanMenu();
tampilkanKeranjang();
tampilkanKategoriMakanan();
tampilkanMenuMakanan();

// ====== TOMBOL TAMBAH DARI BEST SELLER BERANDA ======
document.querySelector('.best-seller-grid').addEventListener('click', function(e) {
  if (e.target.classList.contains('tombol-tambah-best')) {
    const kartu = e.target.parentElement;
    const nama = kartu.dataset.nama;
    const harga = parseInt(kartu.dataset.harga);
    
    // Panggil fungsi keranjang yang udah kita buat
    tambahKeKeranjang(nama, harga);
    
    // Kasih efek notif sebentar (opsional)
    alert(nama + ' masuk keranjang!');
  }
});
