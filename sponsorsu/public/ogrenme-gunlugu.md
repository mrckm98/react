# Sponsorsu Öğrenme Günlüğü

## 1. Ders: Proje Kurulumu ve Klasör Yapısı (Clean Architecture)

### 📌 Kritik Kavramlar & Hap Özet
- **Vite:** HMR (Hot Module Replacement) hızı ve optimize geliştirme ortamı nedeniyle modern React projelerinde `create-react-app` yerine standart olarak kabul edilir.
- **Klasör Yapısı (Folder Structure):** Uygulamanın ölçeklenebilir ve sürdürülebilir olması için bileşenlerin rollerine göre ayrılması (separation of concerns) kritik öneme sahiptir.
  - `pages/`: Sayfa seviyesindeki bileşenler (Route hedefleri).
  - `components/`: Tekrar kullanılabilir, atomik UI elemanları.
  - `services/`: Backend API çağrılarını yalıtan, gelecekte eklenecek backend ile entegrasyonu kolaylaştıran servis katmanı.
  - `layouts/`: Sayfaların ortak iskeleti (Navbar/Footer yerleşimi).
  - `context/` & `hooks/`: Global durum yönetimi ve tekrar eden mantıkların (logic) soyutlanması.

---

## 2. Konu: Props ve Destructuring (Bileşenler Arası Veri Transferi)

### 📌 Kritik Kavramlar & Hap Özet
- **Props (Properties):** Ebeveyn (Parent) bileşenden çocuk (Child) bileşene veri aktarmak için kullanılan salt-okunur (read-only) nesnelerdir. React'te veri akışı her zaman yukarıdan aşağıya (tek yönlü) doğrudur.
- **Destructuring (Yapı Söküm):** JavaScript ES6 özelliği. Parametre parantezleri içinde `(props)` yerine doğrudan `({ title, description })` yazarak nesnenin özelliklerine doğrudan değişken adlarıyla erişebiliriz.
- **Savunmacı Programlama (Defensive Programming):** Opsiyonel props değerleri için varsayılan değer atama (örn: `tags = []` veya `isFeatured = false`) uygulamamızın çökmesini engeller (örneğin dizilerde `.map` çağırırken oluşabilecek TypeError hatalarını önler).
- **ID vs. Class Hiyerarşisi:** React gibi bileşen tabanlı yapılarda `id` yerine `className` tercih edilir. Aynı sayfada aynı bileşenden birden fazla render edildiğinde HTML standartlarına göre `id`lerin çakışması (duplicate ID) engellenmiş olur.

