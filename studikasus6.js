const umur = [8, 13, 17, 20, 25, 11];
for (let i = 0; i < umur.length; i++) {
    let status = ``
    if (umur[i] >= 17) {
        status = `Boleh masuk`
    }
    else if (umur[i] < 17) {
        status = `Tidak boleh masuk`
    }
    console.log(`Orang ke-${i+1} dengan umur: ${umur[i]} -> ${status}`)
}