const skor = [100, 450, 800, 150, 900];
for (let i = 0; i < skor.length; i++) {
    let rank = ``
    if (skor[i] >= 800) {rank = `Rank Mythic`}
    else if (skor[i] >= 500) {rank = `Rank Legend`}
    else if (skor[i] >= 300) {rank = `Rank Epic`}
    else {rank = `Rank Warrior`}
    console.log(`Player ${i+1} : ${skor[i]} -> ${rank}`)
}
