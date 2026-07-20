const stok = [12, 0, 5, 8, 0, 20];
let barangHabis = 0
let barangTersedia = 0

for (let i = 0; i < stok.length; i++) {
    if (stok[i] == 0) {
        barangHabis++
        console.log(`Barang Habis`)
    }
    else if (stok[i] > 0) {
        barangTersedia++
        console.log(`Barang Tersedia`)
    }
}
console.log(`Barang habis: ${barangHabis}`)
console.log(`Barang yang masih tersedia: ${barangTersedia}`)