// ====== 1. SIAPIN "KERTAS" KERANJANG ======
let keranjang = [];

// ====== 2. AMBIL ELEMEN DARI HTML ======
const tombolTambahSemua = document.querySelectorAll('.tombol-tambah');
const isiKeranjang = document.getElementById('isi-keranjang');
const totalHarga = document.getElementById('total-harga');

// ====== 3. PAS TOMBOL "TAMBAH" DIKLIK ======
tombolTambahSemua.forEach(function (tombol) {
  tombol.addEventListener('click', function () {
    // Ambil info dari kartu induknya
    const kartu = tombol.parentElement;
    const nama = kartu.dataset.nama;
    const harga = parseInt(kartu.dataset.harga);
    tambahKeKeranjang(nama, harga);
  });
});

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