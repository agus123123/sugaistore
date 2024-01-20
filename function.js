$(document).ready(function(){
    $("#selamatDatangModal").modal('show');
});

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Z1LHQQ9551');
function hubungiAdmin() {
    var nomorAdmin = document.getElementById('hubungiAdmin').value;
    
    if (nomorAdmin) {
        var pesanWhatsApp = nomorAdmin;
        window.location.href = "https://wa.me/6281399472786?text=" + encodeURIComponent(pesanWhatsApp);
    } else {
        alert("Silakan masukkan nomor WhatsApp admin terlebih dahulu.");
    }
}
function showFields() {
    var selectedGame = document.getElementById('pilih_game').value;

    // Semua kolom diatur menjadi tersembunyi
    document.getElementById('mobile_legends_fields').classList.add('hidden');
    document.getElementById('free_fire_fields').classList.add('hidden');

    // Tampilkan kolom sesuai dengan pemilihan game
    if (selectedGame === 'mobile_legends') {
        document.getElementById('mobile_legends_fields').classList.remove('hidden');
    } else if (selectedGame === 'free_fire') {
        document.getElementById('free_fire_fields').classList.remove('hidden');
    }
    // Reset nilai pada kolom-kolom yang ditampilkan
    document.getElementById('id_game').value = '';
    document.getElementById('server_game').value = '';

    // Update jumlah order
    updateJumlahOrder();
}
function updateJumlahOrder() {
    var gameSelect = document.getElementById('pilih_game');
    var jumlahOrderSelect = document.getElementById('jumlah_order');

    // Set default value to empty
    jumlahOrderSelect.innerHTML = '';
    document.getElementById('harga').value = ''; // Reset harga

    if (gameSelect.value === 'mobile_legends') {
        setOptionsAndPrices([
            { jumlah: '86 Diamond', harga: 23620 },
            { jumlah: '172 Diamond', harga: 46750 },
            { jumlah: '257 Diamond', harga: 68500 },
            { jumlah: '344 Diamond', harga: 94580 },
            { jumlah: '429 Diamond', harga: 115850 },
            { jumlah: '514 Diamond', harga: 139950 },
            { jumlah: '706 Diamond', harga: 184390 },
            { jumlah: '878 Diamond', harga: 233540 },
            { jumlah: '963 Diamond', harga: 256320 },
            { jumlah: '1412 Diamond', harga: 370210 },
            { jumlah: '2195 Diamond', harga: 558290 },
            { jumlah: '3688 Diamond', harga: 929420 },
            { jumlah: '4394 Diamond', harga: 1121730 },
            { jumlah: '9288 Diamond', harga: 2078920 }
        ]);
    } else if (gameSelect.value === 'free_fire') {
        setOptionsAndPrices([
            { jumlah: '10 Diamond', harga: 1760 },
            { jumlah: '20 Diamond', harga: 3519 },
            { jumlah: '50 Diamond', harga: 7050 },
            { jumlah: '70 Diamond', harga: 9750 },
            { jumlah: '100 Diamond', harga: 14250 },
            { jumlah: '120 Diamond', harga: 16880 },
            { jumlah: '140 Diamond', harga: 19570 },
            { jumlah: '160 Diamond', harga: 23090 },
            { jumlah: '210 Diamond', harga: 29450 },
            { jumlah: '280 Diamond', harga: 39060 },
            { jumlah: '300 Diamond', harga: 42790 },
            { jumlah: '355 Diamond', harga: 48990 },
            { jumlah: '405 Diamond', harga: 56100 },
            { jumlah: '500 Diamond', harga: 69480 },
            { jumlah: '720 Diamond', harga: 97980 },
            { jumlah: '860 Diamond', harga: 117280 },
            { jumlah: '1000 Diamond', harga: 136890 },
            { jumlah: '1075 Diamond', harga: 146580 },
            { jumlah: '1440 Diamond', harga: 195790 },
            { jumlah: '2720 Diamond', harga: 371690 },
            { jumlah: '7290 Diamond', harga: 979700 }
            // ... tambahkan harga untuk jumlah order lainnya
        ]);
    }
    // Add more conditions for other games if needed
}

function setOptionsAndPrices(options) {
    var jumlahOrderSelect = document.getElementById('jumlah_order');
    var hargaInput = document.getElementById('harga');

    options.forEach(function(option) {
        var optionElement = document.createElement('option');
        optionElement.value = option.jumlah;
        optionElement.text = option.jumlah;
        jumlahOrderSelect.add(optionElement);
    });

    // Set harga untuk opsi pertama sebagai nilai awal
    if (options.length > 0) {
        hargaInput.value = formatRupiah(options[0].harga);
    }
}

function updateHarga() {
    var jumlahOrderSelect = document.getElementById('jumlah_order');
    var hargaInput = document.getElementById('harga');

    // Set harga berdasarkan jumlah order yang dipilih
    var selectedJumlah = jumlahOrderSelect.value;
    var gameSelect = document.getElementById('pilih_game');

    if (gameSelect.value === 'mobile_legends') {
        // Tambahkan logika perhitungan harga untuk Mobile Legends
        if (selectedJumlah === '86 Diamond') {
            hargaInput.value = formatRupiah(23620);
        } else if (selectedJumlah === '172 Diamond') {
            hargaInput.value = formatRupiah(46750);
        } else if (selectedJumlah === '257 Diamond') {
            hargaInput.value = formatRupiah(68500);
        } else if (selectedJumlah === '344 Diamond') {
            hargaInput.value = formatRupiah(94580);
        } else if (selectedJumlah === '429 Diamond') {
            hargaInput.value = formatRupiah(115850);
        } else if (selectedJumlah === '514 Diamond') {
            hargaInput.value = formatRupiah(139950);
        } else if (selectedJumlah === '706 Diamond') {
            hargaInput.value = formatRupiah(184390);
        } else if (selectedJumlah === '878 Diamond') {
            hargaInput.value = formatRupiah(233540);
        } else if (selectedJumlah === '963 Diamond') {
            hargaInput.value = formatRupiah(256320);
        } else if (selectedJumlah === '1412 Diamond') {
            hargaInput.value = formatRupiah(370210);
        } else if (selectedJumlah === '2195 Diamond') {
            hargaInput.value = formatRupiah(558290);
        } else if (selectedJumlah === '3688 Diamond') {
            hargaInput.value = formatRupiah(929420);
        } else if (selectedJumlah === '4394 Diamond') {
            hargaInput.value = formatRupiah(1121730);
        } else if (selectedJumlah === '9288 Diamond') {
            hargaInput.value = formatRupiah(2078920);
        } 
        // Tambahkan lebih banyak kondisi jika diperlukan
    } else if (gameSelect.value === 'free_fire') {
        // Tambahkan logika perhitungan harga untuk Free Fire
        if (selectedJumlah === '10 Diamond') {
            hargaInput.value = formatRupiah(1760);
        } else if (selectedJumlah === '20 Diamond') {
            hargaInput.value = formatRupiah(3519);
        } else if (selectedJumlah === '50 Diamond') {
            hargaInput.value = formatRupiah(7050);
        } else if (selectedJumlah === '70 Diamond') {
            hargaInput.value = formatRupiah(9750);
        } else if (selectedJumlah === '100 Diamond') {
            hargaInput.value = formatRupiah(14250);
        } else if (selectedJumlah === '120 Diamond') {
            hargaInput.value = formatRupiah(16880);
        } else if (selectedJumlah === '140 Diamond') {
            hargaInput.value = formatRupiah(19570);
        } else if (selectedJumlah === '160 Diamond') {
            hargaInput.value = formatRupiah(23090);
        } else if (selectedJumlah === '210 Diamond') {
            hargaInput.value = formatRupiah(29450);
        } else if (selectedJumlah === '280 Diamond') {
            hargaInput.value = formatRupiah(39060);
        } else if (selectedJumlah === '300 Diamond') {
            hargaInput.value = formatRupiah(42790);
        } else if (selectedJumlah === '355 Diamond') {
            hargaInput.value = formatRupiah(48990);
        } else if (selectedJumlah === '405 Diamond') {
            hargaInput.value = formatRupiah(56100);
        } else if (selectedJumlah === '500 Diamond') {
            hargaInput.value = formatRupiah(69480);
        } else if (selectedJumlah === '720 Diamond') {
            hargaInput.value = formatRupiah(97980);
        } else if (selectedJumlah === '860 Diamond') {
            hargaInput.value = formatRupiah(117280);
        } else if (selectedJumlah === '1000 Diamond') {
            hargaInput.value = formatRupiah(136890);
        } else if (selectedJumlah === '1075 Diamond') {
            hargaInput.value = formatRupiah(146580);
        } else if (selectedJumlah === '1440 Diamond') {
            hargaInput.value = formatRupiah(195790);
        } else if (selectedJumlah === '2720 Diamond') {
            hargaInput.value = formatRupiah(371690);
        } else if (selectedJumlah === '7290 Diamond') {
            hargaInput.value = formatRupiah(979700);
        } 
        // Tambahkan lebih banyak kondisi jika diperlukan
    }
    // Tambahkan lebih banyak kondisi untuk game lain jika diperlukan
}

function formatRupiah(angka) {
    var number_string = angka.toString();
    var sisa = number_string.length % 3;
    var rupiah = number_string.substr(0, sisa);
    var ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
        var separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    return 'Rp ' + rupiah;
}

function kirimWhatsApp() {
    // Sisanya seperti sebelumnya
    var idGame = document.getElementById('id_game').value;
    var serverGame = document.getElementById('server_game').value;
    var jumlahOrder = document.getElementById('jumlah_order').value;
    var pilihGame = document.getElementById('pilih_game').value;
    var harga = document.getElementById('harga').value;

    var pesanWhatsApp = "FORM TOP UP by *SUGAI STORE*✨\n\n";
    pesanWhatsApp += "*ID :* " + idGame + "\n";
    pesanWhatsApp += "*SERVER :* " + serverGame + "\n";
    pesanWhatsApp += "*JUMLAH ORDER :* " + jumlahOrder + " 💎" + "\n";
    pesanWhatsApp += "*HARGA :* " + harga + "\n";
    pesanWhatsApp += "*GAME :* " + pilihGame + "\n\n";

    window.location.href = "https://wa.me/6281399472786?text=" + encodeURIComponent(pesanWhatsApp);
}

// Set initial options based on default selection
document.addEventListener('DOMContentLoaded', function() {
    updateJumlahOrder();
});
