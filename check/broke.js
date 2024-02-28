const bedWords = [
    "бифшт","гроба","нарде","удивл","втечь","ступы","ехало","резво","цацек","мрачн",
    "акций","вбиты","гелях","девиц","ершей","жерле","зайду","изучу","карге","лаюсь",
    "маржи","найдя","обоев","папки","ранца","сбили","тащат","угрюм","фигур","хитро",
    "цинги","черчу","шейху","щучье","эфиру","яства","ейчан","халвы","хвалы","холлы",
    "холмы","хохмы","хохлы","хетты","азиды","азолы","возвы","диезы","залпы","козлы",
    "пемзы","миазы","изиды","елицы","ловцы","певцы","пиццы","плацы","плицы","птицы",
    "циклы","цапфы","шпицы","шлицы","ветлы","детвы","леммы","маеты","метлы","плевы",
    "пледы","темпы","шведы","шкеты","фетвы","кофты","лимфы","лифты","тафты","факты",
    "фалды","фиаты","флоты","шкафы","шлифы","вшивы","вшиты","кошмы","пошлы","пошты",
    "шкапы","шкивы","шкоды","школы","шкоты","шматы","шпалы","шпаты","штаты","адовы",
    "амиды","вводы","вдовы","влады","дампы","диоды","диолы","идолы","имиды","плоды",
    "подвы","подлы","подмы","амилы","атомы","имамы","коммы","компы","миомы","молвы",
    "памвы","пампы","помпы","виолы","икоты","квиты","клипы","пиалы","пииты","плиты",
    "ватты","вкопы","выплы","квоты","павлы","тыквы","клопы","копты","котлы","плоты",
    "каппы","лапты","пакты","платы","такты","виллы","махры","памят","пятам","темпа",
    "зэкам","эдема","эдеме","эдипе","этажа","этаже","этажи","этаки","этапа","этапе",
    "этике","этики","этюде","акают","ваяют","дюжая","дюжее","дюжем","дюжим","дюзам",
    "екают","зияют","зюзям","изюма","изюме","икают","имеют","имеющ","катюш","каюте",
    "кающе","паяют","тюкам","тюкая","тютям","тючке","тючки","афише","афиши","ефима",
    "мафии","мифам","пифии","тафте","фазам","факта","факте","фации","фетве","фиата",
    "фиате","физич","фитам","фифам","фишек","фишке","фишки","цапфе","шефам","шкафа",
    "шкафе","вещам","вещая",
    "зижде","дедке","деньг","бобру","шкапе","винчу","пакте","елкой","ориги","тралы",
    "алеют","блещу","вафле","гущам","дрофе","еслиб","жадюг","зэков","идуще","клеща",
    "лимфе","лимфу","алеем","алеет","алела","алели","алело","блешу","вафли","гущах",
    "гущей","дрофу","дрофы","жаден","жадин","жадна","жадно","жадну","жадом","зэком",
    "идучи","клеще","клещи","клещу","мопса","мопсе","мопсу","нэпом","обуют","обует",
    "обула","обули","обуло","обута","обуто","пуфам","пуфах","пуфов","пуфом","рэлее",
    "рэлея","сэрам","сэрах","сэров","сэром","тэгам","тэгах","тэгов","тэгом","утащи",
    "утащу","утаще","фырчу","хапуг","хапай","хапал","хапая","хапни","хапну","цепче",
    "шлюзу","щадим","щадит","эгиде","эгиду","ахала","гнала","ждала","знала","лгала",
    "мчала","ужала","упала","ухала","удала","охала","брала","врала","драла","жрала",
    "крала","рвала","реала","ржала","риала","трала","едала","екала","ехала","сдала",
    "сжала","слала","стала","ткала","акала","икала","укала","впала","вжала","звала",
    
    "серый","вазам","герои","мерки","тощее","кущей","упоит","весил","трусе","туром",
    "араба","арабе","арабу","арабы","багра","багре","багру","багры","багря","ведер",
    "ведра","ведре","ведру","грача","граче","грачи","грачу","домре","домру","домры",
    "едкая","едкий","едким","едкое","едкой","едком","жалей","жалел","жалея","жалка",
    "жалки","жалуй","жалуя","жалче","задав","задай","задал","задам","задан","ивана",
    "иване","ивано","ивану","иваны","катал","катая","катил","катим","катит","катят",
    "лакее","лакеи","лакея","макай","макал","макая","макни","макну","налей","налил",
    "налит","отлей","отлил","отлит","полей","полем","полил","полям","разув","разул",
    "серая","серей","серел","серея","серое","сером","серые","серый","серым","такая",
    "также","такие","таким","таков","такой","таком","уладь","улажу","фанзе","фанзу",
    "фанзы","хамам","хамах","хамил","хамим","хамке","хамки","хамку","хамов","хамок",
    "хамом","хамья","хамят","ценам","ценах","ценен","ценил","ценим","ценит","ценна",
    "ценно","ценны","ценой","ценят","чакре","чакру","шаржа","шарже","шаржи","шаржу",
    "щенка","щенке","щенки","щенку","щенят","эроса","эросе","эросу","схемы","схимы",
    "сходы","ухабы","уходы","харды","хворы","хитры","хмуры","хорды","храмы","хрипы",
    "хромы","хурмы","шхеры","шхуны","шурфы","шурпы","шунты","шумны","шуаны","шторы",
    "штабы","шрамы","шпуры","шпоры","шпоны","шпаны","шнуры","шкуры","шифры","ширмы",
    "шерпы","шеины","швабы","шатры","шарфы","шармы","ушицы","ушибы","ушаты","тошны",
    "сшиты","пышны","мошны","душны","цифры","фурмы","фрицы","фрины","фризы","фрезы",
    "фразы","форты","формы","форды","фонды","флоры","фирмы","финты","финны","фибры",
    "фауны","фарты","фанты","фавны","туфты","трефы","сферы","софты","скифы","рифты",
    "рифмы","нимфы","нафты","муфты","морфы","марфы","кофры","грифы","графы","гофры",
    "глифы","аферы","афины","цензы","цедры","улицы","уздцы","тунцы","торцы","танцы",
    "сырцы","сцепы","сцены","спицы","спецы","сосцы","ситцы",
    "мэтру","стоит","сыске","шифру","чаруй","окопе","винам","хвале","мочке","мимом",
    "арине","арину","арины","бомжа","бомже","бомжи","бомжу","выбей","выбив","выбил",
    "выбит","выбыв","выбыл","грезе","грези","грезу","грезы","грезя","грежу","донца",
    "донцу","донцы","ежика","ежике","ежики","ежику","ежихе","ежихи","ежиху","живая",
    "живал","живее","живей","живем","живет","живил","живим","живит","живое","живой",
    "живом","живут","живуч","живца","живце","живцу","живые","живым","живят","жилой",
    "жилое","жилом","жилые","жилым","жилья","житей","житии","жития","житом","житья",
    "зевай","зевак","зевал","зевам","зевах","зевая","зевка","зевке","зевки","зевку",
    "зевни","зевну","зевов","зевом","избам","избах","избищ","корме","корми","кормы",
    "кормя","ленам","ленах","ленке","ленку","ковша",
    "дядин","сгибе","чушке","эпику","лорду","писку","надуй","свела","ощути","пиесу",
    "арыка","арыке","арыки","арыку","арчой","архее","арфой","армян","армий","армии",
    "боясь","боюсь","бошей","бошах","бошам","бочку","бочки","бочке","бочек","ботвы",
    "выяви","вышло","вышли","вышла","вышку","вышки","вышке","вышит","вышил","вышив",
    "грянь","гряну","грязи","гряду","гряде","грымз","грызя","грызу","грызи","грыжу",
    "дояру","дояре","дояра","дошло","дошли","дошла","дошил","дошей","дочла","дочку",
    "евшим","евший","евшем","евшей","евшее","евшая","евсея","еврея","евреи","еврее",
    "жахну","жахни","жатым","жатый","жатые","жатом","жатой","жатое","жатку","жатки",
    "зорях","зорям","зорче","зорки","зорек","зонту","зонте","зонта","зоной","зонду",
    "изыщу","изыду","изыди","изучи","изуча","изуми","изрыт","изреч","изрек","изныл",
    "кетой","керну","керне","кепок","кепку","кепки","кепке","кельи","келье","келий",
    "лущат","лучше","лучом","лучку","лучке","лучем","лучей","лучах","лучат","лучам",
    "мушку","мушки","мушке","мушек","мучая","мучат","мучай","мухой","мухам","муфту",
    "нытья","ныряя","нырял","ныряй","нырну","нырни","нырку","нырки","нырке","нырка",
    "офене","офени","офень","офите","офиту","офице","офици","ожогу","ожоги","ожоге",
    "пьяну","пьяно","пьяни","пьяна","пьюсь","пьешь","пьете","пьесу","пьесе","пьеру",
    "рюшем","рюшей","рюшах","рюшам","рюхой","рюхах","рюхам","рюмок","рюмку","рюмки",
    "счищу","счешу","счеши","счету","счете","счесу","счесе","счеса","счета","сзади",
    "тятях","тятям","тятек","тятей","тяпок","тяпну","тяпни","тяпку","тяпки","тяпке",
    "ужмут","ужину","ужине","ужина","ужель","ужели","ужата","ужасе","ужаль","ужало",
    "фторе","фтору","фрицу","фрице","фрица","фризу","фризе","фрезу","фрезе","фраку",
    "хцешь","хнычь","хнычу","хныча","херят","хеком","хляби","хлыщи","хлору","хлещу",
    "цгали","цокну","цокни","цокая","цокай","цугам","цугах","цугов","цугом","цвету",
    "чвани","чьето","чхнет","члену","члено","члене","члена","чорту","чорта","чомге",
    "шорой","шорах","шорам","шопен","шоком","шнуру","шнуре","шнура","шнеку","шнеки",
    "щучке","щучек","щучат","щуров","щупов","щупай","щитом","щитов","щитку","щитки",
    "эфтом","эфире","эфесу","эфесе","этюду","этово","этилу","этиле","этику","этапу",
    "ларцы","лееры","литры","лорды","реалы","риалы","рослы","улары","борцы","герцы",
    "горцы","друцы","крицы","перцы","ранцы","резцы","рубцы","рунцы","астры","искры",
    "русты","сборы","свары","своры","сербы","серны","серпы","сидры","скоры","сомры",
    "споры","среды","срезы","срубы","срывы","срыты","ссоры","стары","сторы","сутры",
    "бризы","взоры","грозы","грузы","друзы","ездры","закры","зебры","зразы","зримы",
    "зубры","зурны","крезы","кризы","мурзы","призы","прозы","размы","разны","разры",
    "резвы","узоры","бриты","гидры","грибы","гривы","гримы","грипы","иберы","ирины",
    "ироды","кривы","мирны","мирры","мирты","митры","прибы","привы","примы","тиары",
    "тигры","титры","трибы","урины","негры","грумы","груды","грубы","громы","гробы",
    "граны","грабы","горны","горды","горбы","гетры","гербы","гарды","гаеры","гагры",
    "бугры","амбры","амуры","брамы","дермы","драмы","дремы","кармы","кремы","кромы",
    "мавры","метры","мокры","мудры","нормы","промы","рампы","ромбы","румбы","термы",
    "умбры","уморы","арены","буеры","вееры","вербы","верны","ветры","ероты","кедры",
    "крепы","крепы","нервы","нерпы","первы","пребы","ренты","терты","требы","арапы",
    "драпы","карпы","копры","крупы","парты","покры","порты","правы","пробы","пруды",
    "пруты","пудры","трапы","тропы","трупы","упоры","кадры","карры","карты","кобры",
    "ковры","корды","корты","крабы","кроты","круты","крыты","курвы","курды","укоры",
    "бурды","бурны","бурты","вруны","дурны","рауты","трубы","труды","уборы","удары",
    "уроды","уроны","барды","бодры","броды","выдры","дворы","добры","дрыны","нарды",
    "родны","рынды","барны","бобры","борты","бравы","браты","торбы","трабы","аорты",
    "вторы","рвоты","ровны","ротны","торры","торты","троны","авары","враны","врыты",
    "нарвы","нарты","нравы","равны","ранты","тавры","травы","траты","агнцы","блицы",
    "венцы","гонцы","думцы","зубцы","истцы","косцы","купцы","немцы","ниццы","самцы",
    "бакса","буквы","клубы","кобзы","колбы","ксивы","куклы","секты","скаты","скебы",
    "скибы","скипы","скиты","скобы","сколы","скоты","скулы","скупы","указы","уколы",
    "числу","числи","числе","числа","чисел","чесал","сочло","сочли","сочла","случу",
    "случи","случа","сличу","сличи","слечь","слечу","башен","башне","башни","бешен",
    "бланш","шхуну","шхуне",
    "шпуру","весну","пауку","попам","амуре","спрял","печей","соках","вымыт","жался",
    "ахают","альта","альте","альту","альфе","альфу","аться","алчут","ахнут","агате",
    "блеют","блюют","бреют","бабам","бабой","бабок","бабьи","бабья","бадье","бадьи",
    "врыть","ваалу","вагам","вагах","вагой","важен","важна","важно","вазах","вазой",
    "гниют","греют","гагам","гагах","гагой","гадай","гадал","гадам","гадах","гадая",
    "доите","давав","давай","давал","давая","давил","давим","давит","давке","давки",
    "едите","егере","егери","егеря","егожу","егозе","егози","егозу","егозя","егора",
    "жгите","ждите","жмите","жрите","жабам","жабах","жабий","жабки","жабой","жабре",
    "зрите","забав","забей","забив","забил","забит","забои","забот","забоя","забыв",
    "идите","ищите","ибиса","ибисе","ибису","ивась","ивася","иволг","иглам","иглах",
    "крыть","кадке","кадки","кадку","кадок","кадра","кадре","кадру","кажем","кажет",
    "лезть","лавам","лавах","лавин","лавке","лавки","лавку","лавой","лавок","лавре",
    "мните","мчите","мавре","мавру","магам","магах","магии","магий","магме","магов",
    "наешь","ноешь","набей","набив","набил","набит","набле","наблу","навей","навек",
    "орите","отите","обаял","оббив","оббил","оббит","обвел","обвив","обвил","обвис",
    "пните","поите","прите","плите","пиите","пабам","пабах","пабов","пабом","павла",
    "рвите","ржите","роите","рабий","рабов","рабой","рабом","работ","рабьи","рабья",
    "свите","ските","смите","спите","сюите","сабли","савву","савки","сагой","садах",
    "таите","трите","табхе","табхи","тавре","таври","тавру","таете","таешь","тазам",
    "удите","улите","учите","убавь","убеги","убегу","убеди","убери","уберу","убийц",
    "фонят","фавна","фавне","фавну","фагам","фагах","фагов","фагом","фазах","фазой",
    "хаешь","хадже","хаджу","хаете","хазой","хайле","халве","халву","хамсе","ханже",
    "цанге","цангу","цапай","цапал","цапая","цапле","цапли","цапни","цапну","цапфу",
    "чагой","чадам","чадах","чадил","чадим","чадит","чадно","чадом","чадре","чадру",
    "шавке","шавки","шавку","шавок","шагай","шагам","шагах","шагая","шагни","шагну",
    "щебне","щебни","щебня","щедра","щедро","щекой","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
]
