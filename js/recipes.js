//This script file is being used as a database for all the recipes

//All Recipes are taken from my families cookbooks

//Starter recipes found in starter.html
var StartersITA = {
    Recipe_4: {
        title: "Insalata Caprese",
        imageUrl: "assets/recipes/starters/caprese-salad.jpg",
        imageAlt: "stupenda insalata caprese su un piatto",
        description: "L'insalata caprese è un'insalata semplice ed elegante che consiste nell'alternare fette di pomodori succosi e maturi a mozzarella cremosa. Le foglie di basilico fresco sono cosparse sopra la preparazione e il piatto viene condito con olio d'oliva e aceto balsamico prima di essere condito con sale e pepe.",
        ingredients: ["4 pomodori", "1 mozzarella", "basilico fresco", "olio d'oliva", "aceto balsamico", "sale e pepe"],
        steps: [

            "Affetta ogni pomodoro in fette spesse 1 cm dall'alto verso il basso. Guarnire con la mozzarella a fette e le foglie di basilico su un piatto da portata. Aggiungere sale e pepe a piacere.",
            "Condisci l'insalata con olio e aceto balsamico appena prima di servire."
        ],
        dateAdded: "22-03-2021",
        link: "starters.html#",
        tags: [],
    },
    Recipe_1: {
        title: "Sformato di Carote",
        imageUrl: "assets/recipes/starters/Sformato-di-carote.jpg",
        imageAlt: "4 sformati di carote perfettamente dorati in superficie, adagiati su un tavolo bianco",
        description: "Lo sformato di carote è un piatto colorato che ho scelto di preparare in piccole cocottine monoporzione. Per prepararlo servono praticamente ingredienti che difficilmente mancano in casa, carote, uova, parmigiano e con l'aggiunta di un po' di noce moscata che serve a dare quel tocco di sapore in più.",
        ingredients: ["150 grammi of grated carrots", "20 grammi of onions", "1 celery stalk", "1/2 cup of Soja milk", "Spices:", "extra virgin oil", "1 cup of water"],

        steps: [
            "Far saltare in padella: cipolla, carota gratuggiata con l'olio extra vergine d'oliva per qualche minuti. Aggiugnere un bicchiere d'acqua e lasciare cuocere finchè non sarà completamente assorbita.",
            "Condire le carote con olio, pepe, prezzemolo, peperoncino a piacere.",
            "Mischiare latte vegetale e farina di ceci, versare il composto sulle carote a fuoco spento.",
            "Distribuire il compost ben mischiato in 4 pirofile unte e infornare per circa 20 minuti a 180℃."
        ],
        dateAdded: "18-02-2021",
        link: "starters.html#",
        tags: [],
    },
    Recipe_2: {
        title: "Muffin Salati",
        imageUrl: "assets/recipes/starters/Muffin-salati.jpg",
        imageAlt: "nove muffin fotografati dall'alto, ognungo con diversi condimenti",
        description: "I muffin salati sono perfetti per tutte le occasioni, potete utilizzarli come aperitivo,  a cena o pranzo al posto del pane e della pizza, potete facilmente trasportarli al mare, in gita, pic nic fuori porta! Ideali per una merenda genuina e sana anche per bambini; sono perfetti per buffet e feste di ogni tipo! E voi? che gusto preferite?",
        ingredients: ["90 grammi farina","25 grammi amido di mais","4 grammi lievito per dolci","1/2 cucchiaino di bicarbonato","35 grammi di formaggio","1/2 cucchiaio di sale","30 grammi olio extra vergine d'oliva","150 grammi di latte vegetale non dolcificato","Un cucchiaio di aceto di mele","pepe quanto basta","noce moscata quanto basta"
        ],

        steps: [
            "Mescolare insieme farina, amido, lievito e bicarbonato setacciati. Aggiungere poi il formaggio il sale e spezie.",
            "In un contenitore amalgamare i liquidi e versarli sopra la farina. Mescolare energigamente fino ad ottenere un composto morbido.",
            "Far riposare per 5 minuti l'impasto prima di versarlo in piccole pirofile.",
            "Guarnire a piacere e infornamre per 12/13 minuti a 180℃."
        ],
        dateAdded: "23-03-2021",
        link: "starters.html#",
        tags: [],
    },
    Recipe_3: {
        title: "Barchette di Pane e Uova al Forno",
        imageUrl: "assets/recipes/starters/pane-ripieno.jpg",
        imageAlt: "sette piccole pagnotte con la parte superiore tagliata e riempite di ingredienti deliziosi",
        description: "Le barchette di pane ripiene sono una ricetta golosa e saporita, ottima come contorno o servita ad un aperitivo. Sono semplici da preparare: basterà realizzare delle barchette di pane utilizzando dei gustosi panini ai cereali, scavati al loro interno e farciti con un ripieno a base di verdure, formaggio e prosciutto.",
        ingredients: ["Pane (largo tipo ciabatta o baguette)","Uova","Bacon","Formaggio","Sale","Pepe","Erbe Aromatiche"],

        steps: [
            "Tagliare un pezzo di pane lungo 10/15 cm. Scavare un buco nella mollica avendo cura di non perforare la pagnotta. Rimuovere la parte tagliata e conservarla.",
            "Salare e pepare il pane. Aggiungere il formaggio alla parte scavata. Rompere l'uovo nell'incavo della pagnotta. Aggiungete sale, pepe ed erbe aromatiche a piacere.",
            "Infornare con funzione grill per 5/8 minuti. Aggiungere il bacon ad ogni pagnotta e proseguire con la cottura finchè il bacon non sarà coroccante e l'uovo cotto.",
            "P.S. FAte attenzione a non bruciare il pane!"

        ],
        dateAdded: "20-02-2021",
        link: "starters.html#",
        tags: [],
    },

}
var StartersENG = {
    Recipe_4: {
        title: "Caprese Salad",
        imageUrl: "assets/recipes/starters/caprese-salad.jpg",
        imageAlt: "beautiful caprese salad on a plate",
        description: "Caprese Salad is a plain and elegant salad that consists of alternating slices of juicy, ripe tomatoes and creamy mozzarella. Fresh basil leaves are sprinkled on top, and the dish is drizzled with olive oil and balsamic vinegar before being seasoned with salt and pepper.",
        ingredients: ["4 tomatoes", "1 Mozzarella", "Fresh Basil", "Olive Oil", "Balsamic Vinegar", "Salt and Pepper"],
        steps: [
            'Slice each tomato into 1cm thick slices from top to bottom. Top with the sliced mozzarella and basil leaves on a serving plate. Add salt and pepper to taste.',
            'Drizzle the salad with oil just before serving.'
        ],
        dateAdded: "22-03-2021",
        link: "starters.html#",
        tags: [],
    },
    Recipe_1: {
        title: "Carrot Flan",
        imageUrl: "assets/recipes/starters/Sformato-di-carote.jpg",
        imageAlt: "4 carrot flans perfectly browned on the top, lying on a white table",
        description: "Carrot flan is a colorful dish that I have chosen to prepare in small single-portion casseroles. To prepare it you practically need ingredients that are hardly missing at home, carrots, eggs, parmesan and with the addition of a little nutmeg which serves to give that extra touch of flavor.",
        ingredients: ["150 gr of grated carrots", "20 gr of onions", "1 celery stalk", "1/2 cup of Soja milk", "Spices:", "extra virgin oil", "1 cup of water"],

        steps: [
            "Sauté: onion, grated carrot with extra virgin olive oil for a few minutes. Add a glass of water and let it cook until completely absorbed.",
            "Season the carrots with oil, pepper, parsley, chilli to taste.",
            "Mix vegetable milk and chickpea flour, pour the mixture over the carrots over the heat off.",
            "Distribute the well-mixed compost in 4 greased oven dishes and bake for about 20 minutes at 180 ℃."
        ],
        dateAdded: "19-02-2021",
        link: "starters.html#",
    },
    Recipe_2: {
        title: "Savoury Muffins",
        imageUrl: "assets/recipes/starters/Muffin-salati.jpg",
        imageAlt: "nine muffins photographed from above, each with different toppings",
        description: "Savory muffins are perfect for all occasions, you can use them as an aperitif, at dinner or lunch instead of bread and pizza, you can easily transport them to the sea, on a trip, picnic out of town! Ideal for a genuine and healthy snack even for children; they are perfect for buffets and parties of all kinds! And you? what flavor do you prefer?",
        ingredients: ["90 grams flour", "25 grams corn starch", "4 grams baking powder", "1/2 teaspoon of baking soda", "35 grams of cheese", "1/2 tablespoon of salt", "30 grams extra virgin olive oil "," 150 grams of unsweetened vegetable milk "," A tablespoon of apple cider vinegar "," pepper as required "," nutmeg as required "
        ],

        steps: [
            "Mix together the sifted flour, starch, baking powder and baking soda. Then add the diced cheese, salt and spices.",
            "In a container mix the liquids and pour them over the flour. Mix vigorously until the mixture is soft",
            "Let the dough rest for 5 minutes before pouring it into small oven dishes",
            "Garnish to taste and bake for 12/13 minutes at 180 ℃"
        ],
        dateAdded: "23-03-2021",
        link: "starters.html#",
        tags: [],
    },
    Recipe_3: {
        title: "Boats of Bread and Baked Eggs",
        imageUrl: "assets/recipes/starters/pane-ripieno.jpg",
        imageAlt: "seven little loafs with the top cut off and filled with delicious ingredients",
        description: "Stuffed bread boats are a delicious and tasty recipe, excellent as a side dish or served with an aperitif. They are simple to prepare: just make bread boats using tasty cereal sandwiches, hollowed out and stuffed with a filling based on vegetables, cheese and ham.",
        ingredients: ["Bread (wide like ciabatta or baguette)", "Eggs", "Bacon", "Cheese", "Salt", "Pepper", "Aromatic Herbs"],

        steps: [
            "Cut a 10/15 cm long piece of bread. Dig a hole in the crumb taking care not to pierce the loaf. Remove the cut part and keep it",
            "Season the bread with salt and pepper. Add the cheese to the hollowed out part. Break the egg into the hollow of the loaf. Add salt, pepper and herbs to taste.",
            "Bake with grill function for 5/8 minutes. Add the bacon to each loaf and continue cooking until the bacon is coroccante and the egg is cooked",
            "P.S. Be careful not to burn the bread!"
        ],
        dateAdded: "20-02-2021",
        link: "starters.html#",
        tags: [],
    },

}
//Maindishes recipes found in maindishes.html
var MainsITA = {
    Recipe_1: {
        title: "Spaghetti Bolognese",
        imageUrl: "./assets/recipes/mains/spaghetti_bolognese.jpg",
        imageAlt: "pasta with red sauce on white ceramic round plate",
        description: "Il ragù alla bolognese è fatto con pochi ingredienti base a cui servono poche ore di cottura a fiamma bassa. Questo sugo  viene preparato con verdure fritte e pancetta, che viene poi mescolato con carne macinata e passata di pomodoro. Il risultato finale è un sugo delizioso che può essere utilizzato con qualsiasi tipo di pasta.",

        ingredients: ["600 g di carne macinata", "1 carota", "3 grammi di sale", "1 gambo di sedano", "100 g di pancetta", "Mezzo bicchiere di vino bianco", "70 ml di olio extravergine di oliva", "350 g Passata di pomodoro "," Sale "],
        steps: [
            "Tagliate la pancetta a cubetti Preparate un trito di carota, cipolla e sedano Versate l'olio nella padella e fate soffriggere la pancetta.",
            "Quindi versare il composto di verdure tagliate a pezzetti Quando le verdure saranno appassite aggiungere la carne macinata e far cuocere per qualche minuto a fuoco vivace.",
            "Aggiungete mezzo bicchiere di vino bianco e lasciate evaporare mescolando gli ingredienti. Quando il vino sarà evaporato unite la passata di pomodoro e fate cuocere a fuoco basso per circa 2 ore. Salate il ragù.",
            "Mentre prepari il sugo puoi mettere un po 'della tua pasta secca preferita da cuocere in una pentola piena di acqua bollente salata",
            "Una volta che la pasta ha terminato il tempo necessario, scolatela da tutta l'acqua, aggiungete un filo d'olio e versate la salsa sopra la pasta nella pentola. Mescolate bene ed è pronta per essere servita."
        ],
        dateAdded: "26-02-2021",
        link: "maindishes.html#",
        tags: [],
    },
    
    Recipe_2: {
        title: "Crema di Zucca",
        imageUrl: "assets/recipes/mains/pumpkin_soup.jpg",
        imageAlt: "Primo piano di pane croccante mentre viene pucciato in una crema di zucca densa e cremosa in una ciotola di smalto bianco rustico.",
        description: "Questa è una Crema di zucca classica e facile a base di zucca fresca che è molto veloce da preparare. Densa, cremosa e saporita, questa è LA ricetta della zuppa di zucca che preparerai ora e per sempre!",

        ingredients: ["1 kig di Zucca", "1 litro di Brodo Vegetale", "1 Pizzico di Pepe Nero", "60 G Olio extra vergine d'oliva", "! pizzico Noce Moscata", "200g Patate", "80g Cipolle Bianche", "1 pizzico di sale", "! pizzicco di cannelal in polvere"],
        steps: [
            'Per preparare la crema di zucca iniziate preparando il brodo vegetale. Poi passate alla pulizia della zucca. Tagliatela a fette ed eliminate sia la buccia esterna che i semi interni; a questo punto dovrete ricavare 600 g di polpa,  quindi tagliatela a cubetti.',
            'Pelate le patate e tagliatele anche queste a cubetti. Mondate la cipolla, tritatela finemente quindi trasferitela in un tegame con l’olio e lasciatela imbiondire a fuoco dolce.',
            'Una volta che la cipolla avrà cambiato colore unite anche la zucca e le patate. Aggiungete anche una parte del brodo fino a coprire tutte le verdure, il resto verrà aggiunto successivamente.',
            'Aggiustate di sale e di pepe . Lasciate cuocere a fuoco dolce per 25-30 minuti 11, aggiungendo altro brodo di tanto in tanto. Una volta che le verdure saranno cotte, spegnete il fuoco e frullate il tutto con un mixer ad immersione, fino ad ottenere una crema liscia ed omogenea. Quindi aggiungete la cannella, la noce moscata e mescolate il tutto. La vostra crema di zucca è ormai pronta! ',
            'Per preparare dei gustosi crostini di accompagnamento tagliate il pane a cubetti non troppo piccolie disponeteli su una teglia foderata con carta forno. Irrorateli con l’olio, cuoceteli per circa 5 minuti in forno preriscaldato in modalità grill, quindi sfornateli. Servite la crema di zucca in una ciotola da zuppa aggiungendo i crostini dorati in superficie.',
        ],
        dateAdded: "26-02-2021",
        link: "maindishes.html#",
        tags: [],
    },
    Recipe_3: {
        title: "Polpette",
        imageUrl: "assets/recipes/mains/meatballs.jpg",
        imageAlt: "Piatto pieno di polpette bruciacchiate adagiate su un letto di insalata",
        description: "Le polpette sono una ricetta semplice da realizzare e molto gustosa: questi teneri bocconcini di carne macinata aromatizzati con provola, parmigiano, uovo e prezzemolo non possono davvero mancare dal menu!",

        ingredients: ["500 grammi di carne macinata", "50 grammi di Parmigiano grattugiato", "3 grammi di sale", "50 grammi di provola affumicata", "130 grammi di pane vecchio", "2 uova", "3 grammi di pepe nero", "1 rametto di Prezzemolo"],
        steps: [
            'Start slicing the stale bread. Remove the crust and cut the crumb into cubes, then place it in a mixer together with the chopped parsley and the thyme leaves.',
            'Operate the mixer until the mixture is sandy and homogeneous. Slice and coarsely chop the provolone.',
            'Place the meat, the minced bread and the provolone in a large pan, add the grated Parmesan cheese and finally the lightly beaten eggs.',
            'Season with salt and pepper then start kneading with your hands until you get a compact dough, which you have to leave to rest in the refrigerator for 30 minutes covered with cling film.',
            'After the necessary time, remove the block of meat from the refrigerator, wet your hands and start dividing the dough into portions of about 20 g: shape each on the palm of your hand to obtain 44 meatballs of the same size and then place them on a lined tray with transparent film.',
            'Put plenty of breadcrumbs in a bowl and pass each meatball, turning it with the help of a fork for even breading. Let them all rest on the tray, trying to distance them slightly from each other. Meanwhile, bring the oil for frying to a temperature that does not exceed 170-180 °.',
            'When it is hot to the right point, with a slotted spoon dip 2-3 meatballs at a time to keep the oil temperature from getting too low, cook a few minutes (2-3 minutes will be enough) until golden brown, then transfer the cooked meatballs on absorbent paper just long enough to remove the excess oil.',
            'Meatballs are ready, serve hot!',
        ],
        dateAdded: "26-02-2021",
        link: "maindishes.html#",
        tags: []
    },
    Recipe_4: {
        title: "Filetto al pepe nero e alloro",
        imageUrl: "assets/recipes/mains/meatballs.jpg",
        imageAlt: "Platter full of beatfully charred meatballs lying on top of a bed of salad",
        description: "Meatballs are a simple recipe to make and very tasty: these tender bites of minced meat flavored with provolone, parmesan, egg and parsley cannot really be missing from the menu!",

        ingredients: ["500 grams Ground Beef", "50 grams grated Parmigiano", "3 grams Salt", "50 grams Smoked Provola", "130 grams Old Bread", "2 Eggs", "3 grams Black Pepper", "1 Sprig of Parsley"],
        steps: [
            "Inizia ad affettare il pane raffermo. Togliete la crosta e tagliate la mollica a cubetti, quindi mettetela in un mixer insieme al prezzemolo tritato e alle foglie di timo. ",
            "Azionare la planetaria fino a ottenere un composto sabbioso e omogeneo. Affettare e tritare grossolanamente il provolone. ",
            "Mettere la carne, il pane tritato e la provola in una padella larga, aggiungere il parmigiano grattugiato e infine le uova leggermente sbattute.",
            "Condite con sale e pepe poi iniziate a impastare con le mani fino ad ottenere un impasto compatto, che dovete lasciare riposare in frigorifero per 30 minuti coperto di pellicola.",
            "Trascorso il tempo necessario, togliete il blocco di carne dal frigorifero, bagnatevi le mani e iniziate a dividere l'impasto in porzioni di circa 20 g: modellatele ciascuna sul palmo della mano fino ad ottenere 44 polpette della stessa dimensione e poi disponetele su un vassoio rivestito con pellicola trasparente. ",
            "Mettete in una ciotola abbondante pangrattato e passate ogni polpetta girandola con l'aiuto di una forchetta per una panatura uniforme. Lasciateli riposare tutti sulla teglia, cercando di distanziarli leggermente l'uno dall'altro. Nel frattempo portare l'olio per friggere ad una temperatura che non superi i 170-180 °. ",
            "Quando sarà caldo al punto giusto, con una schiumarola immergere 2-3 polpette alla volta per evitare che la temperatura dell'olio si abbassi troppo, cuocere qualche minuto (2-3 minuti saranno sufficienti) fino a doratura, poi trasferire le polpette cotte su carta assorbente quel tanto che basta per eliminare l'olio in eccesso. ",
            "Le polpette sono pronte, servite calde!",
        ],
        dateAdded: "25-03-2021",
        link: "maindishes.html#",
        tags: [],
    },
    Recipe_4: {
        title: "Filetto al Pepe nero e Rosmarino",
        imageUrl: "assets/recipes/mains/steak.jpg",
        imageAlt: "filetto cotto alla perfezione in una padella con rosmarino e delle teste d'aglio",
        description: "Quando si cerca qualcosa da mangiare che dia soddisfazione non c'è meglio di un buon filetto di carne. La nostra ricetta aiuterà ad arricchire il gusto del filetto con del pepe nero e del rosmarino. Uno dei migliori filetti che preparerai",

        ingredients: ["300 grammi di filetto di manzo","Rami di rosmarino fresco","Pepe nero","Sale","Olio extra vergine d'olive"],
        steps: [
            "Sfregare bene il filetto con il sale il pepe nero. Aggiungere l'olio assicurando sì che tutta la superficie sia punta e ricoperta dal pepe nero. Coprire il filetto con i rametti di rosmarino. Lasciare marinare per circa due ore.",
            "Scaldare una padella quando sarà ben calda metterci il filetto avendo cura di lasciare i rametti di rosmarino nella padella durante la cottura. Cuocere per 5 minuti per lato. Ciascun lato della carna deve essere bella rosolata e croccante.",
            "Appoggiare su un tagliere, lasciar riposare qualche minuto. Tagliare a fette e servire."
        ],
        dateAdded: "26-02-2021",
        link: "maindishes.html#",
        tags: [],
    },

}
var MainsENG = {
    Recipe_1: {
        title: "Spaghetti Bolognese",
        imageUrl: "./assets/recipes/mains/spaghetti_bolognese.jpg",
        imageAlt: "pasta with red sauce on white ceramic round plate",
        description: "The Bolognese sauce is prepared with few ingredients, the steps are simple, it only needs to cook slowly for a few hours. The base of this dressing is a fried vegetables and bacon to which it is added to the minced meat and the tomato puree. The result is a very good sauce suitable for any type of pasta. ",

        ingredients: ["600 g Minced meat", "1 carrot", "3 grams Salt", "1 celery stalk", "100 g Bacon", "Half glass White wine", "70 ml Extra virgin olive Oil", "350 g Tomato puree","Salt"],
        steps: [
            "Cut the bacon into small cubes Prepare a chopped carrot, onion and celery Pour the oil into the pan and fry the bacon.",
            "Then pour the mixture of vegetables cut into small pieces When the vegetables are wilted add the minced meat and cook for a few minutes over high heat.",
            "Add half a glass of white wine and let it evaporate while mixing the ingredients When the wine has evaporated, add the tomato puree and cook over low heat for about 2 hours. Add salt the ragù sauce.",
            "While preparing the sauce you can put some of your favourite dry pasta to cook into a pot full of salted boiling water",
            "Once the pasta has cooked the time required, drain it from all the water, add some olive oli and pour the sauce on top of the pasta in the pot. Mix well and it is ready to be served."
        ],
        dateAdded: "26-02-2021",
        link: "maindishes.html#",
        tags: [],
    },
    Recipe_2: {
        title: "Pumpkin cream",
        imageUrl: "assets/recipes/mains/pumpkin_soup.jpg",
        imageAlt: "Close up of crusty bread as it is dipped into a thick, creamy pumpkin cream in a white chinese bowl.",
        description: "This is a classic and easy Pumpkin Cream made from fresh pumpkin that is very quick to make. Thick, creamy and flavorful, this is the pumpkin soup recipe you will make now and forever!",

        ingredients: ["1 kg of Pumpkin", "1 liter of Vegetable Broth", "1 Pinch of Black Pepper", "60 grams Extra Virgin Olive Oil", "1 pinch Nutmeg", "200g Potatoes", "80grams White Onions ", " 1 pinch of salt ", "1 Pinch of cannelal powder "],
        steps: [
            'To prepare the pumpkin cream, start by preparing the vegetable broth. Then move on to cleaning the pumpkin. Cut it into slices and remove both the external peel and the internal seeds; at this point you will need to obtain 600 g of pulp, then cut it into cubes. ',
            'Peel the potatoes and cut these into cubes too. Peel the onion, chop it finely then transfer it to a pan with oil and let it brown over low heat. ',
            'Once the onion has changed color, add the pumpkin and potatoes. Also add a part of the broth until all the vegetables are covered, the rest will be added later. ',
            'Season with salt and pepper. Cook over low heat for 25-30 minutes 11, adding more broth from time to time. Once the vegetables are cooked, turn off the heat and blend everything with an immersion blender, until you get a smooth and homogeneous cream. Then add the cinnamon, nutmeg and mix everything. Your pumpkin cream is now ready! ',
            'To prepare tasty accompanying croutons, cut the bread into not too small cubes and arrange them on a baking sheet lined with parchment paper. Sprinkle them with oil, cook them for about 5 minutes in a preheated oven in grill mode, then take them out of the oven. Serve the pumpkin cream in a soup bowl adding the golden croutons to the top. ',
        ],
        dateAdded: "26-02-2021",
        link: "maindishes.html#",
        tags: [],
    },
    Recipe_3: {
        title: "Meatballs",
        imageUrl: "assets/recipes/mains/meatballs.jpg",
        imageAlt: "Platter full of beatfully charred meatballs lying on top of a bed of salad",
        description: "Meatballs are a simple recipe to make and very tasty: these tender bites of minced meat flavored with provolone, parmesan, egg and parsley cannot really be missing from the menu!",

        ingredients: ["500 grams Ground Beef", "50 grams grated Parmigiano", "3 grams Salt", "50 grams Smoked Provola", "130 grams Old Bread", "2 Eggs", "3 grams Black Pepper", "1 Sprig of Parsley"],
        steps: [
            'Start slicing the stale bread. Remove the crust and cut the crumb into cubes, then place it in a mixer together with the chopped parsley and the thyme leaves.',
            'Operate the mixer until the mixture is sandy and homogeneous. Slice and coarsely chop the provolone.',
            'Place the meat, the minced bread and the provolone in a large pan, add the grated Parmesan cheese and finally the lightly beaten eggs.',
            'Season with salt and pepper then start kneading with your hands until you get a compact dough, which you have to leave to rest in the refrigerator for 30 minutes covered with cling film.',
            'After the necessary time, remove the block of meat from the refrigerator, wet your hands and start dividing the dough into portions of about 20 g: shape each on the palm of your hand to obtain 44 meatballs of the same size and then place them on a lined tray with transparent film.',
            'Put plenty of breadcrumbs in a bowl and pass each meatball, turning it with the help of a fork for even breading. Let them all rest on the tray, trying to distance them slightly from each other. Meanwhile, bring the oil for frying to a temperature that does not exceed 170-180 °.',
            'When it is hot to the right point, with a slotted spoon dip 2-3 meatballs at a time to keep the oil temperature from getting too low, cook a few minutes (2-3 minutes will be enough) until golden brown, then transfer the cooked meatballs on absorbent paper just long enough to remove the excess oil.',
            'Meatballs are ready, serve hot!',
        ],
        dateAdded: "26-02-2021",
        link: "maindishes.html#",
        tags: [],
    },
    Recipe_4: {
        title: "Beef fillet with black pepper and rosemary",
        imageUrl: "assets/recipes/mains/steak.jpg",
        imageAlt: "fillet cooked to perfection in a pan with rosemary and some garlic heads",
        description: "When looking for something satisfying to eat, there is no better than a good fillet of meat. Our recipe will help enrich the taste of the fillet with black pepper and rosemary. One of the best fillets you will prepare",

        ingredients: ["300 grams of beef fillet", "Fresh rosemary branches", "Black pepper", "Salt", "Extra virgin olive oil"],
        steps: [
            "Rub the fillet well with the salt and black pepper. Add the oil making sure that the whole surface is pointed and covered with black pepper. Cover the fillet with the sprigs of rosemary. Leave to marinate for about two hours.",
            "Heat a pan when it is hot put the fillet taking care to leave the sprigs of rosemary in the pan during cooking. Cook for 5 minutes per side. Each side of the meat must be nice brown and crunchy.",
            "Place on a cutting board, let it rest for a few minutes. Cut into slices and serve."
        ],
        dateAdded: "26-02-2021",
        link: "maindishes.html#",
        tags: [],
    },
}
//Bakery Recepies found in main-bakery class in bakery.html page
var BakeryITA = {
    Recipe_1: {
        title: "Focaccia Semplice",
        imageUrl: "assets/recipes/bakery/focaccia.jpg",
        imageAlt: "focaccia fragrante illuminata da raggi di sole provenienti da una finestra",
        description: "Semplice ricetta per fare della focaccia deliziosa. Sarà così buona che non dovrete più andare dal panettiere a comprarla!",

        ingredients: ["400gr Farina", "360gr Acqua", "40g Olio", "6 a 8gr di Sale", "4gr Zucchero", "7gr lievito disidrattato"],
        steps: [
            'Sciogliere il lievito nell’acqua a temperature ambiente, aggiungere lo zucchero e mescolare.',
            'Aggiungere l’olio e la farina in una ciottola e mescolare fino a quando la farina non sarà assorbita.',
            'Aggiungere il sale e mescolare per 2/3 minuti',
            'Ungere un contenitore con un po’ di olio e versarci dentro l’impasto',
            '2Coprire e far lievitare al riparo da spifferi d’aria per tre ore, la pasta deve raddoppiare in volume',
            'Ungere bene una teglia e versare l’impasto cercando di non piegare limpasto su se stesso',
            'Con le mani unte di olio distribuire la l’impasto in modo uniforme',
            'Cospargere la superficie con sale, imprimere i classici buchi della focaccia con i polpastrelli',
            'Far lievitare nella teglia per 60 minuti al riparo',
            'Cuocere per 15/18 minuti a 220℃',
            'Sfornare e cospargere la superficie con olio',

        ],
        dateAdded: "24-02-2021",
        link: "bakery.html#",
        tags: [],
    },
    Recipe_2: {
        title: "Focaccia Genovese",
        imageUrl: "assets/recipes/bakery/focaccia-genovese.jpg",
        imageAlt: "Tre fette di focaccia genovese impilate sopra un tovagliolo di carta, stupendamente cotte avendo la crosta superiore dorata",
        description: "La Focaccia genovese è una golosa specialità  lievitata salata tipica della cucina ligure: una focaccia piatta (massimo due centimetri) lucida d’olio, ricca di granelli di sale e i caratteristici buchi profondi in superficie! ",
        ingredients: ["190gr Acqua", "300gr Farina", "20gr Olio", "7gr Sale", "3gr Zucchero", "6gr Lievito Secco"],
        spices: [],

        steps: [
            'Sciogliere il lievito nell’acqua a temperature ambiente.',
            'Miscelare acqua olio e lievito.',
            'Aggiungere la farina e iniziare a mescolare, aggiungendola poco a poco.',
            "Mentre la farina si assorbe aggiungere sale e zucchero. ",
            "Spostare l'impasto un po' umido e colloso sul piano di lavoro.",
            "Impastare l'impasto un po' umido e colloso sul piano di lavoro",
            "lasciare l'impasto riposare sotto un canovaccio per 5 minuti, dopodiché non sarà più colloso. ",
            "fare ancora un paio di pieghe girandola su se stesso. ",
            "Far riposare ancora sotto un canovaccio 10 o 15 minuti intanto ungere le teglie. ",
            "Ungere sopra e sotto l' impasto e lasciare lievitare per 50 60 minuti. ",
            "Stendere l' impasto schiacciandolo e cospargendolo di sale abbondante e far lievitare altri 30 o 40 minuti. ",
            "Mettere un po' di acqua tiepida e olio e fare i buchi profondi. ",
            "Lievitare altri 60 minuti e cuocere per 15:20 a 200 °. ",
            "Far raffreddare sollevata. ",
        ],
        dateAdded: "24-02-2021",
        link: "bakery.html#",
        tags: [],
    },
    Recipe_3: {
        title: "Pane Soffice in Cassetta",
        imageUrl: "assets/recipes/bakery/pane-soffice-cassetta.jpg",
        imageAlt: "Stupenda pagnotta appoggiata su di un tagleire di legno",
        description: "Fare il pane fatto in casa è sempre una grande soddisfazione. Questa ricetta super semplice vi permetterà di avere il pane sempre pronto per la vostra famiglia",
        ingredients: ["15 grammi di lievito fresco ", "12 grammi di miele o 15 grammi di zucchero", "32 grammi di olio extravergine ", "465 grammi di farina ", "250 grammi di acqua tiepida ", "12 grammi di sale fino"],
        spices: [],

        steps: [
            "Sciogliere il lievito con il miele in parte dell'acqua.",
            "Aggiungere metà della farina e mescolare. ",
            "Unire il resto della farina e rovesciare sulla spianatoia. ",
            "Aggiungere il sale.",
            "Fare dossier e di pieghe. Uno a tre e uno a due puoi fare riposare per altri 15 minuti.",
            "Infilare l' impasto in una teglia e coprire con pellicola.",
            "lasciare lievitare per un'ora .",
            "Cuocere in forno statico per 30 minuti. La temperatura iniziale deve essere di 220 ° e poi potete abbassarla 190 ° ."

        ],
        dateAdded: "24-02-2021",
        link: "bakery.html#",
        tags: [],
    },
    Recipe_4: {
        title: "Pan di Zucca",
        imageUrl: "assets/recipes/bakery/pane-di-zucca.jpg",
        imageAlt: "Stupenda pagnotta appoggiata di pan di zucca appoggiata su di un tagliere di legno con una fetta già tagliata pronta da mangiare",
        description: "Il pane di zucca tipico della tradizione mantovana, e più specificatamente delle zone a cavallo tra la Lombardia e l’Emilia Romagna, è perfetto per essere accompagnato con salumi di ogni tipo ma anche con formaggi.",
        ingredients: ["15 grammi di lievito fresco ", "12 grammi di miele o 15 grammi di zucchero", "32 grammi di olio extravergine ", "465 grammi di farina ", "250 grammi di acqua tiepida ", "12 grammi di sale fino"],
        spices: [],

        steps: [
            "Sciogliere il lievito con il miele in parte dell'acqua.",
            "Aggiungere metà della farina e mescolare. ",
            "Unire il resto della farina e rovesciare sulla spianatoia. ",
            "Aggiungere il sale.",
            "Fare dossier e di pieghe. Uno a tre e uno a due puoi fare riposare per altri 15 minuti.",
            "Infilare l' impasto in una teglia e coprire con pellicola.",
            "lasciare lievitare per un'ora .",
            "Cuocere in forno statico per 30 minuti. La temperatura iniziale deve essere di 220 ° e poi potete abbassarla 190 ° ."

        ],
        dateAdded: "24-02-2021",
        link: "bakery.html#",
        tags: [],
    },
    Recipe_5: {
        title: "Pane Rustico",
        imageUrl: "assets/recipes/bakery/pane-rustico.jpg",
        imageAlt: "Pane rustico tagliato in due pezzi e adagiato su un tagliere di bamboo",
        description: "il pane rustico è un pane semplicissimo da fare che richiede una lunga lievitazione. Questa lievitazione però darà al pane un sapore e una consistenza impossibile da resistere. Con un po' di olio extra vergine o della nutella questo pane da il meglio di se",
        ingredients: ["400 grammi di farina bianca", "10 grammi di sale fino", "1-2 grammi di lievito di birra", "260 ml di acqua tiepida", "1 cucchiaino di olio d'oliva"],
        spices: [],

        steps: [
            "In una tazzina con poca acqua tiepida e pochissimo zucchero mischiate il lievito secco di birra.",
            "Intanto che il liveito si risveglia, in una ciotola capiente mettete la farina e il sale. Mescolate bene, aggiungete l'acqua tiepida, l'acqua con il lievito e l'olio d'oliva.",
            "Mescolate il tutto molto bene finchè non avrete un impasto umido, omogeneo e ancora parecchio appiccicoso.",
            "Lasciate l'impasto riposare per 15 minuti nella ciotola, coprendola con un panno asciutto. Dopo 15 minuti dovrete fare delle piege all'impasto.",
            "Per fare le piege all'impasto, bagnate le mani con dell'acquam e poi dovete prendere con due mani un lembo dell'impasto, tirarlo per formare una specie di coperta e con questa coprire l'impasto.",
            "Immaginate l'impasto come un quadrato e fate una coperta con cui coprirlo per ogni lato.",
            "Finite le pieghe lasciate riposare nella ciotola coperta per 15 minuti. Dovrete fare delle pieghe al pane 4 volte in tutto, ogni volta ricordatevi di far riposare l'impasto 15 minuti.",
            "Quando avete finito di fare tutte e 4 le pieghe potete lasciare l'impasto riposare per 12 in una stanza temperatura ambiente e non a diretto contatto con i raggi del sole.",
            "12 ore dopo noterete che l'impasto sarà cresciuto molto e sarà bello pieno d'aria. Mettete della farina su un tavolo di lavoro e versateci sopra l'impasto. Per staccare l'impasto dalla ciotola mettete della farina lungo il perimetro dell'impasto che è a contatto con la ciottola e delicatamente con la mano infarianta separate l'impasto dalla ciotola",
            "Con l'impasto sgonfiato sul tavolo di lavoro infarinatelo per bene e delicatamente formatelo in una palla. Questo impasto verrà lasciato a riposare un'altra ora dentro una ciotola infarinata. 15 minuti prima dell scadere dell'ora accednete il forno a 240gradi e metteci dentro una casseruola con coperchio.",
            "Allo scadere dell'ora togliete la casseruola calda dal forno e metteteci direttametne dentro l'impasto. Rimettete la casseruola con il coperchio nel forno e lasciate cuocere per 35 minuti",
            "Allo scadere dei 35 minuti, lasciate la casseruola nel forno per altri 10 minuti ma senza copercchio. Questo permetterà al pane di diventare bello croccante.",
            "Una volta cotto per 45 minuti toglietelo dal forno e lasciatelo riposare su di un tagliere. Appena la golosità avrà il sopravvento tagliatevi una fetta e buon appetito."
        ],
        dateAdded: "11-2-2021",
        link: "bakery.html#",
        tags: [],
    },
    Recipe_6: {
        title: "Brioche Vegane",
        imageUrl: "assets/recipes/bakery/brioche.jpg",
        imageAlt: "tre brioches deliziose spolverate di zucchero",
        description: "La brioche è un delizioso pane dolce che puoi mangiare a colazione o anche come spuntino. Questa ricetta di brioche ti aiuterà a renderla vegana",
        ingredients: ["150gr farina Manitoba",
            "310gr di farina",
            "60gr di zucchero",
            "125 ml di acqua",
            "30ml di olio",
            "1/2 cucchiaio di lievito secco",
            "1 cucchiaio di sale",],
        spices: [],

        steps: [
            "Fare l'impasto mescolando 50gr di farina + 45ml di acqua + il lievito. Mescolare bene e una volta che l'impasto è pronto lasciarlo lievitare fino al triplo di volume",
            "Aggiungete lo zucchero, la farina rimanente e l'acqua. Mescolate. Ora potete aggiungere l'olio e il sale e lavorare la pasta",
            "Lasciate lievitare l'impasto per almeno 4 ore",
            "Formare l'impasto in piccole palline o nella forma che preferisci. Ogni pezzo dovrebbe essere di 50gr e lasciarli lievitare fino al doppio",
            "Cuocere gli impasti brioche in forno a 180 ℃ per 15 minuti",
        ],
        dateAdded: "11-3-2021",
        link: "bakery.html#",
        tags: [],
    },
}
var BakeryENG = {
    Recipe_1: {
        title: "Easy Focaccia",
        imageUrl: "assets/recipes/bakery/focaccia.jpg",
        imageAlt: "fragrant focaccia illuminated by rays of the sun coming from a window",
        description: "Simple recipe to make delicious focaccia. It will be so good that you no longer have to go to the baker to buy it!",
        ingredients: ["400gr Flour", "360gr Water", "40g Oil", "6 to 8gr of Salt", "4gr Sugar", "7gr dehydrated yeast"],
        spices: [],
        steps: [
            'Dissolve the yeast in the water at room temperature, add the sugar and mix',
            'Add the oil and flour to a bowl and mix until the flour is absorbed',
            'Add the salt and mix for 2/3 minutes',
            'Grease a container with a little oil and pour the dough into it',
            '2 Cover and let rise away from drafts for three hours, the dough must double in volume',
            'Grease a pan well and pour the dough, trying not to fold the dough on itself',
            'With your hands greased with oil, distribute the dough evenly',
            'Sprinkle the surface with salt, imprint the classic holes of the focaccia with your fingertips',
            'Let rise in the pan for 60 minutes in the shelter',
            'Cook for 15/18 minutes at 220 ℃',
            'Remove from the oven and sprinkle the surface with oil',
        ],
        dateAdded: "24-02-2021",
        link: "bakery.html#",
        tags: [],
    },
    Recipe_2: {
        title: "Genoese Focaccia",
        imageUrl: "assets/recipes/bakery/focaccia-genovese.jpg",
        imageAlt: "Three slices of Genoese focaccia stacked on a paper napkin, beautifully cooked with a golden top crust",
        description: "The Genoese Focaccia is a delicious savory leavened specialty typical of Ligurian cuisine: a flat focaccia (maximum two centimeters) shiny with oil, rich in grains of salt and the characteristic deep holes on the surface! ",
        ingredients: ["190gr Water", "300gr Flour", "20gr Oil", "7gr Salt", "3gr Sugar", "6gr Dry Yeast"],
        spices: [],

        steps: [
            'Dissolve the yeast in water at room temperature.',
            'Mix water, oil and yeast.',
            'Add the flour and start mixing, adding it little by little.',
            "While the flour is absorbed, add salt and sugar.",
            "Move the slightly wet and sticky dough onto the work surface.",
            "Mix the slightly wet and sticky dough on the work surface",
            "let the dough rest under a cloth for 5 minutes, after which it will no longer be sticky.",
            "make a few more folds by turning it on itself.",
            "Leave to rest under a cloth for 10 or 15 minutes in the meantime, grease the trays.",
            "Grease the top and bottom of the dough and leave to rise for 50 60 minutes.",
            "Roll out the dough by crushing it and sprinkling it with abundant salt and let it rise for another 30 or 40 minutes.",
            "Put some warm water and oil and make deep holes.",
            "Leave to rise for another 60 minutes and cook for 3:20 pm at 200 °.",
            "Let it cool down.",
        ],
        dateAdded: "24-02-2021",
        link: "bakery.html#",
        tags: [],
    },
    Recipe_3: {
        title: "Soft Bread Loaf",
        imageUrl: "assets/recipes/bakery/pane-soffice-cassetta.jpg",
        imageAlt: "Superb loaf resting on a wooden cutting board",
        description: "Making homemade bread is always a great satisfaction. This super simple recipe will allow you to always have bread ready for your family",
        ingredients: ["15 grams of fresh yeast", "12 grams of honey or 15 grams of sugar", "32 grams of extra virgin olive oil", "465 grams of flour", "250 grams of warm water", "12 grams of fine salt"],
        spices: [],

        steps: [
            "Dissolve the yeast with honey in part of the water.",
            "Add half the flour and mix.",
            "Add the rest of the flour and pour out onto a pastry board.",
            "Add the salt.",
            "Do dossiers and folds. One by three and one by two you can let them rest for another 15 minutes.",
            "Put the dough in a baking tray and cover with cling film.",
            "let rise for an hour.",
            "Bake in a static oven for 30 minutes. The initial temperature must be 220 ° and then you can lower it to 190 °."

        ],
        dateAdded: "24-02-2021",
        link: "bakery.html#",
        tags: [],
    },
    Recipe_4: {
        title: "Pumpkin Bread",
        imageUrl: "assets/recipes/bakery/pane-di-zucca.jpg",
        imageAlt: "Superb loaf of pumpkin pan resting on a wooden cutting board with a slice already cut ready to eat",
        description: "The pumpkin bread typical of the Mantuan tradition, and more specifically of the areas between Lombardy and Emilia Romagna, is perfect to be accompanied with all kinds of cold cuts but also with cheeses.",
        ingredients: ["15 grams of fresh yeast", "12 grams of honey or 15 grams of sugar", "32 grams of extra virgin olive oil", "465 grams of flour", "250 grams of warm water", "12 grams of fine salt"],
        spices: [],

        steps: [
            "Dissolve the yeast with honey in part of the water.",
            "Add half the flour and mix.",
            "Add the rest of the flour and pour out onto a pastry board.",
            "Add the salt.",
            "Do dossiers and folds. One by three and one by two you can let them rest for another 15 minutes.",
            "Put the dough in a baking tray and cover with cling film.",
            "let rise for an hour.",
            "Bake in a static oven for 30 minutes. The initial temperature must be 220 ° and then you can lower it to 190 °."

        ],
        dateAdded: "24-02-2021",
        link: "bakery.html#",
        tags: [],
    },
    Recipe_5: {
        title: "Rustic Bread",
        imageUrl: "assets/recipes/bakery/pane-rustico.jpg",
        imageAlt: "Rustic bread cut into two pieces and placed on a bamboo cutting board",
        description: "Rustic bread is a very simple bread to make that requires a long raising time. This raising time, however, will give the bread a flavor and texture that is impossible to resist. With a little extra virgin olive oil or Nutella, this bread gives its best",
        ingredients: ["400 grams of white flour", "10 grams of fine salt", "1-2 grams of brewer's yeast", "260 ml of warm water", "1 teaspoon of olive oil"],
        spices: [],

        steps: [
            "In a cup with a little warm water and very little sugar, mix the dry brewer's yeast.",
            "While the liveito wakes up, put the flour and salt in a large bowl. Mix well, add the warm water, the water with the yeast and the olive oil.",
            "Mix everything very well until you have a moist, homogeneous and still very sticky mixture.",
            "Let the dough rest for 15 minutes in the bowl, covering it with a dry cloth. After 15 minutes you will have to make folds of the dough.",
            "To make the dough pie, wet your hands with acquam and then you have to take a flap of the dough with both hands, pull it to form a kind of blanket and with this cover the dough.",
            "Imagine the dough as a square and make a blanket with which to cover it on each side.",
            "Once the folds are finished, let it rest in the covered bowl for 15 minutes. You will have to fold the bread 4 times in total, each time remember to let the dough rest for 15 minutes.",
            "When you have finished making all 4 folds you can leave the dough to rest for 12 in a room at room temperature and not in direct contact with the sun's rays.",
            "12 hours later you will notice that the dough will have grown a lot and will be full of air. Put some flour on a work table and pour the dough over it. To detach the dough from the bowl, put some flour along the perimeter of the dough that is in contact with the bowl and gently with your hand infarianta separate the dough from the bowl ",
            "With the deflated dough on the work table, flour it well and gently shape it into a ball. This dough will be left to rest for another hour in a floured bowl. 15 minutes before the hour is up, turn on the oven to 240 degrees and put it in in a saucepan with lid. ",
            "At the end of the hour, remove the hot saucepan from the oven and put the dough directly in it. Put the saucepan with the lid back into the oven and let it cook for 35 minutes",
            "After 35 minutes, leave the saucepan in the oven for another 10 minutes but without the lid. This will allow the bread to become nice and crunchy.",
            "Once cooked for 45 minutes, take it out of the oven and let it rest on a cutting board. As soon as your sweet tooth takes over, cut yourself a slice and enjoy your meal."
        ],
        dateAdded: "11-2-2021",
        link: "bakery.html#",
        tags: [],
    },
    Recipe_6: {
        title: "Vegan Brioche",
        imageUrl: "assets/recipes/bakery/brioche.jpg",
        imageAlt: "three brown brioches dusted with sugar",
        description: "Brioche is a delicious sweet bread made that you can eat for breakfast or even as a snack. This recioe of brioche will assist you in making it vegan",
        ingredients: ["150gr Manitoba flour",
            "310gr Flour",
            "60gr Sugar",
            "125ml Water",
            "30ml Oil",
            "1/2 spoon dry yeast",
            "1 spoon salt",],
        spices: [],

        steps: [
            "Make the dough by mixing 50gr of flour + 45ml water + the yeast. Mix thouroughly and once the dough is ready let it raise till triple in volume",
            "Add sugar, the remaning flour and water. Mix. Now you can add the oil and salt and work the dough",
            "Let the dough rise for at least 4 hours",
            "Shape the dough in small balls or a shape you like. Each pieace should be of 50gr and let them rise till double in size",
            "Bake the brioche doughs in an oven at 180℃ for 15 minutes",
        ],
        dateAdded: "11-3-2021",
        link: "bakery.html#",
        tags: [],
    },
}
//Dessert Recipes found in main-bakery class in dessert.html page
var DessertITA = {
    Recipe_1: {
        title: "Torta di mele Soffice e Vegana",
        imageUrl: "./assets/recipes/desserts/soft_apple_cake.jpg",
        imageAlt: "fetta di una deliziosa torta morbida vegana su un piatto di ceramica",
        description: "Per tutti voi vegani, oggi posso proporre una ricetta speciale per una strepitosa e gustosa torta morbida alle mele. Wehn cercando ricette spesso è difficile trovare quelle che non usano latte o uova. Bene, ecco una delle migliori torte di mele per vegani che puoi trovare là fuori",

        ingredients: ["3 mele", "250 gr di farina", "60 gr di olio vegetale", "250 ml di succo di mela", "80 gr di zucchero", "13 gr di lievito in polvere", "1 cucchiaio di aceto di mele", "2 cucchiaini di cannella "," 1/2 o 1/4 di limone "],
        steps: [
            "In una ciotola aggiungete l'olio vegetale il succo di mela e mescolate bene, poi aggiungete lo zucchero poco a poco mentre mescolate. Mescolate il lievito con la vostra farina e poi aggiungete delicatamente la farina nella vostra ciotola. Mescolate bene gli ingredienti fino ad ottenere un bel pastella consistente. ",
            "Sbucciate le mele. Tagliate a dadini una delle mele e affettate le altre due. Spremete un po 'di limone sopra le mele e spolveratele di cannella. Mescolate bene le mele.",
            "Aggiungi la cannella alla pastella e l'aceto di sidro alla pastella e mescola bene. Una volta mescolato aggiungi la mela a dadini alla pastella e mescola anche loro.",
            "Versare la pastella nello stampo per dolci e disporre sopra le mele a fette per dare un aspetto gradevole alla torta.",
            "Infornare a 180 gradi Celsius per 20-25 minuti.",
            "Tira fuori dal forno ed enyoy!"
        ],
        dateAdded: "24-02-2021",
        link: "desserts.html#",
        tags: [],
        youtube: "https://www.youtube.com/embed/VAvniWTXf7c"
    },
    Recipe_2: {
        title: "Torta Rovesciata all'Ananas",
        imageUrl: "assets/recipes/desserts/pineapple_cake.jpg",
        imageAlt: "Una fetta di torta elevata dal piatto con una forchetta, sotto alla fetta c'è la torta intera ancora uttta da mangiare",
        description: "Succede che qualche volta si ha voglia di qualcosa di esotico. Questa ricetta vegana vi porterà a conoscere tutta la dolcezza e il gusto dell'ananas",

        ingredients: [
            "una scatola d'ananas la sciroppata",
            "250 grammi farina ",
            "80 grammi zucchero",
            "60 ml olio vegetale ",
            "una bustina di lievito per dolci ",
            "un cucchiaio colmo di aceto di mele ",
            "qualche cucchiaio di cocco grattugiato ",
        ],
        steps: [
            "Mescolare l'olio vegetale lo sciroppo il latte vegetale con lo zucchero. ",
            "Setacciare la farina e lievito nel composto liquido. ",
            "Sistemare le fette d'ananas sul fondo di una tortiera e infornare per 10 minuti per far caramellare le fette. ",
            "Tagliare a pezzetti l'ananas aggiungere al composto. In comprare l'aceto di mele, mescolare bene e far riposare per 10 minuti.",
            "Sfornare la tortiera e versare il composto sulle fette caramellate. Informare nuovamente per circa 30 minuti a 180 °. Sfornare e una volta fredda spargere del cocco grattugiato sopra la torta. "
        ],
        dateAdded: "01-03-2021",
        link: "desserts.html#",
        tags: [],
    },
    Recipe_3: {
        title: "Pancakes Vegani",
        imageUrl: "assets/recipes/desserts/pancakes.jpg",
        imageAlt: "sei pancakes impilati uno sopra l'altro con fette di kiwi per donare più gusto al dessert",
        description: "Spesso la domenica mattina vogliamo viziarci un po' e stare a letto un po' con delle colazioni da favola. Questi pancakes vegani saranno i pancake più buoni che avrete mai preparato. Tutta la bontà dei pancake senza la pesantezza del latto di mucca.",

        ingredients: ["125 grammi do farina","16 grammi du zucchero","8grammi di lievito per dolci","240 ml di latte di mandorle","Mezzo cucchiaino di sale","Un cucchiaio di aceto di mele","un cucchiaino di vaniglia"],
        steps: [
            "Mischiare in una ciottla la farina, o zucchero, il lievito per dolci e il sale",
            "In un altra ciottola mescolare il latte di mandorle, l'aceto di mele e la vaniglia",
            "Unire il contenuto delle due ciottole e mescolare bene fino ad avere una pasetella fluida senza grumi",
            "Lasciare la pastella riposare per 5 minuti",
            "Versare 65 grammi di pastella alla volta in uan padella non aderente. Quando cominceranno a formarsi delle bolle girate il pancake sull'altro lato e cuocetelo finchè non è dorato"
        ],
        dateAdded: "25-03-2021",
        link: "desserts.html#",
        tags: [],
    },
    Recipe_4: {
        title: "Cookies al Cioccolato",
        imageUrl: "assets/recipes/desserts/chocolate_cookies.jpg",
        imageAlt: "tre cookies al cioccolato stesi su un canovaccio bianco",
        description: "Quando si ha fame o si è semplicemente golosi, cosa c'è di meglio di un buon biscotto al cioccolato?! Con questa ricetta vegana anche le persona intolleranti al lattte si potranno godere questa prelibatezza",

        ingredients: ["250gr farina", "5gr lievito chimico", "4gr bicarbonato di sodio", "3gr sale fino", "75gr zucchero di canna", "75gr zucchero bianco", "75gr olio extra vergine d'oliva", "38ml acqua", "300gr bottoni di cioccolato fondente"],
        steps: [
            'Mischiare farina e bicarbonato di sodio, liveito e sale. Aggiungere i bottoni di cioccolato.',
            "In un'altra ciottola mischiare lo zucchero, l'olio e l'acqua per circa 2 minuti finchè non si è sciolto tutto lo zucchero.",
            "Combianre le farine con il liquido e lavorarli insieme (non eccessivamente).",
            "Posizionare il composto in palline separate fra loro su della carta da forno. Mettere nel freezer per 30 minuti o 24hr in frigo.",
            "Cuocere per 14-17 minuti finchè dorati a 180℃. Una volta cotti lasciare rafreddare e goderseli!"
        ],
        dateAdded: "24-02-2021",
        link: "desserts.html#",
        tags: [],
    },
    Recipe_5: {
        title: "Brioche Vegane",
        imageUrl: "assets/recipes/bakery/brioche.jpg",
        imageAlt: "tre brioches deliziose spolverate di zucchero",
        description: "La brioche è un delizioso pane dolce che puoi mangiare a colazione o anche come spuntino. Questa ricetta di brioche ti aiuterà a renderla vegana",
        ingredients: ["150gr farina Manitoba",
            "310gr di farina",
            "60gr di zucchero",
            "125 ml di acqua",
            "30ml di olio",
            "1/2 cucchiaio di lievito secco",
            "1 cucchiaio di sale",],
        spices: [],

        steps: [
            "Fare l'impasto mescolando 50gr di farina + 45ml di acqua + il lievito. Mescolare bene e una volta che l'impasto è pronto lasciarlo lievitare fino al triplo di volume",
            "Aggiungete lo zucchero, la farina rimanente e l'acqua. Mescolate. Ora potete aggiungere l'olio e il sale e lavorare la pasta",
            "Lasciate lievitare l'impasto per almeno 4 ore",
            "Formare l'impasto in piccole palline o nella forma che preferisci. Ogni pezzo dovrebbe essere di 50gr e lasciarli lievitare fino al doppio",
            "Cuocere gli impasti brioche in forno a 180 ℃ per 15 minuti",
        ],
        dateAdded: "11-3-2021",
        link: "bakery.html#",
        tags: [],
    },

}
var DessertENG = {
    Recipe_1: {
        title: "Vegan Apple Soft Cake",
        imageUrl: "./assets/recipes/desserts/soft_apple_cake.jpg",
        imageAlt: "slice of beautiful vegan soft cake on a ceramic plate",
        description: "For all of you vegans, today I can offer a special recipe for an amazing and tasty apple soft cake. Wehn looking for recipes it is often difficult to find those that don't use milk or eggs. Well here is one of the best apple cakes for vegans you can find out there",

        ingredients: ["3 Apples", "250 gr Flour", "60 gr Vegetable Oil", "250 ml Apple Juice", "80 gr Sugar", "13 gr Baking Powder", "1 tablespoon Apple Cider Vinegar", "2 teaspoons Cinnamon", "1/2 or 1/4 of a Lemon"],
        steps: [
            "In a bowl add vegetable oil the apple juice and mix well, then add the sugar little by little while mixing. Mix the baking powder with your flour and then gently add the flour unto your bowl. Mix well the ingredients until you have a nice consistent batter.",
            "Peel your apples. Dice one of the apples and slice the other two. Squeeze some lemon on top of your apples and dust them with cinnamon. Mix the apples well.",
            "Add cinnamon to your batter and the cider vinegar to the batter and mix well. Once mixed add the diced apple to the batter and mix them as well.",
            "Pour the batter into your cake mould and arrange the sliced apples on top to make the cake look nice.",
            "Bake at 180 degrees Celsius for 20 to 25 minutes.",
            "Take out of the oven and enyoy!"
        ],
        dateAdded: "24-02-2021",
        link: "desserts.html#",
        tags: [],
        youtube: "https://www.youtube.com/embed/VAvniWTXf7c"
    },
    Recipe_2: {
        title: "Pineapple Cake",
        imageUrl: "assets/recipes/desserts/pineapple_cake.jpg",
        imageAlt: "A slice of cake raised off the plate with a fork, under the slice is the whole cake still uneaten",
        description: "It happens that sometimes you want something exotic. This vegan recipe will bring you to know all the sweetness and taste of pineapple",

        ingredients: [
            "a tin of pineapple in syrup",
            "250 grams flour",
            "80 grams of sugar",
            "60 ml vegetable oil",
            "a sachet of baking powder",
            "a spoonful of apple cider vinegar",
            "a few tablespoons of grated coconut",
        ],
        steps: [
            "mix the vegetable oil the syrup the vegetable milk with the sugar.",
            "sift the flour and yeast into the liquid mixture.",
            "Arrange the pineapple slices on the bottom of a pan and bake for 10 minutes to caramelize the slices.",
            "chop the pineapple add to the mixture. In buy apple cider vinegar, mix well and let it rest for 10 minutes.",
            "Remove from the oven and pour the mixture over the caramelized slices. Bake again for about 30 minutes at 180 °. Remove from the oven and once cold sprinkle some grated coconut on top of the cake."
        ],
        dateAdded: "01-03-2021",
        link: "desserts.html#",
        tags: [],
    },
    Recipe_3: {
        title: "Vegan Pancakes",
        imageUrl: "assets/recipes/desserts/pancakes.jpg",
        imageAlt: "six pancakes stacked on top of each other with kiwi slices to add more flavor to the dessert",
        description: "Often on Sunday mornings we want to spoil ourselves a little and stay in bed for a while with fabulous breakfasts. These vegan pancakes will be the tastiest pancakes you ever made. All the goodness of pancakes without the heaviness of dairy",

        ingredients: ["125 grams of flour", "16 grams of sugar", "8 grams of baking powder", "240 ml of almond milk", "Half a teaspoon of salt", "A tablespoon of apple cider vinegar", "a teaspoon vanilla "],
        steps: [
            "Mix the flour, or sugar, baking powder and salt in a bowl",
            "In another bowl, mix the almond milk, apple cider vinegar and vanilla",
            "Combine the contents of the two bowls and mix well until you have a fluid pasetella without lumps",
            "Leave the batter to rest for 5 minutes",
            "Pour 65 grams of batter at a time into a non-stick pan. When bubbles start to form, turn the pancake over to the other side and cook until golden."
        ],
        dateAdded: "25-03-2021",
        link: "desserts.html#",
        tags: [],
    },
    Recipe_4: {
        title: "Chocolate Cookies",
        imageUrl: "assets/recipes/desserts/chocolate_cookies.jpg",
        imageAlt: "three chocolate cookies spread out on a white tea towel",
        description: "When you are hungry or simply greedy, what could be better than a good chocolate biscuit ?! With this vegan recipe, even people who are intolerant to milk can enjoy this delicacy",

        ingredients: ["250gr flour", "5gr chemical yeast", "4gr sodium bicarbonate", "3gr fine salt", "75gr cane sugar", "75gr white sugar", "75gr extra virgin olive oil", "38ml water ", " 300gr dark chocolate buttons "],
        steps: [
            'Mix flour and baking soda, baking powder and salt. Add the chocolate buttons. ',
            "In another bowl mix the sugar, oil and water for about 2 minutes until all the sugar has dissolved.",
            "Combine the flours with the liquid and work them together (not excessively).",
            "Place the mixture into separate balls on some parchment paper. Place in the freezer for 30 minutes or 24hr in the fridge.",
            "Cook for 14-17 minutes until golden at 180 ℃. Once cooked, let them cool and enjoy!"
        ],
        dateAdded: "24-02-2021",
        link: "desserts.html#",
        tags: [],
    },
    Recipe_5: {
        title: "Vegan Brioche",
        imageUrl: "assets/recipes/bakery/brioche.jpg",
        imageAlt: "three brown brioches dusted with sugar",
        description: "Brioche is a delicious sweet bread made that you can eat for breakfast or even as a snack. This recioe of brioche will assist you in making it vegan",
        ingredients: ["150gr Manitoba flour",
            "310gr Flour",
            "60gr Sugar",
            "125ml Water",
            "30ml Oil",
            "1/2 spoon dry yeast",
            "1 spoon salt",],
        spices: [],

        steps: [
            "Make the dough by mixing 50gr of flour + 45ml water + the yeast. Mix thouroughly and once the dough is ready let it raise till triple in volume",
            "Add sugar, the remaning flour and water. Mix. Now you can add the oil and salt and work the dough",
            "Let the dough rise for at least 4 hours",
            "Shape the dough in small balls or a shape you like. Each pieace should be of 50gr and let them rise till double in size",
            "Bake the brioche doughs in an oven at 180℃ for 15 minutes",
        ],
        dateAdded: "11-3-2021",
        link: "bakery.html#",
        tags: [],
    },
}