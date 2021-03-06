/**
 * jquery-date-range-picker
 * @version v0.14.2
 * @link https://github.com/longbill/jquery-date-range-picker
 * @license MIT
 */
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("moment")) : e(jQuery, moment)
}(function (e, t) {
    "use strict";
    e.dateRangePickerLanguages = {
        "default": {
            selected: "Selected:",
            day: "Day",
            days: "Days",
            apply: "Close",
            "week-1": "MON",
            "week-2": "TUE",
            "week-3": "WED",
            "week-4": "THU",
            "week-5": "FRI",
            "week-6": "SAT",
            "week-7": "sun",
            "week-number": "W",
            "month-name": ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
            shortcuts: "Shortcuts",
            "custom-values": "Custom Values",
            past: "Past",
            following: "Following",
            previous: "Previous",
            "prev-week": "Week",
            "prev-month": "Month",
            "prev-year": "Year",
            next: "Next",
            "next-week": "Week",
            "next-month": "Month",
            "next-year": "Year",
            "less-than": "Date range should not be more than %d days",
            "more-than": "Date range should not be less than %d days",
            "default-more": "Please select a date range longer than %d days",
            "default-single": "Please select a date",
            "default-less": "Please select a date range less than %d days",
            "default-range": "Please select a date range between %d and %d days",
            "default-default": "Please select a date range",
            time: "Time",
            hour: "Hour",
            minute: "Minute"
        },
        id: {
            selected: "Terpilih:",
            day: "Hari",
            days: "Hari",
            apply: "Tutup",
            "week-1": "sen",
            "week-2": "sel",
            "week-3": "rab",
            "week-4": "kam",
            "week-5": "jum",
            "week-6": "sab",
            "week-7": "min",
            "week-number": "W",
            "month-name": ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"],
            shortcuts: "Pintas",
            "custom-values": "Nilai yang ditentukan",
            past: "Yang Lalu",
            following: "Mengikuti",
            previous: "Sebelumnya",
            "prev-week": "Minggu",
            "prev-month": "Bulan",
            "prev-year": "Tahun",
            next: "Selanjutnya",
            "next-week": "Minggu",
            "next-month": "Bulan",
            "next-year": "Tahun",
            "less-than": "Tanggal harus lebih dari %d hari",
            "more-than": "Tanggal harus kurang dari %d hari",
            "default-more": "Jarak tanggal harus lebih lama dari %d hari",
            "default-single": "Silakan pilih tanggal",
            "default-less": "Jarak rentang tanggal tidak boleh lebih lama dari %d hari",
            "default-range": "Rentang tanggal harus antara %d dan %d hari",
            "default-default": "Silakan pilih rentang tanggal",
            time: "Waktu",
            hour: "Jam",
            minute: "Menit"
        },
        az: {
            selected: "Se??ildi:",
            day: " g??n",
            days: " g??n",
            apply: "t??tbiq",
            "week-1": "1",
            "week-2": "2",
            "week-3": "3",
            "week-4": "4",
            "week-5": "5",
            "week-6": "6",
            "week-7": "7",
            "month-name": ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
            shortcuts: "Q??sayollar",
            past: "Ke??mi??",
            following: "N??vb??ti",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "??nc??ki h??ft??",
            "prev-month": "??nc??ki ay",
            "prev-year": "??nc??ki il",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "N??vb??ti h??ft??",
            "next-month": "N??vb??ti ay",
            "next-year": "N??vb??ti il",
            "less-than": "Tarix aral?????? %d g??nd??n ??ox olmamal??d??r",
            "more-than": "Tarix aral?????? %d g??nd??n az olmamal??d??r",
            "default-more": "%d g??nd??n ??ox bir tarix se??in",
            "default-single": "Tarix se??in",
            "default-less": "%d g??nd??n az bir tarix se??in",
            "default-range": "%d v?? %d g??n aral??????nda tarixl??r se??in",
            "default-default": "Tarix aral?????? se??in"
        },
        cn: {
            selected: "?????????:",
            day: "???",
            days: "???",
            apply: "??????",
            "week-1": "???",
            "week-2": "???",
            "week-3": "???",
            "week-4": "???",
            "week-5": "???",
            "week-6": "???",
            "week-7": "???",
            "week-number": "???",
            "month-name": ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],
            shortcuts: "????????????",
            past: "??????",
            following: "??????",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "??????",
            "prev-month": "?????????",
            "prev-year": "??????",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "??????",
            "next-month": "?????????",
            "next-year": "??????",
            "less-than": "??????????????????????????????%d???",
            "more-than": "??????????????????????????????%d???",
            "default-more": "???????????????%d??????????????????",
            "default-less": "???????????????%d??????????????????",
            "default-range": "?????????%d??????%d??????????????????",
            "default-single": "?????????????????????",
            "default-default": "???????????????????????????",
            time: "??????",
            hour: "??????",
            minute: "??????"
        },
        cz: {
            selected: "Vybr??no:",
            day: "Den",
            days: "Dny",
            apply: "Zav????t",
            "week-1": "po",
            "week-2": "??t",
            "week-3": "st",
            "week-4": "??t",
            "week-5": "p??",
            "week-6": "so",
            "week-7": "ne",
            "month-name": ["leden", "??nor", "b??ezen", "duben", "kv??ten", "??erven", "??ervenec", "srpen", "z??????", "????jen", "listopad", "prosinec"],
            shortcuts: "Zkratky",
            past: "po",
            following: "n??sleduj??c??",
            previous: "p??edchoz??",
            "prev-week": "t??den",
            "prev-month": "m??s??c",
            "prev-year": "rok",
            next: "dal????",
            "next-week": "t??den",
            "next-month": "m??s??c",
            "next-year": "rok",
            "less-than": "Rozsah data by nem??l b??t v??t???? ne?? %d dn??",
            "more-than": "Rozsah data by nem??l b??t men???? ne?? %d dn??",
            "default-more": "Pros??m zvolte rozsah data v??t???? ne?? %d dn??",
            "default-single": "Pros??m zvolte datum",
            "default-less": "Pros??m zvolte rozsah data men???? ne?? %d dn??",
            "default-range": "Pros??m zvolte rozsah data mezi %d a %d dny",
            "default-default": "Pros??m zvolte rozsah data"
        },
        de: {
            selected: "Auswahl:",
            day: "Tag",
            days: "Tage",
            apply: "Schlie??en",
            "week-1": "mo",
            "week-2": "di",
            "week-3": "mi",
            "week-4": "do",
            "week-5": "fr",
            "week-6": "sa",
            "week-7": "so",
            "month-name": ["januar", "februar", "m??rz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember"],
            shortcuts: "Schnellwahl",
            past: "Vorherige",
            following: "Folgende",
            previous: "Vorherige",
            "prev-week": "Woche",
            "prev-month": "Monat",
            "prev-year": "Jahr",
            next: "N??chste",
            "next-week": "Woche",
            "next-month": "Monat",
            "next-year": "Jahr",
            "less-than": "Datumsbereich darf nicht gr????er sein als %d Tage",
            "more-than": "Datumsbereich darf nicht kleiner sein als %d Tage",
            "default-more": "Bitte mindestens %d Tage ausw??hlen",
            "default-single": "Bitte ein Datum ausw??hlen",
            "default-less": "Bitte weniger als %d Tage ausw??hlen",
            "default-range": "Bitte einen Datumsbereich zwischen %d und %d Tagen ausw??hlen",
            "default-default": "Bitte ein Start- und Enddatum ausw??hlen",
            Time: "Zeit",
            hour: "Stunde",
            minute: "Minute"
        },
        es: {
            selected: "Seleccionado:",
            day: "D??a",
            days: "D??as",
            apply: "Cerrar",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "mi",
            "week-4": "ju",
            "week-5": "vi",
            "week-6": "sa",
            "week-7": "do",
            "month-name": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            shortcuts: "Accesos directos",
            past: "Pasado",
            following: "Siguiente",
            previous: "Anterior",
            "prev-week": "Semana",
            "prev-month": "Mes",
            "prev-year": "A??o",
            next: "Siguiente",
            "next-week": "Semana",
            "next-month": "Mes",
            "next-year": "A??o",
            "less-than": "El rango no deber??a ser mayor de %d d??as",
            "more-than": "El rango no deber??a ser menor de %d d??as",
            "default-more": "Por favor selecciona un rango mayor a %d d??as",
            "default-single": "Por favor selecciona un d??a",
            "default-less": "Por favor selecciona un rango menor a %d d??as",
            "default-range": "Por favor selecciona un rango entre %d y %d d??as",
            "default-default": "Por favor selecciona un rango de fechas."
        },
        fr: {
            selected: "S??lection:",
            day: "Jour",
            days: "Jours",
            apply: "Fermer",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "me",
            "week-4": "je",
            "week-5": "ve",
            "week-6": "sa",
            "week-7": "di",
            "month-name": ["janvier", "f??vrier", "mars", "avril", "mai", "juin", "juillet", "ao??t", "septembre", "octobre", "novembre", "d??cembre"],
            shortcuts: "Raccourcis",
            past: "Pass??",
            following: "Suivant",
            previous: "Pr??c??dent",
            "prev-week": "Semaine",
            "prev-month": "Mois",
            "prev-year": "Ann??e",
            next: "Suivant",
            "next-week": "Semaine",
            "next-month": "Mois",
            "next-year": "Ann??e",
            "less-than": "L'intervalle ne doit pas ??tre sup??rieure ?? %d jours",
            "more-than": "L'intervalle ne doit pas ??tre inf??rieure ?? %d jours",
            "default-more": "Merci de choisir une intervalle sup??rieure ?? %d jours",
            "default-single": "Merci de choisir une date",
            "default-less": "Merci de choisir une intervalle inf??rieure %d jours",
            "default-range": "Merci de choisir une intervalle comprise entre %d et %d jours",
            "default-default": "Merci de choisir une date"
        },
        hu: {
            selected: "Kiv??lasztva:",
            day: "Nap",
            days: "Nap",
            apply: "Ok",
            "week-1": "h",
            "week-2": "k",
            "week-3": "sz",
            "week-4": "cs",
            "week-5": "p",
            "week-6": "sz",
            "week-7": "v",
            "month-name": ["janu??r", "febru??r", "m??rcius", "??prilis", "m??jus", "j??nius", "j??lius", "augusztus", "szeptember", "okt??ber", "november", "december"],
            shortcuts: "Gyorsv??laszt??",
            past: "M??lt",
            following: "K??vetkez??",
            previous: "El??z??",
            "prev-week": "H??t",
            "prev-month": "H??nap",
            "prev-year": "??v",
            next: "K??vetkez??",
            "next-week": "H??t",
            "next-month": "H??nap",
            "next-year": "??v",
            "less-than": "A kiv??laszt??s nem lehet t??bb %d napn??l",
            "more-than": "A kiv??laszt??s nem lehet t??bb %d napn??l",
            "default-more": "V??lassz ki egy id??szakot ami hosszabb mint %d nap",
            "default-single": "V??lassz egy napot",
            "default-less": "V??lassz ki egy id??szakot ami r??videbb mint %d nap",
            "default-range": "V??lassz ki egy %d - %d nap hossz?? id??szakot",
            "default-default": "V??lassz ki egy id??szakot"
        },
        it: {
            selected: "Selezionati:",
            day: "Giorno",
            days: "Giorni",
            apply: "Chiudi",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "me",
            "week-4": "gi",
            "week-5": "ve",
            "week-6": "sa",
            "week-7": "do",
            "month-name": ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
            shortcuts: "Scorciatoie",
            past: "Scorso",
            following: "Successivo",
            previous: "Precedente",
            "prev-week": "Settimana",
            "prev-month": "Mese",
            "prev-year": "Anno",
            next: "Prossimo",
            "next-week": "Settimana",
            "next-month": "Mese",
            "next-year": "Anno",
            "less-than": "L'intervallo non dev'essere maggiore di %d giorni",
            "more-than": "L'intervallo non dev'essere minore di %d giorni",
            "default-more": "Seleziona un intervallo maggiore di %d giorni",
            "default-single": "Seleziona una data",
            "default-less": "Seleziona un intervallo minore di %d giorni",
            "default-range": "Seleziona un intervallo compreso tra i %d e i %d giorni",
            "default-default": "Seleziona un intervallo di date"
        },
        ko: {
            selected: "??????:",
            day: "???",
            days: "??????",
            apply: "??????",
            "week-1": "???",
            "week-2": "???",
            "week-3": "???",
            "week-4": "???",
            "week-5": "???",
            "week-6": "???",
            "week-7": "???",
            "week-number": "???",
            "month-name": ["1???", "2???", "3???", "4???", "5???", "6???", "7???", "8???", "9???", "10???", "11???", "12???"],
            shortcuts: "????????????",
            past: "??????(????????????)",
            following: "??????(????????????)",
            previous: "??????",
            "prev-week": "1???",
            "prev-month": "1???",
            "prev-year": "1???",
            next: "??????",
            "next-week": "1???",
            "next-month": "1???",
            "next-year": "1???",
            "less-than": "?????? ????????? %d ????????? ?????? ??? ????????????",
            "more-than": "?????? ????????? %d ????????? ?????? ??? ????????????",
            "default-more": "?????? ????????? %d ????????? ?????? ????????? ?????????",
            "default-single": "????????? ????????? ?????????",
            "default-less": "%d ????????? ?????? ????????? ????????? ?????????",
            "default-range": "%d??? %d ??? ????????? ?????? ????????? ????????? ?????????",
            "default-default": "?????? ????????? ????????? ?????????",
            time: "??????",
            hour: "???",
            minute: "???"
        },
        no: {
            selected: "Valgt:",
            day: "Dag",
            days: "Dager",
            apply: "Lukk",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "l??",
            "week-7": "s??",
            "month-name": ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            shortcuts: "Snarveier",
            "custom-values": "Egendefinerte Verdier",
            past: "Over",
            following: "F??lger",
            previous: "Forrige",
            "prev-week": "Uke",
            "prev-month": "M??ned",
            "prev-year": "??r",
            next: "Neste",
            "next-week": "Uke",
            "next-month": "M??ned",
            "next-year": "??r",
            "less-than": "Datoperioden skal ikkje v??re lengre enn %d dager",
            "more-than": "Datoperioden skal ikkje v??re kortere enn %d dager",
            "default-more": "Vennligst velg ein datoperiode lengre enn %d dager",
            "default-single": "Vennligst velg ein dato",
            "default-less": "Vennligst velg ein datoperiode mindre enn %d dager",
            "default-range": "Vennligst velg ein datoperiode mellom %d og %d dager",
            "default-default": "Vennligst velg ein datoperiode",
            time: "Tid",
            hour: "Time",
            minute: "Minutter"
        },
        nl: {
            selected: "Geselecteerd:",
            day: "Dag",
            days: "Dagen",
            apply: "Ok",
            "week-1": "ma",
            "week-2": "di",
            "week-3": "wo",
            "week-4": "do",
            "week-5": "vr",
            "week-6": "za",
            "week-7": "zo",
            "month-name": ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            shortcuts: "Snelkoppelingen",
            "custom-values": "Aangepaste waarden",
            past: "Verleden",
            following: "Komend",
            previous: "Vorige",
            "prev-week": "Week",
            "prev-month": "Maand",
            "prev-year": "Jaar",
            next: "Volgende",
            "next-week": "Week",
            "next-month": "Maand",
            "next-year": "Jaar",
            "less-than": "Interval moet langer dan %d dagen zijn",
            "more-than": "Interval mag niet minder dan %d dagen zijn",
            "default-more": "Selecteer een interval langer dan %dagen",
            "default-single": "Selecteer een datum",
            "default-less": "Selecteer een interval minder dan %d dagen",
            "default-range": "Selecteer een interval tussen %d en %d dagen",
            "default-default": "Selecteer een interval",
            time: "Tijd",
            hour: "Uur",
            minute: "Minuut"
        },
        ru: {
            selected: "??????????????:",
            day: "????????",
            days: "????????",
            apply: "??????????????????",
            "week-1": "????",
            "week-2": "????",
            "week-3": "????",
            "week-4": "????",
            "week-5": "????",
            "week-6": "????",
            "week-7": "????",
            "month-name": ["????????????", "??????????????", "????????", "????????????", "??????", "????????", "????????", "????????????", "????????????????", "??????????????", "????????????", "??????????????"],
            shortcuts: "?????????????? ??????????",
            "custom-values": "???????????????????????????????? ????????????????",
            past: "??????????????????",
            following: "??????????????????",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "????????????",
            "prev-month": "??????????",
            "prev-year": "??????",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "????????????",
            "next-month": "??????????",
            "next-year": "??????",
            "less-than": "???????????????? ???? ?????????? ???????? ???????????? %d ????????",
            "more-than": "???????????????? ???? ?????????? ???????? ???????????? %d ????????",
            "default-more": "???????????????????? ???????????????? ???????????????? ???????????? %d ????????",
            "default-single": "???????????????????? ???????????????? ????????",
            "default-less": "???????????????????? ???????????????? ???????????????? ???????????? %d ????????",
            "default-range": "???????????????????? ???????????????? ???????????????? ?????????? %d ?? %d ??????????",
            "default-default": "???????????????????? ???????????????? ????????????????",
            time: "??????????",
            hour: "????????",
            minute: "????????????"
        },
        pl: {
            selected: "Wybrany:",
            day: "Dzie??",
            days: "Dni",
            apply: "Zamknij",
            "week-1": "pon",
            "week-2": "wt",
            "week-3": "??r",
            "week-4": "czw",
            "week-5": "pt",
            "week-6": "so",
            "week-7": "nd",
            "month-name": ["stycze??", "luty", "marzec", "kwiecie??", "maj", "czerwiec", "lipiec", "sierpie??", "wrzesie??", "pa??dziernik", "listopad", "grudzie??"],
            shortcuts: "Skr??ty",
            "custom-values": "Niestandardowe warto??ci",
            past: "Przesz??e",
            following: "Nast??pne",
            previous: "Poprzednie",
            "prev-week": "tydzie??",
            "prev-month": "miesi??c",
            "prev-year": "rok",
            next: "Nast??pny",
            "next-week": "tydzie??",
            "next-month": "miesi??c",
            "next-year": "rok",
            "less-than": "Okres nie powinien by?? d??u??szy ni?? %d dni",
            "more-than": "Okres nie powinien by?? kr??tszy ni??  %d ni",
            "default-more": "Wybierz okres d??u??szy ni?? %d dni",
            "default-single": "Wybierz dat??",
            "default-less": "Wybierz okres kr??tszy ni?? %d dni",
            "default-range": "Wybierz okres trwaj??cy od %d do %d dni",
            "default-default": "Wybierz okres",
            time: "Czas",
            hour: "Godzina",
            minute: "Minuta"
        },
        se: {
            selected: "Vald:",
            day: "dag",
            days: "dagar",
            apply: "godk??nn",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "l??",
            "week-7": "s??",
            "month-name": ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"],
            shortcuts: "genv??gar",
            "custom-values": "Anpassade v??rden",
            past: "??ver",
            following: "f??ljande",
            previous: "f??rra",
            "prev-week": "vecka",
            "prev-month": "m??nad",
            "prev-year": "??r",
            next: "n??sta",
            "next-week": "vecka",
            "next-month": "m??ned",
            "next-year": "??r",
            "less-than": "Datumintervall b??r inte vara mindre ??n %d dagar",
            "more-than": "Datumintervall b??r inte vara mer ??n %d dagar",
            "default-more": "V??lj ett datumintervall l??ngre ??n %d dagar",
            "default-single": "V??lj ett datum",
            "default-less": "V??lj ett datumintervall mindre ??n %d dagar",
            "default-range": "V??lj ett datumintervall mellan %d och %d dagar",
            "default-default": "V??lj ett datumintervall",
            time: "tid",
            hour: "timme",
            minute: "minut"
        },
        pt: {
            selected: "Selecionado:",
            day: "Dia",
            days: "Dias",
            apply: "Fechar",
            "week-1": "seg",
            "week-2": "ter",
            "week-3": "qua",
            "week-4": "qui",
            "week-5": "sex",
            "week-6": "sab",
            "week-7": "dom",
            "week-number": "N",
            "month-name": ["janeiro", "fevereiro", "mar??o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
            shortcuts: "Atalhos",
            "custom-values": "Valores Personalizados",
            past: "Passado",
            following: "Seguinte",
            previous: "Anterior",
            "prev-week": "Semana",
            "prev-month": "M??s",
            "prev-year": "Ano",
            next: "Pr??ximo",
            "next-week": "Pr??xima Semana",
            "next-month": "Pr??ximo M??s",
            "next-year": "Pr??ximo Ano",
            "less-than": "O per??odo selecionado n??o deve ser maior que %d dias",
            "more-than": "O per??odo selecionado n??o deve ser menor que %d dias",
            "default-more": "Selecione um per??odo superior a %d dias",
            "default-single": "Selecione uma data",
            "default-less": "Selecione um per??odo inferior a %d dias",
            "default-range": "Selecione um per??odo de %d a %d dias",
            "default-default": "Selecione um per??odo",
            time: "Tempo",
            hour: "Hora",
            minute: "Minuto"
        },
        tc: {
            selected: "?????????:",
            day: "???",
            days: "???",
            apply: "??????",
            "week-1": "???",
            "week-2": "???",
            "week-3": "???",
            "week-4": "???",
            "week-5": "???",
            "week-6": "???",
            "week-7": "???",
            "week-number": "???",
            "month-name": ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],
            shortcuts: "????????????",
            past: "??????",
            following: "??????",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "??????",
            "prev-month": "?????????",
            "prev-year": "??????",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "??????",
            "next-month": "?????????",
            "next-year": "??????",
            "less-than": "??????????????????????????????%d???",
            "more-than": "??????????????????????????????%d???",
            "default-more": "???????????????%d??????????????????",
            "default-less": "???????????????%d??????????????????",
            "default-range": "?????????%d??????%d??????????????????",
            "default-single": "?????????????????????",
            "default-default": "???????????????????????????",
            time: "??????",
            hour: "??????",
            minute: "??????"
        },
        ja: {
            selected: "??????????????????:",
            day: "???",
            days: "??????",
            apply: "?????????",
            "week-1": "???",
            "week-2": "???",
            "week-3": "???",
            "week-4": "???",
            "week-5": "???",
            "week-6": "???",
            "week-7": "???",
            "month-name": ["1???", "2???", "3???", "4???", "5???", "6???", "7???", "8???", "9???", "10???", "11???", "12???"],
            shortcuts: "??????????????????",
            past: "??????",
            following: "??????",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "?????????",
            "prev-month": "??????",
            "prev-year": "??????",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "??????",
            "next-month": "??????",
            "next-year": "??????",
            "less-than": "?????????????????? ???d ??????????????????????????????????????????",
            "more-than": "?????????????????? ???d ????????????????????????????????????",
            "default-more": "???d ???????????????????????????????????????????????????",
            "default-less": "???d ?????????????????????????????????????????????",
            "default-range": "???d ?????? d???????????????????????????????????????????????????",
            "default-single": "?????????????????????????????????",
            "default-default": "???????????????????????????????????????",
            time: "??????",
            hour: "??????",
            minute: "???"
        },
        da: {
            selected: "Valgt:",
            day: "Dag",
            days: "Dage",
            apply: "Luk",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "l??",
            "week-7": "s??",
            "month-name": ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"],
            shortcuts: "genveje",
            "custom-values": "Brugerdefinerede v??rdier",
            past: "Forbi",
            following: "F??lgende",
            previous: "Forrige",
            "prev-week": "uge",
            "prev-month": "m??nad",
            "prev-year": "??r",
            next: "N??ste",
            "next-week": "N??ste uge",
            "next-month": "N??ste m??ned",
            "next-year": "N??ste ??r",
            "less-than": "Dato interval b??r ikke v??re med end %d dage",
            "more-than": "Dato interval b??r ikke v??re mindre end %d dage",
            "default-more": "V??lg datointerval l??ngere end %d dage",
            "default-single": "V??lg dato",
            "default-less": "V??lg datointerval mindre end %d dage",
            "default-range": "V??lg datointerval mellem %d og %d dage",
            "default-default": "V??lg datointerval",
            time: "tid",
            hour: "time",
            minute: "minut"
        },
        fi: {
            selected: "Valittu:",
            day: "P??iv??",
            days: "P??iv????",
            apply: "Sulje",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "ke",
            "week-4": "to",
            "week-5": "pe",
            "week-6": "la",
            "week-7": "su",
            "week-number": "V",
            "month-name": ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kes??kuu", "hein??kuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
            shortcuts: "Pikavalinnat",
            "custom-values": "Mukautetut Arvot",
            past: "Menneet",
            following: "Tulevat",
            previous: "Edellinen",
            "prev-week": "Viikko",
            "prev-month": "Kuukausi",
            "prev-year": "Vuosi",
            next: "Seuraava",
            "next-week": "Viikko",
            "next-month": "Kuukausi",
            "next-year": "Vuosi",
            "less-than": "Aikajakson tulisi olla v??hemm??n kuin %d p??iv????",
            "more-than": "Aikajakson ei tulisi olla v??hemp???? kuin %d p??iv????",
            "default-more": "Valitse pidempi aikajakso kuin %d p??iv????",
            "default-single": "Valitse p??iv??",
            "default-less": "Valitse lyhyempi aikajakso kuin %d p??iv????",
            "default-range": "Valitse aikajakso %d ja %d p??iv??n v??lilt??",
            "default-default": "Valitse aikajakso",
            time: "Aika",
            hour: "Tunti",
            minute: "Minuutti"
        }
    }, e.fn.dateRangePicker = function (a) {
        function n(t, a) {
            return a.contains(t.target) || t.target == a || void 0 != a.childNodes && e.inArray(t.target, a.childNodes) >= 0
        }

        function r() {
            function r(t) {
                var n = e(t).parents("table").hasClass("month2"), r = n ? a.month2 : a.month1;
                r = H(r), !a.singleMonth && !a.singleDate && !n && L(r, a.month2) >= 0 || K(r) || (Y(r, n ? "month2" : "month1"), A())
            }

            function i(e) {
                var t = H(a.month1), n = H(a.month2);
                K(n) || !a.singleDate && L(t, n) >= 0 || (Y(t, "month1"), Y(n, "month2"), S())
            }

            function o(t) {
                var n = e(t).parents("table").hasClass("month2"), r = n ? a.month2 : a.month1;
                r = R(r), n && L(r, a.month1) <= 0 || K(r) || (Y(r, n ? "month2" : "month1"), A())
            }

            function d(e) {
                var t = R(a.month1), n = R(a.month2);
                K(t) || !a.singleDate && L(n, t) <= 0 || (Y(n, "month2"), Y(t, "month1"), S())
            }

            var l = this;
            if (e(this).data("date-picker-opened")) return void N();
            e(this).data("date-picker-opened", !0), se = $().hide(), se.append('<div class="date-range-length-tip"></div>'), e(a.container).append(se), a.inline ? se.addClass("inline-wrapper") : s(), a.alwaysOpen && se.find(".apply-btn").hide();
            var m = ne();
            if (re(m), a.time.enabled) if (a.startDate && a.endDate || a.start && a.end) P(t(a.start || a.startDate).toDate(), "time1"), P(t(a.end || a.endDate).toDate(), "time2"); else {
                var h = a.defaultEndTime ? a.defaultEndTime : m;
                P(m, "time1"), P(h, "time2")
            }
            var p = "";
            p = ae(a.singleDate ? "default-single" : a.minDays && a.maxDays ? "default-range" : a.minDays ? "default-more" : a.maxDays ? "default-less" : "default-default"), se.find(".default-top").html(p.replace(/\%d/, a.minDays).replace(/\%d/, a.maxDays)), a.singleMonth ? se.addClass("single-month") : se.addClass("two-months"), setTimeout(function () {
                u(), de = !0
            }, 0), se.click(function (e) {
                e.stopPropagation()
            }), e(document).bind("click.datepicker", function (e) {
                n(e, l[0]) || se.is(":visible") && N()
            }), se.find(".next").click(function () {
                a.stickyMonths ? i(this) : r(this)
            }), se.find(".prev").click(function () {
                a.stickyMonths ? d(this) : o(this)
            }), se.attr("unselectable", "on").css("user-select", "none").bind("selectstart", function (e) {
                return e.preventDefault(), !1
            }), se.find(".apply-btn").click(function () {
                N();
                var t = I(new Date(a.start)) + a.separator + I(new Date(a.end));
                e(l).trigger("datepicker-apply", {value: t, date1: new Date(a.start), date2: new Date(a.end)})
            }), se.find("[custom]").click(function () {
                var t = e(this).attr("custom");
                a.start = !1, a.end = !1, se.find(".day.checked").removeClass("checked"), a.setValue.call(ue, t), T(), z(!0), S(), a.autoClose && N()
            }), se.find("[shortcut]").click(function () {
                var t, n = e(this).attr("shortcut"), r = new Date, s = !1;
                if (n.indexOf("day") != -1) {
                    var i = parseInt(n.split(",", 2)[1], 10);
                    s = new Date((new Date).getTime() + 864e5 * i), r = new Date(r.getTime() + 864e5 * (i > 0 ? 1 : -1))
                } else if (n.indexOf("week") != -1) {
                    t = n.indexOf("prev,") != -1 ? -1 : 1;
                    var o;
                    for (o = 1 == t ? "monday" == a.startOfWeek ? 1 : 0 : "monday" == a.startOfWeek ? 0 : 6, r = new Date(r.getTime() - 864e5); r.getDay() != o;) r = new Date(r.getTime() + 864e5 * t);
                    s = new Date(r.getTime() + 864e5 * t * 6)
                } else if (n.indexOf("month") != -1) t = n.indexOf("prev,") != -1 ? -1 : 1, s = 1 == t ? H(r) : R(r), s.setDate(1), r = H(s), r.setDate(1), r = new Date(r.getTime() - 864e5); else if (n.indexOf("year") != -1) t = n.indexOf("prev,") != -1 ? -1 : 1, s = new Date, s.setFullYear(r.getFullYear() + t), s.setMonth(0), s.setDate(1), r.setFullYear(r.getFullYear() + t), r.setMonth(11), r.setDate(31); else if ("custom" == n) {
                    var d = e(this).html();
                    if (a.customShortcuts && a.customShortcuts.length > 0) for (var l = 0; l < a.customShortcuts.length; l++) {
                        var u = a.customShortcuts[l];
                        if (u.name == d) {
                            var m = [];
                            if (m = u.dates.call(), m && 2 == m.length && (s = m[0], r = m[1]), m && 1 == m.length) {
                                var h = m[0];
                                Y(h, "month1"), Y(H(h), "month2"), A()
                            }
                            break
                        }
                    }
                }
                s && r && (O(s, r), T())
            }), se.find(".time1 input[type=range]").bind("change touchmove", function (t) {
                var a = t.target, n = "hour" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0,
                    r = "minute" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0;
                c("time1", n, r)
            }), se.find(".time2 input[type=range]").bind("change touchmove", function (t) {
                var a = t.target, n = "hour" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0,
                    r = "minute" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0;
                c("time2", n, r)
            })
        }

        function s() {
            if (!a.inline) {
                var t = e(le).offset();
                if ("relative" == e(a.container).css("position")) {
                    var n = e(a.container).offset();
                    se.css({top: t.top - n.top + e(le).outerHeight() + 4, left: t.left - n.left})
                } else t.left < 460 ? se.css({
                    top: t.top + e(le).outerHeight() + parseInt(e("body").css("border-top") || 0, 10),
                    left: t.left
                }) : se.css({
                    top: t.top + e(le).outerHeight() + parseInt(e("body").css("border-top") || 0, 10),
                    left: t.left + e(le).width() - se.width() - 16
                })
            }
        }

        function i() {
            return se
        }

        function o(t) {
            s(), B(), d(), a.customOpenAnimation ? a.customOpenAnimation.call(se.get(0), function () {
                e(le).trigger("datepicker-opened", {relatedTarget: se})
            }) : se.slideDown(t, function () {
                e(le).trigger("datepicker-opened", {relatedTarget: se})
            }), e(le).trigger("datepicker-open", {relatedTarget: se}), A(), u()
        }

        function d() {
            var e = a.getValue.call(ue), n = e ? e.split(a.separator) : "";
            if (n && (1 == n.length && a.singleDate || n.length >= 2)) {
                var r = a.format;
                r.match(/Do/) && (r = r.replace(/Do/, "D"), n[0] = n[0].replace(/(\d+)(th|nd|st)/, "$1"), n.length >= 2 && (n[1] = n[1].replace(/(\d+)(th|nd|st)/, "$1"))), de = !1, n.length >= 2 ? O(l(n[0], r, t.locale(a.language)), l(n[1], r, t.locale(a.language))) : 1 == n.length && a.singleDate && j(l(n[0], r, t.locale(a.language))), de = !0
            }
        }

        function l(e, a, n) {
            return t(e, a, n).isValid() ? t(e, a, n).toDate() : t().toDate()
        }

        function u() {
            var e = se.find(".gap").css("margin-left");
            e && (e = parseInt(e));
            var t = se.find(".month1").width(), a = se.find(".gap").width() + (e ? 2 * e : 0),
                n = se.find(".month2").width();
            se.find(".month-wrapper").width(t + a + n)
        }

        function m(e, a) {
            se.find("." + e + " input[type=range].hour-range").val(t(a).hours()), se.find("." + e + " input[type=range].minute-range").val(t(a).minutes()), c(e, t(a).format("HH"), t(a).format("mm"))
        }

        function h(e, n) {
            a[e] = parseInt(t(parseInt(n)).startOf("day").add(t(a[e + "Time"]).format("HH"), "h").add(t(a[e + "Time"]).format("mm"), "m").valueOf())
        }

        function p() {
            m("time1", a.start), m("time2", a.end)
        }

        function c(e, n, r) {
            function s(e, t) {
                var s = t.format("HH"), i = t.format("mm");
                a[e] = t.startOf("day").add(n || s, "h").add(r || i, "m").valueOf()
            }

            switch (n && se.find("." + e + " .hour-val").text(n), r && se.find("." + e + " .minute-val").text(r), e) {
                case"time1":
                    a.start && s("start", t(a.start)), s("startTime", t(a.startTime || t().valueOf()));
                    break;
                case"time2":
                    a.end && s("end", t(a.end)), s("endTime", t(a.endTime || t().valueOf()))
            }
            T(), z(), S()
        }

        function f() {
            a.start = !1, a.end = !1, se.find(".day.checked").removeClass("checked"), se.find(".day.last-date-selected").removeClass("last-date-selected"), se.find(".day.first-date-selected").removeClass("first-date-selected"), a.setValue.call(ue, ""), T(), z(), S()
        }

        function v(e) {
            var n = e;
            return "week-range" === a.batchMode ? n = "monday" === a.startOfWeek ? t(parseInt(e)).startOf("isoweek").valueOf() : t(parseInt(e)).startOf("week").valueOf() : "month-range" === a.batchMode && (n = t(parseInt(e)).startOf("month").valueOf()), n
        }

        function g(e) {
            var n = e;
            return "week-range" === a.batchMode ? n = "monday" === a.startOfWeek ? t(parseInt(e)).endOf("isoweek").valueOf() : t(parseInt(e)).endOf("week").valueOf() : "month-range" === a.batchMode && (n = t(parseInt(e)).endOf("month").valueOf()), n
        }

        function k(n) {
            if (!n.hasClass("invalid")) {
                var r = n.attr("time");
                if (n.addClass("checked"), a.singleDate ? (a.start = r, a.end = !1) : "week" === a.batchMode ? "monday" === a.startOfWeek ? (a.start = t(parseInt(r)).startOf("isoweek").valueOf(), a.end = t(parseInt(r)).endOf("isoweek").valueOf()) : (a.end = t(parseInt(r)).endOf("week").valueOf(), a.start = t(parseInt(r)).startOf("week").valueOf()) : "workweek" === a.batchMode ? (a.start = t(parseInt(r)).day(1).valueOf(), a.end = t(parseInt(r)).day(5).valueOf()) : "weekend" === a.batchMode ? (a.start = t(parseInt(r)).day(6).valueOf(), a.end = t(parseInt(r)).day(7).valueOf()) : "month" === a.batchMode ? (a.start = t(parseInt(r)).startOf("month").valueOf(), a.end = t(parseInt(r)).endOf("month").valueOf()) : a.start && a.end || !a.start && !a.end ? (a.start = v(r), a.end = !1) : a.start && (a.end = g(r), a.time.enabled && h("end", a.end)), a.time.enabled && (a.start && h("start", a.start), a.end && h("end", a.end)), !a.singleDate && a.start && a.end && a.start > a.end) {
                    var s = a.end;
                    a.end = g(a.start), a.start = v(s), a.time.enabled && a.swapTime && p()
                }
                a.start = parseInt(a.start), a.end = parseInt(a.end), x(), a.start && !a.end && (e(le).trigger("datepicker-first-date-selected", {date1: new Date(a.start)}), D(n)), b(r), T(), z(), S(), M()
            }
        }

        function w(e) {
            var n, r, s = parseInt(e.attr("data-start-time"), 10);
            a.startWeek ? (se.find(".week-number-selected").removeClass("week-number-selected"), n = new Date(s < a.startWeek ? s : a.startWeek), r = new Date(s < a.startWeek ? a.startWeek : s), a.startWeek = !1, a.start = t(n).day("monday" == a.startOfWeek ? 1 : 0).valueOf(), a.end = t(r).day("monday" == a.startOfWeek ? 7 : 6).valueOf()) : (a.startWeek = s, e.addClass("week-number-selected"), n = new Date(s), a.start = t(n).day("monday" == a.startOfWeek ? 1 : 0).valueOf(), a.end = t(n).day("monday" == a.startOfWeek ? 7 : 6).valueOf()), b(), T(), z(), S(), M()
        }

        function y(e) {
            if (e = parseInt(e, 10), a.startDate && F(e, a.startDate) < 0) return !1;
            if (a.endDate && F(e, a.endDate) > 0) return !1;
            if (a.start && !a.end && !a.singleDate) {
                if (a.maxDays > 0 && C(e, a.start) > a.maxDays) return !1;
                if (a.minDays > 0 && C(e, a.start) < a.minDays) return !1;
                if (a.selectForward && e < a.start) return !1;
                if (a.selectBackward && e > a.start) return !1;
                if (a.beforeShowDay && "function" == typeof a.beforeShowDay) {
                    for (var t = !0, n = e; C(n, a.start) > 1;) {
                        var r = a.beforeShowDay(new Date(n));
                        if (!r[0]) {
                            t = !1;
                            break
                        }
                        if (Math.abs(n - a.start) < 864e5) break;
                        n > a.start && (n -= 864e5), n < a.start && (n += 864e5)
                    }
                    if (!t) return !1
                }
            }
            return !0
        }

        function b() {
            return se.find(".day.invalid.tmp").removeClass("tmp invalid").addClass("valid"), a.start && !a.end && se.find(".day.toMonth.valid").each(function () {
                var t = parseInt(e(this).attr("time"), 10);
                y(t) ? e(this).addClass("valid tmp").removeClass("invalid") : e(this).addClass("invalid tmp").removeClass("valid")
            }), !0
        }

        function D(t) {
            var n = parseInt(t.attr("time")), r = "";
            if (t.hasClass("has-tooltip") && t.attr("data-tooltip")) r = '<span style="white-space:nowrap">' + t.attr("data-tooltip") + "</span>"; else if (!t.hasClass("invalid")) if (a.singleDate) se.find(".day.hovering").removeClass("hovering"), t.addClass("hovering"); else if (se.find(".day").each(function () {
                var t = parseInt(e(this).attr("time"));
                a.start, a.end;
                t == n ? e(this).addClass("hovering") : e(this).removeClass("hovering"), a.start && !a.end && (a.start < t && n >= t || a.start > t && n <= t) ? e(this).addClass("hovering") : e(this).removeClass("hovering")
            }), a.start && !a.end) {
                var s = C(n, a.start);
                a.hoveringTooltip && ("function" == typeof a.hoveringTooltip ? r = a.hoveringTooltip(s, a.start, n) : a.hoveringTooltip === !0 && s > 1 && (r = s + " " + ae("days")))
            }
            if (r) {
                var i = t.offset(), o = se.offset(), d = i.left - o.left, l = i.top - o.top;
                d += t.width() / 2;
                var u = se.find(".date-range-length-tip"),
                    m = u.css({visibility: "hidden", display: "none"}).html(r).width(), h = u.height();
                d -= m / 2, l -= h, setTimeout(function () {
                    u.css({left: d, top: l, display: "block", visibility: "visible"})
                }, 10)
            } else se.find(".date-range-length-tip").hide()
        }

        function x() {
            se.find(".day.hovering").removeClass("hovering"), se.find(".date-range-length-tip").hide()
        }

        function M() {
            a.singleDate === !0 ? de && a.start && a.autoClose && N() : de && a.start && a.end && a.autoClose && N()
        }

        function T() {
            var e = Math.ceil((a.end - a.start) / 864e5) + 1;
            a.singleDate ? a.start && !a.end ? se.find(".drp_top-bar").removeClass("error").addClass("normal") : se.find(".drp_top-bar").removeClass("error").removeClass("normal") : a.maxDays && e > a.maxDays ? (a.start = !1, a.end = !1, se.find(".day").removeClass("checked"), se.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(ae("less-than").replace("%d", a.maxDays))) : a.minDays && e < a.minDays ? (a.start = !1, a.end = !1, se.find(".day").removeClass("checked"), se.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(ae("more-than").replace("%d", a.minDays))) : a.start || a.end ? se.find(".drp_top-bar").removeClass("error").addClass("normal") : se.find(".drp_top-bar").removeClass("error").removeClass("normal"), a.singleDate && a.start && !a.end || !a.singleDate && a.start && a.end ? se.find(".apply-btn").removeClass("disabled") : se.find(".apply-btn").addClass("disabled"), a.batchMode && (a.start && a.startDate && F(a.start, a.startDate) < 0 || a.end && a.endDate && F(a.end, a.endDate) > 0) && (a.start = !1, a.end = !1, se.find(".day").removeClass("checked"))
        }

        function z(t, n) {
            se.find(".start-day").html("..."), se.find(".end-day").html("..."), se.find(".selected-days").hide(), a.start && se.find(".start-day").html(I(new Date(parseInt(a.start)))), a.end && se.find(".end-day").html(I(new Date(parseInt(a.end))));
            var r;
            a.start && a.singleDate ? (se.find(".apply-btn").removeClass("disabled"), r = I(new Date(a.start)), a.setValue.call(ue, r, I(new Date(a.start)), I(new Date(a.end))), de && !n && e(le).trigger("datepicker-change", {
                value: r,
                date1: new Date(a.start)
            })) : a.start && a.end ? (se.find(".selected-days").show().find(".selected-days-num").html(C(a.end, a.start)), se.find(".apply-btn").removeClass("disabled"), r = I(new Date(a.start)) + a.separator + I(new Date(a.end)), a.setValue.call(ue, r, I(new Date(a.start)), I(new Date(a.end))), de && !n && e(le).trigger("datepicker-change", {
                value: r,
                date1: new Date(a.start),
                date2: new Date(a.end)
            })) : t ? se.find(".apply-btn").removeClass("disabled") : se.find(".apply-btn").addClass("disabled")
        }

        function C(e, t) {
            return Math.abs(Z(e) - Z(t)) + 1
        }

        function O(e, t, n) {
            if (e.getTime() > t.getTime()) {
                var r = t;
                t = e, e = r, r = null
            }
            var s = !0;
            return a.startDate && F(e, a.startDate) < 0 && (s = !1), a.endDate && F(t, a.endDate) > 0 && (s = !1), s ? (a.start = e.getTime(), a.end = t.getTime(), a.time.enabled && (m("time1", e), m("time2", t)), (a.stickyMonths || F(e, t) > 0 && 0 === L(e, t)) && (a.lookBehind ? e = R(t) : t = H(e)), a.stickyMonths && a.endDate !== !1 && L(t, a.endDate) > 0 && (e = R(e), t = R(t)), a.stickyMonths || 0 === L(e, t) && (a.lookBehind ? e = R(t) : t = H(e)), Y(e, "month1"), Y(t, "month2"), A(), T(), z(!1, n), void M()) : (Y(a.startDate, "month1"), Y(H(a.startDate), "month2"), void A())
        }

        function j(e) {
            var t = !0;
            if (a.startDate && F(e, a.startDate) < 0 && (t = !1), a.endDate && F(e, a.endDate) > 0 && (t = !1), !t) return void Y(a.startDate, "month1");
            if (a.start = e.getTime(), a.time.enabled && m("time1", e), Y(e, "month1"), a.singleMonth !== !0) {
                var n = H(e);
                Y(n, "month2")
            }
            A(), z(), M()
        }

        function S() {
            (a.start || a.end) && (se.find(".day").each(function () {
                var n = parseInt(e(this).attr("time")), r = a.start, s = a.end;
                a.time.enabled && (n = t(n).startOf("day").valueOf(), r = t(r || t().valueOf()).startOf("day").valueOf(), s = t(s || t().valueOf()).startOf("day").valueOf()), a.start && a.end && s >= n && r <= n || a.start && !a.end && t(r).format("YYYY-MM-DD") == t(n).format("YYYY-MM-DD") ? e(this).addClass("checked") : e(this).removeClass("checked"), a.start && t(r).format("YYYY-MM-DD") == t(n).format("YYYY-MM-DD") ? e(this).addClass("first-date-selected") : e(this).removeClass("first-date-selected"), a.end && t(s).format("YYYY-MM-DD") == t(n).format("YYYY-MM-DD") ? e(this).addClass("last-date-selected") : e(this).removeClass("last-date-selected")
            }), se.find(".week-number").each(function () {
                e(this).attr("data-start-time") == a.startWeek && e(this).addClass("week-number-selected")
            }))
        }

        function Y(e, n) {
            e = t(e).toDate();
            var r = W(e.getMonth());
            se.find("." + n + " .month-name").html(r + " " + e.getFullYear()), se.find("." + n + " tbody").html(X(e)), a[n] = e, b(), V()
        }

        function V() {
            se.find(".day").unbind("click").click(function (t) {
                k(e(this))
            }), se.find(".day").unbind("mouseenter").mouseenter(function (t) {
                D(e(this))
            }), se.find(".day").unbind("mouseleave").mouseleave(function (e) {
                se.find(".date-range-length-tip").hide(), a.singleDate && x()
            }), se.find(".week-number").unbind("click").click(function (t) {
                w(e(this))
            })
        }

        function P(e, t) {
            se.find("." + t).append(q()), m(t, e)
        }

        function W(e) {
            return ae("month-name")[e]
        }

        function I(e) {
            return t(e).format(a.format)
        }

        function A() {
            S();
            var e = parseInt(t(a.month1).format("YYYYMM")), n = parseInt(t(a.month2).format("YYYYMM")),
                r = Math.abs(e - n), s = r > 1 && 89 != r;
            s ? se.addClass("has-gap").removeClass("no-gap").find(".gap").css("visibility", "visible") : se.removeClass("has-gap").addClass("no-gap").find(".gap").css("visibility", "hidden");
            var i = se.find("table.month1").height(), o = se.find("table.month2").height();
            se.find(".gap").height(Math.max(i, o) + 10)
        }

        function N() {
            if (!a.alwaysOpen) {
                var t = function () {
                    e(le).data("date-picker-opened", !1), e(le).trigger("datepicker-closed", {relatedTarget: se})
                };
                a.customCloseAnimation ? a.customCloseAnimation.call(se.get(0), t) : e(se).slideUp(a.duration, t), e(le).trigger("datepicker-close", {relatedTarget: se})
            }
        }

        function B() {
            Y(a.month1, "month1"), Y(a.month2, "month2")
        }

        function L(e, a) {
            var n = parseInt(t(e).format("YYYYMM")) - parseInt(t(a).format("YYYYMM"));
            return n > 0 ? 1 : 0 === n ? 0 : -1
        }

        function F(e, a) {
            var n = parseInt(t(e).format("YYYYMMDD")) - parseInt(t(a).format("YYYYMMDD"));
            return n > 0 ? 1 : 0 === n ? 0 : -1
        }

        function H(e) {
            return t(e).add(1, "months").toDate()
        }

        function R(e) {
            return t(e).add(-1, "months").toDate()
        }

        function q() {
            return "<div><span>" + ae("Time") + ': <span class="hour-val">00</span>:<span class="minute-val">00</span></span></div><div class="hour"><label>' + ae("Hour") + ': <input type="range" class="hour-range" name="hour" min="0" max="23"></label></div><div class="minute"><label>' + ae("Minute") + ': <input type="range" class="minute-range" name="minute" min="0" max="59"></label></div>'
        }

        function $() {
            var t = '<div class="date-picker-wrapper';
            a.extraClass && (t += " " + a.extraClass + " "), a.singleDate && (t += " single-date "), a.showShortcuts || (t += " no-shortcuts "), a.showTopbar || (t += " no-topbar "), a.customTopBar && (t += " custom-topbar "), t += '">', a.showTopbar && (t += '<div class="drp_top-bar">', a.customTopBar ? ("function" == typeof a.customTopBar && (a.customTopBar = a.customTopBar()), t += '<div class="custom-top">' + a.customTopBar + "</div>") : (t += '<div class="normal-top"><span style="color:#333">' + ae("selected") + ' </span> <b class="start-day">...</b>', a.singleDate || (t += ' <span class="separator-day">' + a.separator + '</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> ' + ae("days") + ")</i>"), t += "</div>", t += '<div class="error-top">error</div><div class="default-top">default</div>'), t += '<input type="button" class="apply-btn disabled' + E() + '" value="' + ae("apply") + '" />', t += "</div>");
            var n = 3, r = "&lt;";
            // var n = a.showWeekNumbers ? 6 : 5, r = "&lt;";
            a.customArrowPrevSymbol && (r = a.customArrowPrevSymbol);
            var s = "&gt;";
            if (a.customArrowNextSymbol && (s = a.customArrowNextSymbol), t += '<div class="month-wrapper"> ' +
                '  <table class="month1" cellspacing="0" border="0" cellpadding="0">     ' +
                '  <thead>        ' +
                '   <tr class="caption">     ' +
                '          <th></th><th>      ' +
                '             <span class="prev">' + r + '        ' +
                '           </span>           ' +
                '    </th>            ' +
                '   <th colspan="' + n + '" class="month-name">      ' +
                '         </th>            ' +
                '   <th>' + (a.singleDate || !a.stickyMonths ?
                    '<span class="next">' + s + "</span>" : "") + '      ' +
                '         </th><th></th>     ' +
                '      </tr>      ' +
                '     <tr class="week-name">' + J() + "    " +
                "   </thead>   " +
                "    <tbody></tbody>  " +
                " </table>", G() && (t += '<div class="gap">' + _() + '</div><table class="month2" cellspacing="0" border="0" cellpadding="0">   <thead>   <tr class="caption">       <th style="width:27px;">' + (a.stickyMonths ? "" : '<span class="prev">' + r + "</span>") + '       </th>       <th colspan="' + n + '" class="month-name">       </th>       <th style="width:27px;">           <span class="next">' + s + '</span>       </th>   </tr>   <tr class="week-name">' + J() + "   </thead>   <tbody></tbody></table>"), t += '<div style="clear:both;height:0;font-size:0;"></div><div class="time"><div class="time1"></div>', a.singleDate || (t += '<div class="time2"></div>'), t += '</div><div style="clear:both;height:0;font-size:0;"></div></div>', t += '<div class="footer">', a.showShortcuts) {
                t += '<div class="shortcuts"><b>' + ae("shortcuts") + "</b>";
                var i = a.shortcuts;
                if (i) {
                    var o;
                    if (i["prev-days"] && i["prev-days"].length > 0) {
                        t += '&nbsp;<span class="prev-days">' + ae("past");
                        for (var d = 0; d < i["prev-days"].length; d++) o = i["prev-days"][d], o += ae(i["prev-days"][d] > 1 ? "days" : "day"), t += ' <a href="javascript:;" shortcut="day,-' + i["prev-days"][d] + '">' + o + "</a>";
                        t += "</span>"
                    }
                    if (i["next-days"] && i["next-days"].length > 0) {
                        t += '&nbsp;<span class="next-days">' + ae("following");
                        for (var d = 0; d < i["next-days"].length; d++) o = i["next-days"][d], o += ae(i["next-days"][d] > 1 ? "days" : "day"), t += ' <a href="javascript:;" shortcut="day,' + i["next-days"][d] + '">' + o + "</a>";
                        t += "</span>"
                    }
                    if (i.prev && i.prev.length > 0) {
                        t += '&nbsp;<span class="prev-buttons">' + ae("previous");
                        for (var d = 0; d < i.prev.length; d++) o = ae("prev-" + i.prev[d]), t += ' <a href="javascript:;" shortcut="prev,' + i.prev[d] + '">' + o + "</a>";
                        t += "</span>"
                    }
                    if (i.next && i.next.length > 0) {
                        t += '&nbsp;<span class="next-buttons">' + ae("next");
                        for (var d = 0; d < i.next.length; d++) o = ae("next-" + i.next[d]), t += ' <a href="javascript:;" shortcut="next,' + i.next[d] + '">' + o + "</a>";
                        t += "</span>"
                    }
                }
                if (a.customShortcuts) for (var d = 0; d < a.customShortcuts.length; d++) {
                    var l = a.customShortcuts[d];
                    t += '&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">' + l.name + "</a></span>"
                }
                t += "</div>"
            }
            if (a.showCustomValues && (t += '<div class="customValues"><b>' + (a.customValueLabel || ae("custom-values")) + "</b>", a.customValues)) for (var d = 0; d < a.customValues.length; d++) {
                var u = a.customValues[d];
                t += '&nbsp;<span class="custom-value"><a href="javascript:;" custom="' + u.value + '">' + u.name + "</a></span>"
            }
            return t += "</div></div>", e(t)
        }

        function E() {
            var e = "";
            return a.autoClose === !0 && (e += " hide"), "" !== a.applyBtnClass && (e += " " + a.applyBtnClass), e
        }

        function J() {
            var e = a.showWeekNumbers ? "<th>" + ae("week-number") + "</th>" : "";
            return "monday" == a.startOfWeek ? e + "<th>" + ae("week-1") + "</th><th>" + ae("week-2") + "</th><th>" + ae("week-3") + "</th><th>" + ae("week-4") + "</th><th>" + ae("week-5") + "</th><th>" + ae("week-6") + "</th><th>" + ae("week-7") + "</th>" : e + "<th>" + ae("week-7") + "</th><th>" + ae("week-1") + "</th><th>" + ae("week-2") + "</th><th>" + ae("week-3") + "</th><th>" + ae("week-4") + "</th><th>" + ae("week-5") + "</th><th>" + ae("week-6") + "</th>"
        }

        function K(e) {
            return e = t(e), !(!a.startDate || !e.endOf("month").isBefore(a.startDate)) || !(!a.endDate || !e.startOf("month").isAfter(a.endDate))
        }

        function _() {
            for (var e = ['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'], t = 0; t < 20; t++) e.push('<div class="gap-line"><div class="gap-1"></div><div class="gap-2"></div><div class="gap-3"></div></div>');
            return e.push("</div>"), e.join("")
        }

        function G() {
            return !a.singleMonth
        }

        function U(t, a, n) {
            var r = e.extend(!0, {}, t);
            e.each(a, function (e, t) {
                var a = t(n);
                for (var s in a) r.hasOwnProperty(s) ? r[s] += a[s] : r[s] = a[s]
            });
            var s = "";
            for (var i in r) r.hasOwnProperty(i) && (s += i + '="' + r[i] + '" ');
            return s
        }

        function Z(e) {
            return Math.floor(Q(e) / 864e5)
        }

        function Q(e) {
            return t.isMoment(e) && (e = e.toDate().getTime()), "object" == typeof e && e.getTime && (e = e.getTime()), "string" != typeof e || e.match(/\d{13}/) || (e = t(e, a.format).toDate().getTime()), e = parseInt(e, 10) - 60 * (new Date).getTimezoneOffset() * 1e3
        }

        function X(e) {
            var n = [];
            e.setDate(1);
            var r = (new Date(e.getTime() - 864e5), new Date), s = e.getDay();
            0 === s && "monday" === a.startOfWeek && (s = 7);
            var i, o;
            if (s > 0) for (var d = s; d > 0; d--) {
                var l = new Date(e.getTime() - 864e5 * d);
                o = y(l.getTime()), a.startDate && F(l, a.startDate) < 0 && (o = !1), a.endDate && F(l, a.endDate) > 0 && (o = !1), n.push({
                    date: l,
                    type: "lastMonth",
                    day: l.getDate(),
                    time: l.getTime(),
                    valid: o
                })
            }
            for (var u = e.getMonth(), d = 0; d < 40; d++) i = t(e).add(d, "days").toDate(), o = y(i.getTime()), a.startDate && F(i, a.startDate) < 0 && (o = !1), a.endDate && F(i, a.endDate) > 0 && (o = !1), n.push({
                date: i,
                type: i.getMonth() == u ? "toMonth" : "nextMonth",
                day: i.getDate(),
                time: i.getTime(),
                valid: o
            });
            for (var m = [], h = 0; h < 6 && "nextMonth" != n[7 * h].type; h++) {
                m.push("<tr>");
                for (var l = 0; l < 7; l++) {
                    var p = "monday" == a.startOfWeek ? l + 1 : l;
                    i = n[7 * h + p];
                    var c = t(i.time).format("L") == t(r).format("L");
                    if (i.extraClass = "", i.tooltip = "", i.valid && a.beforeShowDay && "function" == typeof a.beforeShowDay) {
                        var f = a.beforeShowDay(t(i.time).toDate());
                        i.valid = f[0], i.extraClass = f[1] || "", i.tooltip = f[2] || "", "" !== i.tooltip && (i.extraClass += " has-tooltip ")
                    }
                    var v = {
                        time: i.time,
                        "data-tooltip": i.tooltip,
                        "class": "day " + i.type + " " + i.extraClass + " " + (i.valid ? "valid" : "invalid") + " " + (c ? "real-today" : "")
                    };
                    0 === l && a.showWeekNumbers && m.push('<td><div class="week-number" data-start-time="' + i.time + '">' + a.getWeekNumber(i.date) + "</div></td>"), m.push("<td " + U({}, a.dayTdAttrs, i) + "><div " + U(v, a.dayDivAttrs, i) + ">" + ee(i.time, i.day) + "</div></td>")
                }
                m.push("</tr>")
            }
            return m.join("")
        }

        function ee(e, t) {
            return a.showDateFilter && "function" == typeof a.showDateFilter ? a.showDateFilter(e, t) : t
        }

        function te() {
            if ("auto" == a.language) {
                var t = navigator.language ? navigator.language : navigator.browserLanguage;
                if (!t) return e.dateRangePickerLanguages["default"];
                t = t.toLowerCase();
                for (var n in e.dateRangePickerLanguages) if (t.indexOf(n) !== -1) return e.dateRangePickerLanguages[n];
                return e.dateRangePickerLanguages["default"]
            }
            return a.language && a.language in e.dateRangePickerLanguages ? e.dateRangePickerLanguages[a.language] : e.dateRangePickerLanguages["default"]
        }

        function ae(t) {
            var a = t.toLowerCase(), n = t in oe ? oe[t] : a in oe ? oe[a] : null,
                r = e.dateRangePickerLanguages["default"];
            return null == n && (n = t in r ? r[t] : a in r ? r[a] : ""), n
        }

        function ne() {
            var e = a.defaultTime ? a.defaultTime : new Date;
            return a.lookBehind ? (a.startDate && L(e, a.startDate) < 0 && (e = H(t(a.startDate).toDate())), a.endDate && L(e, a.endDate) > 0 && (e = t(a.endDate).toDate())) : (a.startDate && L(e, a.startDate) < 0 && (e = t(a.startDate).toDate()), a.endDate && L(H(e), a.endDate) > 0 && (e = R(t(a.endDate).toDate()))), a.singleDate && (a.startDate && L(e, a.startDate) < 0 && (e = t(a.startDate).toDate()), a.endDate && L(e, a.endDate) > 0 && (e = t(a.endDate).toDate())), e
        }

        function re(e) {
            e || (e = ne()), a.lookBehind ? (Y(R(e), "month1"), Y(e, "month2")) : (Y(e, "month1"), Y(H(e), "month2")), a.singleDate && Y(e, "month1"), S(), A()
        }

        a || (a = {}), a = e.extend(!0, {
            autoClose: !1,
            format: "YYYY-MM-DD",
            separator: " to ",
            language: "auto",
            startOfWeek: "sunday",
            getValue: function () {
                return e(this).val()
            },
            setValue: function (t) {
                e(this).attr("readonly") || e(this).is(":disabled") || t == e(this).val() || e(this).val(t)
            },
            startDate: !1,
            endDate: !1,
            time: {enabled: !1},
            minDays: 0,
            maxDays: 0,
            showShortcuts: !1,
            shortcuts: {},
            customShortcuts: [],
            inline: !1,
            container: "body",
            alwaysOpen: !1,
            singleDate: !1,
            lookBehind: !1,
            batchMode: !1,
            duration: 200,
            stickyMonths: !1,
            dayDivAttrs: [],
            dayTdAttrs: [],
            selectForward: !1,
            selectBackward: !1,
            applyBtnClass: "",
            singleMonth: "auto",
            hoveringTooltip: function (e, t, a) {
                return e > 1 ? e + " " + ae("days") : ""
            },
            showTopbar: !0,
            swapTime: !1,
            showWeekNumbers: !1,
            getWeekNumber: function (e) {
                return t(e).format("w")
            },
            customOpenAnimation: null,
            customCloseAnimation: null,
            customArrowPrevSymbol: null,
            customArrowNextSymbol: null
        }, a), a.start = !1, a.end = !1, a.startWeek = !1, a.isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints, a.isTouchDevice && (a.hoveringTooltip = !1), "auto" == a.singleMonth && (a.singleMonth = e(window).width() < 480), a.singleMonth && (a.stickyMonths = !1), a.showTopbar || (a.autoClose = !0), a.startDate && "string" == typeof a.startDate && (a.startDate = t(a.startDate, a.format).toDate()), a.endDate && "string" == typeof a.endDate && (a.endDate = t(a.endDate, a.format).toDate());
        var se, ie, oe = te(), de = !1, le = this, ue = e(le).get(0);
        return e(this).unbind(".datepicker").bind("click.datepicker", function (e) {
            var t = se.is(":visible");
            t || o(a.duration)
        }).bind("change.datepicker", function (e) {
            d()
        }).bind("keyup.datepicker", function () {
            try {
                clearTimeout(ie)
            } catch (e) {
            }
            ie = setTimeout(function () {
                d()
            }, 2e3)
        }), r.call(this), a.alwaysOpen && o(0), e(this).data("dateRangePicker", {
            setStart: function (e) {
                return "string" == typeof e && (e = t(e, a.format).toDate()), a.end = !1, j(e), this
            }, setEnd: function (e, n) {
                var r = new Date;
                return r.setTime(a.start), "string" == typeof e && (e = t(e, a.format).toDate()), O(r, e, n), this
            }, setDateRange: function (e, n, r) {
                "string" == typeof e && "string" == typeof n && (e = t(e, a.format).toDate(), n = t(n, a.format).toDate()), O(e, n, r)
            }, clear: f, close: N, open: o, redraw: B, getDatePicker: i, resetMonthsView: re, destroy: function () {
                e(le).unbind(".datepicker"), e(le).data("dateRangePicker", ""), e(le).data("date-picker-opened", null), se.remove(), e(window).unbind("resize.datepicker", s), e(document).unbind("click.datepicker", N)
            }
        }), e(window).bind("resize.datepicker", s), this
    }
});
