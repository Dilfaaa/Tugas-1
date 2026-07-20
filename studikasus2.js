const nilai = [90, 75, 60, 45, 88];
let siswaLulus = 0
let siswaTidakLulus = 0
for (let i = 0; i < nilai.length; i++) {
    let status = ``
    if (nilai[i] >= 75) {
        status = `lulus`
        siswaLulus++
    }
    else if (nilai[i] < 75) {
        status = `tidak lulus`
        siswaTidakLulus++
    }
    console.log(`Siswa ke-${i+1} : ${nilai[i]} -> ${status}`)
}
console.log(`siswa yang lulus: ${siswaLulus}`)
console.log(`siswa yang tidak lulus: ${siswaTidakLulus}`)
