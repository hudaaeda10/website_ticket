// type data pada javascript
// string, number, Object

// type data string
var namaSaya = "Huda Izzatul Haq ";

// type data number
var umurSaya = 21;

// type data Object
var kekasihSaya = {
    namaDia: "anonim",
    umurDia: 20,
    jenisKelamin: "Prempuan"
}
// operator aritmatika

// Mengingat seseorang mengisi wallet 
function pengingatUserWallet(myBalance, totalHarga){
    var totalKembalian = myBalance - totalHarga;
    document.getElementById("user_login").innerHTML = namaSaya + ' Total Kembalian : ' + totalKembalian;
}
pengingatUserWallet(200, 250);

// Membuat Object
var pengguna = {
    namaUser: "Aelita",
    jumlahWisata : 3,
    totalBalance : 12
};

//membuat array
var cars = ["BMW", "Avanza", "Toyota", "Ferrari" ];
// Menghapus data array
cars.pop();
console.log(cars);

// Mengganti array // cars[2] = "Angkot";
// Menambah array di bagian paling belakangc// cars.push("Audi");   



function bindingPengguna() {
    document.getElementById("nama_user").innerHTML =pengguna.namaUser;
    document.getElementById("jumlah_wisata").innerHTML =pengguna.jumlahWisata;
}

bindingPengguna();

// Membuat function openTicket
function openTicket() {
    alert('Halaman belum bisa digunakan!');
    window.location.replace('login.html');
}