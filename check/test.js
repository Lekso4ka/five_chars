const strangeWords = [
    "агари","агато","аггел","агути","азама","азида","азола","акаде","аккур","актри","акына","аллен","аллил","амали","аможе","амоса","андри","анекд",
    "абвер","авдот","авель","авлос","авось","агарь","агата","аглая","адель","адлер","адлец","адрон","азхар","акбар","акмит","акрид","акром","аксен","алкал","алкан","алкен","алкид","алунд","амаль","амбал","амида","амила","амина","аминь","аммос","анбар","антип","антон","анфил","апачи","арина","арифм","арома","архей","асмус","архип","ахилл","алена","анфим","аплит","апфан","аракс","арефа","ардал","арист","арман","артил","артис","архея","ассиг","атмос","аттес","аурат",
    "бурум","бадаб","бадей","багги","баден","балал","банит","баркл","барна","барск","барчо","баста","батал","батек","батик","батун","бахус","бебут","безна","безоб","безос","безот","белын","бемит","беник","бивня","болва","браво","бимса","брама","божка","божой","бачка","бочаг","богоз","барха","богос","брига","бойка","борой","боной","буряк","берус","билас","брест","барок","бинок","бокан","боток","бунда","бурат","бутен","бутит","билон","бленд","бобин","бобон","борон","бордо","биота","барын","брибр","бетиз",
    "выдум","высов","выгов","впрок","вскок","вымыв","винов","виват","вычит","вебер","варьк","вдоль","впряг","вздув","вздум","вувер","вукол","вонам","вопия","вопки","вправ","вскип","высып","вывед","выдер","вызыв","выказ","вырин","выска","вытол","вздер","видло","водол","везир","верес","верна","верол","враля","ветел","витин","витик","вакан","веска","возик","воной","вклеп","вперь","выраз","вырва",
    "галет","гораз","готув","гомец","гульд","глифа","галич","гапка","гопля","ганза","генез","галса","гисар","гуска","герва","говно","гувер","галит","гетер","гетит","глета","гонта","гурта","гария","голяд","гаман","гамба","горем","гумен","глада","годка","гонад","гурда","гарун","губер","гулак","гунна","грека","гариб","граба","грана","генер","горно","гогол",
    "дорыв","догов","дурье","дебай","дафан","дацит","диола","дуоль","дроня","диско","долом","джига","демка",
    "евген","евина","егерс","егоро","едина","единс","едока","ежедн","езопа","елись","ендит","еноха","епанч","ерала","ермак","еспер",
    "ерань",
    "жалко","жарке","жарки","жасно","жаток","желае","желтк","желто","желуд","женин","женни","женок","женск","жесто","живог","живос","жидка","жидок","жилок","жинка","жинко","жинок","жирка","жирко","жирна","жнеек","жодин","жомин","жомом","жохом","жуана","жубер","журна","жутка","жухла",
    "жакоб","живоп","жухло",
    "загов","загад","завес","зурка","земск",
    "истой","иврит","игран","илеус","интим","иодат","имидж","интер","ижора","истом","испол","иррна","иппол","индан","изрез","изред","измер","излер","изгон","изгол","извол","извес",
    "клира","комех","купка","карем","кучум","келия","ктырь","карль","крыль","калит","кварт","кутня","калеб","кельн","крыга","колли","кадил","кобол",
    "линях","лихой","лабух","лобыз","лейбл","лейба","лихор","луцка","лубка","лимба","лишар","лешка","лукум","ларго","ляссе","лазка","лучка","лутка","личик",
    "мгнов","манов","млина","мильх","миазм","мифим","мозем","манат","медяк","моцио","мокко","молье","макси",
    "нагой","назыв","напив","насев","нашив","несть","номов","носов","носух","неизм","несом","нехай","нагай","надум","нутка","нечег","несун","нафта",
    "отшив","обмяв","обнов","обдум","обнар","орчан","огарь","однех","остях","отрях","отмыв","отыск","осмат","облой","охань","охрим",
    "прояв","почув","перов","погов","пораж","пораз","полов","палов","пацие","побыв","посов","позов","перех","покус","прямо","полун","полук","парль","паниб","переб","поруч",
    "рахат","рокер","родео","регги","ралли","расса","рафик","ревма","ревиз",
    "строг","стамб","секун",
    "триех","тезах","тугой","татах","татях","талях","талие","тычка","тезам","татем","трико","тенге",
    "уплыв","услов","уазик","удило","унион","уверт","узень","узвар","устар","уреус","угада",
    "филия","филея","фотом","фонем","фонар","феном","фуфло","фения","фотия","фрунт","фигня","фальс","фотка","фатом","фолио","федра","фатер",
    "хозяй","худой","хиппи","хобби","хинди","хыбыз","хафиз","херуг","хозар","хранц","хирей","хайла","христ","хрест","хилич","харчо","хобар","хмура","харак","хинон","ханом","хапан","хором","хмара","холин",
    "цапок","царап","цвето","цевок","цежен","цезур","целко","цемен","ценза","ценоз","ценур","церко","цетан","цилин","цимол","цинич",
    "чумка","чувак","четка","чакра","чтоба","чичас","чичаг","често","чемто",
    "шануй","шлифа","шевро","швырк","шварк","шассе","шопот","шахид","шеина","шверт","шушва","шевер","шкива",
]
