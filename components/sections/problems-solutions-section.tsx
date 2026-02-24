\"use client\"

export function ProblemsSolutionsSection() {
  return (
    <section id="uslugi-problemy" className="section-wrap">
      <div className="container">
        <div className="head">
          <span className="badge-outline">dla salonów beauty</span>
          <h2 className="text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            Rozwiązujemy realne problemy
          </h2>
          <p className="sub">Zobacz, co naprawiamy krok po kroku.</p>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <div className="tabs-list" role="tablist" aria-label="Wybierz problem">
            <button
              className="tab is-active"
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              onClick={(e) => {
                e.preventDefault()
                document.querySelectorAll(".panel").forEach((p) => (p as HTMLElement).hidden = true)
                document.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"))
                const panel = document.getElementById("panel-1")
                const tab = document.getElementById("tab-1")
                if (panel) (panel as HTMLElement).hidden = false
                if (tab) tab.classList.add("is-active")
              }}
            >
              Brak klientów
            </button>
            <button
              className="tab"
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              onClick={(e) => {
                e.preventDefault()
                document.querySelectorAll(".panel").forEach((p) => (p as HTMLElement).hidden = true)
                document.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"))
                const panel = document.getElementById("panel-2")
                const tab = document.getElementById("tab-2")
                if (panel) (panel as HTMLElement).hidden = false
                if (tab) tab.classList.add("is-active")
              }}
            >
              Słaba widoczność online
            </button>
            <button
              className="tab"
              role="tab"
              aria-selected="false"
              aria-controls="panel-3"
              id="tab-3"
              onClick={(e) => {
                e.preventDefault()
                document.querySelectorAll(".panel").forEach((p) => (p as HTMLElement).hidden = true)
                document.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"))
                const panel = document.getElementById("panel-3")
                const tab = document.getElementById("tab-3")
                if (panel) (panel as HTMLElement).hidden = false
                if (tab) tab.classList.add("is-active")
              }}
            >
              Brak powrotów klientek
            </button>
            <button
              className="tab"
              role="tab"
              aria-selected="false"
              aria-controls="panel-4"
              id="tab-4"
              onClick={(e) => {
                e.preventDefault()
                document.querySelectorAll(".panel").forEach((p) => (p as HTMLElement).hidden = true)
                document.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"))
                const panel = document.getElementById("panel-4")
                const tab = document.getElementById("tab-4")
                if (panel) (panel as HTMLElement).hidden = false
                if (tab) tab.classList.add("is-active")
              }}
            >
              Brak stałego ruchu w salonie
            </button>
          </div>

          {/* Panels */}
          <div className="panels">
            {/* Panel 1 */}
            <div className="panel is-active" role="tabpanel" id="panel-1" aria-labelledby="tab-1">
              <div className="panel-grid">
                <div className="panel-copy">
                  <span className="badge-outline bg-white">Problem: Brak klientów</span>
                  <h3 className="title">Salon świeci pustkami — sporadyczne nowe wizyty.</h3>
                  <p className="desc">
                    <strong>Rozwiązanie:</strong> Budujemy system pozyskiwania klientek od podstaw:
                    nowoczesna strona z rezerwacją, kampanie reklamowe w social mediach i Google
                    kierujące prosto na Twoją ofertę. Dzięki temu kalendarz zaczyna się realnie
                    wypełniać, a nie czekać na przypadkowe wizyty z Booksy.
                  </p>
                  <a href="#kontakt" className="btn">
                    Chcę system pozyskiwania klientek
                  </a>
                </div>
                <div className="panel-visual">
                  <div className="placeholder"></div>
                </div>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="panel" role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
              <div className="panel-grid">
                <div className="panel-copy">
                  <span className="badge-outline bg-white">Problem: Słaba widoczność online</span>
                  <h3 className="title">Nikt nie znajduje salonu w Google ani w social mediach.</h3>
                  <p className="desc">
                    <strong>Rozwiązanie:</strong> Tworzymy profesjonalną stronę z lokalnym SEO i
                    pozycjonujemy ją tak, aby Twój salon pojawiał się w Google Maps i wynikach
                    wyszukiwania. Dodatkowo dbamy o spójny wizerunek w social mediach i reklamach —
                    jesteś widoczna tam, gdzie Twoje klientki Cię szukają.
                  </p>
                  <a href="#kontakt" className="btn">
                    Chcę widoczność w Google i social
                  </a>
                </div>
                <div className="panel-visual">
                  <div className="placeholder"></div>
                </div>
              </div>
            </div>

            {/* Panel 3 */}
            <div className="panel" role="tabpanel" id="panel-3" aria-labelledby="tab-3" hidden>
              <div className="panel-grid">
                <div className="panel-copy">
                  <span className="badge-outline bg-white">Problem: Brak powrotów klientek</span>
                  <h3 className="title">Klientki przychodzą raz i znikają — brak lojalności.</h3>
                  <p className="desc">
                    <strong>Rozwiązanie:</strong> Wdrażamy e-mail i SMS marketing: przypomnienia o
                    kolejnych wizytach, nowości i oferty VIP. Budujemy poczucie wyjątkowości, dzięki
                    czemu Twoje klientki wracają regularnie, a nie tylko „od święta".
                  </p>
                  <a href="#kontakt" className="btn">
                    Chcę powracające klientki
                  </a>
                </div>
                <div className="panel-visual">
                  <div className="placeholder"></div>
                </div>
              </div>
            </div>

            {/* Panel 4 */}
            <div className="panel" role="tabpanel" id="panel-4" aria-labelledby="tab-4" hidden>
              <div className="panel-grid">
                <div className="panel-copy">
                  <span className="badge-outline bg-white">Problem: Brak stałego ruchu</span>
                  <h3 className="title">Raz kalendarz pełny, innym razem pusty — zero stabilności.</h3>
                  <p className="desc">
                    <strong>Rozwiązanie:</strong> Budujemy przewidywalny system rezerwacji: kampanie
                    generujące stały dopływ nowych klientek + automatyczne przypomnienia i follow-upy.
                    Grafiki przestają mieć „dziury", a salon pracuje równym tempem cały miesiąc.
                  </p>
                  <a href="#kontakt" className="btn">
                    Chcę stabilny ruch
                  </a>
                </div>
                <div className="panel-visual">
                  <div className="placeholder"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

\"use client\"

export function ProblemsSolutionsSection() {
  return (
    <section id="uslugi-problemy" className="section-wrap">
      <div className="container">
        <div className="head">
          <span className="badge-outline">dla salonów beauty</span>
          <h2 className="text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            Rozwiązujemy realne problemy
          </h2>
          <p className="sub">Zobacz, co naprawiamy krok po kroku.</p>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <div className="tabs-list" role="tablist" aria-label="Wybierz problem">
            <button
              className="tab is-active"
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              onClick={(e) => {
                e.preventDefault()
                document.querySelectorAll(".panel").forEach((p) => (p as HTMLElement).hidden = true)
                document.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"))
                const panel = document.getElementById("panel-1")
                const tab = document.getElementById("tab-1")
                if (panel) (panel as HTMLElement).hidden = false
                if (tab) tab.classList.add("is-active")
              }}
            >
              Brak klientów
            </button>
            <button
              className="tab"
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              onClick={(e) => {
                e.preventDefault()
                document.querySelectorAll(".panel").forEach((p) => (p as HTMLElement).hidden = true)
                document.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"))
                const panel = document.getElementById("panel-2")
                const tab = document.getElementById("tab-2")
                if (panel) (panel as HTMLElement).hidden = false
                if (tab) tab.classList.add("is-active")
              }}
            >
              Słaba widoczność online
            </button>
            <button
              className="tab"
              role="tab"
              aria-selected="false"
              aria-controls="panel-3"
              id="tab-3"
              onClick={(e) => {
                e.preventDefault()
                document.querySelectorAll(".panel").forEach((p) => (p as HTMLElement).hidden = true)
                document.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"))
                const panel = document.getElementById("panel-3")
                const tab = document.getElementById("tab-3")
                if (panel) (panel as HTMLElement).hidden = false
                if (tab) tab.classList.add("is-active")
              }}
            >
              Brak powrotów klientek
            </button>
            <button
              className="tab"
              role="tab"
              aria-selected="false"
              aria-controls="panel-4"
              id="tab-4"
              onClick={(e) => {
                e.preventDefault()
                document.querySelectorAll(".panel").forEach((p) => (p as HTMLElement).hidden = true)
                document.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"))
                const panel = document.getElementById("panel-4")
                const tab = document.getElementById("tab-4")
                if (panel) (panel as HTMLElement).hidden = false
                if (tab) tab.classList.add("is-active")
              }}
            >
              Brak stałego ruchu w salonie
            </button>
          </div>

          {/* Panels */}
          <div className="panels">
            {/* Panel 1 */}
            <div className="panel is-active" role="tabpanel" id="panel-1" aria-labelledby="tab-1">
              <div className="panel-grid">
                <div className="panel-copy">
                  <span className="badge-outline bg-white">Problem: Brak klientów</span>
                  <h3 className="title">Salon świeci pustkami — sporadyczne nowe wizyty.</h3>
                  <p className="desc">
                    <strong>Rozwiązanie:</strong> Budujemy system pozyskiwania klientek od podstaw:
                    nowoczesna strona z rezerwacją, kampanie reklamowe w social mediach i Google
                    kierujące prosto na Twoją ofertę. Dzięki temu kalendarz zaczyna się realnie
                    wypełniać, a nie czekać na przypadkowe wizyty z Booksy.
                  </p>
                  <a href="#kontakt" className="btn">
                    Chcę system pozyskiwania klientek
                  </a>
                </div>
                <div className="panel-visual">
                  <div className="placeholder"></div>
                </div>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="panel" role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
              <div className="panel-grid">
                <div className="panel-copy">
                  <span className="badge-outline bg-white">Problem: Słaba widoczność online</span>
                  <h3 className="title">Nikt nie znajduje salonu w Google ani w social mediach.</h3>
                  <p className="desc">
                    <strong>Rozwiązanie:</strong> Tworzymy profesjonalną stronę z lokalnym SEO i
                    pozycjonujemy ją tak, aby Twój salon pojawiał się w Google Maps i wynikach
                    wyszukiwania. Dodatkowo dbamy o spójny wizerunek w social mediach i reklamach —
                    jesteś widoczna tam, gdzie Twoje klientki Cię szukają.
                  </p>
                  <a href="#kontakt" className="btn">
                    Chcę widoczność w Google i social
                  </a>
                </div>
                <div className="panel-visual">
                  <div className="placeholder"></div>
                </div>
              </div>
            </div>

            {/* Panel 3 */}
            <div className="panel" role="tabpanel" id="panel-3" aria-labelledby="tab-3" hidden>
              <div className="panel-grid">
                <div className="panel-copy">
                  <span className="badge-outline bg-white">Problem: Brak powrotów klientek</span>
                  <h3 className="title">Klientki przychodzą raz i znikają — brak lojalności.</h3>
                  <p className="desc">
                    <strong>Rozwiązanie:</strong> Wdrażamy e-mail i SMS marketing: przypomnienia o
                    kolejnych wizytach, nowości i oferty VIP. Budujemy poczucie wyjątkowości, dzięki
                    czemu Twoje klientki wracają regularnie, a nie tylko „od święta".
                  </p>
                  <a href="#kontakt" className="btn">
                    Chcę powracające klientki
                  </a>
                </div>
                <div className="panel-visual">
                  <div className="placeholder"></div>
                </div>
              </div>
            </div>

            {/* Panel 4 */}
            <div className="panel" role="tabpanel" id="panel-4" aria-labelledby="tab-4" hidden>
              <div className="panel-grid">
                <div className="panel-copy">
                  <span className="badge-outline bg-white">Problem: Brak stałego ruchu</span>
                  <h3 className="title">Raz kalendarz pełny, innym razem pusty — zero stabilności.</h3>
                  <p className="desc">
                    <strong>Rozwiązanie:</strong> Budujemy przewidywalny system rezerwacji: kampanie
                    generujące stały dopływ nowych klientek + automatyczne przypomnienia i follow-upy.
                    Grafiki przestają mieć „dziury", a salon pracuje równym tempem cały miesiąc.
                  </p>
                  <a href="#kontakt" className="btn">
                    Chcę stabilny ruch
                  </a>
                </div>
                <div className="panel-visual">
                  <div className="placeholder"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

