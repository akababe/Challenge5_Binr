class Manusia {
  constructor(nama) {
    this.nama = nama;
  }

  perkenalan() {
    console.log(`Hi my name is ${this.nama}`);
  }

  acakAngka() {
    return Math.floor(Math.random() * 100);
  }

  tebakAngka(angka) {
    this.angka = angka;
    let tebak = this.acakAngka();
    console.log(tebak);

    if (angka == tebak) {
      console.log(`Value is the same ${angka}`);
    } else if (angka > tebak) {
      console.log(`You win, My value is ${tebak} but you ${angka}`);
    } else if (angka < tebak) {
      console.log(`You lose ,My value is ${tebak} but you ${angka}`);
    }
  }
}

let saya = new Manusia("Aka");
saya.perkenalan();
saya.tebakAngka(20);
