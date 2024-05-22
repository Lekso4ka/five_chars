const bedWords = [
    "сопла","титор","ланок","лечен","стесн","ласта","титек","трама","нервн","палис",
    "чатал","кусак","повоз","скачк","волко","довол","моава","досад","слада","ломак",
    "малос","самол","споко","спало","сопок","сопла","скопо","скола","салок","посла",
    "поско","поска","томен","токма",
    "линча","сонма","стема","ворва","ковна","навра","невда","свида","снова","сидра",
    "сарда","санда","нарда","надса","дарда","трина","титра","тирса","спира","слита",
    "скита","скипа","скина","сипла","прина","пиара","линка","крина","клита","торта",
    "торра","тетра","терта","терра","терна","остра","непра","натра","напра","толок",
    "толко","слито","слило","сипло","свило","попок","полко","покло","откло","ослиз",
    "овило","мстис","милос","листо","колко","колич","кисло","влило","висло","криза",
    "леера","клара","керна","тонка","соста","снопа","слота","слона","скота","попла",
    "полна","опана","окота","окопа","конпа","кокса","кокка","кнопа","клопа","клока",
    "слепа","плеса","плела","плана","плака","песка","пенса","пеана","пасла","ткана",
    "текла","танка","секса","секла","наска","ленка","клена","кекса","канта",
    "кашек","кишек","велич","чинно","чинен","четно","чесан","черно","точно","точен",
    "сочно","сонеч","сичас","овчин","нароч","лично","личек","леноч","кочек","вечно",
    "веноч","тлена","тлела","теста","тесна","тента","танта","тесла","стана","санта",
    "несла","наста","насла","наела","лесса","ланна","витой","готув","авдот",
    "занес","капел","колес","ласто","латок","лекто","леско","ослеп","палко","пасек",
    "пасло","песко","плакс","полек","посек","посел","сеток","слепо","спаек","спело",
    "стало","текло","тесок","тлело","теток","сплес","совес","следс","севас","плело",
    "папок","осело","опало","одело","клеек","касок","калек","както","доело","ввело",
    "влево","вовек","клоак","лекко","стено","сверн","споен","сисек","санок","синек",
    "солен","сален","стено","стано","сотен","сестр","снадо","сдано","санно","средс",
    "серед","сдоен","никло","несло","мерло","волен","волно","делан","делен","долин",
    "залез","зелен","кален","килек","колен","мален","мелен","милен","налез","нелеп",
    "озлен","пален","пелен","пилен","полен","толкн","нерал","натал","кител","невол",
    "летно","лестн",
    "силан","лесин","лесин","омерз","низен","нераз","немаз","невоз","невзр","назар",
    "навзр","навез","казен","знато","знако","зерен","звано","менно","мерен","мирен",
    "длинн","кликн","лидин","силин","васин","навин","накан","напак","напис","панас",
    "папин","камен","коман","пленн","лесен","лерок","ленно","ленин","леден","латан",
    
    "ванек","денно","косно","напек","невид","непос","новос","панок","пирен","серин",
    "варен","десен","ладно","наден","напер","невин","непро","одинн","папен","налип",
    "накип","лакир","венер","дидро","матер","нарас","некто","неспо","остан","пинен",
    "сидон","тесно","тетин","ткано","троен","тонен","тонок","тесин","тесен","тесан",
    "терто","сонин","синен",
    "верен","насто","опоен","перер","верно","доено","настр","неред","перес","винно",
    "донес","пресп","препр","перин","переп","перен","парен","непир","ненас","ненад",
    "недар","танто","покон","писак","оспин","одино","кован","дарен","карно","керак",
    "кларк","марко","нарос","натер","омрак","орато","впряг","вправ","враля","выраз",
    "вырва",
    "военн","келес","након","непон","пенно","двоен","конок","накоп","непор","пенок",
    "дворн","коноп","намок","нерон","писар","денис","корон","нанес","несно","поено",
    "дивен","ладон","нанко","несоо","понес","дивно","лекан","наотр","нетер","препо",
    "насек","наско","недор","неопр","никон","отнес","прино","навер","надор","навод",
    "нетто","татар",
    "остер","нарек","монас","манон","катас","камор","впрок",
    "вызыв","вымыв","хыбыз","царап","нагай","варьк","агарь","бачка","хранц","хапан",
    "гапка","вакан","выказ","назыв","акына","крыга","барын","харак","акбар","азхар",
    "барха",
    "молье","шопот","чемто","често","цвето","целко","цевок","хозяй","божой","остях",
    "строг","стамб","секун",
    "цинич","цимол","цилин","цетан","ценоз","цемен","цежен","пацие","пацие","адлец",
    "гомец","ценза","дацит","побыв","отмыв","белын","вывед","выгов","выдер","вырин",
    "высов","вытол","высып","лобыз","вычит","дорыв","чтоба","чичас","чичаг","хилич",
    "орчан","нечег","епанч","галич","вперь","перех","еспер","елись","несть","мильх",
    "ежедн","женин","женни","линях","фения","филея","филия","мифим","излер","ветел",
    "измер","неизм","ревиз","извес","витин","вздер","бокан","церко",
    "барчо","федра","фотом","переб","егерс","тугой","триех","почув","полун","полук",
    "шануй","цезур","херуг","уреус","поруч",
    "безоб","безос","безот","бемит","бетиз","богоз","богос","борой","брибр","вдоль",
    "моцио","гетер","хрест","брест","азама","азида","азола","безна","гораз","езопа",
    "загов","заран","земск","зурка","изгол","изред","охрим","агата","агато","аглая",
    "адель","адлер","акаде","аккур","акром","актри","алена","аллен","аллил","алунд",
    "амали","амаль","амида","амила","амина",
    "бленд","верол","вклеп","водол","гогол","голяд","гопля","желтк","желто","крыль",
    "оскол","покол","полов","лейбл","кобол","кельн","долом","боток","жесто","отрях",
    "отыск","нечто","ктырь","жомом","жохом","обмяв","прояв","посов","позов","прямо",
    "хором","вскок","швырк","шварк","кварт","ермак","карем","барск","аракс","жарке",
    "жарки","жирка","жирко","чирка","акрид","баркл","карль","клира","воной","вздум",
    "выдум","догов","видло","вздув","вонам","манов","мгнов","номов","ревма","болва",
    "вукол","палов","уплыв","услов","извол","авель","носов","насев","живос","выска",
    "вскип","веска","завес",
    "луцка","тычка","хайла","гульд","фальс","хафиз","глифа","арифм","татях","талях",
    "гария","буряк","зуава","калит","катол","лутка","вувер","вопки","вопия","витик",
    "винов","верна",
    "бадаб","балал","банит","барна","батал","батун","иппол","дроня","фотия","фонем",
    "феном","живоп","погов","перов","мозем","изрез","изгон","генез","евген","живог",
    "жодин","жомин",
    "общий","берус","кучум","худой","дуоль","дурье","комех","жухло","желуд","жубер",
    "лукум","бебут","бурум","губер","гувер","уверт","обдум","егоро","купка","кутня",
    "узень","единс",
    "апачи","парль","бивня","апфан","шушва","угада","галса","глада","жухла","лабух",
    "бадей","баден","бунда",
    "отщеп","охань","личик","чакон","татах","манат","дафан","кошон","лешка","лишар",
    "нашив","отшив","шеина","шлифа","шкива","шахид","цапок","антип","истой",
    "антон","гонта","испол","напив","анфил","келия","лучка","лейба","лихой","архип",
    "паниб","пораж","пораз",
    "архея","желае","аможе","генер","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""
]


