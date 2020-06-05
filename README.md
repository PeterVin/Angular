# Angular
Flow Academy angular feladatok.
Angular feladatok többé-kevésbé megoldva. 

Header:
  Készíts egy header komponenst
    1. Ennek a selectorját húzd be az app komponensbe
    2. Készíts 3 komponens. Developer, Engineer, Teacher
    3. Az app modulba, készíts nekik 1-1 útvonalat. A default útvonalra a header komponens jelenjen meg
    4. A header komponensbe csinálj felülre 4 tabot. Home, Developer, Engineer, Teacher
    5. Ha bármelyikre rámész jelenjen meg az adott komponens
    6. Mindegyik komponensbe írasd ki a komponens nevét.
    7. Ha a Home-ra mész, annyi jelenjen meg, hogy Helló
    8. Mindegyik komponensbe készíts egy gombot kék színnel, This is my job felirattal.
    9.  Ha bármelyik komponensbe megnyomod ezt a gombot, dobjon át a home-ra és írja ki a hello alá, hogy I’m a VÁLTOZÓNÉV. 
    10. Ha a Home gombot a navigálásban nyomod meg, ne kerüljön ki egyik szakma se a hello után.

Component-communication:
    Készíts egy projektet component_communication néven
    1. Készíts egy komponenst mobileDetails néven
    2. Egy name input adattagot is hozz létre benne a     komponens kapcsolathoz
    3. Hozz létre egy phones komponenst 
    4. Hozz létre 1-1 tömböt a phones komponensbe,    amelyekbe beírod a Samsung és a Huawei 3-3 telefon    típusát (S7, S8, S9; P8, P9, P20)
    5. Hozz létre 1-1 string változót a phones    komponensbe, samsung = ‘Samsung’ és huawei =    ‘Huawei’ néven és értéken
    6. Hívd meg a phones komponens templatejében a    mobileDetails komponenst kétszer, úgy hogy az egyik   esetben a samsung nevet és tömböt passzolod át, a    másikban pedig a huawei nevet és tömböt.
    7. A mobileDetails komponensben írd ki a gyártó     nevét, valamint ngForral pörgesd ki a tömbben lévő    adatokat.
    8. A mobileDetails komponens képes legyen     megjeleníteni a szülő komponenstől kapott adatokat,     anélkül, hogy változtatni kelljen rajta. Csak a     bemeneti paramétereiben legyen eltérés.

Form-practice (with and without materials):
  Hozz létre egy projektet form-practice néven
		Készíts egy Fruits komponenst
  Készíts egy formot a Fruits komponensbe name (input, string), color (input string), kalories  (input number), size (select, string) mezőkkel
  Legyen egy id-ja is a komponensnek, ami 1-ről indul és a későbbiekben minden gyümölcs   hozzáadásával 1-gyel növekszik
  A name kitöltése legyen kötelező, ezt jelöld egy piros csillaggal. Alá small tagbe piros színnel  írd ki, “A kitöltés kötelező. Min 4, Max 15 karakter. Ez csak akkor jelenjen meg, ha már   bekattintott a mezőbe és úgy kattintott ki a user, hogy nem teljesültek a fent leírt feltételek
  Amennyiben a kalória mező értéke meghaladja a 100-at, írd ki alá sárgával, hogy ‘Too much   calories’
  A size mezőt kötelező legyen kitölteni, piros csillaggal jelöld. Amíg nem választanak ki semmit,  írd ki placeholderbe hogy ‘Please choose a size’. A többi választható érték a ‘small’, ‘medium’,   ‘big’ legyen.
  Legyen egy save gomb is, ami addig ne legyen megnyomható, amíg a name vagy a size nincs kitöltve.
  Kösd be az adatokat two-way bindinggal
  Ha a save gombra kattintunk, jelenítsük meg a gyümölcs minden adatát html oldalon.
   (+1) Imitáljunk backend működést. Azt várja el tőlünk a backend, hogy mentésre az alábbi   adatszerkezettel küldjünk fel neki adatot, pl.:
  {id: ‘3’
  name: ‘apple’,
  color: ‘green’,
  kalories: 40
  size: ‘medium’}
  		Az adatokat ilyen object-be kellene rendezni, majd a save gomb megnyomására jelenítsd meg az  objectet a console-on. (Ez éles backend mellett egy put, vagy egy post kérés lesz).

ngFor:
    1. Hozzatok létre egy új projektet ngFor néven
    2. Hozz létre egy tömböt amiben legalább 5 tetszőleges number típusú elem van
    3. Html oldalon írasd ki a tömb elemeit a 3. elem színe legyen zöld
    4. Az utolsó elem mellé legyen odaírva, hogy 'This is the last'
    5. Az első elem legyen félkövér
    6. Készíts egy input mezőt, amivel számokat adhatsz hozzá a tömbhöz. Mellette legyen egy 'Add' gomb ami el is végzi a műveletet. A gomb színe legyen sárga.
    7. Készíts egy gombot, ami minden elem értékéhez hozzáad 2-t.
    8. A gomb legyen kék színű 
    9. Tegyél egy checkboxot a gomb mellé, 'Editable' felirattal. Ha be van jelölve a checkbox, csak akkor lehessen a gombra kattintani. A checkbox értéke akkor is változzon, ha a feliratra kattintunk.
    10. A checkbox és a gomb között legyen egy kis térköz
    11. +1 (ha jól haladtál) Az inputokat material segítségével jelenítsd meg.

NgIfngClassngStyle:
    Készítsetek egy új angular projektet    ngIf_ngClass_ngStyle
    Készíts egy textarea input mezőt.
    Alá egy <p> tag-ben jelenítsd meg a beírt értéket     abban az esetben, ha a beírt karakterek száma eléri     a 10-et.
    A textarea mellé tegyél egy checkboxot, aminek    editable a neve. Amikor be van pipálva csak akkor   lehessen írni a textareaba, egyébként disabled     legyen.
    Készíts egy select-et, amiben adj meg 3 színt. Az     itt kiválasztott szín legyen a <p> tag-ben    megjelent szöveg színe. Azonban csak akkor állítsa    be ezt a színt, ha a szöveg hossza eléri a 15    karaktert. Egyébként fehér legyen
    Az egész eddigieket egy material kártyában    jelenítsd meg és az inputoknak is adja material   kinézetet
    A kártyának legyen fejléce, amiben megadhatsz egy     tetszőleges címet
    A checkbox mellé tegyél egy fontawesome info ikont,     aminek ha fölé viszed az egeret tooltipben    megjelenik egy információ: “Csak akkor tölthető ki    a mező ha be van pipálva”
    
Observer-practice:
  Készíts egy observer-practice projektet
    1. Készíts egy observer-1 és egy observer-2 komponenst
    2. Készíts egy observer service-t is
    3. A service-ben készíts egy metódust counter néven, ami másodpercenként bocsát ki magából adatot. Semmi mást ne csináljon csak számoljon, 1-től felfelé.
    4. A két komponenst ágyazd be az app komponensbe, jól megkülönböztethető módon. Pl, az oldal két szélére
    5. Iratkozz fel a service metódusra mind a kettő komponensbe, majd az értéket írasd ki html oldalra. Ha mindent jól csináltál a 2 számnak egységesen számolnia kell felfelé.
    Mi történik: Kibocsájtanak 1 (ez fontos, hogy 1     adatot), amire 2 helyen is feliratkozunk. Minden    kibocsátásnál megkapja az új adatot a komponens,    aminek teljesen egyeznie kell. Fontos a leiratkozás!
    7. A változót Observable-ként mentsd le és async    pipe-pal iratkozz fel rá. Ebben az esetben nem fog    kelleni leiratkozni ts oldalon.

Output-lifecycle-directive-viewchild:
  Hozz létre egy új projektet output-lifecycle-directive-viewchild néven
    1. Készíts egy parent komponenst aminek vegyél fel egy piece number változót. Ennek a változónak a komponens onInit-jében adj 0 értéket. Ezt jelenítsd is meg a képernyőn
    2. A parent komponenst, ágyazd be az app komponensbe
    3. Készíts egy child komponenst, ágyazd be a parent komponensbe
    4. Készíts a childba egy gombot, aminek a megnyomásával egy event emitter segítségével a szülő komponens piece változóját növeli eggyel
    5. Készíts ugyanide egy minusz gombot is, ami 1-gyel csökkenti az értékét
    6. A parent komponensbe legyen egy tömb is, 3 értékkel. (Alma, Barack, Körte)
    7. Az első elemet írasd is ki a képernyőre
    8. A child komponensbe legyen egy change gomb, ami egy event emitterrel segítségével lépteti a tömböt (mindig a következő elem jelenjen meg a képernyőn a gomb megnyomására)
    9. Készíts egy input mezőt a child komponensbe, amivel újabb gyümölcsöt tudsz felvenni a tömbbe
    10. A mellete lévő hozzáad gombbal kerüljön is bele a tömbbe az érték. A change gombra az új gyümölcsök is jöjjenek be.
    11. Készíts egy direktívát, amivel ha fölé viszed a piece fölé az egeret a háttér világos kékké válik. Ha elviszed onnan, vissza változik. 
    12. Az üres részre írasd ki a tömb összes elemét. Készíts egy direktívát, amivel minden második elem színe pirosra változik ha fölé viszed az egeret
    13. Készíts még egy direktívát, ami az első elemet félkövérré teszi
    14. Ezeket a direktívákat több módon is készítsd el ahol lehetséges (Tamással vett diákon)
    15. Hozz létre egy input mezőt, aminek az értéket egy gombnyomásra ki tudod íratni a console-ra, ViewChild segítségével
    16. Egy ViewChild segítségével a komponens létrejötte után írasd ki a console-ra a tömbnek azt az elemét amit épp aktuálisan megjelenik a képernyőn.

Output-practice:
  Hozz létre egy új projektet output-practice néven
    1. Készíts egy child komponenst
    2. A child komponenst hívd meg a az app komponensbe html fájljában
    3. A child komponensbe hozz létre egy outputot, amit majd tovább passzolsz az app komponensnek. simpleValue legyen a neve, a kezdőértéke 0. gombnyomásra ehhez az értékhez adódjon hozzá 10. amint megnyomjuk a gombot, az app komponens html oldalán írassuk ki az értéket.
    4. Az előzőhöz hasonlóan hozzunk létre egy input mezőt, text típussal. Az ide beírt értéket a mellete lévő gomb megnyomására küldjük fel az app komponensnek, aminek a html-jében írassuk ki az értéket.
    5. Végezd el ugyanezt a műveletet, csak checkbox legyen az input mező (nyilván más változónevet használva)
    6. Végezd el ezt a műveletet egy text input mezőn, ahol minden karakter leütése után felküldjük az értéket az app komponensnek és ki is íratjuk azt html oldalon.

Practice-all:
  Készíts egy új projektet practice-all néven
  1,Készíts egy komponenst, first néven
  2, Az appban használj materialt, a különböző elemek megjelenítésére
  3, Ebben a komponensben legyen két number input meződ html oldalon, aminek a bevitt értékét ts     oldalon egy metódussal összeadod és gombnyomásra kiíratod html oldalon
    Amennyiben az érték nagyobb, mint 100, legyen az érték háttérszíne piros. Ha 100-nál kisebb     legyen zöld.
  4, Készíts ezek alá egy text inputot is, ami mellett legyen egy checkbox és csak akkor írhassunk az    inputba, ha a checkbox be van pipálva. Ha beírunk egy értéket a mellette lévő add gomb    megnyomására kerüljön bele egy tömbbe. A tömb értékét egymás alá megjelenítve folyamatosan   mutassuk HTML oldalon. Az add legyen letiltva, ha a mezőbe 3-nál rövidebb és 13 karakternél    hosszabb szöveget akarunk bevinni.
  5, Amennyiben a tömb eléri az 5 elemet, írjuk ki, hogy nem vehető fel több érték és tiltsuk le a     mellette lévő gombot.
  6, Minden második elem szöveg színe legyen lila
  7, Készíts egy second komponenst, amit hívj meg a first komponens HTML oldalán
    Inputtal add át neki a felvett tömb értékét, majd a legutolsó elemét írasd ki a komponens html    oldalán.
  8, Készíts egy input mezőt ebben a komponensben is és az itt beírt értéket passzold fel a first    komponensnek, majd helyezd bele a tömbbe, amibe a többi értéket tetted. Ebből a komponensből    bármennyi elem legyen belehelyezhető a tömbbe.
  9, A két komponens egész html részét tedd eltüntethetővé 1-1 gombbal (collapse) (nyilván a gomb    kivételével), majd tüntesd is el őket. A gomb újboli megnyomásával legyenenek újra láthatóak az   adatok
  10, Hozz létre pokemonService néven egy servicet, valamint egy pokemon komponenst
    A pokemon komponenst egy Pokemons feliratú gomb megnyomásával tedd elérhetővé. Ha a Pokemons    komponens oldalára ugrassz, legyen egy back gomb is, ami a kódból visszanavigál a fő oldalra.
  11, A pokemon komponensbe injektáld be a servicet.
    A servicenek készíts egy get metódust, ami lekéri az alábbi végpont értékét
    	https://pokeapi.co/api/v2/pokemon/
    A komponensben mentsd el a visszakapott végpont értékét egy tömbbe
  12, Jelenítsd meg html oldalon a count változóját és a results tömb utolsó 10 elemét egy táblázatban
  13, A táblázat minden sorában legyen egy törlés ikon is, aminek a megnyomásával töröljük az elemet. A     táblázat alatt legyen egy gomb, amivel az összes elem törölhető. 
  14, Ha valamelyik elem fölé visszük az egeret, annak a háttérszíne legyen zöld. Ha elvisszük onnan az     egeret változzon vissza alapértelmezettre.
  15, Készíts egy formot, aminek a segítségével új pokemont tudsz beszúrni a tömbbe, a form alján lévő    ‘Add pokemon’ gomb megnyomásával. Ez a gomb legyen kék színű.
    +++ Hozz létre egy dogService-t. 1 get metódusa legyen, getDogs néven. Ezt a végpontot hívja:     https://dog.ceo/api/breeds/image/random
    Hozz létre egy dog komponenst is, ahol lekezeled ezt a metódust. Egy ‘Show a dog’ gombot hozz     létre html oldalon, aminek a segítségével a végponton visszatérő képet megjeleníted a böngészőben.
    https://dog.ceo/dog-api/

Route-practice:
  0. Készíts egy projektet route-practice néven
    1. Készíts 4 komponenst: Fruits, Apple, Pear, Peach
    2. A Fruits komponensben jelenjen meg a 3 másik komponens neve linkként, valamint mind a 3 mellett egy gomb, ‘Show pieces’ felirattal
    3. Ha rányomunk az egyik linkre ugorjunk át az adott gyümölcs komponensére
    4. Ha megnyitjuk az egyik gyümölcs komponenst, jelenjen meg a komponens neve az oldalon, a másik két komponens neve linkként, valamint egy back gomb
    5. A back gomb kódból navigáljon vissza a Fruits komponensbe
    6. A másik két link pedig nyissa meg a nevét takaró komponenst
    7. A fruits komponensbe legyen megadva 3 number típusú változó tetszőleges értékkel: applePieces, pearPieces, peachPieces.
    8. A ‘Show pieces’ gomb megnyomására kódból navigáljunk át a gyümölcs komponensére, úgy hogy paraméterekkel átpasszoljuk az adott gyümölcs darabszámát (applePieces, pearPieces, peachPieces).
    9. Ha így navigálunk át, jelenjen meg a gyümölcs odalán a darabszám is a neve alatt.

Service-practice:
  Készíts egy carService-t
      1. A servicenek legyen 3 metódusa: getAllCars() , getSportsCars(), getFamilyCars()
      2. A végpontok értelemszerűen a két objektum  egyikét adják vissza, kivéve a getAllCarst,  mert az mind a kettőt adja vissza ömlesztve.
  familyCars = [{
     id: 1,
     manufacturer: Opel,
     seats: '5',
     type: 'Astra’',
     color: white
   }, {
     id: 2,
     manufacturer: Audi,
     seats: '5',
     type: ‘A3',
     color: 'gray'
   }, {
     id: 3,
   manufacturer: 'Seat',
   seats: '2',
   type: 'Cordoba',
   color: 'green'
   }];sportCars = [{
     id: 4,
     manufacturer: 'Ferrari',
     seats: '2',
     type: 'Enzo',
     color: 'red'
   }, {
     id: 5,
     manufacturer: 'Aston Martin',
     seats: '2',
     type: 'DB7',
     color: 'black'
   }, {
     id: 6,
   manufacturer: 'Bugatti’,
   seats: '2',
   type: 'Veyron',
   color: 'white'
   }];
  4. Készíts egy cars komponenst
  5. Injektáld be a carService
  6. A metódusok lekért értékét 1db tömbbe tárold.  Lehívásnál íródjanak felül az értékek. Később látni  fogjuk, ez hogyan valósul meg.
  7. Készíts egy selectet (materiallal), amivel ki  tudod választani az adott kocsi típust, majd a   kiválasztott értékre, kérődjön le a az adott  típushoz tartozó metódus. A megkapott értékeket egy  material kártyában jelenítsd meg. ( Ezt úgy  készítsd el, hogy egy adott html legyen és csak a  változók értékei változzanak meg a különböző   metódusok meghívásakor. )
  8. Készíts egy filter komponenst, ami mindössze egy   input (html) mezőt tartalmaz, aminek az értékét   bekötjük egy number változóba
  9. A filter komponenst hívd meg a cars komponensbe,   ahova a 9-es pontban létrehozott numbert  átpasszolod. (output. ezt ugye dinamikusan kellene   tudni változtatni és mindig az aktuális beírt   értéket küldje fel a szülő komponensnek)
  10. Az átpasszolt number érték adja meg azt, hogy   az All Cars kártyában maximum hány elemet   jelenítsünk meg. (Ha a beírt input mezőbe beírjuk,  hogy 4, akkor csak a tömb első 4 elemét jelenítsük   meg, ha 5, akkor 5öt stb.)
  11. Ha a Sport carst választod a selectben,   jelenjen meg egy felület mellette, Add car névvel.  Ezen a felületen az alábbi input mezők legyenek:   id: number, manufacturer: string, seats: number,  type: string, color: string, valamint egy Add car  gomb.
  12. A carService-be hozz létre még 1 metódust,  addSportCar néven, ami azt a műveletet végzi el,   hogy az Add car kártyában lévő input mezőket  kitöltve felvesz még egy sport autót, a sportCars  tömbbe. Ezt a metódust is hívd meg cars  komponensbe, ami a html oldalon lévő Add car gomb  megnyomásával hívódik meg és beleteszi az  objektumot a sportCars tömbbe.
  13. Ha nincs minden input mező kitöltve, az Add car   gomb legyen disabled.
  14. Az összes inputnak és gombnak material kinézete   legyen.

String:
  Készíts két string tömböt. Az egyiknek animals, a másiknak fruits nevet adj.
    1. A két tömbbe ezek kerüljenek:
    2. animals: Elephant, Monkey, Lion, Dog, Cat
    3. fruits: Apple, Peach, Strawberry, Blackberry, Strawberry
    4. Készíts egy comboboxot (select), amiben ki tudod választani a két tömb közül az egyiket.
    5. Amelyik tömböt kiválasztod, annak az elemei jelenjenek meg a képernyőn egymás alatt
    6. Az elemeket mellé kerüljön egy kuka ikon (fontawesome), aminek a megnyomásával az adott elem törlődik a listáról
    7. Minimum 3 különböző elemnek lennie kell a listában, szóval ha 3-ig lecsökken a lista elemeinek száma, tűnjenek el a kukák
    8. A lista alá kerüljön egy input mező, ahova be tudunk írni egy értéket, amit a mellette lévő gombbal be is tudunk küldeni a listába, ami megjelenik egyből a képernyőn.
    9. A listában minden második sor kapjon egy enyhe szürke árnyalatot, hogy jobban tagolódjon

Task-manager:
    Készítsünk egy új projektet task-manager néven.	
    Az app.component-be inicializáljunk egy name    (string), egy id (number) és egy isImportant    (boolean) változót
    Ezeket jelenítsd meg html oldalon
    Jeleníts meg egy gombot html oldalon. A gomb    megnyomására a console jelenítse meg a “Hello”    feliratot
    +1. Húzd be az angular materialt
    +2. A meglévő gombokat alakítsd át material     gombokra. pl (mat-button)
    +3. Ha a ts fájlba írtad a kód html részét, akkor     azt helyezd át a html fájlba, úgy hogy a működés ne     változzon
    Készítsetek két input mezőt ahova számokat lehet    bevinni
    A két input mezőnek az értékét adja össze egy     függvény. Ez egy 'Count' gomb megnyomására menjen     végbe
    A gomb kapjon egy tetszőleges material kinézetet
    A gomb megnyomására jelenjen is meg a html oldalon    a számolt érték






