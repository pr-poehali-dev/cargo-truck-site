
export interface TruckType {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  category: string;
  description: string;
  isNew?: boolean;
  isDiscount?: boolean;
  discountPercent?: number;
  year: number;
  mileage: number;
  engine: string;
  power: string;
  transmission: string;
  wheelFormula: string;
  cabinType: string;
  loadCapacity: string;
  axles: number;
  color: string;
  condition: string;
  inStock: boolean;
  tags: string[];
  features: string[];
}

export const trucks: TruckType[] = [
  {
    id: "kamaz-6520",
    title: "КАМАЗ 6520 Самосвал",
    image: "https://images.unsplash.com/photo-1631677594081-755431fb783f?q=80&w=1000",
    price: 5950000,
    category: "Самосвалы",
    description: "КАМАЗ 6520 — самосвал повышенной проходимости, предназначенный для перевозки различных сыпучих грузов. Отличается высокой грузоподъемностью, мощным двигателем и надежной конструкцией.",
    isNew: true,
    year: 2023,
    mileage: 0,
    engine: "Дизель, 400 л.с.",
    power: "400 л.с.",
    transmission: "Механическая, 16-ступенчатая",
    wheelFormula: "6x4",
    cabinType: "Цельнометаллическая, 2-местная",
    loadCapacity: "20 тонн",
    axles: 3,
    color: "Оранжевый",
    condition: "Новый",
    inStock: true,
    tags: ["самосвал", "камаз", "грузовик", "строительная техника"],
    features: [
      "Кондиционер",
      "Предпусковой подогреватель",
      "Автономный отопитель",
      "Электростеклоподъемники",
      "Регулировка руля",
      "Тахограф",
      "Круиз-контроль"
    ]
  },
  {
    id: "man-tgx",
    title: "MAN TGX 18.480 4X2 BLS",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000",
    price: 12750000,
    oldPrice: 13500000,
    category: "Тягачи",
    description: "MAN TGX 18.480 — седельный тягач премиум-класса с экономичным двигателем, просторной кабиной и передовыми системами безопасности. Идеален для дальних грузоперевозок.",
    isDiscount: true,
    discountPercent: 6,
    year: 2022,
    mileage: 120000,
    engine: "Дизель, 480 л.с.",
    power: "480 л.с.",
    transmission: "Автоматизированная, 12-ступенчатая",
    wheelFormula: "4x2",
    cabinType: "XLX, высокая, 2-местная",
    loadCapacity: "44 тонны",
    axles: 2,
    color: "Красный",
    condition: "С пробегом",
    inStock: true,
    tags: ["тягач", "man", "седельный тягач", "дальнобойщик"],
    features: [
      "Климат-контроль",
      "Холодильник",
      "Автономный отопитель",
      "Круиз-контроль",
      "Навигационная система",
      "Подогрев сидений",
      "Электростеклоподъемники",
      "Тахограф",
      "Парктроник"
    ]
  },
  {
    id: "volvo-fh16",
    title: "Volvo FH16 750 6x4",
    image: "https://images.unsplash.com/photo-1592805144716-feeccccef5ac?q=80&w=1000",
    price: 15900000,
    category: "Тягачи",
    description: "Volvo FH16 750 — мощный седельный тягач с самым мощным в линейке двигателем, предназначенный для перевозки сверхтяжелых грузов. Сочетает в себе исключительную мощность, комфорт и безопасность.",
    isNew: true,
    year: 2024,
    mileage: 0,
    engine: "Дизель, 750 л.с.",
    power: "750 л.с.",
    transmission: "Автоматизированная, I-Shift, 12-ступенчатая",
    wheelFormula: "6x4",
    cabinType: "Globetrotter XL, 2-местная",
    loadCapacity: "60 тонн",
    axles: 3,
    color: "Серебристый",
    condition: "Новый",
    inStock: true,
    tags: ["тягач", "volvo", "седельный тягач", "тяжелые перевозки"],
    features: [
      "Климат-контроль",
      "Холодильник",
      "Автономный отопитель",
      "Круиз-контроль адаптивный",
      "Навигационная система",
      "Подогрев сидений",
      "Электростеклоподъемники",
      "Тахограф",
      "Парктроник",
      "Система контроля полосы движения",
      "Система помощи при экстренном торможении"
    ]
  },
  {
    id: "scania-r500",
    title: "Scania R500 6x4",
    image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1000",
    price: 14500000,
    oldPrice: 15200000,
    category: "Тягачи",
    description: "Scania R500 — надежный седельный тягач с мощным двигателем V8, обеспечивающим высокую производительность. Отличается превосходной экономичностью, комфортом и безопасностью.",
    isDiscount: true,
    discountPercent: 5,
    year: 2022,
    mileage: 85000,
    engine: "Дизель, V8, 500 л.с.",
    power: "500 л.с.",
    transmission: "Автоматизированная Opticruise, 12+2-ступенчатая",
    wheelFormula: "6x4",
    cabinType: "Highline, 2-местная с высокой крышей",
    loadCapacity: "56 тонн",
    axles: 3,
    color: "Белый",
    condition: "С пробегом",
    inStock: true,
    tags: ["тягач", "scania", "седельный тягач", "v8"],
    features: [
      "Климат-контроль",
      "Холодильник",
      "Автономный отопитель",
      "Круиз-контроль",
      "Навигационная система",
      "Подогрев сидений",
      "Электростеклоподъемники",
      "Тахограф",
      "Парктроник",
      "Система контроля давления в шинах"
    ]
  },
  {
    id: "isuzu-npr",
    title: "Isuzu NPR 75L фургон",
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1000",
    price: 4250000,
    category: "Фургоны",
    description: "Isuzu NPR 75L — среднетоннажный грузовой автомобиль с изотермическим фургоном. Идеально подходит для городских и пригородных перевозок благодаря компактным размерам и экономичному двигателю.",
    year: 2023,
    mileage: 15000,
    engine: "Дизель, 155 л.с.",
    power: "155 л.с.",
    transmission: "Механическая, 6-ступенчатая",
    wheelFormula: "4x2",
    cabinType: "Однорядная, 3-местная",
    loadCapacity: "4.5 тонны",
    axles: 2,
    color: "Белый",
    condition: "С пробегом",
    inStock: true,
    tags: ["фургон", "isuzu", "среднетоннажный", "городские перевозки"],
    features: [
      "Кондиционер",
      "Электростеклоподъемники",
      "Центральный замок",
      "Регулировка руля",
      "Тахограф",
      "Аудиосистема"
    ]
  },
  {
    id: "gaz-next",
    title: "ГАЗ Next C41R33 бортовой",
    image: "https://images.unsplash.com/photo-1566933293069-5625f88e3f5a?q=80&w=1000",
    price: 2790000,
    category: "Бортовые",
    description: "ГАЗ Next C41R33 — легкий коммерческий автомобиль с бортовой платформой. Отличается высокой маневренностью, экономичностью и доступной ценой. Идеален для малого бизнеса и городских перевозок.",
    isNew: true,
    year: 2023,
    mileage: 0,
    engine: "Дизель, Cummins, 150 л.с.",
    power: "150 л.с.",
    transmission: "Механическая, 5-ступенчатая",
    wheelFormula: "4x2",
    cabinType: "Однорядная, 3-местная",
    loadCapacity: "1.5 тонны",
    axles: 2,
    color: "Синий",
    condition: "Новый",
    inStock: true,
    tags: ["бортовой", "газель", "газ", "малотоннажный"],
    features: [
      "Кондиционер",
      "Электростеклоподъемники",
      "Центральный замок",
      "Регулировка руля",
      "Аудиосистема",
      "Подогрев зеркал"
    ]
  },
  {
    id: "mercedes-actros",
    title: "Mercedes-Benz Actros 1851 LS",
    image: "https://images.unsplash.com/photo-1505815695871-2cd8a07ddd75?q=80&w=1000",
    price: 18500000,
    category: "Тягачи",
    description: "Mercedes-Benz Actros 1851 LS — премиальный седельный тягач с инновационными системами безопасности и комфорта. Оснащен экономичным двигателем, передовой электроникой и просторной кабиной.",
    isNew: true,
    year: 2024,
    mileage: 0,
    engine: "Дизель, 510 л.с.",
    power: "510 л.с.",
    transmission: "Автоматизированная, PowerShift 3, 12-ступенчатая",
    wheelFormula: "4x2",
    cabinType: "GigaSpace, 2-местная",
    loadCapacity: "44 тонны",
    axles: 2,
    color: "Черный металлик",
    condition: "Новый",
    inStock: false,
    tags: ["тягач", "mercedes", "седельный тягач", "премиум"],
    features: [
      "Климат-контроль",
      "Холодильник",
      "Автономный отопитель",
      "Круиз-контроль адаптивный",
      "Навигационная система",
      "Подогрев сидений",
      "Электростеклоподъемники",
      "Тахограф",
      "Парктроник",
      "Система контроля полосы движения",
      "Система предотвращения столкновений",
      "Камеры 360 градусов",
      "Система ночного видения"
    ]
  },
  {
    id: "daf-xf",
    title: "DAF XF 480 FT",
    image: "https://images.unsplash.com/photo-1602170284554-be14b9e35aac?q=80&w=1000",
    price: 13200000,
    oldPrice: 14000000,
    category: "Тягачи",
    description: "DAF XF 480 FT — современный седельный тягач с экономичным двигателем PACCAR MX-13. Отличается высоким уровнем комфорта, надежностью и низким расходом топлива.",
    isDiscount: true,
    discountPercent: 6,
    year: 2022,
    mileage: 95000,
    engine: "Дизель, PACCAR MX-13, 480 л.с.",
    power: "480 л.с.",
    transmission: "Автоматизированная, TraXon, 12-ступенчатая",
    wheelFormula: "4x2",
    cabinType: "Super Space Cab, 2-местная",
    loadCapacity: "44 тонны",
    axles: 2,
    color: "Белый",
    condition: "С пробегом",
    inStock: true,
    tags: ["тягач", "daf", "седельный тягач", "экономичный"],
    features: [
      "Климат-контроль",
      "Холодильник",
      "Автономный отопитель",
      "Круиз-контроль",
      "Навигационная система",
      "Подогрев сидений",
      "Электростеклоподъемники",
      "Тахограф",
      "Парктроник"
    ]
  }
];

export const categories = [
  {
    id: "tiagachi",
    name: "Тягачи",
    count: 5
  },
  {
    id: "samosvaly",
    name: "Самосвалы", 
    count: 1
  },
  {
    id: "furgony", 
    name: "Фургоны",
    count: 1
  },
  {
    id: "bortovye",
    name: "Бортовые",
    count: 1
  },
  {
    id: "spetstehnika",
    name: "Спецтехника",
    count: 0
  },
  {
    id: "pritsepy",
    name: "Прицепы",
    count: 0
  }
];

export const brands = [
  { id: "kamaz", name: "КАМАЗ", count: 1 },
  { id: "man", name: "MAN", count: 1 },
  { id: "volvo", name: "Volvo", count: 1 },
  { id: "scania", name: "Scania", count: 1 },
  { id: "isuzu", name: "Isuzu", count: 1 },
  { id: "gaz", name: "ГАЗ", count: 1 },
  { id: "mercedes", name: "Mercedes-Benz", count: 1 },
  { id: "daf", name: "DAF", count: 1 }
];
