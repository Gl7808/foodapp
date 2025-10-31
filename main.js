
    // Updated categories list
    const categories = ['Все','Фастфуд', 'Завтрак', 'Гарнир', 'Курица', 'Говядина', 'Морепродукты', 'Свинина','Салат', 'Субпродукты', 'Выпечка', 'Десерт', 'Прочее', 'Супы'];

    // Sample data with multiple categories per dish
    const dishes = [
        // Фастфуд
        {
            id: 55,
            name: 'Курица KFC',
            categories: ['Курица', 'Фастфуд'],
            ingredients: 'куриные части, специи, панировка',
            description: 'Хрустящая жареная курица по рецепту KFC',
            imageUrl: 'https://eda.yandex/images/3502728/9fd5260b7d2042d8a1919e65b6971e89-450x300.jpeg  '
        },
        {
            id: 69,
            name: 'Шаурма классическая',
            categories: ['Прочее', 'Фастфуд'],
            ingredients: 'лаваш, курица или говядина, овощи, соус',
            description: 'Популярная уличная еда в лаваше',
            imageUrl: '  https://avatars.mds.yandex.net/i?id=e62586233e36d1b21af9529d4c7e732a_l-9456276-images-thumbs&n=13'
        },
        {
            id: 70,
            name: 'Шаурма с тунцом',
            categories: ['Морепродукты', 'Фастфуд'],
            ingredients: 'лаваш, консервированный тунец, овощи, соус',
            description: 'Лёгкая шаурма с тунцом вместо мяса',
            imageUrl: '  https://i.pinimg.com/originals/9e/a0/0e/9ea00eb9bbdfbbca2f88889087734155.jpg  '
        },
        {
            id: 71,
            name: 'Гирос',
            categories: ['Прочее', 'Фастфуд'],
            ingredients: 'пита, мясо (свинина/курица), овощи, соус цацики',
            description: 'Греческий аналог шаурмы',
            imageUrl: 'https://avatars.mds.yandex.net/get-altay/13793720/2a00000191c0aa49bf2e880e1840551babb8/orig  '
        },
        {
            id: 72,
            name: 'Тортилья с курицей',
            categories: ['Курица', 'Фастфуд'],
            ingredients: 'тортилья, куриное филе, перец, лук, сыр',
            description: 'Мексиканская лепёшка с курицей и овощами',
            imageUrl: 'https://www.edimdoma.ru/system/images/contents/0001/4107/popup/shutterstock_2011903688.jpg?1632992742'
        },
        {
            id: 73,
            name: 'Цезарь ролл',
            categories: ['Прочее', 'Фастфуд'],
            ingredients: 'лаваш, курица, салат, пармезан, соус цезарь',
            description: 'Рулет из лаваша с начинкой как в салате цезарь',
            imageUrl: '  https://scdn.chibbis.ru/live/products/d042b0d0d09d747419e6e2267dc73101.jpeg  '
        },
        {
            id: 74,
            name: 'Чизбургер с курицей',
            categories: ['Курица', 'Фастфуд'],
            ingredients: 'булочка, куриная котлета, сыр, салат, соус',
            description: 'Бургер с куриной котлетой и сыром',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=bdcb44b28c86d5d159058ac134142d21_l-4420863-images-thumbs&n=13'
        },
        {
            id: 75,
            name: 'Сосиски в тесте',
            categories: ['Выпечка', 'Фастфуд'],
            ingredients: 'сосиски, слоёное тесто, яйцо для смазки',
            description: 'Хрустящие сосиски в слоёном тесте',
            imageUrl: '  https://izba-nv.ru/images/product/62c1c11594fa617dc0cb6470e56878fb.jpg  '
        },
        {
            id: 76,
            name: 'Пицца пепперони',
            categories: ['Выпечка', 'Фастфуд'],
            ingredients: 'тесто, томатный соус, сыр моцарелла, пепперони',
            description: 'Классическая американская пицца с острыми колбасками',
            imageUrl: 'https://static.tildacdn.com/stor3365-6463-4935-b032-353734363838/65054836.jpg  '
        },
        {
            id: 77,
            name: 'Пицца с морепродуктами',
            categories: ['Морепродукты', 'Выпечка', 'Фастфуд'],
            ingredients: 'тесто, соус, сыр, креветки, кальмары, мидии',
            description: 'Пицца с ассорти морепродуктов',
            imageUrl: 'https://scdn.chibbis.ru/live/products/bc7f7c1027542b4284aaff6e1f8553cc.jpeg  '
        },
        {
            id: 78,
            name: 'Пицца с курицей',
            categories: ['Курица', 'Выпечка', 'Фастфуд'],
            ingredients: 'тесто, соус, сыр, куриное филе, овощи',
            description: 'Пицца с курицей и дополнительными ингредиентами',
            imageUrl: 'https://cdn.lifehacker.ru/wp-content/uploads/2021/01/20_1611847434-1800x900.jpg  '
        },
        {
            id: 79,
            name: 'Пицца 4 сыра',
            categories: ['Выпечка', 'Фастфуд'],
            ingredients: 'тесто, моцарелла, горгонзола, пармезан, дорблю',
            description: 'Богатая пицца из четырёх сортов сыра',
            imageUrl: 'https://avatars.mds.yandex.net/get-altay/5120632/2a00000181b8eec89ed9d58df6f2e00cedb3/XXL_height  '
        },
        {
            id: 80,
            name: 'Треугольники с ветчиной и сыром',
            categories: ['Выпечка', 'Фастфуд'],
            ingredients: 'слоёное тесто, ветчина, сыр, яйцо',
            description: 'Выпечка из слоёного теста с начинкой',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=8a7a8f4aedc65f1e38ce752056be812a_l-5652396-images-thumbs&n=13'
        },

        // Завтрак
        {
            id: 1,
            name: 'Яичница',
            categories: ['Завтрак'],
            ingredients: 'яйца, соль, перец, растительное масло',
            description: 'Классическая яичница на сковороде',
            imageUrl: 'https://img.povar.ru/mobile/56/85/d2/b1/yaichnica_s_sirom-872371.JPG  '
        },
        {
            id: 2,
            name: 'Омлет',
            categories: ['Завтрак'],
            ingredients: 'яйца, молоко, соль, перец',
            description: 'Пышный омлет без начинки',
            imageUrl: 'https://i.pinimg.com/originals/01/7c/29/017c29ad928e03a036eb0429fcbdbd73.jpg  '
        },
        {
            id: 3,
            name: 'Дранники',
            categories: ['Завтрак'],
            ingredients: 'картофель, лук, яйцо, мука, соль',
            description: 'Картофельные оладьи по-белорусски',
            imageUrl: 'https://pln-pskov.ru/pictures/230524160750.jpg  '
        },
        {
            id: 4,
            name: 'Шакшука',
            categories: ['Завтрак'],
            ingredients: 'помидоры, яйца, болгарский перец, лук, чеснок, паприка',
            description: 'Яйца, тушёные в остром томатном соусе',
            imageUrl: 'https://i.ytimg.com/vi/0swvcqx_xoo/maxresdefault.jpg  '
        },
        {
            id: 6,
            name: 'Каша овсяная',
            categories: ['Завтрак'],
            ingredients: 'овсяные хлопья, вода или молоко, соль, сахар',
            description: 'Полезная горячая овсянка на завтрак',
            imageUrl: 'https://kachestvorb.ru/upload/resize_cache/iblock/0ee/1140_1140_1/sqh4otcvwxzz5kmnframxcb5p7v3mcp5.jpeg  '
        },
        {
            id: 8,
            name: 'Сырники',
            categories: ['Завтрак', 'Десерт'],
            ingredients: 'творог, яйцо, мука, сахар, ванилин',
            description: 'Нежные творожные оладьи с хрустящей корочкой',
            imageUrl: 'https://images.thevoicemag.ru/upload/img_cache/101/101f7e0bdb7850617fdbc9d4b5caae96_ce_2370x1244x0x237_cropped_1200x628.jpg  '
        },
        {
            id: 9,
            name: 'Английский завтрак',
            categories: ['Завтрак'],
            ingredients: 'яйца, бекон, сосиски, помидоры, фасоль, тосты',
            description: 'Полноценный традиционный завтрак из Великобритании',
            imageUrl: 'https://i.pinimg.com/originals/d2/d9/c4/d2d9c45524329d23b55758c4e86b0143.jpg  '
        },

        // Гарнир
        {
            id: 14,
            name: 'Рис с нори',
            categories: ['Гарнир'],
            ingredients: 'рис, нори, кунжут, соевый соус',
            description: 'Простое японское блюдо с морскими водорослями',
            imageUrl: 'https://i.pinimg.com/originals/24/d6/7e/24d67e67a94a7196898c090dd9acacfb.jpg  '
        },
        {
            id: 15,
            name: 'Рис с яйцом',
            categories: ['Гарнир'],
            ingredients: 'рис, яйцо, соевый соус, масло',
            description: 'Быстрое блюдо из риса и яйца',
            imageUrl: 'https://static01.nyt.com/images/2014/03/12/dining/12friedrice/12friedrice-superJumbo.jpg  '
        },
        {
            id: 16,
            name: 'Макароны',
            categories: ['Гарнир'],
            ingredients: 'макароны, вода, соль',
            description: 'Классический гарнир из макаронных изделий',
            imageUrl: 'https://avatars.mds.yandex.net/get-marketpic/5733918/picaa8a14fc8958a9d2c0a56b1c8b0a47a6/orig  '
        },
        {
            id: 17,
            name: 'Пюре',
            categories: ['Гарнир'],
            ingredients: 'картофель, молоко, сливочное масло, соль',
            description: 'Нежное картофельное пюре',
            imageUrl: 'https://blizko.by/system/notes/imagefbs/000/062/074/original/pure.jpg?1754986489'
        },
        {
            id: 18,
            name: 'Запеченая картошка',
            categories: ['Гарнир'],
            ingredients: 'картофель, оливковое масло, соль, розмарин',
            description: 'Картофель, запечённый в духовке до хрустящей корочки',
            imageUrl: '  https://i.ytimg.com/vi/b7LjMiI93tc/maxresdefault.jpg  '
        },
        {
            id: 19,
            name: 'Жаренная картошка',
            categories: ['Гарнир'],
            ingredients: 'картофель, растительное масло, лук, соль',
            description: 'Классическая жареная картошка с луком',
            imageUrl: 'https://profile.ru/wp-content/uploads/1478992-fb.jpeg  '
        },
        {
            id: 20,
            name: 'Гречка',
            categories: ['Гарнир'],
            ingredients: 'гречневая крупа, вода, соль',
            description: 'Рассыпчатая гречневая каша',
            imageUrl: 'https://aif-s3.aif.ru/images/027/069/5c2a06631b7f61b225eabaf4e876a22c.jpg  '
        },
        {
            id: 21,
            name: 'Картофельный гратен',
            categories: ['Гарнир'],
            ingredients: 'картофель, сливки, сыр, чеснок, соль',
            description: 'Запечённый слоёный картофель с сыром и сливками',
            imageUrl: 'https://cdn.images.express.co.uk/img/dynamic/14/1200x712/4786056.jpg  '
        },
        {
            id: 22,
            name: 'Макароны со шпинатом и сиртаки',
            categories: ['Гарнир'],
            ingredients: 'макароны, шпинат, сыр сиртаки, сливки, чеснок',
            description: 'Сливочные макароны с греческим сыром и шпинатом',
            imageUrl: 'https://i.ytimg.com/vi/uHf7cDhh-r0/maxresdefault.jpg  '
        },
        {
            id: 38,
            name: 'Паста с грибами',
            categories: ['Гарнир'],
            ingredients: 'паста, шампиньоны, сливки, чеснок, пармезан',
            description: 'Сливочная паста с жареными грибами',
            imageUrl: '  https://i.pinimg.com/originals/90/1d/9c/901d9ce3dd878898f85490937b48e518.jpg  '
        },
        {
            id: 39,
            name: 'Паста карбонара',
            categories: ['Гарнир'],
            ingredients: 'паста, бекон, яйца, пармезан, чёрный перец',
            description: 'Итальянская паста с беконом и яично-сырным соусом',
            imageUrl: 'https://cdnn21.img.ria.ru/images/07e9/02/0e/1999398127_0:0:1344:756_1920x0_80_0_0_980cd74357e478d4f80a946d441bddbb.jpg'
        },
        {
            id: 40,
            name: 'Паста с морепродуктами',
            categories: ['Морепродукты', 'Гарнир'],
            ingredients: 'паста, креветки, кальмары, мидии, томатный соус',
            description: 'Паста с ассорти морепродуктов',
            imageUrl: 'https://i0.wp.com/angsarap.net/wp-content/uploads/2013/04/creamy-seafood-alfredo-wide.jpg  '
        },
        {
            id: 56,
            name: 'Картофельное рагу с курицей',
            categories: ['Курица', 'Гарнир'],
            ingredients: 'курица, картофель, морковь, лук, томат',
            description: 'Сытное рагу из курицы и овощей',
            imageUrl: 'https://as2.ftcdn.net/jpg/01/84/02/99/1000_F_184029907_XDhHUH3FqRJdOLIDbc7tDrRRzoG8uz8I.jpg  '
        },
        {
            id: 63,
            name: 'Паста с брокколи и курицей',
            categories: ['Курица', 'Гарнир'],
            ingredients: 'паста, куриное филе, брокколи, сливки, чеснок',
            description: 'Сливочная паста с курицей и брокколи',
            imageUrl: 'https://i.pinimg.com/736x/e2/85/17/e285176a5f4f83b36bb40da4f5560a1a.jpg  '
        },
        {
            id: 88,
            name: 'Жаренная картошка с лисичками',
            categories: ['Гарнир'],
            ingredients: 'картофель, лисички, лук, сливочное масло, соль, перец',
            description: 'Ароматная жареная картошка с дикими грибами',
            imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66b60d8d2305856717c017a3_66b60da692b676336faa326d/scale_1200  '
        },
        {
            id: 89,
            name: 'Картофельная запеканка с фаршем',
            categories: ['Гарнир'],
            ingredients: 'картофель, мясной фарш, лук, яйца, молоко, сыр',
            description: 'Сытная запеканка из картофеля и мясного фарша',
            imageUrl: 'https://www.momswhothink.com/wp-content/uploads/shutterstock_2341670271-2048x1365.jpg  '
        },
        {
            id: 90,
            name: 'Картофель фри',
            categories: ['Гарнир'],
            ingredients: 'картофель, растительное масло, соль',
            description: 'Хрустящие палочки картофеля, обжаренные во фритюре',
            imageUrl: 'https://avatars.mds.yandex.net/get-altay/5491685/2a0000017e94be0cf7a47080f46680e7ecc1/XXL_height  '
        },
        {
            id: 91,
            name: 'Картофель по-деревенски',
            categories: ['Гарнир'],
            ingredients: 'картофель, оливковое масло, розмарин, чеснок, соль',
            description: 'Запечённый картофель с травами и чесноком',
            imageUrl: 'https://rnd.crazybrothers.ru/wp-content/uploads/Kartofel-po-derevenski.jpg  '
        },
        {
            id: 92,
            name: 'Картофельные чипсы',
            categories: ['Гарнир'],
            ingredients: 'картофель, растительное масло, соль',
            description: 'Тонкие хрустящие ломтики картофеля',
            imageUrl: 'https://i.pinimg.com/originals/20/32/9c/20329ca5dd962c0ac33559d0a868fb11.jpg  '
        },
        {
            id: 95,
            name: 'Паста болоньезе',
            categories: ['Говядина', 'Гарнир'],
            ingredients: 'паста, говяжий фарш, томаты, лук, морковь, сельдерей',
            description: 'Итальянская паста с классическим мясным соусом болоньезе',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=8792310bf0bb6b32f4876651ab87bccb4ecdd08d-16459038-images-thumbs&n=13'
        },
        {
            id: 96,
            name: 'Гречка по-купечески',
            categories: ['Гарнир'],
            ingredients: 'гречка, мясной фарш, лук, морковь, томатная паста',
            description: 'Гречневая каша с тушёным мясом и овощами',
            imageUrl: '  https://pic.rutubelist.ru/video/de/64/de64e308a99949a66576988493786e68.jpg?width%3D300'
        },
        {
            id: 97,
            name: 'Булгур по-купечески',
            categories: ['Гарнир'],
            ingredients: 'булгур, мясной фарш, лук, морковь, специи',
            description: 'Рассыпчатый булгур с мясом и овощами',
            imageUrl: '  https://i.pinimg.com/originals/6f/9e/b6/6f9eb696adbbbc834035fd2f992a4520.jpg  '
        },
        {
            id: 100,
            name: 'Джамбалайя',
            categories: ['Прочее', 'Гарнир'],
            ingredients: 'рис, курица, колбаса андуий, креветки, болгарский перец, лук',
            description: 'Острое креольское блюдо из риса, мяса и морепродуктов',
            imageUrl: 'https://cdn.profile.ru/wp-content/uploads/2021/10/57685647357643.jpg  '
        },
        {
            id: 103,
            name: 'Пельмени',
            categories: ['Прочее', 'Гарнир'],
            ingredients: 'тесто, мясной фарш (свинина/говядина), лук, соль',
            description: 'Традиционные русские пельмени с мясной начинкой',
            imageUrl: 'https://img.restoclub.ru/uploads/place/7/a/4/3/7a43f2dbeefd4addddd3f9e140e0e988_w1200_h630.webp  '
        },

        // Курица
        {
            id: 29,
            name: 'Курица в соусе терияки',
            categories: ['Курица'],
            ingredients: 'куриное филе, соус терияки, имбирь, чеснок, кунжут',
            description: 'Курица, тушеная в сладко-солёном соусе терияки',
            imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6630bb93eda3206dfed7a973_6630bd22eee1470ce2e7b102/scale_1200  '
        },
        {
            id: 30,
            name: 'Курица в кислосладком соусе',
            categories: ['Курица'],
            ingredients: 'куриное филе, томатная паста, уксус, сахар, ананасы',
            description: 'Курица в ярком кисло-сладком соусе',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=46db7dd60644f8a3036df8c81ad732e3_l-5655834-images-thumbs&n=13'
        },
        {
            id: 31,
            name: 'Курица в остром чили соусе',
            categories: ['Курица'],
            ingredients: 'куриное филе, чили, чеснок, имбирь, соевый соус',
            description: 'Острая курица в пряном чили-соусе',
            imageUrl: '  https://ampravda.ru/files/articles-2/104579/p9ho2o3c3yfy-1.jpg  '
        },
        {
            id: 32,
            name: 'Курица карри',
            categories: ['Курица'],
            ingredients: 'куриное филе, кокосовое молоко, карри, лук, чеснок',
            description: 'Курица в ароматном соусе карри',
            imageUrl: 'https://cdn.lifehacker.ru/wp-content/uploads/2020/06/Depositphotos_56251615_xl-2015-1_1592575667.jpg  '
        },
        {
            id: 36,
            name: 'Гуляш с курицей',
            categories: ['Курица'],
            ingredients: 'куриное филе, лук, томатная паста, паприка, специи',
            description: 'Нежный куриный гуляш в томатно-паприковом соусе',
            imageUrl: 'https://kedem.ru/photo/recipe/rnamebig2/gulyash-iz-kuricy-s-risom.jpg  '
        },
        {
            id: 41,
            name: 'Вок с курицей',
            categories: ['Курица'],
            ingredients: 'куриное филе, болгарский перец, лук, соевый соус',
            description: 'Быстрое блюдо в технике вок с курицей и овощами',
            imageUrl: 'https://static.tildacdn.com/stor3833-3230-4733-a238-623962396435/90108473.jpg  '
        },
        {
            id: 45,
            name: 'Наггетсы',
            categories: ['Курица'],
            ingredients: 'куриное филе, панировка, яйцо, специи',
            description: 'Хрустящие куриные наггетсы',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Chicken_Nuggets.jpg  '
        },
        {
            id: 46,
            name: 'Крылышки барбекю',
            categories: ['Курица'],
            ingredients: 'куриные крылышки, соус барбекю, чеснок, паприка',
            description: 'Запечённые крылышки в сладком соусе барбекю',
            imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_68ab1e6159f39475d0b6ca60_68ab1ec3a75080212030f1eb/scale_1200  '
        },
        {
            id: 48,
            name: 'Котлеты куриные',
            categories: ['Курица'],
            ingredients: 'куриный фарш, лук, яйцо, хлеб, специи',
            description: 'Сочные куриные котлеты',
            imageUrl: 'https://static.tildacdn.com/tild6433-3466-4034-a462-363764333264/_.jpg  '
        },
        {
            id: 49,
            name: 'Котлеты куриные по-французски',
            categories: ['Курица'],
            ingredients: 'куриные котлеты, сыр, помидоры, майонез',
            description: 'Котлеты под сырной шапочкой с помидорами',
            imageUrl: 'https://i.ytimg.com/vi/73ydOq7mjPA/maxresdefault.jpg  '
        },
        {
            id: 50,
            name: 'Котлеты по-киевски',
            categories: ['Курица'],
            ingredients: 'куриное филе, сливочное масло, зелень, панировка',
            description: 'Куриные котлеты с начинкой из зелёного масла',
            imageUrl: 'https://i.pinimg.com/originals/89/4f/fc/894ffcc169eadbf989f06c329a481d0b.jpg  '
        },
        {
            id: 51,
            name: 'Котлетки по-пожарски',
            categories: ['Курица'],
            ingredients: 'куриный фарш, грибы, лук, сливки',
            description: 'Котлеты с грибной начинкой в сливочном соусе',
            imageUrl: 'https://здоровое-питание.рф/upload/iblock/69d/8we3atf6khhsqlpy3fox4cuk9z4xj14r/Pozharskie-kotlety.jpg'
        },
        {
            id: 52,
            name: 'Рубленные котлеты куриные',
            categories: ['Курица'],
            ingredients: 'куриное филе, лук, яйцо, специи',
            description: 'Котлеты из рубленого куриного мяса',
            imageUrl: 'https://vkusnoff.com/img/recepty/3913/big.webp  '
        },
        {
            id: 53,
            name: 'Котлеты юрате',
            categories: ['Курица'],
            ingredients: 'куриный фарш, сыр, чеснок, зелень',
            description: 'Куриные котлеты с сырной начинкой',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=e652e1760559695319239bd41ddb612a_l-11389617-images-thumbs&n=13'
        },
        {
            id: 54,
            name: 'Зразы куриные',
            categories: ['Курица'],
            ingredients: 'куриный фарш, яйцо, начинка (грибы/сыр), панировка',
            description: 'Фаршированные куриные зразы',
            imageUrl: '  https://www.chefmarket.ru/blog/wp-content/uploads/2019/08/shutterstock_1153670278-e1567154091524.jpg  '
        },
        {
            id: 81,
            name: 'Куриные ножки в духовке',
            categories: ['Курица'],
            ingredients: 'куриные ножки, специи, чеснок, масло',
            description: 'Запечённые куриные ножки с хрустящей корочкой',
            imageUrl: '  https://i.pinimg.com/originals/46/4e/88/464e88342d023ccbc8806e449da89792.jpg  '
        },
        {
            id: 82,
            name: 'Куриные ножки барбекю',
            categories: ['Курица'],
            ingredients: 'куриные ножки, соус барбекю, паприка, чеснок',
            description: 'Ножки в сладком соусе барбекю',
            imageUrl: 'https://i.pinimg.com/736x/5f/4c/ed/5f4ced7efb132d0c49e665935bbfeccb.jpg  '
        },
        {
            id: 83,
            name: 'Тушёная капуста с курицей',
            categories: ['Курица'],
            ingredients: 'капуста, куриное филе, томат, лук, специи',
            description: 'Сытное блюдо из капусты и курицы',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=e068ef585ef3b0cebce6e3a76188fdda_l-5128642-images-thumbs&n=13'
        },
        {
            id: 86,
            name: 'Курица по-французски',
            categories: ['Курица'],
            ingredients: 'куриное филе, сыр, помидоры, майонез',
            description: 'Курица под сырной корочкой с помидорами',
            imageUrl: 'https://i.pinimg.com/736x/d8/dc/89/d8dc8970ec8f5ed9582a399abb32663a.jpg  '
        },
        {
            id: 87,
            name: 'Подлива острая с курицей',
            categories: ['Курица'],
            ingredients: 'курица, томат, чили, чеснок, специи',
            description: 'Острая курица в пряной подливе',
            imageUrl: 'https://i.pinimg.com/originals/19/8d/53/198d53fa5bfddddeb9eda93961dcf7c9.jpg  '
        },
        {
            id: 99,
            name: 'Куриный бефстроганов',
            categories: ['Курица'],
            ingredients: 'куриное филе, сметана, лук, грибы, специи',
            description: 'Нежные кусочки курицы в сметанном соусе',
            imageUrl: 'https://pic.rutubelist.ru/video/2025-05-16/57/4a/574a8b0e8b383cf104c1e86f4f959274.jpg  '
        },
        {
            id: 105,
            name: 'Утиная грудка',
            categories: ['Курица'],
            ingredients: 'утиная грудка, соль, перец, мёд, соевый соус, специи',
            description: 'Сочная утиная грудка с хрустящей корочкой, запечённая в духовке',
            imageUrl: 'https://storage.ginzadelivery.ru/product/46569/l.6dbeccadc73e1b543553e72508a2f266.jpg  '
        },
        {
            id: 107,
            name: 'Кордон блю',
            categories: ['Курица'],
            ingredients: 'Куриная отбивная, ветчина, сыр эмменталь, яйцо, панировка',
            description: 'Сочная свиная отбивная с начинкой из ветчины и сыра',
            imageUrl: 'https://lefood.menu/wp-content/uploads/w_images/2021/10/recept-7110-1240x827.jpg  '
        },

        // Говядина
        {
            id: 37,
            name: 'Гуляш с говядиной',
            categories: ['Говядина'],
            ingredients: 'говядина, лук, паприка, томат, чеснок',
            description: 'Классический венгерский гуляш из говядины',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=88f638d96c70f5f5680b4f249980cc63_l-9460281-images-thumbs&n=13'
        },
        {
            id: 42,
            name: 'Вок с говядиной',
            categories: ['Говядина'],
            ingredients: 'говядина, овощи, соевый соус, имбирь, чеснок',
            description: 'Острое и ароматное блюдо в технике вок',
            imageUrl: 'https://scdn.chibbis.ru/live/products/96f0c69aaad74eb0018a90547d991dd4.jpeg  '
        },
        {
            id: 47,
            name: 'Шницель',
            categories: ['Говядина', 'Свинина'],
            ingredients: 'мясной отбивной кусок, панировка, яйцо, масло',
            description: 'Отбивная в хрустящей панировке',
            imageUrl: 'https://i.pinimg.com/originals/df/41/c8/df41c84d7551cba0766aa7adf97886ed.jpg  '
        },
        {
            id: 85,
            name: 'Говядина по-кремлёвски',
            categories: ['Говядина'],
            ingredients: 'говядина, сыр, грибы, сливки',
            description: 'Говядина под сливочно-грибным соусом с сыром',
            imageUrl: '  https://images.news.ru/2025/08/01/pqPRLMRX0KkGidL1sl2pgz3CeK7ZUBrvypmTWT02_780.png  '
        },
        {
            id: 98,
            name: 'Стейк говяжий',
            categories: ['Говядина'],
            ingredients: 'говяжья вырезка, соль, перец, растительное масло',
            description: 'Сочный говяжий стейк с корочкой',
            imageUrl: 'https://avatars.mds.yandex.net/get-altay/4079855/2a00000177f2592e482d40fe6acdda293210/XXL_height  '
        },

        // Морепродукты
        {
            id: 44,
            name: 'Вок с креветками',
            categories: ['Морепродукты'],
            ingredients: 'креветки, овощи, соевый соус, чеснок, имбирь',
            description: 'Лёгкое и вкусное блюдо с креветками в стиле вок',
            imageUrl: 'https://avatars.mds.yandex.net/get-altay/6237886/2a0000017fdae850d9eb85c7277b4a685a06/XXL_height  '
        },
        {
            id: 62,
            name: 'Уха',
            categories: ['Морепродукты'],
            ingredients: 'рыба, картофель, морковь, лук, зелень',
            description: 'Традиционный рыбный суп',
            imageUrl: 'https://cdn.culture.ru/images/47ebcaa4-72e2-5877-96d6-906479ba1cf8  '
        },
        {
            id: 65,
            name: 'Скумбрия в духовке',
            categories: ['Морепродукты'],
            ingredients: 'скумбрия, лимон, специи, оливковое масло',
            description: 'Запечённая скумбрия с лимоном и травами',
            imageUrl: 'https://i.ytimg.com/vi/AlWxuU3QHkQ/maxresdefault.jpg  '
        },
        {
            id: 66,
            name: 'Котлеты рыбные',
            categories: ['Морепродукты'],
            ingredients: 'рыбный фарш, яйцо, хлеб, лук, специи',
            description: 'Нежные котлеты из белой рыбы',
            imageUrl: 'https://i.pinimg.com/originals/9f/97/47/9f974731bc220bc191ef0ec7e423451c.jpg  '
        },
        {
            id: 93,
            name: 'Роллы японские',
            categories: ['Морепродукты'],
            ingredients: 'рис, нори, рыба (лосось/тунец), авокадо, огурец',
            description: 'Классические японские роллы с рыбой и овощами',
            imageUrl: 'https://i.pinimg.com/originals/da/d0/7b/dad07bf6af6e005829172ccaaf702ede.jpg  '
        },
        {
            id: 102,
            name: 'Креветки темпура',
            categories: ['Морепродукты'],
            ingredients: 'креветки, мука, яйцо, лёд, масло для фритюра',
            description: 'Хрустящие креветки в лёгком японском кляре',
            imageUrl: 'https://avatars.mds.yandex.net/get-altay/3717246/2a0000017a828eddcd21b29384e2e4b7cd72/XXL_height  '
        },

        // Свинина
        {
            id: 43,
            name: 'Вок со свининой',
            categories: ['Свинина'],
            ingredients: 'свинина, морковь, капуста, соевый соус, кунжут',
            description: 'Азиатское блюдо из свинины и овощей',
            imageUrl: 'https://cdn0.youla.io/files/images/720_720_out/63/90/63903d472146b458f37ae368-1.jpg  '
        },
        {
            id: 84,
            name: 'Свинина по-кремлёвски',
            categories: ['Свинина'],
            ingredients: 'свинина, ананасы, сыр, майонез',
            description: 'Запечённая свинина с ананасами и сыром',
            imageUrl: '  https://avatars.mds.yandex.net/i?id=0d3c76c17612924f389c4b8154bf7813_l-5879346-images-thumbs&n=13'
        },
        {
            id: 110,
            name: 'Ребрышки запечённые',
            categories: ['Свинина'],
            ingredients: 'свиные рёбрышки, соус барбекю, чеснок, паприка, мёд',
            description: 'Нежные свиные рёбрышки в сладко-остром соусе, запечённые до мягкости',
            imageUrl: 'https://storage.myseldon.com/news-pict-ac/ACE54530115C6D263609B0E20C7F4647  '
        },

        // Салат
        {
            id: 23,
            name: 'Коуслоу',
            categories: ['Салат'],
            ingredients: 'капуста, морковь, майонез, уксус, сахар',
            description: 'Американский овощной салат-гарнир',
            imageUrl: 'https://i.pinimg.com/originals/dc/7c/07/dc7c07f1b8e757ace75a052e1182a463.jpg  '
        },
        {
            id: 24,
            name: 'Оливье',
            categories: ['Салат'],
            ingredients: 'картофель, морковь, яйца, колбаса, горошек, майонез',
            description: 'Классический русский салат',
            imageUrl: 'https://www.miloserdie.ru/wp-content/uploads/2023/12/traditional-russian-salad-olivier-scaled.jpg  '
        },
        {
            id: 25,
            name: 'Крабовый',
            categories: ['Салат'],
            ingredients: 'крабовые палочки, кукуруза, яйца, рис, майонез',
            description: 'Салат с крабовыми палочками и сладкой кукурузой',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=5976f706a375251bd691845341db8cf4_l-11551355-images-thumbs&n=13'
        },
        {
            id: 26,
            name: 'Овощной',
            categories: ['Салат'],
            ingredients: 'свежие овощи, зелень, оливковое масло, лимон',
            description: 'Лёгкий салат из свежих овощей',
            imageUrl: '  https://gotovim-doma.ru/forum/files/3/e6/3e6d93b8942cf76dbb6a9e316b90fddc_65927.jpg  '
        },
        {
            id: 27,
            name: 'Цезарь',
            categories: ['Салат'],
            ingredients: 'куриное филе, салат ромэн, сухарики, пармезан, соус цезарь',
            description: 'Популярный салат с курицей и пармезаном',
            imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66877cd358b5ee2b9e01f7f8_66877f42e967170cf3d2ffee/scale_1200  '
        },
        {
            id: 108,
            name: 'Морковь по-корейски',
            categories: ['Салат'],
            ingredients: 'морковь, чеснок, уксус, сахар, растительное масло, острый перец',
            description: 'Острая и ароматная закуска из тонко нарезанной моркови',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=40be7f53c9f12b6f6d6f28f4129c1d4e_l-8567894-images-thumbs&n=13'
        },
        {
            id: 109,
            name: 'Квашеная капуста',
            categories: ['Салат'],
            ingredients: 'белокочанная капуста, морковь, соль, вода',
            description: 'Ферментированная капуста — традиционная закуска и ингредиент для борща',
            imageUrl: '  https://i.ytimg.com/vi/6wI5PCeg_84/maxresdefault.jpg  '
        },
        {
            id: 111,
            name: 'Окрошка',
            categories: ['Салат'],
            ingredients: 'квас, огурцы, редис, яйцо, колбаса или отварное мясо, зелень, горчица',
            description: 'Холодный летний суп на квасе с овощами и варёными ингредиентами',
            imageUrl: 'https://static.tildacdn.com/tild6538-6235-4134-b735-393738353936/s1200-16-2.jpg  '
        },
        {
            id: 113,
            name: 'Салат с тунцом',
            categories: ['Салат'],
            ingredients: 'консервированный тунец, яйца, огурцы, лук, майонез или оливковое масло',
            description: 'Простой и сытный салат с тунцом и овощами',
            imageUrl: 'https://www.leosfood.am/wp-content/uploads/2023/09/Салат-Галерея.jpeg'
        },

        // Субпродукты
        {
            id: 67,
            name: 'Котлеты из печёнки',
            categories: ['Субпродукты'],
            ingredients: 'печень, лук, яйцо, хлеб, специи',
            description: 'Сочные котлеты из говяжьей или куриной печени',
            imageUrl: 'https://i.ytimg.com/vi/qArdy2XeNPs/maxresdefault.jpg  '
        },
        {
            id: 68,
            name: 'Подлива с печёнкой',
            categories: ['Субпродукты'],
            ingredients: 'печень, лук, морковь, томат, сметана',
            description: 'Нежная печёнка в ароматной подливе',
            imageUrl: 'https://i.pinimg.com/originals/db/58/15/db58152afadf0c5d99aabc9cd1e1a7d7.jpg?nii=t'
        },
        {
            id: 101,
            name: 'Куриные сердечки',
            categories: ['Субпродукты'],
            ingredients: 'куриные сердечки, лук, морковь, томатная паста, специи',
            description: 'Тушёные куриные сердечки в ароматном соусе',
            imageUrl: 'https://penhistories.ru/assets/images/serdechki-kurinye-pennye-istorii.jpg  '
        },

        // Выпечка
        {
            id: 5,
            name: 'Блинчики',
            categories: ['Выпечка'],
            ingredients: 'мука, молоко, яйца, сахар, соль',
            description: 'Тонкие блины, подаваемые с начинкой или без',
            imageUrl: 'https://pic.rutubelist.ru/video/2025-02-06/3b/b7/3bb7abd0b74ec0edf8fe0f8b0dfd6bc1.jpg  '
        },
        {
            id: 7,
            name: 'Гренки',
            categories: ['Выпечка'],
            ingredients: 'хлеб, яйцо, молоко, соль',
            description: 'Поджаренные кусочки хлеба в яичной смеси',
            imageUrl: 'https://i.pinimg.com/originals/e5/11/69/e51169336a7f557fac2eab23052e8ce0.jpg  '
        },
        {
            id: 10,
            name: 'Сэндвичи',
            categories: ['Выпечка'],
            ingredients: 'хлеб, сыр, ветчина, овощи, майонез',
            description: 'Быстрые бутерброды с начинкой',
            imageUrl: 'https://cdnstatic.rg.ru/uploads/images/185/95/23/14p_sendvich_850.jpg  '
        },
        {
            id: 12,
            name: 'Гренки с чесноком',
            categories: ['Выпечка'],
            ingredients: 'хлеб, чеснок, сливочное масло, зелень',
            description: 'Ароматные чесночные тосты',
            imageUrl: 'https://api.miku-russia.ru/upload/iblock/eed/eedfa8c2248f88ff622e9f9ead4fff52.jpg  '
        },
        {
            id: 35,
            name: 'Лазанья',
            categories: ['Выпечка'],
            ingredients: 'листы лазаньи, фарш, томатный соус, сыр, бешамель',
            description: 'Запечённая итальянская паста с мясом и сыром',
            imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_679dd5d459f58c4070f22c53_679dd6b679a95e5d4e6d7903/scale_1200  '
        },
        {
            id: 106,
            name: 'Лепешка',
            categories: ['Выпечка'],
            ingredients: 'мука, вода, дрожжи или бездрожжевая основа, соль, масло',
            description: 'Мягкая пресная или дрожжевая лепёшка, подаётся к основным блюдам',
            imageUrl: 'https://i.pinimg.com/originals/64/ac/b9/64acb99a6ef6ea5ae1cc3567059e462d.jpg  '
        },
        {
            id: 112,
            name: 'Пицца на слоёном тесте',
            categories: ['Выпечка'],
            ingredients: 'слоёное тесто, томатный соус, сыр моцарелла, начинка по выбору',
            description: 'Быстрая пицца на хрустящем слоёном тесте',
            imageUrl: 'https://i.ytimg.com/vi/Njzw7a7SmUo/maxresdefault.jpg  '
        },

        // Десерт
        {
            id: 104,
            name: 'Пироженное картошка',
            categories: ['Десерт'],
            ingredients: 'Печенье юбилейное, масло, какао',
            description: 'Пироженное картошка',
            imageUrl: 'https://ic.pics.livejournal.com/smapse/90291932/2292046/2292046_original.png  '
        },

        // Прочее
        {
            id: 11,
            name: 'Грибы шрирача',
            categories: ['Прочее'],
            ingredients: 'шампиньоны, соус шрирача, чеснок, масло',
            description: 'Острые жареные грибы с пикантным соусом',
            imageUrl: 'https://cdn.foodpicasso.com/assets/2024/12/06/201a634cef8d14b3f62353a23797ea87---jpg_1000x_103c0_convert.jpg  '
        },
        {
            id: 13,
            name: 'Овощной соус',
            categories: ['Прочее'],
            ingredients: 'помидоры, перец, лук, чеснок, специи',
            description: 'Свежий соус на основе овощей',
            imageUrl: 'https://img.povar.ru/main-micro/10/d7/38/75/sous_ovoshnoi-764739.jpg  '
        },
        {
            id: 64,
            name: 'Рататуй',
            categories: ['Прочее'],
            ingredients: 'баклажаны, кабачки, помидоры, перец, лук, чеснок',
            description: 'Французское овощное рагу',
            imageUrl: 'https://i.pinimg.com/originals/d8/7d/a8/d87da8d650bb6880e25eb0a72c8828b4.jpg  '
        },
        {
            id: 94,
            name: 'Онигири',
            categories: ['Прочее'],
            ingredients: 'рис, нори, начинка (сёмга, умэбоси, тунец)',
            description: 'Японские рисовые треугольники с начинкой',
            imageUrl: 'https://as2.ftcdn.net/jpg/01/67/72/95/1000_F_167729502_o4NUXNxH8I66nfRnaBSsM8eEXN5SrdWW.jpg  '
        },

        // Супы
        {
            id: 33,
            name: 'Рамен',
            categories: ['Супы'],
            ingredients: 'лапша рамен, бульон, яйцо, зелень, тофу или мясо',
            description: 'Японский суп с лапшой и бульоном',
            imageUrl: 'https://static.tildacdn.com/tild6436-3962-4430-a334-613437316337/_2025-01-27_10172850.png  '
        },
        {
            id: 34,
            name: 'Борщ',
            categories: ['Супы'],
            ingredients: 'свёкла, капуста, картофель, морковь, бульон, зелень',
            description: 'Традиционный славянский суп на основе свёклы',
            imageUrl: 'https://cdn.lifehacker.ru/wp-content/uploads/2019/10/shutterstock_523395667_1571996365-e1571996401624-1600x800.jpg  '
        },
        {
            id: 57,
            name: 'Чечевичный суп',
            categories: ['Супы'],
            ingredients: 'чечевица, морковь, лук, томат, специи',
            description: 'Густой и питательный суп из чечевицы',
            imageUrl: 'https://krimlanch.ru/wp-content/uploads/2024/08/chechevichnyy1.jpeg  '
        },
        {
            id: 58,
            name: 'Сырный суп',
            categories: ['Супы'],
            ingredients: 'сыр, картофель, морковь, бульон, сливки',
            description: 'Кремовый суп с плавленым сыром',
            imageUrl: 'https://i.ytimg.com/vi/Smjvd-054CU/maxresdefault.jpg  '
        },
        {
            id: 59,
            name: 'Гороховый суп',
            categories: ['Супы'],
            ingredients: 'горох, копчёности, морковь, лук, картофель',
            description: 'Традиционный густой гороховый суп',
            imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_681f313c8408392ce0ad7d17_681f35b9d6912201111bf0c0/scale_1200  '
        },
        {
            id: 60,
            name: 'Томатный суп с курицей',
            categories: ['Супы'],
            ingredients: 'курица, фасоль, помидоры, морковь, лук репчатый, чеснок',
            description: 'Суп с курицей, консервированной фасолью, помидорами в собственном соку и свежим сладким перцем ',
            imageUrl: 'https://i.ytimg.com/vi/TvWKxu6kN_M/maxresdefault.jpg  '
        },
        {
            id: 61,
            name: 'Куриный суп',
            categories: ['Супы'],
            ingredients: 'курица, вермишель, морковь, лук, зелень',
            description: 'Лёгкий и ароматный куриный суп с лапшой',
            imageUrl: 'https://пешково.рф/wp-content/uploads/2022/11/lapsha-1240x827.jpg'
        },

        // Без категории (оставшиеся)
        {
            id: 28,
            name: 'Селедка с вареной картошкой',
            categories: ['Прочее'],
            ingredients: 'селёдка, картофель, лук, подсолнечное масло',
            description: 'Традиционная закуска из селёдки и картофеля',
            imageUrl: 'https://cs13.pikabu.ru/post_img/big/2023/03/07/4/1678162993171790118.jpg  '
        }
    ];

    // DOM Elements
    const dishesGrid = document.getElementById('dishesGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    const ingredientsFilter = document.getElementById('ingredientsFilter');
    const categoriesList = document.getElementById('categoriesList');

    // Initialize
    renderDishes();
    setupEventListeners();

    function setupEventListeners() {
    // Filter events
    categoryFilter.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', applyFilters);
    ingredientsFilter.addEventListener('input', applyFilters);

    // Category badges
    categoriesList.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-badge')) {
    document.querySelectorAll('.category-badge').forEach(badge => {
    badge.classList.remove('active');
});
    e.target.classList.add('active');
    categoryFilter.value = e.target.dataset.category;
    applyFilters();
}
});
}

    function applyFilters() {
    renderDishes();
}

    function renderDishes() {
    const selectedCategory = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    const ingredientsTerm = ingredientsFilter.value.toLowerCase();

    const filteredDishes = dishes.filter(dish => {
    const matchesCategory = selectedCategory === 'Все' || dish.categories.includes(selectedCategory);
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm) ||
    dish.ingredients.toLowerCase().includes(searchTerm) ||
    (dish.description && dish.description.toLowerCase().includes(searchTerm));
    const matchesIngredients = !ingredientsTerm || dish.ingredients.toLowerCase().includes(ingredientsTerm);

    return matchesCategory && matchesSearch && matchesIngredients;
});

    if (filteredDishes.length === 0) {
    dishesGrid.innerHTML = `
                    <div class="empty-state">
                        <p>Нет блюд, соответствующих фильтрам</p>
                    </div>
                `;
} else {
    dishesGrid.innerHTML = filteredDishes.map(dish => `
                    <div class="dish-card">
                        <img src="${dish.imageUrl}" alt="${dish.name}" class="dish-image"  this.src=''; this.innerHTML='<i class=\"fas fa-utensils\"></i>'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.color='rgba(255,255,255,0.3)'; this.style.fontSize='2rem';">
                        <div class="dish-content">
                            <div class="dish-header">
                                <h3 class="dish-title">${dish.name}</h3>
                            </div>
                            <div class="dish-categories">
                                ${dish.categories.map(cat => `<span class="dish-category">${cat}</span>`).join('')}
                            </div>
                            <div class="dish-section">
                                <div class="dish-section-title">Ингредиенты:</div>
                                <div class="dish-section-content">${dish.ingredients}</div>
                            </div>
                            ${dish.description ? `
                            <div class="dish-section">
                                <div class="dish-section-title">Описание:</div>
                                <div class="dish-section-content">${dish.description}</div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('');
}
}
