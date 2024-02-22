const bedWords = [
    "чемод","сегод","пощад","оттуд","откуд","отвед","одежд","обоюд","негод","молод",
    "коляд","дошед","довед","вошед","блонд","колод",
    "йенец","ююбою","ююбой","юшкою","юшкой","ючусь","юфтью","ютясь","ютись","юрьич",
    "юрьев","юртою","юртой","юрово","юркою","юрком","юркой","юркое","юрков","юркий",
    "юркай","юриди","юнцом","юнцов","юношу","юноши","юноше","юност","юному","юного",
    "юнеть","юнгою","юнгой","юмору","юморе","юмора","юккою","юккой","южный","южною",
    "южном","южной","южное","южней","юбкою","юбкой","юаней","юзыся","юхнов","юбовь",
    "юдоли","числю","уясню","устью","устою","устаю","усилю","усвою","тасую","сякую",
    "сякою","сытью","сытую","сытою","сыпью","сыплю","сущую","сушью","сучью","сухую",
    "сухою","сутью","сумою","сулою","сукою","сукню","сужаю","судью","судию","стилю",
    "спилю","спаяю","спалю","сошью","сошлю","сочню","сохою","сотую","сотою","сотню",
    "соплю","солью","содою","совью","совою","собью","собою","соблю","смолю","сманю",
    "слюню","скулю","сколю","склюю","скалю","сиплю","сипаю","синюю","синью","силою",
    "сизую","сизою","сигаю","сивую","сивою","сдвою","сгоню","сгною","сгнию","свалю",
    "сапою","самую","самою","саклю","сажаю","сагою","саблю","писаю","остью","оспою",
    "осную","осмию","осилю","освою","носью","насую","настю","мыслю","мусью","маслю",
    "лысую","лысою","лисью","лисою","кусаю","косую","костю","косою","кисою","касаю",
    "истую","истою","исклю","ивасю","гостю","высью","встаю","вовсю","босую","босою",
    "басню","эпосу","эпоса","экося","эвося","шумск","шпису","шился","шансы","шансу",
    "шанса","шался","чувст","хтось","хаусы","хаусу","хауса","хаосу","хаоса","хамсы",
    "хамсу","ушаст","учусь","учись","учась","участ","упасу","упаст","упаси","унося",
    "уносу","уноси","уноса","улусу","укусы","укусу","укуси","укуса","укосы","укосу",
    "ужасы","ужасу","ужасо","ужасн","ужаса","угаси","тщусь","тщись","тщась","толст",
    "товсь","таяся","таясь","таксы","таксу","таись","счаст","суясь","суйся","стуса",
    "спуст","спосо","списа","спасу","спаст","спасо","спаси","спаса","соусы","соусу",
    "соусо","соуса","собст","снясь","сносы","сносу","сноси","сноса","снись","скосы",
    "скосу","скоси","скоса","сдаст","свячу","свяжу","свойс","свожу","сводя","своду",
    "свода","свобо","сваях","сваям","сваны","свану","своды","свово","свадь","свана",
    "юрода","чипсы",
    "въеду","въяве","въявь","съеда","съеде","съеду","съела","съели","съело","съема",
    "съеме","съему","съест","съешь","съеха","въеха","съезд","выпъю","кутъю","разъе",
    "разъя","четъи","изъев","изъел","изъяв","изъял","изъят","объев","объел","объяв",
    "объял","объяс","объят","отъев","отъез","отъел","отъят","отъял","отъяв","торен",
    "ежите","ежить","ежьте","екнет","ешьте",
    "необъ","рамлэ","сортэ","диэту","дуэле","дуэли","дуэта","дуэте","дуэту","дуэты",
    "здэсь","коэфф","леэть","люэса","люэсе","люэсу","поэме","поэму","поэмы","поэта",
    "поэте","поэту","поэты","аукаю","балую","битую","бичую","бубню","бузою","буклю",
    "букою","буною","бурлю","бурою","бурую","бухаю","бушую","буяню","былую","бытую",
    "валую","витую","ворую","выкую","вялую","вящую","жалую","жатую","живую","жилую",
    "жмурю","жулью","жутью","зажую","закую","зимую","зубрю","изжую","какую","кочую",
    "кузню","кукою","кукую","кумою","кунью","купаю","куплю","купою","курью","кутаю",
    "кутью","кухню","куцую","кушаю","ликую","линую","литую","лихую","лицую","лузою",
    "лукою","луною","лупою","луплю","лурою","льшую","любую","лютую","малую","милую",
    "миную","мужаю","музою","мукою","мумию","мурою","мурую","мутью","мухою","мучаю",
    "мытую","мятую","нищую","новую","нукаю","облую","общую","окуню","окурю","омулю",
    "отжую","откую","отчую","очную","ошуюю","пакую","палую","паную","пирую","пожую",
    "полую","почую","пумою","путаю","путрю","пущаю","пущую","пятую","ражую","разую",
    "ратую","рисую","рошую","рубаю","рублю","ружью","рукою","рупию","русою","русую",
    "русью","рутою","ручью","рыжую","рытую","рябую","сбрую","сирую","скурю","струю",
    "сурою","сырую","такую","талую","тирую","тихую","токую","тощую","труню","тубою",
    "тукаю","тулию","тулью","туплю","тупою","тупую","турью","туфлю","тушью","уварю",
    "уволю","ужалю","ужарю","узкою","узкую","узнаю","уймою","уколю","укорю","укрою",
    "улюлю","умалю","умилю","умною","умную","умолю","уморю","унцию","упарю","упырю",
    "уркою","урною","уроню","утилю","уткою","утлою","утлую","утолю","утрою","учиню",
    "уширю","ушкую","ушлою","ушлую","ушною","ушную","фасую","фузию","фукаю","фурию",
    "фурою","хилую","хмурю","холую","хулою","чалую","чарую","чужою","чужую","чумою",
    "чутью","чушью","шикую","шитую","шкурю","шубою","шумлю","шурую","щукою","щупаю",
    "щучью","ойкну","уймой","уймут","байку","байту","бойку","бойцу","буйво","буйка",
    "буйки","буйку","буйна","буйно","буйны","войну","зайку","займу","зайцу","зойку",
    "зуйка","зуйки","зуйку","кайлу","кайму","кайру","кайсу","кайту","кайфу","койку",
    "лайбу","лайку","майку","мойву","мойку","найму","пайку","пойлу","пойму","райку",
    "сайку","сайру","сайту","сойку","тайму","тайну","файлу","чайку","чуйку","шайбу",
    "шайку","щучья","щучьи","щучку","щучки","щучит","щучим","щучил","щурят","щуром",
    "чуять","чуяли","чухны","чутья","чунях","чуням","чужим","чужих","чувих","хунты",
    "хунту","хулят","хулит","хулим","хулил","фуфлу","фунты","фунту","бубну","бубны",
    "буллу","буллы","бунту","бунты","бутсу","бутсы","бухну","бухту","бухты","жужжу",
    "муллу","муллы","мумму","муссу","мутны","нужны","пупсу","пупсы","пусты","пусть",
    "путчу","пухну","сумму","суммы","сунув","сунул","сунут","суслу","суюсь","тумбу",
    "тумбы","тупым","тупых","тухну","тучны",
    "адъют","аглаю","айкаю","акцию","алкаю","бабью","багрю","бадью","барию","бахаю",
    "бацаю","башню","бивню","биллю","браню","бугаю","бываю","былью","бычью","бязью",
    "валяю","вафлю","ввалю","вдарю","вздую","видаю","виляю","вихрю","вишню","влияю",
    "впаяю","вралю","вчиню","выбью","выдаю","выдую","выкаю","вылью","выпью","вышлю",
    "вышью","вязью","вякаю","гадаю","гадью","газую","гарью","гикаю","граню","грилю",
    "гублю","гукаю","гуляю","гурию","давлю","далью","данью","дарию","дарую","дарью",
    "дивлю","дикую","дичаю","дичью","дублю","дубью","дурню","дурью","дюжую","жабью",
    "живлю","жилью","забью","завью","задаю","задую","залаю","залью","запью","зашлю",
    "зашью","зыбью","зыкаю","зябью","играю","издаю","индию","ихнюю","казню","какаю",
    "калию","капаю","караю","качаю","кашлю","киваю","кидаю","киплю","князю","кралю",
    "крилю","кюрию","ладью","лазаю","лакаю","ланью","лапаю","ливню","лидию","лилию",
    "линию","линяю","лишаю","лннию","лыжню","люблю","лягаю","ляпаю","набью","навью",
    "нагую","надаю","надую","налью","нацию","нашлю","нашью","ничью","нищаю","нудью",
    "ныряю","нюхаю","павью","падаю","парию","пашню","пикаю","пинаю","пинию","пифию",
    "пихаю","псарю","пугаю","пудрю","пылаю","пылью","пядью","рабью","радию","радую",
    "ранью","рафию","рацию","рачью","ругаю","ругню","рудню","рыбью","рыгаю","рыдаю",
    "рыкаю","рысью","рыхлю","ряблю","рябью","сараю","сварю","сжарю","сирию","спирю",
    "сырью","удалю","ударю","фабрю","фацию","фигню","физию","хапаю","хвалю","хиврю",
    "храню","худую","цапаю","циклю","цыкаю","чикаю","чирью","чихаю","чудью","шагаю",
    "шибаю","шикаю","шиплю","ширью","шпарю","шпилю","щипаю","щиплю","энную","эрбию",
    "зэках","кэфии","эдаки","эквив","эпики","айкай","айкал","айкая","выкай","вякай",
    "кайлы","кайсы","кайся","кайфа","какай","качай","лакай","цыкай","зяйка","дайка",
    "кайса","шкалы","цыкал","сладк","скалы","лакая","лакал","клыка","кланя","кланы",
    "клана","клала","кладя","клады","кладн","кладб","клада","клавд","кашля","качал",
    "касал","каллы","какал","зыкал","глазк","гладк",
    "русых","голая","стучу","одеял","искал","угожу","жменю","мулят","душил","лазею",
    "обдаю","обдую","обелю","облаю","облою","облюю","обмою","обрею","обхаю","общею",
    "овцею","овцою","огарю","оголю","огрею","одарю","оделю","одною","одную","озарю",
    "ойкаю","оклею","оленю","олесю","опалю","опелю","опилю","оплюю","опцию","оргию",
    "ордою","оршею","осеню","осмею","острю","отбою","отдаю","отелю","отлаю","отмою",
    "отпою","отрою","отсею","оттаю","отчею","офеню","охрою","очиню","очною","ощерю",
    "обеды","обеты","обиды","обиты","обозы","оболы","обузы","обуты","овалы","овины",
    "овиты","оводы","одеты","оказы","оковы","окопы","оливы","олифы","омары","омелы",
    "ометы","омуты","омыты","опалы","опары","оперы","опоры","опусы","опыты","оравы",
    "осады","осины","особы","остры","отавы","отары","откры","офисы","охоты","юнион",
    "очист","очесу","очесе","офису","офисе","офиса","отмст","ороси","опусу","опуст",
    "опусе","опуса","описи","описа","опасн","опаса","олеся","олеси","олесе","окиси",
    "одест","обесп","просю","аписы","баксы","барсы","бимсы","боксы","боссы","брасы",
    "буксы","бурсы","бюксы","ваксы","вкусы","гласы","загсы","ибисы","ирисы","кассы",
    "кейсы","кексы","красы","крисы","крысы","курсы","люксы","маисы","массы","мессы",
    "миссы","мопсы","морсы","пассы","пейсы","пенсы","персы","пирсы","плесы","плюсы",
    "присы","пьесы","раисы","рассы","рейсы","саксы","тирсы","торсы","тросы","трусы",
    "утесы","факсы","фарсы","фиксы","флюсы","эфесы","списк","укоса","шлыка","скаля",
    "скаль","салак","улуса","улисс","лаяка","лаках","ладка","кляла","казал","кавал",
    "злака","злака","дитею","шииты","пышна","едете","поищи","курим","дойди","колум",
    "обста","фырча","хазах","пазом","ушата","помыт","ложны","пошью","вынуд","суфий",
    "книго","скоки","пущим","мнете","лейте","стаже","солям","факти","смеют","керчи",
    "белит","битле","битлу","битлы","влети","влиты","влить","вылит","вялит","делит",
    "длите","длить","желти","жител","злите","злить","лгите","лежит","лести","летим",
    "летит","лечит","лижет","лижут","листе","листу","листы","лисят","литве","литву",
    "литвы","литии","литию",
    "плюща","шиите","ездят","позна","дожуй","панов","пегой","длись","литья","баксу",
    "всего","диего","коего","моего","снего","чьего","алого","атого","злого","иного",
    "итого","много","оного","прого","ского","убого","экого","этого","волго","враго",
    "григо","гурго","долго","друго","конго","круго","атому","брому","гному","грому",
    "злому","иному","миому","оному","слому","хрому","экому","этому","всему","джему",
    "дрему","ерему","икему","коему","крему","моему","стему","схему","чьему","шлему",
    "эдему","адаму","акиму","астму","басму","гамму","драму","зажму","имаму","карму",
    "магму","нажму","нахму","спаму","сраму","хламу","храму","чалму","шарму","шраму",
    "блюму","вожму","возму","выжму","гемму","гриму","груму","гумму","дерму","догму",
    "дожму","дойму","дюйму","ефиму","изыму","изюму","ильму","комму","корму","кошму",
    "крыму","лемму","норму","пижму","пожму","приму","рифму","сейму","сигму","сниму",
    "сожму","сонму","схиму","терму","трюму","ферму","фирму","форму","фурму","холму",
    "хохму","хурму","ширму","горюю","малюю","бедую","белую","векую","верую","вещую",
    "голую","дутую","евшую","едкую","емкую","ечную","левую","лешую","некую","немую",
    "пегую","пешую","подую","седую","серую","сетую","тугую","целую","чешую","воняю",
    "гоняю","меняю","меряю","пеняю","роняю","теряю","помыю","армию","атрию","божию",
    "бытию","вопию","гелию","гению","житию","копию","кофию","лоцию","магию","манию",
    "марию","мафию","мидию","мэрию","норию","пению","питию","почию","рению","родию",
    "сепию","софию","талию","тению","торию","точию","фению","фобию","химию","цезию",
    "целию","шатию","бегаю","бодаю","ботаю","ведаю","вешаю","вещаю","витаю","дебаю",
    "деваю","делаю","думаю","ерзаю","желаю","затаю","зеваю","катаю","копаю","латаю",
    "летаю","ломаю","лопаю","макаю","мараю","махаю","мешаю","мигаю","минаю","мотаю",
    "мыкаю","натаю","некаю","питаю","подаю","полаю","потаю","пытаю","решаю","рожаю",
    "тачаю","тикаю","токаю","топаю","тугаю","тыкаю","тюкаю","тягаю","цокаю","читаю",
    "шатаю","червю","вождю","дождю","аллею","алтею","архею","банею","батею","белею",
    "болею","борею","бурею","бучею","вашею","вежею","вещею","вклею","волею","высею",
    "вящею","гилею","гинею","гирею","глиею","говею","гулею","гущею","дачею","долею",
    "дулею","дурею","душею","дынею","дюжею","дядею","еврею","евсею","евшею","жалею",
    "жижею","жирею","жнеею","жокею","зарею","засею","затею","змеею","зюзею","идеею",
    "иерею","ихнею","катею","кашею","кисею","кожею","колею","кофею","кощею","кучею",
    "кущею","лакею","лелею","лешею","лицею","ложею","лужею","лыжею","лысею","медею",
    "бякою","вялою","мямлю","мятою","нянею","пятою","пятью","роялю","рябою","рясою",
    "тягою","тямлю","тятею","белью","битью","божью","болью","бытью","весью","вещью",
    "вобью","волью","вонью","ворью","вошью","вытью","гатью","голью","добью","долью",
    "донью","допью","дошью","дутью","житью","зелью","келью",
    "смаку","ружей","изрещ","утере","мглой","маслу","креще","скажу","песцы","тетею",
    "губою","дугою","дудою","дурою","дутою","душою","кугою","лудою","мудрю","музею",
    "нугою","пугою","пулею","пущею","рудою","сулею","сушею","сущею","тугою","тупею",
    "тучею","тушею","фугою","худею","худою","чунею","шугою","бэлою","рэлею","энною",
    "арфою","рифею","софою","софью","фазою","фарою","фатою","фенею","ферзю","фигою",
    "филею","фитою","фифою","фомою","форою","бетою","битою","ватою","витою","вторю",
    "датою","дегтю","жатою","кетою","когтю","ктырю","лаптю","литою","литью","локтю",
    "ломтю","лютню","лютою","мотню","мытою","мытью","нитью","ногтю","нотою","нытью",
    "питою","питью","потею","ратью","ротою","рытою","рытью","сетью","стаею","старю",
    "стезю","стелю","строю","стырю","такою","талою","талью","тарою","твоею","творю",
    "тезою","темню","темою","темью","тенью","тесню","тестю","течью","тешею","тещею",
    "тиглю","тиною","тихою","тишью","тобою","тогою","томлю","топлю","топью","тощею",
    "тралю","тьмою","тюрею","тютею","тюхою","утерю","хатою","хитрю","хотою","четою",
    "шитою","шитью","штилю","штырю","излит","илист","жуиры","руины","дурьи","куньи",
    "курьи","ручьи","судьи","сучьи","зубищ","лущил","пущий","пущих","рубищ","ручищ",
    "сущий","сущих","чудищ","щукин","щучий","душки","лучши","пушил","пушки","рушил",
    "рушни","сушил","сушки","чушки","шубки","куниц","куриц","лужиц","цурки","бухни",
    "жухли","кухни","пухли","пухни","рухни","сухих","купив","сузив","дурий","куний",
    "курий","сучий","бузил","зубил","зубки","зубри","сузил","кузни","кузин","дужки",
    "жужжи","жуиру","журил","журчи","жучил","жучки","лужки","лужин","сучки","сучил",
    "сурки","сулил","сукин","судки","судил","пуски","куски","кулис","бусин","буями",
    "лущим","лущит","пущие","сущие","сущим","душим","душит","пушим","пушит","рушим",
    "рушит","сушим","сушит","тушил","тушим","тушит","шумим","шумит","шутил","шутим",
    "шутит","шутих","бучим","бучит","бучил","жучим","жучит","лучил","лучим","лучин",
    "лучит","мучил","мучим","мучит","пучил","пучим","пучит","сучим","сучит","чудил",
    "чудим","чудит","чужие","тупиц","сухие","сухим","тугих","фузии","фурии","фурий",
    "судим","судит","сузим","сузит","сулим","сулит","мумий","бузим","бузит","зудим",
    "зудит","тузим","тузит","журим","журит","тужил","тужим","тужит","тугие","губил",
    "губим","губит","гудим","гудит","тугим","гурии","купил","купим","купит","лупил",
    "лупим","лупит","рупии","тупил","тупим","тупит","бунин","дубин","иудин",
    "свету","толпы","мутил","певце","фангу","афишу","увяну","знали","черте","одета",
    "южане","былою","выдою","вымою","вырою","дыбою","дымлю","дырою","мышью","пырею",
    "рыбою","рыжею","сырею","сырою","хмырю","мощью","нищею","пищею","рощею","чащею",
    "щебню","щекою","щепою","мацою","рацею","уценю","цацею","цевью","целою","целью",
    "ценою","цепню","цепью","айвою","бойню","дошлю","нашею","нишею","ношею","пашею",
    "пешею","пошлю","чашею","шалею","швеею","шиною","шмелю","шорою","уверю","угоню",
    "угорю","угрою","удвою","уделю","уздою","умерю","умнею","урдою","успею","арчою",
    "мочою","начею","ночью","печью","речью","сечею","сечью","чагою","чалою","чачею",
    "чекою","черню","вехою","дохою","лихою","михею","рохлю","рюхою","хазою","халою",
    "хамью","харею","хвоею","хилою","хиною","хирею","хмелю","хомою","хорею","жабою",
    "жарою","женою","живою","жигою","жилою","жопою","лежню","ложью","межою","ражею",
    "рожею","рожью","сажею","арбою","бабою","базою","бедою","безлю","белою","бодрю",
    "боною","броню","гобою","забою","любою","побью","рабою","робею","робою","сбрею",
    "козью","колью","копью","корью","ленью","мазью","марью","медью","мелью","молью",
    "новью","пенью","песью","полью","попью","резью","репью","ролью","семью","сенью",
    "вагою","вгоню","гагою","герою","голою","горою","егерю","иглою","игрою","изгою",
    "иргою","кеглю","лигою","мглою","нагою","негою","ногою","пегою","ригою","сгорю",
    "визою","викою","виною","дивою","дикою","диною","зимою","икрою","инкою","килою",
    "кипою","лизою","липою","лирою","милею","милою","миною","нивою","пикою","пилою",
    "ризою","синею","сирою","сисею","смирю","ведою","водою","дамою","девою","декою",
    "дозою","домою","допою","дорою","дюзою","дюною","едкою","ездою","кодою","ледрю",
    "медлю","мздою","модою","надею","надою","подою","радею","родню","седею","седою",
    "содею","вазою","взвою","взмою","возню","завою","замою","заною","запою","зарою",
    "звеню","зверю","звоню","землю","золою","зоною","козою","лозою","мазню","позлю",
    "позою","резню","розою","вменю","емелю","емкою","камню","комою","ламою","ломлю",
    "малою","мамою","марою","меною","мерою","намою","немею","немою","помню","помою",
    "рамою","ремню","смелю","сменю","смерю","сморю","вселю","ксерю","лесою","насею",
    "песню","посею","расою","росою","сваею","сверю","своею","серею","серою","склею",
    "скрою","совею","солею","сонею","спорю","ссорю","вволю","вколю","воплю","елкою",
    "клоню","колою","коплю","кролю","лавою","лапою","левою","ловлю","палою","пленю",
    "полою","прелю","аркою","какою","карою","кокою","корню","корою","креню","некою",
    "покою","ракою","рекою","навею","напою","нарою","павою","панею","папою","парою",
    "раною","рапою","вепрю","вперю","пенею","пеною","попою","порею","порою","репою",
    "вверю","верою","норою","ревою","ровню","нюнею","веною","воною","новою","ноною",
    "болях","бурых","былых","голых","куцых","облых","полых","рябых","ушлых","худых",
    "бурях","гулях","долях","дулях","дядях","копях","кулях","молях","морях","обоях",
    "полях","пулях","пядях","ролях","рулях","убоях","углях","угрях","удоях","ульях",
    "хорях","оглох","подох","бэром","мэром","пэром","эльфу","эподу","эпоху","эргом",
    "эклог","борщу","будущ","грущу","могущ","морщу","обыщу","опущу","ощущу","помощ",
    "поощр","пощуп","прощу","прыщу","ропщу","угощу","упущу","хлыщу","хрущу","хрящу",
    "щукой","щупом","морщь","брылы","глыбы","гряды","дылды","мымры","мышцы","рыхлы",
    "рябый","рябым","былым","былям","дядям","белых","битых","босых","вздых","витых",
    "вялых","дутых","жатых","живых","жилых","задых","истых","косых","левых","литых",
    "лысых","любых","лютых","малых","милых","мытых","мятых","немых","новых","очных",
    "палых","пятых","рытых","самых","седых","серых","сивых","сизых","сирых","сотых",
    "сырых","сытых","талых","умных","утлых","ушных","хилых","целых","чалых","шалых",
    "шитых","энных","ваших","вещих","вящих","двоих","диких","дюжих","евших","едких",
    "емких","затих","ихних","келих","леших","лихих","лосих","льших","нагих","наших",
    "неких","нищих","обеих","обоих","общих","одних","ослих","отчих","паних","пегих",
    "пеших","ражих","рыжих","рысих","самих","своих","синих","сяких","таких","твоих",
    "тихих","тощих","троих","узких","алыми","злыми","изыми","иными","оными","коими",
    "моими","озими","прими","сними","чьими","экими","этими","баями","боями","геями",
    "днями","елями","киями","леями","осями","паями","пнями","реями","роями","тлями",
    "туями","феями","чаями","шеями","азами","арами","асами","ахами","вшами","ежами",
    "ерами","ивами","лбами","мхами","одами","озами","омами","осами","охами","очами",
    "псами","рвами","ржами","ртами","снами","срами","стами","ужами","узами","умами",
    "усами","ушами","швами","глядя","дряхл",
    "омеле","раска","втузе","указа","пуаза","приза","мумий","мужич","луиза","пуаза",
    "втуза","абаза","тушин",
    "падши","уводя","читая","ейная","лягни","вверг","пилку","броде","сабле","попов",
    "плюнь","желая","фермы","нашед","турах","грече","алекс","цедру","блюзы","блюмы",
    "бюсты","вьюны","гюрзы","дюймы","каюты","клювы","клюзы","людны","мюоны","слюды",
    "слюны","союзы","сюиты","трюмы","уютны","шлюпы","эпюры","мэтры","эгиды","эдемы",
    "эмиры","эпузы","эсеры","этапы","этилы","эфиры","мощны","тщеты","хищны","щедры",
    "щипцы","альмы","альпы","альты","альфы","бьефы","ильмы","пьяны","рьяны","байты",
    "бойцы","войны","дайры","займы","зайцы","каймы","кайры","кайты","лайбы","мойвы",
    "поймы","рейды","сайды","сайры","сайты","сейфы","таймы","тайны","файлы","фойны",
    "шайбы","баяны","бояры","буяны","взяты","вмяты","дояры","дятлы","кляпы","наяды",
    "паяны","паяцы","прямы","рясны","святы","сеяны","смяты","сняты","тяблы","тяжбы",
    "умяты","шляпы","якобы","алчбы","алчны","вечны","зычны","личны","мачты","мечты",
    "печны","почвы","почты","пчелы","сочны","счеты","точны","учебы","учены","чадры",
    "чакры","чалмы","чарты","часты","челны","чепцы","червы","черны","черты","четны",
    "чехлы","чинны","чисты","члены","чреды","чтецы","чтицы","чтобы","чудны","чужды",
    "адуев","белев","булев","велев","вздев","гуцев","дешев","душев","задев","змеев",
    "зятев","спаев","ульев","успев","лысый","лысым","лысые","евсее","весях","высях",
    "гусях","весям","высям","гусям","гусем","пасем","васей","весей","высей","гусей",
    "евсей","засей","лысей","басах","бесах","бусах","весах","кусах","лесах","мысах",
    "часах","басам","бесам","бусам","весам","кусам","лесам","мысам","пасам","часам",
    "аисты","басмы","весны","весты","вислы","густы","десны","жесты","зисты","касты",
    "кисты","кусты","ласты","мосты","пасты","писцы","послы","посты","росты","сосны",
    "тесны","тосты","цисты","шесты","масла","массу","мясца","мясцу",
    "слюде","санов","замыл","учуем","поело","капай","отвра","хорам","ослий","пытае",
    "акыны","иконы","казны","каины","канвы","канты","керны","кинзы","клены","клоны",
    "кнопы","кнуты","ковны","концы","копны","краны","кроны","скины","тканы","камня",
    "клоня","кляня","князя","корня","креня","ксеня","некая","нукая","окуня","клюнь",
    "окинь","скинь","некие","канев","конев","конях","некое","коням","некий","неким",
    "екнем","икнем","канем","кинем","конем","некем","никем","ткнем","инков","конов",
    "коней","инкой","некой","никой","инках","конах","окнах","окнам","инкам","конам",
    "коном","неком","ником","окном","удели","ненцы","лидия","цевки","путям","ночам",
    "копре","потов","жеоду","выдам","божбы","важны","вежды","вжаты","джемы","джины",
    "джипы","жабры","жадны","жажды","жанры","жатвы","жбаны","жгуты","жезлы","желты",
    "жеоды","живцы","жирны","жлобы","жмоты","жнецы","жницы","жрецы","жрицы","ижицы",
    "ижоры","кажды","лжецы","лживы","нежны","нужды","пижмы","сжаты","ужины","гонко",
    "гонку","гонок","донку","донок","клону","кнопу","кнуто","ковну","кокну","конку",
    "концо","концу","кончу","коняг","копну","купно","кучно","окуну",
    "дайте","нудны","меряя","фигни","спала","теней","веску","салом","окоте","кроте",
    "вдуть","гнуть","обуть","пнуть","сдуть","снуть","вахты","вихры","вохлы","вохры",
    "входы","захны","акулы","клары","лавры","ладны","лампы","абазы","лжеца","липла",
    
    "синиц","мимоз","вышел","томит","бурля","земны","парой","эпике","ведет","вношу",
    "ажуру","баржу","вахту","ганне","двоим","екать","жерла","зажил","излил","капал",
    "латке","мазни","намну","обоим","папку","ранце","саням","тасуя","уводи","феней",
    "хером","цинге","чепца","шатре","щипят","этюда","ялбот","айвой","ойкай","ойкая",
    "уйдем","уйдет","уйдеш","уйдут","уймем","уймет","эйкем","дзоты","зонты","цветы",
    "центы","вдеты","диеты","сдуты","агаты","гнуты","гроты","гурты","шихты","шахты",
    "хваты","пахты","пихты","тахты","бдишь","боишь","длишь","доишь","ежишь","злишь",
    "зришь","мнишь","мчишь","поишь","роишь","спишь","таишь","удишь","учишь","чтишь",
    "алеть","бдеть","вдеть","греть","злеть","зреть","иметь","млеть","одеть","преть",
    "рдеть","спеть","тлеть","уметь","сметь","баять","боять","ваять","веять","взять",
    "вмять","внять","зиять","лаять","маять","опять","паять","реять","сеять","сиять",
    "смять","снять","таять","умять","унять","хаять","чаять","брить","вбить","ввить",
    "впить","вшить","гнить","доить","итить","мнить","мшить","обить","овить","ожить",
    "опить","поить","роить","сбить","свить","сжить","слить","спить","сшить","таить",
    "тлить","тмить","убить","увить","удить","узить","учить","ушить","хаить","чтить",
    "акать","ахать","брать","вжать","врать","гнать","драть","едать","ехать","ждать",
    "жрать","звать","икать","лгать","лчать","мчать","окать","орать","охать","рвать",
    "ржать","сдать","сжать","слать","спать","ткать","трать","ужать","укать","ухать",
    "учать","хвать","чхать","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
]
