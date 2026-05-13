// ==========================================
// KONFIGURASI NOMOR WHATSAPP
// ==========================================
// Ganti dengan nomor Ummi, awali dengan 62 (tanpa tanda + atau spasi)
const NOMOR_WA = "6282123443009"; 

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. LOGIKA UNTUK HALAMAN MENU (MenuMIC.html)
    // Mencari semua tombol pesan di dalam kartu menu
    const tombolPesanMenu = document.querySelectorAll('.btn-wa');

    tombolPesanMenu.forEach(tombol => {
        tombol.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Mengambil info nama kue dan harga dari elemen kartu tersebut
            const kartuMenu = this.closest('.menu-info');
            const namaKue = kartuMenu.querySelector('h3').innerText;
            const hargaKue = kartuMenu.querySelector('.price').innerText;
            
            // Menyusun kalimat pesan otomatis
            const teksPesan = `Halo Dapurnya Ummi Kratih, saya ingin memesan:\n\n` +
                              `🍰 *Produk:* ${namaKue}\n` +
                              `💰 *Harga:* ${hargaKue}\n\n` +
                              `Mohon info cara pembayarannya ya Ummi. Terima kasih!`;
            
            // Membuka URL WhatsApp
            bukaWhatsApp(teksPesan);
        });
    });

    // 2. LOGIKA UNTUK TOMBOL "CHAT ADMIN" (PesanMIC.html)
    const tombolChatAdmin = document.querySelector('.wa-large-btn');
    if (tombolChatAdmin) {
        tombolChatAdmin.addEventListener('click', function(e) {
            e.preventDefault();
            const pesanUmum = "Halo Ummi Kratih, saya mau tanya-tanya tentang kuenya atau mau request pesanan khusus nih...";
            bukaWhatsApp(pesanUmum);
        });
    }

    // 3. LOGIKA UNTUK TOMBOL "PESAN SEKARANG" DI NAVBAR (Semua Halaman)
    // Kita arahkan ke halaman PesanMIC.html terlebih dahulu agar user baca cara order
    // Tapi jika kamu ingin tombol itu langsung ke WA, bisa gunakan kode ini:
    /*
    const btnNavbar = document.querySelector('.btn-contact');
    btnNavbar.addEventListener('click', function() {
         bukaWhatsApp("Halo Ummi Kratih, saya mau tanya cara order kuenya bagaimana ya?");
    });
    */

    // Fungsi Pembantu untuk membuka WhatsApp
    function bukaWhatsApp(pesan) {
        const url = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`;
        window.open(url, '_blank');
    }

});