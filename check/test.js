const strangeWords = [
    "агари","агато","аггел","агути","азама","азида","азола","акаде","аккур","актри","акына","аллен","аллил","амали","аможе","амоса","андри","анекд",
    "абвер","авдот","авель","авист","авлос","авось","агарь","агата","агаша","аглая","адель","адлер","адлец","адрон","азхар","акбар","акмит","акрид","акром","аксен","алкал","алкан","алкен","алкид","алунд","альба","амаль","амбал","амида","амила","амина","аминь","аммос","анбар","антип","антон","анфил","апачи","арина","арифм","арома","архей","асмус","архип","ахилл","алена","алеша","анфим","аплит","апфан","аракс","арефа","ардал","арист","арман","артил","артис","артур","архея","ассиг","атмос","аттес","аурат",
    "бурум","бадаб","бадей","багги","баден","балал","банит","баркл","барна","барск","барчо","баста","батал","батек","батик","батун","бахус","башта","бебут","безна","безоб","безос","безот","бекеш","белын","бемит","беник","бивня","болва","браво","бурша","бушка","бимса","брама","божка","божой","бачка","бочаг","богоз","барха","богос","брига","бойка","борой","боной","буряк","берус","билас","брест","барок","бинок","бокан","боток","бунда","бурат","бутен","бутит","билон","бленд","бобин","бобон","борон","бордо","биота",
    "выдум","высов","выгов","впрок","вскок","вымыв","вчера","винов","виват","вычит","вебер","варьк","вдоль","впряг","вздув","вздум","вступ","вувер","вукол","вонам","вышин","вопия","вопки","вправ","вскип","высып","вывед","выдер","вызыв","выказ","вырин","выска","вытас","вытол","вздер","видло","водол","везир","верес","верна","верол","враля","ветел","витин","витик","вакан","веска","возик","воной","вклеп","вышиб","вперь",
    "галет","гораз","готув","гомец","гульд","глифа","галич","гапка","гопля","ганза","генез","галса","гисар","гуска","герва","говно","гувер","галит","гетер","гетит","глета","гонта","гурта","гария","голяд","гаман","гамба","горем","гумен","глада","годка","гонад","гурда","гарун","губер","гулак","гунна","грека","гариб","граба","грана","генер","горно","гогол",
    "дорыв","догов","дурье","дебай","дафан","дацит","диола","душко","дуоль","дроня",
    "евген","евина","егерс","егоро","едина","единс","едока","ежедн","езопа","елись","ендит","еноха","епанч","ерала","ермак","еспер","естес",
    "ерань",
    "жалко","жарке","жарки","жасно","жаток","желае","желтк","желто","желуд","женин","женни","женок","женск","жесто","живог","живос","жидка","жидок","жилок","жильц","жинка","жинко","жинок","жирка","жирко","жирна","жмень","жнеек","жодин","жомин","жомом","жохом","жуана","жубер","журна","жутка","жухла",
    "жакоб","живоп","жухло",
    "зашив","загов","загад","завес",
    "истой","иврит","игран","илеус","интим","иодат","имидж","интер","ижора",
    "клира","комех","кошах","кличь","кореш","кащей","купка","карем","кучум","келия","ктырь","карль","керчь","крыль","калит","кварт",
    "линях","лихой","лабух","лобыз","лейбл","лейба","лихор","луцка","лубка","лимба","лишар","лешка","лукум","ларго","ляссе","лазка","лучка","лутка",
    "мгнов","манов","млина","мильх","миазм","мифим","мозем","манат",
    "нагой","назыв","напив","насев","нашив","несть","номов","носов","носух","неизм","несом","нехай","нагай",
    "отшив","обмяв","обнов","обдум","обнар","орчан","огарь","однех","остях","отрях","отмыв","отыск","осмат","облой","охань",
    "прояв","почув","перов","погов","пораж","пораз","полов","палов","пацие","побыв","посов","позов","перех","покус","прямо","полун","полук","парль",
    "роган","ронам","ратях","рахат","рокер","родео","регги",
    "триех","тезах","тугой","татах","татях","талях","талие","тычка","тезам","татем",
    "уплыв","услов","уазик","удило","унион","уверт","узень",
    "филия","филея","фотом","фонем","фонар","феном","фуфло","фения","фотия","фрунт","фальш","фигня","фальс","фотка",
    "хлище","хозяй","худой","хиппи","хобби","хинди","хыбыз","хафиз","херуг","","хозар","хранц","хирей","хайла","христ","хрест","холос","хилич","харчо","хобар","хмура","харак","хинон","ханом","хапан","хором",
    "цапок","царап","цвето","цевок","цежен","цезур","целко","цемен","ценза","ценоз","ценур","церко","цетан","цилин","цимол","цинич",
    "чепух","чумка",
    "шануй","шлифа","шевро","швырк","шварк","шасла","шассе","шасть","шопот","шахид","шульц","штыль","штоль","шеина","шверт",
]
