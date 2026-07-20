const nilai = [90, 75, 60, 45, 88];
for (let i = 0; i < nilai.length; i++) {
    let status = ``
    if (nilai[i] >= 75) {
        status = `lulus`
    }
    else if (nilai[i] < 75) {
        status = `tidak lulus`
    }
    console.log(`Siswa ke-${i+1} : ${nilai[i]} -> ${status}`)
}