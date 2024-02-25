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
    "кормя","ленам","ленах","ленке","ленку","ковша","","","","","","","","","","","","","","","","","","","",""
]
