document.addEventListener("DOMContentLoaded", function() {
        //  Responzivna navigacija (Hamburger meni)
    var hamburgerIcon = document.querySelector(".icon");
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener("click", function() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        });
    }
    //  Uveličavanje vizit-kartica prilikom pomeranja kursora preko njih (Stranica: o_nama.html)
    var sveKartice = document.querySelectorAll('.vizit-karta');
    sveKartice.forEach(function(karta) {
        karta.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 20px rgba(252, 164, 124, 0.4)';
            this.style.backgroundColor = '#FFFFFF';
        });

        karta.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            this.style.backgroundColor = '#FFFDF5';
        });
    });

    // Dinamički prikaz cena u formi povezuje informacije iz tabele i vizit_karata (Stranica: kontakt.html)
    var animatorSelect = document.getElementById("animator");
    if (animatorSelect) {
        animatorSelect.addEventListener("change", function() {
            prikaziCenuUsluge(this.value);
        });
    }

    // Pomoćna funkcija za ispisivanje cena (povezuje informacije iz tabele i vizit-karata)
    function prikaziCenuUsluge(selektovaniAnimator) {
        var prikazDiv = document.getElementById("cenaPrikaz");
        if (!prikazDiv) return;

        var ceneUsluga = {
            "marko": "Основна спортска анимација: 2.000 дин (Трајање: 2 сата)",
            "milena": "Тематски рођендан + Цртање по лицу: 4.000 дин + 1.500 дин",
            "nikola": "Мађионичарски шоу + Научни експерименти: 500 дин + 1.500 дин",
            "djordje": "Празнична понуда (Деда Мраз): 900 дин (Трајање: 1 сат)",
            "nevena": "Маскенбал i чајанка у природи: 1.300 дин"
        };

        if (selektovaniAnimator && ceneUsluga[selektovaniAnimator]) {
            prikazDiv.innerText = "Оквирна цена за ову услугу: " + ceneUsluga[selektovaniAnimator];
            prikazDiv.style.display = "block";
        } else {
            prikazDiv.style.display = "none";
        }
    }

    // Automatsko biranje animatora preko URL parametra (Stranica: kontakt.html)
    if (animatorSelect) {
        var urlParametri = new URLSearchParams(window.location.search);
        var prosledjeniAnimator = urlParametri.get('izabran');
        
        if (prosledjeniAnimator) {
            animatorSelect.value = prosledjeniAnimator; // Selektuje ga u padajućem meniju
            prikaziCenuUsluge(prosledjeniAnimator);     // Odmah ispisuje i cenu za njega
        }
    }
        // Provera da li su sva polja popunjena
    var forma = document.querySelector(".kontakt-forma");
    if (forma) {
        forma.addEventListener("submit", function(dogadjaj) {
            // Uzimamo vrednosti iz svih polja u formi
            var ime = document.getElementById("ime").value.trim();
            var telefon = document.getElementById("telefon").value.trim();
            var animator = document.getElementById("animator").value;
            var poruka = document.getElementById("poruka").value.trim();
            // Proverava da li je bilo koje polje ostalo prazno
            if (ime === "" || telefon === "" || animator === "" || poruka === "") {
                dogadjaj.preventDefault(); 
                 alert("Све мора да буде попуњено како би образац за пријаву био валидан и прихавћен.");
            } else {
                alert("Успешно сте поднели пријаву.");
            }
        });
    }

});
