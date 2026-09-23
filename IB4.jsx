// IB4 — Viruses, Antivirals, Autonomics, Neoplasia
// Block 4 of 10 in the sequence. The heaviest of the intro blocks.

const IB4_VIROLOGY_FUNDAMENTALS = [
  {
    chapter: "Microbiology → 26. Approach to Virology",
    meta: "2 videos · 13m",
    videos: [
      { title: "Approach to Virology", time: "8:31", status: "hy", note: "the virus algorithm" },
      { title: "Comprehensive Virus Diagrams", time: "4:49" },
    ],
  },
  {
    chapter: "Microbiology → 27. Basics of Virology",
    meta: "4 videos · 57m",
    videos: [
      { title: "Viral Organization", time: "16:51" },
      { title: "Mechanisms of Viral Infectivity", time: "19:09" },
      { title: "Viral Genetics", time: "13:11" },
      { title: "Host Defense", time: "7:59" },
    ],
  },
];

const IB4_SKETCHY_VIRUSES = [
  { section: "RNA Viruses: Positive Sense", count: 13, note: "Picornaviridae Overview through HIV Life Cycle" },
  { section: "RNA Viruses: Negative Sense", count: 8, note: "Influenzavirus through Rotavirus & Colorado Tick Fever" },
  { section: "DNA Viruses", count: 13, note: "HSV 1 & 2 through Hepatitis B Viral Life Cycle" },
];

const IB4_ANTIVIRALS = [
  { title: "Respiratory Antiviral Therapy", time: "12:18" },
  { title: "HSV and VZV Antiviral Therapy", time: "13:38" },
  { title: "Additional Herpetic Antiviral Therapy", time: "9:27" },
  { title: "HIV Antiretroviral Pharmacology", time: "4:19" },
  { title: "Antiretroviral Attachment and Fusion Inhibitors", time: "5:38" },
  { title: "Antiretroviral Nucleoside Reverse Transcriptase Inhibitors", time: "11:57" },
  { title: "Additional Antiretroviral Therapies", time: "13:22" },
  { title: "HIV Antiretroviral Management", time: "4:56" },
  { title: "Hepatitis B Antiviral Therapy", time: "14:24" },
  { title: "Hepatitis C Antiviral Therapy", time: "13:46" },
  { title: "Board-style Question Breakdown", time: "9:11" },
];
const IB4_AUTONOMICS = [
  { title: "Autonomic System Overview", time: "9:51" },
  { title: "Autonomic System Signaling", time: "9:02" },
  { title: "Autonomic Secondary Messengers", time: "5:35" },
  { title: "Autonomic System Summary", time: "10:51" },
  { title: "Other Involuntary Signaling Systems", time: "4:30" },
  { title: "Cholinomimetics - Direct Agonists", time: "10:19" },
  { title: "Cholinomimetics - Anticholinesterases", time: "8:39" },
  { title: "Anticholinesterase Poisoning", time: "8:17" },
  { title: "Muscarinic Antagonists", time: "5:48" },
  { title: "Endogenous Adrenergic Agonists", time: "14:03" },
  { title: "Direct Sympathomimetics", time: "8:31" },
  { title: "Indirect Sympathomimetics", time: "4:50" },
  { title: "Physiological Effects of Sympathomimetics", time: "10:00" },
  { title: "Sympatholytics", time: "3:05" },
  { title: "Alpha Adrenergic Antagonists", time: "9:05" },
  { title: "Beta Adrenergic Antagonists", time: "14:06" },
  { title: "Phosphodiesterase Inhibitors", time: "8:47" },
  { title: "Exposure to Multiple Autonomic Drugs", time: "13:47" },
  { title: "Board-style Question Breakdown 1", time: "5:31" },
  { title: "Board-style Question Breakdown 2", time: "10:10" },
];

const IB4_NEOPLASIA = [
  { title: "Dysplasia and Neoplasia", time: "10:15", note: "skipped in IB1 — this is where it lands" },
  { title: "Apoptotic Pathways", time: "12:19" },
  { title: "Cell Growth Regulation", time: "16:01" },
  { title: "Oncogenes and Tumor Suppressor Genes", time: "13:37" },
  { title: "Board-style Question Breakdown", time: "13:58" },
];

const IB4_CHEMO = [
  { title: "Cell Cycle Dependent Drug Targets", time: "13:36" },
  { title: "Cell Cycle Independent Drug Targets", time: "19:11" },
];

const IB4_PATHOMA = [
  "3.1 Neoplasia",
  "3.2a Carcinogenesis",
  "3.2b Carcinogenesis",
  "3.2c Carcinogenesis",
  "3.3 Tumor Progression",
  "3.4 Clinical Characteristics",
];
const IB4_TUMORS = [
  {
    section: "Gastroenterology → 9. Large Intestine",
    videos: ["13. Colonic Polyps (11:07)", "14. Colorectal Carcinogenesis Molecular Pathway (11:15)", "15. Colorectal Cancer (13:51)", "16. Polyposis Syndromes (11:17)"],
    tier: "required",
  },
  {
    section: "Gastroenterology → 8. Small Intestine",
    videos: ["18. Carcinoid Tumor (16:31)"],
    tier: "required",
  },
  {
    section: "Gastroenterology → 5. Liver",
    videos: ["22. Hepatocellular Carcinoma (17:49)", "23. Additional Liver Masses (16:07)"],
    tier: "required",
  },
  {
    section: "Pulmonology → 7. Lung Cancer",
    videos: ["1. Lung Cancer Basics (5:43)", "2. Small Cell Carcinoma (6:01)", "3. Non-Small Cell Carcinoma (10:32)", "4. Mesothelioma (3:29)"],
    tier: "required",
    note: "The whole chapter — only 25 minutes and all of it is high yield.",
  },
  {
    section: "Nephrology → 13. Inflammatory Conditions & Malignancy",
    videos: ["4. Renal Cell Carcinoma (13:28)", "6. Wilm\u2019s Tumor (7:05)", "7. Urothelial Carcinoma (9:26)", "8. Squamous Cell Carcinoma of the Bladder (5:32)"],
    tier: "optional",
  },
  {
    section: "Endocrinology → 6. Adrenal Glands",
    videos: ["9. Adrenal Neoplasms (11:13)"],
    tier: "optional",
  },
  {
    section: "Reproductive → cancer sections",
    videos: ["Male and female repro cancer videos"],
    tier: "optional",
  },
];

const IB4_UWORLD_GROUPS = [
  { name: "Block 1", count: 40, ids: "13554, 12708, 1365, 18623, 15244, 908, 22635, 1469, 2092, 1896, 1321, 11754, 1039, 1863, 1754, 15068, 1759, 1286, 1667, 15615, 2093, 1647, 1642, 12049, 1666, 15875, 1648, 345, 18498, 18622, 12048, 1549, 1552, 8371, 1374, 15340, 388, 15215, 19337, 15144" },
  { name: "Block 2", count: 40, ids: "1206, 19035, 19112, 1668, 15156, 1498, 1594, 15362, 1757, 16005, 374, 8324, 8290, 1906, 483, 11551, 22845, 1674, 428, 1464, 11822, 14891, 386, 1362, 1366, 1084, 375, 11377, 21470, 8249, 21019, 1718, 1717, 1649, 1375, 15491, 1760, 1762, 421, 2001" },
  { name: "Block 3", count: 40, ids: "18649, 14850, 15107, 11548, 18628, 313, 18497, 15113, 11729, 15069, 373, 1645, 553, 1443, 1646, 1675, 1572, 819, 6547, 48, 15587, 2019, 1551, 22656, 1724, 1644, 173, 429, 14780, 1595, 1499, 11955, 1160, 20932, 15335, 1015, 15011, 1564, 380, 1466" },
  { name: "Block 4", count: 40, ids: "365, 937, 19088, 377, 379, 372, 1359, 11395, 2061, 1672, 1966, 1670, 15565, 1497, 283, 18866, 1723, 1553, 1753, 19701, 376, 15645, 1550, 1083, 15021, 907, 390, 1042, 285, 19972, 2062, 1364, 1927, 1373, 1211, 1576, 1260, 1836, 1575, 366" },
  { name: "Block 5", count: 24, ids: "1660, 15375, 18655, 1409, 1323, 21018, 1411, 420, 22637, 7228, 11590, 1722, 649, 170, 1992, 1873, 47, 15125, 910, 1673, 1593, 669, 953, 7229" },
];
const IB4_UWORLD_TOPICS = [
  "Acanthosis nigricans: 936",
  "Acute and chronic inflammation: 406, 1218, 1220, 21420",
  "Acute leukemia: 1403, 1405, 1406, 1570, 1571, 1798, 1963, 15278, 18769, 20673",
  "Acute lymphoblastic leukemia: 1890",
  "Acyclovir: 1551, 1642, 1645, 11729",
  "Alpha agonists: 1343",
  "Anal cancer: 1723",
  "Anaplasia: 1759",
  "ANS drugs — acetylcholine: 170, 173, 1211, 1321, 1323, 1362, 1564, 2061, 2062, 13554, 14780, 18497, 18498, 18622, 18623, 19088",
  "ANS drugs — norepinephrine: 937, 1364, 1365, 1366, 1443, 1836, 2001, 15615, 15875, 18655, 21470",
  "Antiarrhythmic drugs: 1509, 2006",
  "Anticholinergics: 1321, 1564, 1868",
  "Antidepressants (TCA overdose): 708",
  "Antihistamines: 173, 174, 11537",
  "Antiretroviral therapy: 819, 1674, 1675, 2019, 7229, 8371, 11590, 15397",
  "Antiviral drugs: 1551, 1642, 1645",
  "Arbovirus: 15491",
  "Asbestos & arsenic poisoning: 553, 649, 841",
  "Asthma: 663, 1523, 15156",
  "Autonomic nervous system: 1359, 8249, 15156, 18866, 19337",
  "Autonomic receptors: 14850",
  "BCL-2: 15821",
  "Beta blockers: 692, 1444, 1836, 2000, 8289",
  "Bladder cancer: 336, 7623, 15186",
  "Bleomycin (interstitial lung disease): 14848",
  "Bone tumor: 341, 11747, 15635, 15636, 15645, 15696, 16002",
  "Brain tumors: 880",
  "Breast cancer: 1056, 1083, 1762, 1877, 2092, 2093",
  "Breast carcinoma: 1056, 1057, 1762, 1877, 21642",
  "Bronchiolitis: 1668",
  "Burkitt lymphoma: 1629, 1630, 1755",
  "Cancer cachexia: 1039",
  "Cancer drugs — alkylating agents: 1816",
  "Cancer drugs — antimetabolites: 718, 1818, 15293, 18703, 19689, 20372",
  "Cancer drugs — antitumor antibiotics: 1014, 1819, 14848",
  "Cancer drugs — DNA drugs: 2018, 15706",
  "Cancer drugs — microtubule inhibitors: 1894",
  "Cancer drugs — other: 581, 584, 1628, 1873, 7721, 11584, 11585, 11657, 11728, 12049, 14844, 14920, 14956, 15279, 15299, 17854, 18714, 19198, 20781, 20885",
  "Carcinoid tumors: 309, 424",
  "Cardiogenic shock: 1344",
  "Cell cycle: 313, 1717, 1718, 11929",
  "Cervical cancer: 869, 1753, 1992, 11858",
  "Chemotherapy: 1819, 1892",
  "Chikungunya fever: 14903",
  "Chronic leukemia: 1569, 8281, 11750, 12278",
  "Chronic pancreatitis & pancreatic cancer: 436, 475, 1547, 14939, 21146, 21994, 22178",
  "CNS lymphoma: 1260, 2083",
  "Cocaine: 2001",
  "Colonic polyps: 427, 430",
  "Colorectal cancer: 253, 420, 421, 423, 428, 431, 432, 790, 12049, 15011, 15012, 15020",
  "Community acquired pneumonia: 1666",
  "Cushing syndrome: 612, 927, 928, 1163, 1921",
  "Cytomegalovirus: 1576, 1592, 1593, 1644, 1646, 1647, 7228, 11548, 11551",
  "Dengue fever: 11377, 11395",
  "DNA mutations: 344, 429, 633, 636, 802, 1412, 1424, 1487, 2027",
  "DNA repair: 587, 673, 883, 1475, 1476, 1477, 2028, 22785",
  "DNA replication: 44, 1418, 1419, 1437, 1438, 2017, 11912",
  "DNA viruses: 365, 380, 386, 390, 1015, 1497, 15068",
  "Dose response curves: 1947",
  "Ductal carcinoma in situ: 1057",
  "Endometrial cancer: 258, 11885, 18233, 19641",
  "Epstein-Barr virus: 1375",
  "Esophageal cancer: 287, 14878, 14879",
  "Esophagitis: 283, 14891",
  "Fibroadenoma breast: 1109",
  "Focal nodular hyperplasia: 16070",
  "Folate antimetabolites: 1104",
  "Foscarnet: 1643",
  "Gastric cancer: 307",
  "Gastroesophageal reflux disease: 285",
  "Gestational trophoblastic disease: 335",
  "Gestational tumors: 335, 791, 792, 1830, 19004, 20877",
  "Glaucoma: 1322",
  "Hamartomas: 552",
  "Hand, foot, mouth disease: 15419, 15550",
  "Head and neck cancers: 15228",
  "Hemangioma: 54, 466, 827, 1873",
  "Hepatitis A: 366, 372, 373, 1863",
  "Hepatitis B: 46, 365, 367, 374, 375, 376, 377, 378, 379, 380, 386, 390, 15169, 15177",
  "Hepatitis C: 44, 388, 1927, 15144",
  "Hepatitis D: 45, 47, 48",
  "Hepatocellular cancer: 56, 57, 58, 60, 471, 11760",
  "Herpes viruses: 283, 907, 908, 1042, 1260, 1375, 1409, 1499, 1549, 1550, 1552, 1553, 1572, 1575, 1576, 1593, 1594, 1595, 1644, 1646, 1647, 1757, 6547, 7228, 7229, 8290, 11548, 11551, 11729, 14891, 15565",
  "Herpes zoster: 1042, 1552, 1553, 1641",
  "HIV: 953, 1463, 1672, 1722, 1724, 11568, 15066, 15069, 15107, 15113, 15125",
  "HIV CNS infections: 11862",
  "HIV drugs: 819, 953, 1673, 1674, 2019, 8371, 11590, 15107, 15113",
  "Hodgkin lymphoma: 1626, 1864",
  "HSV infection: 907, 908, 1409, 1499, 1549, 1550, 6547, 11604, 15565",
  "Human papillomavirus: 483, 1015, 11858, 11929",
  "Hypercalcemia: 978",
  "Hyperthyroidism: 1213, 1945",
  "Hypoglycemia: 1492",
  "Hypokalemia: 16978",
  "Immunizations: 1467",
  "Infectious mononucleosis: 1594, 1595, 1757, 7643, 15490",
  "Inflammation principles: 406, 1218, 1881, 7614, 15420, 15430, 20174, 20176, 21420",
  "Influenza: 1377, 1411, 1468, 1648, 1649",
  "Intraductal papilloma: 11890",
  "Intussusception: 416",
  "Kaposi sarcoma: 1761, 8290",
  "Keratin as a marker: 1160",
  "Li-Fraumeni syndrome: 345",
  "Lipodystrophy: 1673",
  "Lipoma: 15665",
  "Liver tumors: 53, 54, 56, 59, 471, 15012, 16070",
  "Lung cancer: 554, 555, 564, 650, 1286, 15460",
  "Lymphoedema: 1937",
  "Lynch syndrome: 429",
  "Macular degeneration: 7721",
  "Measles: 910, 1045, 1670",
  "Melanoma: 1113, 1960, 7707, 16865, 16895",
  "MEN syndromes: 988, 1658, 1659, 1660, 1844, 1845, 15105",
  "Meningitis: 113, 116, 118, 1966",
  "Metastatic liver disease: 59",
  "Methotrexate: 1447, 1818, 1857",
  "Mucocutaneous candidiasis: 110, 111",
  "Myasthenia gravis: 749, 1320, 6554, 14850",
  "Mycobacterium avium intracellulare complex: 1312",
  "Myocardial infarction: 1196",
  "Neoplasia: 553, 649, 669, 1206, 1286, 1754, 1759, 12048, 15011, 15335, 15340, 16005, 18649, 19112, 22637, 22845",
  "Neuroblastoma: 1263",
  "Neuroendocrine tumors: 585",
  "Neurofibromatosis: 1305, 1307, 1534",
  "Neuromuscular blocker: 1212",
  "Neuromuscular junction: 1934",
  "Nitrates: 136, 140, 143",
  "Non-Hodgkin lymphoma: 1086, 1627, 1628, 1629, 1630, 1754, 1755, 1758, 1911, 1918, 108087",
  "Oncogenes and tumor suppressor genes: 313",
  "Organophosphate poisoning: 1323, 1998",
  "Orthostatic hypotension: 1342",
  "Ovarian cancer: 578, 1158, 1837, 11652, 11912",
  "Ovarian epithelial tumors: 578, 1837",
  "Ovarian germ cell tumors: 11652, 20083, 20084, 107955",
  "Ovarian stromal tumors: 1158, 1928",
  "Pancreatic cancer: 436",
  "Parvovirus: 1374, 1495, 1896",
  "Peptic ulcer disease: 1918, 15018",
  "Pheochromocytoma: 926",
  "Phosphodiesterase inhibitors: 1118",
  "Pneumocystis pneumonia: 14840, 14870",
  "Polyarteritis nodosa: 457, 460",
  "Primary hypertension: 150",
  "Prion diseases: 911, 912, 2041",
  "Progressive multifocal leukoencephalopathy: 15068",
  "Prostate cancer: 341, 11747, 11754",
  "Pulsus paradoxus: 2100",
  "Rabies: 1465, 8324",
  "Radiation therapy: 1474",
  "Rb protein: 1718",
  "Renal and bladder tumors: 6, 336, 818, 905, 1862, 2013, 7226, 7227, 11806, 15176, 15186",
  "Renal cell carcinoma: 818, 904, 1862, 7227, 15176",
  "Respiratory mucosa: 478",
  "Retinoblastoma: 863",
  "Rheumatoid arthritis: 718",
  "RNA viruses: 48, 372, 373, 910, 1373, 1411, 1464, 1466, 1469, 1498, 1648, 1649, 1666, 1667, 1668, 1670, 1675, 1906, 1966, 8324, 11377, 11395, 12708, 15215, 15244, 15491, 15587, 19972",
  "Roseola infantum: 11822",
  "Rubella: 1464, 1575, 1669",
  "Second messengers: 994, 995",
  "Septic shock: 6811",
  "SIADH: 12293",
  "Sickle cell: 1496, 15562",
  "Signal transduction: 1122",
  "Skin and soft tissue infections: 8334",
  "Skin cancer: 935, 1113, 1993, 7707, 14184, 15228, 15425, 16862, 16865, 18647, 22600, 22608",
  "Smoking cessation: 8754",
  "Spasticity: 11458",
  "Sympathomimetic agents: 1164, 1364, 1365, 1367, 11925",
  "Testicular cancer: 580, 624, 15804, 15828",
  "Thrombophlebitis: 475",
  "Thyroid cancer: 1658, 1660, 1747, 17236",
  "Timolol: 1363",
  "TORCH infections: 22142, 22143, 22144",
  "Toxoplasmosis: 1038, 1573, 2082, 14905, 15588",
  "Transcription: 361, 1417, 2025, 2030, 2033, 2035, 2036, 2038, 2039, 8276, 8482, 11595, 12263",
  "Translation: 757, 1420, 1428, 2029, 2032, 2037",
  "Trastuzumab: 11585",
  "Tuberculosis: 1219, 1221, 1222, 1598",
  "Upper respiratory tract infections: 1373, 1497",
  "Urinary incontinence: 8249",
  "Urinary retention: 1211, 1362",
  "Uterine fibroids: 11885",
  "Vincristine: 1893",
  "Viral genetics: 1461, 1462, 1469, 12708",
  "Viral hepatitis: 47, 366, 375, 379, 388, 1863, 1927, 15144, 19701, 21018, 21019",
  "von Hippel-Lindau disease: 468",
  "West Nile virus infection: 1906, 15587",
  "Xeroderma pigmentosum: 883, 1476, 1477",
  "Zika virus: 15034",
];

const IB4_UWORLD_ALL = "6, 44, 45, 46, 47, 48, 53, 54, 56, 57, 58, 59, 60, 110, 111, 113, 116, 118, 136, 140, 143, 150, 170, 173, 174, 253, 258, 283, 285, 287, 307, 309, 313, 335, 336, 341, 344, 345, 361, 365, 366, 367, 372, 373, 374, 375, 376, 377, 378, 379, 380, 386, 388, 390, 406, 416, 420, 421, 423, 424, 427, 428, 429, 430, 431, 432, 436, 457, 460, 466, 468, 471, 475, 478, 483, 552, 553, 554, 555, 564, 578, 580, 581, 584, 585, 587, 612, 624, 633, 636, 649, 650, 663, 669, 673, 692, 708, 718, 749, 757, 790, 791, 792, 802, 818, 819, 827, 841, 863, 869, 880, 883, 904, 905, 907, 908, 910, 911, 912, 926, 927, 928, 935, 936, 937, 953, 978, 988, 994, 995, 1014, 1015, 1038, 1039, 1042, 1045, 1056, 1057, 1083, 1084, 1086, 1104, 1109, 1113, 1118, 1122, 1158, 1160, 1163, 1164, 1196, 1206, 1211, 1212, 1213, 1218, 1219, 1220, 1221, 1222, 1260, 1263, 1286, 1305, 1307, 1312, 1320, 1321, 1322, 1323, 1342, 1343, 1344, 1359, 1362, 1363, 1364, 1365, 1366, 1367, 1373, 1374, 1375, 1377, 1403, 1405, 1406, 1409, 1411, 1412, 1417, 1418, 1419, 1420, 1424, 1428, 1437, 1438, 1443, 1444, 1447, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1474, 1475, 1476, 1477, 1487, 1492, 1495, 1496, 1497, 1498, 1499, 1509, 1523, 1534, 1547, 1549, 1550, 1551, 1552, 1553, 1564, 1569, 1570, 1571, 1572, 1573, 1575, 1576, 1592, 1593, 1594, 1595, 1598, 1626, 1627, 1628, 1629, 1630, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1658, 1659, 1660, 1666, 1667, 1668, 1669, 1670, 1672, 1673, 1674, 1675, 1717, 1718, 1722, 1723, 1724, 1747, 1753, 1754, 1755, 1757, 1758, 1759, 1760, 1761, 1762, 1798, 1816, 1818, 1819, 1830, 1836, 1837, 1844, 1845, 1857, 1862, 1863, 1864, 1868, 1873, 1877, 1881, 1890, 1892, 1893, 1894, 1896, 1906, 1911, 1918, 1921, 1927, 1928, 1934, 1937, 1945, 1947, 1960, 1963, 1966, 1992, 1993, 1998, 2000, 2001, 2006, 2013, 2017, 2018, 2019, 2025, 2027, 2028, 2029, 2030, 2032, 2033, 2035, 2036, 2037, 2038, 2039, 2041, 2061, 2062, 2082, 2083, 2092, 2093, 2100, 6547, 6554, 6811, 7226, 7227, 7228, 7229, 7614, 7623, 7643, 7707, 7721, 8249, 8276, 8281, 8289, 8290, 8324, 8334, 8371, 8482, 8754, 11377, 11395, 11458, 11537, 11548, 11551, 11568, 11584, 11585, 11590, 11595, 11604, 11652, 11657, 11728, 11729, 11747, 11750, 11754, 11760, 11806, 11822, 11858, 11862, 11885, 11890, 11912, 11925, 11929, 11955, 12048, 12049, 12263, 12278, 12293, 12708, 13554, 14184, 14780, 14840, 14844, 14848, 14850, 14870, 14878, 14879, 14891, 14903, 14905, 14920, 14939, 14956, 15011, 15012, 15018, 15020, 15021, 15034, 15066, 15068, 15069, 15105, 15107, 15113, 15125, 15144, 15156, 15169, 15176, 15177, 15186, 15215, 15228, 15244, 15278, 15279, 15293, 15299, 15335, 15340, 15362, 15375, 15397, 15419, 15420, 15425, 15430, 15460, 15490, 15491, 15550, 15562, 15565, 15587, 15588, 15615, 15635, 15636, 15645, 15665, 15696, 15706, 15804, 15821, 15828, 15875, 16002, 16005, 16070, 16862, 16865, 16895, 16978, 17236, 17854, 18233, 18497, 18498, 18622, 18623, 18628, 18647, 18649, 18655, 18703, 18714, 18769, 18866, 19004, 19035, 19088, 19112, 19198, 19337, 19641, 19689, 19701, 19972, 20083, 20084, 20174, 20176, 20372, 20673, 20781, 20877, 20885, 20932, 21018, 21019, 21146, 21420, 21470, 21642, 21994, 22142, 22143, 22144, 22178, 22600, 22608, 22635, 22637, 22656, 22785, 22845, 107955, 108087";


const IB4_CHECKLIST_ITEMS = [
  { id: "bc-virology-fund", text: "BootCamp Micro 26 + 27 — Approach to Virology and Basics of Virology (mandatory, no substitute)" },
  { id: "viruses", text: "Virus organisms — pick ONE for content: all 34 Sketchy virus lessons, or BootCamp\u2019s virus chapters" },
  { id: "virus-anki", text: "Virus Anki — do BOTH the Sketchy and BootCamp decks for each pathogen, whichever one you watched" },
  { id: "antivirals", text: "BootCamp Micro 39 — Antivirals: all 11 videos" },
  { id: "autonomics", text: "BootCamp Pharm 3 — Autonomic System: all 20 videos" },
  { id: "neoplasia", text: "BootCamp Pathology 2 — the post-Calcification videos plus Dysplasia and Neoplasia" },
  { id: "chemo", text: "Cancer chemo — Cell Cycle Dependent and Independent Drug Targets" },
  { id: "pathoma", text: "Pathoma Chapter 3 — Principles of Neoplasia (all 6 videos)" },
  { id: "tumors-required", text: "Tumor videos — Gastro (large intestine, small intestine, liver) and the full Lung Cancer chapter" },
  { id: "tumors-semi", text: "Tumor videos — Nephrology: RCC, Wilm\u2019s, Urothelial, SCC of bladder (optional)" },
  { id: "anki-unsuspend", text: "Unsuspend the matching AnKing deck for every video listed on this page — as you go, not in one batch" },
  { id: "daily-anki", text: "Daily Anki reviews — no exceptions, no pile-up" },
  { id: "qbank-week", text: "Final week: suspend new cards, stop new content, grind UWorld + Rx in tutor mode" },
];

function IB4Badge({ status, note }) {
  if (!status) return null;
  const styles = {
    optional: "bg-slate-100 text-slate-500",
    semi: "bg-slate-100 text-slate-500",
    hy: "bg-teal-50 text-teal-700",
    required: "bg-teal-50 text-teal-700",
  };
  const labels = { optional: "optional", semi: "optional", hy: "high yield", required: "required" };
  return (
    <span className={"ml-2 text-[11px] font-semibold px-1.5 py-0.5 rounded " + styles[status]}>
      {labels[status]}
      {note ? " \u00b7 " + note : ""}
    </span>
  );
}
function IB4() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">Block 4 of 10</p>
        <h1 className="text-3xl font-bold text-navy-900 mt-1">
          IB4 — Viruses, Antivirals, Autonomics, Neoplasia
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          This is the biggest intro block, and it is not close. Four unrelated domains land at once: every virus,
          every antiviral, the entire autonomic nervous system, and all of oncology. Roughly{" "}
          <span className="font-semibold text-navy-900">15 hours of video</span> before Anki. Read the pacing
          section below before you start — this is the block people fall behind in.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <span className="font-semibold text-navy-900">Step 1 connection:</span> virology and autonomics are two of
          the densest, most reliably tested areas on the exam, and neoplasia principles underpin every organ-specific
          cancer question you will ever see. Nothing here is filler. The volume is the problem, not the relevance.
        </p>
      </div>

      {/* Pacing */}
      <Collapsible
        title="Read This First — How to Pace 15 Hours"
        subtitle="The block people fall behind in"
        defaultOpen
        tone="navy"
      >
        <p className="text-sm text-slate-600 mb-3">
          IB4 is roughly double IB3. If you treat it like a normal block you will not finish, and the part that gets
          dropped is always the last thing on the list — which here is oncology, the part that carries into every
          later block.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-navy-900">Start with virus organisms, not fundamentals.</span> They
            are the single largest chunk (~5h on Sketchy) and the slowest to get through. Front-load them while you
            still have runway. Fundamentals are only 70 minutes and can slot in anywhere.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Autonomics in one continuous stretch.</span> Nearly three
            hours, and the drug classes only make sense against each other. Splitting it across two weeks means
            relearning the receptor logic twice.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Neoplasia is a prerequisite, not a topic.</span> The
            BootCamp principles and Pathoma Ch.3 explain the mechanisms behind every organ-specific tumor video. Do
            them before the tumor list, not after.
          </li>
        </ul>
      </Collapsible>

      {/* Virus choice */}
      <Collapsible
        title="Viruses — Pick One for Content, Do Both for Anki"
        subtitle="The rule here is different from IB3. Read it carefully."
        defaultOpen
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          For the virus organisms themselves, Sketchy and BootCamp are both genuinely good and you should{" "}
          <span className="font-semibold text-navy-900">watch only one</span>. I did about half of each because I
          got bored of Sketchy partway through — that worked fine.
        </p>
        <div className="rounded-lg bg-teal-50 border border-teal-100 p-3 mb-3">
          <p className="text-sm text-navy-900">
            <span className="font-semibold">But do both Anki decks.</span> This is the part people get wrong. The
            Sketchy and BootCamp virus decks overlap heavily, but each one has cards the other simply does not. The
            content is redundant; the cards are not.
          </p>
        </div>
        <p className="text-sm text-slate-600 mb-3">
          <span className="font-semibold text-navy-900">Time check, so you choose with open eyes:</span> Sketchy
          covers all 34 virus lessons in about 5 hours. BootCamp's virus chapters run considerably longer — the
          positive-sense RNA chapter alone is over 5 hours. They are equally good; they are not equally long.
        </p>
        <p className="text-sm text-slate-600">
          One thing BootCamp has that Sketchy does not: the{" "}
          <span className="font-semibold text-navy-900">virus classification algorithm</span> taught in Approach to
          Virology. It is genuinely excellent for sorting an unknown virus on an exam, and it is the reason the
          fundamentals chapters are mandatory regardless of which resource you pick for the organisms.
        </p>
      </Collapsible>
      {/* Virology fundamentals */}
      <Collapsible
        title="BootCamp — Virology Fundamentals"
        subtitle="Mandatory. No substitute, whichever resource you pick for the organisms."
        defaultOpen
        tone="navy"
      >
        <div className="space-y-5">
          {IB4_VIROLOGY_FUNDAMENTALS.map((group) => (
            <div key={group.chapter}>
              <h4 className="font-semibold text-navy-800">{group.chapter}</h4>
              <p className="text-xs text-slate-500 mb-1.5">{group.meta}</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {group.videos.map((v) => (
                  <li key={v.title} className="flex flex-wrap items-baseline">
                    <span className="text-navy-900 font-medium">{v.title}</span>
                    <span className="ml-2 text-xs text-slate-400">{v.time}</span>
                    <IB4Badge status={v.status} note={v.note} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Collapsible>

      {/* Virus organisms */}
      <Collapsible
        title="Virus Organisms — Sketchy (or BootCamp)"
        subtitle="34 Sketchy lessons, ~5h"
        defaultOpen
        tone="teal"
      >
        <h4 className="font-semibold text-navy-800 mb-1">Sketchy Viruses</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-4">
          {IB4_SKETCHY_VIRUSES.map((s) => (
            <li key={s.section}>
              <span className="font-medium text-navy-900">{s.section}</span>{" "}
              <span className="text-slate-400">— {s.count} lessons</span>
              <span className="block text-xs text-slate-500">{s.note}</span>
            </li>
          ))}
        </ul>
        <div className="pt-3 border-t border-slate-200">
          <h4 className="font-semibold text-navy-800 mb-1 text-sm">Or: BootCamp virus chapters</h4>
          <p className="text-sm text-slate-600">
            If Sketchy is not for you, BootCamp covers the same organisms across its virus chapters in the
            Microbiology section — positive-sense RNA, negative-sense RNA, and DNA viruses. Individual videos are
            not listed here on purpose: it is an alternative path, not a second checklist. Open the chapters and
            work straight through.
          </p>
        </div>
      </Collapsible>

      {/* Antivirals */}
      <Collapsible
        title="BootCamp — Antivirals"
        subtitle="Microbiology 39 · 11 videos · 1h 53m"
        tone="teal"
      >
        <ul className="space-y-1 text-sm text-slate-600">
          {IB4_ANTIVIRALS.map((v) => (
            <li key={v.title} className="flex flex-wrap items-baseline">
              <span className="text-navy-900 font-medium">{v.title}</span>
              <span className="ml-2 text-xs text-slate-400">{v.time}</span>
            </li>
          ))}
        </ul>
      </Collapsible>

      {/* Autonomics */}
      <Collapsible
        title="BootCamp — Autonomic System"
        subtitle="Pharmacology 3 · 20 videos · 2h 55m"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          IB1 deliberately skipped this chapter and deferred it here. It is long — do it in one continuous stretch
          rather than spread across weeks, because the drug classes only make sense against each other.
        </p>
        <ul className="space-y-1 text-sm text-slate-600">
          {IB4_AUTONOMICS.map((v) => (
            <li key={v.title} className="flex flex-wrap items-baseline">
              <span className="text-navy-900 font-medium">{v.title}</span>
              <span className="ml-2 text-xs text-slate-400">{v.time}</span>
            </li>
          ))}
        </ul>
      </Collapsible>
      {/* Neoplasia */}
      <Collapsible
        title="Neoplasia — BootCamp Pathology + Pathoma Ch.3"
        subtitle="Picks up exactly where IB1 stopped"
        defaultOpen
        tone="navy"
      >
        <p className="text-sm text-slate-600 mb-3">
          IB1 took Pathology Ch.2 through Calcification and deferred the rest here. These are the remaining videos,
          plus Dysplasia and Neoplasia, which IB1 skipped on purpose.
        </p>
        <h4 className="font-semibold text-navy-800 mb-1 text-sm">BootCamp — Pathology (Principles) 2</h4>
        <ul className="space-y-1 text-sm text-slate-600 mb-2">
          {IB4_NEOPLASIA.map((v) => (
            <li key={v.title} className="flex flex-wrap items-baseline">
              <span className="text-navy-900 font-medium">{v.title}</span>
              <span className="ml-2 text-xs text-slate-400">{v.time}</span>
              {v.note ? <span className="ml-2 text-xs text-slate-500 italic">{v.note}</span> : null}
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500 italic mb-5">
          BootCamp cross-lists this exact chapter under Hematology &amp; Oncology 8, "Principles of Oncology and
          Therapeutics" — same videos, same runtimes. If you find it there, you have not missed a section.
        </p>

        <h4 className="font-semibold text-navy-800 mb-1 text-sm">Pathoma Chapter 3 — Principles of Neoplasia</h4>
        <ul className="list-disc pl-5 space-y-0.5 text-sm text-slate-600 mb-2">
          {IB4_PATHOMA.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
        <p className="text-sm text-slate-600">
          Videos and PDFs are in the shared{" "}
          <a
            href="https://drive.google.com/drive/folders/17IltmLSAor6ys0iaQKP3QIW12ZSbBbjy?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="text-teal-600 underline hover:text-teal-700"
          >
            Pathoma Complete Drive folder
          </a>{" "}
          — chapter-numbered subfolders, <span className="font-semibold text-navy-900">03. Principles of Neoplasia</span>{" "}
          for this block.
        </p>
        <p className="text-sm text-slate-600 mt-3">
          <span className="font-semibold text-navy-900">Both Anki decks are required here</span> — the BootCamp
          Pathology cards and the Pathoma Neoplasia cards.
        </p>
      </Collapsible>

      {/* Chemo */}
      <Collapsible
        title="Cancer Chemotherapy"
        subtitle="Filed under Pharm — because that is how it gets tested"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          These two live inside BootCamp's Pathology chapter, but the class asks them as pharmacology, so treat them
          that way. Look for them under{" "}
          <span className="font-semibold text-navy-900">Pathology (Principles) → 2. Cellular Injury &amp; Neoplasia</span>,
          videos 10 and 11.
        </p>
        <ul className="space-y-1 text-sm text-slate-600">
          {IB4_CHEMO.map((v) => (
            <li key={v.title} className="flex flex-wrap items-baseline">
              <span className="text-navy-900 font-medium">{v.title}</span>
              <span className="ml-2 text-xs text-slate-400">{v.time}</span>
            </li>
          ))}
        </ul>
      </Collapsible>

      {/* Tumors */}
      <Collapsible
        title="Tumor Videos by System"
        subtitle="Scattered across five BootCamp subjects"
        defaultOpen
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-4">
          Organ-specific cancers, pulled from wherever BootCamp files them. Do neoplasia principles first — these
          videos assume you already know the mechanisms.
        </p>
        <div className="space-y-4">
          {IB4_TUMORS.map((g) => (
            <div key={g.section}>
              <h4 className="font-semibold text-navy-800 text-sm flex flex-wrap items-baseline">
                <span>{g.section}</span>
                <IB4Badge status={g.tier} />
              </h4>
              <ul className="list-disc pl-5 space-y-0.5 text-sm text-slate-600 mt-1">
                {g.videos.map((v) => (
                  <li key={v} className={g.tier === "optional" ? "text-slate-400" : ""}>{v}</li>
                ))}
              </ul>
              {g.note ? <p className="text-xs text-slate-500 mt-1 italic">{g.note}</p> : null}
            </div>
          ))}
        </div>
      </Collapsible>
      {/* AnKing */}
      <Collapsible
        title="AnKing Tags"
        subtitle="One rule, no tag list"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          You know the drill by now, so there is no tag list on this page. The rule:{" "}
          <span className="font-semibold text-navy-900">unsuspend the matching AnKing deck for every video listed
          above</span>, the day you watch it, never in one batch at the end.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-navy-900">Viruses — both decks.</span> Sketchy and BootCamp, even
            though you only watched one for content.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Neoplasia — both decks.</span> BootCamp Pathology and
            Pathoma Neoplasia.
          </li>
          <li>
            Everything else — the matching deck for each video.
          </li>
        </ul>
        <p className="text-sm text-slate-600 mt-3">
          This is the block where letting cards pile up ends the method. Fifteen hours of video is a lot of
          unsuspending, and it compounds fast.
        </p>
      </Collapsible>

      {/* Qbank */}
      <Collapsible
        title="Qbank — UWorld Question IDs"
        subtitle="Five ready-made blocks, plus a topic index"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-4">
          This is the final-week grind (Step 6), not something you run throughout the block. Two ways to use it:
          run the pre-built blocks straight through, or use the topic index to target a weak area.
        </p>

        <h4 className="font-semibold text-navy-800 mb-1">Ready-made blocks</h4>
        <p className="text-xs text-slate-500 mb-2">
          184 questions, already sorted into blocks. Paste a block into UWorld's search-by-QID field and run it in
          tutor mode. Blocks 1–4 are full 40s; block 5 is the remainder.
        </p>
        <div className="space-y-2.5 mb-5">
          {IB4_UWORLD_GROUPS.map((g) => (
            <div key={g.name}>
              <h5 className="font-semibold text-navy-900 text-sm">
                {g.name} <span className="font-normal text-xs text-slate-400">— {g.count} questions</span>
              </h5>
              <p className="text-xs text-slate-600 font-mono break-all leading-relaxed">{g.ids}</p>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-slate-200 mb-5">
          <h4 className="font-semibold text-navy-800 mb-1">Master list — every ID, deduplicated</h4>
          <p className="text-xs text-slate-500 mb-2">
            539 unique questions: both ID lists plus the five blocks, merged with every repeat collapsed and
            nothing dropped. Use this if you want full coverage rather than curated blocks.
          </p>
          <p className="text-xs text-slate-600 font-mono break-all leading-relaxed">{IB4_UWORLD_ALL}</p>
        </div>

        <div className="pt-3 border-t border-slate-200">
          <h4 className="font-semibold text-navy-800 mb-1">Topic index</h4>
          <p className="text-xs text-slate-500 mb-2">
            189 topics, merged from both of your ID lists. Use this when you miss something and want every
            question on that subject — not as a to-do list.
          </p>
          <ul className="space-y-0.5 text-xs text-slate-600">
            {IB4_UWORLD_TOPICS.map((t) => {
              const cut = t.indexOf(": ");
              return (
                <li key={t} className="break-all">
                  <span className="font-semibold text-navy-900">{t.slice(0, cut)}</span>
                  <span className="font-mono"> — {t.slice(cut + 2)}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Collapsible>

      {/* Custom cards */}
      <Collapsible
        title="Custom High-Yield Cards"
        subtitle="Includes the BootCamp virus algorithm mnemonics"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          The extra layer on top of AnKing. The piece worth calling out: a custom set built around the{" "}
          <span className="font-semibold text-navy-900">virus classification algorithm and mnemonics</span> from
          BootCamp's Approach to Virology. If you picked Sketchy for the organisms, these cards are how you still get
          the algorithm.
        </p>
        <p className="text-sm text-slate-600 mb-3">
          Import it; it lands under{" "}
          <code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">MS2::HY Enrique's Custom Cards::IB4</code>{" "}
          with subdecks already organized. Study these alongside your AnKing reviews, not as a separate pile.
        </p>
        <a
          href="https://drive.google.com/file/d/1HyRFvfHbD9wt8NMyAPBKTrkwcYV26LKZ/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          className="text-teal-600 underline hover:text-teal-700 text-sm font-semibold"
        >
          Download IB4 Custom Cards (.apkg)
        </a>
      </Collapsible>

      {/* Mehlman */}
      <Collapsible
        title="Final-Week Resources — Mehlman High-Yield"
        subtitle="1-2 days before the exam: read + do the matching Anki cards"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          The last step of the method. Read these the day or two before the block exam and do Mehlman's matching Anki
          cards alongside them.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-3">
          <li>
            <a
              href="./HY-Pathology.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 underline hover:text-teal-700"
            >
              Mehlman — High Yield Pathology (PDF)
            </a>{" "}
            <span className="text-xs text-slate-500">— the neoplasia half of this block</span>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1pULYm-OeO8-8jd2qiQ2WtGUwOwF7SgsF/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 underline hover:text-teal-700"
            >
              Mehlman — High Yield Micro (PDF)
            </a>{" "}
            <span className="text-xs text-slate-500">— viruses and antivirals</span>
          </li>
          <li>
            <a
              href="./MM%20Pharma%20Merged%20(1).pdf"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 underline hover:text-teal-700"
            >
              Mehlman — High Yield Pharm (PDF)
            </a>{" "}
            <span className="text-xs text-slate-500">— autonomics and cancer chemo</span>
          </li>
          <li>
            <a
              href="./Mehlman-PDFs-Anki.apkg"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 underline hover:text-teal-700"
            >
              Mehlman PDFs Anki deck (.apkg)
            </a>{" "}
            <span className="text-xs text-slate-500">— covers every block, import once</span>
          </li>
        </ul>
      </Collapsible>

      {/* Checklist */}
      <Checklist storageKey="ib4" title="IB4 Execution Checklist" items={IB4_CHECKLIST_ITEMS} />
    </div>
  );
}
