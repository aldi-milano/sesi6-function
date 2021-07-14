//Soal.1

let toko = (nama, barang) => {
    return "Thank you " + nama +" for your purchase of our products " + barang + ", have a nice day."
}

console.log(toko("Aldi", "Sandal"));

//Soal.2

function perSembilan(number) {
    return number*(9/5)
}

function toFahrenheit(celcius) {
    return perSembilan(celcius) + 32
}

console.log(toFahrenheit(20));

//Soal.3

let perbandingan = (umurKucing) => {
    if (umurKucing == 1) {
        return 15
    }else if(umurKucing == 2) {
        return 24
    }else if(umurKucing > 2) {
        return 24 + ((umurKucing-2)*4)
    }
}

console.log(perbandingan(4));

//Soal.4

let kata = (contoh) => {
    return contoh.toLowerCase();
}

console.log(kata("ALDI SAMUDRA MILANO"));