import { Planet } from "./types";

export const SCI = {
  I: {
    desc: "Терра-аналоги – пригодные для колонизации планеты.",
    subtypes: {
      a: "Полный аналог Земли",
      b: "Климатические отклонения",
      c: "Биосферные отклонения",
    },
  },
  II: {
    desc: "Условно пригодные – требуют особой адаптации.",
    subtypes: {
      a: "Атмосферная адаптация",
      b: "Климатически экстремальные",
      c: "Физические экстремальные",
      e: "Биохимически несовместимые",
    },
  },
  III: {
    desc: "Непригодные – отказ от колонизации (или выборочная колонизация) ввиду опасных условий.",
    subtypes: {
      a: "Опасная атмосфера",
      b: "Радиоактивные",
      c: "Геофизические непригодные",
      e: "Полевые непригодные",
    },
  },
  IV: {
    desc: "Потенциально терраформируемые",
  },
  V: {
    desc: "Экзопромышленные",
  },
  VI: { desc: "Аномальные" },
  VII: { desc: "Не представляющие интереса." },
} as const;

/**
 * Планеты
 * После создания планеты, её не обходимо присвоить необходимой звезде
 * Пример есть у Солнца
 *
 * Про поля:
 * * name - Название планеты
 * * subtitle - Краткое описание планеты. Находится под именем
 * * description - Полное описание планеты
 * * biggestCities - Крупнейшие города планеты. Будут перед описанием
 * * population - Население планеты. Если отсутствует, будет написано что планета необитаема
 * * sci - Классификация планеты, используется строка. Строго типизированно, не ошибётесь при заполнении (если установлены зависимости)
 * * image - Изображение планеты. Поместить изображение в public/planets, после чего вписать название файла в это поле. Рекомендуемый размер изображения - не более 2мб. Желательно что-бы изоюражение было в альбомной ориентации
 */
export const Planets: Record<string, Planet> = {
  //TSF
  Venus: {
    name: "Венера",
    subtitle: "Обитаемая планета земной группы",
    description:
      "Вторая планета от Солнца, обладает опасной плотной горячей атмосферой и активной сейсмической активностью. Из-за этих особенностей, основное население жилых, исследовательских и добывающих комплексов располагается на десятках флотирующих платформах верхних слоев атмосферы. Самая большая из них – Порт Веспера, обладает диаметром 30 км.",
    biggestCities: "Порт Веспера (столица)",
    population: "~74.100.000",
    sci: "II-a/c",
    image: "Venus.jpg",
  },
  Earth: {
    name: "Земля",
    subtitle: "Обитаемая планета земной группы",
    description:
      "Третья планета от Солнца, родная планета человечества и столица Транс-Солнечной Федерации. Пройдя через ядерные войны, столетия урбанистического ада, техногенно-экологической катастрофы и реновации экосистемы конца 24 века, сегодняшняя Земля представляет собой поистине райское место. С целью сохранить статус восстановленной колыбели человечества, Правительством ТСФ были продиктованы жесткие ограничения по контролю планетонаселения и миграционному трафику – свободный доступ к Земле имеют только уроженцы планеты, высшие государственные чины, дипломаты, сверхбогатые люди и, в некоторых случаях, туристы.",
    biggestCities:
      "Вашингтон (столица), Нью-Йорк, Дубай, Найроби, Лондон, Бангалор, Гонконг, Пекин, Ханой, Владивосток.",
    population: "5.334.234.900",
    sci: "I-a",
    image: "Earth.png",
  },
  Moon: {
    name: "Луна",
    subtitle: "Обитаемая планета, спутник Земли",
    description:
      "Всегда сопутствующая человечеству на небосводе Луна – естественный спутник Земли, проделала путь от первых космических аванпостов до густонаселенной планеты с крупными городскими агломерациями-куполами. Множественные рекреационные центр, фантастические Висячие Сады и архитектура серебряного барокко умело соседствуют с монументальными штаб-квартирами мегакорпораций, научными и исследовательскими городами. Селена – столица Луны, прославлена как популярное место для жительства среди богатых и знатных людей.",
    biggestCities: "Селена (столица), Нью-Вегас, Сент-Люменас, Меридиополис.",
    population: "~1.200.000.000",
    sci: "II-a",
    image: "Moon.jpg",
  },
  Mars: {
    name: "Марс",
    subtitle: "Обитаемая планета земной группы",
    description:
      "Четвертая планета от Солнца, в прошлом – безжизненная красная пустошь. Активно заселяемый с начала экспансии Солнечной системы и успешно терраформированный в середине 22го века, Марс является “Витриной Человечества” – одним из самых успешных и богатых центров коммерции, бизнеса и политики. Славится невероятно патриотичными жителями, развитой инфраструктурой, наукой и самым высоким уровнем жизни в ТСФ.  До событий Второй Межгалактической Войны на Марсе также располагалась штаб-квартира Нанотрейзен – мегаполис Адамарх-сити с прилегающими к нему агломерациями.",
    biggestCities: "Олимпус (столица), Вермилия, Мантакай, Адамарх-сити, Вильстаун, Нова Патрикс.",
    population: "~12.920.000.000",
    sci: "II-a/c",
    terraformed: true,
    image: "Mars.jpg",
  },
  Ganimed: {
    name: "Ганимед",
    subtitle: "Спутник Юпитера",
    description:
      "Один из спутников Юпитера, крупнейший спутник в Солнечной системе. После открытия форона, поверхность и орбита Ганимеда в считаные десятилетия обросла перерабатывающими комплексами и транспортными хабами, обеспечивающими первые поставки пурпурного золота. На сегодняшний день, ввиду быстрого истощения запасов плазмы в атмосфере Юпитера, все предприятия заброшены, а их место заняли судостроительные верфи корпораций.",
    sci: "V",
    image: "Ganimed.jpg",
  },
  Europe: {
    name: "Европа",
    subtitle: "Спутник Юпитера",
    description:
      "Небольшой спутник Юпитера, прославившийся обнаружением первой внеземной жизни в виде сложноорганизованной глубоководной флоры и фауны. На поверхности расположены множественные исследовательские и горнодобывающие комплексы, нацеленные на изучение (в прошлом) и разработку водяного океана Европы, сокрытого под толстым слоем льда.",
    sci: "V",
    image: "Europe.jpg",
  },
  Titan: {
    name: "Титан",
    subtitle: "Обитаемая планета, спутник Сатурна",
    description:
      "Один из спутников Сатурна, второй по величине спутник в Солнечной системе. Обладает сетью связанных между собой городов-куполов, расположенных по экватору. Крупнейший поставщик углеводородов в Солнечной системе, а также первый успешный проект “трудной” колонизации.",
    population: "~40.000.000",
    biggestCities: "Хельдштадт (столица)",
    sci: "III-a",
    image: "Titan.jpg",
  },
  Pluto: {
    name: "Плутон",
    subtitle: "Обитаемая планета",
    description:
      "Наиболее отдаленный планетоид Солнечной системы, в прошлом являлся основным перевалочным пунктом на пути к покорению других систем. К середине 25го века Плутон имеет репутацию пристанища бедняков, контрабандистов, пиратов и бандитов всех мастей. Старые трущобы, многими из которых являются заброшенные горнодобывающие комплексы и хранилища, стали домом для местных мусорщиков и оставшихся шахтеров, чьи предприятия еще не закрылись окончательно. Несмотря на это, орбита Плутона все еще изобилует небольшими ремонтными верфями и топливными портами, заботливо предлагающих свои услуги пролетающим путникам.",
    population: "~19.600.000",
    biggestCities: "Нью-Джеймстаун (столица), Гефеста.",
    sci: "III-a/e",
    image: "Pluto.jpg",
  },
  // MARK: KUSP
  Lasarys: {
    name: "Лазарь",
    subtitle: "Обитаемая планета",
    description:
      "Четвертая планета от Оплота, ранее известная как Аполло. Длительное время была известна как суровый и холодный горнодобывающий мир, результат промежуточно-успешного проекта терраформинга ТСФ. Во время событий, известных как Красный Январь 2524-го года, рабочие планеты первыми открыто заявили о независимости и начале формирования СССП. Сегодня, Лазарь (переименованный в честь первого председателя ВС СССП – Максима Сергеевича Лазаря) представляет собой высокоурбанизированный индустриальный мир, покрытый крупными очагами городских агломераций и предприятиями. Сердцем политической жизни Союза является комплекс Дворца Советов, расположившийся в столице планеты Гагарине, бывшем Аполло-сити.",
    population: "~8.953.338",
    biggestCities: "Гагарин (столица), Лазарьград, Кармин, Кольцов, Совград, Комплекс Городов Восток, Сибирск.",
    sci: "II-b/c",
    terraformed: true,
    image: "Lasarys.png",
  },
} as const;
