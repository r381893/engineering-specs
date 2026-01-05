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
        localStorage.setItem('sop_documents', JSON.stringify(this.state.documents));
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
            this.showToast('文件已更新', 'success');
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
            this.showToast('文件已新增', 'success');
        }

        this.state.pendingImages = [];
        this.saveDocuments();
        this.showDocumentsView();
        this.closeModal('sopDocumentModal');
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
