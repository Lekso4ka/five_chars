const isWords = [
    "аудио","базис","ватин","парик","шарик","диета","укора","засов","пафос","омела","опера","опека","аудио","щучка","шугай","хурал","лютик","ритор","ролик","помол","ловля","улица","скука","сушка","бирка","шурин","церий","амвон","юдоль","кроль","телок","талер", "маори","бабье","пакля","насып","пасха","балок","скало","юкола","золка","власы","элеат","шабли","хайло","ракля","клупп","эллин","хлябь","хлюст","хлест","фенол","шелеп","петел","пелит","лепра","йодль","юннат","эрзац","рябая","макар","йомен","замер","йодид","вывод","юферс","связа","юница","юмизм","съезд","алеут","торец","удэге","шуйца","щурок","фузия","отъем","укрюк","эпика","кайла","главк","объем","штосс","лычка","сурик","колит","апноэ","велит","левит","лития","динго","карго","марго","агами","кешью","фуэте","имаго","русин","гусит","кумин","юзист","авеню","ощупь","саами","гурия","егоза","юнкор","судия","блуза","курия","юниор","высев","ессей","космы","юнкер","скань","ножны","фижмы","лукно","круть","юноша","лохмы","ланды","ойрот","ханты","знать","копие","пиита","баснь","уйгур","патлы","мохны","вещее","орала","цевье","ястык","опала","айсор","айрол","такое","хамит","ятвяг","сенцы","айран","донце","корма","кучка","ленок","аймак","ярыга","бармы","силач","шхуна","иваси","тавро","хаджи","щелок","помин","клика","пяток","рядно","рябой","ятовь",
    "дядек","ясырь","панты","пясть","яруга","гумми","яхонт","согды","ферми","гужик","былое","яство","акажу","жисть","копал","косая","ягель","пушту","дунит","рогоз","яичко","ничья","чалый","вспых","флешь","яспис","банту","сотый","мумие","веред","лагун","ярица","нанду","малый","чувал","ямища","офеня","битый","строп","драйв","аллах","ямина","стынь","мотка","мегом","авизо","ясень","одежа","шимми","палуб","ябеда","гнусь","позем","шарап","гитов","оплыв","филей","шлица","смрад","кудри","хокку","устав","разор","агора","флейт","калым","излив","общее","дрань","емеля","дщерь","сумах","эспри","биток","цукат","ущерб","отбив","сычуг","тулья","аншеф","тщета","хедив","извив","мысок","вязок","сущее","понюх","морцо","гонит","папах","рэлей","цикля","эссен","эрбий","аэрон","полом","щекот","ишиас","мышей","аэроб","навой","силка","зумпф","нивух","рэкет","окоем","целое","мэрия","чилим","ифрит","фатюй","весок","липид","милое","сфера","цвель","дебрь","чужое","кухва","эфиоп","чечет","залец","рондо","валер","кокни","сосуд","сорго","плинт","пещер","офорт","слань","штыка","трюмо","паяло","офсет","ржавь","гибка","емшан","суаре","афиша","полой","синяя","отвоз","ильма","афера","скудо","гугня","бенди","пешая","сильф","корчь","орхит","тутти",
    "макак","сизиф","верже","нетяг","защип","кечуа","параф","налой","масаи","регби","фарси","кенаф","тугай","чалая","гаучо","сивая","аканф","стель","сбора","пегаш","рахит","орфей","шельф","брика","повод","муаре","патио","дикая","чирик","рифей","кроки","халиф","мятье","коати","пеший","дунст","калиф","пепси","бювар","сучье","траст","шериф","бонмо","репье","ломок","панье","кофий","медея","через","створ","парня","шлейф","мотто","дурро","бреве","дерби","штраф","могол","койне","хоана","мосье","фуран","аграф","шизик","пенни","месье","тариф","наход","пучка","галла","манси","кащей","отлог","супер","отпал","вымол","сцинк","фарад","турне","кореш","мохна","ацтек","набла","шасла","гофре","фетва","сцена","клико","пасма","пирке","илька","мурка","релиз","штейн","альфа","рафид","ольха","чечен","трасс","пинка","кроше","вчера","фелон","тигра","манто","мейоз","учхоз","ливан","квадр","патуа","ризка","очкур","тимус","кодон","кашне","граве","очник","мазар","порто","мамбо","нивка","очерк","плаке","дедок","перун","оскар","ничто","учеба","маран","диана","кумол","мурин","перло","экзот","трипс","писка",
    "черен","эолит","попас","авлос","терма",
    "лерка","эпонж","стило","колик","калла",
    "этвеш","выпот","автол","эсдек","эоцен",
    "зарин","каско","эвенк","сирен","ленто",
    "балык","валет","шалун","отмер","эозин","пикан","манко","ландо",
    "серсо","эпюра","лидар","кетен","сидор",
    "конто","эммер","невер","никто","вруша",
    "дилер","этнос","ситро","орион","сарос",
    "калан","эгрет","тропа","динод","эркер","энзим",
    "эдикт","шассе","фуфло","хмара","зайка","ганза",
    "эгида","фрунт","облой","ляссе","шевро",
    "","","","","","","",
]


