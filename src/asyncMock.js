const products = [
    {
        id: '1',
        name: '100% WHEY PROTEIN',
        price: 26000,
        category: 'Proteinas',
        img: 'https://goldnutrition.com.ar/images/2022/12/07/100_whey_protein_gold_nutrition_proteina_doypack_suplemento_deportivo.png',
        stock: 10,
        description: 'Blend Premium de proteína concentrada, hidrolizada y aislada con 28gs por servicio y un alto aporte de aminoácidos BCAAs y L-Glutamine.'
    },
    {
        id: '2',
        name: 'Vegetal Protein Isolate',
        price: 11500,
        category: 'Proteinas',
        img: 'https://goldnutrition.com.ar/images/2022/08/10/vegetal_protein_isolate_gold_nutrition_doypack_2lb_doypack_vegan.png',
        stock: 10,
        description: 'Blend perfectamente aislada con un aporte de 30g de proteína natural por dosis, altamente rica en aminoácidos de cadena ramifcada y aminoácidos esenciales. Fortificada con Vitamina B12'
    },
    {
        id: '3',
        name: 'Whey Ripped Protein',
        price: 13000,
        category: 'Proteinas',
        img: 'https://goldnutrition.com.ar/images/2022/12/07/whey_ripped_protein_gold_nutrition_proetina_quemadora_suplemento_deportivo_cafeina_carnitina_taurina.png',
        stock: 10,
        description: 'La fórmula proteica elaborada por Gold Nutrition. Consiste en un producto “Todo-en-Uno” destinado a promover la pérdida de grasa y el mantenimiento de la masa muscular unificando los ingredientes más eficaces para eliminar grasas y construir músculos.'
    },
    {
        id: '4',
        name: 'Amino Essensial',
        price: 8000,
        category: 'Aminoacidos',
        img: 'https://goldnutrition.com.ar/images/2023/09/07/amino-essential-gold-nutrition-prime-line-supplement-bcaa-colageno-glutamina-aminoacidos-esenciales2.png',
        stock: 10,
        description: 'El poder de 19 aminoácidos claves, con un enorme valor biológico que trabajan en sinergia regulando el crecimiento muscular, la reparación, el buen funcionamiento y la estructura de todas las células vivas.'
    },
    {
        id: '5',
        name: 'Amino Gold',
        price: 7000,
        category: 'Aminoacidos',
        img: 'https://goldnutrition.com.ar/images/2022/03/28/amino_gold_nutrition_bcaa_811.png',
        stock: 10,
        description: 'Puros aminoácidos micronizados de rápida asimilación, llegan más rápido a toda tu fibra muscular.'
    },
    {
        id: '6',
        name: 'Lipo Burn Hardcore',
        price: 5000,
        category: 'Termogenicos',
        img: 'https://goldnutrition.com.ar/images/2021/02/04/lipo_black_burn_hardcore_gold_nutrition_nuevo2.png',
        stock: 10,
        description: 'Nueva fórmula quemadora de grasa de rápida acción, ahora en cápsulas que te proporciona un torrente de energía termogénica.'
    },
    {
        id: '7',
        name: 'Pre-Work Gold',
        price: 7000,
        category: 'Pre-Entreno',
        img: 'https://goldnutrition.com.ar/images/2021/03/19/pre-work_gold_nutrition.png',
        stock: 10,
        description: 'Potencia al máximo la energía, la musculatura, y la circulación sanguínea, para incrementar la actividad cardiovascular y la capacidad anaeróbica.'
    },
    {
        id: '8',
        name: 'N.O. Gold',
        price: 7200,
        category: 'Fuerza y Resistencia',
        img: 'https://goldnutrition.com.ar/images/2020/02/11/n.o_gold_nutrition_oxido_nitrico.png',
        stock: 10,
        description: 'Su efecto vasodilatador favorece el aumento del flujo sanguíneo a las zonas musculares involucradas en el entrenamiento, permitiendo mejorar el rendimiento y la fuerza.'
    },
    {
        id: '9',
        name: 'HMB Gold',
        price: 4000,
        category: 'Fuerza y Resistencia',
        img: 'https://goldnutrition.com.ar/images/2020/08/31/hmb_gold_nutrition_suplemento.png',
        stock: 10,
        description: 'El HMB te permite acceder a la máxima biodisponibilidad del metabolito, al contener en cada servicio 750 mg de HMB. '
    },
    {
        id: '10',
        name: 'Gainer Gold',
        price: 12000,
        category: 'Ganador de Masa',
        img: 'https://goldnutrition.com.ar/images/2021/11/23/gainer-gold-nutrition-ganador-masa-muscular-mejor-doypack-5lb-home.png',
        stock: 10,
        description: 'Está construído sobre una base de Proteína láctea concentrada con un aporte de Caseína y suplementada con Creatina Monohidrato.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
};

export const getProductById = (productId) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            const product = products.filter(prod => prod.id === productId);
            if (product) {
                resolve(product);
            } else {
                reject (new Error ('Producto no encontrado'))
            }
        }, 500)
    })
};

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
};