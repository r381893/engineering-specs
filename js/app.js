// 工程規格查詢工具 - 主程式

// ============================================
// DOM 載入完成後初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initSubTabs();
    initSearch();
    initCalculators();
    renderAllTables();
    populateThreadSelect();
});

// ============================================
// 標籤頁切換
// ============================================
function initTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;

            // 更新標籤狀態
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 切換內容區塊
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });
}

// ============================================
// 子標籤頁切換
// ============================================
function initSubTabs() {
    // 塑膠管子標籤
    document.querySelectorAll('[data-pipe]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-pipe]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPlasticPipeTable(btn.dataset.pipe);
        });
    });

    // 冷媒子標籤
    document.querySelectorAll('[data-ref]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-ref]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderRefrigerantTable(btn.dataset.ref);
            document.getElementById('refTableTitle').textContent = `📊 ${btn.dataset.ref} 壓力對照表`;
        });
    });

    // 攻牙子標籤
    document.querySelectorAll('[data-thread]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-thread]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTappingTable(btn.dataset.thread);
        });
    });

    // 鋼管篩選
    document.querySelectorAll('[data-sch]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-sch]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSteelPipeTable(btn.dataset.sch);
        });
    });

    // 法蘭子標籤
    document.querySelectorAll('[data-flange]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-flange]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderFlangeTable(btn.dataset.flange);
        });
    });

    // 保溫子標籤
    document.querySelectorAll('[data-insulation]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-insulation]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderInsulationTable(btn.dataset.insulation);
        });
    });

    // 閥門Cv子標籤
    document.querySelectorAll('[data-valve]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-valve]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderValveCvTable(btn.dataset.valve);
        });
    });

    // 管件當量子標籤
    document.querySelectorAll('[data-fitting]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-fitting]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderFittingTable(btn.dataset.fitting);
        });
    });

    // 焊接子標籤
    document.querySelectorAll('[data-welding]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-welding]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderWeldingTable(btn.dataset.welding);
        });
    });

    // 起重機子標籤
    document.querySelectorAll('[data-crane]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-crane]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCraneTable(btn.dataset.crane);
        });
    });
}

// ============================================
// 搜尋功能
// ============================================
function initSearch() {
    const searchInput = document.getElementById('globalSearch');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        // 清除所有高亮
        document.querySelectorAll('tr.search-match').forEach(row => {
            row.classList.remove('search-match');
        });

        if (query.length < 1) return;

        // 搜尋所有表格
        document.querySelectorAll('table tbody tr').forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(query)) {
                row.classList.add('search-match');
            }
        });

        // 根據搜尋內容自動切換標籤
        autoSwitchTab(query);
    });
}

function autoSwitchTab(query) {
    // 定義關鍵字對應
    const tabMappings = {
        'r22': 'refrigerant',
        'r410': 'refrigerant',
        'r32': 'refrigerant',
        'r134': 'refrigerant',
        'r404': 'refrigerant',
        '冷媒': 'refrigerant',
        '壓力': 'refrigerant',
        '鋼索': 'wire-rope',
        '吊重': 'wire-rope',
        '繩': 'wire-rope',
        '攻牙': 'tapping',
        '鑽頭': 'tapping',
        '螺紋': 'tapping',
        '扭力': 'bolt-torque',
        '螺栓': 'bolt-torque',
        'pvc': 'plastic-pipe',
        'ppr': 'plastic-pipe',
        'pp-r': 'plastic-pipe',
        '塑膠': 'plastic-pipe'
    };

    for (const [keyword, tabId] of Object.entries(tabMappings)) {
        if (query.includes(keyword)) {
            const tab = document.querySelector(`[data-tab="${tabId}"]`);
            if (tab && !tab.classList.contains('active')) {
                tab.click();
            }
            break;
        }
    }
}

// ============================================
// 計算器功能
// ============================================
function initCalculators() {
    // 冷媒壓力計算
    const refCalcType = document.getElementById('refCalcType');
    const refCalcTemp = document.getElementById('refCalcTemp');

    [refCalcType, refCalcTemp].forEach(el => {
        el.addEventListener('change', calculateRefPressure);
        el.addEventListener('input', calculateRefPressure);
    });
    calculateRefPressure();

    // 鋼索吊重計算
    const loadWeight = document.getElementById('loadWeight');
    const safetyFactor = document.getElementById('safetyFactor');

    [loadWeight, safetyFactor].forEach(el => {
        el.addEventListener('change', calculateRopeDiameter);
        el.addEventListener('input', calculateRopeDiameter);
    });

    // 攻牙鑽頭查詢
    const threadSelect = document.getElementById('threadSelect');
    threadSelect.addEventListener('change', lookupDrillSize);

    // 膨脹量計算
    const expansionMaterial = document.getElementById('expansionMaterial');
    const pipeLength = document.getElementById('pipeLength');
    const tempDiff = document.getElementById('tempDiff');

    [expansionMaterial, pipeLength, tempDiff].forEach(el => {
        el.addEventListener('change', calculateExpansion);
        el.addEventListener('input', calculateExpansion);
    });
    calculateExpansion();
}

function calculateRefPressure() {
    const refType = document.getElementById('refCalcType').value;
    const temp = parseFloat(document.getElementById('refCalcTemp').value);
    const resultEl = document.getElementById('refCalcResult');

    if (isNaN(temp)) {
        resultEl.textContent = '-- kg/cm²';
        return;
    }

    const data = refrigerantData[refType];
    if (!data) {
        resultEl.textContent = '無資料';
        return;
    }

    // 線性內插計算
    const pressure = interpolate(data, temp);
    resultEl.textContent = `${pressure.toFixed(2)} kg/cm²`;
}

function interpolate(data, temp) {
    // 找到最接近的兩個點進行內插
    let lower = data[0];
    let upper = data[data.length - 1];

    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].temp <= temp && data[i + 1].temp >= temp) {
            lower = data[i];
            upper = data[i + 1];
            break;
        }
    }

    if (temp <= lower.temp) return lower.pressure;
    if (temp >= upper.temp) return upper.pressure;

    // 線性內插
    const ratio = (temp - lower.temp) / (upper.temp - lower.temp);
    return lower.pressure + ratio * (upper.pressure - lower.pressure);
}

function calculateRopeDiameter() {
    const weight = parseFloat(document.getElementById('loadWeight').value);
    const sf = parseInt(document.getElementById('safetyFactor').value);
    const resultEl = document.getElementById('ropeResult');

    if (isNaN(weight) || weight <= 0) {
        resultEl.textContent = '-- mm';
        return;
    }

    // 計算需要的破斷拉力
    const requiredBreaking = weight * sf;

    // 找到合適的鋼索
    for (const rope of wireRopeData) {
        if (rope.breakingLoad >= requiredBreaking) {
            resultEl.textContent = `≥ ${rope.diameter} mm`;
            return;
        }
    }

    resultEl.textContent = '超出範圍';
}

function populateThreadSelect() {
    const select = document.getElementById('threadSelect');

    tappingData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.thread;
        option.textContent = `${item.thread} (P${item.pitch})`;
        select.appendChild(option);
    });

    const optgroup = document.createElement('optgroup');
    optgroup.label = '細牙螺紋';

    tappingFineData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.thread;
        option.textContent = `${item.thread}`;
        optgroup.appendChild(option);
    });

    select.appendChild(optgroup);
}

function lookupDrillSize() {
    const thread = document.getElementById('threadSelect').value;
    const resultEl = document.getElementById('drillResult');

    if (!thread) {
        resultEl.textContent = '-- mm';
        return;
    }

    // 查詢粗牙
    let found = tappingData.find(item => item.thread === thread);
    if (!found) {
        // 查詢細牙
        found = tappingFineData.find(item => item.thread === thread);
    }

    if (found) {
        resultEl.textContent = `Ø ${found.drillSize} mm`;
    } else {
        resultEl.textContent = '無資料';
    }
}

// ============================================
// 表格渲染
// ============================================
function renderAllTables() {
    renderSteelPipeTable('all');
    renderPlasticPipeTable('pvc');
    renderRefrigerantTable('R22');
    renderWireRopeTable();
    renderTappingTable('coarse');
    renderBoltTorqueTable();
    renderCableTable();
    renderFlangeTable('jis10k');
    renderInsulationTable('cold');
    renderValveCvTable('ball');
    renderExpansionTable();
    renderFittingTable('elbow90');
    renderWeldingTable('rod');
    renderCraneTable('capacity');
}

function renderSteelPipeTable(filter = 'all') {
    const tbody = document.querySelector('#steelPipeTable tbody');
    tbody.innerHTML = '';

    steelPipeData.forEach(pipe => {
        const row = document.createElement('tr');

        if (filter === 'all') {
            row.innerHTML = `
                <td class="highlight">${pipe.size}</td>
                <td>DN${pipe.nominal}</td>
                <td>${pipe.od}<span class="unit">mm</span></td>
                <td>${pipe.sch10.wt}</td>
                <td>${pipe.sch10.id}</td>
                <td>${pipe.sch40.wt}</td>
                <td>${pipe.sch40.id}</td>
                <td>${pipe.sch80.wt}</td>
                <td>${pipe.sch80.id}</td>
            `;
        } else {
            const sch = pipe[filter];
            row.innerHTML = `
                <td class="highlight">${pipe.size}</td>
                <td>DN${pipe.nominal}</td>
                <td>${pipe.od}<span class="unit">mm</span></td>
                <td colspan="2">${sch.wt}</td>
                <td colspan="2">${sch.id}</td>
                <td colspan="2">-</td>
            `;
        }

        tbody.appendChild(row);
    });
}

function renderPlasticPipeTable(type = 'pvc') {
    const tbody = document.querySelector('#plasticPipeTable tbody');
    tbody.innerHTML = '';

    const data = plasticPipeData[type];

    data.forEach(pipe => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">${pipe.size}</td>
            <td>DN${pipe.nominal}</td>
            <td>${pipe.od}<span class="unit">mm</span></td>
            <td>${pipe.wt}<span class="unit">mm</span></td>
            <td>${pipe.id}<span class="unit">mm</span></td>
            <td><span class="badge badge-primary">${pipe.pressure}</span></td>
        `;
        tbody.appendChild(row);
    });
}

function renderRefrigerantTable(refType = 'R22') {
    const tbody = document.querySelector('#refrigerantTable tbody');
    tbody.innerHTML = '';

    const data = refrigerantData[refType];

    data.forEach(item => {
        const psi = (item.pressure * 14.223).toFixed(1); // 轉換為 PSI
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">${item.temp}°C</td>
            <td>${item.pressure.toFixed(2)}<span class="unit">kg/cm²</span></td>
            <td>${psi}<span class="unit">psi</span></td>
        `;
        tbody.appendChild(row);
    });
}

function renderWireRopeTable() {
    const tbody = document.querySelector('#wireRopeTable tbody');
    tbody.innerHTML = '';

    wireRopeData.forEach(rope => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">Ø${rope.diameter}<span class="unit">mm</span></td>
            <td>${rope.breakingLoad}<span class="unit">噸</span></td>
            <td><span class="badge badge-success">${rope.safeLoad}</span><span class="unit">噸</span></td>
            <td>${rope.weight}<span class="unit">kg/m</span></td>
        `;
        tbody.appendChild(row);
    });
}

function renderTappingTable(type = 'coarse') {
    const tbody = document.querySelector('#tappingTable tbody');
    tbody.innerHTML = '';

    const data = type === 'coarse' ? tappingData : tappingFineData;

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">${item.thread}</td>
            <td>${item.pitch}<span class="unit">mm</span></td>
            <td><span class="badge badge-success">Ø${item.drillSize}</span></td>
            <td>Ø${item.minDrill}</td>
            <td>Ø${item.maxDrill}</td>
        `;
        tbody.appendChild(row);
    });
}

function renderBoltTorqueTable() {
    const tbody = document.querySelector('#boltTorqueTable tbody');
    tbody.innerHTML = '';

    boltTorqueData.forEach(bolt => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">${bolt.size}</td>
            <td>${bolt.torque}<span class="unit">Nm</span></td>
            <td>${bolt.torqueOil}<span class="unit">Nm</span></td>
        `;
        tbody.appendChild(row);
    });
}

// ============================================
// 新增規格表格渲染
// ============================================

function renderCableTable() {
    const tbody = document.querySelector('#cableTable tbody');
    tbody.innerHTML = '';

    cableData.forEach(cable => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">${cable.mm2}</td>
            <td>${cable.awg}</td>
            <td>${cable.ampPVC}<span class="unit">A</span></td>
            <td>${cable.ampXLPE}<span class="unit">A</span></td>
            <td>${cable.resistance}<span class="unit">Ω/km</span></td>
        `;
        tbody.appendChild(row);
    });
}

function renderFlangeTable(type = 'jis10k') {
    const tbody = document.querySelector('#flangeTable tbody');
    tbody.innerHTML = '';

    const data = flangeData[type];
    const title = type === 'jis10k' ? 'JIS 10K' : 'ANSI 150';
    document.getElementById('flangeTableTitle').textContent = `📊 ${title} 法蘭對照表`;

    data.forEach(flange => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">${flange.size}</td>
            <td>DN${flange.nominal}</td>
            <td>${flange.od}<span class="unit">mm</span></td>
            <td>${flange.pcd}<span class="unit">mm</span></td>
            <td>${flange.holes}</td>
            <td>Ø${flange.holeDia}<span class="unit">mm</span></td>
            <td>${flange.thickness}<span class="unit">mm</span></td>
        `;
        tbody.appendChild(row);
    });
}

function renderInsulationTable(type = 'cold') {
    const tbody = document.querySelector('#insulationTable tbody');
    const thead = document.querySelector('#insulationTable thead tr');
    tbody.innerHTML = '';

    if (type === 'cold') {
        thead.innerHTML = `
            <th>管徑</th>
            <th>DN</th>
            <th>標準厚度 (25mm環境)</th>
            <th>加厚型 (40mm環境)</th>
        `;
        document.getElementById('insulationTableTitle').textContent = '📊 冷水管保溫厚度';

        insulationData.coldWater.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.pipeSize}</td>
                <td>DN${item.nominal}</td>
                <td>${item.thickness25}<span class="unit">mm</span></td>
                <td>${item.thickness40}<span class="unit">mm</span></td>
            `;
            tbody.appendChild(row);
        });
    } else {
        thead.innerHTML = `
            <th>管徑</th>
            <th>DN</th>
            <th>80°C 熱水</th>
            <th>120°C 熱水</th>
        `;
        document.getElementById('insulationTableTitle').textContent = '📊 熱水管保溫厚度';

        insulationData.hotWater.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.pipeSize}</td>
                <td>DN${item.nominal}</td>
                <td>${item.temp80}<span class="unit">mm</span></td>
                <td>${item.temp120}<span class="unit">mm</span></td>
            `;
            tbody.appendChild(row);
        });
    }
}

function renderValveCvTable(type = 'ball') {
    const tbody = document.querySelector('#valveCvTable tbody');
    tbody.innerHTML = '';

    const valveTypes = {
        ball: { data: valveCvData.ballValve, name: '球閥' },
        butterfly: { data: valveCvData.butterflyValve, name: '蝶閥' },
        gate: { data: valveCvData.gateValve, name: '閘閥' }
    };

    const valve = valveTypes[type];
    document.getElementById('valveCvTableTitle').textContent = `📊 ${valve.name} Cv 值對照表`;

    valve.data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">${item.size}</td>
            <td>DN${item.nominal}</td>
            <td><span class="badge badge-primary">${item.cv}</span></td>
        `;
        tbody.appendChild(row);
    });
}

function renderExpansionTable() {
    const tbody = document.querySelector('#expansionTable tbody');
    tbody.innerHTML = '';

    expansionData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">${item.material}</td>
            <td>${item.coefficient}</td>
            <td>${item.tempRange}</td>
        `;
        tbody.appendChild(row);
    });
}

function renderFittingTable(type = 'elbow90') {
    const tbody = document.querySelector('#fittingTable tbody');
    tbody.innerHTML = '';

    const fittingTypes = {
        elbow90: { data: fittingEquivalentData.elbow90, name: '90°彎頭' },
        elbow45: { data: fittingEquivalentData.elbow45, name: '45°彎頭' },
        tee: { data: fittingEquivalentData.tee, name: '三通' },
        gateValve: { data: fittingEquivalentData.gateValve, name: '閘閥' }
    };

    const fitting = fittingTypes[type];
    document.getElementById('fittingTableTitle').textContent = `📊 ${fitting.name}當量長度`;

    fitting.data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">${item.size}</td>
            <td>DN${item.nominal}</td>
            <td><span class="badge badge-success">${item.length}</span><span class="unit">m</span></td>
        `;
        tbody.appendChild(row);
    });
}

function renderWeldingTable(type = 'rod') {
    const tbody = document.querySelector('#weldingTable tbody');
    const thead = document.getElementById('weldingTableHead');
    tbody.innerHTML = '';

    if (type === 'rod') {
        thead.innerHTML = `
            <tr>
                <th>焊條型號</th>
                <th>適用材料</th>
                <th>焊接位置</th>
                <th>電流</th>
                <th>抗拉強度 (MPa)</th>
                <th>用途</th>
            </tr>
        `;
        document.getElementById('weldingTableTitle').textContent = '📊 焊條規格對照表';

        weldingRodData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.type}</td>
                <td>${item.material}</td>
                <td>${item.position}</td>
                <td>${item.current}</td>
                <td>${item.tensile}</td>
                <td>${item.use}</td>
            `;
            tbody.appendChild(row);
        });
    } else {
        thead.innerHTML = `
            <tr>
                <th>材質</th>
                <th>板厚</th>
                <th>預熱溫度</th>
            </tr>
        `;
        document.getElementById('weldingTableTitle').textContent = '📊 焊接預熱溫度參考';

        preheatData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.material}</td>
                <td>${item.thickness}</td>
                <td><span class="badge badge-warning">${item.preheat}</span></td>
            `;
            tbody.appendChild(row);
        });
    }
}

function renderCraneTable(type = 'capacity') {
    const tbody = document.querySelector('#craneTable tbody');
    const thead = document.getElementById('craneTableHead');
    tbody.innerHTML = '';

    if (type === 'capacity') {
        thead.innerHTML = `
            <tr>
                <th>額定噸數</th>
                <th>3m 半徑</th>
                <th>5m 半徑</th>
                <th>8m 半徑</th>
                <th>10m 半徑</th>
                <th>吊臂長度 (m)</th>
            </tr>
        `;
        document.getElementById('craneTableTitle').textContent = '📊 吊車吊重能力表（噸）';

        craneData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.capacity}T</td>
                <td>${item.radius3m}</td>
                <td>${item.radius5m}</td>
                <td>${item.radius8m}</td>
                <td>${item.radius10m}</td>
                <td>${item.boomLength}</td>
            `;
            tbody.appendChild(row);
        });
    } else {
        thead.innerHTML = `
            <tr>
                <th>電壓等級</th>
                <th>最小安全距離 (m)</th>
            </tr>
        `;
        document.getElementById('craneTableTitle').textContent = '📊 電線安全距離參考';

        craneSafetyData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.voltage}</td>
                <td><span class="badge badge-warning">${item.minDistance}</span><span class="unit">m</span></td>
            `;
            tbody.appendChild(row);
        });
    }
}

// ============================================
// 膨脹量計算器
// ============================================
function calculateExpansion() {
    const coefficient = parseFloat(document.getElementById('expansionMaterial').value);
    const length = parseFloat(document.getElementById('pipeLength').value);
    const tempDiff = parseFloat(document.getElementById('tempDiff').value);
    const resultEl = document.getElementById('expansionResult');

    if (isNaN(length) || isNaN(tempDiff)) {
        resultEl.textContent = '-- mm';
        return;
    }

    // 膨脹量 = 係數(×10⁻⁶) × 長度(m) × 溫差(°C) → 結果為 m，轉換為 mm
    const expansion = coefficient * length * tempDiff * 0.001; // mm
    resultEl.textContent = `${expansion.toFixed(2)} mm`;
}
