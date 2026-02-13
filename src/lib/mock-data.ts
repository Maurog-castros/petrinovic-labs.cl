export type Product = {
    id: string;
    name: string;
    slug: string;
    description: string;
    shortDescription: string;
    price: number;
    category: "focus" | "energy" | "sleep";
    benefits: string[];
    features: string[];
    nutritionalInfo: {
        servingSize: string;
        servingsPerContainer: number;
        ingredients: { name: string; amount: string; dailyValue?: string }[];
    };
    warnings: string[];
    resolution?: string;
    image: string;
};

export const products: Product[] = [
    {
        id: "1",
        name: "NeuroFocus Prime",
        slug: "neurofocus-prime",
        shortDescription: "Nootrópico avanzado para concentración profunda y memoria de trabajo.",
        description: "NeuroFocus Prime es una fórmula diseñada para profesionales de alto rendimiento. Combina L-Teanina y Cafeína en ratio 2:1 para foco sin ansiedad, junto con Bacopa Monnieri para soporte cognitivo a largo plazo.",
        price: 34990,
        category: "focus",
        benefits: ["Concentración sostenida", "Memoria de trabajo", "Claridad mental"],
        features: ["Sin gluten", "Vegano", "GMP Certified"],
        nutritionalInfo: {
            servingSize: "2 cápsulas",
            servingsPerContainer: 30,
            ingredients: [
                { name: "L-Teanina", amount: "200 mg" },
                { name: "Cafeína Anhidra", amount: "100 mg" },
                { name: "Extracto de Bacopa Monnieri", amount: "300 mg" },
                { name: "Vitamina B12", amount: "2.4 mcg", dailyValue: "100%" },
            ],
        },
        warnings: [
            "No recomendable para menores de 15 años, en embarazo ni lactancia.",
            "Contiene cafeína.",
        ],
        resolution: "Res. Seremi de Salud R.M. N° 12345 del 12/03/2023",
        image: "/images/neurofocus.jpg", // Placeholder
    },
    {
        id: "2",
        name: "Deep Sleep Recovery",
        slug: "deep-sleep-recovery",
        shortDescription: "Complejo de magnesio y glicina para optimizar el descanso nocturno.",
        description: "Formulado para mejorar la calidad del sueño profundo sin causar somnolencia al día siguiente. Ideal para desconectar después de jornadas intensas frente a pantallas.",
        price: 29990,
        category: "sleep",
        benefits: ["Sueño reparador", "Relajación muscular", "Reducción de cortisol"],
        features: ["Sin melatonina", "Sin azúcar", "Keto friendly"],
        nutritionalInfo: {
            servingSize: "1 scoop (5g)",
            servingsPerContainer: 30,
            ingredients: [
                { name: "Magnesio Bisglicinato", amount: "400 mg", dailyValue: "100%" },
                { name: "Glicina", amount: "3000 mg" },
                { name: "L-Triptófano", amount: "500 mg" },
            ],
        },
        warnings: [
            "Su uso no es recomendable para consumo por menores de 8 años, embarazadas y nodrizas, salvo indicación profesional competente y no reemplaza a una alimentación balanceada.",
        ],
        resolution: "Res. Seremi de Salud R.M. N° 67890 del 15/06/2023",
        image: "/images/deepsleep.jpg",
    },
    {
        id: "3",
        name: "Vital Energy Adapt",
        slug: "vital-energy-adapt",
        shortDescription: "Adaptógenos para combatir la fatiga crónica y el estrés.",
        description: "Una mezcla potente de Rhodiola Rosea y Ashwagandha para equilibrar los niveles de energía y mejorar la resistencia al estrés físico y mental.",
        price: 32990,
        category: "energy",
        benefits: ["Energía estable", "Resistencia al estrés", "Mejora del ánimo"],
        features: ["Orgánico", "Non-GMO", "Sin estimulantes"],
        nutritionalInfo: {
            servingSize: "2 cápsulas",
            servingsPerContainer: 30,
            ingredients: [
                { name: "Extracto de Rhodiola Rosea", amount: "300 mg" },
                { name: "Extracto de Ashwagandha KSM-66", amount: "400 mg" },
                { name: "Panax Ginseng", amount: "100 mg" },
            ],
        },
        warnings: [
            "No administrar a personas con hipertensión arterial sin supervisión médica.",
        ],
        resolution: "Res. Seremi de Salud R.M. N° 54321 del 20/09/2023",
        image: "/images/vitalenergy.jpg",
    },
];
