import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const adatok = {
kovetkezoId: 16,
    versenyzok: [
    { id: 1, nev: "Juan Manuel Fangio", nemzetiseg: "argentin", cimek: 5, elsoCim: 1951 },
    { id: 2, nev: "Alberto Ascari", nemzetiseg: "olasz", cimek: 2, elsoCim: 1952 },
    { id: 3, nev: "Jack Brabham", nemzetiseg: "ausztrál", cimek: 3, elsoCim: 1959 },
    { id: 4, nev: "Jim Clark", nemzetiseg: "brit", cimek: 2, elsoCim: 1963 },
    { id: 5, nev: "Jackie Stewart", nemzetiseg: "brit", cimek: 3, elsoCim: 1969 },
    { id: 6, nev: "Emerson Fittipaldi", nemzetiseg: "brazil", cimek: 2, elsoCim: 1972 },
    { id: 7, nev: "Niki Lauda", nemzetiseg: "osztrák", cimek: 3, elsoCim: 1975 },
    { id: 8, nev: "Nelson Piquet", nemzetiseg: "brazil", cimek: 3, elsoCim: 1981 },
    { id: 9, nev: "Alain Prost", nemzetiseg: "francia", cimek: 4, elsoCim: 1985 },
    { id: 10, nev: "Ayrton Senna", nemzetiseg: "brazil", cimek: 3, elsoCim: 1988 },
    { id: 11, nev: "Nigel Mansell", nemzetiseg: "brit", cimek: 1, elsoCim: 1992 },
    { id: 12, nev: "Michael Schumacher", nemzetiseg: "német", cimek: 7, elsoCim: 1994 },
    { id: 13, nev: "Mika Häkkinen", nemzetiseg: "finn", cimek: 2, elsoCim: 1998 },
    { id: 14, nev: "Kimi Räikkönen", nemzetiseg: "finn", cimek: 1, elsoCim: 2007 },
    { id: 15, nev: "Sebastian Vettel", nemzetiseg: "német", cimek: 4, elsoCim: 2010 },
    ],
};

function naplozo(req, res, next) {
    const ido = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString() ;
    console.log(`[${ido}] ${req.method} ${req.originalUrl}`);

    next();
}
app.use(naplozo);
app.use(express.json());

app.get("/api/versenyzok",(req, res) => {
        res.json(adatok.versenyzok)
})
