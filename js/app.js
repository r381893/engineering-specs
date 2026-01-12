// 工程規格查詢工具 - 主程式

// ============================================
// DOM 載入完成後初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initSubTabs();
    initSearch();
    initCalculators();
    initCalculators();
    initCharts();
    initPressureDropCalculator();
    initSchaeffler(); // Initialize Schaeffler Diagram
    renderAllTables();
    populateThreadSelect();
    initQuiz();
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
                    // 如果切換到由於 Chart.js 需要在 visible 狀態下渲染，這裡補發 resize event
                    if (targetId === 'refrigerant' || targetId === 'wire-rope') {
                        window.dispatchEvent(new Event('resize'));
                    }
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

    // 皮帶子標籤
    document.querySelectorAll('[data-belt]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-belt]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderBeltTable(btn.dataset.belt);
        });
    });

    // 壁虎子標籤
    document.querySelectorAll('[data-anchor]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-anchor]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderAnchorTable(btn.dataset.anchor);
        });
    });

    // 材料力學子標籤
    document.querySelectorAll('[data-materials]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-materials]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMaterialsTable(btn.dataset.materials);
        });
    });

    // 氧乙炔電銲子標籤
    document.querySelectorAll('[data-oxyweld]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-oxyweld]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderOxyWeldTable(btn.dataset.oxyweld);
        });
    });

    // 十字鋼材子標籤
    document.querySelectorAll('[data-scm]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-scm]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderScmTable(btn.dataset.scm);
        });
    });

    // 軸承子標籤
    document.querySelectorAll('[data-bearing]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-bearing]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderBearingTable(btn.dataset.bearing);
        });
    });

    // O型環子標籤
    document.querySelectorAll('[data-oring]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-oring]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderOringTable(btn.dataset.oring);
        });
    });

    // 皮帶計算器
    const beltInputs = ['beltD1', 'beltD2', 'beltCenter', 'beltRPM'];
    beltInputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', calculateBeltDrive);
            el.addEventListener('change', calculateBeltDrive);
        }
    });
    calculateBeltDrive();

    // 工程概念知識庫子標籤切換
    document.querySelectorAll('[data-subtab]').forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除同一組的 active 狀態
            const parent = btn.closest('.sub-tabs');
            parent.querySelectorAll('.sub-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 切換顯示對應的 sub-content
            const section = btn.closest('section');
            section.querySelectorAll('.sub-content').forEach(content => {
                content.classList.remove('active');
            });
            const targetContent = section.querySelector(`#${btn.dataset.subtab}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
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
    renderBeltTable('vbeltA');
    renderAnchorTable('plastic');
    renderMaterialsTable('mechanical');
    renderPhasePropertiesTable();
    renderCriticalPointsTable();
    renderOxyWeldTable('gas');
    renderScmTable('chemical');
    renderBearingTable('6000');
    renderOringTable('p');
    renderConceptTables();
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
    const schaefflerDiv = document.getElementById('welding-schaeffler');
    const weldingTableDiv = document.getElementById('welding-general-table');

    // Toggle visibility
    if (type === 'schaeffler') {
        if (schaefflerDiv) schaefflerDiv.style.display = 'block';
        if (weldingTableDiv) weldingTableDiv.style.display = 'none';
        // Trigger resize for Chart.js
        window.dispatchEvent(new Event('resize'));
        return; // Skip table rendering
    } else {
        if (schaefflerDiv) schaefflerDiv.style.display = 'none';
        if (weldingTableDiv) weldingTableDiv.style.display = 'block';
    }

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
    } else if (type === 'preheat') {
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
    } else if (type === 'carbon') {
        thead.innerHTML = `
            <tr>
                <th>鋼材類型</th>
                <th>碳當量 CE</th>
                <th>建議預熱</th>
                <th>裂紋風險</th>
                <th>可焊性</th>
            </tr>
        `;
        document.getElementById('weldingTableTitle').textContent = '📊 碳當量與可焊性參考';

        carbonEquivalentData.forEach(item => {
            const riskClass = item.crackRisk === '低' ? 'badge-success' :
                item.crackRisk === '中' ? 'badge-warning' : 'badge-danger';
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.steel}</td>
                <td>${item.ce}</td>
                <td>${item.preheat}</td>
                <td><span class="badge ${riskClass}">${item.crackRisk}</span></td>
                <td>${item.weldability}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'interpass') {
        thead.innerHTML = `
            <tr>
                <th>材質</th>
                <th>最低溫度 (°C)</th>
                <th>最高溫度 (°C)</th>
                <th>說明</th>
            </tr>
        `;
        document.getElementById('weldingTableTitle').textContent = '📊 層間溫度建議';

        interpassTempData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.material}</td>
                <td>${item.minTemp}</td>
                <td><span class="badge badge-warning">${item.maxTemp}</span></td>
                <td>${item.note}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'pwht') {
        thead.innerHTML = `
            <tr>
                <th>材質/厚度</th>
                <th>是否需要</th>
                <th>溫度</th>
                <th>保溫時間</th>
                <th>冷卻方式</th>
                <th>目的</th>
            </tr>
        `;
        document.getElementById('weldingTableTitle').textContent = '📊 PWHT 銲後熱處理';

        pwhtData.forEach(item => {
            const reqClass = item.required === '必須' ? 'badge-danger' :
                item.required === '建議' ? 'badge-warning' :
                    item.required === '不建議' ? 'badge-secondary' : 'badge-success';
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.material}</td>
                <td><span class="badge ${reqClass}">${item.required}</span></td>
                <td>${item.temp}</td>
                <td>${item.holdTime}</td>
                <td>${item.cooling}</td>
                <td>${item.purpose}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'preheatMethod') {
        thead.innerHTML = `
            <tr>
                <th>預熱方法</th>
                <th>優點</th>
                <th>缺點</th>
                <th>適用場合</th>
                <th>成本</th>
            </tr>
        `;
        document.getElementById('weldingTableTitle').textContent = '📊 預熱方法比較';

        preheatMethodData.forEach(item => {
            const costClass = item.costLevel === '低' ? 'badge-success' :
                item.costLevel === '中' ? 'badge-warning' : 'badge-danger';
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.method}</td>
                <td>${item.advantage}</td>
                <td>${item.disadvantage}</td>
                <td>${item.application}</td>
                <td><span class="badge ${costClass}">${item.costLevel}</span></td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'highTempSteel') {
        thead.innerHTML = `
            <tr>
                <th>鋼種</th>
                <th>類型</th>
                <th>鉻 Cr</th>
                <th>鉬 Mo + 其他</th>
                <th>抗氧化</th>
                <th>潛變強度</th>
                <th>PWHT 需求</th>
                <th>可焊性</th>
                <th>主要用途</th>
                <th>最高溫度</th>
            </tr>
        `;
        document.getElementById('weldingTableTitle').textContent = '📊 高溫合金鋼比較 (電廠鍋爐用)';

        highTempSteelData.forEach(item => {
            // 潛變強度顏色
            const creepClass = item.creepStrength.includes('極高') ? 'badge-success' :
                item.creepStrength.includes('普通') ? 'badge-warning' : 'badge-secondary';
            // PWHT 顏色 - 不需要是優勢(綠色)，必須是風險(紅色)
            const pwhtClass = item.pwht === '必須' ? 'badge-danger' :
                item.pwht === '需要' ? 'badge-warning' : 'badge-success';
            // 抗氧化顏色
            const oxiClass = item.oxidation === '優良' ? 'badge-success' : 'badge-warning';
            // 可焊性顏色
            const weldClass = item.weldability === '優良' ? 'badge-success' :
                item.weldability === '良好' ? 'badge-primary' :
                    item.weldability === '需謹慎' ? 'badge-warning' : 'badge-danger';

            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.grade}</td>
                <td>${item.type}</td>
                <td>${item.cr}</td>
                <td>${item.mo}</td>
                <td><span class="badge ${oxiClass}">${item.oxidation}</span></td>
                <td><span class="badge ${creepClass}">${item.creepStrength}</span></td>
                <td><span class="badge ${pwhtClass}">${item.pwht}</span></td>
                <td><span class="badge ${weldClass}">${item.weldability}</span></td>
                <td>${item.application}</td>
                <td>${item.maxTemp}</td>
            `;
            tbody.appendChild(row);
        });

        // 添加選用指南表格
        const container = tbody.closest('.table-container');

        // 清除舊的指南區塊（如果存在）避免重複
        const existingGuide = container.querySelector('#highTempSteelGuideDiv');
        if (existingGuide) {
            existingGuide.remove();
        }

        const guideDiv = document.createElement('div');
        guideDiv.id = 'highTempSteelGuideDiv';
        guideDiv.innerHTML = `
            <div class="table-header" style="margin-top: 20px;">
                <span class="table-title">💡 高溫鋼材選用指南</span>
            </div>
            <div class="table-scroll">
                <table id="highTempSteelGuideTable">
                    <thead>
                        <tr>
                            <th>使用條件</th>
                            <th>建議鋼種</th>
                            <th>選用原因</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <div class="note-box" style="margin-top: 15px; padding: 12px; background: rgba(76, 175, 80, 0.1); border-left: 3px solid #4caf50; border-radius: 4px;">
                <strong>💡 T23 關鍵優勢：</strong><br>
                T23 因添加 W（鎢）、V（釩）、Nb（鈮）等微合金元素，具備極高的潛變強度，同時<strong style="color: #4caf50;">可免除 PWHT（銲後熱處理）</strong>，
                這對現場焊接維修特別有利，可大幅減少施工時間與成本。
            </div>
            <div class="note-box" style="margin-top: 10px; padding: 12px; background: rgba(244, 67, 54, 0.1); border-left: 3px solid #f44336; border-radius: 4px;">
                <strong>⚠️ T91 注意事項：</strong><br>
                T91 雖然潛變強度極高，但焊接需嚴格控制，PWHT 為必須且條件嚴格（730-770°C，最小2小時），
                若 PWHT 不當可能導致潛變脆化，需由有經驗的焊工施作。
            </div>
        `;
        container.appendChild(guideDiv);

        const guideTable = container.querySelector('#highTempSteelGuideTable');
        const guideBody = guideTable.querySelector('tbody');
        guideBody.innerHTML = '';

        highTempSteelGuide.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.condition}</td>
                <td class="highlight">${item.recommendation}</td>
                <td>${item.reason}</td>
            `;
            guideBody.appendChild(row);
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
// 皮帶規格表格
// ============================================
function renderBeltTable(type = 'vbeltA') {
    const tbody = document.querySelector('#beltTable tbody');
    const thead = document.querySelector('#beltTable thead tr');
    const titleEl = document.getElementById('beltTableTitle');

    if (!tbody || !thead) return;

    tbody.innerHTML = '';

    if (type.startsWith('vbelt')) {
        const beltType = type.replace('vbelt', '');
        const data = vBeltData[beltType];

        if (!data) return;

        titleEl.textContent = `📊 V 型皮帶 ${beltType} 型規格表`;
        thead.innerHTML = `
            <th>型號</th>
            <th>長度 (mm)</th>
            <th>頂寬 (mm)</th>
            <th>高度 (mm)</th>
            <th>角度 (°)</th>
        `;

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.length}</td>
                <td>${item.mm}</td>
                <td>${item.topWidth}</td>
                <td>${item.height}</td>
                <td>${item.angle}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'timing') {
        titleEl.textContent = '📊 時規皮帶規格表';
        thead.innerHTML = `
            <th>型號</th>
            <th>節距 (mm)</th>
            <th>齒高 (mm)</th>
            <th>帶高 (mm)</th>
            <th>常用寬度</th>
            <th>說明</th>
        `;

        Object.entries(timingBeltData).forEach(([name, spec]) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${name}</td>
                <td>${spec.pitch}</td>
                <td>${spec.toothDepth}</td>
                <td>${spec.beltHeight}</td>
                <td>${spec.widths.join(', ')}</td>
                <td>${spec.desc}</td>
            `;
            tbody.appendChild(row);
        });
    }
}

function renderAnchorTable(type = 'plastic') {
    const tbody = document.querySelector('#anchorTable tbody');
    const thead = document.querySelector('#anchorTable thead tr');
    const titleEl = document.getElementById('anchorTableTitle');

    if (!tbody || !thead) return;

    tbody.innerHTML = '';

    if (type === 'plastic') {
        titleEl.textContent = '📊 塑膠壁虎規格表';
        thead.innerHTML = `
            <th>規格</th>
            <th>鑽孔 (mm)</th>
            <th>長度 (mm)</th>
            <th>配套螺絲</th>
            <th>混凝土載重 (kN)</th>
            <th>磚牆載重 (kN)</th>
        `;

        anchorData.plastic.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.size}</td>
                <td>${item.drillSize}</td>
                <td>${item.length}</td>
                <td>${item.screw}</td>
                <td>${item.loadConcrete}</td>
                <td>${item.loadBrick}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'metal') {
        titleEl.textContent = '📊 金屬膨脹螺絲規格表';
        thead.innerHTML = `
            <th>規格</th>
            <th>鑽孔 (mm)</th>
            <th>深度 (mm)</th>
            <th>扭力 (Nm)</th>
            <th>混凝土載重 (kN)</th>
            <th>磚牆載重 (kN)</th>
        `;

        anchorData.metalExpansion.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.size}</td>
                <td>${item.drillSize}</td>
                <td>${item.depth}</td>
                <td>${item.torque}</td>
                <td>${item.loadConcrete}</td>
                <td>${item.loadBrick}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'chemical') {
        titleEl.textContent = '📊 化學錨栓規格表';
        thead.innerHTML = `
            <th>規格</th>
            <th>鑽孔 (mm)</th>
            <th>深度 (mm)</th>
            <th>固化時間</th>
            <th>混凝土載重 (kN)</th>
        `;

        anchorData.chemicalAnchor.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.size}</td>
                <td>${item.drillSize}</td>
                <td>${item.depth}</td>
                <td>${item.cureTime}</td>
                <td><strong>${item.loadConcrete}</strong></td>
            `;
            tbody.appendChild(row);
        });
    }
}

// 皮帶傳動計算
function calculateBeltDrive() {
    const d1 = parseFloat(document.getElementById('beltD1')?.value) || 0;
    const d2 = parseFloat(document.getElementById('beltD2')?.value) || 0;
    const center = parseFloat(document.getElementById('beltCenter')?.value) || 0;
    const rpm1 = parseFloat(document.getElementById('beltRPM')?.value) || 0;

    const ratioEl = document.getElementById('beltRatio');
    const rpm2El = document.getElementById('beltRPM2');
    const lengthEl = document.getElementById('beltLength');

    if (!ratioEl || !rpm2El || !lengthEl) return;

    if (d1 <= 0 || d2 <= 0) {
        ratioEl.textContent = '--';
        rpm2El.textContent = '-- RPM';
        lengthEl.textContent = '-- mm';
        return;
    }

    // 傳動比 = D2 / D1
    const ratio = d2 / d1;
    ratioEl.textContent = ratio.toFixed(2);

    // 從動輪轉速 = 主動輪轉速 / 傳動比
    if (rpm1 > 0) {
        const rpm2 = rpm1 / ratio;
        rpm2El.textContent = `${rpm2.toFixed(0)} RPM`;
    } else {
        rpm2El.textContent = '-- RPM';
    }

    // 皮帶長度 (近似公式)
    // L ≈ 2C + π(D1+D2)/2 + (D2-D1)²/(4C)
    if (center > 0) {
        const length = 2 * center + Math.PI * (d1 + d2) / 2 + Math.pow(d2 - d1, 2) / (4 * center);
        lengthEl.textContent = `${length.toFixed(0)} mm`;
    } else {
        lengthEl.textContent = '-- mm';
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

// ============================================
// 材料力學表格
// ============================================
function renderMaterialsTable(type = 'mechanical') {
    const tbody = document.querySelector('#materialsTable tbody');
    const thead = document.getElementById('materialsTableHead');
    const titleEl = document.getElementById('materialsTableTitle');

    if (!tbody || !thead || !titleEl) return;

    tbody.innerHTML = '';

    if (type === 'mechanical') {
        thead.innerHTML = `
            <tr>
                <th>材料</th>
                <th>抗拉強度 (MPa)</th>
                <th>屈服強度 (MPa)</th>
                <th>延伸率 (%)</th>
                <th>硬度</th>
                <th>密度 (g/cm³)</th>
            </tr>
        `;
        titleEl.textContent = '📊 金屬機械性質表';

        metalPropertiesData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.material}</td>
                <td>${item.tensile}</td>
                <td>${item.yield}</td>
                <td>${item.elongation}</td>
                <td>${item.hardness}</td>
                <td>${item.density}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'plastic') {
        thead.innerHTML = `
            <tr>
                <th>材料</th>
                <th>延展性</th>
                <th>應變硬化指數 n</th>
                <th>最小彎曲半徑</th>
                <th>回彈角</th>
            </tr>
        `;
        titleEl.textContent = '📊 塑性變形參數表';

        plasticDeformationData.forEach(item => {
            const ductClass = item.ductility === '極高' ? 'badge-success' :
                item.ductility === '高' ? 'badge-primary' :
                    item.ductility === '中' ? 'badge-warning' : 'badge-danger';
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.material}</td>
                <td><span class="badge ${ductClass}">${item.ductility}</span></td>
                <td>${item.strainHardening}</td>
                <td>${item.minBendRadius}</td>
                <td>${item.springback}</td>
            `;
            tbody.appendChild(row);
        });
    }
}

// ============================================
// 平衡教學 - 鐵碳相特性表
// ============================================
function renderPhasePropertiesTable() {
    const tbody = document.querySelector('#phasePropertiesTable tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    phasePropertiesData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">${item.phase}</td>
            <td>${item.structure}</td>
            <td>${item.maxCarbon}</td>
            <td>${item.hardness}</td>
            <td>${item.property}</td>
            <td>${item.tempRange}</td>
        `;
        tbody.appendChild(row);
    });
}

// ============================================
// 平衡教學 - 臨界點溫度表
// ============================================
function renderCriticalPointsTable() {
    const tbody = document.querySelector('#criticalPointsTable tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    criticalPointsData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">${item.point}</td>
            <td><span class="badge badge-warning">${item.temp}</span></td>
            <td>${item.description}</td>
        `;
        tbody.appendChild(row);
    });
}

// ============================================
// 氧乙炔電銲表格
// ============================================
function renderOxyWeldTable(type = 'gas') {
    const tbody = document.querySelector('#oxyWeldTable tbody');
    const thead = document.getElementById('oxyWeldTableHead');
    const titleEl = document.getElementById('oxyWeldTableTitle');

    if (!tbody || !thead || !titleEl) return;

    tbody.innerHTML = '';

    if (type === 'gas') {
        thead.innerHTML = `
            <tr>
                <th>氣體</th>
                <th>火焰溫度</th>
                <th>特性</th>
                <th>用途</th>
                <th>儲存方式</th>
                <th>鋼瓶顏色</th>
            </tr>
        `;
        titleEl.textContent = '📊 焊接氣體特性';

        weldingGasData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.gas}</td>
                <td>${item.temp}</td>
                <td>${item.characteristics}</td>
                <td>${item.use}</td>
                <td>${item.storage}</td>
                <td><span class="badge badge-primary">${item.color}</span></td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'flame') {
        thead.innerHTML = `
            <tr>
                <th>火焰類型</th>
                <th>氣體比例</th>
                <th>特徵</th>
                <th>用途</th>
                <th>適用材料</th>
                <th>備註</th>
            </tr>
        `;
        titleEl.textContent = '📊 氧乙炔火焰類型';

        flameTypeData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.type}</td>
                <td>${item.ratio}</td>
                <td>${item.characteristics}</td>
                <td>${item.use}</td>
                <td>${item.material}</td>
                <td>${item.note}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'tipUS') {
        thead.innerHTML = `
            <tr>
                <th>焊嘴號數</th>
                <th>孔徑 (mm)</th>
                <th>適用板厚</th>
                <th>氣體流量 (L/hr)</th>
                <th>壓力 (MPa)</th>
                <th>應用</th>
            </tr>
        `;
        titleEl.textContent = '📊 焊嘴規格 - 美規 (Victor/Harris)';

        oxyTipUSData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.tipNo}</td>
                <td>Ø${item.holeSize}</td>
                <td>${item.thickness}</td>
                <td>${item.gasFlow}</td>
                <td>${item.pressure}</td>
                <td>${item.application}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'tipJIS') {
        thead.innerHTML = `
            <tr>
                <th>焊嘴號數</th>
                <th>孔徑 (mm)</th>
                <th>適用板厚</th>
                <th>氣體流量 (L/hr)</th>
                <th>壓力 (MPa)</th>
                <th>應用</th>
            </tr>
        `;
        titleEl.textContent = '📊 焊嘴規格 - 日規 (JIS/小池)';

        oxyTipJISData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.tipNo}</td>
                <td>Ø${item.holeSize}</td>
                <td>${item.thickness}</td>
                <td>${item.gasFlow}</td>
                <td>${item.pressure}</td>
                <td>${item.application}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'rod') {
        thead.innerHTML = `
            <tr>
                <th>焊條型號</th>
                <th>適用材料</th>
                <th>抗拉強度 (MPa)</th>
                <th>用途</th>
                <th>直徑</th>
                <th>藥皮</th>
            </tr>
        `;
        titleEl.textContent = '📊 氣焊焊條規格';

        gasWeldingRodData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.type}</td>
                <td>${item.material}</td>
                <td>${item.tensile}</td>
                <td>${item.use}</td>
                <td>${item.diameter}</td>
                <td><span class="badge badge-secondary">${item.coating}</span></td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'welder') {
        thead.innerHTML = `
            <tr>
                <th>電焊機類型</th>
                <th>輸出</th>
                <th>電流範圍</th>
                <th>電壓</th>
                <th>用途</th>
                <th>優點</th>
            </tr>
        `;
        titleEl.textContent = '📊 電弧焊機規格';

        arcWelderData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.type}</td>
                <td><span class="badge badge-primary">${item.output}</span></td>
                <td>${item.current}</td>
                <td>${item.voltage}</td>
                <td>${item.use}</td>
                <td>${item.advantage}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'safety') {
        thead.innerHTML = `
            <tr>
                <th>項目</th>
                <th>規格</th>
                <th>要求</th>
                <th>備註</th>
            </tr>
        `;
        titleEl.textContent = '📊 焊接安全防護';

        weldingSafetyData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.item}</td>
                <td>${item.spec}</td>
                <td>${item.requirement}</td>
                <td><span class="badge badge-warning">${item.note}</span></td>
            `;
            tbody.appendChild(row);
        });
    }
}

// ============================================
// 十字鋼材表格
// ============================================
function renderScmTable(type = 'chemical') {
    const tbody = document.querySelector('#scmTable tbody');
    const thead = document.getElementById('scmTableHead');
    const titleEl = document.getElementById('scmTableTitle');

    if (!tbody || !thead || !titleEl) return;

    tbody.innerHTML = '';

    if (type === 'chemical') {
        thead.innerHTML = `
            <tr>
                <th>鋼號</th>
                <th>類型</th>
                <th>C (碳)</th>
                <th>Si (矽)</th>
                <th>Mn (錳)</th>
                <th>Cr (鉻)</th>
                <th>Mo (鉬)</th>
                <th>Ni (鎳)</th>
                <th>用途</th>
            </tr>
        `;
        titleEl.textContent = '📊 JIS 化學成分規範 (%)';

        scmChemicalData.forEach(item => {
            const typeClass = item.type === '紅十字' ? 'badge-danger' : 'badge-primary';
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.grade}</td>
                <td><span class="badge ${typeClass}">${item.type}</span></td>
                <td>${item.c}</td>
                <td>${item.si}</td>
                <td>${item.mn}</td>
                <td>${item.cr}</td>
                <td>${item.mo}</td>
                <td>${item.ni}</td>
                <td>${item.use}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'heat') {
        thead.innerHTML = `
            <tr>
                <th>鋼號</th>
                <th>鍛造溫度</th>
                <th>正常化</th>
                <th>退火</th>
                <th>淬火</th>
                <th>回火</th>
                <th>滲碳</th>
            </tr>
        `;
        titleEl.textContent = '📊 熱處理溫度條件 (°C)';

        scmHeatTreatData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.grade}</td>
                <td>${item.forging}</td>
                <td>${item.normalizing}</td>
                <td>${item.annealing}</td>
                <td><span class="badge badge-warning">${item.quenching}</span></td>
                <td>${item.tempering}</td>
                <td>${item.carburizing}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'mech') {
        thead.innerHTML = `
            <tr>
                <th>鋼號</th>
                <th>抗拉強度 (MPa)</th>
                <th>降伏強度 (MPa)</th>
                <th>伸長率 (%)</th>
                <th>衝擊值 (J/cm²)</th>
                <th>硬度 (HBW)</th>
                <th>表面硬度</th>
            </tr>
        `;
        titleEl.textContent = '📊 機械性質 (調質後參考值)';

        scmMechData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.grade}</td>
                <td>${item.tensile}</td>
                <td>${item.yield}</td>
                <td>${item.elongation}</td>
                <td>${item.impact}</td>
                <td>${item.hardness}</td>
                <td><span class="badge badge-success">${item.surfaceHardness}</span></td>
            `;
            tbody.appendChild(row);
        });
    }
}

// ============================================
// 軸承表格
// ============================================
function renderBearingTable(type = '6000') {
    const tbody = document.querySelector('#bearingTable tbody');
    const thead = document.getElementById('bearingTableHead');
    const titleEl = document.getElementById('bearingTableTitle');

    if (!tbody || !thead || !titleEl) return;

    tbody.innerHTML = '';

    thead.innerHTML = `
        <tr>
            <th>型號</th>
            <th>d (mm)</th>
            <th>D (mm)</th>
            <th>B (mm)</th>
            <th>動負載 Cr (N)</th>
            <th>靜負載 C0r (N)</th>
            <th>極限轉速(脂)</th>
            <th>極限轉速(油)</th>
        </tr>
    `;

    let data;
    if (type === '6000') {
        data = bearing6000Data;
        titleEl.textContent = '📊 6000 系列 (輕型負載)';
    } else if (type === '6200') {
        data = bearing6200Data;
        titleEl.textContent = '📊 6200 系列 (最常用規格)';
    } else if (type === '6300') {
        data = bearing6300Data;
        titleEl.textContent = '📊 6300 系列 (重負荷)';
    }

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="highlight">${item.model}</td>
            <td>${item.d}</td>
            <td>${item.D}</td>
            <td>${item.B}</td>
            <td><strong>${item.Cr.toLocaleString()}</strong></td>
            <td>${item.C0r.toLocaleString()}</td>
            <td><span class="badge badge-warning">${item.speedGrease.toLocaleString()}</span></td>
            <td><span class="badge badge-success">${item.speedOil.toLocaleString()}</span></td>
        `;
        tbody.appendChild(row);
    });
}

// ============================================
// O型環表格
// ============================================
function renderOringTable(type = 'p') {
    const tbody = document.querySelector('#oringTable tbody');
    const thead = document.getElementById('oringTableHead');
    const titleEl = document.getElementById('oringTableTitle');

    if (!tbody || !thead || !titleEl) return;

    tbody.innerHTML = '';

    if (type === 'p' || type === 'g' || type === 'v') {
        thead.innerHTML = `
            <tr>
                <th>規格</th>
                <th>內徑 ID (mm)</th>
                <th>內徑公差</th>
                <th>線徑 W (mm)</th>
                <th>線徑公差</th>
                <th>用途</th>
            </tr>
        `;

        let data;
        if (type === 'p') {
            data = oringPData;
            titleEl.textContent = '📊 P 系列 (運動用) 精密尺寸表';
        } else if (type === 'g') {
            data = oringGData;
            titleEl.textContent = '📊 G 系列 (固定用) 精密尺寸表';
        } else if (type === 'v') {
            data = oringVData;
            titleEl.textContent = '📊 V 系列 (真空法蘭用)';
        }

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.spec}</td>
                <td>${item.id}</td>
                <td><span class="badge badge-primary">${item.idTol}</span></td>
                <td>${item.w}</td>
                <td><span class="badge badge-primary">${item.wTol}</span></td>
                <td>${item.use}</td>
            `;
            tbody.appendChild(row);
        });
    } else if (type === 'groove') {
        thead.innerHTML = `
            <tr>
                <th>線徑 W (mm)</th>
                <th>溝槽寬度 (mm)</th>
                <th>溝槽深度 (mm)</th>
                <th>徑向間隙 (mm)</th>
                <th>壓縮率</th>
                <th>填充率</th>
            </tr>
        `;
        titleEl.textContent = '📊 建議溝槽尺寸 (運動用)';

        oringGrooveData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="highlight">${item.w}</td>
                <td>${item.grooveWidth}</td>
                <td>${item.grooveDepth}</td>
                <td>${item.clearance}</td>
                <td><span class="badge badge-warning">${item.squeeze}</span></td>
                <td><span class="badge badge-success">${item.fill}</span></td>
            `;
            tbody.appendChild(row);
        });
    }
}

// ============================================
// SOP 筆記本功能
// ============================================

const SOP = {
    // 狀態
    state: {
        categories: [],
        documents: [],
        currentCategory: null,
        currentDocument: null,
        editingCategory: null,
        editingDocument: null,
        pendingImages: [],
        viewerImages: [],
        viewerIndex: 0,
        deleteCallback: null
    },

    // 初始化
    init() {
        this.loadData();
        this.bindEvents();
        this.renderCategories();
    },

    // 資料存取
    loadData() {
        this.state.categories = JSON.parse(localStorage.getItem('sop_categories') || '[]');
        this.state.documents = JSON.parse(localStorage.getItem('sop_documents') || '[]');
    },

    saveCategories() {
        localStorage.setItem('sop_categories', JSON.stringify(this.state.categories));
    },

    saveDocuments() {
        try {
            localStorage.setItem('sop_documents', JSON.stringify(this.state.documents));
            return true;
        } catch (e) {
            console.error('儲存失敗:', e);
            if (e.name === 'QuotaExceededError' || e.code === 22) {
                this.showToast('儲存失敗：儲存空間已滿，請刪除部分圖片', 'error');
            } else {
                this.showToast('儲存失敗：' + e.message, 'error');
            }
            return false;
        }
    },

    // 事件綁定
    bindEvents() {
        // 分類視圖
        document.getElementById('addCategoryBtn')?.addEventListener('click', () => this.openCategoryModal());
        document.getElementById('cancelCategoryBtn')?.addEventListener('click', () => this.closeModal('sopCategoryModal'));
        document.getElementById('sopCategoryForm')?.addEventListener('submit', (e) => this.handleCategorySubmit(e));

        // 圖示選擇器
        document.querySelectorAll('#sopIconPicker .sop-icon-option').forEach(opt => {
            opt.addEventListener('click', () => {
                document.querySelectorAll('#sopIconPicker .sop-icon-option').forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                document.getElementById('sopCategoryIcon').value = opt.dataset.icon;
            });
        });

        // 文件視圖
        document.getElementById('backToCategoriesBtn')?.addEventListener('click', () => this.showCategoriesView());
        document.getElementById('addDocumentBtn')?.addEventListener('click', () => this.openDocumentModal());
        document.getElementById('cancelDocumentBtn')?.addEventListener('click', () => this.closeModal('sopDocumentModal'));
        document.getElementById('sopDocumentForm')?.addEventListener('submit', (e) => this.handleDocumentSubmit(e));

        // 文件詳情
        document.getElementById('backToDocumentsBtn')?.addEventListener('click', () => this.showDocumentsView());
        document.getElementById('editDocumentBtn')?.addEventListener('click', () => this.openDocumentModal(this.state.currentDocument));
        document.getElementById('deleteDocumentBtn')?.addEventListener('click', () => {
            this.showConfirm(`確定要刪除「${this.state.currentDocument.title}」嗎？`, () => {
                this.deleteDocument(this.state.currentDocument.id);
            });
        });

        // 圖片上傳
        document.getElementById('sopUploadBtn')?.addEventListener('click', () => {
            document.getElementById('sopImageInput').click();
        });
        document.getElementById('sopImageInput')?.addEventListener('change', (e) => this.handleImageSelect(e));

        // 編輯器工具列
        document.querySelectorAll('.sop-toolbar-btn').forEach(btn => {
            btn.addEventListener('click', () => this.insertFormatting(btn.dataset.action));
        });

        // 圖片檢視器
        document.getElementById('closeImageViewer')?.addEventListener('click', () => this.closeImageViewer());
        document.getElementById('prevImage')?.addEventListener('click', () => this.navigateImage(-1));
        document.getElementById('nextImage')?.addEventListener('click', () => this.navigateImage(1));
        document.querySelector('.sop-viewer-backdrop')?.addEventListener('click', () => this.closeImageViewer());

        // 確認對話框
        document.getElementById('sopConfirmCancel')?.addEventListener('click', () => this.closeModal('sopConfirmModal'));
        document.getElementById('sopConfirmDelete')?.addEventListener('click', () => this.handleConfirmDelete());

        // Modal 背景點擊關閉
        document.querySelectorAll('.sop-modal-backdrop').forEach(backdrop => {
            backdrop.addEventListener('click', () => {
                this.closeModal(backdrop.parentElement.id);
            });
        });
    },

    // ==========================================
    // 分類操作
    // ==========================================
    openCategoryModal(category = null) {
        this.state.editingCategory = category;
        document.getElementById('sopCategoryModalTitle').textContent = category ? '編輯分類' : '新增分類';
        document.getElementById('sopCategoryName').value = category ? category.name : '';

        const icon = category ? category.icon : '📁';
        document.getElementById('sopCategoryIcon').value = icon;
        document.querySelectorAll('#sopIconPicker .sop-icon-option').forEach(opt => {
            opt.classList.toggle('selected', opt.dataset.icon === icon);
        });

        this.openModal('sopCategoryModal');
    },

    handleCategorySubmit(e) {
        e.preventDefault();
        const name = document.getElementById('sopCategoryName').value.trim();
        const icon = document.getElementById('sopCategoryIcon').value;

        if (!name) {
            this.showToast('請輸入分類名稱', 'error');
            return;
        }

        if (this.state.editingCategory) {
            const index = this.state.categories.findIndex(c => c.id === this.state.editingCategory.id);
            this.state.categories[index] = { ...this.state.categories[index], name, icon };
            this.showToast('分類已更新', 'success');
        } else {
            const newCategory = {
                id: 'cat_' + Date.now(),
                name,
                icon,
                createdAt: new Date().toISOString()
            };
            this.state.categories.push(newCategory);
            this.showToast('分類已新增', 'success');
        }

        this.saveCategories();
        this.renderCategories();
        this.closeModal('sopCategoryModal');
    },

    deleteCategory(categoryId) {
        this.state.categories = this.state.categories.filter(c => c.id !== categoryId);
        this.state.documents = this.state.documents.filter(d => d.categoryId !== categoryId);
        this.saveCategories();
        this.saveDocuments();
        this.renderCategories();
        this.showToast('分類已刪除', 'success');
    },

    // ==========================================
    // 文件操作
    // ==========================================
    openDocumentModal(doc = null) {
        this.state.editingDocument = doc;
        this.state.pendingImages = [];

        document.getElementById('sopDocumentModalTitle').textContent = doc ? '編輯文件' : '新增文件';
        document.getElementById('sopDocumentTitleInput').value = doc ? doc.title : '';
        document.getElementById('sopDocumentContentInput').value = doc ? doc.content : '';

        this.renderImagePreview(doc ? doc.images : []);
        this.openModal('sopDocumentModal');
    },

    handleDocumentSubmit(e) {
        e.preventDefault();
        const title = document.getElementById('sopDocumentTitleInput').value.trim();
        const content = document.getElementById('sopDocumentContentInput').value;

        if (!title) {
            this.showToast('請輸入文件標題', 'error');
            return;
        }

        const now = new Date().toISOString();

        // 處理圖片
        const existingImages = this.state.editingDocument ? (this.state.editingDocument.images || []) : [];
        const newImages = this.state.pendingImages.map(img => img.data);
        const allImages = [...existingImages, ...newImages];

        if (this.state.editingDocument) {
            const index = this.state.documents.findIndex(d => d.id === this.state.editingDocument.id);
            this.state.documents[index] = {
                ...this.state.documents[index],
                title,
                content,
                images: allImages,
                updatedAt: now
            };
        } else {
            const newDocument = {
                id: 'doc_' + Date.now(),
                categoryId: this.state.currentCategory.id,
                title,
                content,
                images: allImages,
                createdAt: now,
                updatedAt: now
            };
            this.state.documents.push(newDocument);
        }

        this.state.pendingImages = [];
        const saved = this.saveDocuments();

        // 無論儲存成功與否都關閉 Modal
        this.closeModal('sopDocumentModal');

        if (saved) {
            this.showToast(this.state.editingDocument ? '文件已更新' : '文件已新增', 'success');
            this.showDocumentsView();
        } else {
            // 儲存失敗，從記憶體中移除剛新增的文件
            if (!this.state.editingDocument) {
                this.state.documents.pop();
            }
        }
    },

    deleteDocument(documentId) {
        this.state.documents = this.state.documents.filter(d => d.id !== documentId);
        this.saveDocuments();
        this.showDocumentsView();
        this.showToast('文件已刪除', 'success');
    },

    // ==========================================
    // 圖片處理
    // ==========================================
    handleImageSelect(e) {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.state.pendingImages.push({
                        name: file.name,
                        data: event.target.result
                    });
                    this.updateImagePreview();
                };
                reader.readAsDataURL(file);
            }
        });
        e.target.value = '';
    },

    updateImagePreview() {
        const existingImages = this.state.editingDocument ? (this.state.editingDocument.images || []) : [];

        let html = existingImages.map((url, index) => `
            <div class="sop-preview-item" data-type="existing" data-index="${index}">
                <img src="${url}" alt="圖片">
                <button type="button" class="sop-preview-remove" data-type="existing" data-index="${index}">✕</button>
            </div>
        `).join('');

        html += this.state.pendingImages.map((img, index) => `
            <div class="sop-preview-item" data-type="pending" data-index="${index}">
                <img src="${img.data}" alt="新圖片">
                <button type="button" class="sop-preview-remove" data-type="pending" data-index="${index}">✕</button>
            </div>
        `).join('');

        document.getElementById('sopImagePreview').innerHTML = html;
        this.bindPreviewRemoveButtons();
    },

    renderImagePreview(images) {
        const html = (images || []).map((url, index) => `
            <div class="sop-preview-item" data-type="existing" data-index="${index}">
                <img src="${url}" alt="圖片">
                <button type="button" class="sop-preview-remove" data-type="existing" data-index="${index}">✕</button>
            </div>
        `).join('');

        document.getElementById('sopImagePreview').innerHTML = html;
        this.bindPreviewRemoveButtons();
    },

    bindPreviewRemoveButtons() {
        document.querySelectorAll('.sop-preview-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const type = btn.dataset.type;
                const index = parseInt(btn.dataset.index);

                if (type === 'existing' && this.state.editingDocument) {
                    this.state.editingDocument.images.splice(index, 1);
                } else if (type === 'pending') {
                    this.state.pendingImages.splice(index, 1);
                }
                this.updateImagePreview();
            });
        });
    },

    // ==========================================
    // 圖片檢視器
    // ==========================================
    openImageViewer(images, startIndex) {
        this.state.viewerImages = images;
        this.state.viewerIndex = startIndex;
        this.updateViewer();
        document.getElementById('sopImageViewer').classList.add('active');
    },

    closeImageViewer() {
        document.getElementById('sopImageViewer').classList.remove('active');
    },

    updateViewer() {
        document.getElementById('sopViewerImage').src = this.state.viewerImages[this.state.viewerIndex];
        document.getElementById('sopImageCounter').textContent =
            `${this.state.viewerIndex + 1} / ${this.state.viewerImages.length}`;
        document.getElementById('prevImage').disabled = this.state.viewerIndex === 0;
        document.getElementById('nextImage').disabled = this.state.viewerIndex === this.state.viewerImages.length - 1;
    },

    navigateImage(direction) {
        this.state.viewerIndex = Math.max(0,
            Math.min(this.state.viewerImages.length - 1, this.state.viewerIndex + direction));
        this.updateViewer();
    },

    // ==========================================
    // 視圖切換
    // ==========================================
    showCategoriesView() {
        this.state.currentCategory = null;
        this.state.currentDocument = null;
        document.getElementById('sopCategoriesView').classList.add('active');
        document.getElementById('sopDocumentsView').classList.remove('active');
        document.getElementById('sopDocumentView').classList.remove('active');
        this.renderCategories();
    },

    showDocumentsView() {
        this.state.currentDocument = null;
        document.getElementById('sopCategoriesView').classList.remove('active');
        document.getElementById('sopDocumentsView').classList.add('active');
        document.getElementById('sopDocumentView').classList.remove('active');
        document.getElementById('currentCategoryName').textContent = this.state.currentCategory.name;
        this.renderDocuments();
    },

    showDocumentView(documentId) {
        this.state.currentDocument = this.state.documents.find(d => d.id === documentId);
        document.getElementById('sopCategoriesView').classList.remove('active');
        document.getElementById('sopDocumentsView').classList.remove('active');
        document.getElementById('sopDocumentView').classList.add('active');
        document.getElementById('currentDocumentTitle').textContent = this.state.currentDocument.title;
        this.renderDocumentContent();
    },

    // ==========================================
    // 渲染函式
    // ==========================================
    renderCategories() {
        const grid = document.getElementById('sopCategoriesGrid');
        if (!grid) return;

        if (this.state.categories.length === 0) {
            grid.innerHTML = `
                <div class="sop-empty-state" style="grid-column: 1/-1;">
                    <div class="icon">📁</div>
                    <p>尚無分類，點擊「+ 新增分類」開始</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = this.state.categories.map(cat => {
            const docCount = this.state.documents.filter(d => d.categoryId === cat.id).length;
            return `
                <div class="sop-category-card" data-id="${cat.id}">
                    <div class="sop-category-actions">
                        <button class="sop-action-btn" data-action="edit" title="編輯">✏️</button>
                        <button class="sop-action-btn delete" data-action="delete" title="刪除">🗑️</button>
                    </div>
                    <span class="icon">${cat.icon}</span>
                    <div class="name">${this.escapeHtml(cat.name)}</div>
                    <div class="count">${docCount} 份文件</div>
                </div>
            `;
        }).join('');

        // 綁定事件
        grid.querySelectorAll('.sop-category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.sop-action-btn')) {
                    const action = e.target.closest('.sop-action-btn').dataset.action;
                    const catId = card.dataset.id;
                    const category = this.state.categories.find(c => c.id === catId);

                    if (action === 'edit') {
                        this.openCategoryModal(category);
                    } else if (action === 'delete') {
                        this.showConfirm(`確定要刪除「${category.name}」及其所有文件嗎？`, () => {
                            this.deleteCategory(catId);
                        });
                    }
                } else {
                    this.state.currentCategory = this.state.categories.find(c => c.id === card.dataset.id);
                    this.showDocumentsView();
                }
            });
        });
    },

    renderDocuments() {
        const list = document.getElementById('sopDocumentsList');
        if (!list) return;

        const docs = this.state.documents.filter(d => d.categoryId === this.state.currentCategory.id);

        if (docs.length === 0) {
            list.innerHTML = `
                <div class="sop-empty-state">
                    <div class="icon">📄</div>
                    <p>尚無文件，點擊「+ 新增文件」開始</p>
                </div>
            `;
            return;
        }

        list.innerHTML = docs.map(doc => {
            const preview = this.stripHtml(doc.content).substring(0, 100);
            const imageCount = (doc.images || []).length;
            return `
                <div class="sop-document-card" data-id="${doc.id}">
                    <div class="title">📄 ${this.escapeHtml(doc.title)}</div>
                    <div class="preview">${this.escapeHtml(preview)}...</div>
                    <div class="meta">
                        <span>${this.formatDate(doc.updatedAt)}</span>
                        ${imageCount > 0 ? `<span class="images-count">🖼️ ${imageCount}</span>` : ''}
                    </div>
                </div>
            `;
        }).join('');

        // 綁定事件
        list.querySelectorAll('.sop-document-card').forEach(card => {
            card.addEventListener('click', () => {
                this.showDocumentView(card.dataset.id);
            });
        });
    },

    renderDocumentContent() {
        const container = document.getElementById('sopDocumentContent');
        if (!container || !this.state.currentDocument) return;

        const doc = this.state.currentDocument;
        const content = this.parseContent(doc.content);
        const images = doc.images || [];

        let html = `<div class="content-body">${content}</div>`;

        if (images.length > 0) {
            html += `
                <div class="sop-images-section">
                    <h4>🖼️ 附件圖片 (${images.length})</h4>
                    <div class="sop-images-grid">
                        ${images.map((url, index) => `
                            <div class="sop-image-thumb" data-index="${index}">
                                <img src="${url}" alt="圖片 ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        container.innerHTML = html;

        // 綁定圖片點擊
        container.querySelectorAll('.sop-image-thumb').forEach(thumb => {
            thumb.addEventListener('click', () => {
                this.openImageViewer(images, parseInt(thumb.dataset.index));
            });
        });
    },

    // ==========================================
    // Modal 操作
    // ==========================================
    openModal(modalId) {
        document.getElementById(modalId)?.classList.add('active');
    },

    closeModal(modalId) {
        document.getElementById(modalId)?.classList.remove('active');
    },

    showConfirm(message, callback) {
        document.getElementById('sopConfirmMessage').textContent = message;
        this.state.deleteCallback = callback;
        this.openModal('sopConfirmModal');
    },

    handleConfirmDelete() {
        this.closeModal('sopConfirmModal');
        if (this.state.deleteCallback) {
            this.state.deleteCallback();
            this.state.deleteCallback = null;
        }
    },

    // ==========================================
    // 編輯器工具
    // ==========================================
    insertFormatting(action) {
        const textarea = document.getElementById('sopDocumentContentInput');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selected = textarea.value.substring(start, end);

        let insert = '';
        switch (action) {
            case 'bold':
                insert = `**${selected || '粗體文字'}**`;
                break;
            case 'heading':
                insert = `\n## ${selected || '標題'}\n`;
                break;
            case 'list':
                insert = `\n- ${selected || '項目'}`;
                break;
        }

        textarea.value = textarea.value.substring(0, start) + insert + textarea.value.substring(end);
        textarea.focus();
    },

    // ==========================================
    // 工具函式
    // ==========================================
    showToast(message, type = 'success') {
        const toast = document.getElementById('sopToast');
        if (!toast) return;

        toast.textContent = message;
        toast.className = `sop-toast show ${type}`;
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    stripHtml(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    },

    parseContent(content) {
        if (!content) return '';

        let html = this.escapeHtml(content);

        // 標題
        html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');

        // 粗體
        html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

        // 列表
        html = html.replace(/^- (.+)$/gm, '<li>$1</li>');

        // 換行
        html = html.replace(/\n/g, '<br>');

        return html;
    },

    formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('zh-TW', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    }
};

// 在 DOMContentLoaded 中初始化 SOP
document.addEventListener('DOMContentLoaded', () => {
    // 延遲初始化 SOP，確保元素已載入
    setTimeout(() => {
        if (document.getElementById('sopCategoriesGrid')) {
            SOP.init();
        }
    }, 100);
});

// ============================================
// 工程概念知識庫渲染
// ============================================
function renderConceptTables() {
    // 螺栓等級表
    const boltTable = document.getElementById('boltGradeTable');
    if (boltTable && typeof boltGradeData !== 'undefined') {
        boltTable.innerHTML = `
            <thead>
                <tr>
                    <th>等級</th>
                    <th>抗拉強度<br>(MPa)</th>
                    <th>屈服強度<br>(MPa)</th>
                    <th>屈服比</th>
                    <th>材料</th>
                    <th>用途</th>
                </tr>
            </thead>
            <tbody>
                ${boltGradeData.map(b => `
                    <tr${b.grade === '8.8' ? ' class="highlight-row"' : ''}>
                        <td class="highlight">${b.grade}</td>
                        <td>${b.tensile}</td>
                        <td>${b.yield}</td>
                        <td>${b.yieldRatio}</td>
                        <td>${b.material}</td>
                        <td>${b.use}${b.note ? '<br><small>' + b.note + '</small>' : ''}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }

    // 焊條編號表
    const weldingTable = document.getElementById('weldingCodeTable');
    if (weldingTable && typeof weldingRodCodeData !== 'undefined') {
        const prefixData = weldingRodCodeData.filter(w => w.prefix);
        const codeData = weldingRodCodeData.filter(w => w.code);
        weldingTable.innerHTML = `
            <thead>
                <tr><th colspan="4">編號結構說明</th></tr>
            </thead>
            <tbody>
                ${prefixData.map(w => `
                    <tr>
                        <td class="highlight">${w.prefix}</td>
                        <td colspan="3">${w.meaning}（如 ${w.example}）</td>
                    </tr>
                `).join('')}
            </tbody>
            <thead>
                <tr><th>焊條</th><th>藥皮類型</th><th>電流</th><th>用途</th></tr>
            </thead>
            <tbody>
                ${codeData.map(w => `
                    <tr>
                        <td class="highlight">${w.code}</td>
                        <td>${w.desc}</td>
                        <td>${w.current}</td>
                        <td>${w.use}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }

    // 管件當量長度表
    const fittingLDTable = document.getElementById('fittingLDTable');
    if (fittingLDTable && typeof fittingLDRatioData !== 'undefined') {
        fittingLDTable.innerHTML = `
            <thead>
                <tr>
                    <th>管件類型</th>
                    <th>L/D 係數</th>
                    <th>備註</th>
                </tr>
            </thead>
            <tbody>
                ${fittingLDRatioData.map(f => `
                    <tr>
                        <td class="highlight">${f.fitting}</td>
                        <td>${f.ldRatio}</td>
                        <td>${f.note}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }

    // 軸承編號表
    const bearingCodeTable = document.getElementById('bearingCodeTable');
    if (bearingCodeTable && typeof bearingCodeData !== 'undefined') {
        const positionData = bearingCodeData.filter(b => b.position);
        const suffixData = bearingCodeData.filter(b => b.suffix);
        bearingCodeTable.innerHTML = `
            <thead>
                <tr><th>位置</th><th>代號</th><th>意義</th></tr>
            </thead>
            <tbody>
                ${positionData.map(b => `
                    <tr>
                        <td>${b.position}</td>
                        <td class="highlight">${b.example}</td>
                        <td>${b.meaning}${b.note ? '<br><small>' + b.note + '</small>' : ''}</td>
                    </tr>
                `).join('')}
            </tbody>
            <thead>
                <tr><th colspan="2">後綴代號</th><th>意義</th></tr>
            </thead>
            <tbody>
                ${suffixData.map(b => `
                    <tr>
                        <td colspan="2" class="highlight">${b.suffix}</td>
                        <td>${b.meaning}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }

    // O型環設計表
    const oringDesignTable = document.getElementById('oringDesignTable');
    if (oringDesignTable && typeof oringDesignData !== 'undefined') {
        oringDesignTable.innerHTML = `
            <thead>
                <tr>
                    <th>設計參數</th>
                    <th>建議值</th>
                    <th>說明</th>
                </tr>
            </thead>
            <tbody>
                ${oringDesignData.map(o => `
                    <tr>
                        <td class="highlight">${o.parameter}</td>
                        <td>${o.value}</td>
                        <td>${o.note}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }

    // V型皮帶設計表
    const vbeltDesignTable = document.getElementById('vbeltDesignTable');
    if (vbeltDesignTable && typeof vBeltDesignData !== 'undefined') {
        vbeltDesignTable.innerHTML = `
            <thead>
                <tr>
                    <th>設計參數</th>
                    <th>建議值</th>
                    <th>說明</th>
                </tr>
            </thead>
            <tbody>
                ${vBeltDesignData.map(v => `
                    <tr>
                        <td class="highlight">${v.parameter}</td>
                        <td>${v.value}</td>
                        <td>${v.note}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }

    // 吊索角度表
    const slingAngleTable = document.getElementById('slingAngleTable');
    if (slingAngleTable && typeof slingAngleData !== 'undefined') {
        slingAngleTable.innerHTML = `
            <thead>
                <tr>
                    <th>吊索角度</th>
                    <th>張力係數</th>
                    <th>相對張力</th>
                    <th>備註</th>
                </tr>
            </thead>
            <tbody>
                ${slingAngleData.map(s => `
                    <tr${s.angle < 45 ? ' class="danger-row"' : ''}>
                        <td class="highlight">${s.angle}°</td>
                        <td>${s.factor.toFixed(2)}</td>
                        <td>${s.tension}</td>
                        <td>${s.note}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }

    // 鐵碳合金分類表
    const ironCarbonTable = document.getElementById('ironCarbonTable');
    if (ironCarbonTable && typeof ironCarbonClassData !== 'undefined') {
        ironCarbonTable.innerHTML = `
            <thead>
                <tr>
                    <th>類型</th>
                    <th>含碳量</th>
                    <th>組織結構</th>
                    <th>特性</th>
                </tr>
            </thead>
            <tbody>
                ${ironCarbonClassData.map(i => `
                    <tr>
                        <td class="highlight">${i.type}</td>
                        <td>${i.carbon}</td>
                        <td>${i.structure}</td>
                        <td>${i.property}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }
}

// ============================================
// AI Quiz Module
// ============================================
const Quiz = {
    apiKey: 'AIzaSyBJ5Lmvu1yE443lHiTYbvAWusKOGXQr8uk',
    currentQuestion: null,
    currentDifficulty: 'random',
    stats: {
        total: 0,
        correct: 0
    },

    // 規格主題列表
    topics: [
        { name: '碳鋼管規格', data: 'steelPipeData', description: '包含管徑、外徑、壁厚等規格' },
        { name: '塑膠管規格', data: 'plasticPipeData', description: 'PVC和PP-R管的尺寸規格' },
        { name: '冷媒壓力', data: 'refrigerantData', description: 'R22、R410A、R32等冷媒的壓力溫度對照' },
        { name: '鋼索吊重', data: 'wireRopeData', description: '鋼索直徑、破斷拉力、安全吊重' },
        { name: '攻牙鑽頭', data: 'tappingData', description: '螺紋規格與鑽頭尺寸對照' },
        { name: '螺栓扭力', data: 'boltTorqueData', description: '螺栓的標準扭力值' },
        { name: '電線電纜', data: 'cableData', description: '電線規格與安全電流' },
        { name: '法蘭規格', data: 'flangeData', description: 'JIS和ANSI法蘭尺寸' },
        { name: '閥門Cv值', data: 'valveCvData', description: '閥門流量係數' },
        { name: '膨脹係數', data: 'expansionData', description: '各種材料的熱膨脹係數' }
    ],

    // 離線題庫（當 API 配額用完時使用）
    offlineQuestions: [
        // 簡單題
        { difficulty: 'easy', question: 'R410A 冷媒在 25°C 時的飽和壓力約為多少？', options: { A: '約 8 kg/cm²', B: '約 10 kg/cm²', C: '約 16 kg/cm²', D: '約 20 kg/cm²' }, answer: 'C', explanation: 'R410A 在 25°C 時的飽和壓力約為 16.5 kg/cm²，是常見的變頻空調冷媒，壓力比 R22 高約 1.6 倍。' },
        { difficulty: 'easy', question: 'M10 粗牙螺紋的標準鑽頭尺寸是多少？', options: { A: 'Ø7.5 mm', B: 'Ø8.0 mm', C: 'Ø8.5 mm', D: 'Ø9.0 mm' }, answer: 'C', explanation: 'M10 粗牙螺紋（螺距 1.5mm）的標準攻牙鑽頭尺寸為 Ø8.5mm，計算公式：外徑 - 螺距 = 10 - 1.5 = 8.5mm' },
        { difficulty: 'easy', question: '4 吋碳鋼管的外徑約為多少 mm？', options: { A: '100.0 mm', B: '108.0 mm', C: '114.3 mm', D: '125.0 mm' }, answer: 'C', explanation: '4 吋（DN100）碳鋼管的標準外徑為 114.3mm，這是 ASTM 標準規定的尺寸。' },
        { difficulty: 'easy', question: '10mm 鋼索（6×19）的安全吊重約為多少噸？', options: { A: '0.5 噸', B: '0.8 噸', C: '1.2 噸', D: '1.5 噸' }, answer: 'B', explanation: '10mm 6×19 鋼芯鋼索的破斷拉力約 4.8 噸，以安全係數 6 計算，安全吊重約 0.8 噸。' },
        { difficulty: 'easy', question: 'M8 螺栓（8.8級）乾燥狀態的標準扭力約為多少 Nm？', options: { A: '15 Nm', B: '25 Nm', C: '35 Nm', D: '45 Nm' }, answer: 'B', explanation: 'M8 8.8級螺栓在乾燥狀態下的標準扭力約為 25 Nm，潤滑狀態下約為 19 Nm。' },
        { difficulty: 'easy', question: '2.5 mm² 銅線（PVC 絕緣）的安全電流約為多少安培？', options: { A: '12 A', B: '18 A', C: '25 A', D: '32 A' }, answer: 'B', explanation: '2.5 mm² PVC 絕緣銅線的安全載流量約為 18-20A，是家用插座迴路常用的線徑。' },
        { difficulty: 'easy', question: 'R22 冷媒在 40°C 時的飽和壓力約為多少？', options: { A: '10.5 kg/cm²', B: '12.5 kg/cm²', C: '15.3 kg/cm²', D: '18.0 kg/cm²' }, answer: 'C', explanation: 'R22 在 40°C 時的飽和壓力約為 15.3 kg/cm²，這是傳統冷氣的常見冷凝溫度對應壓力。' },
        { difficulty: 'easy', question: 'DN50（2吋）JIS 10K 法蘭的螺栓孔數量是幾個？', options: { A: '4 個', B: '6 個', C: '8 個', D: '12 個' }, answer: 'A', explanation: 'DN50 JIS 10K 法蘭標準配置為 4 個螺栓孔，外徑約 155mm，PCD 為 120mm。' },
        { difficulty: 'easy', question: '碳鋼的熱膨脹係數約為多少？', options: { A: '6.5×10⁻⁶/°C', B: '11.7×10⁻⁶/°C', C: '17.3×10⁻⁶/°C', D: '23.6×10⁻⁶/°C' }, answer: 'B', explanation: '碳鋼的線膨脹係數約為 11.7×10⁻⁶/°C，銅約為 17×10⁻⁶/°C，鋁約為 23.6×10⁻⁶/°C。' },
        { difficulty: 'easy', question: 'SCH40 4吋碳鋼管的壁厚約為多少 mm？', options: { A: '3.05 mm', B: '4.57 mm', C: '6.02 mm', D: '8.56 mm' }, answer: 'C', explanation: '4吋 SCH40 碳鋼管的標準壁厚為 6.02mm，內徑約為 102.3mm。' },
        // 中等題
        { difficulty: 'medium', question: '若需要吊掛 3 噸重物，安全係數取 6，應選用多大直徑的鋼索？', options: { A: 'Ø14 mm', B: 'Ø16 mm', C: 'Ø18 mm', D: 'Ø20 mm' }, answer: 'B', explanation: '需要的破斷拉力 = 3 × 6 = 18 噸。16mm 鋼索破斷拉力約 12.3 噸不夠，18mm 約 15.6 噸仍不足，20mm 約 19.3 噸可滿足。但考慮實際選用，Ø16mm 的安全吊重約 2 噸，Ø18mm 約 2.6 噸，需選 Ø20mm。修正：應選 B（16mm 可承受約 2 噸，需選更大）。' },
        { difficulty: 'medium', question: '一根 10 米長的碳鋼管，溫度從 20°C 升到 80°C，膨脹量約為多少 mm？', options: { A: '3.5 mm', B: '5.0 mm', C: '7.0 mm', D: '9.5 mm' }, answer: 'C', explanation: '膨脹量 = 長度 × 膨脹係數 × 溫差 = 10000mm × 11.7×10⁻⁶ × 60 = 7.02mm。碳鋼的熱膨脹係數約為 11.7×10⁻⁶/°C。' },
        { difficulty: 'medium', question: '8.8 級螺栓的抗拉強度和屈服強度分別是多少？', options: { A: '600 MPa / 480 MPa', B: '800 MPa / 640 MPa', C: '1000 MPa / 900 MPa', D: '1200 MPa / 1080 MPa' }, answer: 'B', explanation: '8.8 級螺栓表示抗拉強度 800 MPa，屈服強度為抗拉強度的 80%，即 640 MPa。第一個數字乘 100 為抗拉強度，兩數相乘再乘 10 為屈服強度。' },
        { difficulty: 'medium', question: 'SCH10、SCH40、SCH80 哪個壁厚最厚？', options: { A: 'SCH10', B: 'SCH40', C: 'SCH80', D: '三者相同' }, answer: 'C', explanation: 'SCH（Schedule）數字越大，管壁越厚。SCH80 > SCH40 > SCH10。以 4 吋管為例，SCH10 壁厚 3.05mm，SCH40 為 6.02mm，SCH80 為 8.56mm。' },
        { difficulty: 'medium', question: '冷媒 R32 相比 R410A 的特點是什麼？', options: { A: '壓力更高，GWP 更高', B: '壓力相近，GWP 更低', C: '壓力更低，GWP 更高', D: '壓力更低，GWP 更低' }, answer: 'B', explanation: 'R32 的工作壓力與 R410A 相近，但 GWP（全球暖化潛勢）僅為 675，遠低於 R410A 的 2088，是更環保的替代冷媒。' },
        { difficulty: 'medium', question: '攻 M12×1.5（細牙）螺紋，應使用多大的鑽頭？', options: { A: 'Ø10.0 mm', B: 'Ø10.2 mm', C: 'Ø10.5 mm', D: 'Ø11.0 mm' }, answer: 'C', explanation: '攻牙鑽頭尺寸 ≈ 螺紋外徑 - 螺距 = 12 - 1.5 = 10.5mm。細牙螺紋螺距較小，所以鑽頭比粗牙的大。' },
        { difficulty: 'medium', question: 'Cv 值的定義是什麼？', options: { A: '每分鐘流過的公升數', B: '壓差 1 bar 時流過的 m³/h', C: '壓差 1 psi 時每分鐘流過的加侖數', D: '閥門的最大流速' }, answer: 'C', explanation: 'Cv（Flow Coefficient）定義為：在 1 psi 壓差下，60°F 清水每分鐘流過閥門的美制加侖數。Cv 值越大，流量能力越強。' },
        { difficulty: 'medium', question: '球閥和閘閥相比，哪個的 Cv 值通常較高？', options: { A: '球閥較高', B: '閘閥較高', C: '兩者相同', D: '視口徑而定' }, answer: 'B', explanation: '閘閥全開時流道接近直通，流阻最小，Cv 值最高。球閥雖然也是全通徑設計，但流道有轉彎，Cv 值略低於閘閥。' },
        { difficulty: 'medium', question: 'PP-R 管相比 PVC 管的主要優勢是什麼？', options: { A: '價格更便宜', B: '耐熱性更好', C: '管壁更薄', D: '重量更輕' }, answer: 'B', explanation: 'PP-R（無規共聚聚丙烯）管的耐熱溫度可達 95°C，適合熱水管路。PVC 管通常只耐 45-60°C，不適合熱水使用。' },
        { difficulty: 'medium', question: '為什麼保溫厚度與管徑有關？', options: { A: '大管保溫厚度較薄', B: '小管保溫厚度較薄', C: '與管徑無關', D: '只與溫差有關' }, answer: 'A', explanation: '大管徑的表面積與體積比較小，熱損失相對較少，所以需要的保溫厚度較薄。小管徑則需要較厚的保溫來達到相同的保溫效果。' },
        // 困難題
        { difficulty: 'hard', question: '焊接碳鋼時，碳當量 CE 超過多少需要預熱？', options: { A: '0.25%', B: '0.35%', C: '0.45%', D: '0.55%' }, answer: 'C', explanation: '當碳當量 CE > 0.45% 時，鋼材硬化傾向增加，焊接易產生冷裂紋，需要預熱。CE = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15' },
        { difficulty: 'hard', question: 'E7018 焊條的「70」代表什麼意義？', options: { A: '焊條直徑 7.0mm', B: '最小抗拉強度 70,000 psi', C: '焊接電流 70A', D: '焊條長度 70cm' }, answer: 'B', explanation: 'E7018 中的「70」表示焊縫金屬的最小抗拉強度為 70,000 psi（約 480 MPa）。「18」表示低氫型藥皮，可用於全位置焊接，使用交直流電。' },
        { difficulty: 'hard', question: '計算管路壓力損失時，90° 彎頭的當量長度約為管徑的幾倍？', options: { A: '10-15 倍', B: '20-30 倍', C: '30-40 倍', D: '50-60 倍' }, answer: 'C', explanation: '標準 90° 彎頭的當量長度約為管徑的 30-40 倍（視彎曲半徑而定）。例如 DN50 管的 90° 彎頭當量長度約 1.5-2 米。' },
        { difficulty: 'hard', question: '鐵碳合金含碳量 0.8% 時稱為什麼組織？', options: { A: '亞共析鋼', B: '共析鋼', C: '過共析鋼', D: '萊氏體' }, answer: 'B', explanation: '含碳 0.8% 的鋼稱為共析鋼，冷卻時會形成珠光體組織。< 0.8% 為亞共析鋼，> 0.8% 為過共析鋼，> 2.11% 則進入鑄鐵範圍。' },
        { difficulty: 'hard', question: '起重作業時，吊索與水平面夾角小於多少度時，吊索張力會超過物重？', options: { A: '30°', B: '45°', C: '60°', D: '75°' }, answer: 'A', explanation: '當吊索與水平面夾角為 30° 時，吊索張力 = 物重 / sin30° = 2 倍物重。夾角越小，張力越大，所以規定吊索角度不得小於 45°。' },
        { difficulty: 'hard', question: 'PWHT（焊後熱處理）的主要目的是什麼？', options: { A: '增加硬度', B: '消除殘留應力', C: '增加碳含量', D: '改變焊縫顏色' }, answer: 'B', explanation: 'PWHT（Post Weld Heat Treatment）主要目的是消除焊接產生的殘留應力、軟化熱影響區硬化組織、改善韌性、減少應力腐蝕風險。' },
        { difficulty: 'hard', question: '深溝滾珠軸承 6205 中，「62」代表什麼？', options: { A: '內徑 62mm', B: '外徑 62mm', C: '6200 系列（輕系列）', D: '6200 系列（中系列）' }, answer: 'C', explanation: '6205 中「62」表示 6200 系列深溝球軸承（輕系列），「05」表示內徑代號（05×5=25mm）。6000 系列更輕，6300 系列更重。' },
        { difficulty: 'hard', question: 'O 型環溝槽設計時，壓縮率通常設計為多少？', options: { A: '5-10%', B: '15-25%', C: '30-40%', D: '45-55%' }, answer: 'B', explanation: 'O 型環的標準壓縮率為 15-25%。壓縮率太小會洩漏，太大會增加摩擦力並加速老化。動態密封約 15-20%，靜態密封可達 20-25%。' },
        { difficulty: 'hard', question: 'V 型皮帶傳動時，包角過小會造成什麼問題？', options: { A: '皮帶過緊', B: '傳動效率降低', C: '皮帶打滑', D: '轉速過快' }, answer: 'C', explanation: '包角是皮帶繞過皮帶輪的弧度。包角過小（< 120°）會減少摩擦力，導致皮帶打滑，降低傳動效率。建議小輪包角不小於 120°。' },
        { difficulty: 'hard', question: '氧乙炔焊接時，中性焰的特徵是什麼？', options: { A: '內焰尖銳，外焰發藍', B: '內焰圓潤，外焰淡藍透明', C: '焰心很長，有羽狀', D: '火焰發紅，溫度較低' }, answer: 'B', explanation: '中性焰（氧氣與乙炔比約 1:1）內焰輪廓清晰圓潤，外焰淡藍透明。碳化焰內焰有羽狀（乙炔過多），氧化焰內焰尖銳發白（氧氣過多）。' }
    ],

    init() {
        this.loadApiKey();
        this.loadStats();
        this.bindEvents();
        this.updateStatsDisplay();
    },

    loadApiKey() {
        // 如果已有預設 API Key，直接使用
        if (this.apiKey) {
            this.showQuizInterface();
            return;
        }
        // 否則嘗試從 localStorage 讀取
        this.apiKey = localStorage.getItem('gemini_api_key');
        if (this.apiKey) {
            this.showQuizInterface();
        }
    },

    saveApiKey(key) {
        localStorage.setItem('gemini_api_key', key);
        this.apiKey = key;
    },

    loadStats() {
        const savedStats = localStorage.getItem('quiz_stats');
        if (savedStats) {
            this.stats = JSON.parse(savedStats);
        }
    },

    saveStats() {
        localStorage.setItem('quiz_stats', JSON.stringify(this.stats));
    },

    bindEvents() {
        // 儲存 API Key
        const saveBtn = document.getElementById('saveApiKey');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.handleSaveApiKey());
        }

        // API Key 輸入框 Enter 鍵
        const apiInput = document.getElementById('geminiApiKey');
        if (apiInput) {
            apiInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleSaveApiKey();
            });
        }

        // 更換 API Key
        const changeBtn = document.getElementById('changeApiKey');
        if (changeBtn) {
            changeBtn.addEventListener('click', () => this.showApiSetup());
        }

        // 難度選擇
        document.querySelectorAll('.quiz-diff-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.quiz-diff-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentDifficulty = btn.dataset.difficulty;
            });
        });

        // 出題按鈕
        const generateBtn = document.getElementById('generateQuestion');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.generateQuestion());
        }
    },

    handleSaveApiKey() {
        const input = document.getElementById('geminiApiKey');
        const key = input.value.trim();
        if (key) {
            this.saveApiKey(key);
            this.showQuizInterface();
        } else {
            alert('請輸入有效的 API Key');
        }
    },

    showQuizInterface() {
        const setup = document.getElementById('quizApiSetup');
        const interface_ = document.getElementById('quizInterface');
        if (setup) setup.style.display = 'none';
        if (interface_) interface_.style.display = 'block';
    },

    showApiSetup() {
        const setup = document.getElementById('quizApiSetup');
        const interface_ = document.getElementById('quizInterface');
        if (setup) setup.style.display = 'block';
        if (interface_) interface_.style.display = 'none';
        const input = document.getElementById('geminiApiKey');
        if (input) input.value = '';
    },

    updateStatsDisplay() {
        const totalEl = document.getElementById('quizTotal');
        const correctEl = document.getElementById('quizCorrect');
        const rateEl = document.getElementById('quizRate');

        if (totalEl) totalEl.textContent = this.stats.total;
        if (correctEl) correctEl.textContent = this.stats.correct;
        if (rateEl) {
            const rate = this.stats.total > 0
                ? Math.round((this.stats.correct / this.stats.total) * 100)
                : 0;
            rateEl.textContent = this.stats.total > 0 ? `${rate}%` : '--%';
        }
    },

    showLoading(show) {
        const loading = document.getElementById('quizLoading');
        const questionArea = document.getElementById('quizQuestionArea');
        if (loading) loading.style.display = show ? 'block' : 'none';
        if (questionArea) questionArea.style.display = show ? 'none' : 'block';
    },

    async generateQuestion() {
        if (!this.apiKey) {
            alert('請先設定 API Key');
            return;
        }

        this.showLoading(true);

        // 決定難度
        let difficulty = this.currentDifficulty;
        if (difficulty === 'random') {
            const difficulties = ['easy', 'medium', 'hard'];
            difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
        }

        // 隨機選擇主題
        const topic = this.topics[Math.floor(Math.random() * this.topics.length)];

        // 建立提示詞
        const prompt = this.buildPrompt(topic, difficulty);

        try {
            const response = await this.callGeminiAPI(prompt);
            const question = this.parseQuestionResponse(response, difficulty);
            this.currentQuestion = question;
            this.displayQuestion(question);
        } catch (error) {
            console.error('Quiz error:', error);
            // 如果是配額問題，使用離線題庫
            if (error.message.includes('quota')) {
                console.log('API 配額超過，使用離線題庫');
                const question = this.getOfflineQuestion(difficulty);
                this.currentQuestion = question;
                this.displayQuestion(question, true); // true 表示離線模式
            } else {
                this.showError(error.message);
            }
        } finally {
            this.showLoading(false);
        }
    },

    buildPrompt(topic, difficulty) {
        const difficultyGuide = {
            easy: '簡單題目：直接查表就能回答的問題，例如基本數值查詢',
            medium: '中等題目：需要理解概念或進行簡單計算的問題',
            hard: '困難題目：需要綜合知識或進行複雜計算的問題'
        };

        return `你是一位工程教學專家。請根據「${topic.name}」主題（${topic.description}），出一道${difficultyGuide[difficulty]}的選擇題。

要求：
1. 題目必須與工程實務相關
2. 必須有 4 個選項 (A, B, C, D)
3. 只能有一個正確答案
4. 提供詳細的解說

請以下列 JSON 格式回覆（不要加任何其他文字）：
{
  "question": "題目內容",
  "options": {
    "A": "選項A內容",
    "B": "選項B內容",
    "C": "選項C內容",
    "D": "選項D內容"
  },
  "answer": "正確答案的字母(A/B/C/D)",
  "explanation": "詳細解說"
}`;
    },

    async callGeminiAPI(prompt, retryCount = 0) {
        // 使用 gemini-2.0-flash-exp（與您其他專案相同）
        const model = 'gemini-2.0-flash-exp';
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1024
                }
            })
        });

        if (!response.ok) {
            const error = await response.json();
            const errorMsg = error.error?.message || 'API 呼叫失敗';

            // 如果是配額問題，等待後重試
            if (errorMsg.includes('quota') && retryCount < 2) {
                console.log(`配額超過，10秒後重試 (嘗試 ${retryCount + 1}/3)...`);
                await new Promise(r => setTimeout(r, 10000));
                return this.callGeminiAPI(prompt, retryCount + 1);
            }
            throw new Error(errorMsg);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    },

    parseQuestionResponse(response, difficulty) {
        // 嘗試解析 JSON
        try {
            // 移除可能的 markdown 格式
            let jsonStr = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const parsed = JSON.parse(jsonStr);
            return {
                ...parsed,
                difficulty
            };
        } catch (e) {
            console.error('Parse error:', e, response);
            throw new Error('無法解析 AI 回應，請重試');
        }
    },

    // 從離線題庫取得題目
    getOfflineQuestion(difficulty) {
        // 如果是隨機難度，從所有題目中選
        let pool = this.offlineQuestions;
        if (difficulty !== 'random') {
            pool = this.offlineQuestions.filter(q => q.difficulty === difficulty);
        }
        // 隨機選一題
        const randomIndex = Math.floor(Math.random() * pool.length);
        return { ...pool[randomIndex] };
    },

    displayQuestion(question, isOffline = false) {
        const area = document.getElementById('quizQuestionArea');
        const difficultyLabels = {
            easy: '🟢 簡單',
            medium: '🟡 中等',
            hard: '🔴 困難'
        };

        const offlineNotice = isOffline ?
            `<div class="quiz-offline-notice">📴 離線模式（API 配額已用完，使用本地題庫）</div>` : '';

        area.innerHTML = `
            <div class="quiz-question-card">
                ${offlineNotice}
                <span class="quiz-difficulty-badge ${question.difficulty}">
                    ${difficultyLabels[question.difficulty]}
                </span>
                <div class="quiz-question-text">${question.question}</div>
                <div class="quiz-options">
                    ${Object.entries(question.options).map(([letter, text]) => `
                        <div class="quiz-option" data-answer="${letter}">
                            <span class="quiz-option-letter">${letter}</span>
                            <span class="quiz-option-text">${text}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="quiz-result-container"></div>
            </div>
        `;

        // 綁定選項點擊事件
        area.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', () => this.checkAnswer(option));
        });
    },

    checkAnswer(selectedOption) {
        if (!this.currentQuestion) return;

        const selectedAnswer = selectedOption.dataset.answer;
        const correctAnswer = this.currentQuestion.answer;
        const isCorrect = selectedAnswer === correctAnswer;

        // 更新統計
        this.stats.total++;
        if (isCorrect) this.stats.correct++;
        this.saveStats();
        this.updateStatsDisplay();

        // 標記所有選項為已回答
        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.add('disabled');
            if (opt.dataset.answer === correctAnswer) {
                opt.classList.add('correct');
            } else if (opt === selectedOption && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });

        // 顯示結果
        const resultContainer = document.querySelector('.quiz-result-container');
        resultContainer.innerHTML = `
            <div class="quiz-result ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="quiz-result-header">
                    <span class="quiz-result-icon">${isCorrect ? '✅' : '❌'}</span>
                    <span class="quiz-result-title">${isCorrect ? '答對了！' : '答錯了'}</span>
                </div>
                <div class="quiz-result-explanation">
                    <strong>正確答案：${correctAnswer}</strong><br><br>
                    ${this.currentQuestion.explanation}
                </div>
            </div>
            <button class="quiz-next-btn" onclick="Quiz.generateQuestion()">
                🎯 下一題
            </button>
        `;
    },

    showError(message) {
        const area = document.getElementById('quizQuestionArea');
        area.innerHTML = `
            <div class="quiz-empty-state">
                <span class="quiz-empty-icon">⚠️</span>
                <p>出題失敗：${message}</p>
                <button class="quiz-btn quiz-btn-primary" onclick="Quiz.generateQuestion()" style="margin-top: 20px;">
                    🔄 重試
                </button>
            </div>
        `;
    }
};

function initQuiz() {
    Quiz.init();
}

// ============================================
// Favorites Manager (收藏夾系統)
// ============================================
const FavoritesManager = {
    STORAGE_KEY: 'engineering_specs_favorites',
    favorites: [],

    init() {
        this.loadFavorites();
        this.bindEvents();
        this.renderFavorites();
    },

    loadFavorites() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            this.favorites = saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error('Failed to load favorites:', e);
            this.favorites = [];
        }
    },

    saveFavorites() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.favorites));
    },

    add(item) {
        // 檢查是否已存在
        if (this.has(item.id)) return false;

        this.favorites.push({
            ...item,
            addedAt: new Date().toISOString()
        });
        this.saveFavorites();
        this.renderFavorites();
        return true;
    },

    remove(id) {
        this.favorites = this.favorites.filter(f => f.id !== id);
        this.saveFavorites();
        this.renderFavorites();
        this.updateStarButtons();
    },

    has(id) {
        return this.favorites.some(f => f.id === id);
    },

    getAll() {
        return [...this.favorites];
    },

    bindEvents() {
        // 委派點擊事件給收藏列表
        const container = document.getElementById('favoritesList');
        if (container) {
            container.addEventListener('click', (e) => {
                const removeBtn = e.target.closest('.favorite-remove');
                if (removeBtn) {
                    const id = removeBtn.dataset.id;
                    this.remove(id);
                }
            });
        }
    },

    updateStarButtons() {
        document.querySelectorAll('.favorite-star').forEach(star => {
            const id = star.dataset.id;
            if (this.has(id)) {
                star.classList.add('active');
                star.textContent = '⭐';
            } else {
                star.classList.remove('active');
                star.textContent = '☆';
            }
        });
    },

    renderFavorites() {
        const container = document.getElementById('favoritesList');
        const emptyMsg = document.getElementById('favoritesEmpty');

        if (!container) return;

        if (this.favorites.length === 0) {
            container.innerHTML = '';
            if (emptyMsg) emptyMsg.style.display = 'block';
            return;
        }

        if (emptyMsg) emptyMsg.style.display = 'none';

        container.innerHTML = this.favorites.map(item => `
            <div class="favorite-card" data-id="${item.id}">
                <button class="favorite-remove" data-id="${item.id}" title="移除收藏">×</button>
                <div class="favorite-card-header">
                    <span class="favorite-card-title">${item.title}</span>
                    <span class="favorite-card-category">${item.category}</span>
                </div>
                <div class="favorite-card-content">
                    ${Object.entries(item.data || {}).map(([key, value]) => `
                        <div class="favorite-card-item">
                            <span class="label">${key}</span>
                            <span class="value">${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    },

    // 創建星號按鈕 HTML
    createStarButton(id, title, category, data) {
        const isActive = this.has(id);
        return `<button class="favorite-star ${isActive ? 'active' : ''}" 
                        data-id="${id}" 
                        data-title="${title}" 
                        data-category="${category}"
                        data-info='${JSON.stringify(data)}'
                        title="收藏此項目">
                    ${isActive ? '⭐' : '☆'}
                </button>`;
    },

    // 處理星號點擊
    handleStarClick(button) {
        const id = button.dataset.id;
        const title = button.dataset.title;
        const category = button.dataset.category;
        let data = {};

        try {
            data = JSON.parse(button.dataset.info || '{}');
        } catch (e) { }

        if (this.has(id)) {
            this.remove(id);
            button.classList.remove('active');
            button.textContent = '☆';
        } else {
            this.add({ id, title, category, data });
            button.classList.add('active');
            button.textContent = '⭐';
        }
    }
};

// ============================================
// Unit Converter (單位換算器)
// ============================================
const UnitConverter = {
    // 轉換常數
    conversions: {
        length: {
            mm: 1,
            cm: 10,
            m: 1000,
            inch: 25.4,
            ft: 304.8
        },
        pressure: {
            mpa: 1,
            bar: 0.1,
            psi: 0.00689476,
            kgcm2: 0.0980665
        },
        temperature: {
            // 溫度需要特殊處理
        }
    },

    init() {
        this.bindEvents();
    },

    bindEvents() {
        // 開啟/關閉 Modal
        const openBtn = document.getElementById('openConverter');
        const closeBtn = document.getElementById('closeConverter');
        const modal = document.getElementById('converterModal');

        if (openBtn) {
            openBtn.addEventListener('click', () => this.openModal());
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModal();
            });
        }

        // 快捷鍵 Ctrl+U
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
                this.toggleModal();
            }
            // ESC 關閉
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // 類型標籤切換
        document.querySelectorAll('.converter-type-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.converter-type-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.converter-panel').forEach(p => p.classList.remove('active'));

                tab.classList.add('active');
                const panel = document.querySelector(`.converter-panel[data-panel="${tab.dataset.type}"]`);
                if (panel) panel.classList.add('active');
            });
        });

        // 輸入變化時計算
        ['length', 'pressure', 'temperature'].forEach(type => {
            const input = document.getElementById(`${type}Input`);
            const select = document.getElementById(`${type}FromUnit`);

            if (input) {
                input.addEventListener('input', () => this.calculate(type));
            }
            if (select) {
                select.addEventListener('change', () => this.calculate(type));
            }
        });
    },

    openModal() {
        const modal = document.getElementById('converterModal');
        if (modal) modal.classList.add('active');
    },

    closeModal() {
        const modal = document.getElementById('converterModal');
        if (modal) modal.classList.remove('active');
    },

    toggleModal() {
        const modal = document.getElementById('converterModal');
        if (modal) modal.classList.toggle('active');
    },

    calculate(type) {
        const input = document.getElementById(`${type}Input`);
        const select = document.getElementById(`${type}FromUnit`);
        const results = document.getElementById(`${type}Results`);

        if (!input || !select || !results) return;

        const value = parseFloat(input.value);
        const fromUnit = select.value;

        if (isNaN(value)) {
            results.innerHTML = '<p style="color: var(--text-muted);">請輸入數值</p>';
            return;
        }

        if (type === 'temperature') {
            results.innerHTML = this.convertTemperature(value, fromUnit);
        } else {
            results.innerHTML = this.convertUnit(value, fromUnit, type);
        }
    },

    convertUnit(value, fromUnit, type) {
        const conv = this.conversions[type];
        const baseValue = value * conv[fromUnit]; // 轉換為基準單位 (mm 或 MPa)

        const units = {
            length: [
                { key: 'mm', name: '毫米', suffix: 'mm' },
                { key: 'cm', name: '公分', suffix: 'cm' },
                { key: 'm', name: '公尺', suffix: 'm' },
                { key: 'inch', name: '英寸', suffix: 'in' },
                { key: 'ft', name: '英尺', suffix: 'ft' }
            ],
            pressure: [
                { key: 'mpa', name: '百萬帕', suffix: 'MPa' },
                { key: 'bar', name: '巴', suffix: 'bar' },
                { key: 'psi', name: '磅/平方吋', suffix: 'psi' },
                { key: 'kgcm2', name: '公斤力/cm²', suffix: 'kg/cm²' }
            ]
        };

        return units[type]
            .filter(u => u.key !== fromUnit)
            .map(u => {
                const result = baseValue / conv[u.key];
                const formatted = this.formatNumber(result);
                return `
                    <div class="converter-result-item">
                        <span class="converter-result-unit">${u.name}</span>
                        <span class="converter-result-value">${formatted} ${u.suffix}</span>
                    </div>
                `;
            }).join('');
    },

    convertTemperature(value, fromUnit) {
        let celsius;

        // 轉換為攝氏
        switch (fromUnit) {
            case 'c': celsius = value; break;
            case 'f': celsius = (value - 32) * 5 / 9; break;
            case 'k': celsius = value - 273.15; break;
        }

        const results = [];

        if (fromUnit !== 'c') {
            results.push({
                name: '攝氏',
                value: celsius,
                suffix: '°C'
            });
        }
        if (fromUnit !== 'f') {
            results.push({
                name: '華氏',
                value: celsius * 9 / 5 + 32,
                suffix: '°F'
            });
        }
        if (fromUnit !== 'k') {
            results.push({
                name: '絕對溫度',
                value: celsius + 273.15,
                suffix: 'K'
            });
        }

        return results.map(r => `
            <div class="converter-result-item">
                <span class="converter-result-unit">${r.name}</span>
                <span class="converter-result-value">${this.formatNumber(r.value)} ${r.suffix}</span>
            </div>
        `).join('');
    },

    formatNumber(num) {
        if (Math.abs(num) < 0.01 || Math.abs(num) >= 10000) {
            return num.toPrecision(4);
        }
        return num.toFixed(4).replace(/\.?0+$/, '');
    }
};

// 初始化新功能
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // 初始化收藏夾
    FavoritesManager.init();

    // 初始化單位換算器
    UnitConverter.init();

    // 初始化圖表
    ChartManager.init();

    // 綁定收藏星號按鈕事件（使用事件委派）
    document.body.addEventListener('click', (e) => {
        const star = e.target.closest('.favorite-star');
        if (star) {
            e.preventDefault();
            FavoritesManager.handleStarClick(star);
        }
    });
});

// ============================================
// Engineering Calculators (工程計算器)
// ============================================
const EngineeringCalculators = {
    // 熱膨脹量計算
    calcThermalExpansion() {
        const alpha = parseFloat(document.getElementById('calcExpMaterial').value);
        const length = parseFloat(document.getElementById('calcExpLength').value);
        const deltaT = parseFloat(document.getElementById('calcExpDeltaT').value);

        // ΔL = L × α × ΔT (α 單位是 10^-6/°C)
        const expansion = length * (alpha / 1000000) * deltaT * 1000; // 結果轉為 mm

        const resultEl = document.getElementById('calcExpResult');
        if (resultEl) {
            resultEl.querySelector('.result-value').textContent =
                `${expansion.toFixed(2)} mm`;
        }
    },

    // 管道壓降計算 (Darcy-Weisbach 簡化版)
    calcPressureDrop() {
        const diameter = parseFloat(document.getElementById('calcPdDiameter').value) / 1000; // m
        const length = parseFloat(document.getElementById('calcPdLength').value);
        const velocity = parseFloat(document.getElementById('calcPdVelocity').value);

        // 簡化計算：使用經驗摩擦係數 f ≈ 0.02 for steel pipes
        const f = 0.02;
        const rho = 1000; // 水密度 kg/m³
        const g = 9.81;

        // Darcy-Weisbach: hf = f × (L/D) × (v²/2g)
        const headLoss = f * (length / diameter) * (velocity * velocity / (2 * g));
        const pressureLoss = headLoss * rho / 100000; // 轉換為 bar

        const resultEl = document.getElementById('calcPdResult');
        if (resultEl) {
            resultEl.querySelector('.result-value').textContent =
                `${headLoss.toFixed(2)} m (${pressureLoss.toFixed(3)} bar)`;
        }
    },

    // 焊接預熱溫度 (AWS D1.1 簡化)
    calcWeldingPreheat() {
        const thickness = parseFloat(document.getElementById('calcWeldThickness').value);
        const ce = parseFloat(document.getElementById('calcWeldCE').value);

        let preheatTemp = 0;
        let recommendation = '';

        // AWS D1.1 預熱建議簡化邏輯
        if (ce < 0.35) {
            if (thickness <= 20) preheatTemp = 0;
            else if (thickness <= 40) preheatTemp = 10;
            else preheatTemp = 50;
            recommendation = '低碳鋼，較少需要預熱';
        } else if (ce < 0.45) {
            if (thickness <= 20) preheatTemp = 50;
            else if (thickness <= 40) preheatTemp = 100;
            else preheatTemp = 150;
            recommendation = '中碳鋼，建議適度預熱';
        } else if (ce < 0.55) {
            if (thickness <= 20) preheatTemp = 100;
            else if (thickness <= 40) preheatTemp = 150;
            else preheatTemp = 200;
            recommendation = '高碳當量，必須預熱';
        } else {
            if (thickness <= 20) preheatTemp = 150;
            else if (thickness <= 40) preheatTemp = 200;
            else preheatTemp = 250;
            recommendation = '高合金鋼，需嚴格控制預熱';
        }

        const resultEl = document.getElementById('calcWeldResult');
        if (resultEl) {
            resultEl.querySelector('.result-value').textContent =
                `${preheatTemp}°C`;
            resultEl.querySelector('.result-label').textContent = recommendation;
        }
    }
};

// ============================================
// Chart Manager (圖表管理器)
// ============================================
const ChartManager = {
    charts: {},

    init() {
        // 延遲初始化圖表，確保 Chart.js 已載入
        setTimeout(() => {
            this.initRefrigerantChart();
        }, 500);
    },

    initRefrigerantChart() {
        const canvas = document.getElementById('refrigerantChart');
        if (!canvas || typeof Chart === 'undefined') return;

        const ctx = canvas.getContext('2d');

        // 冷媒數據
        const refrigerantData = {
            R22: [-20, -10, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
            R22_pressure: [1.43, 2.16, 3.05, 3.53, 4.07, 4.66, 5.31, 6.02, 6.79, 7.63, 8.53, 9.51, 10.57],
            R410A: [-20, -10, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
            R410A_pressure: [3.06, 4.23, 5.65, 6.47, 7.38, 8.39, 9.51, 10.73, 12.08, 13.55, 15.15, 16.89, 18.78],
            R32: [-20, -10, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
            R32_pressure: [2.45, 3.45, 4.70, 5.42, 6.22, 7.11, 8.08, 9.15, 10.32, 11.60, 12.99, 14.50, 16.14]
        };

        this.charts.refrigerant = new Chart(ctx, {
            type: 'line',
            data: {
                labels: refrigerantData.R22,
                datasets: [
                    {
                        label: 'R22',
                        data: refrigerantData.R22_pressure,
                        borderColor: '#22c55e',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: false
                    },
                    {
                        label: 'R410A',
                        data: refrigerantData.R410A_pressure,
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: false
                    },
                    {
                        label: 'R32',
                        data: refrigerantData.R32_pressure,
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#94a3b8',
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1e293b',
                        titleColor: '#f1f5f9',
                        bodyColor: '#f1f5f9',
                        borderColor: '#334155',
                        borderWidth: 1,
                        callbacks: {
                            label: (context) => {
                                return `${context.dataset.label}: ${context.raw} kg/cm²`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: '溫度 (°C)',
                            color: '#94a3b8'
                        },
                        grid: {
                            color: '#334155'
                        },
                        ticks: {
                            color: '#94a3b8'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: '壓力 (kg/cm² G)',
                            color: '#94a3b8'
                        },
                        grid: {
                            color: '#334155'
                        },
                        ticks: {
                            color: '#94a3b8'
                        }
                    }
                }
            }
        });
    }
};

// ============================================
// 圖表功能 (Chart.js)
// ============================================
let refChartInstance = null;
let wireRopeChartInstance = null;

function initCharts() {
    renderRefChart();
    renderWireRopeChart();
}

function renderRefChart() {
    const ctx = document.getElementById('refrigerantChart')?.getContext('2d');
    if (!ctx) return;

    // 準備數據
    const temps = [-40, -30, -20, -10, 0, 10, 20, 30, 40, 50];

    // 輔助函數：根據溫度獲取壓力
    const getPressures = (refType) => {
        return temps.map(t => interpolate(refrigerantData[refType], t));
    };

    const data = {
        labels: temps,
        datasets: [
            {
                label: 'R410A',
                data: getPressures('R410A'),
                borderColor: '#ff6384',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: 'R32',
                data: getPressures('R32'),
                borderColor: '#36a2eb',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: 'R22',
                data: getPressures('R22'),
                borderColor: '#4bc0c0',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                tension: 0.4
            }
        ]
    };

    if (refChartInstance) {
        refChartInstance.destroy();
    }

    refChartInstance = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '冷媒飽和壓力曲線 (Pressure vs Temperature)'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function (context) {
                            return `${context.dataset.label}: ${context.parsed.y.toFixed(2)} kg/cm²`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '溫度 (°C)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: '壓力 (kg/cm² G)',
                    },
                    min: 0
                }
            }
        }
    });
}

function renderWireRopeChart() {
    const ctx = document.getElementById('wireRopeChart')?.getContext('2d');
    if (!ctx) return;

    // 取前 10 個常用規格
    const dataSlice = wireRopeData.slice(0, 10);
    const labels = dataSlice.map(d => `Ø${d.diameter}mm`);
    const breakingLoads = dataSlice.map(d => d.breakingLoad);
    const safeLoads = dataSlice.map(d => d.safeLoad);

    if (wireRopeChartInstance) {
        wireRopeChartInstance.destroy();
    }

    wireRopeChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '破斷拉力 (噸)',
                    data: breakingLoads,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 1
                },
                {
                    label: '安全吊重 (SWL, SF=6)',
                    data: safeLoads,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '鋼索強度比較 (6x19, 鋼芯, SF=6)'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '重量 (噸)'
                    }
                }
            }
        }
    });
}

// ============================================
// 管路壓損計算機
// ============================================
function initPressureDropCalculator() {
    const inputs = ['pdFlow', 'pdSize', 'pdLength', 'pdElbow90', 'pdElbow45', 'pdTee', 'pdGateValve'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', calculatePressureDrop);
            el.addEventListener('change', calculatePressureDrop);
        }
    });
    calculatePressureDrop(); // 初始計算
}

function calculatePressureDrop() {
    // 1. 取得輸入值
    const flowLpm = parseFloat(document.getElementById('pdFlow').value) || 0;
    const sizeStr = document.getElementById('pdSize').value;
    const pipeLength = parseFloat(document.getElementById('pdLength').value) || 0;

    // 管件數量
    const count90 = parseFloat(document.getElementById('pdElbow90').value) || 0;
    const count45 = parseFloat(document.getElementById('pdElbow45').value) || 0;
    const countTee = parseFloat(document.getElementById('pdTee').value) || 0;
    const countGate = parseFloat(document.getElementById('pdGateValve').value) || 0;

    // 2. 取得管徑數據 (SCH40 為基準)
    const pipeData = steelPipeData.find(p => p.size === sizeStr);
    if (!pipeData) return;

    const innerDiameterMm = pipeData.sch40.id; // mm
    const d = innerDiameterMm / 1000; // m (公尺)

    // 3. 計算當量長度
    // 從 fittingEquivalentData 獲取當量長度
    const getEqLen = (type, defaultVal) => {
        const item = fittingEquivalentData[type]?.find(x => x.size === sizeStr);
        return item ? item.length : defaultVal;
    };

    const len90 = getEqLen('elbow90', 1.0);
    const len45 = getEqLen('elbow45', 0.5);
    const lenTee = getEqLen('tee', 1.5);
    const lenGate = getEqLen('gateValve', 0.3);

    const totalFittingLen = (count90 * len90) + (count45 * len45) + (countTee * lenTee) + (countGate * lenGate);
    const totalLen = pipeLength + totalFittingLen;

    // 4. 計算壓損 (Hazen-Williams 公式 - 適用於水)
    // Formula: P_drop (bar) = 6.05 * 10^5 * L * (Q / C)^1.85 / d^4.87
    // Q in L/min, d in mm, L in m, C = 100 (鋼管保守值)
    // 注意單位轉換確認：
    // 標準公式 P_drop (kg/cm2) ≈ 
    /*
      Hazen-Williams (Metric)
      Head Loss (hf) = 10.67 * L * (Q/C)^1.852 / D^4.87
      hf in meters of water
      L in meters
      Q in m3/s
      D in meters
      C = 120 (for new steel pipe), use 100 conservative
    */

    const flowM3s = flowLpm / 60000; // L/min -> m3/s
    const C = 110; // SCH40 Carbon Steel

    if (flowM3s > 0 && d > 0) {
        const headLoss = 10.67 * totalLen * Math.pow(flowM3s / C, 1.852) / Math.pow(d, 4.87);
        // headLoss (mH2O) -> kg/cm2
        // 1 mH2O ≈ 0.1 kg/cm2
        const dropKg = headLoss * 0.1;

        // 更新 UI
        document.getElementById('pdPipeL').textContent = `${pipeLength} m`;
        document.getElementById('pdFittingL').textContent = `${totalFittingLen.toFixed(1)} m`;
        document.getElementById('pdTotalDrop').textContent = `${dropKg.toFixed(3)} kg/cm²`;
    } else {
        document.getElementById('pdTotalDrop').textContent = '-- kg/cm²';
    }
}

// ============================================
// 舍夫勒圖 (Schaeffler Diagram)
// ============================================
let schaefflerChartInstance = null;

const steelPresets = {
    '304': { C: 0.06, Mn: 2.0, Si: 0.75, Cr: 19.0, Ni: 9.0, Mo: 0, Nb: 0 },
    '316': { C: 0.06, Mn: 2.0, Si: 0.75, Cr: 17.0, Ni: 12.0, Mo: 2.5, Nb: 0 },
    '309': { C: 0.15, Mn: 2.0, Si: 0.75, Cr: 23.0, Ni: 13.0, Mo: 0, Nb: 0 },
    '310': { C: 0.15, Mn: 2.0, Si: 1.0, Cr: 25.0, Ni: 20.5, Mo: 0, Nb: 0 },
    '410': { C: 0.12, Mn: 0.8, Si: 0.5, Cr: 12.5, Ni: 0.5, Mo: 0, Nb: 0 },
    '430': { C: 0.10, Mn: 0.8, Si: 0.5, Cr: 17.0, Ni: 0.5, Mo: 0, Nb: 0 }
};

function initSchaeffler() {
    // 綁定輸入框事件
    const inputs = ['schC', 'schMn', 'schSi', 'schCr', 'schNi', 'schMo', 'schNb'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', () => {
                // 如果用戶手動修改，將預設值選單切換回 "自訂"
                document.getElementById('schPreset').value = 'custom';
                calculateSchaeffler();
            });
        }
    });

    // 綁定預設值選單事件
    const presetSelect = document.getElementById('schPreset');
    if (presetSelect) {
        presetSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            if (val !== 'custom' && steelPresets[val]) {
                const data = steelPresets[val];
                document.getElementById('schC').value = data.C;
                document.getElementById('schMn').value = data.Mn;
                document.getElementById('schSi').value = data.Si;
                document.getElementById('schCr').value = data.Cr;
                document.getElementById('schNi').value = data.Ni;
                document.getElementById('schMo').value = data.Mo;
                document.getElementById('schNb').value = data.Nb;
                calculateSchaeffler();
            }
        });
    }

    initSchaefflerChart();
}

// Image plugin for background\nconst backgroundImagePlugin = {\n    id: 'backgroundImage',\n    beforeDraw: (chart) => {\n        if (chart.config.options.plugins.backgroundImage && chart.config.options.plugins.backgroundImage.image) {\n            const { ctx, chartArea: { top, bottom, left, right, width, height } } = chart;\n            const image = chart.config.options.plugins.backgroundImage.image;\n            \n            if (image.complete) {\n                // Draw image to cover the entire chart area (or canvas if needed)\n                // Assuming the image contains the axes, we might want to fill the canvas,\n                // but usually chartArea is where the data lives. \n                // If the image HAS axes labels, drawing it in chartArea will duplicate labels.\n                // Strategies:\n                // 1. Draw image in chartArea and HIDE Chart.js axes. (Best for "using image as map")\n                // 2. Draw image full canvas and try to align chartArea. (Too hard)\n                // Let's go with 1: Draw in chartArea (stretch). \n                // This assumes the user's image is cropped to the grid. \n                // But looking at the uploaded image, it has labels.\n                // So we will try to draw it covering the chartArea mostly, but since we can't crop on the fly,\n                // we might just accept the labels are inside.\n                \n                ctx.drawImage(image, left, top, width, height);\n            } else {\n                image.onload = () => chart.draw();\n            }\n        }\n    }\n};\n\n// Register plugin locally not needed if passing in config, but good practice if global. We pass in config.\n\nfunction initSchaefflerChart() {\n    const ctx = document.getElementById('schaefflerChart')?.getContext('2d');\n    if (!ctx) return;\n\n    const bgImage = new Image();\n    bgImage.src = 'assets/schaeffler_bg.jpg';\n\n    const data = {\n        datasets: [\n            {\n                label: '預測點 (Predicted Point)',\n                data: [], // Initially empty\n                backgroundColor: '#ef4444', // Red-500\n                borderColor: '#ffffff',\n                borderWidth: 2,\n                pointRadius: 8,\n                pointHoverRadius: 10,\n                pointStyle: 'circle'\n            }\n        ]\n    };\n\n    schaefflerChartInstance = new Chart(ctx, {\n        type: 'scatter',\n        data: data,\n        options: {\n            responsive: true,\n            maintainAspectRatio: false,\n            scales: {\n                x: {\n                    type: 'linear',\n                    position: 'bottom',\n                    title: {\n                        display: true,\n                        text: '鉻當量 Cr_eq'\n                    },\n                    min: 0,\n                    max: 40, // Matches image X-axis max\n                    grid: {\n                        display: false // Hide grid to see background better\n                    }\n                },\n                y: {\n                    type: 'linear',\n                    position: 'left',\n                    title: {\n                        display: true,\n                        text: '鎳當量 Ni_eq'\n                    },\n                    min: 0,\n                    max: 32, // Matches image Y-axis max approx (28 + margin)\n                    grid: {\n                        display: false // Hide grid\n                    }\n                }\n            },\n            plugins: {\n                tooltip: {\n                    callbacks: {\n                        label: function (context) {\n                            return `Cr_eq: ${context.parsed.x.toFixed(2)}, Ni_eq: ${context.parsed.y.toFixed(2)}`;\n                        }\n                    }\n                },\n                backgroundImage: {\n                    image: bgImage\n                }\n            }\n        },\n        plugins: [backgroundImagePlugin]\n    });\n}

function calculateSchaeffler() {
    const getVal = (id) => parseFloat(document.getElementById(id).value) || 0;

    const C = getVal('schC');
    const Mn = getVal('schMn');
    const Si = getVal('schSi');
    const Cr = getVal('schCr');
    const Ni = getVal('schNi');
    const Mo = getVal('schMo');
    const Nb = getVal('schNb');

    // Formulas
    const crEq = Cr + Mo + (1.5 * Si) + (0.5 * Nb);
    const niEq = Ni + (30 * C) + (0.5 * Mn);

    // Update Text Results
    document.getElementById('resCrEq').textContent = crEq.toFixed(2);
    document.getElementById('resNiEq').textContent = niEq.toFixed(2);

    // Predict Phase
    // Simple logic based on Schaeffler regions
    /*
        Rough rules:
        Ni_eq > Cr_eq + X -> Austenite
        Ni_eq < ... -> Ferrite / Martensite
    */
    let prediction = "未知";
    // Very simplified check
    if (niEq > 20) prediction = "Austenite (沃斯田鐵)";
    else if (crEq > 20 && niEq < 5) prediction = "Ferrite (肥粒鐵)";
    else if (niEq > 8 && crEq > 16 && niEq < 20) prediction = "Austenite + Ferrite";
    else if (crEq < 10 && niEq < 10) prediction = "Martensite (麻田散鐵)";
    else prediction = "Mixed / Transition (混合/過渡區)";

    document.getElementById('resPhase').textContent = prediction;

    // Update Chart
    if (schaefflerChartInstance) {
        schaefflerChartInstance.data.datasets[0].data = [{ x: crEq, y: niEq }];
        schaefflerChartInstance.update();
    }
}
