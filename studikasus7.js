const nilai = [80, 95, 70, 88, 100, 65];
let nilaiTerbesar = nilai[0]
let nilaiTerkecil = nilai[0]
for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] > nilaiTerbesar) {
        nilaiTerbesar = nilai[i]
    }
    else if (nilai[i] < nilaiTerkecil) {
        nilaiTerkecil = nilai[i]
    }
} 
console.log(`Nilai terbesar: ${nilaiTerbesar}`)
console.log(`Nilai terkecil: ${nilaiTerkecil}`)