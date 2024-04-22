const testWords = [
    "абака","абрек","абрис","абхаз","абцуг","абшид","аваль","авгит","авгур","аверс","авран","автол","агава","агама","агнат","агнец","адряс","ажгон","акант","аксон","актин","акциз","алгол","алкил","аллод","аллюр","алтей","алтея","алчба","ангоб","анион","анона","антик","антре","анчар","апекс","апрош","аргал","аргус","ареал","ариец","армюр","армяк","арсин","артос","архар","аскер","аскет","астат","асцит","атолл","атрий","аттик","ахеец","аниме","админ","акрил","алкаш","анаша","аудит",
    "аббат","абзац","аборт","аванс","аврал","агент","адепт","адрес","азарт","азиат","актер","алтын","амбре","амеба","ампер","ангел","анкер","аорта","апорт","арбуз","аргон","арест","аркан","армия","архив","аршин","аспид","астма","астра","атака","атлет",
    "бачки","бивни","битки","бобби","бобик","брови","брыжи","будни","боинг",
    "багер","бадан","бакан","бакен","барда","бареж","барит","барич","барка","барыш","баска","басма","басон","бастр","батан","батог","батуд","батыр","башка","бекас","белек","белец","бердо","берма","берце","берцо","бивак","бигус","билль","бионт","бирюк","бирюч","бистр","битюг","близь","блинт","блюмс","блядь","бобок","бодун","бодяк","божба","бозон","бокаж","болюс","бонза","бонна","борат","борей","борид","боров","борок","борть","бочар","брада","брейк","бридж","бритт","брыла","бубал","бубна","бубон","бугай","будра","бузун","букан","букле","букля","букса","булат","булга","булла","бурав","бурак","бурда","бурка","бурре","бурса","бурун","бурят","бутил","бутуз","былье","бытье","бьюик","бювет","бюкса","бяшка",
    "бабка","багаж","багет","багор","бадья","базар","балда","балык","банда","барак","баран","барий","барин","басок","батат","батон","бачок","бегун","бедро","бейка","бекар","бекон","белок","белье","беляк","беляш","бидон","бизон","бином","биржа","бисер","битва","битум","битье","благо","блажь","блоха","блюдо","бляха","бобер","богач","божок","бойня","болид","бомба","борец","босяк","ботик","бочок","брага","брань","брасс","бремя","бренд","бронх","бронь","броня","брюки","брюхо","бубен","бугор","будка","буква","булка","буран","бутан","бутик","бутса","быдло","бытие","бычок",
    "верки","верхи","вирши","виски","вожжи","враки",
    "вабик","валах","валек","валец","валка","валок","валом","валуй","валух","ванта","вапор","варяг","ватер","вахня","вейка","векша","венед","венет","венка","вента","вервь","верея","верша","ветла","вещун","взвар","взвоз","взмет","взрез","вивер","видам","видик","видок","визир","вилок","винол","вития","витой","вихор","внука","вогул","возка","возок","войяж","волга","волей","волок","волох","ворог","вотум","вотяк","вплыв","враль","врата","вруша","втора","выбег","вывал","вывес","выгар","выгиб","выдув","выжиг","вызол","выкос","выкус","вылаз","вылом","выпал","выпас","выпек","выпор","выпот","выруб","вышаг",
    "вазон","вакса","валет","валун","вальс","варан","варка","ватка","вдова","ведро","ведун","вежда","велик","велюр","венгр","венец","веник","венок","вепрь","верба","верфь","ветка","вечер","вешка","взвод","вздор","вздох","взлет","взлом","взмах","взмыв","взнос","взрыв","взыск","видео","визит","вилка","вилла","винил","винцо","виола","вираж","вирус","виток","витье","вклад","влага","вобла","водка","вожак","вождь","вожжа","возня","война","волан","волхв","вольт","ворох","ворье","вошка","вояка","впуск","всход","выбор","вывих","вывоз","выгон","выгул","выдел","выдох","выезд","выжим","выкат","выкуп","вылет","вылов","вынос","выпад","вырез","вытье","выход","вычет","вышка","вязка","вятич","вятка",
    "генри","глаза","гонки","гроши","гусли","гжель","гриль","гетто","геном","гуано",
    "гавот","гагат","галун","ганаш","ганец","ганка","гарда","гарус","гаусс","гачек","гевея","гемма","геоид","герма","гетра","гилея","гиляк","гинея","гипюр","гирло","гичка","глень","глипт","глясе","гмина","гнейс","гнома","годок","голец","голик","голыш","гольд","голье","голяк","горал","горст","горюн","гофра","гранд","графа","грена","гридь","грозд","гросс","губан","гузка","гузно","гумма","гумно","гуппи","гуран","гусак","гусек","гуцул","гюрза",
    "газик","галка","галоп","гарем","гашиш","гвалт","гейша","гидра","гиена","глава","глист","глубь","глушь","гнида","гниль","гобой","говор","гогот","годик","гомон","гонец","гонор","гопак","горец","греза","греча","грива","груда","грудь","грыжа","гряда","гуава","гуляш","гумус",
    "двери","дебри","детки","димер","драхм","дроги","денди",
    "давок","дайна","дайра","далия","даром","дацан","дебит","девон","дедка","дежка","деизм","деист","демос","дерба","дерен","дерма","дерть","десть","детва","джинн","дзета","динар","динас","дихта","дичок","дойна","дойра","докер","долив","домна","донец","донья","досол","дофин","драга","дрена","дрога","дросс","дрофа","друза","дрязг","дубка","дубье","дуван","дудак","дужка","дукат","дулеб","думец","дурра","дутар","дутик","дутыш","дутье","духан","душка","дюбек","дюкер",
    "давка","дамка","дачка","дебет","дебил","дебош","девка","дележ","делец","демон","денек","детка","длань","длина","днище","добор","догма","дойка","домен","домик","домок","домра","донна","донор","донос","дочка","драже","драка","древо","дрема","дрова","дрожь","друид","дрянь","дубок","дудка","думка","дупло","дурак","душок","дылда","дымок","дышло","дюшес",
    "ехида",
    "евнух","еврей","ежиха","ездка","ересь","ерник","ершик",
    "жение","жучка",
    "жабка","жакан","жамка","жарок","жатка","жвала","жвало","жевок","желна","желть","женка","жердь","жерех","живец","жиган","жиряк","житие","житье","жменя","жмудь","жнива","жниво","жулан","жулье","жупан","жупел",
    "жабра","жарка","жатва","желоб","желчь","жеода","жерло","жесть","жилец","жилка","жилье","жирок","жница","жрица","жучок",
    "задув","залип","зимой","зомби",
    "завоз","задел","задик","задок","задом","зажин","зажор","зазыв","закал","закол","закуп","закут","зализ","залом","замет","замор","зараз","зарез","зарод","заруб","засев","засол","затек","затес","заток","затон","затяг","заумь","зачин","зелот","зельц","земец","зенки","зернь","зипун","зоман","зраза","зубец","зубик","зубок","зулус","зыбка",
    "забой","завал","завет","завуч","загар","загиб","загон","загул","задор","зажим","зазор","заика","зайка","заказ","закат","закон","залет","замах","замес","замок","замша","занос","запал","запев","запой","запор","заряд","засос","затор","заход","зацеп","зачес","зачет","зебра","зевок","злато","злоба","злюка","знамя","зурна","зыбун","зятек",
    "ивина","ивняк","игрек","игрец","игрун","идиом","иерей","ижица","избач","извет","излет","изюбр","иксия","иктус","инвар","ингуш","индий","индол","индус","инкор","инока","иомен","ионий","ионит","иприт","ирмос","искус","испод","иссоп","истод",
    "идиот","извод","извоз","изгой","излом","измор","икона","ирбис","ислам","иудей",
    "капри","карий","кегли","кибер","кнели","козни","комми","корчи","косой",
    "кааба","кабил","кабул","кавун","кагал","каган","кагат","кадий","казах","кайло","кайра","калам","калин","камка","камса","камча","капер","капок","капор","каппа","капут","карда","карел","карча","катар","катыш","кацап","кашуб","кварк","кегль","кекур","кенар","кетон","кианг","кивер","кивот","кидас","кизяк","килим","киник","кирза","кирха","кисет","кисея","кифоз","кичка","клака","клест","клеть","клинч","клипс","клуня","клюфт","кнель","кнехт","кница","кобел","кобза","ковач","кодак","кодек","кожан","козон","кокет","кокор","колет","колка","колоб","колок","колон","колун","колюр","комуз","коник","конка","копач","копер","копир","копра","копун","копыл","коран","корда","корец","корча","корье","коряк","косач","косец","косок","котон","кофей","кохия","кочет","кошер","кошма","кощей","крага","краги","краля","крапп","краса","краше","креол","крепь","кресс","криль","крица","круча","ксива","кувез","кукан","кулаж","кулан","кулер","кулеш","кулик","кумач","кумжа","кумык","кунак","курка","курья","кутас","куток","кутум","кутюр","кухар","кхмер","кюрий","кюрин","кяриз",
    "кабак","кабан","кагор","кадет","кадка","кадык","казан","казнь","кайма","калий","канат","канна","канон","канюк","капот","карга","карма","карст","каска","каста","катер","катет","катод","качка","кашка","квант","квота","кебаб","кельт","келья","кизил","кинза","кирка","киска","киста","кишка","кладь","клерк","клуша","клюка","кляча","кобра","ковер","ковка","кожух","козел","койка","койот","кокон","колер","колея","колос","колье","кольт","комик","комма","комок","конец","конюх","копия","копка","копна","копье","корка","косяк","котел","котик","кочан","кража","кредо","крест","кровь","кросс","кроха","крыло","крыша","кубик","кузен","кузня","кузов","кукиш","кулак","кулек","культ","кумир","кумыс","купля","купон","кураж","курва","курок","кусок","кутеж","кутья","кухня","кучер","кушак",
    "липси","литой","лычки","любой","лючок",
    "лабаз","лавра","лайба","лайда","ламут","ланка","латка","латыш","лафет","лафит","лачка","лачок","лбина","лбище","левак","легат","легаш","ледок","лежка","лекаж","лемех","лемма","ленца","летка","леток","лешак","лещик","ливер","лизин","лизис","лизол","линек","липец","липка","литер","литка","литье","лихач","лихва","лишек","лобан","лобик","лобио","лобия","лобок","логик","логин","логос","ложок","локва","лонжа","лоция","лошак","лубок","лужок","лузга","лучок","лысун","лычко","льяло","люнет","люпин","люпус","лютич","ляпис","лярва","ляшка",
    "ладан","лампа","лапка","ларек","ласка","латук","лежак","лейка","лепет","лепка","лепта","лесок","летун","леший","лидер","лизун","ликер","лиман","лимфа","литий","лишай","лобби","ломик","ломка","лунка","лупка","лучик","люмен","лютня","ляжка",
    "малое","марши","мести","мигом","милая","мозги",
    "магот","мадам","мадия","мазер","мазик","мазка","мазло","мазур","майна","макса","малец","малик","малка","малье","мамка","маман","мамба","мамон","манер","мание","манна","манок","марал","масон","махра","мачок","медик","медок","мезга","мезон","мелис","мелос","мерея","метек","метил","метол","метоп","меццо","мигач","микст","милка","минет","минея","мирза","мирок","мирон","мирра","мирта","митоз","митра","млеко","могар","модус","мойра","мокша","молвь","молох","моном","морок","морфа","мосол","мотет","мотня","мохер","мошна","мрежа","мулек","мулла","мураш","мурда","мурза","мурло","мурья","муцин","мучка","мымра","мысик","мытье","мюзет","мюзик","мюрид","мялка","мямля","мяско","мясцо","мятие",
    "маета","мажор","мазня","мазок","мазут","майка","майор","малек","малыш","манга","мания","манка","манул","маржа","масса","матка","мафия","мелок","мерин","мерка","месса","месть","метал","метан","метис","метро","мизер","микоз","милок","минор","минус","миома","миска","мишка","модем","мойва","молва","молот","моляр","монах","мопед","морда","моряк","моток","мошка","мразь","мужик","мулат","муляж","мусор","мутон","мушка","мысль","мышка","мышца","мякиш","мятеж","мячик",
    "недра","немая","немой","низом","нищая","нищий","новое","носки",
    "набат","набег","набоб","навал","навет","навис","нагар","нагиб","нагон","нагул","надел","надир","надой","надув","нажин","назем","наказ","накат","накос","налив","налим","намет","намин","намол","намыв","нанка","нанос","напой","нарез","нарта","насад","натек","натяг","начет","начин","наяда","негус","немец","немка","ненец","нения","ненка","непер","нерка","нерол","нерпа","нечет","нивоз","низка","низок","нилот","нисан","нитон","новик","нойон","номад","нонет","нория","норов","носач","носик","носка","нотис","ночва","нукер","нулик","нумер","нытье",
    "навар","навоз","навык","наган","наезд","нажим","накал","налет","намаз","напев","напор","нарыв","нахал","нация","начес","невод","недуг","нимфа","ножик","ножка","нолик","норка","норма","нотка","ночка","нужда","нырок","нытик",
    "общий","овощи","около","онучи","оптом","опята","ороки","орочи","особо","отчий","очень",
    "обвес","обвод","обвоз","обдир","обжин","обжог","обзол","обкат","обком","обкос","облов","облог","обмер","обмет","обмин","обмол","обмыв","обнос","обора","обрат","обрез","обруб","обсев","овамо","овсец","овсюг","овчар","огрех","одаль","одеон","одурь","оземь","окорм","окрик","окрол","октан","октет","октод","олеин","олеум","олифа","омуль","онагр","онуча","оолит","опара","опоек","опока","оптик","орало","орарь","оркан","орлан","орлец","орлий","орлик","орляк","ортит","оршад","осечь","ослоп","осляк","осман","осмий","осмол","осоед","остит","остяк","отава","отвал","отвес","отгиб","отгон","отдух","отечь","отжиг","отжим","отжог","отзол","откол","откуп","откус","отлуп","отмах","относ","отпад","отрез","отрог","отруб","отсос","оттек","отход","отцеп","отчал","отщеп","охват","очкур","очник","ошеек",
    "обдув","обжиг","обжим","облет","облом","обман","обмен","оброк","обруч","обрыв","обряд","обувь","обуза","обход","обыск","озимь","озноб","окапи","океан","окись","оклик","окрас","оксид","олива","оникс","опиум","оплот","опция","орава","оргия","орден","ордер","осада","осетр","оскал","ослик","особа","особь","осыпь","отара","отбой","отбор","отвод","отель","отказ","откат","откос","отлет","отлив","отлов","отпор","отрок","отрыв","отряд","отсев","отсек","отток","отчет","отшиб","очерк",
    "перси","пески","плечи","плохо","побои","побой","покои","помои","прист","пятая",
    "падло","падуб","падун","пазок","пайза","палац","палея","палия","пампа","панаш","панна","панно","паныч","папуа","парез","пария","парод","парфе","парша","пасмо","пасюк","патан","патер","патла","пахви","пахит","пахта","пенье","перка","песнь","петит","пешня","пещур","пиано","пигус","пикет","пикон","пикша","пилав","пиния","пипка","пироп","писец","писун","питие","питух","пифия","пифос","пищик","плавь","плаун","плебс","плена","плица","пнище","повет","повой","погиб","подий","подог","пожня","пожог","пойка","полир","полоз","полок","полон","полть","поляк","помес","помор","помыв","попик","попса","пороз","порой","порос","порск","посад","после","посул","поташ","потек","потир","потуг","потяг","похул","пошиб","прель","приор","приуз","причт","промо","пропс","профи","прусс","псица","пудик","пузан","пукля","пурин","пурка","путец","путло","путля","пыжик","пьеза","пьеро",
    "падла","пайка","палас","палач","палаш","панда","парад","парка","парок","парча","пасаж","пасть","пацан","пашня","певец","певун","пекан","пемза","пенек","пение","пенис","пенка","пепел","перга","перед","перст","песец","песик","печка","пешка","пивко","пивцо","пижма","пижон","пикап","пилка","пилон","пинок","пинта","пирит","пирон","питье","пицца","плата","плаха","плева","плеер","племя","плеск","плеть","плешь","плоть","плюха","побор","повал","повар","погон","подол","позер","позор","позыв","поиск","пойло","показ","покат","покой","покос","полба","полип","полог","помет","помпа","понос","пончо","попка","порез","порка","порог","порок","порох","порча","посев","посох","поток","потоп","почва","почет","почин","почка","почта","пошив","право","прайд","прайс","праща","пресс","прием","прима","принц","приют","проем","просо","прыть","прядь","пряха","псарь","псина","птаха","пуант","пугач","пудра","пузач","пульс","пульт","пупок","пурга","пуфик","пучок","пушка","пушок","пшено","пырей","пытка","пышка","пьеса","пялка","пятак",
    "рожки","рожна","рыжей","рыжий",
    "рабат","раджа","радон","раина","ракун","ракша","ранет","ратай","ратин","рафия","рахис","рацея","рвань","рдест","ревун","регия","регот","редан","резит","резол","резус","релит","ремез","ремиз","ренет","рений","ренин","ржище","рикша","рипус","рицин","ришта","ровик","родий","розан","ройба","ронжа","ропак","ростр","роток","ротон","рохля","ртище","ругня","рудяк","румын","рунец","рупия","русак","рутил","рыбец","рында","рысца","рытье","рябок","ряшка",
    "радий","разик","разок","разум","район","рамка","рампа","ранка","ранчо","рапид","растр","рация","рачок","рвота","редис","редут","резак","резец","резка","резня","резон","рента","репей","репер","репка","речка","решка","ринит","риска","рифма","ровня","рогач","родич","родня","рожон","розга","рознь","роман","ропот","ротик","ротор","рубец","рубка","рубль","ружье","руина","рулон","ручей","ручка","рыбак","рыбка","рывок","рыжик","рысак","рюмка","рюшка","рядок","ряска",
    "салки","санки","седой","сопли","сутки","сухая","сяжки",
    "сабан","сабза","сабур","саван","савка","саган","сагиб","саджа","садка","сайда","сайка","сайра","саква","сакля","сакма","салол","салоп","саман","самбо","самум","сапка","сапун","саран","саржа","сарыч","сахиб","свара","свиль","свинг","севак","севец","севок","седок","сезам","сейша","секач","селин","семик","семит","сенаж","сенцо","серка","серко","серна","серум","серяк","сечка","сивер","сивка","сивко","сивуч","сидка","сиена","сижок","сизяк","сикоз","силен","силой","силон","силос","силур","синап","синец","синод","сипай","сирин","систр","ситар","ситце","скарб","скарн","скирд","склиз","склок","скопа","скора","скорм","скреп","слега","слоек","смазь","смерд","смоль","снаст","снедь","совик","совка","содом","сойма","сойот","солея","солка","соляр","сопор","сопун","сорит","сорок","сором","сорус","сосец","сосун","сотая","сплин","спурт","стаза","станс","старь","стега","стезя","стека","степс","стокс","страз","струг","струп","стяга","сувой","судок","сулея","сулой","сумет","сунна","супец","супин","суржа","сурна","сусак","сусек","сутаж","сутра","сухой","сучка","сущик","схват","схима","сыпец","сырец","сырть","сырца","сяжок",
    "сабля","садик","садок","сазан","сайга","салка","самба","самец","самка","сапер","сарай","сатин","сатир","сачок","сброд","сброс","сбруя","сваха","свекр","свита","свора","свояк","сглаз","сдвиг","седан","сезон","секта","селен","семга","семья","сенат","сепия","сетка","сигма","силок","симка","сингл","синус","синяк","ситец","сифон","скала","скаут","сквер","скейт","скетч","склад","склеп","склон","скоба","скотч","скрап","скула","скунс","слайд","слеза","сленг","слизь","слуга","слюда","слюна","смайл","смерч","смесь","смета","смола","смотр","смута","смысл","сноха","сныть","собес","собор","совок","созыв","сойка","сокол","солод","сонар","сонет","сопка","сопло","сопля","сосед","соска","сосна","сосок","сотка","сотня","софит","сочок","сошка","спазм","спесь","спина","спица","сплав","сплит","спора","спрос","спрут","спуск","среда","срост","ссора","ссуда","стадо","сталь","старт","стать","ствол","стела","стена","стенд","степь","стиль","стоик","столб","столп","стопа","стояк","страж","страх","стриж","строй","струя","ступа","судак","судно","суета","сукно","сумма","сусло","сучок","сынок","сырок","сырье","сыщик","сюжет","сюита",
    "тапки","тиски","толки","торги","треть","тупей","туфли",
    "табес","табор","тавот","таган","такка","такыр","талан","талес","талик","талыш","талья","тамга","тамил","танго","танин","тапер","тапир","тапка","таска","татка","тафта","тафья","тахта","тацет","ташка","теизм","теист","телик","телка","терец","теска","тесло","теург","техно","тешка","тимол","типец","типик","титла","титло","тифон","тодес","тойон","токай","толай","толща","толщь","томик","тондо","торба","торий","торит","торос","тохар","точок","трапп","треба","трест","треух","трефа","триас","триба","триер","тризм","триод","тромп","трояк","тугун","тузик","тулес","тулий","тулуз","тулук","туляк","тумак","тумор","тупец","тупыш","турач","турок","тутор","туфта","тынок","тырло","тырса","тычок","тюнер","тюник","тюрок","тютюн","тючок","тябло","тягач","тягло","тяжба",
    "табак","табло","табун","тазик","тайга","такси","талия","талон","тальк","тапок","таран","тачка","тварь","театр","тезка","текст","телец","тенек","тенор","тепло","терем","терка","тесак","тесть","тетка","течка","тиара","типун","тираж","тиран","титан","толпа","томат","тонер","тоник","тонна","тонус","топик","топка","топор","топот","тоска","тотем","точка","трава","тракт","транс","трата","траур","тренд","треск","тромб","тропа","труба","труха","тукан","тумба","тупик","турка","туфля","тучка","тушка","тыква","тюбик","тюфяк","тяпка","табак","табло","табун","тазик","тайга","такси","талия","талон","тальк","тапок","таран","тариф","тачка","тварь","твист","театр","тезка","текст","телец","тенек","тенор","тепло","терем","терка","тесак","тесть","тетка","течка","тиара","типун","тиран","титан","толпа","томат","тонер","тоник","тонна","тонус","топик","топка","топор","топот","тоска","тотем","точка","трава","тракт","транс","трата","траур","тренд","треск","тромб","тропа","труба","труха","тукан","тумба","тупик","турка","туфля","тучка","тушка","тыква","тюбик","тюфяк","тяпка",
    "удила","умолк","усики","усищи",
    "убрус","увраж","угода","удаль","удерж","узбек","узерк","узина","укрут","улита","улыба","умбра","умище","униат","унтер","унция","урема","урина","урман","усище","усмех","утеря","утеха","утиль","утица","ухарь","ухожь","ушица","ушкан","ушкуй","ушник",
    "убыль","узник","уклон","умник","умора","упрек","упырь","успех","уступ","устье","ухват","учеба",
    "фабра","фавор","фавус","фазис","фалда","фальц","фанза","фасет","фаска","фатум","фацет","фация","фаянс","фений","фенил","феска","фетюк","фефер","фиакр","фибра","физия","филер","фильц","фимоз","финка","финна","фиорд","фитин","фланк","флейц","флинт","флокс","фомин","фомка","фонон","форте","фоска","фофан","фраер","франк","франт","фрахт","фреза","френч","фреон","фугас","фузея","фукус","фуляр","фураж","фурма","фурор","футер","футор","фырок","фюрер",
    "фагот","фазан","факел","фанат","фасон","фауна","ферзь","фетиш","фидер","физик","филин","фильм","финик","финиш","фирма","фишка","фланг","флюид","фляга","фобия","форма","форум","фотон","фрейм","фронт","фужер","фурия","фьорд",
    "харчи",
    "хабар","хазар","хакас","хамло","хамса","ханша","хапун","хасид","хедер","херес","херик","хиазм","хилус","хиляк","химус","хинин","хитон","хлупь","хмарь","хмурь","хмырь","ходжа","ходик","ходка","ходок","ходун","холуй","хорал","хорей","хорея","хорон","хохол","хряпа","хряск","хряст","хунта","хурда",
    "халва","халда","хамка","хамье","хатка","хвала","хворь","химик","химия","хитин","хмель","холка","холод","холоп","холст","хомут","хорда","хорек","хохма","хохот","хруст","хурма","хутор",
    "цадик","цанга","цапка","цапун","царек","цахур","цацка","цевка","цезий","целик","цепка","цепня","цехин","цибик","цинаш","цирик","циста","цитра","цуцик","цыпка",
    "цапфа","цедра","центр","цинга","цифра","цокот","цыган",
    "черви","четки","чешки","чужая","чужой",
    "чабан","чабер","чадра","чакан","чалка","чалма","чарка","чебак","чебот","чекан","чемер","чепан","чепец","черва","черед","чернь","ческа","чешка","чибис","чижик","чинар","чинка","чирей","чирок","читка","чичер","чокер","чомга","чреда","чтица","чубук","чуваш","чувяк","чуйка","чукча","чумак","чурек","чурка","чутье","чухна","чушка",
    "чайка","часик","часок","челка","червь","череп","черта","чехол","чешуя","чрево","чтиво","чудак","чудик","чужак","чулок",
    "шашни",
    "шабаш","шабер","шабот","шажок","шамот","шанец","шанкр","шатия","шафер","шваль","шванк","швара","шварт","шеища","шелом","шемая","шесть","шибер","шиизм","шинок","шипун","шитво","шитик","шихан","шихта","шишак","шкерт","шкода","шлюха","шнапс","шнека","шорец","шорка","шорня","шпана","шпень","шпинь","шпона","шпрот","шпуля","шпунт","шпынь","шримс","штамб","штамм","штрек","штука","шубка","шудра","шумер","шумок","шурпа","шушун",
    "шавка","шайка","шакал","шалаш","шалун","шаман","шасси","шатен","шатер","шатун","шахта","шашка","шейка","шепот","шитье","шифер","шкала","шквал","шкура","шланг","шляпа","шмель","шорох","шофер","шпага","шпала","шпиль","шпион","шприц","шрифт","штиль","штифт","штора","штрих","штурм","штырь","шулер","шуруп","шутка",
    "щипец","щипка","щипок","щитик","щурка",
    "щебет","щелка","щепка","щетка","щечка","щиток","щупик",
    "эвенк","эгрет","экзот","эммер","энзим","эозин","эолит","эоцен","эпонж","эпюра","эсдек","этвеш",
    "эгида","эдикт","эркер","этнос",
]