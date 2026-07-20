const menu = [
10000,
25000,
18000,
12000,
50000
];
for (let i = 0; i < menu.length; i++) {
    let kategori = ``
    if (menu[i] >= 20000) {
        kategori = `menu premium`
    }
    else if (menu[i] < 20000) {
        kategori = `menu reguler`
    }
    console.log(`menu ke-${i+1} : ${menu[i]} -> ${kategori}`)
}