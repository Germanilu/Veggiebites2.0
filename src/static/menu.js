const menuDataes = {
    Antipasti: [
      { name: 'TARRINA DE PESCADO AHUMADA CON RICOTTA', price: '13€', ingredients: 'Ricotta, chalotes , pescado del dia con hierbas ahumadas.' },
      { name: 'BUÑUELOS DE SAMPHIRE CON CEVICHE DE HINOJO', price: '14€', ingredients: 'Buñuelos de gambas con hinojo y aceite trufado.' },
      { name: 'FLORES DE CALABACÍN A LA SARTÉN', price: '16€', ingredients: 'Flores de calabacín rellenos de queso pasados a la sartén.' },
      { name: 'TARTARE DE VERDURAS CON CREMA DE HUMMUS', price: '9€', ingredients: 'Tartare de verduras del dia con garbanzos y especias.' },
      { name: 'NACHOS DE PATATA CON QUESO FUNDIDO Y GUACAMOLE', price: '12€', ingredients: 'Guacamole fresco, salsa picante, nachos de patata y queso fundido.' },
    ],
    Primi: [
      { name: 'PAELLA VEGETAL DE ARROZ INTEGRAL', price: '21€', ingredients: 'Paella con vegetales del dia y arroz integral' },
      { name: 'CURRY TAILANDÉS DE TOFU Y VERDURAS', price: '16€', ingredients: 'Curry,tofu y verduras del huerto.' },
      { name: 'HEURA CON VERDURAS Y SALSA DE CACAHUETES', price: '15€', ingredients: 'Heura de pollo vegetal en salsa de cacahuetes.' },
      { name: 'PAD THAI', price: '16€', ingredients: 'Pad Thai Tailandés con brotes de soja, almendras y lima.' },
      { name: 'RAVIOLIS RELLENOS DE CALABACÍN', price: '17€', ingredients: 'Raviolis de calabacin caseros con salsa de nueces.' },
    ],
    Secondi: [
      { name: 'PASTEL "FARAH DIBAH', price: '21€', ingredients: 'Delicias de calabacín rellenas de paté vegetal y finas hierbas' },
      { name: 'SUPREMA DEL CASAR', price: '15€', ingredients: 'Salteado de trigueros, cebolla y champiñon con pimientos horneados.' },
      { name: 'LASAÑA VEGETARIANA', price: '19€', ingredients: 'Pasta sin gluten, verduras de estación y soja texturizada.' },
      { name: 'REVUELTO DE SETAS', price: '19€', ingredients: 'Revuelto de setas de temporada, trigueros, ajetes y pimientos del piquillo.' },
      { name: 'PARMIGGIANA DI MELANZANE', price: '17€', ingredients: 'Berenjenas, tomate casero, mozzarella y albahaca.' },
    ],
    Dolce: [
      { name: 'MOUSSE DE FRESAS Y QUESO FRESCO', price: '7€', ingredients: 'Deliciosa mousse de fresas con crema de queso fresco' },
      { name: 'TIRAMISÙ CASERO', price: '8€', ingredients: 'Tiramisù casero con crema de cafe.' },
      { name: 'PROFITEROLES DE CHOCOLATE', price: '6€', ingredients: 'Profiteroles rellenos de nata con chocolate blanco.' },
      { name: 'BROWNIE DE CHOCOLATE CON ALMENDRAS', price: '7€', ingredients: 'Brownie de la casa rellenos de almendras.' },
      { name: 'HELADOS CASEROS', price: '5€', ingredients: 'Helados de limón, chocolate, fresa, vainilla, pistacho.' },
    ],
  };


  const menuDatait = {
    Antipasti: [
      { name: 'TERRINA DI PESCE AFFUMICATO CON RICOTTA', price: '13€', ingredients: 'Ricotta, scalogni, pesce del giorno con erbe affumicate.' },
      { name: 'FRITTELLE DI SALICORNIA CON CEVICHE DI FINOCCHIO', price: '14€', ingredients: 'Frittelle di gamberi con finocchio e olio tartufato.' },
      { name: 'FIORI DI ZUCCHINA IN PADELLA', price: '16€', ingredients: 'Fiori di zucchina ripieni di formaggio passati in padella.' },
      { name: 'TARTARE DI VERDURE CON CREMA DI HUMMUS', price: '9€', ingredients: 'Tartare di verdure del giorno con ceci e spezie.' },
      { name: 'NACHOS DI PATATE CON FORMAGGIO FUSO E GUACAMOLE', price: '12€', ingredients: 'Guacamole fresco, salsa piccante, nachos di patate e formaggio fuso.' },
    ],
    Primi: [
      { name: 'PAELLA VEGETALE DI RISO INTEGRALE', price: '21€', ingredients: 'Paella con verdure del giorno e riso integrale.' },
      { name: 'CURRY THAILANDESE DI TOFU E VERDURE', price: '16€', ingredients: "Curry, tofu e verdure dell'orto." },
      { name: 'HEURA CON VERDURE E SALSA DI ARACHIDI', price: '15€', ingredients: 'Heura di pollo vegetale in salsa di arachidi.' },
      { name: 'PAD THAI', price: '16€', ingredients: 'Pad Thai thailandese con germogli di soia, mandorle e lime.' },
      { name: 'RAVIOLI RIPIENI DI ZUCCHINA', price: '17€', ingredients: 'Ravioli di zucchina fatti in casa con salsa di noci.' },
    ],
    Secondi: [
      { name: 'PASTICCIO "FARAH DIBAH"', price: '21€', ingredients: 'Delizie di zucchina ripiene di paté vegetale e erbe fini.' },
      { name: 'SUPREMA DEL CASAR', price: '15€', ingredients: 'Saltato di asparagi, cipolla e funghi con peperoni al forno.' },
      { name: 'LASAGNA VEGETARIANA', price: '19€', ingredients: 'Pasta senza glutine, verdure di stagione e soia testurizzata.' },
      { name: 'UOVA STRAPAZZATE CON FUNGHI', price: '19€', ingredients: 'Uova strapazzate con funghi di stagione, asparagi, aglio fresco e peperoni del piquillo.' },
      { name: 'PARMIGIANA DI MELANZANE', price: '17€', ingredients: 'Melanzane, pomodoro fatto in casa, mozzarella e basilico.' },
    ],
    Dolci: [
      { name: 'MOUSSE DI FRAGOLE E FORMAGGIO FRESCO', price: '7€', ingredients: 'Deliziosa mousse di fragole con crema di formaggio fresco.' },
      { name: 'TIRAMISÙ FATTO IN CASA', price: '8€', ingredients: 'Tiramisù fatto in casa con crema al caffè.' },
      { name: 'PROFITEROLES AL CIOCCOLATO', price: '6€', ingredients: 'Profiteroles ripieni di panna con cioccolato bianco.' },
      { name: 'BROWNIE AL CIOCCOLATO CON MANDORLE', price: '7€', ingredients: 'Brownie della casa ripieno di mandorle.' },
      { name: 'GELATI ARTIGIANALI', price: '5€', ingredients: 'Gelati al limone, cioccolato, fragola, vaniglia, pistacchio.' },
    ],
  };


  const menuDataen = {
    Antipasti: [
      { name: 'SMOKED FISH TERRINE WITH RICOTTA', price: '13€', ingredients: 'Ricotta, shallots, daily fish with smoked herbs.' },
      { name: 'SAMPHIRE FRITTERS WITH FENNEL CEVICHE', price: '14€', ingredients: 'Prawn fritters with fennel and truffle oil.' },
      { name: 'PAN-FRIED ZUCCHINI FLOWERS', price: '16€', ingredients: 'Zucchini flowers stuffed with cheese, pan-fried.' },
      { name: 'VEGETABLE TARTARE WITH HUMMUS CREAM', price: '9€', ingredients: 'Daily vegetable tartare with chickpeas and spices.' },
      { name: 'POTATO NACHOS WITH MELTED CHEESE AND GUACAMOLE', price: '12€', ingredients: 'Fresh guacamole, spicy sauce, potato nachos, and melted cheese.' },
    ],
    Primi: [
      { name: 'VEGETABLE PAELLA WITH BROWN RICE', price: '21€', ingredients: 'Paella with daily vegetables and brown rice.' },
      { name: 'THAI CURRY WITH TOFU AND VEGETABLES', price: '16€', ingredients: 'Curry, tofu, and garden vegetables.' },
      { name: 'HEURA WITH VEGETABLES AND PEANUT SAUCE', price: '15€', ingredients: 'Plant-based chicken Heura in peanut sauce.' },
      { name: 'PAD THAI', price: '16€', ingredients: 'Thai Pad Thai with bean sprouts, almonds, and lime.' },
      { name: 'ZUCCHINI-STUFFED RAVIOLI', price: '17€', ingredients: 'Homemade zucchini ravioli with walnut sauce.' },
    ],
    Secondi: [
      { name: '“FARAH DIBAH” CASSEROLE', price: '21€', ingredients: 'Zucchini delights stuffed with vegetable paté and fine herbs.' },
      { name: 'SUPREME DEL CASAR', price: '15€', ingredients: 'Sautéed asparagus, onion, and mushrooms with baked peppers.' },
      { name: 'VEGETARIAN LASAGNA', price: '19€', ingredients: 'Gluten-free pasta, seasonal vegetables, and textured soy.' },
      { name: 'SCRAMBLED EGGS WITH MUSHROOMS', price: '19€', ingredients: 'Scrambled eggs with seasonal mushrooms, asparagus, fresh garlic, and piquillo peppers.' },
      { name: 'EGGPLANT PARMIGIANA', price: '17€', ingredients: 'Eggplants, homemade tomato sauce, mozzarella, and basil.' },
    ],
    Dolci: [
      { name: 'STRAWBERRY AND FRESH CHEESE MOUSSE', price: '7€', ingredients: 'Delicious strawberry mousse with fresh cheese cream.' },
      { name: 'HOMEMADE TIRAMISÙ', price: '8€', ingredients: 'Homemade tiramisù with coffee cream.' },
      { name: 'CHOCOLATE PROFITEROLES', price: '6€', ingredients: 'Profiteroles filled with cream and white chocolate.' },
      { name: 'CHOCOLATE BROWNIE WITH ALMONDS', price: '7€', ingredients: 'House-made brownie filled with almonds.' },
      { name: 'HOMEMADE ICE CREAMS', price: '5€', ingredients: 'Lemon, chocolate, strawberry, vanilla, pistachio ice creams.' },
    ],
  };


  export default {menuDataes,menuDatait,menuDataen}