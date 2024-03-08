const bedWords = [
    "полбе","буфах","латку","ловче","хукам","бейся","лигой","розге","дойде","атрии",
    "ахнул","ахнув","ахнет","ахнем","ахало","ахали","ахает","ахаем","аферу","афере",
    "бяках","бякам","бюсту","бюсте","бюста","бюксу","бюксе","бьюсь","бьешь","бьете",
    "вящим","вящий","вящем","вящей","вящее","вящая","вяток","вянут","вянул","вянет",
    "гюрзу","гюрзе","гюрги","гусят","густо","густи","гуске","гурту","гурте","гунну",
    "дятлу","дятле","дятла","узины","уезды","стазы","смазы","слезы","пуазы","пензы",
    "паузы","линзы","зуавы","зонды","злобы","звоны","званы","занды","егозы","ганзы",
    "втузы","бонзы","блузы","азины","уловы","удавы","увиты","ставы","смывы","сливы",
    "славы","свиты","сваты","дивны","двины","главы","всплы","волны","воины","воблы",
    "винты","видны","венды","вгибы","ванты","ванны","битвы","агавы","стопы","степы",
    "спины","спеты","спады","снопы","слепы","сиплы","псины","полны","полбы","поены",
    "плуты","планы","пионы","пинты","шлите","чтите","гните","врите","воите","бдите",
    "ажите","рпите","умыть","уесть","убыть","стыть","срыть","смыть","слыть","сесть",
    "сбыть","карпе","парке","крапу",
    "мессу","круче","пышен","отсту","тяжче","борцу","сорви","дачах","млели","вешку",
    "аутах","аутам","аусте","аулах","аулам","аукну","аукни","аукая","аукал","аукай",
    "бычья","бычьи","бычку","бычки","бычке","бычий","бытуя","бытия","бытии","бымши",
    "вянем","вялят","вялым","вялый","вялые","вялое","вялим","вялил","вялая","вякну",
    "гунне","гумну","гумне","панны","панды","памбы","ланпы","анапы","глупы","усаты",
    "унылы","умыты","умелы","улиты","уланы","удоды","удины","уделы","удалы","угоны",
    "убиты","суеты","ссуды","смуты","сауны","неуды","лгуны","гунны","гуммы","баулы",
    "хохми","ущеми","утоми","сожми","сломи","пойми","пожми","перми","найми","нажми",
    "займи","зажми","дожми","выжми","нюхай","нюхал","ханах","чанах","панах","пхать",
    "плать","выпуч","тузил",
    "внуке","читай","машин","убила","газов","пясти","севке","елозя","навру","отбое",
    "атаку","атаки","атаке","астру","астре","астме","ариях","ариям","арией","арену",
    "былин","былей","былые","сигмы","сгибы","наглы","магмы","догмы","гонды","годны",
    "гномы","гнилы","гниды","глины","гимны","гиены","геммы","ганны","гаммы","гамбы",
    "галлы","слиты","сбиты","нимбы","минны","лимбы","лианы","едины","длины","диены",
    "дианы","блины","биоты","бинты","алины","амины","следы","сдобы","сданы","модны",
    "медны","донны","доены","дамбы","бонды","бедны","банды","балды","аноды","алены",
    "амебы","астмы","баллы","балты","банты","мамбы","манны","самбы","слабы","наблы",
    "станы","сталы","болты","бомбы","бонбы","бонны","необы","сбыты","снобы","менты",
    "смелы","смены","сметы","смолы","смыты","томны","темны","стемы","столы","стелы",
    "слоты","слоны","слеты","ленты","елены","енолы","тонны","тесты","тенты","сытны",
    "стоны","стены","еноты","сенны","сонны","стоты","цацку","пиццу","ниццу","бацну",
    "шпицу","шлицу","швецу","чтицу","чтецу","чепцу","ушицу","улицу","тунцу","торцу",
    "танцу","сырцу","спицу","спецу","сосцу","ситцу","самцу","рунцу","рубцу","резцу",
    "ранцу","птицу","плицу","плацу","писцу","пивцу","песцу","перцу","певцу","паяцу",
    "ненцу","немцу","мышцу","ловцу","лжецу","ларцу","купцу","крицу","косцу","корцу",
    "истцу","ижицу","зубцу","жрицу","жрецу","жницу","жницу","думцу","друцу","горцу",
    "гонцу","герцу","винцу","венцу","блицу","агнцу","этаку","вьюку","дьяку","крещу",
    "скощу","щепку","щетку","щечку","цевку","цепку","циклу","цинку","цирку","цыкну",
    "цыпку","вояку","всяку","вязку","кляну","кляпу","клячу","княжу","кряду","кряжу",
    "ляжку","лямку","маяку","мякну","мялку","мялку","пялку","рядку","ряску","ряшку",
    "хряку","шеяку","глюку","злюку","каюту","клюву","клюзу","клюку","клюну","ключу",
    "крюку","люксу","лючку","трюку","тюкну","тюрку","тючку","урюку","галку","жилку",
    "злаку","кладу","клаку","клану","клару","клику","клину","клипу","клиру","кличу",
    "клоку","клопу","клушу","козлу","колку","куклу","ладку","лапку","лачку","линку",
    "липку","лишку","лодку","ложку","ломку","лужку","лунку","малку","милку","палку",
    "полку","уколу","улику","флику","холку","чалку","чулку","школу","годку","горку",
    "дойку","дроку","икону","иноку","кокку","комку","компу","копку","копру","копчу",
    "корду","коржу","корку","корпу","корчу","коушу","кофру","кочку","кошку","крону",
    "кроху","мокну","мочку","мошку","ножку","норку","окажу","окачу","окину","окопу",
    "опоку","попку","порку","почку","проку","рожку","ромку","укору","уроку","фомку",
    "шкоду","эпюру","ольгу","ольху","циану","цингу","цифру","гайду","гайку","гайну",
    "дайку","дайру","дойду","зюйду","найду","пойду","илюшу","нюхну","плюну","плюху",
    "плюшу","плющу","шлюпу","шлюху","днищу","очищу","плащу","поищу","пращу","улащу",
    "умащу","учащу","дохну","кирху","краху","махну","махну","олуху","пахну","пихну",
    "плаху","праху","рухну","уходу","ухожу","ханжу","харду","харчу","хладу","холлу",
    "хорду","хохлу","храпу","хрипу","чахну","чихну","шлиху","глифу","гофру","графу",
    "грифу","марфу","морфу","нимфу","олифу","фалду","фаршу","фауну","финку","финну",
    "финчу","фирну","фишку","флагу","флору","фонду","форду","форшу","фразу","фукну",
    "шарфу","шкафу","шлифу","шурфу","бахну","бахчу","блоху","бляху","бреху","брюху",
    "вдоху","верху","входу","вхожу","греху","дохту","дыхну","жмыху","махру","нивху",
    "обуху","ореху","охоту","пахту","пихту","пряху","психу","птаху","пыхну","пыхчу",
    "рейху","сикху","ситху","слуху","смеху","сноху","сохну","спеху","стиху","сходу",
    "схожу","тахту","труху","утеху","ухабу","хатку","хвалу","хвату","хвачу","хвощу",
    "хлебу","хлеву","хрену","хрычу","чехлу","шихту","шляху","эсеру","этажу","этану",
    "бьефу","вьюгу","вьюну","вьючу","тьпфу","жнецу","сцежу","сцену","сцепу","цензу",
    "центу","цисту","блюду","блюзу","брюту","всюду","люфту","плюсу","слюду","слюну",
    "союзу","сюиту","сюрту","утюгу","утюжу","флюсу","войду","выйду","гейшу","кейсу",
    "кейфу","лейбу","лейку","пейсу","рейду","рейку","рейсу","сайгу","сайду","сейфу",
    "сойду","тайгу","шейку","баяну","буяну","вояжу","втяну","вязну","гляжу","гляну",
    "зябну","лягну","лязгу","ляпну","лярду","маячу","мягчу","мяску","наяву","наяду",
    "нянчу","обяжу","осяду","пляжу","плясу","пляшу","поясу","пряду","пряжу","пряну",
    "прячу","пятну","слябу","слягу","сняту","спячу","сряду","стягу","стяну","трясу",
    "тяжбу","увяжу","утяну","флягу","шляпу","сращу","трещу","рифту","сферу","торфу",
    "трефу","фарсу","фарту","ферту","фетру","фибру","флеру","форсу","форту","горлу",
    "жерлу","крылу","лавру","лееру","лерку","литру","мурлу","реалу","риалу","руслу",
    "тралу","тырлу","улару","выдру","выжру","выпру","вырву","вытру","дрыну","дырку",
    "крыгу","крысу","крышу","мымру","пырну","рыбку","рывку","рыгну","рыкну","рынду",
    "рынку","рыску","срыву","сырку","тырсу","варку","вберу","вееру","вербу","верну",
    "верчу","вершу","ветру","взору","вокру","вопру","ворсу","ворчу","воршу","вотру",
    "впору","врагу","врачу","вреду","врежу","вруну","вручу","врушу","втору","гриву",
    "двору","древу","ковру","крову","курву","нарву","нерву","нраву","ораву","перву",
    "порву","праву","рвану","рвачу","рвоту","ревну","ровну","свару","свору","совру",
    "сорву","траву","черву","чреву","шуршу","шурпу","штору","шпору","шкуру","шатру",
    "акыну","алычу","быдлу","взыщу","выгну","выеду","выжгу","выжду","выищу","высту",
    "вытку","выужу","выучу","вычту","глыбу","дылду","дымку","дышлу","зыбку","зыкну",
    "клыку","лычку","мыску","мышку","опыту","отыщу","плыву","сбыту","слыву","слышу",
    "смыву","стыду","стыжу","стыку","стыну","сынку","сыску","тыкву","тынку","тычку",
    "штыку","вмещу","впущу","втащу","овощу","отмщу","плещу","свищу","сгущу","смещу",
    "смущу","снищу","спущу","стащу","толщу","тщету","улещу","умещу","усищу","шеищу",
    "абазу","абаку","агаву","агату","адову","азиду","азоту","аисту","всеми","греми",
    "громи","ежеми","зауми","седми","упоми","бысть","везть","верть","палок","лапок",

    "сытая","готам","зачав","ввиду","верят","споре","сырее","диной","тупом","тупой",
    "шутку","шунту","шумку","шубку","шуану","штуфу","штуку","штофу","штоку","штату",
    "чушку","чурку","чумку","чукчу","чтиву","чреду","чомгу","читку","чирку","чинку",
    "фуксу","фотку","флоту","фиску","финту","фиксу","фиату","фетву","феску","фаску",
    "ушибу","ушату","учету","учесу","учену","учебу","утону","уткну","утишу","утешу",
    "тушку","тучку","туфту","турну","турку","тунгу","трушу","труту","трусу","трупу",
    "сшибу","сфену","сушку","сучку","сутру","сурку","супру","сунду","сумку","сукну",
    "ручку","русту","румбу","руину","ругну","рубку","росту","ромбу","розну","розгу",
    "пшену","пчелу","тупое","супов","пупом","пумой","пулом","пулов","пуком","пуков",
    "пузом","пудом","пудов","пугов","лупой","пусто","омыть","плыть","порть","лешие",
    "лихие","нагие","нищие","общие","отчие","пегие","пешие","рыжие","синие","сякие",
    "тихие","тощие","узкие","шьешь","чуешь","чтешь","чаешь","утешь","трешь","ткешь",
    "суешь","сеешь","роешь","ржешь","реешь","рвешь","прешь","поешь","пнешь","орешь",
    "моешь","мнешь","маешь","льешь","лжешь","лаешь","куешь","ищешь","идешь","заешь",
    "жуешь","жрешь","жнешь","жмешь","жжешь","ждешь","едешь","дуешь","доешь","даешь",
    "гнешь","вьешь","врешь","воешь","царев","узрев","удоев","убоев","слоев","сидев",
    "сбоев","проев","попев","понев","перев","отпев","огрев","огнев","надев","верев",
    "дерев","допев","зарев","краев","людев","манев","копуш","окупи","опеку","скопу",
    "скупо","сопку","топку","осипу","послу","посту","просу","снопу","соплу","сопру",
    "спору","стопу","опалу","опару","упало","ощупа","почуя","глупо","погну","погру",
    "пожгу","понгу","прогу","езопу","оперу","опешу","оплеу","поеду","поуже","упоен",
    "упоре","лопну","плову","плоду","пложу","плоту","пнуло","подул","полбу","ползу",
    "полну","толпу","уполз","опишу","опушу","прошу","шпону","порту","потру","потух",
    "почту","топну","топчу","тропу","утопи","допру","опору","ощупи","пиону","повну",
    "подув","подуй","пожду","пожну","пожру","пожуй","пожух","помпу","помру","помчу",
    "поору","попру","порчу","поужу","поучи","поучу","почву","почуй","пробу","прозу",
    "пропу","прочу","упору","арбат","гурий","рупий","турий","шурле","гумит","ражие",
    "рябое","рябое","рытой","рытое","рыноч","рымом","рылом","рыком","рыков","рыбол",
    "рыбок","рыбой","рутой","русом","русой","русое","руном","рукоп","рукой","руков",
    "ружом","рудом","рудой","рубок","ротой","росой","ромом","роком","роков","розой",
    "розог","розов","родом","родов","рогом","рогов",
    "сумок","мятый","хмеле","пасни","пикой","энным","труди","тюрке","глазе","скоро",
    "аглае","барке","вашей","гасли","девам","екали","женил","заике","икнув","капам",
    "лачуг","манке","намой","обмяк","парки","расти","самые","тегах","удави","фитах",
    "холил","цепов","черти","шефом","щипай","эпюре","гичку","дичку","личну","биоту",
    "виолу","диоду","диолу","кишку","мишку","пикшу","рикшу","шииту","шикну","шинку",
    "шишку","лифту","визгу","визжу","диезу","кинзу","лизну","линзу","мирзу","биржу",
    "вижду","жинку","жирку","гиену","диену","диету","киеву","гидру","диску","сидру",
    "лиану","пиалу","пиару","тиару","бимсу","бинту","бирку","битву","гибну","лимбу",
    "нимбу","гикну","гимну","гипсу","мигну","рингу","тигру","вилку","виллу","липну",
    "силку","титлу","мирку","мирну","мирру","мирту","миску","митру","симку","пивку",
    "пииту","пикну","пинку","пинту","пирсу","сипну","кирку","риску","тирсу","титру",
    "винту","висту","витку","кисту","нитку","тисну","виску","висну","кивку","кивну",
    "киску","кисну","никну","сивку","блефу","кофту","нафту","скифу","софту","тафту",
    "факсу","факту","фанту","урину","урезу","урежу","урану","упеку","упаду","уношу",
    "штабу","шпику","шпату","шпану","шпагу","шмону","шмигу","шмату","шкоту","шкиву",
    "четку","ческу","черту","челну","челку","чашку","часку","чарту","чарку","улучу",
    "утесу","утеку","усику","усижу","усеку","усачу","усажу","урону","урожу","уроду",
    "труду","трубу","троту","тросу","трону","трибу","трепу","треку","требу","трачу",
    "суету","судну","судку","ступу","стулу","стуку","стужу","сточу","стору","стону",
    "решку","речку","репку","ренту","резку","ребру","рачку","рауту","расту","рассу",
    "пургу","пуншу","пукну","пудру","пугну","пуазу","псину","пруту","прусу","пружу",
    "очагу","отучу","отиту","отелу","отеку","отару","отаву","осушу","осужу","осоку",
    "нутру","нужду","нотку","носку","норду","неучу","неуду","нерпу","нерку","неону",
    "мурку","мурзу","муару","мраку","мошну","мотру","мотну","мотку","мосту","морсу",
    "лузгу","лубку","лотку","лоску","ловчу","лобку","летку","лессу","леску","ленчу",
    "кучку","кутну","кусту","кусну","куску","курсу","курну","курку","курду","кургу",
    "ишачу","ишаку","иссту","искру","ирису","индау","имиду","икоту","ижору","идолу",
    "зурну","зубру","зубку","зуаву","зразу","знову","значу","знаку","злобу","злату",
    "жучку","журчу","жлобу","жесту","женку","желчу","жезлу","жгуту","жбану","жатву",
    "егору","едину","едоку","ездку","елену","еложу","доеду","дзету","детку","детву",
    "душку","дусту","дуплу","думку","дужку","дудку","дубку","друзу","дружу","дрочу",
    "гукну","гузку","гудку","губку","грушу","грузу","гружу","груду","грубу","грозу",
    "втузу","всучу","всуну","всосу","всажу","впишу","впаду","вошку","вотку","воску",
    "бурчу","бурту","бурсу","бурку","бурду","бунду","булку","буксу","букву","буеру",
    "арапу","араку","апису","анусу","анису","анашу","анапу","амуру","алену","алешу",
    "бичуя","дичая","ушьют","ушлют","учуют","ухают","усеют","умоют","умеют","умают",
    "укают","увьют","убьют","тлеют","сроют","споют","спеют","снуют","смоют","скуют",
    "сияют","сжуют","сдуют","сдают","рдеют","преют","порют","полют","плюют","охают",
    "омоют","окуют","окают","овьют","овеют","млеют","мелют","колют","клюют","клеют",
    "зреют","знают","днюют","вроют","воюют","вдуют","валют","энный","шитый","шарый",
    "шалый","вихря","жирея","зимуя","митяя","пируя","рисуя","хитря","фьють","фюйть",
    
    "шахам","каире","гатям","серее","псаре","крупе","своре","бреет","зажав","клеве",
    "адово","банки","варят","галдя","даней","ездой","жалит","загни","извел","каике",
    "лазам","майся","нагло","обжат","падай","радуя","сажал","тайне","убрел","фарой",
    "хатой","целым","чащах","шатав","щечке","энные","маису","сашку","осаду","осажу",
    "сачку","сдачу","скачу","барсу","баску","брасу","самбу","ваксу","квасу","свату",
    "славу","галсу","гасну","гласу","загсу","пасну","рапсу","распу","спаду","засну",
    "насту","сауну","стану","камсу","маску","самку","смажу","смалу","садку","сарду",
    "сзаду","сладу","стаду","заслу","засту","сказу","сразу","стазу","красу","саржу",
    "сражу","стару","слажу","ссажу","стажу","каску","кассу","касту","ласку","ласту",
    "скаку","скалу","скату","алчбу","амбру","амебу","амиду","амилу","амину","балду",
    "балку","баллу","балту","банду","банку","целый","хилый","ушлый","утлый","укрый",
    "талый","сытый","замед","кулиш","мешоч","здрав","предв","правд","древе","древа",
    "дверц","двере","вреде","вреда","вражд","впред","вздра","вдарь",
    "скобе","урнам","омыто","множу","задка","холят","мамки","валуя","тягая","райке",
    "акает","елеем","жабьи","избей","фауне","барже","баржи","барии","барки","баром",
    "вдове","вдоха","вдохе","вдохи","вдуем","вдует","вдула","вдули","вдуло","вдуну",
    "гадил","гадим","гадит","гадки","гадко","делай","делал","делам","делах","делая",
    "зайди","зайдя","зайке","зайки","зайти","лагам","лагах","лагов","лагом","гречу",
    "кричу","кручу","парчу","перчу","торчу","брешу","брошу","грешу","крашу","крушу",
    "маршу","орошу","паршу","ракшу","замру","маржу","марку","марту","мерку","метру",
    "моргу","морду","моржу","омару","рамку","рампу","умбру","умору","бригу","бризу",
    "брику","грибу","дрибу","кризу","крику","крину","крипу","крису","прибу","приду",
    "призу","прину","прису","узору","срезу","разру","разку","разду","разбу","озеру",
    "крезу","зерну","зебру","затру","заржу","запру","заору","закру","безру","срежу",
    "сожру","сержу","раджу","нажру","кружу","кражу","жарку","жанру","жабру","дрожу",
    "держу","грожу","брожу","брежу","трапу","серпу","пруду","преду","прагу","петру",
    "персу","педру","парту","парку","напру","крупу","крепу","карпу","драпу","торсу",
    "ссору","срубу","сроку","сроду","среду","сотру","сорту","серну","сербу","сдуру",
    "сдеру","сбору","терну","ранту","ранку","рангу","недру","негру","натру","нарту",
    "нарду","наору","крену","крану","дерну","грану","горну","барну","удеру","терку",
    "оберу","кедру","греку","гребу","гетру","гербу","гаеру","бреду","бедру","кругу",
    "кроту","краду","крагу","крабу","корту","кобру","карту","каргу","драку","браку",
    "барку","трату","торту","торру","торгу","торбу","дроту","дотру","брату","борту",
    "убору","дрогу","добру","грогу","гробу","горбу","броду","грабу","бугру","браду",
    "брагу","барду","удару","угару","драгу","граду","гарду","зачну","качну","научу",
    "начну","онучу","снобу","бонну","бонзу","бодну","блину","бенку","шепну","шеину",
    "шатну","сношу","книшу","внушу","унижу","снижу","нежну","манжу","джину","вонжу",
    "улану","слону","плену","плану","ленту","лгуну","клену","длину","глину","волну",
    "спину","пенсу","пензу","пеану","панну","панку","панду","капну","узину","снизу",
    "озону","мазну","книзу","казну","звону","звену","замну","загну","гезну","ганзу",
    "внизу","тмину","темну","сомну","смену","немку","метну","менту","медну","манну",
    "манку","мангу","домну","вомну","танку","науку","нанку","сивый","сизый","самый",
    "пятый","полый","питый","петый","палый","мытый","милый","лупах","луках","лузах",
    "лужах","лапшу","лапту","баулу","блату","валку","влажу","влачу","залпу","овалу",
    "павлу","патлу","плаву","плату","плачу","баула","олуха","плута","служа","слуха",
    "слуша","стула","сусла","увала","увела","укола","чулка","булав","пулах","узлах",
    "услав","услал","улова","акуле","бауле","бухал","купал","кусал","кутал","кушал",
    "путал","сужал","уехал","тукал","устал","укало","ухало","фукал",
    "гневу","донне","измен","стезе","унизи","белья","наций","ушком","обили","горки",
    "щепке","эподе","ездке","целил","жалят","ханжи","файла","алеше","изгое","чащей",
    "зыкам","зубам","зятем","зреем","зонам","гулям","губам","греем","горим","горам",
    "уютом","ушьем","ушном","ушлым","ушлом","няням","нюням","нулям","нулем","нудим",
    "рясам","рядим","рядам","рябим","рыщем","ляхам","ляпам","ляжем","лютым","люкам",
    "дюнам","дышим","дырам","дыням","дымим","очкам","охнем","охаем","отцом","отцам",
    "тянем","тюрьм","тюлем","тюком","тычем","былем","быкам","бурям","бурым","бурим",
    "кущам","кушем","кучам","куцым","куцем","кутим","кулем","кубам","кроим","кроем",
    "вязьм","вязам","вяжем","выним","вынем","вузом","вузам","вроем","воюем","вощим",
    "пятым","пядям","пышем","пылим","пыжом","пыжам","пущем","пущам","путем","путам",
    "сядем","сыщем","сычам","сытым","сытом","сырым","сыром","сыпям","сынам","сущем",
    "шутом","шумом","шубам","шишом","шитым","мячем","мячам","мятым","мышам","мычим",
    "памву","молву","вмажу","смежу","смешу","мешку","замшу","памбу","мамбу","дамбу",
    "гамбу","бомбу","медку","домчу","дампу","дамку","темпу","пемзу","пампу","лампу",
    "мозгу","мезгу","мазку","замку","смолу","омелу","молчу","метлу","тамгу","смогу",
    "семгу","омегу","смуту","смочу","смету","месту","омуту","омочу","омету","мечту",
    "мачту","матчу","матку","мамку","маету","камку","умету","метку","мекку","тетку",
    "тенту","теину","кунту","кнуту","заику","бзику","спишу","идишу","каину","каику",
    "уличу","спичу","скипу","плиту","плису","джипу","сгибу","обижу","обиду","вгибу",
    "блику","сгину","книгу","джигу","гниду","скиту","скину","скиду","ксиву","вкину",
    "удину","твиду","двину","движу","вниду","твину","осину","овину","воину","олиту",
    "оливу","оживу","улиту","свиту","слижу","сливу","увижу","сживу","ссужу","шажку",
    "укажу","лежку","божку","кажду","косну","канту","канву","внуку","венку","указу",
    "тезку","пазку","возку","задку","затку","звуку","кобзу","шапку","тапку","спеку",
    "пачку","пакту","купчу","каппу","ледку","доску","дедку","девку","дашку","дачку",
    "давку","водку","будку","укачу","точку","ткачу","течку","тачку","сечку","бачку",
    "вкачу","качку","каччу","шатку","такту","квашу","кашку","катку","каблу","ватку",
    "вакшу","башку","шкету","укушу","сошку","скушу","скошу","ковшу","вкушу","векшу",
    "скобу","скебу","сбоку","кубку","колбу","клубу","белку","блоку","бобку","боксу",
    "совку","севку","левку","ковку","клеву","квоту","волку","влеку","вкусу","ветку",
    "теску","телку","сетку","секту","сексу","кексу","толку","котлу","сколу","скулу",
    "солку","тоску","стоку","сотку","скоту","окоту","соску","скуку","коксу","шесту",
    "шепчу","шведу","глушу","левшу","свешу","спешу","стешу","угашу","удушу","швабу",
    "степу","спуду","плуту","плугу","плечу","плету","плесу","пледу","плеву","паузу",
    "глупу","улечу","удачу","увечу","сочту","свечу","обучу","зачту","заучу","доучу",
    "влечу","бесчу","лбову","жажду","тосту","тонну","тесту","нагну","наеду","недоу",
    "заблу","заеду","зажгу","заужу","ззаду","десну","джазу","джуту","дзоту","дожду",
    "долгу","донну","донгу","благу","блогу","блуду","блужу","блузу","божбу","болту",
    "боссу","ботву","ссуду","особу","слезу","свезу","сдобу","сбуду","сбегу","следу",
    "седлу","сведу","слову","вносу","внесу","веслу","сожгу","служу","сложу","слежу",
    "столу","стогу","стену","стелу","слоту","слету","солгу","слугу","слогу","слегу",
    "сосну","согну","сгону","снегу","гнусу","унесу","снесу","сенну","вбегу","воблу",
    "возбу","влету","ветлу","ватту","ванту","удаву","уважу","главу","влагу","ванну",
    "говну","волгу","вогну","вдену","венду","внову","влезу","вложу","олову","улову",
    "увожу","вожжу","вежду","ввожу","введу","ввезу","увезу","уведу","увозу","ввозу",
    "возду","вводу","вдову","вооду","оводу","уводу","галжу","глазу","глажу","ганну",
    "ганау","обозу","обузу","уезду","уезжу","уложу","убежу","гложу","одежу","улету",
    "уделу","оболу","глету","обету","гонту","гнету","генту","гонгу","одену","угону",
    "обеду","обегу","ободу","убуду","угоду","удоду","между","эвбея","лютуя","горюя",
    "слюня","вьюня","ферзя","софья","голый","новый","облый","сирый","литый","витый",
    "этако","безус","спять","извит","лукич","жение","княжь","тулия","казня","зелие",
    "сморщ","рыбищ","обращ","мерещ","дырищ","стоящ","сообщ","сияющ","сидящ","посещ",
    "освящ","освещ","косищ","насущ","ловящ","вообщ","вытащ","завещ","детищ","домищ",
    "дышащ","жилищ","капищ","лапищ","ледащ","ножищ","отпущ","текущ","помещ","лесна",
    "сенна","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
]



весна
десна

