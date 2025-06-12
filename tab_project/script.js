// 1. DOM elementlarni tanlab olamiz
const tabInfo = document.getElementById("tabInfo");
const tabImg = document.getElementById("tabImages");
const tabBtns = document.getElementById("tabBtns");
const btns = document.querySelectorAll(".tab-btn");

// 2. Barcha shaharlarga oid ma'lumotlar obyektini yaratamiz
const cities = {
  paris: {
    title: "Paris",
    text: "Paris — fransuz san’ati va romantikasi shahri. Mashhur Eyfel minorasi aynan shu yerda joylashgan.",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80"
    ]
  },
  london: {
    title: "London",
    text: "London — tarixiy va zamonaviy arxitektura shahri. Big Ben va London Eye kabi diqqatga sazovor joylar bor.",
    images: [
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=facearea&w=400&q=80"
    ]
  },
  dubai: {
    title: "Dubai",
    text: "Dubai — zamonaviy arxitektura, baland minoralar va issiq iqlim shahri. Burj Khalifa va Palm Jumeirah mashhur.",
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&q=80"
    ]
  },
  moscow: {
    title: "Moscow",
    text: "Moskva — Rossiyaning poytaxti, tarixiy Kreml va Qizil Maydon joylashgan shahar.",
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=facearea&w=400&q=80"
    ]
  },
  tashkent: {
    title: "Tashkent",
    text: "Toshkent — O‘zbekiston poytaxti, qadimiy va zamonaviy madaniyat uyg‘unlashgan shahar.",
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&q=80"
    ]
  }
};

// 3. Tabs containerga (tabBtns) event delegation qo‘shamiz
tabBtns.addEventListener("click", function(e) {
  // 4. Faqat tab-btn bosilganda ishlasin
  if (e.target.classList.contains("tab-btn")) {
    // 5. Barcha tugmalardan "active" classini olib tashlaymiz
    btns.forEach(btn => btn.classList.remove("active"));
    // 6. Bosilgan tugmaga "active" classini qo‘shamiz
    e.target.classList.add("active");

    // 7. Qaysi shahar tanlanganini aniqlaymiz (data-city atributidan)
    const city = e.target.dataset.city;
    // 8. O‘sha shaharga oid ma’lumotni olamiz
    const data = cities[city];

    // 9. Matn (tabInfo) va rasmlar (tabImg) ni yangi ma’lumotlar bilan yangilaymiz
    tabInfo.innerHTML = `<strong>${data.title}</strong> ${data.text}`;

    // 10. Har bir rasm uchun img tagini yaratib, tabImg ga joylaymiz
    tabImg.innerHTML = data.images
      .map(src => `<img src="${src}" alt="${data.title}">`)
      .join("");
  }
});
