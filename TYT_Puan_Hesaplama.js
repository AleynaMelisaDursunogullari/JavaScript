var turkceDogru,
  turkceYanlis = 0;
var matDogru,
  matYanlis = 0;
var sosyalDogru,
  sosyalYanlis = 0;
var fenDogru,
  fenYanlis = 0;

let yenisatir = "\r\n";
let mesaj =
  "TYT Puan Hesaplama Uygulamasına Hoşgeldiniz.Lütfen İşlem Seçin" +
  yenisatir +
  "1-Mezuniyet Puanını Hesapla" +
  yenisatir +
  "2-Tyt Puanını Hesapla";

let secim = prompt(mesaj);

switch (secim) {
  case "1":
    let lise1_1dönem = 0,
      lise1_2dönem = 0,
      lise2_1dönem = 0,
      lise2_2dönem = 0,
      lis3_1dönem = 0,
      lise3_2dönem = 0,
      lise4_1dönem = 0,
      lise4_2dönem = 0;

    let top = 0,
      ort = 0;
    lise1_1dönem = Number(prompt("1.Sınıf 1.Dönem Ortalamasını Giriniz"));
    lise1_2dönem = Number(prompt("1.Sınıf 2.Dönem Ortalamasını Giriniz:"));

    lise2_1dönem = Number(prompt("2.Sınıf 1.Dönem Ortalamasını Giriniz:"));
    lise2_2dönem = Number(prompt("2.Sınıf 2.Dönem Ortalamasını Giriniz:"));

    lis3_1dönem = Number(prompt("3.Sınıf 1.Dönem Ortalamasını Giriniz:"));
    lise3_2dönem = Number(prompt("3.Sınıf 2.Dönem Ortalamasını Giriniz:"));

    lise4_1dönem = Number(prompt("4.Sınıf 1.Dönem Ortalamasını Giriniz:"));
    lise4_2dönem = Number(prompt("4.Sınıf 2.Dönem Ortalamasını Giriniz:"));
    prompt("çalıştıı");
    top =
      lise1_1dönem +
      lise1_2dönem +
      lise2_1dönem +
      lise2_2dönem +
      lis3_1dönem +
      lise3_2dönem +
      lise4_1dönem +
      lise4_2dönem;

    ort = top / 8;
    document.write("Diploma Notunuz:" + ort);
    break;

  case "2":
    turkceDogru = Number(prompt("Türkçe Doğru Sayısını Giriniz:"));
    turkceYanlis = Number(prompt("Türkçe Yanlış Sayısını Giriniz"));

    matDogru = Number(prompt("Matematik Doğru Sayısını Giriniz:"));
    matYanlis = Number(prompt("Matematik Yanlış Sayısını Giriniz:"));

    sosyalDogru = Number(prompt("Sosyal Doğru Sayısını Giriniz:"));
    sosyalYanlis = Number(prompt("Sosyal Yanlış Sayısını Giriniz:"));

    fenDogru = Number(prompt("Fen Doğru Sayısını Giriniz:"));
    fenYanlis = Number(prompt("Fen Yanlış Sayısını Giriniz:"));
    let okulPuanı = Number(prompt("Mezuniyet Puanınızı Giriniz:"));

    let topDogru = turkceDogru + matDogru + sosyalDogru + fenDogru;
    let topYanlis = turkceYanlis + matYanlis + sosyalYanlis + fenYanlis;
    let kalanDogruSayısı = topDogru - topYanlis / 4; //4 yanlış 1 doğruyu götürür

    let puan = kalanDogruSayısı * 4 + okulPuanı + 100; //her soru 4 puan olarak esas alınmıştır.Ösym 100 puan herkese verir

    document.write("Tyt Puanınız:" + puan);
    break;
  default:
    document.write("Çıkış Yaptınız..");
    break;
}
