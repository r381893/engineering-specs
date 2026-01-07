// 工程規格數據

// ============================================
// 金屬管件規格 (碳鋼管 ASTM A106/A53)
// ============================================
const steelPipeData = [
    { size: '1/2"', nominal: 15, od: 21.3, sch10: { wt: 2.11, id: 17.08 }, sch40: { wt: 2.77, id: 15.76 }, sch80: { wt: 3.73, id: 13.84 } },
    { size: '3/4"', nominal: 20, od: 26.7, sch10: { wt: 2.11, id: 22.48 }, sch40: { wt: 2.87, id: 20.96 }, sch80: { wt: 3.91, id: 18.88 } },
    { size: '1"', nominal: 25, od: 33.4, sch10: { wt: 2.77, id: 27.86 }, sch40: { wt: 3.38, id: 26.64 }, sch80: { wt: 4.55, id: 24.30 } },
    { size: '1-1/4"', nominal: 32, od: 42.2, sch10: { wt: 2.77, id: 36.66 }, sch40: { wt: 3.56, id: 35.08 }, sch80: { wt: 4.85, id: 32.50 } },
    { size: '1-1/2"', nominal: 40, od: 48.3, sch10: { wt: 2.77, id: 42.76 }, sch40: { wt: 3.68, id: 40.94 }, sch80: { wt: 5.08, id: 38.14 } },
    { size: '2"', nominal: 50, od: 60.3, sch10: { wt: 2.77, id: 54.76 }, sch40: { wt: 3.91, id: 52.48 }, sch80: { wt: 5.54, id: 49.22 } },
    { size: '2-1/2"', nominal: 65, od: 73.0, sch10: { wt: 3.05, id: 66.90 }, sch40: { wt: 5.16, id: 62.68 }, sch80: { wt: 7.01, id: 58.98 } },
    { size: '3"', nominal: 80, od: 88.9, sch10: { wt: 3.05, id: 82.80 }, sch40: { wt: 5.49, id: 77.92 }, sch80: { wt: 7.62, id: 73.66 } },
    { size: '4"', nominal: 100, od: 114.3, sch10: { wt: 3.05, id: 108.20 }, sch40: { wt: 6.02, id: 102.26 }, sch80: { wt: 8.56, id: 97.18 } },
    { size: '5"', nominal: 125, od: 141.3, sch10: { wt: 3.40, id: 134.50 }, sch40: { wt: 6.55, id: 128.20 }, sch80: { wt: 9.53, id: 122.24 } },
    { size: '6"', nominal: 150, od: 168.3, sch10: { wt: 3.40, id: 161.50 }, sch40: { wt: 7.11, id: 154.08 }, sch80: { wt: 10.97, id: 146.36 } },
    { size: '8"', nominal: 200, od: 219.1, sch10: { wt: 3.76, id: 211.58 }, sch40: { wt: 8.18, id: 202.74 }, sch80: { wt: 12.70, id: 193.70 } },
    { size: '10"', nominal: 250, od: 273.0, sch10: { wt: 4.19, id: 264.62 }, sch40: { wt: 9.27, id: 254.46 }, sch80: { wt: 15.06, id: 242.88 } },
    { size: '12"', nominal: 300, od: 323.8, sch10: { wt: 4.57, id: 314.66 }, sch40: { wt: 10.31, id: 303.18 }, sch80: { wt: 17.48, id: 288.84 } }
];

// ============================================
// 塑膠管規格 (PVC/CPVC/PP-R)
// ============================================
const plasticPipeData = {
    pvc: [
        { size: '1/2"', nominal: 15, od: 20, wt: 1.5, id: 17.0, pressure: 'PN16' },
        { size: '3/4"', nominal: 20, od: 25, wt: 1.9, id: 21.2, pressure: 'PN16' },
        { size: '1"', nominal: 25, od: 32, wt: 2.4, id: 27.2, pressure: 'PN16' },
        { size: '1-1/4"', nominal: 32, od: 40, wt: 3.0, id: 34.0, pressure: 'PN16' },
        { size: '1-1/2"', nominal: 40, od: 50, wt: 3.7, id: 42.6, pressure: 'PN16' },
        { size: '2"', nominal: 50, od: 63, wt: 4.7, id: 53.6, pressure: 'PN16' },
        { size: '2-1/2"', nominal: 65, od: 75, wt: 5.6, id: 63.8, pressure: 'PN16' },
        { size: '3"', nominal: 80, od: 90, wt: 6.7, id: 76.6, pressure: 'PN16' },
        { size: '4"', nominal: 100, od: 110, wt: 8.2, id: 93.6, pressure: 'PN16' },
        { size: '5"', nominal: 125, od: 140, wt: 10.4, id: 119.2, pressure: 'PN16' },
        { size: '6"', nominal: 150, od: 160, wt: 11.9, id: 136.2, pressure: 'PN16' },
        { size: '8"', nominal: 200, od: 200, wt: 14.9, id: 170.2, pressure: 'PN16' }
    ],
    ppr: [
        { size: '20', nominal: 20, od: 20, wt: 3.4, id: 13.2, pressure: 'PN20', sdr: 6 },
        { size: '25', nominal: 25, od: 25, wt: 4.2, id: 16.6, pressure: 'PN20', sdr: 6 },
        { size: '32', nominal: 32, od: 32, wt: 5.4, id: 21.2, pressure: 'PN20', sdr: 6 },
        { size: '40', nominal: 40, od: 40, wt: 6.7, id: 26.6, pressure: 'PN20', sdr: 6 },
        { size: '50', nominal: 50, od: 50, wt: 8.4, id: 33.2, pressure: 'PN20', sdr: 6 },
        { size: '63', nominal: 63, od: 63, wt: 10.5, id: 42.0, pressure: 'PN20', sdr: 6 },
        { size: '75', nominal: 75, od: 75, wt: 12.5, id: 50.0, pressure: 'PN20', sdr: 6 },
        { size: '90', nominal: 90, od: 90, wt: 15.0, id: 60.0, pressure: 'PN20', sdr: 6 },
        { size: '110', nominal: 110, od: 110, wt: 18.4, id: 73.2, pressure: 'PN20', sdr: 6 }
    ]
};

// ============================================
// 冷媒壓力-溫度對照表 (壓力單位: kg/cm² G)
// ============================================
const refrigerantData = {
    R22: [
        { temp: -40, pressure: 0.05 },
        { temp: -30, pressure: 0.64 },
        { temp: -20, pressure: 1.45 },
        { temp: -10, pressure: 2.54 },
        { temp: 0, pressure: 3.92 },
        { temp: 5, pressure: 4.74 },
        { temp: 10, pressure: 5.67 },
        { temp: 15, pressure: 6.72 },
        { temp: 20, pressure: 7.91 },
        { temp: 25, pressure: 9.23 },
        { temp: 30, pressure: 10.70 },
        { temp: 35, pressure: 12.33 },
        { temp: 40, pressure: 14.13 },
        { temp: 45, pressure: 16.10 },
        { temp: 50, pressure: 18.27 },
        { temp: 55, pressure: 20.63 }
    ],
    R410A: [
        { temp: -40, pressure: 1.02 },
        { temp: -30, pressure: 2.00 },
        { temp: -20, pressure: 3.31 },
        { temp: -10, pressure: 5.02 },
        { temp: 0, pressure: 7.18 },
        { temp: 5, pressure: 8.48 },
        { temp: 10, pressure: 9.93 },
        { temp: 15, pressure: 11.54 },
        { temp: 20, pressure: 13.34 },
        { temp: 25, pressure: 15.34 },
        { temp: 30, pressure: 17.54 },
        { temp: 35, pressure: 19.97 },
        { temp: 40, pressure: 22.64 },
        { temp: 45, pressure: 25.56 },
        { temp: 50, pressure: 28.76 },
        { temp: 55, pressure: 32.24 }
    ],
    R32: [
        { temp: -40, pressure: 0.78 },
        { temp: -30, pressure: 1.64 },
        { temp: -20, pressure: 2.85 },
        { temp: -10, pressure: 4.47 },
        { temp: 0, pressure: 6.58 },
        { temp: 5, pressure: 7.83 },
        { temp: 10, pressure: 9.24 },
        { temp: 15, pressure: 10.83 },
        { temp: 20, pressure: 12.61 },
        { temp: 25, pressure: 14.59 },
        { temp: 30, pressure: 16.79 },
        { temp: 35, pressure: 19.22 },
        { temp: 40, pressure: 21.89 },
        { temp: 45, pressure: 24.83 },
        { temp: 50, pressure: 28.05 },
        { temp: 55, pressure: 31.56 }
    ],
    R134a: [
        { temp: -40, pressure: -0.58 },
        { temp: -30, pressure: -0.16 },
        { temp: -20, pressure: 0.33 },
        { temp: -10, pressure: 1.01 },
        { temp: 0, pressure: 1.93 },
        { temp: 5, pressure: 2.49 },
        { temp: 10, pressure: 3.14 },
        { temp: 15, pressure: 3.89 },
        { temp: 20, pressure: 4.74 },
        { temp: 25, pressure: 5.70 },
        { temp: 30, pressure: 6.79 },
        { temp: 35, pressure: 8.01 },
        { temp: 40, pressure: 9.37 },
        { temp: 45, pressure: 10.89 },
        { temp: 50, pressure: 12.57 },
        { temp: 55, pressure: 14.44 }
    ],
    R404A: [
        { temp: -40, pressure: 0.82 },
        { temp: -30, pressure: 1.72 },
        { temp: -20, pressure: 2.96 },
        { temp: -10, pressure: 4.58 },
        { temp: 0, pressure: 6.65 },
        { temp: 5, pressure: 7.89 },
        { temp: 10, pressure: 9.30 },
        { temp: 15, pressure: 10.90 },
        { temp: 20, pressure: 12.70 },
        { temp: 25, pressure: 14.70 },
        { temp: 30, pressure: 16.93 },
        { temp: 35, pressure: 19.40 },
        { temp: 40, pressure: 22.11 },
        { temp: 45, pressure: 25.09 },
        { temp: 50, pressure: 28.35 },
        { temp: 55, pressure: 31.91 }
    ]
};

// ============================================
// 鋼索吊重規格 (6x19 鋼芯)
// ============================================
const wireRopeData = [
    { diameter: 6, breakingLoad: 2.14, safeLoad: 0.36, weight: 0.16 },
    { diameter: 8, breakingLoad: 3.80, safeLoad: 0.63, weight: 0.28 },
    { diameter: 10, breakingLoad: 5.95, safeLoad: 0.99, weight: 0.44 },
    { diameter: 12, breakingLoad: 8.55, safeLoad: 1.43, weight: 0.63 },
    { diameter: 14, breakingLoad: 11.7, safeLoad: 1.95, weight: 0.86 },
    { diameter: 16, breakingLoad: 15.2, safeLoad: 2.53, weight: 1.12 },
    { diameter: 18, breakingLoad: 19.3, safeLoad: 3.22, weight: 1.42 },
    { diameter: 20, breakingLoad: 23.8, safeLoad: 3.97, weight: 1.75 },
    { diameter: 22, breakingLoad: 28.8, safeLoad: 4.80, weight: 2.12 },
    { diameter: 24, breakingLoad: 34.3, safeLoad: 5.72, weight: 2.52 },
    { diameter: 26, breakingLoad: 40.2, safeLoad: 6.70, weight: 2.96 },
    { diameter: 28, breakingLoad: 46.7, safeLoad: 7.78, weight: 3.43 },
    { diameter: 30, breakingLoad: 53.6, safeLoad: 8.93, weight: 3.94 },
    { diameter: 32, breakingLoad: 61.0, safeLoad: 10.17, weight: 4.48 },
    { diameter: 36, breakingLoad: 77.1, safeLoad: 12.85, weight: 5.67 },
    { diameter: 40, breakingLoad: 95.2, safeLoad: 15.87, weight: 7.00 }
];

// ============================================
// 攻牙鑽頭尺寸對照表 (公制粗牙)
// ============================================
const tappingData = [
    { thread: 'M2', pitch: 0.4, drillSize: 1.6, minDrill: 1.55, maxDrill: 1.65 },
    { thread: 'M2.5', pitch: 0.45, drillSize: 2.05, minDrill: 2.00, maxDrill: 2.10 },
    { thread: 'M3', pitch: 0.5, drillSize: 2.5, minDrill: 2.45, maxDrill: 2.55 },
    { thread: 'M4', pitch: 0.7, drillSize: 3.3, minDrill: 3.25, maxDrill: 3.35 },
    { thread: 'M5', pitch: 0.8, drillSize: 4.2, minDrill: 4.15, maxDrill: 4.25 },
    { thread: 'M6', pitch: 1.0, drillSize: 5.0, minDrill: 4.95, maxDrill: 5.10 },
    { thread: 'M8', pitch: 1.25, drillSize: 6.8, minDrill: 6.70, maxDrill: 6.90 },
    { thread: 'M10', pitch: 1.5, drillSize: 8.5, minDrill: 8.40, maxDrill: 8.60 },
    { thread: 'M12', pitch: 1.75, drillSize: 10.2, minDrill: 10.10, maxDrill: 10.35 },
    { thread: 'M14', pitch: 2.0, drillSize: 12.0, minDrill: 11.90, maxDrill: 12.15 },
    { thread: 'M16', pitch: 2.0, drillSize: 14.0, minDrill: 13.90, maxDrill: 14.15 },
    { thread: 'M18', pitch: 2.5, drillSize: 15.5, minDrill: 15.35, maxDrill: 15.65 },
    { thread: 'M20', pitch: 2.5, drillSize: 17.5, minDrill: 17.35, maxDrill: 17.65 },
    { thread: 'M22', pitch: 2.5, drillSize: 19.5, minDrill: 19.35, maxDrill: 19.65 },
    { thread: 'M24', pitch: 3.0, drillSize: 21.0, minDrill: 20.85, maxDrill: 21.20 },
    { thread: 'M27', pitch: 3.0, drillSize: 24.0, minDrill: 23.85, maxDrill: 24.20 },
    { thread: 'M30', pitch: 3.5, drillSize: 26.5, minDrill: 26.30, maxDrill: 26.70 }
];

// 攻牙鑽頭尺寸（細牙）
const tappingFineData = [
    { thread: 'M6x0.75', pitch: 0.75, drillSize: 5.25, minDrill: 5.20, maxDrill: 5.30 },
    { thread: 'M8x1.0', pitch: 1.0, drillSize: 7.0, minDrill: 6.95, maxDrill: 7.10 },
    { thread: 'M10x1.0', pitch: 1.0, drillSize: 9.0, minDrill: 8.95, maxDrill: 9.10 },
    { thread: 'M10x1.25', pitch: 1.25, drillSize: 8.75, minDrill: 8.65, maxDrill: 8.85 },
    { thread: 'M12x1.25', pitch: 1.25, drillSize: 10.75, minDrill: 10.65, maxDrill: 10.85 },
    { thread: 'M12x1.5', pitch: 1.5, drillSize: 10.5, minDrill: 10.40, maxDrill: 10.60 },
    { thread: 'M14x1.5', pitch: 1.5, drillSize: 12.5, minDrill: 12.40, maxDrill: 12.60 },
    { thread: 'M16x1.5', pitch: 1.5, drillSize: 14.5, minDrill: 14.40, maxDrill: 14.60 },
    { thread: 'M18x1.5', pitch: 1.5, drillSize: 16.5, minDrill: 16.40, maxDrill: 16.60 },
    { thread: 'M20x1.5', pitch: 1.5, drillSize: 18.5, minDrill: 18.40, maxDrill: 18.60 },
    { thread: 'M20x2.0', pitch: 2.0, drillSize: 18.0, minDrill: 17.90, maxDrill: 18.15 },
    { thread: 'M24x2.0', pitch: 2.0, drillSize: 22.0, minDrill: 21.90, maxDrill: 22.15 }
];

// ============================================
// 六角螺栓扭力值參考 (8.8級, Nm)
// ============================================
const boltTorqueData = [
    { size: 'M4', torque: 2.9, torqueOil: 2.2 },
    { size: 'M5', torque: 5.9, torqueOil: 4.4 },
    { size: 'M6', torque: 10, torqueOil: 7.5 },
    { size: 'M8', torque: 25, torqueOil: 18 },
    { size: 'M10', torque: 49, torqueOil: 37 },
    { size: 'M12', torque: 85, torqueOil: 64 },
    { size: 'M14', torque: 135, torqueOil: 100 },
    { size: 'M16', torque: 210, torqueOil: 155 },
    { size: 'M18', torque: 290, torqueOil: 215 },
    { size: 'M20', torque: 410, torqueOil: 310 },
    { size: 'M22', torque: 560, torqueOil: 420 },
    { size: 'M24', torque: 710, torqueOil: 530 },
    { size: 'M27', torque: 1050, torqueOil: 780 },
    { size: 'M30', torque: 1420, torqueOil: 1070 }
];

// ============================================
// 電纜/電線規格 (銅線安全電流)
// ============================================
const cableData = [
    { mm2: 0.75, awg: '20', ampPVC: 6, ampXLPE: 9, resistance: 24.5 },
    { mm2: 1.0, awg: '18', ampPVC: 8, ampXLPE: 11, resistance: 18.1 },
    { mm2: 1.25, awg: '17', ampPVC: 10, ampXLPE: 14, resistance: 14.5 },
    { mm2: 1.5, awg: '16', ampPVC: 12, ampXLPE: 16, resistance: 12.1 },
    { mm2: 2.0, awg: '14', ampPVC: 16, ampXLPE: 21, resistance: 9.08 },
    { mm2: 2.5, awg: '13', ampPVC: 20, ampXLPE: 26, resistance: 7.41 },
    { mm2: 3.5, awg: '12', ampPVC: 25, ampXLPE: 33, resistance: 5.29 },
    { mm2: 5.5, awg: '10', ampPVC: 35, ampXLPE: 46, resistance: 3.39 },
    { mm2: 8, awg: '8', ampPVC: 48, ampXLPE: 63, resistance: 2.32 },
    { mm2: 14, awg: '6', ampPVC: 68, ampXLPE: 89, resistance: 1.35 },
    { mm2: 22, awg: '4', ampPVC: 90, ampXLPE: 117, resistance: 0.863 },
    { mm2: 30, awg: '3', ampPVC: 105, ampXLPE: 138, resistance: 0.641 },
    { mm2: 38, awg: '2', ampPVC: 125, ampXLPE: 163, resistance: 0.495 },
    { mm2: 50, awg: '1', ampPVC: 150, ampXLPE: 195, resistance: 0.386 },
    { mm2: 60, awg: '1/0', ampPVC: 170, ampXLPE: 222, resistance: 0.322 },
    { mm2: 80, awg: '2/0', ampPVC: 200, ampXLPE: 260, resistance: 0.245 },
    { mm2: 100, awg: '3/0', ampPVC: 235, ampXLPE: 305, resistance: 0.193 },
    { mm2: 125, awg: '4/0', ampPVC: 270, ampXLPE: 351, resistance: 0.154 },
    { mm2: 150, awg: '250MCM', ampPVC: 300, ampXLPE: 392, resistance: 0.129 },
    { mm2: 200, awg: '350MCM', ampPVC: 355, ampXLPE: 463, resistance: 0.0966 },
    { mm2: 250, awg: '500MCM', ampPVC: 405, ampXLPE: 528, resistance: 0.0773 },
    { mm2: 325, awg: '700MCM', ampPVC: 475, ampXLPE: 618, resistance: 0.0595 }
];

// ============================================
// 法蘭規格 (JIS 10K)
// ============================================
const flangeData = {
    jis10k: [
        { size: '1/2"', nominal: 15, od: 95, pcd: 65, holes: 4, holeDia: 15, thickness: 12 },
        { size: '3/4"', nominal: 20, od: 100, pcd: 70, holes: 4, holeDia: 15, thickness: 12 },
        { size: '1"', nominal: 25, od: 125, pcd: 90, holes: 4, holeDia: 19, thickness: 14 },
        { size: '1-1/4"', nominal: 32, od: 135, pcd: 100, holes: 4, holeDia: 19, thickness: 16 },
        { size: '1-1/2"', nominal: 40, od: 140, pcd: 105, holes: 4, holeDia: 19, thickness: 16 },
        { size: '2"', nominal: 50, od: 155, pcd: 120, holes: 4, holeDia: 19, thickness: 16 },
        { size: '2-1/2"', nominal: 65, od: 175, pcd: 140, holes: 4, holeDia: 19, thickness: 18 },
        { size: '3"', nominal: 80, od: 185, pcd: 150, holes: 8, holeDia: 19, thickness: 18 },
        { size: '4"', nominal: 100, od: 210, pcd: 175, holes: 8, holeDia: 19, thickness: 18 },
        { size: '5"', nominal: 125, od: 250, pcd: 210, holes: 8, holeDia: 23, thickness: 20 },
        { size: '6"', nominal: 150, od: 280, pcd: 240, holes: 8, holeDia: 23, thickness: 22 },
        { size: '8"', nominal: 200, od: 330, pcd: 290, holes: 12, holeDia: 23, thickness: 22 },
        { size: '10"', nominal: 250, od: 400, pcd: 355, holes: 12, holeDia: 25, thickness: 24 },
        { size: '12"', nominal: 300, od: 450, pcd: 400, holes: 16, holeDia: 25, thickness: 24 }
    ],
    ansi150: [
        { size: '1/2"', nominal: 15, od: 89, pcd: 60.3, holes: 4, holeDia: 16, thickness: 11 },
        { size: '3/4"', nominal: 20, od: 98, pcd: 69.9, holes: 4, holeDia: 16, thickness: 13 },
        { size: '1"', nominal: 25, od: 108, pcd: 79.4, holes: 4, holeDia: 16, thickness: 14 },
        { size: '1-1/4"', nominal: 32, od: 117, pcd: 88.9, holes: 4, holeDia: 16, thickness: 16 },
        { size: '1-1/2"', nominal: 40, od: 127, pcd: 98.4, holes: 4, holeDia: 16, thickness: 18 },
        { size: '2"', nominal: 50, od: 152, pcd: 120.7, holes: 4, holeDia: 19, thickness: 19 },
        { size: '2-1/2"', nominal: 65, od: 178, pcd: 139.7, holes: 4, holeDia: 19, thickness: 22 },
        { size: '3"', nominal: 80, od: 190, pcd: 152.4, holes: 4, holeDia: 19, thickness: 24 },
        { size: '4"', nominal: 100, od: 229, pcd: 190.5, holes: 8, holeDia: 19, thickness: 24 },
        { size: '6"', nominal: 150, od: 279, pcd: 241.3, holes: 8, holeDia: 22, thickness: 26 },
        { size: '8"', nominal: 200, od: 343, pcd: 298.5, holes: 8, holeDia: 22, thickness: 29 },
        { size: '10"', nominal: 250, od: 406, pcd: 362, holes: 12, holeDia: 26, thickness: 30 },
        { size: '12"', nominal: 300, od: 483, pcd: 432, holes: 12, holeDia: 26, thickness: 32 }
    ]
};

// ============================================
// 保溫材料厚度建議 (冷水/熱水/蒸汽)
// ============================================
const insulationData = {
    coldWater: [
        { pipeSize: '1/2"', nominal: 15, thickness25: 25, thickness40: 40 },
        { pipeSize: '3/4"', nominal: 20, thickness25: 25, thickness40: 40 },
        { pipeSize: '1"', nominal: 25, thickness25: 25, thickness40: 40 },
        { pipeSize: '1-1/4"', nominal: 32, thickness25: 25, thickness40: 40 },
        { pipeSize: '1-1/2"', nominal: 40, thickness25: 25, thickness40: 50 },
        { pipeSize: '2"', nominal: 50, thickness25: 25, thickness40: 50 },
        { pipeSize: '2-1/2"', nominal: 65, thickness25: 30, thickness40: 50 },
        { pipeSize: '3"', nominal: 80, thickness25: 30, thickness40: 50 },
        { pipeSize: '4"', nominal: 100, thickness25: 40, thickness40: 50 },
        { pipeSize: '6"', nominal: 150, thickness25: 40, thickness40: 65 },
        { pipeSize: '8"', nominal: 200, thickness25: 50, thickness40: 65 }
    ],
    hotWater: [
        { pipeSize: '1/2"', nominal: 15, temp80: 25, temp120: 40 },
        { pipeSize: '3/4"', nominal: 20, temp80: 25, temp120: 40 },
        { pipeSize: '1"', nominal: 25, temp80: 25, temp120: 40 },
        { pipeSize: '1-1/4"', nominal: 32, temp80: 30, temp120: 50 },
        { pipeSize: '1-1/2"', nominal: 40, temp80: 30, temp120: 50 },
        { pipeSize: '2"', nominal: 50, temp80: 40, temp120: 50 },
        { pipeSize: '2-1/2"', nominal: 65, temp80: 40, temp120: 65 },
        { pipeSize: '3"', nominal: 80, temp80: 40, temp120: 65 },
        { pipeSize: '4"', nominal: 100, temp80: 50, temp120: 65 },
        { pipeSize: '6"', nominal: 150, temp80: 50, temp120: 75 },
        { pipeSize: '8"', nominal: 200, temp80: 65, temp120: 100 }
    ]
};

// ============================================
// 閥門 Cv 值參考
// ============================================
const valveCvData = {
    ballValve: [
        { size: '1/2"', nominal: 15, cv: 7.5 },
        { size: '3/4"', nominal: 20, cv: 14 },
        { size: '1"', nominal: 25, cv: 28 },
        { size: '1-1/4"', nominal: 32, cv: 48 },
        { size: '1-1/2"', nominal: 40, cv: 68 },
        { size: '2"', nominal: 50, cv: 110 },
        { size: '2-1/2"', nominal: 65, cv: 175 },
        { size: '3"', nominal: 80, cv: 270 },
        { size: '4"', nominal: 100, cv: 480 },
        { size: '6"', nominal: 150, cv: 1100 },
        { size: '8"', nominal: 200, cv: 1900 }
    ],
    butterflyValve: [
        { size: '2"', nominal: 50, cv: 60 },
        { size: '2-1/2"', nominal: 65, cv: 100 },
        { size: '3"', nominal: 80, cv: 160 },
        { size: '4"', nominal: 100, cv: 290 },
        { size: '5"', nominal: 125, cv: 470 },
        { size: '6"', nominal: 150, cv: 680 },
        { size: '8"', nominal: 200, cv: 1250 },
        { size: '10"', nominal: 250, cv: 2000 },
        { size: '12"', nominal: 300, cv: 2900 }
    ],
    gateValve: [
        { size: '1/2"', nominal: 15, cv: 6 },
        { size: '3/4"', nominal: 20, cv: 11 },
        { size: '1"', nominal: 25, cv: 22 },
        { size: '1-1/4"', nominal: 32, cv: 38 },
        { size: '1-1/2"', nominal: 40, cv: 55 },
        { size: '2"', nominal: 50, cv: 95 },
        { size: '2-1/2"', nominal: 65, cv: 150 },
        { size: '3"', nominal: 80, cv: 220 },
        { size: '4"', nominal: 100, cv: 400 },
        { size: '6"', nominal: 150, cv: 900 },
        { size: '8"', nominal: 200, cv: 1600 }
    ]
};

// ============================================
// 熱膨脹係數 (×10⁻⁶ /°C)
// ============================================
const expansionData = [
    { material: '碳鋼', coefficient: 11.7, tempRange: '20-100°C' },
    { material: '不鏽鋼 304', coefficient: 17.3, tempRange: '20-100°C' },
    { material: '不鏽鋼 316', coefficient: 16.0, tempRange: '20-100°C' },
    { material: '銅', coefficient: 16.5, tempRange: '20-100°C' },
    { material: '鋁', coefficient: 23.1, tempRange: '20-100°C' },
    { material: 'PVC', coefficient: 70, tempRange: '20-60°C' },
    { material: 'CPVC', coefficient: 62, tempRange: '20-80°C' },
    { material: 'PP-R', coefficient: 150, tempRange: '20-60°C' },
    { material: 'PE', coefficient: 200, tempRange: '20-60°C' }
];

// ============================================
// 管件當量長度 (m) - 用於壓損計算
// ============================================
const fittingEquivalentData = {
    elbow90: [
        { size: '1/2"', nominal: 15, length: 0.5 },
        { size: '3/4"', nominal: 20, length: 0.6 },
        { size: '1"', nominal: 25, length: 0.8 },
        { size: '1-1/4"', nominal: 32, length: 1.0 },
        { size: '1-1/2"', nominal: 40, length: 1.2 },
        { size: '2"', nominal: 50, length: 1.5 },
        { size: '2-1/2"', nominal: 65, length: 1.8 },
        { size: '3"', nominal: 80, length: 2.3 },
        { size: '4"', nominal: 100, length: 3.0 },
        { size: '6"', nominal: 150, length: 4.5 },
        { size: '8"', nominal: 200, length: 6.0 }
    ],
    elbow45: [
        { size: '1/2"', nominal: 15, length: 0.3 },
        { size: '3/4"', nominal: 20, length: 0.35 },
        { size: '1"', nominal: 25, length: 0.45 },
        { size: '1-1/4"', nominal: 32, length: 0.55 },
        { size: '1-1/2"', nominal: 40, length: 0.65 },
        { size: '2"', nominal: 50, length: 0.85 },
        { size: '2-1/2"', nominal: 65, length: 1.0 },
        { size: '3"', nominal: 80, length: 1.3 },
        { size: '4"', nominal: 100, length: 1.7 },
        { size: '6"', nominal: 150, length: 2.5 },
        { size: '8"', nominal: 200, length: 3.3 }
    ],
    tee: [
        { size: '1/2"', nominal: 15, length: 0.9 },
        { size: '3/4"', nominal: 20, length: 1.1 },
        { size: '1"', nominal: 25, length: 1.4 },
        { size: '1-1/4"', nominal: 32, length: 1.8 },
        { size: '1-1/2"', nominal: 40, length: 2.1 },
        { size: '2"', nominal: 50, length: 2.7 },
        { size: '2-1/2"', nominal: 65, length: 3.3 },
        { size: '3"', nominal: 80, length: 4.1 },
        { size: '4"', nominal: 100, length: 5.5 },
        { size: '6"', nominal: 150, length: 8.2 },
        { size: '8"', nominal: 200, length: 11.0 }
    ],
    gateValve: [
        { size: '1/2"', nominal: 15, length: 0.1 },
        { size: '3/4"', nominal: 20, length: 0.15 },
        { size: '1"', nominal: 25, length: 0.2 },
        { size: '1-1/4"', nominal: 32, length: 0.25 },
        { size: '1-1/2"', nominal: 40, length: 0.3 },
        { size: '2"', nominal: 50, length: 0.4 },
        { size: '2-1/2"', nominal: 65, length: 0.5 },
        { size: '3"', nominal: 80, length: 0.6 },
        { size: '4"', nominal: 100, length: 0.8 },
        { size: '6"', nominal: 150, length: 1.2 },
        { size: '8"', nominal: 200, length: 1.5 }
    ]
};

// ============================================
// 焊條規格對照
// ============================================
const weldingRodData = [
    { type: 'E6010', material: '碳鋼', position: '全位置', current: 'DC+', tensile: 430, use: '管道根部焊接' },
    { type: 'E6011', material: '碳鋼', position: '全位置', current: 'AC/DC+', tensile: 430, use: '一般結構焊接' },
    { type: 'E6013', material: '碳鋼', position: '全位置', current: 'AC/DC±', tensile: 430, use: '薄板焊接' },
    { type: 'E7016', material: '碳鋼', position: '全位置', current: 'AC/DC+', tensile: 490, use: '重要結構焊接' },
    { type: 'E7018', material: '碳鋼', position: '全位置', current: 'AC/DC+', tensile: 490, use: '低氫焊接' },
    { type: 'E308-16', material: '不鏽鋼304', position: '全位置', current: 'AC/DC+', tensile: 550, use: '304不鏽鋼焊接' },
    { type: 'E309-16', material: '異種鋼', position: '全位置', current: 'AC/DC+', tensile: 550, use: '碳鋼與不鏽鋼焊接' },
    { type: 'E316-16', material: '不鏽鋼316', position: '全位置', current: 'AC/DC+', tensile: 520, use: '316不鏽鋼焊接' },
    { type: 'ER70S-6', material: '碳鋼(CO2)', position: '全位置', current: 'DC+', tensile: 490, use: 'CO2氣體保護焊' }
];

// 焊接預熱溫度參考
const preheatData = [
    { material: '碳鋼 (≤0.25%C)', thickness: '≤25mm', preheat: '不需預熱' },
    { material: '碳鋼 (≤0.25%C)', thickness: '25-50mm', preheat: '50-100°C' },
    { material: '碳鋼 (≤0.25%C)', thickness: '>50mm', preheat: '100-150°C' },
    { material: '碳鋼 (0.25-0.45%C)', thickness: '≤25mm', preheat: '100-150°C' },
    { material: '碳鋼 (0.25-0.45%C)', thickness: '>25mm', preheat: '150-250°C' },
    { material: '低合金鋼', thickness: '≤25mm', preheat: '100-150°C' },
    { material: '低合金鋼', thickness: '>25mm', preheat: '150-250°C' },
    { material: '不鏽鋼 304/316', thickness: '全部', preheat: '不需預熱' },
    { material: '鋁合金', thickness: '全部', preheat: '不需預熱 (可加熱至100°C)' }
];

// ============================================
// 起重機/吊車作業規格
// ============================================
const craneData = [
    { capacity: 5, radius3m: 5.0, radius5m: 3.5, radius8m: 2.0, radius10m: 1.5, boomLength: 15 },
    { capacity: 10, radius3m: 10.0, radius5m: 7.0, radius8m: 4.5, radius10m: 3.0, boomLength: 20 },
    { capacity: 16, radius3m: 16.0, radius5m: 11.0, radius8m: 7.0, radius10m: 5.0, boomLength: 24 },
    { capacity: 25, radius3m: 25.0, radius5m: 17.5, radius8m: 11.0, radius10m: 8.0, boomLength: 28 },
    { capacity: 35, radius3m: 35.0, radius5m: 24.0, radius8m: 15.0, radius10m: 11.0, boomLength: 32 },
    { capacity: 50, radius3m: 50.0, radius5m: 35.0, radius8m: 22.0, radius10m: 16.0, boomLength: 36 },
    { capacity: 70, radius3m: 70.0, radius5m: 48.0, radius8m: 30.0, radius10m: 22.0, boomLength: 40 },
    { capacity: 100, radius3m: 100.0, radius5m: 68.0, radius8m: 42.0, radius10m: 30.0, boomLength: 44 },
    { capacity: 150, radius3m: 120.0, radius5m: 95.0, radius8m: 60.0, radius10m: 45.0, boomLength: 50 },
    { capacity: 200, radius3m: 150.0, radius5m: 120.0, radius8m: 80.0, radius10m: 60.0, boomLength: 56 }
];

// 吊車安全距離
const craneSafetyData = [
    { voltage: '低壓 (<600V)', minDistance: 2.0 },
    { voltage: '高壓 1kV', minDistance: 2.0 },
    { voltage: '高壓 11kV', minDistance: 3.0 },
    { voltage: '高壓 22kV', minDistance: 3.5 },
    { voltage: '高壓 33kV', minDistance: 4.0 },
    { voltage: '高壓 66kV', minDistance: 5.0 },
    { voltage: '高壓 110kV', minDistance: 6.0 },
    { voltage: '高壓 161kV', minDistance: 8.0 },
    { voltage: '高壓 345kV', minDistance: 10.0 }
];

// ============================================
// V 型皮帶規格 (單位: mm)
// ============================================
const vBeltData = {
    A: [
        { length: 'A20', mm: 508, topWidth: 13, height: 8, angle: 40 },
        { length: 'A25', mm: 635, topWidth: 13, height: 8, angle: 40 },
        { length: 'A30', mm: 762, topWidth: 13, height: 8, angle: 40 },
        { length: 'A35', mm: 889, topWidth: 13, height: 8, angle: 40 },
        { length: 'A40', mm: 1016, topWidth: 13, height: 8, angle: 40 },
        { length: 'A45', mm: 1143, topWidth: 13, height: 8, angle: 40 },
        { length: 'A50', mm: 1270, topWidth: 13, height: 8, angle: 40 },
        { length: 'A55', mm: 1397, topWidth: 13, height: 8, angle: 40 },
        { length: 'A60', mm: 1524, topWidth: 13, height: 8, angle: 40 },
        { length: 'A68', mm: 1727, topWidth: 13, height: 8, angle: 40 },
        { length: 'A75', mm: 1905, topWidth: 13, height: 8, angle: 40 },
        { length: 'A80', mm: 2032, topWidth: 13, height: 8, angle: 40 },
        { length: 'A90', mm: 2286, topWidth: 13, height: 8, angle: 40 },
        { length: 'A100', mm: 2540, topWidth: 13, height: 8, angle: 40 },
        { length: 'A120', mm: 3048, topWidth: 13, height: 8, angle: 40 }
    ],
    B: [
        { length: 'B30', mm: 762, topWidth: 17, height: 11, angle: 40 },
        { length: 'B35', mm: 889, topWidth: 17, height: 11, angle: 40 },
        { length: 'B40', mm: 1016, topWidth: 17, height: 11, angle: 40 },
        { length: 'B45', mm: 1143, topWidth: 17, height: 11, angle: 40 },
        { length: 'B50', mm: 1270, topWidth: 17, height: 11, angle: 40 },
        { length: 'B55', mm: 1397, topWidth: 17, height: 11, angle: 40 },
        { length: 'B60', mm: 1524, topWidth: 17, height: 11, angle: 40 },
        { length: 'B68', mm: 1727, topWidth: 17, height: 11, angle: 40 },
        { length: 'B75', mm: 1905, topWidth: 17, height: 11, angle: 40 },
        { length: 'B85', mm: 2159, topWidth: 17, height: 11, angle: 40 },
        { length: 'B100', mm: 2540, topWidth: 17, height: 11, angle: 40 },
        { length: 'B120', mm: 3048, topWidth: 17, height: 11, angle: 40 },
        { length: 'B150', mm: 3810, topWidth: 17, height: 11, angle: 40 }
    ],
    C: [
        { length: 'C50', mm: 1270, topWidth: 22, height: 14, angle: 40 },
        { length: 'C60', mm: 1524, topWidth: 22, height: 14, angle: 40 },
        { length: 'C68', mm: 1727, topWidth: 22, height: 14, angle: 40 },
        { length: 'C75', mm: 1905, topWidth: 22, height: 14, angle: 40 },
        { length: 'C85', mm: 2159, topWidth: 22, height: 14, angle: 40 },
        { length: 'C100', mm: 2540, topWidth: 22, height: 14, angle: 40 },
        { length: 'C120', mm: 3048, topWidth: 22, height: 14, angle: 40 },
        { length: 'C150', mm: 3810, topWidth: 22, height: 14, angle: 40 },
        { length: 'C180', mm: 4572, topWidth: 22, height: 14, angle: 40 },
        { length: 'C200', mm: 5080, topWidth: 22, height: 14, angle: 40 }
    ],
    D: [
        { length: 'D100', mm: 2540, topWidth: 32, height: 19, angle: 40 },
        { length: 'D120', mm: 3048, topWidth: 32, height: 19, angle: 40 },
        { length: 'D150', mm: 3810, topWidth: 32, height: 19, angle: 40 },
        { length: 'D180', mm: 4572, topWidth: 32, height: 19, angle: 40 },
        { length: 'D200', mm: 5080, topWidth: 32, height: 19, angle: 40 },
        { length: 'D240', mm: 6096, topWidth: 32, height: 19, angle: 40 },
        { length: 'D270', mm: 6858, topWidth: 32, height: 19, angle: 40 },
        { length: 'D300', mm: 7620, topWidth: 32, height: 19, angle: 40 }
    ]
};

// ============================================
// 時規皮帶規格 (同步帶)
// ============================================
const timingBeltData = {
    HTD3M: { pitch: 3, toothDepth: 1.17, beltHeight: 2.4, widths: [6, 9, 15], desc: '輕負載，高精度' },
    HTD5M: { pitch: 5, toothDepth: 2.06, beltHeight: 3.8, widths: [9, 15, 25], desc: '中等負載' },
    HTD8M: { pitch: 8, toothDepth: 3.36, beltHeight: 5.3, widths: [20, 30, 50, 85], desc: '重負載' },
    GT2: { pitch: 2, toothDepth: 0.75, beltHeight: 1.38, widths: [6, 9, 10], desc: '3D列印機常用' },
    T5: { pitch: 5, toothDepth: 1.2, beltHeight: 2.2, widths: [10, 16, 25], desc: '梯形齒' },
    MXL: { pitch: 2.032, toothDepth: 0.51, beltHeight: 1.14, widths: [3.175, 6.35], desc: '微型精密傳動' }
};

// 時規皮帶長度對照
const timingBeltLengths = [
    { teeth: 50, HTD3M: 150, HTD5M: 250, HTD8M: 400 },
    { teeth: 60, HTD3M: 180, HTD5M: 300, HTD8M: 480 },
    { teeth: 80, HTD3M: 240, HTD5M: 400, HTD8M: 640 },
    { teeth: 100, HTD3M: 300, HTD5M: 500, HTD8M: 800 },
    { teeth: 120, HTD3M: 360, HTD5M: 600, HTD8M: 960 },
    { teeth: 150, HTD3M: 450, HTD5M: 750, HTD8M: 1200 },
    { teeth: 200, HTD3M: 600, HTD5M: 1000, HTD8M: 1600 },
    { teeth: 250, HTD3M: 750, HTD5M: 1250, HTD8M: 2000 },
    { teeth: 300, HTD3M: 900, HTD5M: 1500, HTD8M: 2400 }
];

// ============================================
// 壁虎/膨脹螺絲規格
// ============================================
const anchorData = {
    plastic: [
        { size: '5mm', drillSize: 5, length: 25, screw: '3.5-4mm', loadConcrete: 0.15, loadBrick: 0.08 },
        { size: '6mm', drillSize: 6, length: 30, screw: '4-5mm', loadConcrete: 0.25, loadBrick: 0.12 },
        { size: '8mm', drillSize: 8, length: 40, screw: '5-6mm', loadConcrete: 0.45, loadBrick: 0.22 },
        { size: '10mm', drillSize: 10, length: 50, screw: '6-8mm', loadConcrete: 0.70, loadBrick: 0.35 },
        { size: '12mm', drillSize: 12, length: 60, screw: '8-10mm', loadConcrete: 1.00, loadBrick: 0.50 },
        { size: '14mm', drillSize: 14, length: 70, screw: '10-12mm', loadConcrete: 1.40, loadBrick: 0.70 }
    ],
    metalExpansion: [
        { size: 'M6', drillSize: 8, depth: 35, torque: 5, loadConcrete: 1.5, loadBrick: 0.8 },
        { size: 'M8', drillSize: 10, depth: 45, torque: 10, loadConcrete: 2.8, loadBrick: 1.4 },
        { size: 'M10', drillSize: 12, depth: 55, torque: 25, loadConcrete: 4.5, loadBrick: 2.2 },
        { size: 'M12', drillSize: 14, depth: 65, torque: 40, loadConcrete: 6.5, loadBrick: 3.2 },
        { size: 'M14', drillSize: 16, depth: 75, torque: 60, loadConcrete: 9.0, loadBrick: 4.5 },
        { size: 'M16', drillSize: 18, depth: 85, torque: 80, loadConcrete: 12.0, loadBrick: 6.0 },
        { size: 'M20', drillSize: 22, depth: 100, torque: 120, loadConcrete: 18.0, loadBrick: 9.0 }
    ],
    chemicalAnchor: [
        { size: 'M8', drillSize: 10, depth: 80, cureTime: '10-20分鐘', loadConcrete: 8.5 },
        { size: 'M10', drillSize: 12, depth: 90, cureTime: '10-20分鐘', loadConcrete: 13.2 },
        { size: 'M12', drillSize: 14, depth: 110, cureTime: '15-30分鐘', loadConcrete: 19.0 },
        { size: 'M16', drillSize: 18, depth: 125, cureTime: '20-40分鐘', loadConcrete: 33.8 },
        { size: 'M20', drillSize: 24, depth: 170, cureTime: '30-60分鐘', loadConcrete: 52.8 },
        { size: 'M24', drillSize: 28, depth: 210, cureTime: '45-90分鐘', loadConcrete: 76.0 }
    ]
};

// ============================================
// 材料力學 - 金屬機械性質
// ============================================
const metalPropertiesData = [
    { material: '低碳鋼 SS400', tensile: 400, yield: 245, elongation: 21, hardness: 'HB 120', density: 7.85 },
    { material: '中碳鋼 S45C', tensile: 570, yield: 345, elongation: 17, hardness: 'HB 170', density: 7.85 },
    { material: '高碳鋼 SK5', tensile: 780, yield: 440, elongation: 8, hardness: 'HB 230', density: 7.85 },
    { material: '不鏽鋼 304', tensile: 520, yield: 205, elongation: 40, hardness: 'HB 187', density: 7.93 },
    { material: '不鏽鋼 316', tensile: 515, yield: 205, elongation: 40, hardness: 'HB 217', density: 7.98 },
    { material: '不鏽鋼 316L', tensile: 485, yield: 170, elongation: 40, hardness: 'HB 217', density: 7.98 },
    { material: '鋁合金 6061-T6', tensile: 310, yield: 276, elongation: 12, hardness: 'HB 95', density: 2.70 },
    { material: '鋁合金 7075-T6', tensile: 572, yield: 503, elongation: 11, hardness: 'HB 150', density: 2.81 },
    { material: '鋁合金 5052-H32', tensile: 230, yield: 195, elongation: 12, hardness: 'HB 60', density: 2.68 },
    { material: '銅 C1100', tensile: 220, yield: 70, elongation: 45, hardness: 'HB 45', density: 8.94 },
    { material: '黃銅 C2600', tensile: 315, yield: 95, elongation: 65, hardness: 'HB 55', density: 8.53 },
    { material: '磷青銅 C5191', tensile: 410, yield: 250, elongation: 35, hardness: 'HB 90', density: 8.80 },
    { material: '鈦合金 Ti-6Al-4V', tensile: 950, yield: 880, elongation: 14, hardness: 'HB 334', density: 4.43 },
    { material: '鑄鐵 FC200', tensile: 200, yield: '-', elongation: '-', hardness: 'HB 150-200', density: 7.20 },
    { material: '球墨鑄鐵 FCD450', tensile: 450, yield: 280, elongation: 10, hardness: 'HB 140-210', density: 7.10 }
];

// ============================================
// 材料力學 - 塑性變形參數
// ============================================
const plasticDeformationData = [
    { material: '低碳鋼', ductility: '高', strainHardening: 0.22, minBendRadius: '1.0t', springback: '1-3°' },
    { material: '中碳鋼', ductility: '中', strainHardening: 0.17, minBendRadius: '1.5t', springback: '2-5°' },
    { material: '高碳鋼', ductility: '低', strainHardening: 0.10, minBendRadius: '3.0t', springback: '5-8°' },
    { material: '不鏽鋼 304', ductility: '高', strainHardening: 0.45, minBendRadius: '1.0t', springback: '3-5°' },
    { material: '不鏽鋼 316', ductility: '高', strainHardening: 0.40, minBendRadius: '1.0t', springback: '3-5°' },
    { material: '鋁合金 1100', ductility: '極高', strainHardening: 0.20, minBendRadius: '0t', springback: '0-1°' },
    { material: '鋁合金 5052', ductility: '高', strainHardening: 0.13, minBendRadius: '0.5t', springback: '1-2°' },
    { material: '鋁合金 6061-T6', ductility: '中', strainHardening: 0.10, minBendRadius: '2.0t', springback: '3-5°' },
    { material: '銅 C1100', ductility: '極高', strainHardening: 0.54, minBendRadius: '0t', springback: '0-1°' },
    { material: '黃銅 C2600', ductility: '高', strainHardening: 0.49, minBendRadius: '0.5t', springback: '1-2°' },
    { material: '鈦合金', ductility: '低', strainHardening: 0.05, minBendRadius: '4.0t', springback: '8-15°' }
];

// ============================================
// 焊接規格 - 碳當量計算參考
// ============================================
const carbonEquivalentData = [
    { steel: '低碳鋼 (≤0.18%C)', ce: '< 0.35', preheat: '不需預熱', crackRisk: '低', weldability: '極佳' },
    { steel: '中碳鋼 (0.18-0.28%C)', ce: '0.35-0.45', preheat: '50-100°C', crackRisk: '中', weldability: '良好' },
    { steel: '高碳鋼 (0.28-0.40%C)', ce: '0.45-0.60', preheat: '100-200°C', crackRisk: '高', weldability: '需謹慎' },
    { steel: '合金鋼 (Cr-Mo)', ce: '0.50-0.80', preheat: '150-250°C', crackRisk: '高', weldability: '需特殊措施' },
    { steel: '高強度低合金鋼', ce: '> 0.60', preheat: '200-300°C', crackRisk: '極高', weldability: '困難' }
];

// ============================================
// 焊接規格 - 層間溫度建議
// ============================================
const interpassTempData = [
    { material: '碳鋼 (≤0.25%C)', minTemp: '不限', maxTemp: 250, note: '防止冷裂，控制熱影響區' },
    { material: '碳鋼 (>0.25%C)', minTemp: 100, maxTemp: 250, note: '維持預熱溫度，防止淬硬' },
    { material: '低合金鋼 Cr-Mo', minTemp: 150, maxTemp: 300, note: '控制冷卻速率，防止氫脆' },
    { material: '不鏽鋼 304/316', minTemp: '不限', maxTemp: 150, note: '防止敏化，避免晶間腐蝕' },
    { material: '雙相不鏽鋼', minTemp: '不限', maxTemp: 150, note: '保持相平衡' },
    { material: '鋁合金', minTemp: '不限', maxTemp: 120, note: '防止過熱軟化，維持強度' },
    { material: '鎳基合金', minTemp: '不限', maxTemp: 150, note: '防止熱裂' }
];

// ============================================
// 焊接規格 - PWHT 銲後熱處理
// ============================================
const pwhtData = [
    { material: '碳鋼 (t≤19mm)', required: '不需要', temp: '-', holdTime: '-', cooling: '-', purpose: '-' },
    { material: '碳鋼 (19<t≤50mm)', required: '建議', temp: '595-650°C', holdTime: '1hr/25mm', cooling: '爐冷至315°C', purpose: '消除應力' },
    { material: '碳鋼 (t>50mm)', required: '必須', temp: '595-650°C', holdTime: '1hr/25mm', cooling: '爐冷至315°C', purpose: '消除應力、防裂' },
    { material: 'Cr-Mo 鋼 (1.25Cr-0.5Mo)', required: '必須', temp: '705-745°C', holdTime: '1hr/25mm', cooling: '爐冷至315°C', purpose: '消除應力、回火' },
    { material: 'Cr-Mo 鋼 (2.25Cr-1Mo)', required: '必須', temp: '705-760°C', holdTime: '1hr/25mm', cooling: '爐冷至315°C', purpose: '消除應力、回火' },
    { material: '不鏽鋼 304/316', required: '不建議', temp: '-', holdTime: '-', cooling: '-', purpose: '可能造成敏化' },
    { material: '不鏽鋼 304L/316L', required: '可選', temp: '900-1100°C', holdTime: '快速', cooling: '水冷', purpose: '固溶處理' }
];

// ============================================
// 焊接規格 - 預熱方法比較
// ============================================
const preheatMethodData = [
    { method: '氧乙炔火焰', advantage: '快速、機動性高、不需電源', disadvantage: '溫度不均勻、難以控制', application: '現場小範圍、臨時作業', costLevel: '低' },
    { method: '電阻加熱墊', advantage: '溫度均勻可控、可自動調控', disadvantage: '需要電源、設備成本', application: '管路環縫、固定位置', costLevel: '中' },
    { method: '感應加熱', advantage: '快速、精確、效率高', disadvantage: '設備成本高、需專業人員', application: '工廠批量生產', costLevel: '高' },
    { method: '烘箱預熱', advantage: '完全均勻、溫度精確', disadvantage: '僅適用小件、耗時', application: '零件預熱、焊條烘乾', costLevel: '中' },
    { method: '陶瓷加熱片', advantage: '輕便、可貼合複雜形狀', disadvantage: '功率較小、需多片組合', application: '局部預熱、維修作業', costLevel: '中' },
    { method: '紅外線加熱', advantage: '非接觸、均勻', disadvantage: '效率較低、設備成本', application: '大面積預熱', costLevel: '高' }
];

// ============================================
// 平衡教學 - 鐵碳相特性
// ============================================
const phasePropertiesData = [
    { phase: '肥粒鐵 (α-Fe)', structure: 'BCC 體心立方', maxCarbon: '0.02%', hardness: 'HB 80-100', property: '軟、韌性佳、磁性', tempRange: '<912°C' },
    { phase: '沃斯田鐵 (γ-Fe)', structure: 'FCC 面心立方', maxCarbon: '2.11%', hardness: '-', property: '高溫穩定相、可溶較多碳、非磁性', tempRange: '912-1394°C' },
    { phase: '雪明碳鐵 (Fe₃C)', structure: '正交晶系', maxCarbon: '6.67%', hardness: 'HB 800+', property: '極硬、極脆、碳化物', tempRange: '穩定至727°C以下' },
    { phase: '波來鐵 (Pearlite)', structure: '層片狀混合', maxCarbon: '0.77%', hardness: 'HB 200-250', property: 'α-Fe + Fe₃C 層片、強度與韌性平衡', tempRange: '<727°C' },
    { phase: '麻田散鐵 (Martensite)', structure: 'BCT 體心正方', maxCarbon: '可變', hardness: 'HB 650+', property: '淬火形成、極硬、脆', tempRange: '淬火產物' },
    { phase: '變韌鐵 (Bainite)', structure: '針狀/羽狀', maxCarbon: '可變', hardness: 'HB 300-550', property: '介於波來鐵與麻田散鐵之間', tempRange: '恆溫變態產物' },
    { phase: '萊氏體 (Ledeburite)', structure: '共晶組織', maxCarbon: '4.3%', hardness: 'HB 700+', property: 'γ-Fe + Fe₃C 共晶、鑄鐵特有', tempRange: '1148°C 以下' }
];

// ============================================
// 平衡教學 - 臨界點溫度
// ============================================
const criticalPointsData = [
    { point: 'A0', temp: '210°C', description: '雪明碳鐵磁性轉變溫度（居禮點）' },
    { point: 'A1', temp: '727°C', description: '共析轉變溫度，波來鐵 ⇄ 沃斯田鐵（PSK 線）' },
    { point: 'A2', temp: '768°C', description: 'α-Fe 磁性轉變溫度（居禮點）' },
    { point: 'A3', temp: '變化 (GS 線)', description: '亞共析鋼 α+γ → γ 轉變線，隨碳含量升高而降低' },
    { point: 'Acm', temp: '變化 (ES 線)', description: '過共析鋼 γ+Fe₃C → γ 轉變線' },
    { point: '共析點 S', temp: '727°C, 0.77%C', description: '共析反應點：γ → α + Fe₃C（波來鐵）' },
    { point: '共晶點 C', temp: '1148°C, 4.3%C', description: '共晶反應點：L → γ + Fe₃C（萊氏體）' },
    { point: '包晶點 J', temp: '1495°C, 0.17%C', description: '包晶反應：L + δ → γ' }
];

// ============================================
// 氧乙炔電焊規格
// ============================================

// 焊接氣體特性
const weldingGasData = [
    { gas: '乙炔 (C₂H₂)', temp: '3100°C', characteristics: '高溫、明亮火焰', use: '切割、焊接碳鋼', storage: '丙酮溶解、多孔填料鋼瓶', color: '紅色鋼瓶' },
    { gas: '氧氣 (O₂)', temp: '-', characteristics: '助燃氣體', use: '配合可燃氣體使用', storage: '高壓氣態 (150-200 bar)', color: '黑色鋼瓶' },
    { gas: '丙烷 (C₃H₈)', temp: '2820°C', characteristics: '較安全、火焰溫度較低', use: '切割、加熱', storage: '液化氣態', color: '灰色鋼瓶' },
    { gas: 'MAPP 氣', temp: '2925°C', characteristics: '較乙炔安全、可液化儲存', use: '切割、銅管焊接', storage: '液化氣態', color: '黃色鋼瓶' },
    { gas: '氬氣 (Ar)', temp: '-', characteristics: '惰性保護氣', use: 'TIG/MIG 焊接保護', storage: '高壓氣態', color: '灰色鋼瓶' },
    { gas: 'CO₂', temp: '-', characteristics: '便宜保護氣', use: 'CO₂ 氣體保護焊', storage: '液化/高壓', color: '灰色鋼瓶' }
];

// 氧乙炔火焰類型
const flameTypeData = [
    { type: '中性焰', ratio: 'O₂:C₂H₂ = 1:1', characteristics: '內焰清晰、外焰淡藍', use: '一般鋼材焊接', material: '碳鋼、不鏽鋼', note: '最常用火焰' },
    { type: '碳化焰 (還原焰)', ratio: 'O₂:C₂H₂ < 1:1', characteristics: '乙炔過量、淡黃羽狀焰', use: '防止氧化', material: '鑄鐵、高碳鋼、硬面堆焊', note: '有還原作用' },
    { type: '氧化焰', ratio: 'O₂:C₂H₂ > 1:1', characteristics: '內焰短尖、噪音大', use: '黃銅焊接', material: '黃銅、青銅', note: '會使鋼材氧化脆化' }
];

// 氧乙炔焊嘴規格 - 美規 (Victor/Harris)
const oxyTipUSData = [
    { tipNo: '000', holeSize: 0.35, thickness: '0.4-0.8mm', gasFlow: '35-60', pressure: '0.02', application: '極薄板' },
    { tipNo: '00', holeSize: 0.45, thickness: '0.8-1.2mm', gasFlow: '60-100', pressure: '0.02', application: '薄板精密' },
    { tipNo: '0', holeSize: 0.58, thickness: '1.2-2.0mm', gasFlow: '100-150', pressure: '0.03', application: '薄板焊接' },
    { tipNo: '1', holeSize: 0.71, thickness: '2.0-3.2mm', gasFlow: '150-250', pressure: '0.03', application: '一般焊接' },
    { tipNo: '2', holeSize: 0.86, thickness: '3.2-5.0mm', gasFlow: '250-400', pressure: '0.04', application: '中板焊接' },
    { tipNo: '3', holeSize: 1.02, thickness: '5.0-6.4mm', gasFlow: '400-550', pressure: '0.04', application: '中厚板' },
    { tipNo: '4', holeSize: 1.19, thickness: '6.4-9.5mm', gasFlow: '550-750', pressure: '0.05', application: '厚板焊接' },
    { tipNo: '5', holeSize: 1.40, thickness: '9.5-13mm', gasFlow: '750-1000', pressure: '0.06', application: '厚板焊接' },
    { tipNo: '6', holeSize: 1.63, thickness: '13-19mm', gasFlow: '1000-1350', pressure: '0.07', application: '重工焊接' },
    { tipNo: '7', holeSize: 1.91, thickness: '19-25mm', gasFlow: '1350-1700', pressure: '0.08', application: '超厚板' }
];

// 氧乙炔焊嘴規格 - 日規 (JIS/小池)
const oxyTipJISData = [
    { tipNo: '1', holeSize: 0.5, thickness: '0.5-1.0mm', gasFlow: '50-100', pressure: '0.01-0.02', application: '薄板精密' },
    { tipNo: '2', holeSize: 0.7, thickness: '1.0-2.0mm', gasFlow: '100-200', pressure: '0.02-0.03', application: '薄板焊接' },
    { tipNo: '3', holeSize: 0.9, thickness: '2.0-3.0mm', gasFlow: '200-350', pressure: '0.03-0.04', application: '一般焊接' },
    { tipNo: '5', holeSize: 1.1, thickness: '3.0-5.0mm', gasFlow: '350-500', pressure: '0.04-0.05', application: '中板焊接' },
    { tipNo: '7', holeSize: 1.4, thickness: '5.0-8.0mm', gasFlow: '500-750', pressure: '0.05-0.06', application: '厚板焊接' },
    { tipNo: '10', holeSize: 1.7, thickness: '8.0-12mm', gasFlow: '750-1100', pressure: '0.06-0.08', application: '厚板焊接' },
    { tipNo: '15', holeSize: 2.0, thickness: '12-20mm', gasFlow: '1100-1500', pressure: '0.08-0.10', application: '重工焊接' },
    { tipNo: '20', holeSize: 2.4, thickness: '20-30mm', gasFlow: '1500-2000', pressure: '0.10-0.12', application: '超厚板' }
];

// 氣焊焊條規格
const gasWeldingRodData = [
    { type: 'RG-45', material: '低碳鋼', tensile: 450, use: '一般碳鋼焊接', diameter: '1.6-4.0mm', coating: '無藥皮' },
    { type: 'RG-60', material: '中碳鋼', tensile: 600, use: '中碳鋼、修補焊', diameter: '2.0-4.0mm', coating: '無藥皮' },
    { type: 'RG-65', material: '高碳鋼', tensile: 650, use: '高強度需求', diameter: '2.0-3.2mm', coating: '無藥皮' },
    { type: 'RCu', material: '純銅', tensile: 220, use: '銅焊接', diameter: '2.0-4.0mm', coating: '需助焊劑' },
    { type: 'RCuZn-A', material: '黃銅', tensile: 350, use: '銅鋅合金焊接', diameter: '2.0-4.0mm', coating: '需助焊劑' },
    { type: 'RBCuZn-C', material: '磷銅', tensile: 400, use: '硬銅焊、異種金屬', diameter: '2.0-3.2mm', coating: '自熔焊劑' }
];

// 電弧焊焊機規格
const arcWelderData = [
    { type: '交流電焊機 (AC)', output: 'AC', current: '50-300A', voltage: '60-80V', use: '一般碳鋼焊接', advantage: '價格便宜、維護簡單', disadvantage: '電弧不穩、飛濺大' },
    { type: '直流電焊機 (DC)', output: 'DC', current: '30-400A', voltage: '60-80V', use: '各種金屬焊接', advantage: '電弧穩定、飛濺少', disadvantage: '價格較高' },
    { type: '變頻電焊機 (IGBT)', output: 'DC', current: '20-250A', voltage: '60-80V', use: '各種焊接', advantage: '輕便、節能、電弧極穩', disadvantage: '維修成本高' },
    { type: 'TIG 焊機', output: 'DC/AC', current: '5-350A', voltage: '10-25V', use: '不鏽鋼、鋁合金精密焊接', advantage: '焊縫美觀、無飛濺', disadvantage: '速度慢、成本高' },
    { type: 'MIG/MAG 焊機', output: 'DC', current: '30-500A', voltage: '15-35V', use: '自動/半自動焊接', advantage: '速度快、效率高', disadvantage: '設備成本高' }
];

// 焊接安全距離與防護
const weldingSafetyData = [
    { item: '電焊護目鏡', spec: '#10-#13 濾光片', requirement: '依電流強度選擇', note: '電流越大，濾光片號數越高' },
    { item: '氣焊護目鏡', spec: '#4-#6 濾光片', requirement: '氧乙炔焊接用', note: '比電焊濾光片號數低' },
    { item: '防護手套', spec: '牛皮/耐熱材質', requirement: '長度至手腕以上', note: '避免燙傷及紫外線' },
    { item: '安全距離', spec: '易燃物 10m 以上', requirement: '氧氣瓶與乙炔瓶距離 5m', note: '遠離明火及火花' },
    { item: '通風要求', spec: '換氣次數 ≥6次/hr', requirement: '密閉空間需強制通風', note: '防止有害氣體累積' },
    { item: '滅火器', spec: 'CO₂ 或乾粉滅火器', requirement: '工作區 5m 內配置', note: '禁用水滅火' }
];

