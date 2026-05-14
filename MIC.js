// ==========================================
// KONFIGURASI NOMOR WHATSAPP (AKTIF)
// ==========================================
const NOMOR_WA = "628175089231"; 

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. LOGIKA UNTUK TOMBOL DI HALAMAN MENU (MenuMIC.html)
    const tombolPesanMenu = document.querySelectorAll('.btn-wa');

    tombolPesanMenu.forEach(tombol => {
        tombol.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Mencari info produk di dalam kartu menu
            const kartuMenu = this.closest('.menu-info');
            if (kartuMenu) {
                const namaKue = kartuMenu.querySelector('h3').innerText;
                const hargaKue = kartuMenu.querySelector('.price').innerText;
                
                const teksPesan = `Halo Dapurnya Ummik Ratih, saya ingin memesan:\n\n` +
                                  `🍰 *Produk:* ${namaKue}\n` +
                                  `💰 *Harga:* ${hargaKue}\n\n` +
                                  `Mohon info cara pembayarannya ya Ummik. Terima kasih!`;
                
                bukaWhatsApp(teksPesan);
            }
        });
    });

    // 2. LOGIKA UNTUK TOMBOL "CHAT ADMIN" (PesanMIC.html)
    const tombolChatAdmin = document.querySelector('.wa-large-btn');
    if (tombolChatAdmin) {
        tombolChatAdmin.addEventListener('click', function(e) {
            e.preventDefault();
            const pesanUmum = "Halo Ummik ratih, saya mau tanya-tanya tentang kuenya atau mau request pesanan khusus nih...";
            bukaWhatsApp(pesanUmum);
        });
    }

    // Fungsi Utama untuk membuka jendela WhatsApp
    function bukaWhatsApp(pesan) {
        const url = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`;
        window.open(url, '_blank');
    }

});
