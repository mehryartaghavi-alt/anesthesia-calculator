/* =========================================================
   ANESTHESIA CALCULATOR
   Drug Database - Version 1.0
   Starter clinical database
========================================================= */

const DRUG_DATABASE = {
    propofol: {
        id: "propofol",
        name: "Propofol",
        category: "Induction Agents",
        route: ["IV"],
        bolus: { doseMin: 1.5, doseMax: 2.5, unit: "mg/kg", weightBasis: "TBW" },
        infusion: { doseMin: null, doseMax: null, unit: "mcg/kg/min", weightBasis: "TBW" },
        indications: ["Induction of general anesthesia", "Maintenance of anesthesia", "Procedural sedation"],
        cautions: ["Hypotension", "Hemodynamic instability", "Elderly or frail patients"],
        renalAdjustment: false,
        hepaticAdjustment: "clinical",
        notes: "Individualize dose according to age, hemodynamic status and clinical condition."
    },

    etomidate: {
        id: "etomidate",
        name: "Etomidate",
        category: "Induction Agents",
        route: ["IV"],
        bolus: { doseMin: 0.2, doseMax: 0.3, unit: "mg/kg", weightBasis: "TBW" },
        infusion: null,
        indications: ["Induction of general anesthesia"],
        cautions: ["Myoclonus", "Adrenal suppression", "Pain on injection"],
        renalAdjustment: false,
        hepaticAdjustment: "clinical",
        notes: "Useful when cardiovascular stability is particularly important."
    },

    ketamine: {
        id: "ketamine",
        name: "Ketamine",
        category: "Induction Agents",
        route: ["IV", "IM"],
        bolus: { doseMin: 1, doseMax: 2, unit: "mg/kg", weightBasis: "TBW" },
        infusion: { doseMin: null, doseMax: null, unit: "mcg/kg/min", weightBasis: "TBW" },
        indications: ["Induction", "Analgesia", "Procedural sedation"],
        cautions: ["Hypertension", "Tachycardia", "Emergence reactions"],
        renalAdjustment: false,
        hepaticAdjustment: "clinical",
        notes: "Dose and route should be individualized."
    },

    fentanyl: {
        id: "fentanyl",
        name: "Fentanyl",
        category: "Opioids",
        route: ["IV", "IM"],
        bolus: { doseMin: 0.5, doseMax: 2, unit: "mcg/kg", weightBasis: "TBW" },
        infusion: { doseMin: null, doseMax: null, unit: "mcg/kg/hr", weightBasis: "TBW" },
        indications: ["Intraoperative analgesia", "Adjunct to general anesthesia"],
        cautions: ["Respiratory depression", "Bradycardia", "Chest wall rigidity"],
        renalAdjustment: "clinical",
        hepaticAdjustment: "clinical",
        notes: "Titrate to effect and monitor ventilation and hemodynamics."
    },

    morphine: {
        id: "morphine",
        name: "Morphine",
        category: "Opioids",
        route: ["IV", "IM", "SC"],
        bolus: { doseMin: 0.05, doseMax: 0.1, unit: "mg/kg", weightBasis: "TBW" },
        infusion: null,
        indications: ["Perioperative analgesia", "Postoperative analgesia"],
        cautions: ["Respiratory depression", "Hypotension", "Histamine-mediated effects"],
        renalAdjustment: "required",
        hepaticAdjustment: "clinical",
        notes: "Use caution in renal impairment because active metabolites may accumulate."
    },

    remifentanil: {
        id: "remifentanil",
        name: "Remifentanil",
        category: "Opioids",
        route: ["IV"],
        bolus: null,
        infusion: { doseMin: 0.025, doseMax: 2, unit: "mcg/kg/min", weightBasis: "TBW" },
        indications: ["Intraoperative analgesia"],
        cautions: ["Bradycardia", "Hypotension", "Respiratory depression"],
        renalAdjustment: false,
        hepaticAdjustment: false,
        notes: "Continuous monitoring and titration are required."
    },

    rocuronium: {
        id: "rocuronium",
        name: "Rocuronium",
        category: "Muscle Relaxants",
        route: ["IV"],
        bolus: { doseMin: 0.6, doseMax: 1.2, unit: "mg/kg", weightBasis: "TBW" },
        infusion: { doseMin: null, doseMax: null, unit: "mcg/kg/min", weightBasis: "TBW" },
        indications: ["Tracheal intubation", "Muscle relaxation"],
        cautions: ["Prolonged effect", "Anaphylaxis"],
        renalAdjustment: "clinical",
        hepaticAdjustment: "clinical",
        notes: "Neuromuscular monitoring should guide repeated dosing and reversal."
    },

    vecuronium: {
        id: "vecuronium",
        name: "Vecuronium",
        category: "Muscle Relaxants",
        route: ["IV"],
        bolus: { doseMin: 0.08, doseMax: 0.1, unit: "mg/kg", weightBasis: "TBW" },
        infusion: null,
        indications: ["Tracheal intubation", "Muscle relaxation"],
        cautions: ["Prolonged neuromuscular blockade", "Anaphylaxis"],
        renalAdjustment: "clinical",
        hepaticAdjustment: "clinical",
        notes: "Use quantitative neuromuscular monitoring whenever available."
    },

    cisatracurium: {
        id: "cisatracurium",
        name: "Cisatracurium",
        category: "Muscle Relaxants",
        route: ["IV"],
        bolus: { doseMin: 0.1, doseMax: 0.2, unit: "mg/kg", weightBasis: "TBW" },
        infusion: { doseMin: null, doseMax: null, unit: "mcg/kg/min", weightBasis: "TBW" },
        indications: ["Tracheal intubation", "Muscle relaxation"],
        cautions: ["Anaphylaxis", "Prolonged blockade if not monitored"],
        renalAdjustment: false,
        hepaticAdjustment: false,
        notes: "Organ-independent elimination is an important clinical feature."
    },

    succinylcholine: {
        id: "succinylcholine",
        name: "Succinylcholine",
        category: "Muscle Relaxants",
        route: ["IV", "IM"],
        bolus: { doseMin: 1, doseMax: 1.5, unit: "mg/kg", weightBasis: "TBW" },
        infusion: null,
        indications: ["Rapid sequence intubation", "Short-duration neuromuscular blockade"],
        cautions: ["Hyperkalemia", "Malignant hyperthermia susceptibility", "Bradycardia"],
        renalAdjustment: "clinical",
        hepaticAdjustment: false,
        notes: "Check contraindications and hyperkalemia risk before administration."
    },

    midazolam: {
        id: "midazolam",
        name: "Midazolam",
        category: "Sedation",
        route: ["IV", "IM"],
        bolus: { doseMin: 0.01, doseMax: 0.05, unit: "mg/kg", weightBasis: "TBW" },
        infusion: null,
        indications: ["Procedural sedation", "Anxiolysis", "Premedication"],
        cautions: ["Respiratory depression", "Synergistic effects with opioids"],
        renalAdjustment: "clinical",
        hepaticAdjustment: "clinical",
        notes: "Use lower doses in elderly or frail patients."
    },

    dexmedetomidine: {
        id: "dexmedetomidine",
        name: "Dexmedetomidine",
        category: "Sedation",
        route: ["IV"],
        bolus: null,
        infusion: { doseMin: 0.2, doseMax: 0.7, unit: "mcg/kg/hr", weightBasis: "TBW" },
        indications: ["Sedation", "Procedural sedation", "Adjunct to anesthesia"],
        cautions: ["Bradycardia", "Hypotension", "Transient hypertension with loading"],
        renalAdjustment: false,
        hepaticAdjustment: "reduce",
        notes: "A loading dose is not mandatory in every clinical situation."
    },

    norepinephrine: {
        id: "norepinephrine",
        name: "Norepinephrine",
        category: "Vasopressors",
        route: ["IV infusion"],
        bolus: null,
        infusion: { doseMin: 0.01, doseMax: 1, unit: "mcg/kg/min", weightBasis: "TBW" },
        indications: ["Vasodilatory hypotension", "Perioperative hypotension", "Shock"],
        cautions: ["Tissue ischemia", "Arrhythmias", "Extravasation injury"],
        renalAdjustment: false,
        hepaticAdjustment: false,
        notes: "Titrate to blood pressure, perfusion and clinical response."
    },

    phenylephrine: {
        id: "phenylephrine",
        name: "Phenylephrine",
        category: "Vasopressors",
        route: ["IV"],
        bolus: { doseMin: null, doseMax: null, unit: "mcg", weightBasis: null },
        infusion: { doseMin: null, doseMax: null, unit: "mcg/min", weightBasis: null },
        indications: ["Perioperative hypotension"],
        cautions: ["Bradycardia", "Reduced cardiac output", "Peripheral ischemia"],
        renalAdjustment: false,
        hepaticAdjustment: false,
        notes: "Bolus and infusion dosing should be selected according to clinical setting."
    },

    sugammadex: {
        id: "sugammadex",
        name: "Sugammadex",
        category: "Reversal Agents",
        route: ["IV"],
        bolus: { doseMin: null, doseMax: null, unit: "mg/kg", weightBasis: "TBW" },
        infusion: null,
        indications: ["Reversal of rocuronium or vecuronium"],
        cautions: ["Severe renal impairment", "Bradycardia", "Hypersensitivity"],
        renalAdjustment: "avoid/severe impairment",
        hepaticAdjustment: false,
        notes: "Dose should be selected according to depth of neuromuscular blockade."
    },

    neostigmine: {
        id: "neostigmine",
        name: "Neostigmine",
        category: "Reversal Agents",
        route: ["IV"],
        bolus: { doseMin: null, doseMax: null, unit: "mg/kg", weightBasis: "TBW" },
        infusion: null,
        indications: ["Reversal of nondepolarizing neuromuscular blockade"],
        cautions: ["Bradycardia", "Bronchospasm", "Cholinergic effects"],
        renalAdjustment: "clinical",
        hepaticAdjustment: false,
        notes: "Use only with appropriate spontaneous recovery and monitoring."
    }
};

/* =========================================================
   DATABASE HELPER FUNCTIONS
========================================================= */

function getDrug(drugId) {
    return DRUG_DATABASE[drugId] || null;
}

function getAllDrugs() {
    return Object.values(DRUG_DATABASE);
}

function getDrugCategories() {
    return [...new Set(
        Object.values(DRUG_DATABASE).map(drug => drug.category)
    )];
}

function getDrugsByCategory(category) {
    return Object.values(DRUG_DATABASE)
        .filter(drug => drug.category === category);
}

function getAdministrationTypes(drugId) {
    const drug = getDrug(drugId);
    if (!drug) return [];

    const types = [];

    if (drug.bolus) types.push("bolus");
    if (drug.infusion) types.push("infusion");

    return types;
}

function getDoseDefinition(drugId, administration) {
    const drug = getDrug(drugId);
    if (!drug) return null;

    return drug[administration] || null;
}
