const hadir = [
true,
false,
true,
true,
false,
true
];
let siswaHadir = 0
let siswaTidakHadir = 0
for (let i = 0; i < hadir.length; i++) {
    if (hadir[i] == true) {
        siswaHadir++
        console.log(`Hadir`)
    }
    else if (hadir[i] == false) {
        console.log(`Tidak hadir`)
        siswaTidakHadir++
    }
}

console.log(`Siswa yang hadir: ${siswaHadir}`)
console.log(`Siswa yang tidak hadir: ${siswaTidakHadir}`)