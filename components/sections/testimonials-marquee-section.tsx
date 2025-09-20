"use client"

import { useEffect } from "react"

export function TestimonialsMarqueeSection() {
  useEffect(() => {
    // Vanilla JS implementation
    const DATA = [
      // WYMAGANY testimonial:
      {
        text: "Dzięki Aero Digital w końcu zaczęłam wypełniać kalendarz wizyt bez wydawania fortuny na reklamy. Email i SMS marketing sprawił, że dawne klientki wróciły, a nowe same zaczęły się pojawiać. Polecam każdemu salonowi beauty!",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        name: "Aleksandra",
        role: "Właścicielka salonu kosmetycznego"
      },
      // Dodatkowe testimoniale:
      { 
        text: "Zwiększyliśmy liczbę rezerwacji o 200% w 3 miesiące. Najlepsza inwestycja!", 
        image: "https://randomuser.me/api/portraits/women/12.jpg", 
        name: "Magdalena Nowak", 
        role: "Dyrektor" 
      },
      { 
        text: "Wolne okienka sprzedajemy SMS-ami w godzinę. Rewelacja.", 
        image: "https://randomuser.me/api/portraits/women/24.jpg", 
        name: "Karolina", 
        role: "Manager SPA" 
      },
      { 
        text: "Strona + kampanie + email = stały kalendarz. Bardzo polecam.", 
        image: "https://randomuser.me/api/portraits/women/31.jpg", 
        name: "Justyna", 
        role: "Właścicielka salonu" 
      },
      { 
        text: "Klientki wracają częściej dzięki automatycznym przypomnieniom.", 
        image: "https://randomuser.me/api/portraits/women/18.jpg", 
        name: "Paulina", 
        role: "Kosmetolog" 
      },
      { 
        text: "Piękna strona i realne wyniki sprzedaży — wreszcie!", 
        image: "https://randomuser.me/api/portraits/women/28.jpg", 
        name: "Ola", 
        role: "Salon rzęs" 
      },
      { 
        text: "Emaile mają wysoki CTR, a SMS-y robią robotę last minute.", 
        image: "https://randomuser.me/api/portraits/women/44.jpg", 
        name: "Natalia", 
        role: "Studio urody" 
      },
      { 
        text: "Prosty system, duże efekty. Polecam.", 
        image: "https://randomuser.me/api/portraits/women/14.jpg", 
        name: "Ewelina", 
        role: "Trycholog" 
      },
      { 
        text: "Raporty miesięczne jasno pokazują zwrot z inwestycji.", 
        image: "https://randomuser.me/api/portraits/women/39.jpg", 
        name: "Agnieszka", 
        role: "Gabinet estetyczny" 
      },
    ]

    const card = (t: typeof DATA[0]) => `
      <div class="t-card">
        <div class="t-stars" aria-label="Ocena 5 na 5">★★★★★</div>
        <p class="t-text">„${t.text}”</p>
        <div class="t-user">
          <img class="avatar" src="${t.image}" alt="${t.name}" loading="lazy">
          <div class="meta">
            <div class="name">${t.name}</div>
            <div class="role">${t.role}</div>
          </div>
        </div>
      </div>
    `

    const cols = document.querySelectorAll('#opinie .column')
    if (!cols.length) return
    const chunk = Math.ceil(DATA.length / cols.length)

    cols.forEach((col, i) => {
      const slice = DATA.slice(i * chunk, (i + 1) * chunk)
      const html = slice.map(card).join('')
      // duplikujemy content x2, aby animacja 50% była płynna
      col.innerHTML = html + html
      const dur = Number((col as HTMLElement).dataset.speed) || 16
      col.classList.add('marquee')
      ;(col as HTMLElement).style.setProperty('--marquee-duration', dur + 's')
    })
  }, [])

  return null // Komponent nie renderuje niczego, tylko uruchamia JS
}
