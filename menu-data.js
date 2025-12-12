/* --- DATA --- */
const initialMenu = [
    // --- Salads ---
    {
        id: 1, category: "Salads", price: 14.99, available: true, tempQty: 1,
        name: { en: "Caesar Salad", fr: "Salade César", fa: "سالاد سزار" },
        desc: { en: "Crisp romaine hearts, bacon, croutons.", fr: "Cœurs de romaine, bacon.", fa: "کاهوی تازه، بیکن، نان کروتون." },
        images: [
            "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&q=80",
                "public/img/foods/Caesar_salad.jpeg"
        ]
    },
    {
        id: 2, category: "Salads", price: 12.99, available: true, tempQty: 1,
        name: { en: "Garden Salad", fr: "Salade du Jardin", fa: "سالاد فصل (باغچه)" },
        desc: { en: "Fresh mix of greens, cucumber, tomato.", fr: "Mélange frais de légumes verts.", fa: "مخلوط سبزیجات تازه، خیار، گوجه گیلاسی." },
        images: [
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80","public/img/foods/salad.jpeg"
        ]
    },
    {
        id: 3, category: "Salads", price: 17.99, available: true, tempQty: 1,
        name: { en: "Chicken Caesar Salad", fr: "Salade César au Poulet", fa: "سالاد سزار با مرغ" },
        desc: { en: "Caesar salad topped with grilled chicken.", fr: "Salade César au poulet grillé.", fa: "سالاد سزار همراه با سینه مرغ گریل شده." },
        images: [
            "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?w=800&q=80",
            "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800&q=80"
        ]
    },
    {
        id: 4, category: "Salads", price: 13.99, available: true, tempQty: 1,
        name: { en: "Baby Spinach Salad", fr: "Salade de Jeunes Épinards", fa: "سالاد بیبی اسفناج" },
        desc: { en: "Spinach, nuts, and balsamic dressing.", fr: "Épinards, noix et vinaigrette balsamique.", fa: "اسفناج تازه، مغز گردو و سس بالزامیک." },
        images: [
            "https://images.unsplash.com/photo-1576021182211-9ea8dced3690?w=800&q=80",
            "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=800&q=80"
        ]
    },
    {
        id: 5, category: "Salads", price: 8.99, available: true, tempQty: 1,
        name: { en: "Coleslaw", fr: "Salade de Chou", fa: "سالاد کلم (کالسلو)" },
        desc: { en: "Creamy cabbage salad.", fr: "Salade de chou crémeuse.", fa: "سالاد کلم سفید و قرمز با سس مخصوص." },
        images: [
                "public/img/foods/Coleslaw.jpeg", 
                "public/img/foods/Coleslaw2.jpeg" 
            // "https://roda-bar.ca/img/foods/Coleslaw.jpeg",
            // "https://roda-bar.ca/img/foods/Coleslaw2.jpeg"
        ]
    },
    {
        id: 6, category: "Salads", price: 15.99, available: true, tempQty: 1,
        name: { en: "Chicken Salad", fr: "Salade de Poulet", fa: "سالاد مرغ" },
        desc: { en: "Grilled chicken on mixed greens.", fr: "Poulet grillé sur légumes verts.", fa: "تکه‌های مرغ گریل شده روی سبزیجات تازه." },
        images: [
            "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
            "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80"
        ]
    },

    // --- Appetizers ---
    {
        id: 7, category: "Appetizers", price: 8.99, available: true, tempQty: 1,
        name: { en: "Soup (Daily)", fr: "Soupe du Jour", fa: "سوپ روز" },
        desc: { en: "Chef's special soup.", fr: "Soupe spéciale du chef.", fa: "سوپ ویژه سرآشپز (معمولا جو یا سبزیجات)." },
        images: [
            "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
            "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800&q=80"
        ]
    },
    {
        id: 8, category: "Appetizers", price: 6.99, available: true, tempQty: 1,
        name: { en: "Garlic Bread", fr: "Pain à l'Ail", fa: "نان سیر" },
        desc: { en: "Toasted baguette with garlic butter.", fr: "Baguette grillée au beurre d'ail.", fa: "نان باگت برشته شده با کره و سیر." },
        images: [
                "public/img/foods/Garlic_bread.jpeg", 
                "public/img/foods/Garlic_bread2.jpeg" 
        ]
    },
    {
        id: 9, category: "Appetizers", price: 8.99, available: true, tempQty: 1,
        name: { en: "Cheese Bread", fr: "Pain au Fromage", fa: "نان پنیر" },
        desc: { en: "Garlic bread topped with melted cheese.", fr: "Pain à l'ail garni de fromage fondu.", fa: "نان سیر پوشیده شده با پنیر موزارلا ذوب شده." },
        images: [
                "public/img/foods/Cheese_bread.jpeg", 
                "public/img/foods/Cheese_bread2.jpeg" 
        ]
    },
    {
        id: 10, category: "Appetizers", price: 14.99, available: true, tempQty: 1,
        name: { en: "Nachos (Beef)", fr: "Nachos au Bœuf", fa: "ناچوز با گوشت" },
        desc: { en: "Tortilla chips with beef and cheese.", fr: "Croustilles tortilla au bœuf et fromage.", fa: "چیپس ذرت با گوشت چرخ‌کرده و پنیر فراوان." },
        images: [
            "public/img/foods/Nachos–beef.jpeg", 
            "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80"
        ]
    },
    {
        id: 11, category: "Appetizers", price: 14.99, available: true, tempQty: 1,
        name: { en: "Nachos (Chicken)", fr: "Nachos au Poulet", fa: "ناچوز با مرغ" },
        desc: { en: "Tortilla chips with chicken and cheese.", fr: "Croustilles tortilla au poulet et fromage.", fa: "چیپس ذرت با تکه‌های مرغ و پنیر." },
        images: [
            "public/img/foods/Nachos–chicken.jpeg",
            "public/img/foods/Nachos–chicken2.jpeg"
        ]
    },
    {
        id: 12, category: "Appetizers", price: 18.99, available: true, tempQty: 1,
        name: { en: "Hot Plate", fr: "Assiette Chaude", fa: "سینی داغ (میکس)" },
        desc: { en: "Mix of grilled appetizers.", fr: "Mélange d'entrées grillées.", fa: "ترکیبی از پیش‌غذاهای گرم و کبابی." },
        images: [
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
            "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"
        ]
    },
    {
        id: 13, category: "Appetizers", price: 10.99, available: true, tempQty: 1,
        name: { en: "Poutine", fr: "Poutine", fa: "پوتین (سیب‌زمینی و پنیر)" },
        desc: { en: "Fries with gravy and cheese curds.", fr: "Frites avec sauce et fromage en grains.", fa: "سیب‌زمینی سرخ‌کرده با سس گریوی و پنیر مخصوص." },
        images: [
            "https://images.unsplash.com/photo-1586805608485-add336722759?w=800&q=80",
            "https://images.unsplash.com/photo-1631452292723-5b8f6c31a613?w=800&q=80"
        ]
    },
    {
        id: 14, category: "Appetizers", price: 11.99, available: true, tempQty: 1,
        name: { en: "Italian Poutine", fr: "Poutine Italienne", fa: "پوتین ایتالیایی" },
        desc: { en: "Fries with marinara sauce.", fr: "Frites avec sauce marinara.", fa: "سیب‌زمینی با سس مارینارا (گوجه) و پنیر." },
        images: [
            "https://images.unsplash.com/photo-1598112521199-6fd7e53fa771?w=800&q=80",
            "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=800&q=80"
        ]
    },
    {
        id: 15, category: "Appetizers", price: 15.99, available: true, tempQty: 1,
        name: { en: "Calamari", fr: "Calamars", fa: "کالاماری" },
        desc: { en: "Fried squid rings.", fr: "Rondelles de calmar frites.", fa: "حلقه‌های ماهی مرکب سوخاری شده." },
        images: [
            "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800&q=80",
            "https://images.unsplash.com/photo-1626804475297-411dbe631245?w=800&q=80"
        ]
    },
    {
        id: 16, category: "Appetizers", price: 6.99, available: true, tempQty: 1,
        name: { en: "Fries", fr: "Frites", fa: "سیب‌زمینی سرخ‌کرده" },
        desc: { en: "Crispy golden fries.", fr: "Frites dorées et croustillantes.", fa: "سیب‌زمینی سرخ‌کرده ترد و طلایی." },
        images: [
            "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=80",
            "https://images.unsplash.com/photo-1573080496987-a199f8cd75ec?w=800&q=80"
        ]
    },
    {
        id: 17, category: "Appetizers", price: 7.99, available: true, tempQty: 1,
        name: { en: "Mashed Potato", fr: "Purée de Pommes de Terre", fa: "پوره سیب‌زمینی" },
        desc: { en: "Creamy mashed potatoes.", fr: "Purée de pommes de terre crémeuse.", fa: "پوره سیب‌زمینی نرم و کره‌ای." },
        images: [
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
            "https://images.unsplash.com/photo-1619860860774-1e2e17343432?w=800&q=80"
        ]
    },
    {
        id: 18, category: "Appetizers", price: 8.99, available: true, tempQty: 1,
        name: { en: "Sweet Potato", fr: "Patate Douce", fa: "سیب‌زمینی شیرین" },
        desc: { en: "Roasted sweet potato wedges.", fr: "Quartiers de patates douces rôtis.", fa: "برش‌های سیب‌زمینی شیرین تنوری." },
        images: [
            "https://images.unsplash.com/photo-1574614217154-20a22eb2c270?w=800&q=80",
            "https://images.unsplash.com/photo-1611069842774-2c21217e2528?w=800&q=80"
        ]
    },
    {
        id: 19, category: "Appetizers", price: 16.99, available: true, tempQty: 1,
        name: { en: "Shrimp Cocktail", fr: "Cocktail de Crevettes", fa: "کوکتل میگو" },
        desc: { en: "Chilled shrimp with dipping sauce.", fr: "Crevettes réfrigérées avec trempette.", fa: "میگوی آب‌پز سرد سرو شده با سس کوکتل." },
        images: [
            "https://images.unsplash.com/photo-1625943555919-4d7494a4eb26?w=800&q=80",
            "https://images.unsplash.com/photo-1627308594190-a052c046e3b7?w=800&q=80"
        ]
    },
    {
        id: 20, category: "Appetizers", price: 9.99, available: true, tempQty: 1,
        name: { en: "Onion Rings", fr: "Rondelles d'Oignon", fa: "پیاز سوخاری (حلقه)" },
        desc: { en: "Crispy fried onion rings.", fr: "Rondelles d'oignon frites croustillantes.", fa: "حلقه‌های پیاز سوخاری ترد." },
        images: [
            "https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&q=80",
            "https://images.unsplash.com/photo-1625937329535-610d48c8b5e9?w=800&q=80"
        ]
    },
    {
        id: 21, category: "Appetizers", price: 10.99, available: true, tempQty: 1,
        name: { en: "Potato Skin", fr: "Pelures de Pommes de Terre", fa: "پوست سیب‌زمینی شکم‌پر" },
        desc: { en: "Loaded potato skins with cheese.", fr: "Pelures de pommes de terre garnies de fromage.", fa: "پوست سیب‌زمینی پر شده با پنیر و مخلفات." },
        images: [
            "https://images.unsplash.com/photo-1600189020959-15d97f3547f8?w=800&q=80",
            "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=800&q=80"
        ]
    },
    {
        id: 22, category: "Appetizers", price: 12.99, available: true, tempQty: 1,
        name: { en: "Spinach Artichoke Dip", fr: "Trempette Épinards-Artichauts", fa: "دیپ اسفناج و آرتیشو" },
        desc: { en: "Warm cheesy dip.", fr: "Trempette chaude au fromage.", fa: "دیپ گرم و پنیری اسفناج و کنگر فرنگی." },
        images: [
            "https://images.unsplash.com/photo-1576510306764-1662fb24fb35?w=800&q=80",
            "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80"
        ]
    },

    // --- Wings ---
    {
        id: 23, category: "Wings", price: 14.99, available: true, tempQty: 1,
        name: { en: "BBQ Wings", fr: "Ailes BBQ", fa: "بال مرغ باربیکیو" },
        desc: { en: "Wings with smoky BBQ sauce.", fr: "Ailes avec sauce BBQ fumée.", fa: "بال مرغ با سس باربیکیو دودی." },
        images: [
            "https://images.unsplash.com/photo-1520072959219-c595dc3f3a2a?w=800&q=80",
            "https://images.unsplash.com/photo-1608039855546-34295e96594e?w=800&q=80"
        ]
    },
    {
        id: 24, category: "Wings", price: 14.99, available: true, tempQty: 1,
        name: { en: "Fried Wings", fr: "Ailes Frites", fa: "بال سوخاری (لایت)" },
        desc: { en: "Crispy fried wings.", fr: "Ailes frites croustillantes.", fa: "بال مرغ سرخ شده ترد و طلایی." },
        images: [
            "https://images.unsplash.com/photo-1569691830917-2232d3082527?w=800&q=80",
            "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80"
        ]
    },
    {
        id: 25, category: "Wings", price: 14.99, available: true, tempQty: 1,
        name: { en: "Baked Wings", fr: "Ailes Rôties", fa: "بال تنوری" },
        desc: { en: "Oven roasted wings.", fr: "Ailes rôties au four.", fa: "بال مرغ کباب شده در فر." },
        images: [
            "https://images.unsplash.com/photo-1527477396000-64ca9c0529cd?w=800&q=80",
            "https://images.unsplash.com/photo-1560067645-31a41768c346?w=800&q=80"
        ]
    },
    {
        id: 26, category: "Wings", price: 15.99, available: true, tempQty: 1,
        name: { en: "Tandoori Wings", fr: "Ailes Tandoori", fa: "بال تندوری" },
        desc: { en: "Spicy Indian style wings.", fr: "Ailes épicées style indien.", fa: "بال مرغ با ادویه تندوری." },
        images: [
            "https://images.unsplash.com/photo-1606755456889-6e344d5d9c24?w=800&q=80",
            "https://images.unsplash.com/photo-1606755456690-3079b7752b1b?w=800&q=80"
        ]
    },

    // --- Burger / Sandwich ---
    {
        id: 27, category: "Burger / Sandwich", price: 15.99, available: true, tempQty: 1,
        name: { en: "Classic Burger", fr: "Burger Classique", fa: "برگر کلاسیک" },
        desc: { en: "Beef patty with lettuce and tomato.", fr: "Galette de bœuf avec laitue et tomate.", fa: "برگر گوشت با کاهو و گوجه فرنگی." },
        images: [
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
            "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80"
        ]
    },
    {
        id: 28, category: "Burger / Sandwich", price: 17.99, available: true, tempQty: 1,
        name: { en: "Roda Burger", fr: "Burger Roda", fa: "رودا برگر" },
        desc: { en: "Our signature gourmet burger.", fr: "Notre burger gastronomique signature.", fa: "برگر مخصوص رودا با مخلفات ویژه." },
        images: [
            "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80",
            "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
        ]
    },
    {
        id: 29, category: "Burger / Sandwich", price: 16.99, available: true, tempQty: 1,
        name: { en: "Mushroom Burger", fr: "Burger aux Champignons", fa: "ماشروم برگر" },
        desc: { en: "Burger topped with mushrooms and cheese.", fr: "Burger garni de champignons et fromage.", fa: "برگر با سس قارچ و پنیر." },
        images: [
            "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?w=800&q=80",
            "https://images.unsplash.com/photo-1610614819513-58e34bc36c67?w=800&q=80"
        ]
    },
    {
        id: 30, category: "Burger / Sandwich", price: 16.99, available: true, tempQty: 1,
        name: { en: "Bacon Chicken Burger", fr: "Burger Poulet Bacon", fa: "چیکن برگر با بیکن" },
        desc: { en: "Chicken burger with crispy bacon.", fr: "Burger de poulet avec bacon croustillant.", fa: "برگر مرغ همراه با بیکن برشته." },
        images: [
            "https://images.unsplash.com/photo-1619250914677-70c8f553dc72?w=800&q=80",
            "https://images.unsplash.com/photo-1615551309135-b8a325470d93?w=800&q=80"
        ]
    },
    {
        id: 31, category: "Burger / Sandwich", price: 15.99, available: true, tempQty: 1,
        name: { en: "Chicken Sandwich", fr: "Sandwich au Poulet", fa: "ساندویچ مرغ" },
        desc: { en: "Grilled chicken sandwich.", fr: "Sandwich au poulet grillé.", fa: "ساندویچ سینه مرغ گریل شده." },
        images: [
            "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80",
            "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=800&q=80"
        ]
    },
    {
        id: 32, category: "Burger / Sandwich", price: 15.99, available: true, tempQty: 1,
        name: { en: "Turkey Burger", fr: "Burger de Dinde", fa: "برگر بوقلمون" },
        desc: { en: "Lean turkey patty burger.", fr: "Burger de dinde maigre.", fa: "برگر گوشت بوقلمون کم‌چرب." },
        images: [
            "https://images.unsplash.com/photo-1520072959219-c595dc3f3a2a?w=800&q=80",
            "https://images.unsplash.com/photo-1549611016-3a70d82b5040?w=800&q=80"
        ]
    },
    {
        id: 33, category: "Burger / Sandwich", price: 13.99, available: true, tempQty: 1,
        name: { en: "Chicken Wrap", fr: "Wrap au Poulet", fa: "رپ مرغ" },
        desc: { en: "Grilled chicken in a tortilla wrap.", fr: "Poulet grillé dans un wrap tortilla.", fa: "لقمه (رپ) مرغ گریل شده و سبزیجات." },
        images: [
            "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
            "https://images.unsplash.com/photo-1585849834997-6a56e04d4a82?w=800&q=80"
        ]
    },
    {
        id: 34, category: "Burger / Sandwich", price: 14.99, available: true, tempQty: 1,
        name: { en: "Beef Wrap", fr: "Wrap au Bœuf", fa: "رپ گوشت" },
        desc: { en: "Seasoned beef in a tortilla wrap.", fr: "Bœuf assaisonné dans un wrap tortilla.", fa: "لقمه (رپ) گوشت و فلفل دلمه‌ای." },
        images: [
            "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=800&q=80",
            "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80"
        ]
    },

    // --- Mains ---
    {
        id: 35, category: "Mains", price: 24.99, available: true, tempQty: 1,
        name: { en: "Salmon Fajitas", fr: "Fajitas au Saumon", fa: "فاهیتا سالمون" },
        desc: { en: "Grilled salmon with peppers and onions.", fr: "Saumon grillé avec poivrons et oignons.", fa: "ماهی سالمون گریل شده روی صفحه داغ با سبزیجات." },
        images: [
            "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?w=800&q=80",
            "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800&q=80"
        ]
    },
    {
        id: 36, category: "Mains", price: 26.99, available: true, tempQty: 1,
        name: { en: "Steak Fajita", fr: "Fajita au Bifteck", fa: "فاهیتا استیک" },
        desc: { en: "Sizzling steak strips with veggies.", fr: "Lanières de bifteck grésillantes avec légumes.", fa: "تکه‌های استیک داغ همراه با فلفل و پیاز." },
        images: [
            "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&q=80",
            "https://images.unsplash.com/photo-1606850246029-dd00bd5d0e28?w=800&q=80"
        ]
    },
    {
        id: 37, category: "Mains", price: 21.99, available: true, tempQty: 1,
        name: { en: "Chicken Fajita", fr: "Fajita au Poulet", fa: "فاهیتا مرغ" },
        desc: { en: "Sizzling chicken strips with veggies.", fr: "Lanières de poulet grésillantes avec légumes.", fa: "تکه‌های مرغ داغ همراه با فلفل و پیاز." },
        images: [
            "https://images.unsplash.com/photo-1628805374828-090906cc945e?w=800&q=80",
            "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80"
        ]
    },
    {
        id: 38, category: "Mains", price: 19.99, available: true, tempQty: 1,
        name: { en: "Shepherd’s Pie", fr: "Pâté Chinois", fa: "شپردز پای (پای چوپان)" },
        desc: { en: "Meat pie topped with mashed potatoes.", fr: "Pâté à la viande garni de purée.", fa: "خوراک گوشت با رویه پوره سیب‌زمینی." },
        images: [
            "https://images.unsplash.com/photo-1664992987820-80a5a3a79d39?w=800&q=80",
            "https://images.unsplash.com/photo-1647895000574-d4c38234383c?w=800&q=80"
        ]
    },
    {
        id: 39, category: "Mains", price: 18.99, available: true, tempQty: 1,
        name: { en: "Fish & Chips", fr: "Fish & Chips", fa: "فیش اند چیپس" },
        desc: { en: "Battered fish with fries.", fr: "Poisson pané avec frites.", fa: "ماهی سوخاری همراه با سیب‌زمینی سرخ‌کرده." },
        images: [
            "https://images.unsplash.com/photo-1579208575657-c5296846081d?w=800&q=80",
            "https://images.unsplash.com/photo-1614088922880-92867c293674?w=800&q=80"
        ]
    },
    {
        id: 40, category: "Mains", price: 16.99, available: true, tempQty: 1,
        name: { en: "Pasta Alfredo", fr: "Pâtes Alfredo", fa: "پاستا آلفردو" },
        desc: { en: "Pasta in creamy white sauce.", fr: "Pâtes sauce blanche crémeuse.", fa: "پاستا با سس سفید خامه‌ای و پارمزان." },
        images: [
            "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&q=80",
            "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&q=80"
        ]
    },
    {
        id: 41, category: "Mains", price: 15.99, available: true, tempQty: 1,
        name: { en: "Pasta Fettuccine", fr: "Fettuccine", fa: "پاستا فتوچینی (قرمز)" },
        desc: { en: "Pasta in tomato sauce.", fr: "Pâtes sauce tomate.", fa: "پاستا با سس گوجه‌فرنگی و ریحان." },
        images: [
            "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
            "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=800&q=80"
        ]
    },
    {
        id: 42, category: "Mains", price: 14.99, available: true, tempQty: 1,
        name: { en: "Mac & Cheese", fr: "Macaroni au Fromage", fa: "ماکارونی و پنیر (مک اند چیز)" },
        desc: { en: "Cheesy macaroni pasta.", fr: "Pâtes macaroni au fromage.", fa: "ماکارونی با سس پنیر فراوان." },
        images: [
            "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&q=80",
            "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80"
        ]
    },
    {
        id: 43, category: "Mains", price: 15.99, available: true, tempQty: 1,
        name: { en: "Chicken Fingers", fr: "Doigts de Poulet", fa: "فیله سوخاری (چیکن فینگر)" },
        desc: { en: "Breaded chicken strips.", fr: "Lanières de poulet panées.", fa: "فیله مرغ سوخاری شده." },
        images: [
            "https://images.unsplash.com/photo-1562967960-f0d2383cf639?w=800&q=80",
            "https://images.unsplash.com/photo-1632778149877-79673a46955b?w=800&q=80"
        ]
    },
    {
        id: 44, category: "Mains", price: 19.99, available: true, tempQty: 1,
        name: { en: "Shrimp & Vegetable", fr: "Crevettes et Légumes", fa: "میگو و سبزیجات" },
        desc: { en: "Sautéed shrimp with mixed veggies.", fr: "Crevettes sautées aux légumes mélangés.", fa: "خوراک میگو و سبزیجات." },
        images: [
            "https://images.unsplash.com/photo-1559742811-822873691df8?w=800&q=80",
            "https://images.unsplash.com/photo-1606182953589-1e3592c31758?w=800&q=80"
        ]
    },
    {
        id: 45, category: "Mains", price: 20.99, available: true, tempQty: 1,
        name: { en: "Breaded Shrimp", fr: "Crevettes Panées", fa: "میگو سوخاری" },
        desc: { en: "Crispy breaded shrimp.", fr: "Crevettes panées croustillantes.", fa: "میگو سوخاری ترد." },
        images: [
            "https://images.unsplash.com/photo-1623961990059-28356e226a77?w=800&q=80",
            "https://images.unsplash.com/photo-1570441262582-a299b714e1a7?w=800&q=80"
        ]
    },
    {
        id: 46, category: "Mains", price: 21.99, available: true, tempQty: 1,
        name: { en: "Coconut Shrimp", fr: "Crevettes à la Noix de Coco", fa: "میگو نارگیلی" },
        desc: { en: "Shrimp with coconut breading.", fr: "Crevettes avec panure de noix de coco.", fa: "میگو با روکش پودر نارگیل." },
        images: [
            "https://images.unsplash.com/photo-1616070653633-91d904739506?w=800&q=80",
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80"
        ]
    },
    {
        id: 47, category: "Mains", price: 22.99, available: true, tempQty: 1,
        name: { en: "Sport Plate", fr: "Assiette Sportive", fa: "بشقاب ورزشکاری" },
        desc: { en: "Mixed protein platter.", fr: "Plateau de protéines mixtes.", fa: "بشقاب پروتئین شامل مرغ و مخلفات سالم." },
        images: [
            "https://images.unsplash.com/photo-1603073163308-9654c3fb70b9?w=800&q=80",
            "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"
        ]
    },
        {
        id: 48, category: "Drinks", price: 3.99, available: true, tempQty: 1,
        name: { en: "Soft Drink", fr: "Boisson Gazeuse", fa: "نوشابه" },
        desc: { en: "Coke, Sprite, or Ginger Ale.", fr: "Coke, Sprite ou Ginger Ale.", fa: "کوکا، اسپرایت یا جینجرال." },
        images: ["https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=800&q=80"]
    },
    {
        id: 49, category: "Drinks", price: 5.99, available: true, tempQty: 1,
        name: { en: "Fresh Juice", fr: "Jus Frais", fa: "آبمیوه تازه" },
        desc: { en: "Orange, Apple, or Cranberry.", fr: "Orange, Pomme ou Canneberge.", fa: "پرتقال، سیب یا کرن‌بری." },
        images: ["https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=800&q=80"]
    },
    // --- Dessert ---
    {
        id: 50, category: "Dessert", price: 8.99, available: true, tempQty: 1,
        name: { en: "Chocolate Cake", fr: "Gâteau au Chocolat", fa: "کیک شکلاتی" },
        desc: { en: "Rich chocolate layer cake.", fr: "Gâteau au chocolat riche.", fa: "کیک شکلاتی لایه‌ای." },
        images: ["https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80"]
    },
    {
        id: 51, category: "Dessert", price: 7.99, available: true, tempQty: 1,
        name: { en: "Cheesecake", fr: "Gâteau au Fromage", fa: "چیزکیک" },
        desc: { en: "New York style cheesecake.", fr: "Gâteau au fromage style New York.", fa: "چیزکیک نیویورکی." },
        images: ["https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80"]
    }];
    // This line makes the menu available to index.html
window.RODA_MENU_DATA = initialMenu;