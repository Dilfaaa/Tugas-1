const nama = `Budi`
const umur = 20

const hargaBarang = [12000, 15000, 8000, 5000];
let totalHarga = 0;
for (let i = 0; i < hargaBarang.length; i++) {
    totalHarga += hargaBarang[i]
}
let status = ``
if (totalHarga > 30000) {
    status = `Mendapatkan diskon`
}
else {
    status = `Tidak mendapatkan diskon`
}
console.log(`Nama: ${nama}
Umur: ${umur}
Total Belanja: ${totalHarga}
Status: ${status}`)

if (totalHarga > 30000) {
    console.log(`Selamat! Anda mendapatkan diskon`)
}
else {
    console.log(`Belanja lagi agar mendapat diskon`)
}